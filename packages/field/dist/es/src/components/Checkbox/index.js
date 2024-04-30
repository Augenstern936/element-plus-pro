var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
	for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
	if ((from && typeof from === "object") || typeof from === "function") {
		for (let key of __getOwnPropNames(from))
			if (!__hasOwnProp.call(to, key) && key !== except)
				__defProp(to, key, {
					get: () => from[key],
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
				});
	}
	return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/Checkbox/index.tsx
var Checkbox_exports = {};
__export(Checkbox_exports, {
	ProFieldCheckbox: () => ProFieldCheckbox,
	default: () => Checkbox_default,
	proFieldCheckboxProps: () => proFieldCheckboxProps,
});
module.exports = __toCommonJS(Checkbox_exports);

// ../../build/jsxFactory.ts
var import_vue = require("vue");

// src/components/Checkbox/index.tsx
var import_element_plus2 = require("element-plus");
var import_checkbox_button = require("element-plus/theme-chalk/src/checkbox-button.scss");
var import_checkbox_group = require("element-plus/theme-chalk/src/checkbox-group.scss");
var import_checkbox = require("element-plus/theme-chalk/src/checkbox.scss");
var import_vue2 = require("vue");

// src/components/Checkbox/props.ts
var import_element_plus = require("element-plus");
var proFieldCheckboxProps = {
	...import_element_plus.checkboxProps,
	type: {
		type: String,
		default: "checkbox",
	},
	options: {
		type: Array,
		default: [],
	},
	style: {
		type: Object,
		default: {},
	},
};

// src/components/Checkbox/index.tsx
var ProFieldCheckbox = (0, import_vue2.defineComponent)(
	(props, ctx) => {
		const state = (0, import_vue2.computed)({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit("update:modelValue", value);
			},
		});
		return () => {
			var _a;
			return /* @__PURE__ */ (0, import_vue.h)(
				import_element_plus2.ElCheckboxGroup,
				{ "v-model": state.value },
				(_a = props.options) == null
					? void 0
					: _a.map((option, i) =>
							/* @__PURE__ */ (0, import_vue.h)(
								import_vue.Fragment,
								null,
								props.type == "checkbox"
									? /* @__PURE__ */ (0, import_vue.h)(import_element_plus2.ElCheckbox, {
											...option,
											key: i,
									  })
									: /* @__PURE__ */ (0, import_vue.h)(
											import_element_plus2.ElCheckboxButton,
											{ ...option, key: i },
											option.label
									  )
							)
					  )
			);
		};
	},
	{
		name: "ProFieldCheckbox",
	}
);
ProFieldCheckbox.props = proFieldCheckboxProps;
var Checkbox_default = ProFieldCheckbox;
// Annotate the CommonJS export names for ESM import in node:
0 &&
	(module.exports = {
		ProFieldCheckbox,
		proFieldCheckboxProps,
	});
