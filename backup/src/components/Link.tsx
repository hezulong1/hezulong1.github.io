import { usePageContext } from 'vike-react/usePageContext';

export interface LinkProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {

}

export function Link(props: LinkProps) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const { href = '' } = props;
  const isActive = href === '/' ? urlPathname === href : urlPathname.startsWith(href);
  const className = [props.className, isActive && 'is-active'].filter(Boolean).join(' ');
  return (
    <a {...props} className={className} />
  );
}
