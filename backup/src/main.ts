import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import { setupApp } from './App.tsx';

dayjs.extend(LocalizedFormat);

setupApp();
