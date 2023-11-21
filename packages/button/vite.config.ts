import { defineConfig } from "vite";
import baseCongfig from "../../vites/build.base.config";

export default defineConfig(async ({command, mode}): Promise<any> => {
    return baseCongfig();
});