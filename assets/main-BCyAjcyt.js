(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gc="165",cs={ROTATE:0,DOLLY:1,PAN:2},hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lp=0,Oc=1,cp=2,Gu=1,hp=2,$i=3,Mn=0,Ze=1,Me=2,Ki=0,Js=1,qe=2,zc=3,Bc=4,dp=5,Wn=100,up=101,fp=102,pp=103,mp=104,gp=200,vp=201,yp=202,xp=203,$l=204,Zl=205,Mp=206,_p=207,bp=208,Sp=209,wp=210,Ap=211,Ep=212,Tp=213,Cp=214,Rp=0,Pp=1,Dp=2,ho=3,Ip=4,Np=5,Lp=6,Fp=7,Hu=0,Up=1,kp=2,yn=0,Xu=1,Wu=2,Yu=3,$u=4,Op=5,Zu=6,qu=7,ju=300,nr=301,sr=302,ql=303,jl=304,Ro=306,Kl=1e3,$n=1001,Jl=1002,$e=1003,zp=1004,ha=1005,Si=1006,zo=1007,Zn=1008,_n=1009,Bp=1010,Vp=1011,uo=1012,Ku=1013,rr=1014,qi=1015,Fi=1016,Ju=1017,Qu=1018,ar=1020,Gp=35902,Hp=1021,Xp=1022,Li=1023,Wp=1024,Yp=1025,Qs=1026,or=1027,tf=1028,ef=1029,$p=1030,nf=1031,sf=1033,Bo=33776,Vo=33777,Go=33778,Ho=33779,Vc=35840,Gc=35841,Hc=35842,Xc=35843,Wc=36196,Yc=37492,$c=37496,Zc=37808,qc=37809,jc=37810,Kc=37811,Jc=37812,Qc=37813,th=37814,eh=37815,ih=37816,nh=37817,sh=37818,rh=37819,ah=37820,oh=37821,Xo=36492,lh=36494,ch=36495,Zp=36283,hh=36284,dh=36285,uh=36286,qp=3200,jp=3201,rf=0,Kp=1,dn="",Pi="srgb",bn="srgb-linear",vc="display-p3",Po="display-p3-linear",fo="linear",ne="srgb",po="rec709",mo="p3",ds=7680,fh=519,Jp=512,Qp=513,tm=514,af=515,em=516,im=517,nm=518,sm=519,ph=35044,$t=35048,mh="300 es",ji=2e3,go=2001;class ss{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gh=1234567;const $r=Math.PI/180,ra=180/Math.PI;function fr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pe[r&255]+Pe[r>>8&255]+Pe[r>>16&255]+Pe[r>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]).toLowerCase()}function Le(r,t,e){return Math.max(t,Math.min(e,r))}function yc(r,t){return(r%t+t)%t}function rm(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function am(r,t,e){return r!==t?(e-r)/(t-r):0}function Zr(r,t,e){return(1-e)*r+e*t}function om(r,t,e,i){return Zr(r,t,1-Math.exp(-e*i))}function lm(r,t=1){return t-Math.abs(yc(r,t*2)-t)}function cm(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function hm(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function dm(r,t){return r+Math.floor(Math.random()*(t-r+1))}function um(r,t){return r+Math.random()*(t-r)}function fm(r){return r*(.5-Math.random())}function pm(r){r!==void 0&&(gh=r);let t=gh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mm(r){return r*$r}function gm(r){return r*ra}function vm(r){return(r&r-1)===0&&r!==0}function ym(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function xm(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Mm(r,t,e,i,n){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),h=a((t+i)/2),d=s((t-i)/2),u=a((t-i)/2),f=s((i-t)/2),g=a((i-t)/2);switch(n){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Xs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Oe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const wi={DEG2RAD:$r,RAD2DEG:ra,generateUUID:fr,clamp:Le,euclideanModulo:yc,mapLinear:rm,inverseLerp:am,lerp:Zr,damp:om,pingpong:lm,smoothstep:cm,smootherstep:hm,randInt:dm,randFloat:um,randFloatSpread:fm,seededRandom:pm,degToRad:mm,radToDeg:gm,isPowerOfTwo:vm,ceilPowerOfTwo:ym,floorPowerOfTwo:xm,setQuaternionFromProperEuler:Mm,normalize:Oe,denormalize:Xs};class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,i,n,s,a,o,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c)}set(t,e,i,n,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],y=n[0],v=n[3],p=n[6],M=n[1],m=n[4],x=n[7],T=n[2],_=n[5],S=n[8];return s[0]=a*y+o*M+l*T,s[3]=a*v+o*m+l*_,s[6]=a*p+o*x+l*S,s[1]=c*y+h*M+d*T,s[4]=c*v+h*m+d*_,s[7]=c*p+h*x+d*S,s[2]=u*y+f*M+g*T,s[5]=u*v+f*m+g*_,s[8]=u*p+f*x+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,g=e*d+i*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return t[0]=d*y,t[1]=(n*c-h*i)*y,t[2]=(o*i-n*a)*y,t[3]=u*y,t[4]=(h*e-n*l)*y,t[5]=(n*s-o*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Wo.makeScale(t,e)),this}rotate(t){return this.premultiply(Wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wo=new Ht;function of(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function vo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function _m(){const r=vo("canvas");return r.style.display="block",r}const vh={};function lf(r){r in vh||(vh[r]=!0,console.warn(r))}function bm(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const yh=new Ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xh=new Ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),da={[bn]:{transfer:fo,primaries:po,toReference:r=>r,fromReference:r=>r},[Pi]:{transfer:ne,primaries:po,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Po]:{transfer:fo,primaries:mo,toReference:r=>r.applyMatrix3(xh),fromReference:r=>r.applyMatrix3(yh)},[vc]:{transfer:ne,primaries:mo,toReference:r=>r.convertSRGBToLinear().applyMatrix3(xh),fromReference:r=>r.applyMatrix3(yh).convertLinearToSRGB()}},Sm=new Set([bn,Po]),Kt={enabled:!0,_workingColorSpace:bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Sm.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const i=da[t].toReference,n=da[e].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return da[r].primaries},getTransfer:function(r){return r===dn?fo:da[r].transfer}};function tr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Yo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let us;class wm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{us===void 0&&(us=vo("canvas")),us.width=t.width,us.height=t.height;const i=us.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=us}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=tr(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(tr(e[i]/255)*255):e[i]=tr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Am=0;class cf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=fr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push($o(n[a].image)):s.push($o(n[a]))}else s=$o(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function $o(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Em=0;class Ve extends ss{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,i=$n,n=$n,s=Si,a=Zn,o=Li,l=_n,c=Ve.DEFAULT_ANISOTROPY,h=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=fr(),this.name="",this.source=new cf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ju)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kl:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case Jl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kl:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case Jl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=ju;Ve.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,i=0,n=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],v=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-v)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+v)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const m=(c+1)/2,x=(f+1)/2,T=(p+1)/2,_=(h+u)/4,S=(d+y)/4,A=(g+v)/4;return m>x&&m>T?m<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(m),n=_/i,s=S/i):x>T?x<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(x),i=_/n,s=A/n):T<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(T),i=S/s,n=A/s),this.set(i,n,s,e),this}let M=Math.sqrt((v-g)*(v-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(v-g)/M,this.y=(d-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tm extends ss{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ve(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new cf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends Tm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class hf extends Ve{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=$e,this.minFilter=$e,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cm extends Ve{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=$e,this.minFilter=$e,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class je{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3];const u=s[a+0],f=s[a+1],g=s[a+2],y=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=y;return}if(d!==y||l!==u||c!==f||h!==g){let v=1-o;const p=l*u+c*f+h*g+d*y,M=p>=0?1:-1,m=1-p*p;if(m>Number.EPSILON){const T=Math.sqrt(m),_=Math.atan2(T,p*M);v=Math.sin(v*_)/T,o=Math.sin(o*_)/T}const x=o*M;if(l=l*v+u*x,c=c*v+f*x,h=h*v+g*x,d=d*v+y*x,v===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[a],u=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(s/2),u=l(i/2),f=l(n/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,i=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-s*n),d=2*(s*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=n+l*d+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Zo.copy(this).projectOnVector(t),this.sub(Zo)}reflect(t){return this.sub(Zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zo=new V,Mh=new je;class rs{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,di):di.fromBufferAttribute(s,a),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ua.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ua.copy(i.boundingBox)),ua.applyMatrix4(t.matrixWorld),this.union(ua)}const n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yr),fa.subVectors(this.max,yr),fs.subVectors(t.a,yr),ps.subVectors(t.b,yr),ms.subVectors(t.c,yr),tn.subVectors(ps,fs),en.subVectors(ms,ps),En.subVectors(fs,ms);let e=[0,-tn.z,tn.y,0,-en.z,en.y,0,-En.z,En.y,tn.z,0,-tn.x,en.z,0,-en.x,En.z,0,-En.x,-tn.y,tn.x,0,-en.y,en.x,0,-En.y,En.x,0];return!qo(e,fs,ps,ms,fa)||(e=[1,0,0,0,1,0,0,0,1],!qo(e,fs,ps,ms,fa))?!1:(pa.crossVectors(tn,en),e=[pa.x,pa.y,pa.z],qo(e,fs,ps,ms,fa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Oi=[new V,new V,new V,new V,new V,new V,new V,new V],di=new V,ua=new rs,fs=new V,ps=new V,ms=new V,tn=new V,en=new V,En=new V,yr=new V,fa=new V,pa=new V,Tn=new V;function qo(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Tn.fromArray(r,s);const o=n.x*Math.abs(Tn.x)+n.y*Math.abs(Tn.y)+n.z*Math.abs(Tn.z),l=t.dot(Tn),c=e.dot(Tn),h=i.dot(Tn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Rm=new rs,xr=new V,jo=new V;class as{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Rm.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xr.subVectors(t,this.center);const e=xr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(xr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xr.copy(t.center).add(jo)),this.expandByPoint(xr.copy(t.center).sub(jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new V,Ko=new V,ma=new V,nn=new V,Jo=new V,ga=new V,Qo=new V;class Do{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zi.copy(this.origin).addScaledVector(this.direction,e),zi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ko.copy(t).add(e).multiplyScalar(.5),ma.copy(e).sub(t).normalize(),nn.copy(this.origin).sub(Ko);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ma),o=nn.dot(this.direction),l=-nn.dot(ma),c=nn.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Ko).addScaledVector(ma,u),f}intersectSphere(t,e){zi.subVectors(t.center,this.origin);const i=zi.dot(this.direction),n=zi.dot(zi)-i*i,s=t.radius*t.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,zi)!==null}intersectTriangle(t,e,i,n,s){Jo.subVectors(e,t),ga.subVectors(i,t),Qo.crossVectors(Jo,ga);let a=this.direction.dot(Qo),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;nn.subVectors(this.origin,t);const l=o*this.direction.dot(ga.crossVectors(nn,ga));if(l<0)return null;const c=o*this.direction.dot(Jo.cross(nn));if(c<0||l+c>a)return null;const h=-o*nn.dot(Qo);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,i,n,s,a,o,l,c,h,d,u,f,g,y,v){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c,h,d,u,f,g,y,v)}set(t,e,i,n,s,a,o,l,c,h,d,u,f,g,y,v){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/gs.setFromMatrixColumn(t,0).length(),s=1/gs.setFromMatrixColumn(t,1).length(),a=1/gs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=a*h,f=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-y*d}else if(t.order==="XZY"){const u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pm,t,Dm)}lookAt(t,e,i){const n=this.elements;return ti.subVectors(t,e),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),sn.crossVectors(i,ti),sn.lengthSq()===0&&(Math.abs(i.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),sn.crossVectors(i,ti)),sn.normalize(),va.crossVectors(ti,sn),n[0]=sn.x,n[4]=va.x,n[8]=ti.x,n[1]=sn.y,n[5]=va.y,n[9]=ti.y,n[2]=sn.z,n[6]=va.z,n[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],y=i[6],v=i[10],p=i[14],M=i[3],m=i[7],x=i[11],T=i[15],_=n[0],S=n[4],A=n[8],w=n[12],b=n[1],E=n[5],I=n[9],D=n[13],F=n[2],U=n[6],L=n[10],k=n[14],z=n[3],R=n[7],H=n[11],J=n[15];return s[0]=a*_+o*b+l*F+c*z,s[4]=a*S+o*E+l*U+c*R,s[8]=a*A+o*I+l*L+c*H,s[12]=a*w+o*D+l*k+c*J,s[1]=h*_+d*b+u*F+f*z,s[5]=h*S+d*E+u*U+f*R,s[9]=h*A+d*I+u*L+f*H,s[13]=h*w+d*D+u*k+f*J,s[2]=g*_+y*b+v*F+p*z,s[6]=g*S+y*E+v*U+p*R,s[10]=g*A+y*I+v*L+p*H,s[14]=g*w+y*D+v*k+p*J,s[3]=M*_+m*b+x*F+T*z,s[7]=M*S+m*E+x*U+T*R,s[11]=M*A+m*I+x*L+T*H,s[15]=M*w+m*D+x*k+T*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],y=t[7],v=t[11],p=t[15];return g*(+s*l*d-n*c*d-s*o*u+i*c*u+n*o*f-i*l*f)+y*(+e*l*f-e*c*u+s*a*u-n*a*f+n*c*h-s*l*h)+v*(+e*c*d-e*o*f-s*a*d+i*a*f+s*o*h-i*c*h)+p*(-n*o*h-e*l*d+e*o*u+n*a*d-i*a*u+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],y=t[13],v=t[14],p=t[15],M=d*v*c-y*u*c+y*l*f-o*v*f-d*l*p+o*u*p,m=g*u*c-h*v*c-g*l*f+a*v*f+h*l*p-a*u*p,x=h*y*c-g*d*c+g*o*f-a*y*f-h*o*p+a*d*p,T=g*d*l-h*y*l-g*o*u+a*y*u+h*o*v-a*d*v,_=e*M+i*m+n*x+s*T;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/_;return t[0]=M*S,t[1]=(y*u*s-d*v*s-y*n*f+i*v*f+d*n*p-i*u*p)*S,t[2]=(o*v*s-y*l*s+y*n*c-i*v*c-o*n*p+i*l*p)*S,t[3]=(d*l*s-o*u*s-d*n*c+i*u*c+o*n*f-i*l*f)*S,t[4]=m*S,t[5]=(h*v*s-g*u*s+g*n*f-e*v*f-h*n*p+e*u*p)*S,t[6]=(g*l*s-a*v*s-g*n*c+e*v*c+a*n*p-e*l*p)*S,t[7]=(a*u*s-h*l*s+h*n*c-e*u*c-a*n*f+e*l*f)*S,t[8]=x*S,t[9]=(g*d*s-h*y*s-g*i*f+e*y*f+h*i*p-e*d*p)*S,t[10]=(a*y*s-g*o*s+g*i*c-e*y*c-a*i*p+e*o*p)*S,t[11]=(h*o*s-a*d*s-h*i*c+e*d*c+a*i*f-e*o*f)*S,t[12]=T*S,t[13]=(h*y*n-g*d*n+g*i*u-e*y*u-h*i*v+e*d*v)*S,t[14]=(g*o*n-a*y*n-g*i*l+e*y*l+a*i*v-e*o*v)*S,t[15]=(a*d*n-h*o*n+h*i*l-e*d*l-a*i*u+e*o*u)*S,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,g=s*d,y=a*h,v=a*d,p=o*d,M=l*c,m=l*h,x=l*d,T=i.x,_=i.y,S=i.z;return n[0]=(1-(y+p))*T,n[1]=(f+x)*T,n[2]=(g-m)*T,n[3]=0,n[4]=(f-x)*_,n[5]=(1-(u+p))*_,n[6]=(v+M)*_,n[7]=0,n[8]=(g+m)*S,n[9]=(v-M)*S,n[10]=(1-(u+y))*S,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let s=gs.set(n[0],n[1],n[2]).length();const a=gs.set(n[4],n[5],n[6]).length(),o=gs.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],ui.copy(this);const c=1/s,h=1/a,d=1/o;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=d,ui.elements[9]*=d,ui.elements[10]*=d,e.setFromRotationMatrix(ui),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a,o=ji){const l=this.elements,c=2*s/(e-t),h=2*s/(i-n),d=(e+t)/(e-t),u=(i+n)/(i-n);let f,g;if(o===ji)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===go)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=ji){const l=this.elements,c=1/(e-t),h=1/(i-n),d=1/(a-s),u=(e+t)*c,f=(i+n)*h;let g,y;if(o===ji)g=(a+s)*d,y=-2*d;else if(o===go)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const gs=new V,ui=new te,Pm=new V(0,0,0),Dm=new V(1,1,1),sn=new V,va=new V,ti=new V,_h=new te,bh=new je;class hi{constructor(t=0,e=0,i=0,n=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return _h.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_h,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bh.setFromEuler(this),this.setFromQuaternion(bh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class df{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Im=0;const Sh=new V,vs=new je,Bi=new te,ya=new V,Mr=new V,Nm=new V,Lm=new je,wh=new V(1,0,0),Ah=new V(0,1,0),Eh=new V(0,0,1),Th={type:"added"},Fm={type:"removed"},ys={type:"childadded",child:null},tl={type:"childremoved",child:null};class pe extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new V,e=new hi,i=new je,n=new V(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new te},normalMatrix:{value:new Ht}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new df,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(wh,t)}rotateY(t){return this.rotateOnAxis(Ah,t)}rotateZ(t){return this.rotateOnAxis(Eh,t)}translateOnAxis(t,e){return Sh.copy(t).applyQuaternion(this.quaternion),this.position.add(Sh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wh,t)}translateY(t){return this.translateOnAxis(Ah,t)}translateZ(t){return this.translateOnAxis(Eh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ya.copy(t):ya.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Mr,ya,this.up):Bi.lookAt(ya,Mr,this.up),this.quaternion.setFromRotationMatrix(Bi),n&&(Bi.extractRotation(n.matrixWorld),vs.setFromRotationMatrix(Bi),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Th),ys.child=t,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fm),tl.child=t,this.dispatchEvent(tl),tl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Th),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,Nm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,Lm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++){const o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}pe.DEFAULT_UP=new V(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new V,Vi=new V,el=new V,Gi=new V,xs=new V,Ms=new V,Ch=new V,il=new V,nl=new V,sl=new V;class Ni{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),fi.subVectors(t,e),n.cross(fi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){fi.subVectors(n,e),Vi.subVectors(i,e),el.subVectors(t,e);const a=fi.dot(fi),o=fi.dot(Vi),l=fi.dot(el),c=Vi.dot(Vi),h=Vi.dot(el),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gi.x),l.addScaledVector(a,Gi.y),l.addScaledVector(o,Gi.z),l)}static isFrontFacing(t,e,i,n){return fi.subVectors(i,e),Vi.subVectors(t,e),fi.cross(Vi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),fi.cross(Vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ni.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ni.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return Ni.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return Ni.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ni.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let a,o;xs.subVectors(n,i),Ms.subVectors(s,i),il.subVectors(t,i);const l=xs.dot(il),c=Ms.dot(il);if(l<=0&&c<=0)return e.copy(i);nl.subVectors(t,n);const h=xs.dot(nl),d=Ms.dot(nl);if(h>=0&&d<=h)return e.copy(n);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(xs,a);sl.subVectors(t,s);const f=xs.dot(sl),g=Ms.dot(sl);if(g>=0&&f<=g)return e.copy(s);const y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Ms,o);const v=h*g-f*d;if(v<=0&&d-h>=0&&f-g>=0)return Ch.subVectors(s,n),o=(d-h)/(d-h+(f-g)),e.copy(n).addScaledVector(Ch,o);const p=1/(v+y+u);return a=y*p,o=u*p,e.copy(i).addScaledVector(xs,a).addScaledVector(Ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rn={h:0,s:0,l:0},xa={h:0,s:0,l:0};function rl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Ct{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Kt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Kt.workingColorSpace){if(t=yc(t,1),e=Le(e,0,1),i=Le(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=rl(a,s,t+1/3),this.g=rl(a,s,t),this.b=rl(a,s,t-1/3)}return Kt.toWorkingColorSpace(this,n),this}setStyle(t,e=Pi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pi){const i=uf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}copyLinearToSRGB(t){return this.r=Yo(t.r),this.g=Yo(t.g),this.b=Yo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pi){return Kt.fromWorkingColorSpace(De.copy(this),t),Math.round(Le(De.r*255,0,255))*65536+Math.round(Le(De.g*255,0,255))*256+Math.round(Le(De.b*255,0,255))}getHexString(t=Pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(De.copy(this),e);const i=De.r,n=De.g,s=De.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Pi){Kt.fromWorkingColorSpace(De.copy(this),t);const e=De.r,i=De.g,n=De.b;return t!==Pi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(rn),this.setHSL(rn.h+t,rn.s+e,rn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(rn),t.getHSL(xa);const i=Zr(rn.h,xa.h,e),n=Zr(rn.s,xa.s,e),s=Zr(rn.l,xa.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Ct;Ct.NAMES=uf;let Um=0;class os extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=Js,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$l,this.blendDst=Zl,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==Mn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$l&&(i.blendSrc=this.blendSrc),this.blendDst!==Zl&&(i.blendDst=this.blendDst),this.blendEquation!==Wn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class xc extends os{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new V,Ma=new yt;class xt{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ph,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return lf("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ma.fromBufferAttribute(this,e),Ma.applyMatrix3(t),this.setXY(e,Ma.x,Ma.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Xs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Oe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),n=Oe(n,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ph&&(t.usage=this.usage),t}}class ff extends xt{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class pf extends xt{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Re extends xt{constructor(t,e,i){super(new Float32Array(t),e,i)}}let km=0;const ai=new te,al=new pe,_s=new V,ei=new rs,_r=new rs,Ae=new V;class ie extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(of(t)?pf:ff)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ht().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ai.makeRotationFromQuaternion(t),this.applyMatrix4(ai),this}rotateX(t){return ai.makeRotationX(t),this.applyMatrix4(ai),this}rotateY(t){return ai.makeRotationY(t),this.applyMatrix4(ai),this}rotateZ(t){return ai.makeRotationZ(t),this.applyMatrix4(ai),this}translate(t,e,i){return ai.makeTranslation(t,e,i),this.applyMatrix4(ai),this}scale(t,e,i){return ai.makeScale(t,e,i),this.applyMatrix4(ai),this}lookAt(t){return al.lookAt(t),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const i=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];_r.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(ei.min,_r.min),ei.expandByPoint(Ae),Ae.addVectors(ei.max,_r.max),ei.expandByPoint(Ae)):(ei.expandByPoint(_r.min),ei.expandByPoint(_r.max))}ei.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Ae.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Ae));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ae.fromBufferAttribute(o,c),l&&(_s.fromBufferAttribute(t,c),Ae.add(_s)),n=Math.max(n,i.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<i.count;A++)o[A]=new V,l[A]=new V;const c=new V,h=new V,d=new V,u=new yt,f=new yt,g=new yt,y=new V,v=new V;function p(A,w,b){c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,b),u.fromBufferAttribute(s,A),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,b),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const E=1/(f.x*g.y-g.x*f.y);isFinite(E)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(E),v.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(E),o[A].add(y),o[w].add(y),o[b].add(y),l[A].add(v),l[w].add(v),l[b].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let A=0,w=M.length;A<w;++A){const b=M[A],E=b.start,I=b.count;for(let D=E,F=E+I;D<F;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const m=new V,x=new V,T=new V,_=new V;function S(A){T.fromBufferAttribute(n,A),_.copy(T);const w=o[A];m.copy(w),m.sub(T.multiplyScalar(T.dot(w))).normalize(),x.crossVectors(_,w);const E=x.dot(l[A])<0?-1:1;a.setXYZW(A,m.x,m.y,m.z,E)}for(let A=0,w=M.length;A<w;++A){const b=M[A],E=b.start,I=b.count;for(let D=E,F=E+I;D<F;D+=3)S(t.getX(D+0)),S(t.getX(D+1)),S(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xt(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const n=new V,s=new V,a=new V,o=new V,l=new V,c=new V,h=new V,d=new V;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),y=t.getX(u+1),v=t.getX(u+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,y),a.fromBufferAttribute(e,v),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,v),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let y=0,v=l.length;y<v;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new xt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ie,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rh=new te,Cn=new Do,_a=new as,Ph=new V,bs=new V,Ss=new V,ws=new V,ol=new V,ba=new V,Sa=new yt,wa=new yt,Aa=new yt,Dh=new V,Ih=new V,Nh=new V,Ea=new V,Ta=new V;class _e extends pe{constructor(t=new ie,e=new xc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(s&&o){ba.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(ol.fromBufferAttribute(d,t),a?ba.addScaledVector(ol,h):ba.addScaledVector(ol.sub(e),h))}e.add(ba)}return e}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(s),Cn.copy(t.ray).recast(t.near),!(_a.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(_a,Ph)===null||Cn.origin.distanceToSquared(Ph)>(t.far-t.near)**2))&&(Rh.copy(s).invert(),Cn.copy(t.ray).applyMatrix4(Rh),!(i.boundingBox!==null&&Cn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Cn)))}_computeIntersections(t,e,i){let n;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const v=u[g],p=a[v.materialIndex],M=Math.max(v.start,f.start),m=Math.min(o.count,Math.min(v.start+v.count,f.start+f.count));for(let x=M,T=m;x<T;x+=3){const _=o.getX(x),S=o.getX(x+1),A=o.getX(x+2);n=Ca(this,p,t,i,c,h,d,_,S,A),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=v.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let v=g,p=y;v<p;v+=3){const M=o.getX(v),m=o.getX(v+1),x=o.getX(v+2);n=Ca(this,a,t,i,c,h,d,M,m,x),n&&(n.faceIndex=Math.floor(v/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const v=u[g],p=a[v.materialIndex],M=Math.max(v.start,f.start),m=Math.min(l.count,Math.min(v.start+v.count,f.start+f.count));for(let x=M,T=m;x<T;x+=3){const _=x,S=x+1,A=x+2;n=Ca(this,p,t,i,c,h,d,_,S,A),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=v.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let v=g,p=y;v<p;v+=3){const M=v,m=v+1,x=v+2;n=Ca(this,a,t,i,c,h,d,M,m,x),n&&(n.faceIndex=Math.floor(v/3),e.push(n))}}}}function Om(r,t,e,i,n,s,a,o){let l;if(t.side===Ze?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===Mn,o),l===null)return null;Ta.copy(o),Ta.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ta);return c<e.near||c>e.far?null:{distance:c,point:Ta.clone(),object:r}}function Ca(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,bs),r.getVertexPosition(l,Ss),r.getVertexPosition(c,ws);const h=Om(r,t,e,i,bs,Ss,ws,Ea);if(h){n&&(Sa.fromBufferAttribute(n,o),wa.fromBufferAttribute(n,l),Aa.fromBufferAttribute(n,c),h.uv=Ni.getInterpolation(Ea,bs,Ss,ws,Sa,wa,Aa,new yt)),s&&(Sa.fromBufferAttribute(s,o),wa.fromBufferAttribute(s,l),Aa.fromBufferAttribute(s,c),h.uv1=Ni.getInterpolation(Ea,bs,Ss,ws,Sa,wa,Aa,new yt)),a&&(Dh.fromBufferAttribute(a,o),Ih.fromBufferAttribute(a,l),Nh.fromBufferAttribute(a,c),h.normal=Ni.getInterpolation(Ea,bs,Ss,ws,Dh,Ih,Nh,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new V,materialIndex:0};Ni.getNormal(bs,Ss,ws,d.normal),h.face=d}return h}class pr extends ie{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(d,2));function g(y,v,p,M,m,x,T,_,S,A,w){const b=x/S,E=T/A,I=x/2,D=T/2,F=_/2,U=S+1,L=A+1;let k=0,z=0;const R=new V;for(let H=0;H<L;H++){const J=H*E-D;for(let et=0;et<U;et++){const nt=et*b-I;R[y]=nt*M,R[v]=J*m,R[p]=F,c.push(R.x,R.y,R.z),R[y]=0,R[v]=0,R[p]=_>0?1:-1,h.push(R.x,R.y,R.z),d.push(et/S),d.push(1-H/A),k+=1}}for(let H=0;H<A;H++)for(let J=0;J<S;J++){const et=u+J+U*H,nt=u+J+U*(H+1),W=u+(J+1)+U*(H+1),G=u+(J+1)+U*H;l.push(et,nt,G),l.push(nt,W,G),z+=6}o.addGroup(f,z,w),f+=z,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function lr(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Be(r){const t={};for(let e=0;e<r.length;e++){const i=lr(r[e]);for(const n in i)t[n]=i[n]}return t}function zm(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function mf(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const aa={clone:lr,merge:Be};var Bm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class se extends os{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bm,this.fragmentShader=Vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lr(t.uniforms),this.uniformsGroups=zm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class gf extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=ji}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const an=new V,Lh=new yt,Fh=new yt;class Fe extends gf{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ra*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ra*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){an.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(an.x,an.y).multiplyScalar(-t/an.z),an.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(an.x,an.y).multiplyScalar(-t/an.z)}getViewSize(t,e){return this.getViewBounds(t,Lh,Fh),e.subVectors(Fh,Lh)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($r*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const As=-90,Es=1;class Gm extends pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Fe(As,Es,t,e);n.layers=this.layers,this.add(n);const s=new Fe(As,Es,t,e);s.layers=this.layers,this.add(s);const a=new Fe(As,Es,t,e);a.layers=this.layers,this.add(a);const o=new Fe(As,Es,t,e);o.layers=this.layers,this.add(o);const l=new Fe(As,Es,t,e);l.layers=this.layers,this.add(l);const c=new Fe(As,Es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===ji)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===go)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class vf extends Ve{constructor(t,e,i,n,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:nr,super(t,e,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hm extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new vf(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Si}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new pr(5,5,5),s=new se({name:"CubemapFromEquirect",uniforms:lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ze,blending:Ki});s.uniforms.tEquirect.value=e;const a=new _e(n,s),o=e.minFilter;return e.minFilter===Zn&&(e.minFilter=Si),new Gm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}}const ll=new V,Xm=new V,Wm=new Ht;class hn{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=ll.subVectors(i,e).cross(Xm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ll),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Wm.getNormalMatrix(t),n=this.coplanarPoint(ll).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rn=new as,Ra=new V;class Mc{constructor(t=new hn,e=new hn,i=new hn,n=new hn,s=new hn,a=new hn){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ji){const i=this.planes,n=t.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],d=n[6],u=n[7],f=n[8],g=n[9],y=n[10],v=n[11],p=n[12],M=n[13],m=n[14],x=n[15];if(i[0].setComponents(l-s,u-c,v-f,x-p).normalize(),i[1].setComponents(l+s,u+c,v+f,x+p).normalize(),i[2].setComponents(l+a,u+h,v+g,x+M).normalize(),i[3].setComponents(l-a,u-h,v-g,x-M).normalize(),i[4].setComponents(l-o,u-d,v-y,x-m).normalize(),e===ji)i[5].setComponents(l+o,u+d,v+y,x+m).normalize();else if(e===go)i[5].setComponents(o,d,y,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(t){return Rn.center.set(0,0,0),Rn.radius=.7071067811865476,Rn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Ra.x=n.normal.x>0?t.max.x:t.min.x,Ra.y=n.normal.y>0?t.max.y:t.min.y,Ra.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yf(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Ym(r){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l._updateRange,u=l.updateRanges;if(r.bindBuffer(c,o),d.count===-1&&u.length===0&&r.bufferSubData(c,0,h),u.length!==0){for(let f=0,g=u.length;f<g;f++){const y=u[f];r.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}d.count!==-1&&(r.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}class Io extends ie{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],y=[],v=[];for(let p=0;p<h;p++){const M=p*u-a;for(let m=0;m<c;m++){const x=m*d-s;g.push(x,-M,0),y.push(0,0,1),v.push(m/o),v.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const m=M+c*p,x=M+c*(p+1),T=M+1+c*(p+1),_=M+1+c*p;f.push(m,x,_),f.push(x,T,_)}this.setIndex(f),this.setAttribute("position",new Re(g,3)),this.setAttribute("normal",new Re(y,3)),this.setAttribute("uv",new Re(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.width,t.height,t.widthSegments,t.heightSegments)}}var $m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Km=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eg=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ig=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ag=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,og=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,gg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sg="gl_FragColor = linearToOutputTexel( gl_FragColor );",wg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ag=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ig=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ng=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Og=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$g=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,i0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,c0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,d0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,g0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,b0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,P0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,D0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,I0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,L0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,U0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,B0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,V0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,W0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Q0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,tv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ev=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,av=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ov=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_v=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Av=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:$m,alphahash_pars_fragment:Zm,alphamap_fragment:qm,alphamap_pars_fragment:jm,alphatest_fragment:Km,alphatest_pars_fragment:Jm,aomap_fragment:Qm,aomap_pars_fragment:tg,batching_pars_vertex:eg,batching_vertex:ig,begin_vertex:ng,beginnormal_vertex:sg,bsdfs:rg,iridescence_fragment:ag,bumpmap_pars_fragment:og,clipping_planes_fragment:lg,clipping_planes_pars_fragment:cg,clipping_planes_pars_vertex:hg,clipping_planes_vertex:dg,color_fragment:ug,color_pars_fragment:fg,color_pars_vertex:pg,color_vertex:mg,common:gg,cube_uv_reflection_fragment:vg,defaultnormal_vertex:yg,displacementmap_pars_vertex:xg,displacementmap_vertex:Mg,emissivemap_fragment:_g,emissivemap_pars_fragment:bg,colorspace_fragment:Sg,colorspace_pars_fragment:wg,envmap_fragment:Ag,envmap_common_pars_fragment:Eg,envmap_pars_fragment:Tg,envmap_pars_vertex:Cg,envmap_physical_pars_fragment:zg,envmap_vertex:Rg,fog_vertex:Pg,fog_pars_vertex:Dg,fog_fragment:Ig,fog_pars_fragment:Ng,gradientmap_pars_fragment:Lg,lightmap_pars_fragment:Fg,lights_lambert_fragment:Ug,lights_lambert_pars_fragment:kg,lights_pars_begin:Og,lights_toon_fragment:Bg,lights_toon_pars_fragment:Vg,lights_phong_fragment:Gg,lights_phong_pars_fragment:Hg,lights_physical_fragment:Xg,lights_physical_pars_fragment:Wg,lights_fragment_begin:Yg,lights_fragment_maps:$g,lights_fragment_end:Zg,logdepthbuf_fragment:qg,logdepthbuf_pars_fragment:jg,logdepthbuf_pars_vertex:Kg,logdepthbuf_vertex:Jg,map_fragment:Qg,map_pars_fragment:t0,map_particle_fragment:e0,map_particle_pars_fragment:i0,metalnessmap_fragment:n0,metalnessmap_pars_fragment:s0,morphinstance_vertex:r0,morphcolor_vertex:a0,morphnormal_vertex:o0,morphtarget_pars_vertex:l0,morphtarget_vertex:c0,normal_fragment_begin:h0,normal_fragment_maps:d0,normal_pars_fragment:u0,normal_pars_vertex:f0,normal_vertex:p0,normalmap_pars_fragment:m0,clearcoat_normal_fragment_begin:g0,clearcoat_normal_fragment_maps:v0,clearcoat_pars_fragment:y0,iridescence_pars_fragment:x0,opaque_fragment:M0,packing:_0,premultiplied_alpha_fragment:b0,project_vertex:S0,dithering_fragment:w0,dithering_pars_fragment:A0,roughnessmap_fragment:E0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:C0,shadowmap_pars_vertex:R0,shadowmap_vertex:P0,shadowmask_pars_fragment:D0,skinbase_vertex:I0,skinning_pars_vertex:N0,skinning_vertex:L0,skinnormal_vertex:F0,specularmap_fragment:U0,specularmap_pars_fragment:k0,tonemapping_fragment:O0,tonemapping_pars_fragment:z0,transmission_fragment:B0,transmission_pars_fragment:V0,uv_pars_fragment:G0,uv_pars_vertex:H0,uv_vertex:X0,worldpos_vertex:W0,background_vert:Y0,background_frag:$0,backgroundCube_vert:Z0,backgroundCube_frag:q0,cube_vert:j0,cube_frag:K0,depth_vert:J0,depth_frag:Q0,distanceRGBA_vert:tv,distanceRGBA_frag:ev,equirect_vert:iv,equirect_frag:nv,linedashed_vert:sv,linedashed_frag:rv,meshbasic_vert:av,meshbasic_frag:ov,meshlambert_vert:lv,meshlambert_frag:cv,meshmatcap_vert:hv,meshmatcap_frag:dv,meshnormal_vert:uv,meshnormal_frag:fv,meshphong_vert:pv,meshphong_frag:mv,meshphysical_vert:gv,meshphysical_frag:vv,meshtoon_vert:yv,meshtoon_frag:xv,points_vert:Mv,points_frag:_v,shadow_vert:bv,shadow_frag:Sv,sprite_vert:wv,sprite_frag:Av},ut={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Di={basic:{uniforms:Be([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Be([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Be([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Be([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Be([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Be([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Be([ut.points,ut.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Be([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Be([ut.common,ut.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Be([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Be([ut.sprite,ut.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Be([ut.common,ut.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Be([ut.lights,ut.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Di.physical={uniforms:Be([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Pa={r:0,b:0,g:0},Pn=new hi,Ev=new te;function Tv(r,t,e,i,n,s,a){const o=new Ct(0);let l=s===!0?0:1,c,h,d=null,u=0,f=null;function g(M){let m=M.isScene===!0?M.background:null;return m&&m.isTexture&&(m=(M.backgroundBlurriness>0?e:t).get(m)),m}function y(M){let m=!1;const x=g(M);x===null?p(o,l):x&&x.isColor&&(p(x,1),m=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||m)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(M,m){const x=g(m);x&&(x.isCubeTexture||x.mapping===Ro)?(h===void 0&&(h=new _e(new pr(1,1,1),new se({name:"BackgroundCubeMaterial",uniforms:lr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,_,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Pn.copy(m.backgroundRotation),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(Pn)),h.material.toneMapped=Kt.getTransfer(x.colorSpace)!==ne,(d!==x||u!==x.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new _e(new Io(2,2),new se({name:"BackgroundMaterial",uniforms:lr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(x.colorSpace)!==ne,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,f=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,m){M.getRGB(Pa,mf(r)),i.buffers.color.setClear(Pa.r,Pa.g,Pa.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(M,m=1){o.set(M),l=m,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:y,addToRenderList:v}}function Cv(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null);let s=n,a=!1;function o(b,E,I,D,F){let U=!1;const L=d(D,I,E);s!==L&&(s=L,c(s.object)),U=f(b,D,I,F),U&&g(b,D,I,F),F!==null&&t.update(F,r.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,x(b,E,I,D),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function h(b){return r.deleteVertexArray(b)}function d(b,E,I){const D=I.wireframe===!0;let F=i[b.id];F===void 0&&(F={},i[b.id]=F);let U=F[E.id];U===void 0&&(U={},F[E.id]=U);let L=U[D];return L===void 0&&(L=u(l()),U[D]=L),L}function u(b){const E=[],I=[],D=[];for(let F=0;F<e;F++)E[F]=0,I[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:I,attributeDivisors:D,object:b,attributes:{},index:null}}function f(b,E,I,D){const F=s.attributes,U=E.attributes;let L=0;const k=I.getAttributes();for(const z in k)if(k[z].location>=0){const H=F[z];let J=U[z];if(J===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(J=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(J=b.instanceColor)),H===void 0||H.attribute!==J||J&&H.data!==J.data)return!0;L++}return s.attributesNum!==L||s.index!==D}function g(b,E,I,D){const F={},U=E.attributes;let L=0;const k=I.getAttributes();for(const z in k)if(k[z].location>=0){let H=U[z];H===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(H=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(H=b.instanceColor));const J={};J.attribute=H,H&&H.data&&(J.data=H.data),F[z]=J,L++}s.attributes=F,s.attributesNum=L,s.index=D}function y(){const b=s.newAttributes;for(let E=0,I=b.length;E<I;E++)b[E]=0}function v(b){p(b,0)}function p(b,E){const I=s.newAttributes,D=s.enabledAttributes,F=s.attributeDivisors;I[b]=1,D[b]===0&&(r.enableVertexAttribArray(b),D[b]=1),F[b]!==E&&(r.vertexAttribDivisor(b,E),F[b]=E)}function M(){const b=s.newAttributes,E=s.enabledAttributes;for(let I=0,D=E.length;I<D;I++)E[I]!==b[I]&&(r.disableVertexAttribArray(I),E[I]=0)}function m(b,E,I,D,F,U,L){L===!0?r.vertexAttribIPointer(b,E,I,F,U):r.vertexAttribPointer(b,E,I,D,F,U)}function x(b,E,I,D){y();const F=D.attributes,U=I.getAttributes(),L=E.defaultAttributeValues;for(const k in U){const z=U[k];if(z.location>=0){let R=F[k];if(R===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(R=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(R=b.instanceColor)),R!==void 0){const H=R.normalized,J=R.itemSize,et=t.get(R);if(et===void 0)continue;const nt=et.buffer,W=et.type,G=et.bytesPerElement,$=W===r.INT||W===r.UNSIGNED_INT||R.gpuType===Ku;if(R.isInterleavedBufferAttribute){const it=R.data,ft=it.stride,mt=R.offset;if(it.isInstancedInterleavedBuffer){for(let _t=0;_t<z.locationSize;_t++)p(z.location+_t,it.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let _t=0;_t<z.locationSize;_t++)v(z.location+_t);r.bindBuffer(r.ARRAY_BUFFER,nt);for(let _t=0;_t<z.locationSize;_t++)m(z.location+_t,J/z.locationSize,W,H,ft*G,(mt+J/z.locationSize*_t)*G,$)}else{if(R.isInstancedBufferAttribute){for(let it=0;it<z.locationSize;it++)p(z.location+it,R.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let it=0;it<z.locationSize;it++)v(z.location+it);r.bindBuffer(r.ARRAY_BUFFER,nt);for(let it=0;it<z.locationSize;it++)m(z.location+it,J/z.locationSize,W,H,J*G,J/z.locationSize*it*G,$)}}else if(L!==void 0){const H=L[k];if(H!==void 0)switch(H.length){case 2:r.vertexAttrib2fv(z.location,H);break;case 3:r.vertexAttrib3fv(z.location,H);break;case 4:r.vertexAttrib4fv(z.location,H);break;default:r.vertexAttrib1fv(z.location,H)}}}}M()}function T(){A();for(const b in i){const E=i[b];for(const I in E){const D=E[I];for(const F in D)h(D[F].object),delete D[F];delete E[I]}delete i[b]}}function _(b){if(i[b.id]===void 0)return;const E=i[b.id];for(const I in E){const D=E[I];for(const F in D)h(D[F].object),delete D[F];delete E[I]}delete i[b.id]}function S(b){for(const E in i){const I=i[E];if(I[b.id]===void 0)continue;const D=I[b.id];for(const F in D)h(D[F].object),delete D[F];delete I[b.id]}}function A(){w(),a=!0,s!==n&&(s=n,c(s.object))}function w(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:A,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:_,releaseStatesOfProgram:S,initAttributes:y,enableAttribute:v,disableUnusedAttributes:M}}function Rv(r,t,e){let i;function n(c){i=c}function s(c,h){r.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,d){d!==0&&(r.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function o(c,h,d){if(d===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let f=0;f<d;f++)this.render(c[f],h[f]);else{u.multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,i,1)}}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y];for(let y=0;y<u.length;y++)e.update(g,i,u[y])}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Pv(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(_){return!(_!==Li&&i.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const S=_===Fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==_n&&i.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&_!==qi&&!S)}function l(_){if(_==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),m=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:p,maxVaryings:M,maxFragmentUniforms:m,vertexTextures:x,maxSamples:T}}function Dv(r){const t=this;let e=null,i=0,n=!1,s=!1;const a=new hn,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,y=d.clipIntersection,v=d.clipShadows,p=r.get(d);if(!n||g===null||g.length===0||s&&!v)s?h(null):c();else{const M=s?0:i,m=M*4;let x=p.clippingState||null;l.value=x,x=h(g,u,m,f);for(let T=0;T!==m;++T)x[T]=e[T];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){const y=d!==null?d.length:0;let v=null;if(y!==0){if(v=l.value,g!==!0||v===null){const p=f+y*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(v===null||v.length<p)&&(v=new Float32Array(p));for(let m=0,x=f;m!==y;++m,x+=4)a.copy(d[m]).applyMatrix4(M,o),a.normal.toArray(v,x),v[x+3]=a.constant}l.value=v,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,v}}function Iv(r){let t=new WeakMap;function e(a,o){return o===ql?a.mapping=nr:o===jl&&(a.mapping=sr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ql||o===jl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Hm(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class _c extends gf{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Zs=4,Uh=[.125,.215,.35,.446,.526,.582],Yn=20,cl=new _c,kh=new Ct;let hl=null,dl=0,ul=0,fl=!1;const Gn=(1+Math.sqrt(5))/2,Ts=1/Gn,Oh=[new V(-Gn,Ts,0),new V(Gn,Ts,0),new V(-Ts,0,Gn),new V(Ts,0,Gn),new V(0,Gn,-Ts),new V(0,Gn,Ts),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class zh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){hl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hl,dl,ul),this._renderer.xr.enabled=fl,t.scissorTest=!1,Da(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===nr||t.mapping===sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:Fi,format:Li,colorSpace:bn,depthBuffer:!1},n=Bh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bh(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nv(s)),this._blurMaterial=Lv(s,t,e)}return n}_compileMaterial(t){const e=new _e(this._lodPlanes[0],t);this._renderer.compile(e,cl)}_sceneToCubeUV(t,e,i,n){const o=new Fe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(kh),h.toneMapping=yn,h.autoClear=!1;const f=new xc({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),g=new _e(new pr,f);let y=!1;const v=t.background;v?v.isColor&&(f.color.copy(v),t.background=null,y=!0):(f.color.copy(kh),y=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const m=this._cubeSize;Da(n,M*m,p>2?m:0,m,m),h.setRenderTarget(n),y&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=v}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===nr||t.mapping===sr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vh());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new _e(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Da(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,cl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Oh[(n-s-1)%Oh.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new _e(this._lodPlanes[n],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Yn-1),y=s/g,v=isFinite(s)?1+Math.floor(h*y):Yn;v>Yn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Yn}`);const p=[];let M=0;for(let S=0;S<Yn;++S){const A=S/y,w=Math.exp(-A*A/2);p.push(w),S===0?M+=w:S<v&&(M+=2*w)}for(let S=0;S<p.length;S++)p[S]=p[S]/M;u.envMap.value=t.texture,u.samples.value=v,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:m}=this;u.dTheta.value=g,u.mipInt.value=m-i;const x=this._sizeLods[n],T=3*x*(n>m-Zs?n-m+Zs:0),_=4*(this._cubeSize-x);Da(e,T,_,3*x,2*x),l.setRenderTarget(e),l.render(d,cl)}}function Nv(r){const t=[],e=[],i=[];let n=r;const s=r-Zs+1+Uh.length;for(let a=0;a<s;a++){const o=Math.pow(2,n);e.push(o);let l=1/o;a>r-Zs?l=Uh[a-r+Zs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,y=3,v=2,p=1,M=new Float32Array(y*g*f),m=new Float32Array(v*g*f),x=new Float32Array(p*g*f);for(let _=0;_<f;_++){const S=_%3*2/3-1,A=_>2?0:-1,w=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];M.set(w,y*g*_),m.set(u,v*g*_);const b=[_,_,_,_,_,_];x.set(b,p*g*_)}const T=new ie;T.setAttribute("position",new xt(M,y)),T.setAttribute("uv",new xt(m,v)),T.setAttribute("faceIndex",new xt(x,p)),t.push(T),n>Zs&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Bh(r,t,e){const i=new si(r,t,e);return i.texture.mapping=Ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Da(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function Lv(r,t,e){const i=new Float32Array(Yn),n=new V(0,1,0);return new se({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Vh(){return new se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Gh(){return new se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function bc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fv(r){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ql||l===jl,h=l===nr||l===sr;if(c||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new zh(r)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new zh(r)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Uv(r){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&lf("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function kv(r,t,e,i){const n={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const y=u.morphAttributes[g];for(let v=0,p=y.length;v<p;v++)t.remove(y[v])}u.removeEventListener("dispose",a),delete n[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],r.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const y=f[g];for(let v=0,p=y.length;v<p;v++)t.update(y[v],r.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let y=0;if(f!==null){const M=f.array;y=f.version;for(let m=0,x=M.length;m<x;m+=3){const T=M[m+0],_=M[m+1],S=M[m+2];u.push(T,_,_,S,S,T)}}else if(g!==void 0){const M=g.array;y=g.version;for(let m=0,x=M.length/3-1;m<x;m+=3){const T=m+0,_=m+1,S=m+2;u.push(T,_,_,S,S,T)}}else return;const v=new(of(u)?pf:ff)(u,1);v.version=y;const p=s.get(d);p&&t.remove(p),s.set(d,v)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Ov(r,t,e){let i;function n(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,f){r.drawElements(i,f,s,u*a),e.update(f,i,1)}function c(u,f,g){g!==0&&(r.drawElementsInstanced(i,f,s,u*a,g),e.update(f,i,g))}function h(u,f,g){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<g;v++)this.render(u[v]/a,f[v]);else{y.multiDrawElementsWEBGL(i,f,0,s,u,0,g);let v=0;for(let p=0;p<g;p++)v+=f[p];e.update(v,i,1)}}function d(u,f,g,y){if(g===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],y[p]);else{v.multiDrawElementsInstancedWEBGL(i,f,0,s,u,0,y,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M];for(let M=0;M<y.length;M++)e.update(p,i,y[M])}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function zv(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Bv(r,t,e){const i=new WeakMap,n=new fe;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let w=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,v=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let m=0;f===!0&&(m=1),g===!0&&(m=2),y===!0&&(m=3);let x=o.attributes.position.count*m,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const _=new Float32Array(x*T*4*d),S=new hf(_,x,T,d);S.type=qi,S.needsUpdate=!0;const A=m*4;for(let b=0;b<d;b++){const E=v[b],I=p[b],D=M[b],F=x*T*4*b;for(let U=0;U<E.count;U++){const L=U*A;f===!0&&(n.fromBufferAttribute(E,U),_[F+L+0]=n.x,_[F+L+1]=n.y,_[F+L+2]=n.z,_[F+L+3]=0),g===!0&&(n.fromBufferAttribute(I,U),_[F+L+4]=n.x,_[F+L+5]=n.y,_[F+L+6]=n.z,_[F+L+7]=0),y===!0&&(n.fromBufferAttribute(D,U),_[F+L+8]=n.x,_[F+L+9]=n.y,_[F+L+10]=n.z,_[F+L+11]=D.itemSize===4?n.w:1)}}u={count:d,texture:S,size:new yt(x,T)},i.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Vv(r,t,e,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=t.get(l,h);if(n.get(d)!==c&&(t.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return d}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class xf extends Ve{constructor(t,e,i,n,s,a,o,l,c,h=Qs){if(h!==Qs&&h!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Qs&&(i=rr),i===void 0&&h===or&&(i=ar),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:$e,this.minFilter=l!==void 0?l:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Mf=new Ve,_f=new xf(1,1);_f.compareFunction=af;const bf=new hf,Sf=new Cm,wf=new vf,Hh=[],Xh=[],Wh=new Float32Array(16),Yh=new Float32Array(9),$h=new Float32Array(4);function mr(r,t,e){const i=r[0];if(i<=0||i>0)return r;const n=t*e;let s=Hh[n];if(s===void 0&&(s=new Float32Array(n),Hh[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function be(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Se(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function No(r,t){let e=Xh[t];e===void 0&&(e=new Int32Array(t),Xh[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function Gv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Hv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;r.uniform2fv(this.addr,t),Se(e,t)}}function Xv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;r.uniform3fv(this.addr,t),Se(e,t)}}function Wv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;r.uniform4fv(this.addr,t),Se(e,t)}}function Yv(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(be(e,i))return;$h.set(i),r.uniformMatrix2fv(this.addr,!1,$h),Se(e,i)}}function $v(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(be(e,i))return;Yh.set(i),r.uniformMatrix3fv(this.addr,!1,Yh),Se(e,i)}}function Zv(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(be(e,i))return;Wh.set(i),r.uniformMatrix4fv(this.addr,!1,Wh),Se(e,i)}}function qv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function jv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;r.uniform2iv(this.addr,t),Se(e,t)}}function Kv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;r.uniform3iv(this.addr,t),Se(e,t)}}function Jv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;r.uniform4iv(this.addr,t),Se(e,t)}}function Qv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function ty(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;r.uniform2uiv(this.addr,t),Se(e,t)}}function ey(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;r.uniform3uiv(this.addr,t),Se(e,t)}}function iy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;r.uniform4uiv(this.addr,t),Se(e,t)}}function ny(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);const s=this.type===r.SAMPLER_2D_SHADOW?_f:Mf;e.setTexture2D(t||s,n)}function sy(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Sf,n)}function ry(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||wf,n)}function ay(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||bf,n)}function oy(r){switch(r){case 5126:return Gv;case 35664:return Hv;case 35665:return Xv;case 35666:return Wv;case 35674:return Yv;case 35675:return $v;case 35676:return Zv;case 5124:case 35670:return qv;case 35667:case 35671:return jv;case 35668:case 35672:return Kv;case 35669:case 35673:return Jv;case 5125:return Qv;case 36294:return ty;case 36295:return ey;case 36296:return iy;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return ry;case 36289:case 36303:case 36311:case 36292:return ay}}function ly(r,t){r.uniform1fv(this.addr,t)}function cy(r,t){const e=mr(t,this.size,2);r.uniform2fv(this.addr,e)}function hy(r,t){const e=mr(t,this.size,3);r.uniform3fv(this.addr,e)}function dy(r,t){const e=mr(t,this.size,4);r.uniform4fv(this.addr,e)}function uy(r,t){const e=mr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function fy(r,t){const e=mr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function py(r,t){const e=mr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function my(r,t){r.uniform1iv(this.addr,t)}function gy(r,t){r.uniform2iv(this.addr,t)}function vy(r,t){r.uniform3iv(this.addr,t)}function yy(r,t){r.uniform4iv(this.addr,t)}function xy(r,t){r.uniform1uiv(this.addr,t)}function My(r,t){r.uniform2uiv(this.addr,t)}function _y(r,t){r.uniform3uiv(this.addr,t)}function by(r,t){r.uniform4uiv(this.addr,t)}function Sy(r,t,e){const i=this.cache,n=t.length,s=No(e,n);be(i,s)||(r.uniform1iv(this.addr,s),Se(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||Mf,s[a])}function wy(r,t,e){const i=this.cache,n=t.length,s=No(e,n);be(i,s)||(r.uniform1iv(this.addr,s),Se(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Sf,s[a])}function Ay(r,t,e){const i=this.cache,n=t.length,s=No(e,n);be(i,s)||(r.uniform1iv(this.addr,s),Se(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||wf,s[a])}function Ey(r,t,e){const i=this.cache,n=t.length,s=No(e,n);be(i,s)||(r.uniform1iv(this.addr,s),Se(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||bf,s[a])}function Ty(r){switch(r){case 5126:return ly;case 35664:return cy;case 35665:return hy;case 35666:return dy;case 35674:return uy;case 35675:return fy;case 35676:return py;case 5124:case 35670:return my;case 35667:case 35671:return gy;case 35668:case 35672:return vy;case 35669:case 35673:return yy;case 5125:return xy;case 36294:return My;case 36295:return _y;case 36296:return by;case 35678:case 36198:case 36298:case 36306:case 35682:return Sy;case 35679:case 36299:case 36307:return wy;case 35680:case 36300:case 36308:case 36293:return Ay;case 36289:case 36303:case 36311:case 36292:return Ey}}class Cy{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=oy(e.type)}}class Ry{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ty(e.type)}}class Py{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(t,e[o.id],i)}}}const pl=/(\w+)(\])?(\[|\.)?/g;function Zh(r,t){r.seq.push(t),r.map[t.id]=t}function Dy(r,t,e){const i=r.name,n=i.length;for(pl.lastIndex=0;;){const s=pl.exec(i),a=pl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Zh(e,c===void 0?new Cy(o,r,t):new Ry(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new Py(o),Zh(e,d)),e=d}}}class ao{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);Dy(s,a,this)}}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function qh(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const Iy=37297;let Ny=0;function Ly(r,t){const e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function Fy(r){const t=Kt.getPrimaries(Kt.workingColorSpace),e=Kt.getPrimaries(r);let i;switch(t===e?i="":t===mo&&e===po?i="LinearDisplayP3ToLinearSRGB":t===po&&e===mo&&(i="LinearSRGBToLinearDisplayP3"),r){case bn:case Po:return[i,"LinearTransferOETF"];case Pi:case vc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function jh(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+Ly(r.getShaderSource(t),a)}else return n}function Uy(r,t){const e=Fy(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ky(r,t){let e;switch(t){case Xu:e="Linear";break;case Wu:e="Reinhard";break;case Yu:e="OptimizedCineon";break;case $u:e="ACESFilmic";break;case Zu:e="AgX";break;case qu:e="Neutral";break;case Op:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Oy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function zy(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function By(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(t,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function zr(r){return r!==""}function Kh(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Vy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(r){return r.replace(Vy,Hy)}const Gy=new Map;function Hy(r,t){let e=Gt[t];if(e===void 0){const i=Gy.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ql(e)}const Xy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(r){return r.replace(Xy,Wy)}function Wy(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function td(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Yy(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Gu?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===hp?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===$i&&(t="SHADOWMAP_TYPE_VSM"),t}function $y(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case nr:case sr:t="ENVMAP_TYPE_CUBE";break;case Ro:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zy(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case sr:t="ENVMAP_MODE_REFRACTION";break}return t}function qy(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Hu:t="ENVMAP_BLENDING_MULTIPLY";break;case Up:t="ENVMAP_BLENDING_MIX";break;case kp:t="ENVMAP_BLENDING_ADD";break}return t}function jy(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Ky(r,t,e,i){const n=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Yy(e),c=$y(e),h=Zy(e),d=qy(e),u=jy(e),f=Oy(e),g=zy(s),y=n.createProgram();let v,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zr).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zr).join(`
`),p.length>0&&(p+=`
`)):(v=[td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),p=[td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==yn?ky("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Uy("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zr).join(`
`)),a=Ql(a),a=Kh(a,e),a=Jh(a,e),o=Ql(o),o=Kh(o,e),o=Jh(o,e),a=Qh(a),o=Qh(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",e.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const m=M+v+a,x=M+p+o,T=qh(n,n.VERTEX_SHADER,m),_=qh(n,n.FRAGMENT_SHADER,x);n.attachShader(y,T),n.attachShader(y,_),e.index0AttributeName!==void 0?n.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(y,0,"position"),n.linkProgram(y);function S(E){if(r.debug.checkShaderErrors){const I=n.getProgramInfoLog(y).trim(),D=n.getShaderInfoLog(T).trim(),F=n.getShaderInfoLog(_).trim();let U=!0,L=!0;if(n.getProgramParameter(y,n.LINK_STATUS)===!1)if(U=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,y,T,_);else{const k=jh(n,T,"vertex"),z=jh(n,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(y,n.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+I+`
`+k+`
`+z)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(D===""||F==="")&&(L=!1);L&&(E.diagnostics={runnable:U,programLog:I,vertexShader:{log:D,prefix:v},fragmentShader:{log:F,prefix:p}})}n.deleteShader(T),n.deleteShader(_),A=new ao(n,y),w=By(n,y)}let A;this.getUniforms=function(){return A===void 0&&S(this),A};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=n.getProgramParameter(y,Iy)),b},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ny++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=_,this}let Jy=0;class Qy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new tx(t),e.set(t,i)),i}}class tx{constructor(t){this.id=Jy++,this.code=t,this.usedTimes=0}}function ex(r,t,e,i,n,s,a){const o=new df,l=new Qy,c=new Set,h=[],d=n.logarithmicDepthBuffer,u=n.vertexTextures;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return c.add(w),w===0?"uv":`uv${w}`}function v(w,b,E,I,D){const F=I.fog,U=D.geometry,L=w.isMeshStandardMaterial?I.environment:null,k=(w.isMeshStandardMaterial?e:t).get(w.envMap||L),z=k&&k.mapping===Ro?k.image.height:null,R=g[w.type];w.precision!==null&&(f=n.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const H=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,J=H!==void 0?H.length:0;let et=0;U.morphAttributes.position!==void 0&&(et=1),U.morphAttributes.normal!==void 0&&(et=2),U.morphAttributes.color!==void 0&&(et=3);let nt,W,G,$;if(R){const Zt=Di[R];nt=Zt.vertexShader,W=Zt.fragmentShader}else nt=w.vertexShader,W=w.fragmentShader,l.update(w),G=l.getVertexShaderID(w),$=l.getFragmentShaderID(w);const it=r.getRenderTarget(),ft=D.isInstancedMesh===!0,mt=D.isBatchedMesh===!0,_t=!!w.map,B=!!w.matcap,Rt=!!k,Pt=!!w.aoMap,Xt=!!w.lightMap,St=!!w.bumpMap,Ut=!!w.normalMap,Dt=!!w.displacementMap,It=!!w.emissiveMap,qt=!!w.metalnessMap,O=!!w.roughnessMap,P=w.anisotropy>0,K=w.clearcoat>0,st=w.dispersion>0,rt=w.iridescence>0,ot=w.sheen>0,wt=w.transmission>0,ht=P&&!!w.anisotropyMap,dt=K&&!!w.clearcoatMap,zt=K&&!!w.clearcoatNormalMap,lt=K&&!!w.clearcoatRoughnessMap,bt=rt&&!!w.iridescenceMap,Wt=rt&&!!w.iridescenceThicknessMap,Lt=ot&&!!w.sheenColorMap,pt=ot&&!!w.sheenRoughnessMap,Bt=!!w.specularMap,Vt=!!w.specularColorMap,le=!!w.specularIntensityMap,C=wt&&!!w.transmissionMap,Q=wt&&!!w.thicknessMap,Z=!!w.gradientMap,tt=!!w.alphaMap,at=w.alphaTest>0,Et=!!w.alphaHash,Ot=!!w.extensions;let ce=yn;w.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ce=r.toneMapping);const me={shaderID:R,shaderType:w.type,shaderName:w.name,vertexShader:nt,fragmentShader:W,defines:w.defines,customVertexShaderID:G,customFragmentShaderID:$,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:mt,batchingColor:mt&&D._colorsTexture!==null,instancing:ft,instancingColor:ft&&D.instanceColor!==null,instancingMorph:ft&&D.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:it===null?r.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:bn,alphaToCoverage:!!w.alphaToCoverage,map:_t,matcap:B,envMap:Rt,envMapMode:Rt&&k.mapping,envMapCubeUVHeight:z,aoMap:Pt,lightMap:Xt,bumpMap:St,normalMap:Ut,displacementMap:u&&Dt,emissiveMap:It,normalMapObjectSpace:Ut&&w.normalMapType===Kp,normalMapTangentSpace:Ut&&w.normalMapType===rf,metalnessMap:qt,roughnessMap:O,anisotropy:P,anisotropyMap:ht,clearcoat:K,clearcoatMap:dt,clearcoatNormalMap:zt,clearcoatRoughnessMap:lt,dispersion:st,iridescence:rt,iridescenceMap:bt,iridescenceThicknessMap:Wt,sheen:ot,sheenColorMap:Lt,sheenRoughnessMap:pt,specularMap:Bt,specularColorMap:Vt,specularIntensityMap:le,transmission:wt,transmissionMap:C,thicknessMap:Q,gradientMap:Z,opaque:w.transparent===!1&&w.blending===Js&&w.alphaToCoverage===!1,alphaMap:tt,alphaTest:at,alphaHash:Et,combine:w.combine,mapUv:_t&&y(w.map.channel),aoMapUv:Pt&&y(w.aoMap.channel),lightMapUv:Xt&&y(w.lightMap.channel),bumpMapUv:St&&y(w.bumpMap.channel),normalMapUv:Ut&&y(w.normalMap.channel),displacementMapUv:Dt&&y(w.displacementMap.channel),emissiveMapUv:It&&y(w.emissiveMap.channel),metalnessMapUv:qt&&y(w.metalnessMap.channel),roughnessMapUv:O&&y(w.roughnessMap.channel),anisotropyMapUv:ht&&y(w.anisotropyMap.channel),clearcoatMapUv:dt&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:zt&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:pt&&y(w.sheenRoughnessMap.channel),specularMapUv:Bt&&y(w.specularMap.channel),specularColorMapUv:Vt&&y(w.specularColorMap.channel),specularIntensityMapUv:le&&y(w.specularIntensityMap.channel),transmissionMapUv:C&&y(w.transmissionMap.channel),thicknessMapUv:Q&&y(w.thicknessMap.channel),alphaMapUv:tt&&y(w.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Ut||P),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(_t||tt),fog:!!F,useFog:w.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:et,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&E.length>0,shadowMapType:r.shadowMap.type,toneMapping:ce,decodeVideoTexture:_t&&w.map.isVideoTexture===!0&&Kt.getTransfer(w.map.colorSpace)===ne,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Me,flipSided:w.side===Ze,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ot&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ot&&w.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function p(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const E in w.defines)b.push(E),b.push(w.defines[E]);return w.isRawShaderMaterial===!1&&(M(b,w),m(b,w),b.push(r.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function M(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function m(w,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.doubleSided&&o.enable(10),b.flipSided&&o.enable(11),b.useDepthPacking&&o.enable(12),b.dithering&&o.enable(13),b.transmission&&o.enable(14),b.sheen&&o.enable(15),b.opaque&&o.enable(16),b.pointsUvs&&o.enable(17),b.decodeVideoTexture&&o.enable(18),b.alphaToCoverage&&o.enable(19),w.push(o.mask)}function x(w){const b=g[w.type];let E;if(b){const I=Di[b];E=aa.clone(I.uniforms)}else E=w.uniforms;return E}function T(w,b){let E;for(let I=0,D=h.length;I<D;I++){const F=h[I];if(F.cacheKey===b){E=F,++E.usedTimes;break}}return E===void 0&&(E=new Ky(r,b,w,s),h.push(E)),E}function _(w){if(--w.usedTimes===0){const b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function S(w){l.remove(w)}function A(){l.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:_,releaseShaderCache:S,programs:h,dispose:A}}function ix(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function i(s,a,o){r.get(s)[a]=o}function n(){r=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function nx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ed(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function id(){const r=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(d,u,f,g,y,v){let p=r[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:y,group:v},r[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=v),t++,p}function o(d,u,f,g,y,v){const p=a(d,u,f,g,y,v);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function l(d,u,f,g,y,v){const p=a(d,u,f,g,y,v);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||nx),i.length>1&&i.sort(u||ed),n.length>1&&n.sort(u||ed)}function h(){for(let d=t,u=r.length;d<u;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function sx(){let r=new WeakMap;function t(i,n){const s=r.get(i);let a;return s===void 0?(a=new id,r.set(i,[a])):n>=s.length?(a=new id,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function rx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Ct};break;case"SpotLight":e={position:new V,direction:new V,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new V,halfWidth:new V,halfHeight:new V};break}return r[t.id]=e,e}}}function ax(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let ox=0;function lx(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function cx(r){const t=new rx,e=ax(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const n=new V,s=new te,a=new te;function o(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,y=0,v=0,p=0,M=0,m=0,x=0,T=0,_=0,S=0;c.sort(lx);for(let w=0,b=c.length;w<b;w++){const E=c[w],I=E.color,D=E.intensity,F=E.distance,U=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=I.r*D,d+=I.g*D,u+=I.b*D;else if(E.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(E.sh.coefficients[L],D);S++}else if(E.isDirectionalLight){const L=t.get(E);if(L.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const k=E.shadow,z=e.get(E);z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,i.directionalShadow[f]=z,i.directionalShadowMap[f]=U,i.directionalShadowMatrix[f]=E.shadow.matrix,M++}i.directional[f]=L,f++}else if(E.isSpotLight){const L=t.get(E);L.position.setFromMatrixPosition(E.matrixWorld),L.color.copy(I).multiplyScalar(D),L.distance=F,L.coneCos=Math.cos(E.angle),L.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),L.decay=E.decay,i.spot[y]=L;const k=E.shadow;if(E.map&&(i.spotLightMap[T]=E.map,T++,k.updateMatrices(E),E.castShadow&&_++),i.spotLightMatrix[y]=k.matrix,E.castShadow){const z=e.get(E);z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,i.spotShadow[y]=z,i.spotShadowMap[y]=U,x++}y++}else if(E.isRectAreaLight){const L=t.get(E);L.color.copy(I).multiplyScalar(D),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),i.rectArea[v]=L,v++}else if(E.isPointLight){const L=t.get(E);if(L.color.copy(E.color).multiplyScalar(E.intensity),L.distance=E.distance,L.decay=E.decay,E.castShadow){const k=E.shadow,z=e.get(E);z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,z.shadowCameraNear=k.camera.near,z.shadowCameraFar=k.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=U,i.pointShadowMatrix[g]=E.shadow.matrix,m++}i.point[g]=L,g++}else if(E.isHemisphereLight){const L=t.get(E);L.skyColor.copy(E.color).multiplyScalar(D),L.groundColor.copy(E.groundColor).multiplyScalar(D),i.hemi[p]=L,p++}}v>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const A=i.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==y||A.rectAreaLength!==v||A.hemiLength!==p||A.numDirectionalShadows!==M||A.numPointShadows!==m||A.numSpotShadows!==x||A.numSpotMaps!==T||A.numLightProbes!==S)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=v,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=m,i.pointShadowMap.length=m,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=m,i.spotLightMatrix.length=x+T-_,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=_,i.numLightProbes=S,A.directionalLength=f,A.pointLength=g,A.spotLength=y,A.rectAreaLength=v,A.hemiLength=p,A.numDirectionalShadows=M,A.numPointShadows=m,A.numSpotShadows=x,A.numSpotMaps=T,A.numLightProbes=S,i.version=ox++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0;const v=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const m=c[p];if(m.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(m.matrixWorld),n.setFromMatrixPosition(m.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(v),d++}else if(m.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(m.matrixWorld),x.position.applyMatrix4(v),x.direction.setFromMatrixPosition(m.matrixWorld),n.setFromMatrixPosition(m.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(v),f++}else if(m.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(m.matrixWorld),x.position.applyMatrix4(v),a.identity(),s.copy(m.matrixWorld),s.premultiply(v),a.extractRotation(s),x.halfWidth.set(m.width*.5,0,0),x.halfHeight.set(0,m.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(m.isPointLight){const x=i.point[u];x.position.setFromMatrixPosition(m.matrixWorld),x.position.applyMatrix4(v),u++}else if(m.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(m.matrixWorld),x.direction.transformDirection(v),y++}}}return{setup:o,setupView:l,state:i}}function nd(r){const t=new cx(r),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function hx(r){let t=new WeakMap;function e(n,s=0){const a=t.get(n);let o;return a===void 0?(o=new nd(r),t.set(n,[o])):s>=a.length?(o=new nd(r),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class dx extends os{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ux extends os{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,px=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mx(r,t,e){let i=new Mc;const n=new yt,s=new yt,a=new fe,o=new dx({depthPacking:jp}),l=new ux,c={},h=e.maxTextureSize,d={[Mn]:Ze,[Ze]:Mn,[Me]:Me},u=new se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:fx,fragmentShader:px}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new ie;g.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new _e(g,u),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gu;let p=this.type;this.render=function(_,S,A){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||_.length===0)return;const w=r.getRenderTarget(),b=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Ki),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const D=p!==$i&&this.type===$i,F=p===$i&&this.type!==$i;for(let U=0,L=_.length;U<L;U++){const k=_[U],z=k.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;n.copy(z.mapSize);const R=z.getFrameExtents();if(n.multiply(R),s.copy(z.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/R.x),n.x=s.x*R.x,z.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/R.y),n.y=s.y*R.y,z.mapSize.y=s.y)),z.map===null||D===!0||F===!0){const J=this.type!==$i?{minFilter:$e,magFilter:$e}:{};z.map!==null&&z.map.dispose(),z.map=new si(n.x,n.y,J),z.map.texture.name=k.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const H=z.getViewportCount();for(let J=0;J<H;J++){const et=z.getViewport(J);a.set(s.x*et.x,s.y*et.y,s.x*et.z,s.y*et.w),I.viewport(a),z.updateMatrices(k,J),i=z.getFrustum(),x(S,A,z.camera,k,this.type)}z.isPointLightShadow!==!0&&this.type===$i&&M(z,A),z.needsUpdate=!1}p=this.type,v.needsUpdate=!1,r.setRenderTarget(w,b,E)};function M(_,S){const A=t.update(y);u.defines.VSM_SAMPLES!==_.blurSamples&&(u.defines.VSM_SAMPLES=_.blurSamples,f.defines.VSM_SAMPLES=_.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new si(n.x,n.y)),u.uniforms.shadow_pass.value=_.map.texture,u.uniforms.resolution.value=_.mapSize,u.uniforms.radius.value=_.radius,r.setRenderTarget(_.mapPass),r.clear(),r.renderBufferDirect(S,null,A,u,y,null),f.uniforms.shadow_pass.value=_.mapPass.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,r.setRenderTarget(_.map),r.clear(),r.renderBufferDirect(S,null,A,f,y,null)}function m(_,S,A,w){let b=null;const E=A.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(E!==void 0)b=E;else if(b=A.isPointLight===!0?l:o,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const I=b.uuid,D=S.uuid;let F=c[I];F===void 0&&(F={},c[I]=F);let U=F[D];U===void 0&&(U=b.clone(),F[D]=U,S.addEventListener("dispose",T)),b=U}if(b.visible=S.visible,b.wireframe=S.wireframe,w===$i?b.side=S.shadowSide!==null?S.shadowSide:S.side:b.side=S.shadowSide!==null?S.shadowSide:d[S.side],b.alphaMap=S.alphaMap,b.alphaTest=S.alphaTest,b.map=S.map,b.clipShadows=S.clipShadows,b.clippingPlanes=S.clippingPlanes,b.clipIntersection=S.clipIntersection,b.displacementMap=S.displacementMap,b.displacementScale=S.displacementScale,b.displacementBias=S.displacementBias,b.wireframeLinewidth=S.wireframeLinewidth,b.linewidth=S.linewidth,A.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const I=r.properties.get(b);I.light=A}return b}function x(_,S,A,w,b){if(_.visible===!1)return;if(_.layers.test(S.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&b===$i)&&(!_.frustumCulled||i.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,_.matrixWorld);const D=t.update(_),F=_.material;if(Array.isArray(F)){const U=D.groups;for(let L=0,k=U.length;L<k;L++){const z=U[L],R=F[z.materialIndex];if(R&&R.visible){const H=m(_,R,w,b);_.onBeforeShadow(r,_,S,A,D,H,z),r.renderBufferDirect(A,null,D,H,_,z),_.onAfterShadow(r,_,S,A,D,H,z)}}}else if(F.visible){const U=m(_,F,w,b);_.onBeforeShadow(r,_,S,A,D,U,null),r.renderBufferDirect(A,null,D,U,_,null),_.onAfterShadow(r,_,S,A,D,U,null)}}const I=_.children;for(let D=0,F=I.length;D<F;D++)x(I[D],S,A,w,b)}function T(_){_.target.removeEventListener("dispose",T);for(const A in c){const w=c[A],b=_.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}function gx(r){function t(){let C=!1;const Q=new fe;let Z=null;const tt=new fe(0,0,0,0);return{setMask:function(at){Z!==at&&!C&&(r.colorMask(at,at,at,at),Z=at)},setLocked:function(at){C=at},setClear:function(at,Et,Ot,ce,me){me===!0&&(at*=ce,Et*=ce,Ot*=ce),Q.set(at,Et,Ot,ce),tt.equals(Q)===!1&&(r.clearColor(at,Et,Ot,ce),tt.copy(Q))},reset:function(){C=!1,Z=null,tt.set(-1,0,0,0)}}}function e(){let C=!1,Q=null,Z=null,tt=null;return{setTest:function(at){at?$(r.DEPTH_TEST):it(r.DEPTH_TEST)},setMask:function(at){Q!==at&&!C&&(r.depthMask(at),Q=at)},setFunc:function(at){if(Z!==at){switch(at){case Rp:r.depthFunc(r.NEVER);break;case Pp:r.depthFunc(r.ALWAYS);break;case Dp:r.depthFunc(r.LESS);break;case ho:r.depthFunc(r.LEQUAL);break;case Ip:r.depthFunc(r.EQUAL);break;case Np:r.depthFunc(r.GEQUAL);break;case Lp:r.depthFunc(r.GREATER);break;case Fp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=at}},setLocked:function(at){C=at},setClear:function(at){tt!==at&&(r.clearDepth(at),tt=at)},reset:function(){C=!1,Q=null,Z=null,tt=null}}}function i(){let C=!1,Q=null,Z=null,tt=null,at=null,Et=null,Ot=null,ce=null,me=null;return{setTest:function(Zt){C||(Zt?$(r.STENCIL_TEST):it(r.STENCIL_TEST))},setMask:function(Zt){Q!==Zt&&!C&&(r.stencilMask(Zt),Q=Zt)},setFunc:function(Zt,ge,ve){(Z!==Zt||tt!==ge||at!==ve)&&(r.stencilFunc(Zt,ge,ve),Z=Zt,tt=ge,at=ve)},setOp:function(Zt,ge,ve){(Et!==Zt||Ot!==ge||ce!==ve)&&(r.stencilOp(Zt,ge,ve),Et=Zt,Ot=ge,ce=ve)},setLocked:function(Zt){C=Zt},setClear:function(Zt){me!==Zt&&(r.clearStencil(Zt),me=Zt)},reset:function(){C=!1,Q=null,Z=null,tt=null,at=null,Et=null,Ot=null,ce=null,me=null}}}const n=new t,s=new e,a=new i,o=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,u=[],f=null,g=!1,y=null,v=null,p=null,M=null,m=null,x=null,T=null,_=new Ct(0,0,0),S=0,A=!1,w=null,b=null,E=null,I=null,D=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,L=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(k)[1]),U=L>=1):k.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),U=L>=2);let z=null,R={};const H=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),et=new fe().fromArray(H),nt=new fe().fromArray(J);function W(C,Q,Z,tt){const at=new Uint8Array(4),Et=r.createTexture();r.bindTexture(C,Et),r.texParameteri(C,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(C,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ot=0;Ot<Z;Ot++)C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY?r.texImage3D(Q,0,r.RGBA,1,1,tt,0,r.RGBA,r.UNSIGNED_BYTE,at):r.texImage2D(Q+Ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,at);return Et}const G={};G[r.TEXTURE_2D]=W(r.TEXTURE_2D,r.TEXTURE_2D,1),G[r.TEXTURE_CUBE_MAP]=W(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[r.TEXTURE_2D_ARRAY]=W(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),G[r.TEXTURE_3D]=W(r.TEXTURE_3D,r.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),a.setClear(0),$(r.DEPTH_TEST),s.setFunc(ho),St(!1),Ut(Oc),$(r.CULL_FACE),Pt(Ki);function $(C){c[C]!==!0&&(r.enable(C),c[C]=!0)}function it(C){c[C]!==!1&&(r.disable(C),c[C]=!1)}function ft(C,Q){return h[C]!==Q?(r.bindFramebuffer(C,Q),h[C]=Q,C===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=Q),C===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=Q),!0):!1}function mt(C,Q){let Z=u,tt=!1;if(C){Z=d.get(Q),Z===void 0&&(Z=[],d.set(Q,Z));const at=C.textures;if(Z.length!==at.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let Et=0,Ot=at.length;Et<Ot;Et++)Z[Et]=r.COLOR_ATTACHMENT0+Et;Z.length=at.length,tt=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,tt=!0);tt&&r.drawBuffers(Z)}function _t(C){return f!==C?(r.useProgram(C),f=C,!0):!1}const B={[Wn]:r.FUNC_ADD,[up]:r.FUNC_SUBTRACT,[fp]:r.FUNC_REVERSE_SUBTRACT};B[pp]=r.MIN,B[mp]=r.MAX;const Rt={[gp]:r.ZERO,[vp]:r.ONE,[yp]:r.SRC_COLOR,[$l]:r.SRC_ALPHA,[wp]:r.SRC_ALPHA_SATURATE,[bp]:r.DST_COLOR,[Mp]:r.DST_ALPHA,[xp]:r.ONE_MINUS_SRC_COLOR,[Zl]:r.ONE_MINUS_SRC_ALPHA,[Sp]:r.ONE_MINUS_DST_COLOR,[_p]:r.ONE_MINUS_DST_ALPHA,[Ap]:r.CONSTANT_COLOR,[Ep]:r.ONE_MINUS_CONSTANT_COLOR,[Tp]:r.CONSTANT_ALPHA,[Cp]:r.ONE_MINUS_CONSTANT_ALPHA};function Pt(C,Q,Z,tt,at,Et,Ot,ce,me,Zt){if(C===Ki){g===!0&&(it(r.BLEND),g=!1);return}if(g===!1&&($(r.BLEND),g=!0),C!==dp){if(C!==y||Zt!==A){if((v!==Wn||m!==Wn)&&(r.blendEquation(r.FUNC_ADD),v=Wn,m=Wn),Zt)switch(C){case Js:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qe:r.blendFunc(r.ONE,r.ONE);break;case zc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Js:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qe:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case zc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}p=null,M=null,x=null,T=null,_.set(0,0,0),S=0,y=C,A=Zt}return}at=at||Q,Et=Et||Z,Ot=Ot||tt,(Q!==v||at!==m)&&(r.blendEquationSeparate(B[Q],B[at]),v=Q,m=at),(Z!==p||tt!==M||Et!==x||Ot!==T)&&(r.blendFuncSeparate(Rt[Z],Rt[tt],Rt[Et],Rt[Ot]),p=Z,M=tt,x=Et,T=Ot),(ce.equals(_)===!1||me!==S)&&(r.blendColor(ce.r,ce.g,ce.b,me),_.copy(ce),S=me),y=C,A=!1}function Xt(C,Q){C.side===Me?it(r.CULL_FACE):$(r.CULL_FACE);let Z=C.side===Ze;Q&&(Z=!Z),St(Z),C.blending===Js&&C.transparent===!1?Pt(Ki):Pt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),s.setFunc(C.depthFunc),s.setTest(C.depthTest),s.setMask(C.depthWrite),n.setMask(C.colorWrite);const tt=C.stencilWrite;a.setTest(tt),tt&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),It(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?$(r.SAMPLE_ALPHA_TO_COVERAGE):it(r.SAMPLE_ALPHA_TO_COVERAGE)}function St(C){w!==C&&(C?r.frontFace(r.CW):r.frontFace(r.CCW),w=C)}function Ut(C){C!==lp?($(r.CULL_FACE),C!==b&&(C===Oc?r.cullFace(r.BACK):C===cp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):it(r.CULL_FACE),b=C}function Dt(C){C!==E&&(U&&r.lineWidth(C),E=C)}function It(C,Q,Z){C?($(r.POLYGON_OFFSET_FILL),(I!==Q||D!==Z)&&(r.polygonOffset(Q,Z),I=Q,D=Z)):it(r.POLYGON_OFFSET_FILL)}function qt(C){C?$(r.SCISSOR_TEST):it(r.SCISSOR_TEST)}function O(C){C===void 0&&(C=r.TEXTURE0+F-1),z!==C&&(r.activeTexture(C),z=C)}function P(C,Q,Z){Z===void 0&&(z===null?Z=r.TEXTURE0+F-1:Z=z);let tt=R[Z];tt===void 0&&(tt={type:void 0,texture:void 0},R[Z]=tt),(tt.type!==C||tt.texture!==Q)&&(z!==Z&&(r.activeTexture(Z),z=Z),r.bindTexture(C,Q||G[C]),tt.type=C,tt.texture=Q)}function K(){const C=R[z];C!==void 0&&C.type!==void 0&&(r.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function st(){try{r.compressedTexImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function rt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ot(){try{r.texSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function wt(){try{r.texSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ht(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function dt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function zt(){try{r.texStorage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function lt(){try{r.texStorage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function bt(){try{r.texImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Wt(){try{r.texImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Lt(C){et.equals(C)===!1&&(r.scissor(C.x,C.y,C.z,C.w),et.copy(C))}function pt(C){nt.equals(C)===!1&&(r.viewport(C.x,C.y,C.z,C.w),nt.copy(C))}function Bt(C,Q){let Z=l.get(Q);Z===void 0&&(Z=new WeakMap,l.set(Q,Z));let tt=Z.get(C);tt===void 0&&(tt=r.getUniformBlockIndex(Q,C.name),Z.set(C,tt))}function Vt(C,Q){const tt=l.get(Q).get(C);o.get(Q)!==tt&&(r.uniformBlockBinding(Q,tt,C.__bindingPointIndex),o.set(Q,tt))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},z=null,R={},h={},d=new WeakMap,u=[],f=null,g=!1,y=null,v=null,p=null,M=null,m=null,x=null,T=null,_=new Ct(0,0,0),S=0,A=!1,w=null,b=null,E=null,I=null,D=null,et.set(0,0,r.canvas.width,r.canvas.height),nt.set(0,0,r.canvas.width,r.canvas.height),n.reset(),s.reset(),a.reset()}return{buffers:{color:n,depth:s,stencil:a},enable:$,disable:it,bindFramebuffer:ft,drawBuffers:mt,useProgram:_t,setBlending:Pt,setMaterial:Xt,setFlipSided:St,setCullFace:Ut,setLineWidth:Dt,setPolygonOffset:It,setScissorTest:qt,activeTexture:O,bindTexture:P,unbindTexture:K,compressedTexImage2D:st,compressedTexImage3D:rt,texImage2D:bt,texImage3D:Wt,updateUBOMapping:Bt,uniformBlockBinding:Vt,texStorage2D:zt,texStorage3D:lt,texSubImage2D:ot,texSubImage3D:wt,compressedTexSubImage2D:ht,compressedTexSubImage3D:dt,scissor:Lt,viewport:pt,reset:le}}function vx(r,t,e,i,n,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(O,P){return f?new OffscreenCanvas(O,P):vo("canvas")}function y(O,P,K){let st=1;const rt=qt(O);if((rt.width>K||rt.height>K)&&(st=K/Math.max(rt.width,rt.height)),st<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ot=Math.floor(st*rt.width),wt=Math.floor(st*rt.height);d===void 0&&(d=g(ot,wt));const ht=P?g(ot,wt):d;return ht.width=ot,ht.height=wt,ht.getContext("2d").drawImage(O,0,0,ot,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+ot+"x"+wt+")."),ht}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),O;return O}function v(O){return O.generateMipmaps&&O.minFilter!==$e&&O.minFilter!==Si}function p(O){r.generateMipmap(O)}function M(O,P,K,st,rt=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ot=P;if(P===r.RED&&(K===r.FLOAT&&(ot=r.R32F),K===r.HALF_FLOAT&&(ot=r.R16F),K===r.UNSIGNED_BYTE&&(ot=r.R8)),P===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(ot=r.R8UI),K===r.UNSIGNED_SHORT&&(ot=r.R16UI),K===r.UNSIGNED_INT&&(ot=r.R32UI),K===r.BYTE&&(ot=r.R8I),K===r.SHORT&&(ot=r.R16I),K===r.INT&&(ot=r.R32I)),P===r.RG&&(K===r.FLOAT&&(ot=r.RG32F),K===r.HALF_FLOAT&&(ot=r.RG16F),K===r.UNSIGNED_BYTE&&(ot=r.RG8)),P===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(ot=r.RG8UI),K===r.UNSIGNED_SHORT&&(ot=r.RG16UI),K===r.UNSIGNED_INT&&(ot=r.RG32UI),K===r.BYTE&&(ot=r.RG8I),K===r.SHORT&&(ot=r.RG16I),K===r.INT&&(ot=r.RG32I)),P===r.RGB&&K===r.UNSIGNED_INT_5_9_9_9_REV&&(ot=r.RGB9_E5),P===r.RGBA){const wt=rt?fo:Kt.getTransfer(st);K===r.FLOAT&&(ot=r.RGBA32F),K===r.HALF_FLOAT&&(ot=r.RGBA16F),K===r.UNSIGNED_BYTE&&(ot=wt===ne?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(ot=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(ot=r.RGB5_A1)}return(ot===r.R16F||ot===r.R32F||ot===r.RG16F||ot===r.RG32F||ot===r.RGBA16F||ot===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function m(O,P){let K;return O?P===null||P===rr||P===ar?K=r.DEPTH24_STENCIL8:P===qi?K=r.DEPTH32F_STENCIL8:P===uo&&(K=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===rr||P===ar?K=r.DEPTH_COMPONENT24:P===qi?K=r.DEPTH_COMPONENT32F:P===uo&&(K=r.DEPTH_COMPONENT16),K}function x(O,P){return v(O)===!0||O.isFramebufferTexture&&O.minFilter!==$e&&O.minFilter!==Si?Math.log2(Math.max(P.width,P.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?P.mipmaps.length:1}function T(O){const P=O.target;P.removeEventListener("dispose",T),S(P),P.isVideoTexture&&h.delete(P)}function _(O){const P=O.target;P.removeEventListener("dispose",_),w(P)}function S(O){const P=i.get(O);if(P.__webglInit===void 0)return;const K=O.source,st=u.get(K);if(st){const rt=st[P.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&A(O),Object.keys(st).length===0&&u.delete(K)}i.remove(O)}function A(O){const P=i.get(O);r.deleteTexture(P.__webglTexture);const K=O.source,st=u.get(K);delete st[P.__cacheKey],a.memory.textures--}function w(O){const P=i.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(P.__webglFramebuffer[st]))for(let rt=0;rt<P.__webglFramebuffer[st].length;rt++)r.deleteFramebuffer(P.__webglFramebuffer[st][rt]);else r.deleteFramebuffer(P.__webglFramebuffer[st]);P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer[st])}else{if(Array.isArray(P.__webglFramebuffer))for(let st=0;st<P.__webglFramebuffer.length;st++)r.deleteFramebuffer(P.__webglFramebuffer[st]);else r.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&r.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let st=0;st<P.__webglColorRenderbuffer.length;st++)P.__webglColorRenderbuffer[st]&&r.deleteRenderbuffer(P.__webglColorRenderbuffer[st]);P.__webglDepthRenderbuffer&&r.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const K=O.textures;for(let st=0,rt=K.length;st<rt;st++){const ot=i.get(K[st]);ot.__webglTexture&&(r.deleteTexture(ot.__webglTexture),a.memory.textures--),i.remove(K[st])}i.remove(O)}let b=0;function E(){b=0}function I(){const O=b;return O>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+n.maxTextures),b+=1,O}function D(O){const P=[];return P.push(O.wrapS),P.push(O.wrapT),P.push(O.wrapR||0),P.push(O.magFilter),P.push(O.minFilter),P.push(O.anisotropy),P.push(O.internalFormat),P.push(O.format),P.push(O.type),P.push(O.generateMipmaps),P.push(O.premultiplyAlpha),P.push(O.flipY),P.push(O.unpackAlignment),P.push(O.colorSpace),P.join()}function F(O,P){const K=i.get(O);if(O.isVideoTexture&&Dt(O),O.isRenderTargetTexture===!1&&O.version>0&&K.__version!==O.version){const st=O.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(K,O,P);return}}e.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+P)}function U(O,P){const K=i.get(O);if(O.version>0&&K.__version!==O.version){nt(K,O,P);return}e.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+P)}function L(O,P){const K=i.get(O);if(O.version>0&&K.__version!==O.version){nt(K,O,P);return}e.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+P)}function k(O,P){const K=i.get(O);if(O.version>0&&K.__version!==O.version){W(K,O,P);return}e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+P)}const z={[Kl]:r.REPEAT,[$n]:r.CLAMP_TO_EDGE,[Jl]:r.MIRRORED_REPEAT},R={[$e]:r.NEAREST,[zp]:r.NEAREST_MIPMAP_NEAREST,[ha]:r.NEAREST_MIPMAP_LINEAR,[Si]:r.LINEAR,[zo]:r.LINEAR_MIPMAP_NEAREST,[Zn]:r.LINEAR_MIPMAP_LINEAR},H={[Jp]:r.NEVER,[sm]:r.ALWAYS,[Qp]:r.LESS,[af]:r.LEQUAL,[tm]:r.EQUAL,[nm]:r.GEQUAL,[em]:r.GREATER,[im]:r.NOTEQUAL};function J(O,P){if(P.type===qi&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===Si||P.magFilter===zo||P.magFilter===ha||P.magFilter===Zn||P.minFilter===Si||P.minFilter===zo||P.minFilter===ha||P.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,z[P.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,z[P.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,z[P.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,R[P.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,R[P.minFilter]),P.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,H[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===$e||P.minFilter!==ha&&P.minFilter!==Zn||P.type===qi&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||i.get(P).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");r.texParameterf(O,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,n.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy}}}function et(O,P){let K=!1;O.__webglInit===void 0&&(O.__webglInit=!0,P.addEventListener("dispose",T));const st=P.source;let rt=u.get(st);rt===void 0&&(rt={},u.set(st,rt));const ot=D(P);if(ot!==O.__cacheKey){rt[ot]===void 0&&(rt[ot]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,K=!0),rt[ot].usedTimes++;const wt=rt[O.__cacheKey];wt!==void 0&&(rt[O.__cacheKey].usedTimes--,wt.usedTimes===0&&A(P)),O.__cacheKey=ot,O.__webglTexture=rt[ot].texture}return K}function nt(O,P,K){let st=r.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(st=r.TEXTURE_2D_ARRAY),P.isData3DTexture&&(st=r.TEXTURE_3D);const rt=et(O,P),ot=P.source;e.bindTexture(st,O.__webglTexture,r.TEXTURE0+K);const wt=i.get(ot);if(ot.version!==wt.__version||rt===!0){e.activeTexture(r.TEXTURE0+K);const ht=Kt.getPrimaries(Kt.workingColorSpace),dt=P.colorSpace===dn?null:Kt.getPrimaries(P.colorSpace),zt=P.colorSpace===dn||ht===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let lt=y(P.image,!1,n.maxTextureSize);lt=It(P,lt);const bt=s.convert(P.format,P.colorSpace),Wt=s.convert(P.type);let Lt=M(P.internalFormat,bt,Wt,P.colorSpace,P.isVideoTexture);J(st,P);let pt;const Bt=P.mipmaps,Vt=P.isVideoTexture!==!0,le=wt.__version===void 0||rt===!0,C=ot.dataReady,Q=x(P,lt);if(P.isDepthTexture)Lt=m(P.format===or,P.type),le&&(Vt?e.texStorage2D(r.TEXTURE_2D,1,Lt,lt.width,lt.height):e.texImage2D(r.TEXTURE_2D,0,Lt,lt.width,lt.height,0,bt,Wt,null));else if(P.isDataTexture)if(Bt.length>0){Vt&&le&&e.texStorage2D(r.TEXTURE_2D,Q,Lt,Bt[0].width,Bt[0].height);for(let Z=0,tt=Bt.length;Z<tt;Z++)pt=Bt[Z],Vt?C&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,pt.width,pt.height,bt,Wt,pt.data):e.texImage2D(r.TEXTURE_2D,Z,Lt,pt.width,pt.height,0,bt,Wt,pt.data);P.generateMipmaps=!1}else Vt?(le&&e.texStorage2D(r.TEXTURE_2D,Q,Lt,lt.width,lt.height),C&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt.width,lt.height,bt,Wt,lt.data)):e.texImage2D(r.TEXTURE_2D,0,Lt,lt.width,lt.height,0,bt,Wt,lt.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Vt&&le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Q,Lt,Bt[0].width,Bt[0].height,lt.depth);for(let Z=0,tt=Bt.length;Z<tt;Z++)if(pt=Bt[Z],P.format!==Li)if(bt!==null)if(Vt){if(C)if(P.layerUpdates.size>0){for(const at of P.layerUpdates){const Et=pt.width*pt.height;e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,at,pt.width,pt.height,1,bt,pt.data.slice(Et*at,Et*(at+1)),0,0)}P.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,pt.width,pt.height,lt.depth,bt,pt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,Lt,pt.width,pt.height,lt.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?C&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,pt.width,pt.height,lt.depth,bt,Wt,pt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Z,Lt,pt.width,pt.height,lt.depth,0,bt,Wt,pt.data)}else{Vt&&le&&e.texStorage2D(r.TEXTURE_2D,Q,Lt,Bt[0].width,Bt[0].height);for(let Z=0,tt=Bt.length;Z<tt;Z++)pt=Bt[Z],P.format!==Li?bt!==null?Vt?C&&e.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,pt.width,pt.height,bt,pt.data):e.compressedTexImage2D(r.TEXTURE_2D,Z,Lt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?C&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,pt.width,pt.height,bt,Wt,pt.data):e.texImage2D(r.TEXTURE_2D,Z,Lt,pt.width,pt.height,0,bt,Wt,pt.data)}else if(P.isDataArrayTexture)if(Vt){if(le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Q,Lt,lt.width,lt.height,lt.depth),C)if(P.layerUpdates.size>0){let Z;switch(Wt){case r.UNSIGNED_BYTE:switch(bt){case r.ALPHA:Z=1;break;case r.LUMINANCE:Z=1;break;case r.LUMINANCE_ALPHA:Z=2;break;case r.RGB:Z=3;break;case r.RGBA:Z=4;break;default:throw new Error(`Unknown texel size for format ${bt}.`)}break;case r.UNSIGNED_SHORT_4_4_4_4:case r.UNSIGNED_SHORT_5_5_5_1:case r.UNSIGNED_SHORT_5_6_5:Z=1;break;default:throw new Error(`Unknown texel size for type ${Wt}.`)}const tt=lt.width*lt.height*Z;for(const at of P.layerUpdates)e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,at,lt.width,lt.height,1,bt,Wt,lt.data.slice(tt*at,tt*(at+1)));P.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,bt,Wt,lt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,lt.width,lt.height,lt.depth,0,bt,Wt,lt.data);else if(P.isData3DTexture)Vt?(le&&e.texStorage3D(r.TEXTURE_3D,Q,Lt,lt.width,lt.height,lt.depth),C&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,bt,Wt,lt.data)):e.texImage3D(r.TEXTURE_3D,0,Lt,lt.width,lt.height,lt.depth,0,bt,Wt,lt.data);else if(P.isFramebufferTexture){if(le)if(Vt)e.texStorage2D(r.TEXTURE_2D,Q,Lt,lt.width,lt.height);else{let Z=lt.width,tt=lt.height;for(let at=0;at<Q;at++)e.texImage2D(r.TEXTURE_2D,at,Lt,Z,tt,0,bt,Wt,null),Z>>=1,tt>>=1}}else if(Bt.length>0){if(Vt&&le){const Z=qt(Bt[0]);e.texStorage2D(r.TEXTURE_2D,Q,Lt,Z.width,Z.height)}for(let Z=0,tt=Bt.length;Z<tt;Z++)pt=Bt[Z],Vt?C&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,bt,Wt,pt):e.texImage2D(r.TEXTURE_2D,Z,Lt,bt,Wt,pt);P.generateMipmaps=!1}else if(Vt){if(le){const Z=qt(lt);e.texStorage2D(r.TEXTURE_2D,Q,Lt,Z.width,Z.height)}C&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,bt,Wt,lt)}else e.texImage2D(r.TEXTURE_2D,0,Lt,bt,Wt,lt);v(P)&&p(st),wt.__version=ot.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function W(O,P,K){if(P.image.length!==6)return;const st=et(O,P),rt=P.source;e.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+K);const ot=i.get(rt);if(rt.version!==ot.__version||st===!0){e.activeTexture(r.TEXTURE0+K);const wt=Kt.getPrimaries(Kt.workingColorSpace),ht=P.colorSpace===dn?null:Kt.getPrimaries(P.colorSpace),dt=P.colorSpace===dn||wt===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const zt=P.isCompressedTexture||P.image[0].isCompressedTexture,lt=P.image[0]&&P.image[0].isDataTexture,bt=[];for(let tt=0;tt<6;tt++)!zt&&!lt?bt[tt]=y(P.image[tt],!0,n.maxCubemapSize):bt[tt]=lt?P.image[tt].image:P.image[tt],bt[tt]=It(P,bt[tt]);const Wt=bt[0],Lt=s.convert(P.format,P.colorSpace),pt=s.convert(P.type),Bt=M(P.internalFormat,Lt,pt,P.colorSpace),Vt=P.isVideoTexture!==!0,le=ot.__version===void 0||st===!0,C=rt.dataReady;let Q=x(P,Wt);J(r.TEXTURE_CUBE_MAP,P);let Z;if(zt){Vt&&le&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Q,Bt,Wt.width,Wt.height);for(let tt=0;tt<6;tt++){Z=bt[tt].mipmaps;for(let at=0;at<Z.length;at++){const Et=Z[at];P.format!==Li?Lt!==null?Vt?C&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at,0,0,Et.width,Et.height,Lt,Et.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at,Bt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?C&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at,0,0,Et.width,Et.height,Lt,pt,Et.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at,Bt,Et.width,Et.height,0,Lt,pt,Et.data)}}}else{if(Z=P.mipmaps,Vt&&le){Z.length>0&&Q++;const tt=qt(bt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Q,Bt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(lt){Vt?C&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,bt[tt].width,bt[tt].height,Lt,pt,bt[tt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Bt,bt[tt].width,bt[tt].height,0,Lt,pt,bt[tt].data);for(let at=0;at<Z.length;at++){const Ot=Z[at].image[tt].image;Vt?C&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at+1,0,0,Ot.width,Ot.height,Lt,pt,Ot.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at+1,Bt,Ot.width,Ot.height,0,Lt,pt,Ot.data)}}else{Vt?C&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Lt,pt,bt[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Bt,Lt,pt,bt[tt]);for(let at=0;at<Z.length;at++){const Et=Z[at];Vt?C&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at+1,0,0,Lt,pt,Et.image[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at+1,Bt,Lt,pt,Et.image[tt])}}}v(P)&&p(r.TEXTURE_CUBE_MAP),ot.__version=rt.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function G(O,P,K,st,rt,ot){const wt=s.convert(K.format,K.colorSpace),ht=s.convert(K.type),dt=M(K.internalFormat,wt,ht,K.colorSpace);if(!i.get(P).__hasExternalTextures){const lt=Math.max(1,P.width>>ot),bt=Math.max(1,P.height>>ot);rt===r.TEXTURE_3D||rt===r.TEXTURE_2D_ARRAY?e.texImage3D(rt,ot,dt,lt,bt,P.depth,0,wt,ht,null):e.texImage2D(rt,ot,dt,lt,bt,0,wt,ht,null)}e.bindFramebuffer(r.FRAMEBUFFER,O),Ut(P)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,rt,i.get(K).__webglTexture,0,St(P)):(rt===r.TEXTURE_2D||rt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,st,rt,i.get(K).__webglTexture,ot),e.bindFramebuffer(r.FRAMEBUFFER,null)}function $(O,P,K){if(r.bindRenderbuffer(r.RENDERBUFFER,O),P.depthBuffer){const st=P.depthTexture,rt=st&&st.isDepthTexture?st.type:null,ot=m(P.stencilBuffer,rt),wt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=St(P);Ut(P)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht,ot,P.width,P.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht,ot,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,ot,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,wt,r.RENDERBUFFER,O)}else{const st=P.textures;for(let rt=0;rt<st.length;rt++){const ot=st[rt],wt=s.convert(ot.format,ot.colorSpace),ht=s.convert(ot.type),dt=M(ot.internalFormat,wt,ht,ot.colorSpace),zt=St(P);K&&Ut(P)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,zt,dt,P.width,P.height):Ut(P)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,zt,dt,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,dt,P.width,P.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function it(O,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,O),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),F(P.depthTexture,0);const st=i.get(P.depthTexture).__webglTexture,rt=St(P);if(P.depthTexture.format===Qs)Ut(P)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,st,0,rt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,st,0);else if(P.depthTexture.format===or)Ut(P)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,st,0,rt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function ft(O){const P=i.get(O),K=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!P.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");it(P.__webglFramebuffer,O)}else if(K){P.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer[st]),P.__webglDepthbuffer[st]=r.createRenderbuffer(),$(P.__webglDepthbuffer[st],O,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=r.createRenderbuffer(),$(P.__webglDepthbuffer,O,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function mt(O,P,K){const st=i.get(O);P!==void 0&&G(st.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&ft(O)}function _t(O){const P=O.texture,K=i.get(O),st=i.get(P);O.addEventListener("dispose",_);const rt=O.textures,ot=O.isWebGLCubeRenderTarget===!0,wt=rt.length>1;if(wt||(st.__webglTexture===void 0&&(st.__webglTexture=r.createTexture()),st.__version=P.version,a.memory.textures++),ot){K.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(P.mipmaps&&P.mipmaps.length>0){K.__webglFramebuffer[ht]=[];for(let dt=0;dt<P.mipmaps.length;dt++)K.__webglFramebuffer[ht][dt]=r.createFramebuffer()}else K.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){K.__webglFramebuffer=[];for(let ht=0;ht<P.mipmaps.length;ht++)K.__webglFramebuffer[ht]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(wt)for(let ht=0,dt=rt.length;ht<dt;ht++){const zt=i.get(rt[ht]);zt.__webglTexture===void 0&&(zt.__webglTexture=r.createTexture(),a.memory.textures++)}if(O.samples>0&&Ut(O)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ht=0;ht<rt.length;ht++){const dt=rt[ht];K.__webglColorRenderbuffer[ht]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[ht]);const zt=s.convert(dt.format,dt.colorSpace),lt=s.convert(dt.type),bt=M(dt.internalFormat,zt,lt,dt.colorSpace,O.isXRRenderTarget===!0),Wt=St(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,bt,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,K.__webglColorRenderbuffer[ht])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),$(K.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ot){e.bindTexture(r.TEXTURE_CUBE_MAP,st.__webglTexture),J(r.TEXTURE_CUBE_MAP,P);for(let ht=0;ht<6;ht++)if(P.mipmaps&&P.mipmaps.length>0)for(let dt=0;dt<P.mipmaps.length;dt++)G(K.__webglFramebuffer[ht][dt],O,P,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,dt);else G(K.__webglFramebuffer[ht],O,P,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);v(P)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ht=0,dt=rt.length;ht<dt;ht++){const zt=rt[ht],lt=i.get(zt);e.bindTexture(r.TEXTURE_2D,lt.__webglTexture),J(r.TEXTURE_2D,zt),G(K.__webglFramebuffer,O,zt,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,0),v(zt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ht=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ht=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ht,st.__webglTexture),J(ht,P),P.mipmaps&&P.mipmaps.length>0)for(let dt=0;dt<P.mipmaps.length;dt++)G(K.__webglFramebuffer[dt],O,P,r.COLOR_ATTACHMENT0,ht,dt);else G(K.__webglFramebuffer,O,P,r.COLOR_ATTACHMENT0,ht,0);v(P)&&p(ht),e.unbindTexture()}O.depthBuffer&&ft(O)}function B(O){const P=O.textures;for(let K=0,st=P.length;K<st;K++){const rt=P[K];if(v(rt)){const ot=O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,wt=i.get(rt).__webglTexture;e.bindTexture(ot,wt),p(ot),e.unbindTexture()}}}const Rt=[],Pt=[];function Xt(O){if(O.samples>0){if(Ut(O)===!1){const P=O.textures,K=O.width,st=O.height;let rt=r.COLOR_BUFFER_BIT;const ot=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=i.get(O),ht=P.length>1;if(ht)for(let dt=0;dt<P.length;dt++)e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let dt=0;dt<P.length;dt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(rt|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(rt|=r.STENCIL_BUFFER_BIT)),ht){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,wt.__webglColorRenderbuffer[dt]);const zt=i.get(P[dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,zt,0)}r.blitFramebuffer(0,0,K,st,0,0,K,st,rt,r.NEAREST),l===!0&&(Rt.length=0,Pt.length=0,Rt.push(r.COLOR_ATTACHMENT0+dt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Rt.push(ot),Pt.push(ot),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Pt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Rt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ht)for(let dt=0;dt<P.length;dt++){e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,wt.__webglColorRenderbuffer[dt]);const zt=i.get(P[dt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,zt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&l){const P=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[P])}}}function St(O){return Math.min(n.maxSamples,O.samples)}function Ut(O){const P=i.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Dt(O){const P=a.render.frame;h.get(O)!==P&&(h.set(O,P),O.update())}function It(O,P){const K=O.colorSpace,st=O.format,rt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||K!==bn&&K!==dn&&(Kt.getTransfer(K)===ne?(st!==Li||rt!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),P}function qt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(c.width=O.naturalWidth||O.width,c.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(c.width=O.displayWidth,c.height=O.displayHeight):(c.width=O.width,c.height=O.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=E,this.setTexture2D=F,this.setTexture2DArray=U,this.setTexture3D=L,this.setTextureCube=k,this.rebindTextures=mt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=G,this.useMultisampledRTT=Ut}function yx(r,t){function e(i,n=dn){let s;const a=Kt.getTransfer(n);if(i===_n)return r.UNSIGNED_BYTE;if(i===Ju)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Qu)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Gp)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Bp)return r.BYTE;if(i===Vp)return r.SHORT;if(i===uo)return r.UNSIGNED_SHORT;if(i===Ku)return r.INT;if(i===rr)return r.UNSIGNED_INT;if(i===qi)return r.FLOAT;if(i===Fi)return r.HALF_FLOAT;if(i===Hp)return r.ALPHA;if(i===Xp)return r.RGB;if(i===Li)return r.RGBA;if(i===Wp)return r.LUMINANCE;if(i===Yp)return r.LUMINANCE_ALPHA;if(i===Qs)return r.DEPTH_COMPONENT;if(i===or)return r.DEPTH_STENCIL;if(i===tf)return r.RED;if(i===ef)return r.RED_INTEGER;if(i===$p)return r.RG;if(i===nf)return r.RG_INTEGER;if(i===sf)return r.RGBA_INTEGER;if(i===Bo||i===Vo||i===Go||i===Ho)if(a===ne)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Bo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Bo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ho)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vc||i===Gc||i===Hc||i===Xc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wc||i===Yc||i===$c)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wc||i===Yc)return a===ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$c)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zc||i===qc||i===jc||i===Kc||i===Jc||i===Qc||i===th||i===eh||i===ih||i===nh||i===sh||i===rh||i===ah||i===oh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Zc)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qc)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jc)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kc)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jc)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qc)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===th)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===eh)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ih)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nh)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sh)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rh)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ah)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oh)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xo||i===lh||i===ch)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Xo)return a===ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ch)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zp||i===hh||i===dh||i===uh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===hh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ar?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}class xx extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class qn extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mx={type:"move"};class ml{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const y of t.hand.values()){const v=e.getJointPose(y,i),p=this._getHandJoint(c,y);v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=v.radius),p.visible=v!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mx)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new qn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const _x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Sx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const n=new Ve,s=t.properties.get(n);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new se({vertexShader:_x,fragmentShader:bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new Io(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class wx extends ss{constructor(t,e){super();const i=this;let n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const y=new Sx,v=e.getContextAttributes();let p=null,M=null;const m=[],x=[],T=new yt;let _=null;const S=new Fe;S.layers.enable(1),S.viewport=new fe;const A=new Fe;A.layers.enable(2),A.viewport=new fe;const w=[S,A],b=new xx;b.layers.enable(1),b.layers.enable(2);let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let G=m[W];return G===void 0&&(G=new ml,m[W]=G),G.getTargetRaySpace()},this.getControllerGrip=function(W){let G=m[W];return G===void 0&&(G=new ml,m[W]=G),G.getGripSpace()},this.getHand=function(W){let G=m[W];return G===void 0&&(G=new ml,m[W]=G),G.getHandSpace()};function D(W){const G=x.indexOf(W.inputSource);if(G===-1)return;const $=m[G];$!==void 0&&($.update(W.inputSource,W.frame,c||a),$.dispatchEvent({type:W.type,data:W.inputSource}))}function F(){n.removeEventListener("select",D),n.removeEventListener("selectstart",D),n.removeEventListener("selectend",D),n.removeEventListener("squeeze",D),n.removeEventListener("squeezestart",D),n.removeEventListener("squeezeend",D),n.removeEventListener("end",F),n.removeEventListener("inputsourceschange",U);for(let W=0;W<m.length;W++){const G=x[W];G!==null&&(x[W]=null,m[W].disconnect(G))}E=null,I=null,y.reset(),t.setRenderTarget(p),f=null,u=null,d=null,n=null,M=null,nt.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(W){if(n=W,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",D),n.addEventListener("selectstart",D),n.addEventListener("selectend",D),n.addEventListener("squeeze",D),n.addEventListener("squeezestart",D),n.addEventListener("squeezeend",D),n.addEventListener("end",F),n.addEventListener("inputsourceschange",U),v.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(T),n.renderState.layers===void 0){const G={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,G),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new si(f.framebufferWidth,f.framebufferHeight,{format:Li,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let G=null,$=null,it=null;v.depth&&(it=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,G=v.stencil?or:Qs,$=v.stencil?ar:rr);const ft={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:s};d=new XRWebGLBinding(n,e),u=d.createProjectionLayer(ft),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new si(u.textureWidth,u.textureHeight,{format:Li,type:_n,depthTexture:new xf(u.textureWidth,u.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),nt.setContext(n),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function U(W){for(let G=0;G<W.removed.length;G++){const $=W.removed[G],it=x.indexOf($);it>=0&&(x[it]=null,m[it].disconnect($))}for(let G=0;G<W.added.length;G++){const $=W.added[G];let it=x.indexOf($);if(it===-1){for(let mt=0;mt<m.length;mt++)if(mt>=x.length){x.push($),it=mt;break}else if(x[mt]===null){x[mt]=$,it=mt;break}if(it===-1)break}const ft=m[it];ft&&ft.connect($)}}const L=new V,k=new V;function z(W,G,$){L.setFromMatrixPosition(G.matrixWorld),k.setFromMatrixPosition($.matrixWorld);const it=L.distanceTo(k),ft=G.projectionMatrix.elements,mt=$.projectionMatrix.elements,_t=ft[14]/(ft[10]-1),B=ft[14]/(ft[10]+1),Rt=(ft[9]+1)/ft[5],Pt=(ft[9]-1)/ft[5],Xt=(ft[8]-1)/ft[0],St=(mt[8]+1)/mt[0],Ut=_t*Xt,Dt=_t*St,It=it/(-Xt+St),qt=It*-Xt;G.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(qt),W.translateZ(It),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const O=_t+It,P=B+It,K=Ut-qt,st=Dt+(it-qt),rt=Rt*B/P*O,ot=Pt*B/P*O;W.projectionMatrix.makePerspective(K,st,rt,ot,O,P),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function R(W,G){G===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(G.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(n===null)return;y.texture!==null&&(W.near=y.depthNear,W.far=y.depthFar),b.near=A.near=S.near=W.near,b.far=A.far=S.far=W.far,(E!==b.near||I!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),E=b.near,I=b.far,S.near=E,S.far=I,A.near=E,A.far=I,S.updateProjectionMatrix(),A.updateProjectionMatrix(),W.updateProjectionMatrix());const G=W.parent,$=b.cameras;R(b,G);for(let it=0;it<$.length;it++)R($[it],G);$.length===2?z(b,S,A):b.projectionMatrix.copy(S.projectionMatrix),H(W,b,G)};function H(W,G,$){$===null?W.matrix.copy(G.matrixWorld):(W.matrix.copy($.matrixWorld),W.matrix.invert(),W.matrix.multiply(G.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(G.projectionMatrix),W.projectionMatrixInverse.copy(G.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ra*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(b)};let J=null;function et(W,G){if(h=G.getViewerPose(c||a),g=G,h!==null){const $=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let it=!1;$.length!==b.cameras.length&&(b.cameras.length=0,it=!0);for(let mt=0;mt<$.length;mt++){const _t=$[mt];let B=null;if(f!==null)B=f.getViewport(_t);else{const Pt=d.getViewSubImage(u,_t);B=Pt.viewport,mt===0&&(t.setRenderTargetTextures(M,Pt.colorTexture,u.ignoreDepthValues?void 0:Pt.depthStencilTexture),t.setRenderTarget(M))}let Rt=w[mt];Rt===void 0&&(Rt=new Fe,Rt.layers.enable(mt),Rt.viewport=new fe,w[mt]=Rt),Rt.matrix.fromArray(_t.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(_t.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(B.x,B.y,B.width,B.height),mt===0&&(b.matrix.copy(Rt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),it===!0&&b.cameras.push(Rt)}const ft=n.enabledFeatures;if(ft&&ft.includes("depth-sensing")){const mt=d.getDepthInformation($[0]);mt&&mt.isValid&&mt.texture&&y.init(t,mt,n.renderState)}}for(let $=0;$<m.length;$++){const it=x[$],ft=m[$];it!==null&&ft!==void 0&&ft.update(it,G,c||a)}J&&J(W,G),G.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:G}),g=null}const nt=new yf;nt.setAnimationLoop(et),this.setAnimationLoop=function(W){J=W},this.dispose=function(){}}}const Dn=new hi,Ax=new te;function Ex(r,t){function e(v,p){v.matrixAutoUpdate===!0&&v.updateMatrix(),p.value.copy(v.matrix)}function i(v,p){p.color.getRGB(v.fogColor.value,mf(r)),p.isFog?(v.fogNear.value=p.near,v.fogFar.value=p.far):p.isFogExp2&&(v.fogDensity.value=p.density)}function n(v,p,M,m,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(v,p):p.isMeshToonMaterial?(s(v,p),d(v,p)):p.isMeshPhongMaterial?(s(v,p),h(v,p)):p.isMeshStandardMaterial?(s(v,p),u(v,p),p.isMeshPhysicalMaterial&&f(v,p,x)):p.isMeshMatcapMaterial?(s(v,p),g(v,p)):p.isMeshDepthMaterial?s(v,p):p.isMeshDistanceMaterial?(s(v,p),y(v,p)):p.isMeshNormalMaterial?s(v,p):p.isLineBasicMaterial?(a(v,p),p.isLineDashedMaterial&&o(v,p)):p.isPointsMaterial?l(v,p,M,m):p.isSpriteMaterial?c(v,p):p.isShadowMaterial?(v.color.value.copy(p.color),v.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(v,p){v.opacity.value=p.opacity,p.color&&v.diffuse.value.copy(p.color),p.emissive&&v.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(v.map.value=p.map,e(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,e(p.alphaMap,v.alphaMapTransform)),p.bumpMap&&(v.bumpMap.value=p.bumpMap,e(p.bumpMap,v.bumpMapTransform),v.bumpScale.value=p.bumpScale,p.side===Ze&&(v.bumpScale.value*=-1)),p.normalMap&&(v.normalMap.value=p.normalMap,e(p.normalMap,v.normalMapTransform),v.normalScale.value.copy(p.normalScale),p.side===Ze&&v.normalScale.value.negate()),p.displacementMap&&(v.displacementMap.value=p.displacementMap,e(p.displacementMap,v.displacementMapTransform),v.displacementScale.value=p.displacementScale,v.displacementBias.value=p.displacementBias),p.emissiveMap&&(v.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,v.emissiveMapTransform)),p.specularMap&&(v.specularMap.value=p.specularMap,e(p.specularMap,v.specularMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest);const M=t.get(p),m=M.envMap,x=M.envMapRotation;m&&(v.envMap.value=m,Dn.copy(x),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),v.envMapRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(Dn)),v.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=p.reflectivity,v.ior.value=p.ior,v.refractionRatio.value=p.refractionRatio),p.lightMap&&(v.lightMap.value=p.lightMap,v.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,v.lightMapTransform)),p.aoMap&&(v.aoMap.value=p.aoMap,v.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,v.aoMapTransform))}function a(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,p.map&&(v.map.value=p.map,e(p.map,v.mapTransform))}function o(v,p){v.dashSize.value=p.dashSize,v.totalSize.value=p.dashSize+p.gapSize,v.scale.value=p.scale}function l(v,p,M,m){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.size.value=p.size*M,v.scale.value=m*.5,p.map&&(v.map.value=p.map,e(p.map,v.uvTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,e(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function c(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.rotation.value=p.rotation,p.map&&(v.map.value=p.map,e(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,e(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function h(v,p){v.specular.value.copy(p.specular),v.shininess.value=Math.max(p.shininess,1e-4)}function d(v,p){p.gradientMap&&(v.gradientMap.value=p.gradientMap)}function u(v,p){v.metalness.value=p.metalness,p.metalnessMap&&(v.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,v.metalnessMapTransform)),v.roughness.value=p.roughness,p.roughnessMap&&(v.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,v.roughnessMapTransform)),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)}function f(v,p,M){v.ior.value=p.ior,p.sheen>0&&(v.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),v.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(v.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,v.sheenColorMapTransform)),p.sheenRoughnessMap&&(v.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,v.sheenRoughnessMapTransform))),p.clearcoat>0&&(v.clearcoat.value=p.clearcoat,v.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(v.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,v.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(v.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&v.clearcoatNormalScale.value.negate())),p.dispersion>0&&(v.dispersion.value=p.dispersion),p.iridescence>0&&(v.iridescence.value=p.iridescence,v.iridescenceIOR.value=p.iridescenceIOR,v.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(v.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,v.iridescenceMapTransform)),p.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),p.transmission>0&&(v.transmission.value=p.transmission,v.transmissionSamplerMap.value=M.texture,v.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(v.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,v.transmissionMapTransform)),v.thickness.value=p.thickness,p.thicknessMap&&(v.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=p.attenuationDistance,v.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(v.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(v.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=p.specularIntensity,v.specularColor.value.copy(p.specularColor),p.specularColorMap&&(v.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,v.specularColorMapTransform)),p.specularIntensityMap&&(v.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,p){p.matcap&&(v.matcap.value=p.matcap)}function y(v,p){const M=t.get(p).light;v.referencePosition.value.setFromMatrixPosition(M.matrixWorld),v.nearDistance.value=M.shadow.camera.near,v.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Tx(r,t,e,i){let n={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,m){const x=m.program;i.uniformBlockBinding(M,x)}function c(M,m){let x=n[M.id];x===void 0&&(g(M),x=h(M),n[M.id]=x,M.addEventListener("dispose",v));const T=m.program;i.updateUBOMapping(M,T);const _=t.render.frame;s[M.id]!==_&&(u(M),s[M.id]=_)}function h(M){const m=d();M.__bindingPointIndex=m;const x=r.createBuffer(),T=M.__size,_=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,T,_),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,m,x),x}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const m=n[M.id],x=M.uniforms,T=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,m);for(let _=0,S=x.length;_<S;_++){const A=Array.isArray(x[_])?x[_]:[x[_]];for(let w=0,b=A.length;w<b;w++){const E=A[w];if(f(E,_,w,T)===!0){const I=E.__offset,D=Array.isArray(E.value)?E.value:[E.value];let F=0;for(let U=0;U<D.length;U++){const L=D[U],k=y(L);typeof L=="number"||typeof L=="boolean"?(E.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,I+F,E.__data)):L.isMatrix3?(E.__data[0]=L.elements[0],E.__data[1]=L.elements[1],E.__data[2]=L.elements[2],E.__data[3]=0,E.__data[4]=L.elements[3],E.__data[5]=L.elements[4],E.__data[6]=L.elements[5],E.__data[7]=0,E.__data[8]=L.elements[6],E.__data[9]=L.elements[7],E.__data[10]=L.elements[8],E.__data[11]=0):(L.toArray(E.__data,F),F+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,E.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,m,x,T){const _=M.value,S=m+"_"+x;if(T[S]===void 0)return typeof _=="number"||typeof _=="boolean"?T[S]=_:T[S]=_.clone(),!0;{const A=T[S];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return T[S]=_,!0}else if(A.equals(_)===!1)return A.copy(_),!0}return!1}function g(M){const m=M.uniforms;let x=0;const T=16;for(let S=0,A=m.length;S<A;S++){const w=Array.isArray(m[S])?m[S]:[m[S]];for(let b=0,E=w.length;b<E;b++){const I=w[b],D=Array.isArray(I.value)?I.value:[I.value];for(let F=0,U=D.length;F<U;F++){const L=D[F],k=y(L),z=x%T;z!==0&&T-z<k.boundary&&(x+=T-z),I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=k.storage}}}const _=x%T;return _>0&&(x+=T-_),M.__size=x,M.__cache={},this}function y(M){const m={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(m.boundary=4,m.storage=4):M.isVector2?(m.boundary=8,m.storage=8):M.isVector3||M.isColor?(m.boundary=16,m.storage=12):M.isVector4?(m.boundary=16,m.storage=16):M.isMatrix3?(m.boundary=48,m.storage=48):M.isMatrix4?(m.boundary=64,m.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),m}function v(M){const m=M.target;m.removeEventListener("dispose",v);const x=a.indexOf(m.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(n[m.id]),delete n[m.id],delete s[m.id]}function p(){for(const M in n)r.deleteBuffer(n[M]);a=[],n={},s={}}return{bind:l,update:c,dispose:p}}class Cx{constructor(t={}){const{canvas:e=_m(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=a;const f=new Uint32Array(4),g=new Int32Array(4);let y=null,v=null;const p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pi,this.toneMapping=yn,this.toneMappingExposure=1;const m=this;let x=!1,T=0,_=0,S=null,A=-1,w=null;const b=new fe,E=new fe;let I=null;const D=new Ct(0);let F=0,U=e.width,L=e.height,k=1,z=null,R=null;const H=new fe(0,0,U,L),J=new fe(0,0,U,L);let et=!1;const nt=new Mc;let W=!1,G=!1;const $=new te,it=new V,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function _t(){return S===null?k:1}let B=i;function Rt(N,X){return e.getContext(N,X)}try{const N={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gc}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",Z,!1),e.addEventListener("webglcontextcreationerror",tt,!1),B===null){const X="webgl2";if(B=Rt(X,N),B===null)throw Rt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let Pt,Xt,St,Ut,Dt,It,qt,O,P,K,st,rt,ot,wt,ht,dt,zt,lt,bt,Wt,Lt,pt,Bt,Vt;function le(){Pt=new Uv(B),Pt.init(),pt=new yx(B,Pt),Xt=new Pv(B,Pt,t,pt),St=new gx(B),Ut=new zv(B),Dt=new ix,It=new vx(B,Pt,St,Dt,Xt,pt,Ut),qt=new Iv(m),O=new Fv(m),P=new Ym(B),Bt=new Cv(B,P),K=new kv(B,P,Ut,Bt),st=new Vv(B,K,P,Ut),bt=new Bv(B,Xt,It),dt=new Dv(Dt),rt=new ex(m,qt,O,Pt,Xt,Bt,dt),ot=new Ex(m,Dt),wt=new sx,ht=new hx(Pt),lt=new Tv(m,qt,O,St,st,u,l),zt=new mx(m,st,Xt),Vt=new Tx(B,Ut,Xt,St),Wt=new Rv(B,Pt,Ut),Lt=new Ov(B,Pt,Ut),Ut.programs=rt.programs,m.capabilities=Xt,m.extensions=Pt,m.properties=Dt,m.renderLists=wt,m.shadowMap=zt,m.state=St,m.info=Ut}le();const C=new wx(m,B);this.xr=C,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const N=Pt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Pt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(N){N!==void 0&&(k=N,this.setSize(U,L,!1))},this.getSize=function(N){return N.set(U,L)},this.setSize=function(N,X,q=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=N,L=X,e.width=Math.floor(N*k),e.height=Math.floor(X*k),q===!0&&(e.style.width=N+"px",e.style.height=X+"px"),this.setViewport(0,0,N,X)},this.getDrawingBufferSize=function(N){return N.set(U*k,L*k).floor()},this.setDrawingBufferSize=function(N,X,q){U=N,L=X,k=q,e.width=Math.floor(N*q),e.height=Math.floor(X*q),this.setViewport(0,0,N,X)},this.getCurrentViewport=function(N){return N.copy(b)},this.getViewport=function(N){return N.copy(H)},this.setViewport=function(N,X,q,j){N.isVector4?H.set(N.x,N.y,N.z,N.w):H.set(N,X,q,j),St.viewport(b.copy(H).multiplyScalar(k).round())},this.getScissor=function(N){return N.copy(J)},this.setScissor=function(N,X,q,j){N.isVector4?J.set(N.x,N.y,N.z,N.w):J.set(N,X,q,j),St.scissor(E.copy(J).multiplyScalar(k).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(N){St.setScissorTest(et=N)},this.setOpaqueSort=function(N){z=N},this.setTransparentSort=function(N){R=N},this.getClearColor=function(N){return N.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(N=!0,X=!0,q=!0){let j=0;if(N){let Y=!1;if(S!==null){const ct=S.texture.format;Y=ct===sf||ct===nf||ct===ef}if(Y){const ct=S.texture.type,vt=ct===_n||ct===rr||ct===uo||ct===ar||ct===Ju||ct===Qu,Mt=lt.getClearColor(),At=lt.getClearAlpha(),Ft=Mt.r,kt=Mt.g,Nt=Mt.b;vt?(f[0]=Ft,f[1]=kt,f[2]=Nt,f[3]=At,B.clearBufferuiv(B.COLOR,0,f)):(g[0]=Ft,g[1]=kt,g[2]=Nt,g[3]=At,B.clearBufferiv(B.COLOR,0,g))}else j|=B.COLOR_BUFFER_BIT}X&&(j|=B.DEPTH_BUFFER_BIT),q&&(j|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",Z,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),wt.dispose(),ht.dispose(),Dt.dispose(),qt.dispose(),O.dispose(),st.dispose(),Bt.dispose(),Vt.dispose(),rt.dispose(),C.dispose(),C.removeEventListener("sessionstart",ge),C.removeEventListener("sessionend",ve),Ke.stop()};function Q(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const N=Ut.autoReset,X=zt.enabled,q=zt.autoUpdate,j=zt.needsUpdate,Y=zt.type;le(),Ut.autoReset=N,zt.enabled=X,zt.autoUpdate=q,zt.needsUpdate=j,zt.type=Y}function tt(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function at(N){const X=N.target;X.removeEventListener("dispose",at),Et(X)}function Et(N){Ot(N),Dt.remove(N)}function Ot(N){const X=Dt.get(N).programs;X!==void 0&&(X.forEach(function(q){rt.releaseProgram(q)}),N.isShaderMaterial&&rt.releaseShaderCache(N))}this.renderBufferDirect=function(N,X,q,j,Y,ct){X===null&&(X=ft);const vt=Y.isMesh&&Y.matrixWorld.determinant()<0,Mt=sp(N,X,q,j,Y);St.setMaterial(j,vt);let At=q.index,Ft=1;if(j.wireframe===!0){if(At=K.getWireframeAttribute(q),At===void 0)return;Ft=2}const kt=q.drawRange,Nt=q.attributes.position;let jt=kt.start*Ft,he=(kt.start+kt.count)*Ft;ct!==null&&(jt=Math.max(jt,ct.start*Ft),he=Math.min(he,(ct.start+ct.count)*Ft)),At!==null?(jt=Math.max(jt,0),he=Math.min(he,At.count)):Nt!=null&&(jt=Math.max(jt,0),he=Math.min(he,Nt.count));const de=he-jt;if(de<0||de===1/0)return;Bt.setup(Y,j,Mt,q,At);let Qe,Jt=Wt;if(At!==null&&(Qe=P.get(At),Jt=Lt,Jt.setIndex(Qe)),Y.isMesh)j.wireframe===!0?(St.setLineWidth(j.wireframeLinewidth*_t()),Jt.setMode(B.LINES)):Jt.setMode(B.TRIANGLES);else if(Y.isLine){let Tt=j.linewidth;Tt===void 0&&(Tt=1),St.setLineWidth(Tt*_t()),Y.isLineSegments?Jt.setMode(B.LINES):Y.isLineLoop?Jt.setMode(B.LINE_LOOP):Jt.setMode(B.LINE_STRIP)}else Y.isPoints?Jt.setMode(B.POINTS):Y.isSprite&&Jt.setMode(B.TRIANGLES);if(Y.isBatchedMesh)Y._multiDrawInstances!==null?Jt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances):Jt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Jt.renderInstances(jt,de,Y.count);else if(q.isInstancedBufferGeometry){const Tt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ue=Math.min(q.instanceCount,Tt);Jt.renderInstances(jt,de,Ue)}else Jt.render(jt,de)};function ce(N,X,q){N.transparent===!0&&N.side===Me&&N.forceSinglePass===!1?(N.side=Ze,N.needsUpdate=!0,la(N,X,q),N.side=Mn,N.needsUpdate=!0,la(N,X,q),N.side=Me):la(N,X,q)}this.compile=function(N,X,q=null){q===null&&(q=N),v=ht.get(q),v.init(X),M.push(v),q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),N!==q&&N.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights();const j=new Set;return N.traverse(function(Y){const ct=Y.material;if(ct)if(Array.isArray(ct))for(let vt=0;vt<ct.length;vt++){const Mt=ct[vt];ce(Mt,q,Y),j.add(Mt)}else ce(ct,q,Y),j.add(ct)}),M.pop(),v=null,j},this.compileAsync=function(N,X,q=null){const j=this.compile(N,X,q);return new Promise(Y=>{function ct(){if(j.forEach(function(vt){Dt.get(vt).currentProgram.isReady()&&j.delete(vt)}),j.size===0){Y(N);return}setTimeout(ct,10)}Pt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let me=null;function Zt(N){me&&me(N)}function ge(){Ke.stop()}function ve(){Ke.start()}const Ke=new yf;Ke.setAnimationLoop(Zt),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(N){me=N,C.setAnimationLoop(N),N===null?Ke.stop():Ke.start()},C.addEventListener("sessionstart",ge),C.addEventListener("sessionend",ve),this.render=function(N,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(X),X=C.getCamera()),N.isScene===!0&&N.onBeforeRender(m,N,X,S),v=ht.get(N,M.length),v.init(X),M.push(v),$.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),nt.setFromProjectionMatrix($),G=this.localClippingEnabled,W=dt.init(this.clippingPlanes,G),y=wt.get(N,p.length),y.init(),p.push(y),C.enabled===!0&&C.isPresenting===!0){const ct=m.xr.getDepthSensingMesh();ct!==null&&Je(ct,X,-1/0,m.sortObjects)}Je(N,X,0,m.sortObjects),y.finish(),m.sortObjects===!0&&y.sort(z,R),mt=C.enabled===!1||C.isPresenting===!1||C.hasDepthSensing()===!1,mt&&lt.addToRenderList(y,N),this.info.render.frame++,W===!0&&dt.beginShadows();const q=v.state.shadowsArray;zt.render(q,N,X),W===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=y.opaque,Y=y.transmissive;if(v.setupLights(),X.isArrayCamera){const ct=X.cameras;if(Y.length>0)for(let vt=0,Mt=ct.length;vt<Mt;vt++){const At=ct[vt];Sn(j,Y,N,At)}mt&&lt.render(N);for(let vt=0,Mt=ct.length;vt<Mt;vt++){const At=ct[vt];Ji(y,N,At,At.viewport)}}else Y.length>0&&Sn(j,Y,N,X),mt&&lt.render(N),Ji(y,N,X);S!==null&&(It.updateMultisampleRenderTarget(S),It.updateRenderTargetMipmap(S)),N.isScene===!0&&N.onAfterRender(m,N,X),Bt.resetDefaultState(),A=-1,w=null,M.pop(),M.length>0?(v=M[M.length-1],W===!0&&dt.setGlobalState(m.clippingPlanes,v.state.camera)):v=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function Je(N,X,q,j){if(N.visible===!1)return;if(N.layers.test(X.layers)){if(N.isGroup)q=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(X);else if(N.isLight)v.pushLight(N),N.castShadow&&v.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||nt.intersectsSprite(N)){j&&it.setFromMatrixPosition(N.matrixWorld).applyMatrix4($);const vt=st.update(N),Mt=N.material;Mt.visible&&y.push(N,vt,Mt,q,it.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||nt.intersectsObject(N))){const vt=st.update(N),Mt=N.material;if(j&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),it.copy(N.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),it.copy(vt.boundingSphere.center)),it.applyMatrix4(N.matrixWorld).applyMatrix4($)),Array.isArray(Mt)){const At=vt.groups;for(let Ft=0,kt=At.length;Ft<kt;Ft++){const Nt=At[Ft],jt=Mt[Nt.materialIndex];jt&&jt.visible&&y.push(N,vt,jt,q,it.z,Nt)}}else Mt.visible&&y.push(N,vt,Mt,q,it.z,null)}}const ct=N.children;for(let vt=0,Mt=ct.length;vt<Mt;vt++)Je(ct[vt],X,q,j)}function Ji(N,X,q,j){const Y=N.opaque,ct=N.transmissive,vt=N.transparent;v.setupLightsView(q),W===!0&&dt.setGlobalState(m.clippingPlanes,q),j&&St.viewport(b.copy(j)),Y.length>0&&wn(Y,X,q),ct.length>0&&wn(ct,X,q),vt.length>0&&wn(vt,X,q),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Sn(N,X,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[j.id]===void 0&&(v.state.transmissionRenderTarget[j.id]=new si(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float")?Fi:_n,minFilter:Zn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const ct=v.state.transmissionRenderTarget[j.id],vt=j.viewport||b;ct.setSize(vt.z,vt.w);const Mt=m.getRenderTarget();m.setRenderTarget(ct),m.getClearColor(D),F=m.getClearAlpha(),F<1&&m.setClearColor(16777215,.5),mt?lt.render(q):m.clear();const At=m.toneMapping;m.toneMapping=yn;const Ft=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),v.setupLightsView(j),W===!0&&dt.setGlobalState(m.clippingPlanes,j),wn(N,q,j),It.updateMultisampleRenderTarget(ct),It.updateRenderTargetMipmap(ct),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Nt=0,jt=X.length;Nt<jt;Nt++){const he=X[Nt],de=he.object,Qe=he.geometry,Jt=he.material,Tt=he.group;if(Jt.side===Me&&de.layers.test(j.layers)){const Ue=Jt.side;Jt.side=Ze,Jt.needsUpdate=!0,Lc(de,q,j,Qe,Jt,Tt),Jt.side=Ue,Jt.needsUpdate=!0,kt=!0}}kt===!0&&(It.updateMultisampleRenderTarget(ct),It.updateRenderTargetMipmap(ct))}m.setRenderTarget(Mt),m.setClearColor(D,F),Ft!==void 0&&(j.viewport=Ft),m.toneMapping=At}function wn(N,X,q){const j=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,ct=N.length;Y<ct;Y++){const vt=N[Y],Mt=vt.object,At=vt.geometry,Ft=j===null?vt.material:j,kt=vt.group;Mt.layers.test(q.layers)&&Lc(Mt,X,q,At,Ft,kt)}}function Lc(N,X,q,j,Y,ct){N.onBeforeRender(m,X,q,j,Y,ct),N.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),Y.onBeforeRender(m,X,q,j,N,ct),Y.transparent===!0&&Y.side===Me&&Y.forceSinglePass===!1?(Y.side=Ze,Y.needsUpdate=!0,m.renderBufferDirect(q,X,j,Y,N,ct),Y.side=Mn,Y.needsUpdate=!0,m.renderBufferDirect(q,X,j,Y,N,ct),Y.side=Me):m.renderBufferDirect(q,X,j,Y,N,ct),N.onAfterRender(m,X,q,j,Y,ct)}function la(N,X,q){X.isScene!==!0&&(X=ft);const j=Dt.get(N),Y=v.state.lights,ct=v.state.shadowsArray,vt=Y.state.version,Mt=rt.getParameters(N,Y.state,ct,X,q),At=rt.getProgramCacheKey(Mt);let Ft=j.programs;j.environment=N.isMeshStandardMaterial?X.environment:null,j.fog=X.fog,j.envMap=(N.isMeshStandardMaterial?O:qt).get(N.envMap||j.environment),j.envMapRotation=j.environment!==null&&N.envMap===null?X.environmentRotation:N.envMapRotation,Ft===void 0&&(N.addEventListener("dispose",at),Ft=new Map,j.programs=Ft);let kt=Ft.get(At);if(kt!==void 0){if(j.currentProgram===kt&&j.lightsStateVersion===vt)return Uc(N,Mt),kt}else Mt.uniforms=rt.getUniforms(N),N.onBuild(q,Mt,m),N.onBeforeCompile(Mt,m),kt=rt.acquireProgram(Mt,At),Ft.set(At,kt),j.uniforms=Mt.uniforms;const Nt=j.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Nt.clippingPlanes=dt.uniform),Uc(N,Mt),j.needsLights=ap(N),j.lightsStateVersion=vt,j.needsLights&&(Nt.ambientLightColor.value=Y.state.ambient,Nt.lightProbe.value=Y.state.probe,Nt.directionalLights.value=Y.state.directional,Nt.directionalLightShadows.value=Y.state.directionalShadow,Nt.spotLights.value=Y.state.spot,Nt.spotLightShadows.value=Y.state.spotShadow,Nt.rectAreaLights.value=Y.state.rectArea,Nt.ltc_1.value=Y.state.rectAreaLTC1,Nt.ltc_2.value=Y.state.rectAreaLTC2,Nt.pointLights.value=Y.state.point,Nt.pointLightShadows.value=Y.state.pointShadow,Nt.hemisphereLights.value=Y.state.hemi,Nt.directionalShadowMap.value=Y.state.directionalShadowMap,Nt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Nt.spotShadowMap.value=Y.state.spotShadowMap,Nt.spotLightMatrix.value=Y.state.spotLightMatrix,Nt.spotLightMap.value=Y.state.spotLightMap,Nt.pointShadowMap.value=Y.state.pointShadowMap,Nt.pointShadowMatrix.value=Y.state.pointShadowMatrix),j.currentProgram=kt,j.uniformsList=null,kt}function Fc(N){if(N.uniformsList===null){const X=N.currentProgram.getUniforms();N.uniformsList=ao.seqWithValue(X.seq,N.uniforms)}return N.uniformsList}function Uc(N,X){const q=Dt.get(N);q.outputColorSpace=X.outputColorSpace,q.batching=X.batching,q.batchingColor=X.batchingColor,q.instancing=X.instancing,q.instancingColor=X.instancingColor,q.instancingMorph=X.instancingMorph,q.skinning=X.skinning,q.morphTargets=X.morphTargets,q.morphNormals=X.morphNormals,q.morphColors=X.morphColors,q.morphTargetsCount=X.morphTargetsCount,q.numClippingPlanes=X.numClippingPlanes,q.numIntersection=X.numClipIntersection,q.vertexAlphas=X.vertexAlphas,q.vertexTangents=X.vertexTangents,q.toneMapping=X.toneMapping}function sp(N,X,q,j,Y){X.isScene!==!0&&(X=ft),It.resetTextureUnits();const ct=X.fog,vt=j.isMeshStandardMaterial?X.environment:null,Mt=S===null?m.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:bn,At=(j.isMeshStandardMaterial?O:qt).get(j.envMap||vt),Ft=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,kt=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Nt=!!q.morphAttributes.position,jt=!!q.morphAttributes.normal,he=!!q.morphAttributes.color;let de=yn;j.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(de=m.toneMapping);const Qe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Jt=Qe!==void 0?Qe.length:0,Tt=Dt.get(j),Ue=v.state.lights;if(W===!0&&(G===!0||N!==w)){const ri=N===w&&j.id===A;dt.setState(j,N,ri)}let ee=!1;j.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Ue.state.version||Tt.outputColorSpace!==Mt||Y.isBatchedMesh&&Tt.batching===!1||!Y.isBatchedMesh&&Tt.batching===!0||Y.isBatchedMesh&&Tt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Tt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Tt.instancing===!1||!Y.isInstancedMesh&&Tt.instancing===!0||Y.isSkinnedMesh&&Tt.skinning===!1||!Y.isSkinnedMesh&&Tt.skinning===!0||Y.isInstancedMesh&&Tt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Tt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Tt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Tt.instancingMorph===!1&&Y.morphTexture!==null||Tt.envMap!==At||j.fog===!0&&Tt.fog!==ct||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==dt.numPlanes||Tt.numIntersection!==dt.numIntersection)||Tt.vertexAlphas!==Ft||Tt.vertexTangents!==kt||Tt.morphTargets!==Nt||Tt.morphNormals!==jt||Tt.morphColors!==he||Tt.toneMapping!==de||Tt.morphTargetsCount!==Jt)&&(ee=!0):(ee=!0,Tt.__version=j.version);let ki=Tt.currentProgram;ee===!0&&(ki=la(j,X,Y));let ca=!1,An=!1,Uo=!1;const we=ki.getUniforms(),Qi=Tt.uniforms;if(St.useProgram(ki.program)&&(ca=!0,An=!0,Uo=!0),j.id!==A&&(A=j.id,An=!0),ca||w!==N){we.setValue(B,"projectionMatrix",N.projectionMatrix),we.setValue(B,"viewMatrix",N.matrixWorldInverse);const ri=we.map.cameraPosition;ri!==void 0&&ri.setValue(B,it.setFromMatrixPosition(N.matrixWorld)),Xt.logarithmicDepthBuffer&&we.setValue(B,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&we.setValue(B,"isOrthographic",N.isOrthographicCamera===!0),w!==N&&(w=N,An=!0,Uo=!0)}if(Y.isSkinnedMesh){we.setOptional(B,Y,"bindMatrix"),we.setOptional(B,Y,"bindMatrixInverse");const ri=Y.skeleton;ri&&(ri.boneTexture===null&&ri.computeBoneTexture(),we.setValue(B,"boneTexture",ri.boneTexture,It))}Y.isBatchedMesh&&(we.setOptional(B,Y,"batchingTexture"),we.setValue(B,"batchingTexture",Y._matricesTexture,It),we.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&we.setValue(B,"batchingColorTexture",Y._colorsTexture,It));const ko=q.morphAttributes;if((ko.position!==void 0||ko.normal!==void 0||ko.color!==void 0)&&bt.update(Y,q,ki),(An||Tt.receiveShadow!==Y.receiveShadow)&&(Tt.receiveShadow=Y.receiveShadow,we.setValue(B,"receiveShadow",Y.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Qi.envMap.value=At,Qi.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&X.environment!==null&&(Qi.envMapIntensity.value=X.environmentIntensity),An&&(we.setValue(B,"toneMappingExposure",m.toneMappingExposure),Tt.needsLights&&rp(Qi,Uo),ct&&j.fog===!0&&ot.refreshFogUniforms(Qi,ct),ot.refreshMaterialUniforms(Qi,j,k,L,v.state.transmissionRenderTarget[N.id]),ao.upload(B,Fc(Tt),Qi,It)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ao.upload(B,Fc(Tt),Qi,It),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&we.setValue(B,"center",Y.center),we.setValue(B,"modelViewMatrix",Y.modelViewMatrix),we.setValue(B,"normalMatrix",Y.normalMatrix),we.setValue(B,"modelMatrix",Y.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const ri=j.uniformsGroups;for(let Oo=0,op=ri.length;Oo<op;Oo++){const kc=ri[Oo];Vt.update(kc,ki),Vt.bind(kc,ki)}}return ki}function rp(N,X){N.ambientLightColor.needsUpdate=X,N.lightProbe.needsUpdate=X,N.directionalLights.needsUpdate=X,N.directionalLightShadows.needsUpdate=X,N.pointLights.needsUpdate=X,N.pointLightShadows.needsUpdate=X,N.spotLights.needsUpdate=X,N.spotLightShadows.needsUpdate=X,N.rectAreaLights.needsUpdate=X,N.hemisphereLights.needsUpdate=X}function ap(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(N,X,q){Dt.get(N.texture).__webglTexture=X,Dt.get(N.depthTexture).__webglTexture=q;const j=Dt.get(N);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=q===void 0,j.__autoAllocateDepthBuffer||Pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,X){const q=Dt.get(N);q.__webglFramebuffer=X,q.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(N,X=0,q=0){S=N,T=X,_=q;let j=!0,Y=null,ct=!1,vt=!1;if(N){const At=Dt.get(N);At.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(B.FRAMEBUFFER,null),j=!1):At.__webglFramebuffer===void 0?It.setupRenderTarget(N):At.__hasExternalTextures&&It.rebindTextures(N,Dt.get(N.texture).__webglTexture,Dt.get(N.depthTexture).__webglTexture);const Ft=N.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(vt=!0);const kt=Dt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(kt[X])?Y=kt[X][q]:Y=kt[X],ct=!0):N.samples>0&&It.useMultisampledRTT(N)===!1?Y=Dt.get(N).__webglMultisampledFramebuffer:Array.isArray(kt)?Y=kt[q]:Y=kt,b.copy(N.viewport),E.copy(N.scissor),I=N.scissorTest}else b.copy(H).multiplyScalar(k).floor(),E.copy(J).multiplyScalar(k).floor(),I=et;if(St.bindFramebuffer(B.FRAMEBUFFER,Y)&&j&&St.drawBuffers(N,Y),St.viewport(b),St.scissor(E),St.setScissorTest(I),ct){const At=Dt.get(N.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,At.__webglTexture,q)}else if(vt){const At=Dt.get(N.texture),Ft=X||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,At.__webglTexture,q||0,Ft)}A=-1},this.readRenderTargetPixels=function(N,X,q,j,Y,ct,vt){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Dt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&vt!==void 0&&(Mt=Mt[vt]),Mt){St.bindFramebuffer(B.FRAMEBUFFER,Mt);try{const At=N.texture,Ft=At.format,kt=At.type;if(!Xt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=N.width-j&&q>=0&&q<=N.height-Y&&B.readPixels(X,q,j,Y,pt.convert(Ft),pt.convert(kt),ct)}finally{const At=S!==null?Dt.get(S).__webglFramebuffer:null;St.bindFramebuffer(B.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(N,X,q,j,Y,ct,vt){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Dt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&vt!==void 0&&(Mt=Mt[vt]),Mt){St.bindFramebuffer(B.FRAMEBUFFER,Mt);try{const At=N.texture,Ft=At.format,kt=At.type;if(!Xt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=N.width-j&&q>=0&&q<=N.height-Y){const Nt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Nt),B.bufferData(B.PIXEL_PACK_BUFFER,ct.byteLength,B.STREAM_READ),B.readPixels(X,q,j,Y,pt.convert(Ft),pt.convert(kt),0),B.flush();const jt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);await bm(B,jt,4);try{B.bindBuffer(B.PIXEL_PACK_BUFFER,Nt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ct)}finally{B.deleteBuffer(Nt),B.deleteSync(jt)}return ct}}finally{const At=S!==null?Dt.get(S).__webglFramebuffer:null;St.bindFramebuffer(B.FRAMEBUFFER,At)}}},this.copyFramebufferToTexture=function(N,X=null,q=0){N.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,N=arguments[1]);const j=Math.pow(2,-q),Y=Math.floor(N.image.width*j),ct=Math.floor(N.image.height*j),vt=X!==null?X.x:0,Mt=X!==null?X.y:0;It.setTexture2D(N,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,vt,Mt,Y,ct),St.unbindTexture()},this.copyTextureToTexture=function(N,X,q=null,j=null,Y=0){N.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,N=arguments[1],X=arguments[2],Y=arguments[3]||0,q=null);let ct,vt,Mt,At,Ft,kt;q!==null?(ct=q.max.x-q.min.x,vt=q.max.y-q.min.y,Mt=q.min.x,At=q.min.y):(ct=N.image.width,vt=N.image.height,Mt=0,At=0),j!==null?(Ft=j.x,kt=j.y):(Ft=0,kt=0);const Nt=pt.convert(X.format),jt=pt.convert(X.type);It.setTexture2D(X,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const he=B.getParameter(B.UNPACK_ROW_LENGTH),de=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Qe=B.getParameter(B.UNPACK_SKIP_PIXELS),Jt=B.getParameter(B.UNPACK_SKIP_ROWS),Tt=B.getParameter(B.UNPACK_SKIP_IMAGES),Ue=N.isCompressedTexture?N.mipmaps[Y]:N.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Ue.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ue.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Mt),B.pixelStorei(B.UNPACK_SKIP_ROWS,At),N.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Y,Ft,kt,ct,vt,Nt,jt,Ue.data):N.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Y,Ft,kt,Ue.width,Ue.height,Nt,Ue.data):B.texSubImage2D(B.TEXTURE_2D,Y,Ft,kt,Nt,jt,Ue),B.pixelStorei(B.UNPACK_ROW_LENGTH,he),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,de),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Qe),B.pixelStorei(B.UNPACK_SKIP_ROWS,Jt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Tt),Y===0&&X.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(N,X,q=null,j=null,Y=0){N.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,j=arguments[1]||null,N=arguments[2],X=arguments[3],Y=arguments[4]||0);let ct,vt,Mt,At,Ft,kt,Nt,jt,he;const de=N.isCompressedTexture?N.mipmaps[Y]:N.image;q!==null?(ct=q.max.x-q.min.x,vt=q.max.y-q.min.y,Mt=q.max.z-q.min.z,At=q.min.x,Ft=q.min.y,kt=q.min.z):(ct=de.width,vt=de.height,Mt=de.depth,At=0,Ft=0,kt=0),j!==null?(Nt=j.x,jt=j.y,he=j.z):(Nt=0,jt=0,he=0);const Qe=pt.convert(X.format),Jt=pt.convert(X.type);let Tt;if(X.isData3DTexture)It.setTexture3D(X,0),Tt=B.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)It.setTexture2DArray(X,0),Tt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const Ue=B.getParameter(B.UNPACK_ROW_LENGTH),ee=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ki=B.getParameter(B.UNPACK_SKIP_PIXELS),ca=B.getParameter(B.UNPACK_SKIP_ROWS),An=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,de.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,de.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,At),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ft),B.pixelStorei(B.UNPACK_SKIP_IMAGES,kt),N.isDataTexture||N.isData3DTexture?B.texSubImage3D(Tt,Y,Nt,jt,he,ct,vt,Mt,Qe,Jt,de.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(Tt,Y,Nt,jt,he,ct,vt,Mt,Qe,de.data):B.texSubImage3D(Tt,Y,Nt,jt,he,ct,vt,Mt,Qe,Jt,de),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ue),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ee),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ki),B.pixelStorei(B.UNPACK_SKIP_ROWS,ca),B.pixelStorei(B.UNPACK_SKIP_IMAGES,An),Y===0&&X.generateMipmaps&&B.generateMipmap(Tt),St.unbindTexture()},this.initRenderTarget=function(N){Dt.get(N).__webglFramebuffer===void 0&&It.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?It.setTextureCube(N,0):N.isData3DTexture?It.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?It.setTexture2DArray(N,0):It.setTexture2D(N,0),St.unbindTexture()},this.resetState=function(){T=0,_=0,S=null,St.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===vc?"display-p3":"srgb",e.unpackColorSpace=Kt.workingColorSpace===Po?"display-p3":"srgb"}}class Sc{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=i}clone(){return new Sc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ls extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Rx extends Ve{constructor(t=null,e=1,i=1,n,s,a,o,l,c=$e,h=$e,d,u){super(null,a,o,l,c,h,n,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xn extends xt{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Cs=new te,sd=new te,Ia=[],rd=new rs,Px=new te,br=new _e,Sr=new as;class yo extends _e{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Px)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new rs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Cs),rd.copy(t.boundingBox).applyMatrix4(Cs),this.boundingBox.union(rd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new as),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Cs),Sr.copy(t.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(Sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sr.copy(this.boundingSphere),Sr.applyMatrix4(i),t.ray.intersectsSphere(Sr)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Cs),sd.multiplyMatrices(i,Cs),br.matrixWorld=sd,br.raycast(t,Ia);for(let a=0,o=Ia.length;a<o;a++){const l=Ia[a];l.instanceId=s,l.object=this,e.push(l)}Ia.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new xn(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Rx(new Float32Array(n*this.count),n,this.count,tf,qi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class xo extends os{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Mo=new V,_o=new V,ad=new te,wr=new Do,Na=new as,gl=new V,od=new V;class Dx extends pe{constructor(t=new ie,e=new xo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)Mo.fromBufferAttribute(e,n-1),_o.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Mo.distanceTo(_o);t.setAttribute("lineDistance",new Re(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(n),Na.radius+=s,t.ray.intersectsSphere(Na)===!1)return;ad.copy(n).invert(),wr.copy(t.ray).applyMatrix4(ad);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,v=g-1;y<v;y+=c){const p=h.getX(y),M=h.getX(y+1),m=La(this,t,wr,l,p,M);m&&e.push(m)}if(this.isLineLoop){const y=h.getX(g-1),v=h.getX(f),p=La(this,t,wr,l,y,v);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=f,v=g-1;y<v;y+=c){const p=La(this,t,wr,l,y,y+1);p&&e.push(p)}if(this.isLineLoop){const y=La(this,t,wr,l,g-1,f);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function La(r,t,e,i,n,s){const a=r.geometry.attributes.position;if(Mo.fromBufferAttribute(a,n),_o.fromBufferAttribute(a,s),e.distanceSqToSegment(Mo,_o,gl,od)>i)return;gl.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(gl);if(!(l<t.near||l>t.far))return{distance:l,point:od.clone().applyMatrix4(r.matrixWorld),index:n,face:null,faceIndex:null,object:r}}const ld=new V,cd=new V;class bo extends Dx{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)ld.fromBufferAttribute(e,n),cd.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+ld.distanceTo(cd);t.setAttribute("lineDistance",new Re(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ix extends os{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const hd=new te,tc=new Do,Fa=new as,Ua=new V;class Af extends pe{constructor(t=new ie,e=new Ix){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(n),Fa.radius+=s,t.ray.intersectsSphere(Fa)===!1)return;hd.copy(n).invert(),tc.copy(t.ray).applyMatrix4(hd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,y=f;g<y;g++){const v=c.getX(g);Ua.fromBufferAttribute(d,v),dd(Ua,v,l,n,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,y=f;g<y;g++)Ua.fromBufferAttribute(d,g),dd(Ua,g,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function dd(r,t,e,i,n,s,a){const o=tc.distanceSqToPoint(r);if(o<e){const l=new V;tc.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class wc extends ie{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new V,h=new yt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=i+d/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(o,3)),this.setAttribute("uv",new Re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ac extends ie{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],d=[],u=[],f=[];let g=0;const y=[],v=i/2;let p=0;M(),a===!1&&(t>0&&m(!0),e>0&&m(!1)),this.setIndex(h),this.setAttribute("position",new Re(d,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(f,2));function M(){const x=new V,T=new V;let _=0;const S=(e-t)/i;for(let A=0;A<=s;A++){const w=[],b=A/s,E=b*(e-t)+t;for(let I=0;I<=n;I++){const D=I/n,F=D*l+o,U=Math.sin(F),L=Math.cos(F);T.x=E*U,T.y=-b*i+v,T.z=E*L,d.push(T.x,T.y,T.z),x.set(U,S,L).normalize(),u.push(x.x,x.y,x.z),f.push(D,1-b),w.push(g++)}y.push(w)}for(let A=0;A<n;A++)for(let w=0;w<s;w++){const b=y[w][A],E=y[w+1][A],I=y[w+1][A+1],D=y[w][A+1];h.push(b,E,D),h.push(E,I,D),_+=6}c.addGroup(p,_,0),p+=_}function m(x){const T=g,_=new yt,S=new V;let A=0;const w=x===!0?t:e,b=x===!0?1:-1;for(let I=1;I<=n;I++)d.push(0,v*b,0),u.push(0,b,0),f.push(.5,.5),g++;const E=g;for(let I=0;I<=n;I++){const F=I/n*l+o,U=Math.cos(F),L=Math.sin(F);S.x=w*L,S.y=v*b,S.z=w*U,d.push(S.x,S.y,S.z),u.push(0,b,0),_.x=U*.5+.5,_.y=L*.5*b+.5,f.push(_.x,_.y),g++}for(let I=0;I<n;I++){const D=T+I,F=E+I;x===!0?h.push(F,F+1,D):h.push(F+1,F,D),A+=3}c.addGroup(p,A,x===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ac(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Nx extends se{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lx extends os{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rf,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ef extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Fx extends Ef{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const vl=new te,ud=new V,fd=new V;class Ux{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mc,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ud.setFromMatrixPosition(t.matrixWorld),e.position.copy(ud),fd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fd),e.updateMatrixWorld(),vl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class kx extends Ux{constructor(){super(new _c(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yl extends Ef{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new kx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ox extends ie{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class zx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=pd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function pd(){return(typeof performance>"u"?Date:performance).now()}class md{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Le(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gc);const gd={type:"change"},xl={type:"start"},vd={type:"end"},ka=new Do,yd=new hn,Bx=Math.cos(70*wi.DEG2RAD);class gr extends ss{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cs.ROTATE,MIDDLE:cs.DOLLY,RIGHT:cs.PAN},this.touches={ONE:hs.ROTATE,TWO:hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",dt),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",dt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(gd),i.update(),s=n.NONE},this.update=function(){const C=new V,Q=new je().setFromUnitVectors(t.up,new V(0,1,0)),Z=Q.clone().invert(),tt=new V,at=new je,Et=new V,Ot=2*Math.PI;return function(me=null){const Zt=i.object.position;C.copy(Zt).sub(i.target),C.applyQuaternion(Q),o.setFromVector3(C),i.autoRotate&&s===n.NONE&&I(b(me)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ge=i.minAzimuthAngle,ve=i.maxAzimuthAngle;isFinite(ge)&&isFinite(ve)&&(ge<-Math.PI?ge+=Ot:ge>Math.PI&&(ge-=Ot),ve<-Math.PI?ve+=Ot:ve>Math.PI&&(ve-=Ot),ge<=ve?o.theta=Math.max(ge,Math.min(ve,o.theta)):o.theta=o.theta>(ge+ve)/2?Math.max(ge,o.theta):Math.min(ve,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Ke=!1;if(i.zoomToCursor&&_||i.object.isOrthographicCamera)o.radius=H(o.radius);else{const Je=o.radius;o.radius=H(o.radius*c),Ke=Je!=o.radius}if(C.setFromSpherical(o),C.applyQuaternion(Z),Zt.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),i.zoomToCursor&&_){let Je=null;if(i.object.isPerspectiveCamera){const Ji=C.length();Je=H(Ji*c);const Sn=Ji-Je;i.object.position.addScaledVector(x,Sn),i.object.updateMatrixWorld(),Ke=!!Sn}else if(i.object.isOrthographicCamera){const Ji=new V(T.x,T.y,0);Ji.unproject(i.object);const Sn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Ke=Sn!==i.object.zoom;const wn=new V(T.x,T.y,0);wn.unproject(i.object),i.object.position.sub(wn).add(Ji),i.object.updateMatrixWorld(),Je=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Je!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Je).add(i.object.position):(ka.origin.copy(i.object.position),ka.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ka.direction))<Bx?t.lookAt(i.target):(yd.setFromNormalAndCoplanarPoint(i.object.up,i.target),ka.intersectPlane(yd,i.target))))}else if(i.object.isOrthographicCamera){const Je=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),Je!==i.object.zoom&&(i.object.updateProjectionMatrix(),Ke=!0)}return c=1,_=!1,Ke||tt.distanceToSquared(i.object.position)>a||8*(1-at.dot(i.object.quaternion))>a||Et.distanceToSquared(i.target)>a?(i.dispatchEvent(gd),tt.copy(i.object.position),at.copy(i.object.quaternion),Et.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",bt),i.domElement.removeEventListener("pointerdown",qt),i.domElement.removeEventListener("pointercancel",P),i.domElement.removeEventListener("wheel",rt),i.domElement.removeEventListener("pointermove",O),i.domElement.removeEventListener("pointerup",P),i.domElement.getRootNode().removeEventListener("keydown",wt,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",dt),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=n.NONE;const a=1e-6,o=new md,l=new md;let c=1;const h=new V,d=new yt,u=new yt,f=new yt,g=new yt,y=new yt,v=new yt,p=new yt,M=new yt,m=new yt,x=new V,T=new yt;let _=!1;const S=[],A={};let w=!1;function b(C){return C!==null?2*Math.PI/60*i.autoRotateSpeed*C:2*Math.PI/60/60*i.autoRotateSpeed}function E(C){const Q=Math.abs(C*.01);return Math.pow(.95,i.zoomSpeed*Q)}function I(C){l.theta-=C}function D(C){l.phi-=C}const F=function(){const C=new V;return function(Z,tt){C.setFromMatrixColumn(tt,0),C.multiplyScalar(-Z),h.add(C)}}(),U=function(){const C=new V;return function(Z,tt){i.screenSpacePanning===!0?C.setFromMatrixColumn(tt,1):(C.setFromMatrixColumn(tt,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(Z),h.add(C)}}(),L=function(){const C=new V;return function(Z,tt){const at=i.domElement;if(i.object.isPerspectiveCamera){const Et=i.object.position;C.copy(Et).sub(i.target);let Ot=C.length();Ot*=Math.tan(i.object.fov/2*Math.PI/180),F(2*Z*Ot/at.clientHeight,i.object.matrix),U(2*tt*Ot/at.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(F(Z*(i.object.right-i.object.left)/i.object.zoom/at.clientWidth,i.object.matrix),U(tt*(i.object.top-i.object.bottom)/i.object.zoom/at.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function k(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function z(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function R(C,Q){if(!i.zoomToCursor)return;_=!0;const Z=i.domElement.getBoundingClientRect(),tt=C-Z.left,at=Q-Z.top,Et=Z.width,Ot=Z.height;T.x=tt/Et*2-1,T.y=-(at/Ot)*2+1,x.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function H(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function J(C){d.set(C.clientX,C.clientY)}function et(C){R(C.clientX,C.clientX),p.set(C.clientX,C.clientY)}function nt(C){g.set(C.clientX,C.clientY)}function W(C){u.set(C.clientX,C.clientY),f.subVectors(u,d).multiplyScalar(i.rotateSpeed);const Q=i.domElement;I(2*Math.PI*f.x/Q.clientHeight),D(2*Math.PI*f.y/Q.clientHeight),d.copy(u),i.update()}function G(C){M.set(C.clientX,C.clientY),m.subVectors(M,p),m.y>0?k(E(m.y)):m.y<0&&z(E(m.y)),p.copy(M),i.update()}function $(C){y.set(C.clientX,C.clientY),v.subVectors(y,g).multiplyScalar(i.panSpeed),L(v.x,v.y),g.copy(y),i.update()}function it(C){R(C.clientX,C.clientY),C.deltaY<0?z(E(C.deltaY)):C.deltaY>0&&k(E(C.deltaY)),i.update()}function ft(C){let Q=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?D(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):L(0,i.keyPanSpeed),Q=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?D(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):L(0,-i.keyPanSpeed),Q=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?I(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):L(i.keyPanSpeed,0),Q=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?I(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):L(-i.keyPanSpeed,0),Q=!0;break}Q&&(C.preventDefault(),i.update())}function mt(C){if(S.length===1)d.set(C.pageX,C.pageY);else{const Q=Vt(C),Z=.5*(C.pageX+Q.x),tt=.5*(C.pageY+Q.y);d.set(Z,tt)}}function _t(C){if(S.length===1)g.set(C.pageX,C.pageY);else{const Q=Vt(C),Z=.5*(C.pageX+Q.x),tt=.5*(C.pageY+Q.y);g.set(Z,tt)}}function B(C){const Q=Vt(C),Z=C.pageX-Q.x,tt=C.pageY-Q.y,at=Math.sqrt(Z*Z+tt*tt);p.set(0,at)}function Rt(C){i.enableZoom&&B(C),i.enablePan&&_t(C)}function Pt(C){i.enableZoom&&B(C),i.enableRotate&&mt(C)}function Xt(C){if(S.length==1)u.set(C.pageX,C.pageY);else{const Z=Vt(C),tt=.5*(C.pageX+Z.x),at=.5*(C.pageY+Z.y);u.set(tt,at)}f.subVectors(u,d).multiplyScalar(i.rotateSpeed);const Q=i.domElement;I(2*Math.PI*f.x/Q.clientHeight),D(2*Math.PI*f.y/Q.clientHeight),d.copy(u)}function St(C){if(S.length===1)y.set(C.pageX,C.pageY);else{const Q=Vt(C),Z=.5*(C.pageX+Q.x),tt=.5*(C.pageY+Q.y);y.set(Z,tt)}v.subVectors(y,g).multiplyScalar(i.panSpeed),L(v.x,v.y),g.copy(y)}function Ut(C){const Q=Vt(C),Z=C.pageX-Q.x,tt=C.pageY-Q.y,at=Math.sqrt(Z*Z+tt*tt);M.set(0,at),m.set(0,Math.pow(M.y/p.y,i.zoomSpeed)),k(m.y),p.copy(M);const Et=(C.pageX+Q.x)*.5,Ot=(C.pageY+Q.y)*.5;R(Et,Ot)}function Dt(C){i.enableZoom&&Ut(C),i.enablePan&&St(C)}function It(C){i.enableZoom&&Ut(C),i.enableRotate&&Xt(C)}function qt(C){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",O),i.domElement.addEventListener("pointerup",P)),!pt(C)&&(Wt(C),C.pointerType==="touch"?zt(C):K(C)))}function O(C){i.enabled!==!1&&(C.pointerType==="touch"?lt(C):st(C))}function P(C){switch(Lt(C),S.length){case 0:i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",O),i.domElement.removeEventListener("pointerup",P),i.dispatchEvent(vd),s=n.NONE;break;case 1:const Q=S[0],Z=A[Q];zt({pointerId:Q,pageX:Z.x,pageY:Z.y});break}}function K(C){let Q;switch(C.button){case 0:Q=i.mouseButtons.LEFT;break;case 1:Q=i.mouseButtons.MIDDLE;break;case 2:Q=i.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case cs.DOLLY:if(i.enableZoom===!1)return;et(C),s=n.DOLLY;break;case cs.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;nt(C),s=n.PAN}else{if(i.enableRotate===!1)return;J(C),s=n.ROTATE}break;case cs.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;J(C),s=n.ROTATE}else{if(i.enablePan===!1)return;nt(C),s=n.PAN}break;default:s=n.NONE}s!==n.NONE&&i.dispatchEvent(xl)}function st(C){switch(s){case n.ROTATE:if(i.enableRotate===!1)return;W(C);break;case n.DOLLY:if(i.enableZoom===!1)return;G(C);break;case n.PAN:if(i.enablePan===!1)return;$(C);break}}function rt(C){i.enabled===!1||i.enableZoom===!1||s!==n.NONE||(C.preventDefault(),i.dispatchEvent(xl),it(ot(C)),i.dispatchEvent(vd))}function ot(C){const Q=C.deltaMode,Z={clientX:C.clientX,clientY:C.clientY,deltaY:C.deltaY};switch(Q){case 1:Z.deltaY*=16;break;case 2:Z.deltaY*=100;break}return C.ctrlKey&&!w&&(Z.deltaY*=10),Z}function wt(C){C.key==="Control"&&(w=!0,i.domElement.getRootNode().addEventListener("keyup",ht,{passive:!0,capture:!0}))}function ht(C){C.key==="Control"&&(w=!1,i.domElement.getRootNode().removeEventListener("keyup",ht,{passive:!0,capture:!0}))}function dt(C){i.enabled===!1||i.enablePan===!1||ft(C)}function zt(C){switch(Bt(C),S.length){case 1:switch(i.touches.ONE){case hs.ROTATE:if(i.enableRotate===!1)return;mt(C),s=n.TOUCH_ROTATE;break;case hs.PAN:if(i.enablePan===!1)return;_t(C),s=n.TOUCH_PAN;break;default:s=n.NONE}break;case 2:switch(i.touches.TWO){case hs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Rt(C),s=n.TOUCH_DOLLY_PAN;break;case hs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Pt(C),s=n.TOUCH_DOLLY_ROTATE;break;default:s=n.NONE}break;default:s=n.NONE}s!==n.NONE&&i.dispatchEvent(xl)}function lt(C){switch(Bt(C),s){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;Xt(C),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;St(C),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Dt(C),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;It(C),i.update();break;default:s=n.NONE}}function bt(C){i.enabled!==!1&&C.preventDefault()}function Wt(C){S.push(C.pointerId)}function Lt(C){delete A[C.pointerId];for(let Q=0;Q<S.length;Q++)if(S[Q]==C.pointerId){S.splice(Q,1);return}}function pt(C){for(let Q=0;Q<S.length;Q++)if(S[Q]==C.pointerId)return!0;return!1}function Bt(C){let Q=A[C.pointerId];Q===void 0&&(Q=new yt,A[C.pointerId]=Q),Q.set(C.pageX,C.pageY)}function Vt(C){const Q=C.pointerId===S[0]?S[1]:S[0];return A[Q]}i.domElement.addEventListener("contextmenu",bt),i.domElement.addEventListener("pointerdown",qt),i.domElement.addEventListener("pointercancel",P),i.domElement.addEventListener("wheel",rt,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",wt,{passive:!0,capture:!0}),this.update()}}class Vx{state;constructor(t=305419896){this.state=t>>>0,this.state===0&&(this.state=3735928559)}next(){let t=this.state;return t^=t<<13,t^=t>>>17,t^=t<<5,this.state=t>>>0,this.state}float(){return this.next()/4294967296}signed(){return this.next()/2147483648-1}below(t){return Math.floor(this.next()*t/4294967296)}seed(t){this.state=t>>>0||3735928559}}function ue(r,t,e){return r<t?t:r>e?e:r}function Tf(r,t,e){const i=ue((e-r)/(t-r),0,1);return i*i*(3-2*i)}const oo=Math.PI*2;class xd{constructor(t,e,i){this.lo=t,this.hi=e,this.curve=i}stageOf(t){const e=this.hi-this.lo;if(e<1e-6)return t<this.lo?0:1;const i=ue((t-this.lo)/e,0,1);switch(this.curve){case 0:return i;case 1:return i*i;case 2:return Math.sqrt(i);case 3:return Tf(0,1,i)}}blend(t,e,i){const n=this.stageOf(t);return e*(1-i*(1-n))}blendRange(t,e,i,n){const s=this.stageOf(t),a=e+(i-e)*s;return i*(1-n)+a*n}}const Gx=`
attribute vec4 pColor;
attribute float pSize;

varying vec4 vColor;
varying float vSize;

void main() {
  vColor = pColor;
  vSize = pSize;
  vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPos;
  // PerspectiveCamera: size scales with 1/-mvPos.z (matches OF behaviour)
  float ps = pSize * (300.0 / -mvPos.z);
  gl_PointSize = clamp(ps, 1.0, 96.0);
}
`,Hx=`
precision highp float;
varying vec4 vColor;
varying float vSize;

uniform float uBrightness;
uniform float uSpecular;
uniform float uAmbient;
uniform float uGlow;

void main() {
  vec2 uv = gl_PointCoord * 2.0 - 1.0;
  float r = length(uv);
  // soft-edge mask using fwidth (matches C++ shader)
  float aa = clamp(fwidth(r), 0.001, 0.08);
  float mask = 1.0 - smoothstep(1.0 - aa, 1.0 + aa, r);
  if (mask <= 0.001) discard;

  // sphere shading: simple Lambert from light at upper-left + spec highlight
  vec3 n = vec3(uv, sqrt(max(0.0, 1.0 - r * r)));
  vec3 lightDir = normalize(vec3(-0.4, 0.5, 0.85));
  float diff = max(dot(n, lightDir), 0.0);
  float spec = pow(max(dot(reflect(-lightDir, n), vec3(0.0, 0.0, 1.0)), 0.0), 24.0);
  float lit = uAmbient + diff * (1.0 - uAmbient) + spec * uSpecular;

  // halo blooms outside the sphere surface (smoothstep around r=0.85→1.0)
  float halo = smoothstep(1.0, 0.85, r) * uGlow;
  vec3 col = vColor.rgb * (lit * uBrightness) + vColor.rgb * halo;
  float a = vColor.a * mask;
  gl_FragColor = vec4(col, a);
}
`;function In(r,t,e){const i=Math.sin(r*1.7+t*2.3+e*3.1),n=Math.sin(r*2.6-t*1.9+e*1.5+13),s=Math.sin(r*3.5+t*2.7-e*2.1+27);return(i+n+s)/3}const oi=24,Lo={particleCount:2e4,worldRadius:250,particleAlpha:.6,autoRotate:!0,hueBase:.55,hueRange:.2,brightness:1,noiseAmplitude:26.6,noiseScale:.0058884,noiseSpeed:.0415,vortexAmp:13.2,spiralAmp:0,curlAmp:11.6,attractorAmp:10.64,repellerAmp:307.2,flockSeparation:2.97,flockCohesion:4.34,flockCohesionSpeed:.033,flockNeighborRadius:81.37,mergeDistance:12.076,flockSpawnRate:225,flockMinAlive:.5,flockDamping:.92,particleSizeMin:2.881,particleSizeMax:10.7,fadeInFrames:20,fadeOutFrames:30,flashFrames:12,flashIntensity:1,accentChance:.1,accentSizeMul:2.5,clusterGridRes:5,clusterMinFlash:5,tailLength:0,tailAudioSensitivity:1,tailAlpha:.45,matBrightness:.208,matSpecular:.326,matAmbient:.163,matGlow:.702,conductorAmount:1,myceliumEnabled:!0,myceliumLinkMode:3,myceliumLinkDist:69.015,myceliumMaxLinks:5,myceliumKnnK:4,myceliumLifetime:90,myceliumNodeStride:5,myceliumAlpha:.35,myceliumFadeNear:0,myceliumLineWidth:0,myceliumFboBloom:!1,myceliumFboFade:.93};class Xx{N;posX;posY;posZ;velX;velY;velZ;colR;colG;colB;colA;size;mass;alive;lifetime;maxLifetime;fadeInT;fadeOutT;flashT;flashScale;trail;trailWriteIdx;trailCount;constructor(t){this.N=t,this.allocate(t)}allocate(t){this.N=t,this.posX=new Float32Array(t),this.posY=new Float32Array(t),this.posZ=new Float32Array(t),this.velX=new Float32Array(t),this.velY=new Float32Array(t),this.velZ=new Float32Array(t),this.colR=new Float32Array(t),this.colG=new Float32Array(t),this.colB=new Float32Array(t),this.colA=new Float32Array(t),this.size=new Float32Array(t),this.mass=new Float32Array(t),this.alive=new Uint8Array(t),this.lifetime=new Int32Array(t),this.maxLifetime=new Int32Array(t),this.fadeInT=new Int32Array(t),this.fadeOutT=new Int32Array(t),this.flashT=new Int32Array(t),this.flashScale=new Float32Array(t),this.trail=new Float32Array(t*oi*3),this.trailWriteIdx=new Int32Array(t),this.trailCount=new Int32Array(t)}}class Fo{p={...Lo};pool;prng=new Vx(12648430);noiseTime=0;generation=0;collisionsThisFrame=[];lastBboxMin=new V;lastBboxMax=new V;lastGridRes=5;lastBboxValid=!1;lastCellCounts=new Int32Array(0);audioInfluence=0;conductorValue=.5;sizeMultSmooth=1;scene;cam;particleGeom;particleMat;particlePoints;trailGeom;trailMat;trailLines;myceliumGeom;myceliumMat;myceliumLines;attrPos;attrCol;attrSize;displayPositions=new Float32Array(0);displayColors=new Float32Array(0);deformation;displayDensity=1;emphasis;opacity;networkEdges=[];networkAlpha=[];fboA;fboB;fboScene;fboCam;fboQuad;fboFadeMat;persistentLinks=new Map;myceliumLinkCount=0;constructor(t,e){this.scene=t,this.cam=e,this.pool=new Xx(this.p.particleCount),this.particleGeom=new ie,this.attrPos=new xt(new Float32Array(this.pool.N*3),3),this.attrCol=new xt(new Float32Array(this.pool.N*4),4),this.attrSize=new xt(new Float32Array(this.pool.N),1),this.particleGeom.setAttribute("position",this.attrPos),this.particleGeom.setAttribute("pColor",this.attrCol),this.particleGeom.setAttribute("pSize",this.attrSize),this.particleGeom.setDrawRange(0,0),this.particleMat=new se({vertexShader:Gx,fragmentShader:Hx,uniforms:{uBrightness:{value:.55},uSpecular:{value:.35},uAmbient:{value:.25},uGlow:{value:.3}},transparent:!0,depthWrite:!1,blending:qe}),this.particlePoints=new Af(this.particleGeom,this.particleMat),this.particlePoints.frustumCulled=!1,this.scene.add(this.particlePoints),this.trailGeom=new ie,this.trailGeom.setAttribute("position",new xt(new Float32Array(0),3)),this.trailGeom.setAttribute("color",new xt(new Float32Array(0),4)),this.trailMat=new xo({vertexColors:!0,transparent:!0,blending:qe,depthWrite:!1}),this.trailLines=new bo(this.trailGeom,this.trailMat),this.trailLines.frustumCulled=!1,this.scene.add(this.trailLines),this.myceliumGeom=new ie,this.myceliumGeom.setAttribute("position",new xt(new Float32Array(0),3)),this.myceliumGeom.setAttribute("color",new xt(new Float32Array(0),4)),this.myceliumMat=new xo({vertexColors:!0,transparent:!0,blending:qe,depthWrite:!1}),this.myceliumLines=new bo(this.myceliumGeom,this.myceliumMat),this.myceliumLines.frustumCulled=!1,this.scene.add(this.myceliumLines),this._initParticles()}reset(){this._initParticles(),this.collisionsThisFrame.length=0}resizeIfNeeded(){this.pool.N!==this.p.particleCount&&(this.pool.allocate(this.p.particleCount),this.attrPos=new xt(new Float32Array(this.pool.N*3),3),this.attrCol=new xt(new Float32Array(this.pool.N*4),4),this.attrSize=new xt(new Float32Array(this.pool.N),1),this.particleGeom.setAttribute("position",this.attrPos),this.particleGeom.setAttribute("pColor",this.attrCol),this.particleGeom.setAttribute("pSize",this.attrSize),this._initParticles())}_initParticles(){this.generation++;const t=this.pool;this.p.worldRadius;for(let e=0;e<t.N;e++)this._respawn(e,!0)}_respawn(t,e=!1){const i=this.pool,n=this.p.worldRadius*Math.cbrt(this.prng.float()),s=this.prng.float()*oo,a=Math.acos(2*this.prng.float()-1);i.posX[t]=n*Math.sin(a)*Math.cos(s),i.posY[t]=n*Math.sin(a)*Math.sin(s),i.posZ[t]=n*Math.cos(a),i.velX[t]=(this.prng.float()-.5)*.6,i.velY[t]=(this.prng.float()-.5)*.6,i.velZ[t]=(this.prng.float()-.5)*.6;const o=this.p.hueBase+(this.prng.float()-.5)*this.p.hueRange,l=new Ct().setHSL(o-Math.floor(o),.7,.6);i.colR[t]=l.r,i.colG[t]=l.g,i.colB[t]=l.b,i.colA[t]=this.p.particleAlpha,i.size[t]=this.p.particleSizeMin+this.prng.float()*(this.p.particleSizeMax-this.p.particleSizeMin),i.mass[t]=1+this.prng.float()*2,i.alive[t]=1,i.fadeInT[t]=e?0:this.p.fadeInFrames,i.fadeOutT[t]=0,i.flashT[t]=0,i.flashScale[t]=1,i.lifetime[t]=0,i.maxLifetime[t]=9999999,i.trailCount[t]=0,i.trailWriteIdx[t]=0}setAudioInfluence(t){this.audioInfluence=t}setConductorValue(t){this.conductorValue=t}getCollisionsThisFrame(){return this.collisionsThisFrame}getWorldRadius(){return this.p.worldRadius}getFieldAmpTotal(){const t=this.p.vortexAmp+this.p.spiralAmp+this.p.curlAmp;return ue(t/400,0,1)}getCurrentTailNormalized(){return ue(this.p.tailLength/oi,0,1)}getMyceliumLinkCount(){return this.myceliumLinkCount}setNetwork(t,e){this.networkEdges.length=0,this.networkAlpha.length=0;for(let i=0;i+1<t.length;i+=2){const n=t[i],s=t[i+1],a=e[i/2];!Number.isInteger(n)||!Number.isInteger(s)||n<0||s<0||n>=this.pool.N||s>=this.pool.N||!Number.isFinite(a)||a<=0||(this.networkEdges.push(n,s),this.networkAlpha.push(a))}}update(t){t>.1&&(t=.1),this.resizeIfNeeded(),this.collisionsThisFrame.length=0;const e=this.pool,i=e.N,n=this.p,s=n.worldRadius,a=s*s,o=n.flockDamping,l=60*t,c=n.conductorAmount,h=.5*(1-c)+this.conductorValue*c,d=1*(1-c)+(.5+h)*c;this.noiseTime+=n.noiseSpeed*t;const u=this.noiseTime,f=n.noiseScale,g=n.flockSeparation,y=n.flockCohesion,v=n.flockCohesionSpeed,p=n.flockNeighborRadius*n.flockNeighborRadius,M=n.mergeDistance*n.mergeDistance,m=10;let x=0;for(let _=0;_<i;_++){if(!e.alive[_])continue;if(x++,e.fadeInT[_]>0&&e.fadeInT[_]--,e.fadeOutT[_]>0&&(e.fadeOutT[_]--,e.fadeOutT[_]<=0)){e.alive[_]=0;continue}e.flashT[_]>0&&e.flashT[_]--;const S=e.posX[_],A=e.posY[_],w=e.posZ[_];let b=0,E=0,I=0;if(n.noiseAmplitude>0){const G=S*f,$=A*f,it=w*f;b+=In(G+u,$,it)*n.noiseAmplitude*d*.5,E+=In(G,$+u,it)*n.noiseAmplitude*d*.5,I+=In(G,$,it+u)*n.noiseAmplitude*d*.5}if(n.vortexAmp>0){const G=Math.sqrt(S*S+w*w)+1e-6;b+=-w/G*n.vortexAmp*d,I+=S/G*n.vortexAmp*d}if(n.spiralAmp>0){const G=Math.sqrt(S*S+w*w)+1e-6;b+=-w/G*n.spiralAmp*d*.8,I+=S/G*n.spiralAmp*d*.8,E+=.3*n.spiralAmp*d}if(n.curlAmp>0){const $=In((S+.5)*f,A*f,w*f+u),it=In((S-.5)*f,A*f,w*f+u),ft=In(S*f,(A+.5)*f,w*f+u),mt=In(S*f,(A-.5)*f,w*f+u);b+=(ft-mt)*n.curlAmp*d,E+=(it-$)*n.curlAmp*d}if(n.attractorAmp>0){const G=Math.sqrt(S*S+A*A+w*w)+1e-6;b-=S/G*n.attractorAmp*d,E-=A/G*n.attractorAmp*d,I-=w/G*n.attractorAmp*d}if(n.repellerAmp>0){const G=s*.02,$=S*S+A*A+w*w+G*G,it=Math.sqrt($);let ft=n.repellerAmp*d*1e3/$;const mt=n.repellerAmp*20;ft>mt&&(ft=mt),b+=S/it*ft,E+=A/it*ft,I+=w/it*ft}let D=0,F=0,U=0,L=0,k=0,z=0,R=0;for(let G=0;G<m;G++){const $=this.prng.below(i);if($===_||!e.alive[$])continue;const it=e.posX[$]-S,ft=e.posY[$]-A,mt=e.posZ[$]-w,_t=it*it+ft*ft+mt*mt;if(_t<p&&_t>.01){const B=Math.sqrt(_t);D-=it/B,F-=ft/B,U-=mt/B,L+=e.posX[$],k+=e.posY[$],z+=e.posZ[$],R++,_t<M&&this._tryMerge(_,$)}}R>0&&(b+=D*g/R,E+=F*g/R,I+=U*g/R,L=L/R-S,k=k/R-A,z=z/R-w,b+=L*y*v,E+=k*y*v,I+=z*y*v),e.velX[_]=(e.velX[_]+b*t)*o,e.velY[_]=(e.velY[_]+E*t)*o,e.velZ[_]=(e.velZ[_]+I*t)*o;const H=s*.5;e.velX[_]>H?e.velX[_]=H:e.velX[_]<-H&&(e.velX[_]=-H),e.velY[_]>H?e.velY[_]=H:e.velY[_]<-H&&(e.velY[_]=-H),e.velZ[_]>H?e.velZ[_]=H:e.velZ[_]<-H&&(e.velZ[_]=-H),e.posX[_]+=e.velX[_]*l,e.posY[_]+=e.velY[_]*l,e.posZ[_]+=e.velZ[_]*l;const J=e.posX[_],et=e.posY[_],nt=e.posZ[_];if(!isFinite(J)||!isFinite(et)||!isFinite(nt)||Math.abs(J)>s*5||Math.abs(et)>s*5||Math.abs(nt)>s*5){this._respawn(_);continue}const W=J*J+et*et+nt*nt;if(W>a*1.5){const G=Math.sqrt(W),$=(G-s)/s*.05;e.velX[_]-=J/G*$,e.velY[_]-=et/G*$,e.velZ[_]-=nt/G*$}if(n.tailLength>0){const G=_*oi*3+e.trailWriteIdx[_]*3;e.trail[G+0]=e.posX[_],e.trail[G+1]=e.posY[_],e.trail[G+2]=e.posZ[_],e.trailWriteIdx[_]=(e.trailWriteIdx[_]+1)%oi,e.trailCount[_]<oi&&e.trailCount[_]++}}const T=Math.floor(i*n.flockMinAlive);if(x<T){let _=Math.min(T-x,Math.floor(n.flockSpawnRate));for(let S=0;S<i&&_>0;S++)e.alive[S]||(this._respawn(S),_--)}}_tryMerge(t,e){const i=this.pool;if(!i.alive[t]||!i.alive[e])return;const n=i.mass[t]>=i.mass[e]?t:e,s=n===t?e:t,a=i.mass[n]+i.mass[s],o=i.size[n],l=i.size[s],c=this.prng.float()<this.p.accentChance;i.mass[n]=a,i.size[n]=Math.min(this.p.particleSizeMax,i.size[n]+i.size[s]*.25);const h=o/(o+l),d=1-h;i.colR[n]=i.colR[n]*h+i.colR[s]*d,i.colG[n]=i.colG[n]*h+i.colG[s]*d,i.colB[n]=i.colB[n]*h+i.colB[s]*d,i.flashT[n]=this.p.flashFrames,i.flashScale[n]=c?this.p.accentSizeMul:1,i.fadeOutT[s]=this.p.fadeOutFrames,this.collisionsThisFrame.push({pos:new V(i.posX[n],i.posY[n],i.posZ[n]),newMass:a,winnerSize:o,loserSize:l,color:new Ct(i.colR[n],i.colG[n],i.colB[n]),isAccent:c})}getClusters(t){const e=this.pool,i=e.N,n=Math.max(2,this.p.clusterGridRes),s=n**3;let a=1e9,o=1e9,l=1e9,c=-1e9,h=-1e9,d=-1e9,u=!1;for(let S=0;S<i;S++){if(!e.alive[S]||e.fadeOutT[S]>0)continue;const A=e.posX[S],w=e.posY[S],b=e.posZ[S];A<a&&(a=A),w<o&&(o=w),b<l&&(l=b),A>c&&(c=A),w>h&&(h=w),b>d&&(d=b),u=!0}if(!u)return this.lastBboxValid=!1,[];const f=2;a-=f,o-=f,l-=f,c+=f,h+=f,d+=f;let g=c-a,y=h-o,v=d-l;g<1&&(g=1),y<1&&(y=1),v<1&&(v=1);const p=new Array(s);for(let S=0;S<s;S++)p[S]={mass:0,count:0,posX:0,posY:0,posZ:0,velX:0,velY:0,velZ:0,colR:0,colG:0,colB:0};const M=n/g,m=n/y,x=n/v;this.lastCellCounts=new Int32Array(s);for(let S=0;S<i;S++){if(!e.alive[S]||e.fadeOutT[S]>0||e.flashT[S]<=0)continue;const A=(e.posX[S]-a)*M,w=(e.posY[S]-o)*m,b=(e.posZ[S]-l)*x,E=ue(A|0,0,n-1),I=ue(w|0,0,n-1),D=ue(b|0,0,n-1),F=E+I*n+D*n*n,U=p[F];U.mass+=e.mass[S],U.count++,U.posX+=e.posX[S],U.posY+=e.posY[S],U.posZ+=e.posZ[S],U.velX+=e.velX[S],U.velY+=e.velY[S],U.velZ+=e.velZ[S],U.colR+=e.colR[S],U.colG+=e.colG[S],U.colB+=e.colB[S],this.lastCellCounts[F]++}this.lastBboxMin.set(a,o,l),this.lastBboxMax.set(c,h,d),this.lastGridRes=n,this.lastBboxValid=!0;const T=Math.max(1,this.p.clusterMinFlash),_=[];for(let S=0;S<s;S++){const A=p[S];if(A.count<T)continue;const w=1/A.count;_.push({centroid:new V(A.posX*w,A.posY*w,A.posZ*w),velocity:new V(A.velX*w,A.velY*w,A.velZ*w),totalMass:A.mass,particleCount:A.count,avgColor:new Ct(A.colR*w,A.colG*w,A.colB*w)})}return _.sort((S,A)=>A.totalMass-S.totalMass),_.length>t&&(_.length=t),_}draw(t={}){const e=this.pool,i=e.N,n=this.p,s=n.conductorAmount,a=.5*(1-s)+this.conductorValue*s,l=new xd(.4,1,1).stageOf(a),c=1-s+s*(.5+l);{const _=c>=this.sizeMultSmooth?.08:.7,S=1-Math.exp(-.016666666666666666/_);this.sizeMultSmooth+=(c-this.sizeMultSmooth)*S}const h=t.constantSize?1:this.sizeMultSmooth,u=new xd(.2,1,0).blend(a,n.matBrightness,s);this.deformation=t.deformation,this.emphasis=t.emphasis,this.opacity=t.opacity,t.networkPrepared||this.prepareNetwork(),this.displayDensity=Number.isFinite(t.density)?ue(t.density,0,1):1;const f=Number.isFinite(t.monochrome)?ue(t.monochrome,0,1):0;this.displayPositions.length!==i*3&&(this.displayPositions=new Float32Array(i*3),this.displayColors=new Float32Array(i*3));const g=this.attrPos.array,y=this.attrCol.array,v=this.attrSize.array;let p=0;const M=n.flashIntensity,m=n.flashFrames,x=n.fadeInFrames,T=n.fadeOutFrames;for(let _=0;_<i;_++){if(!e.alive[_])continue;let S=1;x>0&&e.fadeInT[_]>0&&(S=1-e.fadeInT[_]/x);let A=1;T>0&&e.fadeOutT[_]>0&&(A=e.fadeOutT[_]/T);let w=0;t.collisionFlash!==!1&&m>0&&e.flashT[_]>0&&(w=e.flashT[_]/m*M);let b=e.colR[_],E=e.colG[_],I=e.colB[_],D=e.colA[_];if(w>0){const G=ue(w,0,1);b=b*(1-G)+G,E=E*(1-G)+G,I=I*(1-G)+G,D=Math.min(1,D*(1+w))}D*=S*A*this.opacityAt(_);const F=this.emphasis?.scales[_],U=Number.isFinite(F)&&F>=0?F:1,L=e.size[_]*h*(t.size??1)*U*(1+w*1.5*e.flashScale[_]);let k=e.posX[_],z=e.posY[_],R=e.posZ[_],H=e.colR[_],J=e.colG[_],et=e.colB[_];if(f>0){const G=H*.2126+J*.7152+et*.0722;H+=(G-H)*f,J+=(G-J)*f,et+=(G-et)*f;const $=b*.2126+E*.7152+I*.0722;b+=($-b)*f,E+=($-E)*f,I+=($-I)*f}if(this.deformation){const G=this.deformation.sample(k,z,R),$=G[6];k=G[0],z=G[1],R=G[2],b+=(G[3]-b)*$,E+=(G[4]-E)*$,I+=(G[5]-I)*$,H+=(G[3]-H)*$,J+=(G[4]-J)*$,et+=(G[5]-et)*$}const nt=this.emphasis?.tints,W=_*4;if(nt&&Number.isFinite(nt[W+3])){const G=ue(nt[W+3],0,1);G>0&&(Number.isFinite(nt[W])&&(b+=(nt[W]-b)*G,H+=(nt[W]-H)*G),Number.isFinite(nt[W+1])&&(E+=(nt[W+1]-E)*G,J+=(nt[W+1]-J)*G),Number.isFinite(nt[W+2])&&(I+=(nt[W+2]-I)*G,et+=(nt[W+2]-et)*G))}this.displayPositions[_*3]=k,this.displayPositions[_*3+1]=z,this.displayPositions[_*3+2]=R,this.displayColors[_*3]=H,this.displayColors[_*3+1]=J,this.displayColors[_*3+2]=et,this.displayed(_)&&(g[p*3+0]=k,g[p*3+1]=z,g[p*3+2]=R,y[p*4+0]=b,y[p*4+1]=E,y[p*4+2]=I,y[p*4+3]=D,v[p]=L,p++)}this.particleGeom.setDrawRange(0,p),this.attrPos.needsUpdate=!0,this.attrCol.needsUpdate=!0,this.attrSize.needsUpdate=!0,this.particleMat.uniforms.uBrightness.value=u*(t.brightness??1),this.particleMat.uniforms.uSpecular.value=n.matSpecular,this.particleMat.uniforms.uAmbient.value=n.matAmbient,this.particleMat.uniforms.uGlow.value=n.matGlow*(t.brightness??1),this._buildTrailMesh(),n.myceliumEnabled?(this._drawMyceliumMesh(),this.myceliumLines.visible=!0):(this.myceliumLines.visible=!1,this.myceliumLinkCount=0,this.networkEdges.length=0,this.networkAlpha.length=0,this.myceliumGeom.setDrawRange(0,0))}opacityAt(t){const e=this.opacity?.[t];return Number.isFinite(e)?ue(e,0,1):1}displayed(t){return this.displayDensity>=1||this.deformation?.visibleParticles?.has(t)||this.emphasis?.visibleParticles.has(t)||(Math.imul(t+1,2654435761)>>>0)/4294967296<this.displayDensity}_buildTrailMesh(){const t=this.pool,e=this.p,i=e.tailLength,n=.5+this.audioInfluence*e.tailAudioSensitivity*1.5;let s=Math.floor(i*n);if(s<2||e.tailAlpha<.001){this.trailGeom.setDrawRange(0,0),this.trailLines.visible=!1;return}s>oi&&(s=oi);let a=1;s>18?a=3:s>12&&(a=2);const o=Math.floor((s-1)/a),l=e.tailAlpha,c=t.N;this._reserveLineVertices(this.trailGeom,c*o*2);const h=this.trailGeom.getAttribute("position"),d=this.trailGeom.getAttribute("color"),u=h.array,f=d.array;let g=0;for(let y=0;y<c;y++){if(!t.alive[y]||!this.displayed(y))continue;const v=Math.min(t.trailCount[y],s);if(v<2)continue;const p=Math.floor((v-1)/a);if(p<1)continue;const M=1/p,m=t.colA[y]*l*this.opacityAt(y);let x=t.trailWriteIdx[y]-v;for(;x<0;)x+=oi;let T=(x+a)%oi;for(let _=0;_<p;_++){const S=_*M,A=(_+1)*M,w=y*oi*3+x*3,b=y*oi*3+T*3;for(let E=0;E<2;E++){const I=E===0?w:b,D=g*3;if(this.deformation){const L=this.deformation.sample(t.trail[I],t.trail[I+1],t.trail[I+2]);u[D]=L[0],u[D+1]=L[1],u[D+2]=L[2]}else u[D]=t.trail[I],u[D+1]=t.trail[I+1],u[D+2]=t.trail[I+2];const F=g*4,U=y*3;f[F]=this.displayColors[U],f[F+1]=this.displayColors[U+1],f[F+2]=this.displayColors[U+2],f[F+3]=m*(E===0?S:A),g++}x=T,T=(T+a)%oi}}this._updateLineVertices(this.trailGeom,g),this.trailLines.visible=g>0}prepareNetwork(){if(this.networkEdges.length=0,this.networkAlpha.length=0,!this.p.myceliumEnabled){this.myceliumLinkCount=0,this.myceliumGeom.setDrawRange(0,0);return}const t=this.pool,e=t.N,i=this.p,n=i.myceliumLinkDist;if(n<=.5){this.myceliumLinkCount=0,this.myceliumGeom.setDrawRange(0,0);return}const s=Math.max(1,i.myceliumNodeStride),a=Math.max(1,i.myceliumMaxLinks),o=Math.max(1,i.myceliumKnnK),l=Math.max(1,i.myceliumLifetime),c=n*n,h=i.myceliumAlpha,d=ue(i.myceliumFadeNear,0,1),u=i.myceliumLinkMode|0,f=[];for(let L=0;L<e;L+=s)t.alive[L]&&t.fadeOutT[L]===0&&f.push(L);if(f.length<2){this.myceliumLinkCount=0,this.myceliumGeom.setDrawRange(0,0);return}let g=1e9,y=1e9,v=1e9,p=-1e9,M=-1e9,m=-1e9;for(const L of f){const k=t.posX[L],z=t.posY[L],R=t.posZ[L];k<g&&(g=k),z<y&&(y=z),R<v&&(v=R),k>p&&(p=k),z>M&&(M=z),R>m&&(m=R)}const x=n*.51;g-=x,y-=x,v-=x,p+=x,M+=x,m+=x;const T=p-g,_=M-y,S=m-v,A=Math.max(1,Math.min(64,Math.ceil(T/n))),w=Math.max(1,Math.min(64,Math.ceil(_/n))),b=Math.max(1,Math.min(64,Math.ceil(S/n))),E=1/n,I=A*w*b,D=new Array(I);for(let L=0;L<I;L++)D[L]=[];for(const L of f){const k=ue((t.posX[L]-g)*E|0,0,A-1),z=ue((t.posY[L]-y)*E|0,0,w-1),R=ue((t.posZ[L]-v)*E|0,0,b-1);D[k+z*A+R*A*w].push(L)}const F=(L,k,z,R)=>{const J=1-Math.sqrt(z)*E*(1-d),et=h*J*R;!Number.isFinite(et)||et<=0||(this.networkEdges.push(L,k),this.networkAlpha.push(et))},U=(L,k,z)=>{const R=[],H=t.posX[L],J=t.posY[L],et=t.posZ[L],nt=ue((H-g)*E|0,0,A-1),W=ue((J-y)*E|0,0,w-1),G=ue((et-v)*E|0,0,b-1);for(let $=-1;$<=1;$++){const it=G+$;if(!(it<0||it>=b))for(let ft=-1;ft<=1;ft++){const mt=W+ft;if(!(mt<0||mt>=w))for(let _t=-1;_t<=1;_t++){const B=nt+_t;if(B<0||B>=A)continue;const Rt=D[B+mt*A+it*A*w];for(const Pt of Rt){if(Pt===L||Pt<=L)continue;const Xt=t.posX[Pt]-H,St=t.posY[Pt]-J,Ut=t.posZ[Pt]-et,Dt=Xt*Xt+St*St+Ut*Ut;Dt>z||R.push({idx:Pt,d2:Dt})}}}}return R};switch(u){case 0:{for(const L of f){let k=U(L,!0,c);k.length>a&&(k.sort((z,R)=>z.d2-R.d2),k.length=a);for(const z of k)F(L,z.idx,z.d2,1)}break}case 1:{for(const L of f){let k=U(L,!0,c);k.length>o&&(k.sort((z,R)=>z.d2-R.d2),k.length=o);for(const z of k)F(L,z.idx,z.d2,1)}break}case 2:{for(const L of f){let k=U(L,!0,c);k.length>a&&(k.sort((z,R)=>z.d2-R.d2),k.length=a);for(const z of k){const R=(Math.min(L,z.idx)>>>0)*4294967296+(Math.max(L,z.idx)>>>0);this.persistentLinks.set(R,0)}}for(const[L,k]of this.persistentLinks){const z=Math.floor(L/4294967296),R=L-z*4294967296,H=z|0,J=R|0;if(H<0||H>=e||J<0||J>=e||!t.alive[H]||!t.alive[J]){this.persistentLinks.delete(L);continue}const et=k+1;if(et>l){this.persistentLinks.delete(L);continue}this.persistentLinks.set(L,et);const nt=t.posX[J]-t.posX[H],W=t.posY[J]-t.posY[H],G=t.posZ[J]-t.posZ[H],$=nt*nt+W*W+G*G,it=1-et/l;F(H,J,$,it)}break}case 3:{for(const L of f){const k=U(L,!0,c),z=[];for(const R of k){const H=t.posX[L],J=t.posY[L],et=t.posZ[L],nt=t.posX[R.idx],W=t.posY[R.idx],G=t.posZ[R.idx],$=(H+nt)*.5,it=(J+W)*.5,ft=(et+G)*.5,mt=R.d2*.25;let _t=!1;for(const B of k){if(B.idx===R.idx)continue;const Rt=t.posX[B.idx]-$,Pt=t.posY[B.idx]-it,Xt=t.posZ[B.idx]-ft;if(Rt*Rt+Pt*Pt+Xt*Xt<mt){_t=!0;break}}_t||z.push(R)}z.length>a&&(z.sort((R,H)=>R.d2-H.d2),z.length=a);for(const R of z)F(L,R.idx,R.d2,1)}break}}}_drawMyceliumMesh(){this._reserveLineVertices(this.myceliumGeom,this.networkEdges.length);const t=this.myceliumGeom.getAttribute("position").array,e=this.myceliumGeom.getAttribute("color").array;let i=0;for(let n=0;n<this.networkEdges.length;n+=2){const s=this.networkEdges[n],a=this.networkEdges[n+1];if(!this.displayed(s)||!this.displayed(a))continue;const o=s*3,l=a*3,c=(this.displayColors[o]+this.displayColors[l])*.5,h=(this.displayColors[o+1]+this.displayColors[l+1])*.5,d=(this.displayColors[o+2]+this.displayColors[l+2])*.5,u=this.networkAlpha[n/2]*Math.min(this.opacityAt(s),this.opacityAt(a));for(let f=0;f<2;f++){const g=f===0?o:l,y=i*3,v=i*4;t[y]=this.displayPositions[g],t[y+1]=this.displayPositions[g+1],t[y+2]=this.displayPositions[g+2],e[v]=c,e[v+1]=h,e[v+2]=d,e[v+3]=u,i++}}this._updateLineVertices(this.myceliumGeom,i),this.myceliumMat.linewidth=Number.isFinite(this.p.myceliumLineWidth)?Math.max(1,this.p.myceliumLineWidth):1,this.myceliumLinkCount=i/2}_reserveLineVertices(t,e){t.getAttribute("position").count>=e||(t.dispose(),t.setAttribute("position",new xt(new Float32Array(e*3),3).setUsage($t)),t.setAttribute("color",new xt(new Float32Array(e*4),4).setUsage($t)))}_updateLineVertices(t,e){if(t.setDrawRange(0,e),!!e)for(const i of["position","color"]){const n=t.getAttribute(i);n.clearUpdateRanges(),n.addUpdateRange(0,e*n.itemSize),n.needsUpdate=!0}}}class Wx{ctx=null;node=null;ready=!1;audioEnergy=0;params={};async init(){if(this.ctx)return;this.ctx=new AudioContext({latencyHint:"interactive",sampleRate:44100});const t="./",e=(t.endsWith("/")?t:t+"/")+"synth-worklet.js";await this.ctx.audioWorklet.addModule(e),this.node=new AudioWorkletNode(this.ctx,"synth-processor",{numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[2]}),this.node.port.onmessage=i=>this._onMessage(i.data),this.node.connect(this.ctx.destination),this.ready=!0,Object.keys(this.params).length&&this.node.port.postMessage({type:"params",payload:this.params}),await this.loadDefaultSample()}get sampleRate(){return this.ctx?.sampleRate??44100}get audioEnergyMeasured(){return this.audioEnergy}get isReady(){return this.ready}_onMessage(t){t.type==="audioEnergy"&&(this.audioEnergy=t.value)}setParams(t){Object.assign(this.params,t),this.node&&this.node.port.postMessage({type:"params",payload:t})}setParam(t,e){this.params[t]=e,this.node&&this.node.port.postMessage({type:"params",payload:{[t]:e}})}setConductorValue(t){this.node?.port.postMessage({type:"conductorValue",value:t})}setTailInfluence(t){this.node?.port.postMessage({type:"tailInfluence",value:t})}setFieldAmpTotal(t){this.node?.port.postMessage({type:"fieldAmpTotal",value:t})}setClusterCount(t){this.node?.port.postMessage({type:"clusterCount",count:t})}setMyceliumLinks(t){this.node?.port.postMessage({type:"myceliumLinks",count:t})}updateClusters(t,e){this.node?.port.postMessage({type:"cluster",clusters:t,worldRadius:e})}triggerCollision(t){this.node?.port.postMessage({type:"trigger",kind:"collision",data:t})}reset(){this.node?.port.postMessage({type:"reset"})}setGranularSample(t,e="unknown"){if(!this.node)return;const i=new Float32Array(t);this.node.port.postMessage({type:"wavSource",samples:i,sampleRate:this.sampleRate,name:e},[i.buffer])}async loadWavFromFile(t){const e=await t.arrayBuffer();await this.decodeAndSend(e,t.name)}async loadDefaultSample(){try{const t="./",e=(t.endsWith("/")?t:t+"/")+"samples/Tremblay-CF-ChurchBells.wav",i=await fetch(e);if(!i.ok)throw new Error("sample not bundled");const n=await i.arrayBuffer();await this.decodeAndSend(n,"Tremblay-CF-ChurchBells.wav")}catch(t){console.warn("[audio] default sample not loaded, granular will be silent:",t)}}async decodeAndSend(t,e){if(!this.ctx)return;const i=await this.ctx.decodeAudioData(t.slice(0)),n=Math.min(i.length,Math.floor(30*i.sampleRate)),s=new Float32Array(n),a=i.numberOfChannels;for(let c=0;c<a;c++){const h=i.getChannelData(c);for(let d=0;d<n;d++)s[d]+=h[d]}for(let c=0;c<n;c++)s[c]/=a;let o;if(i.sampleRate!==this.ctx.sampleRate){const c=this.ctx.sampleRate/i.sampleRate,h=Math.floor(n*c);o=new Float32Array(h);for(let d=0;d<h;d++){const u=d/c,f=Math.floor(u),g=u-f;o[d]=f>=n-1?s[n-1]:s[f]*(1-g)+s[f+1]*g}}else o=s;let l=0;for(let c=0;c<o.length;c++){const h=Math.abs(o[c]);h>l&&(l=h)}if(l>.001){const c=.7/l;for(let h=0;h<o.length;h++)o[h]*=c}this.setGranularSample(o,e),console.log(`[audio] granular source ← ${e} (${o.length} samples)`)}}var Ai=(r=>(r[r.FREE=0]="FREE",r[r.ASCENT=1]="ASCENT",r[r.DESCENT=2]="DESCENT",r[r.OSCILLATION=3]="OSCILLATION",r[r.ASCENT_OSC=4]="ASCENT_OSC",r[r.DESCENT_OSC=5]="DESCENT_OSC",r))(Ai||{}),Ei=(r=>(r[r.LINEAR=0]="LINEAR",r[r.EXPONENTIAL=1]="EXPONENTIAL",r[r.LOGARITHMIC=2]="LOGARITHMIC",r[r.SIGMOID=3]="SIGMOID",r))(Ei||{});const Yx={mode:3,curveShape:0,phaseDuration:36.518,oscRate:.05,oscDepth:.41,autoLoop:!1},$x={mode:0,curveShape:1,phaseDuration:29.143,oscRate:.77285,oscDepth:.25,autoLoop:!1},Zx=.92;class Cf{p={...Yx};elapsed=0;value_=.5;phase_=0;oscAccumPhase=0;lastMode=-1;lastCurve=-1;bridgeOffset=0;history=new Array(240).fill(.5);historyIdx=0;applyCurve(t){switch(this.p.curveShape){case 0:return t;case 1:return t*t;case 2:return Math.sqrt(t);case 3:return Tf(0,1,t)}return t}computeRawValue(){const t=this.p.mode|0,e=ue(this.elapsed/Math.max(.001,this.p.phaseDuration),0,1);this.phase_=e;const i=this.applyCurve(e);let n=.5;switch(t){case 0:n=.5;break;case 1:n=i;break;case 2:n=1-i;break;case 3:n=.5+Math.sin(this.oscAccumPhase)*this.p.oscDepth;break;case 4:n=i+Math.sin(this.oscAccumPhase)*this.p.oscDepth;break;case 5:n=1-i+Math.sin(this.oscAccumPhase)*this.p.oscDepth;break}return ue(n,0,1)}trigger(){this.elapsed=0,this.bridgeOffset=0,this.oscAccumPhase=0}softRestart(){this.elapsed=0}update(t){if(this.lastMode!==this.p.mode||this.lastCurve!==this.p.curveShape){if(this.lastMode>=0){const i=this.computeRawValue();this.bridgeOffset=this.value_-i}this.lastMode=this.p.mode,this.lastCurve=this.p.curveShape}this.elapsed+=t,this.p.autoLoop&&this.elapsed>=this.p.phaseDuration&&(this.elapsed=0),this.oscAccumPhase+=oo*this.p.oscRate*t,this.oscAccumPhase>oo*1e3&&(this.oscAccumPhase-=oo*1e3);const e=this.computeRawValue();this.value_=ue(e+this.bridgeOffset,0,1),this.bridgeOffset*=Zx,this.history[this.historyIdx]=this.value_,this.historyIdx=(this.historyIdx+1)%this.history.length}value(){return this.value_}phaseProgress(){return this.phase_}getModeName(){return["FREE","ASCENT","DESCENT","OSCILLATION","ASCENT_OSC","DESCENT_OSC"][this.p.mode|0]||"?"}}const qx={enabled:!0,syncPeriod:16.572,syncDuration:3.4205,syncPower:.5,driftTolerance:.15,counterpointEnabled:!1,convergenceAmount:.77};class jx{p={...qx};cadenceTimer=0;syncStrength_=0;audioNudge_=0;visualNudge_=0;HIST_SIZE=600;targetHist=new Array(this.HIST_SIZE).fill(.5);audioHist=new Array(this.HIST_SIZE).fill(0);visualHist=new Array(this.HIST_SIZE).fill(0);syncHist=new Array(this.HIST_SIZE).fill(0);histIdx=0;computePulse(t){const e=this.p.syncDuration,i=Math.max(.001,this.p.syncPeriod);let n=e/i*.4;n<.001&&(n=.001);const s=t-.5;return Math.exp(-(s*s)/(2*n*n))}triggerCadence(){this.cadenceTimer=this.p.syncPeriod*.5}update(t,e,i,n){if(this.targetHist[this.histIdx]=e,this.audioHist[this.histIdx]=i,this.visualHist[this.histIdx]=n,!this.p.enabled){this.syncStrength_=0,this.audioNudge_=0,this.visualNudge_=0,this.syncHist[this.histIdx]=0,this.histIdx=(this.histIdx+1)%this.HIST_SIZE;return}const s=Math.max(.001,this.p.syncPeriod);for(this.cadenceTimer+=t;this.cadenceTimer>=s;)this.cadenceTimer-=s;const a=this.cadenceTimer/s;this.syncStrength_=this.computePulse(a);let o=e-i,l=e-n;const c=this.p.driftTolerance;Math.abs(o)<c&&(o=0),Math.abs(l)<c&&(l=0);const h=this.syncStrength_*this.p.syncPower;this.audioNudge_=h*o,this.visualNudge_=h*l,this.syncHist[this.histIdx]=this.syncStrength_,this.histIdx=(this.histIdx+1)%this.HIST_SIZE}syncStrength(){return this.syncStrength_}audioCorrection(){return this.audioNudge_}visualCorrection(){return this.visualNudge_}convergenceForce(){return this.p.counterpointEnabled?this.syncStrength_*this.p.convergenceAmount:0}}const Ar=[{name:"Figure 2 Arc (30s)",totalDuration:30,events:[{atSec:0,mode:Ai.ASCENT,curve:Ei.SIGMOID,phaseDuration:10},{atSec:10,mode:Ai.ASCENT_OSC,curve:Ei.LINEAR,phaseDuration:10,oscRate:1.5,oscDepth:.25},{atSec:20,mode:Ai.DESCENT,curve:Ei.EXPONENTIAL,phaseDuration:10}]},{name:"Storm Cycle (25s)",totalDuration:25,events:[{atSec:0,mode:Ai.OSCILLATION,curve:Ei.LINEAR,phaseDuration:5,oscRate:.5,oscDepth:.4},{atSec:8,mode:Ai.ASCENT,curve:Ei.EXPONENTIAL,phaseDuration:7},{atSec:15,mode:Ai.DESCENT_OSC,curve:Ei.SIGMOID,phaseDuration:10,oscRate:2,oscDepth:.3}]},{name:"Quiet Breath (45s)",totalDuration:45,events:[{atSec:0,mode:Ai.OSCILLATION,curve:Ei.LINEAR,phaseDuration:15,oscRate:.15,oscDepth:.15},{atSec:15,mode:Ai.ASCENT,curve:Ei.LOGARITHMIC,phaseDuration:15},{atSec:30,mode:Ai.DESCENT,curve:Ei.LOGARITHMIC,phaseDuration:15}]}];class Kx{playing=!1;elapsed_=0;scoreIdx=0;nextEvent=0;scores(){return Ar}isPlaying(){return this.playing}elapsed(){return this.elapsed_}currentScoreName(){return this.playing?Ar[this.scoreIdx].name:""}play(t,e){t<0||t>=Ar.length||(this.scoreIdx=t,this.elapsed_=0,this.nextEvent=0,this.playing=!0,this._applyEvent(Ar[t].events[0],e),e.trigger())}stop(){this.playing=!1}update(t,e){if(!this.playing)return;this.elapsed_+=t;const i=Ar[this.scoreIdx];for(;this.nextEvent+1<i.events.length&&this.elapsed_>=i.events[this.nextEvent+1].atSec;)this.nextEvent++,this._applyEvent(i.events[this.nextEvent],e),e.softRestart();this.elapsed_>=i.totalDuration&&this.stop()}_applyEvent(t,e){e.p.mode=t.mode,e.p.curveShape=t.curve,e.p.phaseDuration=t.phaseDuration,t.oscRate!==void 0&&(e.p.oscRate=t.oscRate),t.oscDepth!==void 0&&(e.p.oscDepth=t.oscDepth)}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class Ui{constructor(t,e,i,n,s="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),Ui.nextNameID=Ui.nextNameID||0,this.$name.id=`lil-gui-name-${++Ui.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Jx extends Ui{constructor(t,e,i){super(t,e,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ec(r){let t,e;return(t=r.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Qx={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:ec,toHexString:ec},oa={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},tM={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,t,e=1){const i=oa.fromHexString(r);t[0]=(i>>16&255)/255*e,t[1]=(i>>8&255)/255*e,t[2]=(i&255)/255*e},toHexString([r,t,e],i=1){i=255/i;const n=r*i<<16^t*i<<8^e*i<<0;return oa.toHexString(n)}},eM={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,t,e=1){const i=oa.fromHexString(r);t.r=(i>>16&255)/255*e,t.g=(i>>8&255)/255*e,t.b=(i&255)/255*e},toHexString({r,g:t,b:e},i=1){i=255/i;const n=r*i<<16^t*i<<8^e*i<<0;return oa.toHexString(n)}},iM=[Qx,oa,tM,eM];function nM(r){return iM.find(t=>t.match(r))}class sM extends Ui{constructor(t,e,i,n){super(t,e,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=nM(this.initialValue),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=ec(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ml extends Ui{constructor(t,e,i){super(t,e,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class rM extends Ui{constructor(t,e,i,n,s,a){super(t,e,i,"number"),this._initInput(),this.min(n),this.max(s);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let M=parseFloat(this.$input.value);isNaN(M)||(this._stepExplicit&&(M=this._snap(M)),this.setValue(this._clamp(M)))},i=M=>{const m=parseFloat(this.$input.value);isNaN(m)||(this._snapClampSetValue(m+M),this.$input.value=this.getValue())},n=M=>{M.key==="Enter"&&this.$input.blur(),M.code==="ArrowUp"&&(M.preventDefault(),i(this._step*this._arrowKeyMultiplier(M))),M.code==="ArrowDown"&&(M.preventDefault(),i(this._step*this._arrowKeyMultiplier(M)*-1))},s=M=>{this._inputFocused&&(M.preventDefault(),i(this._step*this._normalizeMouseWheel(M)))};let a=!1,o,l,c,h,d;const u=5,f=M=>{o=M.clientX,l=c=M.clientY,a=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",y)},g=M=>{if(a){const m=M.clientX-o,x=M.clientY-l;Math.abs(x)>u?(M.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(m)>u&&y()}if(!a){const m=M.clientY-c;d-=m*this._step*this._arrowKeyMultiplier(M),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)}c=M.clientY},y=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",y)},v=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",v),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(p,M,m,x,T)=>(p-M)/(m-M)*(T-x)+x,e=p=>{const M=this.$slider.getBoundingClientRect();let m=t(p,M.left,M.right,this._min,this._max);this._snapClampSetValue(m)},i=p=>{this._setDraggingStyle(!0),e(p.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",s)},n=p=>{e(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",s)};let a=!1,o,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),e(p.touches[0].clientX),a=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(o=p.touches[0].clientX,l=p.touches[0].clientY,a=!0):c(p),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=p=>{if(a){const M=p.touches[0].clientX-o,m=p.touches[0].clientY-l;Math.abs(M)>Math.abs(m)?c(p):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else p.preventDefault(),e(p.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},f=this._callOnFinishChange.bind(this),g=400;let y;const v=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const m=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+m),this.$input.value=this.getValue(),clearTimeout(y),y=setTimeout(f,g)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",v,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),e+-i}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class aM extends Ui{constructor(t,e,i,n){super(t,e,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(n)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const i=document.createElement("option");i.textContent=e,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class oM extends Ui{constructor(t,e,i){super(t,e,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var lM=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function cM(r){const t=document.createElement("style");t.innerHTML=r;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Md=!1;class Ec{constructor({parent:t,autoPlace:e=t===void 0,container:i,width:n,title:s="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Md&&o&&(cM(lM),Md=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=a}add(t,e,i,n,s){if(Object(i)===i)return new aM(this,t,e,i);const a=t[e];switch(typeof a){case"number":return new rM(this,t,e,i,n,s);case"boolean":return new Jx(this,t,e);case"string":return new oM(this,t,e);case"function":return new Ml(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,i=1){return new sM(this,t,e,i)}addFolder(t){const e=new Ec({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof Ml||i._name in t.controllers&&i.load(t.controllers[i._name])}),e&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Ml)){if(i._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);e.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);e.folders[i._title]=i.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const n=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const hM=1,Tc=`of-flock-3d-web:settings:v${hM}`;function dM(r){try{const t={...r,savedAt:Date.now()};return localStorage.setItem(Tc,JSON.stringify(t)),!0}catch(t){return console.warn("[persistence] save failed:",t),!1}}function uM(){try{const r=localStorage.getItem(Tc);return r?JSON.parse(r):null}catch(r){return console.warn("[persistence] load failed:",r),null}}function fM(){try{localStorage.removeItem(Tc)}catch{}}function Br(r,t){if(t&&typeof t=="object")for(const e in t)e in r&&(r[e]=t[e]);return r}const pM={"penta min":0,"penta maj":1,major:2,"minor nat":3,dorian:4,mixolydian:5,phrygian:6,lydian:7,blues:8,hirajoshi:9,"whole tone":10,harmonic:11},_d={FREE:0,ASCENT:1,DESCENT:2,OSCILLATION:3,ASCENT_OSC:4,DESCENT_OSC:5},bd={LINEAR:0,EXPONENTIAL:1,LOGARITHMIC:2,SIGMOID:3},mM={Distance:0,KNN:1,Lifetime:2,Gabriel:3};function gM(r){const{flock:t,synth:e,audioConductor:i,visualConductor:n,synchresis:s,scorePlayer:a}=r,o=new Ec({title:"of-flock-3d (web)",width:320});o.close();const l=o.addFolder("System");l.add({reset:()=>{confirm("Reset all settings to defaults?")&&(fM(),location.reload())}},"reset").name("Reset all settings"),l.add({about:()=>{window.__openAbout?.()}},"about").name("About / Concept"),l.add({copyJson:async()=>{const R={flock:{...t.p},audioConductor:{...i.p},visualConductor:{...n.p},synchresis:{...s.p},synth:{...A}},H=JSON.stringify(R,null,2);try{await navigator.clipboard.writeText(H),alert("Settings JSON copied to clipboard ("+H.length+" chars). Paste to share.")}catch{console.log(`[settings export]
`+H),alert("Clipboard blocked — JSON dumped to console. Open DevTools to copy.")}}},"copyJson").name("Copy settings JSON");const c=o.addFolder("Morphology (Audio)");c.add(i.p,"mode",_d).listen(),c.add(i.p,"curveShape",bd).name("curve").listen(),c.add(i.p,"phaseDuration",1,60).name("duration (s)").listen(),c.add(i.p,"oscRate",.05,4).name("osc rate (Hz)").listen(),c.add(i.p,"oscDepth",0,.5).listen(),c.add(i.p,"autoLoop");const h={value:0};c.add(h,"value",0,1).name("▸ live value").listen().disable(),c.__condReadout=h,c.add({trigger:()=>i.trigger()},"trigger").name("▶ trigger");const d=o.addFolder("Morphology (Visual)");d.add(n.p,"mode",_d).listen(),d.add(n.p,"curveShape",bd).name("curve").listen(),d.add(n.p,"phaseDuration",1,60).name("duration (s)").listen(),d.add(n.p,"oscRate",.05,4).name("osc rate (Hz)").listen(),d.add(n.p,"oscDepth",0,.5).listen(),d.add(n.p,"autoLoop");const u=o.addFolder("Synchresis");u.add(s.p,"enabled"),u.add(s.p,"syncPeriod",3,120).name("period (s)"),u.add(s.p,"syncDuration",.5,30).name("pulse (s)"),u.add(s.p,"syncPower",0,1.5),u.add(s.p,"driftTolerance",0,.5).name("tolerance"),u.add(s.p,"counterpointEnabled").name("counterpoint"),u.add(s.p,"convergenceAmount",0,1).name("convergence"),u.add({trigger:()=>s.triggerCadence()},"trigger").name("Trigger cadence");const f=o.addFolder("Score"),g={name:"Figure 2 Arc (30s)",status:"idle"},y={};a.scores().forEach(R=>y[R.name]=R.name),f.add(g,"name",y).name("score"),f.add({play:()=>{const R=a.scores().findIndex(H=>H.name===g.name);R>=0&&a.play(R,i)}},"play").name("▶ Play Score"),f.add({stop:()=>a.stop()},"stop").name("■ Stop"),f.add(g,"status").name("status").listen().disable(),f.__scoreState=g;const v=o.addFolder("Flock");v.add(t.p,"particleCount",1e3,4e4,1e3).name("particles").onFinishChange(()=>t.resizeIfNeeded()),v.add(t.p,"worldRadius",50,600),v.add(t.p,"particleAlpha",.05,1),v.add(t.p,"hueBase",0,1),v.add(t.p,"hueRange",0,1);const p=o.addFolder("Force Fields");p.add(t.p,"noiseAmplitude",0,200).name("noise amp"),p.add(t.p,"noiseScale",1e-4,.05),p.add(t.p,"noiseSpeed",0,.5),p.add(t.p,"vortexAmp",0,200),p.add(t.p,"spiralAmp",0,200),p.add(t.p,"curlAmp",0,200),p.add(t.p,"attractorAmp",0,80),p.add(t.p,"repellerAmp",0,800);const M=o.addFolder("Boid / Merge");M.add(t.p,"flockSeparation",0,5),M.add(t.p,"flockCohesion",0,20),M.add(t.p,"flockCohesionSpeed",0,.5),M.add(t.p,"flockNeighborRadius",10,400),M.add(t.p,"mergeDistance",1,40),M.add(t.p,"flockSpawnRate",0,1e3),M.add(t.p,"flockMinAlive",0,1),M.add(t.p,"flockDamping",.5,1),M.add(t.p,"particleSizeMin",1,20),M.add(t.p,"particleSizeMax",2,60);const m=o.addFolder("Flash / Accent");m.add(t.p,"flashFrames",0,60,1),m.add(t.p,"flashIntensity",0,2),m.add(t.p,"accentChance",0,1),m.add(t.p,"accentSizeMul",1,5);const x=o.addFolder("Cluster Detection");x.add(t.p,"clusterGridRes",3,10,1),x.add(t.p,"clusterMinFlash",1,100,1);const T=o.addFolder("Trail");T.add(t.p,"tailLength",0,24,1),T.add(t.p,"tailAudioSensitivity",0,2),T.add(t.p,"tailAlpha",0,1);const _=o.addFolder("Material");_.add(t.p,"matBrightness",0,1),_.add(t.p,"matSpecular",0,1),_.add(t.p,"matAmbient",0,.5),_.add(t.p,"matGlow",0,1.5),v.add(t.p,"conductorAmount",0,1).name("conductor amount");const S=o.addFolder("Mycelium");S.add(t.p,"myceliumEnabled").name("enabled"),S.add(t.p,"myceliumLinkMode",mM).name("link mode"),S.add(t.p,"myceliumLinkDist",5,300).name("link dist"),S.add(t.p,"myceliumMaxLinks",1,16,1).name("max links"),S.add(t.p,"myceliumKnnK",1,16,1).name("KNN K"),S.add(t.p,"myceliumLifetime",5,600,1).name("lifetime"),S.add(t.p,"myceliumNodeStride",1,50,1).name("node stride"),S.add(t.p,"myceliumAlpha",0,1),S.add(t.p,"myceliumFadeNear",0,1).name("far fade"),S.add(t.p,"myceliumLineWidth",.5,4);const A={audioEnabled:!0,masterVol:.5,eventVol:.6,eventDecayMs:50,eventAttackMs:2,eventGainPerHit:.4937,minMassToFire:0,eventQuantize:!0,reverbAmt:.55,reverbSize:.85,reverbDamp:.5,reverbPreDelayMs:20,rootFreq:110,scaleType:0,droneGlideMs:600,audioEnergyGain:1.9424,fmRatio:2,fmIndex:3,fmIndexDecayMs:40,tailToIdxDecayDepth:.5,eventFoldAmount:0,clusterDroneVol:.5,clusterAttackMs:800,clusterReleaseMs:1500,clusterDetune:.008,clusterProximity:80,clusterCutoff:600,clusterResonance:.3,clusterDroneFold:0,windVol:.4,windCutoff:800,windResonance:.2,windAmpToCutoff:1,windLfoRate:.4,windLfoDepth:.4,granVol:1,grainSizeMs:55.82,grainBaseRate:128.978,granClusterInfluence:17.08,grainPitchOffset:10.56,grainPitchSpread:20.904,grainPanSpread:.686,grainAttackFrac:.02768,conductorAmount:1,clickEnabled:!0,clickVol:.147,clickBaseRate:8,clickDensityBoost:39.6,clickConductorAmount:1,clickLengthMs:5.814,clickFormantHz:9e3};r.savedSynthParams&&Br(A,r.savedSynthParams);function w(){e.setParams(A)}w();const b=o.addFolder("Synth · Master");b.add(A,"audioEnabled").onChange(R=>e.setParam("audioEnabled",R)),b.add(A,"masterVol",0,1).onChange(R=>e.setParam("masterVol",R)),b.add(A,"rootFreq",55,440).name("rootFreq (Hz)").onChange(R=>e.setParam("rootFreq",R)),b.add(A,"scaleType",pM).name("scale").onChange(R=>e.setParam("scaleType",R)),b.add(A,"droneGlideMs",5,4e3).name("drone glide (ms)").onChange(R=>e.setParam("droneGlideMs",R));const E=o.addFolder("Synth · Event");E.add(A,"eventVol",0,1).onChange(R=>e.setParam("eventVol",R)),E.add(A,"eventDecayMs",5,500).name("decay (ms)").onChange(R=>e.setParam("eventDecayMs",R)),E.add(A,"eventAttackMs",.1,50).name("attack (ms)").onChange(R=>e.setParam("eventAttackMs",R)),E.add(A,"eventGainPerHit",.05,1.5).name("hit gain").onChange(R=>e.setParam("eventGainPerHit",R)),E.add(A,"minMassToFire",0,50).onChange(R=>e.setParam("minMassToFire",R)),E.add(A,"eventQuantize").onChange(R=>e.setParam("eventQuantize",R));const I=o.addFolder("Synth · FM");I.add(A,"fmRatio",.5,8).onChange(R=>e.setParam("fmRatio",R)),I.add(A,"fmIndex",0,12).onChange(R=>e.setParam("fmIndex",R)),I.add(A,"fmIndexDecayMs",1,500).name("FM idxDecay (ms)").onChange(R=>e.setParam("fmIndexDecayMs",R)),I.add(A,"tailToIdxDecayDepth",0,1).onChange(R=>e.setParam("tailToIdxDecayDepth",R)),I.add(A,"eventFoldAmount",0,1).name("event fold").onChange(R=>e.setParam("eventFoldAmount",R));const D=o.addFolder("Synth · Cluster Drone");D.add(A,"clusterDroneVol",0,1).name("vol").onChange(R=>e.setParam("clusterDroneVol",R)),D.add(A,"clusterAttackMs",50,4e3).name("attack (ms)").onChange(R=>e.setParam("clusterAttackMs",R)),D.add(A,"clusterReleaseMs",50,6e3).name("release (ms)").onChange(R=>e.setParam("clusterReleaseMs",R)),D.add(A,"clusterDetune",0,.03).onChange(R=>e.setParam("clusterDetune",R)),D.add(A,"clusterProximity",10,400).onChange(R=>e.setParam("clusterProximity",R)),D.add(A,"clusterCutoff",80,8e3).onChange(R=>e.setParam("clusterCutoff",R)),D.add(A,"clusterResonance",0,.95).onChange(R=>e.setParam("clusterResonance",R)),D.add(A,"clusterDroneFold",0,1).name("fold").onChange(R=>e.setParam("clusterDroneFold",R));const F=o.addFolder("Synth · Wind");F.add(A,"windVol",0,1).name("vol").onChange(R=>e.setParam("windVol",R)),F.add(A,"windCutoff",100,8e3).name("cutoff (Hz)").onChange(R=>e.setParam("windCutoff",R)),F.add(A,"windResonance",0,.9).onChange(R=>e.setParam("windResonance",R)),F.add(A,"windAmpToCutoff",0,3).name("amp→cutoff").onChange(R=>e.setParam("windAmpToCutoff",R)),F.add(A,"windLfoRate",.05,4).name("gust rate").onChange(R=>e.setParam("windLfoRate",R)),F.add(A,"windLfoDepth",0,1).name("gust depth").onChange(R=>e.setParam("windLfoDepth",R));const U=o.addFolder("Synth · Granular");U.add(A,"granVol",0,1).name("vol").onChange(R=>e.setParam("granVol",R)),U.add(A,"grainSizeMs",10,300).name("size (ms)").onChange(R=>e.setParam("grainSizeMs",R)),U.add(A,"grainBaseRate",.5,200).name("base rate (Hz)").onChange(R=>e.setParam("grainBaseRate",R)),U.add(A,"granClusterInfluence",0,20).name("cluster infl.").onChange(R=>e.setParam("granClusterInfluence",R)),U.add(A,"grainPitchOffset",-24,24).name("pitch offset").onChange(R=>e.setParam("grainPitchOffset",R)),U.add(A,"grainPitchSpread",0,24).name("pitch spread").onChange(R=>e.setParam("grainPitchSpread",R)),U.add(A,"grainPanSpread",0,1).name("pan spread").onChange(R=>e.setParam("grainPanSpread",R)),U.add(A,"grainAttackFrac",.02,.5).name("attack frac").onChange(R=>e.setParam("grainAttackFrac",R));const L=o.addFolder("Synth · Hall Reverb");L.add(A,"reverbAmt",0,1).onChange(R=>e.setParam("reverbAmt",R)),L.add(A,"reverbSize",0,.97).onChange(R=>e.setParam("reverbSize",R)),L.add(A,"reverbDamp",0,.99).onChange(R=>e.setParam("reverbDamp",R)),L.add(A,"reverbPreDelayMs",0,200).name("pre-delay (ms)").onChange(R=>e.setParam("reverbPreDelayMs",R));const k=o.addFolder("Synth · Click (Pulsar)");k.add(A,"clickEnabled").name("enabled").onChange(R=>e.setParam("clickEnabled",R)),k.add(A,"clickVol",0,3).name("vol").onChange(R=>e.setParam("clickVol",R)),k.add(A,"clickBaseRate",0,200).name("base rate (Hz)").onChange(R=>e.setParam("clickBaseRate",R)),k.add(A,"clickDensityBoost",0,400).name("density boost").onChange(R=>e.setParam("clickDensityBoost",R)),k.add(A,"clickConductorAmount",0,1).name("conductor").onChange(R=>e.setParam("clickConductorAmount",R)),k.add(A,"clickLengthMs",1,30).name("pulsaret (ms)").onChange(R=>e.setParam("clickLengthMs",R)),k.add(A,"clickFormantHz",200,9e3).name("formant (Hz)").onChange(R=>e.setParam("clickFormantHz",R));const z=o.addFolder("Synth · Aux");return z.add(A,"conductorAmount",0,1).name("conductor amount").onChange(R=>e.setParam("conductorAmount",R)),z.add(A,"audioEnergyGain",.1,5).name("audio energy gain").onChange(R=>e.setParam("audioEnergyGain",R)),{gui:o,synthParams:A}}const ic=["#d65bfa","#43d9c5","#ff9b55","#7697ff","#ed6b9a","#c0dd55","#55b9f5","#e5b76e"],Sd=r=>typeof r=="string"&&r.startsWith("/")&&r.length<=262,wd=r=>typeof r=="string"&&/^#[0-9a-f]{6}$/i.test(r),_l=r=>r<=.04045?r/12.92:((r+.055)/1.055)**2.4;function lo(r){return{hex:r.toLowerCase(),r:_l(parseInt(r.slice(1,3),16)/255),g:_l(parseInt(r.slice(3,5),16)/255),b:_l(parseInt(r.slice(5,7),16)/255)}}function cr(r){return .55+Math.max(0,Math.min(1,(r-24)/72))*1.75}class nc{values=new Map;constructor(t=[]){if(Array.isArray(t))for(const e of t.slice(-128))Array.isArray(e)&&Sd(e[0])&&wd(e[1])&&this.values.set(e[0],lo(e[1]))}get(t){let e=this.values.get(t);if(e)this.values.delete(t),this.values.set(t,e);else{const i=new Set([...this.values.values()].map(s=>s.hex));let n=ic.find(s=>!i.has(s));for(let s=0;!n;s++){const a=(s*.381966+.08)%1,o=c=>Math.round((.62-.32*Math.max(-1,Math.min((c+a*12)%12-3,9-(c+a*12)%12,1)))*255).toString(16).padStart(2,"0"),l=`#${o(0)}${o(8)}${o(4)}`;i.has(l)||(n=l)}for(e=lo(n),this.values.set(t,e);this.values.size>128;)this.values.delete(this.values.keys().next().value)}return e}set(t,e){return!Sd(t)||!wd(e)?!1:(Object.assign(this.get(t),lo(e)),!0)}serialize(){return JSON.stringify([...this.values].map(([t,e])=>[t,e.hex]))}}const Ad=r=>r&&typeof r=="object"&&!Array.isArray(r)?r:null,So=r=>typeof r=="string"&&r.length>0&&r.length<=128&&!/[\s\u0000-\u001f\u007f]/u.test(r),vM=r=>typeof r=="string"&&r.length<=262&&/^\/[^\s\u0000-\u001f\u007f]+$/u.test(r)&&!r.startsWith("/slewn/"),Ed=(r,t)=>typeof r=="string"&&r.replace(/[\u0000-\u001f\u007f]/gu,"").trim().slice(0,128)||t,Td=(r,t)=>typeof r=="number"&&Number.isFinite(r)?Math.max(-1e9,Math.min(1e9,r)):t;function yM(r){if(typeof r!="string"||r.length>65536)return null;let t;try{t=JSON.parse(r)}catch{return null}const e=Ad(t);if(!e||e.version!==2||!So(e.projectId)||!Array.isArray(e.tracks))return null;const i=new Set,n=new Set,s=[];for(const a of e.tracks.slice(0,256)){const o=Ad(a);!o||!So(o.id)||!vM(o.address)||o.kind!=="melody"&&o.kind!=="cv"||i.has(o.id)||n.has(o.address)||(i.add(o.id),n.add(o.address),s.push({id:o.id,name:Ed(o.name,o.address),address:o.address,kind:o.kind,index:typeof o.index=="number"&&Number.isInteger(o.index)?Math.max(0,Math.min(65535,o.index)):s.length,enabled:o.enabled===!0,inputMin:Td(o.inputMin,0),inputMax:Td(o.inputMax,1)}))}return{version:2,projectId:e.projectId,projectName:Ed(e.projectName,"Slewn"),tracks:s}}function er(r){const t=(r.catalog?.tracks??[]).map(i=>({...i,metadata:!0})),e=new Set(t.map(i=>i.address));for(const i of r.tracks.values())e.has(i.address)||i.catalogId||(e.add(i.address),t.push({id:`address:${i.address}`,name:i.address,address:i.address,kind:i.kind,inputMin:i.inputMin,inputMax:i.inputMax,enabled:!0,metadata:!1}));return t}const bl=r=>typeof r=="number"&&Number.isFinite(r),Er=(r,t)=>{for(;r.size>t;)r.delete(r.keys().next().value)};function co(r,t,e){return![r,t,e].every(Number.isFinite)||t===e?.5:Math.max(0,Math.min(1,(r-t)/(e-t)))}function Cc(r,t){const e=r.glideMs<=0?1:Math.max(0,Math.min(1,(t-r.started)/r.glideMs));return r.fromPitch+(r.targetPitch-r.fromPitch)*e}class Cd{constructor(t=new nc){this.colors=t}tracks=new Map;catalog=null;catalogReceivedAt=-1/0;catalogIdentities=new Map;seen=new Map;retired=new Map;stream="";nextIndex=0;cvCount=0;onsets=0;testCount=0;received=0;lastAddress="";track(t,e){let i=this.tracks.get(t);if(!i||i.kind!==e){const s=["energy","size","brightness","motion"];i={address:t,kind:e,index:this.nextIndex++%32,cv:0,color:e==="melody"?this.colors.get(t):lo(ic[this.cvCount%ic.length]),fromPitch:60,targetPitch:60,glideMs:0,started:0,eventID:0,streamID:"",triggerCount:0,lastOnsetAt:-1/0,lastOnsetPitch:60,lastOnsetStream:"",inputMin:0,inputMax:1,destination:e==="cv"?s[this.cvCount++%4]:"none"}}e==="melody"&&(i.color=this.colors.get(t));const n=this.catalogIdentities.get(t);return n&&(i.catalogId=n),this.tracks.delete(t),this.tracks.set(t,i),Er(this.tracks,32),i}receive(t,e){if(!t||!bl(e)||typeof t.address!="string"||!t.address.startsWith("/")||t.address.length>262||!Array.isArray(t.args))return null;const{address:i,args:n,types:s}=t;if(i==="/slewn/catalog"){if(s!==",s"||n.length!==1)return null;const p=yM(n[0]);if(!p)return null;const M=new Map(p.tracks.map(m=>[m.address,m]));for(const m of this.catalog?.tracks??[]){const x=M.get(m.address);(this.catalog?.projectId!==p.projectId||!x||x.id!==m.id||x.kind!==m.kind)&&this.tracks.delete(m.address)}for(const m of p.tracks){this.catalogIdentities.delete(m.address),this.catalogIdentities.set(m.address,m.id);const x=this.tracks.get(m.address);x&&(x.kind!==m.kind||x.catalogId&&x.catalogId!==m.id)?this.tracks.delete(m.address):x&&(x.catalogId=m.id)}return Er(this.catalogIdentities,512),this.catalog=p,this.catalogReceivedAt=e,this.received++,this.lastAddress=i,null}if(i==="/slewn/test"&&s===",i"&&n.length===1&&n[0]===1)return this.testCount++,this.received++,this.lastAddress=i,null;if(i.startsWith("/slewn/"))return null;if(s===",f"&&n.length===1&&bl(n[0]))return this.track(i,"cv").cv=n[0],this.received++,this.lastAddress=i,null;const a=i.endsWith("/pitch")&&s===",fffis"&&n.length===5,o=s===",ifffisssii"&&n.length===10&&n[0]===1;if(!a&&!o&&!(s===",ifffis"&&n.length===6&&n[0]===1)||o&&(!So(n[6])||!So(n[7])||![0,1].includes(n[8])||![0,1].includes(n[9])))return null;const[l,c,h,d,u]=a?n:n.slice(1);if(![l,c,h,d].every(bl)||h<0||!Number.isInteger(d)||d<1||d>2147483647||typeof u!="string"||!u.length||u.length>256||this.retired.has(u))return null;u!==this.stream&&(this.stream&&this.retired.set(this.stream,!0),Er(this.retired,128),this.stream=u,this.seen.clear());const f=a?i.slice(0,-6):i,g=JSON.stringify([u,f,d]),y=o?JSON.stringify([u,"track",n[6],d]):"";if(!a){if(this.seen.has(g)||y&&this.seen.has(y))return null;this.seen.set(g,!0),Er(this.seen,4096),y&&(this.seen.set(y,!0),Er(this.seen,4096))}const v=this.track(f,"melody");return(v.streamID!==u||d>v.eventID||a&&d===v.eventID)&&Object.assign(v,{fromPitch:c,targetPitch:l,glideMs:h,started:e,eventID:d,streamID:u}),this.received++,this.lastAddress=i,a?null:(v.lastOnsetAt=e,v.lastOnsetPitch=l,v.lastOnsetStream=u,v.triggerCount++,this.onsets++,{track:v,pitch:l,fromPitch:c,glideMs:h,eventID:d,...o?{trackId:n[6],cycleId:n[7],firstInCycle:n[8]===1,firstInRun:n[9]===1}:{}})}}const Sl=750,xM=200,Rd=2147483646,Pd=[60,67,64,72,69,65,62,67],Dd=[48,55,52,60];class MM{constructor(t){if(this.start=t,!Number.isFinite(t))throw new RangeError("Demo start must be finite")}streamID=`tidal-demo-${crypto.randomUUID()}`;nextTick=0;take(t){if(!Number.isFinite(t)||t<this.start)return[];const e=Math.floor((t-this.start)/Sl);this.nextTick=Math.max(this.nextTick,Math.ceil((t-xM-this.start)/Sl));const i=[];for(;this.nextTick<=e;this.nextTick++){const n=this.nextTick,s=n%Rd,a=`${this.streamID}-${Math.floor(n/Rd)}`,o=this.start+n*Sl,l=Pd[n%Pd.length];if(i.push({at:o,message:{address:"/melody1",types:",ifffis",args:[1,l,l,0,s+1,a]}}),n%2===0){const c=Dd[n/2%Dd.length];i.push({at:o,message:{address:"/melody2",types:",ifffis",args:[1,c,c,0,s/2+1,a]}})}}return i}}const Id=[350,470,620,830],_M=[[60,64,67,72],[48,55,60,55],[67,69,72,76],[55,62,65,69]],bM=200;class SM{constructor(t){if(this.start=t,!Number.isFinite(t))throw new RangeError("Demo start must be finite")}stream=`particle-demo-${crypto.randomUUID()}`;next=[0,0,0,0];id=0;take(t){if(!Number.isFinite(t)||t<this.start)return[];const e=[];for(let i=0;i<Id.length;i++){const n=Id[i];this.next[i]=Math.max(this.next[i],Math.ceil((t-bM-this.start)/n));const s=Math.floor((t-this.start)/n);for(;this.next[i]<=s;){const a=this.next[i]++;e.push({index:i,tick:a,at:this.start+a*n})}}return e.sort((i,n)=>i.at-n.at||i.index-n.index).map(({index:i,tick:n,at:s})=>{const a=_M[i],o=a[n%a.length],l=++this.id;return{at:s,message:{address:`/melody${i+1}`,types:",ifffis",args:[1,o,o,0,l,this.stream]}}})}}const Nd=r=>typeof r=="string"&&r.startsWith("/")&&r.length<=262;class Ld{active=[];saved=new Map;constructor(t=[]){if(Array.isArray(t))for(const e of t.slice(-128))Array.isArray(e)&&Nd(e[0])&&Number.isInteger(e[1])&&e[1]>=1&&e[1]<=4&&this.saved.set(e[0],e[1])}sync(t){this.active=[...new Set(t.filter(Nd))].slice(0,4)}get count(){return this.active.length}regionFor(t){const e=this.active.indexOf(t);return e<0?null:Math.min(this.count,this.saved.get(t)??e+1)}setRegion(t,e){if(!this.active.includes(t)||!Number.isInteger(e)||e<1||e>this.count)return!1;for(this.saved.delete(t),this.saved.set(t,e);this.saved.size>128;)this.saved.delete(this.saved.keys().next().value);return!0}serialize(){return JSON.stringify([...this.saved])}}const Fd=r=>typeof r=="string"&&r.startsWith("/")&&r.length<=262;function sc(r){if(!Array.isArray(r)||r.length<3||r.length>256||!r.every(e=>Array.isArray(e)&&e.length===2&&e.every(i=>typeof i=="number"&&Number.isFinite(i)&&i>=0&&i<=1)))return!1;let t=0;for(let e=0;e<r.length;e++){const i=r[e],n=r[(e+1)%r.length];t+=i[0]*n[1]-n[0]*i[1]}return Math.abs(t)>2e-4}class Ud{polygons=new Map;constructor(t=[]){if(Array.isArray(t))for(const e of t.slice(-128))Array.isArray(e)&&Fd(e[0])&&sc(e[1])&&this.polygons.set(e[0],e[1].map(i=>[...i]))}get(t){const e=this.polygons.get(t);return e?e.map(i=>[...i]):null}set(t,e){if(!Fd(t)||!sc(e))return!1;for(this.polygons.delete(t),this.polygons.set(t,e.map(i=>[...i]));this.polygons.size>128;)this.polygons.delete(this.polygons.keys().next().value);return!0}clear(t){return this.polygons.delete(t)}serialize(){return JSON.stringify([...this.polygons])}}class wM{overlay=document.createElement("div");surface=document.createElementNS("http://www.w3.org/2000/svg","svg");shape=document.createElementNS("http://www.w3.org/2000/svg","path");label=document.createElement("span");hint=document.createElement("span");active=!1;pointer=null;points=[];saved=null;finish=()=>{};constructor(){this.overlay.className="particle-draw-overlay",this.overlay.hidden=!0,this.surface.classList.add("particle-draw-surface"),this.surface.setAttribute("viewBox","0 0 1000 1000"),this.surface.setAttribute("preserveAspectRatio","none"),this.surface.setAttribute("aria-label","Draw spawn area"),this.shape.classList.add("particle-draw-path"),this.shape.setAttribute("vector-effect","non-scaling-stroke"),this.surface.appendChild(this.shape);const t=document.createElement("div");t.className="particle-draw-toolbar";const e=document.createElement("button");e.type="button",e.textContent="Cancel",e.onclick=()=>this.cancel(),this.label.className="particle-draw-title",this.hint.className="particle-draw-hint",t.append(this.label,this.hint,e),this.overlay.append(this.surface,t),document.body.appendChild(this.overlay),this.surface.addEventListener("pointerdown",i=>this.start(i)),this.surface.addEventListener("pointermove",i=>this.move(i)),this.surface.addEventListener("pointerup",i=>this.end(i)),this.surface.addEventListener("pointercancel",i=>this.cancelStroke(i)),window.addEventListener("keydown",i=>{this.active&&i.key==="Escape"&&(i.preventDefault(),i.stopImmediatePropagation(),this.cancel())},!0)}open(t,e,i,n){this.active=!0,this.pointer=null,this.points=[],this.saved=i,this.finish=n,this.label.textContent=`Draw area · ${t}`,this.hint.textContent="Drag a closed area on the image. Release to save.",this.shape.style.stroke=/^#[0-9a-f]{6}$/i.test(e)?e:"#d5e5ff",this.shape.style.fill=/^#[0-9a-f]{6}$/i.test(e)?e:"#d5e5ff",this.paint(i??[],!0),this.overlay.hidden=!1}cancel(){this.active=!1,this.pointer=null,this.overlay.hidden=!0}point(t){const e=this.surface.getBoundingClientRect();return[Math.max(0,Math.min(1,(t.clientX-e.left)/Math.max(1,e.width))),Math.max(0,Math.min(1,(t.clientY-e.top)/Math.max(1,e.height)))]}start(t){!this.active||this.pointer!==null||!t.isPrimary||(t.preventDefault(),this.pointer=t.pointerId,this.points=[this.point(t)],this.surface.setPointerCapture(t.pointerId),this.paint(this.points,!1))}move(t){if(this.pointer!==t.pointerId)return;t.preventDefault();const e=this.point(t),i=this.points[this.points.length-1];Math.hypot(e[0]-i[0],e[1]-i[1])<.003||(this.points.length<256?this.points.push(e):this.points[this.points.length-1]=e,this.paint(this.points,!1))}end(t){if(this.pointer===t.pointerId)if(t.preventDefault(),this.move(t),this.pointer=null,sc(this.points)){const e=this.points.map(i=>[...i]);this.finish(e),this.cancel()}else this.hint.textContent="Area too small. Drag a larger closed shape, or cancel.",this.paint(this.saved??[],!0)}cancelStroke(t){this.pointer===t.pointerId&&(this.pointer=null,this.paint(this.saved??[],!0),this.hint.textContent="Drawing interrupted. Try again or cancel.")}paint(t,e){if(!t.length){this.shape.setAttribute("d","");return}const i=t.map(([n,s],a)=>`${a?"L":"M"}${(n*1e3).toFixed(1)} ${(s*1e3).toFixed(1)}`).join(" ");this.shape.setAttribute("d",`${i}${e||t.length>2?" Z":""}`)}}const kd=r=>typeof r=="number"&&Number.isFinite(r)&&r>=0&&r<=127,Od=r=>typeof r=="string"&&/^[A-Za-z][A-Za-z0-9]{0,63}$/.test(r)&&!/^(?:Unidentified|Escape|(?:Shift|Control|Alt|Meta)(?:Left|Right)?|Fn|FnLock)$/.test(r);let AM=0;function EM(){const r=globalThis.crypto;return`manual-key-test-${typeof r?.randomUUID=="function"?r.randomUUID():`${Date.now().toString(36)}-${(++AM).toString(36)}-${Math.random().toString(36).slice(2)||"0"}`}`}class zd{voices=[60,64,67,72].map((t,e)=>({address:`/melody${e+1}`,pitch:t,code:null}));camera={address:"camera",code:null};bloom={address:"bloom",code:null};morph={address:"morph",code:null};distortion={address:"distortion",code:null};actions=[...this.voices,this.camera,this.bloom];streamID=EM();ids=new Map;constructor(t=[],e=!1,i=!1){if(e&&this.actions.push(this.morph),i&&this.actions.push(this.distortion),!!Array.isArray(t))for(const n of t)!n||typeof n!="object"||typeof n.address!="string"||(kd(n.pitch)&&this.setPitch(n.address,n.pitch),(n.code===null||Od(n.code))&&this.bind(n.address,n.code))}setPitch(t,e){const i=this.voices.find(n=>n.address===t);return!i||!kd(e)?!1:(i.pitch=e,!0)}bind(t,e){const i=this.actions.find(n=>n.address===t);if(!i||e!==null&&!Od(e))return!1;for(const n of this.actions)e!==null&&n.code===e&&(n.code=null);return i.code=e,!0}forKey(t){return this.actions.find(e=>e.code===t)??null}note(t){const e=this.voices.find(n=>n.address===t);if(!e)return null;const i=(this.ids.get(t)??0)+1;return this.ids.set(t,i),{address:t,types:",ifffis",args:[1,e.pitch,e.pitch,0,i,this.streamID]}}serialize(){return JSON.stringify(this.actions)}}const Rs=(r,t,e,i)=>typeof r=="number"&&Number.isFinite(r)?Math.max(e,Math.min(i,r)):t,Oa=r=>Number(r.toPrecision(12)),Bd=r=>r*r*(3-2*r);function Vr(r){const t=r&&typeof r=="object"?r:{},e=Rs(t.tidalBloom,1.1,0,10),i=Rs(t.tidalBloomAttack,.3,.1,120),n=Rs(t.tidalBloomRelease,1.2,.1,120),s=i+n,a=Rs(t.tidalBloomDuration,Math.min(120,Oa(s)),.1,120),o=Math.max(.05,Math.min(.95,Oa(i/s))),l=Rs(t.tidalBloomAttackRatio,o,.05,.95),c=Oa(a*l);return{tidalBloom:e,tidalBloomMin:Rs(t.tidalBloomMin,0,0,e),tidalBloomDuration:a,tidalBloomAttackRatio:l,tidalBloomAttack:c,tidalBloomRelease:Oa(a-c)}}let Rf=class{settings=Vr();strength=0;start=0;elapsed=0;currentPhase="idle";trigger(t){this.settings=Vr(t),this.active||(this.strength=this.settings.tidalBloomMin),this.start=this.strength,this.elapsed=0,this.currentPhase="attack"}update(t,e){if(!this.active)return this.strength=Vr(e).tidalBloomMin,this.strength;const i=Number.isFinite(t)&&t>0?t:0,{tidalBloom:n,tidalBloomMin:s,tidalBloomDuration:a,tidalBloomAttack:o,tidalBloomRelease:l}=this.settings;if(this.elapsed=Math.min(a,this.elapsed+i),a-this.elapsed<=1e-10)this.strength=s,this.currentPhase="idle";else if(o-this.elapsed<=1e-10){this.currentPhase="release";const c=Math.max(0,this.elapsed-o)/l;this.strength=n+(s-n)*Bd(c)}else this.strength=this.start+(n-this.start)*Bd(this.elapsed/o);return this.strength}reset(t){this.settings=Vr(t),this.strength=this.settings.tidalBloomMin,this.start=this.strength,this.elapsed=0,this.currentPhase="idle"}get value(){return this.strength}get active(){return this.currentPhase!=="idle"}get phase(){return this.currentPhase}};const Nn=(r,t,e,i)=>typeof r=="number"&&Number.isFinite(r)?Math.max(e,Math.min(i,r)):t,Vd=r=>typeof r=="string"&&r.length<=128&&(r==="all"||r==="off"||/^\/\S+$/u.test(r))?r:"all";function Ye(r){const t=r&&typeof r=="object"?r:{},e=Nn(t.tidalCameraMinDistance,450,50,5e3),i=Nn(t.tidalCameraMaxDistance,1100,50,5e3);return{tidalCircleWidth:Nn(t.tidalCircleWidth,.55,.05,3),tidalLinkWidth:Nn(t.tidalLinkWidth,.3,.05,3),tidalNoteBrightness:Nn(t.tidalNoteBrightness,3,1,10),tidalNeighborCohesion:Nn(t.tidalNeighborCohesion,1,0,5),...Vr(t),tidalBloomTrigger:Vd(t.tidalBloomTrigger),tidalCameraDuration:Nn(t.tidalCameraDuration,2,.1,20),tidalCameraMinDistance:Math.min(e,i),tidalCameraMaxDistance:Math.max(e,i),tidalCameraTrigger:Vd(t.tidalCameraTrigger)}}function qr(r,t){return r==="all"||r!=="off"&&r===t}const Pf=qr,Ii=[{id:1,name:"Liquid",label:"Flow",description:"Fluid warping and melting"},{id:2,name:"Ripple",label:"Waves",description:"Ripples expanding outward"},{id:3,name:"Elastic",label:"Stretch",description:"Soft shearing and lens stretching"},{id:4,name:"Shatter",label:"Fragments",description:"Fragmented, rotated and displaced tiles"},{id:5,name:"Kaleido",label:"Mirrors",description:"Mirrored folds around the center"},{id:6,name:"Fractal",label:"Recursion",description:"Recursive zooming and rotating tunnels"}],Mi=(r,t,e=1)=>typeof r=="number"&&Number.isFinite(r)?Math.max(0,Math.min(e,r)):t;function ci(r){const t=r&&typeof r=="object"&&!Array.isArray(r)?r:{},e={tidalDistortionMode:Math.round(Mi(t.tidalDistortionMode,0,6)),tidalDistortionIntensity:Mi(t.tidalDistortionIntensity,0),tidalDistortionScale:Mi(t.tidalDistortionScale,.5),tidalDistortionSpeed:Mi(t.tidalDistortionSpeed,.35),tidalDistortionDetail:Mi(t.tidalDistortionDetail,.5)},i=Array.isArray(t.tidalDistortionLayers)?t.tidalDistortionLayers:null,n=Ii.map(({id:o})=>{const l=i?.find(h=>h&&typeof h=="object"&&!Array.isArray(h)&&h.mode===o),c=!i&&e.tidalDistortionMode===o;return{mode:o,enabled:i?l?.enabled===!0:c,intensity:Mi(l?.intensity,c?e.tidalDistortionIntensity:1),scale:Mi(l?.scale,c?e.tidalDistortionScale:.5),speed:Mi(l?.speed,c?e.tidalDistortionSpeed:.35),detail:Mi(l?.detail,c?e.tidalDistortionDetail:.5)}}),s=[];for(const o of[...Array.isArray(t.tidalDistortionOrder)?t.tidalDistortionOrder:[],...Ii.map(l=>l.id)])Number.isInteger(o)&&o>=1&&o<=6&&!s.includes(o)&&s.push(o);const a=t.tidalDistortionBurstTrigger;return{...e,tidalDistortionLayers:n,tidalDistortionOrder:s,tidalDistortionBurstDuration:Math.max(.1,Mi(t.tidalDistortionBurstDuration,.8,120)),tidalDistortionBurstTrigger:typeof a=="string"&&a.length<=128&&(a==="all"||a==="off"||/^\/\S+$/u.test(a))?a:"off"}}function TM(r){const t=ci(r);return t.tidalDistortionOrder.map(e=>t.tidalDistortionLayers[e-1])}function Rc(r,t){const e=ci(r),i=e.tidalDistortionLayers.find(n=>n.mode===t);return i?{...e,tidalDistortionMode:t,tidalDistortionIntensity:i.intensity,tidalDistortionScale:i.scale,tidalDistortionSpeed:i.speed,tidalDistortionDetail:i.detail}:e}function CM(r,t){const e=ci(r),i=e.tidalDistortionLayers.find(n=>n.mode===t);return i&&(i.enabled=!i.enabled,i.enabled&&(e.tidalDistortionOrder=[...e.tidalDistortionOrder.filter(n=>n!==t),t])),Rc(e,t)}function RM(r,t,e){const i=ci(r),n=i.tidalDistortionLayers.find(s=>s.mode===t);if(n)for(const s of["intensity","scale","speed","detail"])s in e&&(n[s]=Mi(e[s],n[s]));return Rc(i,t)}function PM(r){const t=ci(r);for(const e of t.tidalDistortionLayers)e.enabled=!1;return t.tidalDistortionMode=0,t}const Gd=(r,t,e,i)=>typeof r=="number"&&Number.isFinite(r)?Math.max(e,Math.min(i,r)):t;function Xe(r){const t=r&&typeof r=="object"&&!Array.isArray(r)?r:{},e=t.tidalMorphTrigger;return{...Ye(t),...ci(t),tidalMorphPosition:Gd(t.tidalMorphPosition,0,0,1),tidalMorphDuration:Gd(t.tidalMorphDuration,3,.1,30),tidalMorphTrigger:typeof e=="string"&&e.length<=128&&(e==="all"||e==="off"||/^\/\S+$/u.test(e))?e:"off"}}const Df=[{id:"notes",label:"Notes",group:"Notes"},{id:"camera",label:"Camera",group:"Camera"},{id:"bloom",label:"Bloom",group:"Bloom"},{id:"morph",label:"Morph",group:"Morph"},{id:"distortion",label:"Distortion Burst",group:"Distortion"}],ke=(r,t,e,i,n,s=.01)=>({id:r,label:t,group:e,min:i,max:n,step:s,property:r}),If=[...["energy","brightness","motion"].map(r=>({id:r,label:{energy:"Energy",brightness:"Brightness",motion:"Motion"}[r],group:"Field",min:0,max:1,step:.01,field:r})),ke("tidalDensity","Density","Field",0,1),ke("tidalMorphPosition","Morph position","Morph",0,1),ke("tidalMorphDuration","Morph duration","Morph",.1,30,.1),ke("tidalCircleWidth","Circle width","Network",.05,3,.05),ke("tidalLinkWidth","Link width","Network",.05,3,.05),ke("tidalNoteBrightness","Note brightness","Network",1,10,.1),ke("tidalNeighborCohesion","Neighbor cohesion","Network",0,5,.05),ke("tidalBloomMin","Bloom minimum","Bloom",0,10,.05),ke("tidalBloom","Bloom peak","Bloom",0,10,.05),ke("tidalBloomDuration","Bloom duration","Bloom",.1,120,.1),ke("tidalBloomAttackRatio","Attack fraction","Bloom",.05,.95),ke("tidalCameraDuration","Camera duration","Camera",.1,20,.1),ke("tidalCameraMinDistance","Camera distance min","Camera",50,5e3,10),ke("tidalCameraMaxDistance","Camera distance max","Camera",50,5e3,10),ke("tidalDistortionBurstDuration","Burst duration","Distortion",.1,120,.1),...Ii.flatMap(r=>["enabled","intensity","scale","speed","detail"].map(t=>({id:`distortion.${r.id}.${t}`,label:`${r.name} ${{enabled:"on/off",intensity:"intensity",scale:"scale",speed:"speed",detail:"detail"}[t]}`,group:`Distortion · ${r.name}`,min:0,max:1,step:t==="enabled"?1:.01,layer:r.id,parameter:t})))],es=new Map(If.map(r=>[r.id,r])),rc=(r,t)=>Math.max(t.min,Math.min(t.max,r));function Hd(r,t,e){const i=r&&typeof r=="object"?r:{},n=typeof i.tidalDensity=="number"&&Number.isFinite(i.tidalDensity)?Math.max(0,Math.min(1,i.tidalDensity)):1,s={...Xe(r),tidalDensity:n},a={...t};for(const o of["energy","brightness","motion"]){const l={energy:.35,brightness:.5,motion:.4};a[o]=Number.isFinite(t[o])?Math.max(0,Math.min(1,t[o])):l[o]}for(const[o,l]of e){const c=es.get(o);if(!c||!Number.isFinite(l))continue;const h=rc(l,c);if(c.field)a[c.field]=h;else if(c.property)s[c.property]=h;else if(c.layer&&c.parameter){const d=s.tidalDistortionLayers.find(u=>u.mode===c.layer);c.parameter==="enabled"?d.enabled=h>=.5:d[c.parameter]=h}}return{presentation:{...Xe(s),tidalDensity:s.tidalDensity},field:a}}function Xd(r,t,e){if(r.field)return e[r.field];if(r.property)return t[r.property];const i=t.tidalDistortionLayers.find(s=>s.mode===r.layer);if(!i||!r.parameter)return r.min;const n=i[r.parameter];return typeof n=="boolean"?Number(n):n}const wl=r=>r&&typeof r=="object"&&!Array.isArray(r)?r:{},za=r=>typeof r=="string"&&r.length>0&&r.length<=280&&!/[\u0000-\u001f\u007f]/u.test(r),Al=(r,t,e,i)=>typeof r=="number"&&Number.isFinite(r)?Math.max(e,Math.min(i,r)):t,DM=new Set(Df.map(r=>r.id));function Ne(r){const t=wl(r),e=[],i=[];if(!Array.isArray(t.triggers))e.push({id:"notes",source:"all-notes",target:"notes",mode:"every",enabled:!0});else for(const[n,s]of t.triggers.slice(0,256).entries()){const a=wl(s);!za(a.source)||typeof a.target!="string"||!DM.has(a.target)||e.push({id:za(a.id)?a.id:`trigger-${n}`,source:a.source,target:a.target,mode:a.mode==="first-cycle"||a.mode==="first-run"?a.mode:"every",enabled:a.enabled!==!1})}if(Array.isArray(t.cv))for(const[n,s]of t.cv.slice(0,256).entries()){const a=wl(s),o=typeof a.target=="string"?es.get(a.target):void 0;!o||!za(a.source)||i.push({id:za(a.id)?a.id:`cv-${n}`,source:a.source,target:o.id,min:Al(a.min,o.min,o.min,o.max),max:Al(a.max,o.max,o.min,o.max),smoothing:Al(a.smoothing,30,0,1e4),enabled:a.enabled!==!1})}return{triggers:e,cv:i}}const Wd=(r,t)=>{for(r.add(t);r.size>4096;)r.delete(r.values().next().value)};class IM{settings;smoothing=new Map;fired=new Set;constructor(t){this.settings=Ne(t)}setSettings(t){this.settings=Ne(t),this.smoothing.clear()}reset(){this.smoothing.clear(),this.fired.clear()}actions(t,e){const i=new Set;if(!t||t.track.kind!=="melody")return i;const n=er(e).find(o=>o.kind==="melody"&&o.address===t.track.address&&(!t.trackId||!o.metadata||o.id===t.trackId));if(!n)return i;const s=t.track.lastOnsetStream||t.track.streamID,a=[];for(const o of this.settings.triggers){if(!o.enabled||o.source!=="all-notes"&&o.source!==n.id)continue;let l=null;if(o.mode==="first-cycle"){if(t.firstInCycle!==!0||!t.trackId||!t.cycleId)continue;l=JSON.stringify(["cycle",s,t.trackId,t.cycleId,o.target])}else if(o.mode==="first-run"&&(t.firstInRun!==!0||!t.trackId))continue;l&&this.fired.has(l)||a.push({target:o.target,firstKey:l})}for(const{target:o,firstKey:l}of a){l&&Wd(this.fired,l);const c=JSON.stringify(["event",s,t.trackId??n.id,t.eventID,o]);this.fired.has(c)||(Wd(this.fired,c),i.add(o))}return i}evaluate(t,e,i,n){const s=Hd(t,e,new Map),a=new Map,o=new Set,l=new Map(er(i).map(d=>[d.id,d])),c=new Map;for(const d of this.settings.cv)d.enabled&&c.set(d.target,d);for(const[d,u]of c){const f=l.get(u.source),g=es.get(d),y=f&&f.kind==="cv"?i.tracks.get(f.address):void 0;if(!f||!y||y.kind!=="cv"||!Number.isFinite(y.cv)||f.metadata&&y.catalogId!==f.id)continue;const v=co(y.cv,f.inputMin,f.inputMax),p=rc(u.min+(u.max-u.min)*v,g),M=this.smoothing.get(d)??Xd(g,s.presentation,s.field),m=u.smoothing===0?1:-Math.expm1(-Math.max(0,Number.isFinite(n)?n:0)*1e3/u.smoothing),x=rc(M+(p-M)*m,g);this.smoothing.set(d,x),a.set(d,x),o.add(d)}for(const d of this.smoothing.keys())o.has(d)||this.smoothing.delete(d);const h=Hd(t,e,a);for(const d of o)a.set(d,Xd(es.get(d),h.presentation,h.field));return{...h,values:a,driven:o}}}const Yt=(r,t,e)=>{const i=document.createElement(r);return t!==void 0&&(i.textContent=t),e&&(i.className=e),i},on=(r,t)=>{const e=Yt("option",t);return e.value=r,e},Yd=()=>globalThis.crypto?.randomUUID?.()??`map-${Date.now()}-${Math.random().toString(36).slice(2)}`;class NM{constructor(t,e,i){this.receiver=t,this.read=e,this.change=i,this.root.hidden=!0,this.root.setAttribute("aria-label","011 Slewn mappings");const n=Yt("div",void 0,"mapping-heading");n.append(Yt("h2","Demo CV → 011"),Yt("span","SIMULATED SIGNALS")),this.status.setAttribute("role","status");const s=Yt("div",void 0,"mapping-section-heading"),a=Yt("button","+ Trigger mapping");a.type="button",s.append(Yt("h3","NOTE / TRIGGERS"),a),a.onclick=()=>{const l=Ne(this.read());l.triggers.push({id:Yd(),source:"all-notes",target:"distortion",mode:"every",enabled:!0}),this.commit(l)};const o=Yt("div",void 0,"mapping-section-heading");this.addCV.type="button",o.append(Yt("h3","CV / CONTINUOUS CONTROL"),this.addCV),this.addCV.onclick=()=>{this.mapCV("tidalMorphPosition",!1)},this.root.append(n,this.status,s,this.triggers,o,this.curves,Yt("p","One track can control multiple effects. Reverse the CV output range if needed. When several mappings control one parameter, the last enabled mapping wins. Removing a mapping restores the manual setting below. CV control of Morph position takes priority over note-triggered morphing.","mapping-help")),s.hidden=!0,this.triggers.hidden=!0,this.refresh()}root=Yt("section",void 0,"slewn-mappings");status=Yt("p",void 0,"mapping-status");triggers=Yt("div",void 0,"mapping-list");curves=Yt("div",void 0,"mapping-list");addCV=Yt("button","+ CV mapping");signature="";sourceLabels=new Map;readouts=new Map;values=new Map;mapCV(t,e=!0){const i=es.get(t);if(!i)return!1;this.root.scrollIntoView({block:"nearest",behavior:"smooth"});const n=Ne(this.read());let s=e?n.cv.filter(o=>o.target===t&&o.enabled).at(-1):void 0;if(!s){const o=er(this.receiver()).find(l=>l.kind==="cv");if(!o)return this.refresh(),!1;s={id:Yd(),source:o.id,target:t,min:i.min,max:i.max,smoothing:30,enabled:!0},n.cv.push(s),this.commit(n)}const a=[...this.curves.children].find(o=>o.dataset.mappingId===s.id);return a?.scrollIntoView({block:"nearest",behavior:"smooth"}),a?.querySelector('[aria-label="CV source track"]')?.focus({preventScroll:!0}),!0}setValues(t){this.values=t}refresh(t=performance.now()){const e=this.receiver(),i=er(e);e.catalog,t-e.catalogReceivedAt<5e3,this.status.textContent="These CV tracks are generated in your browser. Play demo to start them; Ambient only pauses them. Real Slewn CV uses the local OSC version.",this.addCV.disabled=!i.some(s=>s.kind==="cv"),this.addCV.title=this.addCV.disabled?"Play demo to discover CV tracks":"Connect a CV track to a visual parameter";const n=JSON.stringify([i,this.read()]);n!==this.signature&&!this.root.contains(document.activeElement)&&(this.signature=n,this.draw(i));for(const{node:s,rule:a}of this.readouts.values()){const o=i.find(d=>d.id===a.source),l=o&&e.tracks.get(o.address),c=this.values.get(a.target),h=this.read().cv.filter(d=>d.enabled&&d.target===a.target).at(-1);s.textContent=a.enabled?h?.id!==a.id?"Controlled by a later mapping":!l||c===void 0?"Waiting for CV":`${l.cv.toFixed(3)} → ${Number(c.toFixed(3))}`:"Paused"}}commit(t){this.change(Ne(t)),this.signature="",this.draw(er(this.receiver()))}label(t,e){const i=Yt("label",t);return i.append(e),i}sourceSelect(t,e,i){const n=Yt("select");n.setAttribute("aria-label",t==="cv"?"CV source track":"Note source track"),t==="melody"&&n.append(on("all-notes","All note tracks"));for(const s of i.filter(a=>a.kind===t)){const a=`${s.name}${s.enabled?"":" · OSC off / muted"} · Demo`;this.sourceLabels.set(s.id,s.name),n.append(on(s.id,a))}return[...n.options].some(s=>s.value===e)||n.append(on(e,`${this.sourceLabels.get(e)??"Saved track"} · Waiting to connect`)),n.value=e,n}header(t,e,i){const n=Yt("div",void 0,"mapping-card-heading"),s=Yt("input");s.type="checkbox",s.checked=e.enabled,s.setAttribute("aria-label",`Enable ${t} mapping ${i+1}`),s.onchange=()=>{const o=Ne(this.read());o[t][i].enabled=s.checked,this.commit(o)};const a=Yt("button","Remove");return a.type="button",a.setAttribute("aria-label",`Remove ${t} mapping ${i+1}`),a.onclick=()=>{const o=Ne(this.read());o[t].splice(i,1),this.commit(o)},n.append(this.label(`Mapping ${String(i+1).padStart(2,"0")}`,s),a),n}draw(t){this.triggers.replaceChildren(),this.curves.replaceChildren(),this.readouts.clear();const e=this.read();e.triggers.forEach((i,n)=>{const s=Yt("article",void 0,"mapping-card");s.dataset.mappingId=i.id;const a=this.sourceSelect("melody",i.source,t),o=Yt("select"),l=Yt("select");o.setAttribute("aria-label","Trigger visual effect"),o.append(...Df.map(h=>on(h.id,h.label))),o.value=i.target,l.setAttribute("aria-label","Note trigger mode"),l.append(on("every","Every note"),on("first-cycle","First sounding note per loop"),on("first-run","First sounding note per start")),l.value=i.mode;const c=()=>{const h=Ne(this.read());h.triggers[n]={...h.triggers[n],source:a.value,target:o.value,mode:l.value},this.commit(h)};a.onchange=o.onchange=l.onchange=c,s.append(this.header("triggers",i,n),this.label("Slewn track",a),this.label("Visual effect",o),this.label("Trigger mode",l)),i.mode!=="every"&&(i.source==="all-notes"?t.some(h=>h.kind==="melody"&&!h.metadata):!t.find(h=>h.id===i.source)?.metadata)&&s.append(Yt("p","First-note modes require cycle markers from an updated Slewn. Legacy messages do not trigger these modes.","mapping-warning")),i.target==="distortion"&&s.append(Yt("p","Select effects in Distortion below. This mapping triggers a burst of speed; Duration sets its deceleration time.","mapping-help")),this.triggers.append(s)}),e.triggers.length||this.triggers.append(Yt("p","No trigger mappings yet. Add one, then choose a track and effect.","mapping-help")),e.cv.forEach((i,n)=>{const s=Yt("article",void 0,"mapping-card");s.dataset.mappingId=i.id;const a=this.sourceSelect("cv",i.source,t),o=Yt("select");o.setAttribute("aria-label","CV visual parameter");const l=new Map;for(const g of If){if(!l.has(g.group)){const y=Yt("optgroup");y.label=g.group,l.set(g.group,y),o.append(y)}l.get(g.group).append(on(g.id,g.label))}o.value=i.target,a.onchange=()=>{const g=Ne(this.read());g.cv[n].source=a.value,this.commit(g)},o.onchange=()=>{const g=es.get(o.value),y=Ne(this.read());y.cv[n]={...y.cv[n],target:g.id,min:g.min,max:g.max},this.commit(y)};const c=Yt("div",void 0,"mapping-range"),h=es.get(i.target);for(const[g,y]of[["min","Output start"],["max","Output end"],["smoothing","Smoothing ms"]]){const v=Yt("input");v.type="number",v.value=String(i[g]),v.min=String(g==="smoothing"?0:h.min),v.max=String(g==="smoothing"?1e4:h.max),v.step=String(g==="smoothing"?10:h.step),v.setAttribute("aria-label",`CV ${g}`),v.oninput=()=>{if(!Number.isFinite(v.valueAsNumber))return;const p=Ne(this.read());p.cv[n][g]=v.valueAsNumber,this.change(Ne(p))},v.onchange=()=>{const p=Ne(this.read());p.cv[n][g]=v.valueAsNumber,this.commit(p)},c.append(this.label(y,v))}const d=Yt("button","Reverse range");d.type="button",d.onclick=()=>{const g=Ne(this.read()),y=g.cv[n];[y.min,y.max]=[y.max,y.min],this.commit(g)};const u=Yt("output","Waiting for CV");this.readouts.set(i.id,{node:u,rule:i});const f=Yt("div",void 0,"mapping-card-footer");f.append(u,d),s.append(this.header("cv",i,n),this.label("Demo CV track",a),this.label("Visual parameter",o),c,f),this.curves.append(s)}),e.cv.length||this.curves.append(Yt("p","Use Map CV beside an effect parameter, or add a mapping here. Demo CV ranges from 0 to 1; Ambient only pauses the signals.","mapping-help"))}}const $d=location.port==="5188"?"npm run visual:tao":"npm run visual",Nf="slewn-track-colors-v1",LM="slewn-particle-regions-v1",Lf="slewn-particle-drawn-areas-v1",Ff="slewn-manual-note-test-v1",Uf="slewn-011-mappings-v1";function FM(){try{return Ne(JSON.parse(localStorage.getItem(Uf)??"null"))}catch{return Ne()}}const Zd={camera:{name:"Camera",description:"Move to a new viewpoint. Independent of the four note voices."},bloom:{name:"Bloom",description:"Raise and release the glow. Independent of notes and Camera."},morph:{name:"Morph",description:"Transform between particle filaments and circles. Independent of notes, Camera and Bloom."},distortion:{name:"Distortion",description:"Accelerate selected distortion effects into a new state each time; only speed returns to normal. Set Duration in Distortion. Sends no note."}},Tr=r=>`<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${r}</svg>`;function UM(){try{return new nc(JSON.parse(localStorage.getItem(Nf)??"[]"))}catch{return new nc}}function kM(){try{return new Ld(JSON.parse(localStorage.getItem(LM)??"[]"))}catch{return new Ld}}function OM(){try{return new Ud(JSON.parse(localStorage.getItem(Lf)??"[]"))}catch{return new Ud}}function zM(){try{return new zd(JSON.parse(localStorage.getItem(Ff)??"[]"),!0,!0)}catch{return new zd([],!0,!0)}}class BM{receiver=new Cd(UM());mappingSettings=FM();mappingRuntime=new IM(this.mappingSettings);mappingControls;slewnMappingMode=!1;particleRegions=kM();drawnAreas=OM();areaDrawer=new wM;areaStatus=new Map;source=null;demo=!1;manualDemo=!1;morphDemo=!1;manualNotes=zM();learningVoice=null;manualRows=new Map;tidalDemo=!1;tidalScheduler=null;particleDemo=!1;particleScheduler=null;demoStarted=0;nextDemoNote=0;demoID=0;demoStream="";lastUI=0;lastPacket=0;lastPeer="";connected=!1;status=null;rows=new Map;root=document.createElement("section");callback;reset;pitchUpdate;smoothed={energy:.35,size:.5,brightness:.5,motion:.4};constructor(t,e,i){this.callback=t,this.reset=e,this.pitchUpdate=i,this.root.className="slewn",this.root.innerHTML=`
      <div class="slewn-heading"><div class="slewn-brand"><span class="brand-mark">${Tr('<path d="M5 17 12 5l7 12M8 12h8M5 17h14"/><circle cx="12" cy="5" r="1.5"/>')}</span><h1>Flock<span> / Slewn</span></h1></div><p>Sound into motion.</p><span class="slewn-kicker">A LIVE PARTICLE INSTRUMENT</span></div>
      <aside class="slewn-panel" aria-label="Slewn OSC receiver">
        <header><div class="panel-heading"><span class="panel-eyebrow">CONTROL ROOM</span><span class="connection"><i></i><b id="osc-state" role="status">Connecting bridge</b></span></div><button id="osc-collapse" aria-label="Collapse receiver" aria-expanded="true" aria-controls="osc-panel-body">${Tr('<path d="M6 12h12"/><path class="collapse-vertical" d="M12 6v12"/>')}</button></header>
        <div class="slewn-body" id="osc-panel-body">
          <div class="source-switch" role="group" aria-label="Input source"><button id="osc-live" aria-pressed="true">${Tr('<circle cx="12" cy="12" r="2"/><path d="M7.5 7.5a6.4 6.4 0 0 0 0 9M16.5 7.5a6.4 6.4 0 0 1 0 9M4.5 4.5a10.6 10.6 0 0 0 0 15M19.5 4.5a10.6 10.6 0 0 1 0 15"/>')}<span>Live OSC</span></button><button id="osc-demo" aria-pressed="false">${Tr('<path d="m9 5 10 7-10 7Z"/>')}<span>Local demo</span></button></div>
          <p class="source-note" id="osc-source">Waiting for the local receiver.</p>
          <section id="osc-manual-test" class="manual-note-test" aria-labelledby="osc-manual-title" hidden>
            <h2 id="osc-manual-title">Manual key test</h2>
            <p>Choose Learn, then press one unmodified key. A used key moves to the new action. Voice Test sends one note. Camera, Bloom<span class="manual-morph-description" hidden>, Morph and Distortion</span> have separate tests and send no notes. Colors appear below after each voice’s first note.</p>
            <div id="osc-manual-voices" class="manual-note-voices"></div>
            <p id="osc-manual-status" class="manual-note-status" role="status"></p>
          </section>
          <div class="connection-detail"><span>${Tr('<rect x="8" y="3" width="8" height="6" rx="2"/><rect x="2" y="16" width="7" height="5" rx="1.5"/><rect x="15" y="16" width="7" height="5" rx="1.5"/><path d="M12 9v4M5.5 16v-3h13v3"/>')}DESTINATION / UDP</span><strong id="osc-destination">Run ${$d}</strong></div>
          <div class="osc-summary"><div><b id="osc-onsets">0</b><span>NOTE EVENTS</span></div><div><b id="osc-tests">0</b><span>TEST PACKETS</span></div><div><b id="osc-received">0</b><span>MESSAGES</span></div></div>
          <div class="channels-heading"><h2>Signal channels</h2><span id="osc-track-count">0 active</span></div>
          <div id="osc-channels" class="osc-channels"><p id="osc-empty">Play the connected Max patch or a Slewn track, or try Local demo.</p></div>
          <details><summary>Mapping & connection</summary><p class="tidal-original-mapping">The original four-layer blue-white wave field flows continuously, including during silence. Each accepted note-on enlarges one random existing visible point; Response sets the seconds until it smoothly returns to its fixed resting size. Notes do not displace the field or alter its wave phase. Density thins the background while active note points remain visible. Energy controls the ambient wave height, Motion controls continuous flow speed, and Brightness controls light; CV Size is ignored. Max note-offs do not create pulses.</p><p class="tidal-mapping">Tidal keeps a moving field of different-sized circles and fine connecting filaments. Neighbor cohesion adjusts how particles group. Each melody note lights one connected route of circles and their existing links in that track’s chosen color. Circle width, link width and note brightness are adjustable and saved. Color stays on the selected route while the grayscale field continues flowing and locally compressing. Key test is manual: assign keys to four voices or press a voice’s Test button. Camera and Bloom each have their own key and Test button. Note keys trigger neither action. Drag to orbit; scroll to zoom.</p><p class="tidal-saved-mapping">Tidal Saved restores the particle version saved before the circle redesign. Its force-driven particles keep moving through changing groups, gaps and streams. Notes compress a populated region and light its particle filaments in that track’s selected color. Neighbor cohesion, density, camera and Bloom settings are saved independently from05. Key test uses the existing four note keys plus separate Camera and Bloom actions. Drag to orbit; scroll to zoom.</p><p class="tidal-morph-mapping">Tidal Morph transforms one moving geometry between10’s particle filaments and05’s circles. Notes retain local compression, pitch and Glide response, chosen track colors, connected route lights and translucent filled circles throughout the morph. Density, neighbor cohesion, circle and link width, note brightness, Camera and Bloom remain adjustable. Choose Slewn tracks in the 011 mapping panel: every note, first sounding note per loop, or first per start. CV controls the listed visual parameters without changing manual settings. A Morph trigger reverses its destination from the current shape. Camera, Bloom, Morph and Distortion tests send no notes and operate independently. Distortion Burst accelerates all selected distortion layers by a fresh random amount, retains the new state and restores only ambient speed; set its deceleration time in Distortion. Drag to orbit; scroll to zoom.</p><p class="line-neighbors-mapping">Line Neighbors develops Generative Design P_2_2_2_02 into a moving spatial network. Shared endpoints stay joined; nearby lines connect at their closest points. Each accepted note lights one straight segment in the selected Note color. The next note chooses the nearest unvisited segment by the shortest distance between the actual 3D segments. A bend separates two segments. Every segment is visited once before the next cycle. All melody tracks advance this shared path. Response sets the fade back to graphite. CV Energy controls movement amplitude, Size controls line weight, Brightness controls contrast, and Motion controls speed. The network keeps moving during silence. Drag to orbit; scroll to zoom.</p><p class="ribbon-mapping">Interference: drag to orbit through 360°, scroll or pinch to zoom. Each accepted note chooses a random ribbon layer, avoiding other tracks’ latest layers. Its circumference grows by a random factor between Expansion min and max (1–10×); height stays fixed. Response sets the expansion and return time. Glow color controls the bright emissive ribbon and soft halo. The camera follows the expanded extent while keeping your view angle and relative zoom. CV is monitor-only in this scene.</p><p class="flock-mapping">Each melody onset chooses a random populated cloud, preferring a different location from its previous note. Each melody address keeps its editable color, saved in this browser. Notes squeeze the cloud and reveal fine neighboring-particle connections in that track’s color. Two colors blend only while both tracks’ note responses overlap. Junctions attach to living particles and follow their movement. Higher pitch gives greater brightness and richer branches; Glide smoothly changes brightness. Silent destinations retain the triggering track’s color. Collision highlights are off. CV controls the selected field parameter.</p><p class="legacy-cv-help">CV input range must match Slewn’s visual output range (default 0–1). Multiple curves assigned to one parameter are averaged. Pause holds the last value.</p><p>TAO Max: run npm run visual:tao to receive the project’s local notes on UDP 9010. In Max, open p tidal-midi-output for a visual-only test. For Slewn on the same network, enter this computer’s IP and UDP port, enable OSC, then send Test. Browser audio is off.</p><p id="osc-diagnostics"></p><a href="./">Open original audiovisual mode</a></details>
        </div>
      </aside>
      <footer class="slewn-footer"><span class="last-input"><i></i><span id="osc-last">NO INPUT YET</span></span><span class="viewport-hints">Drag to orbit<span>Scroll to zoom</span><span><kbd>F</kbd> Fullscreen</span></span></footer>`,document.body.appendChild(this.root),document.body.classList.add("share-mode"),this.element("osc-live").querySelector("span").textContent="Ambient only",this.root.querySelector("details a").remove(),this.mappingControls=new NM(()=>this.receiver,()=>this.mappingSettings,n=>{this.mappingSettings=n,this.mappingRuntime.setSettings(n);try{localStorage.setItem(Uf,JSON.stringify(n))}catch{}}),this.root.querySelector(".slewn-body").prepend(this.mappingControls.root),window.addEventListener("tidal-map-cv",n=>{const s=n.detail?.target;this.slewnMappingMode&&typeof s=="string"&&this.mappingControls.mapCV(s)}),this.createManualControls(),window.addEventListener("keydown",n=>this.manualKey(n),{capture:!0}),this.element("osc-live").onclick=()=>this.selectDemo(!1),this.element("osc-demo").onclick=()=>this.selectDemo(!0),this.element("osc-collapse").onclick=()=>{const n=this.root.classList.toggle("collapsed");this.element("osc-collapse").setAttribute("aria-label",n?"Expand receiver":"Collapse receiver"),this.element("osc-collapse").setAttribute("aria-expanded",String(!n)),window.dispatchEvent(new Event("resize"))},document.addEventListener("visibilitychange",()=>{this.source?.close(),this.source=null,this.connected=!1,document.hidden||this.connect()}),window.addEventListener("pagehide",()=>this.source?.close()),this.connect()}element(t){return this.root.querySelector(`#${t}`)}createManualControls(){for(const t of this.manualNotes.actions){const e=document.createElement("article");e.className="manual-note-voice";const i=this.manualNotes.voices.find(c=>c.address===t.address),n=Zd[t.address],s=i?i.address:n.name;if(e.dataset.manualAction=t.address,i||(e.id=`osc-manual-${t.address}`,e.classList.add("manual-action-test"),t.address===this.manualNotes.camera.address&&e.classList.add("manual-camera-test")),e.innerHTML=`<div class="manual-note-title"><code></code><kbd></kbd></div>${i?'<label>MIDI pitch<input type="number" min="0" max="127" step="any"></label>':`<p class="manual-action-description">${n.description}</p>`}<div class="manual-note-actions"><button type="button" class="manual-note-learn">Learn</button><button type="button" class="manual-note-clear">Clear</button><button type="button" class="manual-note-trigger">Test</button></div>`,e.querySelector("code").textContent=s,i){const c=e.querySelector("input");c.value=String(i.pitch),c.setAttribute("aria-label",`${i.address} test pitch`),c.onchange=()=>{this.manualNotes.setPitch(i.address,c.valueAsNumber)&&this.saveManualNotes(),c.value=String(i.pitch)}}const a=e.querySelector(".manual-note-learn"),o=e.querySelector(".manual-note-clear"),l=e.querySelector(".manual-note-trigger");a.setAttribute("aria-label",`Learn ${s} key`),o.setAttribute("aria-label",`Clear ${s} key`),l.setAttribute("aria-label",`Test ${s}`),a.onclick=()=>{this.learningVoice=this.learningVoice===t.address?null:t.address,this.drawManualControls()},o.onclick=()=>{this.manualNotes.bind(t.address,null),this.learningVoice===t.address&&(this.learningVoice=null),this.saveManualNotes(),this.drawManualControls()},l.onclick=()=>{this.learningVoice=null,this.drawManualControls(),this.triggerManual(t.address)},this.manualRows.set(t.address,{element:e,binding:e.querySelector("kbd"),learn:a,clear:o}),this.element("osc-manual-voices").appendChild(e)}this.drawManualControls()}drawManualControls(){this.element("osc-manual-test").hidden=!this.isManualTestActive(),this.element("osc-demo").querySelector("span").textContent="Play demo";for(const i of this.manualNotes.actions){const n=this.manualRows.get(i.address);n.element.hidden=(i.address==="morph"||i.address==="distortion")&&!this.morphDemo;const s=i.address===this.learningVoice;n.element.classList.toggle("is-learning",s),n.binding.textContent=i.code?.replace(/^(?:Key|Digit)/,"").replace(/^Numpad/,"Num ")??"Unassigned",n.learn.textContent=s?"Cancel":"Learn",n.learn.setAttribute("aria-pressed",String(s)),n.clear.disabled=i.code===null}const t=this.manualNotes.actions.filter(i=>!["morph","distortion"].includes(i.address)||this.morphDemo),e=t.filter(i=>i.code!==null).length;this.element("osc-manual-status").textContent=this.learningVoice?`Press one key for ${Zd[this.learningVoice]?.name??this.learningVoice}. Escape cancels.`:`${e} of ${t.length} keys assigned. Notes, Camera, Bloom${this.morphDemo?", Morph and Distortion":""} trigger separately.`}saveManualNotes(){try{localStorage.setItem(Ff,this.manualNotes.serialize())}catch{}}triggerManual(t){if(!this.isManualTestActive())return;if(t==="distortion"){this.morphDemo&&window.dispatchEvent(new Event("tidal-distortion-test"));return}if(t==="morph"){this.morphDemo&&window.dispatchEvent(new Event("tidal-morph-test"));return}if(t===this.manualNotes.camera.address){window.dispatchEvent(new Event("tidal-camera-test"));return}if(t===this.manualNotes.bloom.address){window.dispatchEvent(new Event("tidal-bloom-test"));return}const e=this.manualNotes.note(t);e&&(this.accept(e,performance.now()),this.lastUI=0)}manualKey(t){if(!this.isManualTestActive()||document.hidden)return;if(t.target instanceof Element&&t.target.closest('input,select,textarea,[contenteditable]:not([contenteditable="false"])')){this.learningVoice&&t.stopImmediatePropagation();return}if(this.learningVoice){t.preventDefault(),t.stopImmediatePropagation(),t.key==="Escape"?this.learningVoice=null:!t.repeat&&!t.metaKey&&!t.ctrlKey&&!t.altKey&&!t.shiftKey&&this.manualNotes.bind(this.learningVoice,t.code)&&(this.learningVoice=null,this.saveManualNotes()),this.drawManualControls();return}if(t.metaKey||t.ctrlKey||t.altKey||t.shiftKey)return;const i=this.manualNotes.forKey(t.code);!i||(i.address==="morph"||i.address==="distortion")&&!this.morphDemo||(t.preventDefault(),t.stopImmediatePropagation(),t.repeat||this.triggerManual(i.address))}connect(){}accept(t,e){const i=this.receiver.received,n=this.receiver.receive(t,e);if(n&&this.syncParticleRegions(),this.receiver.received!==i&&(this.lastPacket=e),n)this.callback(n,e);else if(this.receiver.received!==i&&t.types===",fffis"&&t.address.endsWith("/pitch")){const s=this.receiver.tracks.get(t.address.slice(0,-6));s&&this.pitchUpdate?.(s)}}selectDemo(t){if(t&&this.slewnMappingMode,this.demo!==t){this.areaDrawer.cancel(),this.areaStatus.clear(),this.learningVoice=null,this.demo=t,this.receiver=new Cd(this.receiver.colors),this.syncParticleRegions(),this.reset(),this.mappingRuntime?.reset(),this.root.dataset.mode=t?"demo":"live",this.smoothed={energy:.35,size:.5,brightness:.5,motion:.4};for(const e of this.rows.values())e.element.remove();this.rows.clear(),this.lastPacket=0,this.lastPeer="",this.element("osc-empty").hidden=!1,this.demoStarted=performance.now(),this.nextDemoNote=0,this.demoID=0,this.demoStream=`browser-demo-${this.demoStarted}`,this.tidalScheduler=!this.manualDemo&&this.tidalDemo?new MM(this.demoStarted):null,this.particleScheduler=!this.manualDemo&&this.particleDemo?new SM(this.demoStarted):null,this.element("osc-live").setAttribute("aria-pressed",String(!t)),this.element("osc-demo").setAttribute("aria-pressed",String(t)),this.drawManualControls(),this.lastUI=0}}setManualDemo(t){t=!1,this.manualDemo!==t&&(this.manualDemo=t,this.learningVoice=null,this.demo&&(this.selectDemo(!1),this.selectDemo(!0)),this.drawManualControls(),this.lastUI=0)}isManualTestActive(){return!this.slewnMappingMode&&this.manualDemo&&this.demo}startShowcase(){this.selectDemo(!0)}setSlewnMappingMode(t){t&&this.demo,this.slewnMappingMode=t,this.learningVoice=null,this.mappingControls.root.hidden=!t;{const e=this.root.querySelector(".slewn-body");e.append(this.mappingControls.root),e.prepend(this.root.querySelector(".source-switch"),this.element("osc-source"))}this.drawManualControls(),this.lastUI=0}mappedPresentation(t){return this.mappingRuntime.evaluate(t,this.smoothed,this.receiver,0).presentation}mappedFrame(t,e,i){const n=this.mappingRuntime.evaluate(t,e,this.receiver,i);return this.mappingControls.setValues(n.values),n}setMorphDemo(t){if(this.morphDemo===t)return;this.morphDemo=t,!t&&(this.learningVoice==="morph"||this.learningVoice==="distortion")&&(this.learningVoice=null);const e=this.root?.querySelector(".manual-morph-description");e&&(e.hidden=!t),this.drawManualControls(),this.lastUI=0}setTidalDemo(t){this.tidalDemo!==t&&(this.tidalDemo=t,this.demo&&(this.selectDemo(!1),this.selectDemo(!0)))}setParticleDemo(t){t||this.areaDrawer.cancel(),this.particleDemo!==t&&(this.particleDemo=t,this.demo&&(this.selectDemo(!1),this.selectDemo(!0)))}advanceDemo(t){if(this.manualDemo)return;const e=(t-this.demoStarted)/1e3;if(this.particleScheduler)for(const i of this.particleScheduler.take(t))this.accept(i.message,i.at);else if(this.tidalScheduler)for(const i of this.tidalScheduler.take(t))this.accept(i.message,i.at);else if(e>=this.nextDemoNote){const i=[48,55,60,67,67,62,58,72],n=++this.demoID,s=i[n%i.length],a=i[(n-1)%i.length];this.accept({address:`/melody${n%2+1}`,types:",ifffis",args:[1,s,a,n%3===0?850:0,n,this.demoStream]},t),this.nextDemoNote=e+.55}for(let i=1;i<=2;i++)this.accept({address:`/cv${i}`,types:",f",args:[.5+.48*Math.sin(e*(i===1?.65:1.1))]},t)}createRow(t){const e=document.createElement("article");e.className="osc-channel",e.style.setProperty("--track-color",t.color.hex),e.innerHTML='<div class="channel-title"><span class="channel-kind"></span><code></code><span class="channel-indicator" aria-hidden="true"></span></div><div class="channel-value"></div><div class="channel-scope"><svg viewBox="0 0 280 40" preserveAspectRatio="none" aria-hidden="true"><polyline fill="none" stroke="currentColor" stroke-width="1.5" vector-effect="non-scaling-stroke" /></svg></div>',e.querySelector("code").textContent=t.address,e.querySelector(".channel-kind").textContent=t.kind==="melody"?"NOTE":"CV";let i;if(t.kind==="cv"){const s=document.createElement("div");s.className="cv-mapping",s.innerHTML='<label>Field target<select><option value="energy">Energy</option><option value="size">Size / width</option><option value="brightness">Brightness</option><option value="motion">Motion</option><option value="none">Monitor only</option></select></label><label>Min<input type="number" step="any" value="0"></label><label>Max<input type="number" step="any" value="1"></label>';const a=s.querySelector("select");a.value=t.destination,a.setAttribute("aria-label",`${t.address} target`),a.onchange=()=>{t.destination=a.value},s.querySelectorAll("input").forEach((o,l)=>{o.setAttribute("aria-label",`${t.address} input ${l?"maximum":"minimum"}`),o.onchange=()=>{const c=o.valueAsNumber;Number.isFinite(c)?l?t.inputMax=c:t.inputMin=c:o.value=String(l?t.inputMax:t.inputMin)}}),e.appendChild(s)}if(t.kind==="melody"){const s=document.createElement("div");s.className="melody-color",s.innerHTML='<label>Color<input type="color"></label><input type="text" maxlength="7" spellcheck="false" autocomplete="off">';const a=s.querySelector("input[type=color]"),o=s.querySelector("input[type=text]");a.value=o.value=t.color.hex,a.setAttribute("aria-label",`${t.address} color`),o.setAttribute("aria-label",`${t.address} color hex`);const l=y=>this.receiver.colors.set(t.address,y)?(a.value=o.value=t.color.hex,e.style.setProperty("--track-color",t.color.hex),!0):!1;a.oninput=()=>{l(a.value)},a.onchange=()=>{l(a.value),this.saveColors()},o.onchange=()=>{l(o.value.trim())||(o.value=t.color.hex),this.saveColors()},o.onkeydown=y=>{y.key==="Enter"&&o.blur()},e.appendChild(s);const c=document.createElement("div");c.className="particle-region";const h=document.createElement("span");h.className="particle-area-label";const d=document.createElement("div");d.className="particle-area-actions";const u=document.createElement("button");u.type="button",u.className="particle-area-draw",u.textContent="Draw area",u.setAttribute("aria-label",`Draw ${t.address} spawn area`);const f=document.createElement("button");f.type="button",f.className="particle-area-clear",f.textContent="Clear",f.setAttribute("aria-label",`Clear ${t.address} spawn area`),u.onclick=()=>this.areaDrawer.open(t.address,t.color.hex,this.drawnAreas.get(t.address),y=>{this.drawnAreas.set(t.address,y)&&(this.areaStatus.delete(t.address),this.saveDrawnAreas(),this.lastUI=0)}),f.onclick=()=>{this.drawnAreas.clear(t.address),this.areaStatus.delete(t.address),this.saveDrawnAreas(),this.lastUI=0};const g=document.createElement("small");g.className="particle-area-status",g.setAttribute("role","status"),d.append(u,f),c.append(h,d,g),e.appendChild(c),this.saveColors()}this.element("osc-channels").appendChild(e);const n={track:t,element:e,readout:e.querySelector(".channel-value"),trace:e.querySelector("polyline"),history:[],mappingReadout:i};return this.rows.set(t.address,n),n}syncParticleRegions(){const t=[...this.receiver.tracks.values()].filter(e=>e.kind==="melody").sort((e,i)=>e.index-i.index).map(e=>e.address);this.particleRegions.sync(t)}setParticleAreaStatus(t,e){this.areaStatus.set(t,e),this.lastUI=0}saveDrawnAreas(){try{localStorage.setItem(Lf,this.drawnAreas.serialize())}catch{}}saveColors(){try{localStorage.setItem(Nf,this.receiver.colors.serialize())}catch{}}update(t,e){this.demo&&!document.hidden&&this.advanceDemo(t);const i={energy:[],size:[],brightness:[],motion:[]};for(const n of this.receiver.tracks.values())!this.slewnMappingMode&&n.kind==="cv"&&n.destination!=="none"&&i[n.destination].push(co(n.cv,n.inputMin,n.inputMax));for(const n of Object.keys(this.smoothed)){const s={energy:.35,size:.5,brightness:.5,motion:.4},a=i[n].length?i[n].reduce((o,l)=>o+l,0)/i[n].length:s[n];this.smoothed[n]+=(a-this.smoothed[n])*(1-Math.exp(-e/.03))}return t-this.lastUI>100&&(this.drawUI(t),this.lastUI=t),this.smoothed}drawUI(t){this.slewnMappingMode&&this.mappingControls.refresh(t),this.root.dataset.mode=this.demo?"demo":"live",this.root.dataset.connected=String(this.connected);const e=this.demo?"Demo playing":"Ambient flow";this.element("osc-state").textContent!==e&&(this.element("osc-state").textContent=e),this.element("osc-source").textContent=this.demo?this.manualDemo?"MANUAL INPUT · assign keys or press Test · live OSC is ignored":this.particleDemo?"FOUR TRACKS · INDEPENDENT RATES · SIMULATED DATA":"SIMULATED DATA · live OSC is ignored in demo mode":this.connected?this.lastPeer?`Last source: ${this.lastPeer} · browser audio off`:"Bridge ready · waiting for Max / Slewn · browser audio off":`Start ${$d}, then this page reconnects automatically.`,this.element("osc-source").textContent=this.demo?"Simulated notes animate the field. Drag to orbit, scroll to zoom, and explore the effects below. No audio.":"The field flows without note triggers. Play demo to add colored notes, or explore Morph, Camera, Bloom and Distortion below.",this.status&&(this.element("osc-destination").textContent=`${this.status.lan.join(" / ")||"Computer LAN IP"} : ${this.status.udpPort}`,this.element("osc-diagnostics").textContent=`UDP accepted ${this.status.accepted} · malformed ${this.status.rejected} · rate-limited ${this.status.dropped}. Browser messages count valid note / CV events only.`),this.element("osc-onsets").textContent=String(this.receiver.onsets),this.element("osc-tests").textContent=String(this.receiver.testCount),this.element("osc-received").textContent=String(this.receiver.received),this.element("osc-track-count").textContent=`${this.receiver.tracks.size} active`,this.element("osc-last").textContent=this.receiver.lastAddress?`${this.demo?"DEMO":"OSC"}  ${this.receiver.lastAddress}${t-this.lastPacket>2e3?" · HOLDING LAST STATE":""}`:"NO INPUT YET",this.element("osc-empty").hidden=this.receiver.tracks.size>0,this.element("osc-empty").textContent=this.manualDemo&&this.demo?"Press a voice Test or its assigned key to send the first note. Camera changes the viewpoint; Bloom triggers the glow.":this.slewnMappingMode?"Tracks appear above. Start playback to see live notes and CV here.":"Play the connected Max patch or a Slewn track, or try Local demo.";for(const[i,n]of this.rows)this.receiver.tracks.get(i)!==n.track&&(n.element.remove(),this.rows.delete(i));for(const i of[...this.receiver.tracks.values()].sort((n,s)=>n.index-s.index)){const n=this.rows.get(i.address)??this.createRow(i),s=this.slewnMappingMode&&er(this.receiver).find(l=>l.address===i.address);n.element.querySelector("code").textContent=s?s.name:i.address;const a=Cc(i,t),o=co(i.cv,s?s.inputMin:i.inputMin,s?s.inputMax:i.inputMax);if(n.readout.textContent=i.kind==="cv"?`${i.cv.toFixed(3)}  →  ${(o*100).toFixed(0)}%`:`MIDI ${a.toFixed(1)} → ${i.targetPitch.toFixed(1)} · ${i.glideMs.toFixed(0)} ms · ${i.triggerCount} events`,n.mappingReadout?.(co(i.cv,i.inputMin,i.inputMax)),i.kind==="melody"){const l=n.element.querySelector(".particle-region"),c=this.particleRegions.regionFor(i.address);l.hidden=c===null;const h=this.drawnAreas.get(i.address)!==null;l.querySelector(".particle-area-label").textContent=h?"Custom spawn area":"Default spawn area",l.querySelector(".particle-area-draw").textContent=h?"Redraw area":"Draw area",l.querySelector(".particle-area-clear").disabled=!h,l.querySelector(".particle-area-status").textContent=h&&this.areaStatus.get(i.address)===!1?"Area has no visible water":""}n.history.push(i.kind==="cv"?o:Math.max(0,Math.min(1,(a-24)/72))),n.history.length>90&&n.history.shift(),n.trace.setAttribute("points",n.history.map((l,c)=>`${c/89*280},${38-l*36}`).join(" "))}}}const Ln=96,jr=192,Ba=16;let VM=class{nodes=new Int32Array(Ln).fill(-1);fractions=new Float32Array(Ln);depth=new Uint8Array(Ln);degree=new Uint8Array(Ln);valid=new Uint8Array(Ln);previous=new Float32Array(Ln*3);display=new Float32Array(Ln*3);edgeA=new Uint8Array(jr);edgeB=new Uint8Array(jr);nodeCount=0;edgeCount=0;spineCount=0;linkDistance=0;reset(t){this.nodeCount=this.edgeCount=this.spineCount=0,this.linkDistance=t,this.nodes.fill(-1),this.degree.fill(0),this.valid.fill(0)}addNode(t,e,i,n,s){for(let l=0;l<this.nodeCount;l++)if(this.nodes[l]===e)return l;if(this.nodeCount>=s)return-1;const a=this.nodeCount++,o=a*3;return this.nodes[a]=e,this.fractions[a]=i,this.depth[a]=n,this.valid[a]=1,this.previous[o]=t.posX[e],this.previous[o+1]=t.posY[e],this.previous[o+2]=t.posZ[e],a}addEdge(t,e){if(t===e||t<0||e<0||this.edgeCount>=jr)return!1;for(let n=0;n<this.edgeCount;n++)if(this.edgeA[n]===t&&this.edgeB[n]===e||this.edgeA[n]===e&&this.edgeB[n]===t)return!1;const i=this.edgeCount++;return this.edgeA[i]=t,this.edgeB[i]=e,this.degree[t]++,this.degree[e]++,!0}},GM=class{constructor(t){this.flock=t}ids=new Int32Array(Ba);distances=new Float64Array(Ba);count=0;heads=new Int32Array(32*32*32);next=new Int32Array(0);stamp=-1/0;cell=1;minX=0;minY=0;minZ=0;rx=1;ry=1;rz=1;radius=0;clear(){this.stamp=-1/0}prepare(t,e){const i=this.flock.pool;if(this.stamp===t&&this.next.length===i.N&&this.radius===e)return;this.stamp=t,this.radius=e,this.next.length!==i.N&&(this.next=new Int32Array(i.N));let n=1/0,s=1/0,a=1/0,o=-1/0,l=-1/0,c=-1/0;for(let h=0;h<i.N;h++)i.alive[h]&&i.fadeOutT[h]<=0&&(n=Math.min(n,i.posX[h]),o=Math.max(o,i.posX[h]),s=Math.min(s,i.posY[h]),l=Math.max(l,i.posY[h]),a=Math.min(a,i.posZ[h]),c=Math.max(c,i.posZ[h]));if(this.heads.fill(-1),!Number.isFinite(n)){this.minX=this.minY=this.minZ=0,this.rx=this.ry=this.rz=1;return}this.minX=n,this.minY=s,this.minZ=a,this.cell=Math.max(1,e/3,(o-n)/30,(l-s)/30,(c-a)/30),this.rx=Math.floor((o-n)/this.cell)+1,this.ry=Math.floor((l-s)/this.cell)+1,this.rz=Math.floor((c-a)/this.cell)+1;for(let h=0;h<i.N;h++)if(i.alive[h]&&i.fadeOutT[h]<=0){const d=Math.floor((i.posX[h]-n)/this.cell),u=Math.floor((i.posY[h]-s)/this.cell),f=Math.floor((i.posZ[h]-a)/this.cell),g=d+u*this.rx+f*this.rx*this.ry;this.next[h]=this.heads[g],this.heads[g]=h}}query(t,e,i,n,s=-1,a=Ba){const o=n*n;this.count=0,a=Math.max(1,Math.min(Ba,a));const l=Math.max(0,Math.floor((t-n-this.minX)/this.cell)),c=Math.min(this.rx-1,Math.floor((t+n-this.minX)/this.cell)),h=Math.max(0,Math.floor((e-n-this.minY)/this.cell)),d=Math.min(this.ry-1,Math.floor((e+n-this.minY)/this.cell)),u=Math.max(0,Math.floor((i-n-this.minZ)/this.cell)),f=Math.min(this.rz-1,Math.floor((i+n-this.minZ)/this.cell));if(l>c||h>d||u>f)return 0;const g=Math.max(l,Math.min(c,Math.floor((t-this.minX)/this.cell))),y=Math.max(h,Math.min(d,Math.floor((e-this.minY)/this.cell))),v=Math.max(u,Math.min(f,Math.floor((i-this.minZ)/this.cell))),p=g+y*this.rx+v*this.rx*this.ry;this.scan(p,t,e,i,o,s,a);for(let M=u;M<=f;M++)for(let m=h;m<=d;m++)for(let x=l;x<=c;x++){const T=x+m*this.rx+M*this.rx*this.ry;if(T===p||this.heads[T]<0)continue;const _=Math.max(this.minX+x*this.cell-t,0,t-(this.minX+(x+1)*this.cell)),S=Math.max(this.minY+m*this.cell-e,0,e-(this.minY+(m+1)*this.cell)),A=Math.max(this.minZ+M*this.cell-i,0,i-(this.minZ+(M+1)*this.cell)),w=this.count===a?this.distances[a-1]:o;_*_+S*S+A*A>w||this.scan(T,t,e,i,o,s,a)}return this.count}scan(t,e,i,n,s,a,o){const l=this.flock.pool;for(let c=this.heads[t];c>=0;c=this.next[c]){if(c===a||!l.alive[c]||l.fadeOutT[c]>0)continue;const h=(l.posX[c]-e)**2+(l.posY[c]-i)**2+(l.posZ[c]-n)**2;if(h>s||a>=0&&h<1e-8||this.count===o&&(h>this.distances[o-1]||h===this.distances[o-1]&&c>=this.ids[o-1]))continue;let d=0;for(;d<this.count&&(this.distances[d]<h||this.distances[d]===h&&this.ids[d]<c);)d++;if(!(d>=o)){for(let u=Math.min(this.count,o-1);u>d;u--)this.ids[u]=this.ids[u-1],this.distances[u]=this.distances[u-1];this.ids[d]=c,this.distances[d]=h,this.count=Math.min(o,this.count+1)}}}build(t,e,i,n,s){const a=this.flock.pool,o=Math.max(8,Math.min(this.flock.p.myceliumLinkDist,this.flock.p.worldRadius*.45));this.prepare(s,o),t.reset(o);const l=48+Math.round(n*48),c=2+Math.round(n*2),h=a.posX[e],d=a.posY[e],u=a.posZ[e],f=a.posX[i]-h,g=a.posY[i]-d,y=a.posZ[i]-u,v=f*f+g*g+y*y,p=m=>Math.max(0,Math.min(1,((a.posX[m]-h)*f+(a.posY[m]-d)*g+(a.posZ[m]-u)*y)/Math.max(1e-8,v)));t.addNode(a,e,0,0,l);let M=0;for(let m=1;m<16;m++){const x=m/16;if(!this.query(h+f*x,d+g*x,u+y*x,o*.65,-1,1))continue;const T=this.ids[0],_=p(T);T===i||_<=M+.012||_>=.988||(t.addNode(a,T,_,0,l),M=_)}t.addNode(a,i,1,0,l),t.spineCount=t.nodeCount;for(let m=1;m<t.spineCount;m++)t.addEdge(m-1,m);for(let m=0;m<t.nodeCount&&t.edgeCount<jr;m++){if(t.depth[m]>=3)continue;const x=t.nodes[m],T=a.posX[x],_=a.posY[x],S=a.posZ[x];this.query(T,_,S,o,x);let A=0;for(let w=0;w<this.count&&A<c;w++){const b=this.ids[w],E=(T+a.posX[b])*.5,I=(_+a.posY[b])*.5,D=(S+a.posZ[b])*.5,F=this.distances[w]*.25;let U=!1;for(let k=0;k<w;k++){const z=this.ids[k];if((a.posX[z]-E)**2+(a.posY[z]-I)**2+(a.posZ[z]-D)**2<F*.999999){U=!0;break}}if(U||t.degree[m]>=6)continue;let L=-1;for(let k=0;k<t.nodeCount;k++)if(t.nodes[k]===b){L=k;break}L>=0&&t.degree[L]>=6||(L<0&&(L=t.addNode(a,b,p(b),t.depth[m]+1,l)),t.addEdge(m,L)&&A++)}}}};const ac=32,Ps=ac*jr*6,oc=r=>Math.max(0,Math.min(1,(r-24)/72)),qd=r=>420+oc(r)*280;let HM=class{constructor(t,e){this.flock=e,this.neighbors=new GM(e);const i=new ie;i.setAttribute("position",this.positions),i.setAttribute("direction",this.directions),i.setAttribute("color",this.colors),i.setAttribute("width",this.widths);const n=new Float32Array(Ps);for(let a=0;a<Ps;a+=6)n.set([-1,-1,1,-1,1,1],a);i.setAttribute("side",new xt(n,1)),i.setDrawRange(0,0);const s=new se({transparent:!0,depthWrite:!1,blending:qe,side:Me,vertexShader:`
        attribute vec3 direction;
        attribute vec4 color;
        attribute float width;
        attribute float side;
        varying vec4 vColor;
        varying float vSide;
        void main() {
          vec4 p = modelViewMatrix * vec4(position, 1.0);
          vec2 d = (modelViewMatrix * vec4(direction, 0.0)).xy;
          vec2 normal = vec2(-d.y, d.x) / max(length(d), 0.0001);
          p.xy += normal * side * width;
          gl_Position = projectionMatrix * p;
          vColor = color; vSide = side;
        }`,fragmentShader:`
        varying vec4 vColor;
        varying float vSide;
        void main() {
          float core = exp(-vSide * vSide * 18.0);
          float halo = exp(-vSide * vSide * 3.5) * 0.32;
          gl_FragColor = vec4(vColor.rgb, vColor.a * (core + halo));
        }`});this.mesh=new _e(i,s),this.mesh.name="slewn-mycelium",this.mesh.frustumCulled=!1,this.mesh.visible=!1,t.add(this.mesh)}visibleParticles=new Set;growths=Array.from({length:ac},()=>({track:null,targetTrack:null,source:-1,target:-1,started:0,eventID:0,streamID:"",network:new VM,pitch:60,colorFrom:60,colorTarget:60,colorStarted:0,colorGlide:0,steps:0,branches:0,life:0,vertexOffset:0,vertexCount:0,targetTriggerCount:0,targetOnsetAt:-1/0,targetOnsetPitch:60,targetStream:"",targetFrom:60,targetPitch:60,targetStarted:0,targetGlide:0,sx:0,sy:0,sz:0,tx:0,ty:0,tz:0}));cursor=0;vertices=0;positions=new xt(new Float32Array(Ps*3),3).setUsage($t);directions=new xt(new Float32Array(Ps*3),3).setUsage($t);colors=new xt(new Float32Array(Ps*4),4).setUsage($t);widths=new xt(new Float32Array(Ps),1).setUsage($t);neighbors;counts=new Uint32Array(512);anchors=new Int32Array(512).fill(-1);refreshed=-1/0;viewDirection=new V;mesh;alive(t){const e=this.flock.pool;return t>=0&&t<e.N&&!!e.alive[t]&&e.fadeOutT[t]<=0}anchor(t){const e=this.flock.pool;let i=-1,n=1/0;for(let s=0;s<t.count;s++){const a=t.members[s];if(!this.alive(a))continue;const o=(e.posX[a]-t.x)**2+(e.posY[a]-t.y)**2+(e.posZ[a]-t.z)**2;o<n&&(n=o,i=a)}return i}screenSeparation(t,e){const i=this.flock.pool,n=this.viewDirection,s=i.posX[e]-i.posX[t],a=i.posY[e]-i.posY[t],o=i.posZ[e]-i.posZ[t],l=s*n.x+a*n.y+o*n.z;return Math.sqrt(Math.max(0,s*s+a*a+o*o-l*l))}nearby(t,e,i,n=!0){const s=this.flock.pool;if(i-this.refreshed>250){this.counts.fill(0),this.anchors.fill(-1);const l=Math.max(1,this.flock.p.worldRadius*3);for(let c=0;c<s.N;c++){if(!this.alive(c))continue;const h=Math.max(0,Math.min(7,Math.floor((s.posX[c]/l+.5)*8))),d=Math.max(0,Math.min(7,Math.floor((s.posY[c]/l+.5)*8))),u=Math.max(0,Math.min(7,Math.floor((s.posZ[c]/l+.5)*8))),f=h+d*8+u*64;this.counts[f]++||(this.anchors[f]=c)}this.refreshed=i}let a=-1,o=1/0;for(let l=0;l<512;l++){const c=this.anchors[l];if(c===t||!this.alive(c)||this.counts[l]<3)continue;const h=Math.hypot(s.posX[c]-s.posX[t],s.posY[c]-s.posY[t],s.posZ[c]-s.posZ[t]);if(h<e.radius*.85||this.screenSeparation(t,c)<e.radius*.85)continue;const d=h*(.45+1/Math.sqrt(this.counts[l]));d<o&&(o=d,a=c)}return a<0&&n&&i!==this.refreshed?(this.refreshed=-1/0,this.nearby(t,e,i,!1)):a}trigger(t,e,i,n){this.flock.cam.getWorldDirection(this.viewDirection);const s=this.anchor(i);if(s<0)return;let a=-1,o=1/0,l=null;for(const u of n){if(u===i)continue;const f=Math.hypot(u.x-i.x,u.y-i.y,u.z-i.z);if(f<i.radius*.85||f>=o)continue;const g=this.anchor(u);g<0||g===s||this.screenSeparation(s,g)<i.radius*.85||(a=g,o=f,l=u.track??null)}if(a<0&&(a=this.nearby(s,i,e)),a<0)return;const c=this.growths[this.cursor],h=oc(t.pitch),d=this.flock.pool;this.cursor=(this.cursor+1)%ac,this.neighbors.build(c.network,s,a,h,e),Object.assign(c,{track:t.track,targetTrack:l,source:s,target:a,started:e,eventID:t.eventID,streamID:t.track.streamID,pitch:t.pitch,colorFrom:t.fromPitch,colorTarget:t.pitch,colorStarted:e,colorGlide:t.glideMs,targetTriggerCount:l?.triggerCount??0,targetOnsetAt:l?.lastOnsetAt??-1/0,targetOnsetPitch:l?.lastOnsetPitch??60,targetStream:l?.lastOnsetStream??"",targetFrom:l?.fromPitch??60,targetPitch:l?.targetPitch??60,targetStarted:l?.started??0,targetGlide:l?.glideMs??0,steps:c.network.spineCount-1,branches:c.network.edgeCount-c.network.spineCount+1,life:qd(t.pitch),sx:d.posX[s],sy:d.posY[s],sz:d.posZ[s],tx:d.posX[a],ty:d.posY[a],tz:d.posZ[a]})}clear(){this.visibleParticles.clear();for(const t of this.growths)t.track=null,t.targetTrack=null;this.neighbors.clear(),this.cursor=0,this.refreshed=-1/0,this.mesh.visible=!1,this.mesh.geometry.setDrawRange(0,0)}update(t,e,i){this.visibleParticles.clear(),this.vertices=0;const n=this.flock.pool;for(const s of this.growths){if(s.vertexOffset=this.vertices,s.vertexCount=0,!s.track)continue;const a=e-s.started;if(a>=s.life||t.tracks.get(s.track.address)!==s.track||!this.alive(s.source)||!this.alive(s.target)){s.track=null;continue}if(a<0)continue;const o=s.source,l=s.target,c=this.flock.p.worldRadius*.6;if(Math.hypot(n.posX[o]-s.sx,n.posY[o]-s.sy,n.posZ[o]-s.sz)>c||Math.hypot(n.posX[l]-s.tx,n.posY[l]-s.ty,n.posZ[l]-s.tz)>c){s.track=null;continue}s.sx=n.posX[o],s.sy=n.posY[o],s.sz=n.posZ[o],s.tx=n.posX[l],s.ty=n.posY[l],s.tz=n.posZ[l];const h=s.network;for(let E=0;E<h.nodeCount;E++){if(!h.valid[E])continue;const I=h.nodes[E],D=E*3;if(!this.alive(I)||Math.hypot(n.posX[I]-h.previous[D],n.posY[I]-h.previous[D+1],n.posZ[I]-h.previous[D+2])>c){h.valid[E]=0;continue}h.previous[D]=n.posX[I],h.previous[D+1]=n.posY[I],h.previous[D+2]=n.posZ[I];const F=i.sample(n.posX[I],n.posY[I],n.posZ[I]);h.display[D]=F[0],h.display[D+1]=F[1],h.display[D+2]=F[2]}s.track.eventID===s.eventID&&s.track.streamID===s.streamID&&(s.colorFrom=s.track.fromPitch,s.colorTarget=s.track.targetPitch,s.colorStarted=s.track.started,s.colorGlide=s.track.glideMs);const d=s.colorGlide<=0?1:Math.max(0,Math.min(1,(e-s.colorStarted)/s.colorGlide)),u=cr(s.colorFrom+(s.colorTarget-s.colorFrom)*d),f=s.track.color,g=f.r*u,y=f.g*u,v=f.b*u,p=s.targetTrack;p&&p.triggerCount===s.targetTriggerCount&&p.streamID===s.targetStream&&(s.targetFrom=p.fromPitch,s.targetPitch=p.targetPitch,s.targetStarted=p.started,s.targetGlide=p.glideMs);const M=e-s.targetOnsetAt,m=p&&t.tracks.get(p.address)===p&&s.targetStream===s.streamID&&M>=0?Math.max(0,Math.min(1,(qd(s.targetOnsetPitch)-M)/120)):0,x=s.targetGlide<=0?1:Math.max(0,Math.min(1,(e-s.targetStarted)/s.targetGlide)),T=cr(s.targetFrom+(s.targetPitch-s.targetFrom)*x),_=g+((p?.color.r??0)*T-g)*m,S=y+((p?.color.g??0)*T-y)*m,A=v+((p?.color.b??0)*T-v)*m,w=(1-Math.exp(-a/22))*(.65*Math.exp(-a/240)+.35*Math.exp(-a/420))*(1-a/s.life),b=2.3+oc(s.pitch)*1.1;for(let E=0;E<h.edgeCount;E++){const I=h.edgeA[E],D=h.edgeB[E];if(!h.valid[I]||!h.valid[D])continue;const F=h.nodes[I],U=h.nodes[D],L=Math.hypot(n.posX[F]-n.posX[U],n.posY[F]-n.posY[U],n.posZ[F]-n.posZ[U]),k=E<s.steps;if(!k&&L>h.linkDistance*1.5||L<.001)continue;const z=Math.max(h.depth[I],h.depth[D]),R=w*(k?1:Math.max(.35,1-L/(h.linkDistance*1.6))*.85);this.writeEdge(h,I,D,g,y,v,_,S,A,R,b/(1+z*.35))}s.vertexCount=this.vertices-s.vertexOffset}if(this.mesh.visible=this.vertices>0,this.mesh.geometry.setDrawRange(0,this.vertices),this.vertices)for(const s of[this.positions,this.directions,this.colors,this.widths])s.clearUpdateRanges(),s.addUpdateRange(0,this.vertices*s.itemSize),s.needsUpdate=!0}writeEdge(t,e,i,n,s,a,o,l,c,h,d){this.visibleParticles.add(t.nodes[e]),this.visibleParticles.add(t.nodes[i]);const u=t.display,f=e*3,g=i*3;for(let y=0;y<6;y++){const v=this.vertices++,p=y===1||y===2||y===4,M=p?g:f,m=t.fractions[p?i:e];this.positions.setXYZ(v,u[M],u[M+1],u[M+2]),this.directions.setXYZ(v,u[g]-u[f],u[g+1]-u[f+1],u[g+2]-u[f+2]),this.colors.setXYZW(v,n+(o-n)*m,s+(l-s)*m,a+(c-a)*m,h),this.widths.setX(v,d)}}};const El=16,jd=192,Va=2200;let Pc=class{constructor(t,e,i=Math.random,n=!0){this.flock=e,this.random=i,this.mycelium=n?new HM(t,e):null}clouds=new Map;active=[];releases=Array.from({length:16},()=>({track:null,until:0,baseCompression:0,basePresence:0,brightness:1,x:0,y:0,z:0,radius:1,ax:1,ay:0,az:0,compression:0,presence:0,r:0,g:0,b:0}));releaseCursor=0;gridRefreshed=-1/0;result=new Float64Array(7);lastNow=-1;cellCounts=new Uint32Array(512);cellX=new Float64Array(512);cellY=new Float64Array(512);cellZ=new Float64Array(512);mycelium;noFilamentParticles=new Set;get visibleParticles(){return this.mycelium?.visibleParticles??this.noFilamentParticles}region(t){return this.clouds.get(t)}trigger(t,e,i){if(this.prune(i),i.tracks.get(t.track.address)!==t.track)return;let n=this.clouds.get(t.track.address);if(!n||n.track!==t.track){const s=t.track.index*2.39996+.65;n={brightness:1,track:t.track,x:0,y:0,z:0,radius:Math.max(this.flock.p.worldRadius*.36,Math.min(this.flock.p.worldRadius*.65,this.flock.p.flockNeighborRadius*1.65)),ax:Math.cos(s)*.8,ay:.6,az:Math.sin(s)*.8,members:new Uint32Array(jd),count:0,refreshed:-1/0,pulses:new Float64Array(El).fill(-1/0),cursor:0,compression:0,presence:0,r:0,g:0,b:0},this.place(n,e,!1),this.collect(n,e),this.clouds.set(t.track.address,n)}else{if(n.presence>0||n.compression!==0){const s=this.releases[this.releaseCursor];this.releaseCursor=(this.releaseCursor+1)%this.releases.length,Object.assign(s,{track:n.track,until:e+350,baseCompression:n.compression,basePresence:n.presence,brightness:n.brightness,x:n.x,y:n.y,z:n.z,radius:n.radius,ax:n.ax,ay:n.ay,az:n.az})}this.place(n,e,!0),this.collect(n,e),n.pulses.fill(-1/0),n.cursor=0,n.compression=0,n.presence=0}n.count||(this.gridRefreshed=-1/0,this.place(n,e,!1),this.collect(n,e)),n.pulses[n.cursor]=e,n.cursor=(n.cursor+1)%El,this.mycelium?.trigger(t,e,n,this.clouds.values())}clear(){this.clouds.clear(),this.active.length=0,this.lastNow=-1,this.mycelium?.clear();for(const t of this.releases)t.track=null;this.gridRefreshed=-1/0,this.releaseCursor=0}prune(t){for(const[e,i]of this.clouds)t.tracks.get(e)!==i.track&&this.clouds.delete(e)}place(t,e,i){const n=this.flock.pool;if(e-this.gridRefreshed>120){this.cellCounts.fill(0),this.cellX.fill(0),this.cellY.fill(0),this.cellZ.fill(0);const s=Math.max(1,this.flock.p.worldRadius*3);for(let a=0;a<n.N;a++){if(!n.alive[a]||n.fadeOutT[a]>0)continue;const o=Math.max(0,Math.min(7,Math.floor((n.posX[a]/s+.5)*8))),l=Math.max(0,Math.min(7,Math.floor((n.posY[a]/s+.5)*8))),c=Math.max(0,Math.min(7,Math.floor((n.posZ[a]/s+.5)*8))),h=o+l*8+c*64;this.cellCounts[h]++,this.cellX[h]+=n.posX[a],this.cellY[h]+=n.posY[a],this.cellZ[h]+=n.posZ[a]}this.gridRefreshed=e}for(let s=0;s<3;s++){let a=-1,o=0;for(let l=0;l<512;l++){const c=this.cellCounts[l];if(!c)continue;const h=this.cellX[l]/c,d=this.cellY[l]/c,u=this.cellZ[l]/c,f=(h-t.x)**2+(d-t.y)**2+(u-t.z)**2;if(i&&s<2&&f<(t.radius*1.5)**2)continue;let g=1;for(const v of this.clouds.values()){if(v===t)continue;const p=(h-v.x)**2+(d-v.y)**2+(u-v.z)**2;g=Math.min(g,p/(t.radius+v.radius)**2)}if(s===0&&g<.25)continue;const y=Math.sqrt(c)*(.025+.975*g);o+=y,this.random()*o<y&&(a=l)}if(a>=0){const l=this.cellCounts[a];t.x=this.cellX[a]/l,t.y=this.cellY[a]/l,t.z=this.cellZ[a]/l;return}}}collect(t,e){const i=this.flock.pool,n=t.radius**2;t.count=0;const s=Math.max(1,Math.floor(i.N/3e3));for(let a=0;a<i.N&&t.count<jd;a+=s){if(!i.alive[a]||i.fadeOutT[a]>0)continue;const o=(i.posX[a]-t.x)**2+(i.posY[a]-t.y)**2+(i.posZ[a]-t.z)**2;o<n&&this.belongsTo(t,a,o)&&(t.members[t.count++]=a)}t.refreshed=e}belongsTo(t,e,i){const n=this.flock.pool;for(const s of this.clouds.values()){if(s===t)continue;const a=(n.posX[e]-s.x)**2+(n.posY[e]-s.y)**2+(n.posZ[e]-s.z)**2;if(a<i||a===i&&s.track.address<t.track.address)return!1}return!0}update(t,e,i){const n=this.lastNow<0?0:Math.max(0,Math.min(.1,(e-this.lastNow)/1e3));this.lastNow=e,this.active.length=0,this.prune(t);const s=this.flock.pool;for(const a of this.clouds.values()){let o=0,l=0,c=0,h=0;for(let m=0;m<a.count;m++){const x=a.members[m];if(x>=s.N||!s.alive[x]||s.fadeOutT[x]>0)continue;const T=(s.posX[x]-a.x)**2+(s.posY[x]-a.y)**2+(s.posZ[x]-a.z)**2;T>a.radius**2*4||!this.belongsTo(a,x,T)||(o+=s.posX[x],l+=s.posY[x],c+=s.posZ[x],h++)}if(h){const m=1-Math.exp(-n/.16);a.x+=(o/h-a.x)*m,a.y+=(l/h-a.y)*m,a.z+=(c/h-a.z)*m}(e-a.refreshed>450||h<4)&&(this.collect(a,e),a.count||(this.place(a,e,!1),this.collect(a,e)));let d=0,u=0;for(let m=0;m<El;m++){const x=e-a.pulses[m];if(x<0||x>=Va)continue;const T=x/1e3,_=Math.min(1,(Va-x)/250);d+=1.42*Math.exp(-T/.48)*Math.sin(T*7.6)*_,u+=(1-Math.exp(-T/.018))*Math.exp(-T/.9)*_}a.compression=Math.max(-.18,Math.min(.78,d));const f=e-a.track.started,g=Math.max(0,f-a.track.glideMs),y=f<0||g>=Va?0:Math.exp(-g/900)*Math.min(1,(Va-g)/250),v=a.presence+(1-a.presence)*(1-Math.exp(-n/.018));a.presence=Math.min(1,Math.max(u,Math.min(y,v)));const p=cr(Cc(a.track,e)),M=a.track.color;a.brightness=p,a.r=M.r*p,a.g=M.g*p,a.b=M.b*p,(a.presence>0||a.compression!==0)&&this.active.push(a)}for(const a of this.releases){if(!a.track)continue;if(e>=a.until||t.tracks.get(a.track.address)!==a.track){a.track=null;continue}const o=Math.max(0,Math.min(1,(a.until-e)/350)),l=o*o*(3-2*o);a.compression=a.baseCompression*l,a.presence=a.basePresence*l;const c=a.track.color;a.r=c.r*a.brightness,a.g=c.g*a.brightness,a.b=c.b*a.brightness,this.active.push(a)}this.mycelium?.update(t,e,this)}sample(t,e,i){const n=this.result;n[0]=t,n[1]=e,n[2]=i;let s=0,a=0,o=0,l=0,c=0,h=0,d=0,u=0;for(const g of this.active){const y=t-g.x,v=e-g.y,p=i-g.z,M=(y*y+v*v+p*p)/(g.radius*g.radius);if(M>=1)continue;const m=(1-M)**2,x=g.compression*m,T=y*g.ax+v*g.ay+p*g.az;c+=x*(y*.28-T*g.ax*1.28),h+=x*(v*.28-T*g.ay*1.28),d+=x*(p*.28-T*g.az*1.28),u+=Math.abs(x);const _=m*g.presence;l+=_,s+=g.r*_,a+=g.g*_,o+=g.b*_}const f=Math.max(1,u/.85);return n[0]+=c/f,n[1]+=h/f,n[2]+=d/f,n[3]=l?s/l:0,n[4]=l?a/l:0,n[5]=l?o/l:0,n[6]=Math.min(1,l),n}};const Ws=.9,lc=1.28,Cr=4.5,Kd=new V(0,1,0);class XM{radius=1/0;delta=new V;candidate=new V;normal=new V;ahead=new V;safe(t,e,i,n,s){for(const a of s){const o=(t.x-a.rest.x)*Ws,l=(t.y-a.rest.y)*Ws,c=(t.z-a.rest.z)*Ws,h=o*o+l*l+c*c,d=i+a.radius;if(Math.abs(n-a.travel)>d*1.8&&h<(d+6)**2)return!1;if(h>(d+Cr)**2)continue;const u=o*e.x+l*e.y+c*e.z,f=o*a.direction.x+l*a.direction.y+c*a.direction.z,g=e.dot(a.direction),y=Math.sqrt(Math.max(0,1-g*g));if(Math.abs(u)>a.radius*y+Cr||Math.abs(f)>i*y+Cr)continue;const v=Math.sqrt(h);if(v<Cr)return!1;const p=i*Math.sqrt(Math.max(0,1-u*u/h))+a.radius*Math.sqrt(Math.max(0,1-f*f/h));if(v<=p+Cr)return!1}return!0}place(t,e,i,n,s,a){const o=i.clone(),l=new V;for(const f of t){if(Math.abs(e.travel-f.travel)<(n+f.radius)*1.8)continue;this.delta.subVectors(e.rest,f.rest);const g=this.delta.length(),y=(n+f.radius)/Ws+s*5;g>1e-6&&g<y&&l.addScaledVector(this.delta,(1-g/y)**2/g)}o.addScaledVector(l,1.6).normalize();const c=this.radius/lc;if(Number.isFinite(c)&&e.rest.lengthSq()>1e-8){this.delta.copy(e.rest).normalize();const f=Math.max(0,(e.rest.length()/c-.2)/.8),g=Math.max(0,o.dot(this.delta));o.addScaledVector(this.delta,-2*f*f*g).normalize()}const h=new V().crossVectors(o,Kd);h.lengthSq()<1e-8?h.set(1,0,0):h.normalize();const d=[o,i.clone()];for(const f of[.14,-.14,.28,-.28,.45,-.45,.7,-.7,1,-1])d.push(o.clone().applyAxisAngle(Kd,f),o.clone().applyAxisAngle(h,f));let u=null;for(const f of d){const g=f.angleTo(o)*s*1.5;for(const y of[1,1.3,1.7,2.2,2.8,3.5]){const v=Math.max(10,s)*y;let p=v+g;if(u&&p>=u.cost)break;if(this.normal.copy(f),this.candidate.copy(e.rest).addScaledVector(this.normal,v),this.candidate.length()>c)continue;Number.isFinite(c)&&(p+=Math.max(0,this.candidate.length()/c-.7)*s*10),this.ahead.copy(this.candidate).addScaledVector(this.normal,n*2+s*2),Number.isFinite(c)&&(p+=Math.max(0,this.ahead.length()-(c-n*.3))*2);for(const T of t){if(Math.abs(e.travel-T.travel)<(n+T.radius)*1.4)continue;const _=(n+T.radius)/Ws+s;p+=Math.max(0,_-this.ahead.distanceTo(T.rest))*.35}const M=this.candidate.distanceTo(e.rest);if(M<s*.7)continue;const m=e.travel+a*M;if(!this.safe(this.candidate,this.normal,n,m,t))continue;const x=new je().setFromUnitVectors(e.direction,this.normal).multiply(e.orientation).normalize();u={rest:this.candidate.clone(),direction:this.normal.clone(),orientation:x,travel:m,cost:p};break}}return u}}const Rr=1024,Ys=(r,t,e)=>Math.max(t,Math.min(e,r));function Tl(r){const t=r&&typeof r=="object"?r:{},e=(i,n,s,a)=>typeof t[i]=="number"&&Number.isFinite(t[i])?Ys(t[i],s,a):n;return{segmentBaseLayers:Math.round(e("segmentBaseLayers",64,32,128)/2)*2,segmentGap:e("segmentGap",12,6,24),segmentReveal:e("segmentReveal",.6,.15,1.5),segmentStretch:e("segmentStretch",1.2,0,2.5),segmentRebound:e("segmentRebound",2.2,.4,5),segmentPath:["meander","loop","winding"].includes(t.segmentPath)?t.segmentPath:"winding",segmentAction:["both","grow","spring"].includes(t.segmentAction)?t.segmentAction:"both"}}class kf{nodes=[];segments=new Float32Array(Rr*4*6);scales=new Float32Array(Rr*4);centers=new Float32Array(Rr*3);reveals=new Float32Array(Rr);headId=0;tailId=0;spacing=1;extent=225;spaceFull=!1;config=Tl();origin=new V;xAxis=new V;yAxis=new V;up=new V(0,1,0);springAt=0;springX=0;springV=0;springOmega=12/2.2;packing=new XM;requestedRadius=1/0;profileScale=1;constructor(){this.reset()}get layerCount(){return this.nodes.length}get branchCount(){return 0}get boundaryRadius(){return this.packing.radius}setBoundaryRadius(t){const e=typeof t=="number"&&Number.isFinite(t)?Math.max(8,t):1/0;if(!(e===this.requestedRadius||Math.abs(e-this.requestedRadius)<1e-5)){if(this.requestedRadius=e,!Number.isFinite(e)){this.packing.radius=1/0,this.spaceFull=!1;return}this.rebuild(e,this.config.segmentGap,!Number.isFinite(this.packing.radius))||(this.spaceFull=!0)}}reset(t=this.config){const e=this.packing.radius,i=Number.isFinite(e)&&this.nodes.length?{nodes:this.nodes.slice(),origin:this.origin.clone(),head:this.headId,tail:this.tailId,scale:this.profileScale}:null;this.config=Tl(t),this.nodes.length=0,this.segments.fill(0),this.scales.fill(0),this.centers.fill(0),this.reveals.fill(0),this.spaceFull=!1,this.profileScale=1,this.springAt=this.springX=this.springV=0,this.springOmega=12/this.config.segmentRebound,this.spacing=1,this.origin.set(0,0,0),this.packing.radius=1/0,this.nodes.push({id:0,parent:null,rest:new V,direction:new V(0,0,1),orientation:new je,parameter:0,born:-1/0,radius:44,travel:0}),this.headId=this.tailId=0;for(let n=1;n<this.config.segmentBaseLayers;n++){const s=n%2?"head":"tail",a=s==="head"?this.headId:this.tailId,o=this.createLayer(this.nodes,a,s,-1/0);if(!o){this.spaceFull=!0;break}this.nodes.push(o),s==="head"?this.headId=o.id:this.tailId=o.id}for(const n of this.nodes)this.origin.add(n.rest);this.origin.multiplyScalar(1/this.layerCount),Number.isFinite(e)&&!this.rebuild(e,this.config.segmentGap,!0)&&(i&&(this.nodes.splice(0,this.nodes.length,...i.nodes),this.origin.copy(i.origin),this.headId=i.head,this.tailId=i.tail,this.profileScale=i.scale),this.packing.radius=e,this.requestedRadius=NaN,this.spaceFull=!0),this.sample(0,0)}ensure(t){const e=Tl(t);return e.segmentBaseLayers!==this.config.segmentBaseLayers||e.segmentPath!==this.config.segmentPath?this.reset(e):e.segmentGap!==this.config.segmentGap&&(this.rebuild(this.packing.radius,e.segmentGap,!0),this.spaceFull=!1),this.config=e,e}targetRadius(t,e,i){const n=(24+16*Math.cos(t*.085)+4*Math.cos(t*.02))*this.profileScale/Math.sqrt(1+e/500);return Ys(n,Math.max(10*this.profileScale,i-1.25),Math.min(44*this.profileScale,i+1.25))}desired(t,e,i,n){const s=t.direction.clone();i==="tail"&&t.id===0&&n.length>1&&s.copy(n[1].direction).negate();const a=this.config.segmentPath==="loop"?.105:this.config.segmentPath==="winding"?.055+.065*Math.sin(e*.21):.085*Math.sin(e*.19)+.025*Math.cos(e*.11);s.applyAxisAngle(this.up,a);const o=new V().crossVectors(s,this.up);return o.lengthSq()<1e-8?o.set(1,0,0):o.normalize(),s.applyAxisAngle(o,.055*Math.sin(e*.17)).normalize()}createLayer(t,e,i,n,s,a=this.config.segmentGap){const o=t[e],l=s?.parameter??o.parameter+(i==="head"?1:-1),c=t.length,h=s?.radius??this.targetRadius(l,c,o.radius),d=this.packing.place(t,o,this.desired(o,l,i,t),h,a,i==="head"?1:-1);return d?{id:c,parent:e,parameter:l,born:n,radius:h,rest:d.rest,direction:d.direction,orientation:d.orientation,travel:d.travel}:null}rebuild(t,e,i=!1){const n=this.packing.radius;this.packing.radius=t;const s=this.nodes[0],a=Number.isFinite(t)?t/lc*.6:0,o=[new V,s.rest.clone().sub(this.origin).clampLength(0,a),new V(0,0,-a),new V(-a,0,0),new V(0,-a,0)];for(const l of i?[1,.88,.76,.64,.52,.4]:[1])for(const c of o){const h=c.lengthSq()>1e-8?c.clone().negate().normalize():new V(0,0,1),d=[{...s,radius:s.radius*l,rest:c.clone(),direction:h,orientation:new je().setFromUnitVectors(new V(0,0,1),h),travel:0}];for(let u=1;u<this.layerCount;u++){const f=this.nodes[u],g=f.parameter>this.nodes[f.parent].parameter?"head":"tail",y=this.createLayer(d,f.parent,g,f.born,{...f,radius:f.radius*l},e);if(!y)break;d.push(y)}if(d.length===this.layerCount)return this.nodes.splice(0,this.layerCount,...d),this.origin.set(0,0,0),this.profileScale*=l,this.spaceFull=!1,!0}return this.packing.radius=n,!1}spring(t){const e=Math.max(0,(t-this.springAt)/1e3),i=this.springOmega,n=i*.5,s=i*Math.sqrt(.75),a=Math.exp(-n*e),o=Math.cos(s*e),l=Math.sin(s*e),c=(this.springV+n*this.springX)/s;return{x:a*(this.springX*o+c*l),v:a*((-n*this.springX+s*c)*o+(-n*c-s*this.springX)*l)}}trigger(t,e,i=this.config){if(!t||!Number.isFinite(e))return null;const n=this.ensure(i);let s=0;if(n.segmentAction!=="spring"&&!this.spaceFull&&this.layerCount+2<=Rr){const a=this.createLayer(this.nodes,this.headId,"head",e);if(a){this.nodes.push(a);const o=this.createLayer(this.nodes,this.tailId,"tail",e);o?(this.nodes.push(o),this.headId=a.id,this.tailId=o.id,s=2):this.nodes.pop()}s||(this.spaceFull=!0)}if(n.segmentAction!=="grow"){const a=this.spring(e);this.springX=Ys(a.x,-.65,3),this.springOmega=12/n.segmentRebound,this.springV=Ys(a.v+n.segmentStretch*this.springOmega*1.4,-this.springOmega*4,this.springOmega*4),this.springAt=e}return{headId:this.headId,tailId:this.tailId,added:s}}sample(t,e,i=this.config){Number.isFinite(t)||(t=0),Number.isFinite(e)||(e=0);const n=this.ensure(i);this.spacing=Ys(1+this.spring(t).x,Ws,lc);let s=225*225;const a=4*Math.sin(e*.23),o=4*Math.sin(-e*.19),l=3*Math.cos(e*.21),c=.96+.04*Math.sin(e*.32);for(const h of this.nodes){const d=Ys((t-h.born)/1e3/n.segmentReveal,0,1),u=d*d*(3-2*d);this.reveals[h.id]=u;const f=(h.rest.x-this.origin.x)*this.spacing+a,g=(h.rest.y-this.origin.y)*this.spacing+o,y=(h.rest.z-this.origin.z)*this.spacing+l,v=h.id*3;this.centers[v]=f,this.centers[v+1]=g,this.centers[v+2]=y,this.xAxis.set(1,0,0).applyQuaternion(h.orientation),this.yAxis.set(0,1,0).applyQuaternion(h.orientation);const p=h.radius*c*u,M=h.parameter*.085+.18*Math.sin(e*.32+h.parameter*.11),m=Math.min(1.5,Math.max(.65,h.radius*.035),h.radius*.08),x=Math.max(.035,(Math.SQRT2*m+.12)/(2*h.radius*.92));for(let T=0;T<4;T++){const _=M+T*Math.PI/2+Math.PI/4,S=_+Math.PI/2,A=Math.cos(_)*p,w=Math.sin(_)*p,b=Math.cos(S)*p,E=Math.sin(S)*p,I=h.id*4+T,D=I*6;this.scales[I]=m*u;for(let F=0;F<2;F++){const U=F?A*x+b*(1-x):A*(1-x)+b*x,L=F?w*x+E*(1-x):w*(1-x)+E*x,k=f+this.xAxis.x*U+this.yAxis.x*L,z=g+this.xAxis.y*U+this.yAxis.y*L,R=y+this.xAxis.z*U+this.yAxis.z*L,H=D+F*3;this.segments[H]=k,this.segments[H+1]=z,this.segments[H+2]=R,u>.001&&(s=Math.max(s,k*k+z*z+R*R))}}}this.extent=Math.sqrt(s)+3}}const WM=76;function hr(r){const t=r&&typeof r=="object"?r:{},e=(s,a,o,l)=>typeof t[s]=="number"&&Number.isFinite(t[s])?Math.max(o,Math.min(l,t[s])):a,i=e("ribbonMin",1,1,10),n=e("ribbonMax",10,1,10);return{ribbonMin:Math.min(i,n),ribbonMax:Math.max(i,n),ribbonResponse:e("ribbonResponse",2.4,.4,8),ribbonColor:typeof t.ribbonColor=="string"&&/^#[0-9a-f]{6}$/i.test(t.ribbonColor)?t.ribbonColor.toLowerCase():"#ff6b35"}}class YM{constructor(t=Math.random){this.random=t}pulses=new Map;lastRows=new Map;scales=new Float32Array(48).fill(1);strengths=new Float32Array(48);unit(){const t=this.random();return Number.isFinite(t)?Math.max(0,Math.min(1,t)):.5}trigger(t,e,i){if(!t||!Number.isFinite(e))return null;const n=t.track.address,s=hr(i);!this.lastRows.has(n)&&this.lastRows.size>=32&&this.lastRows.delete(this.lastRows.keys().next().value);const a=new Set(this.lastRows.values()),o=Array.from({length:48},(u,f)=>f).filter(u=>!a.has(u)),l=o.filter(u=>!this.pulses.has(u)),c=l.length?l:o,h=c[Math.min(c.length-1,Math.floor(this.unit()*c.length))];if(h===void 0)return null;const d=s.ribbonMin+this.unit()*(s.ribbonMax-s.ribbonMin);return this.pulses.set(h,{at:e,target:d,address:n}),this.lastRows.delete(n),this.lastRows.set(n,h),h}sample(t,e){this.scales.fill(1),this.strengths.fill(0);const i=hr(e).ribbonResponse,n=Math.min(.22,i*.2);for(const[s,a]of this.pulses){const o=Math.max(0,(t-a.at)/1e3);if(o>=i){this.pulses.delete(s);continue}const l=o<n?1-Math.pow(1-o/n,3):Math.pow(1-(o-n)/(i-n),2);this.scales[s]=1+(a.target-1)*l,this.strengths[s]=l}}reset(){this.pulses.clear(),this.lastRows.clear(),this.scales.fill(1),this.strengths.fill(0)}}const Gr=r=>r==="interference"||r==="segments",$M={interference:{description:"Orbit a living ribbon shell. Each note expands a random layer horizontally and lights it in the chosen glow color.",reference:"Generative Design · M_2_3_01 / M_2 oscillators",radius:190},segments:{description:"A self-avoiding silver chain. Layers gradually narrow and widen; notes grow both ends and spring the spacing within the fixed view.",reference:"Generative Design · P_2_1_3_04 / P_2_2_2_02 / P_2_2_4_01",radius:225}};class ZM{constructor(t,e){this.id=t,this.growth=t==="segments"?e??new kf:null,this.rows=t==="interference"?48:0,this.columns=t==="interference"?112:0,this.positions=new Float32Array(0),this.scales=this.growth?.scales??new Float32Array(0),this.segments=t==="interference"?new Float32Array(this.rows*this.columns*6):this.growth.segments,this.surface=new Float32Array(t==="interference"?this.rows*(this.columns+1)*2*3:0),this.indices=new Uint16Array(t==="interference"?this.rows*this.columns*6:0);let i=0;for(let n=0;n<this.rows;n++)for(let s=0;s<this.columns;s++){const a=(n*(this.columns+1)+s)*2,o=a+2;this.indices.set([a,o,a+1,o,o+1,a+1],i),i+=6}this.sample(0)}growth;positions;scales;segments;surface;indices;rows;columns;get segmentCount(){return this.growth?this.growth.layerCount*4:this.segments.length/6}sample(t,e,i){const n=Number.isFinite(t)?Math.max(0,t):0;this.id==="interference"?this.interference(n,e):this.growth.sample(n*1e3,n,i)}interference(t,e){for(let s=0;s<this.rows;s++)for(let a=0;a<=this.columns;a++)for(let o=0;o<2;o++){const l=.09+(Math.PI-.18)*(s+.5)/this.rows+(o?.018:-.018),c=a/this.columns*Math.PI*2,d=132+(11*Math.sin(5*l+2*c-t*.62)+8*Math.sin(3*c-2*l+t*.41)+5*Math.cos(7*l+t*.34)),u=Math.sin(l),f=((s*(this.columns+1)+a)*2+o)*3,g=Number.isFinite(e?.[s])?Math.max(1,Math.min(10,e[s])):1;this.surface[f]=d*u*Math.cos(c)*1.14*g,this.surface[f+1]=132*Math.cos(l)*1.02,this.surface[f+2]=(d*u*Math.sin(c)*.85+10*Math.sin(2*c+l+t*.4)*u)*g}let n=0;for(let s=0;s<this.rows;s++)for(let a=0;a<this.columns;a++){const o=(s*(this.columns+1)+a)*6,l=o+6;for(let c=0;c<3;c++)this.segments[n+c]=this.surface[o+c],this.segments[n+3+c]=this.surface[l+c];n+=6}}}const qM=(r,t)=>new ZM(r,t),jM=`attribute float aPulse;attribute float aSide;varying float vPulse;varying float vSide;
void main(){vPulse=aPulse;vSide=aSide;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,KM=`uniform vec3 uRibbonColor;varying float vPulse;varying float vSide;
void main(){if(vPulse<.001)discard;float alpha=pow(vPulse,.7)*exp(-vSide*vSide*5.0)*.36;
gl_FragColor=vec4(uRibbonColor,alpha);
#include <colorspace_fragment>
}`,Jd=()=>new Lx({color:11778480,roughness:.48,metalness:.24,side:Me});class JM{ribbons=new YM;storedGrowth=null;get growth(){return this.storedGrowth??=new kf}scene=new ls;camera=new Fe(42,1,1,1e5);orbitCamera=new Fe(42,1,1,1e5);orbit=null;segmentsOrbit=null;orbitFitDistance=0;segmentFitDistance=0;extent=190;ribbonColor=new Ct("#ff6b35");contourBase=new Ct(5594707);studies=new Map;time=0;paper=new Ct("#f3f1ea");viewport=new fe;previousClear=new Ct;object=new pe;a=new V;b=new V;yAxis=new V(0,1,0);constructor(){this.scene.fog=new Sc(this.paper,600,1200),this.scene.add(new Fx(16777215,5329993,1.6));const t=new yl(16777215,2.7);t.position.set(-220,300,400),this.scene.add(t);const e=new yl(16249576,.7);e.position.set(260,-140,160),this.scene.add(e);const i=new yl(16777215,1.6);i.position.set(100,50,-240),this.scene.add(i),this.camera.position.set(0,0,650),this.camera.lookAt(0,0,0),this.orbitCamera.position.set(0,100,620),this.orbitCamera.lookAt(0,0,0)}reset(){this.time=0,this.ribbons.reset(),this.storedGrowth?.setBoundaryRadius(null),this.storedGrowth?.reset(),this.orbitFitDistance=0,this.segmentFitDistance=0}trigger(t,e,i){return this.ribbons.trigger(t,e,i)}triggerSegments(t,e,i){return this.growth.trigger(t,this.time*1e3,i)}createOrbit(t,e){const i=new gr(t,e);return i.enableDamping=!0,i.dampingFactor=.08,i.enablePan=!1,i.rotateSpeed=.6,i.minPolarAngle=.001,i.maxPolarAngle=Math.PI-.001,i}setActive(t,e){t==="interference"&&!this.orbit&&(this.orbit=this.createOrbit(this.orbitCamera,e)),t==="segments"&&!this.segmentsOrbit&&(this.segmentsOrbit=this.createOrbit(this.camera,e)),this.orbit&&(this.orbit.enabled=t==="interference"),this.segmentsOrbit&&(this.segmentsOrbit.enabled=t==="segments")}resource(t){const e=this.studies.get(t);if(e)return e;const i=qM(t,t==="segments"?this.growth:void 0),n=new qn;n.name="spatial-study-"+t;const s={model:i,group:n};if(t==="segments"){const a=i.segments.length/6,o=Jd(),l=new yo(new pr(1,1,1),o,a);l.name="segments-square-frames",l.instanceMatrix.setUsage($t),l.frustumCulled=!1,n.add(l),s.instances=l}else{const a=new ie().setAttribute("position",new xt(i.surface,3).setUsage($t)).setIndex(new xt(i.indices,1)),o=new xt(new Float32Array(i.surface.length/3),1).setUsage($t);a.setAttribute("aPulse",o),s.strength=o;const l=Jd();l.polygonOffset=!0,l.polygonOffsetFactor=1,l.polygonOffsetUnits=1,l.onBeforeCompile=v=>{v.uniforms.uRibbonColor={value:this.ribbonColor},v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
attribute float aPulse;varying float vPulse;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vPulse=aPulse;`),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uRibbonColor;varying float vPulse;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb=mix(diffuseColor.rgb,uRibbonColor,vPulse);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance+=uRibbonColor*vPulse*2.4;`)},l.customProgramCacheKey=()=>"interference-ribbon-notes-v1";const c=new _e(a,l);c.name="interference-wave-ribbons",c.frustumCulled=!1,n.add(c),s.surface=a;const h=new ie().setAttribute("position",new xt(i.segments,3).setUsage($t)),d=new xt(new Float32Array(i.segments.length),3).setUsage($t);h.setAttribute("color",d),s.contourColors=d;const u=new bo(h,new xo({vertexColors:!0}));u.name="interference-contours",u.frustumCulled=!1,n.add(u),s.contours=h;const f=new ie().setAttribute("position",new xt(new Float32Array(i.surface.length),3).setUsage($t)).setAttribute("aPulse",o).setIndex(new xt(i.indices,1)),g=new Float32Array(i.surface.length/3);for(let v=0;v<g.length;v++)g[v]=v%2?1:-1;f.setAttribute("aSide",new xt(g,1)),s.halo=f;const y=new _e(f,new se({vertexShader:jM,fragmentShader:KM,uniforms:{uRibbonColor:{value:this.ribbonColor}},transparent:!0,depthWrite:!1,depthTest:!0,side:Me}));y.name="interference-ribbon-glow",y.frustumCulled=!1,n.add(y)}return this.scene.add(n),this.studies.set(t,s),s}updateFrame(t,e,i,n=hr()){const s=Number.isFinite(t)?Math.max(0,Math.min(.1,t)):0;this.time+=s;const a=this.resource(e),{model:o,group:l}=a;e==="interference"&&this.ribbons.sample(i??this.time*1e3,n),o.sample(this.time,e==="interference"?this.ribbons.scales:void 0,n);for(const[c,h]of this.studies)h.group.visible=c===e;if(e==="segments"){let c=0;for(let h=0;h<o.segmentCount;h++){if(o.scales[h]<=.001)continue;this.a.fromArray(o.segments,h*6),this.b.fromArray(o.segments,h*6+3);const d=this.a.distanceTo(this.b);this.object.position.copy(this.a).add(this.b).multiplyScalar(.5),this.b.sub(this.a).normalize(),this.object.quaternion.setFromUnitVectors(this.yAxis,this.b),this.object.scale.set(o.scales[h],d,o.scales[h]),this.object.updateMatrix(),a.instances.setMatrixAt(c++,this.object.matrix)}a.instances.count=c,a.instances.instanceMatrix.clearUpdateRanges(),a.instances.instanceMatrix.addUpdateRange(0,c*16),l.rotation.set(-.18+.08*Math.sin(this.time*.15),.5+.17*Math.sin(this.time*.19),.09*Math.sin(this.time*.13))}else{this.ribbonColor.set(hr(n).ribbonColor);const c=(o.columns+1)*2,h=a.halo.getAttribute("position");let d=190*190;for(let u=0;u<o.rows;u++){const f=this.ribbons.strengths[u];for(let g=0;g<=o.columns;g++){const y=(u*(o.columns+1)+g)*6;for(let v=0;v<2;v++){const p=u*c+g*2+v;a.strength.setX(p,f);let M=0;for(let m=0;m<3;m++){const x=o.surface[y+m],T=o.surface[y+3+m];h.array[p*3+m]=(x+T)*.5+(v?1:-1)*(T-x)*3,M+=o.surface[p*3+m]**2}d=Math.max(d,M)}}for(let g=0;g<o.columns*2;g++){const y=u*o.columns*2+g;a.contourColors.setXYZ(y,this.contourBase.r*(1-f)+this.ribbonColor.r*f,this.contourBase.g*(1-f)+this.ribbonColor.g*f,this.contourBase.b*(1-f)+this.ribbonColor.b*f)}}this.extent=Math.sqrt(d),a.strength.needsUpdate=!0,a.contourColors.needsUpdate=!0,h.needsUpdate=!0,a.surface.getAttribute("position").needsUpdate=!0,a.surface.computeVertexNormals(),a.contours.getAttribute("position").needsUpdate=!0,l.rotation.set(0,0,0)}a.instances&&(a.instances.instanceMatrix.needsUpdate=!0),l.updateMatrixWorld(!0)}prepareView(t,e){const i=t==="interference"?this.orbitCamera:this.camera;i.aspect=Math.max(.01,this.viewport.z/Math.max(1,this.viewport.w));const n=t==="interference"?this.extent:this.growth.extent,s=n/Math.sin(wi.degToRad(i.fov*.5))/Math.min(1,i.aspect);t==="interference"?(i.position.multiplyScalar(this.orbitFitDistance?s/this.orbitFitDistance:s/i.position.length()),this.orbitFitDistance=s):this.segmentFitDistance||(i.position.multiplyScalar(s/i.position.length()),this.segmentFitDistance=s);const a=t==="interference"?this.orbit:this.segmentsOrbit;if(a&&(a.minDistance=t==="segments"?60:s*.2,a.maxDistance=(t==="segments"?this.segmentFitDistance:s)*6,a.update(e)),i.far=Math.max(1e5,s*8+n*2),i.updateProjectionMatrix(),t==="segments"){const o=Math.atan(Math.tan(wi.degToRad(i.fov*.5))*Math.min(1,i.aspect));this.growth.setBoundaryRadius(i.position.length()*Math.sin(o)-WM)}}draw(t,e,i,n,s){if(!Gr(n))return;this.layout(),n==="segments"?(this.segmentFitDistance||this.updateFrame(0,n,e,s),this.prepareView(n,i),this.updateFrame(i,n,e,s)):(this.updateFrame(i,n,e,s),this.prepareView(n,i));const a=n==="interference"?this.orbitCamera:this.camera,o=n==="interference"?this.extent:this.growth.extent,l=a.position.length(),c=this.scene.fog;c.near=l-o*.4,c.far=l+o*4;const h=window.innerWidth,d=window.innerHeight;t.getClearColor(this.previousClear);const u=t.getClearAlpha();t.setViewport(0,0,h,d),t.setScissorTest(!1),t.setClearColor(this.paper,1),t.clear(),t.setViewport(this.viewport.x,this.viewport.y,this.viewport.z,this.viewport.w),t.setScissor(this.viewport.x,this.viewport.y,this.viewport.z,this.viewport.w),t.setScissorTest(!0),t.render(this.scene,a),t.setScissorTest(!1),t.setViewport(0,0,h,d),t.setClearColor(this.previousClear,u)}layout(){const t=window.innerWidth,e=window.innerHeight,i=document.querySelector(".slewn-panel")?.getBoundingClientRect(),n=document.body.classList.contains("stage-clean"),s=!!document.querySelector(".slewn.collapsed");if(!n&&!s&&i&&t>760)this.viewport.set(0,0,Math.max(200,i.left-12),e);else if(!n&&!s&&i&&t<=760){const a=Math.max(1,Math.min(e,i.top));this.viewport.set(0,e-a,t,a)}else this.viewport.set(0,0,t,e)}}const Te=35,Qd=Te**3,Ds=2,pi=4,QM=.1;let t_=class{offsets=new Float64Array(0);velocities=new Float64Array(0);positions=new Float64Array(0);forces=new Float64Array(0);attractions=new Float64Array(0);cycles=new Uint32Array(0);wasAlive=new Uint8Array(0);cellIds=new Int32Array(0);cellCounts=new Uint32Array(Qd);samples=new Int32Array(Qd*Ds);neighbors=new Int32Array(0);degrees=new Uint32Array(0);pairForces=new Float64Array(0);pairAttractive=new Uint8Array(0);neighborCycles=new Uint32Array(0);age=1/0;radius=0;strength=1;strengthInitialized=!1;update(t,e,i,n,s=1){const a=t.posX.length;this.cycles.length!==a&&(this.offsets=new Float64Array(a*3),this.velocities=new Float64Array(a*3),this.positions=new Float64Array(a*3),this.forces=new Float64Array(a*3),this.attractions=new Float64Array(a*3),this.cycles=new Uint32Array(a),this.wasAlive=new Uint8Array(a),this.cellIds=new Int32Array(a),this.neighbors=new Int32Array(a*pi),this.neighbors.fill(-1),this.degrees=new Uint32Array(a),this.pairForces=new Float64Array(a*pi*3),this.pairAttractive=new Uint8Array(a*pi),this.neighborCycles=new Uint32Array(a),this.age=1/0,this.strengthInitialized=!1);const o=Number.isFinite(i)?Math.max(0,Math.min(.1,i)):0,l=Number.isFinite(s)?Math.max(0,Math.min(5,s)):1;this.strengthInitialized?this.strength+=(l-this.strength)*(1-Math.exp(-o/.15)):(this.strength=l,this.strengthInitialized=!0),this.radius!==e&&(this.radius=e,this.age=1/0);let c=!1;for(let h=0;h<a;h++)if(this.cycles[h]!==n[h]||this.wasAlive[h]!==+!!t.alive[h]){const d=h*3;this.offsets.fill(0,d,d+3),this.velocities.fill(0,d,d+3),this.cycles[h]=n[h],this.wasAlive[h]=+!!t.alive[h],c=!0}if(c)for(let h=0;h<a;h++)for(let d=0;d<pi;d++){const u=h*pi+d,f=this.neighbors[u];if(!(f<0)&&(!t.alive[h]||!t.alive[f]||this.neighborCycles[h]!==n[h]||this.neighborCycles[f]!==n[f])){const g=u*3,y=h*3,v=f*3;for(let p=0;p<3;p++){const M=this.pairForces[g+p];this.forces[y+p]-=M,this.forces[v+p]+=M,this.pairAttractive[u]&&(this.attractions[y+p]-=M,this.attractions[v+p]+=M)}this.neighbors[u]=-1}}if(o>0){this.age+=o,this.age+1e-9>=QM&&(this.gather(t,e),this.neighborCycles.set(this.cycles),this.age=0);const h=this.strength,d=.12+(1-Math.min(1,h))*2.4,u=Math.ceil(o*120),f=o/u,g=Math.exp(-f*(2.4+Math.max(0,h-1)*1.8)),y=e*.16;for(let v=0;v<a;v++){if(!t.alive[v])continue;const p=v*3;for(let M=0;M<u;M++){for(let x=0;x<3;x++){const T=this.forces[p+x]+this.attractions[p+x]*(h-1);this.velocities[p+x]=(this.velocities[p+x]+(T-this.offsets[p+x]*d)*f)*g,this.offsets[p+x]+=this.velocities[p+x]*f}const m=Math.hypot(this.offsets[p],this.offsets[p+1],this.offsets[p+2]);if(m>y)for(let x=0;x<3;x++)this.offsets[p+x]*=y/m,this.velocities[p+x]*=.8}}}for(let h=0;h<a;h++)t.alive[h]&&(t.posX[h]+=this.offsets[h*3],t.posY[h]+=this.offsets[h*3+1],t.posZ[h]+=this.offsets[h*3+2])}gather(t,e){const i=t.posX.length,n=e*.115,s=n*n,a=n*Te*.5,o=c=>Math.max(0,Math.min(Te-1,Math.floor((c+a)/n)));this.cellCounts.fill(0),this.samples.fill(-1),this.neighbors.fill(-1),this.degrees.fill(0),this.forces.fill(0),this.attractions.fill(0);for(let c=0;c<i;c++){if(!t.alive[c]){this.cellIds[c]=-1;continue}const h=c*3,d=t.posX[c]+this.offsets[h],u=t.posY[c]+this.offsets[h+1],f=t.posZ[c]+this.offsets[h+2];this.positions[h]=d,this.positions[h+1]=u,this.positions[h+2]=f;const g=o(d)+o(u)*Te+o(f)*Te*Te,y=this.cellCounts[g]++;this.cellIds[c]=g;const v=y<Ds?y:(Math.imul(c+1,2654435761)>>>0)%(y+1);v<Ds&&(this.samples[g*Ds+v]=c)}for(let c=0;c<i;c++){const h=this.cellIds[c];if(h<0)continue;const d=Math.floor(h/(Te*Te)),u=Math.floor(h/Te)%Te,f=h%Te,g=c*3;let y=1/0,v=1/0,p=1/0,M=1/0;const m=c*pi;for(let x=Math.max(0,d-1);x<=Math.min(Te-1,d+1);x++)for(let T=Math.max(0,u-1);T<=Math.min(Te-1,u+1);T++)for(let _=Math.max(0,f-1);_<=Math.min(Te-1,f+1);_++){const S=_+T*Te+x*Te*Te;if(!this.cellCounts[S])continue;const A=S*Ds;for(let w=0;w<Ds;w++){const b=this.samples[A+w];if(b<0||b===c)continue;const E=b*3,I=this.positions[E]-this.positions[g],D=this.positions[E+1]-this.positions[g+1],F=this.positions[E+2]-this.positions[g+2],U=I*I+D*D+F*F;U>s||U>=M||(U<y?(M=p,p=v,v=y,y=U,this.neighbors[m+3]=this.neighbors[m+2],this.neighbors[m+2]=this.neighbors[m+1],this.neighbors[m+1]=this.neighbors[m],this.neighbors[m]=b):U<v?(M=p,p=v,v=U,this.neighbors[m+3]=this.neighbors[m+2],this.neighbors[m+2]=this.neighbors[m+1],this.neighbors[m+1]=b):U<p?(M=p,p=U,this.neighbors[m+3]=this.neighbors[m+2],this.neighbors[m+2]=b):(M=U,this.neighbors[m+3]=b))}}for(let x=0;x<pi;x++){const T=this.neighbors[m+x];T>=0&&(this.degrees[c]++,this.degrees[T]++)}}const l=e*.025;for(let c=0;c<i;c++)for(let h=0;h<pi;h++){const d=this.neighbors[c*pi+h];if(d<0)continue;const u=c*3,f=d*3;let g=this.positions[f]-this.positions[u],y=this.positions[f+1]-this.positions[u+1],v=this.positions[f+2]-this.positions[u+2],p=Math.hypot(g,y,v);if(p<1e-8){const x=Math.min(c,d),T=Math.max(c,d),_=(Math.imul(x+1,73856093)^Math.imul(T+1,19349663))>>>0,S=c<d?1:-1;g=((_&1023)/511.5-1)*S,y=((_>>>10&1023)/511.5-1)*S,v=((_>>>20&1023)/511.5-1)*S;const A=Math.hypot(g,y,v)||1;g/=A,y/=A,v/=A}else g/=p,y/=p,v/=p;const M=(p-l)*(p<l?8:3.5)/Math.max(1,Math.sqrt(this.degrees[c]*this.degrees[d])),m=(c*pi+h)*3;this.pairAttractive[c*pi+h]=M>0?1:0,this.pairForces[m]=g*M,this.pairForces[m+1]=y*M,this.pairForces[m+2]=v*M,this.forces[u]+=g*M,this.forces[u+1]+=y*M,this.forces[u+2]+=v*M,this.forces[f]-=g*M,this.forces[f+1]-=y*M,this.forces[f+2]-=v*M,M>0&&(this.attractions[u]+=g*M,this.attractions[u+1]+=y*M,this.attractions[u+2]+=v*M,this.attractions[f]-=g*M,this.attractions[f+1]-=y*M,this.attractions[f+2]-=v*M)}}clear(){this.offsets.fill(0),this.velocities.fill(0),this.forces.fill(0),this.attractions.fill(0),this.cycles.fill(0),this.wasAlive.fill(0),this.neighbors.fill(-1),this.age=1/0,this.strengthInitialized=!1}};const Pr=(r,t)=>Number.isFinite(r)?Math.max(0,Math.min(1,r)):t,e_=34028234663852886e22,Is=(r,t,e)=>{const i=r+(t-e);return Number.isFinite(t)&&Math.abs(i)<=e_?i:r};let Of=class{flock;liveX;liveY;liveZ;restX=new Float32Array(0);restY=new Float32Array(0);restZ=new Float32Array(0);halfWidths=new Float64Array(0);cohesion=new t_;localCohesionActive=!1;opacityValues=new Float32Array(0);cycleValues=new Uint32Array(0);entryHeights=new Float64Array(0);entryDepths=new Float64Array(0);trajectoryRadius=NaN;get opacity(){return this.opacityValues}get cycles(){return this.cycleValues}phase=0;distance=0;generation=-1;energy=.5;speed=.5;fadeFrames=0;update(t,e,i,n,s,a=1){t.resizeIfNeeded();const o=t.pool,l=Number.isFinite(t.p.worldRadius)?Math.max(1,t.p.worldRadius):250;if(this.flock!==t||this.generation!==t.generation||this.liveX!==o.posX||this.liveY!==o.posY||this.liveZ!==o.posZ){this.release(),this.flock=t,this.generation=t.generation,this.liveX=o.posX,this.liveY=o.posY,this.liveZ=o.posZ,this.restX=o.posX.slice(),this.restY=o.posY.slice(),this.restZ=o.posZ.slice(),this.halfWidths=new Float64Array(o.N),this.opacityValues=new Float32Array(o.N),this.cycleValues=new Uint32Array(o.N),this.entryHeights=new Float64Array(o.N),this.entryDepths=new Float64Array(o.N);for(let m=0;m<o.N;m++)this.halfWidths[m]=Math.max(l*.08,Math.sqrt(Math.max(0,l*l-this.restY[m]**2-this.restZ[m]**2)),Math.abs(this.restX[m])+1e-4);this.energy=Pr(i,.5),this.speed=Pr(n,.5)}if(this.trajectoryRadius!==l){for(let m=0;m<o.N;m++){const x=this.restX[m]/l*13.5,T=this.restZ[m]/l*9.5;this.entryHeights[m]=this.height(x,T,0),this.entryDepths[m]=Math.sin(x*.19+T*.26)}this.trajectoryRadius=l}const c=Number.isFinite(e)?Math.max(0,Math.min(.1,e)):0,h=1-Math.exp(-c/.18);this.energy+=(Pr(i,this.energy)-this.energy)*h;const d=Pr(n,this.speed),u=c*d+(this.speed-d)*.18*h;this.phase+=c*.32+u*1.25,this.distance+=l*(c*.16+u*.18),this.speed+=(d-this.speed)*h,this.fadeFrames+=c*60;const f=Math.floor(this.fadeFrames+1e-8);this.fadeFrames-=f;const g=l*(.055+this.energy*.065),y=this.phase,v=s&&s.x&&s.y&&s.z&&Number.isInteger(s.x.length)&&s.x.length>=o.N&&Number.isInteger(s.y.length)&&s.y.length>=o.N&&Number.isInteger(s.z.length)&&s.z.length>=o.N?s:void 0,p=v,M=p?.advected===!0&&p.cycles&&p.opacity&&p.cycles.length>=o.N&&p.opacity.length>=o.N?p:void 0;for(let m=0;m<o.N;m++){if(!o.alive[m]){this.opacityValues[m]=0;continue}if(o.fadeOutT[m]>0&&(o.fadeOutT[m]=Math.max(0,o.fadeOutT[m]-f),!o.fadeOutT[m])){o.alive[m]=0,this.opacityValues[m]=0;continue}const x=this.restX[m]/l*13.5,T=this.restZ[m]/l*9.5;if(M){const I=M.cycles[m]>>>0;I!==this.cycleValues[m]&&(o.trailCount[m]=0,o.trailWriteIdx[m]=0,this.cycleValues[m]=I);const D=Is(this.restX[m],M.x[m],this.restX[m]),F=Is(this.restY[m],M.y[m],this.restY[m]),U=Is(this.restZ[m],M.z[m],this.restZ[m]),L=D/l*13.5,k=U/l*9.5;o.posX[m]=D,o.posY[m]=F+(this.height(L,k,y)-this.height(L,k,0))*g,o.posZ[m]=U+(Math.sin(L*.19+k*.26-y*.6)-Math.sin(L*.19+k*.26))*g*.22,this.opacityValues[m]=Pr(M.opacity[m],1);continue}const _=this.halfWidths[m],S=_*2,A=this.restX[m]+_+this.distance,w=Math.floor(A/S);w!==this.cycleValues[m]&&(o.trailCount[m]=0,o.trailWriteIdx[m]=0,this.cycleValues[m]=w),o.posX[m]=this.distance===0?this.restX[m]:A-w*S-_;const b=Math.min(o.posX[m]+_,_-o.posX[m]),E=Math.max(0,Math.min(1,b/Math.max(l*.02,_*.14)));this.opacityValues[m]=E*E*(3-2*E),o.posY[m]=this.restY[m]+(this.height(x,T,y)-this.entryHeights[m])*g,o.posZ[m]=this.restZ[m]+(Math.sin(x*.19+T*.26-y*.6)-this.entryDepths[m])*g*.22,v&&(o.posX[m]=Is(o.posX[m],v.x[m],this.restX[m]),o.posY[m]=Is(o.posY[m],v.y[m],this.restY[m]),o.posZ[m]=Is(o.posZ[m],v.z[m],this.restZ[m]))}v&&!M?(this.cohesion.update(o,l,c,this.cycleValues,a),this.localCohesionActive=!0):this.localCohesionActive&&(this.cohesion.clear(),this.localCohesionActive=!1);for(let m=0;m<o.N;m++)if(o.alive[m]&&(o.fadeInT[m]=Math.max(0,o.fadeInT[m]-f),o.flashT[m]=Math.max(0,o.flashT[m]-f),f>0&&t.p.tailLength>0)){const x=o.trail.length/(o.N*3),T=(m*x+o.trailWriteIdx[m])*3;o.trail[T]=o.posX[m],o.trail[T+1]=o.posY[m],o.trail[T+2]=o.posZ[m],o.trailWriteIdx[m]=(o.trailWriteIdx[m]+1)%x,o.trailCount[m]=Math.min(x,o.trailCount[m]+1)}t.collisionsThisFrame.length=0}height(t,e,i){const n=Math.sin(t*.21+e*.17+i*.8)*.9,s=Math.sin(t*.24-e*.18+i+n)*1.45+Math.sin(t*.43+e*.27-i*.6)*.55,a=e*.24+Math.sin(t*.2+i*.4)*1.5;return s+Math.exp(-a*a)*1.8+Math.sin(t*1.4+e*.56+i*1.6+n)*.065}release(){const t=this.flock?.pool;t&&this.flock.generation===this.generation&&t.posX===this.liveX&&t.posY===this.liveY&&t.posZ===this.liveZ&&(t.posX.set(this.restX),t.posY.set(this.restY),t.posZ.set(this.restZ),t.trailCount.fill(0),t.trailWriteIdx.fill(0)),this.flock=void 0,this.liveX=this.liveY=this.liveZ=void 0,this.restX=this.restY=this.restZ=new Float32Array(0),this.halfWidths=new Float64Array(0),this.cohesion.clear(),this.localCohesionActive=!1,this.entryHeights=this.entryDepths=new Float64Array(0),this.trajectoryRadius=NaN,this.opacityValues=new Float32Array(0),this.cycleValues=new Uint32Array(0),this.phase=0,this.fadeFrames=0,this.distance=0,this.generation=-1}};const mi=1/120,tu=.1,Ti=21,i_=Ti**3,Ge=9,eu=Ge**3,Ns=8,Ga=.35,Cl=(r,t=.5)=>Number.isFinite(r)?Math.max(0,Math.min(1,r)):t,iu=r=>Number.isFinite(r)?Math.max(0,Math.min(5,r)):1,Rl=(r,t,e)=>(Math.sin(r*1.7+t*2.3+e*3.1)+Math.sin(r*2.6-t*1.9+e*1.5+13)+Math.sin(r*3.5+t*2.7-e*2.1+27))/3,Fn=r=>{let t=r|0;return t=Math.imul(t^t>>>16,2146121005),t=Math.imul(t^t>>>15,2221713035),((t^t>>>16)>>>0)/4294967296};let n_=class{flock;generation=-1;liveX;liveY;liveZ;xyz=new Float64Array(0);velocity=new Float64Array(0);ages=new Float64Array(0);lifetimes=new Float64Array(0);cycleIds=new Uint32Array(0);cohesion=new Float64Array(0);separation=new Float64Array(0);cells=new Uint16Array(0);counts=new Uint32Array(eu);samples=new Int32Array(eu*Ns);field=new Float32Array(i_*3);output={advected:!0,x:new Float32Array(0),y:new Float32Array(0),z:new Float32Array(0),cycles:new Uint32Array(0),opacity:new Float32Array(0)};elapsed=0;remainder=0;fieldAge=1/0;neighborAge=1/0;radius=250;gain=1;energy=.5;protectedParticles;update(t,e,i=.5,n=.5,s=1,a){this.protectedParticles=a,t.resizeIfNeeded();const o=t.pool;(this.flock!==t||this.generation!==t.generation||this.liveX!==o.posX||this.liveY!==o.posY||this.liveZ!==o.posZ||this.output.x.length!==o.N)&&this.capture(t,i,s);const l=Number.isFinite(t.p.worldRadius)?Math.max(1,t.p.worldRadius):250;l!==this.radius&&(this.radius=l,this.fieldAge=this.neighborAge=1/0);const c=Number.isFinite(e)?Math.max(0,Math.min(.1,e)):0;this.remainder+=c*(.45+Cl(n)*1.1);const h=Cl(i,this.energy),d=iu(s);for(;this.remainder+1e-10>=mi;)this.remainder-=mi,this.elapsed+=mi,this.energy+=(h-this.energy)*(1-Math.exp(-mi/.18)),this.gain+=(d-this.gain)*(1-Math.exp(-mi/.15)),this.fieldAge+=mi,this.neighborAge+=mi,this.fieldAge+1e-9>=tu&&(this.refreshField(),this.fieldAge=0),this.neighborAge+1e-9>=tu&&(this.refreshNeighbors(),this.neighborAge=0),this.integrate();return this.publish(),this.output}capture(t,e,i){const n=t.pool,s=n.N;this.flock=t,this.generation=t.generation,this.liveX=n.posX,this.liveY=n.posY,this.liveZ=n.posZ,this.xyz=new Float64Array(s*3),this.velocity=new Float64Array(s*3),this.cohesion=new Float64Array(s*3),this.separation=new Float64Array(s*3),this.cells=new Uint16Array(s),this.ages=new Float64Array(s),this.lifetimes=new Float64Array(s),this.cycleIds=new Uint32Array(s),this.output.x=new Float32Array(s),this.output.y=new Float32Array(s),this.output.z=new Float32Array(s),this.output.cycles=new Uint32Array(s),this.output.opacity=new Float32Array(s).fill(1),this.radius=Number.isFinite(t.p.worldRadius)?Math.max(1,t.p.worldRadius):250;for(let a=0;a<s;a++){const o=a*3;this.xyz[o]=Number.isFinite(n.posX[a])?n.posX[a]:0,this.xyz[o+1]=Number.isFinite(n.posY[a])?n.posY[a]:0,this.xyz[o+2]=Number.isFinite(n.posZ[a])?n.posZ[a]:0,this.velocity[o]=Number.isFinite(n.velX[a])?n.velX[a]*60:0,this.velocity[o+1]=Number.isFinite(n.velY[a])?n.velY[a]*60:0,this.velocity[o+2]=Number.isFinite(n.velZ[a])?n.velZ[a]*60:0,this.lifetimes[a]=8+Fn(a+1^2654435769)*8,this.ages[a]=Fn(a+1^1013904242)*this.lifetimes[a]}this.elapsed=this.remainder=0,this.fieldAge=this.neighborAge=1/0,this.gain=iu(i),this.energy=Cl(e)}refreshField(){const t=this.radius,e=t*3/(Ti-1),i=t*1.5,n=this.elapsed;for(let s=0;s<Ti;s++)for(let a=0;a<Ti;a++)for(let o=0;o<Ti;o++){const l=(o*e-i)*.0058884,c=(a*e-i)*.0058884,h=(s*e-i)*.0058884,d=(o+a*Ti+s*Ti*Ti)*3;this.field[d]=Rl(l+n*.071,c,h),this.field[d+1]=Rl(l,c+n*.053+2.1,h),this.field[d+2]=Rl(l,c,h+n*.061-1.7)}}refreshNeighbors(){const t=this.radius,e=t*.475,i=e*Ge*.5,n=this.output.x.length,s=h=>Math.max(0,Math.min(Ge-1,Math.floor((h+i)/e)));this.counts.fill(0),this.samples.fill(-1),this.cohesion.fill(0),this.separation.fill(0);for(let h=0;h<n;h++){const d=h*3,u=s(this.xyz[d])+s(this.xyz[d+1])*Ge+s(this.xyz[d+2])*Ge**2,f=this.counts[u]++;this.cells[h]=u;const g=f<Ns?f:(Math.imul(h+1,2654435761)>>>0)%(f+1);g<Ns&&(this.samples[u*Ns+g]=h)}const a=t*(.15+this.gain*.065),o=a*a,l=t*.032,c=l*l;for(let h=0;h<n;h++){const d=h*3,u=this.xyz[d],f=this.xyz[d+1],g=this.xyz[d+2],y=this.cells[h],v=y%Ge,p=Math.floor(y/Ge)%Ge,M=Math.floor(y/Ge**2);let m=0,x=0,T=0,_=0,S=0,A=0,w=0,b=0;for(let E=Math.max(0,M-1);E<=Math.min(Ge-1,M+1);E++)for(let I=Math.max(0,p-1);I<=Math.min(Ge-1,p+1);I++)for(let D=Math.max(0,v-1);D<=Math.min(Ge-1,v+1);D++){const F=D+I*Ge+E*Ge**2;if(!this.counts[F])continue;const U=Math.max(D*e-i-u,0,u-((D+1)*e-i)),L=Math.max(I*e-i-f,0,f-((I+1)*e-i)),k=Math.max(E*e-i-g,0,g-((E+1)*e-i));if(U*U+L*L+k*k>o)continue;const z=F*Ns;for(let R=0;R<Ns;R++){const H=this.samples[z+R];if(H<0||H===h)continue;const J=H*3;let et=this.xyz[J]-u,nt=this.xyz[J+1]-f,W=this.xyz[J+2]-g,G=et*et+nt*nt+W*W;if(G>o)continue;const $=(1-G/o)**2;if(m+=et*$,x+=nt*$,T+=W*$,_+=$,G<c){if(G<1e-12){const mt=Math.min(h,H),_t=Math.max(h,H),B=(Math.imul(mt+1,73856093)^Math.imul(_t+1,19349663))>>>0,Rt=h<H?1:-1;et=((B&1023)/511.5-1)*Rt,nt=((B>>>10&1023)/511.5-1)*Rt,W=((B>>>20&1023)/511.5-1)*Rt,G=et*et+nt*nt+W*W}const it=Math.sqrt(G),ft=(1-Math.min(1,it/l))/Math.max(1e-6,it);S-=et*ft,A-=nt*ft,w-=W*ft,b++}}}if(_>1e-8&&(this.cohesion[d]=m/_*6,this.cohesion[d+1]=x/_*6,this.cohesion[d+2]=T/_*6),b){const E=t*24/b;this.separation[d]=S*E,this.separation[d+1]=A*E,this.separation[d+2]=w*E}}}integrate(){const t=this.output.x.length,e=this.radius,i=(Ti-1)/(e*3),n=e*1.5,s=26.6*.5*60*(.5+this.energy),a=Math.exp(-mi*5),o=e*.95,l=Ti,c=l*l,h=this.field,d=this.protectedParticles?.size?this.protectedParticles:void 0;for(let u=0;u<t;u++){const f=u*3,g=this.ages[u]+mi;this.ages[u]=d?.has(u)&&g>=this.lifetimes[u]-Ga?this.lifetimes[u]-Ga:g,this.ages[u]>=this.lifetimes[u]&&this.renew(u);const y=this.xyz[f],v=this.xyz[f+1],p=this.xyz[f+2],M=Math.max(0,Math.min(l-1.000001,(y+n)*i)),m=Math.max(0,Math.min(l-1.000001,(v+n)*i)),x=Math.max(0,Math.min(l-1.000001,(p+n)*i)),T=Math.floor(M),_=Math.floor(m),S=Math.floor(x),A=M-T,w=m-_,b=x-S,E=(T+_*l+S*c)*3,I=y*y+v*v+p*p,D=Math.sqrt(I),F=e*.02;let U=(307200/(I+F*F)-10.64)*60/Math.max(1,D);D>e*1.05&&(U-=(D-e*1.05)*14/Math.max(1,D));for(let R=0;R<3;R++){const H=E+R,J=H+l*3,et=H+c*3,nt=J+c*3,W=(h[H]*(1-A)+h[H+3]*A)*(1-w)+(h[J]*(1-A)+h[J+3]*A)*w,G=(h[et]*(1-A)+h[et+3]*A)*(1-w)+(h[nt]*(1-A)+h[nt+3]*A)*w,$=R===0?y:R===1?v:p,it=(W*(1-b)+G*b)*s+$*U+this.cohesion[f+R]*this.gain+this.separation[f+R];this.velocity[f+R]=(this.velocity[f+R]+Math.max(-e*20,Math.min(e*20,it))*mi)*a}const L=Math.hypot(this.velocity[f],this.velocity[f+1],this.velocity[f+2]);if(L>o)for(let R=0;R<3;R++)this.velocity[f+R]*=o/L;for(let R=0;R<3;R++)this.xyz[f+R]+=this.velocity[f+R]*mi;const k=Math.hypot(this.xyz[f],this.xyz[f+1],this.xyz[f+2]),z=e*1.35;if(k>z){const R=this.xyz[f]/k,H=this.xyz[f+1]/k,J=this.xyz[f+2]/k,et=this.velocity[f]*R+this.velocity[f+1]*H+this.velocity[f+2]*J;for(let nt=0;nt<3;nt++)this.xyz[f+nt]*=z/k,et>0&&(this.velocity[f+nt]-=(nt===0?R:nt===1?H:J)*et*1.5)}Number.isFinite(k)||this.renew(u)}}renew(t){const e=++this.cycleIds[t],i=t+1^Math.imul(e,2654435769),n=t*3,s=this.radius*Math.cbrt(.45**3+Fn(i^608135816)*(1.05**3-.45**3)),a=Fn(i^2242054355)*Math.PI*2,o=Fn(i^320440878)*2-1,l=Math.sqrt(Math.max(0,1-o*o));this.xyz[n]=s*l*Math.cos(a),this.xyz[n+1]=s*l*Math.sin(a),this.xyz[n+2]=s*o;for(let c=0;c<3;c++)this.velocity[n+c]=(Fn(i^Math.imul(c+1,57701188))-.5)*36,this.cohesion[n+c]=this.separation[n+c]=0;this.ages[t]=0,this.lifetimes[t]=8+Fn(i^2752067618)*8}publish(){for(let t=0;t<this.output.x.length;t++){const e=t*3;this.output.x[t]=this.xyz[e],this.output.y[t]=this.xyz[e+1],this.output.z[t]=this.xyz[e+2];const i=Math.hypot(this.xyz[e],this.xyz[e+1],this.xyz[e+2]),n=Math.max(0,Math.min(1,(this.radius*1.35-i)/(this.radius*.1))),s=Math.max(0,Math.min(1,this.ages[t]/Ga,(this.lifetimes[t]-this.ages[t])/Ga));this.output.cycles[t]=this.cycleIds[t],this.output.opacity[t]=n*n*(3-2*n)*s*s*(3-2*s)}}reset(){this.protectedParticles=void 0,this.flock=void 0,this.generation=-1,this.liveX=this.liveY=this.liveZ=void 0,this.xyz=this.velocity=this.cohesion=this.separation=new Float64Array(0),this.cells=new Uint16Array(0),this.ages=this.lifetimes=new Float64Array(0),this.cycleIds=new Uint32Array(0),this.output.x=this.output.y=this.output.z=new Float32Array(0),this.output.cycles=new Uint32Array(0),this.output.opacity=new Float32Array(0),this.elapsed=this.remainder=0,this.fieldAge=this.neighborAge=1/0}};const s_=new V,r_=new V(0,1,0);let zf=class{camera;random;start=new V;target=new V;rotation=new je;step=new je;radius=700;targetRadius=700;elapsed=0;duration=2;running=!1;constructor(t,e=Math.random){this.camera=t,this.random=e}trigger(t,e,i){this.duration=Number.isFinite(t)?wi.clamp(t,.1,20):2,this.elapsed=0,this.radius=this.camera.position.length(),!Number.isFinite(this.radius)||this.radius<1e-8?(this.radius=700,this.start.set(0,0,1)):this.start.copy(this.camera.position).divideScalar(this.radius);const n=this.sample()*Math.PI*2,s=(this.sample()*2-1)*.72,a=Math.sqrt(1-s*s);if(this.target.set(Math.sin(n)*a,s,Math.cos(n)*a),this.start.dot(this.target)>.995&&this.target.copy(this.start).applyAxisAngle(r_,Math.PI/3),this.rotation.setFromUnitVectors(this.start,this.target),e===void 0&&i===void 0)this.targetRadius=this.radius;else{const o=Number.isFinite(e)?wi.clamp(e,50,5e3):450,l=Number.isFinite(i)?wi.clamp(i,50,5e3):1100,c=Math.min(o,l),h=Math.max(o,l);this.targetRadius=c+(h-c)*this.sample()}this.running=!0}update(t){if(!this.running)return!1;const e=Number.isFinite(t)?Math.max(0,t):0;this.elapsed=Math.min(this.duration,this.elapsed+e);const i=this.duration-this.elapsed<=1e-10,n=i?1:this.elapsed/this.duration;if(n>0){const s=n*n*(3-2*n);this.step.identity().slerp(this.rotation,s);const a=this.radius+(this.targetRadius-this.radius)*s;this.camera.position.copy(this.start).applyQuaternion(this.step).multiplyScalar(a)}return this.camera.lookAt(s_),this.running=!i,this.running}cancel(){this.running=!1}get active(){return this.running}sample(){const t=this.random();return Number.isFinite(t)?wi.clamp(t,0,1):.5}};const Bf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class vr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const a_=new _c(-1,1,1,-1,0,1);class o_ extends ie{constructor(){super(),this.setAttribute("position",new Re([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Re([0,2,0,0,2,0],2))}}const l_=new o_;class Dc{constructor(t){this._mesh=new _e(l_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,a_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Vf extends vr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof se?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=aa.clone(t.uniforms),this.material=new se({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Dc(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class nu extends vr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class c_ extends vr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Gf{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new yt);this._width=i.width,this._height=i.height,e=new si(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vf(Bf),this.copyPass.material.blending=Ki,this.clock=new zx}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}nu!==void 0&&(a instanceof nu?i=!0:a instanceof c_&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new yt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Hf extends vr{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ct}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}}const h_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ct(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ns extends vr{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new yt(t.x,t.y):new yt(256,256),this.clearColor=new Ct(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new si(s,a,{type:Fi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new si(s,a,{type:Fi});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new si(s,a,{type:Fi});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=h_;this.highPassUniforms=aa.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new se({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new yt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Bf;this.copyUniforms=aa.clone(h.uniforms),this.blendMaterial=new se({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:qe,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ct,this.oldClearAlpha=1,this.basic=new xc,this.fsQuad=new Dc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new yt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ns.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ns.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new se({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new yt(.5,.5)},direction:{value:new yt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new se({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ns.BlurDirectionX=new yt(1,0);ns.BlurDirectionY=new yt(0,1);const d_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Xf extends vr{constructor(){super();const t=d_;this.uniforms=aa.clone(t.uniforms),this.material=new Nx({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Dc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Kt.getTransfer(this._outputColorSpace)===ne&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Xu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===$u?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===qu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const u_=`
uniform sampler2D tDiffuse;
uniform float luminosityThreshold;
uniform float smoothWidth;
uniform vec2 prefilterSourceSize;
uniform vec2 prefilterFootprint;
uniform vec2 prefilterSampleCount;
varying vec2 vUv;

vec2 pairWeights(float first, float start, float end) {
  return clamp(vec2(min(end, first + 1.) - max(start, first),
    min(end, first + 2.) - max(start, first + 1.)), 0., 1.);
}

vec2 filterAxis(float index, float start, float end, float count) {
  float extent = end - start;
  // Beyond a 6K source, retain the read budget and distribute the samples over
  // the complete footprint rather than cropping its right/bottom source area.
  if (ceil(end - .0001) - floor(start + .0001) > 16.) {
    float width = extent / count;
    return vec2(start + (index + .5) * width, width);
  }
  float first = floor(start + .0001) + index * 2.;
  vec2 weights = pairWeights(first, start, end);
  float area = weights.x + weights.y;
  return vec2(first + .5 + weights.y / max(area, .0001), area);
}

void main() {
  vec2 start = vUv * prefilterSourceSize - prefilterFootprint * .5;
  vec2 end = start + prefilterFootprint;
  vec3 color = vec3(0.);
  float weight = 0.;
  for (int y = 0; y < 8; y++) {
    if (float(y) >= prefilterSampleCount.y) break;
    vec2 row = filterAxis(float(y), start.y, end.y, prefilterSampleCount.y);
    if (row.y <= 0.) break;
    for (int x = 0; x < 8; x++) {
      if (float(x) >= prefilterSampleCount.x) break;
      vec2 column = filterAxis(float(x), start.x, end.x, prefilterSampleCount.x);
      if (column.y <= 0.) break;
      vec2 uv = vec2(column.x, row.x) / prefilterSourceSize;
      vec3 sampleColor = texture2D(tDiffuse, uv).rgb;
      float area = column.y * row.y;
      color += sampleColor * area;
      weight += area;
    }
  }
  color /= max(weight, .0001);
  float luminance = dot(color, vec3(.299, .587, .114));
  // Clamp only after integration: clamping individual bilinear reads would
  // change an outlier's energy when its footprint straddles a source texel.
  color *= min(1., 4. / max(luminance, .0001));
  luminance = min(luminance, 4.);
  float alpha = smoothstep(luminosityThreshold, luminosityThreshold + smoothWidth, luminance);
  gl_FragColor = vec4(color * alpha, 1.);
}`;let Wf=class{constructor(t,e,i,n){this.renderer=t;const s=new si(1,1,{type:Fi});this.composer=new Gf(t,s),this.composer.setPixelRatio(1),this.composer.addPass(new Hf(e,i)),this.bloom=new ns(new yt(1,1),.715,.45,.005);const a=this.bloom.materialHighPassFilter.uniforms;a.prefilterSourceSize={value:new yt(1,1)},a.prefilterFootprint={value:new yt(1,1)},a.prefilterSampleCount={value:new yt(1,1)},a.smoothWidth.value=.01,this.bloom.materialHighPassFilter.fragmentShader=u_,this.composer.addPass(this.bloom),this.composer.addPass(new Xf),this.finalPasses=n?Array.isArray(n)?n:[n]:[],this.finalPassOffset=this.composer.passes.length;for(const o of this.finalPasses)this.composer.addPass(o)}composer;bloom;size=new yt;width=0;height=0;warmed=!1;finalPasses;finalPassOffset;resize(t,e){if(t=Math.max(1,Math.round(t)),e=Math.max(1,Math.round(e)),this.width===t&&this.height===e)return;this.width=t,this.height=e,this.composer.setSize(t,e);const i=Math.min(.5,768/Math.max(t,e));this.bloom.setSize(Math.max(1,Math.round(t*i)),Math.max(1,Math.round(e*i)));const n=this.bloom.materialHighPassFilter.uniforms,s=n.prefilterFootprint.value;s.set(t/this.bloom.renderTargetBright.width,e/this.bloom.renderTargetBright.height),n.prefilterSourceSize.value.set(t,e),n.prefilterSampleCount.value.set(Math.min(8,Math.ceil((s.x+1)/2)),Math.min(8,Math.ceil((s.y+1)/2)))}draw(t){for(let e=0;e<this.finalPasses.length;e++)this.composer.passes[this.finalPassOffset+e]=this.finalPasses[e];this.renderer.getDrawingBufferSize(this.size),this.resize(this.size.x,this.size.y),this.bloom.strength=(Number.isFinite(t)?Math.max(0,Math.min(10,t)):1.1)*.1,this.bloom.enabled=this.bloom.strength>0||!this.warmed,this.composer.render(0),this.warmed=!0,this.bloom.enabled=this.bloom.strength>0}dispose(){this.bloom.materialHighPassFilter.dispose();for(const t of this.composer.passes)t.dispose();this.composer.dispose()}};const ln=384,su=4096,f_=.1,ru=2048,Hn=(r,t,e)=>Math.max(t,Math.min(e,r)),p_=r=>{const t=Hn(r,0,1);return t*t*(3-2*t)};let Yf=class{stats={nodeCount:0,searchVisits:0,gabrielChecks:0,rebuilds:0,candidateCount:0,followChecks:0,growthChecks:0};states=[];get cells(){return this.states}contacts=[];contactStorage=Array.from({length:ln*4},()=>({a:0,b:0}));degrees=new Uint8Array(ln);selected=new Set;heads=new Int32Array(ru).fill(-1);next=new Int32Array(ln);gridX=new Float64Array(ln);gridY=new Float64Array(ln);gridZ=new Float64Array(ln);edges=[];alphas=[];flock;liveX;liveY;liveZ;generation=-1;size=-1;stride=-1;distance=-1;enabled=!1;elapsed=1/0;cursor=0;maximum=30;minimum=4;update(t,e,i,n){const s=t.p,a=t.pool,o=Math.max(1,Math.floor(s.myceliumNodeStride)||1,Math.ceil(a.N/su)),l=s.myceliumEnabled&&Number.isFinite(s.myceliumLinkDist)&&s.myceliumLinkDist>.5,c=this.flock!==t||this.generation!==t.generation||this.size!==a.N||this.stride!==o||this.distance!==s.myceliumLinkDist||this.liveX!==a.posX||this.liveY!==a.posY||this.liveZ!==a.posZ||this.enabled!==l;if(c&&(this.empty(),this.elapsed=1/0,this.cursor=0,this.flock=t,this.generation=t.generation,this.size=a.N,this.stride=o,this.distance=s.myceliumLinkDist,this.liveX=a.posX,this.liveY=a.posY,this.liveZ=a.posZ,this.enabled=l),!l||!a.N)return this.empty(),t.setNetwork(this.edges,this.alphas),c;this.maximum=Hn(s.myceliumLinkDist*.42,1,60),this.minimum=Math.max(.2,this.maximum*.14);const h=Number.isFinite(e)?Hn(e,0,.1):0;this.follow(t,h,i,n),this.elapsed+=h;const d=c||this.elapsed+1e-9>=f_;return d&&(this.stats.rebuilds++,this.stats.searchVisits=0,this.stats.gabrielChecks=0,this.stats.candidateCount=0,this.populate(t,o,i,n),this.elapsed=0),this.stats.nodeCount=this.states.length,this.connect(t),d}valid(t,e,i){const n=t.pool;return e>=0&&e<n.N&&!!n.alive[e]&&n.fadeOutT[e]<=0&&(!i||Number.isFinite(i[e])&&i[e]>.08)&&Number.isFinite(n.posX[e]+n.posY[e]+n.posZ[e])}follow(t,e,i,n){const s=t.pool,a=1-Math.exp(-e/.18),o=1-Math.exp(-e/.65);let l=!1;for(const d of this.states){if(d.active=this.valid(t,d.id,i)&&(!n||d.cycle===n[d.id]>>>0),!d.active){l=!0;continue}d.x=s.posX[d.id],d.y=s.posY[d.id],d.z=s.posZ[d.id],d.opacity=i?Hn(i[d.id],0,1):1,d.age+=e,d.radius=Math.min(d.radius+(d.reserve-d.radius)*a,d.reserve*p_(d.age/.35))}this.stats.followChecks=0;const c=.02;for(let d=0;d<this.states.length;d++)for(let u=d+1;u<this.states.length;u++){const f=this.states[d],g=this.states[u];if(!f.active||!g.active)continue;this.stats.followChecks++;const y=(f.x-g.x)**2+(f.y-g.y)**2+(f.z-g.z)**2,v=f.reserve+g.reserve;if(y>=(v+c)**2)continue;const p=Math.sqrt(y)-c;if(p<this.minimum*2){const m=f.age<g.age?f:g;if(m.active=!1,l=!0,m===f)break;continue}const M=f.reserve/v;f.reserve=Hn(p*M,this.minimum,p-this.minimum),g.reserve=p-f.reserve,f.radius=Math.min(f.radius,f.reserve),g.radius=Math.min(g.radius,g.reserve)}let h=0;for(const d of this.states)d.active&&(this.states[h++]=d);if(this.states.length=h,this.stats.growthChecks=0,e>0)for(const d of this.states){let u=this.maximum;for(const f of this.states){if(f===d)continue;this.stats.growthChecks++;const g=(d.x-f.x)**2+(d.y-f.y)**2+(d.z-f.z)**2;g<(u+f.reserve+c)**2&&(u=Math.min(u,Math.sqrt(g)-f.reserve-c))}u>d.reserve&&(d.reserve+=(u-d.reserve)*o)}return l}hash(t,e,i){return(Math.imul(t,73856093)^Math.imul(e,19349663)^Math.imul(i,83492791))&ru-1}insert(t,e){const i=this.states[t],n=Math.floor(i.x/e),s=Math.floor(i.y/e),a=Math.floor(i.z/e),o=this.hash(n,s,a);this.gridX[t]=n,this.gridY[t]=s,this.gridZ[t]=a,this.next[t]=this.heads[o],this.heads[o]=t}populate(t,e,i,n){if(this.states.length>=ln)return;this.heads.fill(-1),this.selected.clear();const s=this.maximum*2,a=t.pool,o=Math.ceil(a.N/e);for(let l=0;l<this.states.length;l++)this.insert(l,s),this.selected.add(this.states[l].id);for(let l=0;l<o&&l<su&&this.states.length<ln;l++){const c=(this.cursor+l)%o*e;if(this.stats.candidateCount++,this.selected.has(c)||!this.valid(t,c,i))continue;const h=a.posX[c],d=a.posY[c],u=a.posZ[c],f=Math.floor(h/s),g=Math.floor(d/s),y=Math.floor(u/s);let v=this.maximum;t:for(let m=-1;m<=1;m++)for(let x=-1;x<=1;x++)for(let T=-1;T<=1;T++){const _=f+T,S=g+x,A=y+m;if(!(T!==0&&_===f||x!==0&&S===g||m!==0&&A===y))for(let w=this.heads[this.hash(_,S,A)];w>=0;w=this.next[w]){if(this.gridX[w]!==_||this.gridY[w]!==S||this.gridZ[w]!==A)continue;this.stats.searchVisits++;const b=this.states[w],E=(h-b.x)**2+(d-b.y)**2+(u-b.z)**2;if(!(E>=(v+b.reserve+.02)**2)&&(v=Math.min(v,Math.sqrt(E)-b.reserve-.02),v<this.minimum))break t}}if(v<this.minimum)continue;const p={id:c,x:h,y:d,z:u,radius:0,opacity:i?Hn(i[c],0,1):1,reserve:v,age:0,cycle:n?n[c]>>>0:0,active:!0},M=this.states.length;this.states.push(p),this.selected.add(c),this.insert(M,s)}this.cursor=o?(this.cursor+257)%o:0}connect(t){this.contacts.length=0,this.edges.length=0,this.alphas.length=0,this.degrees.fill(0);const e=t.p,i=Math.max(.5,this.maximum*.18),n=Hn((Math.floor(e.myceliumLinkMode===1?e.myceliumKnnK:e.myceliumMaxLinks)||1)*2,2,8);if(!Number.isFinite(e.myceliumAlpha)||e.myceliumAlpha<=0){t.setNetwork(this.edges,this.alphas);return}for(let s=0;s<this.states.length;s++)for(let a=s+1;a<this.states.length;a++){const o=this.states[s],l=this.states[a],c=Math.min(n,2+Math.round(6*(o.radius/this.maximum)**2)),h=Math.min(n,2+Math.round(6*(l.radius/this.maximum)**2));if(this.degrees[s]>=c||this.degrees[a]>=h||o.radius<this.minimum*.25||l.radius<this.minimum*.25)continue;const d=(o.x-l.x)**2+(o.y-l.y)**2+(o.z-l.z)**2,u=o.radius+l.radius;if(d<1e-8||d>(u+i)**2)continue;const f=Math.max(0,Math.sqrt(d)-u),g=this.contactStorage[this.contacts.length];g.a=s,g.b=a,this.contacts.push(g),this.degrees[s]++,this.degrees[a]++,this.edges.push(o.id,l.id),this.alphas.push(e.myceliumAlpha*(1-.6*f/i))}t.setNetwork(this.edges,this.alphas)}empty(){this.states.length=0,this.contacts.length=0,this.edges.length=0,this.alphas.length=0,this.selected.clear(),this.stats.nodeCount=0}clear(){this.empty(),this.flock?.setNetwork(this.edges,this.alphas),this.flock=void 0,this.generation=-1,this.size=-1,this.liveX=this.liveY=this.liveZ=void 0,this.elapsed=1/0,this.cursor=0}};const ze=384,Kr=24,$f=Kr,Zf=ze*4,Ls=Zf*6,Jr=Math.PI*2,au=1.75,Un=(r,t,e)=>Math.max(t,Math.min(e,r)),Ha=r=>{let t=Math.imul(r>>>0^2654435769,2246822507);return t=Math.imul(t^t>>>13,3266489909),((t^t>>>16)>>>0)/4294967296},Dr=(r,t,e)=>Number.isFinite(r+t+e)&&Math.max(Math.abs(r),Math.abs(t),Math.abs(e))<1e7;function ou(r){return new se({transparent:!0,depthWrite:!1,side:Me,blending:qe,vertexShader:`
   attribute vec3 direction;
   attribute float side;
   ${r?"attribute vec4 cellTint; attribute float cellWidth;":"attribute vec4 color; attribute float width;"}
   varying vec4 vTint;
   varying float vSide;
   void main(){
    ${r?"vec4 local=instanceMatrix*vec4(position,1.); vec3 tangentLocal=mat3(instanceMatrix)*direction;":"vec4 local=vec4(position,1.); vec3 tangentLocal=direction;"}
    vec4 point=modelViewMatrix*local;
    vec2 tangent=(modelViewMatrix*vec4(tangentLocal,0.)).xy;
    vec2 normal=vec2(-tangent.y,tangent.x)/max(length(tangent),.00001);
    point.xy+=normal*${r?"cellWidth":"width"}*side;
    gl_Position=projectionMatrix*point;
    vTint=${r?"cellTint":"color"};vSide=side;
   }`,fragmentShader:`
   varying vec4 vTint;
   varying float vSide;
   void main(){
    float core=exp(-vSide*vSide*7.);
    float halo=exp(-vSide*vSide*3.)*.1;
    gl_FragColor=vec4(vTint.rgb,vTint.a*(core+halo));
   }`})}function m_(){return new se({transparent:!0,depthWrite:!1,side:Me,blending:qe,vertexShader:`
   attribute vec4 fillTint;
   varying vec4 vTint;
   varying vec2 vLocal;
   void main(){
    vTint=fillTint;vLocal=position.xy;
    gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);
   }`,fragmentShader:`
   varying vec4 vTint;
   varying vec2 vLocal;
   void main(){
    float edge=1.-smoothstep(.84,1.,length(vLocal));
    gl_FragColor=vec4(vTint.rgb,vTint.a*edge);
   }`})}function g_(r,t){const e=$f*6,i=new Float32Array(e*3),n=new Float32Array(e*3),s=new Float32Array(e);let a=0;for(let l=0;l<Kr;l++){const c=l/Kr*Jr,h=(l+1)/Kr*Jr,d=Math.cos(c),u=Math.sin(c),f=Math.cos(h),g=Math.sin(h);for(let y=0;y<6;y++){const v=y===1||y===2||y===4,p=a*3;i[p]=v?f:d,i[p+1]=v?g:u,i[p+2]=0,n[p]=f-d,n[p+1]=g-u,n[p+2]=0,s[a++]=y===0||y===1||y===3?-1:1}}const o=new ie;return o.setAttribute("position",new xt(i,3)),o.setAttribute("direction",new xt(n,3)),o.setAttribute("side",new xt(s,1)),o.setAttribute("cellTint",r),o.setAttribute("cellWidth",t),o.setDrawRange(0,e),o}class v_{constructor(t){this.scene=t,this.group.name="tidal-packed-mycelium",this.group.visible=!1,this.cells=new yo(g_(this.tint,this.width),ou(!0),ze),this.cells.name="tidal-packed-cells",this.cells.count=0,this.cells.instanceMatrix.setUsage($t),this.cells.frustumCulled=!1;const e=new wc(1,Kr);e.setAttribute("fillTint",this.fillTint),this.fills=new yo(e,m_(),ze),this.fills.name="tidal-packed-cell-fills",this.fills.count=0,this.fills.visible=!1,this.fills.instanceMatrix.setUsage($t),this.fills.frustumCulled=!1;const i=new ie,n=new Float32Array(Ls);for(let s=0;s<Ls;s+=6)n.set([-1,-1,1,-1,1,1],s);i.setAttribute("position",this.contactPositions),i.setAttribute("direction",this.contactDirections),i.setAttribute("color",this.contactColors),i.setAttribute("width",this.contactWidths),i.setAttribute("side",new xt(n,1)),i.setDrawRange(0,0),this.contacts=new _e(i,ou(!1)),this.contacts.name="tidal-packed-contacts",this.contacts.frustumCulled=!1,this.group.add(this.fills,this.cells,this.contacts),t.add(this.group)}stats={cells:0,contacts:0,segments:0,filledCells:0};group=new qn;tint=new xn(new Float32Array(ze*4),4).setUsage($t);width=new xn(new Float32Array(ze),1).setUsage($t);cells;fills;fillTint=new xn(new Float32Array(ze*4),4).setUsage($t);contacts;contactPositions=new xt(new Float32Array(Ls*3),3).setUsage($t);contactDirections=new xt(new Float32Array(Ls*3),3).setUsage($t);contactColors=new xt(new Float32Array(Ls*4),4).setUsage($t);contactWidths=new xt(new Float32Array(Ls),1).setUsage($t);centers=new Float64Array(ze*3);colors=new Float32Array(ze*4);weights=new Float32Array(ze);opacities=new Float32Array(ze);ambientVisible=new Uint8Array(ze);visible=new Uint8Array(ze);matrix=new te;rotation=new te;angles=new hi;xAxis=new V;yAxis=new V;zAxis=new V;disposed=!1;update(t,e,i,n,s=1,a=!0,o,l){if(this.disposed)return;if(!a||!t.length){this.clear();return}const c=Number.isFinite(n)?Un(n,0,1):1,h=Number.isFinite(s)?Un(s,0,8):1,d=Ye(o);this.visible.fill(0);let u=0,f=0;for(let v=0;v<Math.min(ze,t.length);v++){const p=t[v],M=p.radius;if(!Number.isSafeInteger(p.id)||p.id<0||!Dr(p.x,p.y,p.z)||!Number.isFinite(M)||M<=0||M>1e4||!Number.isFinite(p.opacity)||p.opacity<=0)continue;const m=Un(p.opacity,0,1);let x=p.x,T=p.y,_=p.z,S=0,A=0,w=0,b=0;if(i){const H=i.sample(x,T,_);Dr(H[0],H[1],H[2])&&(x=H[0],T=H[1],_=H[2]),Number.isFinite(H[3]+H[4]+H[5]+H[6])&&(S=Un(H[3],0,4),A=Un(H[4],0,4),w=Un(H[5],0,4),b=Un(H[6],0,1))}if(l){const H=l.cell(p.id);S=H?.r??0,A=H?.g??0,w=H?.b??0,b=H?.weight??0}const E=Ha(p.id)<c;if(!E&&b<=.01&&!i?.visibleParticles?.has(p.id))continue;const I=d.tidalNoteBrightness*au,D=.8*(1-b),F=S,U=A,L=w;S=(D+S*b*I)*h,A=(D+A*b*I)*h,w=(D+w*b*I)*h;const k=Math.min(1,m*(.5+b*.45)),z=v*3,R=v*4;if(this.centers[z]=x,this.centers[z+1]=T,this.centers[z+2]=_,this.colors[R]=S,this.colors[R+1]=A,this.colors[R+2]=w,this.colors[R+3]=k,this.weights[v]=b,this.opacities[v]=m,this.ambientVisible[v]=E?1:0,this.visible[v]=1,this.xAxis.set(M,0,0),this.yAxis.set(0,M,0),this.zAxis.set(0,0,M),i){let H=i.sample(p.x+M,p.y,p.z);Dr(H[0],H[1],H[2])&&this.xAxis.set(H[0]-x,H[1]-T,H[2]-_),H=i.sample(p.x,p.y+M,p.z),Dr(H[0],H[1],H[2])&&this.yAxis.set(H[0]-x,H[1]-T,H[2]-_),H=i.sample(p.x,p.y,p.z+M),Dr(H[0],H[1],H[2])&&this.zAxis.set(H[0]-x,H[1]-T,H[2]-_)}this.angles.set(Ha(p.id+17)*Jr,Ha(p.id+91)*Jr,Ha(p.id+311)*Jr),this.rotation.makeRotationFromEuler(this.angles),this.matrix.makeBasis(this.xAxis,this.yAxis,this.zAxis).setPosition(x,T,_).multiply(this.rotation),this.cells.setMatrixAt(u,this.matrix),this.tint.setXYZW(u,S,A,w,k),this.width.setX(u,d.tidalCircleWidth*(1+b*.7)),u++,b>.01&&(this.fills.setMatrixAt(f,this.matrix),this.fillTint.setXYZW(f,F*I*h,U*I*h,L*I*h,m*b*.22),f++)}this.cells.count=u,this.cells.visible=u>0,u&&(this.cells.instanceMatrix.clearUpdateRanges(),this.cells.instanceMatrix.addUpdateRange(0,u*16),this.cells.instanceMatrix.needsUpdate=!0,this.tint.clearUpdateRanges(),this.tint.addUpdateRange(0,u*4),this.tint.needsUpdate=!0,this.width.clearUpdateRanges(),this.width.addUpdateRange(0,u),this.width.needsUpdate=!0),this.fills.count=f,this.fills.visible=f>0,f&&(this.fills.instanceMatrix.clearUpdateRanges(),this.fills.instanceMatrix.addUpdateRange(0,f*16),this.fills.instanceMatrix.needsUpdate=!0,this.fillTint.clearUpdateRanges(),this.fillTint.addUpdateRange(0,f*4),this.fillTint.needsUpdate=!0);let g=0,y=0;for(let v=0;v<e.length&&y<Zf;v++){const p=e[v],M=p.a,m=p.b;if(!Number.isInteger(M)||!Number.isInteger(m)||M<0||m<0||M>=ze||m>=ze||M===m||!this.visible[M]||!this.visible[m])continue;const x=M*3,T=m*3,_=M*4,S=m*4,A=this.centers[T]-this.centers[x],w=this.centers[T+1]-this.centers[x+1],b=this.centers[T+2]-this.centers[x+2];if(A*A+w*w+b*b<1e-8)continue;let E=Math.max(this.weights[M],this.weights[m]),I=(this.colors[_]+this.colors[S])*.65,D=(this.colors[_+1]+this.colors[S+1])*.65,F=(this.colors[_+2]+this.colors[S+2])*.65,U=Math.min(1,Math.min(this.colors[_+3],this.colors[S+3])*1.55);if(l){const L=l.contact(t[M].id,t[m].id);if(E=L?.weight??0,E<=.01&&(!this.ambientVisible[M]||!this.ambientVisible[m]))continue;const k=.8*(1-E),z=d.tidalNoteBrightness*au;I=(k+(L?.r??0)*E*z)*h*1.3,D=(k+(L?.g??0)*E*z)*h*1.3,F=(k+(L?.b??0)*E*z)*h*1.3,U=Math.min(1,Math.min(this.opacities[M],this.opacities[m])*(.5+E*.45)*1.55)}for(let L=0;L<6;L++){const k=L===1||L===2||L===4?T:x;this.contactPositions.setXYZ(g,this.centers[k],this.centers[k+1],this.centers[k+2]),this.contactDirections.setXYZ(g,A,w,b),this.contactColors.setXYZW(g,I,D,F,U),this.contactWidths.setX(g,d.tidalLinkWidth*(1+E*.375)),g++}y++}if(this.contacts.visible=g>0,this.contacts.geometry.setDrawRange(0,g),g)for(const v of[this.contactPositions,this.contactDirections,this.contactColors,this.contactWidths])v.clearUpdateRanges(),v.addUpdateRange(0,g*v.itemSize),v.needsUpdate=!0;this.group.visible=u>0,this.stats.cells=u,this.stats.contacts=y,this.stats.segments=u*$f+y,this.stats.filledCells=f}clear(){this.cells.count=0,this.cells.visible=!1,this.contacts.visible=!1,this.contacts.geometry.setDrawRange(0,0),this.group.visible=!1,this.fills.count=0,this.fills.visible=!1,this.visible.fill(0),this.stats.cells=this.stats.contacts=this.stats.segments=this.stats.filledCells=0}dispose(){this.disposed||(this.clear(),this.disposed=!0,this.scene.remove(this.group),this.cells.geometry.dispose(),this.cells.material.dispose(),this.cells.dispose(),this.fills.geometry.dispose(),this.fills.material.dispose(),this.fills.dispose(),this.contacts.geometry.dispose(),this.contacts.material.dispose())}}const Ie=384,y_=Ie*4,Xa=16,Wa=64,Pl=2200,Dl=(r,t,e)=>Math.max(t,Math.min(e,r)),lu=()=>({r:0,g:0,b:0,weight:0,total:0}),cu=(r,t)=>r<t?`${r}:${t}`:`${t}:${r}`,x_=r=>!!r&&Number.isSafeInteger(r.id)&&r.id>=0&&Number.isFinite(r.x+r.y+r.z+r.radius+r.opacity)&&r.radius>=0&&r.opacity>.08;class qf{stats={routes:0,litCells:0,litContacts:0};visible=new Set;visibleParticles=this.visible;routes=Array.from({length:Xa},()=>({active:!1,track:null,stream:"",started:0,count:0,nodes:new Array(Wa)}));current=new Map;adjacent=new Uint8Array(Ie*Ie);degrees=new Uint16Array(Ie);allowed=new Uint8Array(Ie);distances=new Float64Array(Ie);previous=new Int16Array(Ie);visited=new Uint8Array(Ie);reverse=new Uint16Array(Ie);cellLights=new Map;contactLights=new Map;cellStorage=Array.from({length:Xa*Wa},lu);contactStorage=Array.from({length:Xa*(Wa-1)},lu);cursor=0;now=0;trigger(t,e,i,n,s,a){if(!Number.isFinite(e)||!t?.track||t.track.kind!=="melody"||i.tracks.get(t.track.address)!==t.track)return;const o=this.graph(n,s);if(!o)return;const l=a&&Number.isFinite(a.x+a.y+a.z)?a:{x:0,y:0,z:0};let c=-1,h=1/0,d=0;const u=this.degrees.some(M=>M>0);for(let M=0;M<o;M++){if(!this.allowed[M]||u&&!this.degrees[M])continue;const m=n[M],x=(m.x-l.x)**2+(m.y-l.y)**2+(m.z-l.z)**2;d=Math.max(d,m.radius),(x<h||x===h&&m.id<(c<0?1/0:n[c].id))&&(h=x,c=M)}if(c<0)return;const f=Math.min(4,d*.15);if(u&&n[c].radius<f){const M=(Math.sqrt(h)+Math.max(32,d*3))**2;let m=-1,x=1/0;for(let T=0;T<o;T++){if(!this.allowed[T]||!this.degrees[T]||n[T].radius<f)continue;const _=n[T],S=(_.x-l.x)**2+(_.y-l.y)**2+(_.z-l.z)**2;S<=M&&(S<x||S===x&&_.id<(m<0?1/0:n[m].id))&&(m=T,x=S)}m>=0&&(c=m)}this.distances.fill(1/0),this.previous.fill(-1),this.visited.fill(0),this.distances[c]=0;for(let M=0;M<o;M++){let m=-1,x=1/0;for(let _=0;_<o;_++)this.allowed[_]&&!this.visited[_]&&this.distances[_]<x&&(m=_,x=this.distances[_]);if(m<0)break;this.visited[m]=1;const T=n[m];for(let _=0;_<o;_++){if(!this.adjacent[m*Ie+_]||this.visited[_])continue;const S=n[_],A=x+Math.max(1e-5,Math.hypot(T.x-S.x,T.y-S.y,T.z-S.z));A<this.distances[_]&&(this.distances[_]=A,this.previous[_]=m)}}let g=c;for(let M=0;M<o;M++)Number.isFinite(this.distances[M])&&(this.distances[M]>this.distances[g]||this.distances[M]===this.distances[g]&&n[M].radius>n[g].radius)&&(g=M);let y=0,v=g;for(;v>=0&&y<Ie&&(this.reverse[y++]=v,v!==c);)v=this.previous[v];if(!y||this.reverse[y-1]!==c)return;const p=this.routes[this.cursor++%Xa];p.active=!0,p.track=t.track,p.stream=t.track.streamID,p.started=e,p.count=Math.min(Wa,y);for(let M=0;M<p.count;M++)p.nodes[M]=n[this.reverse[y-1-M]];this.visible.clear();for(const M of this.routes)if(M.active&&e-M.started<Pl)for(let m=0;m<M.count;m++){const x=M.nodes[m],T=x?this.current.get(x.id):void 0;x&&T!==void 0&&n[T]===x&&this.visible.add(x.id)}}update(t,e,i,n){this.now=Number.isFinite(i)?i:this.now,this.graph(t,e),this.cellLights.clear(),this.contactLights.clear(),this.visible.clear(),this.stats.routes=0;for(const s of this.routes){if(!s.active||!s.track)continue;const a=this.now-s.started;if(a>=Pl||n.tracks.get(s.track.address)!==s.track||s.track.streamID!==s.stream){s.active=!1;continue}let o=0,l=-1;for(;o<s.count;o++){const g=s.nodes[o],y=g?this.current.get(g.id):void 0;if(y===void 0||t[y]!==g||o>0&&!this.adjacent[l*Ie+y])break;l=y}if(s.count=o,!o){s.active=!1;continue}this.stats.routes++;for(let g=0;g<o;g++)this.visible.add(s.nodes[g].id);if(a<=0)continue;const c=(1-Math.exp(-a/25))*Math.exp(-a/900)*Math.min(1,(Pl-a)/250);if(c<=1e-5)continue;const h=s.track.color,d=Number.isFinite(h.r)?Dl(h.r,0,4):0,u=Number.isFinite(h.g)?Dl(h.g,0,4):0,f=Number.isFinite(h.b)?Dl(h.b,0,4):0;for(let g=0;g<o;g++){const y=s.nodes[g].id;let v=this.cellLights.get(y);if(v||(v=this.cellStorage[this.cellLights.size],this.resetLight(v),this.cellLights.set(y,v)),this.add(v,d,u,f,c),g){const p=cu(s.nodes[g-1].id,y);let M=this.contactLights.get(p);M||(M=this.contactStorage[this.contactLights.size],this.resetLight(M),this.contactLights.set(p,M)),this.add(M,d,u,f,c)}}}for(const s of this.cellLights.values())this.finish(s);for(const s of this.contactLights.values())this.finish(s);this.stats.litCells=this.cellLights.size,this.stats.litContacts=this.contactLights.size}cell(t){return this.cellLights.get(t)}contact(t,e){if(t!==e)return this.contactLights.get(cu(t,e))}clear(){for(const t of this.routes)t.active=!1,t.track=null,t.count=0;this.current.clear(),this.adjacent.fill(0),this.degrees.fill(0),this.allowed.fill(0),this.cellLights.clear(),this.contactLights.clear(),this.visible.clear(),this.cursor=0,this.stats.routes=this.stats.litCells=this.stats.litContacts=0}graph(t,e){this.current.clear(),this.adjacent.fill(0),this.degrees.fill(0),this.allowed.fill(0);const i=Math.min(Ie,t.length);for(let n=0;n<i;n++)x_(t[n])&&!this.current.has(t[n].id)&&(this.current.set(t[n].id,n),this.allowed[n]=1);for(let n=0;n<Math.min(y_,e.length);n++){const{a:s,b:a}=e[n];!Number.isInteger(s)||!Number.isInteger(a)||s<0||a<0||s>=i||a>=i||s===a||!this.allowed[s]||!this.allowed[a]||this.adjacent[s*Ie+a]||(this.adjacent[s*Ie+a]=this.adjacent[a*Ie+s]=1,this.degrees[s]++,this.degrees[a]++)}return i}resetLight(t){t.r=t.g=t.b=t.weight=t.total=0}add(t,e,i,n,s){t.r+=e*s,t.g+=i*s,t.b+=n*s,t.total+=s}finish(t){t.r/=t.total,t.g/=t.total,t.b/=t.total,t.weight=Math.min(1,t.total)}}class M_{scene=new ls;flock;motion=new Of;anchors=new n_;network=new Yf;packedNetwork;routes=new qf;notes;camera;cameraFlight;bloomEnvelope=new Rf;presentation=Ye();bloom=null;siteMask=new Uint8Array(0);networkOpacity=new Float32Array(0);pendingRoutes=[];shapeSample=new Float64Array(7);geometryField={sample:(t,e,i)=>(this.shapeSample.set(this.notes.sample(t,e,i)),this.shapeSample.fill(0,3),this.shapeSample),visibleParticles:this.routes.visibleParticles};constructor(t,e=Lo.particleCount){this.scene.background=new Ct(395276),this.camera=t.clone(),this.cameraFlight=new zf(this.camera),this.flock=new Fo(this.scene,this.camera),this.flock.p.particleCount=Math.max(1,Math.min(3e4,Math.round(e))),this.flock.p.autoRotate=!1,this.flock.p.vortexAmp=this.flock.p.curlAmp=0,this.flock.resizeIfNeeded(),this.notes=new Pc(this.scene,this.flock,Math.random,!1),this.packedNetwork=new v_(this.scene)}trigger(t,e,i,n,s=!0){this.notes.trigger(t,e,i);const a=this.presentation=Ye(n??this.presentation),o=this.notes.region(t.track.address);this.network.cells.length?this.routes.trigger(t,e,i,this.network.cells,this.network.contacts,o):this.flock.p.myceliumEnabled&&(this.pendingRoutes.length>=16&&this.pendingRoutes.shift(),this.pendingRoutes.push({event:t,started:e,stream:t.track.streamID,origin:o?{x:o.x,y:o.y,z:o.z}:void 0})),s&&qr(a.tidalCameraTrigger,t.track.address)&&this.triggerCamera(a),s&&Pf(a.tidalBloomTrigger,t.track.address)&&this.bloomEnvelope.trigger(a)}triggerCamera(t){this.presentation=Ye(t??this.presentation);const e=this.presentation;this.cameraFlight.trigger(e.tidalCameraDuration,e.tidalCameraMinDistance,e.tidalCameraMaxDistance)}triggerBloom(t){this.presentation=Ye(t??this.presentation),this.bloomEnvelope.trigger(this.presentation)}get bloomLevel(){return this.bloomEnvelope.value}clearNotes(){this.notes.clear(),this.routes.clear(),this.pendingRoutes.length=0,this.cameraFlight.cancel(),this.bloomEnvelope.reset(this.presentation)}reset(){this.clearNotes(),this.network.clear(),this.packedNetwork.clear(),this.motion.release(),this.anchors.reset(),this.flock.reset()}update(t,e,i,n,s,a,o=t){this.flock.setConductorValue(n.energy),this.presentation=Ye(s);const l=this.anchors.update(this.flock,t,n.energy,n.motion,this.presentation.tidalNeighborCohesion,this.routes.visibleParticles);if(this.motion.update(this.flock,t,n.energy,n.motion,l,this.presentation.tidalNeighborCohesion),this.notes.update(i,e,this.flock.getWorldRadius()),this.cameraFlight.update(o),this.bloomEnvelope.update(o,this.presentation),this.network.update(this.flock,t,this.motion.opacity,this.motion.cycles),this.network.cells.length&&this.pendingRoutes.length){for(const h of this.pendingRoutes)e-h.started<2200&&h.event.track.streamID===h.stream&&this.routes.trigger(h.event,h.started,i,this.network.cells,this.network.contacts,h.origin);this.pendingRoutes.length=0}this.routes.update(this.network.cells,this.network.contacts,e,i);let c=this.motion.opacity;if(this.network.cells.length){this.siteMask.length!==c.length&&(this.siteMask=new Uint8Array(c.length),this.networkOpacity=new Float32Array(c.length)),this.siteMask.fill(0);for(const h of this.network.cells)this.siteMask[h.id]=1;for(let h=0;h<c.length;h++)this.networkOpacity[h]=c[h]*(this.siteMask[h]||this.routes.visibleParticles.has(h)?1:.09);c=this.networkOpacity}this.flock.draw({size:.625,brightness:.3+n.brightness*1.7,constantSize:!0,opacity:c,deformation:this.geometryField,collisionFlash:!1,density:a,monochrome:1,networkPrepared:!0}),this.flock.myceliumLines.visible=!1,this.packedNetwork.update(this.network.cells,this.network.contacts,this.geometryField,a,.3+n.brightness*1.7,this.flock.p.myceliumEnabled,this.presentation,this.routes)}draw(t,e=this.bloomLevel){this.bloom??=new Wf(t,this.scene,this.camera),this.bloom.draw(e)}}const kn=96,Qr=192,Ya=16;class __{nodes=new Int32Array(kn).fill(-1);fractions=new Float32Array(kn);depth=new Uint8Array(kn);degree=new Uint8Array(kn);valid=new Uint8Array(kn);previous=new Float32Array(kn*3);display=new Float32Array(kn*3);edgeA=new Uint8Array(Qr);edgeB=new Uint8Array(Qr);nodeCount=0;edgeCount=0;spineCount=0;linkDistance=0;reset(t){this.nodeCount=this.edgeCount=this.spineCount=0,this.linkDistance=t,this.nodes.fill(-1),this.degree.fill(0),this.valid.fill(0)}addNode(t,e,i,n,s){for(let l=0;l<this.nodeCount;l++)if(this.nodes[l]===e)return l;if(this.nodeCount>=s)return-1;const a=this.nodeCount++,o=a*3;return this.nodes[a]=e,this.fractions[a]=i,this.depth[a]=n,this.valid[a]=1,this.previous[o]=t.posX[e],this.previous[o+1]=t.posY[e],this.previous[o+2]=t.posZ[e],a}addEdge(t,e){if(t===e||t<0||e<0||this.edgeCount>=Qr)return!1;for(let n=0;n<this.edgeCount;n++)if(this.edgeA[n]===t&&this.edgeB[n]===e||this.edgeA[n]===e&&this.edgeB[n]===t)return!1;const i=this.edgeCount++;return this.edgeA[i]=t,this.edgeB[i]=e,this.degree[t]++,this.degree[e]++,!0}}class b_{constructor(t){this.flock=t}ids=new Int32Array(Ya);distances=new Float64Array(Ya);count=0;heads=new Int32Array(32*32*32);next=new Int32Array(0);stamp=-1/0;cell=1;minX=0;minY=0;minZ=0;rx=1;ry=1;rz=1;radius=0;clear(){this.stamp=-1/0}prepare(t,e){const i=this.flock.pool;if(this.stamp===t&&this.next.length===i.N&&this.radius===e)return;this.stamp=t,this.radius=e,this.next.length!==i.N&&(this.next=new Int32Array(i.N));let n=1/0,s=1/0,a=1/0,o=-1/0,l=-1/0,c=-1/0;for(let h=0;h<i.N;h++)i.alive[h]&&i.fadeOutT[h]<=0&&(n=Math.min(n,i.posX[h]),o=Math.max(o,i.posX[h]),s=Math.min(s,i.posY[h]),l=Math.max(l,i.posY[h]),a=Math.min(a,i.posZ[h]),c=Math.max(c,i.posZ[h]));if(this.heads.fill(-1),!Number.isFinite(n)){this.minX=this.minY=this.minZ=0,this.rx=this.ry=this.rz=1;return}this.minX=n,this.minY=s,this.minZ=a,this.cell=Math.max(1,e/3,(o-n)/30,(l-s)/30,(c-a)/30),this.rx=Math.floor((o-n)/this.cell)+1,this.ry=Math.floor((l-s)/this.cell)+1,this.rz=Math.floor((c-a)/this.cell)+1;for(let h=0;h<i.N;h++)if(i.alive[h]&&i.fadeOutT[h]<=0){const d=Math.floor((i.posX[h]-n)/this.cell),u=Math.floor((i.posY[h]-s)/this.cell),f=Math.floor((i.posZ[h]-a)/this.cell),g=d+u*this.rx+f*this.rx*this.ry;this.next[h]=this.heads[g],this.heads[g]=h}}query(t,e,i,n,s=-1,a=Ya){const o=n*n;this.count=0,a=Math.max(1,Math.min(Ya,a));const l=Math.max(0,Math.floor((t-n-this.minX)/this.cell)),c=Math.min(this.rx-1,Math.floor((t+n-this.minX)/this.cell)),h=Math.max(0,Math.floor((e-n-this.minY)/this.cell)),d=Math.min(this.ry-1,Math.floor((e+n-this.minY)/this.cell)),u=Math.max(0,Math.floor((i-n-this.minZ)/this.cell)),f=Math.min(this.rz-1,Math.floor((i+n-this.minZ)/this.cell));if(l>c||h>d||u>f)return 0;const g=Math.max(l,Math.min(c,Math.floor((t-this.minX)/this.cell))),y=Math.max(h,Math.min(d,Math.floor((e-this.minY)/this.cell))),v=Math.max(u,Math.min(f,Math.floor((i-this.minZ)/this.cell))),p=g+y*this.rx+v*this.rx*this.ry;this.scan(p,t,e,i,o,s,a);for(let M=u;M<=f;M++)for(let m=h;m<=d;m++)for(let x=l;x<=c;x++){const T=x+m*this.rx+M*this.rx*this.ry;if(T===p||this.heads[T]<0)continue;const _=Math.max(this.minX+x*this.cell-t,0,t-(this.minX+(x+1)*this.cell)),S=Math.max(this.minY+m*this.cell-e,0,e-(this.minY+(m+1)*this.cell)),A=Math.max(this.minZ+M*this.cell-i,0,i-(this.minZ+(M+1)*this.cell)),w=this.count===a?this.distances[a-1]:o;_*_+S*S+A*A>w||this.scan(T,t,e,i,o,s,a)}return this.count}scan(t,e,i,n,s,a,o){const l=this.flock.pool;for(let c=this.heads[t];c>=0;c=this.next[c]){if(c===a||!l.alive[c]||l.fadeOutT[c]>0)continue;const h=(l.posX[c]-e)**2+(l.posY[c]-i)**2+(l.posZ[c]-n)**2;if(h>s||a>=0&&h<1e-8||this.count===o&&(h>this.distances[o-1]||h===this.distances[o-1]&&c>=this.ids[o-1]))continue;let d=0;for(;d<this.count&&(this.distances[d]<h||this.distances[d]===h&&this.ids[d]<c);)d++;if(!(d>=o)){for(let u=Math.min(this.count,o-1);u>d;u--)this.ids[u]=this.ids[u-1],this.distances[u]=this.distances[u-1];this.ids[d]=c,this.distances[d]=h,this.count=Math.min(o,this.count+1)}}}build(t,e,i,n,s){const a=this.flock.pool,o=Math.max(8,Math.min(this.flock.p.myceliumLinkDist,this.flock.p.worldRadius*.45));this.prepare(s,o),t.reset(o);const l=48+Math.round(n*48),c=2+Math.round(n*2),h=a.posX[e],d=a.posY[e],u=a.posZ[e],f=a.posX[i]-h,g=a.posY[i]-d,y=a.posZ[i]-u,v=f*f+g*g+y*y,p=m=>Math.max(0,Math.min(1,((a.posX[m]-h)*f+(a.posY[m]-d)*g+(a.posZ[m]-u)*y)/Math.max(1e-8,v)));t.addNode(a,e,0,0,l);let M=0;for(let m=1;m<16;m++){const x=m/16;if(!this.query(h+f*x,d+g*x,u+y*x,o*.65,-1,1))continue;const T=this.ids[0],_=p(T);T===i||_<=M+.012||_>=.988||(t.addNode(a,T,_,0,l),M=_)}t.addNode(a,i,1,0,l),t.spineCount=t.nodeCount;for(let m=1;m<t.spineCount;m++)t.addEdge(m-1,m);for(let m=0;m<t.nodeCount&&t.edgeCount<Qr;m++){if(t.depth[m]>=3)continue;const x=t.nodes[m],T=a.posX[x],_=a.posY[x],S=a.posZ[x];this.query(T,_,S,o,x);let A=0;for(let w=0;w<this.count&&A<c;w++){const b=this.ids[w],E=(T+a.posX[b])*.5,I=(_+a.posY[b])*.5,D=(S+a.posZ[b])*.5,F=this.distances[w]*.25;let U=!1;for(let k=0;k<w;k++){const z=this.ids[k];if((a.posX[z]-E)**2+(a.posY[z]-I)**2+(a.posZ[z]-D)**2<F*.999999){U=!0;break}}if(U||t.degree[m]>=6)continue;let L=-1;for(let k=0;k<t.nodeCount;k++)if(t.nodes[k]===b){L=k;break}L>=0&&t.degree[L]>=6||(L<0&&(L=t.addNode(a,b,p(b),t.depth[m]+1,l)),t.addEdge(m,L)&&A++)}}}}const cc=32,Fs=cc*Qr*6,hc=r=>Math.max(0,Math.min(1,(r-24)/72)),hu=r=>420+hc(r)*280;class S_{constructor(t,e){this.flock=e,this.neighbors=new b_(e);const i=new ie;i.setAttribute("position",this.positions),i.setAttribute("direction",this.directions),i.setAttribute("color",this.colors),i.setAttribute("width",this.widths);const n=new Float32Array(Fs);for(let a=0;a<Fs;a+=6)n.set([-1,-1,1,-1,1,1],a);i.setAttribute("side",new xt(n,1)),i.setDrawRange(0,0);const s=new se({transparent:!0,depthWrite:!1,blending:qe,side:Me,vertexShader:`
        attribute vec3 direction;
        attribute vec4 color;
        attribute float width;
        attribute float side;
        varying vec4 vColor;
        varying float vSide;
        void main() {
          vec4 p = modelViewMatrix * vec4(position, 1.0);
          vec2 d = (modelViewMatrix * vec4(direction, 0.0)).xy;
          vec2 normal = vec2(-d.y, d.x) / max(length(d), 0.0001);
          p.xy += normal * side * width;
          gl_Position = projectionMatrix * p;
          vColor = color; vSide = side;
        }`,fragmentShader:`
        varying vec4 vColor;
        varying float vSide;
        void main() {
          float core = exp(-vSide * vSide * 18.0);
          float halo = exp(-vSide * vSide * 3.5) * 0.32;
          gl_FragColor = vec4(vColor.rgb, vColor.a * (core + halo));
        }`});this.mesh=new _e(i,s),this.mesh.name="slewn-mycelium",this.mesh.frustumCulled=!1,this.mesh.visible=!1,t.add(this.mesh)}visibleParticles=new Set;growths=Array.from({length:cc},()=>({track:null,targetTrack:null,source:-1,target:-1,started:0,eventID:0,streamID:"",network:new __,pitch:60,colorFrom:60,colorTarget:60,colorStarted:0,colorGlide:0,steps:0,branches:0,life:0,vertexOffset:0,vertexCount:0,targetTriggerCount:0,targetOnsetAt:-1/0,targetOnsetPitch:60,targetStream:"",targetFrom:60,targetPitch:60,targetStarted:0,targetGlide:0,sx:0,sy:0,sz:0,tx:0,ty:0,tz:0}));cursor=0;vertices=0;positions=new xt(new Float32Array(Fs*3),3).setUsage($t);directions=new xt(new Float32Array(Fs*3),3).setUsage($t);colors=new xt(new Float32Array(Fs*4),4).setUsage($t);widths=new xt(new Float32Array(Fs),1).setUsage($t);neighbors;counts=new Uint32Array(512);anchors=new Int32Array(512).fill(-1);refreshed=-1/0;viewDirection=new V;mesh;alive(t){const e=this.flock.pool;return t>=0&&t<e.N&&!!e.alive[t]&&e.fadeOutT[t]<=0}anchor(t){const e=this.flock.pool;let i=-1,n=1/0;for(let s=0;s<t.count;s++){const a=t.members[s];if(!this.alive(a))continue;const o=(e.posX[a]-t.x)**2+(e.posY[a]-t.y)**2+(e.posZ[a]-t.z)**2;o<n&&(n=o,i=a)}return i}screenSeparation(t,e){const i=this.flock.pool,n=this.viewDirection,s=i.posX[e]-i.posX[t],a=i.posY[e]-i.posY[t],o=i.posZ[e]-i.posZ[t],l=s*n.x+a*n.y+o*n.z;return Math.sqrt(Math.max(0,s*s+a*a+o*o-l*l))}nearby(t,e,i,n=!0){const s=this.flock.pool;if(i-this.refreshed>250){this.counts.fill(0),this.anchors.fill(-1);const l=Math.max(1,this.flock.p.worldRadius*3);for(let c=0;c<s.N;c++){if(!this.alive(c))continue;const h=Math.max(0,Math.min(7,Math.floor((s.posX[c]/l+.5)*8))),d=Math.max(0,Math.min(7,Math.floor((s.posY[c]/l+.5)*8))),u=Math.max(0,Math.min(7,Math.floor((s.posZ[c]/l+.5)*8))),f=h+d*8+u*64;this.counts[f]++||(this.anchors[f]=c)}this.refreshed=i}let a=-1,o=1/0;for(let l=0;l<512;l++){const c=this.anchors[l];if(c===t||!this.alive(c)||this.counts[l]<3)continue;const h=Math.hypot(s.posX[c]-s.posX[t],s.posY[c]-s.posY[t],s.posZ[c]-s.posZ[t]);if(h<e.radius*.85||this.screenSeparation(t,c)<e.radius*.85)continue;const d=h*(.45+1/Math.sqrt(this.counts[l]));d<o&&(o=d,a=c)}return a<0&&n&&i!==this.refreshed?(this.refreshed=-1/0,this.nearby(t,e,i,!1)):a}trigger(t,e,i,n){this.flock.cam.getWorldDirection(this.viewDirection);const s=this.anchor(i);if(s<0)return;let a=-1,o=1/0,l=null;for(const u of n){if(u===i)continue;const f=Math.hypot(u.x-i.x,u.y-i.y,u.z-i.z);if(f<i.radius*.85||f>=o)continue;const g=this.anchor(u);g<0||g===s||this.screenSeparation(s,g)<i.radius*.85||(a=g,o=f,l=u.track??null)}if(a<0&&(a=this.nearby(s,i,e)),a<0)return;const c=this.growths[this.cursor],h=hc(t.pitch),d=this.flock.pool;this.cursor=(this.cursor+1)%cc,this.neighbors.build(c.network,s,a,h,e),Object.assign(c,{track:t.track,targetTrack:l,source:s,target:a,started:e,eventID:t.eventID,streamID:t.track.streamID,pitch:t.pitch,colorFrom:t.fromPitch,colorTarget:t.pitch,colorStarted:e,colorGlide:t.glideMs,targetTriggerCount:l?.triggerCount??0,targetOnsetAt:l?.lastOnsetAt??-1/0,targetOnsetPitch:l?.lastOnsetPitch??60,targetStream:l?.lastOnsetStream??"",targetFrom:l?.fromPitch??60,targetPitch:l?.targetPitch??60,targetStarted:l?.started??0,targetGlide:l?.glideMs??0,steps:c.network.spineCount-1,branches:c.network.edgeCount-c.network.spineCount+1,life:hu(t.pitch),sx:d.posX[s],sy:d.posY[s],sz:d.posZ[s],tx:d.posX[a],ty:d.posY[a],tz:d.posZ[a]})}clear(){this.visibleParticles.clear();for(const t of this.growths)t.track=null,t.targetTrack=null;this.neighbors.clear(),this.cursor=0,this.refreshed=-1/0,this.mesh.visible=!1,this.mesh.geometry.setDrawRange(0,0)}update(t,e,i){this.visibleParticles.clear(),this.vertices=0;const n=this.flock.pool;for(const s of this.growths){if(s.vertexOffset=this.vertices,s.vertexCount=0,!s.track)continue;const a=e-s.started;if(a>=s.life||t.tracks.get(s.track.address)!==s.track||!this.alive(s.source)||!this.alive(s.target)){s.track=null;continue}if(a<0)continue;const o=s.source,l=s.target,c=this.flock.p.worldRadius*.6;if(Math.hypot(n.posX[o]-s.sx,n.posY[o]-s.sy,n.posZ[o]-s.sz)>c||Math.hypot(n.posX[l]-s.tx,n.posY[l]-s.ty,n.posZ[l]-s.tz)>c){s.track=null;continue}s.sx=n.posX[o],s.sy=n.posY[o],s.sz=n.posZ[o],s.tx=n.posX[l],s.ty=n.posY[l],s.tz=n.posZ[l];const h=s.network;for(let E=0;E<h.nodeCount;E++){if(!h.valid[E])continue;const I=h.nodes[E],D=E*3;if(!this.alive(I)||Math.hypot(n.posX[I]-h.previous[D],n.posY[I]-h.previous[D+1],n.posZ[I]-h.previous[D+2])>c){h.valid[E]=0;continue}h.previous[D]=n.posX[I],h.previous[D+1]=n.posY[I],h.previous[D+2]=n.posZ[I];const F=i.sample(n.posX[I],n.posY[I],n.posZ[I]);h.display[D]=F[0],h.display[D+1]=F[1],h.display[D+2]=F[2]}s.track.eventID===s.eventID&&s.track.streamID===s.streamID&&(s.colorFrom=s.track.fromPitch,s.colorTarget=s.track.targetPitch,s.colorStarted=s.track.started,s.colorGlide=s.track.glideMs);const d=s.colorGlide<=0?1:Math.max(0,Math.min(1,(e-s.colorStarted)/s.colorGlide)),u=cr(s.colorFrom+(s.colorTarget-s.colorFrom)*d),f=s.track.color,g=f.r*u,y=f.g*u,v=f.b*u,p=s.targetTrack;p&&p.triggerCount===s.targetTriggerCount&&p.streamID===s.targetStream&&(s.targetFrom=p.fromPitch,s.targetPitch=p.targetPitch,s.targetStarted=p.started,s.targetGlide=p.glideMs);const M=e-s.targetOnsetAt,m=p&&t.tracks.get(p.address)===p&&s.targetStream===s.streamID&&M>=0?Math.max(0,Math.min(1,(hu(s.targetOnsetPitch)-M)/120)):0,x=s.targetGlide<=0?1:Math.max(0,Math.min(1,(e-s.targetStarted)/s.targetGlide)),T=cr(s.targetFrom+(s.targetPitch-s.targetFrom)*x),_=g+((p?.color.r??0)*T-g)*m,S=y+((p?.color.g??0)*T-y)*m,A=v+((p?.color.b??0)*T-v)*m,w=(1-Math.exp(-a/22))*(.65*Math.exp(-a/240)+.35*Math.exp(-a/420))*(1-a/s.life),b=2.3+hc(s.pitch)*1.1;for(let E=0;E<h.edgeCount;E++){const I=h.edgeA[E],D=h.edgeB[E];if(!h.valid[I]||!h.valid[D])continue;const F=h.nodes[I],U=h.nodes[D],L=Math.hypot(n.posX[F]-n.posX[U],n.posY[F]-n.posY[U],n.posZ[F]-n.posZ[U]),k=E<s.steps;if(!k&&L>h.linkDistance*1.5||L<.001)continue;const z=Math.max(h.depth[I],h.depth[D]),R=w*(k?1:Math.max(.35,1-L/(h.linkDistance*1.6))*.85);this.writeEdge(h,I,D,g,y,v,_,S,A,R,b/(1+z*.35))}s.vertexCount=this.vertices-s.vertexOffset}if(this.mesh.visible=this.vertices>0,this.mesh.geometry.setDrawRange(0,this.vertices),this.vertices)for(const s of[this.positions,this.directions,this.colors,this.widths])s.clearUpdateRanges(),s.addUpdateRange(0,this.vertices*s.itemSize),s.needsUpdate=!0}writeEdge(t,e,i,n,s,a,o,l,c,h,d){this.visibleParticles.add(t.nodes[e]),this.visibleParticles.add(t.nodes[i]);const u=t.display,f=e*3,g=i*3;for(let y=0;y<6;y++){const v=this.vertices++,p=y===1||y===2||y===4,M=p?g:f,m=t.fractions[p?i:e];this.positions.setXYZ(v,u[M],u[M+1],u[M+2]),this.directions.setXYZ(v,u[g]-u[f],u[g+1]-u[f+1],u[g+2]-u[f+2]),this.colors.setXYZW(v,n+(o-n)*m,s+(l-s)*m,a+(c-a)*m,h),this.widths.setX(v,d)}}}const Il=16,du=192,$a=2200;class w_{constructor(t,e,i=Math.random){this.flock=e,this.random=i,this.mycelium=new S_(t,e)}clouds=new Map;active=[];releases=Array.from({length:16},()=>({track:null,until:0,baseCompression:0,basePresence:0,brightness:1,x:0,y:0,z:0,radius:1,ax:1,ay:0,az:0,compression:0,presence:0,r:0,g:0,b:0}));releaseCursor=0;gridRefreshed=-1/0;result=new Float64Array(7);lastNow=-1;cellCounts=new Uint32Array(512);cellX=new Float64Array(512);cellY=new Float64Array(512);cellZ=new Float64Array(512);mycelium;get visibleParticles(){return this.mycelium.visibleParticles}trigger(t,e,i){if(this.prune(i),i.tracks.get(t.track.address)!==t.track)return;let n=this.clouds.get(t.track.address);if(!n||n.track!==t.track){const s=t.track.index*2.39996+.65;n={brightness:1,track:t.track,x:0,y:0,z:0,radius:Math.max(this.flock.p.worldRadius*.36,Math.min(this.flock.p.worldRadius*.65,this.flock.p.flockNeighborRadius*1.65)),ax:Math.cos(s)*.8,ay:.6,az:Math.sin(s)*.8,members:new Uint32Array(du),count:0,refreshed:-1/0,pulses:new Float64Array(Il).fill(-1/0),cursor:0,compression:0,presence:0,r:0,g:0,b:0},this.place(n,e,!1),this.collect(n,e),this.clouds.set(t.track.address,n)}else{if(n.presence>0||n.compression!==0){const s=this.releases[this.releaseCursor];this.releaseCursor=(this.releaseCursor+1)%this.releases.length,Object.assign(s,{track:n.track,until:e+350,baseCompression:n.compression,basePresence:n.presence,brightness:n.brightness,x:n.x,y:n.y,z:n.z,radius:n.radius,ax:n.ax,ay:n.ay,az:n.az})}this.place(n,e,!0),this.collect(n,e),n.pulses.fill(-1/0),n.cursor=0,n.compression=0,n.presence=0}n.count||(this.gridRefreshed=-1/0,this.place(n,e,!1),this.collect(n,e)),n.pulses[n.cursor]=e,n.cursor=(n.cursor+1)%Il,this.mycelium.trigger(t,e,n,this.clouds.values())}clear(){this.clouds.clear(),this.active.length=0,this.lastNow=-1,this.mycelium.clear();for(const t of this.releases)t.track=null;this.gridRefreshed=-1/0,this.releaseCursor=0}prune(t){for(const[e,i]of this.clouds)t.tracks.get(e)!==i.track&&this.clouds.delete(e)}place(t,e,i){const n=this.flock.pool;if(e-this.gridRefreshed>120){this.cellCounts.fill(0),this.cellX.fill(0),this.cellY.fill(0),this.cellZ.fill(0);const s=Math.max(1,this.flock.p.worldRadius*3);for(let a=0;a<n.N;a++){if(!n.alive[a]||n.fadeOutT[a]>0)continue;const o=Math.max(0,Math.min(7,Math.floor((n.posX[a]/s+.5)*8))),l=Math.max(0,Math.min(7,Math.floor((n.posY[a]/s+.5)*8))),c=Math.max(0,Math.min(7,Math.floor((n.posZ[a]/s+.5)*8))),h=o+l*8+c*64;this.cellCounts[h]++,this.cellX[h]+=n.posX[a],this.cellY[h]+=n.posY[a],this.cellZ[h]+=n.posZ[a]}this.gridRefreshed=e}for(let s=0;s<3;s++){let a=-1,o=0;for(let l=0;l<512;l++){const c=this.cellCounts[l];if(!c)continue;const h=this.cellX[l]/c,d=this.cellY[l]/c,u=this.cellZ[l]/c,f=(h-t.x)**2+(d-t.y)**2+(u-t.z)**2;if(i&&s<2&&f<(t.radius*1.5)**2)continue;let g=1;for(const v of this.clouds.values()){if(v===t)continue;const p=(h-v.x)**2+(d-v.y)**2+(u-v.z)**2;g=Math.min(g,p/(t.radius+v.radius)**2)}if(s===0&&g<.25)continue;const y=Math.sqrt(c)*(.025+.975*g);o+=y,this.random()*o<y&&(a=l)}if(a>=0){const l=this.cellCounts[a];t.x=this.cellX[a]/l,t.y=this.cellY[a]/l,t.z=this.cellZ[a]/l;return}}}collect(t,e){const i=this.flock.pool,n=t.radius**2;t.count=0;const s=Math.max(1,Math.floor(i.N/3e3));for(let a=0;a<i.N&&t.count<du;a+=s){if(!i.alive[a]||i.fadeOutT[a]>0)continue;const o=(i.posX[a]-t.x)**2+(i.posY[a]-t.y)**2+(i.posZ[a]-t.z)**2;o<n&&this.belongsTo(t,a,o)&&(t.members[t.count++]=a)}t.refreshed=e}belongsTo(t,e,i){const n=this.flock.pool;for(const s of this.clouds.values()){if(s===t)continue;const a=(n.posX[e]-s.x)**2+(n.posY[e]-s.y)**2+(n.posZ[e]-s.z)**2;if(a<i||a===i&&s.track.address<t.track.address)return!1}return!0}update(t,e,i){const n=this.lastNow<0?0:Math.max(0,Math.min(.1,(e-this.lastNow)/1e3));this.lastNow=e,this.active.length=0,this.prune(t);const s=this.flock.pool;for(const a of this.clouds.values()){let o=0,l=0,c=0,h=0;for(let m=0;m<a.count;m++){const x=a.members[m];if(x>=s.N||!s.alive[x]||s.fadeOutT[x]>0)continue;const T=(s.posX[x]-a.x)**2+(s.posY[x]-a.y)**2+(s.posZ[x]-a.z)**2;T>a.radius**2*4||!this.belongsTo(a,x,T)||(o+=s.posX[x],l+=s.posY[x],c+=s.posZ[x],h++)}if(h){const m=1-Math.exp(-n/.16);a.x+=(o/h-a.x)*m,a.y+=(l/h-a.y)*m,a.z+=(c/h-a.z)*m}(e-a.refreshed>450||h<4)&&(this.collect(a,e),a.count||(this.place(a,e,!1),this.collect(a,e)));let d=0,u=0;for(let m=0;m<Il;m++){const x=e-a.pulses[m];if(x<0||x>=$a)continue;const T=x/1e3,_=Math.min(1,($a-x)/250);d+=1.42*Math.exp(-T/.48)*Math.sin(T*7.6)*_,u+=(1-Math.exp(-T/.018))*Math.exp(-T/.9)*_}a.compression=Math.max(-.18,Math.min(.78,d));const f=e-a.track.started,g=Math.max(0,f-a.track.glideMs),y=f<0||g>=$a?0:Math.exp(-g/900)*Math.min(1,($a-g)/250),v=a.presence+(1-a.presence)*(1-Math.exp(-n/.018));a.presence=Math.min(1,Math.max(u,Math.min(y,v)));const p=cr(Cc(a.track,e)),M=a.track.color;a.brightness=p,a.r=M.r*p,a.g=M.g*p,a.b=M.b*p,(a.presence>0||a.compression!==0)&&this.active.push(a)}for(const a of this.releases){if(!a.track)continue;if(e>=a.until||t.tracks.get(a.track.address)!==a.track){a.track=null;continue}const o=Math.max(0,Math.min(1,(a.until-e)/350)),l=o*o*(3-2*o);a.compression=a.baseCompression*l,a.presence=a.basePresence*l;const c=a.track.color;a.r=c.r*a.brightness,a.g=c.g*a.brightness,a.b=c.b*a.brightness,this.active.push(a)}this.mycelium.update(t,e,this)}sample(t,e,i){const n=this.result;n[0]=t,n[1]=e,n[2]=i;let s=0,a=0,o=0,l=0,c=0,h=0,d=0,u=0;for(const g of this.active){const y=t-g.x,v=e-g.y,p=i-g.z,M=(y*y+v*v+p*p)/(g.radius*g.radius);if(M>=1)continue;const m=(1-M)**2,x=g.compression*m,T=y*g.ax+v*g.ay+p*g.az;c+=x*(y*.28-T*g.ax*1.28),h+=x*(v*.28-T*g.ay*1.28),d+=x*(p*.28-T*g.az*1.28),u+=Math.abs(x);const _=m*g.presence;l+=_,s+=g.r*_,a+=g.g*_,o+=g.b*_}const f=Math.max(1,u/.85);return n[0]+=c/f,n[1]+=h/f,n[2]+=d/f,n[3]=l?s/l:0,n[4]=l?a/l:0,n[5]=l?o/l:0,n[6]=Math.min(1,l),n}}const Ce=35,uu=Ce**3,Us=2,gi=4,A_=.1;class E_{offsets=new Float64Array(0);velocities=new Float64Array(0);positions=new Float64Array(0);forces=new Float64Array(0);attractions=new Float64Array(0);cycles=new Uint32Array(0);wasAlive=new Uint8Array(0);cellIds=new Int32Array(0);cellCounts=new Uint32Array(uu);samples=new Int32Array(uu*Us);neighbors=new Int32Array(0);degrees=new Uint32Array(0);pairForces=new Float64Array(0);pairAttractive=new Uint8Array(0);neighborCycles=new Uint32Array(0);age=1/0;radius=0;strength=1;strengthInitialized=!1;update(t,e,i,n,s=1){const a=t.posX.length;this.cycles.length!==a&&(this.offsets=new Float64Array(a*3),this.velocities=new Float64Array(a*3),this.positions=new Float64Array(a*3),this.forces=new Float64Array(a*3),this.attractions=new Float64Array(a*3),this.cycles=new Uint32Array(a),this.wasAlive=new Uint8Array(a),this.cellIds=new Int32Array(a),this.neighbors=new Int32Array(a*gi),this.neighbors.fill(-1),this.degrees=new Uint32Array(a),this.pairForces=new Float64Array(a*gi*3),this.pairAttractive=new Uint8Array(a*gi),this.neighborCycles=new Uint32Array(a),this.age=1/0,this.strengthInitialized=!1);const o=Number.isFinite(i)?Math.max(0,Math.min(.1,i)):0,l=Number.isFinite(s)?Math.max(0,Math.min(5,s)):1;this.strengthInitialized?this.strength+=(l-this.strength)*(1-Math.exp(-o/.15)):(this.strength=l,this.strengthInitialized=!0),this.radius!==e&&(this.radius=e,this.age=1/0);let c=!1;for(let h=0;h<a;h++)if(this.cycles[h]!==n[h]||this.wasAlive[h]!==+!!t.alive[h]){const d=h*3;this.offsets.fill(0,d,d+3),this.velocities.fill(0,d,d+3),this.cycles[h]=n[h],this.wasAlive[h]=+!!t.alive[h],c=!0}if(c)for(let h=0;h<a;h++)for(let d=0;d<gi;d++){const u=h*gi+d,f=this.neighbors[u];if(!(f<0)&&(!t.alive[h]||!t.alive[f]||this.neighborCycles[h]!==n[h]||this.neighborCycles[f]!==n[f])){const g=u*3,y=h*3,v=f*3;for(let p=0;p<3;p++){const M=this.pairForces[g+p];this.forces[y+p]-=M,this.forces[v+p]+=M,this.pairAttractive[u]&&(this.attractions[y+p]-=M,this.attractions[v+p]+=M)}this.neighbors[u]=-1}}if(o>0){this.age+=o,this.age+1e-9>=A_&&(this.gather(t,e),this.neighborCycles.set(this.cycles),this.age=0);const h=this.strength,d=.12+(1-Math.min(1,h))*2.4,u=Math.ceil(o*120),f=o/u,g=Math.exp(-f*(2.4+Math.max(0,h-1)*1.8)),y=e*.16;for(let v=0;v<a;v++){if(!t.alive[v])continue;const p=v*3;for(let M=0;M<u;M++){for(let x=0;x<3;x++){const T=this.forces[p+x]+this.attractions[p+x]*(h-1);this.velocities[p+x]=(this.velocities[p+x]+(T-this.offsets[p+x]*d)*f)*g,this.offsets[p+x]+=this.velocities[p+x]*f}const m=Math.hypot(this.offsets[p],this.offsets[p+1],this.offsets[p+2]);if(m>y)for(let x=0;x<3;x++)this.offsets[p+x]*=y/m,this.velocities[p+x]*=.8}}}for(let h=0;h<a;h++)t.alive[h]&&(t.posX[h]+=this.offsets[h*3],t.posY[h]+=this.offsets[h*3+1],t.posZ[h]+=this.offsets[h*3+2])}gather(t,e){const i=t.posX.length,n=e*.115,s=n*n,a=n*Ce*.5,o=c=>Math.max(0,Math.min(Ce-1,Math.floor((c+a)/n)));this.cellCounts.fill(0),this.samples.fill(-1),this.neighbors.fill(-1),this.degrees.fill(0),this.forces.fill(0),this.attractions.fill(0);for(let c=0;c<i;c++){if(!t.alive[c]){this.cellIds[c]=-1;continue}const h=c*3,d=t.posX[c]+this.offsets[h],u=t.posY[c]+this.offsets[h+1],f=t.posZ[c]+this.offsets[h+2];this.positions[h]=d,this.positions[h+1]=u,this.positions[h+2]=f;const g=o(d)+o(u)*Ce+o(f)*Ce*Ce,y=this.cellCounts[g]++;this.cellIds[c]=g;const v=y<Us?y:(Math.imul(c+1,2654435761)>>>0)%(y+1);v<Us&&(this.samples[g*Us+v]=c)}for(let c=0;c<i;c++){const h=this.cellIds[c];if(h<0)continue;const d=Math.floor(h/(Ce*Ce)),u=Math.floor(h/Ce)%Ce,f=h%Ce,g=c*3;let y=1/0,v=1/0,p=1/0,M=1/0;const m=c*gi;for(let x=Math.max(0,d-1);x<=Math.min(Ce-1,d+1);x++)for(let T=Math.max(0,u-1);T<=Math.min(Ce-1,u+1);T++)for(let _=Math.max(0,f-1);_<=Math.min(Ce-1,f+1);_++){const S=_+T*Ce+x*Ce*Ce;if(!this.cellCounts[S])continue;const A=S*Us;for(let w=0;w<Us;w++){const b=this.samples[A+w];if(b<0||b===c)continue;const E=b*3,I=this.positions[E]-this.positions[g],D=this.positions[E+1]-this.positions[g+1],F=this.positions[E+2]-this.positions[g+2],U=I*I+D*D+F*F;U>s||U>=M||(U<y?(M=p,p=v,v=y,y=U,this.neighbors[m+3]=this.neighbors[m+2],this.neighbors[m+2]=this.neighbors[m+1],this.neighbors[m+1]=this.neighbors[m],this.neighbors[m]=b):U<v?(M=p,p=v,v=U,this.neighbors[m+3]=this.neighbors[m+2],this.neighbors[m+2]=this.neighbors[m+1],this.neighbors[m+1]=b):U<p?(M=p,p=U,this.neighbors[m+3]=this.neighbors[m+2],this.neighbors[m+2]=b):(M=U,this.neighbors[m+3]=b))}}for(let x=0;x<gi;x++){const T=this.neighbors[m+x];T>=0&&(this.degrees[c]++,this.degrees[T]++)}}const l=e*.025;for(let c=0;c<i;c++)for(let h=0;h<gi;h++){const d=this.neighbors[c*gi+h];if(d<0)continue;const u=c*3,f=d*3;let g=this.positions[f]-this.positions[u],y=this.positions[f+1]-this.positions[u+1],v=this.positions[f+2]-this.positions[u+2],p=Math.hypot(g,y,v);if(p<1e-8){const x=Math.min(c,d),T=Math.max(c,d),_=(Math.imul(x+1,73856093)^Math.imul(T+1,19349663))>>>0,S=c<d?1:-1;g=((_&1023)/511.5-1)*S,y=((_>>>10&1023)/511.5-1)*S,v=((_>>>20&1023)/511.5-1)*S;const A=Math.hypot(g,y,v)||1;g/=A,y/=A,v/=A}else g/=p,y/=p,v/=p;const M=(p-l)*(p<l?8:3.5)/Math.max(1,Math.sqrt(this.degrees[c]*this.degrees[d])),m=(c*gi+h)*3;this.pairAttractive[c*gi+h]=M>0?1:0,this.pairForces[m]=g*M,this.pairForces[m+1]=y*M,this.pairForces[m+2]=v*M,this.forces[u]+=g*M,this.forces[u+1]+=y*M,this.forces[u+2]+=v*M,this.forces[f]-=g*M,this.forces[f+1]-=y*M,this.forces[f+2]-=v*M,M>0&&(this.attractions[u]+=g*M,this.attractions[u+1]+=y*M,this.attractions[u+2]+=v*M,this.attractions[f]-=g*M,this.attractions[f+1]-=y*M,this.attractions[f+2]-=v*M)}}clear(){this.offsets.fill(0),this.velocities.fill(0),this.forces.fill(0),this.attractions.fill(0),this.cycles.fill(0),this.wasAlive.fill(0),this.neighbors.fill(-1),this.age=1/0,this.strengthInitialized=!1}}const Ir=(r,t)=>Number.isFinite(r)?Math.max(0,Math.min(1,r)):t,T_=34028234663852886e22,ks=(r,t,e)=>{const i=r+(t-e);return Number.isFinite(t)&&Math.abs(i)<=T_?i:r};class C_{flock;liveX;liveY;liveZ;restX=new Float32Array(0);restY=new Float32Array(0);restZ=new Float32Array(0);halfWidths=new Float64Array(0);cohesion=new E_;localCohesionActive=!1;opacityValues=new Float32Array(0);cycleValues=new Uint32Array(0);entryHeights=new Float64Array(0);entryDepths=new Float64Array(0);trajectoryRadius=NaN;get opacity(){return this.opacityValues}get cycles(){return this.cycleValues}phase=0;distance=0;generation=-1;energy=.5;speed=.5;fadeFrames=0;update(t,e,i,n,s,a=1){t.resizeIfNeeded();const o=t.pool,l=Number.isFinite(t.p.worldRadius)?Math.max(1,t.p.worldRadius):250;if(this.flock!==t||this.generation!==t.generation||this.liveX!==o.posX||this.liveY!==o.posY||this.liveZ!==o.posZ){this.release(),this.flock=t,this.generation=t.generation,this.liveX=o.posX,this.liveY=o.posY,this.liveZ=o.posZ,this.restX=o.posX.slice(),this.restY=o.posY.slice(),this.restZ=o.posZ.slice(),this.halfWidths=new Float64Array(o.N),this.opacityValues=new Float32Array(o.N),this.cycleValues=new Uint32Array(o.N),this.entryHeights=new Float64Array(o.N),this.entryDepths=new Float64Array(o.N);for(let m=0;m<o.N;m++)this.halfWidths[m]=Math.max(l*.08,Math.sqrt(Math.max(0,l*l-this.restY[m]**2-this.restZ[m]**2)),Math.abs(this.restX[m])+1e-4);this.energy=Ir(i,.5),this.speed=Ir(n,.5)}if(this.trajectoryRadius!==l){for(let m=0;m<o.N;m++){const x=this.restX[m]/l*13.5,T=this.restZ[m]/l*9.5;this.entryHeights[m]=this.height(x,T,0),this.entryDepths[m]=Math.sin(x*.19+T*.26)}this.trajectoryRadius=l}const c=Number.isFinite(e)?Math.max(0,Math.min(.1,e)):0,h=1-Math.exp(-c/.18);this.energy+=(Ir(i,this.energy)-this.energy)*h;const d=Ir(n,this.speed),u=c*d+(this.speed-d)*.18*h;this.phase+=c*.32+u*1.25,this.distance+=l*(c*.16+u*.18),this.speed+=(d-this.speed)*h,this.fadeFrames+=c*60;const f=Math.floor(this.fadeFrames+1e-8);this.fadeFrames-=f;const g=l*(.055+this.energy*.065),y=this.phase,v=s&&s.x&&s.y&&s.z&&Number.isInteger(s.x.length)&&s.x.length>=o.N&&Number.isInteger(s.y.length)&&s.y.length>=o.N&&Number.isInteger(s.z.length)&&s.z.length>=o.N?s:void 0,p=v,M=p?.advected===!0&&p.cycles&&p.opacity&&p.cycles.length>=o.N&&p.opacity.length>=o.N?p:void 0;for(let m=0;m<o.N;m++){if(!o.alive[m]){this.opacityValues[m]=0;continue}if(o.fadeOutT[m]>0&&(o.fadeOutT[m]=Math.max(0,o.fadeOutT[m]-f),!o.fadeOutT[m])){o.alive[m]=0,this.opacityValues[m]=0;continue}const x=this.restX[m]/l*13.5,T=this.restZ[m]/l*9.5;if(M){const I=M.cycles[m]>>>0;I!==this.cycleValues[m]&&(o.trailCount[m]=0,o.trailWriteIdx[m]=0,this.cycleValues[m]=I);const D=ks(this.restX[m],M.x[m],this.restX[m]),F=ks(this.restY[m],M.y[m],this.restY[m]),U=ks(this.restZ[m],M.z[m],this.restZ[m]),L=D/l*13.5,k=U/l*9.5;o.posX[m]=D,o.posY[m]=F+(this.height(L,k,y)-this.height(L,k,0))*g,o.posZ[m]=U+(Math.sin(L*.19+k*.26-y*.6)-Math.sin(L*.19+k*.26))*g*.22,this.opacityValues[m]=Ir(M.opacity[m],1);continue}const _=this.halfWidths[m],S=_*2,A=this.restX[m]+_+this.distance,w=Math.floor(A/S);w!==this.cycleValues[m]&&(o.trailCount[m]=0,o.trailWriteIdx[m]=0,this.cycleValues[m]=w),o.posX[m]=this.distance===0?this.restX[m]:A-w*S-_;const b=Math.min(o.posX[m]+_,_-o.posX[m]),E=Math.max(0,Math.min(1,b/Math.max(l*.02,_*.14)));this.opacityValues[m]=E*E*(3-2*E),o.posY[m]=this.restY[m]+(this.height(x,T,y)-this.entryHeights[m])*g,o.posZ[m]=this.restZ[m]+(Math.sin(x*.19+T*.26-y*.6)-this.entryDepths[m])*g*.22,v&&(o.posX[m]=ks(o.posX[m],v.x[m],this.restX[m]),o.posY[m]=ks(o.posY[m],v.y[m],this.restY[m]),o.posZ[m]=ks(o.posZ[m],v.z[m],this.restZ[m]))}v&&!M?(this.cohesion.update(o,l,c,this.cycleValues,a),this.localCohesionActive=!0):this.localCohesionActive&&(this.cohesion.clear(),this.localCohesionActive=!1);for(let m=0;m<o.N;m++)if(o.alive[m]&&(o.fadeInT[m]=Math.max(0,o.fadeInT[m]-f),o.flashT[m]=Math.max(0,o.flashT[m]-f),f>0&&t.p.tailLength>0)){const x=o.trail.length/(o.N*3),T=(m*x+o.trailWriteIdx[m])*3;o.trail[T]=o.posX[m],o.trail[T+1]=o.posY[m],o.trail[T+2]=o.posZ[m],o.trailWriteIdx[m]=(o.trailWriteIdx[m]+1)%x,o.trailCount[m]=Math.min(x,o.trailCount[m]+1)}t.collisionsThisFrame.length=0}height(t,e,i){const n=Math.sin(t*.21+e*.17+i*.8)*.9,s=Math.sin(t*.24-e*.18+i+n)*1.45+Math.sin(t*.43+e*.27-i*.6)*.55,a=e*.24+Math.sin(t*.2+i*.4)*1.5;return s+Math.exp(-a*a)*1.8+Math.sin(t*1.4+e*.56+i*1.6+n)*.065}release(){const t=this.flock?.pool;t&&this.flock.generation===this.generation&&t.posX===this.liveX&&t.posY===this.liveY&&t.posZ===this.liveZ&&(t.posX.set(this.restX),t.posY.set(this.restY),t.posZ.set(this.restZ),t.trailCount.fill(0),t.trailWriteIdx.fill(0)),this.flock=void 0,this.liveX=this.liveY=this.liveZ=void 0,this.restX=this.restY=this.restZ=new Float32Array(0),this.halfWidths=new Float64Array(0),this.cohesion.clear(),this.localCohesionActive=!1,this.entryHeights=this.entryDepths=new Float64Array(0),this.trajectoryRadius=NaN,this.opacityValues=new Float32Array(0),this.cycleValues=new Uint32Array(0),this.phase=0,this.fadeFrames=0,this.distance=0,this.generation=-1}}const vi=1/120,fu=.1,Ci=21,R_=Ci**3,He=9,pu=He**3,Os=8,Za=.35,Nl=(r,t=.5)=>Number.isFinite(r)?Math.max(0,Math.min(1,r)):t,mu=r=>Number.isFinite(r)?Math.max(0,Math.min(5,r)):1,Ll=(r,t,e)=>(Math.sin(r*1.7+t*2.3+e*3.1)+Math.sin(r*2.6-t*1.9+e*1.5+13)+Math.sin(r*3.5+t*2.7-e*2.1+27))/3,On=r=>{let t=r|0;return t=Math.imul(t^t>>>16,2146121005),t=Math.imul(t^t>>>15,2221713035),((t^t>>>16)>>>0)/4294967296};let P_=class{flock;generation=-1;liveX;liveY;liveZ;xyz=new Float64Array(0);velocity=new Float64Array(0);ages=new Float64Array(0);lifetimes=new Float64Array(0);cycleIds=new Uint32Array(0);cohesion=new Float64Array(0);separation=new Float64Array(0);cells=new Uint16Array(0);counts=new Uint32Array(pu);samples=new Int32Array(pu*Os);field=new Float32Array(R_*3);output={advected:!0,x:new Float32Array(0),y:new Float32Array(0),z:new Float32Array(0),cycles:new Uint32Array(0),opacity:new Float32Array(0)};elapsed=0;remainder=0;fieldAge=1/0;neighborAge=1/0;radius=250;gain=1;energy=.5;protectedParticles;update(t,e,i=.5,n=.5,s=1,a){this.protectedParticles=a,t.resizeIfNeeded();const o=t.pool;(this.flock!==t||this.generation!==t.generation||this.liveX!==o.posX||this.liveY!==o.posY||this.liveZ!==o.posZ||this.output.x.length!==o.N)&&this.capture(t,i,s);const l=Number.isFinite(t.p.worldRadius)?Math.max(1,t.p.worldRadius):250;l!==this.radius&&(this.radius=l,this.fieldAge=this.neighborAge=1/0);const c=Number.isFinite(e)?Math.max(0,Math.min(.1,e)):0;this.remainder+=c*(.45+Nl(n)*1.1);const h=Nl(i,this.energy),d=mu(s);for(;this.remainder+1e-10>=vi;)this.remainder-=vi,this.elapsed+=vi,this.energy+=(h-this.energy)*(1-Math.exp(-vi/.18)),this.gain+=(d-this.gain)*(1-Math.exp(-vi/.15)),this.fieldAge+=vi,this.neighborAge+=vi,this.fieldAge+1e-9>=fu&&(this.refreshField(),this.fieldAge=0),this.neighborAge+1e-9>=fu&&(this.refreshNeighbors(),this.neighborAge=0),this.integrate();return this.publish(),this.output}capture(t,e,i){const n=t.pool,s=n.N;this.flock=t,this.generation=t.generation,this.liveX=n.posX,this.liveY=n.posY,this.liveZ=n.posZ,this.xyz=new Float64Array(s*3),this.velocity=new Float64Array(s*3),this.cohesion=new Float64Array(s*3),this.separation=new Float64Array(s*3),this.cells=new Uint16Array(s),this.ages=new Float64Array(s),this.lifetimes=new Float64Array(s),this.cycleIds=new Uint32Array(s),this.output.x=new Float32Array(s),this.output.y=new Float32Array(s),this.output.z=new Float32Array(s),this.output.cycles=new Uint32Array(s),this.output.opacity=new Float32Array(s).fill(1),this.radius=Number.isFinite(t.p.worldRadius)?Math.max(1,t.p.worldRadius):250;for(let a=0;a<s;a++){const o=a*3;this.xyz[o]=Number.isFinite(n.posX[a])?n.posX[a]:0,this.xyz[o+1]=Number.isFinite(n.posY[a])?n.posY[a]:0,this.xyz[o+2]=Number.isFinite(n.posZ[a])?n.posZ[a]:0,this.velocity[o]=Number.isFinite(n.velX[a])?n.velX[a]*60:0,this.velocity[o+1]=Number.isFinite(n.velY[a])?n.velY[a]*60:0,this.velocity[o+2]=Number.isFinite(n.velZ[a])?n.velZ[a]*60:0,this.lifetimes[a]=8+On(a+1^2654435769)*8,this.ages[a]=On(a+1^1013904242)*this.lifetimes[a]}this.elapsed=this.remainder=0,this.fieldAge=this.neighborAge=1/0,this.gain=mu(i),this.energy=Nl(e)}refreshField(){const t=this.radius,e=t*3/(Ci-1),i=t*1.5,n=this.elapsed;for(let s=0;s<Ci;s++)for(let a=0;a<Ci;a++)for(let o=0;o<Ci;o++){const l=(o*e-i)*.0058884,c=(a*e-i)*.0058884,h=(s*e-i)*.0058884,d=(o+a*Ci+s*Ci*Ci)*3;this.field[d]=Ll(l+n*.071,c,h),this.field[d+1]=Ll(l,c+n*.053+2.1,h),this.field[d+2]=Ll(l,c,h+n*.061-1.7)}}refreshNeighbors(){const t=this.radius,e=t*.475,i=e*He*.5,n=this.output.x.length,s=h=>Math.max(0,Math.min(He-1,Math.floor((h+i)/e)));this.counts.fill(0),this.samples.fill(-1),this.cohesion.fill(0),this.separation.fill(0);for(let h=0;h<n;h++){const d=h*3,u=s(this.xyz[d])+s(this.xyz[d+1])*He+s(this.xyz[d+2])*He**2,f=this.counts[u]++;this.cells[h]=u;const g=f<Os?f:(Math.imul(h+1,2654435761)>>>0)%(f+1);g<Os&&(this.samples[u*Os+g]=h)}const a=t*(.15+this.gain*.065),o=a*a,l=t*.032,c=l*l;for(let h=0;h<n;h++){const d=h*3,u=this.xyz[d],f=this.xyz[d+1],g=this.xyz[d+2],y=this.cells[h],v=y%He,p=Math.floor(y/He)%He,M=Math.floor(y/He**2);let m=0,x=0,T=0,_=0,S=0,A=0,w=0,b=0;for(let E=Math.max(0,M-1);E<=Math.min(He-1,M+1);E++)for(let I=Math.max(0,p-1);I<=Math.min(He-1,p+1);I++)for(let D=Math.max(0,v-1);D<=Math.min(He-1,v+1);D++){const F=D+I*He+E*He**2;if(!this.counts[F])continue;const U=Math.max(D*e-i-u,0,u-((D+1)*e-i)),L=Math.max(I*e-i-f,0,f-((I+1)*e-i)),k=Math.max(E*e-i-g,0,g-((E+1)*e-i));if(U*U+L*L+k*k>o)continue;const z=F*Os;for(let R=0;R<Os;R++){const H=this.samples[z+R];if(H<0||H===h)continue;const J=H*3;let et=this.xyz[J]-u,nt=this.xyz[J+1]-f,W=this.xyz[J+2]-g,G=et*et+nt*nt+W*W;if(G>o)continue;const $=(1-G/o)**2;if(m+=et*$,x+=nt*$,T+=W*$,_+=$,G<c){if(G<1e-12){const mt=Math.min(h,H),_t=Math.max(h,H),B=(Math.imul(mt+1,73856093)^Math.imul(_t+1,19349663))>>>0,Rt=h<H?1:-1;et=((B&1023)/511.5-1)*Rt,nt=((B>>>10&1023)/511.5-1)*Rt,W=((B>>>20&1023)/511.5-1)*Rt,G=et*et+nt*nt+W*W}const it=Math.sqrt(G),ft=(1-Math.min(1,it/l))/Math.max(1e-6,it);S-=et*ft,A-=nt*ft,w-=W*ft,b++}}}if(_>1e-8&&(this.cohesion[d]=m/_*6,this.cohesion[d+1]=x/_*6,this.cohesion[d+2]=T/_*6),b){const E=t*24/b;this.separation[d]=S*E,this.separation[d+1]=A*E,this.separation[d+2]=w*E}}}integrate(){const t=this.output.x.length,e=this.radius,i=(Ci-1)/(e*3),n=e*1.5,s=26.6*.5*60*(.5+this.energy),a=Math.exp(-vi*5),o=e*.95,l=Ci,c=l*l,h=this.field,d=this.protectedParticles?.size?this.protectedParticles:void 0;for(let u=0;u<t;u++){const f=u*3,g=this.ages[u]+vi;this.ages[u]=d?.has(u)&&g>=this.lifetimes[u]-Za?this.lifetimes[u]-Za:g,this.ages[u]>=this.lifetimes[u]&&this.renew(u);const y=this.xyz[f],v=this.xyz[f+1],p=this.xyz[f+2],M=Math.max(0,Math.min(l-1.000001,(y+n)*i)),m=Math.max(0,Math.min(l-1.000001,(v+n)*i)),x=Math.max(0,Math.min(l-1.000001,(p+n)*i)),T=Math.floor(M),_=Math.floor(m),S=Math.floor(x),A=M-T,w=m-_,b=x-S,E=(T+_*l+S*c)*3,I=y*y+v*v+p*p,D=Math.sqrt(I),F=e*.02;let U=(307200/(I+F*F)-10.64)*60/Math.max(1,D);D>e*1.05&&(U-=(D-e*1.05)*14/Math.max(1,D));for(let R=0;R<3;R++){const H=E+R,J=H+l*3,et=H+c*3,nt=J+c*3,W=(h[H]*(1-A)+h[H+3]*A)*(1-w)+(h[J]*(1-A)+h[J+3]*A)*w,G=(h[et]*(1-A)+h[et+3]*A)*(1-w)+(h[nt]*(1-A)+h[nt+3]*A)*w,$=R===0?y:R===1?v:p,it=(W*(1-b)+G*b)*s+$*U+this.cohesion[f+R]*this.gain+this.separation[f+R];this.velocity[f+R]=(this.velocity[f+R]+Math.max(-e*20,Math.min(e*20,it))*vi)*a}const L=Math.hypot(this.velocity[f],this.velocity[f+1],this.velocity[f+2]);if(L>o)for(let R=0;R<3;R++)this.velocity[f+R]*=o/L;for(let R=0;R<3;R++)this.xyz[f+R]+=this.velocity[f+R]*vi;const k=Math.hypot(this.xyz[f],this.xyz[f+1],this.xyz[f+2]),z=e*1.35;if(k>z){const R=this.xyz[f]/k,H=this.xyz[f+1]/k,J=this.xyz[f+2]/k,et=this.velocity[f]*R+this.velocity[f+1]*H+this.velocity[f+2]*J;for(let nt=0;nt<3;nt++)this.xyz[f+nt]*=z/k,et>0&&(this.velocity[f+nt]-=(nt===0?R:nt===1?H:J)*et*1.5)}Number.isFinite(k)||this.renew(u)}}renew(t){const e=++this.cycleIds[t],i=t+1^Math.imul(e,2654435769),n=t*3,s=this.radius*Math.cbrt(.45**3+On(i^608135816)*(1.05**3-.45**3)),a=On(i^2242054355)*Math.PI*2,o=On(i^320440878)*2-1,l=Math.sqrt(Math.max(0,1-o*o));this.xyz[n]=s*l*Math.cos(a),this.xyz[n+1]=s*l*Math.sin(a),this.xyz[n+2]=s*o;for(let c=0;c<3;c++)this.velocity[n+c]=(On(i^Math.imul(c+1,57701188))-.5)*36,this.cohesion[n+c]=this.separation[n+c]=0;this.ages[t]=0,this.lifetimes[t]=8+On(i^2752067618)*8}publish(){for(let t=0;t<this.output.x.length;t++){const e=t*3;this.output.x[t]=this.xyz[e],this.output.y[t]=this.xyz[e+1],this.output.z[t]=this.xyz[e+2];const i=Math.hypot(this.xyz[e],this.xyz[e+1],this.xyz[e+2]),n=Math.max(0,Math.min(1,(this.radius*1.35-i)/(this.radius*.1))),s=Math.max(0,Math.min(1,this.ages[t]/Za,(this.lifetimes[t]-this.ages[t])/Za));this.output.cycles[t]=this.cycleIds[t],this.output.opacity[t]=n*n*(3-2*n)*s*s*(3-2*s)}}reset(){this.protectedParticles=void 0,this.flock=void 0,this.generation=-1,this.liveX=this.liveY=this.liveZ=void 0,this.xyz=this.velocity=this.cohesion=this.separation=new Float64Array(0),this.cells=new Uint16Array(0),this.ages=this.lifetimes=new Float64Array(0),this.cycleIds=new Uint32Array(0),this.output.x=this.output.y=this.output.z=new Float32Array(0),this.output.cycles=new Uint32Array(0),this.output.opacity=new Float32Array(0),this.elapsed=this.remainder=0,this.fieldAge=this.neighborAge=1/0}};const D_=new V,I_=new V(0,1,0);class N_{camera;random;start=new V;target=new V;rotation=new je;step=new je;radius=700;targetRadius=700;elapsed=0;duration=2;running=!1;constructor(t,e=Math.random){this.camera=t,this.random=e}trigger(t,e,i){this.duration=Number.isFinite(t)?wi.clamp(t,.1,20):2,this.elapsed=0,this.radius=this.camera.position.length(),!Number.isFinite(this.radius)||this.radius<1e-8?(this.radius=700,this.start.set(0,0,1)):this.start.copy(this.camera.position).divideScalar(this.radius);const n=this.sample()*Math.PI*2,s=(this.sample()*2-1)*.72,a=Math.sqrt(1-s*s);if(this.target.set(Math.sin(n)*a,s,Math.cos(n)*a),this.start.dot(this.target)>.995&&this.target.copy(this.start).applyAxisAngle(I_,Math.PI/3),this.rotation.setFromUnitVectors(this.start,this.target),e===void 0&&i===void 0)this.targetRadius=this.radius;else{const o=Number.isFinite(e)?wi.clamp(e,50,5e3):450,l=Number.isFinite(i)?wi.clamp(i,50,5e3):1100,c=Math.min(o,l),h=Math.max(o,l);this.targetRadius=c+(h-c)*this.sample()}this.running=!0}update(t){if(!this.running)return!1;const e=Number.isFinite(t)?Math.max(0,t):0;this.elapsed=Math.min(this.duration,this.elapsed+e);const i=this.duration-this.elapsed<=1e-10,n=i?1:this.elapsed/this.duration;if(n>0){const s=n*n*(3-2*n);this.step.identity().slerp(this.rotation,s);const a=this.radius+(this.targetRadius-this.radius)*s;this.camera.position.copy(this.start).applyQuaternion(this.step).multiplyScalar(a)}return this.camera.lookAt(D_),this.running=!i,this.running}cancel(){this.running=!1}get active(){return this.running}sample(){const t=this.random();return Number.isFinite(t)?wi.clamp(t,0,1):.5}}const zs=(r,t,e,i)=>typeof r=="number"&&Number.isFinite(r)?Math.max(e,Math.min(i,r)):t,qa=r=>Number(r.toPrecision(12)),gu=r=>r*r*(3-2*r);function Hr(r){const t=r&&typeof r=="object"?r:{},e=zs(t.tidalBloom,1.1,0,10),i=zs(t.tidalBloomAttack,.3,.1,120),n=zs(t.tidalBloomRelease,1.2,.1,120),s=i+n,a=zs(t.tidalBloomDuration,Math.min(120,qa(s)),.1,120),o=Math.max(.05,Math.min(.95,qa(i/s))),l=zs(t.tidalBloomAttackRatio,o,.05,.95),c=qa(a*l);return{tidalBloom:e,tidalBloomMin:zs(t.tidalBloomMin,0,0,e),tidalBloomDuration:a,tidalBloomAttackRatio:l,tidalBloomAttack:c,tidalBloomRelease:qa(a-c)}}class L_{settings=Hr();strength=0;start=0;elapsed=0;currentPhase="idle";trigger(t){this.settings=Hr(t),this.active||(this.strength=this.settings.tidalBloomMin),this.start=this.strength,this.elapsed=0,this.currentPhase="attack"}update(t,e){if(!this.active)return this.strength=Hr(e).tidalBloomMin,this.strength;const i=Number.isFinite(t)&&t>0?t:0,{tidalBloom:n,tidalBloomMin:s,tidalBloomDuration:a,tidalBloomAttack:o,tidalBloomRelease:l}=this.settings;if(this.elapsed=Math.min(a,this.elapsed+i),a-this.elapsed<=1e-10)this.strength=s,this.currentPhase="idle";else if(o-this.elapsed<=1e-10){this.currentPhase="release";const c=Math.max(0,this.elapsed-o)/l;this.strength=n+(s-n)*gu(c)}else this.strength=this.start+(n-this.start)*gu(this.elapsed/o);return this.strength}reset(t){this.settings=Hr(t),this.strength=this.settings.tidalBloomMin,this.start=this.strength,this.elapsed=0,this.currentPhase="idle"}get value(){return this.strength}get active(){return this.currentPhase!=="idle"}get phase(){return this.currentPhase}}const ja=(r,t,e,i)=>typeof r=="number"&&Number.isFinite(r)?Math.max(e,Math.min(i,r)):t,vu=r=>typeof r=="string"&&r.length<=128&&(r==="all"||r==="off"||/^\/\S+$/u.test(r))?r:"all";function Nr(r){const t=r&&typeof r=="object"?r:{},e=ja(t.tidalCameraMinDistance,450,50,5e3),i=ja(t.tidalCameraMaxDistance,1100,50,5e3);return{tidalNeighborCohesion:ja(t.tidalNeighborCohesion,1,0,5),...Hr(t),tidalBloomTrigger:vu(t.tidalBloomTrigger),tidalCameraDuration:ja(t.tidalCameraDuration,2,.1,20),tidalCameraMinDistance:Math.min(e,i),tidalCameraMaxDistance:Math.max(e,i),tidalCameraTrigger:vu(t.tidalCameraTrigger)}}function jf(r,t){return r==="all"||r!=="off"&&r===t}const F_=jf,U_=`
uniform sampler2D tDiffuse;
uniform float luminosityThreshold;
uniform float smoothWidth;
uniform vec2 prefilterSourceSize;
uniform vec2 prefilterFootprint;
uniform vec2 prefilterSampleCount;
varying vec2 vUv;

vec2 pairWeights(float first, float start, float end) {
  return clamp(vec2(min(end, first + 1.) - max(start, first),
    min(end, first + 2.) - max(start, first + 1.)), 0., 1.);
}

vec2 filterAxis(float index, float start, float end, float count) {
  float extent = end - start;
  // Beyond a 6K source, retain the read budget and distribute the samples over
  // the complete footprint rather than cropping its right/bottom source area.
  if (ceil(end - .0001) - floor(start + .0001) > 16.) {
    float width = extent / count;
    return vec2(start + (index + .5) * width, width);
  }
  float first = floor(start + .0001) + index * 2.;
  vec2 weights = pairWeights(first, start, end);
  float area = weights.x + weights.y;
  return vec2(first + .5 + weights.y / max(area, .0001), area);
}

void main() {
  vec2 start = vUv * prefilterSourceSize - prefilterFootprint * .5;
  vec2 end = start + prefilterFootprint;
  vec3 color = vec3(0.);
  float weight = 0.;
  for (int y = 0; y < 8; y++) {
    if (float(y) >= prefilterSampleCount.y) break;
    vec2 row = filterAxis(float(y), start.y, end.y, prefilterSampleCount.y);
    if (row.y <= 0.) break;
    for (int x = 0; x < 8; x++) {
      if (float(x) >= prefilterSampleCount.x) break;
      vec2 column = filterAxis(float(x), start.x, end.x, prefilterSampleCount.x);
      if (column.y <= 0.) break;
      vec2 uv = vec2(column.x, row.x) / prefilterSourceSize;
      vec3 sampleColor = texture2D(tDiffuse, uv).rgb;
      float area = column.y * row.y;
      color += sampleColor * area;
      weight += area;
    }
  }
  color /= max(weight, .0001);
  float luminance = dot(color, vec3(.299, .587, .114));
  // Clamp only after integration: clamping individual bilinear reads would
  // change an outlier's energy when its footprint straddles a source texel.
  color *= min(1., 4. / max(luminance, .0001));
  luminance = min(luminance, 4.);
  float alpha = smoothstep(luminosityThreshold, luminosityThreshold + smoothWidth, luminance);
  gl_FragColor = vec4(color * alpha, 1.);
}`;class k_{constructor(t,e,i){this.renderer=t;const n=new si(1,1,{type:Fi});this.composer=new Gf(t,n),this.composer.setPixelRatio(1),this.composer.addPass(new Hf(e,i)),this.bloom=new ns(new yt(1,1),.715,.45,.005);const s=this.bloom.materialHighPassFilter.uniforms;s.prefilterSourceSize={value:new yt(1,1)},s.prefilterFootprint={value:new yt(1,1)},s.prefilterSampleCount={value:new yt(1,1)},s.smoothWidth.value=.01,this.bloom.materialHighPassFilter.fragmentShader=U_,this.composer.addPass(this.bloom),this.composer.addPass(new Xf)}composer;bloom;size=new yt;width=0;height=0;warmed=!1;resize(t,e){if(t=Math.max(1,Math.round(t)),e=Math.max(1,Math.round(e)),this.width===t&&this.height===e)return;this.width=t,this.height=e,this.composer.setSize(t,e);const i=Math.min(.5,768/Math.max(t,e));this.bloom.setSize(Math.max(1,Math.round(t*i)),Math.max(1,Math.round(e*i)));const n=this.bloom.materialHighPassFilter.uniforms,s=n.prefilterFootprint.value;s.set(t/this.bloom.renderTargetBright.width,e/this.bloom.renderTargetBright.height),n.prefilterSourceSize.value.set(t,e),n.prefilterSampleCount.value.set(Math.min(8,Math.ceil((s.x+1)/2)),Math.min(8,Math.ceil((s.y+1)/2)))}draw(t){this.renderer.getDrawingBufferSize(this.size),this.resize(this.size.x,this.size.y),this.bloom.strength=(Number.isFinite(t)?Math.max(0,Math.min(10,t)):1.1)*.1,this.bloom.enabled=this.bloom.strength>0||!this.warmed,this.composer.render(0),this.warmed=!0,this.bloom.enabled=this.bloom.strength>0}dispose(){this.bloom.materialHighPassFilter.dispose();for(const t of this.composer.passes)t.dispose();this.composer.dispose()}}const Ka=96,zn=24,O_=.1;class z_{stats={nodeCount:0,searchVisits:0,gabrielChecks:0,rebuilds:0};nodes=new Int32Array(0);candidates=new Int32Array(zn);distances=new Float64Array(zn);stackLow=new Int32Array(Ka+1);stackHigh=new Int32Array(Ka+1);stackAxis=new Uint8Array(Ka+1);pairs=[];edges=[];alphas=[];elapsed=0;generation=-1;poolSize=-1;stride=-1;distance=-1;links=-1;mode=-1;enabled=!1;update(t,e){const i=t.p,n=t.pool,s=i.myceliumEnabled&&Number.isFinite(i.myceliumLinkDist)&&i.myceliumLinkDist>.5,a=Math.max(1,Math.floor(i.myceliumNodeStride)||1),o=Math.max(1,Math.min(zn,Math.floor(i.myceliumLinkMode===1?i.myceliumKnnK:i.myceliumMaxLinks)||1));this.elapsed+=Number.isFinite(e)?Math.max(0,e):0;const c=this.generation!==t.generation||this.poolSize!==n.N||this.stride!==a||this.distance!==i.myceliumLinkDist||this.links!==o||this.mode!==i.myceliumLinkMode||this.enabled!==s||s&&this.elapsed+1e-9>=O_;return c&&(this.generation=t.generation,this.poolSize=n.N,this.stride=a,this.distance=i.myceliumLinkDist,this.links=o,this.mode=i.myceliumLinkMode,this.enabled=s,this.elapsed=0,this.pairs.length=0,this.stats.nodeCount=0,this.stats.searchVisits=0,this.stats.gabrielChecks=0,this.stats.rebuilds++,s&&this.build(t,a,o)),this.publish(t,s),c}coordinate(t,e,i){return i===0?t.pool.posX[e]:i===1?t.pool.posY[e]:t.pool.posZ[e]}partition(t,e,i,n){const s=e+i>>>1;let a=e,o=i-1;for(;a<o;){const l=this.nodes[a+o>>>1],c=this.coordinate(t,l,n);let h=a,d=o;for(;h<=d;){for(;this.coordinate(t,this.nodes[h],n)<c||this.coordinate(t,this.nodes[h],n)===c&&this.nodes[h]<l;)h++;for(;this.coordinate(t,this.nodes[d],n)>c||this.coordinate(t,this.nodes[d],n)===c&&this.nodes[d]>l;)d--;if(h<=d){const u=this.nodes[h];this.nodes[h++]=this.nodes[d],this.nodes[d--]=u}}if(s<=d)o=d;else if(s>=h)a=h;else break}s>e&&this.partition(t,e,s,(n+1)%3),s+1<i&&this.partition(t,s+1,i,(n+1)%3)}nearest(t,e,i){const n=t.pool,s=n.posX[e],a=n.posY[e],o=n.posZ[e];let l=1,c=0,h=0;for(this.stackLow[0]=0,this.stackHigh[0]=this.stats.nodeCount,this.stackAxis[0]=0;l&&h<Ka;){l--;const d=this.stackLow[l],u=this.stackHigh[l],f=this.stackAxis[l],g=d+u>>>1,y=this.nodes[g];h++;const v=n.posX[y]-s,p=n.posY[y]-a,M=n.posZ[y]-o,m=v*v+p*p+M*M;if(y!==e&&m<i&&(c<zn||m<=this.distances[c-1])){let E=Math.min(c,zn-1);for(;E>0&&(m<this.distances[E-1]||m===this.distances[E-1]&&y<this.candidates[E-1]);)this.distances[E]=this.distances[E-1],this.candidates[E]=this.candidates[E-1],E--;this.distances[E]=m,this.candidates[E]=y,c<zn&&c++}const x=f===0?-v:f===1?-p:-M,T=(f+1)%3,_=x<=0?d:g+1,S=x<=0?g:u,A=x<=0?g+1:d,w=x<=0?u:g,b=c<zn?i:this.distances[c-1];A<w&&x*x<=b&&(this.stackLow[l]=A,this.stackHigh[l]=w,this.stackAxis[l++]=T),_<S&&(this.stackLow[l]=_,this.stackHigh[l]=S,this.stackAxis[l++]=T)}return this.stats.searchVisits+=h,c}build(t,e,i){const n=t.pool,s=Math.ceil(n.N/e);this.nodes.length<s&&(this.nodes=new Int32Array(s));let a=0;for(let l=0;l<n.N;l+=e)n.alive[l]&&!n.fadeOutT[l]&&Number.isFinite(n.posX[l]+n.posY[l]+n.posZ[l])&&(this.nodes[a++]=l);if(this.stats.nodeCount=a,a<2)return;this.partition(t,0,a,0);const o=t.p.myceliumLinkDist**2;for(let l=0;l<n.N;l+=e){if(!n.alive[l]||n.fadeOutT[l]||!Number.isFinite(n.posX[l]+n.posY[l]+n.posZ[l]))continue;const c=this.nearest(t,l,o);let h=0;for(let d=0;d<c&&h<i;d++){const u=this.candidates[d];if(u<=l)continue;let f=!1;if(t.p.myceliumLinkMode===3){const g=(n.posX[l]+n.posX[u])*.5,y=(n.posY[l]+n.posY[u])*.5,v=(n.posZ[l]+n.posZ[u])*.5,p=this.distances[d]*.25;for(let M=0;M<c;M++){if(M===d)continue;this.stats.gabrielChecks++;const m=this.candidates[M],x=n.posX[m]-g,T=n.posY[m]-y,_=n.posZ[m]-v;if(x*x+T*T+_*_<p){f=!0;break}}}f||(this.pairs.push(l,u),h++)}}}publish(t,e){this.edges.length=0,this.alphas.length=0;const i=t.pool,n=t.p,s=n.myceliumLinkDist**2,a=Number.isFinite(n.myceliumFadeNear)?Math.max(0,Math.min(1,n.myceliumFadeNear)):0;if(e&&Number.isFinite(n.myceliumAlpha)&&n.myceliumAlpha>0)for(let o=0;o<this.pairs.length;o+=2){const l=this.pairs[o],c=this.pairs[o+1];if(!i.alive[l]||!i.alive[c]||i.fadeOutT[l]||i.fadeOutT[c])continue;const h=i.posX[l]-i.posX[c],d=i.posY[l]-i.posY[c],u=i.posZ[l]-i.posZ[c],f=h*h+d*d+u*u;if(!Number.isFinite(f)||f>s)continue;const g=n.myceliumAlpha*(1-Math.sqrt(f)/n.myceliumLinkDist*(1-a));g>0&&(this.edges.push(l,c),this.alphas.push(g))}t.setNetwork(this.edges,this.alphas)}}class B_{scene=new ls;flock;motion=new C_;anchors=new P_;network=new z_;notes;camera;cameraFlight;bloomEnvelope=new L_;presentation=Nr();bloom=null;constructor(t,e=Lo.particleCount){this.scene.background=new Ct(395276),this.camera=t.clone(),this.cameraFlight=new N_(this.camera),this.flock=new Fo(this.scene,this.camera),this.flock.p.particleCount=Math.max(1,Math.min(3e4,Math.round(e))),this.flock.p.autoRotate=!1,this.flock.p.vortexAmp=this.flock.p.curlAmp=0,this.flock.resizeIfNeeded(),this.notes=new w_(this.scene,this.flock)}trigger(t,e,i,n,s=!0){this.notes.trigger(t,e,i);const a=this.presentation=Nr(n??this.presentation);s&&jf(a.tidalCameraTrigger,t.track.address)&&this.triggerCamera(a),s&&F_(a.tidalBloomTrigger,t.track.address)&&this.bloomEnvelope.trigger(a)}triggerCamera(t){this.presentation=Nr(t??this.presentation);const e=this.presentation;this.cameraFlight.trigger(e.tidalCameraDuration,e.tidalCameraMinDistance,e.tidalCameraMaxDistance)}triggerBloom(t){this.presentation=Nr(t??this.presentation),this.bloomEnvelope.trigger(this.presentation)}get bloomLevel(){return this.bloomEnvelope.value}clearNotes(){this.notes.clear(),this.cameraFlight.cancel(),this.bloomEnvelope.reset(this.presentation)}reset(){this.clearNotes(),this.motion.release(),this.anchors.reset(),this.flock.reset()}update(t,e,i,n,s,a,o=t){this.flock.setConductorValue(n.energy),this.presentation=Nr(s);const l=this.anchors.update(this.flock,t,n.energy,n.motion,this.presentation.tidalNeighborCohesion,this.notes.visibleParticles);this.motion.update(this.flock,t,n.energy,n.motion,l,this.presentation.tidalNeighborCohesion),this.notes.update(i,e,this.flock.getWorldRadius()),this.cameraFlight.update(o),this.bloomEnvelope.update(o,this.presentation),this.network.update(this.flock,t),this.flock.draw({size:.625,brightness:.3+n.brightness*1.7,constantSize:!0,opacity:this.motion.opacity,deformation:this.notes,collisionFlash:!1,density:a,monochrome:1,networkPrepared:!0})}draw(t,e=this.bloomLevel){this.bloom??=new k_(t,this.scene,this.camera),this.bloom.draw(e)}}const yi=1/120,yu=.1,Ri=21,V_=Ri**3,Ee=9,wo=Ee*Ee,_i=Ee**3,Bs=8,Ao=new Uint16Array(_i+1),Kf=new Uint16Array(_i*27);{let r=0;for(let t=0;t<Ee;t++)for(let e=0;e<Ee;e++)for(let i=0;i<Ee;i++){const n=i+e*Ee+t*wo;Ao[n]=r;for(let s=Math.max(0,t-1);s<=Math.min(Ee-1,t+1);s++)for(let a=Math.max(0,e-1);a<=Math.min(Ee-1,e+1);a++)for(let o=Math.max(0,i-1);o<=Math.min(Ee-1,i+1);o++)Kf[r++]=o+a*Ee+s*wo}Ao[_i]=r}const Ja=.35,Fl=(r,t=.5)=>Number.isFinite(r)?Math.max(0,Math.min(1,r)):t,xu=r=>Number.isFinite(r)?Math.max(0,Math.min(5,r)):1,Ul=(r,t,e)=>(Math.sin(r*1.7+t*2.3+e*3.1)+Math.sin(r*2.6-t*1.9+e*1.5+13)+Math.sin(r*3.5+t*2.7-e*2.1+27))/3,Bn=r=>{let t=r|0;return t=Math.imul(t^t>>>16,2146121005),t=Math.imul(t^t>>>15,2221713035),((t^t>>>16)>>>0)/4294967296};class G_{flock;generation=-1;liveX;liveY;liveZ;xyz=new Float64Array(0);velocity=new Float64Array(0);ages=new Float64Array(0);lifetimes=new Float64Array(0);cycleIds=new Uint32Array(0);cohesion=new Float64Array(0);separation=new Float64Array(0);cells=new Uint16Array(0);counts=new Uint32Array(_i);samples=new Int32Array(_i*Bs);neighborBoundsRadius=NaN;neighborMinX=new Float64Array(_i);neighborMaxX=new Float64Array(_i);neighborMinY=new Float64Array(_i);neighborMaxY=new Float64Array(_i);neighborMinZ=new Float64Array(_i);neighborMaxZ=new Float64Array(_i);field=new Float32Array(V_*3);output={advected:!0,x:new Float32Array(0),y:new Float32Array(0),z:new Float32Array(0),cycles:new Uint32Array(0),opacity:new Float32Array(0)};elapsed=0;remainder=0;fieldAge=1/0;neighborAge=1/0;radius=250;gain=1;energy=.5;protectedParticles;update(t,e,i=.5,n=.5,s=1,a){this.protectedParticles=a,t.resizeIfNeeded();const o=t.pool;(this.flock!==t||this.generation!==t.generation||this.liveX!==o.posX||this.liveY!==o.posY||this.liveZ!==o.posZ||this.output.x.length!==o.N)&&this.capture(t,i,s);const l=Number.isFinite(t.p.worldRadius)?Math.max(1,t.p.worldRadius):250;l!==this.radius&&(this.radius=l,this.fieldAge=this.neighborAge=1/0);const c=Number.isFinite(e)?Math.max(0,Math.min(.1,e)):0;this.remainder+=c*(.45+Fl(n)*1.1);const h=Fl(i,this.energy),d=xu(s);for(;this.remainder+1e-10>=yi;)this.remainder-=yi,this.elapsed+=yi,this.energy+=(h-this.energy)*(1-Math.exp(-yi/.18)),this.gain+=(d-this.gain)*(1-Math.exp(-yi/.15)),this.fieldAge+=yi,this.neighborAge+=yi,this.fieldAge+1e-9>=yu&&(this.refreshField(),this.fieldAge=0),this.neighborAge+1e-9>=yu&&(this.refreshNeighbors(),this.neighborAge=0),this.integrate();return this.publish(),this.output}capture(t,e,i){const n=t.pool,s=n.N;this.flock=t,this.generation=t.generation,this.liveX=n.posX,this.liveY=n.posY,this.liveZ=n.posZ,this.xyz=new Float64Array(s*3),this.velocity=new Float64Array(s*3),this.cohesion=new Float64Array(s*3),this.separation=new Float64Array(s*3),this.cells=new Uint16Array(s),this.ages=new Float64Array(s),this.lifetimes=new Float64Array(s),this.cycleIds=new Uint32Array(s),this.output.x=new Float32Array(s),this.output.y=new Float32Array(s),this.output.z=new Float32Array(s),this.output.cycles=new Uint32Array(s),this.output.opacity=new Float32Array(s).fill(1),this.radius=Number.isFinite(t.p.worldRadius)?Math.max(1,t.p.worldRadius):250;for(let a=0;a<s;a++){const o=a*3;this.xyz[o]=Number.isFinite(n.posX[a])?n.posX[a]:0,this.xyz[o+1]=Number.isFinite(n.posY[a])?n.posY[a]:0,this.xyz[o+2]=Number.isFinite(n.posZ[a])?n.posZ[a]:0,this.velocity[o]=Number.isFinite(n.velX[a])?n.velX[a]*60:0,this.velocity[o+1]=Number.isFinite(n.velY[a])?n.velY[a]*60:0,this.velocity[o+2]=Number.isFinite(n.velZ[a])?n.velZ[a]*60:0,this.lifetimes[a]=8+Bn(a+1^2654435769)*8,this.ages[a]=Bn(a+1^1013904242)*this.lifetimes[a]}this.elapsed=this.remainder=0,this.fieldAge=this.neighborAge=1/0,this.gain=xu(i),this.energy=Fl(e)}refreshField(){const t=this.radius,e=t*3/(Ri-1),i=t*1.5,n=this.elapsed;for(let s=0;s<Ri;s++)for(let a=0;a<Ri;a++)for(let o=0;o<Ri;o++){const l=(o*e-i)*.0058884,c=(a*e-i)*.0058884,h=(s*e-i)*.0058884,d=(o+a*Ri+s*Ri*Ri)*3;this.field[d]=Ul(l+n*.071,c,h),this.field[d+1]=Ul(l,c+n*.053+2.1,h),this.field[d+2]=Ul(l,c,h+n*.061-1.7)}}refreshNeighbors(){const t=this.radius,e=t*.475,i=e*Ee*.5,n=this.output.x.length,s=this.xyz,a=this.counts,o=this.samples,l=this.cells,c=this.cohesion,h=this.separation,d=this.neighborMinX,u=this.neighborMaxX,f=this.neighborMinY,g=this.neighborMaxY,y=this.neighborMinZ,v=this.neighborMaxZ;if(this.neighborBoundsRadius!==t){for(let _=0;_<Ee;_++)for(let S=0;S<Ee;S++)for(let A=0;A<Ee;A++){const w=A+S*Ee+_*wo;d[w]=A*e-i,u[w]=(A+1)*e-i,f[w]=S*e-i,g[w]=(S+1)*e-i,y[w]=_*e-i,v[w]=(_+1)*e-i}this.neighborBoundsRadius=t}const p=_=>Math.max(0,Math.min(Ee-1,Math.floor((_+i)/e)));a.fill(0),o.fill(-1),c.fill(0),h.fill(0);for(let _=0;_<n;_++){const S=_*3,A=p(s[S])+p(s[S+1])*Ee+p(s[S+2])*wo,w=a[A]++;l[_]=A;const b=w<Bs?w:(Math.imul(_+1,2654435761)>>>0)%(w+1);b<Bs&&(o[A*Bs+b]=_)}const M=t*(.15+this.gain*.065),m=M*M,x=t*.032,T=x*x;for(let _=0;_<n;_++){const S=_*3,A=s[S],w=s[S+1],b=s[S+2],E=l[_],I=Ao[E+1];let D=0,F=0,U=0,L=0,k=0,z=0,R=0,H=0;for(let J=Ao[E];J<I;J++){const et=Kf[J];if(!a[et])continue;const nt=d[et],W=u[et],G=f[et],$=g[et],it=y[et],ft=v[et],mt=A<nt?nt-A:A>W?A-W:0,_t=w<G?G-w:w>$?w-$:0,B=b<it?it-b:b>ft?b-ft:0;if(mt*mt+_t*_t+B*B>m)continue;const Rt=et*Bs;for(let Pt=0;Pt<Bs;Pt++){const Xt=o[Rt+Pt];if(Xt<0||Xt===_)continue;const St=Xt*3;let Ut=s[St]-A,Dt=s[St+1]-w,It=s[St+2]-b,qt=Ut*Ut+Dt*Dt+It*It;if(qt>m)continue;const O=1-qt/m,P=O*O;if(D+=Ut*P,F+=Dt*P,U+=It*P,L+=P,qt<T){if(qt<1e-12){const rt=Math.min(_,Xt),ot=Math.max(_,Xt),wt=(Math.imul(rt+1,73856093)^Math.imul(ot+1,19349663))>>>0,ht=_<Xt?1:-1;Ut=((wt&1023)/511.5-1)*ht,Dt=((wt>>>10&1023)/511.5-1)*ht,It=((wt>>>20&1023)/511.5-1)*ht,qt=Ut*Ut+Dt*Dt+It*It}const K=Math.sqrt(qt),st=(1-Math.min(1,K/x))/Math.max(1e-6,K);k-=Ut*st,z-=Dt*st,R-=It*st,H++}}}if(L>1e-8&&(c[S]=D/L*6,c[S+1]=F/L*6,c[S+2]=U/L*6),H){const J=t*24/H;h[S]=k*J,h[S+1]=z*J,h[S+2]=R*J}}}integrate(){const t=this.output.x.length,e=this.radius,i=(Ri-1)/(e*3),n=e*1.5,s=26.6*.5*60*(.5+this.energy),a=Math.exp(-yi*5),o=e*.95,l=Ri,c=l*l,h=this.field,d=this.protectedParticles?.size?this.protectedParticles:void 0;for(let u=0;u<t;u++){const f=u*3,g=this.ages[u]+yi;this.ages[u]=d?.has(u)&&g>=this.lifetimes[u]-Ja?this.lifetimes[u]-Ja:g,this.ages[u]>=this.lifetimes[u]&&this.renew(u);const y=this.xyz[f],v=this.xyz[f+1],p=this.xyz[f+2],M=Math.max(0,Math.min(l-1.000001,(y+n)*i)),m=Math.max(0,Math.min(l-1.000001,(v+n)*i)),x=Math.max(0,Math.min(l-1.000001,(p+n)*i)),T=Math.floor(M),_=Math.floor(m),S=Math.floor(x),A=M-T,w=m-_,b=x-S,E=(T+_*l+S*c)*3,I=y*y+v*v+p*p,D=Math.sqrt(I),F=e*.02;let U=(307200/(I+F*F)-10.64)*60/Math.max(1,D);D>e*1.05&&(U-=(D-e*1.05)*14/Math.max(1,D));for(let R=0;R<3;R++){const H=E+R,J=H+l*3,et=H+c*3,nt=J+c*3,W=(h[H]*(1-A)+h[H+3]*A)*(1-w)+(h[J]*(1-A)+h[J+3]*A)*w,G=(h[et]*(1-A)+h[et+3]*A)*(1-w)+(h[nt]*(1-A)+h[nt+3]*A)*w,$=R===0?y:R===1?v:p,it=(W*(1-b)+G*b)*s+$*U+this.cohesion[f+R]*this.gain+this.separation[f+R];this.velocity[f+R]=(this.velocity[f+R]+Math.max(-e*20,Math.min(e*20,it))*yi)*a}const L=Math.hypot(this.velocity[f],this.velocity[f+1],this.velocity[f+2]);if(L>o)for(let R=0;R<3;R++)this.velocity[f+R]*=o/L;for(let R=0;R<3;R++)this.xyz[f+R]+=this.velocity[f+R]*yi;const k=Math.hypot(this.xyz[f],this.xyz[f+1],this.xyz[f+2]),z=e*1.35;if(k>z){const R=this.xyz[f]/k,H=this.xyz[f+1]/k,J=this.xyz[f+2]/k,et=this.velocity[f]*R+this.velocity[f+1]*H+this.velocity[f+2]*J;for(let nt=0;nt<3;nt++)this.xyz[f+nt]*=z/k,et>0&&(this.velocity[f+nt]-=(nt===0?R:nt===1?H:J)*et*1.5)}Number.isFinite(k)||this.renew(u)}}renew(t){const e=++this.cycleIds[t],i=t+1^Math.imul(e,2654435769),n=t*3,s=this.radius*Math.cbrt(.45**3+Bn(i^608135816)*(1.05**3-.45**3)),a=Bn(i^2242054355)*Math.PI*2,o=Bn(i^320440878)*2-1,l=Math.sqrt(Math.max(0,1-o*o));this.xyz[n]=s*l*Math.cos(a),this.xyz[n+1]=s*l*Math.sin(a),this.xyz[n+2]=s*o;for(let c=0;c<3;c++)this.velocity[n+c]=(Bn(i^Math.imul(c+1,57701188))-.5)*36,this.cohesion[n+c]=this.separation[n+c]=0;this.ages[t]=0,this.lifetimes[t]=8+Bn(i^2752067618)*8}publish(){for(let t=0;t<this.output.x.length;t++){const e=t*3;this.output.x[t]=this.xyz[e],this.output.y[t]=this.xyz[e+1],this.output.z[t]=this.xyz[e+2];const i=Math.hypot(this.xyz[e],this.xyz[e+1],this.xyz[e+2]),n=Math.max(0,Math.min(1,(this.radius*1.35-i)/(this.radius*.1))),s=Math.max(0,Math.min(1,this.ages[t]/Ja,(this.lifetimes[t]-this.ages[t])/Ja));this.output.cycles[t]=this.cycleIds[t],this.output.opacity[t]=n*n*(3-2*n)*s*s*(3-2*s)}}reset(){this.protectedParticles=void 0,this.flock=void 0,this.generation=-1,this.liveX=this.liveY=this.liveZ=void 0,this.xyz=this.velocity=this.cohesion=this.separation=new Float64Array(0),this.cells=new Uint16Array(0),this.ages=this.lifetimes=new Float64Array(0),this.cycleIds=new Uint32Array(0),this.output.x=this.output.y=this.output.z=new Float32Array(0),this.output.cycles=new Uint32Array(0),this.output.opacity=new Float32Array(0),this.elapsed=this.remainder=0,this.fieldAge=this.neighborAge=1/0}}class H_{constructor(t){this.capacity=t;const e=new Ox;e.setAttribute("position",new xt(new Float32Array(18),3)),e.setAttribute("endpoint",new xt(new Float32Array([0,1,1,0,1,0]),1)),e.setAttribute("side",new xt(new Float32Array([-1,-1,1,-1,1,1]),1));const i=s=>new xn(new Float32Array(t*s),s).setUsage($t);this.start=i(3),this.end=i(3),this.direction=i(3),this.color=i(4),this.width=i(1),e.setAttribute("lineStart",this.start),e.setAttribute("lineEnd",this.end),e.setAttribute("lineDirection",this.direction),e.setAttribute("lineColor",this.color),e.setAttribute("lineWidth",this.width),e.setDrawRange(0,6),e.instanceCount=0;const n=new se({transparent:!0,depthWrite:!1,side:Me,blending:qe,vertexShader:`attribute vec3 lineStart;attribute vec3 lineEnd;attribute vec3 lineDirection;
    attribute vec4 lineColor;attribute float lineWidth;attribute float endpoint;attribute float side;
    varying vec4 vColor;varying float vSide;
    void main(){
     vColor=lineColor;vSide=side;
     if(lineColor.a==0.){gl_Position=vec4(2.,2.,2.,1.);return;}
     vec3 world=endpoint<.5?lineStart:lineEnd;
     vec4 p=modelViewMatrix*vec4(world,1.);
     vec2 d=(modelViewMatrix*vec4(lineDirection,0.)).xy;
     p.xy+=vec2(-d.y,d.x)/max(length(d),.00001)*side*lineWidth;
     gl_Position=projectionMatrix*p;
    }`,fragmentShader:`varying vec4 vColor;varying float vSide;
    void main(){gl_FragColor=vec4(vColor.rgb,vColor.a*(exp(-vSide*vSide*7.)+exp(-vSide*vSide*3.)*.1));}`});this.mesh=new _e(e,n),this.mesh.frustumCulled=!1,this.mesh.visible=!1}mesh;start;end;direction;color;width;count=0;disposed=!1;prepared=!1;expanded;reset(){this.count=0}prepareRenderer(t){if(this.prepared||this.disposed)return;this.prepared=!0;const e=t.getContext(),i=e.getExtension("WEBGL_debug_renderer_info"),n=String(e.getParameter(i?i.UNMASKED_RENDERER_WEBGL:e.RENDERER));if(!/SwiftShader|llvmpipe|softpipe|Software Rasterizer/i.test(n))return;const s=new ie,a=this.capacity*6,o=h=>new xt(new Float32Array(a*h),h).setUsage($t);this.expanded={position:o(3),direction:o(3),color:o(4),width:o(1)};for(const[h,d]of Object.entries(this.expanded))s.setAttribute(h,d);const l=new Float32Array(a);for(let h=0;h<a;h+=6)l.set([-1,-1,1,-1,1,1],h);s.setAttribute("side",new xt(l,1));const c=new se({transparent:!0,depthWrite:!1,side:Me,blending:qe,vertexShader:`attribute vec3 direction;attribute vec4 color;attribute float width;attribute float side;
    varying vec4 vColor;varying float vSide;
    void main(){vColor=color;vSide=side;if(color.a==0.){gl_Position=vec4(2.,2.,2.,1.);return;}
     vec4 p=modelViewMatrix*vec4(position,1.);vec2 d=(modelViewMatrix*vec4(direction,0.)).xy;
     p.xy+=vec2(-d.y,d.x)/max(length(d),.00001)*side*width;gl_Position=projectionMatrix*p;}`,fragmentShader:this.mesh.material.fragmentShader});for(let h=0;h<this.count;h++){const d=h*3,u=h*4;this.writeExpanded(h,this.start.array.subarray(d,d+3),this.end.array.subarray(d,d+3),this.direction.array.subarray(d,d+3),this.color.array[u],this.color.array[u+1],this.color.array[u+2],this.color.array[u+3],this.width.array[h])}this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh.geometry=s,this.mesh.material=c,this.publish()}writeExpanded(t,e,i,n,s,a,o,l,c){const h=this.expanded,d=h.position.array,u=h.direction.array,f=h.color.array,g=h.width.array,y=n?.[0]??i[0]-e[0],v=n?.[1]??i[1]-e[1],p=n?.[2]??i[2]-e[2];for(let M=0;M<6;M++){const m=t*6+M,x=m*3,T=m*4,_=M===1||M===2||M===4?i:e;d[x]=_[0],d[x+1]=_[1],d[x+2]=_[2],u[x]=y,u[x+1]=v,u[x+2]=p,f[T]=s,f[T+1]=a,f[T+2]=o,f[T+3]=l,g[m]=c}}append(t,e,i,n,s,a,o){if(this.disposed||this.count>=this.capacity)return!1;if(this.expanded)return this.writeExpanded(this.count++,t,e,void 0,i,n,s,a,o),!0;const l=this.count++,c=l*3,h=l*4,d=this.start.array,u=this.end.array,f=this.direction.array,g=this.color.array;return d[c]=t[0],d[c+1]=t[1],d[c+2]=t[2],u[c]=e[0],u[c+1]=e[1],u[c+2]=e[2],f[c]=e[0]-t[0],f[c+1]=e[1]-t[1],f[c+2]=e[2]-t[2],g[h]=i,g[h+1]=n,g[h+2]=s,g[h+3]=a,this.width.array[l]=o,!0}publish(){if(this.expanded?this.mesh.geometry.setDrawRange(0,this.count*6):this.mesh.geometry.instanceCount=this.count,this.mesh.visible=this.count>0,!!this.count){if(this.expanded){for(const t of Object.values(this.expanded))t.clearUpdateRanges(),t.addUpdateRange(0,this.count*6*t.itemSize),t.needsUpdate=!0;return}for(const t of[this.start,this.end,this.direction,this.color,this.width])t.clearUpdateRanges(),t.addUpdateRange(0,this.count*t.itemSize),t.needsUpdate=!0}}clear(){this.reset(),this.publish()}dispose(){this.disposed||(this.clear(),this.disposed=!0,this.mesh.geometry.dispose(),this.mesh.material.dispose())}}const kl=384,ii=24,X_=98304,Qa=r=>(Math.imul(r+1,2654435761)>>>0)/4294967296,to=r=>Number.isFinite(r[0]+r[1]+r[2]);function W_(r=!1){return new se({transparent:!0,depthWrite:!1,side:Me,blending:qe,vertexShader:`attribute vec4 color; varying vec4 vColor;
 ${r?"":"attribute vec3 direction;attribute float side;attribute float width;varying float vSide;"}
 void main(){vec4 p=modelViewMatrix*vec4(position,1.);
 ${r?"":"vec2 d=(modelViewMatrix*vec4(direction,0.)).xy;p.xy+=vec2(-d.y,d.x)/max(length(d),.00001)*side*width;vSide=side;"}
 gl_Position=projectionMatrix*p;vColor=color;}`,fragmentShader:`varying vec4 vColor;${r?"":"varying float vSide;"}
 void main(){gl_FragColor=vec4(vColor.rgb,vColor.a${r?"":"*(exp(-vSide*vSide*7.)+exp(-vSide*vSide*3.)*.1)"});}`})}function Y_(r,t=!1){const e=new ie;for(const[i,n]of[["position",3],["color",4],...t?[]:[["direction",3],["side",1],["width",1]]])e.setAttribute(i,new xt(new Float32Array(r*n),n).setUsage($t));if(!t)for(let i=0;i<r;i+=6)e.getAttribute("side").array.set([-1,-1,1,-1,1,1],i);return e.setDrawRange(0,0),e}const cn=r=>Math.max(0,Math.min(1,Number.isFinite(r)?r:0)),Mu=r=>{const t=cn(r);return t*t*(3-2*t)};class $_{constructor(t,e){this.scene=t,this.local=e,this.group.name="tidal-morph-geometry",this.outlines.name="tidal-morph-outlines",this.fills.name="tidal-morph-fills",this.outlines.frustumCulled=this.fills.frustumCulled=!1,this.group.add(this.fills,this.outlines),t.add(this.group),this.clear()}stats={cells:0,contacts:0,segments:0,filledCells:0};group=new qn;ribbons=new H_(X_);outlines=this.ribbons.mesh;fills=new _e(Y_(kl*ii*6,!0),W_(!0));glyphs=new Map;contactShapes=new Map;identities=new WeakMap;nextIdentity=0;claimed=new Uint8Array(32768);sourceLight=new Float32Array(32768*4);a=new Float64Array(3);b=new Float64Array(3);sa=new Float64Array(3);sb=new Float64Array(3);sample=new Float64Array(3);center=new Float64Array(3);basis=new Float64Array(12);lineVertex=0;fillVertex=0;disposed=!1;publish(t,e){if(t.geometry.setDrawRange(0,e),t.visible=e>0,!!e)for(const i of["position","color","direction","width"]){const n=t.geometry.getAttribute(i);n&&(n.clearUpdateRanges(),n.addUpdateRange(0,e*n.itemSize),n.needsUpdate=!0)}}line(t,e,i,n,s){this.ribbons.append(this.a,this.b,t,e,i,n,s)&&(this.lineVertex+=6)}face(t,e,i,n){if(this.fillVertex+3>kl*ii*6)return;const s=this.fills.geometry.getAttribute("position"),a=this.fills.geometry.getAttribute("color");for(let o=0;o<3;o++){const l=o===0?this.center:o===1?this.a:this.b,c=this.fillVertex++;s.setXYZ(c,l[0],l[1],l[2]),a.setXYZW(c,t,e,i,n)}}deform(t,e){if(e){const i=e.sample(t[0],t[1],t[2]);to(i)&&(t[0]=i[0],t[1]=i[1],t[2]=i[2])}}id(t){let e=this.identities.get(t);return e===void 0&&(e=++this.nextIdentity,this.identities.set(t,e)),e}glyph(t){let e=this.glyphs.get(t);return e||(e={cell:t,age:0,gone:0,live:!0,target:new Float64Array(ii*6),source:new Float64Array(ii*6),slots:new Int32Array(ii).fill(-1),ids:new Int32Array(ii*2).fill(-1),opacity:new Float32Array(ii),alpha:new Float32Array(ii),center:new Float64Array(3),weight:0,r:0,g:0,b:0,cellOpacity:0},this.glyphs.set(t,e),e)}prepareRenderer(t){this.ribbons.prepareRenderer(t)}update(t,e,i,n,s,a,o=1,l=!0,c,h,d=1/60){if(this.disposed)return;if(!l){this.clear();return}const u=Number.isFinite(d)?Math.max(0,d):0,f=cn(n),g=cn(a),y=Number.isFinite(o)?Math.max(0,Math.min(8,o)):1,v=Ye(c),p=v.tidalNoteBrightness*1.75,M=p*(1+1.25*(1-f));this.lineVertex=this.fillVertex=0,this.ribbons.reset(),this.claimed.fill(0),this.sourceLight.fill(0);let m=0,x=0,T=0;for(const _ of this.glyphs.values())_.live=!1;for(let _=0;_<Math.min(kl,t.length);_++){const S=t[_];if(!to([S.x,S.y,S.z])||!Number.isFinite(S.radius+S.opacity)||S.radius<=0||S.opacity<=0)continue;const A=h?.cell(S.id),w=A?.weight??0;if(Qa(S.id)>=g&&w<=.01&&!s?.visibleParticles?.has(S.id))continue;const b=this.glyph(S);b.live=!0,b.age+=u,b.gone=0,b.weight=w,b.r=A?.r??0,b.g=A?.g??0,b.b=A?.b??0,b.cellOpacity=cn(S.opacity),i.center(_,1,b.center),this.deform(b.center,s);const E=Math.max(.01,S.radius),I=this.basis;if(I.set([S.x,S.y,S.z,1,0,0,0,1,0,0,0,1]),s){let D=s.sample(S.x,S.y,S.z);if(to(D))for(let F=0;F<3;F++)I[F]=D[F];for(let F=0;F<3;F++)if(D=s.sample(S.x+(F===0?E:0),S.y+(F===1?E:0),S.z+(F===2?E:0)),to(D))for(let U=0;U<3;U++)I[3+F*3+U]=(D[U]-I[U])/E}for(let D=0;D<ii;D++){const F=D*6;for(let z=0;z<2;z++){i.vertex(_,(D+z)%ii,1,this.sample);const R=this.sample[0]-S.x,H=this.sample[1]-S.y,J=this.sample[2]-S.z;for(let et=0;et<3;et++)b.target[F+z*3+et]=I[et]+I[3+et]*R+I[6+et]*H+I[9+et]*J}let U=!1,L=-1;this.local?(U=this.local.pair(_,D,this.sa,this.sb),L=this.local.sourceSlot(_,D),b.opacity[D]=this.local.opacity(_,D),b.alpha[D]=this.local.alpha(_,D)):i.sourcePair?(L=_*ii+D,U=i.sourcePair(L,this.sa,this.sb),b.opacity[D]=U?i.sourceOpacity?.(L)??1:0,b.alpha[D]=U?i.sourceAlpha?.(L)??.35:0):(i.vertex(_,D,0,this.sa),i.vertex(_,(D+1)%ii,0,this.sb),U=!0,b.opacity[D]=1,b.alpha[D]=.35),U||(this.sa.set([S.x,S.y,S.z]),this.sb.set(this.sa)),this.deform(this.sa,s),this.deform(this.sb,s),b.source.set(this.sa,F),b.source.set(this.sb,F+3),b.slots[D]=U?L:-1;const k=L>=0?i.sourceIDs?.(L):void 0;b.ids[D*2]=k?.[0]??-1,b.ids[D*2+1]=k?.[1]??-1}m++}for(const[_,S]of this.glyphs){if(!S.live&&(S.gone+=u,S.gone>=.2)){this.glyphs.delete(_);continue}const A=this.local?Mu(S.age/.35):1,w=S.live?1:1-Mu(S.gone/.2),b=A*w,E=S.weight*w,I=.8*(1-E),D=(I+S.r*E*p)*y,F=(I+S.g*E*p)*y,U=(I+S.b*E*p)*y;for(let L=0;L<ii;L++){const k=L*6,z=S.slots[L],R=z>=0?i.sourceIDs?.(z):void 0,H=R&&(R[0]===S.ids[L*2]&&R[1]===S.ids[L*2+1]||R[1]===S.ids[L*2]&&R[0]===S.ids[L*2+1]);if(!S.live&&H&&i.sourcePair?.(z,this.sa,this.sb)){if(R[0]!==S.ids[L*2])for(let $=0;$<3;$++){const it=this.sa[$];this.sa[$]=this.sb[$],this.sb[$]=it}this.deform(this.sa,s),this.deform(this.sb,s);const G=1-Math.exp(-u/.06);for(let $=0;$<3;$++)S.source[k+$]+=(this.sa[$]-S.source[k+$])*G,S.source[k+3+$]+=(this.sb[$]-S.source[k+3+$])*G;S.opacity[L]=i.sourceOpacity?.(z)??1,S.alpha[L]=i.sourceAlpha?.(z)??.35}z>=0&&z<this.claimed.length&&(!i.sourceIDs||H)&&E>this.sourceLight[z*4+3]&&this.sourceLight.set([S.r,S.g,S.b,E],z*4);const J=cn(S.opacity[L]),et=cn(S.alpha[L]/.35);for(let G=0;G<3;G++){const $=(S.source[k+G]+S.source[k+3+G])*.5,it=$+(S.source[k+G]-$)*J,ft=$+(S.source[k+3+G]-$)*J,mt=$+(S.target[k+G]-$)*b,_t=$+(S.target[k+3+G]-$)*b;this.a[G]=it+(mt-it)*f,this.b[G]=ft+(_t-ft)*f,this.center[G]=(this.a[G]+this.b[G])*.5+(S.center[G]-(this.a[G]+this.b[G])*.5)*f*b}const nt=S.cellOpacity*(.5+E*.45)*f*b,W=v.tidalCircleWidth*(1+E*.7)*(et*(1-f*b)+f*b);this.line(D,F,U,nt,W),E>.01&&this.face(S.r*p*y,S.g*p*y,S.b*p*y,S.cellOpacity*E*.22*f*b)}S.live&&E>.01&&x++}for(const _ of this.contactShapes.values())_.live=!1;for(const _ of e){const S=t[_.a],A=t[_.b];if(!S||!A||S===A||!this.glyphs.get(S)?.live||!this.glyphs.get(A)?.live)continue;const w=this.id(S),b=this.id(A),E=w<b?`${w}/${b}`:`${b}/${w}`,I=h?.contact(S.id,A.id),D=I?.weight??0;if(D<=.01&&(Qa(S.id)>=g||Qa(A.id)>=g))continue;let F=this.contactShapes.get(E);const U=!F;F||(F={a:new Float64Array(3),b:new Float64Array(3),age:0,gone:0,live:!0,visibility:0,opacity:0,weight:0,r:0,g:0,blue:0},this.contactShapes.set(E,F)),F.live=!0,F.age+=u,F.gone=0;const L=U?1:1-Math.exp(-u/.08),k=this.glyphs.get(S).center,z=this.glyphs.get(A).center;for(let R=0;R<3;R++)F.a[R]+=(k[R]-F.a[R])*L,F.b[R]+=(z[R]-F.b[R])*L;F.opacity=Math.min(S.opacity,A.opacity),F.weight=D,F.r=I?.r??0,F.g=I?.g??0,F.blue=I?.b??0,T++}for(const[_,S]of this.contactShapes){if(!S.live&&(S.gone+=u,S.gone>=.35)){this.contactShapes.delete(_);continue}S.visibility+=((S.live?1:0)-S.visibility)*(1-Math.exp(-u/.06));const A=this.local?S.visibility:1,w=S.weight*A;for(let I=0;I<3;I++){const D=(S.a[I]+S.b[I])*.5;this.a[I]=D+(S.a[I]-D)*f*A,this.b[I]=D+(S.b[I]-D)*f*A}const b=.8*(1-w),E=Math.min(1,S.opacity*(.5+w*.45)*1.55)*f*A;this.line((b+S.r*w*p)*y*1.3,(b+S.g*w*p)*y*1.3,(b+S.blue*w*p)*y*1.3,E,v.tidalLinkWidth*(1+w*.375))}if(i.sourcePair)for(let _=0;_<Math.min(32768,i.sourceSlots??0);_++){const S=_*4,A=this.sourceLight[S+3];if(Qa(_)>=g&&A<=.01||!i.sourcePair(_,this.sa,this.sb)||Math.hypot(this.sa[0]-this.sb[0],this.sa[1]-this.sb[1],this.sa[2]-this.sb[2])<1e-5)continue;this.deform(this.sa,s),this.deform(this.sb,s);const w=cn(i.sourceOpacity?.(_)??1),b=cn((i.sourceAlpha?.(_)??.35)/.35);for(let I=0;I<3;I++){const D=(this.sa[I]+this.sb[I])*.5;this.a[I]=D+(this.sa[I]-D)*w*(1-f),this.b[I]=D+(this.sb[I]-D)*w*(1-f)}const E=.8*(1-A);this.line((E+this.sourceLight[S]*A*M)*y,(E+this.sourceLight[S+1]*A*M)*y,(E+this.sourceLight[S+2]*A*M)*y,(.5+A*.45)*w*(1-f),v.tidalCircleWidth*(1+A*.7)*b*(1-.4*A*(1-f)))}this.ribbons.publish(),this.publish(this.fills,this.fillVertex),this.group.visible=this.lineVertex>0,Object.assign(this.stats,{cells:m,contacts:T,segments:this.lineVertex/6,filledCells:x})}clear(){this.ribbons.clear(),this.publish(this.fills,0),this.group.visible=!1,this.glyphs.clear(),this.contactShapes.clear(),Object.assign(this.stats,{cells:0,contacts:0,segments:0,filledCells:0})}dispose(){this.disposed||(this.clear(),this.disposed=!0,this.scene.remove(this.group),this.ribbons.dispose(),this.fills.geometry.dispose(),this.fills.material.dispose())}}const _u=96,Vn=24,Z_=.1;class Ol{stats={nodeCount:0,searchVisits:0,gabrielChecks:0,rebuilds:0};nodes=new Int32Array(0);candidates=new Int32Array(Vn);distances=new Float64Array(Vn);stack=new Int32Array(_u+1);left=new Int32Array(0);right=new Int32Array(0);axes=new Uint8Array(0);nodeX=new Float64Array(0);nodeY=new Float64Array(0);nodeZ=new Float64Array(0);pairs=[];edges=[];alphas=[];elapsed=0;generation=-1;poolSize=-1;stride=-1;distance=-1;links=-1;mode=-1;enabled=!1;update(t,e){const i=t.p,n=t.pool,s=i.myceliumEnabled&&Number.isFinite(i.myceliumLinkDist)&&i.myceliumLinkDist>.5,a=Math.max(1,Math.floor(i.myceliumNodeStride)||1),o=Math.max(1,Math.min(Vn,Math.floor(i.myceliumLinkMode===1?i.myceliumKnnK:i.myceliumMaxLinks)||1));this.elapsed+=Number.isFinite(e)?Math.max(0,e):0;const c=this.generation!==t.generation||this.poolSize!==n.N||this.stride!==a||this.distance!==i.myceliumLinkDist||this.links!==o||this.mode!==i.myceliumLinkMode||this.enabled!==s||s&&this.elapsed+1e-9>=Z_;return c&&(this.generation=t.generation,this.poolSize=n.N,this.stride=a,this.distance=i.myceliumLinkDist,this.links=o,this.mode=i.myceliumLinkMode,this.enabled=s,this.elapsed=0,this.pairs.length=0,this.stats.nodeCount=0,this.stats.searchVisits=0,this.stats.gabrielChecks=0,this.stats.rebuilds++,s&&this.build(t,a,o)),this.publish(t,s),c}partition(t,e,i,n){const s=t.pool,a=n===0?s.posX:n===1?s.posY:s.posZ,o=this.nodes,l=e+i>>>1;let c=e,h=i-1;for(;c<h;){const d=o[c+h>>>1],u=a[d];let f=c,g=h;for(;f<=g;){for(;a[o[f]]<u||a[o[f]]===u&&o[f]<d;)f++;for(;a[o[g]]>u||a[o[g]]===u&&o[g]>d;)g--;if(f<=g){const y=o[f];o[f++]=o[g],o[g--]=y}}if(l<=g)h=g;else if(l>=f)c=f;else break}l>e&&this.partition(t,e,l,(n+1)%3),l+1<i&&this.partition(t,l+1,i,(n+1)%3)}nearest(t,e,i){const n=t.pool,s=n.posX,a=n.posY,o=n.posZ,l=s[e],c=a[e],h=o[e],d=this.stack,u=this.nodes,f=this.candidates,g=this.distances,y=this.left,v=this.right,p=this.axes,M=this.nodeX,m=this.nodeY,x=this.nodeZ;let T=1,_=0,S=0;for(d[0]=this.stats.nodeCount>>>1;T&&S<_u;){const A=d[--T],w=u[A],b=p[A];S++;const E=M[A]-l,I=m[A]-c,D=x[A]-h,F=E*E+I*I+D*D;if(w!==e&&F<i&&(_<Vn||F<=g[_-1])){let R=Math.min(_,Vn-1);for(;R>0&&(F<g[R-1]||F===g[R-1]&&w<f[R-1]);)g[R]=g[R-1],f[R]=f[R-1],R--;g[R]=F,f[R]=w,_<Vn&&_++}const U=b===0?-E:b===1?-I:-D,L=U<=0?y[A]:v[A],k=U<=0?v[A]:y[A],z=_<Vn?i:g[_-1];k>=0&&U*U<=z&&(d[T++]=k),L>=0&&(d[T++]=L)}return this.stats.searchVisits+=S,_}prepareTree(t,e,i,n){const s=e+i>>>1,a=this.nodes[s],o=t.pool,l=(n+1)%3;return this.axes[s]=n,this.nodeX[s]=o.posX[a],this.nodeY[s]=o.posY[a],this.nodeZ[s]=o.posZ[a],this.left[s]=e<s?this.prepareTree(t,e,s,l):-1,this.right[s]=s+1<i?this.prepareTree(t,s+1,i,l):-1,s}build(t,e,i){const n=t.pool,s=n.posX,a=n.posY,o=n.posZ,l=Math.ceil(n.N/e);this.nodes.length<l&&(this.nodes=new Int32Array(l),this.left=new Int32Array(l),this.right=new Int32Array(l),this.axes=new Uint8Array(l),this.nodeX=new Float64Array(l),this.nodeY=new Float64Array(l),this.nodeZ=new Float64Array(l));let c=0;for(let y=0;y<n.N;y+=e)n.alive[y]&&!n.fadeOutT[y]&&Number.isFinite(s[y]+a[y]+o[y])&&(this.nodes[c++]=y);if(this.stats.nodeCount=c,c<2)return;this.partition(t,0,c,0),this.prepareTree(t,0,c,0);const h=t.p.myceliumLinkDist**2,d=t.p.myceliumLinkMode===3,u=this.candidates,f=this.distances;let g=0;for(let y=0;y<n.N;y+=e){if(!n.alive[y]||n.fadeOutT[y]||!Number.isFinite(s[y]+a[y]+o[y]))continue;const v=this.nearest(t,y,h);let p=0;for(let M=0;M<v&&p<i;M++){const m=u[M];if(m<=y)continue;let x=!1;if(d){const T=(s[y]+s[m])*.5,_=(a[y]+a[m])*.5,S=(o[y]+o[m])*.5,A=f[M]*.25,w=f[M]*(1+64*Number.EPSILON);let b=M+1;for(;b<v&&f[b]<=w;)b++;for(let E=0;E<b;E++){if(E===M)continue;g++;const I=u[E],D=s[I]-T,F=a[I]-_,U=o[I]-S;if(D*D+F*F+U*U<A){x=!0;break}}}x||(this.pairs.push(y,m),p++)}}this.stats.gabrielChecks=g}publish(t,e){this.edges.length=0,this.alphas.length=0;const i=t.pool,n=t.p,s=n.myceliumLinkDist**2,a=Number.isFinite(n.myceliumFadeNear)?Math.max(0,Math.min(1,n.myceliumFadeNear)):0;if(e&&Number.isFinite(n.myceliumAlpha)&&n.myceliumAlpha>0)for(let o=0;o<this.pairs.length;o+=2){const l=this.pairs[o],c=this.pairs[o+1];if(!i.alive[l]||!i.alive[c]||i.fadeOutT[l]||i.fadeOutT[c])continue;const h=i.posX[l]-i.posX[c],d=i.posY[l]-i.posY[c],u=i.posZ[l]-i.posZ[c],f=h*h+d*d+u*u;if(!Number.isFinite(f)||f>s)continue;const g=n.myceliumAlpha*(1-Math.sqrt(f)/n.myceliumLinkDist*(1-a));g>0&&(this.edges.push(l,c),this.alphas.push(g))}t.setNetwork(this.edges,this.alphas)}}const q_=["myceliumLinkMode","myceliumNodeStride","myceliumLinkDist","myceliumMaxLinks","myceliumKnnK","myceliumAlpha","myceliumFadeNear"],j_=r=>Object.is(r,-0)?"-0":String(r);function Jf(r){let t=r.myceliumEnabled?"1":"0";for(const e of q_)t+="|"+j_(r[e]);return t}const Qf=r=>!!r.myceliumEnabled&&Number.isFinite(r.myceliumLinkDist)&&r.myceliumLinkDist>.5;function K_(r,t,e){const i=r.p,n=r.pool,s=n.N,a={myceliumEnabled:i.myceliumEnabled,myceliumLinkMode:i.myceliumLinkMode,myceliumNodeStride:i.myceliumNodeStride,myceliumLinkDist:i.myceliumLinkDist,myceliumMaxLinks:i.myceliumMaxLinks,myceliumKnnK:i.myceliumKnnK,myceliumAlpha:i.myceliumAlpha,myceliumFadeNear:i.myceliumFadeNear};return{type:"rebuild",id:t,epoch:e,generation:r.generation,count:s,configKey:Jf(a),settings:a,pool:{N:s,posX:n.posX.slice(0,s),posY:n.posY.slice(0,s),posZ:n.posZ.slice(0,s),alive:n.alive.slice(0,s),fadeOutT:n.fadeOutT.slice(0,s)}}}function J_(r){const t=r.pool;return[t.posX.buffer,t.posY.buffer,t.posZ.buffer,t.alive.buffer,t.fadeOutT.buffer]}function Q_(r,t,e,i){e.length=i.length=0;const n=r.pool,s=r.p,a=s.myceliumLinkDist**2,o=Number.isFinite(s.myceliumFadeNear)?Math.max(0,Math.min(1,s.myceliumFadeNear)):0;if(Qf(s)&&Number.isFinite(s.myceliumAlpha)&&s.myceliumAlpha>0)for(let l=0;l+1<t.length;l+=2){const c=t[l],h=t[l+1];if(!n.alive[c]||!n.alive[h]||n.fadeOutT[c]||n.fadeOutT[h])continue;const d=n.posX[c]-n.posX[h],u=n.posY[c]-n.posY[h],f=n.posZ[c]-n.posZ[h],g=d*d+u*u+f*f;if(!Number.isFinite(g)||g>a)continue;const y=s.myceliumAlpha*(1-Math.sqrt(g)/s.myceliumLinkDist*(1-o));y>0&&(e.push(c,h),i.push(y))}r.setNetwork(e,i)}const bu=()=>({nodeCount:0,searchVisits:0,gabrielChecks:0,rebuilds:0}),tb=["nodeCount","searchVisits","gabrielChecks","rebuilds"];class Su{constructor(t={}){this.options=t}stats=bu();edges=[];alphas=[];network=new Ol;worker;identity;pending;inFlight;pairs=new Int32Array(0);elapsed=0;epoch=0;job=0;syncBase=0;disposed=!1;sink;shim={generation:0,p:{},pool:{},setNetwork:(t,e)=>{this.edges.length=this.alphas.length=0;for(let i=0;i<t.length;i++)this.edges.push(t[i]);for(let i=0;i<e.length;i++)this.alphas.push(e[i]);this.sink?.setNetwork(this.edges,this.alphas)}};get asyncEnabled(){return!!this.worker}enableAsync(){if(this.disposed)return!1;if(this.worker)return!0;if(!this.options.WorkerCtor&&typeof Worker>"u")return!1;try{const t=this.options.WorkerCtor?new this.options.WorkerCtor(new URL("data:video/mp2t;base64,aW1wb3J0IHtTb3VyY2VHcmFwaENvbXB1dGVyfSBmcm9tICcuL1NvdXJjZUdyYXBoUHJvdG9jb2wudHMnOwppbXBvcnQgdHlwZSB7U291cmNlR3JhcGhSZXF1ZXN0LFNvdXJjZUdyYXBoUmVzcG9uc2V9IGZyb20gJy4vU291cmNlR3JhcGhQcm90b2NvbC50cyc7Cgpjb25zdCBjb21wdXRlcj1uZXcgU291cmNlR3JhcGhDb21wdXRlcigpOwpjb25zdCBzY29wZT1nbG9iYWxUaGlzIGFzIHVua25vd24gYXMge29ubWVzc2FnZTooZXZlbnQ6TWVzc2FnZUV2ZW50PFNvdXJjZUdyYXBoUmVxdWVzdD4pPT52b2lkO3Bvc3RNZXNzYWdlKG1lc3NhZ2U6U291cmNlR3JhcGhSZXNwb25zZSx0cmFuc2Zlcj86QXJyYXlCdWZmZXJbXSk6dm9pZDt9OwpzY29wZS5vbm1lc3NhZ2U9KHtkYXRhfSk9PnsKICB0cnl7CiAgICBjb25zdCByZXN1bHQ9Y29tcHV0ZXIuY29tcHV0ZShkYXRhKTtzY29wZS5wb3N0TWVzc2FnZShyZXN1bHQsW3Jlc3VsdC5lZGdlcy5idWZmZXIscmVzdWx0LmFscGhhcy5idWZmZXJdIGFzIEFycmF5QnVmZmVyW10pOwogIH1jYXRjaChlcnJvcil7CiAgICBzY29wZS5wb3N0TWVzc2FnZSh7dHlwZTonZXJyb3InLGlkOmRhdGEuaWQsZXBvY2g6ZGF0YS5lcG9jaCxnZW5lcmF0aW9uOmRhdGEuZ2VuZXJhdGlvbixjb3VudDpkYXRhLmNvdW50LGNvbmZpZ0tleTpkYXRhLmNvbmZpZ0tleSwKICAgICAgbWVzc2FnZTplcnJvciBpbnN0YW5jZW9mIEVycm9yP2Vycm9yLm1lc3NhZ2U6U3RyaW5nKGVycm9yKX0pOwogIH0KfTsK",import.meta.url),{type:"module"}):new Worker(new URL(""+new URL("SourceGraph.worker-BXVuu23m.js",import.meta.url).href,import.meta.url),{type:"module"});return this.worker=t,this.identity=void 0,this.pending=void 0,this.inFlight=void 0,this.epoch++,this.elapsed=0,t.onmessage=e=>{this.worker===t&&this.receive(e.data)},t.onerror=e=>{e.preventDefault?.(),this.worker===t&&this.failWorker()},t.onmessageerror=()=>{this.worker===t&&this.failWorker()},!0}catch{return!1}}update(t,e){if(!this.worker)return this.synchronous(t,e);const i=t.pool,n=Jf(t.p),s=this.identity;if(!s||s.flock!==t||s.generation!==t.generation||s.count!==i.N||s.configKey!==n||s.posX!==i.posX||s.posY!==i.posY||s.posZ!==i.posZ||s.alive!==i.alive||s.fadeOutT!==i.fadeOutT)return this.epoch++,this.pending=void 0,this.elapsed=0,this.identity={flock:t,generation:t.generation,count:i.N,configKey:n,posX:i.posX,posY:i.posY,posZ:i.posZ,alive:i.alive,fadeOutT:i.fadeOutT},this.restartSynchronous(),this.synchronous(t,0),this.pairs=Int32Array.from(this.edges),!0;let o=!1;if(this.pending){const l=this.pending;this.pending=void 0,this.current(l)&&(this.pairs=l.edges,this.stats.nodeCount=l.stats.nodeCount,this.stats.searchVisits=l.stats.searchVisits,this.stats.gabrielChecks=l.stats.gabrielChecks,this.stats.rebuilds++,o=!0)}if(this.elapsed=Math.min(.1,this.elapsed+(Number.isFinite(e)?Math.max(0,e):0)),Qf(t.p)&&this.elapsed+1e-9>=.1&&!this.inFlight){const l=K_(t,++this.job,this.epoch);this.inFlight=l,this.elapsed=0;try{this.worker.postMessage(l,J_(l))}catch{return this.failWorker(),this.synchronous(t,0)}}return Q_(t,this.pairs,this.edges,this.alphas),o}synchronous(t,e){this.sink=t,this.shim.p=t.p,this.shim.pool=t.pool,this.shim.generation=t.generation;const i=this.network.update(this.shim,e);return Object.assign(this.stats,this.network.stats),this.stats.rebuilds+=this.syncBase,i}restartSynchronous(){this.syncBase=this.stats.rebuilds,this.network=new Ol}current(t){const e=this.identity;return!!e&&t.epoch===this.epoch&&t.generation===e.generation&&t.count===e.count&&t.configKey===e.configKey}receive(t){if(!(!t||t.id!==this.inFlight?.id)&&(this.inFlight=void 0,!!this.current(t))){if(t.type!=="result"||!(t.edges instanceof Int32Array)||!(t.alphas instanceof Float64Array)||t.edges.length!==t.alphas.length*2||!t.stats||!tb.every(e=>Number.isFinite(t.stats[e]))){this.failWorker();return}this.pending=t}}failWorker(){this.worker?.terminate(),this.worker=void 0,this.pending=void 0,this.inFlight=void 0,this.identity=void 0,this.epoch++,this.restartSynchronous()}reset(){this.worker?.terminate(),this.worker=void 0,this.pending=void 0,this.inFlight=void 0,this.identity=void 0,this.epoch++,this.network=new Ol,this.syncBase=0,this.elapsed=0,this.pairs=new Int32Array(0),this.edges.length=this.alphas.length=0,this.sink=void 0,this.disposed=!1,Object.assign(this.stats,bu())}dispose(){this.reset(),this.disposed=!0}}const re=24,Lr=384,Hi=13,Fr=96,wu=4096,ta=Math.PI*2,zl=r=>{let t=Math.imul(r>>>0^2654435769,2246822507);return t=Math.imul(t^t>>>13,3266489909),((t^t>>>16)>>>0)/4294967296},Bl=(r,t,e)=>Number.isFinite(r+t+e)&&Math.max(Math.abs(r),Math.abs(t),Math.abs(e))<1e7,Au=r=>Number.isFinite(r)?Math.max(0,Math.min(1,r)):0,eb=Float64Array.from({length:re},(r,t)=>Math.cos(t/re*ta)),ib=Float64Array.from({length:re},(r,t)=>Math.sin(t/re*ta));class nb{stats={cells:0,searchVisits:0,rebuilt:0};cache=new Map;retained=new Set;source=new Float64Array(Lr*re*3);destination=new Float64Array(Lr*re*3);sourceCenters=new Float64Array(Lr*3);targetCenters=new Float64Array(Lr*3);heads=new Int32Array(wu).fill(-1);next=new Int32Array(0);gridX=new Int32Array(0);gridY=new Int32Array(0);gridZ=new Int32Array(0);candidates=new Int32Array(Hi-1);distances=new Float64Array(Hi-1);nodeIDs=new Int32Array(Hi);parents=new Int32Array(Hi);reached=new Uint8Array(Hi);treeDistance=new Float64Array(Hi);walk=new Int32Array(re+1);matrix=new te;angles=new hi;generation=-1;flock;width=54;update(t,e,i,n=1/60){this.stats.searchVisits=this.stats.rebuilt=0,(this.flock!==e||this.generation!==e.generation)&&(this.cache.clear(),this.flock=e,this.generation=e.generation);const s=e.pool;this.next.length!==s.N&&(this.next=new Int32Array(s.N),this.gridX=new Int32Array(s.N),this.gridY=new Int32Array(s.N),this.gridZ=new Int32Array(s.N),this.cache.clear()),this.width=Number.isFinite(e.p.myceliumLinkDist)?Math.max(1,Math.min(500,e.p.myceliumLinkDist*.75)):54;let a=!1;const o=Math.min(Lr,t.length),l=this.retained;l.clear();for(let c=0;c<o;c++){const h=t[c];l.add(h);let d=this.cache.get(h),u=!1;if(!d||!this.valid(d,e,i,h)){const A=d;a||(this.index(e),a=!0),d=this.correspondence(h,e,i),A&&(d.handoff=A.current.slice(),d.elapsed=0,u=!0),this.cache.set(h,d),this.stats.rebuilt++}d.handoff&&!u&&(d.elapsed=Math.min(.2,d.elapsed+(Number.isFinite(n)?Math.max(0,n):0)));const f=d.handoff?Math.min(1,d.elapsed/.2):1,g=f*f*(3-2*f),y=Bl(h.x,h.y,h.z),v=y?h.x:0,p=y?h.y:0,M=y?h.z:0,m=Number.isFinite(h.radius)?Math.max(0,Math.min(1e4,h.radius)):0;let x=0,T=0,_=0;for(let A=0;A<re;A++){const w=d.ids[A],b=(c*re+A)*3,E=w>=0&&w<s.N&&Bl(s.posX[w],s.posY[w],s.posZ[w]);let I=E?s.posX[w]:v,D=E?s.posY[w]:p,F=E?s.posZ[w]:M;const U=A*3;d.handoff&&(I=d.handoff[U]+(I-d.handoff[U])*g,D=d.handoff[U+1]+(D-d.handoff[U+1])*g,F=d.handoff[U+2]+(F-d.handoff[U+2])*g),d.current[U]=I,d.current[U+1]=D,d.current[U+2]=F,this.source[b]=I,this.source[b+1]=D,this.source[b+2]=F,x+=I,T+=D,_+=F,this.destination[b]=v+m*d.ring[U],this.destination[b+1]=p+m*d.ring[U+1],this.destination[b+2]=M+m*d.ring[U+2]}f>=1&&(d.handoff=void 0);const S=c*3;this.sourceCenters[S]=x/re,this.sourceCenters[S+1]=T/re,this.sourceCenters[S+2]=_/re,this.targetCenters[S]=v,this.targetCenters[S+1]=p,this.targetCenters[S+2]=M}for(const c of this.cache.keys())l.has(c)||this.cache.delete(c);this.stats.cells=o}vertex(t,e,i,n){if(!Number.isInteger(t)||t<0||t>=this.stats.cells)return n[0]=n[1]=n[2]=0,n;const s=Number.isFinite(e)?(Math.trunc(e)%re+re)%re:0,a=(t*re+s)*3,o=Au(i);for(let l=0;l<3;l++)n[l]=this.source[a+l]+(this.destination[a+l]-this.source[a+l])*o;return n}center(t,e,i){if(!Number.isInteger(t)||t<0||t>=this.stats.cells)return i[0]=i[1]=i[2]=0,i;const n=t*3,s=Au(e);for(let a=0;a<3;a++)i[a]=this.sourceCenters[n+a]+(this.targetCenters[n+a]-this.sourceCenters[n+a])*s;return i}clear(){this.cache.clear(),this.retained.clear(),this.stats.cells=this.stats.searchVisits=this.stats.rebuilt=0,this.flock=void 0,this.generation=-1}bucket(t,e,i){return(Math.imul(t,73856093)^Math.imul(e,19349663)^Math.imul(i,83492791))&wu-1}alive(t,e){const i=t.pool;return Number.isInteger(e)&&e>=0&&e<i.N&&!!i.alive[e]&&i.fadeOutT[e]<=0&&Bl(i.posX[e],i.posY[e],i.posZ[e])}index(t){this.heads.fill(-1);const e=t.pool;for(let i=0;i<e.N;i++)if(this.alive(t,i)){const n=Math.floor(e.posX[i]/this.width),s=Math.floor(e.posY[i]/this.width),a=Math.floor(e.posZ[i]/this.width),o=this.bucket(n,s,a);this.gridX[i]=n,this.gridY[i]=s,this.gridZ[i]=a,this.next[i]=this.heads[o],this.heads[o]=i}}valid(t,e,i,n){const s=e.pool,a=this.alive(e,n.id)?n.id:-1,o=a>=0?s.posX[a]:Number.isFinite(n.x)?n.x:0,l=a>=0?s.posY[a]:Number.isFinite(n.y)?n.y:0,c=a>=0?s.posZ[a]:Number.isFinite(n.z)?n.z:0,h=(this.width*8/3)**2,d=(this.width*4/3)**2;for(let u=0;u<re;u++){const f=t.ids[u];if(!this.alive(e,f)||i&&t.cycles[u]!==i[f]>>>0||(s.posX[f]-o)**2+(s.posY[f]-l)**2+(s.posZ[f]-c)**2>h)return!1;const g=t.ids[(u+1)%re];if(g>=0&&g<s.N&&(s.posX[f]-s.posX[g])**2+(s.posY[f]-s.posY[g])**2+(s.posZ[f]-s.posZ[g])**2>d)return!1}return!0}correspondence(t,e,i){const n=e.pool,s=this.alive(e,t.id)?t.id:-1,a=s>=0?n.posX[s]:Number.isFinite(t.x)?t.x:0,o=s>=0?n.posY[s]:Number.isFinite(t.y)?t.y:0,l=s>=0?n.posZ[s]:Number.isFinite(t.z)?t.z:0,c=(this.width*4/3)**2,h=Math.floor(a/this.width),d=Math.floor(o/this.width),u=Math.floor(l/this.width);let f=0,g=0;for(let A=0;A<2&&g<Fr;A++)for(let w=-1;w<=1&&g<Fr;w++)for(let b=-1;b<=1&&g<Fr;b++)for(let E=-1;E<=1&&g<Fr;E++){if((E===0&&b===0&&w===0)!=(A===0))continue;const I=h+E,D=d+b,F=u+w;for(let U=this.heads[this.bucket(I,D,F)];U>=0&&g<Fr;U=this.next[U]){if(g++,U===t.id||this.gridX[U]!==I||this.gridY[U]!==D||this.gridZ[U]!==F)continue;const L=(n.posX[U]-a)**2+(n.posY[U]-o)**2+(n.posZ[U]-l)**2;if(L>c||f===Hi-1&&L>=this.distances[f-1])continue;let k=Math.min(f,Hi-2);for(;k>0&&(L<this.distances[k-1]||L===this.distances[k-1]&&U<this.candidates[k-1]);)this.candidates[k]=this.candidates[k-1],this.distances[k]=this.distances[k-1],k--;this.candidates[k]=U,this.distances[k]=L,f=Math.min(Hi-1,f+1)}}this.stats.searchVisits+=g;const y=this.alive(e,t.id)?t.id:f?this.candidates[0]:-1;this.nodeIDs[0]=y;for(let A=0;A<f;A++)this.nodeIDs[A+1]=this.candidates[A];const v=f+1;this.parents.fill(-1),this.reached.fill(0),this.treeDistance.fill(1/0),this.treeDistance[0]=0;for(let A=0;A<v;A++){let w=-1,b=1/0;for(let E=0;E<v;E++)!this.reached[E]&&this.treeDistance[E]<b&&(w=E,b=this.treeDistance[E]);if(w<0)break;this.reached[w]=1;for(let E=0;E<v;E++)if(!this.reached[E]){const I=this.nodeIDs[w],D=this.nodeIDs[E],F=I>=0&&D>=0?(n.posX[I]-n.posX[D])**2+(n.posY[I]-n.posY[D])**2+(n.posZ[I]-n.posZ[D])**2:0;F<this.treeDistance[E]&&(this.treeDistance[E]=F,this.parents[E]=w)}}let p=1;this.walk[0]=y;const M=A=>{for(let w=1;w<v;w++)this.parents[w]===A&&(this.walk[p++]=this.nodeIDs[w],M(w),this.walk[p++]=this.nodeIDs[A])};M(0);const m=Math.max(1,p-1),x=new Int32Array(re),T=new Uint32Array(re);for(let A=0;A<re;A++){const w=this.walk[Math.floor(A*m/re)];x[A]=w,T[A]=w>=0?(i?.[w]??0)>>>0:0}this.angles.set(zl(t.id+17)*ta,zl(t.id+91)*ta,zl(t.id+311)*ta),this.matrix.makeRotationFromEuler(this.angles);const _=this.matrix.elements,S=new Float64Array(re*3);for(let A=0;A<re;A++){const w=A*3,b=eb[A],E=ib[A];S[w]=_[0]*b+_[4]*E,S[w+1]=_[1]*b+_[5]*E,S[w+2]=_[2]*b+_[6]*E}return{ids:x,cycles:T,ring:S,current:new Float64Array(re*3),elapsed:.2}}}const oe=32768,Xi=.2,Vl=8192,Eu=32,Tu=(r,t,e)=>Number.isFinite(r+t+e)&&Math.max(Math.abs(r),Math.abs(t),Math.abs(e))<1e7;class sb{target=new nb;network=new Su;asyncSourceRequested=!1;flock;generation=-1;poolSize=-1;byPair=new Map;retiredByPair=new Map;publishedEdges=new Int32Array(oe*2);publishedLength=-1;pendingEdges=[];freeHeads=new Int32Array(Vl).fill(-1);freeNext=new Int32Array(oe);freeX=new Int32Array(oe);freeY=new Int32Array(oe);freeZ=new Int32Array(oe);freeMidX=new Float64Array(oe);freeMidY=new Float64Array(oe);freeMidZ=new Float64Array(oe);collapsedFree=[];reverseSlot=!1;matchSum=0;allocated=0;drawnSlots=0;ids=new Int32Array(oe*2).fill(-1);cycles=new Uint32Array(oe*2);cycleKnown=new Uint8Array(oe);active=new Uint8Array(oe);seen=new Uint8Array(oe);changed=new Uint8Array(oe);elapsed=new Float64Array(oe).fill(Xi);from=new Float64Array(oe*6);current=new Float64Array(oe*6);collapse=new Float64Array(oe*3);alphas=new Float64Array(oe);borrowedIDs=new Int32Array(2);particleOpacity;slotOpacity=new Float64Array(oe).fill(1);fromOpacity=new Float64Array(oe).fill(1);fromAlpha=new Float64Array(oe);get sourceSlots(){return this.drawnSlots}get sourceEdges(){return this.byPair.size}get stats(){return this.target.stats}enableAsyncSource(){return this.asyncSourceRequested=!0,this.network.enableAsync()}sourceSlotForPair(t,e){return!Number.isInteger(t)||!Number.isInteger(e)||t<0||e<0||t>=this.poolSize||e>=this.poolSize||t===e?-1:this.byPair.get(Math.min(t,e)*this.poolSize+Math.max(t,e))??-1}prepareSource(t,e){(this.flock!==t||this.generation!==t.generation||this.poolSize!==t.pool.N)&&(this.clear(),this.flock=t,this.generation=t.generation,this.poolSize=t.pool.N),this.network.update(t,e);const i=t.networkEdges,n=t.pool.N;if(this.publishedLength===i.length&&this.byPair.size*2===i.length){let o=!0;for(let l=0;l<i.length;l++)if(i[l]!==this.publishedEdges[l]){o=!1;break}if(o)return}this.publishedEdges.length<i.length&&(this.publishedEdges=new Int32Array(i.length)),this.publishedEdges.set(i),this.publishedLength=i.length,this.pendingEdges.length=0,this.seen.fill(0,0,this.allocated);for(let o=0;o+1<i.length;o+=2){const l=Math.min(i[o],i[o+1])*n+Math.max(i[o],i[o+1]),c=this.byPair.get(l);c!==void 0?this.seen[c]=1:this.pendingEdges.push(o)}const s=this.allocated===0;for(const[o,l]of this.byPair)if(!this.seen[l]){this.byPair.delete(o),this.retiredByPair.set(o,l),this.active[l]=0,this.startHandoff(l);const c=l*6,h=l*3;for(let d=0;d<3;d++)this.collapse[h+d]=(this.current[c+d]+this.current[c+3+d])*.5}const a=Math.max(.1,t.p.myceliumLinkDist*.45);this.pendingEdges.length&&this.indexFree(a);for(let o=0;o<this.pendingEdges.length;o++){const l=this.pendingEdges[o],c=i[l],h=i[l+1],d=Math.min(c,h)*n+Math.max(c,h);let u=this.byPair.get(d);if(u!==void 0)continue;const f=this.retiredByPair.get(d),g=f!==void 0&&!this.active[f]&&this.elapsed[f]<Xi&&Math.min(this.ids[f*2],this.ids[f*2+1])*n+Math.max(this.ids[f*2],this.ids[f*2+1])===d&&this.match(t,c,h,f)<=a*a;let y=!1,v=!1;if(g)u=f,y=!0,v=this.reverseSlot;else{this.retiredByPair.delete(d);const x=this.localSlot(t,c,h,a);y=x>=0,v=this.reverseSlot,y&&(u=x)}if(u===void 0){for(;this.collapsedFree.length;){const x=this.collapsedFree.pop();if(!this.active[x]){u=x;break}}if(u===void 0)if(this.allocated<oe)u=this.allocated++;else continue}const p=this.ids[u*2],M=this.ids[u*2+1],m=Math.min(p,M)*n+Math.max(p,M);if(this.retiredByPair.get(m)===u&&this.retiredByPair.delete(m),this.byPair.set(d,u),this.active[u]=1,this.cycleKnown[u]=0,this.ids[u*2]=y&&v?h:c,this.ids[u*2+1]=y&&v?c:h,y)this.startHandoff(u);else{const x=t.pool,T=u*6;if(this.slotOpacity[u]=1,s)this.current[T]=x.posX[c],this.current[T+1]=x.posY[c],this.current[T+2]=x.posZ[c],this.current[T+3]=x.posX[h],this.current[T+4]=x.posY[h],this.current[T+5]=x.posZ[h],this.elapsed[u]=Xi,this.changed[u]=0;else{for(let _=0;_<3;_++){const S=_===0?(x.posX[c]+x.posX[h])*.5:_===1?(x.posY[c]+x.posY[h])*.5:(x.posZ[c]+x.posZ[h])*.5;this.current[T+_]=this.current[T+3+_]=S}this.alphas[u]=0,this.startHandoff(u)}}}}update(t,e,i,n=1/60){this.target.update(t,e,i,n);const s=e.pool,a=Number.isFinite(n)?Math.max(0,n):0;let o=0;for(let l=0;l<this.allocated;l++){const c=l*6,h=l*3,d=this.ids[l*2],u=this.ids[l*2+1],f=this.active[l]>0;if(!f&&this.elapsed[l]>=Xi)continue;f&&i&&(this.cycleKnown[l]&&(this.cycles[l*2]!==i[d]>>>0||this.cycles[l*2+1]!==i[u]>>>0)&&this.startHandoff(l),this.cycles[l*2]=i[d]>>>0,this.cycles[l*2+1]=i[u]>>>0,this.cycleKnown[l]=1),this.changed[l]||(this.elapsed[l]=Math.min(Xi,this.elapsed[l]+a)),this.changed[l]=0;const g=Math.min(1,this.elapsed[l]/Xi),y=g*g*(3-2*g),v=f&&d>=0&&u>=0&&d<s.N&&u<s.N&&Tu(s.posX[d],s.posY[d],s.posZ[d])&&Tu(s.posX[u],s.posY[u],s.posZ[u]);for(let p=0;p<2;p++)for(let M=0;M<3;M++){const m=p===0?d:u,x=v?M===0?s.posX[m]:M===1?s.posY[m]:s.posZ[m]:this.collapse[h+M],T=c+p*3+M;this.current[T]=g>=1?x:this.from[T]+(x-this.from[T])*y}if((f||g<1)&&(o=l+1),v){this.sourceOpacity(l);const p=Math.hypot(s.posX[d]-s.posX[u],s.posY[d]-s.posY[u],s.posZ[d]-s.posZ[u]),M=e.p.myceliumLinkDist,m=Number.isFinite(e.p.myceliumFadeNear)?Math.max(0,Math.min(1,e.p.myceliumFadeNear)):0,x=Math.max(0,e.p.myceliumAlpha*(1-p/M*(1-m)));this.alphas[l]=g>=1?x:this.fromAlpha[l]+(x-this.fromAlpha[l])*y}}this.drawnSlots=o}sourcePair(t,e,i){if(!Number.isInteger(t)||t<0||t>=this.allocated)return!1;const n=t*6;for(let s=0;s<3;s++)e[s]=this.current[n+s],i[s]=this.current[n+3+s];return!0}sourceIDs(t){if(!(!Number.isInteger(t)||t<0||t>=this.allocated||!this.active[t]))return this.borrowedIDs[0]=this.ids[t*2],this.borrowedIDs[1]=this.ids[t*2+1],this.borrowedIDs}setParticleOpacity(t){this.particleOpacity=t}sourceOpacity(t){if(!Number.isInteger(t)||t<0||t>=this.allocated)return 0;if(!this.particleOpacity)return 1;if(!this.active[t])return this.slotOpacity[t];const e=this.particleOpacity[this.ids[t*2]],i=this.particleOpacity[this.ids[t*2+1]],n=Number.isFinite(e)?Math.max(0,Math.min(1,e)):1,s=Number.isFinite(i)?Math.max(0,Math.min(1,i)):1,a=Math.min(n,s),o=Math.min(1,this.elapsed[t]/Xi),l=o*o*(3-2*o),c=o>=1?a:this.fromOpacity[t]+(a-this.fromOpacity[t])*l;return this.slotOpacity[t]=c,c}sourceAlpha(t){return Number.isInteger(t)&&t>=0&&t<this.allocated?this.alphas[t]:0}vertex(t,e,i,n){return this.target.vertex(t,e,i,n)}center(t,e,i){return this.target.center(t,e,i)}clear(){this.target.clear(),this.network.dispose(),this.network=new Su,this.asyncSourceRequested&&this.network.enableAsync(),this.byPair.clear(),this.retiredByPair.clear(),this.freeHeads.fill(-1),this.collapsedFree.length=0,this.publishedLength=-1,this.pendingEdges.length=0,this.active.fill(0),this.changed.fill(0),this.cycleKnown.fill(0),this.slotOpacity.fill(1),this.fromOpacity.fill(1),this.alphas.fill(0),this.fromAlpha.fill(0),this.elapsed.fill(Xi),this.ids.fill(-1),this.allocated=this.drawnSlots=0,this.flock=void 0,this.generation=this.poolSize=-1}startHandoff(t){const e=t*6;for(let i=0;i<6;i++)this.from[e+i]=this.current[e+i];this.fromOpacity[t]=this.slotOpacity[t],this.fromAlpha[t]=this.alphas[t],this.elapsed[t]=0,this.changed[t]=1}freeBucket(t,e,i){return(Math.imul(t,73856093)^Math.imul(e,19349663)^Math.imul(i,83492791))&Vl-1}indexFree(t){this.freeHeads.fill(-1),this.collapsedFree.length=0;for(let e=0;e<this.allocated;e++)if(!this.active[e]){const i=e*6,n=(this.current[i]+this.current[i+3])*.5,s=(this.current[i+1]+this.current[i+4])*.5,a=(this.current[i+2]+this.current[i+5])*.5,o=Math.floor(n/t),l=Math.floor(s/t),c=Math.floor(a/t);this.elapsed[e]>=Xi&&this.current[i]===this.current[i+3]&&this.current[i+1]===this.current[i+4]&&this.current[i+2]===this.current[i+5]&&this.collapsedFree.push(e);const h=this.freeBucket(o,l,c);this.freeMidX[e]=n,this.freeMidY[e]=s,this.freeMidZ[e]=a,this.freeX[e]=o,this.freeY[e]=l,this.freeZ[e]=c,this.freeNext[e]=this.freeHeads[h],this.freeHeads[h]=e}}localSlot(t,e,i,n){const s=t.pool,a=(s.posX[e]+s.posX[i])*.5,o=(s.posY[e]+s.posY[i])*.5,l=(s.posZ[e]+s.posZ[i])*.5,c=Math.floor(a/n),h=Math.floor(o/n),d=Math.floor(l/n),u=Math.imul(c-1,73856093),f=Math.imul(c,73856093),g=Math.imul(c+1,73856093);let y=-1,v=n*n,p=1/0,M=1/0,m=!1,x=v+1e-6*(1+v);for(let T=0;T<2;T++)for(let _=-1;_<=1;_++){const S=Math.imul(d+_,83492791);for(let A=-1;A<=1;A++){const w=Math.imul(h+A,19349663)^S;for(let b=-1;b<=1;b++){if((b===0&&A===0&&_===0)!=(T===0))continue;const E=c+b,I=h+A,D=d+_;let F=0;const U=E*n,L=(E+1)*n,k=I*n,z=(I+1)*n,R=D*n,H=(D+1)*n,J=a<U?U-a:a>L?a-L:0,et=o<k?k-o:o>z?o-z:0,nt=l<R?R-l:l>H?l-H:0;if(J*J+et*et+nt*nt>x)continue;const W=((b<0?u:b>0?g:f)^w)&Vl-1;for(let G=this.freeHeads[W];G>=0&&F++<Eu;G=this.freeNext[G]){if(this.active[G]||this.freeX[G]!==E||this.freeY[G]!==I||this.freeZ[G]!==D)continue;const $=this.freeMidX[G]-a,it=this.freeMidY[G]-o,ft=this.freeMidZ[G]-l;if($*$+it*it+ft*ft>x)continue;const mt=this.match(t,e,i,G,v),_t=this.matchSum;if(mt<v||mt===v&&_t<=p){const B=((_+1)*9+(A+1)*3+b+1)*Eu+F;(mt<v||_t<p||y>=0&&B<M)&&(y=G,v=mt,p=_t,M=B,m=this.reverseSlot,x=v+1e-6*(1+v))}}}}}return this.reverseSlot=m,y}match(t,e,i,n,s=1/0){const a=t.pool,o=n*6,l=a.posX[e],c=a.posY[e],h=a.posZ[e],d=this.current[o],u=this.current[o+1],f=this.current[o+2],g=this.current[o+3],y=this.current[o+4],v=this.current[o+5];let p=(d-l)**2,M=(g-l)**2;if(p>s&&M>s||(p+=(u-c)**2,M+=(y-c)**2,p>s&&M>s)||(p+=(f-h)**2,M+=(v-h)**2,p>s&&M>s))return 1/0;const m=a.posX[i],x=a.posY[i],T=a.posZ[i];if(p>s){const b=(d-m)**2+(u-x)**2+(f-T)**2;return this.reverseSlot=!0,this.matchSum=b+M,Math.max(b,M)}if(M>s){const b=(g-m)**2+(y-x)**2+(v-T)**2;return this.reverseSlot=!1,this.matchSum=p+b,Math.max(p,b)}const _=(g-m)**2+(y-x)**2+(v-T)**2,S=(d-m)**2+(u-x)**2+(f-T)**2,A=Math.max(p,_),w=Math.max(S,M);return this.reverseSlot=w<A,this.matchSum=this.reverseSlot?S+M:p+_,this.reverseSlot?w:A}}const Cu=(r,t,e)=>Math.max(t,Math.min(e,r));class rb{value=0;target=0;start=0;elapsed=0;duration=3;running=!1;get active(){return this.running}set(t){Number.isFinite(t)&&(this.value=this.target=this.start=Cu(t,0,1),this.elapsed=0,this.running=!1)}trigger(t=3){this.start=this.value,this.target=this.target>=.5?0:1,this.duration=Number.isFinite(t)?Cu(t,.1,30):3,this.elapsed=0,this.running=this.start!==this.target}update(t){if(!this.running)return!1;this.elapsed=Math.min(this.duration,this.elapsed+(Number.isFinite(t)?Math.max(0,t):0));const e=this.duration-this.elapsed<=1e-10,i=e?1:this.elapsed/this.duration,n=i*i*(3-2*i);return this.value=this.start+(this.target-this.start)*n,this.running=!e,this.running}reset(t=0){this.set(Number.isFinite(t)?t:0)}}const Gl=384,eo=24,Vs=r=>Number.isFinite(r[0]+r[1]+r[2]);class ab{stats={segments:0};valid=new Int32Array(Gl);lit=new Int32Array(Gl);a=new Float64Array(3);b=new Float64Array(3);targetA=new Float64Array(3);targetB=new Float64Array(3);update(t,e,i,n,s,a){this.stats.segments=0;const o=t.getObjectByName("slewn-mycelium");if(!o?.isMesh)return;const l=o.geometry.getAttribute("position"),c=o.geometry.getAttribute("direction");if(!(l instanceof xt)||!(c instanceof xt))return;const h=Math.max(0,Math.floor(o.geometry.drawRange.start)),d=Math.max(0,Math.min(l.count,c.count)-h),u=Math.floor(Math.min(d,o.geometry.drawRange.count)/6);this.stats.segments=u;const f=Number.isFinite(a)?Math.max(0,Math.min(1,a)):0,g=o.geometry.getAttribute("color"),y=o.geometry.getAttribute("width");if(u&&f<1&&g instanceof xt&&y instanceof xt){const m=1+1.25*(1-f),x=1-.4*(1-f),T=Math.min(h+u*6,g.count,y.count);for(let _=h;_<T;_++){const S=_*g.itemSize;g.array[S]*=m,g.array[S+1]*=m,g.array[S+2]*=m,y.array[_*y.itemSize]*=x}for(const _ of[g,y])_.clearUpdateRanges(),_.addUpdateRange(h*_.itemSize,(T-h)*_.itemSize),_.needsUpdate=!0}if(!u||!f)return;let v=0,p=0;for(let m=0;m<Math.min(Gl,e.length);m++){const x=e[m];!Number.isFinite(x.x+x.y+x.z+x.radius+x.opacity)||x.radius<=0||x.opacity<=0||(this.valid[v++]=m,(n.cell(x.id)?.weight??0)>.01&&(this.lit[p++]=m))}if(!v)return;let M=-1;for(let m=0;m<u;m++){const x=h+m*6;if(this.a[0]=l.getX(x),this.a[1]=l.getY(x),this.a[2]=l.getZ(x),this.b[0]=l.getX(x+1),this.b[1]=l.getY(x+1),this.b[2]=l.getZ(x+1),!Vs(this.a)||!Vs(this.b))continue;if(!p&&(m%eo===0||M<0)){let b=1/0;M=this.valid[0];const E=(this.a[0]+this.b[0])*.5,I=(this.a[1]+this.b[1])*.5,D=(this.a[2]+this.b[2])*.5;for(let F=0;F<v;F++){const U=this.valid[F],L=e[U],k=(L.x-E)**2+(L.y-I)**2+(L.z-D)**2;k<b&&(b=k,M=U)}}const T=p?this.lit[Math.floor(m/eo)%p]:M;if(i.vertex(T,m%eo,1,this.targetA),i.vertex(T,(m+1)%eo,1,this.targetB),!Vs(this.targetA)||!Vs(this.targetB))continue;let _=s.sample(this.targetA[0],this.targetA[1],this.targetA[2]);Vs(_)&&(this.targetA[0]=_[0],this.targetA[1]=_[1],this.targetA[2]=_[2]),_=s.sample(this.targetB[0],this.targetB[1],this.targetB[2]),Vs(_)&&(this.targetB[0]=_[0],this.targetB[1]=_[1],this.targetB[2]=_[2]);for(let b=0;b<3;b++)this.a[b]+=(this.targetA[b]-this.a[b])*f,this.b[b]+=(this.targetB[b]-this.b[b])*f;const S=this.b[0]-this.a[0],A=this.b[1]-this.a[1],w=this.b[2]-this.a[2];for(let b=0;b<6;b++){const E=b===1||b===2||b===4?this.b:this.a;l.setXYZ(x+b,E[0],E[1],E[2]),c.setXYZ(x+b,S,A,w)}}l.clearUpdateRanges(),l.addUpdateRange(h*3,u*18),l.needsUpdate=!0,c.clearUpdateRanges(),c.addUpdateRange(h*3,u*18),c.needsUpdate=!0}}const ob=384,Hl=24,Ur=96,xi=32768,Ru=8192,Pu=.15,io=(r,t,e)=>Number.isFinite(r+t+e)&&Math.max(Math.abs(r),Math.abs(t),Math.abs(e))<1e7,no=(r,t=1)=>Number.isFinite(r)?Math.max(0,Math.min(1,r)):t,lb=r=>r*r*(3-2*r);class cb{stats={cells:0,bindings:0,searchVisits:0,rebuilt:0,indexedEdges:0};cache=new Map;retained=new Set;current=[];claimed=new Set;get claimedSourceSlots(){return this.claimed}claimedPairs=new Set;byPair=new Map;heads=new Int32Array(Ru).fill(-1);next=new Int32Array(xi);gridX=new Int32Array(xi);gridY=new Int32Array(xi);gridZ=new Int32Array(xi);idsA=new Int32Array(xi);idsB=new Int32Array(xi);slots=new Int32Array(xi);midX=new Float64Array(xi);midY=new Float64Array(xi);midZ=new Float64Array(xi);flock;generation=-1;size=-1;width=40;limit=40;sourceA=new Float64Array(3);sourceB=new Float64Array(3);update(t,e,i,n,s=1/60,a){(this.flock!==e||this.generation!==e.generation||this.size!==e.pool.N)&&(this.clear(),this.flock=e,this.generation=e.generation,this.size=e.pool.N),this.stats.searchVisits=this.stats.rebuilt=this.stats.bindings=0;const o=this.retained;o.clear();for(let u=0;u<Math.min(ob,t.length);u++)o.add(t[u]);for(const u of this.cache.keys())o.has(u)||this.cache.delete(u);this.limit=Number.isFinite(e.p.myceliumLinkDist)?Math.max(0,e.p.myceliumLinkDist):0,this.width=Math.max(1,this.limit);let l=!1;for(const u of o)if(!this.cache.has(u)){l=!0;break}l||!i.sourceSlotForPair?this.index(e,i):this.stats.indexedEdges=0,this.claimed.clear(),this.claimedPairs.clear();for(const u of this.cache.values())for(const f of u.bindings)f&&!f.retired&&this.claimedPairs.add(f.key);this.current.length=0;const c=Number.isFinite(s)?Math.max(0,s):0,h=1-Math.exp(-c/.06),d=1-Math.exp(-c/.12);for(const u of o){let f=this.cache.get(u);f||(f=this.birth(u,e,n),this.cache.set(u,f),this.stats.rebuilt++),this.current.push(f);for(const g of f.bindings)g&&(this.stats.bindings++,this.follow(g,u,e,i,n,c,h,d,a))}this.stats.cells=this.current.length}pair(t,e,i,n){const s=this.state(t),a=this.binding(t,e);if(!a){const o=s?.cell,l=o&&io(o.x,o.y,o.z);return i[0]=n[0]=l?o.x:0,i[1]=n[1]=l?o.y:0,i[2]=n[2]=l?o.z:0,!1}for(let o=0;o<3;o++)i[o]=a.current[o],n[o]=a.current[o+3];return!0}sourceSlot(t,e){return this.binding(t,e)?.slot??-1}opacity(t,e){return this.binding(t,e)?.opacity??0}alpha(t,e){return this.binding(t,e)?.alpha??0}clear(){this.cache.clear(),this.retained.clear(),this.current.length=0,this.claimed.clear(),this.claimedPairs.clear(),this.byPair.clear(),this.heads.fill(-1),this.flock=void 0,this.generation=this.size=-1,Object.assign(this.stats,{cells:0,bindings:0,searchVisits:0,rebuilt:0,indexedEdges:0})}state(t){return Number.isInteger(t)&&t>=0?this.current[t]:void 0}binding(t,e){return Number.isInteger(e)&&e>=0&&e<Hl?this.state(t)?.bindings[e]:void 0}hash(t,e,i){return(Math.imul(t,73856093)^Math.imul(e,19349663)^Math.imul(i,83492791))&Ru-1}key(t,e){return Math.min(t,e)*this.size+Math.max(t,e)}alive(t,e){const i=t.pool;return Number.isInteger(e)&&e>=0&&e<i.N&&!!i.alive[e]&&i.fadeOutT[e]<=0&&io(i.posX[e],i.posY[e],i.posZ[e])}local(t,e,i,n){if(!this.alive(t,e)||!this.alive(t,i)||e===i||this.limit<=.5)return!1;const s=t.pool,a=this.limit*this.limit;return!((s.posX[e]-s.posX[i])**2+(s.posY[e]-s.posY[i])**2+(s.posZ[e]-s.posZ[i])**2>a||n&&(!io(n.x,n.y,n.z)||(s.posX[e]-n.x)**2+(s.posY[e]-n.y)**2+(s.posZ[e]-n.z)**2>a||(s.posX[i]-n.x)**2+(s.posY[i]-n.y)**2+(s.posZ[i]-n.z)**2>a))}index(t,e){this.heads.fill(-1),this.byPair.clear();let i=0;const n=t.pool,s=Number.isFinite(e.sourceSlots)?Math.min(xi,Math.max(0,Math.floor(e.sourceSlots))):0;for(let a=0;a<s;a++){const o=e.sourceIDs(a);if(!o)continue;const l=o[0],c=o[1];if(!this.local(t,l,c))continue;const h=this.key(l,c);if(this.byPair.has(h))continue;const d=(n.posX[l]+n.posX[c])*.5,u=(n.posY[l]+n.posY[c])*.5,f=(n.posZ[l]+n.posZ[c])*.5,g=Math.floor(d/this.width),y=Math.floor(u/this.width),v=Math.floor(f/this.width),p=this.hash(g,y,v);this.idsA[i]=l,this.idsB[i]=c,this.slots[i]=a,this.midX[i]=d,this.midY[i]=u,this.midZ[i]=f,this.gridX[i]=g,this.gridY[i]=y,this.gridZ[i]=v,this.next[i]=this.heads[p],this.heads[p]=i,this.byPair.set(h,i++)}this.stats.indexedEdges=i}birth(t,e,i){const n={cell:t,bindings:Array.from({length:Hl})};if(!io(t.x,t.y,t.z)||this.limit<=.5)return n;const s=Math.floor(t.x/this.width),a=Math.floor(t.y/this.width),o=Math.floor(t.z/this.width),l=[];let c=0;for(let d=0;d<2&&c<Ur;d++)for(let u=-1;u<=1&&c<Ur;u++)for(let f=-1;f<=1&&c<Ur;f++)for(let g=-1;g<=1&&c<Ur;g++){if((g===0&&f===0&&u===0)!=(d===0))continue;const y=s+g,v=a+f,p=o+u;for(let M=this.heads[this.hash(y,v,p)];M>=0&&c<Ur;M=this.next[M]){if(c++,this.gridX[M]!==y||this.gridY[M]!==v||this.gridZ[M]!==p)continue;const m=this.idsA[M],x=this.idsB[M],T=this.key(m,x);if(this.claimedPairs.has(T)||!this.local(e,m,x,t))continue;const _=(this.midX[M]-t.x)**2+(this.midY[M]-t.y)**2+(this.midZ[M]-t.z)**2;l.push({edge:M,distance:_,key:T})}}this.stats.searchVisits+=c,l.sort((d,u)=>d.distance-u.distance||d.key-u.key);const h=e.pool;for(let d=0;d<Math.min(Hl,l.length);d++){const u=l[d],f=this.idsA[u.edge],g=this.idsB[u.edge],y=new Float64Array([h.posX[f],h.posY[f],h.posZ[f],h.posX[g],h.posY[g],h.posZ[g]]);n.bindings[d]={a:f,b:g,key:u.key,cycleA:(i?.[f]??0)>>>0,cycleB:(i?.[g]??0)>>>0,cycleKnown:!!i,slot:this.slots[u.edge],current:y,from:new Float64Array(6),elapsed:0,retired:!1,opacity:1,alpha:0,initialized:!1,origin:new Float64Array(3)},this.claimedPairs.add(u.key)}return n}follow(t,e,i,n,s,a,o,l,c){const h=i.pool,d=t.a,u=t.b;if(s&&!t.cycleKnown&&(t.cycleA=s[d]>>>0,t.cycleB=s[u]>>>0,t.cycleKnown=!0),!(!t.retired&&this.local(i,d,u,e)&&(!s||t.cycleA===s[d]>>>0&&t.cycleB===s[u]>>>0))){t.slot=-1,t.retired?t.elapsed=Math.min(Pu,t.elapsed+a):(t.retired=!0,t.elapsed=0,t.from.set(t.current),t.origin[0]=e.x,t.origin[1]=e.y,t.origin[2]=e.z);const p=1-lb(Math.min(1,t.elapsed/Pu));for(let M=0;M<3;M++){const m=M===0?e.x:M===1?e.y:e.z,x=(t.from[M]+t.from[M+3])*.5+m-t.origin[M],T=(t.from[M]-t.from[M+3])*.5*p;t.current[M]=x+T,t.current[M+3]=x-T}p===0&&(t.opacity=t.alpha=0);return}if(n.sourceSlotForPair)t.slot=n.sourceSlotForPair(d,u);else{const p=this.byPair.get(t.key);t.slot=p===void 0?-1:this.slots[p]}if(t.slot>=0&&n.sourcePair(t.slot,this.sourceA,this.sourceB)){if(!(n.sourceIDs(t.slot)?.[0]===d))for(let m=0;m<3;m++){const x=this.sourceA[m];this.sourceA[m]=this.sourceB[m],this.sourceB[m]=x}}else this.sourceA[0]=h.posX[d],this.sourceA[1]=h.posY[d],this.sourceA[2]=h.posZ[d],this.sourceB[0]=h.posX[u],this.sourceB[1]=h.posY[u],this.sourceB[2]=h.posZ[u];const g=t.initialized?o:1;for(let p=0;p<3;p++)t.current[p]+=(this.sourceA[p]-t.current[p])*g,t.current[p+3]+=(this.sourceB[p]-t.current[p+3])*g;t.initialized=!0,t.slot>=0&&this.claimed.add(t.slot);const y=c?Math.min(no(c[d]),no(c[u])):1;t.slot>=0&&n.sourceOpacity?t.opacity=Math.min(y,no(n.sourceOpacity(t.slot))):t.opacity+=(y-t.opacity)*l;const v=t.slot>=0?n.sourceAlpha?.(t.slot):void 0;if(v!==void 0&&Number.isFinite(v))t.alpha=Math.max(0,v);else{const p=Math.hypot(h.posX[d]-h.posX[u],h.posY[d]-h.posY[u],h.posZ[d]-h.posZ[u]),M=no(i.p.myceliumFadeNear,0),m=Math.max(0,i.p.myceliumAlpha*(1-p/this.limit*(1-M)));t.alpha+=(Math.max(0,Number.isFinite(m)?m:0)-t.alpha)*l}}}const hb=`
uniform sampler2D tDiffuse;
uniform float uMode,uIntensity,uScale,uDetail,uAmbientPhase;
uniform float uFlowPhase;
uniform vec2 uResolution;
varying vec2 vUv;
float hash(vec2 p){vec3 q=fract(vec3(p.xyx)*.1031);q+=dot(q,q.yzx+33.33);return fract((q.x+q.y)*q.z);}
float noise(vec2 p){
 vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);
 return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),u.y);
}
float fbm(vec2 p){
 float v=0.,a=.5;
 for(int i=0;i<3;i++){v+=noise(p)*a;p=vec2(.8*p.x-.6*p.y,.6*p.x+.8*p.y)*2.03+vec2(3.7,7.1);a*=.5;}
 return v/.875;
}
vec2 rotate2(vec2 p,float a){float s=sin(a),c=cos(a);return vec2(c*p.x-s*p.y,s*p.x+c*p.y);}
vec3 sceneColor(vec2 uv){
 vec2 mirrored=1.-abs(fract(uv*.5)*2.-1.);
 vec2 halfTexel=.5/max(uResolution,vec2(1.));
 return texture2D(tDiffuse,clamp(mirrored,halfTexel,1.-halfTexel)).rgb;
}
void main(){
 vec3 original=texture2D(tDiffuse,vUv).rgb;
 float strength=clamp(uIntensity,0.,1.);
 int mode=int(clamp(floor(uMode+.5),0.,6.));
 if(mode==0||strength<=.000001){gl_FragColor=vec4(original,1.);return;}
 float scale=clamp(uScale,0.,1.),detail=clamp(uDetail,0.,1.);
 // Both clocks retain travel: changing ambient speed cannot rewind the field.
 float t=uAmbientPhase+uFlowPhase;
 vec2 aspectV=vec2(max(uResolution.x,1.)/max(uResolution.y,1.),1.);
 vec2 p=(vUv-.5)*aspectV,target=p;
 if(mode==1){
  vec2 q=p*mix(9.,2.,scale),drift=vec2(t*.24,-t*.18);
  vec2 domain=vec2(fbm(q+drift),fbm(q+vec2(5.2,1.3)-drift));
  vec2 flow=vec2(fbm(q+mix(1.,4.,detail)*domain+vec2(t*.1,0)),fbm(q+mix(1.,4.,detail)*domain+vec2(8.3,-t*.16)))-.5;
  target=p+flow*mix(.33,.62,scale);
 }else if(mode==2){
  vec2 center=vec2(.10*sin(t*.31),.07*cos(t*.27)),d=p-center;
  float r=max(length(d),.0001),frequency=mix(65.,12.,scale);
  float wave=sin(r*frequency-t*3.);
  wave+=detail*.45*sin(r*frequency*1.79+t*1.7+atan(d.y+1e-7,d.x+1e-7)*3.);
  float envelope=smoothstep(0.,.055,r)/(1.+r*.8);
  target=p+d/r*wave*mix(.025,.09,scale)*envelope;
 }else if(mode==3){
  float f=mix(12.,3.,scale);
  vec2 shear=vec2(sin(p.y*f+t*.8),sin(p.x*f*.73-t*.6));
  vec2 folded=p+shear*mix(.08,.27,scale);
  target=folded*(1.+.25*detail*cos(length(p)*7.-t*.6));
  target.x+=detail*.05*sin(folded.y*f*2.1+t);
 }else if(mode==4){
  float cell=mix(.035,.24,scale);
  vec2 grid=floor((p+2.)/cell),local=fract((p+2.)/cell)-.5;
  float h=hash(grid),h2=hash(grid+19.7),phase=t*1.7+h*6.2831853;
  float angle=(h-.5)*detail*2.2+sin(phase)*detail*.4;
  vec2 shift=vec2(sin(phase),cos(phase*.71+h2*6.2831853))*cell*mix(.25,2.5,detail);
  target=(grid+.5)*cell-2.+rotate2(local*cell,angle)+shift;
 }else if(mode==5){
  float radius=length(p),sectors=floor(mix(3.,14.,detail)+.5),period=6.2831853/sectors;
  float angle=atan(p.y+1e-7,p.x+1e-7)+t*.18;
  float folded=abs(fract(angle/period+.5)*period-period*.5);
  target=vec2(cos(folded),sin(folded))*radius*mix(2.4,.65,scale);
  target=rotate2(target,-.6+t*.09)+vec2(.08*sin(t*.14),-.07);
 }else{
  float radius=max(length(p),.0005),angle=atan(p.y+1e-7,p.x+1e-7);
  float zoom=mix(1.65,3.3,scale),logZoom=log(zoom);
  float level=log(radius/.42)/logZoom+t*.28,phase=fract(level);
  float r=.42*exp(phase*logZoom)/zoom,a=angle+log(radius+.002)*detail*.7+t*.15;
  vec2 q=vec2(cos(a),sin(a))*r;
  float wedge=6.2831853/mix(3.,9.,detail),af=abs(fract(a/wedge+.5)*wedge-wedge*.5);
  q=mix(q,vec2(cos(af),sin(af))*r,detail*.8);
  vec3 repeated=mix(sceneColor(q/aspectV+.5),sceneColor(q*zoom/aspectV+.5),1.-smoothstep(0.,.10,phase));
  repeated=mix(sceneColor(vec2(.5)),repeated,smoothstep(.0015,.012,length(p)));
  gl_FragColor=vec4(mix(original,repeated,strength),1.);return;
 }
 vec2 warped=target/aspectV+.5;
 gl_FragColor=vec4(mode<=3?sceneColor(mix(vUv,warped,strength)):mix(original,sceneColor(warped),strength),1.);
}
`,db=Object.freeze({amount:0,progress:0,phase:0});class ub{constructor(t=Math.random){this.random=t}elapsed=0;duration=0;startedAt=null;phase=0;travel=0;get state(){if(this.duration===0)return{amount:0,progress:0,phase:this.phase};const t=Math.min(1,this.elapsed/this.duration),e=2*t-2*t*t*t+t*t*t*t;return{amount:1-t*t*(3-2*t),progress:t,phase:this.phase+this.travel*e}}trigger(t,e){this.update(0,e),this.cancel(),this.duration=ci({tidalDistortionBurstDuration:t}).tidalDistortionBurstDuration,this.elapsed=0,this.startedAt=typeof e=="number"&&Number.isFinite(e)?e:null;const i=this.random();this.travel=8+10*(Number.isFinite(i)?Math.max(0,Math.min(1,i)):.5)}update(t,e){if(this.duration){if(this.startedAt!==null&&typeof e=="number"&&Number.isFinite(e))this.elapsed=Math.max(this.elapsed,(e-this.startedAt)/1e3);else if(Number.isFinite(t)&&t>0)this.elapsed+=t;else return;this.elapsed+1e-10>=this.duration&&(this.elapsed=this.duration,this.cancel())}}cancel(){this.phase=this.state.phase,this.elapsed=0,this.duration=0,this.startedAt=null,this.travel=0}reset(){this.cancel(),this.phase=0}}class fb extends Vf{previousTime=null;ambientPhase=0;constructor(){super({uniforms:{tDiffuse:{value:null},uMode:{value:0},uIntensity:{value:0},uScale:{value:.5},uDetail:{value:.5},uAmbientPhase:{value:0},uFlowPhase:{value:0},uResolution:{value:new yt(1,1)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:hb}),this.material.toneMapped=!1,this.material.depthTest=!1,this.material.depthWrite=!1,this.enabled=!1}configure(t,e){const i=ci(t);this.configureLayer({mode:i.tidalDistortionMode,enabled:i.tidalDistortionMode>0,intensity:i.tidalDistortionIntensity,scale:i.tidalDistortionScale,speed:i.tidalDistortionSpeed,detail:i.tidalDistortionDetail},e)}configureLayer(t,e,i=db){const n=this.uniforms,s=Number.isFinite(e)?Math.max(0,e):0,a=Number.isFinite(t.speed)?Math.max(0,Math.min(1,t.speed)):.35;this.previousTime===null||s<this.previousTime?this.ambientPhase=s*a*1.6:this.ambientPhase+=(s-this.previousTime)*a*1.6,this.previousTime=s,n.uMode.value=t.mode,n.uIntensity.value=t.intensity,n.uScale.value=t.scale,n.uDetail.value=t.detail,n.uAmbientPhase.value=this.ambientPhase,n.uFlowPhase.value=i.phase,this.enabled=t.enabled&&t.mode>0&&t.intensity>0}setSize(t,e){this.uniforms.uResolution.value.set(Math.max(1,t),Math.max(1,e))}}class pb{byMode=Ii.map(()=>new fb);passes=[...this.byMode];configure(t,e,i){const n=ci(t);for(let s=0;s<this.byMode.length;s++)this.byMode[s].configureLayer(n.tidalDistortionLayers[s],e,i);for(let s=0;s<this.passes.length;s++)this.passes[s]=this.byMode[n.tidalDistortionOrder[s]-1]}}class mb{scene=new ls;flock;motion=new Of;anchors=new G_;network=new Yf;packedNetwork;geometry=new sb;morph=new rb;noteFilaments=new ab;correspondence=new cb;lastManualPosition;protectedParticles=new Set;routes=new qf;notes;camera;cameraFlight;bloomEnvelope=new Rf;presentation=Xe();bloom=null;distortion=new pb;distortionBurst=new ub;distortionTime=0;pendingRoutes=[];constructor(t,e=Lo.particleCount){this.scene.background=new Ct(395276),this.camera=t.clone(),this.cameraFlight=new zf(this.camera),this.flock=new Fo(this.scene,this.camera),this.flock.p.particleCount=Math.max(1,Math.min(3e4,Math.round(e))),this.flock.p.autoRotate=!1,this.flock.p.vortexAmp=this.flock.p.curlAmp=0,this.flock.resizeIfNeeded(),this.notes=new Pc(this.scene,this.flock),this.packedNetwork=new $_(this.scene,this.correspondence)}trigger(t,e,i,n,s=!0){this.notes.trigger(t,e,i);const a=this.presentation=Xe(n??this.presentation),o=this.notes.region(t.track.address);this.network.cells.length?this.routes.trigger(t,e,i,this.network.cells,this.network.contacts,o):this.flock.p.myceliumEnabled&&(this.pendingRoutes.length>=16&&this.pendingRoutes.shift(),this.pendingRoutes.push({event:t,started:e,stream:t.track.streamID,origin:o?{x:o.x,y:o.y,z:o.z}:void 0})),s&&qr(a.tidalMorphTrigger,t.track.address)&&this.triggerMorph(a),s&&qr(a.tidalCameraTrigger,t.track.address)&&this.triggerCamera(a),s&&Pf(a.tidalBloomTrigger,t.track.address)&&this.bloomEnvelope.trigger(a),s&&qr(a.tidalDistortionBurstTrigger,t.track.address)&&this.triggerDistortion(a,e)}triggerDistortion(t,e=performance.now()){this.presentation=Xe(t??this.presentation),this.presentation.tidalDistortionLayers.some(i=>i.enabled)?this.distortionBurst.trigger(this.presentation.tidalDistortionBurstDuration,e):this.distortionBurst.cancel()}resetDistortion(){this.distortionBurst.reset()}triggerMorph(t){this.presentation=Xe(t??this.presentation),this.lastManualPosition!==this.presentation.tidalMorphPosition&&this.morph.set(this.presentation.tidalMorphPosition),this.lastManualPosition=this.presentation.tidalMorphPosition,this.morph.trigger(this.presentation.tidalMorphDuration)}triggerCamera(t){this.presentation=Xe(t??this.presentation);const e=this.presentation;this.cameraFlight.trigger(e.tidalCameraDuration,e.tidalCameraMinDistance,e.tidalCameraMaxDistance)}triggerBloom(t){this.presentation=Xe(t??this.presentation),this.bloomEnvelope.trigger(this.presentation)}get bloomLevel(){return this.bloomEnvelope.value}enableAsyncSource(){return this.geometry.enableAsyncSource()}clearNotes(){this.notes.clear(),this.routes.clear(),this.pendingRoutes.length=0,this.cameraFlight.cancel(),this.bloomEnvelope.reset(this.presentation),this.distortionBurst.cancel()}reset(){this.clearNotes(),this.distortionBurst.reset(),this.morph.reset(this.presentation.tidalMorphPosition),this.lastManualPosition=this.presentation.tidalMorphPosition,this.correspondence.clear(),this.geometry.clear(),this.network.clear(),this.packedNetwork.clear(),this.motion.release(),this.anchors.reset(),this.flock.reset()}update(t,e,i,n,s,a,o=t,l=!1){this.flock.setConductorValue(n.energy),this.presentation=Xe(s),this.distortionTime+=Number.isFinite(o)?Math.max(0,Math.min(o,.25)):0,this.presentation.tidalDistortionLayers.some(h=>h.enabled)?this.distortionBurst.update(o,e):this.distortionBurst.cancel(),(l||this.lastManualPosition!==this.presentation.tidalMorphPosition)&&(this.morph.set(this.presentation.tidalMorphPosition),this.lastManualPosition=this.presentation.tidalMorphPosition),this.morph.update(o),this.protectedParticles.clear();for(const h of this.routes.visibleParticles)this.protectedParticles.add(h);for(const h of this.notes.visibleParticles)this.protectedParticles.add(h);const c=this.anchors.update(this.flock,t,n.energy,n.motion,this.presentation.tidalNeighborCohesion,this.protectedParticles);if(this.motion.update(this.flock,t,n.energy,n.motion,c,this.presentation.tidalNeighborCohesion),this.notes.update(i,e,this.flock.getWorldRadius()),this.cameraFlight.update(o),this.bloomEnvelope.update(o,this.presentation),this.geometry.prepareSource(this.flock,t),this.geometry.setParticleOpacity(this.motion.opacity),this.network.update(this.flock,t,this.motion.opacity,this.motion.cycles),this.network.cells.length&&this.pendingRoutes.length){for(const h of this.pendingRoutes)e-h.started<2200&&h.event.track.streamID===h.stream&&this.routes.trigger(h.event,h.started,i,this.network.cells,this.network.contacts,h.origin);this.pendingRoutes.length=0}this.routes.update(this.network.cells,this.network.contacts,e,i),this.geometry.update(this.network.cells,this.flock,this.motion.cycles,t),this.correspondence.update(this.network.cells,this.flock,this.geometry,this.motion.cycles,t,this.motion.opacity),this.flock.draw({size:.625*(1-this.morph.value*.75),brightness:.3+n.brightness*1.7,constantSize:!0,opacity:this.motion.opacity,deformation:this.notes,collisionFlash:!1,density:a,monochrome:1,networkPrepared:!0}),this.flock.myceliumLines.visible=!1,this.packedNetwork.update(this.network.cells,this.network.contacts,this.geometry,this.morph.value,this.notes,a,.3+n.brightness*1.7,this.flock.p.myceliumEnabled,this.presentation,this.routes,t),this.noteFilaments.update(this.scene,this.network.cells,this.geometry,this.routes,this.notes,this.morph.value)}draw(t,e=this.bloomLevel){this.packedNetwork.prepareRenderer(t),this.bloom??=new Wf(t,this.scene,this.camera,this.distortion.passes),this.distortion.configure(this.presentation,this.distortionTime,this.distortionBurst.state),this.bloom.draw(e)}}function gb(r,t,e,i,n,s){t.has("notes")&&r.trigger(e,i,n,s,!1),t.has("camera")&&r.triggerCamera(s),t.has("bloom")&&r.triggerBloom(s),t.has("morph")&&r.triggerMorph(s),t.has("distortion")&&r.triggerDistortion(s,i)}function vb(r){const t=Number.isFinite(r)?Math.max(0,Math.min(1,r)):.5,e=128+Math.round(t*128),i=40+Math.round(t*32),n=4;return{columns:e,rows:i,layers:n,points:e*i*n,lineVertices:(e-1)*Math.ceil(i/2)*n*2}}function yb(r=1){const t=vb(r),e=new Float32Array(t.points*3),i=new Float32Array(t.lineVertices*3);let n=0,s=0;for(let a=0;a<t.layers;a++)for(let o=0;o<t.rows;o++){const l=o/(t.rows-1),c=a/(t.layers-1);for(let h=0;h<t.columns;h++){const d=h/(t.columns-1);e.set([d,l,c],n),n+=3,o%2===0&&h<t.columns-1&&(i.set([d,l,c,(h+1)/(t.columns-1),l,c],s),s+=6)}}return{points:e,lines:i}}const ea=(r,t=.5)=>Number.isFinite(r)?Math.max(0,Math.min(1,r)):t,xb=`
uniform float uPhase;
uniform vec4 uCV;
float square(float value){return value*value;}
void originalTidalSurface(vec2 uv,float layer,out vec3 p,out float height){
  float x=(uv.x-.5)*27.;
  float z=(uv.y-.5)*19.;
  float t=uPhase;
  float warp=sin(x*.21+z*.17+t*.8)*.9;
  float broad=sin(x*.24-z*.18+t+warp)*1.45;
  broad+=sin(x*.43+z*.27-t*.6)*.55;
  float ridge=exp(-square(z*.24+sin(x*.2+t*.4)*1.5))*1.8;
  height=(broad+ridge)*(.48+uCV.x*.85);
  height+=sin(x*1.4+z*.56+t*1.6+warp)*.065;
  float separation=.28+sin(x*.25+z*.2+t*.4)*.15;
  p=vec3(x,height-1.1-layer*separation*3.,z);
  p.x+=sin(z*.3+t*.5)*.65*layer;
}`;class Mb{phase=0;energy=.35;update(t,e){const i=Number.isFinite(t)?Math.max(0,Math.min(.1,t)):0;this.phase+=i*(.12+ea(e.motion,.4)*.55),this.energy=ea(e.energy,.35)}sample(t,e,i,n){const s=(t-.5)*27,a=(e-.5)*19,o=this.phase,l=Math.sin(s*.21+a*.17+o*.8)*.9,c=Math.sin(s*.24-a*.18+o+l)*1.45+Math.sin(s*.43+a*.27-o*.6)*.55,h=a*.24+Math.sin(s*.2+o*.4)*1.5;let d=(c+Math.exp(-h*h)*1.8)*(.48+this.energy*.85);d+=Math.sin(s*1.4+a*.56+o*1.6+l)*.065;const u=.28+Math.sin(s*.25+a*.2+o*.4)*.15;return n[0]=s+Math.sin(a*.3+o*.5)*.65*i,n[1]=d-1.1-i*u*3,n[2]=a,n}}const _b=64;class bb{constructor(t,e=Math.random){this.random=e,this.strengths=new Float32Array(t.length/3);for(let i=0;i<t.length;i+=3){const n=t[i],s=t[i+1],a=t[i+2];n>.15&&n<.85&&s>.18&&s<.82&&a<=.334&&this.eligible.push(i/3)}}strengths;eligible=[];pulses=[];seen=new Map;touched=new Set;stream="";dirty=!1;trigger(t,e,i=()=>!0){if(!Number.isFinite(e))return;const n=t.track.lastOnsetStream||t.track.streamID;this.stream&&this.stream!==n&&this.clear(),this.stream=n;const s=JSON.stringify([n,t.track.address,t.eventID]);if(this.seen.has(s))return;this.seen.set(s,!0),this.seen.size>256&&this.seen.delete(this.seen.keys().next().value);const a=this.random(),o=Number.isFinite(a)?Math.max(0,Math.min(.999999999,a)):.5,l=Math.floor(o*this.eligible.length),c=new Set(this.pulses.map(d=>d.node));let h=-1;for(let d=0;d<this.eligible.length;d++){const u=this.eligible[(l+d)%this.eligible.length];if(!c.has(u)&&i(u)){h=u;break}}h<0||(this.pulses.push({node:h,at:e}),this.pulses.length>_b&&this.pulses.shift())}sample(t,e){let i=this.dirty;this.dirty=!1;for(const s of this.touched)this.strengths[s]!==0&&(i=!0),this.strengths[s]=0;this.touched.clear();const n=(Number.isFinite(e)?Math.max(.2,Math.min(4,e)):2)*1e3;this.pulses=this.pulses.filter(s=>Number.isFinite(t)&&t-s.at<n);for(const s of this.pulses){const a=Math.max(0,Math.min(1,(t-s.at)/n)),o=1-a*a*(3-2*a);this.strengths[s.node]=Math.max(this.strengths[s.node],o),this.touched.add(s.node),i=!0}return i}clear(){for(const t of this.touched)this.strengths[t]=0;this.touched.clear(),this.pulses.length=0,this.seen.clear(),this.stream="",this.dirty=!0}}const Sb=`
uniform float uDensity;
uniform float uPixelRatio;
attribute float aNoteStrength;
varying float vLight;
varying float vFog;
varying float vFade;
varying float vCrest;
varying float vNote;
${xb}
void main(){
  vec2 uv=position.xy;
  float layer=position.z;
  vec3 p;float height;
  originalTidalSurface(uv,layer,p,height);
  vec4 mv=modelViewMatrix*vec4(p,1.);
  gl_Position=projectionMatrix*mv;
  float edge=smoothstep(0.,.13,uv.x)*smoothstep(0.,.13,1.-uv.x)
    *smoothstep(0.,.14,uv.y)*smoothstep(0.,.18,1.-uv.y);
  float visibleRow=fract(sin(floor(uv.y*71.+.5)*12.9898+layer*48.)*43758.5453);
  float density=smoothstep(visibleRow-.12,visibleRow+.12,.30+uDensity*.70);
  vNote=aNoteStrength;
  vFade=edge*max(density,step(.001,vNote))*(1.-layer*.19);
  vFog=exp(-max(0.,-mv.z-9.)*.036);
  vCrest=clamp(.35+height*.18,0.,1.);
  vLight=(.24+.85*vCrest)*(.18+uCV.z*1.45);
  // Base size is fixed; only the chosen existing node enlarges.
  gl_PointSize=clamp((4.4+vNote*42.)*uPixelRatio*16./max(6.,-mv.z),1.,96.);
}`,wb=`
uniform float uPoints;
uniform float uReveal;
uniform float uMonochrome;
varying float vLight;
varying float vFog;
varying float vFade;
varying float vCrest;
varying float vNote;
void main(){
  float shape=.32;
  if(uPoints>.5){
    vec2 q=gl_PointCoord-.5;float r=dot(q,q);
    if(r>.25)discard;
    shape=exp(-r*38.)*1.25+exp(-r*9.)*.23;
  }
  vec3 deep=vec3(.055,.23,.65),ice=vec3(.66,.88,1.);
  vec3 color=mix(deep,ice,pow(vCrest,1.5));
  color=mix(color,vec3(.88,.93,1.),uMonochrome);
  color=mix(color,vec3(.86,.96,1.),min(.7,vNote));
  float alpha=clamp(shape*vLight*vFade*vFog*uReveal*(1.+vNote*.6),0.,.85);
  gl_FragColor=vec4(color,alpha);
}`;class Ab{flow=new Mb;pulses;points;scene=new ls;camera=new Fe(43,1,.1,100);reveal=0;viewport=new fe;layoutKey="";seeds=yb(1);samplePosition=new Float64Array(3);projected=new V;strengthAttribute;uniforms={uPhase:{value:0},uDensity:{value:.5},uPixelRatio:{value:1},uCV:{value:new fe(.35,.5,.5,.4)},uReveal:{value:0},uMonochrome:{value:0}};constructor(t=Math.random){this.pulses=new bb(this.seeds.points,t),this.strengthAttribute=new xt(this.pulses.strengths,1).setUsage($t);const e=a=>new se({vertexShader:Sb,fragmentShader:wb,uniforms:{...this.uniforms,uPoints:{value:Number(a)}},transparent:!0,depthWrite:!1,depthTest:!1,blending:qe}),i=new ie().setAttribute("position",new xt(this.seeds.points,3)).setAttribute("aNoteStrength",this.strengthAttribute),n=new ie().setAttribute("position",new xt(this.seeds.lines,3)).setAttribute("aNoteStrength",new xt(new Float32Array(this.seeds.lines.length/3),1));this.points=new Af(i,e(!0)),this.points.name="tidal-original-field-points";const s=new bo(n,e(!1));s.name="tidal-original-filaments",this.points.frustumCulled=s.frustumCulled=!1,this.scene.add(s,this.points),this.camera.position.set(0,7.2,18.6),this.camera.lookAt(0,-.5,0),this.camera.updateMatrixWorld()}trigger(t,e){typeof window<"u"&&typeof document<"u"&&(this.layout(),this.camera.aspect=this.viewport.z/this.viewport.w,this.camera.updateProjectionMatrix()),this.pulses.trigger(t,e,i=>{const n=i*3;return this.flow.sample(this.seeds.points[n],this.seeds.points[n+1],this.seeds.points[n+2],this.samplePosition),this.projected.set(this.samplePosition[0],this.samplePosition[1],this.samplePosition[2]).project(this.camera),Math.abs(this.projected.x)<.88&&Math.abs(this.projected.y)<.85&&this.projected.z>-1&&this.projected.z<1})}reset(){this.pulses.clear(),this.reveal=0}updateFrame(t,e,i,n,s,a,o){const l=Number.isFinite(e)?Math.max(0,Math.min(.1,e)):0;this.flow.update(l,i),this.reveal+=(+!a-this.reveal)*(1-Math.exp(-l/.3)),this.pulses.sample(t,s)&&(this.strengthAttribute.needsUpdate=!0),this.uniforms.uPhase.value=this.flow.phase,this.uniforms.uCV.value.set(this.flow.energy,.5,ea(i.brightness),ea(i.motion,.4)),this.uniforms.uDensity.value=ea(n),this.uniforms.uReveal.value=this.reveal,this.uniforms.uMonochrome.value+=(Number(o)-this.uniforms.uMonochrome.value)*(1-Math.exp(-l/.3))}draw(t,e,i,n,s,a,o,l,c){this.updateFrame(i,n,s,a,o,l,c),this.layout(),this.uniforms.uPixelRatio.value=t.getPixelRatio()*this.viewport.w/850,this.camera.aspect=this.viewport.z/this.viewport.w,this.camera.updateProjectionMatrix();const h=window.innerWidth,d=window.innerHeight;t.setViewport(0,0,h,d),t.setScissorTest(!1),t.clear(),t.setViewport(this.viewport.x,this.viewport.y,this.viewport.z,this.viewport.w),t.setScissor(this.viewport.x,this.viewport.y,this.viewport.z,this.viewport.w),t.setScissorTest(!0),t.render(this.scene,this.camera),t.setScissorTest(!1),t.setViewport(0,0,h,d)}layout(){const t=window.innerWidth,e=window.innerHeight,i=document.body.classList.contains("stage-clean"),n=!!document.querySelector(".slewn.collapsed"),s=`${t}:${e}:${i}:${n}`;if(s===this.layoutKey)return;this.layoutKey=s;const a=document.querySelector(".slewn-panel")?.getBoundingClientRect();!i&&!n&&a&&t>760?this.viewport.set(0,0,Math.max(200,a.left-12),e):!i&&!n&&a&&t<=760?this.viewport.set(0,e-a.top,t,Math.max(140,a.top)):this.viewport.set(0,0,t,e)}}const li=(r,t,e)=>Math.max(t,Math.min(e,r)),Eo=(r,t=.5)=>Number.isFinite(r)?li(r,0,1):t;function To(r){const t=r&&typeof r=="object"?r:{},e=(i,n,s,a)=>typeof t[i]=="number"&&Number.isFinite(t[i])?li(t[i],s,a):n;return{lineMotion:e("lineMotion",72,8,72),lineReach:e("lineReach",125,25,125),lineWidth:e("lineWidth",.8,.4,2),lineResponse:e("lineResponse",1.4,.2,4),linePaused:t.linePaused===!0,lineColor:typeof t.lineColor=="string"&&/^#[0-9a-f]{6}$/i.test(t.lineColor)?t.lineColor.toLowerCase():"#ff6b35"}}const Du=()=>[0,0,0],ia=(r,t)=>r.map((e,i)=>e+t[i]),jn=(r,t)=>r.map((e,i)=>e-t[i]),Kn=(r,t)=>r.map(e=>e*t),kr=(r,t)=>r[0]*t[0]+r[1]*t[1]+r[2]*t[2],ir=r=>Math.hypot(...r),Iu=r=>Kn(r,1/(ir(r)||1));function so(r,t,e,i){const n=jn(t,r),s=jn(i,e),a=jn(r,e),o=kr(n,n),l=kr(s,s),c=kr(s,a);let h=0,d=0;if(o<1e-10&&l<1e-10)return{a:r,b:e,d:ir(a)};if(o<1e-10)d=li(c/l,0,1);else{const g=kr(n,a);if(l<1e-10)h=li(-g/o,0,1);else{const y=kr(n,s),v=o*l-y*y;Math.abs(v)>1e-10&&(h=li((y*c-g*l)/v,0,1)),d=(y*h+c)/l,d<0?(d=0,h=li(-g/o,0,1)):d>1&&(d=1,h=li((y-g)/o,0,1))}}const u=ia(r,Kn(n,h)),f=ia(e,Kn(s,d));return{a:u,b:f,d:ir(jn(u,f))}}class Eb{nodes=[];segments=[];links=new Map;pulses=new Map;strengths=new Float32Array(96);visited=new Set;currentSegment=null;seed=22202;time=0;frame=0;reach=125;random(){return this.seed=Math.imul(this.seed,1664525)+1013904223>>>0,this.seed/4294967296}between(t,e){return t+(e-t)*this.random()}node(t,e){return this.nodes.push({base:t.slice(),p:t.slice(),velocity:Du(),phase:this.between(0,Math.PI*2),frequency:this.between(.36,.67),chain:e}),this.nodes.length-1}turn(t){let e=0;Math.abs(t[1])>Math.abs(t[e])&&(e=1),Math.abs(t[2])>Math.abs(t[e])&&(e=2);const i=t[e]>0?1:-1,n=this.between(-1,1)*Math.PI*.31,s=this.between(-1,1)*Math.PI*.31,a=Du();return a[e]=i*Math.cos(n)*Math.cos(s),a[(e+1)%3]=Math.sin(n),a[(e+2)%3]=Math.sin(s),Iu(a)}constructor(){const t=[222,150,185];for(let e=0;e<12;e++){let i=[this.between(-145,145),this.between(-95,95),this.between(-125,125)],n=Iu([this.between(-1,1),this.between(-1,1),this.between(-1,1)]),s=this.node(i,e);for(let a=0;a<8;a++){const o=ia(i,Kn(n,this.between(42,112)));let l=!1;for(let u=0;u<3;u++)Math.abs(o[u])>t[u]&&(o[u]=li(o[u],-t[u],t[u]),n[u]*=-1,l=!0);let c=!1;for(const u of this.segments)if(u.chain!==e&&so(i,o,this.nodes[u.a].base,this.nodes[u.b].base).d<13){c=!0;break}const h=this.node(o,e),d=ir(jn(o,i));if(this.segments.push({a:s,b:h,rest:d,radius:li(d/52,.62,2.05),chain:e}),i=o,s=h,c||l||this.random()<.38){const u=this.between(0,Math.PI*2),f=this.between(-1,1),g=Math.sqrt(1-f*f);n=this.turn([g*Math.cos(u),f,g*Math.sin(u)])}else n=this.turn(n)}}this.neighbors(125,!0)}trigger(t,e){if(!Number.isFinite(e)||!this.segments.length)return null;this.visited.size>=this.segments.length&&this.visited.clear();let i=0;if(this.currentSegment!==null){const n=this.segments[this.currentSegment],s=this.nodes[n.a].p,a=this.nodes[n.b].p,o=Kn(ia(s,a),.5);let l=1/0,c=1/0;i=-1;for(let h=0;h<this.segments.length;h++){if(h===this.currentSegment||this.visited.has(h))continue;const d=this.segments[h],u=this.nodes[d.a].p,f=this.nodes[d.b].p,g=so(s,a,u,f).d,y=ir(jn(o,Kn(ia(u,f),.5)));(g<l-1e-9||Math.abs(g-l)<=1e-9&&y<c)&&(i=h,l=g,c=y)}i<0&&(i=this.currentSegment)}return this.currentSegment=i,this.visited.add(i),this.pulses.set(i,{at:e,strength:1}),i}reset(){this.pulses.clear(),this.strengths.fill(0),this.visited.clear(),this.currentSegment=null}update(t,e,i,n){const s=Number.isFinite(e)?li(e,0,.05):0,a=To(i);this.strengths.fill(0);for(const[o,l]of this.pulses){const c=Math.max(0,(t-l.at)/1e3/a.lineResponse);if(c>=1){this.pulses.delete(o);continue}const h=l.strength*(1-c)**2;this.strengths[o]=h}if(!a.linePaused){this.time+=s*(.35+Eo(n.motion,.4)*1.625);const o=a.lineMotion*(.6+Eo(n.energy,.35)*1.14);for(let c=0;c<this.nodes.length;c++){const h=this.nodes[c],d=h.base,u=this.time*h.frequency,f=h.phase,g=o,y=[d[0]+Math.sin(u+f+d[2]*.009)*g,d[1]+Math.cos(u*.83+f+d[0]*.012)*g*.72,d[2]+Math.sin(u*.69+f+d[1]*.014)*g];for(let v=0;v<3;v++)h.velocity[v]+=(y[v]-h.p[v])*3.2*s}for(const c of this.segments){const h=this.nodes[c.a],d=this.nodes[c.b],u=jn(d.p,h.p),f=ir(u)||1,g=Kn(u,(f-c.rest)/f*1.6*s);for(let y=0;y<3;y++)h.velocity[y]+=g[y],d.velocity[y]-=g[y]}const l=Math.exp(-2.1*s);for(const c of this.nodes)for(let h=0;h<3;h++)c.velocity[h]=li(c.velocity[h]*l,-80,80),c.p[h]+=c.velocity[h]*s}(a.lineReach!==this.reach||this.frame++%4===0)&&(this.reach=a.lineReach,this.neighbors(a.lineReach,a.linePaused));for(const[o,l]of this.links)a.linePaused?l.opacity=l.target:l.opacity+=(l.target-l.opacity)*Math.min(1,s*4.8),l.opacity<.012&&!l.target&&this.links.delete(o)}neighbors(t,e){const i=[];for(let a=0;a<this.segments.length;a++)for(let o=a+1;o<this.segments.length;o++){const l=this.segments[a],c=this.segments[o];if(l.a===c.a||l.a===c.b||l.b===c.a||l.b===c.b)continue;const h=a+":"+o,d=so(this.nodes[l.a].p,this.nodes[l.b].p,this.nodes[c.a].p,this.nodes[c.b].p);d.d<t+(this.links.has(h)?12:0)&&d.d>1.5&&i.push({key:h,i:a,j:o,d:d.d})}i.sort((a,o)=>a.d-o.d);const n=new Uint8Array(96),s=new Set;for(const a of i)n[a.i]>=3||n[a.j]>=3||(s.add(a.key),n[a.i]++,n[a.j]++,this.links.has(a.key)||this.links.set(a.key,{i:a.i,j:a.j,opacity:e?1:0,target:1}));for(const[a,o]of this.links)o.target=Number(s.has(a)),e&&(o.opacity=o.target);if(this.links.size>576){for(const[a,o]of this.links)if(!o.target&&(this.links.delete(a),this.links.size<=576))break}}visibleLinks(){const t=[];for(const e of this.links.values())if(e.opacity>.012){const i=this.segments[e.i],n=this.segments[e.j],s=so(this.nodes[i.a].p,this.nodes[i.b].p,this.nodes[n.a].p,this.nodes[n.b].p);t.push({...e,...s})}return t}}const Tb=`attribute float aOpacity;attribute float aHighlight; varying vec3 vNormal; varying float vDepth; varying float vOpacity;varying float vHighlight;
void main(){vec4 view=modelViewMatrix*instanceMatrix*vec4(position,1.0);vDepth=-view.z;
vNormal=mat3(modelViewMatrix)*mat3(instanceMatrix)*normal;vOpacity=aOpacity;vHighlight=aHighlight;gl_Position=projectionMatrix*view;}`,Cb=`uniform vec3 uPaper;uniform vec3 uInk;uniform vec3 uNoteColor;uniform float uBrightness;
varying vec3 vNormal;varying float vDepth;varying float vOpacity;varying float vHighlight;
void main(){float light=.36+.64*abs(dot(normalize(vNormal),normalize(vec3(-.4,.7,.8))));
float fog=clamp((vDepth-430.0)/1000.0,0.0,.66);float shade=mix(.44,.03,light);
vec3 ink=mix(uPaper,uInk,uBrightness);vec3 color=mix(ink,uPaper,shade);color=mix(color,uPaper,fog*.75);
float highlight=clamp(vHighlight,0.0,1.0);color=mix(color,uNoteColor,highlight);
gl_FragColor=vec4(color,vOpacity*(1.0-fog*.32*(1.0-highlight)));}`;class Rb{network=new Eb;primary;connections;scene=new ls;camera=new Fe(45,1,1,2400);orbit=null;autoOrbit=!0;viewport=new fe;object=new pe;a=new V;b=new V;axis=new V(0,1,0);previousClear=new Ct;primaryOpacity;connectionOpacity;primaryHighlight;uniforms={uPaper:{value:new Ct("#f4f2ec")},uInk:{value:new Ct("#242624")},uNoteColor:{value:new Ct("#ff6b35").convertLinearToSRGB()},uBrightness:{value:1}};constructor(){const t=(o,l)=>{const c=new Ac(1,1,1,7,1,!0),h=new xn(new Float32Array(o),1).setUsage($t);c.setAttribute("aOpacity",h);const d=new xn(new Float32Array(o),1).setUsage($t);c.setAttribute("aHighlight",d);const u=new se({vertexShader:Tb,fragmentShader:Cb,uniforms:this.uniforms,transparent:l,depthWrite:!l,side:Me}),f=new yo(c,u,o);return f.instanceMatrix.setUsage($t),f.frustumCulled=!1,this.scene.add(f),{mesh:f,opacity:h,highlight:d}},e=t(96,!1),i=t(576,!0);this.primary=e.mesh,this.primary.name="line-neighbors-primary",this.primaryOpacity=e.opacity,this.primaryHighlight=e.highlight,this.connections=i.mesh,this.connections.name="line-neighbors-connections",this.connectionOpacity=i.opacity;const n=.72,s=.34,a=755;this.camera.position.set(Math.sin(n)*Math.cos(s)*a,Math.sin(s)*a,Math.cos(n)*Math.cos(s)*a),this.camera.lookAt(0,0,0)}setActive(t,e){t&&!this.orbit&&(this.orbit=new gr(this.camera,e),this.orbit.enableDamping=!0,this.orbit.dampingFactor=.08,this.orbit.enablePan=!1,this.orbit.minDistance=500,this.orbit.maxDistance=1600,this.orbit.rotateSpeed=.6,this.orbit.autoRotate=!0,this.orbit.autoRotateSpeed=.35,this.orbit.addEventListener("start",()=>{this.autoOrbit=!1})),this.orbit&&(this.orbit.enabled=t)}trigger(t,e){this.network.trigger(t,e)}reset(){this.network.reset()}tube(t,e,i,n,s){this.a.fromArray(i),this.b.fromArray(n);const a=this.a.distanceTo(this.b);this.object.position.copy(this.a).add(this.b).multiplyScalar(.5),this.b.sub(this.a).normalize(),this.object.quaternion.setFromUnitVectors(this.axis,this.b),this.object.scale.set(s,Math.max(.001,a),s),this.object.updateMatrix(),t.setMatrixAt(e,this.object.matrix)}updateFrame(t,e,i,n){this.network.update(t,e,n,i);const s=.65+Eo(i.size)*.7;for(let o=0;o<this.network.segments.length;o++){const l=this.network.segments[o],c=this.network.strengths[o];this.tube(this.primary,o,this.network.nodes[l.a].p,this.network.nodes[l.b].p,l.radius*s),this.primaryOpacity.setX(o,.97),this.primaryHighlight.setX(o,c)}const a=this.network.visibleLinks();this.connections.count=a.length;for(let o=0;o<a.length;o++){const l=a[o],c=li(1-l.d/(n.lineReach+18),.06,1);this.tube(this.connections,o,l.a,l.b,n.lineWidth*s),this.connectionOpacity.setX(o,l.opacity*(.32+c*.4))}this.primary.instanceMatrix.needsUpdate=this.connections.instanceMatrix.needsUpdate=!0,this.primaryOpacity.needsUpdate=this.connectionOpacity.needsUpdate=!0,this.primaryHighlight.needsUpdate=!0,this.uniforms.uNoteColor.value.set(To(n).lineColor).convertLinearToSRGB(),this.uniforms.uBrightness.value=.55+Eo(i.brightness)*.7}draw(t,e,i,n,s){this.updateFrame(e,i,n,s),this.layout(),this.camera.aspect=this.viewport.z/this.viewport.w,this.camera.updateProjectionMatrix(),this.orbit&&(this.orbit.autoRotate=this.autoOrbit&&!s.linePaused,this.orbit.update(i));const a=window.innerWidth,o=window.innerHeight;t.getClearColor(this.previousClear);const l=t.getClearAlpha();t.setViewport(0,0,a,o),t.setScissorTest(!1),t.setClearColor(this.uniforms.uPaper.value,1),t.clear(),t.setViewport(this.viewport.x,this.viewport.y,this.viewport.z,this.viewport.w),t.setScissor(this.viewport.x,this.viewport.y,this.viewport.z,this.viewport.w),t.setScissorTest(!0),t.render(this.scene,this.camera),t.setScissorTest(!1),t.setViewport(0,0,a,o),t.setClearColor(this.previousClear,l)}layout(){const t=window.innerWidth,e=window.innerHeight,i=document.querySelector(".slewn-panel")?.getBoundingClientRect(),n=document.body.classList.contains("stage-clean"),s=!!document.querySelector(".slewn.collapsed");!n&&!s&&i&&t>760?this.viewport.set(0,0,Math.max(200,i.left-12),e):!n&&!s&&i&&t<=760?this.viewport.set(0,e-i.top,t,Math.max(140,i.top)):this.viewport.set(0,0,t,e)}}const Pb=["interference","flock","tidal","tidal-original","line-neighbors","particle-stream","tidal-saved","tidal-morph"],Nu=r=>Pb.includes(r)?r:"interference";function Db(r){const t=r&&typeof r=="object"?r:{},e=(i,n,s,a)=>typeof i=="number"&&Number.isFinite(i)?Math.max(s,Math.min(a,i)):n;return{originalDensity:e(t.originalDensity,.5,0,1),originalDecay:e(t.originalDecay,2,.2,4)}}const Lu=r=>[1,.65,.5].includes(Number(r))?Number(r):1,Or=r=>r==="tidal"||r==="tidal-saved"||r==="tidal-morph",Xr=r=>r&&typeof r=="object"&&!Array.isArray(r)?r:{},Wr=(r,t=1)=>typeof r=="number"&&Number.isFinite(r)?Math.max(0,Math.min(1,r)):t,Xl=Ye({tidalNeighborCohesion:1.2,tidalBloomMin:0,tidalBloom:6.75,tidalBloomDuration:.4,tidalBloomAttackRatio:.05,tidalBloomTrigger:"all",tidalCameraDuration:.2,tidalCameraMinDistance:280,tidalCameraMaxDistance:440,tidalCameraTrigger:"all"});function Fu(r){const t=Xr(r),e={...Xl};for(const i of Object.keys(Xl)){const n=t[i];typeof Xl[i]=="number"?typeof n=="number"&&Number.isFinite(n)&&(e[i]=n):typeof n=="string"&&(e[i]=n)}return{...Ye(e),tidalDensity:Wr(t.tidalDensity)}}class Uu{current;saved;morph;constructor(t){const e=Xr(t);this.current={...Ye(e),tidalDensity:Wr(e.tidalDensity)},this.saved=Fu(e.tidalSavedProfile);const i={...this.current,...Xr(e.tidalMorphProfile)};this.morph={...Xe(i),tidalDensity:Wr(i.tidalDensity)}}profile(t){return t==="tidal-morph"?this.morph:t==="tidal-saved"?this.saved:this.current}capture(t,e){if(t==="tidal-morph"){const i=Xr(e);Object.assign(this.morph,Xe(i),{tidalDensity:Wr(i.tidalDensity)})}else if(t==="tidal-saved")Object.assign(this.saved,Fu(e));else if(t==="tidal"){const i=Xr(e);Object.assign(this.current,Ye(i),{tidalDensity:Wr(i.tidalDensity)})}}snapshot(){return{...this.current,tidalSavedProfile:{...this.saved},tidalMorphProfile:{...this.morph,tidalDistortionOrder:[...this.morph.tidalDistortionOrder],tidalDistortionLayers:this.morph.tidalDistortionLayers.map(t=>({...t}))}}}}const ku=[["intensity","Intensity"],["scale","Scale"],["speed","Speed"],["detail","Detail"]];class Ib{constructor(t,e){this.read=t,this.change=e,this.root.className="tidal-distortion-controls",this.root.innerHTML=`<legend>Distortion <span>011 / EFFECT LAB</span></legend>
   <p class="distortion-select-help">Effects run in the order you select them. Turn one off and select it again to move it to the end.</p>
   <div class="distortion-modes" role="group" aria-label="Distortion effects">${Ii.map(a=>`<button type="button" data-distortion-mode="${a.id}" aria-pressed="false" title="${a.description}"><span>${a.name}</span><small>${a.label}</small></button>`).join("")}</div>
   <p class="distortion-status" aria-live="polite"></p>
   <label class="distortion-editor">Edit effect<select aria-label="Distortion parameter effect">${Ii.map(a=>`<option value="${a.id}">${a.name} · ${a.label}</option>`).join("")}</select></label>
   <p class="distortion-edit-status"></p>
   <div class="distortion-parameters">${ku.map(([a,o])=>`<div class="distortion-parameter"><label>${o}<output id="distortion-${a}-value"></output><input type="range" data-distortion-param="${a}" aria-label="Distortion ${o.toLowerCase()}" min="0" max="1" step="0.01"></label><button type="button" data-distortion-map="${a}" aria-label="Map distortion ${o.toLowerCase()} to CV">Map CV</button></div>`).join("")}</div>
   <div class="distortion-actions"><button type="button" data-distortion-off aria-pressed="true">Disable all</button><button type="button" data-distortion-reset>Reset all</button></div>
   <p class="distortion-help">The chain below the effect buttons shows processing order. Each effect keeps its own settings. Map CV connects the current effect parameter to a track. Speed 0 freezes distortion while the field keeps moving.</p>`,this.root.insertAdjacentHTML("beforeend",`<div class="distortion-burst">
   <div class="distortion-burst-title"><strong>Burst</strong><button type="button" data-distortion-test aria-label="Trigger distortion burst">Trigger</button></div>
   <label>Duration <span><input type="number" data-distortion-duration aria-label="Distortion burst duration in seconds" min="0.1" max="120" step="0.1"> s</span></label>
   <label class="distortion-live-channel">Live note channel<input type="text" data-distortion-trigger aria-label="Distortion burst live note channel" placeholder="off / all / /melody1" list="distortion-trigger-options" spellcheck="false"></label>
   <datalist id="distortion-trigger-options"><option value="off"><option value="all">${[1,2,3,4].map(a=>`<option value="/melody${a}">`).join("")}</datalist>
   <p class="distortion-help">Instantly accelerate the selected effects into a new random state. Only speed returns to normal. Duration sets the deceleration time, with a minimum of 0.1 s (100 ms). Retriggering continues from the current state. For live control, map a Slewn track to Distortion Burst.</p>
  </div>`);const i=this.root.querySelector("[data-distortion-duration]");i.onchange=()=>this.commit({...this.read(),tidalDistortionBurstDuration:i.valueAsNumber},i);const n=this.root.querySelector("[data-distortion-trigger]");n.onchange=()=>this.commit({...this.read(),tidalDistortionBurstTrigger:n.value.trim()},n),this.root.querySelector("[data-distortion-test]").onclick=()=>window.dispatchEvent(new Event("tidal-distortion-test")),this.root.querySelectorAll("[data-distortion-mode]").forEach(a=>{a.onclick=()=>this.commit(CM(this.read(),Number(a.dataset.distortionMode)))});const s=this.root.querySelector('[aria-label="Distortion parameter effect"]');s.onchange=()=>this.commit(Rc(this.read(),Number(s.value))),this.root.querySelectorAll("[data-distortion-map]").forEach(a=>{a.onclick=()=>window.dispatchEvent(new CustomEvent("tidal-map-cv",{detail:{target:`distortion.${s.value}.${a.dataset.distortionMap}`}}))}),this.root.querySelectorAll("[data-distortion-param]").forEach(a=>{a.oninput=()=>this.commit(RM(this.read(),Number(s.value),{[a.dataset.distortionParam]:a.valueAsNumber}))}),this.root.querySelector("[data-distortion-off]").onclick=()=>this.commit(PM(this.read())),this.root.querySelector("[data-distortion-reset]").onclick=()=>{this.commit(ci()),window.dispatchEvent(new Event("tidal-distortion-reset"))},this.sync()}root=document.createElement("fieldset");commit(t,e){this.change(ci(t)),this.sync(e)}sync(t){const e=ci(this.read()),i=e.tidalDistortionLayers,n=TM(e).filter(c=>c.enabled),s=i.find(c=>c.mode===e.tidalDistortionMode)??n[0]??i[0];for(const c of this.root.querySelectorAll("[data-distortion-mode]")){const h=Number(c.dataset.distortionMode),d=n.findIndex(u=>u.mode===h);c.setAttribute("aria-pressed",String(d>=0)),c.querySelector("small").textContent=`${d>=0?`${d+1} · `:""}${Ii[h-1].label}`}this.root.querySelector("[data-distortion-off]").setAttribute("aria-pressed",String(!n.length));const a=this.root.querySelector("[data-distortion-test]");a.disabled=!n.length,a.title=n.length?"Trigger the selected effects":"Select at least one distortion effect first";const o=this.root.querySelector("[data-distortion-duration]"),l=this.root.querySelector("[data-distortion-trigger]");(document.activeElement!==o||t===o)&&(o.value=String(e.tidalDistortionBurstDuration)),(document.activeElement!==l||t===l)&&(l.value=e.tidalDistortionBurstTrigger),this.root.querySelector(".distortion-status").textContent=n.length?`${n.length} selected · ${n.map(c=>Ii[c.mode-1].name+(c.intensity===0?" (0%)":"")).join(" → ")}`:"All effects off · Original image",this.root.querySelector('[aria-label="Distortion parameter effect"]').value=String(s.mode),this.root.querySelector(".distortion-edit-status").textContent=`${Ii[s.mode-1].description} · ${s.enabled?"Enabled":"Disabled · Settings can still be adjusted"}`;for(const c of this.root.querySelectorAll("[data-distortion-map]"))c.title=`Map ${Ii[s.mode-1].name} ${c.dataset.distortionMap} to a CV track`;for(const[c]of ku)this.root.querySelector(`[data-distortion-param="${c}"]`).value=String(s[c]),this.root.querySelector(`#distortion-${c}-value`).textContent=`${Math.round(s[c]*100)}%`}}const Ou="slewn-stage-v1",Wl={interference:"02 / Interference",flock:"04 / Flock",tidal:"05 / Tidal","tidal-original":"07 / Tidal Original","line-neighbors":"08 / Line Neighbors","particle-stream":"09 / Particle Stream","tidal-saved":"10 / Tidal Saved","tidal-morph":"11 / Tidal Morph"},zu=(r,t,e,i)=>typeof r=="number"&&Number.isFinite(r)?Math.max(e,Math.min(i,r)):t;class Nb{constructor(t){this.changed=t;try{const u=JSON.parse(localStorage.getItem(Ou)??"{}");this.tidalProfiles=new Uu(u),this.scene=Nu(u.scene??"flock"),this.density=zu(u.density,.5,0,1),Object.assign(this,this.tidalProfiles.current,Db(u),To(u),hr(u)),this.decay=zu(u.decay,1.4,.2,4),this.quality=Lu(u.quality),this.tidalMonochrome=u.tidalMonochrome===!0}catch{}new URLSearchParams(location.search),this.scene="tidal-morph",this.root.className="stage-controls",this.root.innerHTML=`<div class="stage-label">011 / TIDAL MORPH <span>SLEWN / LIVE VISUALS</span></div>
      
      <p class="stage-description"></p><p class="stage-reference" hidden></p><button type="button" id="tidal-palette" aria-pressed="false">Palette / Cobalt</button>
      <div class="stage-sliders"><label>Density <output id="stage-density-value"></output><input id="stage-density" aria-label="Visual density" type="range" min="0" max="1" step="0.01"></label><label>Response <output id="stage-decay-value"></output><input id="stage-decay" aria-label="Note response duration" type="range" min="0.2" max="4" step="0.1"></label></div>
      <div class="tidal-presentation-controls" hidden>
        <fieldset class="tidal-presentation-group tidal-morph-group" hidden><legend>Morph · Particles / Circles</legend>
        <label class="tidal-morph-position">Form · Particles to circles <output id="tidalMorphPosition-value"></output><input data-tidal-presentation="tidalMorphPosition" aria-label="Tidal morph position" type="range" min="0" max="1" step="0.01"></label>
        <label class="tidal-morph-duration">Morph duration <output id="tidalMorphDuration-value"></output><input data-tidal-presentation="tidalMorphDuration" aria-label="Tidal morph duration in seconds" type="number" min="0.1" max="30" step="0.1"></label>
        <label class="tidal-morph-channel">Live Morph channel <input id="tidal-morph-trigger" aria-label="Tidal morph trigger channel" aria-describedby="tidal-morph-trigger-help" type="text" list="tidal-morph-channels" maxlength="128" spellcheck="false" autocomplete="off"><span id="tidal-morph-trigger-help">all / off / OSC address. Each onset switches toward the other form. Key test has its own Morph key.</span></label>
        <datalist id="tidal-morph-channels"><option value="all"></option><option value="off"></option><option value="/melody1"></option><option value="/melody2"></option><option value="/melody3"></option><option value="/melody4"></option></datalist>
        <button type="button" id="tidal-morph-test">Morph Test · switch form</button>
        </fieldset>
        <fieldset class="tidal-presentation-group tidal-network-group"><legend>Network · lines and light</legend>
        <label>Circle width <output id="tidalCircleWidth-value"></output><input data-tidal-presentation="tidalCircleWidth" aria-label="Tidal circle width" type="range" min="0.05" max="3" step="0.05"></label>
        <label>Link width <output id="tidalLinkWidth-value"></output><input data-tidal-presentation="tidalLinkWidth" aria-label="Tidal contact line width" type="range" min="0.05" max="3" step="0.05"></label>
        <label class="tidal-note-brightness">Note brightness <output id="tidalNoteBrightness-value"></output><input data-tidal-presentation="tidalNoteBrightness" aria-label="Tidal note highlight brightness" type="range" min="1" max="10" step="0.1"></label>
        <p id="tidal-network-help">Notes illuminate circles and adjacent links along a connected route.</p>
        </fieldset>
        <fieldset class="tidal-presentation-group tidal-cohesion-group"><legend>Particles · local cohesion</legend>
        <label>Neighbor cohesion <output id="tidalNeighborCohesion-value"></output><input data-tidal-presentation="tidalNeighborCohesion" aria-label="Tidal neighbor cohesion strength" aria-describedby="tidal-cohesion-help" type="range" min="0" max="5" step="0.05"></label>
        <p id="tidal-cohesion-help">0 Free flow · 1 Local groups · 5 Broad clusters</p>
        </fieldset>
        <fieldset class="tidal-presentation-group tidal-bloom-group"><legend>Bloom · light pulse</legend>
        <label>Bloom min <output id="tidalBloomMin-value"></output><input data-tidal-presentation="tidalBloomMin" aria-label="Tidal bloom minimum strength" type="range" min="0" max="10" step="0.05"></label>
        <label>Bloom peak <output id="tidalBloom-value"></output><input data-tidal-presentation="tidalBloom" aria-label="Tidal bloom peak strength" type="range" min="0" max="10" step="0.05"></label>
        <label class="tidal-bloom-duration">Bloom duration · full pulse <output id="tidalBloomDuration-value"></output><input data-tidal-presentation="tidalBloomDuration" aria-label="Tidal bloom full pulse duration in seconds" type="number" min="0.1" max="120" step="0.1"></label>
        <label class="tidal-bloom-split">Attack / Release split <output id="tidalBloomAttackRatio-value"></output><input data-tidal-presentation="tidalBloomAttackRatio" aria-label="Tidal bloom attack fraction of full pulse" type="range" min="0.05" max="0.95" step="0.01"></label>
        <p class="tidal-bloom-phases" aria-live="polite"><span>Attack · rise <output id="tidalBloomAttack-value"></output></span><span>Release · fall <output id="tidalBloomRelease-value"></output></span></p>
        <label class="tidal-bloom-channel">Live Bloom channel <input id="tidal-bloom-trigger" aria-label="Tidal bloom trigger channel" aria-describedby="tidal-bloom-trigger-help" type="text" list="tidal-bloom-channels" maxlength="128" spellcheck="false" autocomplete="off"><span id="tidal-bloom-trigger-help">Live OSC: all / off / address. Key test has its own Bloom key.</span></label>
        <datalist id="tidal-bloom-channels"><option value="all"></option><option value="off"></option><option value="/melody1"></option><option value="/melody2"></option><option value="/melody3"></option><option value="/melody4"></option></datalist>
        <button type="button" id="tidal-bloom-test">Bloom Test</button>
        </fieldset>
        <fieldset class="tidal-presentation-group tidal-camera-group"><legend>Camera · flight</legend>
        <label class="tidal-camera-duration">Camera duration <output id="tidalCameraDuration-value"></output><input data-tidal-presentation="tidalCameraDuration" aria-label="Tidal camera flight duration" type="range" min="0.1" max="20" step="0.1"></label>
        <label>Distance min <output id="tidalCameraMinDistance-value"></output><input data-tidal-presentation="tidalCameraMinDistance" aria-label="Tidal camera random minimum distance" aria-describedby="tidal-camera-distance-help" type="number" min="50" max="5000" step="10"></label>
        <label>Distance max <output id="tidalCameraMaxDistance-value"></output><input data-tidal-presentation="tidalCameraMaxDistance" aria-label="Tidal camera random maximum distance" aria-describedby="tidal-camera-distance-help" type="number" min="50" max="5000" step="10"></label>
        <p id="tidal-camera-distance-help">Distance from the center in scene units. Lower values move closer; each trigger chooses a distance within this range.</p>
        <label class="tidal-camera-channel">Live camera channel <input id="tidal-camera-trigger" aria-label="Tidal camera trigger channel" aria-describedby="tidal-camera-trigger-help" type="text" list="tidal-camera-channels" maxlength="128" spellcheck="false" autocomplete="off"><span id="tidal-camera-trigger-help">Live OSC: all / off / address. Key test has its own Camera key.</span></label>
        <datalist id="tidal-camera-channels"><option value="all"></option><option value="off"></option><option value="/melody1"></option><option value="/melody2"></option><option value="/melody3"></option><option value="/melody4"></option></datalist>
        <button type="button" id="tidal-camera-test">Camera Test</button>
        </fieldset>
      </div>
      <div class="line-neighbors-controls" hidden><label>Motion <output id="lineMotion-value"></output><input data-line="lineMotion" aria-label="Line motion amplitude" type="range" min="8" max="72" step="1"></label><label>Reach <output id="lineReach-value"></output><input data-line="lineReach" aria-label="Line connection reach" type="range" min="25" max="125" step="1"></label><label>Link width <output id="lineWidth-value"></output><input data-line="lineWidth" aria-label="Line connection width" type="range" min="0.4" max="2" step="0.05"></label><label>Response <output id="lineResponse-value"></output><input data-line="lineResponse" aria-label="Line note response duration" type="range" min="0.2" max="4" step="0.1"></label><label class="line-color">Note color<input id="line-color" aria-label="Line note highlight color" type="color"><output id="line-color-value"></output></label><button type="button" id="line-pause" aria-pressed="false">Pause motion</button></div>
      <div class="ribbon-controls" hidden><label>Expansion min <output id="ribbonMin-value"></output><input data-ribbon="ribbonMin" aria-label="Ribbon expansion minimum" type="range" min="1" max="10" step="0.1"></label><label>Expansion max <output id="ribbonMax-value"></output><input data-ribbon="ribbonMax" aria-label="Ribbon expansion maximum" type="range" min="1" max="10" step="0.1"></label><label class="ribbon-response">Response <output id="ribbonResponse-value"></output><input data-ribbon="ribbonResponse" aria-label="Ribbon response duration" type="range" min="0.4" max="8" step="0.1"></label><label class="ribbon-color">Glow color<input id="ribbon-color" aria-label="Ribbon glow color" type="color"><output id="ribbon-color-value"></output></label></div>
      <div class="stage-tools"><label>Resolution<select aria-label="Render resolution"><option value="1">Full</option><option value="0.65">Balanced</option><option value="0.5">Low</option></select></label><button type="button" id="stage-clean">Clean view</button><button type="button" id="stage-full">Fullscreen</button><button type="button" id="stage-black" aria-pressed="false">Blackout</button></div>
      <p class="stage-keys">H Controls · F Fullscreen · B Blackout</p>`,document.querySelector(".slewn-body").prepend(this.root),this.distortionControls=new Ib(()=>this,u=>{Object.assign(this,u),this.save()}),this.root.querySelector(".tidal-morph-group").after(this.distortionControls.root);const e=document.createElement("button");e.id="stage-restore",e.textContent="Show controls · H",e.onclick=()=>this.clean(!1),document.body.appendChild(e);const i=document.createElement("div");i.id="stage-shade",i.setAttribute("aria-hidden","true"),document.body.appendChild(i),this.root.querySelectorAll("[data-scene]").forEach(u=>u.onclick=()=>this.select(Nu(u.dataset.scene)));const n=this.root.querySelector("#stage-density");n.value=String(this.density);const s=this.root.querySelector("#stage-decay");s.value=String(this.decay),n.oninput=()=>{Or(this.scene)?this.tidalDensity=n.valueAsNumber:this.scene==="tidal-original"?this.originalDensity=n.valueAsNumber:this.density=n.valueAsNumber,this.labels(),this.save()},s.oninput=()=>{this.scene==="tidal-original"?this.originalDecay=s.valueAsNumber:this.decay=s.valueAsNumber,this.labels(),this.save()};const a=this.root.querySelector('[aria-label="Render resolution"]');a.value=String(this.quality),a.onchange=()=>{this.quality=Lu(a.value),this.save(),window.dispatchEvent(new Event("resize"))},this.root.querySelector("#tidal-palette").onclick=()=>{this.tidalMonochrome=!this.tidalMonochrome,this.labels(),this.save()},this.root.querySelector("#stage-clean").onclick=()=>this.clean(!0),this.root.querySelector("#stage-full").onclick=()=>this.fullscreen(),this.root.querySelector("#stage-black").onclick=()=>this.toggleBlackout(),window.addEventListener("keydown",u=>{if(u.repeat||u.metaKey||u.ctrlKey||u.altKey||u.target?.closest("input,select,textarea,[contenteditable=true]"))return;const f=u.key.toLowerCase();f==="h"&&(u.preventDefault(),this.clean(!document.body.classList.contains("stage-clean"))),f==="b"&&(u.preventDefault(),this.toggleBlackout()),f==="f"&&(u.preventDefault(),this.fullscreen())}),this.root.querySelectorAll("[data-tidal-presentation]").forEach(u=>{const f=u.dataset.tidalPresentation,g=()=>{const y={...this,[f]:u.valueAsNumber};Number.isFinite(u.valueAsNumber)&&(f==="tidalCameraMinDistance"&&(y.tidalCameraMaxDistance=Math.max(this.tidalCameraMaxDistance,u.valueAsNumber)),f==="tidalCameraMaxDistance"&&(y.tidalCameraMinDistance=Math.min(this.tidalCameraMinDistance,u.valueAsNumber))),Object.assign(this,Xe(y)),this.labels(u),this.save()};u.type==="number"?u.onchange=g:u.oninput=g});const o=this.root.querySelector("#tidal-morph-trigger");o.onchange=()=>{this.tidalMorphTrigger=Xe({tidalMorphTrigger:o.value}).tidalMorphTrigger,this.labels(o),this.save()},this.root.querySelector("#tidal-morph-test").onclick=()=>window.dispatchEvent(new Event("tidal-morph-test"));const l=this.root.querySelector("#tidal-bloom-trigger");l.onchange=()=>{this.tidalBloomTrigger=Ye({tidalBloomTrigger:l.value}).tidalBloomTrigger,this.labels(l),this.save()},this.root.querySelector("#tidal-bloom-test").onclick=()=>window.dispatchEvent(new Event("tidal-bloom-test"));const c=this.root.querySelector("#tidal-camera-trigger");c.onchange=()=>{this.tidalCameraTrigger=Ye({tidalCameraTrigger:c.value}).tidalCameraTrigger,this.labels(c),this.save()},this.root.querySelector("#tidal-camera-test").onclick=()=>window.dispatchEvent(new Event("tidal-camera-test")),this.root.querySelectorAll("[data-line]").forEach(u=>{const f=u.dataset.line;u.value=String(this[f]),u.oninput=()=>{this[f]=u.valueAsNumber,this.labels(),this.save()}});const h=this.root.querySelector("#line-color");h.value=this.lineColor,h.oninput=()=>{this.lineColor=h.value,this.labels(),this.save()},this.root.querySelector("#line-pause").onclick=()=>{this.linePaused=!this.linePaused,this.labels(),this.save()},this.root.querySelectorAll("[data-ribbon]").forEach(u=>{const f=u.dataset.ribbon;u.oninput=()=>{this[f]=u.valueAsNumber,f==="ribbonMin"&&(this.ribbonMax=Math.max(this.ribbonMin,this.ribbonMax)),f==="ribbonMax"&&(this.ribbonMin=Math.min(this.ribbonMin,this.ribbonMax)),this.labels(),this.save()}});const d=this.root.querySelector("#ribbon-color");d.value=this.ribbonColor,d.oninput=()=>{this.ribbonColor=d.value,this.labels(),this.save()},this.labels(),this.select(this.scene)}scene="flock";density=.5;tidalDensity=1;originalDensity=.5;originalDecay=2;decay=1.4;quality=1;blackout=!1;tidalMonochrome=!1;lineMotion=72;lineReach=125;lineWidth=.8;lineResponse=1.4;linePaused=!1;lineColor="#ff6b35";tidalNeighborCohesion=1;tidalMorphPosition=0;tidalMorphDuration=3;tidalMorphTrigger="off";tidalDistortionMode=0;tidalDistortionIntensity=0;tidalDistortionScale=.5;tidalDistortionSpeed=.35;tidalDistortionDetail=.5;tidalDistortionLayers=[];tidalDistortionOrder=[];tidalDistortionBurstDuration=.8;tidalDistortionBurstTrigger="off";tidalCircleWidth=.55;tidalLinkWidth=.3;tidalNoteBrightness=3;tidalCameraMinDistance=450;tidalCameraMaxDistance=1100;tidalBloom=1.1;tidalBloomMin=0;tidalBloomDuration=1.5;tidalBloomAttackRatio=.2;tidalBloomAttack=.3;tidalBloomRelease=1.2;tidalBloomTrigger="all";tidalCameraDuration=2;tidalCameraTrigger="all";ribbonMin=1;ribbonMax=10;ribbonResponse=2.4;ribbonColor="#ff6b35";root=document.createElement("section");distortionControls;tidalProfiles=new Uu;activeTidal=null;syncMorphPosition(t){if(this.scene!=="tidal-morph"||!Number.isFinite(t))return;const e=Xe({tidalMorphPosition:t}).tidalMorphPosition;e!==this.tidalMorphPosition&&(this.tidalMorphPosition=e,this.labels(),this.save())}labels(t){this.distortionControls.sync();const e=(a,o)=>{(document.activeElement!==a||a===t||a.type==="range")&&(a.value=o)},i=a=>`${Number(a.toFixed(3))} s`;for(const a of["tidalMorphPosition","tidalMorphDuration","tidalCircleWidth","tidalLinkWidth","tidalNoteBrightness","tidalNeighborCohesion","tidalBloom","tidalBloomMin","tidalBloomDuration","tidalBloomAttackRatio","tidalCameraDuration","tidalCameraMinDistance","tidalCameraMaxDistance"]){const o=a==="tidalCircleWidth"||a==="tidalLinkWidth"||a==="tidalNoteBrightness"||a==="tidalBloom"||a==="tidalBloomMin",l=a==="tidalCameraMinDistance"||a==="tidalCameraMaxDistance";e(this.root.querySelector('[data-tidal-presentation="'+a+'"]'),String(this[a])),this.root.querySelector("#"+a+"-value").textContent=a==="tidalMorphPosition"?`${Math.round(this[a]*100)}% circles`:l?String(Number(this[a].toFixed(1))):a==="tidalNeighborCohesion"?`${this[a].toFixed(2)}×`:o?this[a].toFixed(2):a==="tidalBloomAttackRatio"?`${Math.round(this[a]*100)}% / ${Math.round((1-this[a])*100)}%`:i(this[a])}for(const a of["tidalBloomAttack","tidalBloomRelease"])this.root.querySelector("#"+a+"-value").textContent=i(this[a]);e(this.root.querySelector("#tidal-morph-trigger"),this.tidalMorphTrigger),e(this.root.querySelector("#tidal-bloom-trigger"),this.tidalBloomTrigger),e(this.root.querySelector("#tidal-camera-trigger"),this.tidalCameraTrigger);for(const a of["ribbonMin","ribbonMax","ribbonResponse"])this.root.querySelector('[data-ribbon="'+a+'"]').value=String(this[a]),this.root.querySelector("#"+a+"-value").textContent=this[a].toFixed(1)+(a==="ribbonResponse"?" s":"×");this.root.querySelector("#ribbon-color-value").textContent=this.ribbonColor.toUpperCase();for(const a of["lineMotion","lineReach","lineWidth","lineResponse"])this.root.querySelector("#"+a+"-value").textContent=a==="lineWidth"?this[a].toFixed(2):a==="lineResponse"?this[a].toFixed(1)+" s":String(this[a]);this.root.querySelector("#line-color-value").textContent=this.lineColor.toUpperCase();const n=this.root.querySelector("#line-pause");n.textContent=this.linePaused?"Resume motion":"Pause motion",n.setAttribute("aria-pressed",String(this.linePaused));const s=this.root.querySelector("#tidal-palette");s.textContent=this.tidalMonochrome?"Palette / Silver":"Palette / Cobalt",s.setAttribute("aria-pressed",String(this.tidalMonochrome)),this.root.querySelector("#stage-density-value").textContent=`${Math.round(this.currentDensity()*100)}%`,this.root.querySelector("#stage-decay-value").textContent=`${this.currentDecay().toFixed(1)} s`}save(){this.tidalProfiles.capture(this.activeTidal,this);try{localStorage.setItem(Ou,JSON.stringify({scene:this.scene,density:this.density,originalDensity:this.originalDensity,originalDecay:this.originalDecay,decay:this.decay,quality:this.quality,tidalMonochrome:this.tidalMonochrome,...To(this),...hr(this),...this.tidalProfiles.snapshot()}))}catch{}}select(t){t="tidal-morph",this.tidalProfiles.capture(this.activeTidal,this),this.activeTidal=Or(t)?t:null,this.activeTidal&&Object.assign(this,this.tidalProfiles.profile(this.activeTidal)),this.scene=t,document.body.dataset.visualScene=t,document.body.dataset.autonomousStudy="false",this.root.querySelectorAll("[data-scene]").forEach(i=>i.setAttribute("aria-pressed",String(i.dataset.scene===t))),this.root.querySelector(".stage-description").textContent="A flowing field of particles and circles. Explore Morph, Camera, Bloom and layered Distortion. Drag to orbit and scroll to zoom.";const e=this.root.querySelector(".stage-reference");e.hidden=!Gr(t),e.textContent=Gr(t)?$M[t].reference:"",this.root.querySelector(".stage-sliders").hidden=Gr(t)||t==="flock"||t==="line-neighbors"||t==="particle-stream",this.root.querySelector("#stage-density").value=String(this.currentDensity()),this.root.querySelector("#stage-decay").value=String(this.currentDecay()),this.root.querySelector("#stage-decay").parentElement.hidden=Or(t),this.root.querySelector("#tidal-palette").hidden=t!=="tidal-original",this.root.querySelector(".tidal-presentation-controls").hidden=!Or(t),this.root.querySelector(".tidal-network-group").hidden=t!=="tidal"&&t!=="tidal-morph",this.root.querySelector("#tidal-network-help").textContent=t==="tidal-morph"?"Notes illuminate network routes while retaining local particle color and elastic deformation.":"Notes illuminate circles and adjacent links along a connected route.",this.root.querySelector(".tidal-morph-group").hidden=t!=="tidal-morph",this.distortionControls.root.hidden=t!=="tidal-morph",this.root.querySelector(".line-neighbors-controls").hidden=t!=="line-neighbors",this.root.querySelector(".ribbon-controls").hidden=t!=="interference",this.labels(),document.querySelector(".slewn h1").innerHTML=Gr(t)?Wl[t].slice(5)+"<span> / Slewn</span>":t==="flock"?"Flock<span> / Slewn</span>":t==="tidal"?"Tidal<span> / Slewn</span>":t==="tidal-morph"?"Tidal Morph<span> / Slewn</span>":t==="tidal-saved"?"Tidal Saved<span> / Slewn</span>":t==="tidal-original"?"Tidal Original<span> / Slewn</span>":t==="line-neighbors"?"Line Neighbors<span> / Slewn</span>":t==="particle-stream"?"Particle Stream<span> / Slewn</span>":"Signal<span> / Slewn</span>",document.querySelector(".slewn-heading p").textContent=t==="flock"?"Sound into motion.":Wl[t].slice(5),document.querySelector(".slewn-kicker").textContent=t==="interference"?"RIBBONS / NOTES / ORBIT":t==="flock"?"A LIVE PARTICLE INSTRUMENT":t==="tidal"?"POSITIONS / FLOW / WAVES":t==="tidal-morph"?"PARTICLES / MORPH / CIRCLES":t==="tidal-saved"?"SAVED / FORCE FLOW / FILAMENTS":t==="tidal-original"?"FLOW / LIGHT / NOTES":t==="line-neighbors"?"MOTION / PROXIMITY / CONNECTION":t==="particle-stream"?"FLOW / SPLASH / NOTES":"MONOCHROME SIGNAL STUDIES",document.title=`${t==="flock"?"Flock":Wl[t].slice(5)} / Slewn`,this.updateLocation(),this.save(),this.changed(),window.dispatchEvent(new Event("resize"))}currentDensity(){return Or(this.scene)?this.tidalDensity:this.scene==="tidal-original"?this.originalDensity:this.density}currentDecay(){return this.scene==="tidal-original"?this.originalDecay:this.decay}updateLocation(){const t=new URL(location.href);t.searchParams.set("scene",this.scene),t.searchParams.delete("layout"),history.replaceState(null,"",t)}clean(t){document.body.classList.toggle("stage-clean",t),window.dispatchEvent(new Event("resize"))}toggleBlackout(){this.blackout=!this.blackout,document.body.classList.toggle("stage-blackout",this.blackout),this.root.querySelector("#stage-black").setAttribute("aria-pressed",String(this.blackout))}fullscreen(){(document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()).catch(()=>{this.root.querySelector(".stage-description").textContent="Fullscreen is unavailable in this browser window. Clean view still works."})}}const tp=document.getElementById("app"),Yl=document.getElementById("hud"),xe=new Cx({antialias:!0,powerPreference:"high-performance"});xe.setPixelRatio(Math.min(window.devicePixelRatio,2));xe.setSize(window.innerWidth,window.innerHeight);xe.setClearColor(395276,1);tp.appendChild(xe.domElement);const Ic=new ls,We=new Fe(60,window.innerWidth/window.innerHeight,.1,1e4);We.position.set(0,0,700);const is=new gr(We,xe.domElement);is.enableDamping=!0;is.dampingFactor=.08;is.rotateSpeed=.6;is.autoRotate=!1;const ae=new Fo(Ic,We),bi=new Wx,Jn=new Cf,dr=new Cf;dr.p={...$x};const Zi=new jx,Yr=new Kx,Xn=uM();Xn&&(Br(ae.p,Xn.flock),Br(Jn.p,Xn.audioConductor),Br(dr.p,Xn.visualConductor),Br(Zi.p,Xn.synchresis),ae.p.particleCount!==ae.pool.N&&ae.resizeIfNeeded(),console.log("[main] restored settings from",new Date(Xn.savedAt||0).toLocaleString()));let dc=null,Bu=null;new URLSearchParams(location.search).get("slewn");let Qt=null,Qn=null,ts=null,gt=null,un=null,fn=null,pn=null,mn=null;const Lb=()=>(un||(un=new M_(We),fn=new gr(un.camera,xe.domElement),fn.enablePan=!1,fn.enableDamping=!1,fn.rotateSpeed=.6,fn.addEventListener("start",()=>un?.cameraFlight.cancel())),un),Fb=()=>(pn||(pn=new B_(We),mn=new gr(pn.camera,xe.domElement),mn.enablePan=!1,mn.enableDamping=!1,mn.rotateSpeed=.6,mn.addEventListener("start",()=>pn?.cameraFlight.cancel())),pn);let ni=null,gn=null;const qs=()=>(ni||(ni=new mb(We),ni.enableAsyncSource(),gn=new gr(ni.camera,xe.domElement),gn.enablePan=!1,gn.enableDamping=!1,gn.rotateSpeed=.6,gn.addEventListener("start",()=>ni?.cameraFlight.cancel())),ni),na=()=>gt?.scene==="tidal-morph"?qs():gt?.scene==="tidal-saved"?Fb():Lb();let js=null,vn=null,Ks=null,uc=!1,fc=null;const pc=new Map;function ur(r){Ks?.contentWindow?.postMessage(r,location.origin)}function Ub(r){if(uc=r,r&&!Ks){const t=document.createElement("iframe");Ks=t,t.className="particle-stream-frame",t.title="Particle Stream visual",t.src="./particle-reference.html?embedded=1",t.addEventListener("load",()=>{fc=null,ur({type:"particle-active",active:uc})}),tp.appendChild(t)}Ks&&(Ks.hidden=!r),ur({type:"particle-active",active:r})}window.addEventListener("message",r=>{if(!(r.origin!==location.origin||r.source!==Ks?.contentWindow||!uc)){if(r.data?.type==="particle-area-status"&&typeof r.data.address=="string"&&typeof r.data.available=="boolean"){Qt?.setParticleAreaStatus(r.data.address,r.data.available);return}r.data?.type==="particle-key"&&typeof r.data.key=="string"&&/^[2-9hfb]$/i.test(r.data.key)&&window.dispatchEvent(new KeyboardEvent("keydown",{key:r.data.key,bubbles:!0}))}});const Co=document.getElementById("about-dialog"),kb=document.getElementById("about-close"),Ob=document.getElementById("about-open-from-gate");function ep(){Co.showModal()}function ip(){Co.close()}Ob.addEventListener("click",r=>{r.stopPropagation(),ep()});kb.addEventListener("click",ip);Co.addEventListener("click",r=>{r.target===Co&&ip()});window.__openAbout=ep;const Nc=document.getElementById("audio-gate");async function zb(){await bi.init();const r=gM({flock:ae,synth:bi,audioConductor:Jn,visualConductor:dr,synchresis:Zi,scorePlayer:Yr,savedSynthParams:Xn?.synth});dc=r.gui,Bu=r.synthParams;const t=()=>{dM({flock:{...ae.p},audioConductor:{...Jn.p},visualConductor:{...dr.p},synchresis:{...Zi.p},synth:{...Bu}})};window.setInterval(t,2e3),document.addEventListener("visibilitychange",()=>{document.hidden&&t()}),window.addEventListener("beforeunload",t),Nc.classList.add("hidden")}Nc.addEventListener("click",zb,{once:!0});document.getElementById("slewn-open").addEventListener("click",r=>{r.stopPropagation(),location.search="?slewn=1"});Nc.classList.add("hidden"),document.body.classList.add("slewn-mode"),Qn=new Pc(Ic,ae),ts=new JM,js=new Ab,vn=new Rb,Qt=new BM((r,t)=>{if(gt?.scene==="flock")Qn.trigger(r,t,Qt.receiver);else if(gt?.scene==="tidal-morph"){const e=Qt;gb(qs(),e.mappingRuntime.actions(r,e.receiver),r,t,e.receiver,e.mappedPresentation(gt))}else if(gt?.scene==="tidal"||gt?.scene==="tidal-saved")na().trigger(r,t,Qt.receiver,gt,!Qt.isManualTestActive());else if(gt?.scene==="interference")ts.trigger(r,t,gt);else if(gt?.scene==="tidal-original")js.trigger(r,t);else if(gt?.scene==="line-neighbors")vn.trigger(r,t);else if(gt?.scene==="particle-stream"){const e=Qt.particleRegions.regionFor(r.track.address);e!==null&&ur({type:"particle-note",address:r.track.address,pitch:r.pitch,color:r.track.color.hex,region:e,regionCount:Qt.particleRegions.count,polygon:Qt.drawnAreas.get(r.track.address)})}},()=>{Qn.clear(),ts.reset(),un?.reset(),pn?.reset(),ni?.reset(),js.reset(),vn.reset(),pc.clear(),ur({type:"particle-reset"})}),gt=new Nb(()=>{Qn.clear(),ts.reset(),un?.clearNotes(),pn?.clearNotes(),ni?.clearNotes(),js.reset(),vn.reset(),Qt.setTidalDemo(document.body.dataset.visualScene==="tidal-original"),Qt.setManualDemo(document.body.dataset.visualScene==="tidal"||document.body.dataset.visualScene==="tidal-saved"||document.body.dataset.visualScene==="tidal-morph"),Qt.setMorphDemo(document.body.dataset.visualScene==="tidal-morph"),Qt.setSlewnMappingMode(document.body.dataset.visualScene==="tidal-morph");const r=document.body.dataset.visualScene==="particle-stream";Ub(r),Qt.setParticleDemo(r)}),np(),window.addEventListener("tidal-camera-test",()=>{(gt?.scene==="tidal"||gt?.scene==="tidal-saved"||gt?.scene==="tidal-morph")&&na().triggerCamera(gt.scene==="tidal-morph"?Qt.mappedPresentation(gt):gt)}),window.addEventListener("tidal-bloom-test",()=>{(gt?.scene==="tidal"||gt?.scene==="tidal-saved"||gt?.scene==="tidal-morph")&&na().triggerBloom(gt.scene==="tidal-morph"?Qt.mappedPresentation(gt):gt)}),window.addEventListener("tidal-morph-test",()=>{gt?.scene==="tidal-morph"&&qs().triggerMorph(Qt.mappedPresentation(gt))}),window.addEventListener("tidal-distortion-test",()=>{gt?.scene==="tidal-morph"&&qs().triggerDistortion(Qt.mappedPresentation(gt))}),window.addEventListener("tidal-distortion-reset",()=>{gt?.scene==="tidal-morph"&&qs().resetDistortion()}),Qt.startShowcase();window.addEventListener("dragover",r=>{r.preventDefault()});window.addEventListener("drop",async r=>{r.preventDefault()});function np(){const r=window.innerWidth,t=window.innerHeight;xe.setPixelRatio(Math.min(window.devicePixelRatio,2)*(gt?.quality??1)),xe.setSize(r,t),We.aspect=r/t,r>760&&!document.body.classList.contains("stage-clean")&&!document.querySelector(".slewn.collapsed")?We.setViewOffset(r,t,184,0,r,t):We.clearViewOffset(),We.updateProjectionMatrix();for(const e of[un,pn,ni])e&&(e.camera.aspect=We.aspect,e.camera.view=We.view?{...We.view}:null,e.camera.updateProjectionMatrix())}window.addEventListener("resize",np);window.addEventListener("keydown",r=>{if(!r.target?.closest("input, select, textarea, button")){if(r.key===" "){if(gt?.scene==="tidal"||gt?.scene==="tidal-saved"||gt?.scene==="tidal-morph"){na().reset();return}js?.reset(),vn?.reset(),Qn?.clear(),ae.reset(),bi.reset()}r.key}});let sa=performance.now();document.addEventListener("visibilitychange",()=>{sa=performance.now()});let Wi=0,Yi=0,Gs=sa;const mc=2e3;let ro=mc;const Vu=30,Bb=Vu*Vu,Vb=60,Hs=[];function $s(r){if(document.hidden){sa=r,requestAnimationFrame($s);return}const t=(r-sa)/1e3;let e=t;e>.1&&(e=.1),sa=r;const i=Qt?.update(r,e),n=gt?.scene==="tidal"||gt?.scene==="tidal-saved"||gt?.scene==="tidal-morph";if(fn&&(fn.enabled=gt?.scene==="tidal"),mn&&(mn.enabled=gt?.scene==="tidal-saved"),gn&&(gn.enabled=gt?.scene==="tidal-morph"),gt?.scene==="particle-stream"){const x=!document.body.classList.contains("stage-clean");fc!==x&&(fc=x,ur({type:"particle-ui",active:x})),is.enabled=!1,vn?.setActive(!1,xe.domElement),ts?.setActive(void 0,xe.domElement);for(const T of Qt?.receiver.tracks.values()??[])T.kind==="melody"&&pc.get(T.address)!==T.color.hex&&(pc.set(T.address,T.color.hex),ur({type:"particle-color",address:T.address,color:T.color.hex}));requestAnimationFrame($s);return}if(is.enabled=!gt||gt.scene==="flock",vn?.setActive(gt?.scene==="line-neighbors",xe.domElement),ts?.setActive(gt?.scene,xe.domElement),n&&gt&&Qt&&i){const x=na(),T=gt.scene==="tidal-morph"?Qt.mappedFrame(gt,i,e):null;T?qs().update(e,r,Qt.receiver,T.field,T.presentation,T.presentation.tidalDensity,t,T.driven.has("tidalMorphPosition")):x.update(e,r,Qt.receiver,i,gt,gt.tidalDensity,t),x.cameraFlight.active||(gt.scene==="tidal-morph"?gn:gt.scene==="tidal-saved"?mn:fn).update(),gt.scene==="tidal-morph"&&ni&&!ni.morph.active&&!T?.driven.has("tidalMorphPosition")&&gt.syncMorphPosition(ni.morph.value),x.draw(xe),Wi+=e,Yi++,r-Gs>500&&(Yl.textContent=`${(Yi/Wi).toFixed(0)} fps · ${gt.scene} · ${gt.scene==="tidal-morph"?`Morph ${Math.round(ni.morph.value*100)}%`:"evolving positions"} · audio off`,Wi=0,Yi=0,Gs=r),requestAnimationFrame($s);return}if(gt&&gt.scene!=="flock"&&!n&&Qt&&i){gt.scene==="tidal-original"?js.draw(xe,Qt.receiver,r,e,i,gt.originalDensity,gt.originalDecay,gt.blackout,gt.tidalMonochrome):gt.scene==="line-neighbors"?vn.draw(xe,r,e,i,gt):ts.draw(xe,r,e,gt.scene,gt),Wi+=e,Yi++,r-Gs>500&&(Yl.textContent=`${(Yi/Wi).toFixed(0)} fps · ${gt.scene} · OSC visual mode · audio off`,Wi=0,Yi=0,Gs=r),requestAnimationFrame($s);return}Yr.update(e,Jn),Jn.update(e),dr.update(e);const s=Jn.value(),a=Zi.p.counterpointEnabled?dr.value():s,o=bi.audioEnergyMeasured;Zi.update(e,s,o,.5);const c=Zi.convergenceForce(),h=a+(s-a)*c,d=Math.max(0,Math.min(1,s+Zi.audioCorrection())),u=Math.max(0,Math.min(1,h+Zi.visualCorrection()));bi.setConductorValue(d),ae.setConductorValue(i?i.energy:u);const f=i?{noiseAmplitude:ae.p.noiseAmplitude,vortexAmp:ae.p.vortexAmp}:null;i&&(ae.p.noiseAmplitude*=.25+i.motion*1.75,ae.p.vortexAmp*=.25+i.motion*1.75),ae.update(e),Qt&&Qn.update(Qt.receiver,r,ae.getWorldRadius()),ae.draw(i?{size:.5+i.size*1.5,brightness:.3+i.brightness*1.7,deformation:Qn,collisionFlash:!1}:void 0),f&&Object.assign(ae.p,f),bi.setFieldAmpTotal(ae.getFieldAmpTotal()),bi.setTailInfluence(ae.getCurrentTailNormalized());const g=ae.getClusters(4),y=x=>isFinite(x)?x:0,v=g.map(x=>({x:y(x.centroid.x),y:y(x.centroid.y),z:y(x.centroid.z),mass:y(x.totalMass)})).filter(x=>x.mass>0);bi.updateClusters(v,ae.getWorldRadius()),bi.setClusterCount(g.length),bi.setMyceliumLinks(ae.getMyceliumLinkCount()),ae.setAudioInfluence(o),ro=Math.min(mc,ro+mc*e);const p=r;for(;Hs.length>0&&p-Hs[0].t>Vb;)Hs.shift();const M=[],m=M.length>1?[...M].sort((x,T)=>T.newMass-x.newMass):M;for(const x of m){if(ro<1)break;let T=!1;const _=x.pos.x,S=x.pos.y,A=x.pos.z;for(let w=0;w<Hs.length;w++){const b=Hs[w],E=_-b.x,I=S-b.y,D=A-b.z;if(E*E+I*I+D*D<Bb){T=!0;break}}T||(ro-=1,Hs.push({x:_,y:S,z:A,t:p}),bi.triggerCollision({pos:{x:_,y:S,z:A},mass:x.newMass,brightness:(x.color.r+x.color.g+x.color.b)/3,isAccent:x.isAccent}))}if(ae.p.autoRotate,is.update(),xe.render(Ic,We),dc)for(const x of dc.folders){const T=x.__condReadout;T&&(T.value=Jn.value());const _=x.__scoreState;_&&(_.status=Yr.isPlaying()?`▶ ${Yr.currentScoreName()}  ${Yr.elapsed().toFixed(1)}s`:"idle")}if(Wi+=e,Yi++,r-Gs>500){const x=Yi/Wi;Yl.textContent=`fps ${x.toFixed(0)}   OSC visual mode · audio off   sync: ${Zi.syncStrength().toFixed(2)}   clusters: ${g.length}   links: ${ae.getMyceliumLinkCount()}   ae: ${o.toFixed(2)}`,Wi=0,Yi=0,Gs=r}requestAnimationFrame($s)}requestAnimationFrame($s);console.log("[main] of-flock-3d web port booted");
