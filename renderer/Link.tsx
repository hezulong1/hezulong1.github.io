import { cn } from '@/utils/classNames.ts';
import { usePageContext } from './usePageContext.tsx';
import { link, linkActive } from './Link.css.ts';

type LinkProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export function Link(props: LinkProps) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const { href = '' } = props;
  const isActive = href === '/' ? urlPathname === href : urlPathname.startsWith(href);
  return <a {...props} className={cn([props.className, link, isActive && linkActive])} />;
}
