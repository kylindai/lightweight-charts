"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15290"],{97691:function(e,i,t){t.r(i),t.d(i,{default:()=>l,frontMatter:()=>r,metadata:()=>n,assets:()=>c,toc:()=>h,contentTitle:()=>o});var n=JSON.parse('{"id":"plugins/intro","title":"Plugins Introduction","description":"The library provides a rich set of charting capabilities out of the box, but","source":"@site/versioned_docs/version-4.1/plugins/intro.md","sourceDirName":"plugins","slug":"/plugins/intro","permalink":"/lightweight-charts/docs/4.1/plugins/intro","draft":false,"unlisted":false,"tags":[],"version":"4.1","sidebarPosition":0,"frontMatter":{"sidebar_label":"Introduction","sidebar_position":0},"sidebar":"docsSidebar","previous":{"title":"Working with time zones","permalink":"/lightweight-charts/docs/4.1/time-zones"},"next":{"title":"Series Primitives","permalink":"/lightweight-charts/docs/4.1/plugins/series-primitives"}}'),s=t("85893"),a=t("50065");let r={sidebar_label:"Introduction",sidebar_position:0},o="Plugins Introduction",c={},h=[{value:"Custom Series",id:"custom-series",level:2},{value:"Adding a custom series to a chart",id:"adding-a-custom-series-to-a-chart",level:3},{value:"Drawing Primitives",id:"drawing-primitives",level:2},{value:"Adding a primitive to an existing series",id:"adding-a-primitive-to-an-existing-series",level:3},{value:"Adding a primitive to the chart instead of a series",id:"adding-a-primitive-to-the-chart-instead-of-a-series",level:3},{value:"Examples",id:"examples",level:2}];function d(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"plugins-introduction",children:"Plugins Introduction"})}),"\n",(0,s.jsx)(i.p,{children:"The library provides a rich set of charting capabilities out of the box, but\ndevelopers can also extend its functionality by building custom plugins."}),"\n",(0,s.jsxs)(i.p,{children:["Plugins in Lightweight Charts\u2122\uFE0F come in two types:\n",(0,s.jsx)(i.a,{href:"#custom-series",children:"custom series"})," and ",(0,s.jsx)(i.a,{href:"#drawing-primitives",children:"drawing primitives"}),".\nCustom series allow developers to define new types of series, while drawing\nprimitives enable the creation of custom visualizations, drawing tools, and\nchart annotations (and more) which can be attached to an existing series."]}),"\n",(0,s.jsx)(i.admonition,{title:"Picking between the Custom Series and Drawing Primitives",type:"tip",children:(0,s.jsxs)(i.p,{children:["In the majority of cases you will most likely be better served by using a\n",(0,s.jsx)(i.a,{href:"#drawing-primitives",children:"Drawing Primitive"})," plugin unless you are specifically\nlooking to create a new type of series."]})}),"\n",(0,s.jsx)(i.p,{children:"With the flexibility provided by these plugins, developers can create highly\ncustomizable charting applications for their users."}),"\n",(0,s.jsx)(i.h2,{id:"custom-series",children:"Custom Series"}),"\n",(0,s.jsxs)(i.p,{children:["Custom series allow developers to create new types of series with their own data\nstructures, and rendering logic (implemented using\n",(0,s.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D",children:"CanvasRenderingContext2D"}),"\nmethods). These custom series extend the current capabilities of our built-in\nseries, providing a consistent API which mirrors the built-in chart types. These\nseries are expected to have a uniform width for each data point, which ensures\nthat the chart maintains a consistent look and feel across all series types. The\nonly restriction on the data structure is that it should extend the\nWhitespaceData interface (have a valid time property for each data point)."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsxs)(i.strong,{children:["You can find a more detailed guide to developing custom series in the\n",(0,s.jsx)(i.a,{href:"./custom_series/",children:"Custom Series Types"})," article."]})}),"\n",(0,s.jsx)(i.h3,{id:"adding-a-custom-series-to-a-chart",children:"Adding a custom series to a chart"}),"\n",(0,s.jsxs)(i.p,{children:["A custom series can be added to a chart using the\n",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/4.1/api/interfaces/IChartApi#addcustomseries",children:(0,s.jsx)(i.code,{children:"addCustomSeries"})})," method\nwhich expects an instance of a class implementing the\n",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/4.1/api/interfaces/ICustomSeriesPaneView",children:"ICustomSeriesPaneView"})," interface\nas the first argument, and an optional set of options as the second argument.\nThe series can then be used just like any other series, for example you would\nuse ",(0,s.jsx)(i.code,{children:"setData"})," method to provide data to the series."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",metastring:"title='javascript'",children:"class MyCustomSeries {\n    /* Class implementing the ICustomSeriesPaneView interface */\n}\n\n// Create an instantiated custom series.\nconst customSeriesInstance = new MyCustomSeries();\n\nconst chart = createChart(document.getElementById('container'));\nconst myCustomSeries = chart.addCustomSeries(customSeriesInstance, {\n    // options for the MyCustomSeries\n    customOption: 10,\n});\n\nconst data = [\n    { time: 1642425322, value: 123, customValue: 456 },\n    /* ... more data */\n];\n\nmyCustomSeries.setData(data);\n"})}),"\n",(0,s.jsx)(i.h2,{id:"drawing-primitives",children:"Drawing Primitives"}),"\n",(0,s.jsx)(i.p,{children:"Drawing primitives provide a more flexible approach to extending the charting\ncapabilities of Lightweight Charts\u2122\uFE0F. They are attached to a specific series and\ncan draw anywhere on the chart, including the main chart pane, price scales, and\ntime scales."}),"\n",(0,s.jsx)(i.p,{children:"Primitives can be used to create custom drawing tools or indicators, or to add\nentirely new visualizations to the chart. Primitives can be drawn at different\nlevels in the visual stack, allowing for complex compositions of multiple\nprimitives."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsxs)(i.strong,{children:["You can find a more detailed guide to developing series primitives in the\n",(0,s.jsx)(i.a,{href:"./series-primitives/",children:"Series Primitives"})," article."]})}),"\n",(0,s.jsx)(i.h3,{id:"adding-a-primitive-to-an-existing-series",children:"Adding a primitive to an existing series"}),"\n",(0,s.jsxs)(i.p,{children:["A custom series primitive can be added to an existing series using the\n",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/4.1/api/interfaces/ISeriesApi#attachprimitive",children:(0,s.jsx)(i.code,{children:"attachPrimitive()"})})," method\nwhich expects an instantiated object implementing the\n",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/4.1/api/type-aliases/ISeriesPrimitive",children:"ISeriesPrimitive"})," interface as the first\nargument."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",metastring:"title='javascript'",children:"class MyCustomPrimitive {\n    /* Class implementing the ISeriesPrimitive interface */\n}\n\n// Create an instantiated series primitive.\nconst myCustomPrimitive = new MyCustomPrimitive();\n\nconst chart = createChart(document.getElementById('container'));\nconst lineSeries = chart.addLineSeries();\n\nconst data = [\n    { time: 1642425322, value: 123 },\n    /* ... more data */\n];\n\n// Attach the primitive to the series\nlineSeries.attachPrimitive(myCustomPrimitive);\n"})}),"\n",(0,s.jsx)(i.h3,{id:"adding-a-primitive-to-the-chart-instead-of-a-series",children:"Adding a primitive to the chart instead of a series"}),"\n",(0,s.jsx)(i.p,{children:"It is required that a drawing primitive is attached to series on the chart. In some cases, it might not make sense to attach a primitive to a specific series on the chart, for example if you are dynamically adding and removing series but would like a specific primitive to remain on the chart always. If this is the case then it is recommended to create an empty series (of any type) and attach the primitive to that instead."}),"\n",(0,s.jsx)(i.admonition,{type:"caution",children:(0,s.jsx)(i.p,{children:"This series wouldn't have data, and thus wouldn't have the concept of price values for the vertical positioning of items. In some cases, such as a watermark, this isn't an issue."})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Example:"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",metastring:"title='javascript'",children:"// ...\n// Create an instantiated series primitive.\nconst myCustomPrimitive = new MyCustomPrimitive();\n\nconst chart = createChart(document.getElementById('container'));\n\n// an empty series which won't ever have data\nconst chartSeries = chart.addLineSeries();\nchartSeries.attachPrimitive(myCustomPrimitive);\n\n"})}),"\n",(0,s.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(i.p,{children:["We have a few example plugins within the ",(0,s.jsx)(i.code,{children:"plugin-examples"})," folder of the Lightweight Charts\u2122\uFE0F repo: ",(0,s.jsx)(i.a,{href:"https://github.com/tradingview/lightweight-charts/tree/master/plugin-examples",children:"plugin-examples"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["You can view a demo site for these plugin examples here: ",(0,s.jsx)(i.a,{href:"https://tradingview.github.io/lightweight-charts/plugin-examples",children:"Plugin Examples Demos"}),"."]})]})}function l(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return o},a:function(){return r}});var n=t(67294);let s={},a=n.createContext(s);function r(e){let i=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);