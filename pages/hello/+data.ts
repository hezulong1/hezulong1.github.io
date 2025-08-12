// https://vike.dev/data

import type { PageContextServer } from 'vike/types';
import { render } from 'vike/abort';
import { names } from './names';

export function data(pageContext: PageContextServer) {
  const { name } = pageContext.routeParams;
  if (name !== 'anonymous' && !names.includes(name)) {
    throw render(404, `Unknown name: ${name}.`);
  }
  return { name };
}

export type Data = ReturnType<typeof data>;
