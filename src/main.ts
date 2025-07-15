import '@/styles/reset.scss';
import '@/styles/main.scss';

import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import { setupApp } from './App';

dayjs.extend(LocalizedFormat);

setupApp();
