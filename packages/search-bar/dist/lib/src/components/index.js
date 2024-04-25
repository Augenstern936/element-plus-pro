"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const r=require("vue"),u=require("./Input.js"),e=require("./Date.js"),c=require("./Select.js"),n=require("./Radio.js"),f=require("./Rate.js"),m=require("./Switch.js"),p=require("./Slider.js"),y=require("./Color.js"),d={text:u.default.Text,password:u.default.Password,textarea:u.default.Textarea,date:e.default.Default,dates:e.default.Dates,dateTime:e.default.DateTime,dateWeek:e.default.DateWeek,dateMonth:e.default.DateMonth,dateYear:e.default.DateYear,dateRange:e.default.DateRange,dateTimeRange:e.default.DateTimeRange,dateMonthRange:e.default.DateMonthRange,select:c.default,radio:n.default.Default,radioButton:n.default.RadioButton,switch:m.default,rate:f.default,color:y.default,slider:p.default},s=r.defineComponent(t=>{var l;const o=(l=t.formItem)==null?void 0:l.valueType,a=(o!="select"&&d[o]?!1:Array.isArray(t.formItem.valueOptions))?"select":o||"text";({...t,formItem:{...t.formItem}},r.provide(a,{...t,formItem:{...t.formItem,valueType:a}}));const i=d[a];return()=>r.createVNode(i,null,null)});s.props={formItem:{type:Object,required:!0},emitter:{type:Object,required:!0}};const T=s;exports.default=T;
