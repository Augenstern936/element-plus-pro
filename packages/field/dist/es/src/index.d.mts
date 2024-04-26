import * as _element_plus_pro_utils from '@element-plus/pro-utils';
import * as vue from 'vue';
import { PropType, CSSProperties, ExtractPropTypes, FunctionalComponent } from 'vue';
import * as element_plus from 'element-plus';
import { ISelectProps, TimePickerDefaultProps, DatePickerProps, InputProps } from 'element-plus';
import * as element_plus_es_utils from 'element-plus/es/utils';
import * as element_plus_es_components_cascader_panel_src_node from 'element-plus/es/components/cascader-panel/src/node';

declare const proFieldProgressProps: {
    style: {
        type: PropType<CSSProperties>;
        default: {};
    };
    type: element_plus_es_utils.EpPropFinalized<StringConstructor, "circle" | "line" | "dashboard", unknown, "line", boolean>;
    percentage: element_plus_es_utils.EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    status: element_plus_es_utils.EpPropFinalized<StringConstructor, "" | "success" | "warning" | "exception", unknown, "", boolean>;
    indeterminate: element_plus_es_utils.EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    duration: element_plus_es_utils.EpPropFinalized<NumberConstructor, unknown, unknown, 3, boolean>;
    strokeWidth: element_plus_es_utils.EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
    strokeLinecap: element_plus_es_utils.EpPropFinalized<(new (...args: any[]) => "square" | "round" | "inherit" | "butt") | (() => "square" | "round" | "inherit" | "butt") | ((new (...args: any[]) => "square" | "round" | "inherit" | "butt") | (() => "square" | "round" | "inherit" | "butt"))[], unknown, unknown, "round", boolean>;
    textInside: element_plus_es_utils.EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    width: element_plus_es_utils.EpPropFinalized<NumberConstructor, unknown, unknown, 126, boolean>;
    showText: element_plus_es_utils.EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    color: element_plus_es_utils.EpPropFinalized<(new (...args: any[]) => string | element_plus.ProgressFn | element_plus.ProgressColor[]) | (() => string | element_plus.ProgressFn | element_plus.ProgressColor[]) | ((new (...args: any[]) => string | element_plus.ProgressFn | element_plus.ProgressColor[]) | (() => string | element_plus.ProgressFn | element_plus.ProgressColor[]))[], unknown, unknown, "", boolean>;
    striped: BooleanConstructor;
    stripedFlow: BooleanConstructor;
    format: element_plus_es_utils.EpPropFinalized<(new (...args: any[]) => element_plus.ProgressFn) | (() => element_plus.ProgressFn) | {
        (): element_plus.ProgressFn;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => element_plus.ProgressFn) | (() => element_plus.ProgressFn) | {
        (): element_plus.ProgressFn;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, (percentage: number) => string, boolean>;
};
type ProFieldProgressProps = ExtractPropTypes<typeof proFieldProgressProps>;

declare const ProFieldProgress: FunctionalComponent<ProFieldProgressProps, {}, any, {}>;

declare const proFieldSliderProps: {
    style: {
        type: PropType<CSSProperties>;
        default: {};
    };
    modelValue: element_plus_es_utils.EpPropFinalized<(new (...args: any[]) => number | number[]) | (() => element_plus_es_utils.Arrayable<number>) | ((new (...args: any[]) => number | number[]) | (() => element_plus_es_utils.Arrayable<number>))[], unknown, unknown, 0, boolean>;
    id: element_plus_es_utils.EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    min: element_plus_es_utils.EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    max: element_plus_es_utils.EpPropFinalized<NumberConstructor, unknown, unknown, 100, boolean>;
    step: element_plus_es_utils.EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
    showInput: BooleanConstructor;
    showInputControls: element_plus_es_utils.EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    size: {
        readonly type: PropType<element_plus_es_utils.EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
    inputSize: {
        readonly type: PropType<element_plus_es_utils.EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
    showStops: BooleanConstructor;
    showTooltip: element_plus_es_utils.EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    formatTooltip: element_plus_es_utils.EpPropFinalized<(new (...args: any[]) => (val: number) => string | number) | (() => (val: number) => string | number) | {
        (): (val: number) => string | number;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (val: number) => string | number) | (() => (val: number) => string | number) | {
        (): (val: number) => string | number;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, undefined, boolean>;
    disabled: BooleanConstructor;
    range: BooleanConstructor;
    vertical: BooleanConstructor;
    height: StringConstructor;
    debounce: element_plus_es_utils.EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
    label: element_plus_es_utils.EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    rangeStartLabel: element_plus_es_utils.EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    rangeEndLabel: element_plus_es_utils.EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    formatValueText: element_plus_es_utils.EpPropFinalized<(new (...args: any[]) => (val: number) => string) | (() => (val: number) => string) | {
        (): (val: number) => string;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (val: number) => string) | (() => (val: number) => string) | {
        (): (val: number) => string;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, undefined, boolean>;
    tooltipClass: element_plus_es_utils.EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    placement: element_plus_es_utils.EpPropFinalized<StringConstructor, element_plus.Placement, unknown, "top", boolean>;
    marks: {
        readonly type: PropType<{
            [x: number]: element_plus_es_utils.EpPropMergeType<(new (...args: any[]) => string | {
                style: CSSProperties;
                label: any;
            }) | (() => string | {
                style: CSSProperties;
                label: any;
            }) | ((new (...args: any[]) => string | {
                style: CSSProperties;
                label: any;
            }) | (() => string | {
                style: CSSProperties;
                label: any;
            }))[], unknown, unknown>;
        }>;
        readonly required: false;
        readonly validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
    validateEvent: element_plus_es_utils.EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};
type ProFieldSliderProps = ExtractPropTypes<typeof proFieldSliderProps>;

declare const ProFieldSlider: FunctionalComponent<ProFieldSliderProps, {}, any, {}>;

declare const proFieldCascaderProps: {
    style: {
        type: PropType<CSSProperties>;
        default: {};
    };
    emptyValues: ArrayConstructor;
    valueOnClear: element_plus_es_utils.EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor, FunctionConstructor], unknown, unknown, undefined, boolean>;
    size: {
        readonly type: PropType<element_plus_es_utils.EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
    placeholder: StringConstructor;
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    filterable: BooleanConstructor;
    filterMethod: element_plus_es_utils.EpPropFinalized<(new (...args: any[]) => (node: element_plus.CascaderNode, keyword: string) => boolean) | (() => (node: element_plus.CascaderNode, keyword: string) => boolean) | {
        (): (node: element_plus.CascaderNode, keyword: string) => boolean;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (node: element_plus.CascaderNode, keyword: string) => boolean) | (() => (node: element_plus.CascaderNode, keyword: string) => boolean) | {
        (): (node: element_plus.CascaderNode, keyword: string) => boolean;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, (node: element_plus.CascaderNode, keyword: string) => boolean, boolean>;
    separator: element_plus_es_utils.EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    showAllLevels: element_plus_es_utils.EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    collapseTags: BooleanConstructor;
    maxCollapseTags: element_plus_es_utils.EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    collapseTagsTooltip: element_plus_es_utils.EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    debounce: element_plus_es_utils.EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    beforeFilter: element_plus_es_utils.EpPropFinalized<(new (...args: any[]) => (value: string) => boolean | Promise<any>) | (() => (value: string) => boolean | Promise<any>) | {
        (): (value: string) => boolean | Promise<any>;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (value: string) => boolean | Promise<any>) | (() => (value: string) => boolean | Promise<any>) | {
        (): (value: string) => boolean | Promise<any>;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => true, boolean>;
    popperClass: element_plus_es_utils.EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    teleported: element_plus_es_utils.EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    tagType: {
        default: string;
        type: PropType<element_plus_es_utils.EpPropMergeType<StringConstructor, "success" | "warning" | "info" | "primary" | "danger", unknown>>;
        required: false;
        validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
    validateEvent: element_plus_es_utils.EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    modelValue: {
        readonly type: PropType<element_plus_es_utils.EpPropMergeType<(new (...args: any[]) => string | number | element_plus_es_components_cascader_panel_src_node.CascaderNodePathValue | (element_plus_es_components_cascader_panel_src_node.CascaderNodeValue | element_plus_es_components_cascader_panel_src_node.CascaderNodePathValue)[]) | (() => element_plus_es_components_cascader_panel_src_node.CascaderValue) | ((new (...args: any[]) => string | number | element_plus_es_components_cascader_panel_src_node.CascaderNodePathValue | (element_plus_es_components_cascader_panel_src_node.CascaderNodeValue | element_plus_es_components_cascader_panel_src_node.CascaderNodePathValue)[]) | (() => element_plus_es_components_cascader_panel_src_node.CascaderValue))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
    options: element_plus_es_utils.EpPropFinalized<(new (...args: any[]) => element_plus.CascaderOption[]) | (() => element_plus.CascaderOption[]) | ((new (...args: any[]) => element_plus.CascaderOption[]) | (() => element_plus.CascaderOption[]))[], unknown, unknown, () => element_plus.CascaderOption[], boolean>;
    props: element_plus_es_utils.EpPropFinalized<(new (...args: any[]) => element_plus.CascaderProps) | (() => element_plus.CascaderProps) | ((new (...args: any[]) => element_plus.CascaderProps) | (() => element_plus.CascaderProps))[], unknown, unknown, () => element_plus.CascaderProps, boolean>;
};
type ProFieldCascaderProps = ExtractPropTypes<typeof proFieldCascaderProps>;

declare const ProFieldCascader: FunctionalComponent<ProFieldCascaderProps, {}, any, {}>;

declare const proFieldColor: {
    style: {
        type: PropType<CSSProperties>;
        default: {};
    };
    modelValue: StringConstructor;
    id: StringConstructor;
    showAlpha: BooleanConstructor;
    colorFormat: StringConstructor;
    disabled: BooleanConstructor;
    size: {
        readonly type: PropType<element_plus_es_utils.EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
    popperClass: element_plus_es_utils.EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    label: element_plus_es_utils.EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    tabindex: element_plus_es_utils.EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
    predefine: {
        readonly type: PropType<string[]>;
        readonly required: false;
        readonly validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
    validateEvent: element_plus_es_utils.EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};
type ProFieldColorProps = ExtractPropTypes<typeof proFieldColor>;

declare const ProFieldColor: FunctionalComponent<ProFieldColorProps, {}, any, {}>;

declare const proFieldRateProps: {
    style: {
        type: PropType<CSSProperties>;
        default: {};
    };
    modelValue: element_plus_es_utils.EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    id: element_plus_es_utils.EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    lowThreshold: element_plus_es_utils.EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
    highThreshold: element_plus_es_utils.EpPropFinalized<NumberConstructor, unknown, unknown, 4, boolean>;
    max: element_plus_es_utils.EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
    colors: element_plus_es_utils.EpPropFinalized<(new (...args: any[]) => string[] | Record<number, string>) | (() => string[] | Record<number, string>) | ((new (...args: any[]) => string[] | Record<number, string>) | (() => string[] | Record<number, string>))[], unknown, unknown, () => ["", "", ""], boolean>;
    voidColor: element_plus_es_utils.EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    disabledVoidColor: element_plus_es_utils.EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    icons: element_plus_es_utils.EpPropFinalized<(new (...args: any[]) => (string | vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions>)[] | Record<number, string | vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions>>) | (() => (string | vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions>)[] | Record<number, string | vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions>>) | ((new (...args: any[]) => (string | vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions>)[] | Record<number, string | vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions>>) | (() => (string | vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions>)[] | Record<number, string | vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions>>))[], unknown, unknown, () => [vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions>, vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions>, vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions>], boolean>;
    voidIcon: element_plus_es_utils.EpPropFinalized<(new (...args: any[]) => (string | vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions>) & {}) | (() => string | vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions>) | ((new (...args: any[]) => (string | vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions>) & {}) | (() => string | vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions>))[], unknown, unknown, () => vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions>, boolean>;
    disabledVoidIcon: element_plus_es_utils.EpPropFinalized<(new (...args: any[]) => (string | vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions>) & {}) | (() => string | vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions>) | ((new (...args: any[]) => (string | vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions>) & {}) | (() => string | vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions>))[], unknown, unknown, () => vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions>, boolean>;
    disabled: BooleanConstructor;
    allowHalf: BooleanConstructor;
    showText: BooleanConstructor;
    showScore: BooleanConstructor;
    textColor: element_plus_es_utils.EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    texts: element_plus_es_utils.EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => ["Extremely bad", "Disappointed", "Fair", "Satisfied", "Surprise"], boolean>;
    scoreTemplate: element_plus_es_utils.EpPropFinalized<StringConstructor, unknown, unknown, "{value}", boolean>;
    size: {
        readonly type: PropType<element_plus_es_utils.EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
    label: element_plus_es_utils.EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    clearable: element_plus_es_utils.EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
};
type ProFieldRateProps = ExtractPropTypes<typeof proFieldRateProps>;

declare const ProFieldRate: FunctionalComponent<ProFieldRateProps, {}, any, {}>;

declare const proFieldImageProps: {
    style: {
        type: PropType<CSSProperties>;
        default: {};
    };
    hideOnClickModal: BooleanConstructor;
    src: element_plus_es_utils.EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    fit: element_plus_es_utils.EpPropFinalized<StringConstructor, "" | "fill" | "none" | "cover" | "contain" | "scale-down", unknown, "", boolean>;
    loading: {
        readonly type: PropType<element_plus_es_utils.EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
        readonly required: false;
        readonly validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
    lazy: BooleanConstructor;
    scrollContainer: {
        readonly type: PropType<element_plus_es_utils.EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
    previewSrcList: element_plus_es_utils.EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    previewTeleported: BooleanConstructor;
    zIndex: {
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
    initialIndex: element_plus_es_utils.EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    infinite: element_plus_es_utils.EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    closeOnPressEscape: element_plus_es_utils.EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    zoomRate: element_plus_es_utils.EpPropFinalized<NumberConstructor, unknown, unknown, 1.2, boolean>;
    minScale: element_plus_es_utils.EpPropFinalized<NumberConstructor, unknown, unknown, 0.2, boolean>;
    maxScale: element_plus_es_utils.EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
    crossorigin: {
        readonly type: PropType<element_plus_es_utils.EpPropMergeType<(new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
};
type ProFieldImageProps = ExtractPropTypes<typeof proFieldImageProps>;

declare const ProFieldImage: FunctionalComponent<ProFieldImageProps, {}, any, {}>;

declare const proFieldAvatar: {
    style: {
        type: PropType<CSSProperties>;
        default: {};
    };
    size: element_plus_es_utils.EpPropFinalized<readonly [NumberConstructor, StringConstructor], "" | "default" | "small" | "large", number, "", boolean>;
    shape: element_plus_es_utils.EpPropFinalized<StringConstructor, "circle" | "square", unknown, "circle", boolean>;
    icon: {
        readonly type: PropType<unknown>;
        readonly required: false;
        readonly validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
    src: element_plus_es_utils.EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    alt: StringConstructor;
    srcSet: StringConstructor;
    fit: element_plus_es_utils.EpPropFinalized<(new (...args: any[]) => any) | (() => ObjectFitProperty) | ((new (...args: any[]) => any) | (() => ObjectFitProperty))[], unknown, unknown, "cover", boolean>;
};
type ProFieldAvatarProps = ExtractPropTypes<typeof proFieldAvatar>;

declare const ProFieldAvatar: FunctionalComponent<ProFieldAvatarProps, {}, any, {}>;

declare const proFieldSwitchProps: {
    style: {
        type: PropType<CSSProperties>;
        default: {};
    };
    modelValue: element_plus_es_utils.EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, false, boolean>;
    disabled: element_plus_es_utils.EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    loading: element_plus_es_utils.EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    size: {
        readonly type: PropType<element_plus_es_utils.EpPropMergeType<(new (...args: any[]) => "" | "default" | "small" | "large") | (() => "" | "default" | "small" | "large") | ((new (...args: any[]) => "" | "default" | "small" | "large") | (() => "" | "default" | "small" | "large"))[], unknown, "" | "default" | "small" | "large">>;
        readonly required: false;
        readonly validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
    width: element_plus_es_utils.EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    inlinePrompt: element_plus_es_utils.EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    inactiveActionIcon: {
        readonly type: PropType<unknown>;
        readonly required: false;
        readonly validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
    activeActionIcon: {
        readonly type: PropType<unknown>;
        readonly required: false;
        readonly validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
    activeIcon: {
        readonly type: PropType<unknown>;
        readonly required: false;
        readonly validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
    inactiveIcon: {
        readonly type: PropType<unknown>;
        readonly required: false;
        readonly validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
    activeText: element_plus_es_utils.EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    inactiveText: element_plus_es_utils.EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    activeValue: element_plus_es_utils.EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, true, boolean>;
    inactiveValue: element_plus_es_utils.EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, false, boolean>;
    name: element_plus_es_utils.EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    validateEvent: element_plus_es_utils.EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    beforeChange: {
        readonly type: PropType<() => boolean | Promise<boolean>>;
        readonly required: false;
        readonly validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
    id: StringConstructor;
    tabindex: {
        readonly type: PropType<element_plus_es_utils.EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
    label: element_plus_es_utils.EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
};
type ProFieldSwitchProps = ExtractPropTypes<typeof proFieldSwitchProps>;

declare const ProFieldSwitch: FunctionalComponent<ProFieldSwitchProps, {}, any, {}>;

type Option = {
    label?: string;
    value: string | number | boolean;
    [x: string]: any;
};

declare const proFieldRadioProps: {
    type: {
        type: PropType<"radio" | "radioButton">;
        default: string;
    };
    options: {
        type: PropType<Option[]>;
        default: any[];
    };
    style: {
        type: PropType<CSSProperties>;
        default: {};
    };
    border: BooleanConstructor;
    modelValue: element_plus_es_utils.EpPropFinalized<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown, undefined, boolean>;
    size: {
        readonly type: PropType<element_plus_es_utils.EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    label: element_plus_es_utils.EpPropFinalized<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown, undefined, boolean>;
    value: element_plus_es_utils.EpPropFinalized<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown, undefined, boolean>;
    name: element_plus_es_utils.EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
};
type ProFieldRadioProps = ExtractPropTypes<typeof proFieldRadioProps>;

declare const ProFieldRadio: FunctionalComponent<ProFieldRadioProps, {}, any, {}>;

declare const proFieldCheckboxProps: {
    type: {
        type: PropType<"checkbox" | "checkboxButton">;
        default: string;
    };
    options: {
        type: PropType<Option[]>;
        default: any[];
    };
    style: {
        type: PropType<CSSProperties>;
        default: {};
    };
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    label: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor | ObjectConstructor)[];
        default: undefined;
    };
    value: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor | ObjectConstructor)[];
        default: undefined;
    };
    indeterminate: BooleanConstructor;
    disabled: BooleanConstructor;
    checked: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: undefined;
    };
    trueValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    falseValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    trueLabel: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    falseLabel: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    id: {
        type: StringConstructor;
        default: undefined;
    };
    controls: {
        type: StringConstructor;
        default: undefined;
    };
    border: BooleanConstructor;
    size: {
        readonly type: PropType<element_plus_es_utils.EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
    tabindex: (StringConstructor | NumberConstructor)[];
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type ProFieldCheckboxProps = ExtractPropTypes<typeof proFieldCheckboxProps>;

declare const ProFieldCheckbox: FunctionalComponent<ProFieldCheckboxProps, {}, any, {}>;

interface ProFieldTreeSelectProps extends Omit<ISelectProps, "options"> {
    options?: {
        label?: string;
        value: string | number | boolean | Record<string, any>;
        [x: string]: any;
    }[];
    style?: CSSProperties;
}

declare const ProFieldTreeSelect: FunctionalComponent<ProFieldTreeSelectProps, {}, any, {}>;

interface ProSelectProps extends Omit<ISelectProps, "options"> {
    options?: {
        label?: string;
        value: string | number | boolean | Record<string, any>;
        [x: string]: any;
    }[];
    style?: CSSProperties;
}

interface BaseTimePickerProps extends TimePickerDefaultProps {
    style?: CSSProperties;
}
type ProFieldTimeProps = Omit<BaseTimePickerProps, "isRange">;
type ProFieldTimeRangeProps = Omit<BaseTimePickerProps, "isRange">;

interface BaseDateProps extends Omit<DatePickerProps, "placeholder" | "startPlaceholder" | "endPlaceholder"> {
    placeholder?: string | [string] | [string, string];
    style?: CSSProperties;
}
type ProFieldDateProps = Omit<BaseDateProps, "type">;
type ProFieldDatesProps = Omit<BaseDateProps, "type">;
type ProFieldDateTimeProps = Omit<BaseDateProps, "type">;
type ProFieldDateWeekProps = Omit<BaseDateProps, "type">;
type ProFieldDateMonthProps = Omit<BaseDateProps, "type">;
type ProFieldDateYearProps = Omit<BaseDateProps, "type">;
type ProFieldDateRangeProps = Omit<BaseDateProps, "type">;
type ProFieldDateTimeRangeProps = Omit<BaseDateProps, "type">;
type ProFieldDateMonthRangeProps = Omit<BaseDateProps, "type">;

interface ProFieldInputProps extends InputProps {
    type: "text" | "password" | "textarea";
    style?: CSSProperties;
}
type ProFieldTextProps = Omit<ProFieldInputProps, "type">;
type ProFieldPasswordProps = Omit<ProFieldInputProps, "type">;
type ProFieldTextareaProps = Omit<ProFieldInputProps, "type">;

declare const components: {
    text: (props: ProFieldTextProps) => any;
    password: (props: ProFieldPasswordProps) => any;
    textarea: (props: ProFieldTextareaProps) => any;
    date: (props: ProFieldDateProps) => any;
    dates: (props: ProFieldDatesProps) => any;
    dateTime: (props: ProFieldDateTimeProps) => any;
    dateWeek: (props: ProFieldDateWeekProps) => any;
    dateMonth: (props: ProFieldDateMonthProps) => any;
    dateYear: (props: ProFieldDateYearProps) => any;
    dateRange: (props: ProFieldDateRangeProps) => any;
    dateTimeRange: (props: ProFieldDateTimeRangeProps) => any;
    dateMonthRange: (props: ProFieldDateMonthRangeProps) => any;
    time: (props: ProFieldTimeProps) => any;
    timeRange: (props: ProFieldTimeRangeProps) => any;
    select: vue.FunctionalComponent<ProSelectProps, {}, any, {}>;
    treeSelect: vue.FunctionalComponent<ProFieldTreeSelectProps, {}, any, {}>;
    checkbox: vue.FunctionalComponent<ProFieldCheckboxProps, {}, any, {}>;
    radio: vue.FunctionalComponent<ProFieldRadioProps, {}, any, {}>;
    radioButton: vue.FunctionalComponent<ProFieldRadioProps, {}, any, {}>;
    switch: vue.FunctionalComponent<ProFieldSwitchProps, {}, any, {}>;
    avatar: vue.FunctionalComponent<ProFieldAvatarProps, {}, any, {}>;
    image: vue.FunctionalComponent<ProFieldImageProps, {}, any, {}>;
    rate: vue.FunctionalComponent<ProFieldRateProps, {}, any, {}>;
    color: vue.FunctionalComponent<ProFieldColorProps, {}, any, {}>;
    cascader: vue.FunctionalComponent<ProFieldCascaderProps, {}, any, {}>;
    slider: vue.FunctionalComponent<ProFieldSliderProps, {}, any, {}>;
    progress: vue.FunctionalComponent<ProFieldProgressProps, {}, any, {}>;
};

declare const proFieldProps: {
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: string;
    };
    mode: {
        type: PropType<"read" | "edit">;
        default: string;
    };
    valueType: {
        type: PropType<"text" | "date" | "dates" | "checkbox" | "radio" | "radioButton" | "color" | "password" | "textarea" | "dateTime" | "dateWeek" | "dateMonth" | "dateYear" | "dateRange" | "dateTimeRange" | "dateMonthRange" | "time" | "timeRange" | "select" | "treeSelect" | "switch" | "avatar" | "image" | "rate" | "cascader" | "slider" | "progress">;
        default: string;
    };
    placeholder: {
        type: (StringConstructor | PropType<[string] | [string, string]>)[];
    };
    fieldProps: {
        type: PropType<Record<string, unknown>>;
        default: {};
    };
};
type ValueType = keyof typeof components;
type ProFieldProps = Partial<ExtractPropTypes<typeof proFieldProps>>;
declare const _default: _element_plus_pro_utils.SFCWithInstall<FunctionalComponent<Partial<ExtractPropTypes<{
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: string;
    };
    mode: {
        type: PropType<"read" | "edit">;
        default: string;
    };
    valueType: {
        type: PropType<"text" | "date" | "dates" | "checkbox" | "radio" | "radioButton" | "color" | "password" | "textarea" | "dateTime" | "dateWeek" | "dateMonth" | "dateYear" | "dateRange" | "dateTimeRange" | "dateMonthRange" | "time" | "timeRange" | "select" | "treeSelect" | "switch" | "avatar" | "image" | "rate" | "cascader" | "slider" | "progress">;
        default: string;
    };
    placeholder: {
        type: (StringConstructor | PropType<[string] | [string, string]>)[];
    };
    fieldProps: {
        type: PropType<Record<string, unknown>>;
        default: {};
    };
}>>, {}, any, {}>> & Record<string, any>;

export { _default as ProField, ProFieldAvatar, type ProFieldAvatarProps, ProFieldCascader, type ProFieldCascaderProps, ProFieldCheckbox, type ProFieldCheckboxProps, ProFieldColor, type ProFieldColorProps, ProFieldImage, type ProFieldImageProps, ProFieldProgress, type ProFieldProgressProps, type ProFieldProps, ProFieldRadio, type ProFieldRadioProps, ProFieldRate, type ProFieldRateProps, ProFieldSlider, type ProFieldSliderProps, ProFieldSwitch, type ProFieldSwitchProps, ProFieldTreeSelect, type ProFieldTreeSelectProps, type ValueType, components, _default as default, proFieldAvatar, proFieldCascaderProps, proFieldCheckboxProps, proFieldColor, proFieldImageProps, proFieldProgressProps, proFieldProps, proFieldRadioProps, proFieldRateProps, proFieldSliderProps, proFieldSwitchProps };
