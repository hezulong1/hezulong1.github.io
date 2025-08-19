import type { PageContext } from 'vike/types';
// CSS First
import './css/index.css.ts';

import React from 'react';
import { PageContextProvider } from './usePageContext.tsx';
import { Sidebar } from './layoutParts/Sidebar.tsx';
import { PageContent } from './layoutParts/PageContent.tsx';

import { frame } from './Layout.css.ts';

interface LayoutProps {
  pageContext: PageContext;
  children: React.ReactNode;
}

export function Layout({ pageContext, children }: LayoutProps) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <div className={frame}>
          <Sidebar />
          <PageContent>{children}</PageContent>
        </div>
      </PageContextProvider>
    </React.StrictMode>
  );
}
