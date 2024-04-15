import { CSSProperties, ExtractPropTypes, PropType } from "vue";
export declare const proFieldAvatar: {
    style: {
        type: PropType<CSSProperties>;
        default: {};
    };
    size: import("element-plus/es/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], "" | "default" | "small" | "large", number, "", boolean>;
    shape: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "circle" | "square", unknown, "circle", boolean>;
    icon: {
        readonly type: PropType<unknown>;
        readonly required: false;
        readonly validator: (val: unknown) => boolean;
        __epPropKey: true;
    };
    src: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    alt: StringConstructor;
    srcSet: StringConstructor;
    fit: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => any) | (() => ObjectFitProperty) | ((new (...args: any[]) => any) | (() => ObjectFitProperty))[], unknown, unknown, "cover", boolean>;
};
export type ProFieldAvatarProps = ExtractPropTypes<typeof proFieldAvatar>;
