import { container } from './PageContent.css.ts';

export function PageContent({ children }: { children: React.ReactNode }) {
  return (
    <div id="page" className={container}>
      <div id="page-content">
        {children}
      </div>
    </div>
  );
}
