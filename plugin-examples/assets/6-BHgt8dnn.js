import{L as g}from"./lightweight-charts.production-3YEEhmMM.js";import{g as d}from"./sample-data-x_8-FZm1.js";import{B as m}from"./brushable-area-series-Bd5YbM-m.js";const a=window.chart=g("chart",{autoSize:!0,grid:{vertLines:{visible:!1},horzLines:{visible:!1}},timeScale:{borderVisible:!1},rightPriceScale:{borderVisible:!1},handleScale:!1,handleScroll:!1}),f={lineColor:"rgb(4,153,129)",topColor:"rgba(4,153,129, 0.4)",bottomColor:"rgba(4,153,129, 0)",lineWidth:3},u={lineColor:"rgb(40,98,255, 0.2)",topColor:"rgba(40,98,255, 0.05)",bottomColor:"rgba(40,98,255, 0)"},l={lineColor:"rgb(40,98,255)",topColor:"rgba(40,98,255, 0.4)",bottomColor:"rgba(40,98,255, 0)"},b=new m,n=a.addCustomSeries(b,{...l,priceLineVisible:!1}),h=d();n.setData(h);a.timeScale().fitContent();const e={drawing:!1,startLogical:null,activeRange:!1},i=a.chartElement();function c(o){const r=i.getBoundingClientRect(),t=o-r.left-a.priceScale("left").width();return t<0||t>a.timeScale().width()?null:a.timeScale().coordinateToLogical(t)}i.addEventListener("mousedown",o=>{n.applyOptions({brushRanges:[],...l}),e.startLogical=c(o.clientX),e.drawing=e.startLogical!==null,e.activeRange=!1});i.addEventListener("mousemove",o=>{if(!e.drawing)return;const r=c(o.clientX);if(r!==null&&e.startLogical!==null){const t=Math.min(e.startLogical,r),s=Math.max(e.startLogical,r);if(t===s)return;e.activeRange=!0,n.applyOptions({brushRanges:[{range:{from:t,to:s},style:f}],...u})}});i.addEventListener("mouseup",()=>{e.drawing=!1,e.activeRange||n.applyOptions({brushRanges:[],...l})});i.addEventListener("mouseleave",()=>{e.drawing=!1});
