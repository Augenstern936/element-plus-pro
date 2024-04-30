import * as _element_plus_pro_utils from '@element-plus/pro-utils';
import { FunctionalComponent, Component } from 'vue';
import { JSX } from 'vue/jsx-runtime';

declare const _default: _element_plus_pro_utils.SFCWithInstall<FunctionalComponent<{}, {}, any, {}>> & Record<string, any>;

type ProTabsProps = {
    modelValue?: string | number;
    tabsProps?: Record<string, any>;
    panes: TabsPane[];
    activeColor?: string;
    inactiveColor?: string;
    empty?: Empty;
    beforeChange?: () => boolean;
};
type TabsPane = {
    label: string;
    value: string | number;
    badge?: string | number;
    empty?: Empty;
    props?: Record<string, any>;
    render?: TabsPaneRender;
};
type TabsPaneRender = (props?: Record<string, any>) => TabsPaneRenderResult;
type Empty = boolean | string | number | JSX.Element | Component;
type TabsPaneRenderResult = Exclude<Empty, boolean>;

export { type Empty, _default as ProTabs, type ProTabsProps, type TabsPane, type TabsPaneRender, type TabsPaneRenderResult, _default as default };
