"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[499],{1439:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var o=t(2791),r=t(6015),i=t(5953),a=t(4942),c=t(3366),s=t(7462),l=t(8182),u=t(8901),d=t(2603),m=t(163),p=t(7626),v=t(1674);var f=o.createContext(),g=t(2982),x=t(4923);function Z(e){return(0,x.Z)("MuiGrid",e)}var h=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],w=(0,t(782).Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,g.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),(0,g.Z)(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),(0,g.Z)(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),(0,g.Z)(h.map((function(e){return"grid-xs-".concat(e)}))),(0,g.Z)(h.map((function(e){return"grid-sm-".concat(e)}))),(0,g.Z)(h.map((function(e){return"grid-md-".concat(e)}))),(0,g.Z)(h.map((function(e){return"grid-lg-".concat(e)}))),(0,g.Z)(h.map((function(e){return"grid-xl-".concat(e)}))))),S=t(184),b=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function M(e){var n=parseFloat(e);return"".concat(n).concat(String(e).replace(String(n),"")||"px")}function k(e,n,t,o){var r=o[t];if(r){var i={};if(!0===r)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)i={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else{var a=function(e){var n,t=e.values,o=e.base,r=Object.keys(o);return 0===r.length?t:r.reduce((function(e,o){return e[o]="object"===typeof t?null!=t[o]?t[o]:t[n]:t,n=o,e}),{})}({values:o.columns,base:n.breakpoints.values}),c="".concat(Math.round(r/a[t]*1e8)/1e6,"%"),l={};if(o.container&&o.item&&0!==o.columnSpacing){var u=n.spacing(o.columnSpacing);if("0px"!==u){var d="calc(".concat(c," + ").concat(M(u),")");l={flexBasis:d,maxWidth:d}}}i=(0,s.Z)({flexBasis:c,flexGrow:0,maxWidth:c},l)}0===n.breakpoints.values[t]?Object.assign(e,i):e[n.breakpoints.up(t)]=i}}var P=(0,p.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,n){var t=e.styleProps,o=t.container,r=t.direction,i=t.item,a=t.lg,c=t.md,l=t.sm,u=t.spacing,d=t.wrap,m=t.xl,p=t.xs,v=t.zeroMinWidth;return(0,s.Z)({},n.root,o&&n.container,i&&n.item,v&&n.zeroMinWidth,o&&0!==u&&n["spacing-xs-".concat(String(u))],"row"!==r&&n["direction-xs-".concat(String(r))],"wrap"!==d&&n["wrap-xs-".concat(String(d))],!1!==p&&n["grid-xs-".concat(String(p))],!1!==l&&n["grid-sm-".concat(String(l))],!1!==c&&n["grid-md-".concat(String(c))],!1!==a&&n["grid-lg-".concat(String(a))],!1!==m&&n["grid-xl-".concat(String(m))])}})((function(e){var n=e.styleProps;return(0,s.Z)({boxSizing:"border-box"},n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},n.item&&{margin:0},n.zeroMinWidth&&{minWidth:0},"nowrap"===n.wrap&&{flexWrap:"nowrap"},"reverse"===n.wrap&&{flexWrap:"wrap-reverse"})}),(function(e){var n=e.theme,t=e.styleProps;return(0,u.k9)({theme:n},t.direction,(function(e){var n={flexDirection:e};return 0===e.indexOf("column")&&(n["& > .".concat(w.item)]={maxWidth:"none"}),n}))}),(function(e){var n=e.theme,t=e.styleProps,o=t.container,r=t.rowSpacing,i={};return o&&0!==r&&(i=(0,u.k9)({theme:n},r,(function(e){var t=n.spacing(e);return"0px"!==t?(0,a.Z)({width:"calc(100% + ".concat(M(t),")"),marginTop:"-".concat(M(t))},"& > .".concat(w.item),{paddingTop:M(t)}):{}}))),i}),(function(e){var n=e.theme,t=e.styleProps,o=t.container,r=t.columnSpacing,i={};return o&&0!==r&&(i=(0,u.k9)({theme:n},r,(function(e){var t=n.spacing(e);return"0px"!==t?(0,a.Z)({width:"calc(100% + ".concat(M(t),")"),marginLeft:"-".concat(M(t))},"& > .".concat(w.item),{paddingLeft:M(t)}):{}}))),i}),(function(e){var n=e.theme,t=e.styleProps;return n.breakpoints.keys.reduce((function(e,o){return k(e,n,o,t),e}),{})})),j=o.forwardRef((function(e,n){var t,r=(0,v.Z)({props:e,name:"MuiGrid"}),i=(0,d.Z)(r),a=i.className,u=i.columns,p=void 0===u?12:u,g=i.columnSpacing,x=i.component,h=void 0===x?"div":x,w=i.container,M=void 0!==w&&w,k=i.direction,j=void 0===k?"row":k,y=i.item,C=void 0!==y&&y,W=i.lg,N=void 0!==W&&W,R=i.md,z=void 0!==R&&R,q=i.rowSpacing,B=i.sm,G=void 0!==B&&B,F=i.spacing,L=void 0===F?0:F,T=i.wrap,A=void 0===T?"wrap":T,O=i.xl,I=void 0!==O&&O,D=i.xs,E=void 0!==D&&D,H=i.zeroMinWidth,J=void 0!==H&&H,K=(0,c.Z)(i,b),Q=q||L,U=g||L,V=o.useContext(f)||p,X=(0,s.Z)({},i,{columns:V,container:M,direction:j,item:C,lg:N,md:z,sm:G,rowSpacing:Q,columnSpacing:U,wrap:A,xl:I,xs:E,zeroMinWidth:J}),Y=function(e){var n=e.classes,t=e.container,o=e.direction,r=e.item,i=e.lg,a=e.md,c=e.sm,s=e.spacing,l=e.wrap,u=e.xl,d=e.xs,p={root:["root",t&&"container",r&&"item",e.zeroMinWidth&&"zeroMinWidth",t&&0!==s&&"spacing-xs-".concat(String(s)),"row"!==o&&"direction-xs-".concat(String(o)),"wrap"!==l&&"wrap-xs-".concat(String(l)),!1!==d&&"grid-xs-".concat(String(d)),!1!==c&&"grid-sm-".concat(String(c)),!1!==a&&"grid-md-".concat(String(a)),!1!==i&&"grid-lg-".concat(String(i)),!1!==u&&"grid-xl-".concat(String(u))]};return(0,m.Z)(p,Z,n)}(X);return t=(0,S.jsx)(P,(0,s.Z)({styleProps:X,className:(0,l.Z)(Y.root,a),as:h,ref:n},K)),12!==V?(0,S.jsx)(f.Provider,{value:V,children:t}):t})),y=t(6087),C=t(1233),W=t(5477),N=t(4872),R=[{img:t.p+"static/media/u2.bc24a40a19ce5d6c08d2.jpg",title:"Super awesome, Angular 12 is coming soon!",subtitle:"Some quick example text to build on the card title and make up the bulk of the card's content.",btncolor:"error"},{img:t.p+"static/media/u3.6fb683f062f76817b3e5.jpg",title:"Super awesome, Angular 12 is coming soon!",subtitle:"Some quick example text to build on the card title and make up the bulk of the card's content.",btncolor:"warning"},{img:t(5740),title:"Super awesome, Angular 12 is coming soon!",subtitle:"Some quick example text to build on the card title and make up the bulk of the card's content.",btncolor:"primary"}],z=function(){return(0,S.jsx)(j,{container:!0,children:R.map((function(e,n){return(0,S.jsx)(j,{item:!0,xs:12,lg:4,sx:{display:"flex",alignItems:"stretch"},children:(0,S.jsxs)(y.Z,{variant:"outlined",sx:{p:0,width:"100%"},children:[(0,S.jsx)("img",{src:e.img,alt:"img",width:"100%"}),(0,S.jsxs)(C.Z,{sx:{paddingLeft:"30px",paddingRight:"30px"},children:[(0,S.jsx)(W.Z,{sx:{fontSize:"h4.fontSize",fontWeight:"500"},children:e.title}),(0,S.jsx)(W.Z,{color:"textSecondary",sx:{fontSize:"14px",fontWeight:"400",mt:1},children:e.subtitle}),(0,S.jsx)(N.Z,{variant:"contained",sx:{mt:"15px"},color:e.btncolor,children:"Learn More"})]})]})},n)}))})},q=function(){return(0,S.jsx)(r.Z,{children:(0,S.jsxs)(i.ZP,{container:!0,spacing:0,children:[(0,S.jsx)(i.ZP,{item:!0,xs:12,lg:8}),(0,S.jsx)(z,{})]})})}},1233:function(e,n,t){t.d(n,{Z:function(){return f}});var o=t(7462),r=t(3366),i=t(2791),a=t(8182),c=t(163),s=t(7626),l=t(1674),u=t(4923);function d(e){return(0,u.Z)("MuiCardContent",e)}(0,t(782).Z)("MuiCardContent",["root"]);var m=t(184),p=["className","component"],v=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),f=i.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiCardContent"}),i=t.className,s=t.component,u=void 0===s?"div":s,f=(0,r.Z)(t,p),g=(0,o.Z)({},t,{component:u}),x=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},d,n)}(g);return(0,m.jsx)(v,(0,o.Z)({as:u,className:(0,a.Z)(x.root,i),styleProps:g,ref:n},f))}))},6087:function(e,n,t){t.d(n,{Z:function(){return g}});var o=t(7462),r=t(3366),i=t(2791),a=t(8182),c=t(163),s=t(7626),l=t(1674),u=t(3383),d=t(4923);function m(e){return(0,d.Z)("MuiCard",e)}(0,t(782).Z)("MuiCard",["root"]);var p=t(184),v=["className","raised"],f=(0,s.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{overflow:"hidden"}})),g=i.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiCard"}),i=t.className,s=t.raised,u=void 0!==s&&s,d=(0,r.Z)(t,v),g=(0,o.Z)({},t,{raised:u}),x=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},m,n)}(g);return(0,p.jsx)(f,(0,o.Z)({className:(0,a.Z)(x.root,i),elevation:u?8:void 0,ref:n,styleProps:g},d))}))},3383:function(e,n,t){t.d(n,{Z:function(){return x}});var o=t(3366),r=t(7462),i=t(2791),a=t(8182),c=t(163),s=t(3800),l=t(7626),u=t(1674),d=t(4923);function m(e){return(0,d.Z)("MuiPaper",e)}(0,t(782).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var p=t(184),v=["className","component","elevation","square","variant"],f=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},g=(0,l.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,n){var t=e.styleProps;return(0,r.Z)({},n.root,n[t.variant],!t.square&&n.rounded,"elevation"===t.variant&&n["elevation".concat(t.elevation)])}})((function(e){var n=e.theme,t=e.styleProps;return(0,r.Z)({backgroundColor:n.palette.background.paper,color:n.palette.text.primary,transition:n.transitions.create("box-shadow")},!t.square&&{borderRadius:n.shape.borderRadius},"outlined"===t.variant&&{border:"1px solid ".concat(n.palette.divider)},"elevation"===t.variant&&(0,r.Z)({boxShadow:n.shadows[t.elevation]},"dark"===n.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,s.Fq)("#fff",f(t.elevation)),", ").concat((0,s.Fq)("#fff",f(t.elevation)),")")}))})),x=i.forwardRef((function(e,n){var t=(0,u.Z)({props:e,name:"MuiPaper"}),i=t.className,s=t.component,l=void 0===s?"div":s,d=t.elevation,f=void 0===d?1:d,x=t.square,Z=void 0!==x&&x,h=t.variant,w=void 0===h?"elevation":h,S=(0,o.Z)(t,v),b=(0,r.Z)({},t,{component:l,elevation:f,square:Z,variant:w}),M=function(e){var n=e.square,t=e.elevation,o=e.variant,r=e.classes,i={root:["root",o,!n&&"rounded","elevation"===o&&"elevation".concat(t)]};return(0,c.Z)(i,m,r)}(b);return(0,p.jsx)(g,(0,r.Z)({as:l,styleProps:b,className:(0,a.Z)(M.root,i),ref:n},S))}))},6015:function(e,n,t){t.d(n,{Z:function(){return f}});var o=t(7462),r=t(3366),i=t(2791),a=t(8182),c=t(5917),s=t(104),l=t(8519),u=t(418),d=t(184),m=["className","component"];var p=t(5902),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.defaultTheme,t=e.defaultClassName,p=void 0===t?"MuiBox-root":t,v=e.generateClassName,f=e.styleFunctionSx,g=void 0===f?s.Z:f,x=(0,c.ZP)("div",{shouldForwardProp:function(e){return"theme"!==e&&"sx"!==e&&"as"!==e}})(g),Z=i.forwardRef((function(e,t){var i=(0,u.Z)(n),c=(0,l.Z)(e),s=c.className,f=c.component,g=void 0===f?"div":f,Z=(0,r.Z)(c,m);return(0,d.jsx)(x,(0,o.Z)({as:g,ref:t,className:(0,a.Z)(s,v?v(p):p),theme:i},Z))}));return Z}({defaultTheme:(0,t(4360).Z)(),defaultClassName:"MuiBox-root",generateClassName:p.Z.generate}),f=v},5740:function(e,n,t){e.exports=t.p+"static/media/u4.c36ed1d625e27dc19f42.jpg"}}]);
//# sourceMappingURL=499.32cb3748.chunk.js.map