/*
 * @Description:
 * @Date: 2024-04-30 17:41:09
 * @LastEditTime: 2024-05-27 15:32:22
 */
import ProCopyable from "@/components/ProCopyable/index.vue";
import "./styles.scss";
import { ProDescriptionsItem, ProDescriptionsProps } from "./typing";

const ProDescriptions = (props: ProDescriptionsProps, ctx) => {
  const itemsFormat = (items): ProDescriptionsItem[][] => {
    let filterExtractItem = {
      startIndex: null,
      data: []
    } as Record<string, any>;

    const data = items.filter((item, index) => {
      if (!Array.isArray(item)) {
        filterExtractItem.data.push(item);
        if (!filterExtractItem.startIndex) {
          filterExtractItem.startIndex = index;
        }
      }
      return Array.isArray(item);
    });

    const { startIndex } = filterExtractItem;

    return filterExtractItem.data.length ? data.toSpliced(startIndex, startIndex, filterExtractItem.data) : data;
  };

  return (
    <el-space fill size={props.gap} direction="vertical" style="width: 100%">
      {itemsFormat(props.items ?? [[{}]]).map((descItems, index) => {
        const { title } = props;

        return (
          <el-descriptions class="pro-descriptions" {...props} title={Array.isArray(title) ? title[index] : title}>
            {descItems?.map((item, index) => {
              const { field = "", render } = item;
              const data = props.data ?? {};
              const slotContent = field && ctx.slots[field] ? ctx.slots[field]?.(data) : render?.(data ?? {});
              const emptyText = props.emptyText ?? "--";
              return (
                <>
                  {ctx.slots.default ? (
                    <el-descriptions-item style={props.bodyStyle ?? {}}>{ctx.slots.default()}</el-descriptions-item>
                  ) : (
                    <el-descriptions-item {...item} key={index}>
                      {slotContent ??
                        (item.copyable && (data[field] || data[field] === 0) ? (
                          <ProCopyable value={data[field]} />
                        ) : (
                          data[field] || emptyText
                        ))}
                    </el-descriptions-item>
                  )}
                </>
              );
            })}
          </el-descriptions>
        );
      })}
    </el-space>
  );
};

export * from "./typing";

export default ProDescriptions;
