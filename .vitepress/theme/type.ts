interface NavItemWithLink {
  text: string;
  link: string;
  items?: never;
  activeMatch?: string;
}

export namespace MyTheme {
  export type NavItem = NavItemWithLink;

  export interface Post {
    title: string;
    date: string;
    url: string;
  }
  export type PostCategory = 'writing' | 'article';

  export interface Config {
    nav?: NavItem[];
    github?: string;
  }
}
