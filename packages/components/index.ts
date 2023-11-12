import { markInstaller } from "./mark-installer";
import components from "./src/components";

const lib = markInstaller(components);

export const version = lib.version;
export const install = lib.install;

export * from "./src";

export default lib;