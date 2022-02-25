import type { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void
export interface FrontMatter {
  title: string
  subtitle?: string
  description?: string
  date?: Date
  display?: string
  type?: string
  duration?: string
  draft?: boolean
  lang?: string
  [key: string]: any
}
