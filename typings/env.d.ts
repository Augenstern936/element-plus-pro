/*
 * @Description:
 * @Date: 2024-04-10 17:30:49
 * @LastEditTime: 2024-04-25 17:15:26
 */
import { INSTALLED_KEY } from "element-plus";
import type { Component, vShow } from "vue";
import { JSX as VueJsx } from "vue/jsx-runtime";

declare global {
  const process: {
    env: {
      NODE_ENV: string;
    };
  };

  namespace JSX {
    interface Element extends VueJsx.Element {}
    interface ElementClass extends VueJsx.ElementClass {}
    interface IntrinsicElements extends VueJsx.IntrinsicElements {}
    interface IntrinsicAttributes extends VueJsx.IntrinsicAttributes {}
    interface ElementAttributesProperty extends VueJsx.ElementAttributesProperty {}
  }
}

declare module "@vue/runtime-core" {
  export interface App {
    [INSTALLED_KEY]?: boolean;
  }

  export interface GlobalComponents {
    Component: (props: { is: Component | string }) => void;
  }

  export interface ComponentCustomProperties {
    vShow: typeof vShow;
  }
}

export {};
