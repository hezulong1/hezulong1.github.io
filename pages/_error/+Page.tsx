import { usePageContext } from '@/renderer/usePageContext.tsx';

export function Page() {
  const pageContext = usePageContext();
  let { is404, abortReason } = pageContext;
  if (!abortReason) {
    abortReason = is404 ? '404 | 未找到当前页面' : '发生些许错误';
  }
  return (
    <div>
      <small style={{ fontSize: '12px' }}>{abortReason}</small>
    </div>
  );
}
