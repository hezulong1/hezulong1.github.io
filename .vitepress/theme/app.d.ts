export interface ThemeConfig {
  github: string;
  cnblog?: string;
}

export interface Post {
  url: string;
  title?: string;
  layout?: string;
  summary?: string;
  tags?: string[];
  date?: string;
  draft?: boolean;
  lastUpdate?: string;
  category?: string;
  [k: string]: any;
}

export interface PostHeader {
  level: number;
  title: string;
  /**
   * Link of the header
   *
   * Typically using `#${slug}` as the anchor hash
   */
  link: string;
  /**
   * The slug of the header
   *
   * Typically the `id` attr of the header anchor
   */
  slug: string;
  children: PostHeader[];
}

export interface PostOutlineItem extends Omit<PostHeader, 'slug' | 'children'> {
  element: HTMLHeadElement;
  children?: PostOutlineItem[];
}
