/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-11-22 13:52:21
 * @LastEditTime: 2024-11-22 15:10:49
 */
import { ElAlert } from "element-plus";

interface AlertProps {
  count: number;
  onClose?: Function;
}

export const Alert = (props: AlertProps) => {
  return (
    <>
      {props.count > 0 && (
        <ElAlert
          class={"selection-alert"}
          type="info"
          close-text="取消选择"
          onClose={() => props?.onClose?.()}
          v-slots={{
            title: () => (
              <>
                已选择 <span class="alert-count">{props.count ?? 0}</span> 项
              </>
            )
          }}
        />
      )}
    </>
  );
};
