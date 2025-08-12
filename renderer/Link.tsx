import { usePageContext } from './usePageContext';
import * as css from './Link.css';

type LinkProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export function Link(props: LinkProps) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const { href = '' } = props;
  const isActive = href === '/' ? urlPathname === href : urlPathname.startsWith(href);
  const className = [props.className, css.link, isActive && css.linkActive].filter(Boolean).join(' ');
  return <a {...props} className={className} />;
}
