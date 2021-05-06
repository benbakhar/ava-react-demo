/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/video-analyzer-widgets/dist/ava-widgets.min.js":
/*!*********************************************************************!*\
  !*** ./node_modules/video-analyzer-widgets/dist/ava-widgets.min.js ***!
  \*********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/*! For license information please see ava-widgets.min.js.LICENSE.txt */
    <template>
        <ava-design-system-provider theme="dark" use-defaults>
            <rvx-player
                cameraName="${e=>{var t;return null===(t=e.config)||void 0===t?void 0:t.videoName}}"
                style="${e=>e.width?"width: "+e.width+";":""}"
            ></rvx-player>
        </ava-design-system-provider>
    </template>
`;class Ye{createCSS(){return""}createBehavior(){}}function Ve(e,...t){const a=[];let i="";const r=[];for(let n=0,s=e.length-1;n<s;++n){i+=e[n];let s=t[n];if(s instanceof Ye){const e=s.createBehavior();s=s.createCSS(),e&&r.push(e)}s instanceof R||s instanceof CSSStyleSheet?(""!==i.trim()&&(a.push(i),i=""),a.push(s)):i+=s}i+=e[e.length-1],""!==i.trim()&&a.push(i);const n=R.create(a);return r.length&&n.withBehaviors(...r),n}const Ge=Ve`
    ava-design-system-provider {
        background: none;
    }
`;let We=class extends re{constructor(e){super(e),this.loaded=!1,this.source=null,this.allowedControllers=null}widgetConfigChanged(){this.init()}setAccessToken(e){e&&(this.config.token=e,he.avaAPIToken=this.config.token)}play(){this.shadowRoot.querySelector("rvx-player").play()}pause(){this.shadowRoot.querySelector("rvx-player").pause()}configure(e){this.config=e,this.init()}setSource(e){this.source=e,de.baseStream=this.source.src,this.loaded&&this.shadowRoot.querySelector("rvx-player").init(this.source.allowCrossSiteCredentials,this.source.authenticationToken,this.allowedControllers)}setPlaybackAuthorization(e){this.shadowRoot.querySelector("rvx-player").setPlaybackAuthorization(e)}set apiBase(e){ge.fallbackAPIBase=e}load(){return r(this,void 0,void 0,(function*(){this.loaded=!0;const e=this.shadowRoot.querySelector("rvx-player");if(this.source)e.init(this.source.allowCrossSiteCredentials,this.source.authenticationToken,this.allowedControllers);else try{yield ge.getVideo().then((t=>r(this,void 0,void 0,(function*(){if(t.status>=400&&t.status<600)this.handelFallback();else{const a=yield t.json();de.baseStream=a.properties.streaming.archiveBaseUrl,yield ge.authorize(),e.init(!0,"",this.allowedControllers)}})))).catch((e=>{console.log(e),this.handelFallback()}))}catch(e){this.handelFallback()}}))}init(){var e,t,a,i;(null===(e=this.config)||void 0===e?void 0:e.token)&&(he.tokenExpiredCallback=this.tokenExpiredCallback.bind(this),he.avaAPIToken=this.config.token),ge.accountID=null===(t=this.config)||void 0===t?void 0:t.accountId,ge.longRegionCode=null===(a=this.config)||void 0===a?void 0:a.longRegionCode,ge.videoName=null===(i=this.config)||void 0===i?void 0:i.videoName,this.allowedControllers=this.config.playerControllers}handelFallback(){de.baseStream="https://amsts71mediaarmacfgqhd-ts711.streaming.media.azure-test.net/527754db-43ab-4357-9fda-8959121d3a5e/test.ism",this.initPlayer()}initPlayer(){this.shadowRoot.querySelector("rvx-player").init(!0,"",this.allowedControllers)}tokenExpiredCallback(){this.$emit(ne.TOKEN_EXPIRED)}};i([W],We.prototype,"config",void 0),We=i([ie({name:"ava-player",template:Fe,styles:Ge})],We);const Ke=Ve`
    :host {
        display: inline-block;
        font-family: 'Arial';
    }

    .has-text {
        color: rgb(0 0 255);
    }
`,He=Le`
    <template>
        <div class="${e=>{var t;return(null===(t=e.text)||void 0===t?void 0:t.length)>1?"has-text":""}}">
            <span>${e=>e.text}</span>
        </div>
    </template>
`;let Ze=class extends ae{constructor(){super(...arguments),this.text="this is example component"}textChanged(){console.log("Text changed")}};i([W],Ze.prototype,"text",void 0),Ze=i([ie({name:"example-web-component",template:He,styles:Ke})],Ze);var Je=/\s/;var Xe=/^\s+/;const qe=function(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&Je.test(e.charAt(t)););return t}(e)+1).replace(Xe,""):e},$e=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},et="object"==typeof __webpack_require__.g&&__webpack_require__.g&&__webpack_require__.g.Object===Object&&__webpack_require__.g;var tt="object"==typeof self&&self&&self.Object===Object&&self;const at=et||tt||Function("return this")(),it=at.Symbol;var rt=Object.prototype,nt=rt.hasOwnProperty,st=rt.toString,ot=it?it.toStringTag:void 0;var lt=Object.prototype.toString;var At=it?it.toStringTag:void 0;const ht=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":At&&At in Object(e)?function(e){var t=nt.call(e,ot),a=e[ot];try{e[ot]=void 0;var i=!0}catch(e){}var r=st.call(e);return i&&(t?e[ot]=a:delete e[ot]),r}(e):function(e){return lt.call(e)}(e)},gt=function(e){return null!=e&&"object"==typeof e};var ut=/^[-+]0x[0-9a-f]+$/i,ct=/^0b[01]+$/i,dt=/^0o[0-7]+$/i,pt=parseInt;const Mt=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||gt(e)&&"[object Symbol]"==ht(e)}(e))return NaN;if($e(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=$e(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=qe(e);var a=ct.test(e);return a||dt.test(e)?pt(e.slice(2),a?2:8):ut.test(e)?NaN:+e};const mt=function(e){return e?Infinity===(e=Mt(e))||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0},Et=function(e){var t=mt(e),a=t%1;return t==t?a?t-a:t:0};var yt,Tt,It;!function(e){e.RENDER="DATE_PICKER_RENDER",e.DATE_CHANGE="DATE_PICKER_CHANGE"}(yt||(yt={})),function(e){e.CURRENT_TIME_CHANGE="SEGMENTS_TIMELINE_CURRENT_TIME_CHANGED",e.SEGMENT_CLICKED="SEGMENTS_TIMELINE_SEGMENT_CLICKED"}(Tt||(Tt={})),function(e){e.CURRENT_TIME_CHANGE="TIMELINE_CURRENT_TIME_CHANGE",e.JUMP_TO_NEXT_SEGMENT="TIMELINE_JUMP_TO_NEXT_SEGMENT",e.JUMP_TO_PREVIOUS_SEGMENT="TIMELINE_JUMP_TO_PREVIOUS_SEGMENT",e.SEGMENT_CHANGE="TIMELINE_SEGMENT_CHANGE"}(It||(It={}));const Dt=Ve`
    :host {
        display: inline-block;
        font-family: var(--font-family);
        width: 100%;
        overflow-x: scroll;
    }

    media-time-ruler {
        margin-bottom: 4px;
    }

    fast-slider {
        width: 90px;
        position: absolute;
        --corner-radius: 10;
        --design-unit: 3;
    }

    :host::-webkit-scrollbar {
        width: 40px; /* width of the entire scrollbar */
        height: 20px;
        position: relative;
    }

    :host::-webkit-scrollbar-track {
        background: #201f1e; /* color of the tracking area */
        margin-right: 96px;
        display: inline-flex;
        position: relative;
    }

    :host::-webkit-scrollbar-thumb {
        background-color: #484644; /* color of the scroll thumb */
        border-radius: 20px; /* roundness of the scroll thumb */
        border: 6px solid #201f1e; /* creates padding around scroll thumb */
    }
`,kt=Le`
    <template>
        <media-segments-timeline id="media-segments-timeline-${e=>e.id}"></media-segments-timeline>
        <media-time-ruler id="media-time-ruler-${e=>e.id}"></media-time-ruler>
    </template>
`;let ft=class extends ae{constructor(){super(...arguments),this.id=function(e){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}(),this.currentTime=0,this.DAY_DURATION_IN_SECONDS=86400,this.zoom=1,this.SLIDER_DENSITY=32,this.SLIDER_MAX_ZOOM=22}configChanged(){setTimeout((()=>{this.initData()}))}currentTimeChanged(){this.segmentsTimeline&&(this.segmentsTimeline.currentTime=this.currentTime)}connectedCallback(){super.connectedCallback(),this.initData()}disconnectedCallback(){var e;super.disconnectedCallback(),window.removeEventListener("resize",this.resize),window.removeEventListener(It.JUMP_TO_NEXT_SEGMENT,this.jumpToNextSegment),window.addEventListener(It.JUMP_TO_PREVIOUS_SEGMENT,this.jumpToPreviousSegment),null===(e=this.fastSlider)||void 0===e||e.removeEventListener("change",this.fastSliderChange)}initData(){var e,t,a,i,r;this.config&&(this.segmentsTimeline=null===(t=null===(e=this.$fastController.element)||void 0===e?void 0:e.shadowRoot)||void 0===t?void 0:t.querySelector("media-segments-timeline"),this.timeRuler=null===(i=null===(a=this.$fastController.element)||void 0===a?void 0:a.shadowRoot)||void 0===i?void 0:i.querySelector("media-time-ruler"),navigator.userAgent.includes("Firefox")&&(this.config.enableZoom=!1),this.config.enableZoom&&!this.fastSlider?(this.fastSlider=document.createElement("fast-slider"),this.$fastController.element.shadowRoot.appendChild(this.fastSlider)):this.fastSlider||(this.$fastController.element.style.overflowX="hidden"),window.addEventListener("resize",this.resize.bind(this)),window.addEventListener(It.JUMP_TO_NEXT_SEGMENT,this.jumpToNextSegment.bind(this)),window.addEventListener(It.JUMP_TO_PREVIOUS_SEGMENT,this.jumpToPreviousSegment.bind(this)),null===(r=this.fastSlider)||void 0===r||r.addEventListener("change",this.fastSliderChange.bind(this)),this.initTimeLine())}jumpToNextSegment(){var e;return null===(e=this.segmentsTimeline)||void 0===e?void 0:e.jumpToNextSegment()}jumpToPreviousSegment(){var e;return null===(e=this.segmentsTimeline)||void 0===e?void 0:e.jumpToPreviousSegment()}initTimeLine(){this.initSegmentsTimeline(),this.initTimeRuler(),setTimeout((()=>{this.initSlider()}),50)}initSlider(){if(!this.config.enableZoom||!this.fastSlider)return;const e=this.$fastController.element.getBoundingClientRect();this.fastSlider.style.top=e.top+e.height-20+"px",this.fastSlider.style.left=e.left+e.width-93+"px",this.fastSlider.min=this.SLIDER_DENSITY,this.fastSlider.max=this.SLIDER_MAX_ZOOM*this.SLIDER_DENSITY,this.fastSlider.value=""+this.zoom*this.SLIDER_DENSITY}initSegmentsTimeline(){var e;const t={data:{segments:null===(e=this.config)||void 0===e?void 0:e.segments,duration:this.DAY_DURATION_IN_SECONDS},displayOptions:{height:25,barHeight:12,top:0,renderTooltip:!1,renderProgress:!1,zoom:this.zoom}};this.segmentsTimeline.config=t,this.segmentsTimeline.addEventListener(Tt.SEGMENT_CLICKED,(e=>{this.$emit(It.SEGMENT_CHANGE,e.detail),e.stopPropagation()})),this.segmentsTimeline.addEventListener(Tt.CURRENT_TIME_CHANGE,(e=>{this.$emit(It.CURRENT_TIME_CHANGE,e.detail),e.stopPropagation()}))}initTimeRuler(){this.timeRuler.startDate=this.config.date||new Date,this.timeRuler.zoom=this.zoom}resize(){this.initTimeLine()}fastSliderChange(){this.zoom=+this.fastSlider.value/this.SLIDER_DENSITY,this.initSegmentsTimeline(),this.initTimeRuler()}};var Nt;i([W],ft.prototype,"id",void 0),i([W],ft.prototype,"config",void 0),i([W],ft.prototype,"currentTime",void 0),ft=i([ie({name:"media-timeline",template:kt,styles:Dt})],ft),function(e){e.REWIND="rewind",e.PLAY_PAUSE="play_pause",e.FAST_FORWARD="fast_forward",e.MUTE="mute",e.VOLUME="volume",e.SPACER="spacer",e.BODY_TRACKING="body_tracking",e.OVERFLOW_MENU="overflow_menu",e.FULLSCREEN="fullscreen",e.NEXT_DAY="next_day",e.PREVIOUS_DAY="previous_day",e.HOURS_LABEL="hours_label"}(Nt||(Nt={}));const St="M13.070 0.93q0.703 0.703 1.25 1.523t0.914 1.719 0.57 1.867 0.195 1.961q0 1-0.195 1.961t-0.563 1.867-0.922 1.719-1.25 1.523l-0.711-0.711q0.633-0.633 1.125-1.367t0.828-1.547 0.508-1.68 0.172-1.766-0.172-1.766-0.508-1.672-0.828-1.547-1.125-1.375l0.711-0.711zM13 8q0 1.406-0.531 2.68t-1.516 2.273l-0.711-0.711q0.852-0.852 1.305-1.945t0.453-2.297-0.453-2.297-1.305-1.945l0.711-0.711q0.984 1 1.516 2.273t0.531 2.68zM8.828 5.172q0.57 0.57 0.867 1.297t0.305 1.531q0 0.805-0.297 1.531t-0.875 1.297l-0.703-0.703q0.422-0.422 0.648-0.969t0.227-1.156q0-0.602-0.227-1.148t-0.648-0.977l0.703-0.703zM5.289 2h0.711v12h-0.703l-3.008-3h-2.289v-6h2.289l3-3zM5 3.711l-2.289 2.289h-1.711v4h1.711l2.289 2.289v-8.578z",Ct="M6 2h-0.711l-3 3h-2.289v6h2.289l3.008 3h0.703v-12zM5 3.711v8.578l-2.289-2.289h-1.711v-4h1.711l2.289-2.289zM13.657 5.707l-0.707-0.707-2.121 2.121-2.121-2.121-0.707 0.707 2.121 2.121-2.121 2.121 0.707 0.707 2.121-2.121 2.121 2.121 0.707-0.707-2.121-2.121 2.121-2.121z",vt=__nested_webpack_require_1251907__(681);class xt extends vt.ui.PlayButton{constructor(e,t){super(e,t),this.PATH_PLAY="m4 1.336 10.664 6.664-10.664 6.664zm1.336 2.406v8.516l6.813-4.258z",this.PATH_PAUSE="M10 2h1.5v12h-1.5v-12zM4.5 14v-12h1.5v12h-1.5z",this.init()}updateIcon(){this.isPaused()?this.path.setAttribute("d",this.PATH_PLAY):this.path.setAttribute("d",this.PATH_PAUSE)}init(){this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.path=document.createElementNS("http://www.w3.org/2000/svg","path"),this.path.setAttribute("fill","black"),this.svg.appendChild(this.path),this.button.appendChild(this.svg),this.updateIcon()}}class wt extends vt.ui.FastForwardButton{constructor(e,t){super(e,t),this.init()}init(){this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.path=document.createElementNS("http://www.w3.org/2000/svg","path"),this.path.setAttribute("fill","black"),this.path.setAttribute("d","m1.461 2.047 5.953 5.953-5.953 5.953-1.414-1.414 4.539-4.539-4.539-4.539zm13.953 5.953-5.953 5.953-1.414-1.414 4.539-4.539-4.539-4.539 1.414-1.414z"),this.svg.appendChild(this.path),this.button_.innerText="",this.button_.appendChild(this.svg)}}class _t extends vt.ui.RewindButton{constructor(e,t){super(e,t),this.init()}init(){this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.path=document.createElementNS("http://www.w3.org/2000/svg","path"),this.path.setAttribute("fill","black"),this.path.setAttribute("d","m11.414 8 4.539 4.539-1.414 1.414-5.953-5.953 5.953-5.953 1.414 1.414zm-3.461-4.539-4.539 4.539 4.539 4.539-1.414 1.414-5.953-5.953 5.953-5.953z"),this.svg.appendChild(this.path),this.button_.innerText="",this.button_.appendChild(this.svg)}}class Ut extends vt.ui.FullscreenButton{constructor(e,t){super(e,t),this.init()}updateIcon_(){this.button_.innerText="",this.button_.appendChild(this.svg),document.fullscreenElement?this.path.setAttribute("d","M2 9h5v5h-1v-3.289l-5.273 5.266-0.703-0.703 5.266-5.273h-3.289v-1zM10.711 6h3.289v1h-5v-5h1v3.289l5.273-5.266 0.703 0.703-5.266 5.273z"):this.path.setAttribute("d","M15 1v5h-1v-3.289l-11.289 11.289h3.289v1h-5v-5h1v3.289l11.289-11.289h-3.289v-1h5z")}init(){this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.path=document.createElementNS("http://www.w3.org/2000/svg","path"),this.path.setAttribute("fill","black"),this.svg.appendChild(this.path),this.updateIcon_()}}class bt extends vt.ui.MuteButton{constructor(e,t){super(e,t),this.init()}updateIcon_(){const e=this.ad?this.ad.isMuted()?Ct:St:this.video.muted?Ct:St;this.button_.innerText="",this.button_.appendChild(this.svg),this.path.setAttribute("d",e)}init(){this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.path=document.createElementNS("http://www.w3.org/2000/svg","path"),this.path.setAttribute("fill","black"),this.svg.appendChild(this.path),this.updateIcon_()}}class Ot extends vt.ui.OverflowMenu{constructor(e,t){super(e,t),this.init()}init(){this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.path=document.createElementNS("http://www.w3.org/2000/svg","path"),this.path.setAttribute("fill","black"),this.path.setAttribute("d","M13.93 7.719q0 0.070 0.004 0.141t0.004 0.141-0.004 0.141-0.004 0.141l2.023 1.258-1.242 2.992-2.32-0.531q-0.188 0.203-0.391 0.391l0.531 2.32-2.992 1.242-1.258-2.023q-0.070 0-0.141 0.004t-0.141 0.004-0.141-0.004-0.141-0.004l-1.258 2.023-2.992-1.242 0.531-2.32q-0.203-0.188-0.391-0.391l-2.32 0.531-1.242-2.992 2.023-1.258q0-0.070-0.004-0.141t-0.004-0.141 0.004-0.141 0.004-0.141l-2.023-1.258 1.242-2.992 2.32 0.531q0.188-0.203 0.391-0.391l-0.531-2.32 2.992-1.242 1.258 2.023q0.070 0 0.141-0.004t0.141-0.004 0.141 0.004 0.141 0.004l1.258-2.023 2.992 1.242-0.531 2.32q0.203 0.188 0.391 0.391l2.32-0.531 1.242 2.992zM13.016 8.734q0.016-0.188 0.031-0.371t0.016-0.371q0-0.18-0.016-0.367t-0.031-0.367l1.844-1.148-0.672-1.625-2.117 0.492q-0.242-0.297-0.496-0.547t-0.551-0.5l0.492-2.117-1.625-0.672-1.156 1.844q-0.18-0.016-0.367-0.031t-0.367-0.016q-0.188 0-0.371 0.016t-0.371 0.031l-1.148-1.844-1.625 0.672 0.492 2.117q-0.297 0.242-0.547 0.496t-0.5 0.551l-2.117-0.492-0.672 1.625 1.844 1.156q-0.016 0.188-0.031 0.371t-0.016 0.371q0 0.18 0.016 0.367t0.031 0.367l-1.844 1.148 0.672 1.625 2.117-0.492q0.242 0.297 0.496 0.547t0.551 0.5l-0.492 2.117 1.625 0.672 1.156-1.844q0.18 0.016 0.367 0.031t0.367 0.016q0.188 0 0.371-0.016t0.371-0.031l1.148 1.844 1.625-0.672-0.492-2.117q0.297-0.242 0.547-0.496t0.5-0.551l2.117 0.492 0.672-1.625zM8 5.063q0.609 0 1.145 0.23t0.934 0.629 0.629 0.934 0.23 1.145-0.23 1.145-0.629 0.934-0.934 0.629-1.145 0.23-1.145-0.23-0.934-0.629-0.629-0.934-0.23-1.145 0.23-1.145 0.629-0.934 0.934-0.629 1.145-0.23zM8 10.063q0.43 0 0.805-0.16t0.656-0.441 0.441-0.656 0.16-0.805-0.16-0.805-0.441-0.656-0.656-0.441-0.805-0.16-0.805 0.16-0.656 0.441-0.441 0.656-0.16 0.805 0.16 0.805 0.441 0.656 0.656 0.441 0.805 0.16z"),this.svg.appendChild(this.path),this.overflowMenuButton_.innerText="",this.overflowMenuButton_.appendChild(this.svg)}}class Pt extends vt.ui.Element{constructor(e,t,a){super(e,t),this.callBack=a,this.isLive=!0,this.init()}init(){this.button_=document.createElement("fast-button"),this.button_.innerHTML="<b>LIVE</b>",this.button_.classList.add("live-button-component"),this.button_.classList.add("live-on"),this.parent.appendChild(this.button_),this.eventManager.listen(this.button_,"click",(()=>{this.isLive=!this.isLive,this.callBack(this.isLive)}))}}class Bt extends vt.ui.Element{constructor(e,t,a){super(e,t),this.callBack=a,this.init()}init(){this.button_=document.createElement("fast-button"),this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.path=document.createElementNS("http://www.w3.org/2000/svg","path"),this.path.setAttribute("d","M5.141 15.805l-0.945-0.945 6.859-6.859-6.859-6.859 0.945-0.945 7.805 7.805-7.805 7.805z"),this.button_.classList.add("next-day-button"),this.svg.appendChild(this.path),this.button_.appendChild(this.svg),this.parent.appendChild(this.button_),this.eventManager.listen(this.button_,"click",(()=>{this.callBack()}))}}class Rt extends vt.ui.Element{constructor(e,t,a){super(e,t),this.callBack=a,this.init()}init(){this.button_=document.createElement("fast-button"),this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.path=document.createElementNS("http://www.w3.org/2000/svg","path"),this.path.setAttribute("d","M10.859 15.805l-7.805-7.805 7.805-7.805 0.945 0.945-6.859 6.859 6.859 6.859-0.945 0.945z"),this.button_.classList.add("prev-day-button"),this.svg.appendChild(this.path),this.button_.appendChild(this.svg),this.parent.appendChild(this.button_),this.eventManager.listen(this.button_,"click",(()=>{this.callBack()}))}}class zt extends vt.ui.Element{constructor(e,t){super(e,t),this.init()}init(){this.button_=document.createElement("span"),this.button_.innerHTML="24 hours",this.button_.classList.add("hours-label"),this.parent.appendChild(this.button_)}}class Qt extends vt.ui.Element{constructor(e,t,a){super(e,t),this.callBack=a,this.isOn=!1,this.init()}updateIcon_(){this.isOn?this.path.style.fill="red":this.path.style.fill="white"}init(){this.button_=document.createElement("fast-button"),this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.path=document.createElementNS("http://www.w3.org/2000/svg","path"),this.path.setAttribute("d","M15 3.93l-7.5-3.93-7.5 3.93v7.94l7.5 3.93 7.5-3.93v-7.94zM7.5 1.13l5.92 3.1-5.92 3.1-5.92-3.1 5.92-3.1zM1 11.26v-6.2l6 3.14v6.2l-6-3.14zM8 14.41v-6.21l6-3.14v6.2l-6 3.15z"),this.svg.appendChild(this.path),this.button_.appendChild(this.svg),this.parent.appendChild(this.button_),this.updateIcon_(),this.eventManager.listen(this.button_,"click",(()=>{this.isOn=!this.isOn,this.updateIcon_(),this.callBack(this.isOn)}))}}const jt=__nested_webpack_require_1251907__(681);class Lt{create(e,t){return new jt.ui.PlayButton(e,t)}}class Ft{create(e,t){return new jt.ui.FastForwardButton(e,t)}}class Yt{create(e,t){return new jt.ui.RewindButton(e,t)}}class Vt{create(e,t){return new jt.ui.FullscreenButton(e,t)}}class Gt{create(e,t){return new jt.ui.MuteButton(e,t)}}class Wt{create(e,t){return new jt.ui.OverflowMenu(e,t)}}class Kt{create(e,t){return new Pt(e,t,Kt.callBack)}}class Ht{create(e,t){return new Qt(e,t,Ht.callBack)}}class Zt{create(e,t){return new Bt(e,t,Zt.callBack)}}class Jt{create(e,t){return new Rt(e,t,Jt.callBack)}}class Xt{create(e,t){return new zt(e,t)}}class qt{constructor(e,t,a,i,r,n){this.shaka=e,this.toggleLiveMode=t,this.toggleBodyTracking=a,this.nextDayCallBack=i,this.prevDayCallBack=r,this.allowedControllers=n,this._uiConfiguration={controlPanelElements:[Nt.REWIND,Nt.PLAY_PAUSE,Nt.FAST_FORWARD,Nt.MUTE,Nt.VOLUME,Nt.PREVIOUS_DAY,Nt.NEXT_DAY,Nt.HOURS_LABEL,Nt.SPACER,Nt.BODY_TRACKING,Nt.OVERFLOW_MENU,Nt.FULLSCREEN],addBigPlayButton:!1,overflowMenuButtons:["playback_rate","captions","quality","language","cast"],seekBarColors:{base:"rgba(255, 255, 255, 0.3)",buffered:"rgba(0, 255, 255, 0.54)",played:"#F3F2F1"}},this.createControllers(),this.updateAvailableControllers()}get uiConfiguration(){return this._uiConfiguration}set uiConfiguration(e){this._uiConfiguration=e}updateAvailableControllers(){if(!this.allowedControllers)return;const e=[];for(const t of this._uiConfiguration.controlPanelElements)this.allowedControllers.indexOf(t)>-1&&e.push(t);this._uiConfiguration.controlPanelElements=e}createControllers(){this.shaka.util.Dom.createButton=this.createButton,this.shaka.ui.PlayButton=xt,this.shaka.ui.PlayButton.Factory=Lt,this.shaka.ui.Controls.registerElement(Nt.PLAY_PAUSE,new this.shaka.ui.PlayButton.Factory),this.shaka.ui.FastForwardButton=wt,this.shaka.ui.FastForwardButton.Factory=Ft,this.shaka.ui.Controls.registerElement(Nt.FAST_FORWARD,new this.shaka.ui.FastForwardButton.Factory),this.shaka.ui.RewindButton=_t,this.shaka.ui.RewindButton.Factory=Yt,this.shaka.ui.Controls.registerElement(Nt.REWIND,new this.shaka.ui.RewindButton.Factory),this.shaka.ui.FullscreenButton=Ut,this.shaka.ui.FullscreenButton.Factory=Vt,this.shaka.ui.Controls.registerElement(Nt.FULLSCREEN,new this.shaka.ui.FullscreenButton.Factory),this.shaka.ui.MuteButton=bt,this.shaka.ui.MuteButton.Factory=Gt,this.shaka.ui.Controls.registerElement(Nt.MUTE,new this.shaka.ui.MuteButton.Factory),this.shaka.ui.OverflowMenu=Ot,this.shaka.ui.OverflowMenu.Factory=Wt,this.shaka.ui.Controls.registerElement(Nt.OVERFLOW_MENU,new this.shaka.ui.OverflowMenu.Factory),Kt.callBack=e=>r(this,void 0,void 0,(function*(){this.toggleLiveMode(e)})),Ht.callBack=e=>{this.toggleBodyTracking(e)},this.shaka.ui.Controls.registerElement(Nt.BODY_TRACKING,new Ht),Zt.callBack=()=>{this.nextDayCallBack()},this.shaka.ui.Controls.registerElement(Nt.NEXT_DAY,new Zt),Jt.callBack=()=>{this.prevDayCallBack()},this.shaka.ui.Controls.registerElement(Nt.PREVIOUS_DAY,new Jt),this.shaka.ui.Controls.registerElement(Nt.HOURS_LABEL,new Xt)}createButton(){return document.createElement("fast-button")}}class $t{constructor(e){this.ratio=1,this.DEFAULT_FONT="Segoe UI",this.DEFAULT_CURSOR="default",this.DEFAULT_POSITION="relative",this._canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.options=e}get canvas(){return this._canvas}setCanvasSize(e,t){if(!this.canvas)return;const a=this.canvas.style;this.ratio=window.devicePixelRatio||1,a.width=e+"px",a.height=t+"px",this._canvas.width=e*this.ratio,this._canvas.height=t*this.ratio}setCanvasStyle(){var e,t;this._canvas.style.position=(null===(e=this.options)||void 0===e?void 0:e.position)||this.DEFAULT_POSITION,this._canvas.style.cursor=(null===(t=this.options)||void 0===t?void 0:t.cursor)||this.DEFAULT_CURSOR}setContextStyle(){var e,t;this.context.font=`${this.getFontSize()}px ${(null===(e=this.options)||void 0===e?void 0:e.fontFamily)||this.DEFAULT_FONT}`,this.context.lineWidth=(null===(t=this.options)||void 0===t?void 0:t.lineWidth)||1}getFontSize(){return this.options.fontSize?+this.options.fontSize.split("px")[0]*this.ratio:12}}class ea extends $t{constructor(e,t){super(e),this.video=t,this.data=[],this.timeToInstances=[],this.setCanvasSize(e.width,e.height),this.setCanvasStyle()}on(){this.setCanvasSize(this.video.clientWidth,this.video.clientHeight),this.playAnimation(),this.video.addEventListener("play",this.playAnimation.bind(this)),this.video.addEventListener("pause",this.pauseAnimation.bind(this))}setCanvasStyle(){this.canvas.style.position="absolute",this.canvas.style.zIndex="1",this.canvas.style.pointerEvents="none"}off(){this.pauseAnimation(),this.video.removeEventListener("play",this.playAnimation.bind(this)),this.video.removeEventListener("pause",this.pauseAnimation.bind(this))}clearInstances(){this.timeToInstances=[]}addItem(e,t){this.timeToInstances[null==e?void 0:e.toFixed(6)]||(this.timeToInstances[null==e?void 0:e.toFixed(6)]=[]),this.timeToInstances[null==e?void 0:e.toFixed(6)].push(t)}draw(){if(!this.requestAnimFrameCounter)return;this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.canvas.width=this.video.clientWidth,this.canvas.height=this.video.clientHeight;const e=this.video.currentTime,t=Object.keys(this.timeToInstances);let a=[];for(let i=0;i<t.length-1;i++){const r=t[i],n=t[i+1];e>=Number(r)&&e<=Number(n)&&(a=this.timeToInstances[r])}for(const e of a){this.context.lineWidth=2,this.context.lineJoin="miter",this.context.strokeStyle="rgba(0, 0, 0, 0.87)";const t=Math.floor(e.l*this.canvas.width),a=Math.floor(e.t*this.canvas.height),i=Math.floor(e.w*this.canvas.width),r=Math.floor(e.h*this.canvas.height);this.context.strokeRect(t,a,i,r),this.context.lineWidth=1,this.context.strokeStyle="rgba(255, 255, 255, 0.74)",this.context.strokeRect(t+2,a+2,i-4,r-4),this.context.fillStyle="rgba(0, 0, 0, 0.74)",this.context.strokeStyle="rgba(0, 0, 0, 0.74)",this.context.lineJoin="round",this.context.lineWidth=5}this.requestAnimFrameCounter=window.requestAnimationFrame(this.draw.bind(this))}resize(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),setTimeout((()=>{this.canvas.width=this.video.clientWidth,this.canvas.height=this.video.clientHeight}))}playAnimation(){this.requestAnimFrameCounter&&this.pauseAnimation(),this.requestAnimFrameCounter=window.requestAnimationFrame(this.draw.bind(this))}pauseAnimation(){window.cancelAnimationFrame(this.requestAnimFrameCounter),this.requestAnimFrameCounter=0}}const ta=__nested_webpack_require_1251907__(681);class aa{constructor(t,a,i,r,n,s){if(this.video=t,this.videoContainer=a,this._liveStream=i,this._vodStream=r,this.timeUpdateCallback=n,this.allowedControllers=s,this.isLive=!1,this._accessToken="",this.player=Object.create(null),this._allowCrossCred=!0,ta.polyfill.installAll(),!ta.Player.isBrowserSupported())throw new e("Browser not supported!");this.init()}set liveStream(e){this._liveStream=e}set vodStream(e){this._vodStream=e}set allowCrossCred(e){this._allowCrossCred=e}get allowCrossCred(){return this._allowCrossCred}set mimeType(e){this._mimeType=e}get mimeType(){return this._mimeType}pause(){this.video.pause()}play(){this.video.play()}set accessToken(e){this._accessToken=e}get accessToken(){return this._accessToken}load(e,t=!1){return r(this,void 0,void 0,(function*(){try{this.mimeType?yield this.player.load(e,null,this.mimeType):yield this.player.load(e),t&&this.video.play()}catch(e){console.log(e.message)}}))}destroy(){this.player.unload(),this.player.destroy()}toggleLiveMode(e){return r(this,void 0,void 0,(function*(){e?(yield this.load(this._liveStream,!0),this.removeTimelineComponent()):yield this.load(this._vodStream,!0),this.boundingBoxesDrawer&&this.boundingBoxesDrawer.clearInstances(),this.isLive=e,document.dispatchEvent(new CustomEvent("player_live",{detail:this.isLive})),this.controls.controlsContainer_.classList.add(this.isLive?"live-on":"live-off"),this.controls.controlsContainer_.classList.remove(this.isLive?"live-off":"live-on")}))}removeTimelineComponent(){this.timelineComponent&&(this.controls.controlsContainer_.removeChild(this.timelineComponent),this.timelineComponent.removeEventListener(It.SEGMENT_CHANGE,this.onSegmentChangeListenerRef),this.timelineComponent.removeEventListener(It.CURRENT_TIME_CHANGE,this.onTimeChange.bind(this)),this.timelineComponent=null)}createTimelineComponent(){if(!this.segmentReferences)return;const e=[];for(const t of this.segmentReferences){const a=t.getEndTime(),i=t.getStartTime();if(e.length)i-e[e.length-1].endSeconds<=10?e[e.length-1].endSeconds=a:e.push({startSeconds:i,endSeconds:a});else{const t={startSeconds:i,endSeconds:a};e.push(t)}}const t={segments:e,date:this.date};this.timelineComponent=new ft,this.controls.controlsContainer_.insertBefore(this.timelineComponent,this.controls.bottomControls_),this.onSegmentChangeListenerRef=this.onSegmentChange.bind(this),this.timelineComponent.addEventListener(It.SEGMENT_CHANGE,this.onSegmentChangeListenerRef),this.timelineComponent.addEventListener(It.CURRENT_TIME_CHANGE,this.onTimeChange.bind(this)),this.timelineComponent.config=t}onSegmentChange(e){const t=e.detail;t&&(this.video.currentTime=t.startSeconds+1,this.video.play())}onTimeChange(e){e.detail&&(this.video.currentTime=e.detail)}toggleBodyTracking(e){e?this.addBoundingBoxLayer():this.removeBoundingBoxLayer()}onClickNextDay(){document.dispatchEvent(new CustomEvent("player_next_day"))}onClickPrevDay(){document.dispatchEvent(new CustomEvent("player_prev_day"))}init(){return r(this,void 0,void 0,(function*(){this.avaUILayer=new qt(ta,this.toggleLiveMode.bind(this),this.toggleBodyTracking.bind(this),this.onClickNextDay.bind(this),this.onClickPrevDay.bind(this),this.allowedControllers),this.player=new ta.Player(this.video),this.player.getNetworkingEngine().registerRequestFilter(this.authenticationHandler.bind(this));const e=new ta.ui.Overlay(this.player,this.videoContainer,this.video);e.configure(this.avaUILayer.uiConfiguration),this.controls=e.getControls(),this.controls.bottomControls_.insertBefore(this.controls.bottomControls_.childNodes[2],this.controls.bottomControls_.childNodes[1]),this.player.addEventListener("error",this.onErrorEvent.bind(this)),this.player.addEventListener("trackschanged",this.onTrackChange.bind(this)),this.player.addEventListener("emsg",this.onShakaMetadata.bind(this)),yield this.toggleLiveMode(this.isLive);const t={height:this.video.clientHeight,width:this.video.clientWidth};this.boundingBoxesDrawer=new ea(t,this.video)}))}onWindowResize(){var e;null===(e=this.boundingBoxesDrawer)||void 0===e||e.resize()}addBoundingBoxLayer(){this.videoContainer.prepend(this.boundingBoxesDrawer.canvas),window.addEventListener("resize",this.onWindowResize.bind(this)),this.boundingBoxesDrawer.on()}removeBoundingBoxLayer(){window.removeEventListener("resize",this.onWindowResize.bind(this)),this.videoContainer.removeChild(this.boundingBoxesDrawer.canvas),this.boundingBoxesDrawer.off()}authenticationHandler(e,t){t.allowCrossSiteCredentials=this._allowCrossCred,this._accessToken&&(t.headers.Authorization=`Bearer ${this._accessToken}`)}onShakaMetadata(e){const t=e.detail;"urn:msft:media:ava:event:2020:json"===t.schemeIdUri&&this.parseEmsg(t)}parseEmsg(e){var t,a;if(!this.boundingBoxesDrawer)return;const i=(new TextDecoder).decode(e.messageData),r=JSON.parse(i).inferences;for(const i of r)if("MOTION"===i.type||"ENTITY"===i.type){const r=(null===(t=null==i?void 0:i.motion)||void 0===t?void 0:t.box)||(null===(a=null==i?void 0:i.entity)||void 0===a?void 0:a.box);this.boundingBoxesDrawer.addItem(e.startTime,r)}}onTrackChange(){return r(this,void 0,void 0,(function*(){const e=this.player.getManifest().variants[0],t=e.video||e.audio;t.segmentIndex||(yield t.createSegmentIndex()),this.segmentIndex=t.segmentIndex,this.segmentReferences=this.segmentIndex.references;const a=this.segmentIndex.find(0)||0,i=this.segmentIndex.get(a);i&&(this.timestampOffset=-1e3*i.timestampOffset,this.video.addEventListener("timeupdate",this.onTimeSeekUpdate.bind(this))),this.isLive||(this.onTimeSeekUpdate(),this.removeTimelineComponent(),this.createTimelineComponent())}))}onTimeSeekUpdate(){const e=this.video.currentTime,t=this.computeClock(e);this.timeUpdateCallback(t),this.timelineComponent&&(this.timelineComponent.currentTime=e)}computeClock(e){return this.timestampOffset?(this.date=new Date(this.timestampOffset+1e3*e),`${this.date.toLocaleDateString()} ${this.date.toLocaleTimeString()}`):""}onErrorEvent(e){this.onError(e.detail)}onError(e){console.log(e)}}const ia=Ve`
    :host {
        display: inline-block;
        background: none;
        width: 100%;
        font-family: var(--font-family);
        --neutral-fill-rest: none;
        --density: 4;
        --design-unit: 2;
        --base-height-multiplier: 12;
        height: auto;
    }

    .error {
        display: none;
    }

    :host(.live-off) {
        padding-bottom: calc(48px + 43px);
    }

    :host(.error) {
        background: black;
    }

    :host(.error) .error {
        text-align: center;
        vertical-align: middle;
        display: block;
    }

    ${Ve`
    .shaka-hidden {
        display: none !important;
    }

    .shaka-video-container {
        position: relative;
        top: 0;
        left: 0;
        display: flex;
    }
    .shaka-video-container .material-icons-round {
        font-family: 'Segoe UI';
        font-size: 24px;
    }
    .shaka-video-container * {
        font-family: 'Segoe UI';
    }
    .shaka-video-container:fullscreen {
        width: 100%;
        height: 100%;
        background-color: #000;
    }
    .shaka-video-container:fullscreen .shaka-text-container {
        font-size: 4.4vmin;
    }
    .shaka-video-container:-webkit-full-screen {
        width: 100%;
        height: 100%;
        background-color: #000;
    }
    .shaka-video-container:-webkit-full-screen .shaka-text-container {
        font-size: 4.4vmin;
    }
    .shaka-video-container:-moz-full-screen {
        width: 100%;
        height: 100%;
        background-color: #000;
    }
    .shaka-video-container:-moz-full-screen .shaka-text-container {
        font-size: 4.4vmin;
    }
    .shaka-video-container:-ms-fullscreen {
        width: 100%;
        height: 100%;
        background-color: #000;
    }
    .shaka-video-container:-ms-fullscreen .shaka-text-container {
        font-size: 4.4vmin;
    }
    .shaka-controls-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0;
        padding: 0;
        width: 100%;
        height: calc(100% + 48px);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        z-index: 1;
    }
    .shaka-controls-container.live-off {
        height: calc(100% + 48px + 43px);
    }
    .live-button-component {
        width: 34px;
        height: 22px;
        --outline-width: 0;
        --design-unit: -1;
    }
    .live-button-component button {
        font-weight: 600 !important;
    }
    media-timeline {
        z-index: 9;
        background-color: rgb(26, 26, 26);
    }
    .shaka-video-container:not([shaka-controls='true']) .shaka-controls-container {
        display: none;
    }
    .shaka-controls-container * {
        flex-shrink: 0;
    }
    .shaka-controls-container[casting='true'] .shaka-fullscreen-button {
        display: none;
    }
    .shaka-bottom-controls {
        width: 100%;
        padding: 0;
        padding-bottom: 2.5%;
        z-index: 1;
        background-color: #161514;
        padding: 0px 0px 8px !important;
    }
    .shaka-controls-button-panel {
        padding: 0 14px;
        height: auto;

        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        overflow: hidden;
        min-width: 48px;
        font-size: 12px;
        font-weight: 400;
        font-style: normal;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        /* opacity: 0; */
        transition: opacity cubic-bezier(0.4, 0, 0.6, 1) 0.6s;
    }
    .shaka-controls-container[casting='true'] .shaka-controls-button-panel,
    .shaka-controls-container[shown='true'] .shaka-controls-button-panel {
        opacity: 1;
    }

    .shaka-play-button-container {
        margin: 0;
        width: 100%;
        height: 100%;
        flex-shrink: 1;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .shaka-scrim-container {
        margin: 0;
        width: 100%;
        height: 100%;
        flex-shrink: 1;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        /* opacity: 0; */
        transition: opacity cubic-bezier(0.4, 0, 0.6, 1) 0.6s;
    }
    .shaka-controls-container[casting='true'] .shaka-scrim-container,
    .shaka-controls-container[shown='true'] .shaka-scrim-container {
        opacity: 1;
    }
    .shaka-text-container {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        pointer-events: none;
        bottom: 0;
        width: 100%;
        min-width: 48px;
        transition: bottom cubic-bezier(0.4, 0, 0.6, 1) 0.1s;
        transition-delay: 0.5s;
    }
    .shaka-text-container div {
        font-size: 20px;
        line-height: 1.4;
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
    }
    .shaka-controls-container[shown='true'] ~ .shaka-text-container {
        bottom: 15%;
        transition-delay: 0s;
    }
    .shaka-spinner-container {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        flex-shrink: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .shaka-video-container:not([shaka-controls='true']) .shaka-spinner-container {
        display: none;
    }
    .shaka-spinner {
        position: relative;
        top: 0;
        left: 0;
        margin: 0;
        box-sizing: border-box;
        padding: 7.8%;
        width: 0;
        height: 0;
        filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5));
    }
    .shaka-play-button {
        box-sizing: border-box;
        padding: 7.5%;
        width: 0;
        height: 0;
        margin: 0;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.1) 0 0 20px 0;
        border: none;
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: center center;
        background-color: rgba(255, 255, 255, 0.9);
        /* opacity: 0; */
        transition: opacity cubic-bezier(0.4, 0, 0.6, 1) 0.6s;
    }
    .shaka-controls-container[casting='true'] .shaka-play-button,
    .shaka-controls-container[shown='true'] .shaka-play-button {
        opacity: 1;
    }

    .shaka-current-time {
        font-size: 14px;
        color: #fff;
        height: auto;
        cursor: pointer;
    }
    .shaka-current-time[disabled] {
        background-color: transparent;
        color: #fff;
        cursor: default;
    }
    .shaka-controls-container button:focus,
    .shaka-controls-container input:focus {
        outline: 1px solid Highlight;
        outline: 1px solid -webkit-focus-ring-color;
    }
    .shaka-controls-container button:-moz-focus-inner,
    .shaka-controls-container input:-moz-focus-outer {
        outline: 0;
        border: 0;
    }
    .shaka-controls-container:not(.shaka-keyboard-navigation) button:focus,
    .shaka-controls-container:not(.shaka-keyboard-navigation) input:focus {
        outline: 0;
    }
    .shaka-range-container {
        position: relative;
        top: 0;
        left: 0;
        margin: 0 0 4px 0;
        height: 2px;
        border-radius: 0;
        background: #fff;
    }
    .shaka-volume-bar-container {
        width: 100px;
    }
    .shaka-range-element {
        -webkit-appearance: none;
        background: 0 0;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        height: 12px;
        top: -4px;
        z-index: 1;
    }
    .shaka-range-element::-webkit-slider-runnable-track {
        width: 100%;
        height: 12px;
        background: 0 0;
        color: transparent;
        border: none;
    }
    .shaka-range-element::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: none;
        border-radius: 12px;
        height: 12px;
        width: 12px;
        background: #fff;
    }
    .shaka-range-element::-moz-range-track {
        width: 100%;
        height: 12px;
        background: 0 0;
        color: transparent;
        border: none;
    }
    .shaka-range-element::-moz-range-thumb {
        -webkit-appearance: none;
        border: none;
        border-radius: 12px;
        height: 12px;
        width: 12px;
        background: #fff;
    }
    .shaka-range-element::-ms-track {
        width: 100%;
        height: 12px;
        background: 0 0;
        color: transparent;
        border: none;
    }
    .shaka-range-element::-ms-thumb {
        -webkit-appearance: none;
        border: none;
        border-radius: 12px;
        height: 12px;
        width: 12px;
        background: #fff;
    }
    .shaka-range-element::-ms-tooltip {
        display: none;
    }
    .shaka-range-element::-ms-fill-lower {
        display: none;
    }
    .shaka-range-element::-ms-fill-upper {
        display: none;
    }
    .shaka-seek-bar-container {
        /* opacity: 0; */
        transition: opacity cubic-bezier(0.4, 0, 0.6, 1) 0.6s;
    }
    .shaka-controls-container[casting='true'] .shaka-seek-bar-container,
    .shaka-controls-container[shown='true'] .shaka-seek-bar-container {
        opacity: 1;
    }
    .shaka-ad-markers {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    } /*!
 * @license
 * The SVG/CSS buffering spinner is based on http://codepen.io/jczimm/pen/vEBpoL
 * Some local modifications have been made.
 *
 * Copyright (c) 2016 by jczimm
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
    .shaka-spinner-svg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        animation: rotate 2s linear infinite;
        transform-origin: center center;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    .shaka-spinner-path {
        stroke: #202124;
        stroke-dasharray: 20, 200;
        stroke-dashoffset: 0;
        animation: dash 1.5s ease-in-out infinite;
        stroke-linecap: round;
    }
    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    .shaka-spacer {
        cursor: default;
        flex-shrink: 1;
        flex-grow: 1;
        margin: 0;
    }
    .shaka-overflow-menu,
    .shaka-settings-menu {
        overflow-x: hidden;
        overflow-y: auto;
        white-space: nowrap;
        background: #fff;
        box-shadow: 0 1px 9px 0 rgba(0, 0, 0, 0.4);
        border-radius: 2px;
        max-height: 250px;
        min-width: 180px;
        opacity: 0;
        transition: opacity cubic-bezier(0.4, 0, 0.6, 1) 0.6s;
        display: flex;
        flex-direction: column;
        position: absolute;
        z-index: 2;
        right: 15px;
        bottom: 30px;
    }
    .shaka-controls-container[casting='true'] .shaka-overflow-menu.shaka-displayed,
    .shaka-controls-container[casting='true'] .shaka-settings-menu.shaka-displayed,
    .shaka-controls-container[shown='true'] .shaka-overflow-menu.shaka-displayed,
    .shaka-controls-container[shown='true'] .shaka-settings-menu.shaka-displayed {
        opacity: 1;
    }
    .shaka-overflow-menu button,
    .shaka-settings-menu button {
        font-size: 14px;
        background: 0 0;
        color: #000;
        border: none;
        min-height: 30px;
        padding: 3.5px 6px;
        display: flex;
        align-items: center;
    }
    .shaka-overflow-menu button:hover,
    .shaka-settings-menu button:hover {
        background: #e0e0e0;
    }
    .shaka-keyboard-navigation .shaka-overflow-menu button:focus,
    .shaka-keyboard-navigation .shaka-settings-menu button:focus {
        background: #e0e0e0;
    }
    .shaka-overflow-menu i,
    .shaka-settings-menu i {
        padding-left: 10px;
        padding-right: 10px;
    }
    .shaka-overflow-menu.shaka-low-position,
    .shaka-settings-menu.shaka-low-position {
        bottom: 15px;
    }
    .shaka-overflow-menu span {
        text-align: left;
    }
    .shaka-overflow-button-label {
        position: relative;
        display: flex;
        flex-direction: column;
    }
    .shaka-current-selection-span {
        color: rgba(0, 0, 0, 0.54);
    }
    .shaka-settings-menu span {
        margin-left: 54px;
    }
    .shaka-back-to-overflow-button span {
        margin-left: 0;
    }
    .shaka-back-to-overflow-button i {
        padding-right: 20px;
    }
    .shaka-auto-span {
        left: 17px;
    }
    .shaka-captions-on {
        color: #000;
    }
    .shaka-captions-off {
        color: grey;
    }
    .shaka-controls-container[ad-active='true'] {
        pointer-events: none;
    }
    .shaka-controls-container[ad-active='true'] .shaka-bottom-controls {
        pointer-events: auto;
    }
    .shaka-server-side-ad-container {
        width: 100%;
        height: 100%;
    }
    .shaka-server-side-ad-container:not([ad-active='true']) {
        pointer-events: none;
    }
    .shaka-client-side-ad-container {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    .shaka-video-container[shaka-controls='true'] .shaka-controls-container iframe {
        height: 92%;
        z-index: 1;
    }
    .shaka-ad-controls {
        display: flex;
        flex-direction: row;
        z-index: 1;
        padding-bottom: 1%;
    }
    .shaka-video-container:not([shaka-controls='true']) .shaka-ad-controls {
        display: none;
    }
    .shaka-ad-controls button,
    .shaka-ad-controls div {
        color: #fff;
        font-size: initial;
    }
    .shaka-ad-controls div:not(.shaka-skip-ad-counter) {
        margin: 1px 6px;
    }
    .shaka-ad-counter,
    .shaka-ad-position {
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        text-shadow: 1px 1px 4px #000;
    }
    .shaka-skip-ad-container {
        position: relative;
        right: -2%;
        display: flex;
        flex-direction: row;
        margin: 0;
    }
    .shaka-skip-ad-button {
        padding: 5px 15px;
        background: rgba(0, 0, 0, 0.7);
        border: none;
        cursor: pointer;
    }
    .shaka-skip-ad-button:disabled {
        background: rgba(0, 0, 0, 0.3);
    }
    .shaka-skip-ad-counter {
        padding: 5px 5px;
        background: rgba(0, 0, 0, 0.7);
        margin: 0;
    }
`}

    .shaka-video-container {
        position: relative;
        top: 0;
        left: 0;
        display: flex;
    }

    .shaka-bottom-controls {
        padding: 8px 0;
    }

    .shaka-video-container.live .shaka-fast-forward-button,
    .shaka-video-container.live .shaka-rewind-button {
        display: none;
    }

    .shaka-video-container.vod .shaka-seek-bar-container {
        display: none;
    }

    .shaka-video-container .material-icons-round {
        font-size: 16px;
    }

    .shaka-volume-bar-container {
        height: 2px;
        border-radius: 0;
        opacity: 0;
        width: 0;
    }

    .shaka-volume-bar-container:hover {
        opacity: 1;
        width: 100px;
    }

    @media (max-width: 560px) {
        .shaka-volume-bar-container {
            display: none;
        }
    }

    .shaka-mute-button:hover + .shaka-volume-bar-container {
        transition: all 0.25s linear;
        opacity: 1;
        width: 100px;
    }

    .live-button-component .control .content {
        font-weight: 600;
        padding: 0 6px;
    }

    .live-button-component.live-on {
        color: rgb(26 188 156);
        border: rgb(26 188 156) 1px solid;
    }

    .live-button-component.live-off {
        background: rgb(50 49 48);
        border: 1px solid rgb(50 49 48);
        color: rgb(121 119 117);
        margin: 0px 9px;
    }

    .prev-day-button {
        margin-left: 93px;
    }

    .prev-day-button,
    .next-day-button {
        border: 1px solid rgb(138 136 134);
        border-radius: 2px;
    }

    .hours-label {
        color: #f3f2f1;
        padding-left: 9px;
    }

    svg path {
        fill: #f3f2f1;
    }

    button {
        background: 0 0;
        border: none;
        display: flex;
    }

    .shaka-hidden {
        display: none !important;
    }

    video {
        width: 100%;
        height: 100%;
        background: black;
    }

    .upper-bounding {
        padding: 0 20px;
        height: 49px;
        background: #1a1a1a;
        align-items: center;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: [camera-name] 90px [date-picker] auto;
    }

    .col.camera-name {
        grid-column-start: camera-name;
        grid-column-end: camera-name;
        grid-row-start: 1;
        grid-row-end: 1;
    }

    .col.date-picker {
        grid-column-start: date-picker;
        grid-column-end: date-picker;
        grid-row-start: 1;
        grid-row-end: 1;
        justify-self: end;
    }

    .date-picker .date-picker-component,
    .date-picker span {
        display: inline-block;
        vertical-align: middle;
        color: #f3f2f1;
    }
`,ra=Le`
    <template>
        <div class="upper-bounding">
            <span class="col camera-name">${e=>e.cameraName}</span>
            <div class="date-picker col">
                <span class="time-container">${e=>e.time}</span>
                <media-date-picker
                    class="date-picker-component"
                    alignRight="${!0}"
                    inputDate="${e=>e.currentDate.toUTCString()}"
                ></media-date-picker>
            </div>
        </div>
        <span class="error">theres seems to be a problem. Please try again later</span>
        <div
            shaka-controls="true"
            class="video-container 
            ${e=>e.isLive?"live":"vod"}"
        >
            <video id="player-video"></video>
        </div>
    </template>
`;let na=class extends ae{constructor(){super(),this.isLive=!1,this.time="",this.cameraName="Camera",this.currentDate=new Date,this.currentAllowedDays=[],this.currentAllowedMonths=[],this.currentAllowedYears=[],this.hasError=!1,this.allowedDates=[],this.afterInit=!1,this.connected=!1,this.classList.add(this.isLive?"live-on":"live-off"),this.classList.remove(this.isLive?"live-off":"live-on")}init(e=!0,t,a){return r(this,void 0,void 0,(function*(){this.connected&&(this.liveStream=de.baseStream?de.getLiveStream():this.liveStream,this.vodStream=de.baseStream?de.getVODStream():this.vodStream,this.player&&(this.player.destroy(),this.player=null),this.player=new aa(this.video,this.videoContainer,this.liveStream,this.vodStream,this.timeUpdateCallBack.bind(this),a),t&&(this.player.accessToken=t),this.player.allowCrossCred=e,de.baseStream&&(yield this.initializeAvailableMedia()))}))}setPlaybackAuthorization(e){e&&(this.player.accessToken=e)}initializeAvailableMedia(){return r(this,void 0,void 0,(function*(){yield this.fetchAvailableYears();const e=this.currentDate.getUTCFullYear(),t=this.currentDate.getUTCMonth()+1;if(yield this.updateMonthAndDates(e,t),this.afterInit=!0,this.currentAllowedYears.length&&this.currentAllowedMonths.length&&this.currentAllowedDays.length){const e=this.currentAllowedYears[this.currentAllowedYears.length-1],t=this.currentAllowedMonths[this.currentAllowedMonths.length-1],a=this.currentAllowedDays[this.currentAllowedDays.length-1],i=new Date(Date.UTC(parseInt(e,10),parseInt(t,10)-1,parseInt(a,10)));i.setDate(i.getDate()-1),this.datePickerComponent.inputDate=i.toUTCString(),this.updateVODStream()}}))}cameraNameChanged(){this.cameraName=this.cameraName||"Camera"}liveStreamChanged(){setTimeout((()=>{this.player&&(this.player.liveStream=this.liveStream)}))}vodStreamChanged(){setTimeout((()=>{this.player&&(this.player.vodStream=this.vodStream)}))}play(){var e;null===(e=this.player)||void 0===e||e.play()}pause(){var e;null===(e=this.player)||void 0===e||e.pause()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});var t,a,i,n;return r(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.video=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#player-video"),this.videoContainer=null===(a=this.shadowRoot)||void 0===a?void 0:a.querySelector(".video-container"),this.timeContainer=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector(".time-container"),this.connected=!0,this.video&&(document.addEventListener("player_live",(e=>{this.isLive=e.detail,this.classList.add(this.isLive?"live-on":"live-off"),this.classList.remove(this.isLive?"live-off":"live-on")})),document.addEventListener("player_next_day",(()=>{this.selectNextDay()})),document.addEventListener("player_prev_day",(()=>{this.selectPrevDay()})),this.datePickerComponent=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelector("media-date-picker"),this.datePickerComponent.addEventListener(yt.DATE_CHANGE,(e=>{var t,a;(null===(t=e.detail)||void 0===t?void 0:t.toUTCString())!==(null===(a=this.currentDate)||void 0===a?void 0:a.toUTCString())&&(this.currentDate=e.detail,this.updateVODStream())})),this.datePickerComponent.addEventListener(yt.RENDER,(e=>{const t=e.detail;this.afterInit&&this.updateMonthAndDates(t.year,t.month+1)})))}))}selectNextDay(){return r(this,void 0,void 0,(function*(){const e=new Date(this.currentDate);e.setDate(e.getDate()+1),yield this.adjustNewDate(e)}))}selectPrevDay(){return r(this,void 0,void 0,(function*(){const e=new Date(this.currentDate);e.setDate(e.getDate()-1),yield this.adjustNewDate(e)}))}adjustNewDate(e){return r(this,void 0,void 0,(function*(){const t=e.getUTCFullYear(),a=e.getUTCMonth()+1,i=e.getUTCDate();if(this.allowedDates[t]&&this.allowedDates[t][a]){const r=this.allowedDates[t][a];r.indexOf(i)>-1?this.datePickerComponent.inputDate=e.toUTCString():r.length||(yield this.fetchAvailableDays(t,a),yield this.updateMonthAndDates(t,a),this.allowedDates[t][a].indexOf(i)>-1&&(this.datePickerComponent.inputDate=e.toUTCString()))}}))}updateVODStream(){const e=new Date(this.currentDate);e.setDate(this.currentDate.getDate()+1),this.vodStream=de.getVODStream({start:this.currentDate,end:e}),this.player&&(this.player.vodStream=this.vodStream,this.player.toggleLiveMode(!1)),this.isLive=!1,this.classList.add(this.isLive?"live-on":"live-off"),this.classList.remove(this.isLive?"live-off":"live-on")}fetchAvailableYears(){return r(this,void 0,void 0,(function*(){const t=yield de.getAvailableMedia(ce.YEAR,null,this.player.allowCrossCred,this.player.accessToken);try{const e=yield t.json();for(const t of e.timeRanges){const e=Et(t.start),a=Et(t.end);for(let t=e;t<=a;t++)this.allowedDates[t]=[]}this.currentAllowedYears=Object.keys(this.allowedDates),this.datePickerComponent.allowedDates=Object.assign(Object.assign({},this.datePickerComponent.allowedDates),{years:this.currentAllowedYears.toString()})}catch(t){throw this.hasError=!0,this.classList.add("error"),new e("Cannot parse available media")}}))}fetchAvailableMonths(t){return r(this,void 0,void 0,(function*(){try{const e=new Date(Date.UTC(t,0,1)),a=new Date(Date.UTC(t,11,1)),i=yield de.getAvailableMedia(ce.MONTH,{start:e,end:a},this.player.allowCrossCred,this.player.accessToken),r=yield i.json();for(const e of r.timeRanges){const a=new Date(e.start).getMonth()+1,i=new Date(e.end).getMonth()+1;for(let e=a;e<=i;e++)this.allowedDates[t][e]=[]}}catch(t){throw this.hasError=!0,this.classList.add("error"),new e("Cannot parse available media")}}))}fetchAvailableDays(t,a){return r(this,void 0,void 0,(function*(){try{const e=new Date(Date.UTC(t,a-1,1)),i=new Date(Date.UTC(t,a,1));i.setDate(i.getDate()-1);const r=yield de.getAvailableMedia(ce.DAY,{start:e,end:i},this.player.allowCrossCred,this.player.accessToken),n=yield r.json();this.allowedDates[t][a]=[];for(const e of n.timeRanges){const i=new Date(e.start).getDate(),r=new Date(e.end).getDate();for(let e=i;e<=r;e++)this.allowedDates[t][a].push(e)}}catch(t){throw this.hasError=!0,this.classList.add("error"),new e("Cannot parse available media")}}))}updateMonthAndDates(e,t){return r(this,void 0,void 0,(function*(){this.currentAllowedDays=[],this.currentAllowedMonths=[],this.datePickerComponent.allowedDates=Object.assign(Object.assign({},this.datePickerComponent.allowedDates),{days:this.currentAllowedDays.toString(),months:this.currentAllowedMonths.toString()}),this.allowedDates[e]&&(this.allowedDates[e].length?(this.currentAllowedMonths=Object.keys(this.allowedDates[e]),this.datePickerComponent.allowedDates=Object.assign(Object.assign({},this.datePickerComponent.allowedDates),{months:this.currentAllowedMonths.toString()}),this.allowedDates[e][t]&&(this.allowedDates[e][t].length?(this.currentAllowedDays=this.allowedDates[e][t],this.datePickerComponent.allowedDates=Object.assign(Object.assign({},this.datePickerComponent.allowedDates),{days:this.currentAllowedDays.toString()})):(yield this.fetchAvailableDays(e,t),yield this.updateMonthAndDates(e,t)))):(yield this.fetchAvailableMonths(e),yield this.updateMonthAndDates(e,t)))}))}timeUpdateCallBack(e){this.time!==e&&e&&(d.queueUpdate((()=>{this.time=e,this.timeContainer.innerText=this.time})),d.nextUpdate())}};var sa,oa,la,Aa,ha;i([W],na.prototype,"liveStream",void 0),i([W],na.prototype,"vodStream",void 0),i([W],na.prototype,"isLive",void 0),i([w],na.prototype,"time",void 0),i([W],na.prototype,"cameraName",void 0),i([W],na.prototype,"currentDate",void 0),i([W],na.prototype,"currentAllowedDays",void 0),i([W],na.prototype,"currentAllowedMonths",void 0),i([W],na.prototype,"currentAllowedYears",void 0),na=i([ie({name:"rvx-player",template:ra,styles:ia})],na),function(e){e.COMPLETE="DRAWER_ON_COMPLETE"}(sa||(sa={})),function(e){e.POINTER="pointer",e.CROSSHAIR="crosshair"}(oa||(oa={})),function(e){e.Default="light",e.Dark="dark"}(la||(la={})),function(e){e.Red="#db4646",e.LightBlue="#4d9dff",e.Yellow="#fabe14",e.Magenta="#cf0076",e.Teal="#1cc2b2",e.Purple="#7633c3",e.Lime="#a6c102",e.Blue="#0840cf",e.Green="#0f9d49",e.Orange="#f2880c"}(Aa||(Aa={})),function(e){e.themeChanged="AVA_DESIGN_SYSTEM_THEME_CHANGED"}(ha||(ha={}));class ga extends $t{constructor(e){super(e),this._canvasX=0,this._canvasY=0,this._points=[],this._lastMouseX=0,this._lastMouseY=0,this._cursors=[oa.CROSSHAIR,oa.CROSSHAIR],this._currentCursor=0,this.DRAW_LINE="round",this.DEFAULT_LINE_COLOR=Aa.Red,this.DEFAULT_FILL_COLOR="rgba(219, 70, 70, 0.4)",this.DEFAULT_DRAW_CURSOR="crosshair",this.INITIAL_ANGELS_SUM=0,this.PIXELS_DISTANCE_RANGE=10,this.TRIANGLE_ANGLES_SUM=180,this._drawerOptions=e}get drawerOptions(){return this._drawerOptions}set drawerOptions(e){this._drawerOptions=e}resize(){this.setCanvasSize(this._drawerOptions.width,this._drawerOptions.height),this.setContextStyle(),this.clearCanvas(),this.draw()}clearCanvas(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}draw(){if(this._points.length<2)return;this.context.beginPath();const e=this.getCalculatedPoint(this._points[0].x,this.drawerOptions.width*this.ratio),t=this.getCalculatedPoint(this._points[0].y,this.drawerOptions.height*this.ratio);this.context.moveTo(e,t);for(const e of this._points)this.context.lineTo(this.getCalculatedPoint(e.x,this.drawerOptions.width*this.ratio),this.getCalculatedPoint(e.y,this.drawerOptions.height*this.ratio));this._isDrawCompleted&&this.closePolygon(e,t),this.context.stroke()}drawLastLine(){var e,t,a,i,r;if(0===(null===(e=this.points)||void 0===e?void 0:e.length))return;this.clearCanvas(),this.draw(),null===(t=this.context)||void 0===t||t.beginPath();const n=this.getCalculatedPoint(this._points[this._points.length-1].x,this.drawerOptions.width*this.ratio),s=this.getCalculatedPoint(this._points[this._points.length-1].y,this.drawerOptions.height*this.ratio);null===(a=this.context)||void 0===a||a.moveTo(this._lastMouseX*this.ratio,this._lastMouseY*this.ratio),null===(i=this.context)||void 0===i||i.lineTo(n,s),null===(r=this.context)||void 0===r||r.stroke()}setContextStyle(){super.setContextStyle(),this.context.strokeStyle=this._drawerOptions.lineColor||this.DEFAULT_LINE_COLOR,this.context.fillStyle=this._drawerOptions.fillStyle||this.DEFAULT_FILL_COLOR,this.context.lineJoin=this.DRAW_LINE,this.context.lineCap=this.DRAW_LINE}setCanvas(e,t,a=2){this._pointsLimit=a,this.setCanvasSize(e,t),this.setCanvasStyle(),this.setContextStyle()}initBoundingCanvas(){this._canvasY=this.canvas.getBoundingClientRect().top,this._canvasX=this.canvas.getBoundingClientRect().left}onDraw(e){var t;e.preventDefault(),e.stopPropagation(),this._isDrawCompleted||(this.addPointToList(e),this.clearCanvas(),this.draw(),(null===(t=this._points)||void 0===t?void 0:t.length)===this._pointsLimit&&this.onDrawComplete())}onMouseMove(e){var t;!this._isDrawCompleted&&(null===(t=this._points)||void 0===t?void 0:t.length)&&(this.setCanvasCursor(e),this.drawLastLine())}onDrawComplete(){this._isDrawCompleted=!0;const e=new CustomEvent(sa.COMPLETE,{bubbles:!0});this.canvas.dispatchEvent(e)}clearPoints(){this._points.length=0,this._isDrawCompleted=!1,this.canvas.style.cursor=this.DEFAULT_DRAW_CURSOR}get points(){return this._points}getCalculatedPoint(e,t){return e*t}addPointToList(e){var t;const a=e.clientX-this._canvasX,i=e.clientY-this._canvasY;if(this._points.length>1){const e=this.getCalculatedPoint(this._points[0].x,this.drawerOptions.width),t=this.getCalculatedPoint(this._points[0].y,this.drawerOptions.height),r=Math.abs(a-e),n=Math.abs(i-t);if(r<this.PIXELS_DISTANCE_RANGE&&n<this.PIXELS_DISTANCE_RANGE)return this.calculateAngles(),void this.onDrawComplete()}this._isDrawCompleted||null===(t=this._points)||void 0===t||t.push({x:a/this.drawerOptions.width,y:i/this.drawerOptions.height,cursor:this._points.length?0:1})}closePolygon(e,t){this.context.lineTo(e,t),this.context.closePath(),this.context.fill()}calculateAngles(){var t,a;const i=this.TRIANGLE_ANGLES_SUM*((null===(t=this._points)||void 0===t?void 0:t.length)-2);let r=this.INITIAL_ANGELS_SUM;const n=null===(a=this.points)||void 0===a?void 0:a.length;for(const[e,t]of this._points.entries()){const a=0===e?n-1:e-1,i=0===e?n-2:1===e?n-1:e-2,s=this._points[a],o=this._points[i],l=this.getAngle({x:this.getCalculatedPoint(t.x,this.drawerOptions.width),y:this.getCalculatedPoint(t.y,this.drawerOptions.height)},{x:this.getCalculatedPoint(s.x,this.drawerOptions.width),y:this.getCalculatedPoint(s.y,this.drawerOptions.height)},{x:this.getCalculatedPoint(o.x,this.drawerOptions.width),y:this.getCalculatedPoint(o.y,this.drawerOptions.height)});r+=Math.abs(l)}if(Math.round(r)!==i)throw this.clearCanvas(),this.clearPoints(),new e("Polygon not valid")}getAngle(e,t,a){const i=Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)),r=Math.sqrt(Math.pow(t.x-a.x,2)+Math.pow(t.y-a.y,2)),n=Math.sqrt(Math.pow(a.x-e.x,2)+Math.pow(a.y-e.y,2));return Math.acos((r*r+i*i-n*n)/(2*r*i))*(180/Math.PI)}setCanvasCursor(e){var t;let a;if(this._lastMouseX=e.clientX-this._canvasX,this._lastMouseY=e.clientY-this._canvasY,(null===(t=this._points)||void 0===t?void 0:t.length)>2){const e=Math.abs(this._lastMouseX-this.getCalculatedPoint(this._points[0].x,this.drawerOptions.width)),t=Math.abs(this._lastMouseY-this.getCalculatedPoint(this._points[0].y,this.drawerOptions.height)),i=this._points[0];e<10&&t<10&&(a=i.cursor),a?a!==this._currentCursor&&(this._currentCursor=a,this.canvas.style.cursor=this._cursors[this._currentCursor]):this._currentCursor>0&&(this._currentCursor=0,this.canvas.style.cursor=this._cursors[this._currentCursor])}}}function ua(e,t){return function t(a){if(!a||a===document||a===window)return null;a.assignedSlot&&(a=a.assignedSlot);return a.closest(e)||t(a.getRootNode().host)}(t)}const ca=Ve`
    :host {
        display: inline-block;
        font-family: var(--font-family);
    }
`;let da=class extends ae{constructor(){super(...arguments),this.borderColor="",this.CANVAS_DEFAULT_HEIGHT=375,this.CANVAS_DEFAULT_WIDTH=250,this.CANVAS_POSITION="relative",this.CURSOR_TYPE=oa.CROSSHAIR,this.LINE_WIDTH=2}borderColorChanged(){this.canvasOptions&&setTimeout((()=>{this.canvasOptions.lineColor=this.borderColor,this.dCanvas.drawerOptions=this.canvasOptions,this.resetLineDrawer()}))}connectedCallback(){super.connectedCallback(),setTimeout((()=>{this.init()}))}resetLineDrawer(){this.dCanvas.resize()}disconnectedCallback(){this.dCanvas.canvas.removeEventListener("mousemove",this.dCanvas.onMouseMove.bind(this.dCanvas)),this.dCanvas.canvas.removeEventListener("mouseup",this.dCanvas.onDraw.bind(this.dCanvas)),this.dCanvas.canvas.removeEventListener(sa.COMPLETE,this.onDrawComplete.bind(this)),window.removeEventListener("resize",this.resize)}init(){var e,t;const a=this.$fastController.element.parentElement,i=a.clientWidth||this.CANVAS_DEFAULT_WIDTH,r=a.clientHeight||this.CANVAS_DEFAULT_HEIGHT,n=ua("ava-design-system-provider",this.$fastController.element),s=n?null===(e=getComputedStyle(n))||void 0===e?void 0:e.getPropertyValue("--drawer-default-line-color"):"";this.canvasOptions={height:r,width:i,cursor:this.CURSOR_TYPE,position:this.CANVAS_POSITION,lineWidth:this.LINE_WIDTH,lineColor:this.borderColor||s},this.dCanvas=new ga(this.canvasOptions),this.dCanvas.setCanvas(this.canvasOptions.width,this.canvasOptions.height,2),null===(t=this.shadowRoot)||void 0===t||t.appendChild(this.dCanvas.canvas),this.dCanvas.initBoundingCanvas(),this.appendEvents()}appendEvents(){this.dCanvas.canvas.addEventListener("mousemove",this.dCanvas.onMouseMove.bind(this.dCanvas)),this.dCanvas.canvas.addEventListener("mouseup",this.dCanvas.onDraw.bind(this.dCanvas)),this.dCanvas.canvas.addEventListener(sa.COMPLETE,this.onDrawComplete.bind(this)),window.addEventListener("resize",this.resize.bind(this))}resize(){const e=this.$fastController.element.parentElement,t=(null==e?void 0:e.clientWidth)||this.CANVAS_DEFAULT_WIDTH,a=(null==e?void 0:e.clientHeight)||this.CANVAS_DEFAULT_HEIGHT;this.canvasOptions=Object.assign(Object.assign({},this.canvasOptions),{height:a,width:t}),this.dCanvas.drawerOptions=this.canvasOptions,this.dCanvas.initBoundingCanvas(),this.dCanvas.resize()}onDrawComplete(){this.$emit(sa.COMPLETE,this.dCanvas.points),this.dCanvas.clearPoints()}};i([W],da.prototype,"borderColor",void 0),da=i([ie({name:"media-line-drawer",styles:ca})],da);const pa=function(e,t){return e===t||e!=e&&t!=t},Ma=function(e,t){for(var a=e.length;a--;)if(pa(e[a][0],t))return a;return-1};var ma=Array.prototype.splice;function Ea(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var i=e[t];this.set(i[0],i[1])}}Ea.prototype.clear=function(){this.__data__=[],this.size=0},Ea.prototype.delete=function(e){var t=this.__data__,a=Ma(t,e);return!(a<0||(a==t.length-1?t.pop():ma.call(t,a,1),--this.size,0))},Ea.prototype.get=function(e){var t=this.__data__,a=Ma(t,e);return a<0?void 0:t[a][1]},Ea.prototype.has=function(e){return Ma(this.__data__,e)>-1},Ea.prototype.set=function(e,t){var a=this.__data__,i=Ma(a,e);return i<0?(++this.size,a.push([e,t])):a[i][1]=t,this};const ya=Ea,Ta=function(e){if(!$e(e))return!1;var t=ht(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Ia=at["__core-js_shared__"];var Da,ka=(Da=/[^.]+$/.exec(Ia&&Ia.keys&&Ia.keys.IE_PROTO||""))?"Symbol(src)_1."+Da:"";var fa=Function.prototype.toString;const Na=function(e){if(null!=e){try{return fa.call(e)}catch(e){}try{return e+""}catch(e){}}return""};var Sa=/^\[object .+?Constructor\]$/,Ca=Function.prototype,va=Object.prototype,xa=Ca.toString,wa=va.hasOwnProperty,_a=RegExp("^"+xa.call(wa).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Ua=function(e){return!(!$e(e)||(t=e,ka&&ka in t))&&(Ta(e)?_a:Sa).test(Na(e));var t},ba=function(e,t){var a=function(e,t){return null==e?void 0:e[t]}(e,t);return Ua(a)?a:void 0},Oa=ba(at,"Map"),Pa=ba(Object,"create");var Ba=Object.prototype.hasOwnProperty;var Ra=Object.prototype.hasOwnProperty;function za(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var i=e[t];this.set(i[0],i[1])}}za.prototype.clear=function(){this.__data__=Pa?Pa(null):{},this.size=0},za.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},za.prototype.get=function(e){var t=this.__data__;if(Pa){var a=t[e];return"__lodash_hash_undefined__"===a?void 0:a}return Ba.call(t,e)?t[e]:void 0},za.prototype.has=function(e){var t=this.__data__;return Pa?void 0!==t[e]:Ra.call(t,e)},za.prototype.set=function(e,t){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=Pa&&void 0===t?"__lodash_hash_undefined__":t,this};const Qa=za,ja=function(e,t){var a,i,r=e.__data__;return("string"==(i=typeof(a=t))||"number"==i||"symbol"==i||"boolean"==i?"__proto__"!==a:null===a)?r["string"==typeof t?"string":"hash"]:r.map};function La(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var i=e[t];this.set(i[0],i[1])}}La.prototype.clear=function(){this.size=0,this.__data__={hash:new Qa,map:new(Oa||ya),string:new Qa}},La.prototype.delete=function(e){var t=ja(this,e).delete(e);return this.size-=t?1:0,t},La.prototype.get=function(e){return ja(this,e).get(e)},La.prototype.has=function(e){return ja(this,e).has(e)},La.prototype.set=function(e,t){var a=ja(this,e),i=a.size;return a.set(e,t),this.size+=a.size==i?0:1,this};const Fa=La;function Ya(e){var t=this.__data__=new ya(e);this.size=t.size}Ya.prototype.clear=function(){this.__data__=new ya,this.size=0},Ya.prototype.delete=function(e){var t=this.__data__,a=t.delete(e);return this.size=t.size,a},Ya.prototype.get=function(e){return this.__data__.get(e)},Ya.prototype.has=function(e){return this.__data__.has(e)},Ya.prototype.set=function(e,t){var a=this.__data__;if(a instanceof ya){var i=a.__data__;if(!Oa||i.length<199)return i.push([e,t]),this.size=++a.size,this;a=this.__data__=new Fa(i)}return a.set(e,t),this.size=a.size,this};const Va=Ya,Ga=function(){try{var e=ba(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),Wa=function(e,t,a){"__proto__"==t&&Ga?Ga(e,t,{configurable:!0,enumerable:!0,value:a,writable:!0}):e[t]=a};var Ka=Object.prototype.hasOwnProperty;const Ha=function(e,t,a){var i=e[t];Ka.call(e,t)&&pa(i,a)&&(void 0!==a||t in e)||Wa(e,t,a)},Za=function(e,t,a,i){var r=!a;a||(a={});for(var n=-1,s=t.length;++n<s;){var o=t[n],l=i?i(a[o],e[o],o,a,e):void 0;void 0===l&&(l=e[o]),r?Wa(a,o,l):Ha(a,o,l)}return a},Ja=function(e){return gt(e)&&"[object Arguments]"==ht(e)};var Xa=Object.prototype,qa=Xa.hasOwnProperty,$a=Xa.propertyIsEnumerable;const ei=Ja(function(){return arguments}())?Ja:function(e){return gt(e)&&qa.call(e,"callee")&&!$a.call(e,"callee")},ti=Array.isArray;var ai= true&&exports&&!exports.nodeType&&exports,ii=ai&&"object"=="object"&&module&&!module.nodeType&&module,ri=ii&&ii.exports===ai?at.Buffer:void 0;const ni=(ri?ri.isBuffer:void 0)||function(){return!1};var si=/^(?:0|[1-9]\d*)$/;const oi=function(e,t){var a=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==a||"symbol"!=a&&si.test(e))&&e>-1&&e%1==0&&e<t},li=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var Ai={};Ai["[object Float32Array]"]=Ai["[object Float64Array]"]=Ai["[object Int8Array]"]=Ai["[object Int16Array]"]=Ai["[object Int32Array]"]=Ai["[object Uint8Array]"]=Ai["[object Uint8ClampedArray]"]=Ai["[object Uint16Array]"]=Ai["[object Uint32Array]"]=!0,Ai["[object Arguments]"]=Ai["[object Array]"]=Ai["[object ArrayBuffer]"]=Ai["[object Boolean]"]=Ai["[object DataView]"]=Ai["[object Date]"]=Ai["[object Error]"]=Ai["[object Function]"]=Ai["[object Map]"]=Ai["[object Number]"]=Ai["[object Object]"]=Ai["[object RegExp]"]=Ai["[object Set]"]=Ai["[object String]"]=Ai["[object WeakMap]"]=!1;const hi=function(e){return function(t){return e(t)}};var gi= true&&exports&&!exports.nodeType&&exports,ui=gi&&"object"=="object"&&module&&!module.nodeType&&module,ci=ui&&ui.exports===gi&&et.process;const di=function(){try{return ui&&ui.require&&ui.require("util").types||ci&&ci.binding&&ci.binding("util")}catch(e){}}();var pi=di&&di.isTypedArray;const Mi=pi?hi(pi):function(e){return gt(e)&&li(e.length)&&!!Ai[ht(e)]};var mi=Object.prototype.hasOwnProperty;const Ei=function(e,t){var a=ti(e),i=!a&&ei(e),r=!a&&!i&&ni(e),n=!a&&!i&&!r&&Mi(e),s=a||i||r||n,o=s?function(e,t){for(var a=-1,i=Array(e);++a<e;)i[a]=t(a);return i}(e.length,String):[],l=o.length;for(var A in e)!t&&!mi.call(e,A)||s&&("length"==A||r&&("offset"==A||"parent"==A)||n&&("buffer"==A||"byteLength"==A||"byteOffset"==A)||oi(A,l))||o.push(A);return o};var yi=Object.prototype;const Ti=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||yi)},Ii=function(e,t){return function(a){return e(t(a))}},Di=Ii(Object.keys,Object);var ki=Object.prototype.hasOwnProperty;const fi=function(e){return null!=e&&li(e.length)&&!Ta(e)},Ni=function(e){return fi(e)?Ei(e):function(e){if(!Ti(e))return Di(e);var t=[];for(var a in Object(e))ki.call(e,a)&&"constructor"!=a&&t.push(a);return t}(e)};var Si=Object.prototype.hasOwnProperty;const Ci=function(e){if(!$e(e))return function(e){var t=[];if(null!=e)for(var a in Object(e))t.push(a);return t}(e);var t=Ti(e),a=[];for(var i in e)("constructor"!=i||!t&&Si.call(e,i))&&a.push(i);return a},vi=function(e){return fi(e)?Ei(e,!0):Ci(e)};var xi= true&&exports&&!exports.nodeType&&exports,wi=xi&&"object"=="object"&&module&&!module.nodeType&&module,_i=wi&&wi.exports===xi?at.Buffer:void 0,Ui=_i?_i.allocUnsafe:void 0;const bi=function(){return[]};var Oi=Object.prototype.propertyIsEnumerable,Pi=Object.getOwnPropertySymbols;const Bi=Pi?function(e){return null==e?[]:(e=Object(e),function(e,t){for(var a=-1,i=null==e?0:e.length,r=0,n=[];++a<i;){var s=e[a];t(s,a,e)&&(n[r++]=s)}return n}(Pi(e),(function(t){return Oi.call(e,t)})))}:bi,Ri=function(e,t){for(var a=-1,i=t.length,r=e.length;++a<i;)e[r+a]=t[a];return e},zi=Ii(Object.getPrototypeOf,Object),Qi=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)Ri(t,Bi(e)),e=zi(e);return t}:bi,ji=function(e,t,a){var i=t(e);return ti(e)?i:Ri(i,a(e))},Li=function(e){return ji(e,Ni,Bi)},Fi=function(e){return ji(e,vi,Qi)},Yi=ba(at,"DataView"),Vi=ba(at,"Promise"),Gi=ba(at,"Set"),Wi=ba(at,"WeakMap");var Ki="[object Map]",Hi="[object Promise]",Zi="[object Set]",Ji="[object WeakMap]",Xi="[object DataView]",qi=Na(Yi),$i=Na(Oa),er=Na(Vi),tr=Na(Gi),ar=Na(Wi),ir=ht;(Yi&&ir(new Yi(new ArrayBuffer(1)))!=Xi||Oa&&ir(new Oa)!=Ki||Vi&&ir(Vi.resolve())!=Hi||Gi&&ir(new Gi)!=Zi||Wi&&ir(new Wi)!=Ji)&&(ir=function(e){var t=ht(e),a="[object Object]"==t?e.constructor:void 0,i=a?Na(a):"";if(i)switch(i){case qi:return Xi;case $i:return Ki;case er:return Hi;case tr:return Zi;case ar:return Ji}return t});const rr=ir;var nr=Object.prototype.hasOwnProperty;const sr=at.Uint8Array,or=function(e){var t=new e.constructor(e.byteLength);return new sr(t).set(new sr(e)),t};var lr=/\w*$/;var Ar=it?it.prototype:void 0,hr=Ar?Ar.valueOf:void 0;const gr=function(e,t,a){var i,r,n,s=e.constructor;switch(t){case"[object ArrayBuffer]":return or(e);case"[object Boolean]":case"[object Date]":return new s(+e);case"[object DataView]":return function(e,t){var a=t?or(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.byteLength)}(e,a);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(e,t){var a=t?or(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.length)}(e,a);case"[object Map]":return new s;case"[object Number]":case"[object String]":return new s(e);case"[object RegExp]":return(n=new(r=e).constructor(r.source,lr.exec(r))).lastIndex=r.lastIndex,n;case"[object Set]":return new s;case"[object Symbol]":return i=e,hr?Object(hr.call(i)):{}}};var ur=Object.create;const cr=function(){function e(){}return function(t){if(!$e(t))return{};if(ur)return ur(t);e.prototype=t;var a=new e;return e.prototype=void 0,a}}();var dr=di&&di.isMap;const pr=dr?hi(dr):function(e){return gt(e)&&"[object Map]"==rr(e)};var Mr=di&&di.isSet;const mr=Mr?hi(Mr):function(e){return gt(e)&&"[object Set]"==rr(e)};var Er="[object Arguments]",yr="[object Function]",Tr={};Tr[Er]=Tr["[object Array]"]=Tr["[object ArrayBuffer]"]=Tr["[object DataView]"]=Tr["[object Boolean]"]=Tr["[object Date]"]=Tr["[object Float32Array]"]=Tr["[object Float64Array]"]=Tr["[object Int8Array]"]=Tr["[object Int16Array]"]=Tr["[object Int32Array]"]=Tr["[object Map]"]=Tr["[object Number]"]=Tr["[object Object]"]=Tr["[object RegExp]"]=Tr["[object Set]"]=Tr["[object String]"]=Tr["[object Symbol]"]=Tr["[object Uint8Array]"]=Tr["[object Uint8ClampedArray]"]=Tr["[object Uint16Array]"]=Tr["[object Uint32Array]"]=!0,Tr["[object Error]"]=Tr[yr]=Tr["[object WeakMap]"]=!1;const Ir=function e(t,a,i,r,n,s){var o,l=1&a,A=2&a,h=4&a;if(i&&(o=n?i(t,r,n,s):i(t)),void 0!==o)return o;if(!$e(t))return t;var g=ti(t);if(g){if(o=function(e){var t=e.length,a=new e.constructor(t);return t&&"string"==typeof e[0]&&nr.call(e,"index")&&(a.index=e.index,a.input=e.input),a}(t),!l)return function(e,t){var a=-1,i=e.length;for(t||(t=Array(i));++a<i;)t[a]=e[a];return t}(t,o)}else{var u=rr(t),c=u==yr||"[object GeneratorFunction]"==u;if(ni(t))return function(e,t){if(t)return e.slice();var a=e.length,i=Ui?Ui(a):new e.constructor(a);return e.copy(i),i}(t,l);if("[object Object]"==u||u==Er||c&&!n){if(o=A||c?{}:function(e){return"function"!=typeof e.constructor||Ti(e)?{}:cr(zi(e))}(t),!l)return A?function(e,t){return Za(e,Qi(e),t)}(t,function(e,t){return e&&Za(t,vi(t),e)}(o,t)):function(e,t){return Za(e,Bi(e),t)}(t,function(e,t){return e&&Za(t,Ni(t),e)}(o,t))}else{if(!Tr[u])return n?t:{};o=gr(t,u,l)}}s||(s=new Va);var d=s.get(t);if(d)return d;s.set(t,o),mr(t)?t.forEach((function(r){o.add(e(r,a,i,r,t,s))})):pr(t)&&t.forEach((function(r,n){o.set(n,e(r,a,i,n,t,s))}));var p=g?void 0:(h?A?Fi:Li:A?vi:Ni)(t);return function(e,t){for(var a=-1,i=null==e?0:e.length;++a<i&&!1!==t(e[a],a,e););}(p||t,(function(r,n){p&&(r=t[n=r]),Ha(o,n,e(r,a,i,n,t,s))})),o};function Dr(e){return"function"==typeof e}var kr=!1,fr={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){e&&(new Error).stack,kr=e},get useDeprecatedSynchronousErrorHandling(){return kr}};function Nr(e){setTimeout((function(){throw e}),0)}var Sr={closed:!0,next:function(e){},error:function(e){if(fr.useDeprecatedSynchronousErrorHandling)throw e;Nr(e)},complete:function(){}},Cr=function(){return Array.isArray||function(e){return e&&"number"==typeof e.length}}(),vr=function(){function e(e){return Error.call(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(e,t){return t+1+") "+e.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e,this}return e.prototype=Object.create(Error.prototype),e}(),xr=function(){function e(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._ctorUnsubscribe=!0,this._unsubscribe=e)}return e.prototype.unsubscribe=function(){var t;if(!this.closed){var a,i=this,r=i._parentOrParents,n=i._ctorUnsubscribe,s=i._unsubscribe,o=i._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,r instanceof e)r.remove(this);else if(null!==r)for(var l=0;l<r.length;++l)r[l].remove(this);if(Dr(s)){n&&(this._unsubscribe=void 0);try{s.call(this)}catch(e){t=e instanceof vr?wr(e.errors):[e]}}if(Cr(o)){l=-1;for(var A=o.length;++l<A;){var h=o[l];if(null!==(a=h)&&"object"==typeof a)try{h.unsubscribe()}catch(e){t=t||[],e instanceof vr?t=t.concat(wr(e.errors)):t.push(e)}}}if(t)throw new vr(t)}},e.prototype.add=function(t){var a=t;if(!t)return e.EMPTY;switch(typeof t){case"function":a=new e(t);case"object":if(a===this||a.closed||"function"!=typeof a.unsubscribe)return a;if(this.closed)return a.unsubscribe(),a;if(!(a instanceof e)){var i=a;(a=new e)._subscriptions=[i]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var r=a._parentOrParents;if(null===r)a._parentOrParents=this;else if(r instanceof e){if(r===this)return a;a._parentOrParents=[r,this]}else{if(-1!==r.indexOf(this))return a;r.push(this)}var n=this._subscriptions;return null===n?this._subscriptions=[a]:n.push(a),a},e.prototype.remove=function(e){var t=this._subscriptions;if(t){var a=t.indexOf(e);-1!==a&&t.splice(a,1)}},e.EMPTY=function(e){return e.closed=!0,e}(new e),e}();function wr(e){return e.reduce((function(e,t){return e.concat(t instanceof vr?t.errors:t)}),[])}var _r=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),Ur=function(e){function t(a,i,r){var n=e.call(this)||this;switch(n.syncErrorValue=null,n.syncErrorThrown=!1,n.syncErrorThrowable=!1,n.isStopped=!1,arguments.length){case 0:n.destination=Sr;break;case 1:if(!a){n.destination=Sr;break}if("object"==typeof a){a instanceof t?(n.syncErrorThrowable=a.syncErrorThrowable,n.destination=a,a.add(n)):(n.syncErrorThrowable=!0,n.destination=new br(n,a));break}default:n.syncErrorThrowable=!0,n.destination=new br(n,a,i,r)}return n}return a(t,e),t.prototype[_r]=function(){return this},t.create=function(e,a,i){var r=new t(e,a,i);return r.syncErrorThrowable=!1,r},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this))},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){this.destination.error(e),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var e=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this},t}(xr),br=function(e){function t(t,a,i,r){var n,s=e.call(this)||this;s._parentSubscriber=t;var o=s;return Dr(a)?n=a:a&&(n=a.next,i=a.error,r=a.complete,a!==Sr&&(Dr((o=Object.create(a)).unsubscribe)&&s.add(o.unsubscribe.bind(o)),o.unsubscribe=s.unsubscribe.bind(s))),s._context=o,s._next=n,s._error=i,s._complete=r,s}return a(t,e),t.prototype.next=function(e){if(!this.isStopped&&this._next){var t=this._parentSubscriber;fr.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}},t.prototype.error=function(e){if(!this.isStopped){var t=this._parentSubscriber,a=fr.useDeprecatedSynchronousErrorHandling;if(this._error)a&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)a?(t.syncErrorValue=e,t.syncErrorThrown=!0):Nr(e),this.unsubscribe();else{if(this.unsubscribe(),a)throw e;Nr(e)}}},t.prototype.complete=function(){var e=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var a=function(){return e._complete.call(e._context)};fr.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,a),this.unsubscribe()):(this.__tryOrUnsub(a),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(e,t){try{e.call(this._context,t)}catch(e){if(this.unsubscribe(),fr.useDeprecatedSynchronousErrorHandling)throw e;Nr(e)}},t.prototype.__tryOrSetError=function(e,t,a){if(!fr.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,a)}catch(t){return fr.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=t,e.syncErrorThrown=!0,!0):(Nr(t),!0)}return!1},t.prototype._unsubscribe=function(){var e=this._parentSubscriber;this._context=null,this._parentSubscriber=null,e.unsubscribe()},t}(Ur),Or=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function Pr(e){return e}function Br(e){return 0===e.length?Pr:1===e.length?e[0]:function(t){return e.reduce((function(e,t){return t(e)}),t)}}var Rr=function(){function e(e){this._isScalar=!1,e&&(this._subscribe=e)}return e.prototype.lift=function(t){var a=new e;return a.source=this,a.operator=t,a},e.prototype.subscribe=function(e,t,a){var i=this.operator,r=function(e,t,a){if(e){if(e instanceof Ur)return e;if(e[_r])return e[_r]()}return e||t||a?new Ur(e,t,a):new Ur(Sr)}(e,t,a);if(i?r.add(i.call(r,this.source)):r.add(this.source||fr.useDeprecatedSynchronousErrorHandling&&!r.syncErrorThrowable?this._subscribe(r):this._trySubscribe(r)),fr.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable&&(r.syncErrorThrowable=!1,r.syncErrorThrown))throw r.syncErrorValue;return r},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){fr.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),function(e){for(;e;){var t=e,a=t.closed,i=t.destination,r=t.isStopped;if(a||r)return!1;e=i&&i instanceof Ur?i:null}return!0}(e)?e.error(t):console.warn(t)}},e.prototype.forEach=function(e,t){var a=this;return new(t=zr(t))((function(t,i){var r;r=a.subscribe((function(t){try{e(t)}catch(e){i(e),r&&r.unsubscribe()}}),i,t)}))},e.prototype._subscribe=function(e){var t=this.source;return t&&t.subscribe(e)},e.prototype[Or]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return 0===e.length?this:Br(e)(this)},e.prototype.toPromise=function(e){var t=this;return new(e=zr(e))((function(e,a){var i;t.subscribe((function(e){return i=e}),(function(e){return a(e)}),(function(){return e(i)}))}))},e.create=function(t){return new e(t)},e}();function zr(e){if(e||(e=fr.Promise||Promise),!e)throw new Error("no Promise impl found");return e}var Qr=new Rr((function(e){return e.complete()}));function jr(e,t){return function(a){if("function"!=typeof e)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return a.lift(new Lr(e,t))}}var Lr=function(){function e(e,t){this.project=e,this.thisArg=t}return e.prototype.call=function(e,t){return t.subscribe(new Fr(e,this.project,this.thisArg))},e}(),Fr=function(e){function t(t,a,i){var r=e.call(this,t)||this;return r.project=a,r.count=0,r.thisArg=i||r,r}return a(t,e),t.prototype._next=function(e){var t;try{t=this.project.call(this.thisArg,e,this.count++)}catch(e){return void this.destination.error(e)}this.destination.next(t)},t}(Ur);function Yr(e,t,a,i){return Dr(a)&&(i=a,a=void 0),i?Yr(e,t,a).pipe(jr((function(e){return Cr(e)?i.apply(void 0,e):i(e)}))):new Rr((function(i){Vr(e,t,(function(e){arguments.length>1?i.next(Array.prototype.slice.call(arguments)):i.next(e)}),i,a)}))}function Vr(e,t,a,i,r){var n;if(function(e){return e&&"function"==typeof e.addEventListener&&"function"==typeof e.removeEventListener}(e)){var s=e;e.addEventListener(t,a,r),n=function(){return s.removeEventListener(t,a,r)}}else if(function(e){return e&&"function"==typeof e.on&&"function"==typeof e.off}(e)){var o=e;e.on(t,a),n=function(){return o.off(t,a)}}else if(function(e){return e&&"function"==typeof e.addListener&&"function"==typeof e.removeListener}(e)){var l=e;e.addListener(t,a),n=function(){return l.removeListener(t,a)}}else{if(!e||!e.length)throw new TypeError("Invalid event target");for(var A=0,h=e.length;A<h;A++)Vr(e[A],t,a,i,r)}i.add(n)}function Gr(e,t){return function(a){return a.lift(new Wr(e,t))}}var Wr=function(){function e(e,t){this.compare=e,this.keySelector=t}return e.prototype.call=function(e,t){return t.subscribe(new Kr(e,this.compare,this.keySelector))},e}(),Kr=function(e){function t(t,a,i){var r=e.call(this,t)||this;return r.keySelector=i,r.hasKey=!1,"function"==typeof a&&(r.compare=a),r}return a(t,e),t.prototype.compare=function(e,t){return e===t},t.prototype._next=function(e){var t;try{var a=this.keySelector;t=a?a(e):e}catch(e){return this.destination.error(e)}var i=!1;if(this.hasKey)try{i=(0,this.compare)(this.key,t)}catch(e){return this.destination.error(e)}else this.hasKey=!0;i||(this.key=t,this.destination.next(e))},t}(Ur),Hr=function(){function e(e,t){this.predicate=e,this.thisArg=t}return e.prototype.call=function(e,t){return t.subscribe(new Zr(e,this.predicate,this.thisArg))},e}(),Zr=function(e){function t(t,a,i){var r=e.call(this,t)||this;return r.predicate=a,r.thisArg=i,r.count=0,r}return a(t,e),t.prototype._next=function(e){var t;try{t=this.predicate.call(this.thisArg,e,this.count++)}catch(e){return void this.destination.error(e)}t&&this.destination.next(e)},t}(Ur),Jr=function(e){function t(t,a){var i=e.call(this,t,a)||this;return i.scheduler=t,i.work=a,i.pending=!1,i}return a(t,e),t.prototype.schedule=function(e,t){if(void 0===t&&(t=0),this.closed)return this;this.state=e;var a=this.id,i=this.scheduler;return null!=a&&(this.id=this.recycleAsyncId(i,a,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(i,this.id,t),this},t.prototype.requestAsyncId=function(e,t,a){return void 0===a&&(a=0),setInterval(e.flush.bind(e,this),a)},t.prototype.recycleAsyncId=function(e,t,a){if(void 0===a&&(a=0),null!==a&&this.delay===a&&!1===this.pending)return t;clearInterval(t)},t.prototype.execute=function(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var a=this._execute(e,t);if(a)return a;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(e,t){var a=!1,i=void 0;try{this.work(e)}catch(e){a=!0,i=!!e&&e||new Error(e)}if(a)return this.unsubscribe(),i},t.prototype._unsubscribe=function(){var e=this.id,t=this.scheduler,a=t.actions,i=a.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==i&&a.splice(i,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null},t}(function(e){function t(t,a){return e.call(this)||this}return a(t,e),t.prototype.schedule=function(e,t){return void 0===t&&(t=0),this},t}(xr)),Xr=function(){function e(t,a){void 0===a&&(a=e.now),this.SchedulerAction=t,this.now=a}return e.prototype.schedule=function(e,t,a){return void 0===t&&(t=0),new this.SchedulerAction(this,e).schedule(a,t)},e.now=function(){return Date.now()},e}(),qr=new(function(e){function t(a,i){void 0===i&&(i=Xr.now);var r=e.call(this,a,(function(){return t.delegate&&t.delegate!==r?t.delegate.now():i()}))||this;return r.actions=[],r.active=!1,r.scheduled=void 0,r}return a(t,e),t.prototype.schedule=function(a,i,r){return void 0===i&&(i=0),t.delegate&&t.delegate!==this?t.delegate.schedule(a,i,r):e.prototype.schedule.call(this,a,i,r)},t.prototype.flush=function(e){var t=this.actions;if(this.active)t.push(e);else{var a;this.active=!0;do{if(a=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,a){for(;e=t.shift();)e.unsubscribe();throw a}}},t}(Xr))(Jr),$r=function(){function e(e,t){this.dueTime=e,this.scheduler=t}return e.prototype.call=function(e,t){return t.subscribe(new en(e,this.dueTime,this.scheduler))},e}(),en=function(e){function t(t,a,i){var r=e.call(this,t)||this;return r.dueTime=a,r.scheduler=i,r.debouncedSubscription=null,r.lastValue=null,r.hasValue=!1,r}return a(t,e),t.prototype._next=function(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(tn,this.dueTime,this))},t.prototype._complete=function(){this.debouncedNext(),this.destination.complete()},t.prototype.debouncedNext=function(){if(this.clearDebounce(),this.hasValue){var e=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}},t.prototype.clearDebounce=function(){var e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)},t}(Ur);function tn(e){e.debouncedNext()}var an=function(){function e(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return e.prototype=Object.create(Error.prototype),e}(),rn=function(e){function t(t,a){var i=e.call(this)||this;return i.subject=t,i.subscriber=a,i.closed=!1,i}return a(t,e),t.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var e=this.subject,t=e.observers;if(this.subject=null,t&&0!==t.length&&!e.isStopped&&!e.closed){var a=t.indexOf(this.subscriber);-1!==a&&t.splice(a,1)}}},t}(xr),nn=function(e){function t(t){var a=e.call(this,t)||this;return a.destination=t,a}return a(t,e),t}(Ur),sn=function(e){function t(){var t=e.call(this)||this;return t.observers=[],t.closed=!1,t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return a(t,e),t.prototype[_r]=function(){return new nn(this)},t.prototype.lift=function(e){var t=new on(this,this);return t.operator=e,t},t.prototype.next=function(e){if(this.closed)throw new an;if(!this.isStopped)for(var t=this.observers,a=t.length,i=t.slice(),r=0;r<a;r++)i[r].next(e)},t.prototype.error=function(e){if(this.closed)throw new an;this.hasError=!0,this.thrownError=e,this.isStopped=!0;for(var t=this.observers,a=t.length,i=t.slice(),r=0;r<a;r++)i[r].error(e);this.observers.length=0},t.prototype.complete=function(){if(this.closed)throw new an;this.isStopped=!0;for(var e=this.observers,t=e.length,a=e.slice(),i=0;i<t;i++)a[i].complete();this.observers.length=0},t.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},t.prototype._trySubscribe=function(t){if(this.closed)throw new an;return e.prototype._trySubscribe.call(this,t)},t.prototype._subscribe=function(e){if(this.closed)throw new an;return this.hasError?(e.error(this.thrownError),xr.EMPTY):this.isStopped?(e.complete(),xr.EMPTY):(this.observers.push(e),new rn(this,e))},t.prototype.asObservable=function(){var e=new Rr;return e.source=this,e},t.create=function(e,t){return new on(e,t)},t}(Rr),on=function(e){function t(t,a){var i=e.call(this)||this;return i.destination=t,i.source=a,i}return a(t,e),t.prototype.next=function(e){var t=this.destination;t&&t.next&&t.next(e)},t.prototype.error=function(e){var t=this.destination;t&&t.error&&this.destination.error(e)},t.prototype.complete=function(){var e=this.destination;e&&e.complete&&this.destination.complete()},t.prototype._subscribe=function(e){return this.source?this.source.subscribe(e):xr.EMPTY},t}(sn),ln=function(e){function t(t){var a=e.call(this)||this;return a._value=t,a}return a(t,e),Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0}),t.prototype._subscribe=function(t){var a=e.prototype._subscribe.call(this,t);return a&&!a.closed&&t.next(this._value),a},t.prototype.getValue=function(){if(this.hasError)throw this.thrownError;if(this.closed)throw new an;return this._value},t.prototype.next=function(t){e.prototype.next.call(this,this._value=t)},t}(sn);const An={positive:"#1abc9c",negative:"#e83128",neutral:"rgba(0,0,0,0)",default:"rgba(0,0,0,0.08)"},hn=/(  +)|(?:\r\n|\r|\n|\r\s)/g;function gn(e,t=!1){const a=e;let i=Math.floor(a/3600),r=Math.floor((a-3600*i)/60),n=a-3600*i-60*r;return t&&(n=Math.round(n)),60===n&&(n=0,r++,60===r&&(r=0,i++)),i<10&&(i="0"+i),r<10&&(r="0"+r),n<10&&(n="0"+n),i+":"+r+":"+n}const un="http://www.w3.org/2000/svg";class cn{constructor(e,t,a,i,r,n){this.width=0,this.defaultWidth=0,this.height=0,this.x=0,this.y=0,this.color="",this.classList=[],this.className="",this.height=e,this.width=t,this.defaultWidth=t,this.x=a,this.y=i,r&&(this.color=r),n&&(this.className=n),this.classList=[]}addClass(e){"classList"in this._el?this._el.classList.add(e):this._el.className.baseVal=this._el.className.baseVal+" "+e}removeClass(e){"classList"in this._el?this._el.classList.remove(e):this._el.className.baseVal=this._el.className.baseVal.replace(this.classReg(e)," ")}hasClass(e){const t=" "+e+" ",a=this._el.length;for(let e=0;e<a;e+=1)if(1===this._el[e].nodeType&&(" "+this._el[e].className+" ").replace(/[\t\r\n]/g," ").indexOf(t)>=0)return!0;return!1}classReg(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}}class dn extends cn{constructor(e,t,a,i,r,n){super(e,t,a,i,r,n),this.value=0,this.addTabIndex=!1,this._el=this.createElement(),this.update()}createElement(){return document.createElementNS(un,"rect")}update(){const e=this._el;e&&isFinite(this.width)&&isFinite(this.height)&&(e.setAttribute("width",this.width.toString()+"%"),e.setAttribute("height",this.height.toString()),e.setAttribute("x",this.x.toString()+"%"),e.setAttribute("y",this.y.toString()),e.setAttribute("class","transition"),this.addTabIndex&&e.setAttribute("tabindex","0"),this.color&&e.setAttribute("style",`fill:${this.color}`),this.classList.forEach((t=>{e.classList.contains(t)||e.classList.add(t)})))}remove(){this._el.remove()}moveTo(e){e=Math.min(e,100),this._el.setAttribute("transform",`scale(${e},1)`),this._el.style.transform=`scale3d(${e},1,1)`,this._el.style.webkitTransform=`scale3d(${e},1,1)`,this._el.style["-ms-transform"]=`scale3d(${e},1,1)`,this.value=e}show(){this.addClass("show")}hide(){this.removeClass("hide")}}class pn extends cn{constructor(e,t,a,i,r,n){super(e,t,a,i,n),this.text="",this.text=r||"00:00:00",this.components={text:document.createElementNS(un,"text"),path:document.createElementNS(un,"path")},this._el=this.createElement()}createElement(){const e=document.createElementNS(un,"path"),t=document.createElementNS(un,"text");t.textContent=this.text,t.setAttribute("x",""+(this.x+this.width/2-20)),t.setAttribute("y",`${this.y+this.height/2+4}`),t.setAttribute("fill","var(--segments-color)"),this.components.text=t,this.components.path=e,this.setDefaultWidth();const a=document.createElementNS(un,"g");return this.color&&a.setAttribute("fill",`${this.color}`),a.setAttribute("class","tooltip"),a.appendChild(e),a.appendChild(t),a}setDefaultWidth(){this.width=this.defaultWidth,this.components.path.setAttribute("d",`M${this.x} ${this.y}\n                                              L${this.width+this.x} ${this.y}\n                                              L${this.width+this.x} ${this.height+this.y}\n                                              L${this.x+this.width/2+5} ${this.height+this.y}\n                                              L${this.x+this.width/2} ${this.height+this.y+5}\n                                              L${this.x+this.width/2-5} ${this.height+this.y}\n                                              L${this.x} ${this.height+this.y}`.replace(hn," "))}setWidth(e){this.width=this.defaultWidth+e,this.components.path.setAttribute("d",`M${this.x} ${this.y}\n                                              L${this.width+this.x} ${this.y}\n                                              L${this.width+this.x} ${this.height+this.y}\n                                              L${this.x+this.width/2+5} ${this.height+this.y}\n                                              L${this.x+this.width/2} ${this.height+this.y+5}\n                                              L${this.x+this.width/2-5} ${this.height+this.y}\n                                              L${this.x} ${this.height+this.y}`.replace(hn," "))}show(){this.hasClass("show")||this.addClass("show")}hide(){this.removeClass("show")}moveTo(e,t){e&&t&&(this._el.setAttribute("transform",`translate(${e} 0)`),this._el.style.transform=`translate3d(${e}px,0,0)`,this._el.style.webkitTransform=`translate3d(${e}px,0,0)`)}setText(e){this.setDefaultWidth(),this.components.text.textContent=gn(e,!0)}setColor(e){this._el.setAttribute("fill",e)}remove(){this._el.remove()}update(){const e=this._el;e&&isFinite(this.width)&&isFinite(this.height)&&(e.setAttribute("width",this.width.toString()+"%"),e.setAttribute("height",this.height.toString()),e.setAttribute("x",this.x.toString()+"%"),e.setAttribute("y",this.y.toString()),e.setAttribute("class","transition"),this.color&&e.setAttribute("fill",`${this.color}`),this.classList.forEach((t=>{e.classList.contains(t)||e.classList.add(t)})))}updateColor(e){const t=this._el;t&&isFinite(this.width)&&isFinite(this.height)&&(e?(this.color=e,t.setAttribute("fill",`${this.color}`)):t.setAttribute("fill","var(--segments-tooltip)"))}}class Mn{constructor(e,t){var a;if(this.lastMatch=!1,this.currentTooltipType="default",this.options={height:500,width:500,data:[],time:0,tooltipHeight:20,barHeight:12,top:0,renderBuffer:!1,renderProgress:!1},this.activeSegment$=new ln(null),!e)throw new Error("Root SVG Element is missing");this.rootElement=e,this.id=this.rootElement.id,t&&(this.options.height=t.height,this.options.width=t.width||(null===(a=this.rootElement.parentElement)||void 0===a?void 0:a.clientWidth),this.options.data=t.data,this.options.time=t.time,this.options.barHeight=t.barHeight||this.options.barHeight,this.options.tooltipHeight=t.renderTooltip?t.tooltipHeight||30:0,this.options.renderTooltip=t.renderTooltip,this.options.top=t.renderTooltip?10+this.options.tooltipHeight:0,this.options.renderBuffer=t.renderBuffer,this.options.renderProgress=t.renderProgress,this.options.disableCursor=t.disableCursor),this.rootElement.setAttribute("height",this.options.height.toString()),this.rootElement.setAttribute("width","100%"),this.components={progressBar:{bar:null,buffer:null,progress:null,tooltip:null},events:[]},this.init()}addClass(e){if("classList"in this.rootElement)this.rootElement.classList.add(e);else{const t=this.rootElement;t&&(t.className=t.className+" "+e)}}onSetProgress(e){const t=this;e&&this.components.progressBar.bar._el.addEventListener("click",(a=>{const i=a.offsetX/t.options.width,r=Math.round(i*t.options.time);e(r)}))}setProgress(e){const t=typeof e,a=this.updateActiveRect(e);if(this.activeSegment$.next(a),"undefined"===t||!this.options.renderProgress)return;e=Math.min(e,this.options.time),Math.abs(e-this.options.time)<.5&&(e=Math.ceil(e));const i=Math.min(e/this.options.time*100,100);this.components.progressBar.progress.moveTo(i)}setPreBuffer(e){var t,a,i,r;let n=(e=Math.min(e,this.options.time))/this.options.time*this.options.width-(null===(t=this.components.progressBar.tooltip)||void 0===t?void 0:t.width)/2;n=Math.max(Math.min(n,this.options.width-(null===(a=this.components.progressBar.tooltip)||void 0===a?void 0:a.width)),0),null===(i=this.components.progressBar.tooltip)||void 0===i||i.show(),this.options.renderBuffer&&(this.components.progressBar.buffer.show(),this.setBuffer(e)),null===(r=this.components.progressBar.tooltip)||void 0===r||r.moveTo(n,e)}clearEvents(){this.components.progressBar.bar._el.removeEventListener("click",this.handleMouseClick.bind(this)),this.components.progressBar.bar._el.removeEventListener("mouseleave",this.handleMouseLeave.bind(this)),this.components.progressBar.bar._el.removeEventListener("mousemove",this.handleMouseMove.bind(this)),this.components.events.forEach((e=>{e._el.removeEventListener("click",this.handleMouseClick.bind(this)),e._el.removeEventListener("mouseleave",this.handleMouseLeave.bind(this)),e._el.removeEventListener("mousemove",this.handleMouseMove.bind(this))}))}setWidth(e){this.options.width=e||this.rootElement.parentElement.clientWidth}destroy(){this.clearEvents(),this.components.events.forEach((e=>e.remove())),Object.keys(this.components.progressBar).forEach((e=>{this.components.progressBar[e]&&this.components.progressBar[e].remove()}))}setData(e){this.components.events.forEach((e=>{e.remove()})),this.components.events.length=0,e.forEach(((e,t)=>{if(e.x||(e.x=t?this.options.data[t-1].x+this.options.data[t-1].width:0),this.components.events&&this.components.events[t]&&this.components.events[t]._el)this.components.events[t].x=e.x,this.components.events[t].width=e.width,this.components.events[t].type=e.type||"default",this.components.events[t].color=e.color?e.color:An[e.type||"default"],this.components.events[t].width&&this.components.events[t].x&&this.components.events[t].type&&this.components.events[t].color&&this.components.events[t].update();else{const t=new dn(this.options.barHeight,e.width,e.x,10+this.options.tooltipHeight,e.color);t.type=e.type,t.addClass(e.type||"default"),this.components.events.push(t),this.components.progressBar.tooltip?this.components.progressBar.tooltip._el.parentNode.insertBefore(t._el,this.components.progressBar.tooltip._el):this.rootElement.appendChild(t._el),t._el.addEventListener("click",this.handleMouseClick.bind(this)),t._el.addEventListener("mouseleave",this.handleMouseLeave.bind(this)),t._el.addEventListener("mousemove",this.handleMouseMove.bind(this))}}))}setTabIndex(e){this.components.events.forEach((t=>{t._el.setAttribute("tabindex",e),e?(t._el.addEventListener("focus",this.handleFocus.bind(this)),t._el.addEventListener("focusout",this.handelFocusOut.bind(this))):(t._el.removeEventListener("focus",this.handleFocus.bind(this)),t._el.addEventListener("focusout",this.handelFocusOut.bind(this)))}))}setBuffer(e){e=Math.min(e,this.options.time);const t=this;if(!e)return;const a=Math.min(e/t.options.time*100,t.options.time);window.requestAnimationFrame((()=>{t.components.progressBar.buffer.moveTo(a)}))}handleMouseLeave(){window.requestAnimationFrame((()=>{var e;null===(e=this.components.progressBar.tooltip)||void 0===e||e.hide(),this.options.renderBuffer&&this.components.progressBar.buffer.hide()}))}handelFocusOut(){window.requestAnimationFrame((()=>{var e;null===(e=this.components.progressBar.tooltip)||void 0===e||e.hide(),this.options.renderBuffer&&this.components.progressBar.buffer.hide()}))}handleFocus(e){var t;const a=e.currentTarget.x,i=e.currentTarget.width;if(a){const e=a.animVal.value,r=i.animVal.value;null===(t=this.components.progressBar.tooltip)||void 0===t||t.moveTo(0,0),this.moveTooltip(e+r/2)}}handleMouseMove(e){this.moveTooltip(e.offsetX)}moveTooltip(e){if(!this.options.renderTooltip)return;const t=e/this.options.width*this.options.time;clearTimeout(this.timer),this.timer=setTimeout((()=>{var a;this.lastMatch=!1,this.components.events.forEach((a=>{var i,r;a._el&&(e>=a.x*this.options.width/100&&e<(a.x+a.width)/100*this.options.width&&"neutral"!==a.type?(this.lastMatch=!0,a.type!==this.currentTooltipType&&window.requestAnimationFrame((()=>{var e,t,i;null===(e=this.components.progressBar.tooltip)||void 0===e||e.removeClass(this.currentTooltipType),this.currentTooltipType=a.type||"default",null===(t=this.components.progressBar.tooltip)||void 0===t||t.addClass(this.currentTooltipType),null===(i=this.components.progressBar.tooltip)||void 0===i||i.updateColor(a.color)}))):null===(i=this.components.progressBar.tooltip)||void 0===i||i.updateColor(),null===(r=this.components.progressBar.tooltip)||void 0===r||r.setText(t))})),this.lastMatch||(null===(a=this.components.progressBar.tooltip)||void 0===a||a.removeClass(this.currentTooltipType),this.currentTooltipType="neutral"),window.requestAnimationFrame((()=>{this.setPreBuffer(t)}))}),10)}handleMouseClick(e){const t=e.offsetX/this.options.width*100,a=this.updateActiveRect(this.options.time*(t/100));this.activeSegment$.next(a),this.options.renderProgress&&window.requestAnimationFrame((()=>{this.components.progressBar.progress.moveTo(t)}))}updateActiveRect(e){if(this.activeRect){const t=this.activeRect.x/100*this.options.time,a=this.activeRect.width/100*this.options.time+t;if(t<=e&&a>=e)return null;this.activeRect.removeClass("active"),this.activeRect=null}for(const t of this.components.events){const a=t.x/100*this.options.time,i=t.width/100*this.options.time+a;if(a<=e&&i>=e)return this.activeRect=t,this.activeRect.addClass("active"),{startSeconds:a,endSeconds:i,color:t.color}}return null}init(){let e,t;const a=new dn(this.options.barHeight,100,0,this.options.tooltipHeight+10);if(a.addClass("bar"),this.rootElement.appendChild(a._el),this.components.progressBar.bar=a,this.options.renderProgress&&(e=new dn(5,1,0,10+this.options.barHeight+this.options.tooltipHeight),e.addClass("progress"),e.moveTo(0)),this.options.renderBuffer&&(t=new dn(this.options.barHeight,1,0,this.options.top),this.rootElement.appendChild(t._el),this.components.progressBar.buffer=t,t.addClass("buffer"),t.moveTo(0)),this.options.renderProgress&&(this.rootElement.appendChild(e._el),this.components.progressBar.progress=e),this.options.data&&this.setData(this.options.data),this.options.renderTooltip){const e=new pn(this.options.tooltipHeight,2.4*this.options.tooltipHeight,0,2,"00:00:00");this.components.progressBar.tooltip=e,this.rootElement.appendChild(e._el)}a._el.addEventListener("mouseleave",this.handleMouseLeave.bind(this)),a._el.addEventListener("mousemove",this.handleMouseMove.bind(this)),this.options.disableCursor?a._el.style.cursor="not-allowed":a._el.addEventListener("click",this.handleMouseClick.bind(this)),this.rootElement.setAttribute("class","show")}}window.SVGProgressChart=Mn||{};const mn=Ve`
    ${Ve`
    svg {
        font-family: 'Segoe UI';
        font-display: swap;
        font-size: 12px;
        -webkit-user-select: none;
        opacity: 0;
        transition: opacity 0.4s;
        -moz-transition: opacity 0.4s;
        -o-transition: opacity 0.4s;
        -webkit-transition: opacity 0.4s;
        outline: none;
    }

    .tooltip {
        opacity: 0;
    }

    .tooltip:hover {
        cursor: pointer;
        user-select: none;
    }

    .tooltip text {
        font-size: 0.9em;
    }

    .tooltip.default text {
        fill: var(--segments-tooltip-text);
    }

    rect,
    rect.default {
        cursor: pointer;
    }

    rect.active {
        fill: var(--segments-active-color) !important;
    }

    .buffer-progress {
        transition: transform 0.1s;
        -moz-transition: transform 0.1s;
        -o-transition: transform 0.1s;
        -webkit-transition: transform 0.1s;
        opacity: 0;
    }
    .buffer-progress:hover {
        opacity: 1;
    }

    .bar {
        fill: var(--segments-line-bg);
        cursor: not-allowed;
    }

    .buffer {
        opacity: 0;
        fill: rgba(0, 0, 0, 0.15);
    }

    .show {
        opacity: 1;
    }

    .progress {
        fill: var(--segments-progress-color);
    }

    .transition {
        transform-origin: left;
        transition: transform 0.2s, opacity 0.2s, x 0.2s, width 0.2s;
        -moz-transition: transform 0.2s, opacity 0.2s, x 0.2s, width 0.2s;
        -o-transition: transform 0.2s, opacity 0.2s, x 0.2s, width 0.2s;
        -webkit-transition: transform 0.2s, opacity 0.2s, x 0.2s, width 0.2s;
    }
`}
    :host {
        display: block;
        font-family: 'Arial';
        width: 100%;
    }
`,En=Le`
    <template>
        <svg width="100%" height="60" xmlns="http://www.w3.org/2000/svg" tabindex="-1"></svg>
    </template>
`;let yn=class extends ae{constructor(e){super(),this.config=null,this.currentTime=0,this.processedSegments=[],this.DEFAULT_COLOR="black",this.TOOLTIP_TEXT="white",this.emptyConfig={data:{segments:[],duration:0},displayOptions:{height:20}},this.DAY_DURATION_IN_SECONDS=86400,this.config=e||this.emptyConfig}configChanged(){this.config&&this.initSegmentsLine()}zoomChanged(){this.config&&this.initSegmentsLine()}currentTimeChanged(){var e;null===(e=this.timelineProgress)||void 0===e||e.setProgress(+this.currentTime)}connectedCallback(){var e;super.connectedCallback(),null===(e=this.onResizeEventStream())||void 0===e||e.subscribe((()=>{var e;null===(e=this.timelineProgress)||void 0===e||e.destroy(),this.initSVGProgress()}))}initSegmentsLine(){this.prepareData(),setTimeout((()=>{this.initSVGProgress()}))}prepareData(){var e,t,a,i,r,n,s,o;if(this.processedSegments=[],!(null===(a=null===(t=null===(e=this.config)||void 0===e?void 0:e.data)||void 0===t?void 0:t.segments)||void 0===a?void 0:a.length))return;const l=ua("ava-design-system-provider",this.$fastController.element),A=l?null===(i=getComputedStyle(l))||void 0===i?void 0:i.getPropertyValue("--segments-color"):this.DEFAULT_COLOR,h=l?null===(r=getComputedStyle(l))||void 0===r?void 0:r.getPropertyValue("--segments-tooltip-text"):this.TOOLTIP_TEXT,g=(u=this.config.data.segments,Ir(u,5));var u;for(let e=0;e<g.length;e++){let t=Math.min(g[e].startSeconds/this.config.data.duration*100,100),a=Math.max((g[e].endSeconds-g[e].startSeconds)/this.config.data.duration,.0051);if((null===(n=this.config.displayOptions)||void 0===n?void 0:n.timeSmoothing)&&(null===(s=this.config.displayOptions)||void 0===s?void 0:s.timeSmoothing)>0&&e>0){const i=g[e-1];i.endSeconds+(null===(o=this.config.displayOptions)||void 0===o?void 0:o.timeSmoothing)>g[e].startSeconds&&i.color===g[e].color&&(this.processedSegments.pop(),g[e].startSeconds=i.startSeconds,t=Math.min(g[e].startSeconds/this.config.data.duration*100,100),a=Math.max((g[e].endSeconds-g[e].startSeconds)/this.config.data.duration,.0051))}this.processedSegments.push({x:t,width:100*a,color:g[e].color||A,textColor:g[e].textColor||h})}}getFirstParentWidth(e){let t=e.parentNode,a=t?e.getBoundingClientRect().width:0;for(;t&&!a;){if(t=e.parentNode,!t.getBoundingClientRect)return 0;a=t.getBoundingClientRect().width}return a}onTimeChange(){return window?Yr(window,"message").pipe(Gr()):Qr}onResizeEventStream(e=375,t=100){return window?Yr(window,"resize").pipe(jr((e=>e.target.innerWidth))).pipe((r=t=>t>e,function(e){return e.lift(new Hr(r,undefined))})).pipe((a=t,void 0===i&&(i=qr),function(e){return e.lift(new $r(a,i))})).pipe(Gr()):null;var a,i,r}jumpToNextSegment(){var e,t,a,i;const r=(null===(e=this.lastActiveSegment)||void 0===e?void 0:e.endSeconds)||0;if(!(null===(t=this.processedSegments)||void 0===t?void 0:t.length))return!1;const n=(null===(i=null===(a=this.config)||void 0===a?void 0:a.data)||void 0===i?void 0:i.duration)||1;for(const e of this.processedSegments){const t=e.x/100*n;if(t>r)return this.currentTime=t,!0}return this.lastActiveSegment=null,this.currentTime=this.DAY_DURATION_IN_SECONDS,!1}jumpToPreviousSegment(){var e,t,a,i,r;const n=(null===(e=this.lastActiveSegment)||void 0===e?void 0:e.startSeconds)||this.DAY_DURATION_IN_SECONDS;if(!(null===(t=this.processedSegments)||void 0===t?void 0:t.length))return!1;const s=(null===(i=null===(a=this.config)||void 0===a?void 0:a.data)||void 0===i?void 0:i.duration)||1;for(const e of null===(r=this.processedSegments)||void 0===r?void 0:r.slice().reverse()){const t=e.x/100*s;if(e.width/100*s+t<n)return this.currentTime=t,!0}return this.lastActiveSegment=null,this.currentTime=0,!1}initSVGProgress(){var e,t,a,i,r,n,s,o,l,A,h,g,u,c,d,p,M,m,E,y;const T=null===(e=this.$fastController.element.shadowRoot)||void 0===e?void 0:e.querySelector("svg"),I=this.$fastController.element.offsetWidth*(this.config.displayOptions.zoom||1);T.style.width=`${I}px`;const D={width:I,height:(null===(a=null===(t=this.config)||void 0===t?void 0:t.displayOptions)||void 0===a?void 0:a.height)||30,time:(null===(r=null===(i=this.config)||void 0===i?void 0:i.data)||void 0===r?void 0:r.duration)||1,data:this.processedSegments,barHeight:(null===(s=null===(n=this.config)||void 0===n?void 0:n.displayOptions)||void 0===s?void 0:s.barHeight)||12,renderTooltip:(null===(l=null===(o=this.config)||void 0===o?void 0:o.displayOptions)||void 0===l?void 0:l.renderTooltip)||!1,tooltipHeight:null===(h=null===(A=this.config)||void 0===A?void 0:A.displayOptions)||void 0===h?void 0:h.tooltipHeight,renderProgress:(null===(u=null===(g=this.config)||void 0===g?void 0:g.displayOptions)||void 0===u?void 0:u.renderProgress)||!1,top:null===(d=null===(c=this.config)||void 0===c?void 0:c.displayOptions)||void 0===d?void 0:d.top,disableCursor:(null===(M=null===(p=this.config)||void 0===p?void 0:p.displayOptions)||void 0===M?void 0:M.disableCursor)||!1};null===(E=null===(m=this.timelineProgress)||void 0===m?void 0:m.activeSegment$)||void 0===E||E.unsubscribe(),null===(y=this.timelineProgress)||void 0===y||y.destroy(),this.timelineProgress=new Mn(T,D),this.timelineProgress.setProgress(this.currentTime),this.timelineProgress.onSetProgress((e=>{this.currentTime=e,this.$emit(Tt.CURRENT_TIME_CHANGE,this.currentTime)})),this.timelineProgress.activeSegment$.subscribe((e=>{var t,a;e&&(null==e?void 0:e.startSeconds)!==(null===(t=this.lastActiveSegment)||void 0===t?void 0:t.startSeconds)&&(null==e?void 0:e.endSeconds)!==(null===(a=this.lastActiveSegment)||void 0===a?void 0:a.endSeconds)&&(this.lastActiveSegment=e,this.$emit(Tt.SEGMENT_CLICKED,e))})),this.onTimeChange().subscribe((e=>{const t=e;if(t.data){const e=t.data.time||t.data.currentTime;if(!e)return;setTimeout((()=>{this.currentTime=e}))}}))}};i([W],yn.prototype,"config",void 0),i([W],yn.prototype,"currentTime",void 0),yn=i([ie({name:"media-segments-timeline",template:En,styles:mn})],yn);let Tn=class extends ae{constructor(){super(),this.borderColor="",this.fillColor="",this.CANVAS_DEFAULT_HEIGHT=375,this.CANVAS_DEFAULT_WIDTH=250,this.CANVAS_POSITION="relative",this.CURSOR_TYPE=oa.CROSSHAIR,this.LINE_WIDTH=2,this.POINTS_LIMIT=10}borderColorChanged(){setTimeout((()=>{this.dCanvas.drawerOptions.lineColor=this.borderColor,this.resetLineDrawer()}))}fillColorChanged(){setTimeout((()=>{this.dCanvas.drawerOptions.fillStyle=this.fillColor,this.resetLineDrawer()}))}connectedCallback(){super.connectedCallback(),this.init()}resetLineDrawer(){this.dCanvas.resize()}disconnectedCallback(){this.dCanvas.canvas.removeEventListener("mousemove",this.dCanvas.onMouseMove.bind(this.dCanvas)),this.dCanvas.canvas.removeEventListener("mouseup",this.dCanvas.onDraw.bind(this.dCanvas)),this.dCanvas.canvas.removeEventListener(sa.COMPLETE,this.onDrawComplete.bind(this)),window.removeEventListener("resize",this.resize)}init(){var e,t,a;const i=this.$fastController.element.parentElement,r=(null==i?void 0:i.clientWidth)||this.CANVAS_DEFAULT_WIDTH,n=(null==i?void 0:i.clientHeight)||this.CANVAS_DEFAULT_HEIGHT,s=ua("ava-design-system-provider",this.$fastController.element),o=s?null===(e=getComputedStyle(s))||void 0===e?void 0:e.getPropertyValue("--drawer-line-color"):"",l=s?null===(t=getComputedStyle(s))||void 0===t?void 0:t.getPropertyValue("--drawer-fill-color"):"",A={height:n,width:r,cursor:this.CURSOR_TYPE,position:this.CANVAS_POSITION,lineWidth:this.LINE_WIDTH,lineColor:this.borderColor||o,fillStyle:this.fillColor||l};this.dCanvas=new ga(A),this.dCanvas.setCanvas(A.width,A.height,this.POINTS_LIMIT),null===(a=this.shadowRoot)||void 0===a||a.appendChild(this.dCanvas.canvas),this.dCanvas.initBoundingCanvas(),this.appendEvents()}appendEvents(){this.dCanvas.canvas.addEventListener("mousemove",this.dCanvas.onMouseMove.bind(this.dCanvas)),this.dCanvas.canvas.addEventListener("mouseup",this.dCanvas.onDraw.bind(this.dCanvas)),this.dCanvas.canvas.addEventListener(sa.COMPLETE,this.onDrawComplete.bind(this)),window.addEventListener("resize",this.resize.bind(this))}resize(){const e=this.$fastController.element.parentElement,t=(null==e?void 0:e.clientWidth)||this.CANVAS_DEFAULT_WIDTH,a=(null==e?void 0:e.clientHeight)||this.CANVAS_DEFAULT_HEIGHT;this.dCanvas.drawerOptions=Object.assign(Object.assign({},this.dCanvas.drawerOptions),{height:a,width:t}),this.dCanvas.initBoundingCanvas(),this.dCanvas.resize()}onDrawComplete(){var e;this.$emit(sa.COMPLETE,null===(e=this.dCanvas)||void 0===e?void 0:e.points),this.dCanvas.clearPoints()}};i([W],Tn.prototype,"borderColor",void 0),i([W],Tn.prototype,"fillColor",void 0),Tn=i([ie({name:"media-polygon-drawer"})],Tn);const In=Ve`
    :host {
        display: inline-block;
    }

    ${Ve`
    .ms-DatePicker {
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        box-shadow: none;
        margin-bottom: 17px;
        z-index: 300;
    }

    .ms-DatePicker .ms-TextField {
        position: relative;
    }

    .ms-DatePicker-picker {
        font-size: var(--type-ramp-base-font-size);
        position: relative;
        text-align: left;
        z-index: 0;
    }

    .ms-DatePicker-holder {
        -webkit-overflow-scrolling: touch;
        box-sizing: border-box;
        position: absolute;
        min-width: 300px;
        display: none;
        background-color: var(--date-picker-holder-bg);
    }

    .ms-DatePicker-picker.ms-DatePicker-picker--opened .ms-DatePicker-holder {
        animation-name: fadeIn, slideDownIn10;
        -webkit-animation-duration: 0.167s;
        -moz-animation-duration: 0.167s;
        -ms-animation-duration: 0.167s;
        -o-animation-duration: 0.167s;
        animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
        animation-fill-mode: both;
        box-sizing: border-box;
        box-shadow: 0px 1.2px 3.6px var(--date-picker-holder-box-shadow-1), 0px 6.4px 14.4px var(--date-picker-holder-box-shadow-2);
        display: block;
    }

    .ms-DatePicker-picker--opened {
        position: relative;
        z-index: 10;
    }

    .ms-DatePicker-frame {
        padding: 1px;
    }

    .ms-DatePicker-wrap {
        margin: -1px;
        padding: 9px;
    }

    .ms-DatePicker-dayPicker {
        display: block;
        margin-bottom: 30px;
    }

    .ms-DatePicker-header {
        height: 40px;
        line-height: 44px;
    }

    .ms-DatePicker-month,
    .ms-DatePicker-year {
        display: inline-block;
        margin-top: -1px;

        font-weight: 600;
        font-size: var(--type-ramp-base-font-size);
        color: var(--date-picker-text-color);
    }

    .ms-DatePicker-month {
        pointer-events: none;
    }

    .ms-DatePicker-month:hover,
    .ms-DatePicker-year:hover {
        cursor: pointer;
    }

    .ms-DatePicker-month {
        margin-left: 15px;
    }

    .ms-DatePicker-year {
        margin-left: 5px;
    }

    .ms-DatePicker-table {
        text-align: center;
        border-collapse: collapse;
        border-spacing: 0;
        table-layout: fixed;
        font-size: inherit;
    }

    .ms-DatePicker-table td {
        margin: 0;
        padding: 0;
    }

    .ms-DatePicker-table td:hover {
        outline: 1px solid transparent;
    }

    .ms-DatePicker-day,
    .ms-DatePicker-weekday {
        width: 40px;
        height: 40px;
        padding: 0;
        font-weight: 400;
        line-height: 40px;
        font-size: var(--type-ramp-base-font-size);
    }

    .ms-DatePicker-day--today {
        position: relative;

        background: var(--date-picker-bg-today);
        color: var(--date-picker-text-color-today);
    }

    .ms-DatePicker-day--disabled:before {
        border-top-color: var(--date-picker-disabled-text-color);
    }

    .ms-DatePicker-day--outfocus {
        font-weight: 400;
        color: var(--date-picker-out-focus-text-color);
    }

    .ms-DatePicker-weekday,
    .ms-DatePicker-day.ms-DatePicker-day--infocus {
        color: var(--date-picker-focus-text-color);
    }

    .ms-DatePicker-day--infocus:hover,
    .ms-DatePicker-day--outfocus:hover {
        cursor: pointer;
        background: var(date-picker-focus-bg-color-hover);

        color: var(--date-picker-focus-text-color-hover);
    }

    .ms-DatePicker-day--highlighted:hover,
    .ms-DatePicker-picker--focused .ms-DatePicker-day--highlighted {
        cursor: pointer;

        border-radius: 50%;
        color: var(--date-picker-text-color-today);
        background: var(--date-picker-bg-today);
    }

    .ms-DatePicker-day--highlighted.ms-DatePicker-day--disabled,
    .ms-DatePicker-day--highlighted.ms-DatePicker-day--disabled:hover {
        background: none;
    }

    .ms-DatePicker-monthPicker,
    .ms-DatePicker-yearPicker {
        display: none;
    }

    .ms-DatePicker-monthComponents {
        position: absolute;
        top: 9px;
        right: 9px;
        left: 9px;
    }

    .ms-DatePicker-decadeComponents,
    .ms-DatePicker-yearComponents {
        position: absolute;
        right: 10px;
    }

    .ms-DatePicker-nextDecade,
    .ms-DatePicker-nextMonth,
    .ms-DatePicker-nextYear,
    .ms-DatePicker-prevDecade,
    .ms-DatePicker-prevMonth,
    .ms-DatePicker-prevYear {
        width: 40px;
        height: 40px;
        display: block;
        float: right;
        margin-left: 10px;
        text-align: center;
        line-height: 23px;
        font-size: 21px;
        color: var(--date-picker-text-color);
        position: relative;
        top: 3px;
    }

    .ms-DatePicker-nextDecade:hover,
    .ms-DatePicker-nextMonth:hover,
    .ms-DatePicker-nextYear:hover,
    .ms-DatePicker-prevDecade:hover,
    .ms-DatePicker-prevMonth:hover,
    .ms-DatePicker-prevYear:hover {
        color: var(--date-picker-text-color);
        cursor: pointer;
        outline: 1px solid transparent;
    }

    .ms-DatePicker-headerToggleView {
        height: 40px;
        left: 0;
        position: absolute;
        top: 0;
        width: 140px;
        z-index: 5;
        cursor: pointer;
    }

    .ms-DatePicker-currentDecade,
    .ms-DatePicker-currentYear {
        display: block;
        height: 40px;
        line-height: 42px;
        margin-left: 15px;

        font-weight: 600;
        font-size: var(--type-ramp-base-font-size);
        color: var(--date-picker-text-color);
    }

    .ms-DatePicker-currentYear:hover {
        color: var(--date-picker-text-color);
        cursor: pointer;
    }

    .ms-DatePicker-optionGrid {
        position: relative;
        height: 210px;
        width: 280px;
        margin: 10px 0 30px 5px;
    }

    .ms-DatePicker-monthOption,
    .ms-DatePicker-yearOption {
        background-color: var(--date-picker-holder-bg);
        width: 60px;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
        float: left;
        margin: 0 10px 10px 0;
        font-weight: 400;
        text-align: center;
    }

    .ms-DatePicker-monthOption:hover,
    .ms-DatePicker-yearOption:hover {
        background-color: var(--date-picker-focus-month-hover-bg);
        outline: 1px solid transparent;
    }

    .ms-DatePicker-goToday {
        display: none;
        bottom: 9px;
        color: var(--date-picker-text-color);
        cursor: pointer;
        font-weight: 300;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        position: absolute;
        right: 9px;
    }

    .ms-DatePicker-goToday:hover {
        outline: 1px solid transparent;
    }

    .ms-DatePicker.is-pickingYears .ms-DatePicker-dayPicker,
    .ms-DatePicker.is-pickingYears .ms-DatePicker-monthComponents,
    .ms-DatePicker.is-pickingYears .ms-DatePicker-monthPicker {
        display: none;
    }

    .ms-DatePicker.is-pickingYears .ms-DatePicker-yearPicker {
        display: block;
    }

    @media (min-width: 460px) {
        .ms-DatePicker-holder {
            width: 440px;
        }

        .ms-DatePicker-header {
            height: 30px;
            line-height: 28px;
        }

        .ms-DatePicker-dayPicker {
            box-sizing: border-box;
            border-right: 1px solid var(--date-picker-divider-color);
            width: 220px;
            margin: -10px 0;
            padding: 10px 0;
        }

        .ms-DatePicker-monthPicker {
            display: block;
        }

        .ms-DatePicker-monthPicker,
        .ms-DatePicker-yearPicker {
            top: 9px;
            left: 238px;
            position: absolute;
        }

        .ms-DatePicker-optionGrid {
            width: 200px;
            height: auto;
            margin: 10px 0 0;
        }

        .ms-DatePicker-monthComponents {
            width: 210px;
        }

        .ms-DatePicker-month {
            margin-left: 12px;
        }

        .ms-DatePicker-day,
        .ms-DatePicker-weekday {
            width: 30px;
            height: 30px;
            line-height: 30px;
            font-size: var(--type-ramp-base-font-size);
            font-weight: 400;
        }

        .ms-DatePicker-nextDecade,
        .ms-DatePicker-nextMonth,
        .ms-DatePicker-nextYear,
        .ms-DatePicker-prevDecade,
        .ms-DatePicker-prevMonth,
        .ms-DatePicker-prevYear {
            width: 30px;
            height: 30px;
        }

        .ms-DatePicker-toggleMonthView {
            display: none;
        }

        .ms-DatePicker-currentDecade,
        .ms-DatePicker-currentYear {
            margin: 0;
            height: 30px;
            line-height: 26px;
            padding: 0 10px;
            display: inline-block;
        }

        .ms-DatePicker-monthOption,
        .ms-DatePicker-yearOption {
            width: 40px;
            height: 40px;
            line-height: 40px;
            font-size: var(--type-ramp-minus-1-font-size);
            margin: 0 10px 10px 0;
        }

        .ms-DatePicker-monthOption:hover,
        .ms-DatePicker-yearOption:hover {
            outline: 1px solid transparent;
        }

        .ms-DatePicker-goToday {
            box-sizing: border-box;
            font-size: var(--type-ramp-minus-1-font-size);
            height: 30px;
            line-height: 30px;
            padding: 0 10px;
            right: 10px;
            text-align: right;
            top: 199px;
            width: 210px;
        }

        .ms-DatePicker.is-pickingYears .ms-DatePicker-dayPicker,
        .ms-DatePicker.is-pickingYears .ms-DatePicker-monthComponents {
            display: block;
        }

        .ms-DatePicker.is-pickingYears .ms-DatePicker-monthPicker {
            display: none;
        }

        .ms-DatePicker.is-pickingYears .ms-DatePicker-yearPicker {
            display: block;
        }
    }

    @media (max-width: 459px) {
        .ms-DatePicker.is-pickingMonths .ms-DatePicker-dayPicker,
        .ms-DatePicker.is-pickingMonths .ms-DatePicker-monthComponents {
            display: none;
        }

        .ms-DatePicker.is-pickingMonths .ms-DatePicker-monthPicker {
            display: block;
        }
    }
`}

    .ms-DatePicker {
        display: none;
        margin: 0;
    }

    .ms-DatePicker-day {
        border-radius: 50%;
    }

    .ms-TextField,
    .ms-DatePicker.show {
        display: block;
        font-family: var(--font-family);
        font-weight: 400;
    }

    .ms-DatePicker.right .ms-DatePicker-holder {
        right: 0;
    }

    .ms-DatePicker-monthOption,
    .ms-DatePicker-yearOption {
        background-color: var(--date-picker-holder-bg);
        color: var(--date-picker-text-color);
        font-size: var(--type-ramp-minus-1-font-size);
    }

    .ms-DatePicker-monthOption.is-highlighted,
    .ms-DatePicker-yearOption.is-highlighted {
        background-color: var(--date-picker-bg-today);
        color: var(--date-picker-text-color-today);
    }

    .ms-DatePicker-holder {
        top: 9px;
    }

    .ms-Icon {
        font-family: 'avarvx-arrow';
    }

    .ms-Icon.i-arrow-page-up:before {
        content: '\\e74a';
        font-size: var(--type-ramp-minus-1-font-size);
        color: var(--date-picker-text-color);
    }
    .ms-Icon.i-arrow-page-down:before {
        content: '\\e74b';
        font-size: var(--type-ramp-minus-1-font-size);
        color: var(--date-picker-text-color);
    }

    .ms-DatePicker-day--selected {
        color: var(--date-picker-text-color-today); !important;
    }

    .ms-DatePicker-yearOption.js-changeDate.disabled,
    .ms-DatePicker-monthOption.js-changeDate.disabled,
    .ms-DatePicker-day.ms-DatePicker-day--infocus.disabled,
    .ms-DatePicker-day.ms-DatePicker-day--outfocus {
        pointer-events: none;
        cursor: not-allowed;
        color: var(--date-picker-focus-text-color-hover);
    }
`,Dn=Le`
    <template>
        <div class="ms-DatePicker ${e=>e.enableUI?"show":"hide"} ${e=>e.alignRight?"right":""}">
            <div class="ms-TextField">
                <fast-button class="ms-TextField-field">
                    <svg>
                        <path d="${"M1.68 5h2.32v1h-4v-4h1v2.141c0.354-0.641 0.781-1.216 1.281-1.727 0.495-0.51 1.047-0.943 1.656-1.297 0.604-0.359 1.25-0.635 1.938-0.828s1.396-0.289 2.125-0.289c0.74 0 1.451 0.096 2.133 0.289 0.677 0.188 1.313 0.456 1.906 0.805 0.594 0.344 1.135 0.76 1.625 1.25 0.484 0.484 0.901 1.023 1.25 1.617 0.344 0.594 0.612 1.232 0.805 1.914 0.187 0.682 0.281 1.391 0.281 2.125 0 0.74-0.094 1.451-0.281 2.133-0.193 0.677-0.461 1.313-0.805 1.906-0.349 0.594-0.766 1.135-1.25 1.625-0.49 0.484-1.031 0.901-1.625 1.25-0.594 0.344-1.232 0.612-1.914 0.805-0.682 0.187-1.391 0.281-2.125 0.281-0.896 0-1.755-0.143-2.578-0.43-0.828-0.286-1.581-0.688-2.258-1.203-0.682-0.521-1.271-1.141-1.766-1.859-0.5-0.719-0.867-1.51-1.102-2.375l0.961-0.266c0.208 0.755 0.531 1.448 0.969 2.078 0.432 0.625 0.945 1.164 1.539 1.617s1.253 0.807 1.977 1.063c0.724 0.25 1.477 0.375 2.258 0.375 0.646 0 1.266-0.083 1.859-0.25s1.151-0.401 1.672-0.703c0.516-0.307 0.987-0.675 1.414-1.102s0.794-0.898 1.102-1.414c0.302-0.521 0.536-1.078 0.703-1.672 0.167-0.599 0.25-1.219 0.25-1.859s-0.083-1.258-0.25-1.852c-0.167-0.599-0.401-1.156-0.703-1.672-0.307-0.521-0.675-0.995-1.102-1.422s-0.898-0.792-1.414-1.094c-0.521-0.307-1.078-0.544-1.672-0.711-0.599-0.167-1.219-0.25-1.859-0.25-0.672 0-1.326 0.094-1.961 0.281s-1.227 0.456-1.773 0.805c-0.552 0.349-1.047 0.771-1.484 1.266-0.443 0.49-0.81 1.039-1.102 1.648z"}"></path>
                        <path d="${"M8 4v4.289l2.852 2.859-0.703 0.703-3.148-3.141v-4.711h1z"}"></path>
                    </svg>
                </fast-button>
            </div>
            <div class="ms-DatePicker-monthComponents">
                <span class="ms-DatePicker-nextMonth js-nextMonth"><i class="ms-Icon i-arrow-page-down"></i></span>
                <span class="ms-DatePicker-prevMonth js-prevMonth"><i class="ms-Icon i-arrow-page-up"></i></span>
                <div class="ms-DatePicker-headerToggleView js-showMonthPicker"></div>
            </div>
            <span class="ms-DatePicker-goToday js-goToday">Go to today</span>
            <div class="ms-DatePicker-monthPicker">
                <div class="ms-DatePicker-header">
                    <div class="ms-DatePicker-yearComponents">
                        <span class="ms-DatePicker-nextYear js-nextYear"><i class="ms-Icon i-arrow-page-down"></i></span>
                        <span class="ms-DatePicker-prevYear js-prevYear"><i class="ms-Icon i-arrow-page-up"></i></span>
                    </div>
                    <div class="ms-DatePicker-currentYear js-showYearPicker"></div>
                </div>
                <div class="ms-DatePicker-optionGrid">
                    <span class="ms-DatePicker-monthOption js-changeDate" data-month="0">Jan</span>
                    <span class="ms-DatePicker-monthOption js-changeDate" data-month="1">Feb</span>
                    <span class="ms-DatePicker-monthOption js-changeDate" data-month="2">Mar</span>
                    <span class="ms-DatePicker-monthOption js-changeDate" data-month="3">Apr</span>
                    <span class="ms-DatePicker-monthOption js-changeDate" data-month="4">May</span>
                    <span class="ms-DatePicker-monthOption js-changeDate" data-month="5">Jun</span>
                    <span class="ms-DatePicker-monthOption js-changeDate" data-month="6">Jul</span>
                    <span class="ms-DatePicker-monthOption js-changeDate" data-month="7">Aug</span>
                    <span class="ms-DatePicker-monthOption js-changeDate" data-month="8">Sep</span>
                    <span class="ms-DatePicker-monthOption js-changeDate" data-month="9">Oct</span>
                    <span class="ms-DatePicker-monthOption js-changeDate" data-month="10">Nov</span>
                    <span class="ms-DatePicker-monthOption js-changeDate" data-month="11">Dec</span>
                </div>
            </div>
            <div class="ms-DatePicker-yearPicker">
                <div class="ms-DatePicker-decadeComponents">
                    <span class="ms-DatePicker-nextDecade js-nextDecade"><i class="ms-Icon ms-Icon--ChevronRight"></i></span>
                    <span class="ms-DatePicker-prevDecade js-prevDecade"><i class="ms-Icon ms-Icon--ChevronLeft"></i></span>
                </div>
            </div>
        </div>
    </template>
`;let kn=class extends ae{constructor(){super(),this.alignRight=!1,this.enableUI=!1,this.date=new Date,this.allowedDates={days:"",months:"",years:""},this.datePicker=null,this.datePickerCSSLoaded=!1,this.datePickerScriptLoaded=!1,this.jquerySrcLoaded=!1,this.datePickerSrcLoaded=!1,this.uiConnected=!1,this.createFabricDatePicker()}allowedDatesChanged(){this.disableDates()}inputDateChanged(){var e,t;const a=new Date(this.inputDate);a.getTime()!==this.date.getTime()&&(this.date=a,null===(t=null===(e=this.datePicker)||void 0===e?void 0:e.picker)||void 0===t||t.set("select",this.date))}connectedCallback(){super.connectedCallback(),this.uiConnected=!0,this.createDatePicker()}disconnectedCallback(){this.shadowRoot.removeChild(this.shadowRoot.querySelector("#date-picker-css-link")),this.shadowRoot.removeChild(document.querySelector("#jquery-script"));const e=document.querySelector("#date-picker-src-link");e&&this.shadowRoot.removeChild(e);const t=document.querySelector("#picker-date-src-link");t&&this.shadowRoot.removeChild(t)}createFabricDatePicker(){const e=document.createElement("link");e.setAttribute("id","date-picker-css-link"),e.setAttribute("rel","stylesheet"),e.setAttribute("href","https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/1.4.0/css/fabric.min.css");const t=document.createElement("script");t.setAttribute("id","jquery-script"),t.setAttribute("src","https://code.jquery.com/jquery-3.6.0.min.js");const a=document.createElement("script");a.setAttribute("id","date-picker-src-link"),a.setAttribute("src","https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/1.4.0/js/fabric.min.js");const i=document.createElement("script");a.setAttribute("id","picker-date-src-link"),i.setAttribute("src","https://cdn.graph.office.net/prod/Scripts/fabric-js/PickaDate.js"),e.onload=()=>{this.datePickerCSSLoaded=!0,this.createDatePicker()},a.onload=()=>{this.datePickerScriptLoaded=!0,this.createDatePicker()},t.onload=()=>{this.shadowRoot.appendChild(i),this.shadowRoot.appendChild(a),this.jquerySrcLoaded=!0},i.onload=()=>{this.datePickerSrcLoaded=!0,this.createDatePicker()},this.shadowRoot.appendChild(t),this.shadowRoot.appendChild(e)}createDatePicker(){if(this.uiConnected&&this.datePickerCSSLoaded&&this.datePickerScriptLoaded&&this.jquerySrcLoaded&&this.datePickerSrcLoaded)try{setTimeout((()=>{const e=this.shadowRoot.querySelectorAll(".ms-DatePicker");this.datePicker=new window.fabric.DatePicker(e[0]),this.datePicker.picker.on("open",this.onDateOpen.bind(this)),this.datePicker.picker.on("set",this.onDateChange.bind(this)),this.datePicker.picker.on("render",this.onRenderDates.bind(this)),this.enableUI=!0,setTimeout((()=>{this.datePicker.picker.set("select",this.date)}))}),100)}catch(e){console.log(e)}}onRenderDates(){var e,t;const a={month:null===(e=this.datePicker.picker.component.item.view)||void 0===e?void 0:e.month,year:null===(t=this.datePicker.picker.component.item.view)||void 0===t?void 0:t.year};this.$emit(yt.RENDER,a),this.disableDates()}onDateChange(e){if(e.select){const t=new Date(e.select);this.date.getTime()!==t.getTime()&&(this.date=t),this.$emit(yt.DATE_CHANGE,this.date)}}disableMonths(){var e,t,a;const i=this.shadowRoot.querySelectorAll(".ms-DatePicker-monthOption.js-changeDate"),r=(null===(e=this.allowedDates.months)||void 0===e?void 0:e.split(","))||"";for(let e=0;e<i.length;e++){const n=i[e],s=parseInt(null==n?void 0:n.getAttribute("data-month"),10)+1;(null==r?void 0:r.includes(s.toString()))?null===(a=null==n?void 0:n.classList)||void 0===a||a.remove("disabled"):null===(t=null==n?void 0:n.classList)||void 0===t||t.add("disabled")}}disableYears(){var e,t,a;const i=this.shadowRoot.querySelectorAll(".ms-DatePicker-yearOption.js-changeDate"),r=(null===(e=this.allowedDates.years)||void 0===e?void 0:e.split(","))||"";for(let e=0;e<i.length;e++){const n=i[e],s=parseInt(null==n?void 0:n.getAttribute("data-year"),10);(null==r?void 0:r.includes(s.toString()))?null===(a=null==n?void 0:n.classList)||void 0===a||a.remove("disabled"):null===(t=null==n?void 0:n.classList)||void 0===t||t.add("disabled")}}disableDays(){var e,t,a;const i=this.shadowRoot.querySelectorAll(".ms-DatePicker-day.ms-DatePicker-day--infocus"),r=(null===(e=this.allowedDates.days)||void 0===e?void 0:e.split(","))||"";for(let e=0;e<i.length;e++){const n=i[e];(null==r?void 0:r.includes(null==n?void 0:n.innerHTML))?null===(a=null==n?void 0:n.classList)||void 0===a||a.remove("disabled"):null===(t=null==n?void 0:n.classList)||void 0===t||t.add("disabled")}}disableDates(){this.disableYears(),this.disableMonths(),this.disableDays()}onDateOpen(){this.datePicker.picker.set("select",this.date)}};i([W],kn.prototype,"alignRight",void 0),i([W],kn.prototype,"enableUI",void 0),i([W],kn.prototype,"date",void 0),i([W],kn.prototype,"inputDate",void 0),i([w],kn.prototype,"allowedDates",void 0),kn=i([ie({name:"media-date-picker",template:Dn,styles:In})],kn);class fn extends $t{constructor(e){super(e),this.canvasPointsDataList=[],this.HOURS_IN_DAY=24,this.TENS_MINUTES_IN_HOUR=6,this.MIN_HOURS_GAP=300,this.SMALL_SCALE_MARK_HEIGHT=4,this.LARGE_SCALE_MARK_HEIGHT=8,this.SECONDES_IN_HOUR=3600,this.MIN_WIDTH_FOR_SMALL_SCALE=520,this.rulerOptions=e,this.rulerOptions.zoom||(this.rulerOptions.zoom=1),this.resize()}get rulerOptions(){return this._rulerOptions}set rulerOptions(e){this._rulerOptions=e}resize(){this.setCanvasSize(this.rulerOptions.width*this.rulerOptions.zoom,this.rulerOptions.height),this.draw()}draw(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context&&(this.context.beginPath(),this.preparePoints(),setTimeout((()=>{this.drawPoints(),this.context.stroke(),this.context.restore()}),50))}preparePoints(){var e,t,a,i;const r=this.rulerOptions.width*this.rulerOptions.zoom,n=(r-this.context.lineWidth)/(this.HOURS_IN_DAY*this.TENS_MINUTES_IN_HOUR),s=this.nearestPow2(Math.floor(r*this.ratio*this.rulerOptions.zoom/this.MIN_HOURS_GAP)),o=this.HOURS_IN_DAY*this.TENS_MINUTES_IN_HOUR/s;this.canvasPointsDataList=[];let l=0;for(let r=0;r<=this.HOURS_IN_DAY*this.TENS_MINUTES_IN_HOUR;r+=1){const s=r*n;r%this.TENS_MINUTES_IN_HOUR==0?(this.canvasPointsDataList.push({x:s*this.ratio,y:0,w:this.context.lineWidth*this.ratio,h:this.LARGE_SCALE_MARK_HEIGHT*this.ratio,color:null===(e=this.rulerOptions)||void 0===e?void 0:e.fontColor}),r-l>=o&&r!==this.HOURS_IN_DAY*this.TENS_MINUTES_IN_HOUR&&(l=r,this.canvasPointsDataList.push({x:s*this.ratio,y:(this.rulerOptions.height-2)*this.ratio,color:null===(t=this.rulerOptions)||void 0===t?void 0:t.timeColor,text:gn(this.SECONDES_IN_HOUR*(r/this.TENS_MINUTES_IN_HOUR))}))):this.canvas&&this.canvas.width>this.MIN_WIDTH_FOR_SMALL_SCALE&&this.canvasPointsDataList.push({x:s*this.ratio,y:0,w:this.context.lineWidth*this.ratio,h:this.SMALL_SCALE_MARK_HEIGHT*this.ratio,color:null===(a=this.rulerOptions)||void 0===a?void 0:a.smallScaleColor}),0===r&&this.canvasPointsDataList.push({x:s*this.ratio,y:(this.rulerOptions.height-2)*this.ratio,color:null===(i=this.rulerOptions)||void 0===i?void 0:i.fontColor,text:this.rulerOptions.dateText})}}drawPoints(){var e,t;for(const a of this.canvasPointsDataList)this.context.fillStyle=a.color,a.text?null===(e=this.context)||void 0===e||e.fillText(a.text,a.x,a.y):null===(t=this.context)||void 0===t||t.fillRect(a.x,a.y,a.w,a.h)}nearestPow2(e){return Math.pow(2,Math.round(Math.log(e)/Math.log(2)))}}const Nn=Ve`
    :host {
        font-family: var(--font-family);
        font-display: swap;
        display: inline-flex;
        width: 100%;
    }

    .ruler {
        display: inline-grid;
    }
`;let Sn=class extends ae{constructor(){super(...arguments),this.zoom=1,this.DEFAULT_TEXT_COLOR="black",this.DEFAULT_SCALE_COLOR="gray",this.DEFAULT_FONT_SIZE="12px"}startDateChanged(){setTimeout((()=>{this.drawRuler()}))}zoomChanged(){setTimeout((()=>{this.resizeRuler()}))}connectedCallback(){super.connectedCallback(),this.initRuler()}initRuler(){var e,t;const a=this.getRulerOptions();this.ruler=new fn(a),null===(e=this.$fastController.element.shadowRoot)||void 0===e||e.appendChild(this.ruler.canvas),window.addEventListener("resize",(()=>{this.resizeRuler()})),null===(t=ua("ava-design-system-provider",this.$fastController.element))||void 0===t||t.addEventListener("theme-changed",(()=>{this.drawRuler()}))}resizeRuler(){const e=this.getRulerOptions();this.ruler.rulerOptions=e,this.ruler.resize()}drawRuler(){const e=this.getRulerOptions();this.ruler.rulerOptions=e,this.ruler.draw()}getRulerOptions(){var e,t,a,i,r,n;const s=ua("ava-design-system-provider",this.$fastController.element),o=s?null===(e=getComputedStyle(s))||void 0===e?void 0:e.getPropertyValue("--ruler-small-scale-color"):this.DEFAULT_SCALE_COLOR,l=s?null===(t=getComputedStyle(s))||void 0===t?void 0:t.getPropertyValue("--ruler-text-color"):this.DEFAULT_TEXT_COLOR,A=s?null===(a=getComputedStyle(s))||void 0===a?void 0:a.getPropertyValue("--ruler-time-color"):this.DEFAULT_TEXT_COLOR,h=s?null===(i=getComputedStyle(s))||void 0===i?void 0:i.getPropertyValue("--font-family"):"Segoe UI";return{height:22,width:null===(r=this.$fastController.element)||void 0===r?void 0:r.offsetWidth,fontFamily:h,fontSize:this.DEFAULT_FONT_SIZE,lineWidth:1,zoom:this.zoom,fontColor:l,timeColor:A,smallScaleColor:o,dateText:(null===(n=this.startDate)||void 0===n?void 0:n.toLocaleString("default",{month:"long",day:"numeric"}))||(new Date).toLocaleString("default",{month:"long",day:"numeric"})}}};i([W],Sn.prototype,"startDate",void 0),i([W],Sn.prototype,"zoom",void 0),Sn=i([ie({name:"media-time-ruler",styles:Nn})],Sn);const Cn=Ve`
    :host {
        display: inline-block;
        font-family: var(--font-family);
    }
`;class vn extends $t{constructor(e){super(e),this.zonesOptions=e,this.resize()}get zonesOptions(){return this._zonesOptions}set zonesOptions(e){this._zonesOptions=e}draw(){var e,t;if(null===(t=null===(e=this.zonesOptions)||void 0===e?void 0:e.zones)||void 0===t?void 0:t.length){this.context.clearRect(0,0,this.canvas.width,this.canvas.height);for(const e of this.zonesOptions.zones){this.context.beginPath(),this.context.strokeStyle=e.color,this.context.moveTo(e.points[0].x*this.zonesOptions.width*this.ratio,e.points[0].y*this.zonesOptions.height*this.ratio);for(const t of e.points)this.context.lineTo(t.x*this.zonesOptions.width*this.ratio,t.y*this.zonesOptions.height*this.ratio);e.points.length>2&&(this.context.lineTo(e.points[0].x*this.zonesOptions.width*this.ratio,e.points[0].y*this.zonesOptions.height*this.ratio),this.context.fillStyle=e.color,this.context.globalAlpha=.5,this.context.fill()),this.context.stroke()}}}resize(){this.setCanvasSize(this.zonesOptions.width,this.zonesOptions.height),this.draw()}}let xn=class extends ae{constructor(){super(),this.zones=[],this.CANVAS_DEFAULT_HEIGHT=375,this.CANVAS_DEFAULT_WIDTH=250,this.CANVAS_POSITION="relative",this.LINE_WIDTH=2}zonesChanged(){setTimeout((()=>{this.initZonesOptions(),this.zonesCanvas&&(this.zonesCanvas.zonesOptions=this.zonesOptions,this.zonesCanvas.resize())}))}connectedCallback(){super.connectedCallback(),setTimeout((()=>{this.init()}))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.resizeZonesView)}init(){var e;this.initZonesOptions(),this.zonesCanvas=new vn(this.zonesOptions),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.zonesCanvas.canvas),window.addEventListener("resize",this.resizeZonesView.bind(this))}resizeZonesView(){this.initZonesOptions(),this.zonesCanvas.zonesOptions=this.zonesOptions,this.zonesCanvas.resize()}initZonesOptions(){const e=this.$fastController.element.parentElement,t=(null==e?void 0:e.clientWidth)||this.CANVAS_DEFAULT_WIDTH,a=(null==e?void 0:e.clientHeight)||this.CANVAS_DEFAULT_HEIGHT;this.zonesOptions={height:a,width:t,position:this.CANVAS_POSITION,lineWidth:this.LINE_WIDTH,zones:this.zones}}};var wn;i([W],xn.prototype,"zones",void 0),xn=i([ie({name:"media-zones-view",styles:Cn})],xn),function(e){e.TextChanged="EDITABLE_TEXT_FIELD_TEXT_CHANGED"}(wn||(wn={}));const _n=Ve`
    :host {
        font-family: var(--font-family);
        --corner-radius: 0;
        display: inline-flex;
    }

    .edit-container {
        display: grid;
        grid-template-columns: auto minmax(auto, 40px);
        height: 100%;
        width: 100%;
    }

    fast-button {
        min-width: 16px;
        min-height: 16px;
        height: auto;
    }

    input {
        min-width: 100px;
        color: var(--area-draw-color);
        background: var(--area-draw-bg);
        height: 30px;
    }
`;function Un(e,t){const a="function"==typeof t?t:()=>t;return(t,i)=>e(t,i)?a(t,i):null}const bn=Le`
    <template @focusout="${(e,t)=>e.handleFocusOut(t.event)}">
        ${Un((e=>e.editMode),Le`
                <div class="edit-container">
                    <input type="text" value="${e=>e.text}" />
                    <fast-button
                        ?disabled="${e=>!e.isDirty}"
                        aria-label="Approve"
                        title="Approve"
                        @click="${e=>e.approveChanges()}"
                    >
                        <svg>
                            <path d="${"M13.648 3.648l0.703 0.703-8.352 8.359-4.352-4.359 0.703-0.703 3.648 3.641 7.648-7.641z"}"></path>
                        </svg>
                    </fast-button>
                </div>
            `)}
        ${Un((e=>!e.editMode),Le`<span aria-label="${e=>e.text}" title="${e=>e.text}">${e=>e.text}</span>`)}
    </template>
`;let On=class extends ae{constructor(){super(...arguments),this.text="",this.editMode=!1,this.isDirty=!1}editModeChanged(){this.editMode&&(this.isDirty=!1,setTimeout((()=>{this.initTextField()})))}connectedCallback(){super.connectedCallback(),setTimeout((()=>{const e=this.$fastController.element.textContent;e&&(this.text=e)})),this.initTextField()}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.input)||void 0===e||e.removeEventListener("input",this.handleValueChanged)}approveChanges(){this.input&&(this.text=this.input.value,this.$emit(wn.TextChanged,this.text),this.editMode=!1)}handleFocusOut(e){e.relatedTarget&&this.shadowRoot.contains(e.relatedTarget)||(this.input&&(this.input.value=this.text),this.editMode=!1)}initTextField(){var e;this.input||(this.input=this.shadowRoot.querySelector("input"),null===(e=this.input)||void 0===e||e.addEventListener("input",this.handleValueChanged.bind(this)))}handleValueChanged(){this.isDirty=this.text!==this.input.value}};var Pn,Bn,Rn;i([W],On.prototype,"text",void 0),i([W({attribute:"edit-mode",mode:"boolean"})],On.prototype,"editMode",void 0),i([w],On.prototype,"isDirty",void 0),On=i([ie({name:"media-editable-text-field",template:bn,styles:_n})],On),function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(Pn||(Pn={})),function(e){e.RENAME="RENAME",e.DELETE="DELETE"}(Bn||(Bn={})),function(e){e.ActionClicked="ACTIONS_MENU_ACTION_CLICKED"}(Rn||(Rn={}));const zn=Ve`
    :host {
        display: inline-block;
        font-family: var(--font-family);
        --corner-radius: 0;
        background: var(--actions-menu-bg);
        color: var(--actions-menu-color);
    }

    fast-menu {
        position: absolute;
        display: block;
        width: fit-content;
        visibility: hidden;
    }

    fast-button {
        --neutral-fill-rest: var(--actions-menu-bg);
        display: inline-grid;
    }
`;function Qn(e,t,a){return{index:e,removed:t,addedCount:a}}function jn(e,t,a,i,r,n){let o=0,l=0;const A=Math.min(a-t,n-r);if(0===t&&0===r&&(o=function(e,t,a){for(let i=0;i<a;++i)if(e[i]!==t[i])return i;return a}(e,i,A)),a===e.length&&n===i.length&&(l=function(e,t,a){let i=e.length,r=t.length,n=0;for(;n<a&&e[--i]===t[--r];)n++;return n}(e,i,A-o)),r+=o,n-=l,(a-=l)-(t+=o)==0&&n-r==0)return s;if(t===a){const e=Qn(t,[],0);for(;r<n;)e.removed.push(i[r++]);return[e]}if(r===n)return[Qn(t,[],a-t)];const h=function(e){let t=e.length-1,a=e[0].length-1,i=e[t][a];const r=[];for(;t>0||a>0;){if(0===t){r.push(2),a--;continue}if(0===a){r.push(3),t--;continue}const n=e[t-1][a-1],s=e[t-1][a],o=e[t][a-1];let l;l=s<o?s<n?s:n:o<n?o:n,l===n?(n===i?r.push(0):(r.push(1),i=n),t--,a--):l===s?(r.push(3),t--,i=s):(r.push(2),a--,i=o)}return r.reverse(),r}(function(e,t,a,i,r,n){const s=n-r+1,o=a-t+1,l=new Array(s);let A,h;for(let e=0;e<s;++e)l[e]=new Array(o),l[e][0]=e;for(let e=0;e<o;++e)l[0][e]=e;for(let a=1;a<s;++a)for(let n=1;n<o;++n)e[t+n-1]===i[r+a-1]?l[a][n]=l[a-1][n-1]:(A=l[a-1][n]+1,h=l[a][n-1]+1,l[a][n]=A<h?A:h);return l}(e,t,a,i,r,n)),g=[];let u,c=t,d=r;for(let e=0;e<h.length;++e)switch(h[e]){case 0:void 0!==u&&(g.push(u),u=void 0),c++,d++;break;case 1:void 0===u&&(u=Qn(c,[],0)),u.addedCount++,c++,u.removed.push(i[d]),d++;break;case 2:void 0===u&&(u=Qn(c,[],0)),u.addedCount++,c++;break;case 3:void 0===u&&(u=Qn(c,[],0)),u.removed.push(i[d]),d++}return void 0!==u&&g.push(u),g}const Ln=Array.prototype.push;function Fn(e,t,a,i){const r=Qn(t,a,i);let n=!1,s=0;for(let t=0;t<e.length;t++){const a=e[t];if(a.index+=s,n)continue;const i=(o=r.index,l=r.index+r.removed.length,A=a.index,h=a.index+a.addedCount,l<A||h<o?-1:l===A||h===o?0:o<A?l<h?l-A:h-A:h<l?h-o:l-o);if(i>=0){e.splice(t,1),t--,s-=a.addedCount-a.removed.length,r.addedCount+=a.addedCount-i;const o=r.removed.length+a.removed.length-i;if(r.addedCount||o){let e=a.removed;if(r.index<a.index){const t=r.removed.slice(0,a.index-r.index);Ln.apply(t,e),e=t}if(r.index+r.removed.length>a.index+a.addedCount){const t=r.removed.slice(a.index+a.addedCount-r.index);Ln.apply(e,t)}r.removed=e,a.index<r.index&&(r.index=a.index)}else n=!0}else if(r.index<a.index){n=!0,e.splice(t,0,r),t++;const i=r.addedCount-r.removed.length;a.index+=i,s+=i}}var o,l,A,h;n||e.push(r)}let Yn=!1;function Vn(e,t){let a=e.index;const i=t.length;return a>i?a=i-e.addedCount:a<0&&(a=i+e.removed.length+a-e.addedCount),a<0&&(a=0),e.index=a,e}class Gn extends y{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,e.$fastController=this}addSplice(e){void 0===this.splices?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,d.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,d.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(void 0===e&&void 0===t)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const a=void 0===t?function(e,t){let a=[];const i=function(e){const t=[];for(let a=0,i=e.length;a<i;a++){const i=e[a];Fn(t,i.index,i.removed,i.addedCount)}return t}(t);for(let t=0,r=i.length;t<r;++t){const r=i[t];1!==r.addedCount||1!==r.removed.length?a=a.concat(jn(e,r.index,r.index+r.addedCount,r.removed,0,r.removed.length)):r.removed[0]!==e[r.index]&&a.push(r)}return a}(this.source,e):jn(this.source,0,this.source.length,t,0,t.length);this.notify(a)}}const Wn=Object.freeze({positioning:!1});function Kn(e,t,a,i){e.bind(t[a],i)}function Hn(e,t,a,i){const r=Object.create(i);r.index=a,r.length=t.length,e.bind(t[a],r)}class Zn{constructor(e,t,a,i,r,n){this.location=e,this.itemsBinding=t,this.templateBinding=i,this.options=n,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Kn,this.itemsBindingObserver=C.binding(t,this,a),this.templateBindingObserver=C.binding(i,this,r),n.positioning&&(this.bindView=Hn)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items)return void(this.items=s);const t=this.itemsObserver,a=this.itemsObserver=C.getNotifier(this.items),i=t!==a;i&&null!==t&&t.unsubscribe(this),(i||e)&&a.subscribe(this)}updateViews(e){const t=this.childContext,a=this.views,i=[],r=this.bindView;let n=0;for(let t=0,r=e.length;t<r;++t){const r=e[t],s=r.removed;i.push(...a.splice(r.index+n,s.length)),n-=r.addedCount}const s=this.items,o=this.template;for(let n=0,l=e.length;n<l;++n){const l=e[n];let A=l.index;const h=A+l.addedCount;for(;A<h;++A){const e=a[A],n=e?e.firstChild:this.location,l=i.length>0?i.shift():o.create();a.splice(A,0,l),r(l,s,A,t),l.insertBefore(n)}}for(let e=0,t=i.length;e<t;++e)i[e].dispose();if(this.options.positioning)for(let e=0,t=a.length;e<t;++e){const i=a[e].context;i.length=t,i.index=e}}refreshAllViews(e=!1){const t=this.items,a=this.childContext,i=this.template,r=this.location,n=this.bindView;let s=t.length,o=this.views,l=o.length;if((0===s||e)&&(ze.disposeContiguousBatch(o),l=0),0===l){this.views=o=new Array(s);for(let e=0;e<s;++e){const s=i.create();n(s,t,e,a),o[e]=s,s.insertBefore(r)}}else{let e=0;for(;e<s;++e)if(e<l)n(o[e],t,e,a);else{const s=i.create();n(s,t,e,a),o.push(s),s.insertBefore(r)}const A=o.splice(e,l-e);for(e=0,s=A.length;e<s;++e)A[e].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,a=e.length;t<a;++t)e[t].unbind()}}class Jn extends pe{constructor(e,t,a){super(),this.itemsBinding=e,this.templateBinding=t,this.options=a,this.createPlaceholder=d.createBlockPlaceholder,function(){if(Yn)return;Yn=!0,C.setArrayObserverFactory((e=>new Gn(e)));const e=Array.prototype,t=e.pop,a=e.push,i=e.reverse,r=e.shift,n=e.sort,s=e.splice,o=e.unshift;e.pop=function(){const e=this.length>0,a=t.apply(this,arguments),i=this.$fastController;return void 0!==i&&e&&i.addSplice(Qn(this.length,[a],0)),a},e.push=function(){const e=a.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Vn(Qn(this.length-arguments.length,[],arguments.length),this)),e},e.reverse=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const a=i.apply(this,arguments);return void 0!==t&&t.reset(e),a},e.shift=function(){const e=this.length>0,t=r.apply(this,arguments),a=this.$fastController;return void 0!==a&&e&&a.addSplice(Qn(0,[t],0)),t},e.sort=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const a=n.apply(this,arguments);return void 0!==t&&t.reset(e),a},e.splice=function(){const e=s.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Vn(Qn(+arguments[0],e,arguments.length>2?arguments.length-2:0),this)),e},e.unshift=function(){const e=o.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Vn(Qn(0,[],arguments.length),this)),e}}(),this.isItemsBindingVolatile=C.isVolatileBinding(e),this.isTemplateBindingVolatile=C.isVolatileBinding(t)}createBehavior(e){return new Zn(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}const Xn=Le`
    <template>
        <fast-button
            aria-label="Options"
            title="Options"
            @focusout="${(e,t)=>e.handleFocusOut(t.event)}"
            @click="${e=>e.toggleMenu()}"
        >
            <svg>
                <path d="${"M9 2c0 0.552-0.447 1-1 1s-1-0.448-1-1c0-0.552 0.447-1 1-1s1 0.448 1 1zM9 8c0 0.552-0.447 1-1 1s-1-0.448-1-1c0-0.552 0.447-1 1-1s1 0.448 1 1zM8 15c0.553 0 1-0.448 1-1s-0.447-1-1-1c-0.553 0-1 0.448-1 1s0.447 1 1 1z"}"></path>
            </svg>
        </fast-button>
        ${Un((e=>!0===e.opened),Le` <fast-menu>
                ${function(e,t,a=Wn){return new Jn(e,"function"==typeof t?t:()=>t,a)}((e=>e.actions),Le`
                        <fast-menu-item
                            aria-label="${e=>e.label}"
                            title="${e=>e.label}"
                            aria-disabled="${e=>e.disabled}"
                            @focusout="${(e,t)=>t.parent.handleFocusOut(t.event)}"
                            @keyup="${(e,t)=>t.parent.handleMenuItemKeyUp(t.event,e)}"
                            @mouseup="${(e,t)=>t.parent.handleMenuItemMouseUp(t.event,e)}"
                        >
                            ${Un((e=>e.svgPath),Le`
                                    <svg slot="start">
                                        <path d="${e=>e.svgPath}"></path>
                                    </svg>
                                `)}
                            ${e=>e.label}</fast-menu-item
                        >
                    `,{positioning:!0})}
            </fast-menu>`)}
    </template>
`;let qn=class extends ae{constructor(){super(...arguments),this.actions=[],this.opened=!1}openedChanged(){this.opened&&setTimeout((()=>{var e;this.fastMenu||(this.fastMenu=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("fast-menu")),this.initMenu()}))}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.initMenu.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.initMenu)}toggleMenu(){this.opened=!this.opened,!this.opened&&this.fastMenu&&(this.fastMenu.style.visibility="hidden")}handleMenuItemClick(e){this.$emit(Rn.ActionClicked,e)}handleMenuItemMouseUp(e,t){switch(e.which){case 1:return this.handleMenuItemClick(t),!1}return!0}handleMenuItemKeyUp(e,t){switch(e.keyCode){case 13:case 32:return this.handleMenuItemClick(t),!1}return!0}handleFocusOut(e){e.relatedTarget&&this.shadowRoot.contains(e.relatedTarget)||(this.opened=!1)}initMenu(){var e,t,a;if(!this.fastMenu)return;const i=null===(t=null===(e=this.fastMenu.$fastController)||void 0===e?void 0:e.element)||void 0===t?void 0:t.getBoundingClientRect(),r=this.$fastController.element.getBoundingClientRect(),n=null===(a=window.document.querySelector("html"))||void 0===a?void 0:a.getBoundingClientRect();n.height+n.top>r.bottom+(null==i?void 0:i.height)?this.fastMenu.style.top=`${r.bottom}px`:this.fastMenu.style.top=r.top-(null==i?void 0:i.height)-n.top+"px",n.width>r.left+(null==i?void 0:i.width)?this.fastMenu.style.left=`${r.left}px`:this.fastMenu.style.left=r.right-(null==i?void 0:i.width)+"px",this.fastMenu.style.visibility="visible"}};var $n,es;i([W],qn.prototype,"actions",void 0),i([W({attribute:"edit-mode",mode:"boolean"})],qn.prototype,"opened",void 0),qn=i([ie({name:"media-actions-menu",template:Xn,styles:zn})],qn),function(e){e.Compact="compact",e.Expanded="expanded",e.Actions="actions"}($n||($n={})),function(e){e.labelActionClicked="LAYER_LABEL_ACTION_CLICKED",e.labelTextChanged="LAYER_LABEL_TEXT_CHANGED"}(es||(es={}));const ts=Ve`
    :host {
        display: inline-grid;
        gap: 8px;
        grid-template-rows: 30px;
        align-items: center;
        border-radius: 4px;
        padding: 0 4px;
        background: var(--layer-label-bg);
        color: var(--layer-label-color);
    }

    :host(.compact) {
        grid-template-columns: auto;
    }

    :host(.expanded) {
        grid-template-columns: 16px auto auto;
    }

    :host(.actions) {
        grid-template-columns: 20px auto 30px;
    }

    :host(.actions) .color-container {
        display: inline-block;
        width: 20px;
        height: 20px;
    }

    .color-container {
        display: inline-block;
        width: 16px;
        height: 16px;
    }

    .label {
        font-weight: 400;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        min-width: 20px;
    }

    .label-prefix {
        font-weight: 600;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        min-width: 20px;
    }

    .red {
        background: #db4646;
    }

    .lightBlue {
        background: #4d9dff;
    }

    .yellow {
        background: #fabe14;
    }

    .magenta {
        background: #cf0076;
    }

    .teal {
        background: #1cc2b2;
    }

    .purple {
        background: #7633c3;
    }

    .lime {
        background: #a6c102;
    }

    .blue {
        background: #0840cf;
    }

    .green {
        background: #0f9d49;
    }

    .orange {
        background: #f2880c;
    }

    media-actions-menu {
        --design-unit: 3;
    }
`,as=Le`
    <template class="${e=>{var t;return null===(t=e.config)||void 0===t?void 0:t.mode}}">
        ${Un((e=>{var t;return(null===(t=e.config)||void 0===t?void 0:t.mode)===$n.Compact}),Le` <span class="label" aria-label="${e=>e.config.label}" title="${e=>e.config.label}"
                >${e=>e.config.label}</span
            >`)}
        ${Un((e=>{var t;return(null===(t=e.config)||void 0===t?void 0:t.mode)===$n.Actions}),Le` <div class="color-container" style="background: ${e=>{var t;return null===(t=e.config)||void 0===t?void 0:t.color}};"></div>
                <media-editable-text-field
                    class="label-prefix"
                    text="${e=>e.config.label}"
                    edit-mode="${e=>e.editMode}"
                ></media-editable-text-field>
                <media-actions-menu></media-actions-menu>`)}
        ${Un((e=>{var t;return(null===(t=e.config)||void 0===t?void 0:t.mode)===$n.Expanded}),Le` <div class="color-container" style="background: ${e=>{var t;return null===(t=e.config)||void 0===t?void 0:t.color}};"></div>
                <span
                    class="label-prefix"
                    aria-label="${e=>{var t,a;return`${null===(t=e.config)||void 0===t?void 0:t.labelPrefix} - ${null===(a=e.config)||void 0===a?void 0:a.label}`}}"
                    title="${e=>{var t,a;return`${null===(t=e.config)||void 0===t?void 0:t.labelPrefix} - ${null===(a=e.config)||void 0===a?void 0:a.label}`}}"
                    >${e=>{var t;return`${null===(t=e.config)||void 0===t?void 0:t.labelPrefix} -`}} <span class="label">${e=>{var t;return`${null===(t=e.config)||void 0===t?void 0:t.label}`}}</span></span
                >`)}
    </template>
`;let is=class extends ae{constructor(){super(...arguments),this.editMode=!1}configChanged(){var e,t;(null===(e=this.config)||void 0===e?void 0:e.mode)===$n.Actions&&(null===(t=this.config.actions)||void 0===t?void 0:t.length)&&setTimeout((()=>{this.setActions()}))}editModeChanged(){var e,t;(null===(e=this.config)||void 0===e?void 0:e.mode)===$n.Actions&&(null===(t=this.config.actions)||void 0===t?void 0:t.length)&&setTimeout((()=>{this.setActions()}))}connectedCallback(){super.connectedCallback()}disconnectedCallback(){var e,t;super.disconnectedCallback(),null===(e=this.actionsMenu)||void 0===e||e.removeEventListener(Rn.ActionClicked,null),null===(t=this.editableTextField)||void 0===t||t.removeEventListener(wn.TextChanged,null)}setActions(){var e,t,a,i;this.actionsMenu=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("media-actions-menu"),this.actionsMenu&&(this.actionsMenu.actions=this.config.actions),null===(t=this.actionsMenu)||void 0===t||t.addEventListener(Rn.ActionClicked,(e=>{this.$emit(es.labelActionClicked,Object.assign(Object.assign({},e.detail),{id:this.config.id})),this.actionsMenu.opened=!1})),this.editMode&&(this.editableTextField=null===(a=this.shadowRoot)||void 0===a?void 0:a.querySelector("media-editable-text-field"),null===(i=this.editableTextField)||void 0===i||i.addEventListener(wn.TextChanged,(e=>{this.$emit(es.labelTextChanged,{name:e.detail,id:this.config.id}),this.editMode=!1})))}};i([W],is.prototype,"config",void 0),i([W({attribute:"edit-mode",mode:"boolean"})],is.prototype,"editMode",void 0),is=i([ie({name:"media-layer-label",template:as,styles:ts})],is);class rs{constructor(e,t,a){this.name=e,this.value=t,this.host=a,this.propertyName=`--${e}`,this.var=`var(${this.propertyName})`}bind(e){const t=this.host(e);null!==t&&("function"==typeof t.registerCSSCustomProperty?t.registerCSSCustomProperty(this):(Array.isArray(t.disconnectedCSSCustomPropertyRegistry)||(t.disconnectedCSSCustomPropertyRegistry=[]),t.disconnectedCSSCustomPropertyRegistry.push(this)))}unbind(e){const t=this.host(e);null!==t&&"function"==typeof t.unregisterCSSCustomProperty&&t.unregisterCSSCustomProperty(this)}}function ns(e,t,a){return new rs(e,t,a)}class ss extends class{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){const{query:t}=this,a=this.constructListener(e);a.bind(t)(),t.addListener(a),this.listenerCache.set(e,a)}unbind(e){const t=this.listenerCache.get(e);t&&(this.query.removeListener(t),this.listenerCache.delete(e))}}{constructor(e,t){super(e),this.styles=t}static with(e){return t=>new ss(e,t)}constructListener(e){let t=!1;const a=this.styles;return function(){const{matches:i}=this;i&&!t?(e.$fastController.addStyles(a),t=i):!i&&t&&(e.$fastController.removeStyles(a),t=i)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}}const os=ss.with(window.matchMedia("(forced-colors)")),ls=(ss.with(window.matchMedia("(prefers-color-scheme: dark)")),ss.with(window.matchMedia("(prefers-color-scheme: light)")),":host{}");class As{constructor(){this.queue=new Set,this.customPropertyTarget=null,this._owner=null,this.ticking=!1,this.cssCustomPropertyDefinitions=new Map}get owner(){return this._owner}register(e){const t=this.cssCustomPropertyDefinitions.get(e.name);t?t.count+=1:(this.cssCustomPropertyDefinitions.set(e.name,Object.assign(Object.assign({},e),{count:1})),this.set(e))}unregister(e){const t=this.cssCustomPropertyDefinitions.get(e);t&&(t.count-=1,0===t.count&&(this.cssCustomPropertyDefinitions.delete(e),this.remove(e)))}set(e){this.owner&&(this.customPropertyTarget?this.customPropertyTarget.setProperty(`--${e.name}`,this.owner.evaluate(e)):this.queue.add(this.set.bind(this,e)))}remove(e){this.customPropertyTarget?this.customPropertyTarget.removeProperty(`--${e}`):this.queue.add(this.remove.bind(this,e))}setAll(){this.ticking||(this.ticking=!0,d.queueUpdate((()=>{this.ticking=!1,this.cssCustomPropertyDefinitions.forEach((e=>{this.set(e)}))})))}}class hs extends As{constructor(e){super(),this.subscribers=new Set,this.sheet=e,this.styles=R.create([e]),this.customPropertyTarget=e.cssRules[e.insertRule(ls)].style}subscribe(e){this.subscribers.add(e),1===this.subscribers.size&&(this._owner=e),e.cssCustomPropertyDefinitions.forEach((e=>{this.register(e)})),e.$fastController.addStyles(this.styles)}unsubscribe(e){this.subscribers.delete(e),e.cssCustomPropertyDefinitions.forEach((e=>this.unregister(e.name))),this.owner===e&&(this._owner=this.subscribers.size?this.subscribers.values().next().value:null),!this.sheet.ownerNode&&this.styles&&e.$fastController.removeStyles(this.styles)}isSubscribed(e){return this.subscribers.has(e)}}class gs extends As{constructor(e,t){super(),this._sheet=null,this.handleConnection={handleChange:()=>{var e;this._sheet=this.styles.sheet;const t=this.sheet.insertRule(ls);this.customPropertyTarget=this.sheet.rules[t].style,C.getNotifier(null===(e=this._owner)||void 0===e?void 0:e.$fastController).unsubscribe(this.handleConnection,"isConnected")}};const a=t.$fastController;a.addStyles(e),this.styles=e,this._owner=t,t.isConnected?this.handleConnection.handleChange():C.getNotifier(a).subscribe(this.handleConnection,"isConnected"),t.cssCustomPropertyDefinitions.forEach((e=>{this.register(e)}))}get sheet(){return this._sheet}customPropertyTargetChanged(e,t){!e&&this.queue.size&&(this.queue.forEach((e=>e())),this.queue.clear())}}function us(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}i([w],gs.prototype,"customPropertyTarget",void 0);const cs="adoptedStyleSheets"in window.ShadowRoot.prototype;function ds(e){const t=e.provider;return null!=t&&Ms.isDesignSystemProvider(t)}const ps={bind(e){e.provider=Ms.findProvider(e)},unbind(e){}};class Ms extends ae{constructor(){super(),this.isDesignSystemProvider=!0,this.designSystem={},this.useDefaults=!1,this.provider=null,this.cssCustomPropertyDefinitions=new Map,this.attributeChangeHandler={handleChange:(e,t)=>{const a=this[t],i=this.customPropertyManager;if(this.isValidDesignSystemValue(a)){this.designSystem[t]=a;const e=this.designSystemProperties[t];e&&e.cssCustomProperty&&i&&i.set({name:e.cssCustomProperty,value:a})}else{this.syncDesignSystemWithProvider();const e=this.designSystemProperties[t].cssCustomProperty;i&&("string"==typeof e&&i.remove(e),i.setAll())}}},this.localDesignSystemChangeHandler={handleChange:()=>{const e=this.customPropertyManager;e&&e.owner===this&&e.setAll()}},this.providerDesignSystemChangeHandler={handleChange:(e,t)=>{e[t]===this.designSystem[t]||this.isValidDesignSystemValue(this[t])||(this.designSystem[t]=e[t])}},this.customPropertyManager=cs?new hs(new CSSStyleSheet):new gs(document.createElement("style"),this),void 0===this.designSystemProperties&&(this.designSystemProperties={}),this.$fastController.addBehaviors([ps])}static get tagNames(){return Ms._tagNames}static isDesignSystemProvider(e){return e.isDesignSystemProvider||-1!==Ms.tagNames.indexOf(e.tagName)}static findProvider(e){if(ds(e))return e.provider;let t=us(e);for(;null!==t;){if(Ms.isDesignSystemProvider(t))return e.provider=t,t;if(ds(t))return e.provider=t.provider,t.provider;t=us(t)}return null}static registerTagName(e){const t=e.toUpperCase();-1===Ms.tagNames.indexOf(t)&&Ms._tagNames.push(t)}useDefaultsChanged(){if(this.useDefaults){const e=this.designSystemProperties;Object.keys(e).forEach((t=>{void 0===this[t]&&(this[t]=e[t].default)}))}}providerChanged(e,t){if(e instanceof HTMLElement){const t=C.getNotifier(e.designSystem);C.getAccessors(e.designSystem).forEach((e=>{t.unsubscribe(this.providerDesignSystemChangeHandler,e.name)}))}if(t instanceof HTMLElement&&Ms.isDesignSystemProvider(t)){const e=C.getNotifier(t.designSystem),a=C.getAccessors(this.designSystem).reduce(((e,t)=>Object.assign(Object.assign({},e),{[t.name]:t})),{}),i=C.getNotifier(this.designSystem);C.getAccessors(t.designSystem).forEach((t=>{e.subscribe(this.providerDesignSystemChangeHandler,t.name),a[t.name]||(w(this.designSystem,t.name),i.subscribe(this.localDesignSystemChangeHandler,t.name))})),this.syncDesignSystemWithProvider()}}customPropertyManagerChanged(e,t){e&&e.unsubscribe&&e.unsubscribe(this),t.subscribe&&t.subscribe(this)}connectedCallback(){super.connectedCallback(),this.customPropertyManager.subscribe&&this.customPropertyManager.isSubscribed&&!this.customPropertyManager.isSubscribed(this)&&this.customPropertyManager.subscribe(this);const e=C.getNotifier(this),t=C.getNotifier(this.designSystem);if(Object.keys(this.designSystemProperties).forEach((a=>{w(this.designSystem,a),e.subscribe(this.attributeChangeHandler,a),t.subscribe(this.localDesignSystemChangeHandler,a);const i=this[a];if(this.isValidDesignSystemValue(i)){this.designSystem[a]=i;const{cssCustomProperty:e}=this.designSystemProperties[a];"string"==typeof e&&this.customPropertyManager&&this.customPropertyManager.owner===this&&this.customPropertyManager.set({name:e,value:this[a]})}})),Array.isArray(this.disconnectedCSSCustomPropertyRegistry)){for(let e=0;e<this.disconnectedCSSCustomPropertyRegistry.length;e++)this.registerCSSCustomProperty(this.disconnectedCSSCustomPropertyRegistry[e]);delete this.disconnectedCSSCustomPropertyRegistry}if(Array.isArray(this.disconnectedRegistry)){for(let e=0;e<this.disconnectedRegistry.length;e++)this.disconnectedRegistry[e](this);delete this.disconnectedRegistry}}disconnectedCallback(){super.disconnectedCallback(),this.customPropertyManager.unsubscribe&&this.customPropertyManager.unsubscribe(this)}registerCSSCustomProperty(e){this.cssCustomPropertyDefinitions.set(e.name,e),this.customPropertyManager.register(e)}unregisterCSSCustomProperty(e){this.cssCustomPropertyDefinitions.delete(e.name),this.customPropertyManager.unregister(e.name)}evaluate(e){return"function"==typeof e.value?e.value(Object.assign({},this.designSystem)):e.value}syncDesignSystemWithProvider(){if(this.provider){const e=C.getAccessors(this.designSystem).reduce(((e,t)=>(e[t.name]=t,e)),{});C.getAccessors(this.provider.designSystem).forEach((t=>{var a;this.designSystemProperties.hasOwnProperty(t.name)&&this.isValidDesignSystemValue(this[t.name])||!this.isValidDesignSystemValue(null===(a=this.provider)||void 0===a?void 0:a.designSystem[t.name])||(e[t.name]||C.defineProperty(this.designSystem,t.name),this.designSystem[t.name]=this.provider.designSystem[t.name])}))}}isValidDesignSystemValue(e){return null!=e}}function ms(e){return t=>{ie(e)(t),t.registerTagName("string"==typeof e?e:e.name)}}Ms._tagNames=[],i([W({attribute:"use-defaults",mode:"boolean"})],Ms.prototype,"useDefaults",void 0),i([w],Ms.prototype,"provider",void 0),i([w],Ms.prototype,"customPropertyManager",void 0);const Es=ms;function ys(e){return(t,a)=>{((e,t,a)=>{const{cssCustomProperty:i,attribute:r}=a;e.designSystemProperties||(e.designSystemProperties={}),!1===r?w(e,t):(void 0===a.mode&&(a=Object.assign(Object.assign({},a),{mode:"fromView"})),W(a)(e,t)),e.designSystemProperties[t]={cssCustomProperty:!1!==i&&("string"==typeof i?i:"string"==typeof r?r:t),default:a.default}})(t,a,e)}}const Ts=Le`
    <slot></slot>
`;var Is,Ds;!function(e){e.Canvas="Canvas",e.CanvasText="CanvasText",e.LinkText="LinkText",e.VisitedText="VisitedText",e.ActiveText="ActiveText",e.ButtonFace="ButtonFace",e.ButtonText="ButtonText",e.Field="Field",e.FieldText="FieldText",e.Highlight="Highlight",e.HighlightText="HighlightText",e.GrayText="GrayText"}(Is||(Is={})),function(e){e.ltr="ltr",e.rtl="rtl"}(Ds||(Ds={}));const ks={typeRampMinus2FontSize:"10px",typeRampMinus2LineHeight:"16px",typeRampMinus1FontSize:"12px",typeRampMinus1LineHeight:"16px",typeRampBaseFontSize:"14px",typeRampBaseLineHeight:"20px",typeRampPlus1FontSize:"16px",typeRampPlus1LineHeight:"24px",typeRampPlus2FontSize:"20px",typeRampPlus2LineHeight:"28px",typeRampPlus3FontSize:"28px",typeRampPlus3LineHeight:"36px",typeRampPlus4FontSize:"34px",typeRampPlus4LineHeight:"44px",typeRampPlus5FontSize:"46px",typeRampPlus5LineHeight:"56px",typeRampPlus6FontSize:"60px",typeRampPlus6LineHeight:"72px",accentBaseColor:"#DA1A5F",accentPalette:["#FFFFFF","#FEFBFC","#FEF7FA","#FDF4F7","#FDF0F5","#FCECF2","#FBE8EF","#FBE5ED","#FAE1EA","#FADDE7","#F9D9E5","#F8D6E2","#F8D2E0","#F7CEDD","#F7CADA","#F6C7D8","#F5C3D5","#F5BFD2","#F4BBD0","#F3B8CD","#F3B4CB","#F2B0C8","#F2ACC5","#F1A9C3","#F0A5C0","#F0A1BD","#EF9DBB","#EF9AB8","#EE96B6","#ED92B3","#ED8EB0","#EC8BAE","#EC87AB","#EB83A8","#EA7FA6","#EA7CA3","#E978A1","#E9749E","#E8709B","#E76D99","#E76996","#E66593","#E66191","#E55E8E","#E45A8C","#E45689","#E35286","#E24F84","#E24B81","#E1477E","#E1437C","#E04079","#DF3C77","#DF3874","#DE3471","#DE316F","#DD2D6C","#DC2969","#DC2567","#DB2264","#DB1E62","#DA1A5F","#D4195C","#CD1859","#C71857","#C01754","#BA1651","#B3154E","#AD154B","#A71449","#A01346","#9A1243","#931240","#8D113D","#86103B","#800F38","#7A0F35","#730E32","#6D0D2F","#660C2D","#600B2A","#590B27","#530A24","#4D0921","#46081F","#40081C","#3B071A","#350617","#300615","#2B0513","#260511","#21040E","#1C030C","#000000"],backgroundColor:"#181818",baseHeightMultiplier:10,baseHorizontalSpacingMultiplier:3,cornerRadius:3,density:0,designUnit:4,direction:Ds.ltr,disabledOpacity:.3,focusOutlineWidth:2,neutralPalette:["#FFFFFF","#FCFCFC","#FAFAFA","#F7F7F7","#F5F5F5","#F2F2F2","#EFEFEF","#EDEDED","#EAEAEA","#E8E8E8","#E5E5E5","#E2E2E2","#E0E0E0","#DDDDDD","#DBDBDB","#D8D8D8","#D6D6D6","#D3D3D3","#D0D0D0","#CECECE","#CBCBCB","#C9C9C9","#C6C6C6","#C3C3C3","#C1C1C1","#BEBEBE","#BCBCBC","#B9B9B9","#B6B6B6","#B4B4B4","#B1B1B1","#AFAFAF","#ACACAC","#A9A9A9","#A7A7A7","#A4A4A4","#A2A2A2","#9F9F9F","#9D9D9D","#9A9A9A","#979797","#959595","#929292","#909090","#8D8D8D","#8A8A8A","#888888","#858585","#838383","#808080","#7D7D7D","#7B7B7B","#787878","#767676","#737373","#717171","#6E6E6E","#6B6B6B","#696969","#666666","#646464","#616161","#5F5F5F","#5C5C5C","#5A5A5A","#575757","#545454","#525252","#4F4F4F","#4D4D4D","#4A4A4A","#484848","#454545","#424242","#404040","#3D3D3D","#3B3B3B","#383838","#363636","#333333","#313131","#2E2E2E","#2B2B2B","#292929","#262626","#242424","#212121","#1E1E1E","#1B1B1B","#181818","#151515","#121212","#101010","#000000"],outlineWidth:1,accentFillRestDelta:0,accentFillHoverDelta:4,accentFillActiveDelta:-5,accentFillFocusDelta:0,accentFillSelectedDelta:12,accentForegroundRestDelta:0,accentForegroundHoverDelta:6,accentForegroundActiveDelta:-4,accentForegroundFocusDelta:0,neutralFillRestDelta:7,neutralFillHoverDelta:10,neutralFillActiveDelta:5,neutralFillFocusDelta:0,neutralFillSelectedDelta:7,neutralFillInputRestDelta:0,neutralFillInputHoverDelta:0,neutralFillInputActiveDelta:0,neutralFillInputFocusDelta:0,neutralFillInputSelectedDelta:0,neutralFillStealthRestDelta:0,neutralFillStealthHoverDelta:5,neutralFillStealthActiveDelta:3,neutralFillStealthFocusDelta:0,neutralFillStealthSelectedDelta:7,neutralFillToggleHoverDelta:8,neutralFillToggleActiveDelta:-5,neutralFillToggleFocusDelta:0,baseLayerLuminance:-1,neutralFillCardDelta:3,neutralForegroundHoverDelta:0,neutralForegroundActiveDelta:0,neutralForegroundFocusDelta:0,neutralDividerRestDelta:8,neutralOutlineRestDelta:25,neutralOutlineHoverDelta:40,neutralOutlineActiveDelta:16,neutralOutlineFocusDelta:25,neutralContrastFillRestDelta:0,neutralContrastFillHoverDelta:-3,neutralContrastFillActiveDelta:7,neutralContrastFillFocusDelta:0};function fs(e,t){return"function"==typeof e?e(t):e}function Ns(e){return t=>t&&void 0!==t[e]?t[e]:ks[e]}const Ss=Ns("backgroundColor"),Cs=Ns("accentBaseColor"),vs=(Ns("cornerRadius"),Ns("neutralPalette")),xs=Ns("accentPalette"),ws=(Ns("designUnit"),Ns("baseHeightMultiplier"),Ns("baseHorizontalSpacingMultiplier"),Ns("outlineWidth"),Ns("focusOutlineWidth"),Ns("disabledOpacity"),Ns("direction"),Ns("accentFillRestDelta"),Ns("accentFillHoverDelta")),_s=Ns("accentFillActiveDelta"),Us=Ns("accentFillFocusDelta"),bs=Ns("accentFillSelectedDelta"),Os=Ns("accentForegroundRestDelta"),Ps=Ns("accentForegroundHoverDelta"),Bs=Ns("accentForegroundActiveDelta"),Rs=Ns("accentForegroundFocusDelta"),zs=Ns("neutralFillRestDelta"),Qs=Ns("neutralFillHoverDelta"),js=Ns("neutralFillActiveDelta"),Ls=Ns("neutralFillFocusDelta"),Fs=Ns("neutralFillSelectedDelta"),Ys=Ns("neutralFillInputRestDelta"),Vs=Ns("neutralFillInputHoverDelta"),Gs=Ns("neutralFillInputActiveDelta"),Ws=Ns("neutralFillInputFocusDelta"),Ks=Ns("neutralFillInputSelectedDelta"),Hs=Ns("neutralFillStealthRestDelta"),Zs=Ns("neutralFillStealthHoverDelta"),Js=Ns("neutralFillStealthActiveDelta"),Xs=Ns("neutralFillStealthFocusDelta"),qs=Ns("neutralFillStealthSelectedDelta"),$s=Ns("neutralFillToggleHoverDelta"),eo=Ns("neutralFillToggleActiveDelta"),to=Ns("neutralFillToggleFocusDelta"),ao=Ns("baseLayerLuminance"),io=Ns("neutralFillCardDelta"),ro=Ns("neutralForegroundHoverDelta"),no=Ns("neutralForegroundActiveDelta"),so=Ns("neutralForegroundFocusDelta"),oo=Ns("neutralDividerRestDelta"),lo=Ns("neutralOutlineRestDelta"),Ao=Ns("neutralOutlineHoverDelta"),ho=Ns("neutralOutlineActiveDelta"),go=Ns("neutralOutlineFocusDelta"),uo=(Ns("neutralContrastFillRestDelta"),Ns("neutralContrastFillHoverDelta")),co=Ns("neutralContrastFillActiveDelta"),po=Ns("neutralContrastFillFocusDelta");function Mo(e,t,a){return isNaN(e)||e<=t?t:e>=a?a:e}function mo(e,t,a){return isNaN(e)||e<=t?0:e>=a?1:e/(a-t)}function Eo(e,t,a){return isNaN(e)?t:t+e*(a-t)}function yo(e,t){const a=Math.pow(10,t);return Math.round(e*a)/a}Math.PI;class To{constructor(e,t,a,i){this.r=e,this.g=t,this.b=a,this.a="number"!=typeof i||isNaN(i)?1:i}static fromObject(e){return!e||isNaN(e.r)||isNaN(e.g)||isNaN(e.b)?null:new To(e.r,e.g,e.b,e.a)}equalValue(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(Eo(this.r,0,255))},${Math.round(Eo(this.g,0,255))},${Math.round(Eo(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(Eo(this.r,0,255))},${Math.round(Eo(this.g,0,255))},${Math.round(Eo(this.b,0,255))},${Mo(this.a,0,1)})`}roundToPrecision(e){return new To(yo(this.r,e),yo(this.g,e),yo(this.b,e),yo(this.a,e))}clamp(){return new To(Mo(this.r,0,1),Mo(this.g,0,1),Mo(this.b,0,1),Mo(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(e){return function(e){const t=Math.round(Mo(e,0,255)).toString(16);return 1===t.length?"0"+t:t}(Eo(e,0,255))}}const Io=/^rgb\(\s*((?:(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*,\s*){2}(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*)\)$/i,Do=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function ko(e){function t(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return function(e){return.2126*e.r+.7152*e.g+.0722*e.b}(new To(t(e.r),t(e.g),t(e.b),1))}const fo=(e,t)=>(e+.05)/(t+.05);function No(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var a=function(){var i=arguments,r=t?t.apply(this,i):i[0],n=a.cache;if(n.has(r))return n.get(r);var s=e.apply(this,i);return a.cache=n.set(r,s)||n,s};return a.cache=new(No.Cache||Fa),a}No.Cache=Fa;const So=No;var Co;function vo(e){const t=So(e);return function(e){return"function"==typeof e||"string"==typeof e?a=>t(Object.assign({},a,{backgroundColor:"function"==typeof e?e(a):e})):t(e)}}function xo(e,t){const a=So(t);return t=>"function"==typeof t||"string"==typeof t?i=>a(Object.assign({},i,{backgroundColor:"function"==typeof t?t(i):t}))[e]:a(t)[e]}!function(e){e.rest="rest",e.hover="hover",e.active="active",e.focus="focus",e.selected="selected"}(Co||(Co={}));const wo=So((e=>{let t=function(e){const t=Do.exec(e);if(null===t)return null;let a=t[1];if(3===a.length){const e=a.charAt(0),t=a.charAt(1),i=a.charAt(2);a=e.concat(e,t,t,i,i)}const i=parseInt(a,16);return isNaN(i)?null:new To(mo((16711680&i)>>>16,0,255),mo((65280&i)>>>8,0,255),mo(255&i,0,255),1)}(e);if(null!==t)return t;if(t=function(e){const t=Io.exec(e);if(null===t)return null;const a=t[1].split(",");return new To(mo(Number(a[0]),0,255),mo(Number(a[1]),0,255),mo(Number(a[2]),0,255),1)}(e),null!==t)return t;throw new Error(`${e} cannot be converted to a ColorRGBA64. Color strings must be one of the following formats: "#RGB", "#RRGGBB", or "rgb(r, g, b)"`)}));function _o(e){return t=e,Do.test(t)||function(e){return Io.test(e)}(e);var t}const Uo=So(((e,t)=>function(e,t){const a=ko(e),i=ko(t);return a>i?fo(a,i):fo(i,a)}(wo(e),wo(t))),((e,t)=>e+t));function bo(e){return ko(wo(e))}function Oo(...e){return t=>Math.max.apply(null,e.map((e=>e(t))))}const Po=(e,t,a)=>Math.min(Math.max(e,t),a);var Bo;function Ro(e,t){return a=>{if(!_o(t))return-1;const i=fs(e,a),r=i.indexOf(t);return-1!==r?r:i.findIndex((e=>{return _o(e)&&(a=e,wo(t).equalValue(wo(a)));var a}))}}function zo(e,t){return a=>{const i=fs(e,a),r=fs(t,a),n=Ro(i,r)(a);let s;if(-1!==n)return n;try{s=bo(r)}catch(e){s=-1}return-1===s?0:i.map(((e,t)=>({luminance:bo(e),index:t}))).reduce(((e,t)=>Math.abs(t.luminance-s)<Math.abs(e.luminance-s)?t:e)).index}}function Qo(e){return bo(Ss(e))<=(-.1+Math.sqrt(.21))/2}function jo(e,t){return"function"==typeof e?a=>t(a)[Po(e(a),0,t(a).length-1)]:t[Po(e,0,t.length-1)]}function Lo(e){return(t,a)=>i=>jo(Qo(i)?fs(a,i):fs(t,i),e(i))}function Fo(e,t,a=0,i=e.length-1){if(i===a)return e[a];const r=Math.floor((i-a)/2)+a;return t(e[r])?Fo(e,t,a,r):Fo(e,t,r+1,i)}function Yo(e){return t=>a=>i=>r=>n=>{const s=fs(e,n),o=fs(t,n),l=o.length,A=Po(a(s,o,n),0,l-1),h=i(A,o,n),g=[].concat(o),u=l-1;let c=A;return-1===h&&(g.reverse(),c=u-c),Fo(g,(function(e){return r(Uo(s,e))}),c,u)}}function Vo(e,t,a){return zo(t,e)(a)}function Go(e){return zo(vs,Ss(e))(e)}function Wo(e,t,a,i,r,n){return s=>{const o=fs(e,s),l=Qo(s)?-1:1,A=Yo(Ss)(o)(Vo)((()=>l))((h=fs(t,s),e=>e>=h))(s);var h;const g=Ro(e,A)(s),u=fs(a,s),c=fs(i,s),d=fs(r,s),p=fs(n,s);return function(e,t,a,i,r,n,s){const o=e+a*Math.abs(i-r),l=1===a?i<r:a*i>a*r,A=l?e:o,h=l?o:e,g=A+a*n,u=A+a*s;return{rest:jo(A,t),hover:jo(h,t),active:jo(g,t),focus:jo(u,t)}}(g,o,l,u,c,d,p)}}!function(e){e.neutral="neutral",e.accent="accent"}(Bo||(Bo={}));const Ko=vo(Wo(vs,14,0,ro,no,so)),Ho=xo(Co.rest,Ko);function Zo(e){return`:host([hidden]){display:none}:host{display:${e}}`}xo(Co.hover,Ko),xo(Co.active,Ko),xo(Co.focus,Ko);const Jo=Ve`
    ${Zo("block")};
`,Xo=new rs("neutral-foreground-rest",Ho,(e=>e)),qo=Ve`
    :host {
        background-color: var(--background-color);
        color: ${Xo.var};
    }
`.withBehaviors(Xo,os(Ve`
            :host {
                background-color: ${Is.ButtonFace};
                box-shadow: 0 0 0 1px ${Is.CanvasText};
                color: ${Is.ButtonText};
            }
        `));let $o=class extends Ms{constructor(){super(...arguments),this.noPaint=!1}noPaintChanged(){this.noPaint||void 0===this.backgroundColor?this.$fastController.removeStyles(qo):this.$fastController.addStyles(qo)}backgroundColorChanged(){this.noPaintChanged()}};i([W({attribute:"no-paint",mode:"boolean"})],$o.prototype,"noPaint",void 0),i([ys({attribute:"background-color",default:ks.backgroundColor})],$o.prototype,"backgroundColor",void 0),i([ys({attribute:"accent-base-color",cssCustomProperty:!1,default:ks.accentBaseColor})],$o.prototype,"accentBaseColor",void 0),i([ys({attribute:!1,cssCustomProperty:!1,default:ks.neutralPalette})],$o.prototype,"neutralPalette",void 0),i([ys({attribute:!1,cssCustomProperty:!1,default:ks.accentPalette})],$o.prototype,"accentPalette",void 0),i([ys({default:ks.density,converter:V})],$o.prototype,"density",void 0),i([ys({attribute:"design-unit",converter:V,default:ks.designUnit})],$o.prototype,"designUnit",void 0),i([ys({attribute:"direction",cssCustomProperty:!1,default:ks.direction})],$o.prototype,"direction",void 0),i([ys({attribute:"base-height-multiplier",default:ks.baseHeightMultiplier,converter:V})],$o.prototype,"baseHeightMultiplier",void 0),i([ys({attribute:"base-horizontal-spacing-multiplier",converter:V,default:ks.baseHorizontalSpacingMultiplier})],$o.prototype,"baseHorizontalSpacingMultiplier",void 0),i([ys({attribute:"corner-radius",converter:V,default:ks.cornerRadius})],$o.prototype,"cornerRadius",void 0),i([ys({attribute:"outline-width",converter:V,default:ks.outlineWidth})],$o.prototype,"outlineWidth",void 0),i([ys({attribute:"focus-outline-width",converter:V,default:ks.focusOutlineWidth})],$o.prototype,"focusOutlineWidth",void 0),i([ys({attribute:"disabled-opacity",converter:V,default:ks.disabledOpacity})],$o.prototype,"disabledOpacity",void 0),i([ys({attribute:"type-ramp-minus-2-font-size",default:ks.typeRampMinus2FontSize})],$o.prototype,"typeRampMinus2FontSize",void 0),i([ys({attribute:"type-ramp-minus-2-line-height",default:ks.typeRampMinus2LineHeight})],$o.prototype,"typeRampMinus2LineHeight",void 0),i([ys({attribute:"type-ramp-minus-1-font-size",default:ks.typeRampMinus1FontSize})],$o.prototype,"typeRampMinus1FontSize",void 0),i([ys({attribute:"type-ramp-minus-1-line-height",default:ks.typeRampMinus1LineHeight})],$o.prototype,"typeRampMinus1LineHeight",void 0),i([ys({attribute:"type-ramp-base-font-size",default:ks.typeRampBaseFontSize})],$o.prototype,"typeRampBaseFontSize",void 0),i([ys({attribute:"type-ramp-base-line-height",default:ks.typeRampBaseLineHeight})],$o.prototype,"typeRampBaseLineHeight",void 0),i([ys({attribute:"type-ramp-plus-1-font-size",default:ks.typeRampPlus1FontSize})],$o.prototype,"typeRampPlus1FontSize",void 0),i([ys({attribute:"type-ramp-plus-1-line-height",default:ks.typeRampPlus1LineHeight})],$o.prototype,"typeRampPlus1LineHeight",void 0),i([ys({attribute:"type-ramp-plus-2-font-size",default:ks.typeRampPlus2FontSize})],$o.prototype,"typeRampPlus2FontSize",void 0),i([ys({attribute:"type-ramp-plus-2-line-height",default:ks.typeRampPlus2LineHeight})],$o.prototype,"typeRampPlus2LineHeight",void 0),i([ys({attribute:"type-ramp-plus-3-font-size",default:ks.typeRampPlus3FontSize})],$o.prototype,"typeRampPlus3FontSize",void 0),i([ys({attribute:"type-ramp-plus-3-line-height",default:ks.typeRampPlus3LineHeight})],$o.prototype,"typeRampPlus3LineHeight",void 0),i([ys({attribute:"type-ramp-plus-4-font-size",default:ks.typeRampPlus4FontSize})],$o.prototype,"typeRampPlus4FontSize",void 0),i([ys({attribute:"type-ramp-plus-4-line-height",default:ks.typeRampPlus4LineHeight})],$o.prototype,"typeRampPlus4LineHeight",void 0),i([ys({attribute:"type-ramp-plus-5-font-size",default:ks.typeRampPlus5FontSize})],$o.prototype,"typeRampPlus5FontSize",void 0),i([ys({attribute:"type-ramp-plus-5-line-height",default:ks.typeRampPlus5LineHeight})],$o.prototype,"typeRampPlus5LineHeight",void 0),i([ys({attribute:"type-ramp-plus-6-font-size",default:ks.typeRampPlus6FontSize})],$o.prototype,"typeRampPlus6FontSize",void 0),i([ys({attribute:"type-ramp-plus-6-line-height",default:ks.typeRampPlus6LineHeight})],$o.prototype,"typeRampPlus6LineHeight",void 0),i([ys({attribute:"accent-fill-rest-delta",converter:V,cssCustomProperty:!1,default:ks.accentFillRestDelta})],$o.prototype,"accentFillRestDelta",void 0),i([ys({attribute:"accent-fill-hover-delta",cssCustomProperty:!1,converter:V,default:ks.accentFillHoverDelta})],$o.prototype,"accentFillHoverDelta",void 0),i([ys({attribute:"accent-fill-active-delta",cssCustomProperty:!1,converter:V,default:ks.accentFillActiveDelta})],$o.prototype,"accentFillActiveDelta",void 0),i([ys({attribute:"accent-fill-focus-delta",converter:V,cssCustomProperty:!1,default:ks.accentFillFocusDelta})],$o.prototype,"accentFillFocusDelta",void 0),i([ys({attribute:"accent-fill-selected-delta",converter:V,cssCustomProperty:!1,default:ks.accentFillSelectedDelta})],$o.prototype,"accentFillSelectedDelta",void 0),i([ys({attribute:"accent-foreground-rest-delta",converter:V,cssCustomProperty:!1,default:ks.accentForegroundRestDelta})],$o.prototype,"accentForegroundRestDelta",void 0),i([ys({attribute:"accent-foreground-hover-delta",converter:V,cssCustomProperty:!1,default:ks.accentForegroundHoverDelta})],$o.prototype,"accentForegroundHoverDelta",void 0),i([ys({attribute:"accent-foreground-active-delta",converter:V,cssCustomProperty:!1,default:ks.accentForegroundActiveDelta})],$o.prototype,"accentForegroundActiveDelta",void 0),i([ys({attribute:"accent-foreground-focus-delta",converter:V,cssCustomProperty:!1,default:ks.accentForegroundFocusDelta})],$o.prototype,"accentForegroundFocusDelta",void 0),i([ys({attribute:"neutral-fill-rest-delta",converter:V,cssCustomProperty:!1,default:ks.neutralFillRestDelta})],$o.prototype,"neutralFillRestDelta",void 0),i([ys({attribute:"neutral-fill-hover-delta",converter:V,cssCustomProperty:!1,default:ks.neutralFillHoverDelta})],$o.prototype,"neutralFillHoverDelta",void 0),i([ys({attribute:"neutral-fill-active-delta",converter:V,cssCustomProperty:!1,default:ks.neutralFillActiveDelta})],$o.prototype,"neutralFillActiveDelta",void 0),i([ys({attribute:"neutral-fill-focus-delta",converter:V,cssCustomProperty:!1,default:ks.neutralFillFocusDelta})],$o.prototype,"neutralFillFocusDelta",void 0),i([ys({attribute:"neutral-fill-selected-delta",converter:V,cssCustomProperty:!1,default:ks.neutralFillSelectedDelta})],$o.prototype,"neutralFillSelectedDelta",void 0),i([ys({attribute:"neutral-fill-input-rest-delta",converter:V,cssCustomProperty:!1,default:ks.neutralFillInputRestDelta})],$o.prototype,"neutralFillInputRestDelta",void 0),i([ys({attribute:"neutral-fill-input-hover-delta",converter:V,cssCustomProperty:!1,default:ks.neutralFillInputHoverDelta})],$o.prototype,"neutralFillInputHoverDelta",void 0),i([ys({attribute:"neutral-fill-input-active-delta",converter:V,cssCustomProperty:!1,default:ks.neutralFillInputActiveDelta})],$o.prototype,"neutralFillInputActiveDelta",void 0),i([ys({attribute:"neutral-fill-input-focus-delta",converter:V,cssCustomProperty:!1,default:ks.neutralFillInputFocusDelta})],$o.prototype,"neutralFillInputFocusDelta",void 0),i([ys({attribute:"neutral-fill-input-selected-delta",converter:V,cssCustomProperty:!1,default:ks.neutralFillInputSelectedDelta})],$o.prototype,"neutralFillInputSelectedDelta",void 0),i([ys({attribute:"neutral-fill-stealth-rest-delta",converter:V,cssCustomProperty:!1,default:ks.neutralFillStealthRestDelta})],$o.prototype,"neutralFillStealthRestDelta",void 0),i([ys({attribute:"neutral-fill-stealth-hover-delta",converter:V,cssCustomProperty:!1,default:ks.neutralFillStealthHoverDelta})],$o.prototype,"neutralFillStealthHoverDelta",void 0),i([ys({attribute:"neutral-fill-stealth-active-delta",converter:V,cssCustomProperty:!1,default:ks.neutralFillStealthActiveDelta})],$o.prototype,"neutralFillStealthActiveDelta",void 0),i([ys({attribute:"neutral-fill-stealth-focus-delta",converter:V,cssCustomProperty:!1,default:ks.neutralFillStealthFocusDelta})],$o.prototype,"neutralFillStealthFocusDelta",void 0),i([ys({attribute:"neutral-fill-stealth-selected-delta",converter:V,cssCustomProperty:!1,default:ks.neutralFillStealthSelectedDelta})],$o.prototype,"neutralFillStealthSelectedDelta",void 0),i([ys({attribute:"neutral-fill-toggle-hover-delta",converter:V,cssCustomProperty:!1,default:ks.neutralFillToggleHoverDelta})],$o.prototype,"neutralFillToggleHoverDelta",void 0),i([ys({attribute:"neutral-fill-toggle-active-delta",converter:V,cssCustomProperty:!1,default:ks.neutralFillToggleActiveDelta})],$o.prototype,"neutralFillToggleActiveDelta",void 0),i([ys({attribute:"neutral-fill-toggle-focus-delta",converter:V,cssCustomProperty:!1,default:ks.neutralFillToggleFocusDelta})],$o.prototype,"neutralFillToggleFocusDelta",void 0),i([ys({attribute:"base-layer-luminance",converter:V,cssCustomProperty:!1,default:ks.baseLayerLuminance})],$o.prototype,"baseLayerLuminance",void 0),i([ys({attribute:"neutral-fill-card-delta",converter:V,cssCustomProperty:!1,default:ks.neutralFillCardDelta})],$o.prototype,"neutralFillCardDelta",void 0),i([ys({attribute:"neutral-foreground-hover-delta",converter:V,cssCustomProperty:!1,default:ks.neutralForegroundHoverDelta})],$o.prototype,"neutralForegroundHoverDelta",void 0),i([ys({attribute:"neutral-foreground-active-delta",converter:V,cssCustomProperty:!1,default:ks.neutralForegroundActiveDelta})],$o.prototype,"neutralForegroundActiveDelta",void 0),i([ys({attribute:"neutral-foreground-focus-delta",converter:V,cssCustomProperty:!1,default:ks.neutralForegroundFocusDelta})],$o.prototype,"neutralForegroundFocusDelta",void 0),i([ys({attribute:"neutral-divider-rest-delta",converter:V,cssCustomProperty:!1,default:ks.neutralDividerRestDelta})],$o.prototype,"neutralDividerRestDelta",void 0),i([ys({attribute:"neutral-outline-rest-delta",converter:V,cssCustomProperty:!1,default:ks.neutralOutlineRestDelta})],$o.prototype,"neutralOutlineRestDelta",void 0),i([ys({attribute:"neutral-outline-hover-delta",converter:V,cssCustomProperty:!1,default:ks.neutralOutlineHoverDelta})],$o.prototype,"neutralOutlineHoverDelta",void 0),i([ys({attribute:"neutral-outline-active-delta",converter:V,cssCustomProperty:!1,default:ks.neutralOutlineActiveDelta})],$o.prototype,"neutralOutlineActiveDelta",void 0),i([ys({attribute:"neutral-outline-focus-delta",converter:V,cssCustomProperty:!1,default:ks.neutralOutlineFocusDelta})],$o.prototype,"neutralOutlineFocusDelta",void 0),i([ys({attribute:"neutral-contrast-fill-rest-delta",converter:V,cssCustomProperty:!1,default:ks.neutralContrastFillRestDelta})],$o.prototype,"neutralContrastFillRestDelta",void 0),i([ys({attribute:"neutral-contrast-fill-hover-delta",converter:V,cssCustomProperty:!1,default:ks.neutralContrastFillHoverDelta})],$o.prototype,"neutralContrastFillHoverDelta",void 0),i([ys({attribute:"neutral-contrast-fill-active-delta",converter:V,cssCustomProperty:!1,default:ks.neutralContrastFillActiveDelta})],$o.prototype,"neutralContrastFillActiveDelta",void 0),i([ys({attribute:"neutral-contrast-fill-focus-delta",converter:V,cssCustomProperty:!1,default:ks.neutralContrastFillFocusDelta})],$o.prototype,"neutralContrastFillFocusDelta",void 0),$o=i([Es({name:"fast-design-system-provider",template:Ts,styles:Jo})],$o);const el=Ve`
    :host {
        --font-family: 'Segoe UI';
        --neutral-foreground-rest: #ffffff;
        --background-color: #444444;
        --density: 0;
        --design-unit: 4;
        --base-height-multiplier: 10;
        --base-horizontal-spacing-multiplier: 3;
        --corner-radius: 2;
        --outline-width: 2;
        --focus-outline-width: 2;
        --disabled-opacity: 0.3;
        --type-ramp-minus-2-font-size: 10px;
        --type-ramp-minus-2-line-height: 16px;
        --type-ramp-minus-1-font-size: 12px;
        --type-ramp-minus-1-line-height: 16px;
        --type-ramp-base-font-size: 14px;
        --type-ramp-base-line-height: 20px;
        --type-ramp-plus-1-font-size: 16px;
        --type-ramp-plus-1-line-height: 24px;
        --type-ramp-plus-2-font-size: 20px;
        --type-ramp-plus-2-line-height: 28px;
        --type-ramp-plus-3-font-size: 28px;
        --type-ramp-plus-3-line-height: 36px;
        --type-ramp-plus-4-font-size: 34px;
        --type-ramp-plus-4-line-height: 44px;
        --type-ramp-plus-5-font-size: 46px;
        --type-ramp-plus-5-line-height: 56px;
        --type-ramp-plus-6-font-size: 60px;
        --type-ramp-plus-6-line-height: 72px;
        --accent-fill-active: #216458;
        --accent-fill-hover: #2b8071;
        --accent-fill-rest: #277466;
        --accent-foreground-cut-rest: #ffffff;
        --neutral-fill-input-active: #3b3b3b;
        --neutral-fill-input-hover: #3b3b3b;
        --neutral-fill-input-rest: #3b3b3b;
        --neutral-focus: #909090;
        --neutral-outline-active: #646464;
        --neutral-outline-hover: #a2a2a2;
        --neutral-outline-rest: #7b7b7b;
        --neutral-foreground-active: #ffffff;
        --neutral-foreground-hover: #ffffff;
        --accent-foreground-rest: #7bb0a6;
        --neutral-fill-rest: #4d4d4d;
        --neutral-fill-hover: #545454;
        --neutral-fill-active: #484848;
        --neutral-focus-inner-accent: #16423a;
        --accent-foreground-hover: #90bdb4;
        --accent-foreground-active: #6da89d;
        --neutral-fill-stealth-rest: #3b3b3b;
        --neutral-fill-stealth-hover: #484848;
        --neutral-fill-stealth-active: #424242;
        --neutral-divider-rest: #4f4f4f;
        --neutral-layer-floating: #4a4a4a;
        --neutral-foreground-hint: #a7a7a7;

        /* Segments Line */
        --segments-progress-color: rgb(119 189 242);
        --segments-line-bg: #323130;
        --segments-color: #605e5c;
        --segments-tooltip: #323130;
        --segments-tooltip-text: #f7f7f7;
        --segments-active-color: #e1dfdd;

        /* Time Ruler */
        --ruler-small-scale-color: #8a8886;
        --ruler-text-color: #f3f2f1;
        --ruler-time-color: #c8c6c4;

        /* Date picker */
        --date-picker-holder-bg: #252423;
        --date-picker-text-color: #f3f2f1;
        --date-picker-bg-today: #2899f5;
        --date-picker-text-color-today: #1b1a19;
        --date-picker-disabled-text-color: #a6a6a6;
        --date-picker-out-focus-text-color: #a19f9d;
        --date-picker-focus-text-color: #f3f2f1;
        --date-picker-focus-text-color-hover: #605e5c;
        --date-picker-focus-bg-color-hover: #eaeaea;
        --date-picker-focus-month-hover-bg: #c8c8c8;
        --date-picker-divider-color: #484644;
        --date-picker-holder-box-shadow-1: rgba(0, 0, 0, 0.1);
        --date-picker-holder-box-shadow-2: rgba(0, 0, 0, 0.13);

        /* Layer Label */
        --layer-label-bg: rgba(17, 16, 15, 0.9);
        --layer-label-color: #f3f2f1;

        /* Actions Menu */
        --actions-menu-bg: rgba(17, 16, 15, 0.9);
        --actions-menu-color: #f3f2f1;

        /* Drawer Canvas */
        --drawer-line-color: #db4646;
        --drawer-fill-color: rgba(219, 70, 70, 0.4);
    }
`,tl=Ve`
    :host {
        --font-family: 'Segoe UI';
        --neutral-foreground-rest: #262626;
        --background-color: #f7f7f7;
        --density: 0;
        --design-unit: 4;
        --base-height-multiplier: 10;
        --base-horizontal-spacing-multiplier: 3;
        --corner-radius: 2;
        --outline-width: 2;
        --focus-outline-width: 2;
        --disabled-opacity: 0.3;
        --type-ramp-minus-2-font-size: 10px;
        --type-ramp-minus-2-line-height: 16px;
        --type-ramp-minus-1-font-size: 12px;
        --type-ramp-minus-1-line-height: 16px;
        --type-ramp-base-font-size: 14px;
        --type-ramp-base-line-height: 20px;
        --type-ramp-plus-1-font-size: 16px;
        --type-ramp-plus-1-line-height: 24px;
        --type-ramp-plus-2-font-size: 20px;
        --type-ramp-plus-2-line-height: 28px;
        --type-ramp-plus-3-font-size: 28px;
        --type-ramp-plus-3-line-height: 36px;
        --type-ramp-plus-4-font-size: 34px;
        --type-ramp-plus-4-line-height: 44px;
        --type-ramp-plus-5-font-size: 46px;
        --type-ramp-plus-5-line-height: 56px;
        --type-ramp-plus-6-font-size: 60px;
        --type-ramp-plus-6-line-height: 72px;
        --accent-fill-active: #3c8b7d;
        --accent-fill-hover: #277466;
        --accent-fill-rest: #2b8071;
        --accent-foreground-cut-rest: #ffffff;
        --neutral-fill-input-active: #f7f7f7;
        --neutral-fill-input-hover: #f7f7f7;
        --neutral-fill-input-rest: #f7f7f7;
        --neutral-focus: #838383;
        --neutral-outline-active: #cecece;
        --neutral-outline-hover: #909090;
        --neutral-outline-rest: #b6b6b6;
        --neutral-foreground-active: #262626;
        --neutral-foreground-hover: #262626;
        --accent-foreground-rest: #2a7d6e;
        --neutral-fill-rest: #e5e5e5;
        --neutral-fill-hover: #dddddd;
        --neutral-fill-active: #eaeaea;
        --neutral-focus-inner-accent: #ffffff;
        --accent-foreground-hover: #236a5e;
        --accent-foreground-active: #358678;
        --neutral-fill-stealth-rest: #f7f7f7;
        --neutral-fill-stealth-hover: #eaeaea;
        --neutral-fill-stealth-active: #efefef;
        --neutral-divider-rest: #e2e2e2;
        --neutral-layer-floating: #ffffff;
        --neutral-foreground-hint: #717171;

        /* Segments Line */
        --segments-progress-color: rgba(189, 224, 255, 1);
        --segments-line-bg: rgba(0, 0, 0, 0.05);
        --segments-color: rgba(0, 0, 0, 0.8);
        --segments-tooltip: rgba(0, 0, 0, 0.08);
        --segments-tooltip-text: #f7f7f7;
        --segments-active-color: #e1dfdd;

        /* Time Ruler */
        --ruler-small-scale-color: #8a8886;
        --ruler-text-color: #444444;
        --ruler-time-color: #c8c6c4;

        /* Date picker */
        --date-picker-holder-bg: #252423;
        --date-picker-text-color: #f3f2f1;
        --date-picker-bg-today: #2899f5;
        --date-picker-text-color-today: #1b1a19;
        --date-picker-disabled-text-color: #a6a6a6;
        --date-picker-out-focus-text-color: #a19f9d;
        --date-picker-focus-text-color: #f3f2f1;
        --date-picker-focus-text-color-hover: #605e5c;
        --date-picker-focus-bg-color-hover: #eaeaea;
        --date-picker-focus-month-hover-bg: #c8c8c8;
        --date-picker-divider-color: #484644;
        --date-picker-holder-box-shadow-1: rgba(0, 0, 0, 0.1);
        --date-picker-holder-box-shadow-2: rgba(0, 0, 0, 0.13);

        /* Layer Label */
        --layer-label-bg: rgba(17, 16, 15, 0.9);
        --layer-label-color: #f3f2f1;

        /* Actions Menu */
        --actions-menu-bg: rgba(17, 16, 15, 0.9);
        --actions-menu-color: #f3f2f1;

        /* Drawer Canvas */
        --drawer-line-color: #db4646;
        --drawer-fill-color: rgba(219, 70, 70, 0.4);
    }
`,al=Ve`
    :host {
        display: block;
        font-display: swap;
        background: var(--background-color);
        font-family: var(--font-family);
        --body-font: var(--font-family);
    }
`;__nested_webpack_require_1251907__(514);let il=class extends $o{constructor(){super(...arguments),this.theme=""}themeChanged(){this.theme!==la.Dark?(this.$fastController.removeStyles(el),this.$fastController.addStyles(tl)):(this.$fastController.removeStyles(tl),this.$fastController.addStyles(el)),this.$emit("theme-changed")}};i([ys({attribute:"theme",default:la.Default})],il.prototype,"theme",void 0),il=i([ms({name:"ava-design-system-provider",template:Ts,styles:[al]})],il);class rl{}i([W({attribute:"aria-atomic",mode:"fromView"})],rl.prototype,"ariaAtomic",void 0),i([W({attribute:"aria-busy",mode:"fromView"})],rl.prototype,"ariaBusy",void 0),i([W({attribute:"aria-controls",mode:"fromView"})],rl.prototype,"ariaControls",void 0),i([W({attribute:"aria-current",mode:"fromView"})],rl.prototype,"ariaCurrent",void 0),i([W({attribute:"aria-describedby",mode:"fromView"})],rl.prototype,"ariaDescribedby",void 0),i([W({attribute:"aria-details",mode:"fromView"})],rl.prototype,"ariaDetails",void 0),i([W({attribute:"aria-disabled",mode:"fromView"})],rl.prototype,"ariaDisabled",void 0),i([W({attribute:"aria-errormessage",mode:"fromView"})],rl.prototype,"ariaErrormessage",void 0),i([W({attribute:"aria-flowto",mode:"fromView"})],rl.prototype,"ariaFlowto",void 0),i([W({attribute:"aria-haspopup",mode:"fromView"})],rl.prototype,"ariaHaspopup",void 0),i([W({attribute:"aria-hidden",mode:"fromView"})],rl.prototype,"ariaHidden",void 0),i([W({attribute:"aria-invalid",mode:"fromView"})],rl.prototype,"ariaInvalid",void 0),i([W({attribute:"aria-keyshortcuts",mode:"fromView"})],rl.prototype,"ariaKeyshortcuts",void 0),i([W({attribute:"aria-label",mode:"fromView"})],rl.prototype,"ariaLabel",void 0),i([W({attribute:"aria-labelledby",mode:"fromView"})],rl.prototype,"ariaLabelledby",void 0),i([W({attribute:"aria-live",mode:"fromView"})],rl.prototype,"ariaLive",void 0),i([W({attribute:"aria-owns",mode:"fromView"})],rl.prototype,"ariaOwns",void 0),i([W({attribute:"aria-relevant",mode:"fromView"})],rl.prototype,"ariaRelevant",void 0),i([W({attribute:"aria-roledescription",mode:"fromView"})],rl.prototype,"ariaRoledescription",void 0);class nl{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function sl(e){return new me("fast-ref",nl,e)}class ol{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const ll=Le`
    <span part="end" ${sl("endContainer")}>
        <slot
            name="end"
            ${sl("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,Al=Le`
    <span part="start" ${sl("startContainer")}>
        <slot
            name="start"
            ${sl("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`;function hl(e,...t){t.forEach((t=>{if(Object.getOwnPropertyNames(t.prototype).forEach((a=>{Object.defineProperty(e.prototype,a,Object.getOwnPropertyDescriptor(t.prototype,a))})),t.attributes){const a=e.attributes||[];e.attributes=a.concat(t.attributes)}}))}const gl="form-associated-proxy",ul="ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype,cl=new Map;class dl extends ae{}class pl extends(function(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.formDisabledCallback=e=>{this.disabled=e},this.formResetCallback=()=>{this.value=this.initialValue,this.dirtyValue=!1},this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||""}static get formAssociated(){return ul}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),a=e?t.concat(Array.from(e)):t;return Object.freeze(a)}return s}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.setFormValue(this.value),this.validate()}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),d.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),d.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!ul)return null;let e=cl.get(this);return e||(e=this.attachInternals(),cl.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback)}disconnectedCallback(){this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,a){this.elementInternals?this.elementInternals.setValidity(e,t,a):"string"==typeof t&&this.proxy.setCustomValidity(t)}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",gl),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",gl)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){switch(e.keyCode){case 13:if(this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}}stopPropagation(e){e.stopPropagation()}};return W({mode:"boolean"})(t.prototype,"disabled"),W({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),W(t.prototype,"name"),W({mode:"boolean"})(t.prototype,"required"),w(t.prototype,"value"),t}(dl)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Ml extends pl{constructor(){super(...arguments),this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type)}get root(){return this.control}}i([W({mode:"boolean"})],Ml.prototype,"autofocus",void 0),i([W({attribute:"form"})],Ml.prototype,"formId",void 0),i([W],Ml.prototype,"formaction",void 0),i([W],Ml.prototype,"formenctype",void 0),i([W],Ml.prototype,"formmethod",void 0),i([W({mode:"boolean"})],Ml.prototype,"formnovalidate",void 0),i([W],Ml.prototype,"formtarget",void 0),i([W],Ml.prototype,"type",void 0),i([w],Ml.prototype,"defaultSlottedContent",void 0);class ml{}i([W({attribute:"aria-expanded",mode:"fromView"})],ml.prototype,"ariaExpanded",void 0),i([W({attribute:"aria-pressed",mode:"fromView"})],ml.prototype,"ariaPressed",void 0),hl(ml,rl),hl(Ml,ol,ml);class El extends class{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=C.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(s),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function yl(e){return"string"==typeof e&&(e={property:e}),new me("fast-slotted",El,e)}const Tl=Le`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedBy="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${sl("control")}
    >
        ${Al}
        <span class="content" part="content">
            <slot ${yl("defaultSlottedContent")}></slot>
        </span>
        ${ll}
    </button>
`;function Il(...e){return e.every((e=>e instanceof HTMLElement))}let Dl;const kl=function(){if(!0===(e=Dl)||!1===e||gt(e)&&"[object Boolean]"==ht(e))return Dl;var e;if("undefined"==typeof window||!window.document||!window.document.createElement)return Dl=!1,Dl;const t=document.createElement("style"),a=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==a&&t.setAttribute("nonce",a),document.head.appendChild(t);try{t.sheet.insertRule("foo:focus-visible {color:inherit}",0),Dl=!0}catch(e){Dl=!1}finally{document.head.removeChild(t)}return Dl}()?"focus-visible":"focus",fl="not-allowed",Nl="(var(--base-height-multiplier) + var(--density)) * var(--design-unit)",Sl="#FFFFFF",Cl="#000000",vl=vo(Wo(vs,4.5,0,$s,eo,to)),xl=xo(Co.rest,vl),wl=(xo(Co.hover,vl),xo(Co.active,vl),xo(Co.focus,vl),(e,t)=>Uo(Sl,e)>=t?Sl:Cl);function _l(e){return function(t){return"function"==typeof t||"string"==typeof t?a=>wl("function"==typeof t?t(a):t,e):wl(xl(t),e)}}const Ul=_l(4.5),bl=_l(3);function Ol(e){return Wo(vs,e,0,0,0,0)}const Pl=xo(Co.rest,vo(Ol(4.5))),Bl=xo(Co.rest,vo(Ol(3)));function Rl(e){return t=>{const a=xs(t),i=Cs(t),r=zo(xs,i)(t),n={rest:Os(t),hover:Ps(t),active:Bs(t),focus:Rs(t)},s=Qo(t)?-1:1,o=r+(1===s?Math.min(n.rest,n.hover):Math.max(s*n.rest,s*n.hover)),l=Yo(Ss)(xs)((()=>o))((()=>s))((t=>t>=e))(t),A=Ro(xs,l)(t),h=A+s*Math.abs(n.rest-n.hover),g=1===s?n.rest<n.hover:s*n.rest>s*n.hover,u=g?A:h,c=g?h:A,d=u+s*n.active,p=u+s*n.focus;return{rest:jo(u,a),hover:jo(c,a),active:jo(d,a),focus:jo(p,a)}}}const zl=vo(Rl(4.5)),Ql=vo(Rl(3)),jl=(xo(Co.rest,zl),xo(Co.hover,zl),xo(Co.active,zl),xo(Co.focus,zl),xo(Co.rest,Ql),xo(Co.hover,Ql),xo(Co.active,Ql),xo(Co.focus,Ql),(e,t)=>Uo(Sl,e)>=t?Sl:Cl);function Ll(e){return function(t){return"function"==typeof t||"string"==typeof t?a=>jl("function"==typeof t?t(a):t,e):jl(Cs(t),e)}}const Fl=Ll(4.5),Yl=(Ll(3),Oo(zs,Qs,js,Ls));function Vl(e){return t=>{const a=Go(t);return jo(a+(a>=Yl(t)?-1:1)*e(t),vs(t))}}const Gl=vo(Vl(zs)),Wl=vo(Vl(Qs)),Kl=vo(Vl(js)),Hl=vo(Vl(Ls)),Zl=vo(Vl(Fs)),Jl=vo((e=>({rest:Gl(e),hover:Wl(e),active:Kl(e),focus:Hl(e),selected:Zl(e)}))),Xl=Oo(zs,Qs,js,Ls,Hs,Zs,Js,Xs);function ql(e){return t=>{const a=Go(t);return jo(a+(a>=Xl(t)?-1:1)*e(t),vs(t))}}const $l=vo(ql(Hs)),eA=vo(ql(Zs)),tA=vo(ql(Js)),aA=vo(ql(Xs)),iA=vo(ql(qs)),rA=vo((e=>({rest:$l(e),hover:eA(e),active:tA(e),focus:aA(e),selected:iA(e)})));function nA(e){return t=>{const a=Qo(t)?-1:1;return jo(Go(t)-e(t)*a,vs(t))}}const sA=vo(nA(Ys)),oA=vo(nA(Vs)),lA=vo(nA(Gs)),AA=vo(nA(Ws)),hA=vo(nA(Ks)),gA=vo((e=>({rest:sA(e),hover:oA(e),active:lA(e),focus:AA(e),selected:hA(e)})));var uA=Math.max,cA=Math.min;const dA=function(e,t,a){return t=mt(t),void 0===a?(a=t,t=0):a=mt(a),function(e,t,a){return e>=cA(t,a)&&e<uA(t,a)}(e=Mt(e),t,a)},pA=Oo(zs,Qs,js);function MA(e){return t=>{const a=xs(t),i=a.length,r=Cs(t),n=Fl(Object.assign({},t,{backgroundColor:r})),s=ws(t),o=Go(t)>=pA(t)?-1:1,l=i-1,A=zo(xs,r)(t);let h=0;for(;h<o*s&&dA(A+h+o,0,i)&&Uo(a[A+h+o],n)>=e&&dA(A+h+o+o,0,l);)h+=o;const g=A+h,u=g+-1*o*s,c=u+o*_s(t),d=u+o*Us(t);return{rest:jo(u,a),hover:jo(g,a),active:jo(c,a),focus:jo(d,a),selected:jo(u+(Qo(t)?-1*bs(t):bs(t)),a)}}}const mA=vo(MA(4.5)),EA=vo(MA(3)),yA=(xo(Co.rest,mA),xo(Co.hover,mA),xo(Co.active,mA),xo(Co.focus,mA),xo(Co.selected,mA),xo(Co.rest,EA),xo(Co.hover,EA),xo(Co.active,EA),xo(Co.focus,EA),xo(Co.selected,EA),e=>{const t=io(e),a=zo(vs,Ss(e))(e);return jo(a-(a<t?-1*t:t),vs(e))}),TA=vo((e=>{const t=vs(e),a=Go(e),i=Qo(e)?-1:1,r=lo(e),n=a+i*r,s=n+i*(Ao(e)-r),o=n+i*(ho(e)-r),l=n+i*(go(e)-r);return{rest:jo(n,t),hover:jo(s,t),active:jo(o,t),focus:jo(l,t)}})),IA=(xo(Co.rest,TA),xo(Co.hover,TA),xo(Co.active,TA),xo(Co.focus,TA),vo((e=>{const t=vs(e),a=Go(e),i=oo(e);return jo(a+(Qo(e)?-1:1)*i,t)})));function DA(e){return(...t)=>a=>{const i=t[0];let r="function"==typeof i?i(a):i;for(let i=1;i<t.length;i++){const n=t[i];r=e(r,"function"==typeof n?n(a):n)}return r}}const kA=DA(((e,t)=>e+t)),fA=DA(((e,t)=>e-t)),NA=DA(((e,t)=>e*t));function SA(...e){return kA.apply(this,e)}function CA(...e){return fA.apply(this,e)}function vA(...e){return NA.apply(this,e)}var xA;function wA(e,t){return a=>-1===ao(a)?t(a):e(a)}DA(((e,t)=>e/t)),function(e){e[e.LightMode=1]="LightMode",e[e.DarkMode=.23]="DarkMode"}(xA||(xA={}));const _A=zo(vs,(e=>{const t=ao(e);return new To(t,t,t,1).toStringHexRGB()})),UA=e=>Mo(CA(_A,io)(e),0,vs(e).length-1),bA=Oo(zs,Qs,js),OA=Oo(SA(_A,io),bA),PA=e=>{const t=.14,a=new To(t,t,t,1);return zo(vs,a.toStringHexRGB())(e)},BA=vo(wA(jo(CA(UA,io),vs),Lo(vs)(0,CA(PA,vA(io,5))))),RA=vo(wA(jo(UA,vs),Lo(vs)(0,CA(PA,vA(io,4))))),zA=vo(wA(jo(SA(UA,io),vs),Lo(vs)(io,CA(PA,vA(io,3))))),QA=vo(wA(jo(_A,vs),Lo(vs)(0,CA(PA,vA(io,3))))),jA=zA,LA=vo(wA(jo(OA,vs),Lo(vs)(bA,CA(PA,vA(io,2))))),FA=vo(wA(jo(SA(OA,io),vs),Lo(vs)(SA(bA,io),CA(PA,io)))),YA=vo(wA(jo(SA(OA,vA(io,2)),vs),Lo(vs)(SA(bA,vA(io,2)),PA)));function VA(e){return e>3.5}const GA=vo(Yo(Ss)(vs)((function(e,t,a){return zo(vs,e)(a)}))((function(e,t,a){return Qo(a)?-1:1}))(VA));const WA=vo(Wo(vs,14,0,uo,co,po)),KA=xo(Co.rest,WA),HA=(xo(Co.hover,WA),xo(Co.active,WA),xo(Co.focus,WA),ns("neutral-foreground-rest",(e=>Ko(e).rest),$o.findProvider)),ZA=ns("neutral-foreground-hover",(e=>Ko(e).hover),$o.findProvider),JA=(ns("neutral-foreground-active",(e=>Ko(e).active),$o.findProvider),ns("neutral-foreground-focus",(e=>Ko(e).focus),$o.findProvider),ns("neutral-foreground-toggle",Ul,$o.findProvider),ns("neutral-foreground-toggle-large",bl,$o.findProvider),ns("neutral-foreground-hint",Pl,$o.findProvider),ns("neutral-foreground-hint-large",Bl,$o.findProvider),ns("accent-foreground-rest",(e=>zl(e).rest),$o.findProvider)),XA=ns("accent-foreground-hover",(e=>zl(e).hover),$o.findProvider),qA=ns("accent-foreground-active",(e=>zl(e).active),$o.findProvider),$A=(ns("accent-foreground-focus",(e=>zl(e).focus),$o.findProvider),ns("accent-foreground-cut-rest",(e=>Fl(e)),$o.findProvider)),eh=(ns("accent-foreground-large-rest",(e=>Ql(e).rest),$o.findProvider),ns("accent-foreground-large-hover",(e=>Ql(e).hover),$o.findProvider),ns("accent-foreground-large-active",(e=>Ql(e).active),$o.findProvider),ns("accent-foreground-large-focus",(e=>Ql(e).focus),$o.findProvider),ns("neutral-fill-rest",(e=>Jl(e).rest),$o.findProvider)),th=ns("neutral-fill-hover",(e=>Jl(e).hover),$o.findProvider),ah=ns("neutral-fill-active",(e=>Jl(e).active),$o.findProvider),ih=(ns("neutral-fill-focus",(e=>Jl(e).focus),$o.findProvider),ns("neutral-fill-selected",(e=>Jl(e).selected),$o.findProvider),ns("neutral-fill-stealth-rest",(e=>rA(e).rest),$o.findProvider)),rh=ns("neutral-fill-stealth-hover",(e=>rA(e).hover),$o.findProvider),nh=ns("neutral-fill-stealth-active",(e=>rA(e).active),$o.findProvider),sh=(ns("neutral-fill-stealth-focus",(e=>rA(e).focus),$o.findProvider),ns("neutral-fill-stealth-selected",(e=>rA(e).selected),$o.findProvider),ns("neutral-fill-toggle-rest",(e=>vl(e).rest),$o.findProvider),ns("neutral-fill-toggle-hover",(e=>vl(e).hover),$o.findProvider),ns("neutral-fill-toggle-active",(e=>vl(e).active),$o.findProvider),ns("neutral-fill-toggle-focus",(e=>vl(e).focus),$o.findProvider),ns("neutral-fill-input-rest",(e=>gA(e).rest),$o.findProvider),ns("neutral-fill-input-hover",(e=>gA(e).hover),$o.findProvider),ns("neutral-fill-input-active",(e=>gA(e).active),$o.findProvider),ns("neutral-fill-input-selected",(e=>gA(e).selected),$o.findProvider),ns("neutral-fill-input-focus",(e=>gA(e).focus),$o.findProvider),ns("accent-fill-rest",(e=>mA(e).rest),$o.findProvider)),oh=ns("accent-fill-hover",(e=>mA(e).hover),$o.findProvider),lh=ns("accent-fill-active",(e=>mA(e).active),$o.findProvider),Ah=(ns("accent-fill-focus",(e=>mA(e).focus),$o.findProvider),ns("accent-fill-selected",(e=>mA(e).selected),$o.findProvider),ns("accent-fill-large-rest",(e=>EA(e).rest),$o.findProvider),ns("accent-fill-large-hover",(e=>EA(e).hover),$o.findProvider),ns("accent-fill-large-active",(e=>EA(e).active),$o.findProvider),ns("accent-fill-large-focus",(e=>EA(e).focus),$o.findProvider),ns("accent-fill-large-selected",(e=>EA(e).selected),$o.findProvider),ns("neutral-fill-card-rest",(e=>{return"function"==typeof(t=e)?e=>yA(Object.assign({},e,{backgroundColor:t(e)})):yA(t);var t}),$o.findProvider),ns("neutral-outline-rest",(e=>TA(e).rest),$o.findProvider),ns("neutral-outline-hover",(e=>TA(e).hover),$o.findProvider),ns("neutral-outline-active",(e=>TA(e).active),$o.findProvider),ns("neutral-outline-focus",(e=>TA(e).focus),$o.findProvider),ns("neutral-divider-rest",IA,$o.findProvider)),hh=ns("neutral-layer-floating",BA,$o.findProvider),gh=(ns("neutral-layer-card",RA,$o.findProvider),ns("neutral-layer-card-container",zA,$o.findProvider),ns("neutral-layer-l1",QA,$o.findProvider),ns("neutral-layer-l1-alt",jA,$o.findProvider),ns("neutral-layer-l2",LA,$o.findProvider)),uh=ns("neutral-layer-l3",FA,$o.findProvider),ch=(ns("neutral-layer-l4",YA,$o.findProvider),ns("neutral-focus",GA,$o.findProvider)),dh=ns("neutral-focus-inner-accent",(ph=Cs,Yo(GA)(xs)(function(e){return(t,a,i)=>a.indexOf(e(i))}(ph))((function(e,t,a){return Qo(a)?1:-1}))(VA)),$o.findProvider);var ph;ns("neutral-contrast-foreground-rest",(e=>Ho(KA)(e)),$o.findProvider),ns("neutral-contrast-fill-rest",(e=>WA(e).rest),$o.findProvider),ns("neutral-contrast-fill-hover",(e=>WA(e).hover),$o.findProvider),ns("neutral-contrast-fill-active",(e=>WA(e).active),$o.findProvider),ns("neutral-contrast-fill-focus",(e=>WA(e).focus),$o.findProvider);const Mh=Ve`
    ${Zo("inline-flex")} :host {
        font-family: var(--body-font);
        outline: none;
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        height: calc(${Nl} * 1px);
        min-width: calc(${Nl} * 1px);
        background-color: ${eh.var};
        color: ${HA.var};
        border-radius: calc(var(--corner-radius) * 1px);
        fill: currentcolor;
        cursor: pointer;
    }

    .control {
        background: transparent;
        height: inherit;
        flex-grow: 1;
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0 calc((10 + (var(--design-unit) * 2 * var(--density))) * 1px);
        white-space: nowrap;
        outline: none;
        text-decoration: none;
        border: calc(var(--outline-width) * 1px) solid transparent;
        color: inherit;
        border-radius: inherit;
        fill: inherit;
        cursor: inherit;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    :host(:hover) {
        background-color: ${th.var};
    }

    :host(:active) {
        background-color: ${ah.var};
    }

    .control:${kl} {
        border: calc(var(--outline-width) * 1px) solid ${ch.var};
        box-shadow: 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px) ${ch.var};
    }

    .control::-moz-focus-inner {
        border: 0;
    }

    :host([disabled]) {
        opacity: var(--disabled-opacity);
        background-color: ${eh.var};
        cursor: ${fl};
    }

    .start,
    .end {
        display: flex;
    }

    .control.icon-only {
        padding: 0;
        line-height: 0;
    }

    ::slotted(svg) {
        ${""} width: 16px;
        height: 16px;
    }

    .start {
        margin-inline-end: 11px;
    }

    .end {
        margin-inline-start: 11px;
    }
`.withBehaviors(eh,HA,th,ah,os(Ve`
            :host .control {
              background-color: ${Is.ButtonFace};
              border-color: ${Is.ButtonText};
              color: ${Is.ButtonText};
              fill: currentColor;
            }
    
            :host(:hover) .control {
              forced-color-adjust: none;
              background-color: ${Is.Highlight};
              color: ${Is.HighlightText};
            }
    
            .control:${kl} {
              forced-color-adjust: none;
              background-color: ${Is.Highlight};
              border-color: ${Is.ButtonText};
              box-shadow: 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px) ${Is.ButtonText};
              color: ${Is.HighlightText};
            }
    
            .control:hover,
            :host([appearance="outline"]) .control:hover {
              border-color: ${Is.ButtonText};
            }
    
            :host([disabled]),
            :host([disabled]) .control {
                forced-color-adjust: none;
                background-color: ${Is.ButtonFace};
                border-color: ${Is.GrayText};
                color: ${Is.GrayText};
                cursor: ${fl};
                opacity: 1;
            }
    
            :host([href]) .control {
                border-color: ${Is.LinkText};
                color: ${Is.LinkText};
            }
    
            :host([href]) .control:hover,
            :host([href]) .control:${kl}{
              forced-color-adjust: none;
              background: ${Is.ButtonFace};
              border-color: ${Is.LinkText};
              box-shadow: 0 0 0 1px ${Is.LinkText} inset;
              color: ${Is.LinkText};
              fill: currentColor;
            }
        `)),mh=Ve`
    :host([appearance="accent"]) {
        background: ${sh.var};
        color: ${$A.var};
    }

    :host([appearance="accent"]:hover) {
        background: ${oh.var};
    }

    :host([appearance="accent"]:active) .control:active {
        background: ${lh.var};
    }

    :host([appearance="accent"]) .control:${kl} {
        box-shadow: 0 0 0 calc(var(--focus-outline-width) * 1px) inset ${dh.var};
    }

    :host([appearance="accent"][disabled]) {
        background: ${sh.var};
    }
`.withBehaviors(sh,$A,oh,lh,dh,os(Ve`
            :host([appearance="accent"]) .control {
                forced-color-adjust: none;
                background: ${Is.Highlight};
                color: ${Is.HighlightText};
            }

            :host([appearance="accent"]) .control:hover {
                background: ${Is.HighlightText};
                border-color: ${Is.Highlight};
                color: ${Is.Highlight};
            }

            :host([appearance="accent"]) .control:${kl} {
                border-color: ${Is.ButtonText};
                box-shadow: 0 0 0 2px ${Is.HighlightText} inset;
            }

            :host([appearance="accent"][disabled]) .control,
            :host([appearance="accent"][disabled]) .control:hover {
                background: ${Is.ButtonFace};
                border-color: ${Is.GrayText};
                color: ${Is.GrayText};
            }

            :host([appearance="accent"][href]) .control{
                background: ${Is.LinkText};
                color: ${Is.HighlightText};
            }

            :host([appearance="accent"][href]) .control:hover {
                background: ${Is.ButtonFace};
                border-color: ${Is.LinkText};
                box-shadow: none;
                color: ${Is.LinkText};
                fill: currentColor;
            }

            :host([appearance="accent"][href]) .control:${kl} {
                border-color: ${Is.LinkText};
                box-shadow: 0 0 0 2px ${Is.HighlightText} inset;
            }
        `)),Eh=(Ve`
    :host([appearance="hypertext"]) {
        font-size: inherit;
        line-height: inherit;
        height: auto;
        min-width: 0;
        background: transparent;
    }

    :host([appearance="hypertext"]) .control {
        display: inline;
        padding: 0;
        border: none;
        box-shadow: none;
        border-radius: 0;
        line-height: 1;
    }

    :host a.control:not(:link) {
        background-color: transparent;
        cursor: default;
    }
    :host([appearance="hypertext"]) .control:link,
    :host([appearance="hypertext"]) .control:visited {
        background: transparent;
        color: ${JA.var};
        border-bottom: calc(var(--outline-width) * 1px) solid ${JA.var};
    }

    :host([appearance="hypertext"]) .control:hover {
        border-bottom-color: ${XA.var};
    }

    :host([appearance="hypertext"]) .control:active {
        border-bottom-color: ${qA.var};
    }

    :host([appearance="hypertext"]) .control:${kl} {
        border-bottom: calc(var(--focus-outline-width) * 1px) solid ${ch.var};
        margin-bottom: calc(calc(var(--outline-width) - var(--focus-outline-width)) * 1px);
    }
`.withBehaviors(JA,XA,qA,ch,os(Ve`
            :host([appearance="hypertext"]:hover) {
                background-color: ${Is.ButtonFace};
                color: ${Is.ButtonText};
            }
            :host([appearance="hypertext"][href]) .control:hover,
            :host([appearance="hypertext"][href]) .control:active,
            :host([appearance="hypertext"][href]) .control:${kl} {
                color: ${Is.LinkText};
                border-bottom-color: ${Is.LinkText};
                box-shadow: none;
            }
        `)),Ve`
    :host([appearance="lightweight"]) {
        background: transparent;
        color: ${JA.var};
    }

    :host([appearance="lightweight"]) .control {
        padding: 0;
        height: initial;
        border: none;
        box-shadow: none;
        border-radius: 0;
    }

    :host([appearance="lightweight"]:hover) {
        color: ${XA.var};
    }

    :host([appearance="lightweight"]:active) {
        color: ${qA.var};
    }

    :host([appearance="lightweight"]) .content {
        position: relative;
    }

    :host([appearance="lightweight"]) .content::before {
        content: "";
        display: block;
        height: calc(var(--outline-width) * 1px);
        position: absolute;
        top: calc(1em + 4px);
        width: 100%;
    }

    :host([appearance="lightweight"]:hover) .content::before {
        background: ${XA.var};
    }

    :host([appearance="lightweight"]:active) .content::before {
        background: ${qA.var};
    }

    :host([appearance="lightweight"]) .control:${kl} .content::before {
        background: ${HA.var};
        height: calc(var(--focus-outline-width) * 1px);
    }

    :host([appearance="lightweight"][disabled]) .content::before {
        background: transparent;
    }
`.withBehaviors(JA,XA,qA,XA,HA,os(Ve`
            :host([appearance="lightweight"]) .control:hover,
            :host([appearance="lightweight"]) .control:${kl} {
                forced-color-adjust: none;
                background: ${Is.ButtonFace};
                color: ${Is.Highlight};
            }
            :host([appearance="lightweight"]) .control:hover .content::before,
            :host([appearance="lightweight"]) .control:${kl} .content::before {
                background: ${Is.Highlight};
            }

            :host([appearance="lightweight"].disabled) .control {
                forced-color-adjust: none;
                color: ${Is.GrayText};
            }

            :host([appearance="lightweight"].disabled) .control:hover .content::before {
                background: none;
            }

            :host([appearance="lightweight"][href]) .control:hover,
            :host([appearance="lightweight"][href]) .control:${kl} {
                background: ${Is.ButtonFace};
                box-shadow: none;
                color: ${Is.LinkText};
            }

            :host([appearance="lightweight"][href]) .control:hover .content::before,
            :host([appearance="lightweight"][href]) .control:${kl} .content::before {
                background: ${Is.LinkText};
            }
        `))),yh=Ve`
    :host([appearance="outline"]) {
        background: transparent;
        border-color: ${sh.var};
    }

    :host([appearance="outline"]:hover) {
        border-color: ${oh.var};
    }

    :host([appearance="outline"]:active) {
        border-color: ${lh.var};
    }

    :host([appearance="outline"]) .control {
        border-color: inherit;
    }

    :host([appearance="outline"]) .control:${kl} {
        box-shadow: 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px) ${ch.var};
        border-color: ${ch.var};
    }

    :host([appearance="outline"][disabled]) {
        border-color: ${sh.var};
    }
`.withBehaviors(sh,oh,lh,ch,os(Ve`
            :host([appearance="outline"]) .control {
                border-color: ${Is.ButtonText};
            }
            :host([appearance="outline"]) .control:${kl} {
              forced-color-adjust: none;
              background-color: ${Is.Highlight};
              border-color: ${Is.ButtonText};
              box-shadow: 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px) ${Is.ButtonText};
              color: ${Is.HighlightText};
              fill: currentColor;
            }
            :host([appearance="outline"][href]) .control {
                background: ${Is.ButtonFace};
                border-color: ${Is.LinkText};
                color: ${Is.LinkText};
                fill: currentColor;
            }
            :host([appearance="outline"][href]) .control:hover,
            :host([appearance="outline"][href]) .control:${kl} {
              forced-color-adjust: none;
              border-color: ${Is.LinkText};
              box-shadow: 0 0 0 1px ${Is.LinkText} inset;
            }
            :host([appearance="outline"][disabled]) .control {
                border-color: ${Is.GrayText};
            }
        `)),Th=Ve`
    :host([appearance="stealth"]) {
        background: ${ih.var};
    }

    :host([appearance="stealth"]:hover) {
        background: ${rh.var};
    }

    :host([appearance="stealth"]:active) {
        background: ${nh.var};
    }

    :host([appearance="stealth"][disabled]) {
        background: ${ih.var};
    }
`.withBehaviors(ih,rh,nh,os(Ve`
            :host([appearance="stealth"]),
            :host([appearance="stealth"]) .control {
                forced-color-adjust: none;
                background: ${Is.ButtonFace};
                border-color: transparent;
                color: ${Is.ButtonText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:hover) .control {
                background: ${Is.Highlight};
                border-color: ${Is.Highlight};
                color: ${Is.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:${kl}) .control {
                background: ${Is.Highlight};
                box-shadow: 0 0 0 1px ${Is.Highlight};
                color: ${Is.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"].disabled) {
                background: ${Is.ButtonFace};
            }

            :host([appearance="stealth"].disabled) .control {
                background: ${Is.ButtonFace};
                border-color: transparent;
                color: ${Is.GrayText};
            }

            :host([appearance="stealth"][href]) .control {
                color: ${Is.LinkText};
            }

            :host([appearance="stealth"][href]:hover) .control,
            :host([appearance="stealth"][href]:${kl}) .control {
                background: ${Is.LinkText};
                border-color: ${Is.LinkText};
                color: ${Is.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]:${kl}) .control {
                forced-color-adjust: none;
                box-shadow: 0 0 0 1px ${Is.LinkText};
            }
        `));class Ih{constructor(e,t,a){this.propertyName=e,this.value=t,this.styles=a}bind(e){C.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){C.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,t){e[t]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}function Dh(e,t){return new Ih("appearance",e,t)}const kh=Ve`
    ${Mh}
`.withBehaviors(Dh("accent",mh),Dh("lightweight",Eh),Dh("outline",yh),Dh("stealth",Th));let fh=class extends Ml{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(e,t){const a=this.defaultSlottedContent.filter((e=>e.nodeType===Node.ELEMENT_NODE));1===a.length&&a[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}};i([W],fh.prototype,"appearance",void 0),fh=i([ie({name:"fast-button",template:Tl,styles:kh,shadowOptions:{delegatesFocus:!0}})],fh);const Nh=function(e,t,a){for(var i=-1,r=Object(e),n=a(e),s=n.length;s--;){var o=n[++i];if(!1===t(r[o],o,r))break}return e},Sh=function(e,t,a,i){return function(e,t){e&&Nh(e,t,Ni)}(e,(function(e,r,n){t(i,a(e),r,n)})),i};var Ch=Object.prototype.toString;const vh=(xh=function(e,t,a){null!=t&&"function"!=typeof t.toString&&(t=Ch.call(t)),e[t]=a},_h=function(e){return e},wh=function(){return _h},function(e,t){return Sh(e,xh,wh(t),{})});var xh,wh,_h,Uh;!function(e){e.menuitem="menuitem",e.menuitemcheckbox="menuitemcheckbox",e.menuitemradio="menuitemradio"}(Uh||(Uh={}));class bh extends ae{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>null!==this.parentElement&&Il(this.parentElement)&&"menuitem"===this.parentElement.getAttribute("role"),this.handleFocusOut=e=>{if(!this.contains(e.relatedTarget)){this.collapseExpandedItem();const e=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[e].setAttribute("tabindex","0"),this.focusIndex=e}},this.handleItemFocus=e=>{this.menuItems[this.focusIndex].setAttribute("tabindex","-1");const t=e.target;this.focusIndex=this.menuItems.indexOf(t),t.setAttribute("tabindex","0")},this.handleExpandedChanged=e=>{if(e.defaultPrevented||null===e.target||this.menuItems.indexOf(e.target)<0)return;e.preventDefault();const t=e.target;null===this.expandedItem||t!==this.expandedItem||!1!==t.expanded?t.expanded&&(null!==this.expandedItem&&this.expandedItem!==t&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=t,this.focusIndex=this.menuItems.indexOf(t),t.setAttribute("tabindex","0")):this.expandedItem=null},this.setItems=()=>{const e=this.menuItems.filter(this.isMenuItemElement);e.length&&(this.focusIndex=0),e.forEach(((e,t)=>{e.setAttribute("tabindex",0===t?"0":"-1"),e.addEventListener("expanded-change",this.handleExpandedChanged),e.addEventListener("focus",this.handleItemFocus)}))},this.resetItems=e=>{e.forEach((e=>{e.removeEventListener("expanded-change",this.handleExpandedChanged),e.removeEventListener("focus",this.handleItemFocus)}))},this.changeHandler=e=>{const t=e.target,a=this.menuItems.indexOf(t);if(-1!==a&&"menuitemradio"===t.role&&!0===t.checked){for(let e=a-1;e>=0;--e){const t=this.menuItems[e],a=t.getAttribute("role");if(a===Uh.menuitemradio&&(t.checked=!1),"separator"===a)break}const e=this.menuItems.length-1;for(let t=a+1;t<=e;++t){const e=this.menuItems[t],a=e.getAttribute("role");if(a===Uh.menuitemradio&&(e.checked=!1),"separator"===a)break}}},this.isMenuItemElement=e=>Il(e)&&bh.focusableElementRoles.hasOwnProperty(e.getAttribute("role")),this.isFocusableElement=e=>this.isMenuItemElement(e)}itemsChanged(e,t){this.$fastController.isConnected&&(this.menuItems=this.domChildren(),this.resetItems(e),this.setItems())}connectedCallback(){super.connectedCallback(),this.menuItems=this.domChildren(),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.menuItems=[],this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){null!==this.expandedItem&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(e){if(!e.defaultPrevented)switch(e.keyCode){case 40:return void this.setFocus(this.focusIndex+1,1);case 38:return void this.setFocus(this.focusIndex-1,-1);case 35:return void this.setFocus(this.menuItems.length-1,-1);case 36:return void this.setFocus(0,1);default:return!0}}domChildren(){return Array.from(this.children)}setFocus(e,t){if(void 0!==this.menuItems)for(;dA(e,this.menuItems.length);){const a=this.menuItems[e];if(this.isFocusableElement(a)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=e,a.setAttribute("tabindex","0"),a.focus();break}e+=t}}}bh.focusableElementRoles=vh(Uh),i([w],bh.prototype,"items",void 0);const Oh=Le`
    <template
        slot="${e=>e.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(e,t)=>e.handleMenuKeyDown(t.event)}"
        @focusout="${(e,t)=>e.handleFocusOut(t.event)}"
    >
        <slot ${yl("items")}></slot>
    </template>
`,Ph=Ve`
    ${Zo("block")} :host {
        --elevation: 11;
        background: ${hh.var};
        border: calc(var(--outline-width) * 1px) solid transparent;
        ${"box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))));"}
        margin: 0;
        border-radius: calc(var(--corner-radius) * 1px);
        padding: calc(var(--design-unit) * 1px) 0;
        max-width: 368px;
        min-width: 64px;
    }

    :host([slot="submenu"]) {
        width: max-content;
        margin: 0 calc(var(--design-unit) * 1px);
    }

    ::slotted(hr) {
        box-sizing: content-box;
        height: 0;
        margin: 0;
        border: none;
        border-top: calc(var(--outline-width) * 1px) solid var(--neutral-divider-rest);
    }
`.withBehaviors(hh,Ah,os(Ve`
            :host {
                background: ${Is.Canvas};
                border-color: ${Is.CanvasText};
            }
        `));let Bh=class extends bh{};function Rh(e){return Le`
    <template
        role="${e=>e.role}"
        aria-haspopup="${e=>e.hasSubmenu?"menu":void 0}"
        aria-checked="${e=>e.role!==Uh.menuitem?e.checked:void 0}"
        aria-disabled="${e=>e.disabled}"
        aria-expanded="${e=>e.expanded}"
        @keydown="${(e,t)=>e.handleMenuItemKeyDown(t.event)}"
        @click="${(e,t)=>e.handleMenuItemClick(t.event)}"
        @mouseover="${(e,t)=>e.handleMouseOver(t.event)}"
        @mouseout="${(e,t)=>e.handleMouseOut(t.event)}"
        class="${e=>e.disabled?"disabled":""} ${e=>e.expanded?"expanded":""}"
    >

            ${Un((e=>e.role===Uh.menuitemcheckbox),Le`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                <svg
                                    aria-hidden="true"
                                    part="checkbox-indicator"
                                    class="checkbox-indicator"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"
                                    />
                                </svg>
                            </slot>
                        </span>
                    </div>
                `)}
            ${Un((e=>e.role===Uh.menuitemradio),Le`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                <span
                                    part="radio-indicator"
                                    class="radio-indicator"
                                ></span>
                            </slot>
                        </span>
                    </div>
                `)}
            ${Un((e=>e.hasSubmenu),Le`
                    <div
                        part="expand-collapse-glyph-container"
                        class="expand-collapse-glyph-container"
                    >
                        <span part="expand-collapse" class="expand-collapse">
                            <slot name="expand-collapse-indicator">
                                <svg
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="expand-collapse-glyph"
                                    part="expand-collapse-glyph"
                                >
                                    <path
                                        d="M5.00001 12.3263C5.00124 12.5147 5.05566 12.699 5.15699 12.8578C5.25831 13.0167 5.40243 13.1437 5.57273 13.2242C5.74304 13.3047 5.9326 13.3354 6.11959 13.3128C6.30659 13.2902 6.4834 13.2152 6.62967 13.0965L10.8988 8.83532C11.0739 8.69473 11.2153 8.51658 11.3124 8.31402C11.4096 8.11146 11.46 7.88966 11.46 7.66499C11.46 7.44033 11.4096 7.21853 11.3124 7.01597C11.2153 6.81341 11.0739 6.63526 10.8988 6.49467L6.62967 2.22347C6.48274 2.10422 6.30501 2.02912 6.11712 2.00691C5.92923 1.9847 5.73889 2.01628 5.56823 2.09799C5.39757 2.17969 5.25358 2.30817 5.153 2.46849C5.05241 2.62882 4.99936 2.8144 5.00001 3.00369V12.3263Z"
                                    />
                                </svg>
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${Al}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${ll}
        ${Un((e=>e.expanded),Le`
                <${e}-anchored-region
                    :anchorElement="${e=>e}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${e=>e.currentDirection}"
                    @loaded="${e=>e.submenuLoaded()}"
                    ${sl("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${e}-anchored-region>
            `)}
    </template>
`}Bh=i([ie({name:"fast-menu",template:Oh,styles:Ph})],Bh),Rh("fast");class zh extends ae{constructor(){super(...arguments),this.role=Uh.menuitem,this.hasSubmenu=!1,this.currentDirection=Ds.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=e=>{if(e.defaultPrevented)return!1;switch(e.keyCode){case 13:case 32:return this.invoke(),!1;case 39:return this.expandAndFocus(),!1;case 37:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=e=>(e.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=e=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=e=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case Uh.menuitemcheckbox:this.checked=!this.checked,this.$emit("change");break;case Uh.menuitem:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case Uh.menuitemradio:this.checked||(this.checked=!0)}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find((e=>"menu"===e.getAttribute("role"))),this.hasSubmenu=void 0!==this.submenu}}expandedChanged(e){if(this.$fastController.isConnected){if(void 0===this.submenu)return;!1===this.expanded?this.submenu.collapseExpandedItem():this.currentDirection=(e=>{const t=this.closest("[dir]");return null!==t&&"rtl"===t.dir?Ds.rtl:Ds.ltr})(),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(e,t){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),d.queueUpdate((()=>{this.updateSubmenu()})),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,void 0!==this.observer&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children)}}i([W({mode:"boolean"})],zh.prototype,"disabled",void 0),i([W({attribute:"expanded"})],zh.prototype,"expanded",void 0),i([W],zh.prototype,"role",void 0),i([W],zh.prototype,"checked",void 0),i([w],zh.prototype,"submenuRegion",void 0),i([w],zh.prototype,"hasSubmenu",void 0),i([w],zh.prototype,"currentDirection",void 0),i([w],zh.prototype,"submenu",void 0),hl(zh,ol);class Qh{constructor(e,t,a){this.ltr=e,this.rtl=t,this.source=a,this.attached=null}handleChange(e){this.attach(e.direction)}attach(e){this.attached!==this[e]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}const jh=Ve`
    ${Zo("grid")} :host {
        contain: layout;
        overflow: visible;
        font-family: var(--body-font);
        outline: none;
        box-sizing: border-box;
        height: calc(${Nl} * 1px);
        grid-template-columns: minmax(42px, auto) 1fr minmax(42px, auto);
        grid-template-rows: auto;
        justify-items: center;
        align-items: center;
        padding: 0;
        margin: 0 calc(var(--design-unit) * 1px);
        white-space: nowrap;
        color: ${HA.var};
        fill: currentcolor;
        cursor: pointer;
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        border-radius: calc(var(--corner-radius) * 1px);
        border: calc(var(--focus-outline-width) * 1px) solid transparent;
    }

    :host(:${kl}) {
        border-color: ${ch.var};
        background: ${uh.var};
        color: ${HA.var};
    }

    :host(:hover) {
        background: ${uh.var};
        color: ${ZA.var};
    }

    :host([aria-checked="true"]),
    :host(:active),
    :host(.expanded) {
        background: ${gh.var};
        color: ${HA.var};
    }

    :host([disabled]) {
        cursor: ${fl};
        opacity: var(--disabled-opacity);
    }

    :host([disabled]:hover) {
        color: ${HA.var};
        fill: currentcolor;
        background: ${ih.var}
    }

    :host([disabled]:hover) .start,
    :host([disabled]:hover) .end,
    :host([disabled]:hover)::slotted(svg) {
        fill: ${HA.var};
    }

    .expand-collapse-glyph {
        ${""} width: 16px;
        height: 16px;
        transition: transform 0.1s linear;
        fill: currentcolor;
    }

    .content {
        grid-column-start: 2;
        justify-self: start;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .start,
    .end {
        display: flex;
        justify-content: center;
    }
    
    ::slotted(svg) {
        ${""} width: 16px;
        height: 16px;
    }

    :host(:hover) .start,
    :host(:hover) .end,
    :host(:hover)::slotted(svg),
    :host(:active) .start,
    :host(:active) .end,
    :host(:active)::slotted(svg) {
        fill: ${HA.var};
    }

    :host([aria-haspopup="menu"]),
    :host([role="menuitemcheckbox"]),
    :host([role="menuitemradio"]) {
        display: grid;
        grid-template-columns: auto auto 1fr minmax(42px, auto);
        align-items: center;
        min-height: 32px;
    }

    :host .input-container,
    :host .expand-collapse-glyph-container {
        display: none;
    }

    :host([aria-haspopup="menu"]) .expand-collapse-glyph-container,
    :host([role="menuitemcheckbox"]) .input-container,
    :host([role="menuitemradio"]) .input-container {
        display: grid;
        margin-inline-end: 10px;
    }

    :host([aria-haspopup="menu"]) .start,
    :host([role="menuitemcheckbox"]) .start,
    :host([role="menuitemradio"]) .start {
        grid-column-start: 2;
        margin-inline-end: 10px;
    }

    :host([aria-haspopup="menu"]) .content,
    :host([role="menuitemcheckbox"]) .content,
    :host([role="menuitemradio"]) .content {
        grid-column-start: 3;
    }

    :host([aria-haspopup="menu"]) .end,
    :host([role="menuitemcheckbox"]) .end,
    :host([role="menuitemradio"]) .end {
        grid-column-start: 4;
    }

    :host .expand-collapse,
    :host .checkbox,
    :host .radio {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 20px;
        height: 20px;
        box-sizing: border-box;
        outline: none;
        margin-inline-start: 10px;
    }

    :host .checkbox,
    :host .radio {
        border: calc(var(--outline-width) * 1px) solid ${HA.var};
    }

    :host([aria-checked="true"]) .checkbox,
    :host([aria-checked="true"]) .radio {
        background: ${sh.var};
        border-color: ${sh.var};
    }

    :host .checkbox {
        border-radius: calc(var(--corner-radius) * 1px);
    }

    :host .radio {
        border-radius: 999px;
    }

    :host .checkbox-indicator,
    :host .radio-indicator,
    :host .expand-collapse-indicator,
    ::slotted([slot="checkbox-indicator"]),
    ::slotted([slot="radio-indicator"]),
    ::slotted([slot="expand-collapse-indicator"]) {
        display: none;
    }

    :host([aria-checked="true"]) .checkbox-indicator,
    :host([aria-checked="true"]) ::slotted([slot="checkbox-indicator"]) {
        width: 100%;
        height: 100%;
        display: block;
        fill: ${HA.var};
        pointer-events: none;
    }

    :host([aria-checked="true"]) .radio-indicator {
        position: absolute;
        top: 4px;
        left: 4px;
        right: 4px;
        bottom: 4px;
        border-radius: 999px;
        display: block;
        background: ${HA.var};
        pointer-events: none;
    }

    :host([aria-checked="true"]) ::slotted([slot="radio-indicator"]) {
        display: block;
        pointer-events: none;
    }
`.withBehaviors(sh,ih,ch,ZA,HA,gh,uh,os(Ve`
            :host {
                border-color: transparent;
                color: ${Is.ButtonText};
                forced-color-adjust: none;
            }

            :host(:hover) {
                background: ${Is.Highlight};
                color: ${Is.HighlightText};
            }

            :host(:hover) .start,
            :host(:hover) .end,
            :host(:hover)::slotted(svg),
            :host(:active) .start,
            :host(:active) .end,
            :host(:active)::slotted(svg) {
                fill: ${Is.HighlightText};
            }

            :host(.expanded) {
                background: ${Is.Highlight};
                border-color: ${Is.Highlight};
                color: ${Is.HighlightText};
            }

            :host(:${kl}) {
                background: ${Is.Highlight};
                border-color: ${Is.ButtonText};
                box-shadow: 0 0 0 calc(var(--focus-outline-width) * 1px) inset ${Is.HighlightText};
                color: ${Is.HighlightText};
                fill: currentcolor;
            }

            :host([disabled]),
            :host([disabled]:hover),
            :host([disabled]:hover) .start,
            :host([disabled]:hover) .end,
            :host([disabled]:hover)::slotted(svg) {
                background: ${Is.Canvas};
                color: ${Is.GrayText};
                fill: currentcolor;
                opacity: 1;
            }

            :host .expanded-toggle,
            :host .checkbox,
            :host .radio{
                border-color: ${Is.ButtonText};
                background: ${Is.HighlightText};
            }

            :host([checked="true"]) .checkbox,
            :host([checked="true"]) .radio {
                background: ${Is.HighlightText};
                border-color: ${Is.HighlightText};
            }

            :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${kl}) .expanded-toggle,
            :host(:${kl}) .checkbox,
            :host(:${kl}) .radio,
            :host([checked="true"]:hover) .checkbox,
            :host([checked="true"]:hover) .radio,
            :host([checked="true"]:${kl}) .checkbox,
            :host([checked="true"]:${kl}) .radio {
                border-color: ${Is.HighlightText};
            }

            :host([aria-checked="true"]) {
                background: ${Is.Highlight};
                color: ${Is.HighlightText};
            }

            :host([aria-checked="true"]) .checkbox-indicator,
            :host([aria-checked="true"]) ::slotted([slot="checkbox-indicator"]),
            :host([aria-checked="true"]) ::slotted([slot="radio-indicator"]) {
                fill: ${Is.Highlight};
            }

            :host([aria-checked="true"]) .radio-indicator {
                background: ${Is.Highlight};
            }
        `),new class{constructor(e,t){this.cache=new WeakMap,this.ltr=e,this.rtl=t}bind(e){const t=Ms.findProvider(e);null!==t&&(t.$fastController&&t.$fastController.isConnected?this.attach(e,t):(Array.isArray(t.disconnectedRegistry)||(t.disconnectedRegistry=[]),t.disconnectedRegistry.push(this.attach.bind(this,e))))}unbind(e){const t=this.cache.get(e);t&&C.getNotifier(t[0].designSystem).unsubscribe(t[1])}attach(e,t){const a=new Qh(this.ltr,this.rtl,e);C.getNotifier(t.designSystem).subscribe(a,"direction"),a.attach(t.designSystem.direction),this.cache.set(e,[t,a])}}(Ve`
            .expand-collapse-glyph {
                transform: rotate(0deg);
            }
            :host([expanded="true"]) .expand-collapse-glyph {
                transform: rotate(45deg);
            }
        `,Ve`
            .expand-collapse-glyph {
                transform: rotate(180deg);
            }
            :host([expanded="true"]) .expand-collapse-glyph {
                transform: rotate(135deg);
            }
        `)),Lh=Rh("fast");let Fh=class extends zh{};Fh=i([ie({name:"fast-menu-item",template:Lh,styles:jh})],Fh)})(),__webpack_exports__})()}));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var video_analyzer_widgets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! video-analyzer-widgets */ "./node_modules/video-analyzer-widgets/dist/ava-widgets.min.js");
/* harmony import */ var video_analyzer_widgets__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(video_analyzer_widgets__WEBPACK_IMPORTED_MODULE_0__);

video_analyzer_widgets__WEBPACK_IMPORTED_MODULE_0__.Player;
var avaPlayer = document.querySelector("ava-player");
avaPlayer.configure({
    token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFzemVmSnlHSWlTSGNWcWQ4Q041WVNGaGptOCIsIng1dCI6IjFzemVmSnlHSWlTSGNWcWQ4Q041WVNGaGptOCIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MTk2MzgyNzIsImV4cCI6MTY1MTE3NDI2OSwiaWF0IjoxNjE5NjM4MjcyLCJpc3MiOiJTYW1wbGVUb2tlblByb3ZpZGVyIiwiYXVkIjoidGVzdCJ9.gznXMKIqxoxH_I9Nf-JWwiwJ926joeJfysbVcUvEveJWDhSNCuods0ELUvjReQgKr150Pe1dTZYXYU6NKDM6A1UK3KWQW1vf7iUTmf8FfKgMyUvQq_BzlCfV79WRy4XK2vY49wIIw3XdxiXbJhoMiHaezt678-Fn7mzoG6aR1d_P8rIqGDinAY1-9ryvB4Aoq8mC7MP9ZHnDZ4Q_8dLEYmnuOK4R21kOHFkLa6D8wxAdrKPrRt7CtktlKiE-8WVhJKjIFW92PHIaYEx4I14L5D0AiCLfH4DFEsVVlST7vOLuNxcgRx_t0aw10EGmntHqW-UHOlCa8xuB4t25c_imvg",
    accountId: "B43E0A43-33FF-4959-9B5F-6C213B8626F2",
    longRegionCode: "mint1",
    videoName: "sample-CVR-with-motion",
});
avaPlayer.load();

})();

/******/ })()
;