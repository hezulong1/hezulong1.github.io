import { assignInlineVars } from '@vanilla-extract/dynamic';
import { Link } from '../Link.tsx';
import { CopyRight } from './CopyRight.tsx';
import { Logo } from './Logo.tsx';
import { container as logoContainer } from './Logo.css.ts';
import { usePageContext } from '../usePageContext.tsx';
import { container, copyRight } from './Sidebar.css.ts';
import { varArrowTop } from './SidebarDivider.css.ts';
import { useEffect, useRef, useState } from 'react';

const linkOptions = [
  { title: 'Writing', href: '/' },
  { title: '代码', href: '/star-code' },
  { title: '小说', href: '/markdown' },
  { title: '诗词', href: '/markdown1' },
  { title: '鸡汤', href: '/hello' },
];

export function Sidebar() {
  return (
    <div
      id="sidebar"
      className={container}
    >
      <Logo />
      {
        linkOptions.map(opt => <Link href={opt.href} key={opt.href}>{opt.title}</Link>)
      }
      <CopyRight className={copyRight} />
    </div>
  );
}
