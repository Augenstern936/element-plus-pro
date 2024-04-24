import { series } from 'gulp';
import { buildModules } from './modules';
import dts from './dts';

export default series(buildModules, dts) as unknown;
