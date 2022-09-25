(window.webpackJsonp=window.webpackJsonp||[]).push([[246,65],{1141:function(e,t,r){"use strict";var n=r(1),o=(r(1172),r(19),r(1147)),l={props:{maxWidth:{type:String,default:"15rem"},open:{type:Boolean,default:!1},placement:{type:String,default:"bottom-start"},modifiers:{type:Object,default:function(){return{preventOverflow:{enabled:!0,boundariesElement:"window"}}}}},data:function(){return{popper:null}},watch:{open:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.open&&null!==(r=e.$refs)&&void 0!==r&&r.container&&e.$refs.container.focus(),!e.popper){t.next=5;break}return t.next=4,e.$nextTick();case 4:e.popper.update();case 5:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.popper=new o.a(this.$refs.anchor,this.$refs.popup,{placement:this.placement,modifiers:this.modifiers})},beforeDestroy:function(){this.popper&&this.popper.destroy()},methods:{handleBlur:function(e){var t=e.currentTarget,r=e.relatedTarget;t.contains(r)||this.$emit("change",!1)}}},c=r(11),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"container",staticClass:"relative",attrs:{tabindex:"0"},on:{blur:e.handleBlur}},[r("span",{ref:"anchor"},[e._t("anchor")],2),e._v(" "),r("transition",{attrs:{name:"dropdown"}},[r("aside",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],ref:"popup",staticClass:"absolute my-2 w-auto rounded-md border bg-white border-gray-100 shadow-lg z-10 p-2 overflow-hidden",style:{maxWidth:e.maxWidth}},[e._t("content")],2)])],1)}),[],!1,null,null,null);t.a=component.exports},1216:function(e,t,r){"use strict";r.r(t);var n=r(1299),o=r(27),l={components:{ColorPicker:n.a},props:{mappedPalette:{type:Array,required:!0},palette:{type:Object,required:!0},logo:{type:Object,required:!0},disabled:{type:Boolean}},computed:Object(o.c)({updating:"editor/loading_overlay_visible"}),methods:{changed:function(e,t){this.$emit("changed",{property:e,hex:t})}}},c=r(11),d=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.mappedPalette,(function(t){return r("div",{key:t.slug,staticClass:"flex items-center justify-between space-y-2"},[r("span",{staticClass:"font-medium text-cool-gray-500 mr-2 capitalize"},[e._v("\n      "+e._s(t.label)+":\n    ")]),e._v(" "),r("div",{staticClass:"w-24"},[r("ColorPicker",{attrs:{color:t.hex,disabled:e.disabled||e.updating,property:t.slug},on:{changed:function(r){return e.changed(t.slug,r)}}})],1)])})),0)}),[],!1,null,null,null).exports,f=r(14),h={components:{PaletteFields:d},mixins:[r(1077).a],methods:{setPalette:function(e){f.a.$emit(f.b.EditorSetCustomPalette,e)}}},m=Object(c.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("PaletteFields",{attrs:{logo:e.params.logo,disabled:e.params.disabled,palette:e.params.palette_hex,"mapped-palette":e.params.mappedPalette},on:{changed:e.setPalette}})],1)}),[],!1,null,null,null);t.default=m.exports},1252:function(e,t,r){var content=r(1290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(89).default)("3a6f7c2a",content,!0,{sourceMap:!1})},1289:function(e,t,r){"use strict";r(1252)},1290:function(e,t,r){var n=r(88)((function(i){return i[1]}));n.push([e.i,".vc-sketch-presets{display:flex!important;flex-wrap:wrap!important}@media (min-width:640px){.vc-sketch-presets{flex-wrap:nowrap!important}}.vc-sketch-presets-color{margin-right:8px!important}",""]),n.locals={},e.exports=n},1299:function(e,t,r){"use strict";var n=r(861),o=r.n(n),l=r(287),c={components:{ColorSwatch:o.a},props:{disabled:{type:Boolean,default:!1},active:{type:Boolean,default:!1},property:{type:String,default:""},color:{type:String,default:""}},computed:{iconColor:function(){return"light"===Object(l.a)(this.color)?"text-black":"text-white"}}},d=r(11),f=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"btn btn-naked justify-end p-1.5 w-full focus:shadow-primary",class:[{"scale-105 border-2 border-enterprise-primary":e.active},e.iconColor],style:{backgroundColor:e.color},attrs:{disabled:e.disabled},on:{click:function(t){return e.$emit("click",e.property)}}},[e._t("default"),e._v(" "),r("ColorSwatch",{staticClass:"h-6 w-6 transform translate-x-px -translate-y-px"})],2)}),[],!1,null,null,null).exports,h=r(1348),m=r(1141),v={components:{ColorButton:f,Picker:h.Sketch,Popup:m.a},props:{disabled:{type:Boolean,default:!1},property:{type:String,default:""},color:{type:String,default:""}},data:function(){return{open:!1,presetColors:["#001f3f","#0074d9","#7fdbff","#39cccc","#3d9970","#2ecc40","#01ff70","#ffdc00","#ff851b","#ff4136","#85144b","#f012be","#b10dc9","#111111","#aaaaaa","#FFFFFF"]}},computed:{value:{get:function(){return this.color},set:function(e){var t=e.hex;this.disabled||this.$emit("changed",t)}}},methods:{onColorChange:function(e){this.disabled||this.$emit("changed",e.hex)}}},y=(r(1289),Object(d.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Popup",e._b({on:{change:function(t){e.open=t}}},"Popup",{open:e.open,maxWidth:"15rem",modifiers:{preventOverflow:{enabled:!0,boundariesElement:"scrollParent"}}},!1),[r("template",{slot:"anchor"},[r("span",{staticClass:"block w-full"},[r("ColorButton",e._b({on:{click:function(t){e.open=!e.open}}},"ColorButton",{active:e.open,disabled:e.disabled,property:e.property,color:e.color},!1))],1)]),e._v(" "),r("template",{slot:"content"},[r("div",{staticClass:"shadow-2xl bg-white -m-2"},[r("Picker",{staticClass:"w-auto max-w-full h-auto mb-0 shadow-none border-none",attrs:{"disable-alpha":!0,"preset-colors":e.presetColors},on:{input:e.onColorChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),r("div",{staticClass:"p-2"},[r("button",{staticClass:"btn btn-secondary w-full",attrs:{type:"button",disabled:e.disabled},on:{click:function(t){e.open=!1}}},[e._v("\n          Close\n        ")])])],1)])],2)}),[],!1,null,null,null));t.a=y.exports},861:function(e,t,r){r(16),r(15),r(13),r(17),r(18);var n=r(38),o=r(39),l=["class","staticClass","style","staticStyle","attrs"];function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}e.exports={functional:!0,render:function(e,t){var r=t._c,data=(t._v,t.data),d=t.children,f=void 0===d?[]:d,h=data.class,m=data.staticClass,style=data.style,v=data.staticStyle,y=data.attrs,w=void 0===y?{}:y,x=o(data,l);return r("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[h,m],style:[style,v],attrs:Object.assign({fill:"currentColor",viewBox:"0 0 20 20"},w)},x),f.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z","clip-rule":"evenodd"}})]))}}}}]);