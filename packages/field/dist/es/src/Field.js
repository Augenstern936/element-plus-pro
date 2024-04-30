var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/Field.tsx
var Field_exports = {};
__export(Field_exports, {
  default: () => Field_default,
  proFieldProps: () => proFieldProps
});
module.exports = __toCommonJS(Field_exports);

// ../../build/jsxFactory.ts
var import_vue = require("vue");

// src/Field.tsx
var import_pro_utils2 = require("@element-plus/pro-utils");
var import_vue17 = require("vue");

// src/components/Date/index.tsx
var import_pro_utils = require("@element-plus/pro-utils");
var import_element_plus2 = require("element-plus");
var import_date_picker = require("element-plus/theme-chalk/src/date-picker.scss");
var import_vue2 = require("vue");

// src/components/Date/props.ts
var import_element_plus = require("element-plus");
var proDatePickerProps = {
  ...import_element_plus.datePickerProps,
  placeholder: {
    type: [String, Array],
    default: void 0
  },
  style: {
    type: Object,
    default: {}
  }
};

// src/components/Date/index.tsx
var BaseDate = (0, import_vue2.defineComponent)((props, ctx) => {
  const state = (0, import_vue2.computed)({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      ctx.emit("update:modelValue", value);
    }
  });
  const placeholder = (0, import_vue2.computed)(() => {
    const value = props.placeholder ?? (0, import_pro_utils.formatPlaceholder)("", props.type || "text");
    if (Array.isArray(value) && value.length > 1) {
      return {
        startPlaceholder: value[0],
        endPlaceholder: value[1]
      };
    }
    return {
      placeholder: Array.isArray(value) ? value[0] : value
    };
  });
  return () => /* @__PURE__ */ (0, import_vue.h)(import_element_plus2.ElDatePicker, { "v-model": state.value, ...props, ...placeholder.value });
});
BaseDate.props = proDatePickerProps;
var ProFieldDate = (props) => /* @__PURE__ */ (0, import_vue.h)(BaseDate, { ...props, type: "date" });
var ProFieldDates = (props) => /* @__PURE__ */ (0, import_vue.h)(BaseDate, { ...props, type: "dates" });
var ProFieldDateTime = (props) => /* @__PURE__ */ (0, import_vue.h)(BaseDate, { ...props, type: "datetime" });
var ProFieldDateWeek = (props) => /* @__PURE__ */ (0, import_vue.h)(BaseDate, { ...props, type: "week" });
var ProFieldDateMonth = (props) => /* @__PURE__ */ (0, import_vue.h)(BaseDate, { ...props, type: "month" });
var ProFieldDateYear = (props) => /* @__PURE__ */ (0, import_vue.h)(BaseDate, { ...props, type: "year" });
var ProFieldDateRange = (props) => /* @__PURE__ */ (0, import_vue.h)(BaseDate, { ...props, type: "daterange" });
var ProFieldDateTimeRange = (props) => /* @__PURE__ */ (0, import_vue.h)(BaseDate, { ...props, type: "datetimerange" });
var ProFieldDateMonthRange = (props) => /* @__PURE__ */ (0, import_vue.h)(BaseDate, { ...props, type: "monthrange" });

// src/components/Input/index.tsx
var import_element_plus4 = require("element-plus");
var import_input = require("element-plus/theme-chalk/src/input.scss");
var import_vue3 = require("vue");

// src/components/Input/props.ts
var import_element_plus3 = require("element-plus");
var proInputProps = {
  ...import_element_plus3.inputProps,
  type: {
    type: String,
    default: "text"
  }
};

// src/components/Input/index.tsx
var ProFieldInput = (0, import_vue3.defineComponent)(
  (props, ctx) => {
    const state = (0, import_vue3.computed)({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    return () => /* @__PURE__ */ (0, import_vue.h)(import_element_plus4.ElInput, { "v-model": state.value, ...props });
  },
  {
    name: "ProFieldInput"
  }
);
ProFieldInput.props = proInputProps;
var ProFieldText = (props) => /* @__PURE__ */ (0, import_vue.h)(ProFieldInput, { ...props, type: "text" });
var ProFieldPassword = (props) => /* @__PURE__ */ (0, import_vue.h)(ProFieldInput, { ...props, type: "password" });
var ProFieldTextarea = (props) => /* @__PURE__ */ (0, import_vue.h)(ProFieldInput, { ...props, type: "textarea" });

// src/components/TimePicker/index.tsx
var import_element_plus5 = require("element-plus");
var import_time_picker = require("element-plus/theme-chalk/src/time-picker.scss");
var import_vue4 = require("vue");
var BaseTimePicker = (0, import_vue4.defineComponent)((props, ctx) => {
  const state = (0, import_vue4.computed)({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      ctx.emit("upTime:modelValue", value);
    }
  });
  return () => /* @__PURE__ */ (0, import_vue.h)(import_element_plus5.ElTimePicker, { "v-model": state.value, ...props });
});
BaseTimePicker.props = {
  ...import_element_plus5.timePickerDefaultProps,
  style: {
    type: Object,
    default: {}
  }
};
var ProFieldTime = (props) => {
  return /* @__PURE__ */ (0, import_vue.h)(BaseTimePicker, { ...props, isRange: false });
};
var ProFieldTimeRange = (props) => {
  return /* @__PURE__ */ (0, import_vue.h)(BaseTimePicker, { ...props, isRange: true });
};

// src/components/Avatar/index.tsx
var import_element_plus7 = require("element-plus");
var import_avatar = require("element-plus/theme-chalk/src/avatar.scss");
var import_vue5 = require("vue");

// src/components/Avatar/props.ts
var import_element_plus6 = require("element-plus");
var proFieldAvatar = {
  ...import_element_plus6.avatarProps,
  style: {
    type: Object,
    default: {}
  }
};

// src/components/Avatar/index.tsx
var ProFieldAvatar = (0, import_vue5.defineComponent)(
  (props) => {
    return () => /* @__PURE__ */ (0, import_vue.h)(import_element_plus7.ElAvatar, { ...props });
  },
  {
    name: "ProFieldAvatar"
  }
);
ProFieldAvatar.props = proFieldAvatar;
var Avatar_default = ProFieldAvatar;

// src/components/Cascader/index.tsx
var import_element_plus9 = require("element-plus");
var import_cascader = require("element-plus/theme-chalk/src/cascader.scss");
var import_vue6 = require("vue");

// src/components/Cascader/props.ts
var import_element_plus8 = require("element-plus");
var proFieldCascaderProps = {
  ...import_element_plus8.cascaderProps,
  style: {
    type: Object,
    default: {}
  }
};

// src/components/Cascader/index.tsx
var ProFieldCascader = (0, import_vue6.defineComponent)(
  (props, ctx) => {
    const state = (0, import_vue6.computed)({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    return () => /* @__PURE__ */ (0, import_vue.h)(import_element_plus9.ElCascader, { "v-model": state.value, ...props });
  },
  {
    name: "ProFieldCascader"
  }
);
ProFieldCascader.props = proFieldCascaderProps;
var Cascader_default = ProFieldCascader;

// src/components/Checkbox/index.tsx
var import_element_plus11 = require("element-plus");
var import_checkbox_button = require("element-plus/theme-chalk/src/checkbox-button.scss");
var import_checkbox_group = require("element-plus/theme-chalk/src/checkbox-group.scss");
var import_checkbox = require("element-plus/theme-chalk/src/checkbox.scss");
var import_vue7 = require("vue");

// src/components/Checkbox/props.ts
var import_element_plus10 = require("element-plus");
var proFieldCheckboxProps = {
  ...import_element_plus10.checkboxProps,
  type: {
    type: String,
    default: "checkbox"
  },
  options: {
    type: Array,
    default: []
  },
  style: {
    type: Object,
    default: {}
  }
};

// src/components/Checkbox/index.tsx
var ProFieldCheckbox = (0, import_vue7.defineComponent)(
  (props, ctx) => {
    const state = (0, import_vue7.computed)({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    return () => {
      var _a;
      return /* @__PURE__ */ (0, import_vue.h)(import_element_plus11.ElCheckboxGroup, { "v-model": state.value }, (_a = props.options) == null ? void 0 : _a.map((option, i) => /* @__PURE__ */ (0, import_vue.h)(import_vue.Fragment, null, props.type == "checkbox" ? /* @__PURE__ */ (0, import_vue.h)(import_element_plus11.ElCheckbox, { ...option, key: i }) : /* @__PURE__ */ (0, import_vue.h)(import_element_plus11.ElCheckboxButton, { ...option, key: i }, option.label))));
    };
  },
  {
    name: "ProFieldCheckbox"
  }
);
ProFieldCheckbox.props = proFieldCheckboxProps;
var Checkbox_default = ProFieldCheckbox;

// src/components/Color/index.tsx
var import_element_plus13 = require("element-plus");
var import_color_picker = require("element-plus/theme-chalk/src/color-picker.scss");
var import_vue8 = require("vue");

// src/components/Color/props.ts
var import_element_plus12 = require("element-plus");
var proFieldColor = {
  ...import_element_plus12.colorPickerProps,
  style: {
    type: Object,
    default: {}
  }
};

// src/components/Color/index.tsx
var ProFieldColor = (0, import_vue8.defineComponent)(
  (props, ctx) => {
    const state = (0, import_vue8.computed)({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    return () => /* @__PURE__ */ (0, import_vue.h)(import_element_plus13.ElColorPicker, { "v-model": state.value, ...props });
  },
  {
    name: "ProFieldColor"
  }
);
ProFieldColor.props = proFieldColor;
var Color_default = ProFieldColor;

// src/components/Image/index.tsx
var import_element_plus15 = require("element-plus");
var import_image = require("element-plus/theme-chalk/src/image.scss");
var import_vue9 = require("vue");

// src/components/Image/props.ts
var import_element_plus14 = require("element-plus");
var proFieldImageProps = {
  ...import_element_plus14.imageProps,
  style: {
    type: Object,
    default: {}
  }
};

// src/components/Image/index.tsx
var ProFieldImage = (0, import_vue9.defineComponent)(
  (props) => {
    return () => /* @__PURE__ */ (0, import_vue.h)(import_element_plus15.ElImage, { ...props });
  },
  {
    name: "ProFieldImage"
  }
);
ProFieldImage.props = proFieldImageProps;
var Image_default = ProFieldImage;

// src/components/Progress/index.tsx
var import_element_plus17 = require("element-plus");
var import_progress = require("element-plus/theme-chalk/src/progress.scss");
var import_vue10 = require("vue");

// src/components/Progress/props.ts
var import_element_plus16 = require("element-plus");
var proFieldProgressProps = {
  ...import_element_plus16.progressProps,
  style: {
    type: Object,
    default: {}
  }
};

// src/components/Progress/index.tsx
var ProFieldProgress = (0, import_vue10.defineComponent)(
  (props) => {
    return () => /* @__PURE__ */ (0, import_vue.h)(import_element_plus17.ElProgress, { ...props });
  },
  {
    name: "ProFieldProgress"
  }
);
ProFieldProgress.props = proFieldProgressProps;
var Progress_default = ProFieldProgress;

// src/components/Radio/index.tsx
var import_element_plus19 = require("element-plus");
var import_radio_button = require("element-plus/theme-chalk/src/radio-button.scss");
var import_radio_group = require("element-plus/theme-chalk/src/radio-group.scss");
var import_radio = require("element-plus/theme-chalk/src/radio.scss");
var import_vue11 = require("vue");

// src/components/Radio/props.ts
var import_element_plus18 = require("element-plus");
var proFieldRadioProps = {
  ...import_element_plus18.radioProps,
  type: {
    type: String,
    default: "radio"
  },
  options: {
    type: Array,
    default: []
  },
  style: {
    type: Object,
    default: {}
  }
};

// src/components/Radio/index.tsx
var ProFieldRadio = (0, import_vue11.defineComponent)(
  (props, ctx) => {
    const state = (0, import_vue11.computed)({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    return () => {
      var _a;
      return /* @__PURE__ */ (0, import_vue.h)(import_element_plus19.ElRadioGroup, { "v-model": state.value }, (_a = props.options) == null ? void 0 : _a.map((option, i) => /* @__PURE__ */ (0, import_vue.h)(import_vue.Fragment, null, option.type == "radio" ? /* @__PURE__ */ (0, import_vue.h)(import_element_plus19.ElRadio, { ...option, key: i }, option.label) : /* @__PURE__ */ (0, import_vue.h)(import_element_plus19.ElRadioButton, { label: option.value, key: i }, option.label))));
    };
  },
  {
    name: "ProFieldRadio"
  }
);
ProFieldRadio.props = proFieldRadioProps;
var Radio_default = ProFieldRadio;

// src/components/Rate/index.tsx
var import_element_plus21 = require("element-plus");
var import_rate = require("element-plus/theme-chalk/src/rate.scss");
var import_vue12 = require("vue");

// src/components/Rate/props.ts
var import_element_plus20 = require("element-plus");
var proFieldRateProps = {
  ...import_element_plus20.rateProps,
  style: {
    type: Object,
    default: {}
  }
};

// src/components/Rate/index.tsx
var ProFieldRate = (0, import_vue12.defineComponent)(
  (props, ctx) => {
    const state = (0, import_vue12.computed)({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    return () => /* @__PURE__ */ (0, import_vue.h)(import_element_plus21.ElRate, { "v-model": state.value, ...props });
  },
  {
    name: "ProFieldRate"
  }
);
ProFieldRate.props = proFieldRateProps;
var Rate_default = ProFieldRate;

// src/components/Select/index.tsx
var import_element_plus22 = require("element-plus");
var import_option = require("element-plus/theme-chalk/src/option.scss");
var import_select = require("element-plus/theme-chalk/src/select.scss");
var import_vue13 = require("vue");
var ProFieldSelect = (0, import_vue13.defineComponent)(
  (props, ctx) => {
    const state = (0, import_vue13.computed)({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    return () => {
      var _a;
      return /* @__PURE__ */ (0, import_vue.h)(import_element_plus22.ElSelect, { "v-model": state.value }, (_a = props.options) == null ? void 0 : _a.map((option, index) => /* @__PURE__ */ (0, import_vue.h)(import_element_plus22.ElOption, { ...option, key: index }, option.label)));
    };
  },
  {
    name: "ProFieldSelect"
  }
);
var Select_default = ProFieldSelect;

// src/components/Slider/index.tsx
var import_element_plus24 = require("element-plus");
var import_slider = require("element-plus/theme-chalk/src/slider.scss");
var import_vue14 = require("vue");

// src/components/Slider/props.ts
var import_element_plus23 = require("element-plus");
var proFieldSliderProps = {
  ...import_element_plus23.sliderProps,
  style: {
    type: Object,
    default: {}
  }
};

// src/components/Slider/index.tsx
var ProFieldSlider = (0, import_vue14.defineComponent)(
  (props, ctx) => {
    const state = (0, import_vue14.computed)({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    return () => /* @__PURE__ */ (0, import_vue.h)(import_element_plus24.ElSlider, { "v-model": state.value, ...props });
  },
  {
    name: "ProFieldSlider"
  }
);
ProFieldSlider.props = proFieldSliderProps;
var Slider_default = ProFieldSlider;

// src/components/Switch/index.tsx
var import_element_plus26 = require("element-plus");
var import_switch = require("element-plus/theme-chalk/src/switch.scss");
var import_vue15 = require("vue");

// src/components/Switch/props.ts
var import_element_plus25 = require("element-plus");
var proFieldSwitchProps = {
  ...import_element_plus25.switchProps,
  style: {
    type: Object,
    default: {}
  }
};

// src/components/Switch/index.tsx
var ProFieldSwitch = (0, import_vue15.defineComponent)(
  (props, ctx) => {
    const state = (0, import_vue15.computed)({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    return () => /* @__PURE__ */ (0, import_vue.h)(import_element_plus26.ElSwitch, { "v-model": state.value, ...props });
  },
  {
    name: "ProFieldSwitch"
  }
);
ProFieldSwitch.props = proFieldSwitchProps;
var Switch_default = ProFieldSwitch;

// src/components/TreeSelect/index.tsx
var import_element_plus27 = require("element-plus");
var import_tree_select = require("element-plus/theme-chalk/src/tree-select.scss");
var import_vue16 = require("vue");
var ProFieldTreeSelect = (0, import_vue16.defineComponent)(
  (props, ctx) => {
    const state = (0, import_vue16.computed)({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    return () => /* @__PURE__ */ (0, import_vue.h)(import_element_plus27.ElTreeSelect, { "v-model": state.value, ...props });
  },
  {
    name: "ProFieldTreeSelect"
  }
);
var TreeSelect_default = ProFieldTreeSelect;

// src/components/index.ts
var components = {
  text: ProFieldText,
  password: ProFieldPassword,
  textarea: ProFieldTextarea,
  date: ProFieldDate,
  dates: ProFieldDates,
  dateTime: ProFieldDateTime,
  dateWeek: ProFieldDateWeek,
  dateMonth: ProFieldDateMonth,
  dateYear: ProFieldDateYear,
  dateRange: ProFieldDateRange,
  dateTimeRange: ProFieldDateTimeRange,
  dateMonthRange: ProFieldDateMonthRange,
  time: ProFieldTime,
  timeRange: ProFieldTimeRange,
  // timeSelect: ProFieldTimeSelect,
  select: Select_default,
  treeSelect: TreeSelect_default,
  checkbox: Checkbox_default,
  radio: Radio_default,
  radioButton: Radio_default,
  switch: Switch_default,
  avatar: Avatar_default,
  image: Image_default,
  rate: Rate_default,
  color: Color_default,
  cascader: Cascader_default,
  slider: Slider_default,
  progress: Progress_default
};

// src/Field.tsx
var proFieldProps = {
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: ""
  },
  mode: {
    type: String,
    default: "edit"
  },
  valueType: {
    type: String,
    default: "text"
  },
  placeholder: {
    type: [String, Array]
  },
  fieldProps: {
    type: Object,
    default: {}
  }
};
var ProField = (0, import_vue17.defineComponent)(
  (props, ctx) => {
    const Field = (0, import_vue17.computed)(() => {
      return components[props.valueType || "text"];
    });
    const model = (0, import_vue17.computed)({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    const placeholder = (0, import_vue17.computed)(() => {
      const value = props.placeholder ?? (0, import_pro_utils2.formatPlaceholder)("", props.valueType || "text");
      if (Array.isArray(value) && value.length > 1) {
        return {
          startPlaceholder: value[0],
          endPlaceholder: value[1]
        };
      }
      return {
        placeholder: Array.isArray(value) ? value[0] : value
      };
    });
    return () => /* @__PURE__ */ (0, import_vue.h)(Field.value, { "v-model": model.value, ...props.fieldProps, ...placeholder.value });
  },
  {
    name: "ProField"
  }
);
ProField.props = proFieldProps;
for (const key in components) {
  const ComName = key.charAt(0).toUpperCase() + key.slice(1);
  const FieldComponent = components[key];
  ProField[ComName] = (props) => /* @__PURE__ */ (0, import_vue.h)(FieldComponent, { ...props, type: key });
}
var Field_default = (0, import_pro_utils2.withInstall)(ProField);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  proFieldProps
});
