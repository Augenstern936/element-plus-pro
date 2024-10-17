/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-10-13 13:02:25
 * @LastEditTime: 2024-10-13 14:27:38
 * @FilePath: \element-plus-pro\packages\field\src\components\widgets\Skeleton\index.tsx
 */
import { ElSkeleton, ElSkeletonItem, SkeletonItemProps, SkeletonProps as ElSkeletonProps } from "element-plus";
import { computed, SetupContext } from "vue";

export interface SkeletonProps extends Partial<Omit<ElSkeletonProps, "count">>, Partial<SkeletonItemProps> {
  columns?: number;
  size?: number;
  gap?: number;
  wSize?: number;
  hSize?: number;
}

export const Skeleton = (props: SkeletonProps, ctx: SetupContext) => {
  const count = computed(() => {
    if (props.columns || props.rows) {
      return Array((props.columns ?? 1) * (props.rows ?? 1)).fill(1);
    }
    return [1];
  });

  const size = computed(() => {
    return {
      width: props.wSize ? `${props.wSize}px` : props.size ? `${props.size}px` : "default",
      height: props.hSize ? `${props.hSize}px` : props.size ? `${props.size}px` : "default"
    };
  });
  return (
    <ElSkeleton
      {...props}
      animated={props.animated ?? true}
      v-slots={{
        default: () => ctx.slots?.default?.(),
        template: () => (
          <div
            style={{
              width: "fit-content",
              display: "grid",
              gap: `${props.gap ?? 15}px`,
              gridTemplateColumns: `repeat(${props.columns || 1}, auto)`,
              gridTemplateRows: `repeat(${props.rows || 1}, auto)`
            }}
          >
            {count.value.map((_, i) => (
              <ElSkeletonItem variant={props.variant} key={i} style={size.value} />
            ))}
          </div>
        )
      }}
    />
  );
};
