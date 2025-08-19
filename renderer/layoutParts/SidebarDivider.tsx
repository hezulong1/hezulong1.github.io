import { cn } from '@/utils/classNames.ts';
import { divider } from './SidebarDivider.css.ts';

export function SidebarDivider({ className }: { className?: string | undefined }) {
  const classNames = cn([className, divider]);
  return (
    <div className={classNames} />
  );
}
