---
title: Projects - HeZulong
display: Projects
subtitle: 一些我参与过的项目
projects:
  Latest:
    - name: 'AppStyle'
      link: 'https://www.npmjs.com/package/@guanwei/app-style'
      desc: '多功能轻量级样式包，内部集成了兼容中英文的重置样式和两套响应式栅格系统'
      icon: ''
    - name: 'AppScript'
      link: 'https://www.npmjs.com/package/@guanwei/app-javascript'
      desc: '多功能轻量级脚本库，兼容服务端和客户端'
      icon: ''
    - name: 'WebComponents'
      link: 'https://www.npmjs.com/package/@vividcat/webcomponents'
      desc: '使用 webcomponents 技术编写的组件，目前仅仅是几个常用组件'
      icon: ''
    - name: 'Broom'
      link: 'https://www.npmjs.com/package/@vividcat/broom'
      desc: '脚本中各种格式化检测工具'
      icon: ''
    - name: 'resize-detector-typescript'
      link: 'https://www.npmjs.com/package/resize-detector-typescript'
      desc: '监听 dom 变化的方法，最低兼容 IE8'
      icon: ''
    - name: 'WebCamera'
      link: 'https://www.npmjs.com/package/web-camera.js'
      desc: '一款浏览器拍照工具，兼容支持 canvas（理论是 IE9）以上'
      icon: ''

  Layui Ecosystem:
    - name: 'Dropdown'
      link: 'https://hezulong1.gitee.io/layui-dropdown/'
      desc: '下拉组件，保持layui 风格，集成了 Popper.js'
      icon: ''
  
  Utilities / Websites:
    - name: 'Scrollbar'
      link: 'https://hezulong1.github.io/scrollbar/'
      desc: '一款基于 gemini-scrollbar 的虚拟滚动条。'
      icon: ''
  
---

<ListProjects :projects="frontmatter.projects"/>
