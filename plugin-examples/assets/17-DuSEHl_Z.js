var d=Object.defineProperty;var p=(i,t,e)=>t in i?d(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var s=(i,t,e)=>p(i,typeof t!="symbol"?t+"":t,e);import{P as _,L as P,K as m,V as f}from"./lightweight-charts.production-3YEEhmMM.js";import{g as w}from"./sample-data-x_8-FZm1.js";import{p as v}from"./positions-t2UKkghX.js";class x{constructor(){s(this,"_price",null);s(this,"_x",null);s(this,"_color","#000000")}update(t,e,r){this._price=t,this._color=e,this._x=r}draw(t){t.useBitmapCoordinateSpace(e=>{if(this._price===null||this._x===null)return;const r=Math.round(this._x*e.horizontalPixelRatio),a=v(this._price,e.verticalPixelRatio,e.verticalPixelRatio),o=a.position+a.length/2,n=e.context;n.beginPath(),n.setLineDash([4*e.verticalPixelRatio,2*e.verticalPixelRatio]),n.moveTo(r,o),n.lineTo(e.bitmapSize.width,o),n.strokeStyle=this._color,n.lineWidth=e.verticalPixelRatio,n.stroke()})}}class V{constructor(){s(this,"_renderer");this._renderer=new x}renderer(){return this._renderer}update(t,e,r){this._renderer.update(t,e,r)}}class L{constructor(){s(this,"_paneViews");s(this,"_chart",null);s(this,"_series",null);this._paneViews=[new V]}attached({chart:t,series:e}){this._chart=t,this._series=e,this._series.applyOptions({priceLineVisible:!1})}detached(){this._chart=null,this._series=null}updateAllViews(){if(!this._series||!this._chart)return;const t=this._series.options();let e=t.priceLineColor||t.color||"#000000";const r=this._series.dataByIndex(1e5,_.NearestLeft);let a=null,o=null;r&&(r.color!==void 0&&(e=r.color),a=S(r),o=this._chart.timeScale().timeToCoordinate(r.time));const n=a!==null?this._series.priceToCoordinate(a):null;this._paneViews.forEach(u=>u.update(n,e,o))}paneViews(){return this._paneViews}}function S(i){return i.value!==void 0?i.value:i.close!==void 0?i.close:null}const l=window.chart=P("chart",{autoSize:!0}),c=l.addSeries(m,{lastPriceAnimation:f.OnDataUpdate}),h=w(),[R,g]=[h.slice(0,-100),h.slice(-100)];c.setData(R);c.attachPrimitive(new L);const D=l.timeScale().scrollPosition();l.timeScale().scrollToPosition(D+20,!1);function*y(i){for(const t of i)yield t;return null}const C=y(g),T=window.setInterval(()=>{const i=C.next();if(i.done){window.clearInterval(T);return}c.update(i.value)},200);
