(window.webpackJsonp=window.webpackJsonp||[]).push([[260,123],{1126:function(t,e,n){"use strict";var r=n(188),o=n.n(r),c=n(153),l={components:{InformationCircle:o.a,Tippy:c.a},props:{title:{type:String,required:!0},tippy:{type:String,default:null}}},f=n(11),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h6",{staticClass:"text-gray-600 pb-1 mb-0.5 font-semibold flex justify-between items-center"},[t._v("\n  "+t._s(t.title)+"\n\n  "),n("Tippy",{attrs:{content:t.tippy}},[n("InformationCircle",{staticClass:"inline-block w-4 h-4"})],1)],1)}),[],!1,null,null,null);e.a=component.exports},1230:function(t,e,n){"use strict";n.r(e);var r=n(858),o=n.n(r),c=n(1126),l=n(14),f=n(1077),m={components:{ControlSub:c.a,TrashIcon:o.a},mixins:[f.a],computed:{show:function(){return void 0===this.params.showRemoveButton||this.params.showRemoveButton}},methods:{remove:function(){l.a.$emit(l.b.EditorRemoveElement)}}},v=n(11),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"mb-6"},[t.block.title?n("ControlSub",{attrs:{title:t.block.title}}):t._e(),t._v(" "),n("button",{staticClass:"btn btn-danger justify-start w-full py-1.5",attrs:{type:"button",disabled:t.params.disabled},on:{click:t.remove}},[n("TrashIcon",{staticClass:"btn-icon-left"}),t._v("\n\n    Remove\n  ")],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports},858:function(t,e,n){n(16),n(15),n(13),n(17),n(18);var r=n(38),o=n(39),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),f=e.children,m=void 0===f?[]:f,v=data.class,d=data.staticClass,style=data.style,y=data.staticStyle,w=data.attrs,h=void 0===w?{}:w,O=o(data,c);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[v,d],style:[style,y],attrs:Object.assign({fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},h)},O),m.concat([n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}})]))}}}}]);