import { series } from "gulp";
import { buildModules } from "../../vites/build";

export default series(buildModules) as unknown;
