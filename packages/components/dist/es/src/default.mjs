import ProCenterContainer__default from "@element-plus/pro-center-container";
import ProField$1 from "../field/dist/es/src/Field.mjs";
import ProSearchBar__default from "@element-plus/pro-search-bar";
import ProTabs__default from "@element-plus/pro-tabs";
import markInstaller from "./mark-installer.mjs";
const installer = markInstaller({
  ProTabs: ProTabs__default,
  ProField: ProField$1,
  // ProTable,
  // ProButton,
  ProSearchBar: ProSearchBar__default,
  ProCenterContainer: ProCenterContainer__default
});
export {
  installer as default
};
