import { cn } from '@/utils/classNames.ts';
import { container } from './CopyRight.css.ts';

export function CopyRight({ className }: { className?: string | undefined }) {
  return (
    <div className={cn([container, className])}>
      <span>&copy; 2018-present HeZulong</span>
    </div>
  );
}
