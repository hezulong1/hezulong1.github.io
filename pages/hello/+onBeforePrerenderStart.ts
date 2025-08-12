// https://vike.dev/onBeforePrerenderStart

import type { OnBeforePrerenderStartAsync } from 'vike/types';
import { names } from './names';

export const onBeforePrerenderStart: OnBeforePrerenderStartAsync = async (): ReturnType<OnBeforePrerenderStartAsync> => ['/hello', ...names.map(name => `/hello/${name}`)];
