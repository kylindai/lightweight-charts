"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8411"],{45508:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>h,metadata:()=>r,assets:()=>m,toc:()=>g,contentTitle:()=>u});var r=JSON.parse('{"id":"how_to/set-crosshair-position","title":"Set crosshair position","description":"Examples of how to add a programatically set the crosshair position.","source":"@site/tutorials/how_to/set-crosshair-position.mdx","sourceDirName":"how_to","slug":"/how_to/set-crosshair-position","permalink":"/lightweight-charts/tutorials/how_to/set-crosshair-position","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Set crosshair position","sidebar_label":"Set crosshair position","description":"Examples of how to add a programatically set the crosshair position.","pagination_prev":null,"pagination_next":null,"keywords":["crosshair","tracking","example"]},"sidebar":"tutorialsSidebar"}'),i=n("85893"),a=n("50065"),s=n("30353"),o=n("57378");n("67294");var c=n("6646");function l(e){let{preferredVersion:t}=(0,o.J)(),n=c&&c.length>0?c["0"]:"",r=t?.name??n??"current";return"current"===r||parseFloat(r)>=e.version?e.children:e.fallback({})}var d=n("92329");let h={title:"Set crosshair position",sidebar_label:"Set crosshair position",description:"Examples of how to add a programatically set the crosshair position.",pagination_prev:null,pagination_next:null,keywords:["crosshair","tracking","example"]},u=void 0,m={},g=[{value:"Syncing two charts",id:"syncing-two-charts",level:2},{value:"Tracking without long-press (on mobile)",id:"tracking-without-long-press-on-mobile",level:2}];function C(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Lightweight Charts\u2122 allows the crosshair position to be set programatically using the ",(0,i.jsx)(t.a,{href:"/docs/api/interfaces/IChartApi#setcrosshairposition",children:(0,i.jsx)(t.code,{children:"setCrosshairPosition"})}),", and cleared using ",(0,i.jsx)(t.a,{href:"/docs/api/interfaces/IChartApi#clearcrosshairposition",children:(0,i.jsx)(t.code,{children:"clearCrosshairPosition"})}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Usually the crosshair position is set automatically by the user's actions. However in some cases you may want to set it explicitly. For example if you want to synchronise the crosshairs of two separate charts."}),"\n","\n","\n",(0,i.jsxs)(l,{version:4.1,fallback:()=>(0,i.jsx)(d.Z,{notCurrent:"These tutorials are for version 4.1 (or greater) of Lightweight Charts\u2122.",type:"caution",displayVersionMessage:!0}),children:[(0,i.jsx)(t.h2,{id:"syncing-two-charts",children:"Syncing two charts"}),(0,i.jsx)(s.ZP,{replaceThemeConstants:!0,chart:!0,className:"language-js",hideableCode:!0,iframeStyle:{height:"500px"},chartOnTop:!0,children:"// remove-start\n// Lightweight Charts\u2122 Example: Crosshair syncing\n// https://tradingview.github.io/lightweight-charts/tutorials/how_to/set-crosshair-position\n// remove-end\n\n// hide-start\nfunction generateData(startValue, startDate) {\n	const res = [];\n	const time = startDate ?? (new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0)));\n	for (let i = 0; i < 500; ++i) {\n		res.push({\n			time: time.getTime() / 1000,\n			value: i + startValue,\n		});\n\n		time.setUTCDate(time.getUTCDate() + 1);\n	}\n\n	return res;\n}\n\nconst chart1 = createChart(\n	document.getElementById('container'),\n	{\n		height: 250,\n		crosshair: {\n			mode: 0,\n		},\n		timeScale: {\n			visible: false,\n		},\n		layout: {\n			background: {\n				type: 'solid',\n				color: '#FFF5F5',\n			},\n		},\n	}\n);\nconst mainSeries1 = chart1.addSeries(LineSeries, {\n	color: 'red',\n});\n\nmainSeries1.setData(generateData(0));\n\nconst chart2 = createChart(\n	document.getElementById('container'),\n	{\n		height: 250,\n		layout: {\n			background: {\n				type: 'solid',\n				color: '#F5F5FF',\n			},\n		},\n	}\n);\n\nconst mainSeries2 = chart2.addSeries(LineSeries, {\n	color: 'blue',\n});\n\nmainSeries2.setData(generateData(100));\n// hide-end\n\nchart1.timeScale().subscribeVisibleLogicalRangeChange(timeRange => {\n	chart2.timeScale().setVisibleLogicalRange(timeRange);\n});\n\nchart2.timeScale().subscribeVisibleLogicalRangeChange(timeRange => {\n	chart1.timeScale().setVisibleLogicalRange(timeRange);\n});\n\nfunction getCrosshairDataPoint(series, param) {\n	if (!param.time) {\n		return null;\n	}\n	const dataPoint = param.seriesData.get(series);\n	return dataPoint || null;\n}\n\nfunction syncCrosshair(chart, series, dataPoint) {\n	if (dataPoint) {\n		chart.setCrosshairPosition(dataPoint.value, dataPoint.time, series);\n		return;\n	}\n	chart.clearCrosshairPosition();\n}\nchart1.subscribeCrosshairMove(param => {\n	const dataPoint = getCrosshairDataPoint(mainSeries1, param);\n	syncCrosshair(chart2, mainSeries2, dataPoint);\n});\nchart2.subscribeCrosshairMove(param => {\n	const dataPoint = getCrosshairDataPoint(mainSeries2, param);\n	syncCrosshair(chart1, mainSeries1, dataPoint);\n});\n"}),(0,i.jsx)(t.h2,{id:"tracking-without-long-press-on-mobile",children:"Tracking without long-press (on mobile)"}),(0,i.jsx)(t.p,{children:"If scrolling and scaling is disabled, then the API can be used to enable a kind of tracking mode without the user having to long-press the screen."}),(0,i.jsx)(s.ZP,{replaceThemeConstants:!0,chart:!0,className:"language-js",hideableCode:!0,chartOnTop:!0,children:"// remove-start\n// Lightweight Charts\u2122 Example: Crosshair syncing\n// https://tradingview.github.io/lightweight-charts/tutorials/how_to/set-crosshair-position\n// remove-end\n\n// hide-start\nfunction generateData() {\n	const res = [];\n	const time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));\n	for (let i = 0; i < 500; ++i) {\n		res.push({\n			time: time.getTime() / 1000,\n			value: i,\n		});\n\n		time.setUTCDate(time.getUTCDate() + 1);\n	}\n\n	return res;\n}\n\nconst chart = createChart(\n	document.getElementById('container'),\n	{\n		handleScale: false,\n		handleScroll: false,\n	}\n);\n\nconst mainSeries = chart.addSeries({\n	priceFormat: {\n		minMove: 1,\n		precision: 0,\n	},\n});\n\nmainSeries.setData(generateData());\n\nchart.timeScale().fitContent();\n// hide-end\n\ndocument.getElementById('container').addEventListener('touchmove', e => {\n	const bcr = document.getElementById('container').getBoundingClientRect();\n	const x = bcr.left + e.touches[0].clientX;\n	const y = bcr.top + e.touches[0].clientY;\n\n	const price = mainSeries.coordinateToPrice(y);\n	const time = chart.timeScale().coordinateToTime(x);\n\n	if (!Number.isFinite(price) || !Number.isFinite(time)) {\n		return;\n	}\n\n	chart.setCrosshairPosition(price, time, mainSeries);\n});\n\ndocument.getElementById('container').addEventListener('touchend', () => {\n	chart.clearCrosshairPosition();\n});\n"})]})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(C,{...e})}):C(e)}},64926:function(e,t,n){n.d(t,{Z:()=>E});var r=n("85893"),i=n("67294"),a=n("67026"),s=n("7670"),o=n("66171");let c={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function l(e){let{type:t,className:n,children:i}=e;return(0,r.jsx)("div",{className:(0,a.Z)(o.k.common.admonition,o.k.common.admonitionType(t),c.admonition,n),children:i})}function d(e){let{icon:t,title:n}=e;return(0,r.jsxs)("div",{className:c.admonitionHeading,children:[(0,r.jsx)("span",{className:c.admonitionIcon,children:t}),n]})}function h(e){let{children:t}=e;return t?(0,r.jsx)("div",{className:c.admonitionContent,children:t}):null}function u(e){let{type:t,icon:n,title:i,children:a,className:s}=e;return(0,r.jsxs)(l,{type:t,className:s,children:[i||n?(0,r.jsx)(d,{title:i,icon:n}):null,(0,r.jsx)(h,{children:a})]})}let m={icon:(0,r.jsx)(function(e){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})},{}),title:(0,r.jsx)(s.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function g(e){return(0,r.jsx)(u,{...m,...e,className:(0,a.Z)("alert alert--secondary",e.className),children:e.children})}let C={icon:(0,r.jsx)(function(e){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})},{}),title:(0,r.jsx)(s.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function p(e){return(0,r.jsx)(u,{...C,...e,className:(0,a.Z)("alert alert--success",e.className),children:e.children})}let f={icon:(0,r.jsx)(function(e){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})},{}),title:(0,r.jsx)(s.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function O(e){return(0,r.jsx)(u,{...f,...e,className:(0,a.Z)("alert alert--info",e.className),children:e.children})}function x(e){return(0,r.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}let L={icon:(0,r.jsx)(x,{}),title:(0,r.jsx)(s.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})},_={icon:(0,r.jsx)(function(e){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})},{}),title:(0,r.jsx)(s.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})},b={icon:(0,r.jsx)(x,{}),title:(0,r.jsx)(s.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})},v={note:g,tip:p,info:O,warning:function(e){return(0,r.jsx)(u,{...L,...e,className:(0,a.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,r.jsx)(u,{..._,...e,className:(0,a.Z)("alert alert--danger",e.className),children:e.children})},secondary:e=>(0,r.jsx)(g,{title:"secondary",...e}),important:e=>(0,r.jsx)(O,{title:"important",...e}),success:e=>(0,r.jsx)(p,{title:"success",...e}),caution:function(e){return(0,r.jsx)(u,{...b,...e,className:(0,a.Z)("alert alert--warning",e.className),children:e.children})}};function E(e){let t=function(e){let{mdxAdmonitionTitle:t,rest:n}=function(e){let t=i.Children.toArray(e),n=t.find(e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.type),a=t.filter(e=>e!==n);return{mdxAdmonitionTitle:n?.props.children,rest:a.length>0?(0,r.jsx)(r.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}(e),n=function(e){let t=v[e];return t||(console.warn(`No admonition component found for admonition type "${e}". Using Info as fallback.`),v.info)}(t.type);return(0,r.jsx)(n,{...t})}},30353:function(e,t,n){n.d(t,{ZP:()=>f});var r=n("85893"),i=n("67294"),a=n("31705"),s=n("44634"),o=n("79207"),c=n("57378"),l=n("6646");function d(e,t,n){e.addEventListener("resize",()=>{let e=t.getBoundingClientRect();n(e.width,e.height)},!0)}let h={3.8:async e=>{let t=await n.e("70967").then(n.bind(n,51083));return{module:t,createChart:(n,r)=>{let i=t.createChart(n,r);return d(e,n,i.resize.bind(i)),i},createChartEx:void 0,createYieldCurveChart:void 0,createOptionsChart:void 0}},"4.0":async e=>{let t=await n.e("98966").then(n.bind(n,11413));return{module:t,createChart:(n,r)=>{let i=t.createChart(n,r);return d(e,n,i.resize.bind(i)),i},createChartEx:void 0,createYieldCurveChart:void 0,createOptionsChart:void 0}},4.1:async e=>{let t=await n.e("85998").then(n.bind(n,1860));return{module:t,createChart:(n,r)=>{let i=t.createChart(n,r);return d(e,n,i.resize.bind(i)),i},createChartEx:(n,r,i)=>{let a=t.createChartEx(n,r,i);return d(e,n,a.resize.bind(a)),a},createYieldCurveChart:void 0,createOptionsChart:void 0}},4.2:async e=>{let t=await n.e("15373").then(n.bind(n,15757));return{module:t,createChart:(n,r)=>{let i=t.createChart(n,r);return d(e,n,i.resize.bind(i)),i},createChartEx:(n,r,i)=>{let a=t.createChartEx(n,r,i);return d(e,n,a.resize.bind(a)),a},createYieldCurveChart:void 0,createOptionsChart:void 0}},"5.0":async e=>{let t=await n.e("11191").then(n.bind(n,96473));return{module:t,createChart:(n,r)=>{let i=t.createChart(n,r);return d(e,n,i.resize.bind(i)),i},createChartEx:(n,r,i)=>{let a=t.createChartEx(n,r,i);return d(e,n,a.resize.bind(a)),a},createYieldCurveChart:(n,r)=>{let i=t.createYieldCurveChart(n,r);return d(e,n,i.resize.bind(i)),i},createOptionsChart:(n,r)=>{let i=t.createOptionsChart(n,r);return d(e,n,i.resize.bind(i)),i}}},current:async()=>{let e=await n.e("22433").then(n.bind(n,3768));return{module:e,createChart:(t,n)=>{let r=e.createChart(t,n);return d(window,t,r.resize.bind(r)),r},createChartEx:(t,n,r)=>{let i=e.createChartEx(t,n,r);return d(window,t,i.resize.bind(i)),i},createYieldCurveChart:(t,n)=>{let r=e.createYieldCurveChart(t,n);return d(window,t,r.resize.bind(r)),r},createOptionsChart:(t,n)=>{let r=e.createOptionsChart(t,n);return d(window,t,r.resize.bind(r)),r}}}},u={iframe:"iframe_R_Fr"};function m(e){let{script:t,iframeStyle:n}=e,{preferredVersion:a}=(0,c.J)(),s=l&&l.length>0?l["0"]:"",o=a?.name??s??"current",d=`
		<style>
			html,
			body,
			#container {
				width: 100%;
				height: 100%;
				overflow: hidden;
				margin: 0;
			}
		</style>
		<div id="container"></div>
		<script>
			window.run = () => {
				${t}
			};
		</script>
	`,m=i.useRef(null);return i.useEffect(()=>{let e=m.current,t=e?.contentWindow,n=e?.contentDocument;if(null===e||!t||!n)return;let r=async()=>{try{let{module:e,createChart:n,createChartEx:r,createYieldCurveChart:i,createOptionsChart:a}=await h[o](t);Object.assign(t,e),t.createChart=n,t.createChartEx=r,t.createYieldCurveChart=i,t.createOptionsChart=a,"current"===o&&(t.LineSeries=e.LineSeries,t.AreaSeries=e.AreaSeries,t.CandlestickSeries=e.CandlestickSeries,t.BarSeries=e.BarSeries,t.HistogramSeries=e.HistogramSeries),t.run?.()}catch(e){console.error(e)}};if(void 0!==t.run)r();else{let t=()=>{r(),e.removeEventListener("load",t)};e.addEventListener("load",t)}},[d]),(0,r.jsx)("iframe",{ref:m,srcDoc:d,className:u.iframe,style:n},t)}var g=n("98159");let C=()=>`${Math.random().toString(36).slice(2,11)}`,p=Object.keys(g.l.DARK),f=e=>{let{chart:t,replaceThemeConstants:n,hideableCode:c,chartOnly:l,chartOnTop:d=!1,iframeStyle:h,replaceTabs:f=!0,codeUsage:O,...x}=e,{children:L}=e,{colorMode:_}=(0,o.I)(),b=function(){let[e,t]=(0,i.useState)("");return(0,i.useEffect)(()=>t(C()),[]),e}();if(n&&"string"==typeof L&&(L=function(e,t){let n=t?g.l.DARK:g.l.LIGHT,r=e;for(let e of p)r=r.replace(RegExp(e,"g"),`'${n[e]}'`);return r}(L,"dark"===_)),f&&"string"==typeof L&&(L=L.replace(/\t/g,"    ")),L=L.replace(RegExp(/\/\/ delete-start[\w\W]*?\/\/ delete-end/,"gm"),""),t||c){let e=!l&&(0,r.jsx)(a.Z,{...x,children:L}),n=t&&(0,r.jsx)(s.Z,{fallback:(0,r.jsx)("div",{className:u.iframe,children:"\xa0"}),children:()=>(0,r.jsx)(m,{script:L,iframeStyle:h})}),i=c&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{id:b,type:"checkbox",className:"toggle-hidden-lines"}),(0,r.jsx)("label",{className:"toggle-label",htmlFor:b,children:"Show all code"})]});return d?(0,r.jsxs)(r.Fragment,{children:[n,O,i,e]}):(0,r.jsxs)(r.Fragment,{children:[O,i,e,n]})}return(0,r.jsx)(a.Z,{...x,children:L})}},92329:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(85893),i=n(57378),a=n(64926);n(67294);var s=n(6646);function o(e){let{notCurrent:t,isCurrent:n,type:o,title:c,displayVersionMessage:l}=e,{preferredVersion:d,savePreferredVersionName:h}=(0,i.J)(),u=!!(t&&!d?.isLast),m=!!(n&&d?.isLast),g=s&&s.length>0?s["0"]:"",C=d?.label??d?.name??"";if(!u&&!m||!C)return(0,r.jsx)(r.Fragment,{});let p=(u?t:n)??"";return p=p.replace(/DOC_VERSION/g,C).replace(/CURRENT_VERSION/g,g),(0,r.jsx)("div",{children:(0,r.jsxs)(a.Z,{type:o,title:c,children:[(0,r.jsx)("p",{children:p}),l&&(0,r.jsxs)("p",{children:["You are currently viewing the documentation for the version tagged:"," ",(0,r.jsx)("strong",{children:C}),". ",(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:(0,r.jsx)("a",{href:"",onClick:()=>h(g),children:"Switch to the latest published version"})})," ","(",g,")"]})]})})}},98159:function(e,t,n){n.d(t,{l:function(){return r}});let r={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",LINE_LINE2_COLOR:"rgb(225, 87, 90)",LINE_LINE3_COLOR:"rgb(242, 142, 44)",LINE_LINE4_COLOR:"rgb(164, 89, 209)",LINE_LINE5_COLOR:"rgb(27, 156, 133)",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",LINE_LINE2_COLOR:"rgb(225, 87, 90)",LINE_LINE3_COLOR:"rgb(242, 142, 44)",LINE_LINE4_COLOR:"rgb(164, 89, 209)",LINE_LINE5_COLOR:"rgb(27, 156, 133)",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},6646:function(e){e.exports=JSON.parse('["5.0","4.2","4.1","4.0","3.8"]')}}]);