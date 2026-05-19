#!/usr/bin/env node

import path from 'node:path';
import os from 'node:os';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

import { Cluster } from 'puppeteer-cluster';
import dayjs from 'dayjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BOOKMAKR_PATH = getBookmarkPath();
const OUTPUT_PATH = path.join(__dirname, '../.vitepress/meta/bookmarks.json');
const BLACKLIST = [
  /chrome:\/\//,
  /localhost/,
  /127\.0\.0\.1/,
  /91360\.com/,
  /lanhuapp\.com/,
  /192\.168/,
];

ensureFile(OUTPUT_PATH);
main().catch(console.error);

async function main() {
  const raw = JSON.parse(fs.readFileSync(BOOKMAKR_PATH, 'utf8'));
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    maxConcurrency: 5,
    puppeteerOptions: { headless: 'new' },
  });
  const result = [];

  function walk(nodes, pathStack = []) {
    nodes.forEach((node) => {
      if (node.type === 'folder') {
        walk(node.children, [...pathStack, node.name]);
      } else if (node.type === 'url') {
        const url = node.url;

        if (BLACKLIST.some(re => re.test(url))) return;

        result.push({
          name: node.name,
          url,
          tag: pathStack.length > 1 ? pathStack.join('/') : '书签栏',
          date_added: formatTime(node.date_added),
          date_last_used: formatTime(node.date_last_used),
        });
      }
    });
  }

  walk(raw.roots.bookmark_bar.children);

  const finalData = [];

  await cluster.task(async ({ page, data: item }) => {
    const viewportSize = { width: 1440, height: 810 };

    try {
      await page.setViewport(viewportSize); // 初始窗口就小，减小计算量
      await page.goto(item.url, { waitUntil: 'networkidle2', timeout: 15000 });

      // 关键：生成极小的 WebP (质量30，宽度200)
      const base64 = await page.screenshot({
        type: 'webp',
        quality: 20, // 极低质量，肉眼可辨即可
        encoding: 'base64',
        clip: { x: 0, y: 0, ...viewportSize },
      });
      item.screenshot = `data:image/webp;base64,${base64}`;
    } catch (e) {
      item.screenshot = null; // 失败则留空
    }
    finalData.push(item);
    console.log(`已处理: ${item.name}`);
  });

  result.slice(0, 10).forEach(x => cluster.queue(x));

  await cluster.idle();
  await cluster.close();

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(finalData, null, 2));
  console.log('JSON 数据生成成功！');
}

/**
 * Chromium（Chrome、Edge 等）使用的 WebKit 时间戳（也叫 Windows File Time 变体）与 JavaScript 默认的 Unix 时间戳格式不同：
 *
 * - Unix 时间戳 (JS)：从 1970-01-01 开始，单位是毫秒。
 * - WebKit 时间戳：从 1601-01-01 开始，单位是微秒（百万分之一秒）。
 *
 * 二者存在一个偏移量：1601年到1970年之间相差约 11,644,473,600 秒，将微秒除以 1000 变为毫秒。
 *
 * @param {string} webkitTime
 */
function formatTime(webkitTime) {
  if (!webkitTime || webkitTime === '0') return;
  const ms = Number((BigInt(webkitTime) - BigInt('11644473600000000')) / 1000n);
  return dayjs(ms).format();
}

function getBookmarkPath() {
  const platform = process.platform;
  const args = process.argv.slice(2);
  const homeDir = os.homedir();
  const localAppDataPath = process.env.LOCALAPPDATA || path.join(homeDir, 'AppData/Local');

  const target = args.find(a => a.startsWith('--target'));
  if (target) {
    const value = target.split('=')[1];
    if (value) {
      return value.trim();
    }
  }

  const baseDir = platform === 'win32'
    ? path.join(localAppDataPath, '/Google/Chrome/User Data')
    : platform === 'darwin'
      ? path.join(homeDir, 'Library/Application Support/Google/Chrome')
      : '';

  const profiles = ['Default', ...Array.from({ length: 9 }).map((_, i) => `Profile ${i + 1}`)];

  for (const profile of profiles) {
    const fullPath = path.join(baseDir, profile, 'Bookmarks');
    if (fs.existsSync(fullPath)) {
      return fullPath;
    }
  }

  throw new Error('无法自动定位 Chrome 书签文件，请检查 Chrome 是否安装在标准路径。');
}

function ensureFile(filePath) {
  const dirPath = path.dirname(filePath);

  // 确保目录存在
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // 确保文件存在
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '', 'utf8'); // 创建空文件
  }
}
