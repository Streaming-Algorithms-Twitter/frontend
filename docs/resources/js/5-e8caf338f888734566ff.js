(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{273:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.InlineLoaderModule=class{}},274:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.SharedModule=class{}},277:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const e=t(0),u=t(517),o=t(275),r=t(518),i=t(18),s=t(272),a=t(116),d=t(273),c=t(274),f=t(522),p=t(512);var g=e.ɵcmf(u.BloomFilterModule,[],function(l){return e.ɵmod([e.ɵmpd(512,e.ComponentFactoryResolver,e.ɵCodegenComponentFactoryResolver,[[8,[o.ɵEmptyOutletComponentNgFactory,r.BloomFilterComponentNgFactory]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e.ɵmpd(4608,i.NgLocalization,i.NgLocaleLocalization,[e.LOCALE_ID,[2,i.ɵangular_packages_common_common_a]]),e.ɵmpd(4608,s.ɵangular_packages_forms_forms_i,s.ɵangular_packages_forms_forms_i,[]),e.ɵmpd(4608,s.FormBuilder,s.FormBuilder,[]),e.ɵmpd(1073742336,i.CommonModule,i.CommonModule,[]),e.ɵmpd(1073742336,s.ɵangular_packages_forms_forms_bb,s.ɵangular_packages_forms_forms_bb,[]),e.ɵmpd(1073742336,s.FormsModule,s.FormsModule,[]),e.ɵmpd(1073742336,s.ReactiveFormsModule,s.ReactiveFormsModule,[]),e.ɵmpd(1073742336,a.RouterModule,a.RouterModule,[[2,a.ɵangular_packages_router_router_a],[2,a.Router]]),e.ɵmpd(1073742336,d.InlineLoaderModule,d.InlineLoaderModule,[]),e.ɵmpd(1073742336,c.SharedModule,c.SharedModule,[]),e.ɵmpd(1073742336,f.BloomFilterRoutingModule,f.BloomFilterRoutingModule,[]),e.ɵmpd(1073742336,u.BloomFilterModule,u.BloomFilterModule,[]),e.ɵmpd(1024,a.ROUTES,function(){return[[{path:"",component:p.BloomFilterComponent}]]},[])])});n.BloomFilterModuleNgFactory=g},512:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});t(0);const e=t(520);n.BloomFilterComponent=class{constructor(){this.numBytes=0,this.hashFunctions=0,this.byteSize=0,this.filterActive=!1}ngOnInit(){}newFilter(){this.bloomFilter=new e.BitarrayBloomFilter(this.hashFunctions,this.numBytes),this.filterActive=!0,this.wordsAdded=new Set}addTextToFilter(){this.bloomFilter.add(this.addText),this.wordsAdded.add(this.addText),this.addText="",this.falsePositiveRate=this.bloomFilter.falsePosProb(this.wordsAdded.size)}}},517:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.BloomFilterModule=class{}},518:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const e=t(519),u=t(0),o=t(116),r=t(18),i=t(272),s=t(512);var a=[e.styles],d=u.ɵcrt({encapsulation:0,styles:a,data:{}});function c(l){return u.ɵvid(0,[(l()(),u.ɵeld(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.ɵeld(1,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.ɵted(2,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit)})}function f(l){return u.ɵvid(0,[(l()(),u.ɵeld(0,0,null,null,83,"div",[["class","container"]],null,null,null,null,null)),(l()(),u.ɵeld(1,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(l()(),u.ɵeld(2,0,null,null,12,"div",[["class","col"]],null,null,null,null,null)),(l()(),u.ɵeld(3,0,null,null,8,"nav",[["aria-label","breadcrumb"]],null,null,null,null,null)),(l()(),u.ɵeld(4,0,null,null,7,"ol",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),u.ɵeld(5,0,null,null,4,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),u.ɵeld(6,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;"click"===n&&(e=!1!==u.ɵnov(l,7).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e);return e},null,null)),u.ɵdid(7,671744,null,0,o.RouterLinkWithHref,[o.Router,o.ActivatedRoute,r.LocationStrategy],{routerLink:[0,"routerLink"]},null),u.ɵpad(8,1),(l()(),u.ɵted(-1,null,["Home"])),(l()(),u.ɵeld(10,0,null,null,1,"li",[["class","breadcrumb-item active"]],null,null,null,null,null)),(l()(),u.ɵted(-1,null,["Bloom Filter"])),(l()(),u.ɵeld(12,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),u.ɵted(-1,null,["Bloom Filter"])),(l()(),u.ɵeld(14,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u.ɵeld(15,0,null,null,31,"div",[["class","row"]],null,null,null,null,null)),(l()(),u.ɵeld(16,0,null,null,30,"div",[["class","col"]],null,null,null,null,null)),(l()(),u.ɵeld(17,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),u.ɵted(-1,null,["Create a Filter"])),(l()(),u.ɵeld(19,0,null,null,25,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,t){var e=!0;"submit"===n&&(e=!1!==u.ɵnov(l,21).onSubmit(t)&&e);"reset"===n&&(e=!1!==u.ɵnov(l,21).onReset()&&e);return e},null,null)),u.ɵdid(20,16384,null,0,i.ɵangular_packages_forms_forms_bg,[],null,null),u.ɵdid(21,4210688,null,0,i.NgForm,[[8,null],[8,null]],null,null),u.ɵprd(2048,null,i.ControlContainer,null,[i.NgForm]),u.ɵdid(23,16384,null,0,i.NgControlStatusGroup,[[4,i.ControlContainer]],null,null),(l()(),u.ɵeld(24,0,null,null,20,"div",[["class","row"]],null,null,null,null,null)),(l()(),u.ɵeld(25,0,null,null,9,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),u.ɵeld(26,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u.ɵeld(27,0,null,null,1,"label",[["for","bytes"]],null,null,null,null,null)),(l()(),u.ɵted(-1,null,["Size in Bytes"])),(l()(),u.ɵeld(29,0,null,null,5,"input",[["class","form-control"],["id","bytes"],["name","Bytes"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,t){var e=!0,o=l.component;"input"===n&&(e=!1!==u.ɵnov(l,30)._handleInput(t.target.value)&&e);"blur"===n&&(e=!1!==u.ɵnov(l,30).onTouched()&&e);"compositionstart"===n&&(e=!1!==u.ɵnov(l,30)._compositionStart()&&e);"compositionend"===n&&(e=!1!==u.ɵnov(l,30)._compositionEnd(t.target.value)&&e);"ngModelChange"===n&&(e=!1!==(o.numBytes=t)&&e);return e},null,null)),u.ɵdid(30,16384,null,0,i.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,i.COMPOSITION_BUFFER_MODE]],null,null),u.ɵprd(1024,null,i.NG_VALUE_ACCESSOR,function(l){return[l]},[i.DefaultValueAccessor]),u.ɵdid(32,671744,null,0,i.NgModel,[[2,i.ControlContainer],[8,null],[8,null],[6,i.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.ɵprd(2048,null,i.NgControl,null,[i.NgModel]),u.ɵdid(34,16384,null,0,i.NgControlStatus,[[4,i.NgControl]],null,null),(l()(),u.ɵeld(35,0,null,null,9,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),u.ɵeld(36,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u.ɵeld(37,0,null,null,1,"label",[["for","functions"]],null,null,null,null,null)),(l()(),u.ɵted(-1,null,["Number of Hash Functions"])),(l()(),u.ɵeld(39,0,null,null,5,"input",[["class","form-control"],["id","functions"],["name","Functions"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,t){var e=!0,o=l.component;"input"===n&&(e=!1!==u.ɵnov(l,40)._handleInput(t.target.value)&&e);"blur"===n&&(e=!1!==u.ɵnov(l,40).onTouched()&&e);"compositionstart"===n&&(e=!1!==u.ɵnov(l,40)._compositionStart()&&e);"compositionend"===n&&(e=!1!==u.ɵnov(l,40)._compositionEnd(t.target.value)&&e);"ngModelChange"===n&&(e=!1!==(o.hashFunctions=t)&&e);return e},null,null)),u.ɵdid(40,16384,null,0,i.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,i.COMPOSITION_BUFFER_MODE]],null,null),u.ɵprd(1024,null,i.NG_VALUE_ACCESSOR,function(l){return[l]},[i.DefaultValueAccessor]),u.ɵdid(42,671744,null,0,i.NgModel,[[2,i.ControlContainer],[8,null],[8,null],[6,i.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.ɵprd(2048,null,i.NgControl,null,[i.NgModel]),u.ɵdid(44,16384,null,0,i.NgControlStatus,[[4,i.NgControl]],null,null),(l()(),u.ɵeld(45,0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],function(l,n,t){var e=!0,u=l.component;"click"===n&&(e=!1!==u.newFilter()&&e);return e},null,null)),(l()(),u.ɵted(-1,null,["Create Filter"])),(l()(),u.ɵeld(47,0,null,null,10,"div",[["class","row pt-3"]],null,null,null,null,null)),(l()(),u.ɵeld(48,0,null,null,9,"div",[["class","col"]],null,null,null,null,null)),(l()(),u.ɵeld(49,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u.ɵeld(50,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.ɵted(51,null,[" Bloom Filter: ",""])),(l()(),u.ɵeld(52,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.ɵted(53,null,[" Hash Functions: ",""])),(l()(),u.ɵeld(54,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.ɵted(55,null,[" Byte Size: ",""])),(l()(),u.ɵeld(56,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.ɵted(57,null,[" False Positive rate: ","%"])),(l()(),u.ɵeld(58,0,null,null,20,"div",[["class","row pt-3"]],null,null,null,null,null)),(l()(),u.ɵeld(59,0,null,null,19,"div",[["class","col"]],null,null,null,null,null)),(l()(),u.ɵeld(60,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u.ɵeld(61,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),u.ɵted(-1,null,["Test the Filter"])),(l()(),u.ɵeld(63,0,null,null,13,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,t){var e=!0;"submit"===n&&(e=!1!==u.ɵnov(l,65).onSubmit(t)&&e);"reset"===n&&(e=!1!==u.ɵnov(l,65).onReset()&&e);return e},null,null)),u.ɵdid(64,16384,null,0,i.ɵangular_packages_forms_forms_bg,[],null,null),u.ɵdid(65,4210688,null,0,i.NgForm,[[8,null],[8,null]],null,null),u.ɵprd(2048,null,i.ControlContainer,null,[i.NgForm]),u.ɵdid(67,16384,null,0,i.NgControlStatusGroup,[[4,i.ControlContainer]],null,null),(l()(),u.ɵeld(68,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u.ɵeld(69,0,null,null,1,"label",[["for","add"]],null,null,null,null,null)),(l()(),u.ɵted(-1,null,["Add Text"])),(l()(),u.ɵeld(71,0,null,null,5,"input",[["class","form-control"],["id","add"],["name","Add Text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,t){var e=!0,o=l.component;"input"===n&&(e=!1!==u.ɵnov(l,72)._handleInput(t.target.value)&&e);"blur"===n&&(e=!1!==u.ɵnov(l,72).onTouched()&&e);"compositionstart"===n&&(e=!1!==u.ɵnov(l,72)._compositionStart()&&e);"compositionend"===n&&(e=!1!==u.ɵnov(l,72)._compositionEnd(t.target.value)&&e);"ngModelChange"===n&&(e=!1!==(o.addText=t)&&e);return e},null,null)),u.ɵdid(72,16384,null,0,i.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,i.COMPOSITION_BUFFER_MODE]],null,null),u.ɵprd(1024,null,i.NG_VALUE_ACCESSOR,function(l){return[l]},[i.DefaultValueAccessor]),u.ɵdid(74,671744,null,0,i.NgModel,[[2,i.ControlContainer],[8,null],[8,null],[6,i.NG_VALUE_ACCESSOR]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),u.ɵprd(2048,null,i.NgControl,null,[i.NgModel]),u.ɵdid(76,16384,null,0,i.NgControlStatus,[[4,i.NgControl]],null,null),(l()(),u.ɵeld(77,0,null,null,1,"button",[["class","btn btn-outline-primary"],["style"," margin-right: 10px;"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var e=!0,u=l.component;"click"===n&&(e=!1!==u.addTextToFilter()&&e);return e},null,null)),(l()(),u.ɵted(-1,null,["Add"])),(l()(),u.ɵeld(79,0,null,null,4,"div",[["class","row pt-3"]],null,null,null,null,null)),(l()(),u.ɵeld(80,0,null,null,3,"div",[["class","col"]],null,null,null,null,null)),(l()(),u.ɵeld(81,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u.ɵand(16777216,null,null,1,null,c)),u.ɵdid(83,802816,null,0,r.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,7,0,l(n,8,0,"/"));l(n,32,0,"Bytes",t.numBytes);l(n,42,0,"Functions",t.hashFunctions);l(n,74,0,"Add Text",!t.bloomFilter,t.addText),l(n,83,0,t.wordsAdded)},function(l,n){var t=n.component;l(n,6,0,u.ɵnov(n,7).target,u.ɵnov(n,7).href),l(n,19,0,u.ɵnov(n,23).ngClassUntouched,u.ɵnov(n,23).ngClassTouched,u.ɵnov(n,23).ngClassPristine,u.ɵnov(n,23).ngClassDirty,u.ɵnov(n,23).ngClassValid,u.ɵnov(n,23).ngClassInvalid,u.ɵnov(n,23).ngClassPending),l(n,29,0,u.ɵnov(n,34).ngClassUntouched,u.ɵnov(n,34).ngClassTouched,u.ɵnov(n,34).ngClassPristine,u.ɵnov(n,34).ngClassDirty,u.ɵnov(n,34).ngClassValid,u.ɵnov(n,34).ngClassInvalid,u.ɵnov(n,34).ngClassPending),l(n,39,0,u.ɵnov(n,44).ngClassUntouched,u.ɵnov(n,44).ngClassTouched,u.ɵnov(n,44).ngClassPristine,u.ɵnov(n,44).ngClassDirty,u.ɵnov(n,44).ngClassValid,u.ɵnov(n,44).ngClassInvalid,u.ɵnov(n,44).ngClassPending),l(n,51,0,t.bloomFilter?t.bloomFilter.getFilter():"N/A"),l(n,53,0,t.hashFunctions),l(n,55,0,t.byteSize),l(n,57,0,t.bloomFilter?(t.falsePositiveRate,t.falsePositiveRate):"N/A"),l(n,63,0,u.ɵnov(n,67).ngClassUntouched,u.ɵnov(n,67).ngClassTouched,u.ɵnov(n,67).ngClassPristine,u.ɵnov(n,67).ngClassDirty,u.ɵnov(n,67).ngClassValid,u.ɵnov(n,67).ngClassInvalid,u.ɵnov(n,67).ngClassPending),l(n,71,0,u.ɵnov(n,76).ngClassUntouched,u.ɵnov(n,76).ngClassTouched,u.ɵnov(n,76).ngClassPristine,u.ɵnov(n,76).ngClassDirty,u.ɵnov(n,76).ngClassValid,u.ɵnov(n,76).ngClassInvalid,u.ɵnov(n,76).ngClassPending),l(n,77,0,!t.addText||0==t.addText.trim().length)})}function p(l){return u.ɵvid(0,[(l()(),u.ɵeld(0,0,null,null,1,"bloom-filter",[],null,null,null,f,d)),u.ɵdid(1,114688,null,0,s.BloomFilterComponent,[],null,null)],function(l,n){l(n,1,0)},null)}n.RenderType_BloomFilterComponent=d,n.View_BloomFilterComponent_0=f,n.View_BloomFilterComponent_Host_0=p;var g=u.ɵccf("bloom-filter",s.BloomFilterComponent,p,{},{},[]);n.BloomFilterComponentNgFactory=g},519:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.styles=["fieldset[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 10em;\n    margin: 0 1em 0 0;\n    border: 1px solid #ccc;\n  }\n  \n  fieldset[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n    display: block;\n    width: 8em;\n    text-align: center;\n    margin: 0 auto;\n  }"]},520:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const e=t(521);n.BitarrayBloomFilter=class{constructor(l,n){this.hashFunctions=l,this.numBytes=n,this.numBits=8*n,this.bitarray=(new e).fill(8*n),this.encountered=0,this.uniqueWords=0}add(l){this.encountered++;let n=!1;for(let t=0;t<this.hashFunctions;t++){let e=(this.getHashCode(l,t*t)%this.numBits+this.numBits)%this.numBits;0==this.bitarray.get(e)&&(n=!0),this.bitarray.set(e,1)}n&&this.uniqueWords++}check(l){for(let n=0;n<this.hashFunctions;n++){let t=(this.getHashCode(l,n*n)%this.numBits+this.numBits)%this.numBits;if(0==this.bitarray.get(t))return!1}return!0}numberEncountered(){return this.encountered}falsePosProb(l){let n=l||this.uniqueWords;return Math.pow(Math.pow(1-1/this.numBits,this.hashFunctions*n),this.hashFunctions)}getFilter(){return this.bitarray.toArray()}uniqueEncountered(){return this.uniqueWords}getBytesUsed(){return this.numBytes}getHashCode(l,n){void 0!=n&&(l=`${n}${l}`);let t=0,e=l.length,u=0;if(e>0)for(;u<e;)t=(t<<5)-t+l.charCodeAt(u++)|0;return t}}},521:function(l,n,t){"use strict";
/*!
 * Module dependencies.
 */var e=Array.prototype.slice
/*!
 * Array proxy methods.
 */;function u(){for(var l,n,t=e.call(arguments),u=0,o=0;o<t.length;o++)(n=t[o]).length>=u&&(u=n.length,l=n);return l}function o(l,n,t){this.__bits=o.parse(l,t),this.__defineGetter__("length",function(){return this.__bits.length}),n&&this.fill(n),this.__len=n}
/*!
 * Max length or size for a bit array (2^32 - 1)
 */o.max=Math.pow(2,32)-1
/*!
 * Utilities.
 */,o.factory=function(l,n,t){return new o(l,n,t)},o.octet=function(l){var n=l.length,t=n+(8-n%8);if(0!==n&&n%8==0)return l;for(var e=n;e<t;e++)l[e]=0;return l},o.parse=function(l,n){var t=[],e=l;if(void 0===l)return t;if("string"==typeof l){for(var u=0;u<l.length;u++)t.push(+l[u]);return t.reverse()}if("number"==typeof l){for(;e>0;)t.push(e%2),e=Math.floor(e/2);return n&&(t=o.octet(t)),t.reverse()}if(Array.isArray(l))return l;for(u=0;u<l.length;u++)t=t.concat(o.parse(l[u],!0));return t},o.equals=function(l,n){if(l.__bits.length!==n.__bits.length)return!1;for(var t=0;t<l.__bits.length;t++)if(l.__bits[t]!==n.__bits[t])return!1;return!0}
/*!
 * Instantiation methods.
 */,o.fromBinary=function(l){for(var n=[],t=0;t<l.length;t++)n.push(+l[t]);return(new o).set(n.reverse())},o.fromOffsets=function(l){for(var n=new o,t=0;t<l.length;t++)n.set(l[t],1);return n},o.fromDecimal=o.fromNumber=function(l){for(var n=[],t=+l;t>0;)n.push(t%2),t=Math.floor(t/2);return(new o).set(n)},o.fromHex=o.fromHexadecimal=function(l){return~(l=(""+l).toLowerCase()).indexOf("0x")||(l="0x"+l),o.fromDecimal(+l)},o.from32Integer=function(l){for(var n=[],t=l;t>0;)n.push(t%2),t=Math.floor(t/2);return n=o.octet(n),(new o).set(n.reverse())},o.fromRedis=o.fromBuffer=function(l){for(var n="",t=0;t<l.length;t++)n+=o.from32Integer(l[t]).__bits.join("");return(new o).set(n.split("").map(function(l){return parseInt(l)}))},o.toOffsets=function(l){for(var n=[],t=0;t<l.length;t++)1===l[t]&&n.push(t);return n}
/*!
 * Output methods.
 */,o.toBuffer=function(l){for(var n,t,e=[],u=0;u<l.length;u+=8){n=0,t=l.slice(u,u+8);for(var o=0;o<t.length;o++)n=2*n+t[o];e.push(n)}return new Buffer(e)},o.toNumber=function(l){for(var n=0,t=0;t<l.length;t++)l[t]&&(n+=Math.pow(2,t));return n},o.toHex=o.toHexadecimal=function(l){return o.toNumber(l).toString(16)}
/*!
 * Bitwise operations.
 */,o.and=o.intersect=function(){for(var l,n=e.call(arguments),t=u.apply(null,arguments),o=n.length,r=[],i=0;i<t.length;i++)l=n.filter(function(l){return 1===l[i]}).length,r.push(l===o?1:0);return r},o.or=o.union=function(){for(var l,n=e.call(arguments),t=u.apply(null,n),o=[],r=0;r<t.length;r++)l=n.filter(function(l){return 1===l[r]}).length,o.push(l?1:0);return o},o.xor=o.difference=function(){for(var l,n=e.call(arguments),t=n.length,o=u.apply(null,n),r=[],i=0;i<o.length;i++){o[i];l=n.filter(function(l){return 1===l[i]}).length,r.push(1===l||l===t?1:0)}return r},o.not=o.reverse=function(l){for(var n=[],t=0;t<l.length;t++)n.push(1===l[t]?0:1);return n},o.count=o.population=o.bitcount=o.cardinality=function(l){var n=0,t=0;if("number"==typeof l)return l=((l=((l-=l>>1&1431655765)>>2&858993459)+(858993459&l))>>4)+l&252645135,l+=l>>8,63&(l+=l>>16);if(Array.isArray(l)){for(var e=0;e<l.length;e++)l[e]&&(n+=1);return n}for(e=0;e<l.length;e+=4)t=l[e],t+=l[e+1]<<8,t+=l[e+2]<<16,t+=l[e+3]<<24,n+=o.cardinality(t);return n}
/*!
 * Instance methods.
 */,o.prototype.fill=function(l){for(;l>this.__bits.length;)this.__bits.push(0);return this},o.prototype.clone=o.prototype.copy=function(){return(new o).set(this.toBits())},o.prototype.clear=o.prototype.reset=function(){return this.__bits=[],this.__len&&this.fill(this.__len),this},o.prototype.equals=function(l){return o.equals(this,l)},o.prototype.set=function(l,n){return Array.isArray(l)?(this.__bits=l,this.__len&&this.fill(this.__len),this):(this.fill(l),this.__bits[l]=n?1:0,this)},o.prototype.get=function(l,n){return this.fill(l),this.__bits[l]},o.prototype.count=o.prototype.population=o.prototype.bitcount=o.prototype.cardinality=function(){return o.cardinality(this.__bits)},o.prototype.toOffsets=function(){return o.toOffsets(this.__bits)},o.prototype.toString=function(){return this.__bits.slice().reverse().join("")},o.prototype.toBits=o.prototype.toArray=o.prototype.toJSON=function(){return this.__bits.slice()},o.prototype.valueOf=o.prototype.toNumber=function(){return o.toNumber(this.__bits)},o.prototype.toHex=function(){return o.toHex(this.__bits)},o.prototype.toBuffer=function(){return o.toBuffer(this.__bits)}
/*!
 * Proxy all Array methods to the current bits
 */,["concat","every","filter","forEach","indexOf",,"join","lastIndexOf","map","pop","push","reduce","reduceRight","reverse","shift","slice","some","sort","splice","unshift"].forEach(function(l){o.prototype[l]=function(){return Array.prototype[l].apply(this.__bits,arguments)}})
/*!
 * Module exports.
 */,l.exports=o},522:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});t(116),t(512).BloomFilterComponent;n.BloomFilterRoutingModule=class{}}}]);