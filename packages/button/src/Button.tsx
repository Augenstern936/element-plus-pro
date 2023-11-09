import { defineComponent } from "vue";
import { ElButton, ElMessageBox } from "element-plus";
import type { FunctionalComponent } from "vue";
import type { ProButtonProps} from "./typing";
import { withInstall } from "@element-plus/pro-utils";
import Props from "./typing";


const ProButton = defineComponent((props: ProButtonProps, ctx: any) => {

    const onClick = (evt: any) => {
        if (props.tip) {
            return ElMessageBox.confirm(props.tip, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                ctx.emit("on-click", evt);
            }).catch(() => {
            });
        } else {
            ctx.emit("clickEvent", evt);
        }
    };

    return () => (
        <ElButton {...props} onClick={onClick.bind(this)}>{ctx.slots.default?.()}</ElButton>
    );

}) as unknown as FunctionalComponent;

ProButton.props = Props;

export default withInstall(ProButton);