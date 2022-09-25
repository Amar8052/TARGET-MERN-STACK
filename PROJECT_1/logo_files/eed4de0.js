(window.webpackJsonp=window.webpackJsonp||[]).push([[247,58,61,132,148],{1104:function(t,e,n){"use strict";n(187),n(43);var l=n(851),r=n.n(l),o=n(852),c=n.n(o),d=n(849),f=n.n(d),h={components:{ChevronDown:r.a,CircleIcon:f.a,ChevronUp:c.a},props:{selected:{type:[String,Number],default:""},buttonGrouping:{type:String,default:null},autoDefault:{type:Boolean,default:!0},theme:{type:String,default:"btn-naked"},hideReset:{type:Boolean,default:!1},size:{type:String,default:"btn-small"},options:{type:Array,default:function(){return[]}},label:{type:String,default:""},showMenuLabel:{type:Boolean,default:!1},maxMenuHeight:{type:Number,default:15},minMenuWidth:{type:Number,default:12.5},disabled:{type:Boolean}},data:function(){return{defaultOption:{},active:!1,offset:0}},computed:{selectedOption:function(){return this.find(this.selected)||{}},changed:function(){return this.selectedOption.handle!==this.defaultOption.handle},buttonGroupingStyle:function(){switch(this.buttonGrouping){case"left":return"rounded-r-none";case"middle":return"rounded-none";case"right":return"rounded-l-none";default:return null}}},mounted:function(){this.autoDefault&&(this.defaultOption=this.find(this.selected)||{})},methods:{toggleMenu:function(){this.active=!this.active,this.active&&(this.offset=this.offsetMenu())},convertRemToPixels:function(t){return t*parseFloat(getComputedStyle(document.documentElement).fontSize)},offsetMenu:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(this.$refs.container){var e=window.innerWidth,n=this.convertRemToPixels(this.minMenuWidth),l=this.$refs.container.getBoundingClientRect(),r=Math.round(l.x),o=Math.round(l.width),c=r+n,d=e-this.convertRemToPixels(t);if(o<n&&c>d)return d-c}return 0},selectOption:function(option){this.active=!1,this.$emit("select",option)},find:function(t){return this.options.find((function(e){return e.handle===t}))},handleBlur:function(t){this.$refs.container.contains(t.relatedTarget)||(this.active=!1)}}},y=h,v=n(11),component=Object(v.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"container",staticClass:"dropdown relative inline-block text-left focus:outline-none focus:border-blue-300 focus:shadow-outline-blue"},[n("button",{staticClass:"btn whitespace-no-wrap text-left h-full w-full justify-start cursor-pointer",class:[t.theme,t.size,{"border-enterprise-primary":t.changed,"opacity-25 cursor-not-allowed":t.disabled},t.buttonGroupingStyle],attrs:{id:"options-menu",type:"button","aria-haspopup":"true","aria-expanded":t.active,disabled:t.disabled},on:{click:t.toggleMenu,blur:t.handleBlur}},[t.selectedOption.handle?[!t.hideReset&&t.changed?n("CircleIcon",{staticClass:"mr-1.5 -ml-1 h-5 w-5 hover:text-red-400",on:{click:function(e){return e.stopPropagation(),t.selectOption(t.defaultOption)}}}):t._e(),t._v(" "),n("span",{staticClass:"flex-1 overflow-hidden",style:t.selectedOption.styles},[t._v("\n        "+t._s(t.selectedOption.label)+"\n      ")])]:t.label?n("span",{staticClass:"flex-1 overflow-hidden"},[t._v(t._s(t.label))]):t._e(),t._v(" "),n(t.active?"ChevronUp":"ChevronDown",{tag:"component",staticClass:"h-4 w-4",class:t.label||t.changed&&!t.hideReset?"-mr-1 ml-1.5":"mt-0"})],2),t._v(" "),n("transition",{attrs:{name:"dropdown"}},[n("div",{staticClass:"w-full absolute left-0 mt-2 py-2 rounded-md bg-white shadow-lg origin-top z-10",class:!t.active&&"hidden",style:"min-width: "+t.minMenuWidth+"rem; transform: translateX("+t.offset+"px);"},[t.showMenuLabel?n("p",{staticClass:"text-sm px-4 mb-2"},[t._v(t._s(t.label))]):t._e(),t._v(" "),n("div",{staticClass:"overflow-y-scroll",style:"max-height: "+t.maxMenuHeight+"rem;",attrs:{role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"}},t._l(t.options,(function(option){return n("button",{key:option.handle,staticClass:"cursor-pointer w-full whitespace-no-wrap text-left block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",class:{"font-bold text-enterprise-primary":option.handle===t.selected},style:option.styles,attrs:{role:"menuitem"},domProps:{innerHTML:t._s(option.label)},on:{click:function(e){return t.selectOption(option)},blur:t.handleBlur}})})),0)])])],1)}),[],!1,null,null,null);e.a=component.exports},1210:function(t,e,n){"use strict";n.r(e);var l=n(854),r=n.n(l),o=n(1104),c=n(14),d={components:{RefreshIcon:r.a,Dropdown:o.a},data:function(){return{type:"all",types:[{handle:"serif",label:"Serif"},{handle:"sans-serif",label:"Sans-serif"},{handle:"display",label:"Display"},{handle:"handwriting",label:"Handwriting"},{handle:"monospace",label:"Monospace"},{handle:"modern",label:"Modern"},{handle:"elegant",label:"Elegant"},{handle:"classy",label:"Classy"},{handle:"vintage",label:"Vintage"},{handle:"bold",label:"Bold"},{handle:"quirky",label:"Quirky"},{handle:"bubbly",label:"Bubbly"},{handle:"thin",label:"Thin"}],weight:"all",weights:[{handle:"all",label:"All"},{handle:"light",label:"Light"},{handle:"regular",label:"Regular"},{handle:"bold",label:"Bold"}],style:"all",styles:[{handle:"all",label:"All"},{handle:"italic",label:"Italic"},{handle:"normal",label:"Normal"}],tag:"Suggested Fonts",tags:[{label:"All Fonts",handle:"all"},{label:"Suggested Fonts",handle:"Suggested Fonts"}]}},computed:{hasFiltered:function(){return![this.weight,this.type,this.style].every((function(t){return"all"===t}))}},mounted:function(){this.update()},methods:{setType:function(t){this.type=t,c.a.$emit(c.b.EditorFontsSetType,t)},setTag:function(t){this.tag=t,c.a.$emit(c.b.EditorFontsSetTag,t)},set:function(t,e){this[t]=e,this.update()},update:function(){c.a.$emit(c.b.EditorFontsSetFilter,{weight:this.weight,style:this.style,type:this.type,tag:this.tag})},reset:function(){this.weight="all",this.style="all",this.type="all",this.tag="Suggested Fonts",this.update()}}},f=n(11),h={components:{FontFilters:Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"text-left"},[n("div",{staticClass:"flex flex-wrap -mx-1 justify-start"},[n("Dropdown",{staticClass:"mx-1 mb-2 w-full",attrs:{label:"Filter Fonts","auto-default":!1,selected:"all"===t.type?null:t.type,options:t.types},on:{select:function(e){return t.setType(e.handle)}}}),t._v(" "),n("div",{staticClass:"mx-1 mb-2 w-full flex"},[n("button",{staticClass:"btn w-1/2 cursor-pointer rounded-r-none whitespace-no-wrap",class:"all"===t.tag?"btn-secondary-shade":"btn-naked",attrs:{type:"button"},on:{click:function(e){return t.setTag("all")}}},[t._v("\n        All Fonts\n      ")]),t._v(" "),n("button",{staticClass:"btn w-1/2 cursor-pointer rounded-l-none whitespace-no-wrap",class:"Suggested Fonts"===t.tag?"btn-secondary-shade":"btn-naked",attrs:{type:"button"},on:{click:function(e){return t.setTag("Suggested Fonts")}}},[t._v("\n        Suggested Fonts\n      ")])]),t._v(" "),t._e(),t._v(" "),t._e()],1),t._v(" "),t._e()])}),[],!1,null,null,null).exports},mixins:[n(1077).a],computed:{}},y=Object(f.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-2",attrs:{id:"font-filters"}},[e("FontFilters")],1)}),[],!1,null,null,null);e.default=y.exports},849:function(t,e,n){n(16),n(15),n(13),n(17),n(18);var l=n(38),r=n(39),o=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,h=data.class,y=data.staticClass,style=data.style,v=data.staticStyle,O=data.attrs,m=void 0===O?{}:O,w=r(data,o);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){l(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,y],style:[style,v],attrs:Object.assign({fill:"currentColor",viewBox:"0 0 20 20"},m)},w),f.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"}})]))}}},851:function(t,e,n){n(16),n(15),n(13),n(17),n(18);var l=n(38),r=n(39),o=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,h=data.class,y=data.staticClass,style=data.style,v=data.staticStyle,O=data.attrs,m=void 0===O?{}:O,w=r(data,o);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){l(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,y],style:[style,v],attrs:Object.assign({fill:"currentColor",viewBox:"0 0 20 20"},m)},w),f.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})]))}}},852:function(t,e,n){n(16),n(15),n(13),n(17),n(18);var l=n(38),r=n(39),o=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,h=data.class,y=data.staticClass,style=data.style,v=data.staticStyle,O=data.attrs,m=void 0===O?{}:O,w=r(data,o);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){l(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,y],style:[style,v],attrs:Object.assign({fill:"currentColor",viewBox:"0 0 20 20"},m)},w),f.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z","clip-rule":"evenodd"}})]))}}},854:function(t,e,n){n(16),n(15),n(13),n(17),n(18);var l=n(38),r=n(39),o=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,h=data.class,y=data.staticClass,style=data.style,v=data.staticStyle,O=data.attrs,m=void 0===O?{}:O,w=r(data,o);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){l(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,y],style:[style,v],attrs:Object.assign({fill:"currentColor",viewBox:"0 0 20 20"},m)},w),f.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z","clip-rule":"evenodd"}})]))}}}}]);