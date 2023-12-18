export type ProTabsProps = {
	modelValue?: string | number;
	tabsProps?: Record<string, any>;
	panes: TabsPane[];
	empty?: boolean;
	beforeChange?: () => boolean;
};

export type TabsPane = {
	name: string | number;
	label: string;
	badge?: string | number;
	render?: TabsPaneRender;
	[x: string]: any;
};

export type TabsPaneRender = RenderResult | (() => RenderResult);

type RenderResult = string | number | JSX.Element;
