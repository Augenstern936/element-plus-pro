/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-10-15 14:57:00
 * @LastEditTime: 2024-10-15 15:09:33
 * @FilePath: \element-plus-pro\packages\field\src\components\widgets\Loading\index.tsx
 */
import "./loading.scss";

interface LoadingProps {
  size?: number;
}

const Loading = (props: LoadingProps) => {
  return (
    <svg class="loading-icon" viewBox="0 0 1088 1024" width={props.size || 33} height={props.size || 33}>
      <path
        d="M560 928a432 432 0 1 0 0-864 432 432 0 0 0 0 864z m0-96a336 336 0 1 1 0-672 336 336 0 0 1 0 672z"
        fill="var(--el-color-primary)"
        fill-opacity=".08"
      />
      <path
        d="M992 496A432 432 0 0 0 560 64a48 48 0 0 0 0 96c185.6 0 336 150.4 336 336a48 48 0 1 0 96 0z"
        fill="var(--el-color-primary)"
      />
    </svg>
  );
};

export default Loading;
