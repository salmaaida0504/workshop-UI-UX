/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@floating-ui/dom@1.6.3/dist/floating-ui.dom.mjs
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{autoPlacement as t,shift as e,flip as n,size as i,hide as o,arrow as r,inline as l,limitShift as s,computePosition as c,rectToClientRect as f}from"/npm/@floating-ui/core@1.6.0/+esm";export{detectOverflow,offset}from"/npm/@floating-ui/core@1.6.0/+esm";import{createCoords as u,round as h,max as a,min as d,floor as p}from"/npm/@floating-ui/utils@0.2.1/+esm";import{getDocumentElement as g,isElement as m,getOverflowAncestors as x,isHTMLElement as y,getWindow as w,getComputedStyle as v,getNodeName as b,isOverflowElement as L,getNodeScroll as R,isTableElement as T,isContainingBlock as E,getContainingBlock as F,isWebKit as O,getParentNode as W,isLastTraversableNode as H}from"/npm/@floating-ui/utils@0.2.1/dom/+esm";export{getOverflowAncestors}from"/npm/@floating-ui/utils@0.2.1/dom/+esm";function z(t){const e=v(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const o=y(t),r=o?t.offsetWidth:n,l=o?t.offsetHeight:i,s=h(n)!==r||h(i)!==l;return s&&(n=r,i=l),{width:n,height:i,$:s}}function A(t){return m(t)?t:t.contextElement}function C(t){const e=A(t);if(!y(e))return u(1);const n=e.getBoundingClientRect(),{width:i,height:o,$:r}=z(e);let l=(r?h(n.width):n.width)/i,s=(r?h(n.height):n.height)/o;return l&&Number.isFinite(l)||(l=1),s&&Number.isFinite(s)||(s=1),{x:l,y:s}}const P=u(0);function B(t){const e=w(t);return O()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:P}function D(t,e,n,i){void 0===e&&(e=!1),void 0===n&&(n=!1);const o=t.getBoundingClientRect(),r=A(t);let l=u(1);e&&(i?m(i)&&(l=C(i)):l=C(t));const s=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==w(t))&&e}(r,n,i)?B(r):u(0);let c=(o.left+s.x)/l.x,h=(o.top+s.y)/l.y,a=o.width/l.x,d=o.height/l.y;if(r){const t=w(r),e=i&&m(i)?w(i):i;let n=t,o=n.frameElement;for(;o&&i&&e!==n;){const t=C(o),e=o.getBoundingClientRect(),i=v(o),r=e.left+(o.clientLeft+parseFloat(i.paddingLeft))*t.x,l=e.top+(o.clientTop+parseFloat(i.paddingTop))*t.y;c*=t.x,h*=t.y,a*=t.x,d*=t.y,c+=r,h+=l,n=w(o),o=n.frameElement}}return f({width:a,height:d,x:c,y:h})}const V=[":popover-open",":modal"];function S(t){return V.some((e=>{try{return t.matches(e)}catch(t){return!1}}))}function I(t){return D(g(t)).left+R(t).scrollLeft}function q(t,e,n){let i;if("viewport"===e)i=function(t,e){const n=w(t),i=g(t),o=n.visualViewport;let r=i.clientWidth,l=i.clientHeight,s=0,c=0;if(o){r=o.width,l=o.height;const t=O();(!t||t&&"fixed"===e)&&(s=o.offsetLeft,c=o.offsetTop)}return{width:r,height:l,x:s,y:c}}(t,n);else if("document"===e)i=function(t){const e=g(t),n=R(t),i=t.ownerDocument.body,o=a(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=a(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let l=-n.scrollLeft+I(t);const s=-n.scrollTop;return"rtl"===v(i).direction&&(l+=a(e.clientWidth,i.clientWidth)-o),{width:o,height:r,x:l,y:s}}(g(t));else if(m(e))i=function(t,e){const n=D(t,!0,"fixed"===e),i=n.top+t.clientTop,o=n.left+t.clientLeft,r=y(t)?C(t):u(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:o*r.x,y:i*r.y}}(e,n);else{const n=B(t);i={...e,x:e.x-n.x,y:e.y-n.y}}return f(i)}function M(t,e){const n=W(t);return!(n===e||!m(n)||H(n))&&("fixed"===v(n).position||M(n,e))}function N(t,e,n){const i=y(e),o=g(e),r="fixed"===n,l=D(t,!0,r,e);let s={scrollLeft:0,scrollTop:0};const c=u(0);if(i||!i&&!r)if(("body"!==b(e)||L(o))&&(s=R(e)),i){const t=D(e,!0,r,e);c.x=t.x+e.clientLeft,c.y=t.y+e.clientTop}else o&&(c.x=I(o));return{x:l.left+s.scrollLeft-c.x,y:l.top+s.scrollTop-c.y,width:l.width,height:l.height}}function $(t,e){return y(t)&&"fixed"!==v(t).position?e?e(t):t.offsetParent:null}function _(t,e){const n=w(t);if(!y(t)||S(t))return n;let i=$(t,e);for(;i&&T(i)&&"static"===v(i).position;)i=$(i,e);return i&&("html"===b(i)||"body"===b(i)&&"static"===v(i).position&&!E(i))?n:i||F(t)||n}const j={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:i,strategy:o}=t;const r="fixed"===o,l=g(i),s=!!e&&S(e.floating);if(i===l||s&&r)return n;let c={scrollLeft:0,scrollTop:0},f=u(1);const h=u(0),a=y(i);if((a||!a&&!r)&&(("body"!==b(i)||L(l))&&(c=R(i)),y(i))){const t=D(i);f=C(i),h.x=t.x+i.clientLeft,h.y=t.y+i.clientTop}return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-c.scrollLeft*f.x+h.x,y:n.y*f.y-c.scrollTop*f.y+h.y}},getDocumentElement:g,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:i,strategy:o}=t;const r=[..."clippingAncestors"===n?function(t,e){const n=e.get(t);if(n)return n;let i=x(t,[],!1).filter((t=>m(t)&&"body"!==b(t))),o=null;const r="fixed"===v(t).position;let l=r?W(t):t;for(;m(l)&&!H(l);){const e=v(l),n=E(l);n||"fixed"!==e.position||(o=null),(r?!n&&!o:!n&&"static"===e.position&&o&&["absolute","fixed"].includes(o.position)||L(l)&&!n&&M(t,l))?i=i.filter((t=>t!==l)):o=e,l=W(l)}return e.set(t,i),i}(e,this._c):[].concat(n),i],l=r[0],s=r.reduce(((t,n)=>{const i=q(e,n,o);return t.top=a(i.top,t.top),t.right=d(i.right,t.right),t.bottom=d(i.bottom,t.bottom),t.left=a(i.left,t.left),t}),q(e,l,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:_,getElementRects:async function(t){const e=this.getOffsetParent||_,n=this.getDimensions;return{reference:N(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await n(t.floating)}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:n}=z(t);return{width:e,height:n}},getScale:C,isElement:m,isRTL:function(t){return"rtl"===v(t).direction}};function k(t,e,n,i){void 0===i&&(i={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:c=!1}=i,f=A(t),u=o||r?[...f?x(f):[],...x(e)]:[];u.forEach((t=>{o&&t.addEventListener("scroll",n,{passive:!0}),r&&t.addEventListener("resize",n)}));const h=f&&s?function(t,e){let n,i=null;const o=g(t);function r(){var t;clearTimeout(n),null==(t=i)||t.disconnect(),i=null}return function l(s,c){void 0===s&&(s=!1),void 0===c&&(c=1),r();const{left:f,top:u,width:h,height:g}=t.getBoundingClientRect();if(s||e(),!h||!g)return;const m={rootMargin:-p(u)+"px "+-p(o.clientWidth-(f+h))+"px "+-p(o.clientHeight-(u+g))+"px "+-p(f)+"px",threshold:a(0,d(1,c))||1};let x=!0;function y(t){const e=t[0].intersectionRatio;if(e!==c){if(!x)return l();e?l(!1,e):n=setTimeout((()=>{l(!1,1e-7)}),100)}x=!1}try{i=new IntersectionObserver(y,{...m,root:o.ownerDocument})}catch(t){i=new IntersectionObserver(y,m)}i.observe(t)}(!0),r}(f,n):null;let m,y=-1,w=null;l&&(w=new ResizeObserver((t=>{let[i]=t;i&&i.target===f&&w&&(w.unobserve(e),cancelAnimationFrame(y),y=requestAnimationFrame((()=>{var t;null==(t=w)||t.observe(e)}))),n()})),f&&!c&&w.observe(f),w.observe(e));let v=c?D(t):null;return c&&function e(){const i=D(t);!v||i.x===v.x&&i.y===v.y&&i.width===v.width&&i.height===v.height||n();v=i,m=requestAnimationFrame(e)}(),n(),()=>{var t;u.forEach((t=>{o&&t.removeEventListener("scroll",n),r&&t.removeEventListener("resize",n)})),null==h||h(),null==(t=w)||t.disconnect(),w=null,c&&cancelAnimationFrame(m)}}const G=t,J=e,K=n,Q=i,U=o,X=r,Y=l,Z=s,tt=(t,e,n)=>{const i=new Map,o={platform:j,...n},r={...o.platform,_c:i};return c(t,e,{...o,platform:r})};export{X as arrow,G as autoPlacement,k as autoUpdate,tt as computePosition,K as flip,U as hide,Y as inline,Z as limitShift,j as platform,J as shift,Q as size};export default null;
//# sourceMappingURL=/sm/ffd445c179ffe34353f4ffe22723025958a71ba51da2fb7f29c29101ba10d218.map