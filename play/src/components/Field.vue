<template>
  <el-card>
    <el-space fill :size="20">
      <ProField :type="'cascader'" />
      <ProField.Text v-model="form.text" :mode="mode" />
      <ProField.Number v-model="form.number" :mode="mode" />
      <ProField.Password v-model="form.password" :mode="mode" />
      <ProField.Textarea v-model="form.textarea" :mode="mode" />
      <ProField.Date v-model="form.date" :mode="mode" />
      <ProField.Dates v-model="form.dates" :mode="mode" />
      <ProField.DateRange v-model="form.dateRange" :mode="mode" @change="e => console.log(e, 'e')" />
      <ProField.DateYear v-model="form.dateYear" :mode="mode" />
      <ProField.DateYears v-model="form.dateYears" :mode="mode" />
      <ProField.DateMonth v-model="form.dateMonth" :mode="mode" />
      <ProField.DateMonths v-model="form.dateMonths" :mode="mode" />
      <ProField.DateMonthRange v-model="form.dateMonthRange" :mode="mode" />
      <ProField.DateWeek v-model="form.dateWeek" :mode="mode" />
      <ProField.DateTime v-model="form.dateTime" :mode="mode" />
      <ProField.Time v-model="form.time" :mode="mode" />
      <ProField.TimeRange v-model="form.timeRange" :mode="mode" />
      <ProField.TimeSelect v-model="form.timeSelect" :mode="mode" />
      <ProField.Select
        v-model="value"
        :mode="mode"
        :marker="'square'"
        :request="getRadioData"
        :field-props="{ multiple: true }"
      />
      <ProField.TreeSelect v-model="form.treeSelect" :mode="mode" :request="getData" />
      <ProField.Switch v-model="form.switch" />
      <ProField.Rate v-model="form.rate" :mode="mode" />
      <ProField.Color v-model="form.color" :mode="mode" />
      <ProField.Slider v-model="form.slider" :mode="mode" />
      <ProField.Cascader v-model="form.cascader" :mode="mode" :separator="'~'" :request="getData" />
      <ProField.UploadAvatar v-model="form.avatar" :mode="mode" :marker="'on-line'" :field-props="{ size: 'large' }" />
      <ProField.Progress v-model="form.progress" :percentage="50" :mode="mode" />
      <ProField.VirtualizedSelect v-model="value" :mode="mode" :marker="'square'" :request="getRadioData" />
      <ProField.Radio
        v-model="form.radio"
        :mode="mode"
        :marker="'disc'"
        :value-enum="{
          1: {
            label: '拔都',
            status: 'success'
          },
          2: {
            label: '海都',
            color: 'red'
          },
          3: {
            label: '蒙哥',
            status: 'warning'
          }
        }"
      />
      <ProField.Checkbox
        v-model="form.checkbox"
        :mode="mode"
        :value-enum="{
          1: { label: '拔都' },
          2: { label: '蒙哥' },
          3: '昔班',
          4: '海都'
        }"
      />
      <ProField.Checkbox
        v-model="checkboxValues"
        :mode="mode"
        :value-enum="['成吉思汗', '努尔哈赤', '阿骨打', '阿保机']"
        :mapping-enum-value="'index'"
      />
      <ProField.CheckboxButton
        v-model="form.checkboxButton"
        :mode="mode"
        :value-enum="[
          {
            label: '汉高祖',
            value: 1,
            disabled: true
          },
          {
            label: '唐太宗',
            value: 2
          },
          {
            label: '宋太祖',
            value: 3
          },
          {
            label: '明太祖',
            value: 4
          }
        ]"
      />
      <ProField.UploadImage v-model="form.uploadImage" :mode="mode" :size="40" :field-props="{ limit: 6 }" />
    </el-space>
  </el-card>
</template>

<script setup lang="ts">
import { ProField, ProFieldTreeSelectValueEnum } from "@element-plus-ui/pro-field";
import { ref, watch } from "vue";

const checkboxValues = ref([1, 3]);

const mode = ref<"read" | "edit">("edit");
const value = ref(["#E63415", "#FF6600"]);
const form = ref({
  text: "TEST",
  number: 123,
  password: "12345678",
  textarea: "富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本",
  date: Date.now(),
  dates: [Date.now(), Date.now()],
  dateRange: [Date.now(), Date.now()],
  dateYear: "2024",
  dateYears: ["2022", "2023", "2024", "2025"],
  dateMonth: "2024-09",
  dateMonths: ["2024-06", "2024-08", "2024-10"],
  dateMonthRange: ["2023-10"],
  dateWeek: "",
  dateTime: Date.now(),
  time: "", //"20:59:59",
  timeRange: [], //["18:56:59", "19:32:33"],
  timeSelect: "18:59",
  select: "",
  treeSelect: "",
  switch: false,
  rate: 2,
  color: "#982834",
  slider: 30,
  cascader: [],
  avatar: "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
  progress: 20,
  checkbox: [1, 3],
  checkboxButton: [2, 3],
  radio: 2,
  uploadImage: [
    {
      url: '"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg1"'
    },
    {
      url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"
    }
    // "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg1",
    // "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
    // "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
    // "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
    // "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
    // "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
    // "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
  ]
});

const getData = async () => {
  return new Promise<ProFieldTreeSelectValueEnum>(resolve => {
    setTimeout(() => {
      resolve(["成吉思汗", "努尔哈赤", "阿骨打", "阿保机", { label: "秦始皇", value: "shihaung", children: ["别儿哥"] }]);
    }, 6000);
  });
};

const getRadioData = async () => {
  return new Promise<any>(resolve => {
    setTimeout(() => {
      resolve({
        1: {
          label: "拔都",
          status: "success"
        },
        2: {
          label: "海都",
          color: "red"
        },
        3: {
          label: "蒙哥",
          status: "warning"
        }
      });
    }, 6000);
  });
};

watch(
  () => [form.value.switch, form.value.avatar],
  v => {
    mode.value = v[0] ? "read" : "edit";
    //console.log(v[1]);
    console.log(v[1]);
  },
  {
    deep: true
  }
);
watch(
  () => form.value.uploadImage,
  v => {
    console.log(v, "1111");
  },
  {
    deep: true
  }
);
</script>
