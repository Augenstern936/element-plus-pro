export * from './typing';
declare const ProButton: import("@element-plus/pro-utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<{
            readonly size?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>;
            readonly disabled?: boolean;
            readonly type?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown>;
            readonly icon?: unknown;
            readonly nativeType?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "button" | "reset" | "submit", unknown>;
            readonly loading?: boolean;
            readonly loadingIcon?: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
            readonly plain?: boolean;
            readonly text?: boolean;
            readonly link?: boolean;
            readonly bg?: boolean;
            readonly autofocus?: boolean;
            readonly round?: boolean;
            readonly circle?: boolean;
            readonly color?: string;
            readonly dark?: boolean;
            readonly autoInsertSpace?: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly tag?: "button";
            readonly tip?: string | import("./typing").TipConfig;
            readonly render?: string;
            onClick?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            tip: {
                type: import("vue").PropType<string | import("./typing").TipConfig>;
            };
            render: {
                type: import("vue").PropType<string>;
            };
            readonly disabled: {
                type: import("vue").PropType<boolean>;
            };
            readonly type: {
                type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown>>;
            };
            readonly nativeType: {
                type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "button" | "reset" | "submit", unknown>>;
            };
            readonly loading: {
                type: import("vue").PropType<boolean>;
            };
            readonly loadingIcon: {
                type: import("vue").PropType<import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>>;
            };
            readonly plain: {
                type: import("vue").PropType<boolean>;
            };
            readonly text: {
                type: import("vue").PropType<boolean>;
            };
            readonly link: {
                type: import("vue").PropType<boolean>;
            };
            readonly bg: {
                type: import("vue").PropType<boolean>;
            };
            readonly autofocus: {
                type: import("vue").PropType<boolean>;
            };
            readonly round: {
                type: import("vue").PropType<boolean>;
            };
            readonly circle: {
                type: import("vue").PropType<boolean>;
            };
            readonly dark: {
                type: import("vue").PropType<boolean>;
            };
            readonly tag: {
                type: import("vue").PropType<"button">;
            };
            readonly size: {
                type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            };
            readonly icon: {
                type: import("vue").PropType<unknown>;
            };
            readonly color: {
                type: import("vue").PropType<string>;
            };
            readonly autoInsertSpace: {
                type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
            };
        }>> & {
            onClick?: (...args: any[]) => any;
        }, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: "click", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            tip: {
                type: import("vue").PropType<string | import("./typing").TipConfig>;
            };
            render: {
                type: import("vue").PropType<string>;
            };
            readonly disabled: {
                type: import("vue").PropType<boolean>;
            };
            readonly type: {
                type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown>>;
            };
            readonly nativeType: {
                type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "button" | "reset" | "submit", unknown>>;
            };
            readonly loading: {
                type: import("vue").PropType<boolean>;
            };
            readonly loadingIcon: {
                type: import("vue").PropType<import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>>;
            };
            readonly plain: {
                type: import("vue").PropType<boolean>;
            };
            readonly text: {
                type: import("vue").PropType<boolean>;
            };
            readonly link: {
                type: import("vue").PropType<boolean>;
            };
            readonly bg: {
                type: import("vue").PropType<boolean>;
            };
            readonly autofocus: {
                type: import("vue").PropType<boolean>;
            };
            readonly round: {
                type: import("vue").PropType<boolean>;
            };
            readonly circle: {
                type: import("vue").PropType<boolean>;
            };
            readonly dark: {
                type: import("vue").PropType<boolean>;
            };
            readonly tag: {
                type: import("vue").PropType<"button">;
            };
            readonly size: {
                type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            };
            readonly icon: {
                type: import("vue").PropType<unknown>;
            };
            readonly color: {
                type: import("vue").PropType<string>;
            };
            readonly autoInsertSpace: {
                type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
            };
        }>> & {
            onClick?: (...args: any[]) => any;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (...args: any[]) => void;
        }, string, {}, {}, string, {}> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        tip: {
            type: import("vue").PropType<string | import("./typing").TipConfig>;
        };
        render: {
            type: import("vue").PropType<string>;
        };
        readonly disabled: {
            type: import("vue").PropType<boolean>;
        };
        readonly type: {
            type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown>>;
        };
        readonly nativeType: {
            type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "button" | "reset" | "submit", unknown>>;
        };
        readonly loading: {
            type: import("vue").PropType<boolean>;
        };
        readonly loadingIcon: {
            type: import("vue").PropType<import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>>;
        };
        readonly plain: {
            type: import("vue").PropType<boolean>;
        };
        readonly text: {
            type: import("vue").PropType<boolean>;
        };
        readonly link: {
            type: import("vue").PropType<boolean>;
        };
        readonly bg: {
            type: import("vue").PropType<boolean>;
        };
        readonly autofocus: {
            type: import("vue").PropType<boolean>;
        };
        readonly round: {
            type: import("vue").PropType<boolean>;
        };
        readonly circle: {
            type: import("vue").PropType<boolean>;
        };
        readonly dark: {
            type: import("vue").PropType<boolean>;
        };
        readonly tag: {
            type: import("vue").PropType<"button">;
        };
        readonly size: {
            type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        };
        readonly icon: {
            type: import("vue").PropType<unknown>;
        };
        readonly color: {
            type: import("vue").PropType<string>;
        };
        readonly autoInsertSpace: {
            type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        };
    }>> & {
        onClick?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    tip: {
        type: import("vue").PropType<string | import("./typing").TipConfig>;
    };
    render: {
        type: import("vue").PropType<string>;
    };
    readonly disabled: {
        type: import("vue").PropType<boolean>;
    };
    readonly type: {
        type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown>>;
    };
    readonly nativeType: {
        type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "button" | "reset" | "submit", unknown>>;
    };
    readonly loading: {
        type: import("vue").PropType<boolean>;
    };
    readonly loadingIcon: {
        type: import("vue").PropType<import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>>;
    };
    readonly plain: {
        type: import("vue").PropType<boolean>;
    };
    readonly text: {
        type: import("vue").PropType<boolean>;
    };
    readonly link: {
        type: import("vue").PropType<boolean>;
    };
    readonly bg: {
        type: import("vue").PropType<boolean>;
    };
    readonly autofocus: {
        type: import("vue").PropType<boolean>;
    };
    readonly round: {
        type: import("vue").PropType<boolean>;
    };
    readonly circle: {
        type: import("vue").PropType<boolean>;
    };
    readonly dark: {
        type: import("vue").PropType<boolean>;
    };
    readonly tag: {
        type: import("vue").PropType<"button">;
    };
    readonly size: {
        type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
    };
    readonly icon: {
        type: import("vue").PropType<unknown>;
    };
    readonly color: {
        type: import("vue").PropType<string>;
    };
    readonly autoInsertSpace: {
        type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
    };
}>> & {
    onClick?: (...args: any[]) => any;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
}, string, {}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export { ProButton };
export default ProButton;
