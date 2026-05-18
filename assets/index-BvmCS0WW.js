(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fr="165",Xn={ROTATE:0,DOLLY:1,PAN:2},Yn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pl=0,Xr=1,ml=2,Ro=1,gl=2,Je=3,yn=0,Se=1,en=2,Mn=0,di=1,Ni=2,Yr=3,qr=4,_l=5,On=100,vl=101,xl=102,Ml=103,Sl=104,yl=200,El=201,Al=202,bl=203,yr=204,Er=205,Tl=206,wl=207,Cl=208,Rl=209,Pl=210,Ll=211,Dl=212,Il=213,Ul=214,Nl=0,Fl=1,Ol=2,Ss=3,Bl=4,zl=5,kl=6,Hl=7,Po=0,Gl=1,Vl=2,Sn=0,Wl=1,Xl=2,Yl=3,ql=4,$l=5,Kl=6,Zl=7,Lo=300,mi=301,gi=302,Ar=303,br=304,Ps=306,Tr=1e3,zn=1001,wr=1002,Ie=1003,jl=1004,Vi=1005,Be=1006,zs=1007,kn=1008,En=1009,Jl=1010,Ql=1011,ys=1012,Do=1013,_i=1014,xn=1015,Ls=1016,Io=1017,Uo=1018,vi=1020,tc=35902,ec=1021,nc=1022,We=1023,ic=1024,sc=1025,fi=1026,xi=1027,rc=1028,No=1029,ac=1030,Fo=1031,Oo=1033,ks=33776,Hs=33777,Gs=33778,Vs=33779,$r=35840,Kr=35841,Zr=35842,jr=35843,Jr=36196,Qr=37492,ta=37496,ea=37808,na=37809,ia=37810,sa=37811,ra=37812,aa=37813,oa=37814,la=37815,ca=37816,ha=37817,ua=37818,da=37819,fa=37820,pa=37821,Ws=36492,ma=36494,ga=36495,oc=36283,_a=36284,va=36285,xa=36286,lc=3200,cc=3201,hc=0,uc=1,vn="",He="srgb",An="srgb-linear",Or="display-p3",Ds="display-p3-linear",Es="linear",jt="srgb",As="rec709",bs="p3",qn=7680,Ma=519,dc=512,fc=513,pc=514,Bo=515,mc=516,gc=517,_c=518,vc=519,Sa=35044,ya="300 es",nn=2e3,Ts=2001;class Vn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vs=Math.PI/180,Cr=180/Math.PI;function Oi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pe[i&255]+pe[i>>8&255]+pe[i>>16&255]+pe[i>>24&255]+"-"+pe[t&255]+pe[t>>8&255]+"-"+pe[t>>16&15|64]+pe[t>>24&255]+"-"+pe[e&63|128]+pe[e>>8&255]+"-"+pe[e>>16&255]+pe[e>>24&255]+pe[n&255]+pe[n>>8&255]+pe[n>>16&255]+pe[n>>24&255]).toLowerCase()}function ve(i,t,e){return Math.max(t,Math.min(e,i))}function xc(i,t){return(i%t+t)%t}function Xs(i,t,e){return(1-e)*i+e*t}function bi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Mc={DEG2RAD:vs};class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,s,r,o,a,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],f=n[7],p=n[2],m=n[5],_=n[8],v=s[0],u=s[3],h=s[6],A=s[1],E=s[4],w=s[7],N=s[2],T=s[5],b=s[8];return r[0]=o*v+a*A+l*N,r[3]=o*u+a*E+l*T,r[6]=o*h+a*w+l*b,r[1]=c*v+d*A+f*N,r[4]=c*u+d*E+f*T,r[7]=c*h+d*w+f*b,r[2]=p*v+m*A+_*N,r[5]=p*u+m*E+_*T,r[8]=p*h+m*w+_*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*o*d-e*a*c-n*r*d+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],f=d*o-a*c,p=a*l-d*r,m=c*r-o*l,_=e*f+n*p+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=f*v,t[1]=(s*c-d*n)*v,t[2]=(a*n-s*o)*v,t[3]=p*v,t[4]=(d*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=m*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ys.makeScale(t,e)),this}rotate(t){return this.premultiply(Ys.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ys.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ys=new kt;function zo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sc(){const i=ws("canvas");return i.style.display="block",i}const Ea={};function ko(i){i in Ea||(Ea[i]=!0,console.warn(i))}function yc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Aa=new kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ba=new kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wi={[An]:{transfer:Es,primaries:As,toReference:i=>i,fromReference:i=>i},[He]:{transfer:jt,primaries:As,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ds]:{transfer:Es,primaries:bs,toReference:i=>i.applyMatrix3(ba),fromReference:i=>i.applyMatrix3(Aa)},[Or]:{transfer:jt,primaries:bs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ba),fromReference:i=>i.applyMatrix3(Aa).convertLinearToSRGB()}},Ec=new Set([An,Ds]),qt={enabled:!0,_workingColorSpace:An,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ec.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Wi[t].toReference,s=Wi[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Wi[i].primaries},getTransfer:function(i){return i===vn?Es:Wi[i].transfer}};function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $n;class Ac{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$n===void 0&&($n=ws("canvas")),$n.width=t.width,$n.height=t.height;const n=$n.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$n}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ws("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=pi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pi(e[n]/255)*255):e[n]=pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bc=0;class Ho{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($s(s[o].image)):r.push($s(s[o]))}else r=$s(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function $s(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ac.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tc=0;class ye extends Vn{constructor(t=ye.DEFAULT_IMAGE,e=ye.DEFAULT_MAPPING,n=zn,s=zn,r=Be,o=kn,a=We,l=En,c=ye.DEFAULT_ANISOTROPY,d=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tc++}),this.uuid=Oi(),this.name="",this.source=new Ho(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tr:t.x=t.x-Math.floor(t.x);break;case zn:t.x=t.x<0?0:1;break;case wr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tr:t.y=t.y-Math.floor(t.y);break;case zn:t.y=t.y<0?0:1;break;case wr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ye.DEFAULT_IMAGE=null;ye.DEFAULT_MAPPING=Lo;ye.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],d=l[4],f=l[8],p=l[1],m=l[5],_=l[9],v=l[2],u=l[6],h=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-v)<.01&&Math.abs(_-u)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+v)<.1&&Math.abs(_+u)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,w=(m+1)/2,N=(h+1)/2,T=(d+p)/4,b=(f+v)/4,C=(_+u)/4;return E>w&&E>N?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=b/n):w>N?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=T/s,r=C/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=b/r,s=C/r),this.set(n,s,r,e),this}let A=Math.sqrt((u-_)*(u-_)+(f-v)*(f-v)+(p-d)*(p-d));return Math.abs(A)<.001&&(A=1),this.x=(u-_)/A,this.y=(f-v)/A,this.z=(p-d)/A,this.w=Math.acos((c+m+h-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wc extends Vn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ho(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends wc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Go extends ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cc extends ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],d=n[s+2],f=n[s+3];const p=r[o+0],m=r[o+1],_=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=f;return}if(a===1){t[e+0]=p,t[e+1]=m,t[e+2]=_,t[e+3]=v;return}if(f!==v||l!==p||c!==m||d!==_){let u=1-a;const h=l*p+c*m+d*_+f*v,A=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const N=Math.sqrt(E),T=Math.atan2(N,h*A);u=Math.sin(u*T)/N,a=Math.sin(a*T)/N}const w=a*A;if(l=l*u+p*w,c=c*u+m*w,d=d*u+_*w,f=f*u+v*w,u===1-a){const N=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=N,c*=N,d*=N,f*=N}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],d=n[s+3],f=r[o],p=r[o+1],m=r[o+2],_=r[o+3];return t[e]=a*_+d*f+l*m-c*p,t[e+1]=l*_+d*p+c*f-a*m,t[e+2]=c*_+d*m+a*p-l*f,t[e+3]=d*_-a*f-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(s/2),f=a(r/2),p=l(n/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=p*d*f+c*m*_,this._y=c*m*f-p*d*_,this._z=c*d*_+p*m*f,this._w=c*d*f-p*m*_;break;case"YXZ":this._x=p*d*f+c*m*_,this._y=c*m*f-p*d*_,this._z=c*d*_-p*m*f,this._w=c*d*f+p*m*_;break;case"ZXY":this._x=p*d*f-c*m*_,this._y=c*m*f+p*d*_,this._z=c*d*_+p*m*f,this._w=c*d*f-p*m*_;break;case"ZYX":this._x=p*d*f-c*m*_,this._y=c*m*f+p*d*_,this._z=c*d*_-p*m*f,this._w=c*d*f+p*m*_;break;case"YZX":this._x=p*d*f+c*m*_,this._y=c*m*f+p*d*_,this._z=c*d*_-p*m*f,this._w=c*d*f-p*m*_;break;case"XZY":this._x=p*d*f-c*m*_,this._y=c*m*f-p*d*_,this._z=c*d*_+p*m*f,this._w=c*d*f+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],d=e[6],f=e[10],p=n+a+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(d-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-s*a,this._w=o*d-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-e)*d)/c,p=Math.sin(e*d)/c;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ta.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ta.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),d=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*d,this.y=n+l*d+a*c-r*f,this.z=s+l*f+r*d-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ks.copy(this).projectOnVector(t),this.sub(Ks)}reflect(t){return this.sub(Ks.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ks=new F,Ta=new Gn;class Bi{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ne.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ne.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ne.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ne):Ne.fromBufferAttribute(r,o),Ne.applyMatrix4(t.matrixWorld),this.expandByPoint(Ne);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xi.copy(n.boundingBox)),Xi.applyMatrix4(t.matrixWorld),this.union(Xi)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ne),Ne.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ti),Yi.subVectors(this.max,Ti),Kn.subVectors(t.a,Ti),Zn.subVectors(t.b,Ti),jn.subVectors(t.c,Ti),un.subVectors(Zn,Kn),dn.subVectors(jn,Zn),Cn.subVectors(Kn,jn);let e=[0,-un.z,un.y,0,-dn.z,dn.y,0,-Cn.z,Cn.y,un.z,0,-un.x,dn.z,0,-dn.x,Cn.z,0,-Cn.x,-un.y,un.x,0,-dn.y,dn.x,0,-Cn.y,Cn.x,0];return!Zs(e,Kn,Zn,jn,Yi)||(e=[1,0,0,0,1,0,0,0,1],!Zs(e,Kn,Zn,jn,Yi))?!1:(qi.crossVectors(un,dn),e=[qi.x,qi.y,qi.z],Zs(e,Kn,Zn,jn,Yi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ne).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ne).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qe=[new F,new F,new F,new F,new F,new F,new F,new F],Ne=new F,Xi=new Bi,Kn=new F,Zn=new F,jn=new F,un=new F,dn=new F,Cn=new F,Ti=new F,Yi=new F,qi=new F,Rn=new F;function Zs(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Rn.fromArray(i,r);const a=s.x*Math.abs(Rn.x)+s.y*Math.abs(Rn.y)+s.z*Math.abs(Rn.z),l=t.dot(Rn),c=e.dot(Rn),d=n.dot(Rn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Rc=new Bi,wi=new F,js=new F;class zi{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Rc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wi.subVectors(t,this.center);const e=wi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(wi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(js.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wi.copy(t.center).add(js)),this.expandByPoint(wi.copy(t.center).sub(js))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $e=new F,Js=new F,$i=new F,fn=new F,Qs=new F,Ki=new F,tr=new F;class Is{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$e)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$e.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($e.copy(this.origin).addScaledVector(this.direction,e),$e.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Js.copy(t).add(e).multiplyScalar(.5),$i.copy(e).sub(t).normalize(),fn.copy(this.origin).sub(Js);const r=t.distanceTo(e)*.5,o=-this.direction.dot($i),a=fn.dot(this.direction),l=-fn.dot($i),c=fn.lengthSq(),d=Math.abs(1-o*o);let f,p,m,_;if(d>0)if(f=o*l-a,p=o*a-l,_=r*d,f>=0)if(p>=-_)if(p<=_){const v=1/d;f*=v,p*=v,m=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;else p<=-_?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c):p<=_?(f=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Js).addScaledVector($i,p),m}intersectSphere(t,e){$e.subVectors(t.center,this.origin);const n=$e.dot(this.direction),s=$e.dot($e)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),d>=0?(r=(t.min.y-p.y)*d,o=(t.max.y-p.y)*d):(r=(t.max.y-p.y)*d,o=(t.min.y-p.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-p.z)*f,l=(t.max.z-p.z)*f):(a=(t.max.z-p.z)*f,l=(t.min.z-p.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,$e)!==null}intersectTriangle(t,e,n,s,r){Qs.subVectors(e,t),Ki.subVectors(n,t),tr.crossVectors(Qs,Ki);let o=this.direction.dot(tr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fn.subVectors(this.origin,t);const l=a*this.direction.dot(Ki.crossVectors(fn,Ki));if(l<0)return null;const c=a*this.direction.dot(Qs.cross(fn));if(c<0||l+c>o)return null;const d=-a*fn.dot(tr);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,s,r,o,a,l,c,d,f,p,m,_,v,u){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,d,f,p,m,_,v,u)}set(t,e,n,s,r,o,a,l,c,d,f,p,m,_,v,u){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=p,h[3]=m,h[7]=_,h[11]=v,h[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Jn.setFromMatrixColumn(t,0).length(),r=1/Jn.setFromMatrixColumn(t,1).length(),o=1/Jn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const p=o*d,m=o*f,_=a*d,v=a*f;e[0]=l*d,e[4]=-l*f,e[8]=c,e[1]=m+_*c,e[5]=p-v*c,e[9]=-a*l,e[2]=v-p*c,e[6]=_+m*c,e[10]=o*l}else if(t.order==="YXZ"){const p=l*d,m=l*f,_=c*d,v=c*f;e[0]=p+v*a,e[4]=_*a-m,e[8]=o*c,e[1]=o*f,e[5]=o*d,e[9]=-a,e[2]=m*a-_,e[6]=v+p*a,e[10]=o*l}else if(t.order==="ZXY"){const p=l*d,m=l*f,_=c*d,v=c*f;e[0]=p-v*a,e[4]=-o*f,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*d,e[9]=v-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const p=o*d,m=o*f,_=a*d,v=a*f;e[0]=l*d,e[4]=_*c-m,e[8]=p*c+v,e[1]=l*f,e[5]=v*c+p,e[9]=m*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const p=o*l,m=o*c,_=a*l,v=a*c;e[0]=l*d,e[4]=v-p*f,e[8]=_*f+m,e[1]=f,e[5]=o*d,e[9]=-a*d,e[2]=-c*d,e[6]=m*f+_,e[10]=p-v*f}else if(t.order==="XZY"){const p=o*l,m=o*c,_=a*l,v=a*c;e[0]=l*d,e[4]=-f,e[8]=c*d,e[1]=p*f+v,e[5]=o*d,e[9]=m*f-_,e[2]=_*f-m,e[6]=a*d,e[10]=v*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pc,t,Lc)}lookAt(t,e,n){const s=this.elements;return Te.subVectors(t,e),Te.lengthSq()===0&&(Te.z=1),Te.normalize(),pn.crossVectors(n,Te),pn.lengthSq()===0&&(Math.abs(n.z)===1?Te.x+=1e-4:Te.z+=1e-4,Te.normalize(),pn.crossVectors(n,Te)),pn.normalize(),Zi.crossVectors(Te,pn),s[0]=pn.x,s[4]=Zi.x,s[8]=Te.x,s[1]=pn.y,s[5]=Zi.y,s[9]=Te.y,s[2]=pn.z,s[6]=Zi.z,s[10]=Te.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],f=n[5],p=n[9],m=n[13],_=n[2],v=n[6],u=n[10],h=n[14],A=n[3],E=n[7],w=n[11],N=n[15],T=s[0],b=s[4],C=s[8],S=s[12],M=s[1],L=s[5],G=s[9],B=s[13],Z=s[2],X=s[6],Y=s[10],j=s[14],I=s[3],P=s[7],J=s[11],Q=s[15];return r[0]=o*T+a*M+l*Z+c*I,r[4]=o*b+a*L+l*X+c*P,r[8]=o*C+a*G+l*Y+c*J,r[12]=o*S+a*B+l*j+c*Q,r[1]=d*T+f*M+p*Z+m*I,r[5]=d*b+f*L+p*X+m*P,r[9]=d*C+f*G+p*Y+m*J,r[13]=d*S+f*B+p*j+m*Q,r[2]=_*T+v*M+u*Z+h*I,r[6]=_*b+v*L+u*X+h*P,r[10]=_*C+v*G+u*Y+h*J,r[14]=_*S+v*B+u*j+h*Q,r[3]=A*T+E*M+w*Z+N*I,r[7]=A*b+E*L+w*X+N*P,r[11]=A*C+E*G+w*Y+N*J,r[15]=A*S+E*B+w*j+N*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],d=t[2],f=t[6],p=t[10],m=t[14],_=t[3],v=t[7],u=t[11],h=t[15];return _*(+r*l*f-s*c*f-r*a*p+n*c*p+s*a*m-n*l*m)+v*(+e*l*m-e*c*p+r*o*p-s*o*m+s*c*d-r*l*d)+u*(+e*c*f-e*a*m-r*o*f+n*o*m+r*a*d-n*c*d)+h*(-s*a*d-e*l*f+e*a*p+s*o*f-n*o*p+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],f=t[9],p=t[10],m=t[11],_=t[12],v=t[13],u=t[14],h=t[15],A=f*u*c-v*p*c+v*l*m-a*u*m-f*l*h+a*p*h,E=_*p*c-d*u*c-_*l*m+o*u*m+d*l*h-o*p*h,w=d*v*c-_*f*c+_*a*m-o*v*m-d*a*h+o*f*h,N=_*f*l-d*v*l-_*a*p+o*v*p+d*a*u-o*f*u,T=e*A+n*E+s*w+r*N;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=A*b,t[1]=(v*p*r-f*u*r-v*s*m+n*u*m+f*s*h-n*p*h)*b,t[2]=(a*u*r-v*l*r+v*s*c-n*u*c-a*s*h+n*l*h)*b,t[3]=(f*l*r-a*p*r-f*s*c+n*p*c+a*s*m-n*l*m)*b,t[4]=E*b,t[5]=(d*u*r-_*p*r+_*s*m-e*u*m-d*s*h+e*p*h)*b,t[6]=(_*l*r-o*u*r-_*s*c+e*u*c+o*s*h-e*l*h)*b,t[7]=(o*p*r-d*l*r+d*s*c-e*p*c-o*s*m+e*l*m)*b,t[8]=w*b,t[9]=(_*f*r-d*v*r-_*n*m+e*v*m+d*n*h-e*f*h)*b,t[10]=(o*v*r-_*a*r+_*n*c-e*v*c-o*n*h+e*a*h)*b,t[11]=(d*a*r-o*f*r-d*n*c+e*f*c+o*n*m-e*a*m)*b,t[12]=N*b,t[13]=(d*v*s-_*f*s+_*n*p-e*v*p-d*n*u+e*f*u)*b,t[14]=(_*a*s-o*v*s-_*n*l+e*v*l+o*n*u-e*a*u)*b,t[15]=(o*f*s-d*a*s+d*n*l-e*f*l-o*n*p+e*a*p)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+n,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,d=o+o,f=a+a,p=r*c,m=r*d,_=r*f,v=o*d,u=o*f,h=a*f,A=l*c,E=l*d,w=l*f,N=n.x,T=n.y,b=n.z;return s[0]=(1-(v+h))*N,s[1]=(m+w)*N,s[2]=(_-E)*N,s[3]=0,s[4]=(m-w)*T,s[5]=(1-(p+h))*T,s[6]=(u+A)*T,s[7]=0,s[8]=(_+E)*b,s[9]=(u-A)*b,s[10]=(1-(p+v))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Jn.set(s[0],s[1],s[2]).length();const o=Jn.set(s[4],s[5],s[6]).length(),a=Jn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Fe.copy(this);const c=1/r,d=1/o,f=1/a;return Fe.elements[0]*=c,Fe.elements[1]*=c,Fe.elements[2]*=c,Fe.elements[4]*=d,Fe.elements[5]*=d,Fe.elements[6]*=d,Fe.elements[8]*=f,Fe.elements[9]*=f,Fe.elements[10]*=f,e.setFromRotationMatrix(Fe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=nn){const l=this.elements,c=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s);let m,_;if(a===nn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ts)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=nn){const l=this.elements,c=1/(e-t),d=1/(n-s),f=1/(o-r),p=(e+t)*c,m=(n+s)*d;let _,v;if(a===nn)_=(o+r)*f,v=-2*f;else if(a===Ts)_=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Jn=new F,Fe=new ne,Pc=new F(0,0,0),Lc=new F(1,1,1),pn=new F,Zi=new F,Te=new F,wa=new ne,Ca=new Gn;class on{constructor(t=0,e=0,n=0,s=on.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],f=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ve(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ca.setFromEuler(this),this.setFromQuaternion(Ca,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class Vo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Dc=0;const Ra=new F,Qn=new Gn,Ke=new ne,ji=new F,Ci=new F,Ic=new F,Uc=new Gn,Pa=new F(1,0,0),La=new F(0,1,0),Da=new F(0,0,1),Ia={type:"added"},Nc={type:"removed"},ti={type:"childadded",child:null},er={type:"childremoved",child:null};class xe extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new F,e=new on,n=new Gn,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new kt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.premultiply(Qn),this}rotateX(t){return this.rotateOnAxis(Pa,t)}rotateY(t){return this.rotateOnAxis(La,t)}rotateZ(t){return this.rotateOnAxis(Da,t)}translateOnAxis(t,e){return Ra.copy(t).applyQuaternion(this.quaternion),this.position.add(Ra.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pa,t)}translateY(t){return this.translateOnAxis(La,t)}translateZ(t){return this.translateOnAxis(Da,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ke.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ji.copy(t):ji.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ke.lookAt(Ci,ji,this.up):Ke.lookAt(ji,Ci,this.up),this.quaternion.setFromRotationMatrix(Ke),s&&(Ke.extractRotation(s.matrixWorld),Qn.setFromRotationMatrix(Ke),this.quaternion.premultiply(Qn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ia),ti.child=t,this.dispatchEvent(ti),ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nc),er.child=t,this.dispatchEvent(er),er.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ke.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ke.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ke),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ia),ti.child=t,this.dispatchEvent(ti),ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,t,Ic),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,Uc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),d=o(t.images),f=o(t.shapes),p=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}xe.DEFAULT_UP=new F(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oe=new F,Ze=new F,nr=new F,je=new F,ei=new F,ni=new F,Ua=new F,ir=new F,sr=new F,rr=new F;class Ve{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Oe.subVectors(t,e),s.cross(Oe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Oe.subVectors(s,e),Ze.subVectors(n,e),nr.subVectors(t,e);const o=Oe.dot(Oe),a=Oe.dot(Ze),l=Oe.dot(nr),c=Ze.dot(Ze),d=Ze.dot(nr),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const p=1/f,m=(c*l-a*d)*p,_=(o*d-a*l)*p;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,je)===null?!1:je.x>=0&&je.y>=0&&je.x+je.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,je)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,je.x),l.addScaledVector(o,je.y),l.addScaledVector(a,je.z),l)}static isFrontFacing(t,e,n,s){return Oe.subVectors(n,e),Ze.subVectors(t,e),Oe.cross(Ze).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oe.subVectors(this.c,this.b),Ze.subVectors(this.a,this.b),Oe.cross(Ze).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ve.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ei.subVectors(s,n),ni.subVectors(r,n),ir.subVectors(t,n);const l=ei.dot(ir),c=ni.dot(ir);if(l<=0&&c<=0)return e.copy(n);sr.subVectors(t,s);const d=ei.dot(sr),f=ni.dot(sr);if(d>=0&&f<=d)return e.copy(s);const p=l*f-d*c;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(n).addScaledVector(ei,o);rr.subVectors(t,r);const m=ei.dot(rr),_=ni.dot(rr);if(_>=0&&m<=_)return e.copy(r);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(ni,a);const u=d*_-m*f;if(u<=0&&f-d>=0&&m-_>=0)return Ua.subVectors(r,s),a=(f-d)/(f-d+(m-_)),e.copy(s).addScaledVector(Ua,a);const h=1/(u+v+p);return o=v*h,a=p*h,e.copy(n).addScaledVector(ei,o).addScaledVector(ni,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},Ji={h:0,s:0,l:0};function ar(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=xc(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ar(o,r,t+1/3),this.g=ar(o,r,t),this.b=ar(o,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const n=Wo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=qs(t.r),this.g=qs(t.g),this.b=qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return qt.fromWorkingColorSpace(me.copy(this),t),Math.round(ve(me.r*255,0,255))*65536+Math.round(ve(me.g*255,0,255))*256+Math.round(ve(me.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(me.copy(this),e);const n=me.r,s=me.g,r=me.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(me.copy(this),e),t.r=me.r,t.g=me.g,t.b=me.b,t}getStyle(t=He){qt.fromWorkingColorSpace(me.copy(this),t);const e=me.r,n=me.g,s=me.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(mn),this.setHSL(mn.h+t,mn.s+e,mn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mn),t.getHSL(Ji);const n=Xs(mn.h,Ji.h,e),s=Xs(mn.s,Ji.s,e),r=Xs(mn.l,Ji.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const me=new Gt;Gt.NAMES=Wo;let Fc=0;class Ei extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=di,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yr,this.blendDst=Er,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ma,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qn,this.stencilZFail=qn,this.stencilZPass=qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yr&&(n.blendSrc=this.blendSrc),this.blendDst!==Er&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ma&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Xo extends Ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ae=new F,Qi=new Bt;class Zt{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ko("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qi.fromBufferAttribute(this,e),Qi.applyMatrix3(t),this.setXY(e,Qi.x,Qi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sa&&(t.usage=this.usage),t}}class Yo extends Zt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class qo extends Zt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class an extends Zt{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Oc=0;const Re=new ne,or=new xe,ii=new F,we=new Bi,Ri=new Bi,ue=new F;class Ue extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zo(t)?qo:Yo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Re.makeRotationFromQuaternion(t),this.applyMatrix4(Re),this}rotateX(t){return Re.makeRotationX(t),this.applyMatrix4(Re),this}rotateY(t){return Re.makeRotationY(t),this.applyMatrix4(Re),this}rotateZ(t){return Re.makeRotationZ(t),this.applyMatrix4(Re),this}translate(t,e,n){return Re.makeTranslation(t,e,n),this.applyMatrix4(Re),this}scale(t,e,n){return Re.makeScale(t,e,n),this.applyMatrix4(Re),this}lookAt(t){return or.lookAt(t),or.updateMatrix(),this.applyMatrix4(or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new an(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];we.setFromBufferAttribute(r),this.morphTargetsRelative?(ue.addVectors(this.boundingBox.min,we.min),this.boundingBox.expandByPoint(ue),ue.addVectors(this.boundingBox.max,we.max),this.boundingBox.expandByPoint(ue)):(this.boundingBox.expandByPoint(we.min),this.boundingBox.expandByPoint(we.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(we.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ri.setFromBufferAttribute(a),this.morphTargetsRelative?(ue.addVectors(we.min,Ri.min),we.expandByPoint(ue),ue.addVectors(we.max,Ri.max),we.expandByPoint(ue)):(we.expandByPoint(Ri.min),we.expandByPoint(Ri.max))}we.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ue));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)ue.fromBufferAttribute(a,c),l&&(ii.fromBufferAttribute(t,c),ue.add(ii)),s=Math.max(s,n.distanceToSquared(ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new F,l[C]=new F;const c=new F,d=new F,f=new F,p=new Bt,m=new Bt,_=new Bt,v=new F,u=new F;function h(C,S,M){c.fromBufferAttribute(n,C),d.fromBufferAttribute(n,S),f.fromBufferAttribute(n,M),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,S),_.fromBufferAttribute(r,M),d.sub(c),f.sub(c),m.sub(p),_.sub(p);const L=1/(m.x*_.y-_.x*m.y);isFinite(L)&&(v.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(L),u.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(L),a[C].add(v),a[S].add(v),a[M].add(v),l[C].add(u),l[S].add(u),l[M].add(u))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let C=0,S=A.length;C<S;++C){const M=A[C],L=M.start,G=M.count;for(let B=L,Z=L+G;B<Z;B+=3)h(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const E=new F,w=new F,N=new F,T=new F;function b(C){N.fromBufferAttribute(s,C),T.copy(N);const S=a[C];E.copy(S),E.sub(N.multiplyScalar(N.dot(S))).normalize(),w.crossVectors(T,S);const L=w.dot(l[C])<0?-1:1;o.setXYZW(C,E.x,E.y,E.z,L)}for(let C=0,S=A.length;C<S;++C){const M=A[C],L=M.start,G=M.count;for(let B=L,Z=L+G;B<Z;B+=3)b(t.getX(B+0)),b(t.getX(B+1)),b(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,d=new F,f=new F;if(t)for(let p=0,m=t.count;p<m;p+=3){const _=t.getX(p+0),v=t.getX(p+1),u=t.getX(p+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,u),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,u),a.add(d),l.add(d),c.add(d),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(u,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ue.fromBufferAttribute(t,e),ue.normalize(),t.setXYZ(e,ue.x,ue.y,ue.z)}toNonIndexed(){function t(a,l){const c=a.array,d=a.itemSize,f=a.normalized,p=new c.constructor(l.length*d);let m=0,_=0;for(let v=0,u=l.length;v<u;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*d;for(let h=0;h<d;h++)p[_++]=c[m++]}return new Zt(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,f=c.length;d<f;d++){const p=c[d],m=t(p,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,p=c.length;f<p;f++){const m=c[f];d.push(m.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],f=r[c];for(let p=0,m=f.length;p<m;p++)d.push(f[p].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Na=new ne,Pn=new Is,ts=new zi,Fa=new F,si=new F,ri=new F,ai=new F,lr=new F,es=new F,ns=new Bt,is=new Bt,ss=new Bt,Oa=new F,Ba=new F,za=new F,rs=new F,as=new F;class sn extends xe{constructor(t=new Ue,e=new Xo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){es.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],f=r[l];d!==0&&(lr.fromBufferAttribute(f,t),o?es.addScaledVector(lr,d):es.addScaledVector(lr.sub(e),d))}e.add(es)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(r),Pn.copy(t.ray).recast(t.near),!(ts.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere(ts,Fa)===null||Pn.origin.distanceToSquared(Fa)>(t.far-t.near)**2))&&(Na.copy(r).invert(),Pn.copy(t.ray).applyMatrix4(Na),!(n.boundingBox!==null&&Pn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=p.length;_<v;_++){const u=p[_],h=o[u.materialIndex],A=Math.max(u.start,m.start),E=Math.min(a.count,Math.min(u.start+u.count,m.start+m.count));for(let w=A,N=E;w<N;w+=3){const T=a.getX(w),b=a.getX(w+1),C=a.getX(w+2);s=os(this,h,t,n,c,d,f,T,b,C),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=u.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let u=_,h=v;u<h;u+=3){const A=a.getX(u),E=a.getX(u+1),w=a.getX(u+2);s=os(this,o,t,n,c,d,f,A,E,w),s&&(s.faceIndex=Math.floor(u/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=p.length;_<v;_++){const u=p[_],h=o[u.materialIndex],A=Math.max(u.start,m.start),E=Math.min(l.count,Math.min(u.start+u.count,m.start+m.count));for(let w=A,N=E;w<N;w+=3){const T=w,b=w+1,C=w+2;s=os(this,h,t,n,c,d,f,T,b,C),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=u.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let u=_,h=v;u<h;u+=3){const A=u,E=u+1,w=u+2;s=os(this,o,t,n,c,d,f,A,E,w),s&&(s.faceIndex=Math.floor(u/3),e.push(s))}}}}function Bc(i,t,e,n,s,r,o,a){let l;if(t.side===Se?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===yn,a),l===null)return null;as.copy(a),as.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(as);return c<e.near||c>e.far?null:{distance:c,point:as.clone(),object:i}}function os(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,si),i.getVertexPosition(l,ri),i.getVertexPosition(c,ai);const d=Bc(i,t,e,n,si,ri,ai,rs);if(d){s&&(ns.fromBufferAttribute(s,a),is.fromBufferAttribute(s,l),ss.fromBufferAttribute(s,c),d.uv=Ve.getInterpolation(rs,si,ri,ai,ns,is,ss,new Bt)),r&&(ns.fromBufferAttribute(r,a),is.fromBufferAttribute(r,l),ss.fromBufferAttribute(r,c),d.uv1=Ve.getInterpolation(rs,si,ri,ai,ns,is,ss,new Bt)),o&&(Oa.fromBufferAttribute(o,a),Ba.fromBufferAttribute(o,l),za.fromBufferAttribute(o,c),d.normal=Ve.getInterpolation(rs,si,ri,ai,Oa,Ba,za,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new F,materialIndex:0};Ve.getNormal(si,ri,ai,f.normal),d.face=f}return d}class ki extends Ue{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],f=[];let p=0,m=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(d,3)),this.setAttribute("uv",new an(f,2));function _(v,u,h,A,E,w,N,T,b,C,S){const M=w/b,L=N/C,G=w/2,B=N/2,Z=T/2,X=b+1,Y=C+1;let j=0,I=0;const P=new F;for(let J=0;J<Y;J++){const Q=J*L-B;for(let vt=0;vt<X;vt++){const Et=vt*M-G;P[v]=Et*A,P[u]=Q*E,P[h]=Z,c.push(P.x,P.y,P.z),P[v]=0,P[u]=0,P[h]=T>0?1:-1,d.push(P.x,P.y,P.z),f.push(vt/b),f.push(1-J/C),j+=1}}for(let J=0;J<C;J++)for(let Q=0;Q<b;Q++){const vt=p+Q+X*J,Et=p+Q+X*(J+1),$=p+(Q+1)+X*(J+1),K=p+(Q+1)+X*J;l.push(vt,Et,K),l.push(Et,$,K),I+=6}a.addGroup(m,I,S),m+=I,p+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ki(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function _e(i){const t={};for(let e=0;e<i.length;e++){const n=Mi(i[e]);for(const s in n)t[s]=n[s]}return t}function zc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $o(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const kc={clone:Mi,merge:_e};var Hc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends Ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hc,this.fragmentShader=Gc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mi(t.uniforms),this.uniformsGroups=zc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ko extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gn=new F,ka=new Bt,Ha=new Bt;class De extends Ko{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gn.x,gn.y).multiplyScalar(-t/gn.z),gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gn.x,gn.y).multiplyScalar(-t/gn.z)}getViewSize(t,e){return this.getViewBounds(t,ka,Ha),e.subVectors(Ha,ka)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const oi=-90,li=1;class Vc extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new De(oi,li,t,e);s.layers=this.layers,this.add(s);const r=new De(oi,li,t,e);r.layers=this.layers,this.add(r);const o=new De(oi,li,t,e);o.layers=this.layers,this.add(o);const a=new De(oi,li,t,e);a.layers=this.layers,this.add(a);const l=new De(oi,li,t,e);l.layers=this.layers,this.add(l);const c=new De(oi,li,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(f,p,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Zo extends ye{constructor(t,e,n,s,r,o,a,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:mi,super(t,e,n,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wc extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Zo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Be}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ki(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:Mn});r.uniforms.tEquirect.value=e;const o=new sn(s,r),a=e.minFilter;return e.minFilter===kn&&(e.minFilter=Be),new Vc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const cr=new F,Xc=new F,Yc=new kt;class _n{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=cr.subVectors(n,e).cross(Xc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(cr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Yc.getNormalMatrix(t),s=this.coplanarPoint(cr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ln=new zi,ls=new F;class jo{constructor(t=new _n,e=new _n,n=new _n,s=new _n,r=new _n,o=new _n){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=nn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],d=s[5],f=s[6],p=s[7],m=s[8],_=s[9],v=s[10],u=s[11],h=s[12],A=s[13],E=s[14],w=s[15];if(n[0].setComponents(l-r,p-c,u-m,w-h).normalize(),n[1].setComponents(l+r,p+c,u+m,w+h).normalize(),n[2].setComponents(l+o,p+d,u+_,w+A).normalize(),n[3].setComponents(l-o,p-d,u-_,w-A).normalize(),n[4].setComponents(l-a,p-f,u-v,w-E).normalize(),e===nn)n[5].setComponents(l+a,p+f,u+v,w+E).normalize();else if(e===Ts)n[5].setComponents(a,f,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(t){return Ln.center.set(0,0,0),Ln.radius=.7071067811865476,Ln.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ls.x=s.normal.x>0?t.max.x:t.min.x,ls.y=s.normal.y>0?t.max.y:t.min.y,ls.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ls)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jo(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function qc(i){const t=new WeakMap;function e(a,l){const c=a.array,d=a.usage,f=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,d),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const d=l.array,f=l._updateRange,p=l.updateRanges;if(i.bindBuffer(c,a),f.count===-1&&p.length===0&&i.bufferSubData(c,0,d),p.length!==0){for(let m=0,_=p.length;m<_;m++){const v=p[m];i.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}f.count!==-1&&(i.bufferSubData(c,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count),f.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Us extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,d=l+1,f=t/a,p=e/l,m=[],_=[],v=[],u=[];for(let h=0;h<d;h++){const A=h*p-o;for(let E=0;E<c;E++){const w=E*f-r;_.push(w,-A,0),v.push(0,0,1),u.push(E/a),u.push(1-h/l)}}for(let h=0;h<l;h++)for(let A=0;A<a;A++){const E=A+c*h,w=A+c*(h+1),N=A+1+c*(h+1),T=A+1+c*h;m.push(E,w,T),m.push(w,N,T)}this.setIndex(m),this.setAttribute("position",new an(_,3)),this.setAttribute("normal",new an(v,3)),this.setAttribute("uv",new an(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Us(t.width,t.height,t.widthSegments,t.heightSegments)}}var $c=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kc=`#ifdef USE_ALPHAHASH
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
#endif`,Zc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,th=`#ifdef USE_AOMAP
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
#endif`,eh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nh=`#ifdef USE_BATCHING
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
#endif`,ih=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,sh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ah=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oh=`#ifdef USE_IRIDESCENCE
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
#endif`,lh=`#ifdef USE_BUMPMAP
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
#endif`,ch=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ph=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_h=`#define PI 3.141592653589793
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
} // validated`,vh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xh=`vec3 transformedNormal = objectNormal;
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
#endif`,Mh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ah="gl_FragColor = linearToOutputTexel( gl_FragColor );",bh=`
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
}`,Th=`#ifdef USE_ENVMAP
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
#endif`,wh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ch=`#ifdef USE_ENVMAP
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
#endif`,Rh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ph=`#ifdef USE_ENVMAP
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
#endif`,Lh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ih=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nh=`#ifdef USE_GRADIENTMAP
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
}`,Fh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Oh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zh=`uniform bool receiveShadow;
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
#endif`,kh=`#ifdef USE_ENVMAP
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
#endif`,Hh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xh=`PhysicalMaterial material;
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
#endif`,Yh=`struct PhysicalMaterial {
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
}`,qh=`
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
#endif`,$h=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iu=`#if defined( USE_POINTS_UV )
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
#endif`,su=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ru=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,au=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ou=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cu=`#ifdef USE_MORPHTARGETS
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
#endif`,hu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,du=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gu=`#ifdef USE_NORMALMAP
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
#endif`,_u=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Su=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Eu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Au=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ru=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Du=`float getShadowMask() {
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
}`,Iu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uu=`#ifdef USE_SKINNING
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
#endif`,Nu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fu=`#ifdef USE_SKINNING
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
#endif`,Ou=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ku=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hu=`#ifdef USE_TRANSMISSION
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
#endif`,Gu=`#ifdef USE_TRANSMISSION
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
#endif`,Vu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$u=`uniform sampler2D t2D;
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
}`,Ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ju=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ju=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qu=`#include <common>
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
}`,td=`#if DEPTH_PACKING == 3200
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
}`,ed=`#define DISTANCE
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
}`,nd=`#define DISTANCE
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
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rd=`uniform float scale;
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
}`,ad=`uniform vec3 diffuse;
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
}`,od=`#include <common>
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
}`,ld=`uniform vec3 diffuse;
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
}`,cd=`#define LAMBERT
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
}`,hd=`#define LAMBERT
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
}`,ud=`#define MATCAP
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
}`,dd=`#define MATCAP
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
}`,fd=`#define NORMAL
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
}`,pd=`#define NORMAL
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
}`,md=`#define PHONG
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
}`,gd=`#define PHONG
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
}`,_d=`#define STANDARD
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
}`,vd=`#define STANDARD
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
}`,xd=`#define TOON
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
}`,Md=`#define TOON
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
}`,Sd=`uniform float size;
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
}`,yd=`uniform vec3 diffuse;
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
}`,Ed=`#include <common>
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
}`,Ad=`uniform vec3 color;
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
}`,bd=`uniform float rotation;
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
}`,Td=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:$c,alphahash_pars_fragment:Kc,alphamap_fragment:Zc,alphamap_pars_fragment:jc,alphatest_fragment:Jc,alphatest_pars_fragment:Qc,aomap_fragment:th,aomap_pars_fragment:eh,batching_pars_vertex:nh,batching_vertex:ih,begin_vertex:sh,beginnormal_vertex:rh,bsdfs:ah,iridescence_fragment:oh,bumpmap_pars_fragment:lh,clipping_planes_fragment:ch,clipping_planes_pars_fragment:hh,clipping_planes_pars_vertex:uh,clipping_planes_vertex:dh,color_fragment:fh,color_pars_fragment:ph,color_pars_vertex:mh,color_vertex:gh,common:_h,cube_uv_reflection_fragment:vh,defaultnormal_vertex:xh,displacementmap_pars_vertex:Mh,displacementmap_vertex:Sh,emissivemap_fragment:yh,emissivemap_pars_fragment:Eh,colorspace_fragment:Ah,colorspace_pars_fragment:bh,envmap_fragment:Th,envmap_common_pars_fragment:wh,envmap_pars_fragment:Ch,envmap_pars_vertex:Rh,envmap_physical_pars_fragment:kh,envmap_vertex:Ph,fog_vertex:Lh,fog_pars_vertex:Dh,fog_fragment:Ih,fog_pars_fragment:Uh,gradientmap_pars_fragment:Nh,lightmap_pars_fragment:Fh,lights_lambert_fragment:Oh,lights_lambert_pars_fragment:Bh,lights_pars_begin:zh,lights_toon_fragment:Hh,lights_toon_pars_fragment:Gh,lights_phong_fragment:Vh,lights_phong_pars_fragment:Wh,lights_physical_fragment:Xh,lights_physical_pars_fragment:Yh,lights_fragment_begin:qh,lights_fragment_maps:$h,lights_fragment_end:Kh,logdepthbuf_fragment:Zh,logdepthbuf_pars_fragment:jh,logdepthbuf_pars_vertex:Jh,logdepthbuf_vertex:Qh,map_fragment:tu,map_pars_fragment:eu,map_particle_fragment:nu,map_particle_pars_fragment:iu,metalnessmap_fragment:su,metalnessmap_pars_fragment:ru,morphinstance_vertex:au,morphcolor_vertex:ou,morphnormal_vertex:lu,morphtarget_pars_vertex:cu,morphtarget_vertex:hu,normal_fragment_begin:uu,normal_fragment_maps:du,normal_pars_fragment:fu,normal_pars_vertex:pu,normal_vertex:mu,normalmap_pars_fragment:gu,clearcoat_normal_fragment_begin:_u,clearcoat_normal_fragment_maps:vu,clearcoat_pars_fragment:xu,iridescence_pars_fragment:Mu,opaque_fragment:Su,packing:yu,premultiplied_alpha_fragment:Eu,project_vertex:Au,dithering_fragment:bu,dithering_pars_fragment:Tu,roughnessmap_fragment:wu,roughnessmap_pars_fragment:Cu,shadowmap_pars_fragment:Ru,shadowmap_pars_vertex:Pu,shadowmap_vertex:Lu,shadowmask_pars_fragment:Du,skinbase_vertex:Iu,skinning_pars_vertex:Uu,skinning_vertex:Nu,skinnormal_vertex:Fu,specularmap_fragment:Ou,specularmap_pars_fragment:Bu,tonemapping_fragment:zu,tonemapping_pars_fragment:ku,transmission_fragment:Hu,transmission_pars_fragment:Gu,uv_pars_fragment:Vu,uv_pars_vertex:Wu,uv_vertex:Xu,worldpos_vertex:Yu,background_vert:qu,background_frag:$u,backgroundCube_vert:Ku,backgroundCube_frag:Zu,cube_vert:ju,cube_frag:Ju,depth_vert:Qu,depth_frag:td,distanceRGBA_vert:ed,distanceRGBA_frag:nd,equirect_vert:id,equirect_frag:sd,linedashed_vert:rd,linedashed_frag:ad,meshbasic_vert:od,meshbasic_frag:ld,meshlambert_vert:cd,meshlambert_frag:hd,meshmatcap_vert:ud,meshmatcap_frag:dd,meshnormal_vert:fd,meshnormal_frag:pd,meshphong_vert:md,meshphong_frag:gd,meshphysical_vert:_d,meshphysical_frag:vd,meshtoon_vert:xd,meshtoon_frag:Md,points_vert:Sd,points_frag:yd,shadow_vert:Ed,shadow_frag:Ad,sprite_vert:bd,sprite_frag:Td},ht={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Ge={basic:{uniforms:_e([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:_e([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Gt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:_e([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:_e([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:_e([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Gt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:_e([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:_e([ht.points,ht.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:_e([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:_e([ht.common,ht.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:_e([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:_e([ht.sprite,ht.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:_e([ht.common,ht.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:_e([ht.lights,ht.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Ge.physical={uniforms:_e([Ge.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const cs={r:0,b:0,g:0},Dn=new on,wd=new ne;function Cd(i,t,e,n,s,r,o){const a=new Gt(0);let l=r===!0?0:1,c,d,f=null,p=0,m=null;function _(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?e:t).get(E)),E}function v(A){let E=!1;const w=_(A);w===null?h(a,l):w&&w.isColor&&(h(w,1),E=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function u(A,E){const w=_(E);w&&(w.isCubeTexture||w.mapping===Ps)?(d===void 0&&(d=new sn(new ki(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Mi(Ge.backgroundCube.uniforms),vertexShader:Ge.backgroundCube.vertexShader,fragmentShader:Ge.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(N,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Dn.copy(E.backgroundRotation),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(wd.makeRotationFromEuler(Dn)),d.material.toneMapped=qt.getTransfer(w.colorSpace)!==jt,(f!==w||p!==w.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,f=w,p=w.version,m=i.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new sn(new Us(2,2),new ln({name:"BackgroundMaterial",uniforms:Mi(Ge.background.uniforms),vertexShader:Ge.background.vertexShader,fragmentShader:Ge.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=qt.getTransfer(w.colorSpace)!==jt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||p!==w.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=w,p=w.version,m=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function h(A,E){A.getRGB(cs,$o(i)),n.buffers.color.setClear(cs.r,cs.g,cs.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(A,E=1){a.set(A),l=E,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,h(a,l)},render:v,addToRenderList:u}}function Rd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,o=!1;function a(M,L,G,B,Z){let X=!1;const Y=f(B,G,L);r!==Y&&(r=Y,c(r.object)),X=m(M,B,G,Z),X&&_(M,B,G,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,w(M,L,G,B),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function f(M,L,G){const B=G.wireframe===!0;let Z=n[M.id];Z===void 0&&(Z={},n[M.id]=Z);let X=Z[L.id];X===void 0&&(X={},Z[L.id]=X);let Y=X[B];return Y===void 0&&(Y=p(l()),X[B]=Y),Y}function p(M){const L=[],G=[],B=[];for(let Z=0;Z<e;Z++)L[Z]=0,G[Z]=0,B[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:B,object:M,attributes:{},index:null}}function m(M,L,G,B){const Z=r.attributes,X=L.attributes;let Y=0;const j=G.getAttributes();for(const I in j)if(j[I].location>=0){const J=Z[I];let Q=X[I];if(Q===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),J===void 0||J.attribute!==Q||Q&&J.data!==Q.data)return!0;Y++}return r.attributesNum!==Y||r.index!==B}function _(M,L,G,B){const Z={},X=L.attributes;let Y=0;const j=G.getAttributes();for(const I in j)if(j[I].location>=0){let J=X[I];J===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(J=M.instanceColor));const Q={};Q.attribute=J,J&&J.data&&(Q.data=J.data),Z[I]=Q,Y++}r.attributes=Z,r.attributesNum=Y,r.index=B}function v(){const M=r.newAttributes;for(let L=0,G=M.length;L<G;L++)M[L]=0}function u(M){h(M,0)}function h(M,L){const G=r.newAttributes,B=r.enabledAttributes,Z=r.attributeDivisors;G[M]=1,B[M]===0&&(i.enableVertexAttribArray(M),B[M]=1),Z[M]!==L&&(i.vertexAttribDivisor(M,L),Z[M]=L)}function A(){const M=r.newAttributes,L=r.enabledAttributes;for(let G=0,B=L.length;G<B;G++)L[G]!==M[G]&&(i.disableVertexAttribArray(G),L[G]=0)}function E(M,L,G,B,Z,X,Y){Y===!0?i.vertexAttribIPointer(M,L,G,Z,X):i.vertexAttribPointer(M,L,G,B,Z,X)}function w(M,L,G,B){v();const Z=B.attributes,X=G.getAttributes(),Y=L.defaultAttributeValues;for(const j in X){const I=X[j];if(I.location>=0){let P=Z[j];if(P===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(P=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(P=M.instanceColor)),P!==void 0){const J=P.normalized,Q=P.itemSize,vt=t.get(P);if(vt===void 0)continue;const Et=vt.buffer,$=vt.type,K=vt.bytesPerElement,it=$===i.INT||$===i.UNSIGNED_INT||P.gpuType===Do;if(P.isInterleavedBufferAttribute){const nt=P.data,ft=nt.stride,gt=P.offset;if(nt.isInstancedInterleavedBuffer){for(let bt=0;bt<I.locationSize;bt++)h(I.location+bt,nt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let bt=0;bt<I.locationSize;bt++)u(I.location+bt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let bt=0;bt<I.locationSize;bt++)E(I.location+bt,Q/I.locationSize,$,J,ft*K,(gt+Q/I.locationSize*bt)*K,it)}else{if(P.isInstancedBufferAttribute){for(let nt=0;nt<I.locationSize;nt++)h(I.location+nt,P.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let nt=0;nt<I.locationSize;nt++)u(I.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let nt=0;nt<I.locationSize;nt++)E(I.location+nt,Q/I.locationSize,$,J,Q*K,Q/I.locationSize*nt*K,it)}}else if(Y!==void 0){const J=Y[j];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(I.location,J);break;case 3:i.vertexAttrib3fv(I.location,J);break;case 4:i.vertexAttrib4fv(I.location,J);break;default:i.vertexAttrib1fv(I.location,J)}}}}A()}function N(){C();for(const M in n){const L=n[M];for(const G in L){const B=L[G];for(const Z in B)d(B[Z].object),delete B[Z];delete L[G]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const G in L){const B=L[G];for(const Z in B)d(B[Z].object),delete B[Z];delete L[G]}delete n[M.id]}function b(M){for(const L in n){const G=n[L];if(G[M.id]===void 0)continue;const B=G[M.id];for(const Z in B)d(B[Z].object),delete B[Z];delete G[M.id]}}function C(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:N,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:u,disableUnusedAttributes:A}}function Pd(i,t,e){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function o(c,d,f){f!==0&&(i.drawArraysInstanced(n,c,d,f),e.update(d,n,f))}function a(c,d,f){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f;m++)this.render(c[m],d[m]);else{p.multiDrawArraysWEBGL(n,c,0,d,0,f);let m=0;for(let _=0;_<f;_++)m+=d[_];e.update(m,n,1)}}function l(c,d,f,p){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],d[_],p[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,p,0,f);let _=0;for(let v=0;v<f;v++)_+=d[v];for(let v=0;v<p.length;v++)e.update(_,n,p[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ld(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==We&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===Ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==En&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==xn&&!b)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=e.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),h=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:v,maxAttributes:u,maxVertexUniforms:h,maxVaryings:A,maxFragmentUniforms:E,vertexTextures:w,maxSamples:N}}function Dd(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new _n,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||n!==0||s;return s=p,n=f.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){e=d(f,p,0)},this.setState=function(f,p,m){const _=f.clippingPlanes,v=f.clipIntersection,u=f.clipShadows,h=i.get(f);if(!s||_===null||_.length===0||r&&!u)r?d(null):c();else{const A=r?0:n,E=A*4;let w=h.clippingState||null;l.value=w,w=d(_,p,E,m);for(let N=0;N!==E;++N)w[N]=e[N];h.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,p,m,_){const v=f!==null?f.length:0;let u=null;if(v!==0){if(u=l.value,_!==!0||u===null){const h=m+v*4,A=p.matrixWorldInverse;a.getNormalMatrix(A),(u===null||u.length<h)&&(u=new Float32Array(h));for(let E=0,w=m;E!==v;++E,w+=4)o.copy(f[E]).applyMatrix4(A,a),o.normal.toArray(u,w),u[w+3]=o.constant}l.value=u,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,u}}function Id(i){let t=new WeakMap;function e(o,a){return a===Ar?o.mapping=mi:a===br&&(o.mapping=gi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ar||a===br)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Wc(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ud extends Ko{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ui=4,Ga=[.125,.215,.35,.446,.526,.582],Bn=20,hr=new Ud,Va=new Gt;let ur=null,dr=0,fr=0,pr=!1;const Nn=(1+Math.sqrt(5))/2,ci=1/Nn,Wa=[new F(-Nn,ci,0),new F(Nn,ci,0),new F(-ci,0,Nn),new F(ci,0,Nn),new F(0,Nn,-ci),new F(0,Nn,ci),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Xa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ur=this._renderer.getRenderTarget(),dr=this._renderer.getActiveCubeFace(),fr=this._renderer.getActiveMipmapLevel(),pr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$a(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ur,dr,fr),this._renderer.xr.enabled=pr,t.scissorTest=!1,hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mi||t.mapping===gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ur=this._renderer.getRenderTarget(),dr=this._renderer.getActiveCubeFace(),fr=this._renderer.getActiveMipmapLevel(),pr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:Ls,format:We,colorSpace:An,depthBuffer:!1},s=Ya(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ya(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nd(r)),this._blurMaterial=Fd(r,t,e)}return s}_compileMaterial(t){const e=new sn(this._lodPlanes[0],t);this._renderer.compile(e,hr)}_sceneToCubeUV(t,e,n,s){const a=new De(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Va),d.toneMapping=Sn,d.autoClear=!1;const m=new Xo({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),_=new sn(new ki,m);let v=!1;const u=t.background;u?u.isColor&&(m.color.copy(u),t.background=null,v=!0):(m.color.copy(Va),v=!0);for(let h=0;h<6;h++){const A=h%3;A===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):A===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const E=this._cubeSize;hs(s,A*E,h>2?E:0,E,E),d.setRenderTarget(s),v&&d.render(_,a),d.render(t,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=u}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===mi||t.mapping===gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$a()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qa());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new sn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,hr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wa[(s-r-1)%Wa.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new sn(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Bn-1),v=r/_,u=isFinite(r)?1+Math.floor(d*v):Bn;u>Bn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Bn}`);const h=[];let A=0;for(let b=0;b<Bn;++b){const C=b/v,S=Math.exp(-C*C/2);h.push(S),b===0?A+=S:b<u&&(A+=2*S)}for(let b=0;b<h.length;b++)h[b]=h[b]/A;p.envMap.value=t.texture,p.samples.value=u,p.weights.value=h,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:E}=this;p.dTheta.value=_,p.mipInt.value=E-n;const w=this._sizeLods[s],N=3*w*(s>E-ui?s-E+ui:0),T=4*(this._cubeSize-w);hs(e,N,T,3*w,2*w),l.setRenderTarget(e),l.render(f,hr)}}function Nd(i){const t=[],e=[],n=[];let s=i;const r=i-ui+1+Ga.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ui?l=Ga[o-i+ui-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,f=1+c,p=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,_=6,v=3,u=2,h=1,A=new Float32Array(v*_*m),E=new Float32Array(u*_*m),w=new Float32Array(h*_*m);for(let T=0;T<m;T++){const b=T%3*2/3-1,C=T>2?0:-1,S=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];A.set(S,v*_*T),E.set(p,u*_*T);const M=[T,T,T,T,T,T];w.set(M,h*_*T)}const N=new Ue;N.setAttribute("position",new Zt(A,v)),N.setAttribute("uv",new Zt(E,u)),N.setAttribute("faceIndex",new Zt(w,h)),t.push(N),s>ui&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ya(i,t,e){const n=new Hn(i,t,e);return n.texture.mapping=Ps,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Fd(i,t,e){const n=new Float32Array(Bn),s=new F(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Br(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function qa(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Br(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function $a(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Br(){return`

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
	`}function Od(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ar||l===br,d=l===mi||l===gi;if(c||d){let f=t.get(a);const p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Xa(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||d&&m&&s(m)?(e===null&&(e=new Xa(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Bd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ko("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function zd(i,t,e,n){const s={},r=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);for(const _ in p.morphAttributes){const v=p.morphAttributes[_];for(let u=0,h=v.length;u<h;u++)t.remove(v[u])}p.removeEventListener("dispose",o),delete s[p.id];const m=r.get(p);m&&(t.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(f){const p=f.attributes;for(const _ in p)t.update(p[_],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const v=m[_];for(let u=0,h=v.length;u<h;u++)t.update(v[u],i.ARRAY_BUFFER)}}function c(f){const p=[],m=f.index,_=f.attributes.position;let v=0;if(m!==null){const A=m.array;v=m.version;for(let E=0,w=A.length;E<w;E+=3){const N=A[E+0],T=A[E+1],b=A[E+2];p.push(N,T,T,b,b,N)}}else if(_!==void 0){const A=_.array;v=_.version;for(let E=0,w=A.length/3-1;E<w;E+=3){const N=E+0,T=E+1,b=E+2;p.push(N,T,T,b,b,N)}}else return;const u=new(zo(p)?qo:Yo)(p,1);u.version=v;const h=r.get(f);h&&t.remove(h),r.set(f,u)}function d(f){const p=r.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function kd(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,m){i.drawElements(n,m,r,p*o),e.update(m,n,1)}function c(p,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,p*o,_),e.update(m,n,_))}function d(p,m,_){if(_===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let u=0;u<_;u++)this.render(p[u]/o,m[u]);else{v.multiDrawElementsWEBGL(n,m,0,r,p,0,_);let u=0;for(let h=0;h<_;h++)u+=m[h];e.update(u,n,1)}}function f(p,m,_,v){if(_===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let h=0;h<p.length;h++)c(p[h]/o,m[h],v[h]);else{u.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,v,0,_);let h=0;for(let A=0;A<_;A++)h+=m[A];for(let A=0;A<v.length;A++)e.update(h,n,v[A])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function Hd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gd(i,t,e){const n=new WeakMap,s=new fe;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let p=n.get(a);if(p===void 0||p.count!==f){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var m=M;p!==void 0&&p.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,u=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let w=0;_===!0&&(w=1),v===!0&&(w=2),u===!0&&(w=3);let N=a.attributes.position.count*w,T=1;N>t.maxTextureSize&&(T=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const b=new Float32Array(N*T*4*f),C=new Go(b,N,T,f);C.type=xn,C.needsUpdate=!0;const S=w*4;for(let L=0;L<f;L++){const G=h[L],B=A[L],Z=E[L],X=N*T*4*L;for(let Y=0;Y<G.count;Y++){const j=Y*S;_===!0&&(s.fromBufferAttribute(G,Y),b[X+j+0]=s.x,b[X+j+1]=s.y,b[X+j+2]=s.z,b[X+j+3]=0),v===!0&&(s.fromBufferAttribute(B,Y),b[X+j+4]=s.x,b[X+j+5]=s.y,b[X+j+6]=s.z,b[X+j+7]=0),u===!0&&(s.fromBufferAttribute(Z,Y),b[X+j+8]=s.x,b[X+j+9]=s.y,b[X+j+10]=s.z,b[X+j+11]=Z.itemSize===4?s.w:1)}}p={count:f,texture:C,size:new Bt(N,T)},n.set(a,p),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let u=0;u<c.length;u++)_+=c[u];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Vd(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,f=t.get(l,d);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Qo extends ye{constructor(t,e,n,s,r,o,a,l,c,d=fi){if(d!==fi&&d!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===fi&&(n=_i),n===void 0&&d===xi&&(n=vi),super(null,s,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ie,this.minFilter=l!==void 0?l:Ie,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const tl=new ye,el=new Qo(1,1);el.compareFunction=Bo;const nl=new Go,il=new Cc,sl=new Zo,Ka=[],Za=[],ja=new Float32Array(16),Ja=new Float32Array(9),Qa=new Float32Array(4);function Ai(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ka[s];if(r===void 0&&(r=new Float32Array(s),Ka[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ns(i,t){let e=Za[t];e===void 0&&(e=new Int32Array(t),Za[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2fv(this.addr,t),ce(e,t)}}function Yd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;i.uniform3fv(this.addr,t),ce(e,t)}}function qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4fv(this.addr,t),ce(e,t)}}function $d(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;Qa.set(n),i.uniformMatrix2fv(this.addr,!1,Qa),ce(e,n)}}function Kd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;Ja.set(n),i.uniformMatrix3fv(this.addr,!1,Ja),ce(e,n)}}function Zd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;ja.set(n),i.uniformMatrix4fv(this.addr,!1,ja),ce(e,n)}}function jd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2iv(this.addr,t),ce(e,t)}}function Qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;i.uniform3iv(this.addr,t),ce(e,t)}}function tf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4iv(this.addr,t),ce(e,t)}}function ef(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2uiv(this.addr,t),ce(e,t)}}function sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;i.uniform3uiv(this.addr,t),ce(e,t)}}function rf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4uiv(this.addr,t),ce(e,t)}}function af(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?el:tl;e.setTexture2D(t||r,s)}function of(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||il,s)}function lf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||sl,s)}function cf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||nl,s)}function hf(i){switch(i){case 5126:return Wd;case 35664:return Xd;case 35665:return Yd;case 35666:return qd;case 35674:return $d;case 35675:return Kd;case 35676:return Zd;case 5124:case 35670:return jd;case 35667:case 35671:return Jd;case 35668:case 35672:return Qd;case 35669:case 35673:return tf;case 5125:return ef;case 36294:return nf;case 36295:return sf;case 36296:return rf;case 35678:case 36198:case 36298:case 36306:case 35682:return af;case 35679:case 36299:case 36307:return of;case 35680:case 36300:case 36308:case 36293:return lf;case 36289:case 36303:case 36311:case 36292:return cf}}function uf(i,t){i.uniform1fv(this.addr,t)}function df(i,t){const e=Ai(t,this.size,2);i.uniform2fv(this.addr,e)}function ff(i,t){const e=Ai(t,this.size,3);i.uniform3fv(this.addr,e)}function pf(i,t){const e=Ai(t,this.size,4);i.uniform4fv(this.addr,e)}function mf(i,t){const e=Ai(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gf(i,t){const e=Ai(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _f(i,t){const e=Ai(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function vf(i,t){i.uniform1iv(this.addr,t)}function xf(i,t){i.uniform2iv(this.addr,t)}function Mf(i,t){i.uniform3iv(this.addr,t)}function Sf(i,t){i.uniform4iv(this.addr,t)}function yf(i,t){i.uniform1uiv(this.addr,t)}function Ef(i,t){i.uniform2uiv(this.addr,t)}function Af(i,t){i.uniform3uiv(this.addr,t)}function bf(i,t){i.uniform4uiv(this.addr,t)}function Tf(i,t,e){const n=this.cache,s=t.length,r=Ns(e,s);le(n,r)||(i.uniform1iv(this.addr,r),ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||tl,r[o])}function wf(i,t,e){const n=this.cache,s=t.length,r=Ns(e,s);le(n,r)||(i.uniform1iv(this.addr,r),ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||il,r[o])}function Cf(i,t,e){const n=this.cache,s=t.length,r=Ns(e,s);le(n,r)||(i.uniform1iv(this.addr,r),ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||sl,r[o])}function Rf(i,t,e){const n=this.cache,s=t.length,r=Ns(e,s);le(n,r)||(i.uniform1iv(this.addr,r),ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||nl,r[o])}function Pf(i){switch(i){case 5126:return uf;case 35664:return df;case 35665:return ff;case 35666:return pf;case 35674:return mf;case 35675:return gf;case 35676:return _f;case 5124:case 35670:return vf;case 35667:case 35671:return xf;case 35668:case 35672:return Mf;case 35669:case 35673:return Sf;case 5125:return yf;case 36294:return Ef;case 36295:return Af;case 36296:return bf;case 35678:case 36198:case 36298:case 36306:case 35682:return Tf;case 35679:case 36299:case 36307:return wf;case 35680:case 36300:case 36308:case 36293:return Cf;case 36289:case 36303:case 36311:case 36292:return Rf}}class Lf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hf(e.type)}}class Df{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pf(e.type)}}class If{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const mr=/(\w+)(\])?(\[|\.)?/g;function to(i,t){i.seq.push(t),i.map[t.id]=t}function Uf(i,t,e){const n=i.name,s=n.length;for(mr.lastIndex=0;;){const r=mr.exec(n),o=mr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){to(e,c===void 0?new Lf(a,i,t):new Df(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new If(a),to(e,f)),e=f}}}class xs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Uf(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function eo(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Nf=37297;let Ff=0;function Of(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Bf(i){const t=qt.getPrimaries(qt.workingColorSpace),e=qt.getPrimaries(i);let n;switch(t===e?n="":t===bs&&e===As?n="LinearDisplayP3ToLinearSRGB":t===As&&e===bs&&(n="LinearSRGBToLinearDisplayP3"),i){case An:case Ds:return[n,"LinearTransferOETF"];case He:case Or:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function no(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Of(i.getShaderSource(t),o)}else return s}function zf(i,t){const e=Bf(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function kf(i,t){let e;switch(t){case Wl:e="Linear";break;case Xl:e="Reinhard";break;case Yl:e="OptimizedCineon";break;case ql:e="ACESFilmic";break;case Kl:e="AgX";break;case Zl:e="Neutral";break;case $l:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Hf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Di).join(`
`)}function Gf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Di(i){return i!==""}function io(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function so(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rr(i){return i.replace(Wf,Yf)}const Xf=new Map;function Yf(i,t){let e=zt[t];if(e===void 0){const n=Xf.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Rr(e)}const qf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ro(i){return i.replace(qf,$f)}function $f(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ao(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Kf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ro?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===gl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Je&&(t="SHADOWMAP_TYPE_VSM"),t}function Zf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mi:case gi:t="ENVMAP_TYPE_CUBE";break;case Ps:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gi:t="ENVMAP_MODE_REFRACTION";break}return t}function Jf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Po:t="ENVMAP_BLENDING_MULTIPLY";break;case Gl:t="ENVMAP_BLENDING_MIX";break;case Vl:t="ENVMAP_BLENDING_ADD";break}return t}function Qf(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function tp(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Kf(e),c=Zf(e),d=jf(e),f=Jf(e),p=Qf(e),m=Hf(e),_=Gf(r),v=s.createProgram();let u,h,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Di).join(`
`),u.length>0&&(u+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Di).join(`
`),h.length>0&&(h+=`
`)):(u=[ao(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Di).join(`
`),h=[ao(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?kf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,zf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Di).join(`
`)),o=Rr(o),o=io(o,e),o=so(o,e),a=Rr(a),a=io(a,e),a=so(a,e),o=ro(o),a=ro(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,u=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,h=["#define varying in",e.glslVersion===ya?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ya?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=A+u+o,w=A+h+a,N=eo(s,s.VERTEX_SHADER,E),T=eo(s,s.FRAGMENT_SHADER,w);s.attachShader(v,N),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function b(L){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(N).trim(),Z=s.getShaderInfoLog(T).trim();let X=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,N,T);else{const j=no(s,N,"vertex"),I=no(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+j+`
`+I)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||Z==="")&&(Y=!1);Y&&(L.diagnostics={runnable:X,programLog:G,vertexShader:{log:B,prefix:u},fragmentShader:{log:Z,prefix:h}})}s.deleteShader(N),s.deleteShader(T),C=new xs(s,v),S=Vf(s,v)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Nf)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ff++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=T,this}let ep=0;class np{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ip(t),e.set(t,n)),n}}class ip{constructor(t){this.id=ep++,this.code=t,this.usedTimes=0}}function sp(i,t,e,n,s,r,o){const a=new Vo,l=new np,c=new Set,d=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function u(S,M,L,G,B){const Z=G.fog,X=B.geometry,Y=S.isMeshStandardMaterial?G.environment:null,j=(S.isMeshStandardMaterial?e:t).get(S.envMap||Y),I=j&&j.mapping===Ps?j.image.height:null,P=_[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const J=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Q=J!==void 0?J.length:0;let vt=0;X.morphAttributes.position!==void 0&&(vt=1),X.morphAttributes.normal!==void 0&&(vt=2),X.morphAttributes.color!==void 0&&(vt=3);let Et,$,K,it;if(P){const Wt=Ge[P];Et=Wt.vertexShader,$=Wt.fragmentShader}else Et=S.vertexShader,$=S.fragmentShader,l.update(S),K=l.getVertexShaderID(S),it=l.getFragmentShaderID(S);const nt=i.getRenderTarget(),ft=B.isInstancedMesh===!0,gt=B.isBatchedMesh===!0,bt=!!S.map,D=!!S.matcap,Dt=!!j,Ct=!!S.aoMap,Vt=!!S.lightMap,mt=!!S.bumpMap,Ot=!!S.normalMap,It=!!S.displacementMap,Pt=!!S.emissiveMap,Kt=!!S.metalnessMap,R=!!S.roughnessMap,x=S.anisotropy>0,V=S.clearcoat>0,tt=S.dispersion>0,st=S.iridescence>0,rt=S.sheen>0,Mt=S.transmission>0,ct=x&&!!S.anisotropyMap,lt=V&&!!S.clearcoatMap,Ut=V&&!!S.clearcoatNormalMap,at=V&&!!S.clearcoatRoughnessMap,_t=st&&!!S.iridescenceMap,Ht=st&&!!S.iridescenceThicknessMap,Tt=rt&&!!S.sheenColorMap,ut=rt&&!!S.sheenRoughnessMap,Nt=!!S.specularMap,Ft=!!S.specularColorMap,Jt=!!S.specularIntensityMap,g=Mt&&!!S.transmissionMap,W=Mt&&!!S.thicknessMap,z=!!S.gradientMap,q=!!S.alphaMap,et=S.alphaTest>0,St=!!S.alphaHash,Lt=!!S.extensions;let Qt=Sn;S.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Qt=i.toneMapping);const ie={shaderID:P,shaderType:S.type,shaderName:S.name,vertexShader:Et,fragmentShader:$,defines:S.defines,customVertexShaderID:K,customFragmentShaderID:it,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:gt,batchingColor:gt&&B._colorsTexture!==null,instancing:ft,instancingColor:ft&&B.instanceColor!==null,instancingMorph:ft&&B.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:An,alphaToCoverage:!!S.alphaToCoverage,map:bt,matcap:D,envMap:Dt,envMapMode:Dt&&j.mapping,envMapCubeUVHeight:I,aoMap:Ct,lightMap:Vt,bumpMap:mt,normalMap:Ot,displacementMap:p&&It,emissiveMap:Pt,normalMapObjectSpace:Ot&&S.normalMapType===uc,normalMapTangentSpace:Ot&&S.normalMapType===hc,metalnessMap:Kt,roughnessMap:R,anisotropy:x,anisotropyMap:ct,clearcoat:V,clearcoatMap:lt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:at,dispersion:tt,iridescence:st,iridescenceMap:_t,iridescenceThicknessMap:Ht,sheen:rt,sheenColorMap:Tt,sheenRoughnessMap:ut,specularMap:Nt,specularColorMap:Ft,specularIntensityMap:Jt,transmission:Mt,transmissionMap:g,thicknessMap:W,gradientMap:z,opaque:S.transparent===!1&&S.blending===di&&S.alphaToCoverage===!1,alphaMap:q,alphaTest:et,alphaHash:St,combine:S.combine,mapUv:bt&&v(S.map.channel),aoMapUv:Ct&&v(S.aoMap.channel),lightMapUv:Vt&&v(S.lightMap.channel),bumpMapUv:mt&&v(S.bumpMap.channel),normalMapUv:Ot&&v(S.normalMap.channel),displacementMapUv:It&&v(S.displacementMap.channel),emissiveMapUv:Pt&&v(S.emissiveMap.channel),metalnessMapUv:Kt&&v(S.metalnessMap.channel),roughnessMapUv:R&&v(S.roughnessMap.channel),anisotropyMapUv:ct&&v(S.anisotropyMap.channel),clearcoatMapUv:lt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ut&&v(S.sheenRoughnessMap.channel),specularMapUv:Nt&&v(S.specularMap.channel),specularColorMapUv:Ft&&v(S.specularColorMap.channel),specularIntensityMapUv:Jt&&v(S.specularIntensityMap.channel),transmissionMapUv:g&&v(S.transmissionMap.channel),thicknessMapUv:W&&v(S.thicknessMap.channel),alphaMapUv:q&&v(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ot||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(bt||q),fog:!!Z,useFog:S.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:vt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qt,decodeVideoTexture:bt&&S.map.isVideoTexture===!0&&qt.getTransfer(S.map.colorSpace)===jt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===en,flipSided:S.side===Se,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Lt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Lt&&S.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ie.vertexUv1s=c.has(1),ie.vertexUv2s=c.has(2),ie.vertexUv3s=c.has(3),c.clear(),ie}function h(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(A(M,S),E(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function A(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function E(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),S.push(a.mask)}function w(S){const M=_[S.type];let L;if(M){const G=Ge[M];L=kc.clone(G.uniforms)}else L=S.uniforms;return L}function N(S,M){let L;for(let G=0,B=d.length;G<B;G++){const Z=d[G];if(Z.cacheKey===M){L=Z,++L.usedTimes;break}}return L===void 0&&(L=new tp(i,M,S,r),d.push(L)),L}function T(S){if(--S.usedTimes===0){const M=d.indexOf(S);d[M]=d[d.length-1],d.pop(),S.destroy()}}function b(S){l.remove(S)}function C(){l.dispose()}return{getParameters:u,getProgramCacheKey:h,getUniforms:w,acquireProgram:N,releaseProgram:T,releaseShaderCache:b,programs:d,dispose:C}}function rp(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function ap(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function oo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function lo(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,p,m,_,v,u){let h=i[t];return h===void 0?(h={id:f.id,object:f,geometry:p,material:m,groupOrder:_,renderOrder:f.renderOrder,z:v,group:u},i[t]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=m,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=v,h.group=u),t++,h}function a(f,p,m,_,v,u){const h=o(f,p,m,_,v,u);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):e.push(h)}function l(f,p,m,_,v,u){const h=o(f,p,m,_,v,u);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):e.unshift(h)}function c(f,p){e.length>1&&e.sort(f||ap),n.length>1&&n.sort(p||oo),s.length>1&&s.sort(p||oo)}function d(){for(let f=t,p=i.length;f<p;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:d,sort:c}}function op(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new lo,i.set(n,[o])):s>=r.length?(o=new lo,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function lp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Gt};break;case"SpotLight":e={position:new F,direction:new F,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function cp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let hp=0;function up(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function dp(i){const t=new lp,e=cp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,r=new ne,o=new ne;function a(c){let d=0,f=0,p=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,_=0,v=0,u=0,h=0,A=0,E=0,w=0,N=0,T=0,b=0;c.sort(up);for(let S=0,M=c.length;S<M;S++){const L=c[S],G=L.color,B=L.intensity,Z=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=G.r*B,f+=G.g*B,p+=G.b*B;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],B);b++}else if(L.isDirectionalLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,I=e.get(L);I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,n.directionalShadow[m]=I,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=L.shadow.matrix,A++}n.directional[m]=Y,m++}else if(L.isSpotLight){const Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(G).multiplyScalar(B),Y.distance=Z,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[v]=Y;const j=L.shadow;if(L.map&&(n.spotLightMap[N]=L.map,N++,j.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[v]=j.matrix,L.castShadow){const I=e.get(L);I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,n.spotShadow[v]=I,n.spotShadowMap[v]=X,w++}v++}else if(L.isRectAreaLight){const Y=t.get(L);Y.color.copy(G).multiplyScalar(B),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[u]=Y,u++}else if(L.isPointLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const j=L.shadow,I=e.get(L);I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,I.shadowCameraNear=j.camera.near,I.shadowCameraFar=j.camera.far,n.pointShadow[_]=I,n.pointShadowMap[_]=X,n.pointShadowMatrix[_]=L.shadow.matrix,E++}n.point[_]=Y,_++}else if(L.isHemisphereLight){const Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(B),Y.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[h]=Y,h++}}u>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=p;const C=n.hash;(C.directionalLength!==m||C.pointLength!==_||C.spotLength!==v||C.rectAreaLength!==u||C.hemiLength!==h||C.numDirectionalShadows!==A||C.numPointShadows!==E||C.numSpotShadows!==w||C.numSpotMaps!==N||C.numLightProbes!==b)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=u,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=w+N-T,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=b,C.directionalLength=m,C.pointLength=_,C.spotLength=v,C.rectAreaLength=u,C.hemiLength=h,C.numDirectionalShadows=A,C.numPointShadows=E,C.numSpotShadows=w,C.numSpotMaps=N,C.numLightProbes=b,n.version=hp++)}function l(c,d){let f=0,p=0,m=0,_=0,v=0;const u=d.matrixWorldInverse;for(let h=0,A=c.length;h<A;h++){const E=c[h];if(E.isDirectionalLight){const w=n.directional[f];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),f++}else if(E.isSpotLight){const w=n.spot[m];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(u),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),m++}else if(E.isRectAreaLight){const w=n.rectArea[_];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(u),o.identity(),r.copy(E.matrixWorld),r.premultiply(u),o.extractRotation(r),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const w=n.point[p];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(u),p++}else if(E.isHemisphereLight){const w=n.hemi[v];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(u),v++}}}return{setup:a,setupView:l,state:n}}function co(i){const t=new dp(i),e=[],n=[];function s(d){c.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function fp(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new co(i),t.set(s,[a])):r>=o.length?(a=new co(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class pp extends Ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mp extends Ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const gp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_p=`uniform sampler2D shadow_pass;
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
}`;function vp(i,t,e){let n=new jo;const s=new Bt,r=new Bt,o=new fe,a=new pp({depthPacking:cc}),l=new mp,c={},d=e.maxTextureSize,f={[yn]:Se,[Se]:yn,[en]:en},p=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:gp,fragmentShader:_p}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ue;_.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new sn(_,p),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ro;let h=this.type;this.render=function(T,b,C){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Mn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const B=h!==Je&&this.type===Je,Z=h===Je&&this.type!==Je;for(let X=0,Y=T.length;X<Y;X++){const j=T[X],I=j.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const P=I.getFrameExtents();if(s.multiply(P),r.copy(I.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/P.x),s.x=r.x*P.x,I.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/P.y),s.y=r.y*P.y,I.mapSize.y=r.y)),I.map===null||B===!0||Z===!0){const Q=this.type!==Je?{minFilter:Ie,magFilter:Ie}:{};I.map!==null&&I.map.dispose(),I.map=new Hn(s.x,s.y,Q),I.map.texture.name=j.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const J=I.getViewportCount();for(let Q=0;Q<J;Q++){const vt=I.getViewport(Q);o.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),G.viewport(o),I.updateMatrices(j,Q),n=I.getFrustum(),w(b,C,I.camera,j,this.type)}I.isPointLightShadow!==!0&&this.type===Je&&A(I,C),I.needsUpdate=!1}h=this.type,u.needsUpdate=!1,i.setRenderTarget(S,M,L)};function A(T,b){const C=t.update(v);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Hn(s.x,s.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(b,null,C,p,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(b,null,C,m,v,null)}function E(T,b,C,S){let M=null;const L=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=C.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const G=M.uuid,B=b.uuid;let Z=c[G];Z===void 0&&(Z={},c[G]=Z);let X=Z[B];X===void 0&&(X=M.clone(),Z[B]=X,b.addEventListener("dispose",N)),M=X}if(M.visible=b.visible,M.wireframe=b.wireframe,S===Je?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:f[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=i.properties.get(M);G.light=C}return M}function w(T,b,C,S,M){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Je)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const B=t.update(T),Z=T.material;if(Array.isArray(Z)){const X=B.groups;for(let Y=0,j=X.length;Y<j;Y++){const I=X[Y],P=Z[I.materialIndex];if(P&&P.visible){const J=E(T,P,S,M);T.onBeforeShadow(i,T,b,C,B,J,I),i.renderBufferDirect(C,null,B,J,T,I),T.onAfterShadow(i,T,b,C,B,J,I)}}}else if(Z.visible){const X=E(T,Z,S,M);T.onBeforeShadow(i,T,b,C,B,X,null),i.renderBufferDirect(C,null,B,X,T,null),T.onAfterShadow(i,T,b,C,B,X,null)}}const G=T.children;for(let B=0,Z=G.length;B<Z;B++)w(G[B],b,C,S,M)}function N(T){T.target.removeEventListener("dispose",N);for(const C in c){const S=c[C],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function xp(i){function t(){let g=!1;const W=new fe;let z=null;const q=new fe(0,0,0,0);return{setMask:function(et){z!==et&&!g&&(i.colorMask(et,et,et,et),z=et)},setLocked:function(et){g=et},setClear:function(et,St,Lt,Qt,ie){ie===!0&&(et*=Qt,St*=Qt,Lt*=Qt),W.set(et,St,Lt,Qt),q.equals(W)===!1&&(i.clearColor(et,St,Lt,Qt),q.copy(W))},reset:function(){g=!1,z=null,q.set(-1,0,0,0)}}}function e(){let g=!1,W=null,z=null,q=null;return{setTest:function(et){et?it(i.DEPTH_TEST):nt(i.DEPTH_TEST)},setMask:function(et){W!==et&&!g&&(i.depthMask(et),W=et)},setFunc:function(et){if(z!==et){switch(et){case Nl:i.depthFunc(i.NEVER);break;case Fl:i.depthFunc(i.ALWAYS);break;case Ol:i.depthFunc(i.LESS);break;case Ss:i.depthFunc(i.LEQUAL);break;case Bl:i.depthFunc(i.EQUAL);break;case zl:i.depthFunc(i.GEQUAL);break;case kl:i.depthFunc(i.GREATER);break;case Hl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}z=et}},setLocked:function(et){g=et},setClear:function(et){q!==et&&(i.clearDepth(et),q=et)},reset:function(){g=!1,W=null,z=null,q=null}}}function n(){let g=!1,W=null,z=null,q=null,et=null,St=null,Lt=null,Qt=null,ie=null;return{setTest:function(Wt){g||(Wt?it(i.STENCIL_TEST):nt(i.STENCIL_TEST))},setMask:function(Wt){W!==Wt&&!g&&(i.stencilMask(Wt),W=Wt)},setFunc:function(Wt,se,re){(z!==Wt||q!==se||et!==re)&&(i.stencilFunc(Wt,se,re),z=Wt,q=se,et=re)},setOp:function(Wt,se,re){(St!==Wt||Lt!==se||Qt!==re)&&(i.stencilOp(Wt,se,re),St=Wt,Lt=se,Qt=re)},setLocked:function(Wt){g=Wt},setClear:function(Wt){ie!==Wt&&(i.clearStencil(Wt),ie=Wt)},reset:function(){g=!1,W=null,z=null,q=null,et=null,St=null,Lt=null,Qt=null,ie=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},d={},f=new WeakMap,p=[],m=null,_=!1,v=null,u=null,h=null,A=null,E=null,w=null,N=null,T=new Gt(0,0,0),b=0,C=!1,S=null,M=null,L=null,G=null,B=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=Y>=1):j.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=Y>=2);let I=null,P={};const J=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),vt=new fe().fromArray(J),Et=new fe().fromArray(Q);function $(g,W,z,q){const et=new Uint8Array(4),St=i.createTexture();i.bindTexture(g,St),i.texParameteri(g,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(g,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<z;Lt++)g===i.TEXTURE_3D||g===i.TEXTURE_2D_ARRAY?i.texImage3D(W,0,i.RGBA,1,1,q,0,i.RGBA,i.UNSIGNED_BYTE,et):i.texImage2D(W+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,et);return St}const K={};K[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),it(i.DEPTH_TEST),r.setFunc(Ss),mt(!1),Ot(Xr),it(i.CULL_FACE),Ct(Mn);function it(g){c[g]!==!0&&(i.enable(g),c[g]=!0)}function nt(g){c[g]!==!1&&(i.disable(g),c[g]=!1)}function ft(g,W){return d[g]!==W?(i.bindFramebuffer(g,W),d[g]=W,g===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=W),g===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=W),!0):!1}function gt(g,W){let z=p,q=!1;if(g){z=f.get(W),z===void 0&&(z=[],f.set(W,z));const et=g.textures;if(z.length!==et.length||z[0]!==i.COLOR_ATTACHMENT0){for(let St=0,Lt=et.length;St<Lt;St++)z[St]=i.COLOR_ATTACHMENT0+St;z.length=et.length,q=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,q=!0);q&&i.drawBuffers(z)}function bt(g){return m!==g?(i.useProgram(g),m=g,!0):!1}const D={[On]:i.FUNC_ADD,[vl]:i.FUNC_SUBTRACT,[xl]:i.FUNC_REVERSE_SUBTRACT};D[Ml]=i.MIN,D[Sl]=i.MAX;const Dt={[yl]:i.ZERO,[El]:i.ONE,[Al]:i.SRC_COLOR,[yr]:i.SRC_ALPHA,[Pl]:i.SRC_ALPHA_SATURATE,[Cl]:i.DST_COLOR,[Tl]:i.DST_ALPHA,[bl]:i.ONE_MINUS_SRC_COLOR,[Er]:i.ONE_MINUS_SRC_ALPHA,[Rl]:i.ONE_MINUS_DST_COLOR,[wl]:i.ONE_MINUS_DST_ALPHA,[Ll]:i.CONSTANT_COLOR,[Dl]:i.ONE_MINUS_CONSTANT_COLOR,[Il]:i.CONSTANT_ALPHA,[Ul]:i.ONE_MINUS_CONSTANT_ALPHA};function Ct(g,W,z,q,et,St,Lt,Qt,ie,Wt){if(g===Mn){_===!0&&(nt(i.BLEND),_=!1);return}if(_===!1&&(it(i.BLEND),_=!0),g!==_l){if(g!==v||Wt!==C){if((u!==On||E!==On)&&(i.blendEquation(i.FUNC_ADD),u=On,E=On),Wt)switch(g){case di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ni:i.blendFunc(i.ONE,i.ONE);break;case Yr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qr:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}else switch(g){case di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ni:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Yr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qr:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}h=null,A=null,w=null,N=null,T.set(0,0,0),b=0,v=g,C=Wt}return}et=et||W,St=St||z,Lt=Lt||q,(W!==u||et!==E)&&(i.blendEquationSeparate(D[W],D[et]),u=W,E=et),(z!==h||q!==A||St!==w||Lt!==N)&&(i.blendFuncSeparate(Dt[z],Dt[q],Dt[St],Dt[Lt]),h=z,A=q,w=St,N=Lt),(Qt.equals(T)===!1||ie!==b)&&(i.blendColor(Qt.r,Qt.g,Qt.b,ie),T.copy(Qt),b=ie),v=g,C=!1}function Vt(g,W){g.side===en?nt(i.CULL_FACE):it(i.CULL_FACE);let z=g.side===Se;W&&(z=!z),mt(z),g.blending===di&&g.transparent===!1?Ct(Mn):Ct(g.blending,g.blendEquation,g.blendSrc,g.blendDst,g.blendEquationAlpha,g.blendSrcAlpha,g.blendDstAlpha,g.blendColor,g.blendAlpha,g.premultipliedAlpha),r.setFunc(g.depthFunc),r.setTest(g.depthTest),r.setMask(g.depthWrite),s.setMask(g.colorWrite);const q=g.stencilWrite;o.setTest(q),q&&(o.setMask(g.stencilWriteMask),o.setFunc(g.stencilFunc,g.stencilRef,g.stencilFuncMask),o.setOp(g.stencilFail,g.stencilZFail,g.stencilZPass)),Pt(g.polygonOffset,g.polygonOffsetFactor,g.polygonOffsetUnits),g.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(g){S!==g&&(g?i.frontFace(i.CW):i.frontFace(i.CCW),S=g)}function Ot(g){g!==pl?(it(i.CULL_FACE),g!==M&&(g===Xr?i.cullFace(i.BACK):g===ml?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):nt(i.CULL_FACE),M=g}function It(g){g!==L&&(X&&i.lineWidth(g),L=g)}function Pt(g,W,z){g?(it(i.POLYGON_OFFSET_FILL),(G!==W||B!==z)&&(i.polygonOffset(W,z),G=W,B=z)):nt(i.POLYGON_OFFSET_FILL)}function Kt(g){g?it(i.SCISSOR_TEST):nt(i.SCISSOR_TEST)}function R(g){g===void 0&&(g=i.TEXTURE0+Z-1),I!==g&&(i.activeTexture(g),I=g)}function x(g,W,z){z===void 0&&(I===null?z=i.TEXTURE0+Z-1:z=I);let q=P[z];q===void 0&&(q={type:void 0,texture:void 0},P[z]=q),(q.type!==g||q.texture!==W)&&(I!==z&&(i.activeTexture(z),I=z),i.bindTexture(g,W||K[g]),q.type=g,q.texture=W)}function V(){const g=P[I];g!==void 0&&g.type!==void 0&&(i.bindTexture(g.type,null),g.type=void 0,g.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Ut(){try{i.texStorage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Ht(){try{i.texImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Tt(g){vt.equals(g)===!1&&(i.scissor(g.x,g.y,g.z,g.w),vt.copy(g))}function ut(g){Et.equals(g)===!1&&(i.viewport(g.x,g.y,g.z,g.w),Et.copy(g))}function Nt(g,W){let z=l.get(W);z===void 0&&(z=new WeakMap,l.set(W,z));let q=z.get(g);q===void 0&&(q=i.getUniformBlockIndex(W,g.name),z.set(g,q))}function Ft(g,W){const q=l.get(W).get(g);a.get(W)!==q&&(i.uniformBlockBinding(W,q,g.__bindingPointIndex),a.set(W,q))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},I=null,P={},d={},f=new WeakMap,p=[],m=null,_=!1,v=null,u=null,h=null,A=null,E=null,w=null,N=null,T=new Gt(0,0,0),b=0,C=!1,S=null,M=null,L=null,G=null,B=null,vt.set(0,0,i.canvas.width,i.canvas.height),Et.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:it,disable:nt,bindFramebuffer:ft,drawBuffers:gt,useProgram:bt,setBlending:Ct,setMaterial:Vt,setFlipSided:mt,setCullFace:Ot,setLineWidth:It,setPolygonOffset:Pt,setScissorTest:Kt,activeTexture:R,bindTexture:x,unbindTexture:V,compressedTexImage2D:tt,compressedTexImage3D:st,texImage2D:_t,texImage3D:Ht,updateUBOMapping:Nt,uniformBlockBinding:Ft,texStorage2D:Ut,texStorage3D:at,texSubImage2D:rt,texSubImage3D:Mt,compressedTexSubImage2D:ct,compressedTexSubImage3D:lt,scissor:Tt,viewport:ut,reset:Jt}}function Mp(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,d=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,x){return m?new OffscreenCanvas(R,x):ws("canvas")}function v(R,x,V){let tt=1;const st=Kt(R);if((st.width>V||st.height>V)&&(tt=V/Math.max(st.width,st.height)),tt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const rt=Math.floor(tt*st.width),Mt=Math.floor(tt*st.height);f===void 0&&(f=_(rt,Mt));const ct=x?_(rt,Mt):f;return ct.width=rt,ct.height=Mt,ct.getContext("2d").drawImage(R,0,0,rt,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+rt+"x"+Mt+")."),ct}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),R;return R}function u(R){return R.generateMipmaps&&R.minFilter!==Ie&&R.minFilter!==Be}function h(R){i.generateMipmap(R)}function A(R,x,V,tt,st=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let rt=x;if(x===i.RED&&(V===i.FLOAT&&(rt=i.R32F),V===i.HALF_FLOAT&&(rt=i.R16F),V===i.UNSIGNED_BYTE&&(rt=i.R8)),x===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(rt=i.R8UI),V===i.UNSIGNED_SHORT&&(rt=i.R16UI),V===i.UNSIGNED_INT&&(rt=i.R32UI),V===i.BYTE&&(rt=i.R8I),V===i.SHORT&&(rt=i.R16I),V===i.INT&&(rt=i.R32I)),x===i.RG&&(V===i.FLOAT&&(rt=i.RG32F),V===i.HALF_FLOAT&&(rt=i.RG16F),V===i.UNSIGNED_BYTE&&(rt=i.RG8)),x===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(rt=i.RG8UI),V===i.UNSIGNED_SHORT&&(rt=i.RG16UI),V===i.UNSIGNED_INT&&(rt=i.RG32UI),V===i.BYTE&&(rt=i.RG8I),V===i.SHORT&&(rt=i.RG16I),V===i.INT&&(rt=i.RG32I)),x===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),x===i.RGBA){const Mt=st?Es:qt.getTransfer(tt);V===i.FLOAT&&(rt=i.RGBA32F),V===i.HALF_FLOAT&&(rt=i.RGBA16F),V===i.UNSIGNED_BYTE&&(rt=Mt===jt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function E(R,x){let V;return R?x===null||x===_i||x===vi?V=i.DEPTH24_STENCIL8:x===xn?V=i.DEPTH32F_STENCIL8:x===ys&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===_i||x===vi?V=i.DEPTH_COMPONENT24:x===xn?V=i.DEPTH_COMPONENT32F:x===ys&&(V=i.DEPTH_COMPONENT16),V}function w(R,x){return u(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ie&&R.minFilter!==Be?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function N(R){const x=R.target;x.removeEventListener("dispose",N),b(x),x.isVideoTexture&&d.delete(x)}function T(R){const x=R.target;x.removeEventListener("dispose",T),S(x)}function b(R){const x=n.get(R);if(x.__webglInit===void 0)return;const V=R.source,tt=p.get(V);if(tt){const st=tt[x.__cacheKey];st.usedTimes--,st.usedTimes===0&&C(R),Object.keys(tt).length===0&&p.delete(V)}n.remove(R)}function C(R){const x=n.get(R);i.deleteTexture(x.__webglTexture);const V=R.source,tt=p.get(V);delete tt[x.__cacheKey],o.memory.textures--}function S(R){const x=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(x.__webglFramebuffer[tt]))for(let st=0;st<x.__webglFramebuffer[tt].length;st++)i.deleteFramebuffer(x.__webglFramebuffer[tt][st]);else i.deleteFramebuffer(x.__webglFramebuffer[tt]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[tt])}else{if(Array.isArray(x.__webglFramebuffer))for(let tt=0;tt<x.__webglFramebuffer.length;tt++)i.deleteFramebuffer(x.__webglFramebuffer[tt]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let tt=0;tt<x.__webglColorRenderbuffer.length;tt++)x.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[tt]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const V=R.textures;for(let tt=0,st=V.length;tt<st;tt++){const rt=n.get(V[tt]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(V[tt])}n.remove(R)}let M=0;function L(){M=0}function G(){const R=M;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),M+=1,R}function B(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function Z(R,x){const V=n.get(R);if(R.isVideoTexture&&It(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const tt=R.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Et(V,R,x);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+x)}function X(R,x){const V=n.get(R);if(R.version>0&&V.__version!==R.version){Et(V,R,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+x)}function Y(R,x){const V=n.get(R);if(R.version>0&&V.__version!==R.version){Et(V,R,x);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+x)}function j(R,x){const V=n.get(R);if(R.version>0&&V.__version!==R.version){$(V,R,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+x)}const I={[Tr]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[wr]:i.MIRRORED_REPEAT},P={[Ie]:i.NEAREST,[jl]:i.NEAREST_MIPMAP_NEAREST,[Vi]:i.NEAREST_MIPMAP_LINEAR,[Be]:i.LINEAR,[zs]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},J={[dc]:i.NEVER,[vc]:i.ALWAYS,[fc]:i.LESS,[Bo]:i.LEQUAL,[pc]:i.EQUAL,[_c]:i.GEQUAL,[mc]:i.GREATER,[gc]:i.NOTEQUAL};function Q(R,x){if(x.type===xn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Be||x.magFilter===zs||x.magFilter===Vi||x.magFilter===kn||x.minFilter===Be||x.minFilter===zs||x.minFilter===Vi||x.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,I[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,I[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,I[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,P[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,P[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,J[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ie||x.minFilter!==Vi&&x.minFilter!==kn||x.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function vt(R,x){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",N));const tt=x.source;let st=p.get(tt);st===void 0&&(st={},p.set(tt,st));const rt=B(x);if(rt!==R.__cacheKey){st[rt]===void 0&&(st[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),st[rt].usedTimes++;const Mt=st[R.__cacheKey];Mt!==void 0&&(st[R.__cacheKey].usedTimes--,Mt.usedTimes===0&&C(x)),R.__cacheKey=rt,R.__webglTexture=st[rt].texture}return V}function Et(R,x,V){let tt=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(tt=i.TEXTURE_3D);const st=vt(R,x),rt=x.source;e.bindTexture(tt,R.__webglTexture,i.TEXTURE0+V);const Mt=n.get(rt);if(rt.version!==Mt.__version||st===!0){e.activeTexture(i.TEXTURE0+V);const ct=qt.getPrimaries(qt.workingColorSpace),lt=x.colorSpace===vn?null:qt.getPrimaries(x.colorSpace),Ut=x.colorSpace===vn||ct===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let at=v(x.image,!1,s.maxTextureSize);at=Pt(x,at);const _t=r.convert(x.format,x.colorSpace),Ht=r.convert(x.type);let Tt=A(x.internalFormat,_t,Ht,x.colorSpace,x.isVideoTexture);Q(tt,x);let ut;const Nt=x.mipmaps,Ft=x.isVideoTexture!==!0,Jt=Mt.__version===void 0||st===!0,g=rt.dataReady,W=w(x,at);if(x.isDepthTexture)Tt=E(x.format===xi,x.type),Jt&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,Tt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Tt,at.width,at.height,0,_t,Ht,null));else if(x.isDataTexture)if(Nt.length>0){Ft&&Jt&&e.texStorage2D(i.TEXTURE_2D,W,Tt,Nt[0].width,Nt[0].height);for(let z=0,q=Nt.length;z<q;z++)ut=Nt[z],Ft?g&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,ut.width,ut.height,_t,Ht,ut.data):e.texImage2D(i.TEXTURE_2D,z,Tt,ut.width,ut.height,0,_t,Ht,ut.data);x.generateMipmaps=!1}else Ft?(Jt&&e.texStorage2D(i.TEXTURE_2D,W,Tt,at.width,at.height),g&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,_t,Ht,at.data)):e.texImage2D(i.TEXTURE_2D,0,Tt,at.width,at.height,0,_t,Ht,at.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ft&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,W,Tt,Nt[0].width,Nt[0].height,at.depth);for(let z=0,q=Nt.length;z<q;z++)if(ut=Nt[z],x.format!==We)if(_t!==null)if(Ft){if(g)if(x.layerUpdates.size>0){for(const et of x.layerUpdates){const St=ut.width*ut.height;e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,et,ut.width,ut.height,1,_t,ut.data.slice(St*et,St*(et+1)),0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,ut.width,ut.height,at.depth,_t,ut.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,Tt,ut.width,ut.height,at.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?g&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,ut.width,ut.height,at.depth,_t,Ht,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,z,Tt,ut.width,ut.height,at.depth,0,_t,Ht,ut.data)}else{Ft&&Jt&&e.texStorage2D(i.TEXTURE_2D,W,Tt,Nt[0].width,Nt[0].height);for(let z=0,q=Nt.length;z<q;z++)ut=Nt[z],x.format!==We?_t!==null?Ft?g&&e.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,ut.width,ut.height,_t,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,z,Tt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?g&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,ut.width,ut.height,_t,Ht,ut.data):e.texImage2D(i.TEXTURE_2D,z,Tt,ut.width,ut.height,0,_t,Ht,ut.data)}else if(x.isDataArrayTexture)if(Ft){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,W,Tt,at.width,at.height,at.depth),g)if(x.layerUpdates.size>0){let z;switch(Ht){case i.UNSIGNED_BYTE:switch(_t){case i.ALPHA:z=1;break;case i.LUMINANCE:z=1;break;case i.LUMINANCE_ALPHA:z=2;break;case i.RGB:z=3;break;case i.RGBA:z=4;break;default:throw new Error(`Unknown texel size for format ${_t}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:z=1;break;default:throw new Error(`Unknown texel size for type ${Ht}.`)}const q=at.width*at.height*z;for(const et of x.layerUpdates)e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,at.width,at.height,1,_t,Ht,at.data.slice(q*et,q*(et+1)));x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,_t,Ht,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,at.width,at.height,at.depth,0,_t,Ht,at.data);else if(x.isData3DTexture)Ft?(Jt&&e.texStorage3D(i.TEXTURE_3D,W,Tt,at.width,at.height,at.depth),g&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,_t,Ht,at.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,at.width,at.height,at.depth,0,_t,Ht,at.data);else if(x.isFramebufferTexture){if(Jt)if(Ft)e.texStorage2D(i.TEXTURE_2D,W,Tt,at.width,at.height);else{let z=at.width,q=at.height;for(let et=0;et<W;et++)e.texImage2D(i.TEXTURE_2D,et,Tt,z,q,0,_t,Ht,null),z>>=1,q>>=1}}else if(Nt.length>0){if(Ft&&Jt){const z=Kt(Nt[0]);e.texStorage2D(i.TEXTURE_2D,W,Tt,z.width,z.height)}for(let z=0,q=Nt.length;z<q;z++)ut=Nt[z],Ft?g&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,_t,Ht,ut):e.texImage2D(i.TEXTURE_2D,z,Tt,_t,Ht,ut);x.generateMipmaps=!1}else if(Ft){if(Jt){const z=Kt(at);e.texStorage2D(i.TEXTURE_2D,W,Tt,z.width,z.height)}g&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Ht,at)}else e.texImage2D(i.TEXTURE_2D,0,Tt,_t,Ht,at);u(x)&&h(tt),Mt.__version=rt.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function $(R,x,V){if(x.image.length!==6)return;const tt=vt(R,x),st=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);const rt=n.get(st);if(st.version!==rt.__version||tt===!0){e.activeTexture(i.TEXTURE0+V);const Mt=qt.getPrimaries(qt.workingColorSpace),ct=x.colorSpace===vn?null:qt.getPrimaries(x.colorSpace),lt=x.colorSpace===vn||Mt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Ut=x.isCompressedTexture||x.image[0].isCompressedTexture,at=x.image[0]&&x.image[0].isDataTexture,_t=[];for(let q=0;q<6;q++)!Ut&&!at?_t[q]=v(x.image[q],!0,s.maxCubemapSize):_t[q]=at?x.image[q].image:x.image[q],_t[q]=Pt(x,_t[q]);const Ht=_t[0],Tt=r.convert(x.format,x.colorSpace),ut=r.convert(x.type),Nt=A(x.internalFormat,Tt,ut,x.colorSpace),Ft=x.isVideoTexture!==!0,Jt=rt.__version===void 0||tt===!0,g=st.dataReady;let W=w(x,Ht);Q(i.TEXTURE_CUBE_MAP,x);let z;if(Ut){Ft&&Jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,W,Nt,Ht.width,Ht.height);for(let q=0;q<6;q++){z=_t[q].mipmaps;for(let et=0;et<z.length;et++){const St=z[et];x.format!==We?Tt!==null?Ft?g&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,et,0,0,St.width,St.height,Tt,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,et,Nt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?g&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,et,0,0,St.width,St.height,Tt,ut,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,et,Nt,St.width,St.height,0,Tt,ut,St.data)}}}else{if(z=x.mipmaps,Ft&&Jt){z.length>0&&W++;const q=Kt(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,W,Nt,q.width,q.height)}for(let q=0;q<6;q++)if(at){Ft?g&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,_t[q].width,_t[q].height,Tt,ut,_t[q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Nt,_t[q].width,_t[q].height,0,Tt,ut,_t[q].data);for(let et=0;et<z.length;et++){const Lt=z[et].image[q].image;Ft?g&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,et+1,0,0,Lt.width,Lt.height,Tt,ut,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,et+1,Nt,Lt.width,Lt.height,0,Tt,ut,Lt.data)}}else{Ft?g&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Tt,ut,_t[q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Nt,Tt,ut,_t[q]);for(let et=0;et<z.length;et++){const St=z[et];Ft?g&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,et+1,0,0,Tt,ut,St.image[q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,et+1,Nt,Tt,ut,St.image[q])}}}u(x)&&h(i.TEXTURE_CUBE_MAP),rt.__version=st.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function K(R,x,V,tt,st,rt){const Mt=r.convert(V.format,V.colorSpace),ct=r.convert(V.type),lt=A(V.internalFormat,Mt,ct,V.colorSpace);if(!n.get(x).__hasExternalTextures){const at=Math.max(1,x.width>>rt),_t=Math.max(1,x.height>>rt);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,rt,lt,at,_t,x.depth,0,Mt,ct,null):e.texImage2D(st,rt,lt,at,_t,0,Mt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Ot(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,st,n.get(V).__webglTexture,0,mt(x)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,st,n.get(V).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(R,x,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){const tt=x.depthTexture,st=tt&&tt.isDepthTexture?tt.type:null,rt=E(x.stencilBuffer,st),Mt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=mt(x);Ot(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,rt,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,rt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,rt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,R)}else{const tt=x.textures;for(let st=0;st<tt.length;st++){const rt=tt[st],Mt=r.convert(rt.format,rt.colorSpace),ct=r.convert(rt.type),lt=A(rt.internalFormat,Mt,ct,rt.colorSpace),Ut=mt(x);V&&Ot(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,lt,x.width,x.height):Ot(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut,lt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,lt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function nt(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);const tt=n.get(x.depthTexture).__webglTexture,st=mt(x);if(x.depthTexture.format===fi)Ot(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(x.depthTexture.format===xi)Ot(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function ft(R){const x=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");nt(x.__webglFramebuffer,R)}else if(V){x.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[tt]),x.__webglDepthbuffer[tt]=i.createRenderbuffer(),it(x.__webglDepthbuffer[tt],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),it(x.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(R,x,V){const tt=n.get(R);x!==void 0&&K(tt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&ft(R)}function bt(R){const x=R.texture,V=n.get(R),tt=n.get(x);R.addEventListener("dispose",T);const st=R.textures,rt=R.isWebGLCubeRenderTarget===!0,Mt=st.length>1;if(Mt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=x.version,o.memory.textures++),rt){V.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[ct]=[];for(let lt=0;lt<x.mipmaps.length;lt++)V.__webglFramebuffer[ct][lt]=i.createFramebuffer()}else V.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)V.__webglFramebuffer[ct]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let ct=0,lt=st.length;ct<lt;ct++){const Ut=n.get(st[ct]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Ot(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ct=0;ct<st.length;ct++){const lt=st[ct];V.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ct]);const Ut=r.convert(lt.format,lt.colorSpace),at=r.convert(lt.type),_t=A(lt.internalFormat,Ut,at,lt.colorSpace,R.isXRRenderTarget===!0),Ht=mt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,_t,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,V.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),it(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Q(i.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let lt=0;lt<x.mipmaps.length;lt++)K(V.__webglFramebuffer[ct][lt],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,lt);else K(V.__webglFramebuffer[ct],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);u(x)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ct=0,lt=st.length;ct<lt;ct++){const Ut=st[ct],at=n.get(Ut);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),Q(i.TEXTURE_2D,Ut),K(V.__webglFramebuffer,R,Ut,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),u(Ut)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ct=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,tt.__webglTexture),Q(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let lt=0;lt<x.mipmaps.length;lt++)K(V.__webglFramebuffer[lt],R,x,i.COLOR_ATTACHMENT0,ct,lt);else K(V.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,ct,0);u(x)&&h(ct),e.unbindTexture()}R.depthBuffer&&ft(R)}function D(R){const x=R.textures;for(let V=0,tt=x.length;V<tt;V++){const st=x[V];if(u(st)){const rt=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Mt=n.get(st).__webglTexture;e.bindTexture(rt,Mt),h(rt),e.unbindTexture()}}}const Dt=[],Ct=[];function Vt(R){if(R.samples>0){if(Ot(R)===!1){const x=R.textures,V=R.width,tt=R.height;let st=i.COLOR_BUFFER_BIT;const rt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(R),ct=x.length>1;if(ct)for(let lt=0;lt<x.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let lt=0;lt<x.length;lt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[lt]);const Ut=n.get(x[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,V,tt,0,0,V,tt,st,i.NEAREST),l===!0&&(Dt.length=0,Ct.length=0,Dt.push(i.COLOR_ATTACHMENT0+lt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Dt.push(rt),Ct.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ct)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let lt=0;lt<x.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[lt]);const Ut=n.get(x[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function mt(R){return Math.min(s.maxSamples,R.samples)}function Ot(R){const x=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function It(R){const x=o.render.frame;d.get(R)!==x&&(d.set(R,x),R.update())}function Pt(R,x){const V=R.colorSpace,tt=R.format,st=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==An&&V!==vn&&(qt.getTransfer(V)===jt?(tt!==We||st!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),x}function Kt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=L,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=gt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=K,this.useMultisampledRTT=Ot}function Sp(i,t){function e(n,s=vn){let r;const o=qt.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===Io)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Uo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jl)return i.BYTE;if(n===Ql)return i.SHORT;if(n===ys)return i.UNSIGNED_SHORT;if(n===Do)return i.INT;if(n===_i)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===Ls)return i.HALF_FLOAT;if(n===ec)return i.ALPHA;if(n===nc)return i.RGB;if(n===We)return i.RGBA;if(n===ic)return i.LUMINANCE;if(n===sc)return i.LUMINANCE_ALPHA;if(n===fi)return i.DEPTH_COMPONENT;if(n===xi)return i.DEPTH_STENCIL;if(n===rc)return i.RED;if(n===No)return i.RED_INTEGER;if(n===ac)return i.RG;if(n===Fo)return i.RG_INTEGER;if(n===Oo)return i.RGBA_INTEGER;if(n===ks||n===Hs||n===Gs||n===Vs)if(o===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$r||n===Kr||n===Zr||n===jr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jr||n===Qr||n===ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jr||n===Qr)return o===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ta)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ea||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ea)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===na)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ia)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sa)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ra)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===aa)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oa)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===la)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ca)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ha)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ua)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===da)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fa)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pa)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ws||n===ma||n===ga)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ws)return o===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ma)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oc||n===_a||n===va||n===xa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ws)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class yp extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class us extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ep={type:"move"};class gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const u=e.getJointPose(v,n),h=this._getHandJoint(c,v);u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=u.radius),h.visible=u!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=d.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&p>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ep)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new us;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ap=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bp=`
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

}`;class Tp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ln({vertexShader:Ap,fragmentShader:bp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new sn(new Us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class wp extends Vn{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,p=null,m=null,_=null;const v=new Tp,u=e.getContextAttributes();let h=null,A=null;const E=[],w=[],N=new Bt;let T=null;const b=new De;b.layers.enable(1),b.viewport=new fe;const C=new De;C.layers.enable(2),C.viewport=new fe;const S=[b,C],M=new yp;M.layers.enable(1),M.layers.enable(2);let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=E[$];return K===void 0&&(K=new gr,E[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=E[$];return K===void 0&&(K=new gr,E[$]=K),K.getGripSpace()},this.getHand=function($){let K=E[$];return K===void 0&&(K=new gr,E[$]=K),K.getHandSpace()};function B($){const K=w.indexOf($.inputSource);if(K===-1)return;const it=E[K];it!==void 0&&(it.update($.inputSource,$.frame,c||o),it.dispatchEvent({type:$.type,data:$.inputSource}))}function Z(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",X);for(let $=0;$<E.length;$++){const K=w[$];K!==null&&(w[$]=null,E[$].disconnect(K))}L=null,G=null,v.reset(),t.setRenderTarget(h),m=null,p=null,f=null,s=null,A=null,Et.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",X),u.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){const K={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new Hn(m.framebufferWidth,m.framebufferHeight,{format:We,type:En,colorSpace:t.outputColorSpace,stencilBuffer:u.stencil})}else{let K=null,it=null,nt=null;u.depth&&(nt=u.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=u.stencil?xi:fi,it=u.stencil?vi:_i);const ft={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};f=new XRWebGLBinding(s,e),p=f.createProjectionLayer(ft),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),A=new Hn(p.textureWidth,p.textureHeight,{format:We,type:En,depthTexture:new Qo(p.textureWidth,p.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:u.stencil,colorSpace:t.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Et.setContext(s),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function X($){for(let K=0;K<$.removed.length;K++){const it=$.removed[K],nt=w.indexOf(it);nt>=0&&(w[nt]=null,E[nt].disconnect(it))}for(let K=0;K<$.added.length;K++){const it=$.added[K];let nt=w.indexOf(it);if(nt===-1){for(let gt=0;gt<E.length;gt++)if(gt>=w.length){w.push(it),nt=gt;break}else if(w[gt]===null){w[gt]=it,nt=gt;break}if(nt===-1)break}const ft=E[nt];ft&&ft.connect(it)}}const Y=new F,j=new F;function I($,K,it){Y.setFromMatrixPosition(K.matrixWorld),j.setFromMatrixPosition(it.matrixWorld);const nt=Y.distanceTo(j),ft=K.projectionMatrix.elements,gt=it.projectionMatrix.elements,bt=ft[14]/(ft[10]-1),D=ft[14]/(ft[10]+1),Dt=(ft[9]+1)/ft[5],Ct=(ft[9]-1)/ft[5],Vt=(ft[8]-1)/ft[0],mt=(gt[8]+1)/gt[0],Ot=bt*Vt,It=bt*mt,Pt=nt/(-Vt+mt),Kt=Pt*-Vt;K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Kt),$.translateZ(Pt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const R=bt+Pt,x=D+Pt,V=Ot-Kt,tt=It+(nt-Kt),st=Dt*D/x*R,rt=Ct*D/x*R;$.projectionMatrix.makePerspective(V,tt,st,rt,R,x),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function P($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;v.texture!==null&&($.near=v.depthNear,$.far=v.depthFar),M.near=C.near=b.near=$.near,M.far=C.far=b.far=$.far,(L!==M.near||G!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,G=M.far,b.near=L,b.far=G,C.near=L,C.far=G,b.updateProjectionMatrix(),C.updateProjectionMatrix(),$.updateProjectionMatrix());const K=$.parent,it=M.cameras;P(M,K);for(let nt=0;nt<it.length;nt++)P(it[nt],K);it.length===2?I(M,b,C):M.projectionMatrix.copy(b.projectionMatrix),J($,M,K)};function J($,K,it){it===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(it.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Cr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function($){l=$,p!==null&&(p.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Q=null;function vt($,K){if(d=K.getViewerPose(c||o),_=K,d!==null){const it=d.views;m!==null&&(t.setRenderTargetFramebuffer(A,m.framebuffer),t.setRenderTarget(A));let nt=!1;it.length!==M.cameras.length&&(M.cameras.length=0,nt=!0);for(let gt=0;gt<it.length;gt++){const bt=it[gt];let D=null;if(m!==null)D=m.getViewport(bt);else{const Ct=f.getViewSubImage(p,bt);D=Ct.viewport,gt===0&&(t.setRenderTargetTextures(A,Ct.colorTexture,p.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(A))}let Dt=S[gt];Dt===void 0&&(Dt=new De,Dt.layers.enable(gt),Dt.viewport=new fe,S[gt]=Dt),Dt.matrix.fromArray(bt.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(bt.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(D.x,D.y,D.width,D.height),gt===0&&(M.matrix.copy(Dt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),nt===!0&&M.cameras.push(Dt)}const ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")){const gt=f.getDepthInformation(it[0]);gt&&gt.isValid&&gt.texture&&v.init(t,gt,s.renderState)}}for(let it=0;it<E.length;it++){const nt=w[it],ft=E[it];nt!==null&&ft!==void 0&&ft.update(nt,K,c||o)}Q&&Q($,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}const Et=new Jo;Et.setAnimationLoop(vt),this.setAnimationLoop=function($){Q=$},this.dispose=function(){}}}const In=new on,Cp=new ne;function Rp(i,t){function e(u,h){u.matrixAutoUpdate===!0&&u.updateMatrix(),h.value.copy(u.matrix)}function n(u,h){h.color.getRGB(u.fogColor.value,$o(i)),h.isFog?(u.fogNear.value=h.near,u.fogFar.value=h.far):h.isFogExp2&&(u.fogDensity.value=h.density)}function s(u,h,A,E,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(u,h):h.isMeshToonMaterial?(r(u,h),f(u,h)):h.isMeshPhongMaterial?(r(u,h),d(u,h)):h.isMeshStandardMaterial?(r(u,h),p(u,h),h.isMeshPhysicalMaterial&&m(u,h,w)):h.isMeshMatcapMaterial?(r(u,h),_(u,h)):h.isMeshDepthMaterial?r(u,h):h.isMeshDistanceMaterial?(r(u,h),v(u,h)):h.isMeshNormalMaterial?r(u,h):h.isLineBasicMaterial?(o(u,h),h.isLineDashedMaterial&&a(u,h)):h.isPointsMaterial?l(u,h,A,E):h.isSpriteMaterial?c(u,h):h.isShadowMaterial?(u.color.value.copy(h.color),u.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(u,h){u.opacity.value=h.opacity,h.color&&u.diffuse.value.copy(h.color),h.emissive&&u.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(u.map.value=h.map,e(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,e(h.alphaMap,u.alphaMapTransform)),h.bumpMap&&(u.bumpMap.value=h.bumpMap,e(h.bumpMap,u.bumpMapTransform),u.bumpScale.value=h.bumpScale,h.side===Se&&(u.bumpScale.value*=-1)),h.normalMap&&(u.normalMap.value=h.normalMap,e(h.normalMap,u.normalMapTransform),u.normalScale.value.copy(h.normalScale),h.side===Se&&u.normalScale.value.negate()),h.displacementMap&&(u.displacementMap.value=h.displacementMap,e(h.displacementMap,u.displacementMapTransform),u.displacementScale.value=h.displacementScale,u.displacementBias.value=h.displacementBias),h.emissiveMap&&(u.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,u.emissiveMapTransform)),h.specularMap&&(u.specularMap.value=h.specularMap,e(h.specularMap,u.specularMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest);const A=t.get(h),E=A.envMap,w=A.envMapRotation;E&&(u.envMap.value=E,In.copy(w),In.x*=-1,In.y*=-1,In.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),u.envMapRotation.value.setFromMatrix4(Cp.makeRotationFromEuler(In)),u.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=h.reflectivity,u.ior.value=h.ior,u.refractionRatio.value=h.refractionRatio),h.lightMap&&(u.lightMap.value=h.lightMap,u.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,u.lightMapTransform)),h.aoMap&&(u.aoMap.value=h.aoMap,u.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,u.aoMapTransform))}function o(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,h.map&&(u.map.value=h.map,e(h.map,u.mapTransform))}function a(u,h){u.dashSize.value=h.dashSize,u.totalSize.value=h.dashSize+h.gapSize,u.scale.value=h.scale}function l(u,h,A,E){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.size.value=h.size*A,u.scale.value=E*.5,h.map&&(u.map.value=h.map,e(h.map,u.uvTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,e(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function c(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.rotation.value=h.rotation,h.map&&(u.map.value=h.map,e(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,e(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function d(u,h){u.specular.value.copy(h.specular),u.shininess.value=Math.max(h.shininess,1e-4)}function f(u,h){h.gradientMap&&(u.gradientMap.value=h.gradientMap)}function p(u,h){u.metalness.value=h.metalness,h.metalnessMap&&(u.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,u.metalnessMapTransform)),u.roughness.value=h.roughness,h.roughnessMap&&(u.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,u.roughnessMapTransform)),h.envMap&&(u.envMapIntensity.value=h.envMapIntensity)}function m(u,h,A){u.ior.value=h.ior,h.sheen>0&&(u.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),u.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(u.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,u.sheenColorMapTransform)),h.sheenRoughnessMap&&(u.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,u.sheenRoughnessMapTransform))),h.clearcoat>0&&(u.clearcoat.value=h.clearcoat,u.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(u.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,u.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(u.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Se&&u.clearcoatNormalScale.value.negate())),h.dispersion>0&&(u.dispersion.value=h.dispersion),h.iridescence>0&&(u.iridescence.value=h.iridescence,u.iridescenceIOR.value=h.iridescenceIOR,u.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(u.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,u.iridescenceMapTransform)),h.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),h.transmission>0&&(u.transmission.value=h.transmission,u.transmissionSamplerMap.value=A.texture,u.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(u.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,u.transmissionMapTransform)),u.thickness.value=h.thickness,h.thicknessMap&&(u.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=h.attenuationDistance,u.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(u.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(u.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=h.specularIntensity,u.specularColor.value.copy(h.specularColor),h.specularColorMap&&(u.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,u.specularColorMapTransform)),h.specularIntensityMap&&(u.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,u.specularIntensityMapTransform))}function _(u,h){h.matcap&&(u.matcap.value=h.matcap)}function v(u,h){const A=t.get(h).light;u.referencePosition.value.setFromMatrixPosition(A.matrixWorld),u.nearDistance.value=A.shadow.camera.near,u.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Pp(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){const w=E.program;n.uniformBlockBinding(A,w)}function c(A,E){let w=s[A.id];w===void 0&&(_(A),w=d(A),s[A.id]=w,A.addEventListener("dispose",u));const N=E.program;n.updateUBOMapping(A,N);const T=t.render.frame;r[A.id]!==T&&(p(A),r[A.id]=T)}function d(A){const E=f();A.__bindingPointIndex=E;const w=i.createBuffer(),N=A.__size,T=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,N,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,w),w}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(A){const E=s[A.id],w=A.uniforms,N=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,b=w.length;T<b;T++){const C=Array.isArray(w[T])?w[T]:[w[T]];for(let S=0,M=C.length;S<M;S++){const L=C[S];if(m(L,T,S,N)===!0){const G=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let Z=0;for(let X=0;X<B.length;X++){const Y=B[X],j=v(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,G+Z,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,Z),Z+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,E,w,N){const T=A.value,b=E+"_"+w;if(N[b]===void 0)return typeof T=="number"||typeof T=="boolean"?N[b]=T:N[b]=T.clone(),!0;{const C=N[b];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return N[b]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function _(A){const E=A.uniforms;let w=0;const N=16;for(let b=0,C=E.length;b<C;b++){const S=Array.isArray(E[b])?E[b]:[E[b]];for(let M=0,L=S.length;M<L;M++){const G=S[M],B=Array.isArray(G.value)?G.value:[G.value];for(let Z=0,X=B.length;Z<X;Z++){const Y=B[Z],j=v(Y),I=w%N;I!==0&&N-I<j.boundary&&(w+=N-I),G.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=w,w+=j.storage}}}const T=w%N;return T>0&&(w+=N-T),A.__size=w,A.__cache={},this}function v(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function u(A){const E=A.target;E.removeEventListener("dispose",u);const w=o.indexOf(E.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function h(){for(const A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Lp{constructor(t={}){const{canvas:e=Sc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,u=null;const h=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=He,this.toneMapping=Sn,this.toneMappingExposure=1;const E=this;let w=!1,N=0,T=0,b=null,C=-1,S=null;const M=new fe,L=new fe;let G=null;const B=new Gt(0);let Z=0,X=e.width,Y=e.height,j=1,I=null,P=null;const J=new fe(0,0,X,Y),Q=new fe(0,0,X,Y);let vt=!1;const Et=new jo;let $=!1,K=!1;const it=new ne,nt=new F,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function bt(){return b===null?j:1}let D=n;function Dt(y,U){return e.getContext(y,U)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fr}`),e.addEventListener("webglcontextlost",W,!1),e.addEventListener("webglcontextrestored",z,!1),e.addEventListener("webglcontextcreationerror",q,!1),D===null){const U="webgl2";if(D=Dt(U,y),D===null)throw Dt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ct,Vt,mt,Ot,It,Pt,Kt,R,x,V,tt,st,rt,Mt,ct,lt,Ut,at,_t,Ht,Tt,ut,Nt,Ft;function Jt(){Ct=new Bd(D),Ct.init(),ut=new Sp(D,Ct),Vt=new Ld(D,Ct,t,ut),mt=new xp(D),Ot=new Hd(D),It=new rp,Pt=new Mp(D,Ct,mt,It,Vt,ut,Ot),Kt=new Id(E),R=new Od(E),x=new qc(D),Nt=new Rd(D,x),V=new zd(D,x,Ot,Nt),tt=new Vd(D,V,x,Ot),_t=new Gd(D,Vt,Pt),lt=new Dd(It),st=new sp(E,Kt,R,Ct,Vt,Nt,lt),rt=new Rp(E,It),Mt=new op,ct=new fp(Ct),at=new Cd(E,Kt,R,mt,tt,p,l),Ut=new vp(E,tt,Vt),Ft=new Pp(D,Ot,Vt,mt),Ht=new Pd(D,Ct,Ot),Tt=new kd(D,Ct,Ot),Ot.programs=st.programs,E.capabilities=Vt,E.extensions=Ct,E.properties=It,E.renderLists=Mt,E.shadowMap=Ut,E.state=mt,E.info=Ot}Jt();const g=new wp(E,D);this.xr=g,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const y=Ct.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ct.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(y){y!==void 0&&(j=y,this.setSize(X,Y,!1))},this.getSize=function(y){return y.set(X,Y)},this.setSize=function(y,U,k=!0){if(g.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,Y=U,e.width=Math.floor(y*j),e.height=Math.floor(U*j),k===!0&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(X*j,Y*j).floor()},this.setDrawingBufferSize=function(y,U,k){X=y,Y=U,j=k,e.width=Math.floor(y*k),e.height=Math.floor(U*k),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(M)},this.getViewport=function(y){return y.copy(J)},this.setViewport=function(y,U,k,H){y.isVector4?J.set(y.x,y.y,y.z,y.w):J.set(y,U,k,H),mt.viewport(M.copy(J).multiplyScalar(j).round())},this.getScissor=function(y){return y.copy(Q)},this.setScissor=function(y,U,k,H){y.isVector4?Q.set(y.x,y.y,y.z,y.w):Q.set(y,U,k,H),mt.scissor(L.copy(Q).multiplyScalar(j).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(y){mt.setScissorTest(vt=y)},this.setOpaqueSort=function(y){I=y},this.setTransparentSort=function(y){P=y},this.getClearColor=function(y){return y.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(y=!0,U=!0,k=!0){let H=0;if(y){let O=!1;if(b!==null){const ot=b.texture.format;O=ot===Oo||ot===Fo||ot===No}if(O){const ot=b.texture.type,dt=ot===En||ot===_i||ot===ys||ot===vi||ot===Io||ot===Uo,pt=at.getClearColor(),xt=at.getClearAlpha(),wt=pt.r,Rt=pt.g,At=pt.b;dt?(m[0]=wt,m[1]=Rt,m[2]=At,m[3]=xt,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=wt,_[1]=Rt,_[2]=At,_[3]=xt,D.clearBufferiv(D.COLOR,0,_))}else H|=D.COLOR_BUFFER_BIT}U&&(H|=D.DEPTH_BUFFER_BIT),k&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",W,!1),e.removeEventListener("webglcontextrestored",z,!1),e.removeEventListener("webglcontextcreationerror",q,!1),Mt.dispose(),ct.dispose(),It.dispose(),Kt.dispose(),R.dispose(),tt.dispose(),Nt.dispose(),Ft.dispose(),st.dispose(),g.dispose(),g.removeEventListener("sessionstart",se),g.removeEventListener("sessionend",re),Ee.stop()};function W(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const y=Ot.autoReset,U=Ut.enabled,k=Ut.autoUpdate,H=Ut.needsUpdate,O=Ut.type;Jt(),Ot.autoReset=y,Ut.enabled=U,Ut.autoUpdate=k,Ut.needsUpdate=H,Ut.type=O}function q(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function et(y){const U=y.target;U.removeEventListener("dispose",et),St(U)}function St(y){Lt(y),It.remove(y)}function Lt(y){const U=It.get(y).programs;U!==void 0&&(U.forEach(function(k){st.releaseProgram(k)}),y.isShaderMaterial&&st.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,k,H,O,ot){U===null&&(U=ft);const dt=O.isMesh&&O.matrixWorld.determinant()<0,pt=hl(y,U,k,H,O);mt.setMaterial(H,dt);let xt=k.index,wt=1;if(H.wireframe===!0){if(xt=V.getWireframeAttribute(k),xt===void 0)return;wt=2}const Rt=k.drawRange,At=k.attributes.position;let Xt=Rt.start*wt,te=(Rt.start+Rt.count)*wt;ot!==null&&(Xt=Math.max(Xt,ot.start*wt),te=Math.min(te,(ot.start+ot.count)*wt)),xt!==null?(Xt=Math.max(Xt,0),te=Math.min(te,xt.count)):At!=null&&(Xt=Math.max(Xt,0),te=Math.min(te,At.count));const ee=te-Xt;if(ee<0||ee===1/0)return;Nt.setup(O,H,pt,k,xt);let be,Yt=Ht;if(xt!==null&&(be=x.get(xt),Yt=Tt,Yt.setIndex(be)),O.isMesh)H.wireframe===!0?(mt.setLineWidth(H.wireframeLinewidth*bt()),Yt.setMode(D.LINES)):Yt.setMode(D.TRIANGLES);else if(O.isLine){let yt=H.linewidth;yt===void 0&&(yt=1),mt.setLineWidth(yt*bt()),O.isLineSegments?Yt.setMode(D.LINES):O.isLineLoop?Yt.setMode(D.LINE_LOOP):Yt.setMode(D.LINE_STRIP)}else O.isPoints?Yt.setMode(D.POINTS):O.isSprite&&Yt.setMode(D.TRIANGLES);if(O.isBatchedMesh)O._multiDrawInstances!==null?Yt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances):Yt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)Yt.renderInstances(Xt,ee,O.count);else if(k.isInstancedBufferGeometry){const yt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ge=Math.min(k.instanceCount,yt);Yt.renderInstances(Xt,ee,ge)}else Yt.render(Xt,ee)};function Qt(y,U,k){y.transparent===!0&&y.side===en&&y.forceSinglePass===!1?(y.side=Se,y.needsUpdate=!0,Hi(y,U,k),y.side=yn,y.needsUpdate=!0,Hi(y,U,k),y.side=en):Hi(y,U,k)}this.compile=function(y,U,k=null){k===null&&(k=y),u=ct.get(k),u.init(U),A.push(u),k.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),y!==k&&y.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();const H=new Set;return y.traverse(function(O){const ot=O.material;if(ot)if(Array.isArray(ot))for(let dt=0;dt<ot.length;dt++){const pt=ot[dt];Qt(pt,k,O),H.add(pt)}else Qt(ot,k,O),H.add(ot)}),A.pop(),u=null,H},this.compileAsync=function(y,U,k=null){const H=this.compile(y,U,k);return new Promise(O=>{function ot(){if(H.forEach(function(dt){It.get(dt).currentProgram.isReady()&&H.delete(dt)}),H.size===0){O(y);return}setTimeout(ot,10)}Ct.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let ie=null;function Wt(y){ie&&ie(y)}function se(){Ee.stop()}function re(){Ee.start()}const Ee=new Jo;Ee.setAnimationLoop(Wt),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(y){ie=y,g.setAnimationLoop(y),y===null?Ee.stop():Ee.start()},g.addEventListener("sessionstart",se),g.addEventListener("sessionend",re),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),g.enabled===!0&&g.isPresenting===!0&&(g.cameraAutoUpdate===!0&&g.updateCamera(U),U=g.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,U,b),u=ct.get(y,A.length),u.init(U),A.push(u),it.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Et.setFromProjectionMatrix(it),K=this.localClippingEnabled,$=lt.init(this.clippingPlanes,K),v=Mt.get(y,h.length),v.init(),h.push(v),g.enabled===!0&&g.isPresenting===!0){const ot=E.xr.getDepthSensingMesh();ot!==null&&Ae(ot,U,-1/0,E.sortObjects)}Ae(y,U,0,E.sortObjects),v.finish(),E.sortObjects===!0&&v.sort(I,P),gt=g.enabled===!1||g.isPresenting===!1||g.hasDepthSensing()===!1,gt&&at.addToRenderList(v,y),this.info.render.frame++,$===!0&&lt.beginShadows();const k=u.state.shadowsArray;Ut.render(k,y,U),$===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=v.opaque,O=v.transmissive;if(u.setupLights(),U.isArrayCamera){const ot=U.cameras;if(O.length>0)for(let dt=0,pt=ot.length;dt<pt;dt++){const xt=ot[dt];bn(H,O,y,xt)}gt&&at.render(y);for(let dt=0,pt=ot.length;dt<pt;dt++){const xt=ot[dt];cn(v,y,xt,xt.viewport)}}else O.length>0&&bn(H,O,y,U),gt&&at.render(y),cn(v,y,U);b!==null&&(Pt.updateMultisampleRenderTarget(b),Pt.updateRenderTargetMipmap(b)),y.isScene===!0&&y.onAfterRender(E,y,U),Nt.resetDefaultState(),C=-1,S=null,A.pop(),A.length>0?(u=A[A.length-1],$===!0&&lt.setGlobalState(E.clippingPlanes,u.state.camera)):u=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function Ae(y,U,k,H){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Et.intersectsSprite(y)){H&&nt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(it);const dt=tt.update(y),pt=y.material;pt.visible&&v.push(y,dt,pt,k,nt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Et.intersectsObject(y))){const dt=tt.update(y),pt=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),nt.copy(y.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),nt.copy(dt.boundingSphere.center)),nt.applyMatrix4(y.matrixWorld).applyMatrix4(it)),Array.isArray(pt)){const xt=dt.groups;for(let wt=0,Rt=xt.length;wt<Rt;wt++){const At=xt[wt],Xt=pt[At.materialIndex];Xt&&Xt.visible&&v.push(y,dt,Xt,k,nt.z,At)}}else pt.visible&&v.push(y,dt,pt,k,nt.z,null)}}const ot=y.children;for(let dt=0,pt=ot.length;dt<pt;dt++)Ae(ot[dt],U,k,H)}function cn(y,U,k,H){const O=y.opaque,ot=y.transmissive,dt=y.transparent;u.setupLightsView(k),$===!0&&lt.setGlobalState(E.clippingPlanes,k),H&&mt.viewport(M.copy(H)),O.length>0&&Tn(O,U,k),ot.length>0&&Tn(ot,U,k),dt.length>0&&Tn(dt,U,k),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function bn(y,U,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new Hn(1,1,{generateMipmaps:!0,type:Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float")?Ls:En,minFilter:kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const ot=u.state.transmissionRenderTarget[H.id],dt=H.viewport||M;ot.setSize(dt.z,dt.w);const pt=E.getRenderTarget();E.setRenderTarget(ot),E.getClearColor(B),Z=E.getClearAlpha(),Z<1&&E.setClearColor(16777215,.5),gt?at.render(k):E.clear();const xt=E.toneMapping;E.toneMapping=Sn;const wt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),$===!0&&lt.setGlobalState(E.clippingPlanes,H),Tn(y,k,H),Pt.updateMultisampleRenderTarget(ot),Pt.updateRenderTargetMipmap(ot),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let At=0,Xt=U.length;At<Xt;At++){const te=U[At],ee=te.object,be=te.geometry,Yt=te.material,yt=te.group;if(Yt.side===en&&ee.layers.test(H.layers)){const ge=Yt.side;Yt.side=Se,Yt.needsUpdate=!0,Hr(ee,k,H,be,Yt,yt),Yt.side=ge,Yt.needsUpdate=!0,Rt=!0}}Rt===!0&&(Pt.updateMultisampleRenderTarget(ot),Pt.updateRenderTargetMipmap(ot))}E.setRenderTarget(pt),E.setClearColor(B,Z),wt!==void 0&&(H.viewport=wt),E.toneMapping=xt}function Tn(y,U,k){const H=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ot=y.length;O<ot;O++){const dt=y[O],pt=dt.object,xt=dt.geometry,wt=H===null?dt.material:H,Rt=dt.group;pt.layers.test(k.layers)&&Hr(pt,U,k,xt,wt,Rt)}}function Hr(y,U,k,H,O,ot){y.onBeforeRender(E,U,k,H,O,ot),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(E,U,k,H,y,ot),O.transparent===!0&&O.side===en&&O.forceSinglePass===!1?(O.side=Se,O.needsUpdate=!0,E.renderBufferDirect(k,U,H,O,y,ot),O.side=yn,O.needsUpdate=!0,E.renderBufferDirect(k,U,H,O,y,ot),O.side=en):E.renderBufferDirect(k,U,H,O,y,ot),y.onAfterRender(E,U,k,H,O,ot)}function Hi(y,U,k){U.isScene!==!0&&(U=ft);const H=It.get(y),O=u.state.lights,ot=u.state.shadowsArray,dt=O.state.version,pt=st.getParameters(y,O.state,ot,U,k),xt=st.getProgramCacheKey(pt);let wt=H.programs;H.environment=y.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(y.isMeshStandardMaterial?R:Kt).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,wt===void 0&&(y.addEventListener("dispose",et),wt=new Map,H.programs=wt);let Rt=wt.get(xt);if(Rt!==void 0){if(H.currentProgram===Rt&&H.lightsStateVersion===dt)return Vr(y,pt),Rt}else pt.uniforms=st.getUniforms(y),y.onBuild(k,pt,E),y.onBeforeCompile(pt,E),Rt=st.acquireProgram(pt,xt),wt.set(xt,Rt),H.uniforms=pt.uniforms;const At=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(At.clippingPlanes=lt.uniform),Vr(y,pt),H.needsLights=dl(y),H.lightsStateVersion=dt,H.needsLights&&(At.ambientLightColor.value=O.state.ambient,At.lightProbe.value=O.state.probe,At.directionalLights.value=O.state.directional,At.directionalLightShadows.value=O.state.directionalShadow,At.spotLights.value=O.state.spot,At.spotLightShadows.value=O.state.spotShadow,At.rectAreaLights.value=O.state.rectArea,At.ltc_1.value=O.state.rectAreaLTC1,At.ltc_2.value=O.state.rectAreaLTC2,At.pointLights.value=O.state.point,At.pointLightShadows.value=O.state.pointShadow,At.hemisphereLights.value=O.state.hemi,At.directionalShadowMap.value=O.state.directionalShadowMap,At.directionalShadowMatrix.value=O.state.directionalShadowMatrix,At.spotShadowMap.value=O.state.spotShadowMap,At.spotLightMatrix.value=O.state.spotLightMatrix,At.spotLightMap.value=O.state.spotLightMap,At.pointShadowMap.value=O.state.pointShadowMap,At.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Rt,H.uniformsList=null,Rt}function Gr(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=xs.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Vr(y,U){const k=It.get(y);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function hl(y,U,k,H,O){U.isScene!==!0&&(U=ft),Pt.resetTextureUnits();const ot=U.fog,dt=H.isMeshStandardMaterial?U.environment:null,pt=b===null?E.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:An,xt=(H.isMeshStandardMaterial?R:Kt).get(H.envMap||dt),wt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Rt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),At=!!k.morphAttributes.position,Xt=!!k.morphAttributes.normal,te=!!k.morphAttributes.color;let ee=Sn;H.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ee=E.toneMapping);const be=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Yt=be!==void 0?be.length:0,yt=It.get(H),ge=u.state.lights;if($===!0&&(K===!0||y!==S)){const Ce=y===S&&H.id===C;lt.setState(H,y,Ce)}let $t=!1;H.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==ge.state.version||yt.outputColorSpace!==pt||O.isBatchedMesh&&yt.batching===!1||!O.isBatchedMesh&&yt.batching===!0||O.isBatchedMesh&&yt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&yt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&yt.instancing===!1||!O.isInstancedMesh&&yt.instancing===!0||O.isSkinnedMesh&&yt.skinning===!1||!O.isSkinnedMesh&&yt.skinning===!0||O.isInstancedMesh&&yt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&yt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&yt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&yt.instancingMorph===!1&&O.morphTexture!==null||yt.envMap!==xt||H.fog===!0&&yt.fog!==ot||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==lt.numPlanes||yt.numIntersection!==lt.numIntersection)||yt.vertexAlphas!==wt||yt.vertexTangents!==Rt||yt.morphTargets!==At||yt.morphNormals!==Xt||yt.morphColors!==te||yt.toneMapping!==ee||yt.morphTargetsCount!==Yt)&&($t=!0):($t=!0,yt.__version=H.version);let Ye=yt.currentProgram;$t===!0&&(Ye=Hi(H,U,O));let Gi=!1,wn=!1,Fs=!1;const he=Ye.getUniforms(),hn=yt.uniforms;if(mt.useProgram(Ye.program)&&(Gi=!0,wn=!0,Fs=!0),H.id!==C&&(C=H.id,wn=!0),Gi||S!==y){he.setValue(D,"projectionMatrix",y.projectionMatrix),he.setValue(D,"viewMatrix",y.matrixWorldInverse);const Ce=he.map.cameraPosition;Ce!==void 0&&Ce.setValue(D,nt.setFromMatrixPosition(y.matrixWorld)),Vt.logarithmicDepthBuffer&&he.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&he.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,wn=!0,Fs=!0)}if(O.isSkinnedMesh){he.setOptional(D,O,"bindMatrix"),he.setOptional(D,O,"bindMatrixInverse");const Ce=O.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),he.setValue(D,"boneTexture",Ce.boneTexture,Pt))}O.isBatchedMesh&&(he.setOptional(D,O,"batchingTexture"),he.setValue(D,"batchingTexture",O._matricesTexture,Pt),he.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&he.setValue(D,"batchingColorTexture",O._colorsTexture,Pt));const Os=k.morphAttributes;if((Os.position!==void 0||Os.normal!==void 0||Os.color!==void 0)&&_t.update(O,k,Ye),(wn||yt.receiveShadow!==O.receiveShadow)&&(yt.receiveShadow=O.receiveShadow,he.setValue(D,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(hn.envMap.value=xt,hn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(hn.envMapIntensity.value=U.environmentIntensity),wn&&(he.setValue(D,"toneMappingExposure",E.toneMappingExposure),yt.needsLights&&ul(hn,Fs),ot&&H.fog===!0&&rt.refreshFogUniforms(hn,ot),rt.refreshMaterialUniforms(hn,H,j,Y,u.state.transmissionRenderTarget[y.id]),xs.upload(D,Gr(yt),hn,Pt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(xs.upload(D,Gr(yt),hn,Pt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&he.setValue(D,"center",O.center),he.setValue(D,"modelViewMatrix",O.modelViewMatrix),he.setValue(D,"normalMatrix",O.normalMatrix),he.setValue(D,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ce=H.uniformsGroups;for(let Bs=0,fl=Ce.length;Bs<fl;Bs++){const Wr=Ce[Bs];Ft.update(Wr,Ye),Ft.bind(Wr,Ye)}}return Ye}function ul(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function dl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(y,U,k){It.get(y.texture).__webglTexture=U,It.get(y.depthTexture).__webglTexture=k;const H=It.get(y);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||Ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){const k=It.get(y);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,k=0){b=y,N=U,T=k;let H=!0,O=null,ot=!1,dt=!1;if(y){const xt=It.get(y);xt.__useDefaultFramebuffer!==void 0?(mt.bindFramebuffer(D.FRAMEBUFFER,null),H=!1):xt.__webglFramebuffer===void 0?Pt.setupRenderTarget(y):xt.__hasExternalTextures&&Pt.rebindTextures(y,It.get(y.texture).__webglTexture,It.get(y.depthTexture).__webglTexture);const wt=y.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(dt=!0);const Rt=It.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Rt[U])?O=Rt[U][k]:O=Rt[U],ot=!0):y.samples>0&&Pt.useMultisampledRTT(y)===!1?O=It.get(y).__webglMultisampledFramebuffer:Array.isArray(Rt)?O=Rt[k]:O=Rt,M.copy(y.viewport),L.copy(y.scissor),G=y.scissorTest}else M.copy(J).multiplyScalar(j).floor(),L.copy(Q).multiplyScalar(j).floor(),G=vt;if(mt.bindFramebuffer(D.FRAMEBUFFER,O)&&H&&mt.drawBuffers(y,O),mt.viewport(M),mt.scissor(L),mt.setScissorTest(G),ot){const xt=It.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,xt.__webglTexture,k)}else if(dt){const xt=It.get(y.texture),wt=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.__webglTexture,k||0,wt)}C=-1},this.readRenderTargetPixels=function(y,U,k,H,O,ot,dt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=It.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&dt!==void 0&&(pt=pt[dt]),pt){mt.bindFramebuffer(D.FRAMEBUFFER,pt);try{const xt=y.texture,wt=xt.format,Rt=xt.type;if(!Vt.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-H&&k>=0&&k<=y.height-O&&D.readPixels(U,k,H,O,ut.convert(wt),ut.convert(Rt),ot)}finally{const xt=b!==null?It.get(b).__webglFramebuffer:null;mt.bindFramebuffer(D.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(y,U,k,H,O,ot,dt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=It.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&dt!==void 0&&(pt=pt[dt]),pt){mt.bindFramebuffer(D.FRAMEBUFFER,pt);try{const xt=y.texture,wt=xt.format,Rt=xt.type;if(!Vt.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-H&&k>=0&&k<=y.height-O){const At=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,At),D.bufferData(D.PIXEL_PACK_BUFFER,ot.byteLength,D.STREAM_READ),D.readPixels(U,k,H,O,ut.convert(wt),ut.convert(Rt),0),D.flush();const Xt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await yc(D,Xt,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,At),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ot)}finally{D.deleteBuffer(At),D.deleteSync(Xt)}return ot}}finally{const xt=b!==null?It.get(b).__webglFramebuffer:null;mt.bindFramebuffer(D.FRAMEBUFFER,xt)}}},this.copyFramebufferToTexture=function(y,U=null,k=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);const H=Math.pow(2,-k),O=Math.floor(y.image.width*H),ot=Math.floor(y.image.height*H),dt=U!==null?U.x:0,pt=U!==null?U.y:0;Pt.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,dt,pt,O,ot),mt.unbindTexture()},this.copyTextureToTexture=function(y,U,k=null,H=null,O=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,y=arguments[1],U=arguments[2],O=arguments[3]||0,k=null);let ot,dt,pt,xt,wt,Rt;k!==null?(ot=k.max.x-k.min.x,dt=k.max.y-k.min.y,pt=k.min.x,xt=k.min.y):(ot=y.image.width,dt=y.image.height,pt=0,xt=0),H!==null?(wt=H.x,Rt=H.y):(wt=0,Rt=0);const At=ut.convert(U.format),Xt=ut.convert(U.type);Pt.setTexture2D(U,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const te=D.getParameter(D.UNPACK_ROW_LENGTH),ee=D.getParameter(D.UNPACK_IMAGE_HEIGHT),be=D.getParameter(D.UNPACK_SKIP_PIXELS),Yt=D.getParameter(D.UNPACK_SKIP_ROWS),yt=D.getParameter(D.UNPACK_SKIP_IMAGES),ge=y.isCompressedTexture?y.mipmaps[O]:y.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,ge.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ge.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,pt),D.pixelStorei(D.UNPACK_SKIP_ROWS,xt),y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,wt,Rt,ot,dt,At,Xt,ge.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,wt,Rt,ge.width,ge.height,At,ge.data):D.texSubImage2D(D.TEXTURE_2D,O,wt,Rt,At,Xt,ge),D.pixelStorei(D.UNPACK_ROW_LENGTH,te),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ee),D.pixelStorei(D.UNPACK_SKIP_PIXELS,be),D.pixelStorei(D.UNPACK_SKIP_ROWS,Yt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,yt),O===0&&U.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),mt.unbindTexture()},this.copyTextureToTexture3D=function(y,U,k=null,H=null,O=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,y=arguments[2],U=arguments[3],O=arguments[4]||0);let ot,dt,pt,xt,wt,Rt,At,Xt,te;const ee=y.isCompressedTexture?y.mipmaps[O]:y.image;k!==null?(ot=k.max.x-k.min.x,dt=k.max.y-k.min.y,pt=k.max.z-k.min.z,xt=k.min.x,wt=k.min.y,Rt=k.min.z):(ot=ee.width,dt=ee.height,pt=ee.depth,xt=0,wt=0,Rt=0),H!==null?(At=H.x,Xt=H.y,te=H.z):(At=0,Xt=0,te=0);const be=ut.convert(U.format),Yt=ut.convert(U.type);let yt;if(U.isData3DTexture)Pt.setTexture3D(U,0),yt=D.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Pt.setTexture2DArray(U,0),yt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const ge=D.getParameter(D.UNPACK_ROW_LENGTH),$t=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ye=D.getParameter(D.UNPACK_SKIP_PIXELS),Gi=D.getParameter(D.UNPACK_SKIP_ROWS),wn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ee.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ee.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,wt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rt),y.isDataTexture||y.isData3DTexture?D.texSubImage3D(yt,O,At,Xt,te,ot,dt,pt,be,Yt,ee.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(yt,O,At,Xt,te,ot,dt,pt,be,ee.data):D.texSubImage3D(yt,O,At,Xt,te,ot,dt,pt,be,Yt,ee),D.pixelStorei(D.UNPACK_ROW_LENGTH,ge),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$t),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ye),D.pixelStorei(D.UNPACK_SKIP_ROWS,Gi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,wn),O===0&&U.generateMipmaps&&D.generateMipmap(yt),mt.unbindTexture()},this.initRenderTarget=function(y){It.get(y).__webglFramebuffer===void 0&&Pt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Pt.setTextureCube(y,0):y.isData3DTexture?Pt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Pt.setTexture2DArray(y,0):Pt.setTexture2D(y,0),mt.unbindTexture()},this.resetState=function(){N=0,T=0,b=null,mt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Or?"display-p3":"srgb",e.unpackColorSpace=qt.workingColorSpace===Ds?"display-p3":"srgb"}}class Dp extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Pr extends Ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Cs=new F,Rs=new F,ho=new ne,Pi=new Is,ds=new zi,_r=new F,uo=new F;class Ip extends xe{constructor(t=new Ue,e=new Pr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Cs.fromBufferAttribute(e,s-1),Rs.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Cs.distanceTo(Rs);t.setAttribute("lineDistance",new an(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(s),ds.radius+=r,t.ray.intersectsSphere(ds)===!1)return;ho.copy(s).invert(),Pi.copy(t.ray).applyMatrix4(ho);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,p=n.attributes.position;if(d!==null){const m=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let v=m,u=_-1;v<u;v+=c){const h=d.getX(v),A=d.getX(v+1),E=fs(this,t,Pi,l,h,A);E&&e.push(E)}if(this.isLineLoop){const v=d.getX(_-1),u=d.getX(m),h=fs(this,t,Pi,l,v,u);h&&e.push(h)}}else{const m=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let v=m,u=_-1;v<u;v+=c){const h=fs(this,t,Pi,l,v,v+1);h&&e.push(h)}if(this.isLineLoop){const v=fs(this,t,Pi,l,_-1,m);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function fs(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Cs.fromBufferAttribute(o,s),Rs.fromBufferAttribute(o,r),e.distanceSqToSegment(Cs,Rs,_r,uo)>n)return;_r.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(_r);if(!(l<t.near||l>t.far))return{distance:l,point:uo.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,object:i}}const fo=new F,po=new F;class mo extends Ip{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)fo.fromBufferAttribute(e,s),po.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+fo.distanceTo(po);t.setAttribute("lineDistance",new an(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Up extends Ei{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const go=new ne,Lr=new Is,ps=new zi,ms=new F;class Np extends xe{constructor(t=new Ue,e=new Up){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(s),ps.radius+=r,t.ray.intersectsSphere(ps)===!1)return;go.copy(s).invert(),Lr.copy(t.ray).applyMatrix4(go);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const p=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=p,v=m;_<v;_++){const u=c.getX(_);ms.fromBufferAttribute(f,u),_o(ms,u,l,s,t,e,this)}}else{const p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=p,v=m;_<v;_++)ms.fromBufferAttribute(f,_),_o(ms,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _o(i,t,e,n,s,r,o){const a=Lr.distanceSqToPoint(i);if(a<e){const l=new F;Lr.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class vo{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ve(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fr);const xo={type:"change"},vr={type:"start"},Mo={type:"end"},gs=new Is,So=new _n,Fp=Math.cos(70*Mc.DEG2RAD);class Op extends Vn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xn.ROTATE,MIDDLE:Xn.DOLLY,RIGHT:Xn.PAN},this.touches={ONE:Yn.ROTATE,TWO:Yn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(g){g.addEventListener("keydown",lt),this._domElementKeyEvents=g},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",lt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(xo),n.update(),r=s.NONE},this.update=function(){const g=new F,W=new Gn().setFromUnitVectors(t.up,new F(0,1,0)),z=W.clone().invert(),q=new F,et=new Gn,St=new F,Lt=2*Math.PI;return function(ie=null){const Wt=n.object.position;g.copy(Wt).sub(n.target),g.applyQuaternion(W),a.setFromVector3(g),n.autoRotate&&r===s.NONE&&G(M(ie)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let se=n.minAzimuthAngle,re=n.maxAzimuthAngle;isFinite(se)&&isFinite(re)&&(se<-Math.PI?se+=Lt:se>Math.PI&&(se-=Lt),re<-Math.PI?re+=Lt:re>Math.PI&&(re-=Lt),se<=re?a.theta=Math.max(se,Math.min(re,a.theta)):a.theta=a.theta>(se+re)/2?Math.max(se,a.theta):Math.min(re,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Ee=!1;if(n.zoomToCursor&&T||n.object.isOrthographicCamera)a.radius=J(a.radius);else{const Ae=a.radius;a.radius=J(a.radius*c),Ee=Ae!=a.radius}if(g.setFromSpherical(a),g.applyQuaternion(z),Wt.copy(n.target).add(g),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),d.set(0,0,0)),n.zoomToCursor&&T){let Ae=null;if(n.object.isPerspectiveCamera){const cn=g.length();Ae=J(cn*c);const bn=cn-Ae;n.object.position.addScaledVector(w,bn),n.object.updateMatrixWorld(),Ee=!!bn}else if(n.object.isOrthographicCamera){const cn=new F(N.x,N.y,0);cn.unproject(n.object);const bn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ee=bn!==n.object.zoom;const Tn=new F(N.x,N.y,0);Tn.unproject(n.object),n.object.position.sub(Tn).add(cn),n.object.updateMatrixWorld(),Ae=g.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ae!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ae).add(n.object.position):(gs.origin.copy(n.object.position),gs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(gs.direction))<Fp?t.lookAt(n.target):(So.setFromNormalAndCoplanarPoint(n.object.up,n.target),gs.intersectPlane(So,n.target))))}else if(n.object.isOrthographicCamera){const Ae=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),Ae!==n.object.zoom&&(n.object.updateProjectionMatrix(),Ee=!0)}return c=1,T=!1,Ee||q.distanceToSquared(n.object.position)>o||8*(1-et.dot(n.object.quaternion))>o||St.distanceToSquared(n.target)>o?(n.dispatchEvent(xo),q.copy(n.object.position),et.copy(n.object.quaternion),St.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",_t),n.domElement.removeEventListener("pointerdown",Kt),n.domElement.removeEventListener("pointercancel",x),n.domElement.removeEventListener("wheel",st),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",x),n.domElement.getRootNode().removeEventListener("keydown",Mt,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",lt),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new vo,l=new vo;let c=1;const d=new F,f=new Bt,p=new Bt,m=new Bt,_=new Bt,v=new Bt,u=new Bt,h=new Bt,A=new Bt,E=new Bt,w=new F,N=new Bt;let T=!1;const b=[],C={};let S=!1;function M(g){return g!==null?2*Math.PI/60*n.autoRotateSpeed*g:2*Math.PI/60/60*n.autoRotateSpeed}function L(g){const W=Math.abs(g*.01);return Math.pow(.95,n.zoomSpeed*W)}function G(g){l.theta-=g}function B(g){l.phi-=g}const Z=function(){const g=new F;return function(z,q){g.setFromMatrixColumn(q,0),g.multiplyScalar(-z),d.add(g)}}(),X=function(){const g=new F;return function(z,q){n.screenSpacePanning===!0?g.setFromMatrixColumn(q,1):(g.setFromMatrixColumn(q,0),g.crossVectors(n.object.up,g)),g.multiplyScalar(z),d.add(g)}}(),Y=function(){const g=new F;return function(z,q){const et=n.domElement;if(n.object.isPerspectiveCamera){const St=n.object.position;g.copy(St).sub(n.target);let Lt=g.length();Lt*=Math.tan(n.object.fov/2*Math.PI/180),Z(2*z*Lt/et.clientHeight,n.object.matrix),X(2*q*Lt/et.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Z(z*(n.object.right-n.object.left)/n.object.zoom/et.clientWidth,n.object.matrix),X(q*(n.object.top-n.object.bottom)/n.object.zoom/et.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function j(g){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=g:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function I(g){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=g:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function P(g,W){if(!n.zoomToCursor)return;T=!0;const z=n.domElement.getBoundingClientRect(),q=g-z.left,et=W-z.top,St=z.width,Lt=z.height;N.x=q/St*2-1,N.y=-(et/Lt)*2+1,w.set(N.x,N.y,1).unproject(n.object).sub(n.object.position).normalize()}function J(g){return Math.max(n.minDistance,Math.min(n.maxDistance,g))}function Q(g){f.set(g.clientX,g.clientY)}function vt(g){P(g.clientX,g.clientX),h.set(g.clientX,g.clientY)}function Et(g){_.set(g.clientX,g.clientY)}function $(g){p.set(g.clientX,g.clientY),m.subVectors(p,f).multiplyScalar(n.rotateSpeed);const W=n.domElement;G(2*Math.PI*m.x/W.clientHeight),B(2*Math.PI*m.y/W.clientHeight),f.copy(p),n.update()}function K(g){A.set(g.clientX,g.clientY),E.subVectors(A,h),E.y>0?j(L(E.y)):E.y<0&&I(L(E.y)),h.copy(A),n.update()}function it(g){v.set(g.clientX,g.clientY),u.subVectors(v,_).multiplyScalar(n.panSpeed),Y(u.x,u.y),_.copy(v),n.update()}function nt(g){P(g.clientX,g.clientY),g.deltaY<0?I(L(g.deltaY)):g.deltaY>0&&j(L(g.deltaY)),n.update()}function ft(g){let W=!1;switch(g.code){case n.keys.UP:g.ctrlKey||g.metaKey||g.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,n.keyPanSpeed),W=!0;break;case n.keys.BOTTOM:g.ctrlKey||g.metaKey||g.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,-n.keyPanSpeed),W=!0;break;case n.keys.LEFT:g.ctrlKey||g.metaKey||g.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(n.keyPanSpeed,0),W=!0;break;case n.keys.RIGHT:g.ctrlKey||g.metaKey||g.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(-n.keyPanSpeed,0),W=!0;break}W&&(g.preventDefault(),n.update())}function gt(g){if(b.length===1)f.set(g.pageX,g.pageY);else{const W=Ft(g),z=.5*(g.pageX+W.x),q=.5*(g.pageY+W.y);f.set(z,q)}}function bt(g){if(b.length===1)_.set(g.pageX,g.pageY);else{const W=Ft(g),z=.5*(g.pageX+W.x),q=.5*(g.pageY+W.y);_.set(z,q)}}function D(g){const W=Ft(g),z=g.pageX-W.x,q=g.pageY-W.y,et=Math.sqrt(z*z+q*q);h.set(0,et)}function Dt(g){n.enableZoom&&D(g),n.enablePan&&bt(g)}function Ct(g){n.enableZoom&&D(g),n.enableRotate&&gt(g)}function Vt(g){if(b.length==1)p.set(g.pageX,g.pageY);else{const z=Ft(g),q=.5*(g.pageX+z.x),et=.5*(g.pageY+z.y);p.set(q,et)}m.subVectors(p,f).multiplyScalar(n.rotateSpeed);const W=n.domElement;G(2*Math.PI*m.x/W.clientHeight),B(2*Math.PI*m.y/W.clientHeight),f.copy(p)}function mt(g){if(b.length===1)v.set(g.pageX,g.pageY);else{const W=Ft(g),z=.5*(g.pageX+W.x),q=.5*(g.pageY+W.y);v.set(z,q)}u.subVectors(v,_).multiplyScalar(n.panSpeed),Y(u.x,u.y),_.copy(v)}function Ot(g){const W=Ft(g),z=g.pageX-W.x,q=g.pageY-W.y,et=Math.sqrt(z*z+q*q);A.set(0,et),E.set(0,Math.pow(A.y/h.y,n.zoomSpeed)),j(E.y),h.copy(A);const St=(g.pageX+W.x)*.5,Lt=(g.pageY+W.y)*.5;P(St,Lt)}function It(g){n.enableZoom&&Ot(g),n.enablePan&&mt(g)}function Pt(g){n.enableZoom&&Ot(g),n.enableRotate&&Vt(g)}function Kt(g){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(g.pointerId),n.domElement.addEventListener("pointermove",R),n.domElement.addEventListener("pointerup",x)),!ut(g)&&(Ht(g),g.pointerType==="touch"?Ut(g):V(g)))}function R(g){n.enabled!==!1&&(g.pointerType==="touch"?at(g):tt(g))}function x(g){switch(Tt(g),b.length){case 0:n.domElement.releasePointerCapture(g.pointerId),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",x),n.dispatchEvent(Mo),r=s.NONE;break;case 1:const W=b[0],z=C[W];Ut({pointerId:W,pageX:z.x,pageY:z.y});break}}function V(g){let W;switch(g.button){case 0:W=n.mouseButtons.LEFT;break;case 1:W=n.mouseButtons.MIDDLE;break;case 2:W=n.mouseButtons.RIGHT;break;default:W=-1}switch(W){case Xn.DOLLY:if(n.enableZoom===!1)return;vt(g),r=s.DOLLY;break;case Xn.ROTATE:if(g.ctrlKey||g.metaKey||g.shiftKey){if(n.enablePan===!1)return;Et(g),r=s.PAN}else{if(n.enableRotate===!1)return;Q(g),r=s.ROTATE}break;case Xn.PAN:if(g.ctrlKey||g.metaKey||g.shiftKey){if(n.enableRotate===!1)return;Q(g),r=s.ROTATE}else{if(n.enablePan===!1)return;Et(g),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(vr)}function tt(g){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;$(g);break;case s.DOLLY:if(n.enableZoom===!1)return;K(g);break;case s.PAN:if(n.enablePan===!1)return;it(g);break}}function st(g){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(g.preventDefault(),n.dispatchEvent(vr),nt(rt(g)),n.dispatchEvent(Mo))}function rt(g){const W=g.deltaMode,z={clientX:g.clientX,clientY:g.clientY,deltaY:g.deltaY};switch(W){case 1:z.deltaY*=16;break;case 2:z.deltaY*=100;break}return g.ctrlKey&&!S&&(z.deltaY*=10),z}function Mt(g){g.key==="Control"&&(S=!0,n.domElement.getRootNode().addEventListener("keyup",ct,{passive:!0,capture:!0}))}function ct(g){g.key==="Control"&&(S=!1,n.domElement.getRootNode().removeEventListener("keyup",ct,{passive:!0,capture:!0}))}function lt(g){n.enabled===!1||n.enablePan===!1||ft(g)}function Ut(g){switch(Nt(g),b.length){case 1:switch(n.touches.ONE){case Yn.ROTATE:if(n.enableRotate===!1)return;gt(g),r=s.TOUCH_ROTATE;break;case Yn.PAN:if(n.enablePan===!1)return;bt(g),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Yn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Dt(g),r=s.TOUCH_DOLLY_PAN;break;case Yn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ct(g),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(vr)}function at(g){switch(Nt(g),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Vt(g),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;mt(g),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;It(g),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Pt(g),n.update();break;default:r=s.NONE}}function _t(g){n.enabled!==!1&&g.preventDefault()}function Ht(g){b.push(g.pointerId)}function Tt(g){delete C[g.pointerId];for(let W=0;W<b.length;W++)if(b[W]==g.pointerId){b.splice(W,1);return}}function ut(g){for(let W=0;W<b.length;W++)if(b[W]==g.pointerId)return!0;return!1}function Nt(g){let W=C[g.pointerId];W===void 0&&(W=new Bt,C[g.pointerId]=W),W.set(g.pageX,g.pageY)}function Ft(g){const W=g.pointerId===b[0]?b[1]:b[0];return C[W]}n.domElement.addEventListener("contextmenu",_t),n.domElement.addEventListener("pointerdown",Kt),n.domElement.addEventListener("pointercancel",x),n.domElement.addEventListener("wheel",st,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Mt,{passive:!0,capture:!0}),this.update()}}class Bp{state;constructor(t=305419896){this.state=t>>>0,this.state===0&&(this.state=3735928559)}next(){let t=this.state;return t^=t<<13,t^=t>>>17,t^=t<<5,this.state=t>>>0,this.state}float(){return this.next()/4294967296}signed(){return this.next()/2147483648-1}below(t){return Math.floor(this.next()*t/4294967296)}seed(t){this.state=t>>>0||3735928559}}function de(i,t,e){return i<t?t:i>e?e:i}function rl(i,t,e){const n=de((e-i)/(t-i),0,1);return n*n*(3-2*n)}const Ms=Math.PI*2;class yo{constructor(t,e,n){this.lo=t,this.hi=e,this.curve=n}stageOf(t){const e=this.hi-this.lo;if(e<1e-6)return t<this.lo?0:1;const n=de((t-this.lo)/e,0,1);switch(this.curve){case 0:return n;case 1:return n*n;case 2:return Math.sqrt(n);case 3:return rl(0,1,n)}}blend(t,e,n){const s=this.stageOf(t);return e*(1-n*(1-s))}blendRange(t,e,n,s){const r=this.stageOf(t),o=e+(n-e)*r;return n*(1-s)+o*s}}const zp=`
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
`,kp=`
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
`;function Un(i,t,e){const n=Math.sin(i*1.7+t*2.3+e*3.1),s=Math.sin(i*2.6-t*1.9+e*1.5+13),r=Math.sin(i*3.5+t*2.7-e*2.1+27);return(n+s+r)/3}const Pe=24,Hp={particleCount:2e4,worldRadius:250,particleAlpha:.6,autoRotate:!0,hueBase:.55,hueRange:.2,brightness:1,noiseAmplitude:132.2,noiseScale:.0058884,noiseSpeed:.1505,vortexAmp:30,spiralAmp:0,curlAmp:26.6,attractorAmp:51.8,repellerAmp:73.6,flockSeparation:2.97,flockCohesion:4.34,flockCohesionSpeed:.033,flockNeighborRadius:81.37,mergeDistance:12.076,flockSpawnRate:225,flockMinAlive:.5,flockDamping:.92,particleSizeMin:2.881,particleSizeMax:10.7,fadeInFrames:20,fadeOutFrames:30,flashFrames:12,flashIntensity:1,accentChance:.1,accentSizeMul:2.5,clusterGridRes:5,clusterMinFlash:5,tailLength:0,tailAudioSensitivity:1,tailAlpha:.45,matBrightness:.208,matSpecular:.326,matAmbient:.163,matGlow:.702,conductorAmount:1,myceliumEnabled:!0,myceliumLinkMode:3,myceliumLinkDist:69.015,myceliumMaxLinks:5,myceliumKnnK:4,myceliumLifetime:90,myceliumNodeStride:5,myceliumAlpha:.35,myceliumFadeNear:0,myceliumLineWidth:0,myceliumFboBloom:!1,myceliumFboFade:.93};class Gp{N;posX;posY;posZ;velX;velY;velZ;colR;colG;colB;colA;size;mass;alive;lifetime;maxLifetime;fadeInT;fadeOutT;flashT;flashScale;trail;trailWriteIdx;trailCount;constructor(t){this.N=t,this.allocate(t)}allocate(t){this.N=t,this.posX=new Float32Array(t),this.posY=new Float32Array(t),this.posZ=new Float32Array(t),this.velX=new Float32Array(t),this.velY=new Float32Array(t),this.velZ=new Float32Array(t),this.colR=new Float32Array(t),this.colG=new Float32Array(t),this.colB=new Float32Array(t),this.colA=new Float32Array(t),this.size=new Float32Array(t),this.mass=new Float32Array(t),this.alive=new Uint8Array(t),this.lifetime=new Int32Array(t),this.maxLifetime=new Int32Array(t),this.fadeInT=new Int32Array(t),this.fadeOutT=new Int32Array(t),this.flashT=new Int32Array(t),this.flashScale=new Float32Array(t),this.trail=new Float32Array(t*Pe*3),this.trailWriteIdx=new Int32Array(t),this.trailCount=new Int32Array(t)}}class Vp{p={...Hp};pool;prng=new Bp(12648430);noiseTime=0;collisionsThisFrame=[];lastBboxMin=new F;lastBboxMax=new F;lastGridRes=5;lastBboxValid=!1;lastCellCounts=new Int32Array(0);audioInfluence=0;conductorValue=.5;sizeMultSmooth=1;scene;cam;particleGeom;particleMat;particlePoints;trailGeom;trailMat;trailLines;myceliumGeom;myceliumMat;myceliumLines;attrPos;attrCol;attrSize;fboA;fboB;fboScene;fboCam;fboQuad;fboFadeMat;persistentLinks=new Map;myceliumLinkCount=0;constructor(t,e){this.scene=t,this.cam=e,this.pool=new Gp(this.p.particleCount),this.particleGeom=new Ue,this.attrPos=new Zt(new Float32Array(this.pool.N*3),3),this.attrCol=new Zt(new Float32Array(this.pool.N*4),4),this.attrSize=new Zt(new Float32Array(this.pool.N),1),this.particleGeom.setAttribute("position",this.attrPos),this.particleGeom.setAttribute("pColor",this.attrCol),this.particleGeom.setAttribute("pSize",this.attrSize),this.particleGeom.setDrawRange(0,0),this.particleMat=new ln({vertexShader:zp,fragmentShader:kp,uniforms:{uBrightness:{value:.55},uSpecular:{value:.35},uAmbient:{value:.25},uGlow:{value:.3}},transparent:!0,depthWrite:!1,blending:Ni}),this.particlePoints=new Np(this.particleGeom,this.particleMat),this.particlePoints.frustumCulled=!1,this.scene.add(this.particlePoints),this.trailGeom=new Ue,this.trailGeom.setAttribute("position",new Zt(new Float32Array(0),3)),this.trailGeom.setAttribute("color",new Zt(new Float32Array(0),4)),this.trailMat=new Pr({vertexColors:!0,transparent:!0,blending:Ni,depthWrite:!1}),this.trailLines=new mo(this.trailGeom,this.trailMat),this.trailLines.frustumCulled=!1,this.scene.add(this.trailLines),this.myceliumGeom=new Ue,this.myceliumGeom.setAttribute("position",new Zt(new Float32Array(0),3)),this.myceliumGeom.setAttribute("color",new Zt(new Float32Array(0),4)),this.myceliumMat=new Pr({vertexColors:!0,transparent:!0,blending:Ni,depthWrite:!1}),this.myceliumLines=new mo(this.myceliumGeom,this.myceliumMat),this.myceliumLines.frustumCulled=!1,this.scene.add(this.myceliumLines),this._initParticles()}reset(){this._initParticles(),this.collisionsThisFrame.length=0}resizeIfNeeded(){this.pool.N!==this.p.particleCount&&(this.pool.allocate(this.p.particleCount),this.attrPos=new Zt(new Float32Array(this.pool.N*3),3),this.attrCol=new Zt(new Float32Array(this.pool.N*4),4),this.attrSize=new Zt(new Float32Array(this.pool.N),1),this.particleGeom.setAttribute("position",this.attrPos),this.particleGeom.setAttribute("pColor",this.attrCol),this.particleGeom.setAttribute("pSize",this.attrSize),this._initParticles())}_initParticles(){const t=this.pool;this.p.worldRadius;for(let e=0;e<t.N;e++)this._respawn(e,!0)}_respawn(t,e=!1){const n=this.pool,s=this.p.worldRadius*Math.cbrt(this.prng.float()),r=this.prng.float()*Ms,o=Math.acos(2*this.prng.float()-1);n.posX[t]=s*Math.sin(o)*Math.cos(r),n.posY[t]=s*Math.sin(o)*Math.sin(r),n.posZ[t]=s*Math.cos(o),n.velX[t]=(this.prng.float()-.5)*.6,n.velY[t]=(this.prng.float()-.5)*.6,n.velZ[t]=(this.prng.float()-.5)*.6;const a=this.p.hueBase+(this.prng.float()-.5)*this.p.hueRange,l=new Gt().setHSL(a-Math.floor(a),.7,.6);n.colR[t]=l.r,n.colG[t]=l.g,n.colB[t]=l.b,n.colA[t]=this.p.particleAlpha,n.size[t]=this.p.particleSizeMin+this.prng.float()*(this.p.particleSizeMax-this.p.particleSizeMin),n.mass[t]=1+this.prng.float()*2,n.alive[t]=1,n.fadeInT[t]=e?0:this.p.fadeInFrames,n.fadeOutT[t]=0,n.flashT[t]=0,n.flashScale[t]=1,n.lifetime[t]=0,n.maxLifetime[t]=9999999,n.trailCount[t]=0,n.trailWriteIdx[t]=0}setAudioInfluence(t){this.audioInfluence=t}setConductorValue(t){this.conductorValue=t}getCollisionsThisFrame(){return this.collisionsThisFrame}getWorldRadius(){return this.p.worldRadius}getFieldAmpTotal(){const t=this.p.vortexAmp+this.p.spiralAmp+this.p.curlAmp;return de(t/400,0,1)}getCurrentTailNormalized(){return de(this.p.tailLength/Pe,0,1)}getMyceliumLinkCount(){return this.myceliumLinkCount}update(t){t>.1&&(t=.1),this.resizeIfNeeded(),this.collisionsThisFrame.length=0;const e=this.pool,n=e.N,s=this.p,r=s.worldRadius,o=r*r,a=s.flockDamping,l=60*t,c=s.conductorAmount,d=.5*(1-c)+this.conductorValue*c,f=1*(1-c)+(.5+d)*c;this.noiseTime+=s.noiseSpeed*t;const p=this.noiseTime,m=s.noiseScale,_=s.flockSeparation,v=s.flockCohesion,u=s.flockCohesionSpeed,h=s.flockNeighborRadius*s.flockNeighborRadius,A=s.mergeDistance*s.mergeDistance,E=10;let w=0;for(let T=0;T<n;T++){if(!e.alive[T])continue;if(w++,e.fadeInT[T]>0&&e.fadeInT[T]--,e.fadeOutT[T]>0&&(e.fadeOutT[T]--,e.fadeOutT[T]<=0)){e.alive[T]=0;continue}e.flashT[T]>0&&e.flashT[T]--;const b=e.posX[T],C=e.posY[T],S=e.posZ[T];let M=0,L=0,G=0;if(s.noiseAmplitude>0){const K=b*m,it=C*m,nt=S*m;M+=Un(K+p,it,nt)*s.noiseAmplitude*f*.5,L+=Un(K,it+p,nt)*s.noiseAmplitude*f*.5,G+=Un(K,it,nt+p)*s.noiseAmplitude*f*.5}if(s.vortexAmp>0){const K=Math.sqrt(b*b+S*S)+1e-6;M+=-S/K*s.vortexAmp*f,G+=b/K*s.vortexAmp*f}if(s.spiralAmp>0){const K=Math.sqrt(b*b+S*S)+1e-6;M+=-S/K*s.spiralAmp*f*.8,G+=b/K*s.spiralAmp*f*.8,L+=.3*s.spiralAmp*f}if(s.curlAmp>0){const it=Un((b+.5)*m,C*m,S*m+p),nt=Un((b-.5)*m,C*m,S*m+p),ft=Un(b*m,(C+.5)*m,S*m+p),gt=Un(b*m,(C-.5)*m,S*m+p);M+=(ft-gt)*s.curlAmp*f,L+=(nt-it)*s.curlAmp*f}if(s.attractorAmp>0){const K=Math.sqrt(b*b+C*C+S*S)+1e-6;M-=b/K*s.attractorAmp*f,L-=C/K*s.attractorAmp*f,G-=S/K*s.attractorAmp*f}if(s.repellerAmp>0){const K=r*.02,it=b*b+C*C+S*S+K*K,nt=Math.sqrt(it);let ft=s.repellerAmp*f*1e3/it;const gt=s.repellerAmp*20;ft>gt&&(ft=gt),M+=b/nt*ft,L+=C/nt*ft,G+=S/nt*ft}let B=0,Z=0,X=0,Y=0,j=0,I=0,P=0;for(let K=0;K<E;K++){const it=this.prng.below(n);if(it===T||!e.alive[it])continue;const nt=e.posX[it]-b,ft=e.posY[it]-C,gt=e.posZ[it]-S,bt=nt*nt+ft*ft+gt*gt;if(bt<h&&bt>.01){const D=Math.sqrt(bt);B-=nt/D,Z-=ft/D,X-=gt/D,Y+=e.posX[it],j+=e.posY[it],I+=e.posZ[it],P++,bt<A&&this._tryMerge(T,it)}}P>0&&(M+=B*_/P,L+=Z*_/P,G+=X*_/P,Y=Y/P-b,j=j/P-C,I=I/P-S,M+=Y*v*u,L+=j*v*u,G+=I*v*u),e.velX[T]=(e.velX[T]+M*t)*a,e.velY[T]=(e.velY[T]+L*t)*a,e.velZ[T]=(e.velZ[T]+G*t)*a;const J=r*.5;e.velX[T]>J?e.velX[T]=J:e.velX[T]<-J&&(e.velX[T]=-J),e.velY[T]>J?e.velY[T]=J:e.velY[T]<-J&&(e.velY[T]=-J),e.velZ[T]>J?e.velZ[T]=J:e.velZ[T]<-J&&(e.velZ[T]=-J),e.posX[T]+=e.velX[T]*l,e.posY[T]+=e.velY[T]*l,e.posZ[T]+=e.velZ[T]*l;const Q=e.posX[T],vt=e.posY[T],Et=e.posZ[T];if(!isFinite(Q)||!isFinite(vt)||!isFinite(Et)||Math.abs(Q)>r*5||Math.abs(vt)>r*5||Math.abs(Et)>r*5){this._respawn(T);continue}const $=Q*Q+vt*vt+Et*Et;if($>o*1.5){const K=Math.sqrt($),it=(K-r)/r*.05;e.velX[T]-=Q/K*it,e.velY[T]-=vt/K*it,e.velZ[T]-=Et/K*it}if(s.tailLength>0){const K=T*Pe*3+e.trailWriteIdx[T]*3;e.trail[K+0]=e.posX[T],e.trail[K+1]=e.posY[T],e.trail[K+2]=e.posZ[T],e.trailWriteIdx[T]=(e.trailWriteIdx[T]+1)%Pe,e.trailCount[T]<Pe&&e.trailCount[T]++}}const N=Math.floor(n*s.flockMinAlive);if(w<N){let T=Math.min(N-w,Math.floor(s.flockSpawnRate));for(let b=0;b<n&&T>0;b++)e.alive[b]||(this._respawn(b),T--)}}_tryMerge(t,e){const n=this.pool;if(!n.alive[t]||!n.alive[e])return;const s=n.mass[t]>=n.mass[e]?t:e,r=s===t?e:t,o=n.mass[s]+n.mass[r],a=n.size[s],l=n.size[r],c=this.prng.float()<this.p.accentChance;n.mass[s]=o,n.size[s]=Math.min(this.p.particleSizeMax,n.size[s]+n.size[r]*.25);const d=a/(a+l),f=1-d;n.colR[s]=n.colR[s]*d+n.colR[r]*f,n.colG[s]=n.colG[s]*d+n.colG[r]*f,n.colB[s]=n.colB[s]*d+n.colB[r]*f,n.flashT[s]=this.p.flashFrames,n.flashScale[s]=c?this.p.accentSizeMul:1,n.fadeOutT[r]=this.p.fadeOutFrames,this.collisionsThisFrame.push({pos:new F(n.posX[s],n.posY[s],n.posZ[s]),newMass:o,winnerSize:a,loserSize:l,color:new Gt(n.colR[s],n.colG[s],n.colB[s]),isAccent:c})}getClusters(t){const e=this.pool,n=e.N,s=Math.max(2,this.p.clusterGridRes),r=s**3;let o=1e9,a=1e9,l=1e9,c=-1e9,d=-1e9,f=-1e9,p=!1;for(let b=0;b<n;b++){if(!e.alive[b]||e.fadeOutT[b]>0)continue;const C=e.posX[b],S=e.posY[b],M=e.posZ[b];C<o&&(o=C),S<a&&(a=S),M<l&&(l=M),C>c&&(c=C),S>d&&(d=S),M>f&&(f=M),p=!0}if(!p)return this.lastBboxValid=!1,[];const m=2;o-=m,a-=m,l-=m,c+=m,d+=m,f+=m;let _=c-o,v=d-a,u=f-l;_<1&&(_=1),v<1&&(v=1),u<1&&(u=1);const h=new Array(r);for(let b=0;b<r;b++)h[b]={mass:0,count:0,posX:0,posY:0,posZ:0,velX:0,velY:0,velZ:0,colR:0,colG:0,colB:0};const A=s/_,E=s/v,w=s/u;this.lastCellCounts=new Int32Array(r);for(let b=0;b<n;b++){if(!e.alive[b]||e.fadeOutT[b]>0||e.flashT[b]<=0)continue;const C=(e.posX[b]-o)*A,S=(e.posY[b]-a)*E,M=(e.posZ[b]-l)*w,L=de(C|0,0,s-1),G=de(S|0,0,s-1),B=de(M|0,0,s-1),Z=L+G*s+B*s*s,X=h[Z];X.mass+=e.mass[b],X.count++,X.posX+=e.posX[b],X.posY+=e.posY[b],X.posZ+=e.posZ[b],X.velX+=e.velX[b],X.velY+=e.velY[b],X.velZ+=e.velZ[b],X.colR+=e.colR[b],X.colG+=e.colG[b],X.colB+=e.colB[b],this.lastCellCounts[Z]++}this.lastBboxMin.set(o,a,l),this.lastBboxMax.set(c,d,f),this.lastGridRes=s,this.lastBboxValid=!0;const N=Math.max(1,this.p.clusterMinFlash),T=[];for(let b=0;b<r;b++){const C=h[b];if(C.count<N)continue;const S=1/C.count;T.push({centroid:new F(C.posX*S,C.posY*S,C.posZ*S),velocity:new F(C.velX*S,C.velY*S,C.velZ*S),totalMass:C.mass,particleCount:C.count,avgColor:new Gt(C.colR*S,C.colG*S,C.colB*S)})}return T.sort((b,C)=>C.totalMass-b.totalMass),T.length>t&&(T.length=t),T}draw(){const t=this.pool,e=t.N,n=this.p,s=n.conductorAmount,r=.5*(1-s)+this.conductorValue*s,a=new yo(.4,1,1).stageOf(r),l=1-s+s*(.5+a);{const w=l>=this.sizeMultSmooth?.08:.7,N=1-Math.exp(-.016666666666666666/w);this.sizeMultSmooth+=(l-this.sizeMultSmooth)*N}const c=this.sizeMultSmooth,f=new yo(.2,1,0).blend(r,n.matBrightness,s),p=this.attrPos.array,m=this.attrCol.array,_=this.attrSize.array;let v=0;const u=n.flashIntensity,h=n.flashFrames,A=n.fadeInFrames,E=n.fadeOutFrames;for(let w=0;w<e;w++){if(!t.alive[w])continue;let N=1;A>0&&t.fadeInT[w]>0&&(N=1-t.fadeInT[w]/A);let T=1;E>0&&t.fadeOutT[w]>0&&(T=t.fadeOutT[w]/E);let b=0;h>0&&t.flashT[w]>0&&(b=t.flashT[w]/h*u);let C=t.colR[w],S=t.colG[w],M=t.colB[w],L=t.colA[w];if(b>0){const B=de(b,0,1);C=C*(1-B)+B,S=S*(1-B)+B,M=M*(1-B)+B,L=Math.min(1,L*(1+b))}L*=N*T;const G=t.size[w]*c*(1+b*1.5*t.flashScale[w]);p[v*3+0]=t.posX[w],p[v*3+1]=t.posY[w],p[v*3+2]=t.posZ[w],m[v*4+0]=C,m[v*4+1]=S,m[v*4+2]=M,m[v*4+3]=L,_[v]=G,v++}this.particleGeom.setDrawRange(0,v),this.attrPos.needsUpdate=!0,this.attrCol.needsUpdate=!0,this.attrSize.needsUpdate=!0,this.particleMat.uniforms.uBrightness.value=f,this.particleMat.uniforms.uSpecular.value=n.matSpecular,this.particleMat.uniforms.uAmbient.value=n.matAmbient,this.particleMat.uniforms.uGlow.value=n.matGlow,this._buildTrailMesh(),n.myceliumEnabled?(this._buildMyceliumMesh(),this.myceliumLines.visible=!0):(this.myceliumLines.visible=!1,this.myceliumLinkCount=0)}_buildTrailMesh(){const t=this.pool,e=this.p,n=e.tailLength,s=.5+this.audioInfluence*e.tailAudioSensitivity*1.5;let r=Math.floor(n*s);if(r<2||e.tailAlpha<.001){this.trailGeom.setAttribute("position",new Zt(new Float32Array(0),3)),this.trailGeom.setAttribute("color",new Zt(new Float32Array(0),4)),this.trailLines.visible=!1;return}r>Pe&&(r=Pe);let o=1;r>18?o=3:r>12&&(o=2);const a=e.tailAlpha,l=[],c=[],d=t.N;for(let f=0;f<d;f++){if(!t.alive[f])continue;const p=Math.min(t.trailCount[f],r);if(p<2)continue;const m=Math.floor((p-1)/o);if(m<1)continue;const _=1/m,v=t.colA[f]*a;let u=t.trailWriteIdx[f]-p;for(;u<0;)u+=Pe;let h=(u+o)%Pe;for(let A=0;A<m;A++){const E=A*_,w=(A+1)*_,N=f*Pe*3+u*3,T=f*Pe*3+h*3;l.push(t.trail[N],t.trail[N+1],t.trail[N+2]),l.push(t.trail[T],t.trail[T+1],t.trail[T+2]),c.push(t.colR[f],t.colG[f],t.colB[f],v*E),c.push(t.colR[f],t.colG[f],t.colB[f],v*w),u=h,h=(h+o)%Pe}}this.trailGeom.setAttribute("position",new Zt(new Float32Array(l),3)),this.trailGeom.setAttribute("color",new Zt(new Float32Array(c),4)),this.trailLines.visible=l.length>0}_buildMyceliumMesh(){const t=this.pool,e=t.N,n=this.p,s=n.myceliumLinkDist;if(s<=.5){this.myceliumLinkCount=0;return}const r=Math.max(1,n.myceliumNodeStride),o=Math.max(1,n.myceliumMaxLinks),a=Math.max(1,n.myceliumKnnK),l=Math.max(1,n.myceliumLifetime),c=s*s,d=n.myceliumAlpha,f=de(n.myceliumFadeNear,0,1),p=n.myceliumLinkMode|0,m=[];for(let I=0;I<e;I+=r)t.alive[I]&&t.fadeOutT[I]===0&&m.push(I);if(m.length<2){this.myceliumLinkCount=0;return}let _=1e9,v=1e9,u=1e9,h=-1e9,A=-1e9,E=-1e9;for(const I of m){const P=t.posX[I],J=t.posY[I],Q=t.posZ[I];P<_&&(_=P),J<v&&(v=J),Q<u&&(u=Q),P>h&&(h=P),J>A&&(A=J),Q>E&&(E=Q)}const w=s*.51;_-=w,v-=w,u-=w,h+=w,A+=w,E+=w;const N=h-_,T=A-v,b=E-u,C=Math.max(1,Math.min(64,Math.ceil(N/s))),S=Math.max(1,Math.min(64,Math.ceil(T/s))),M=Math.max(1,Math.min(64,Math.ceil(b/s))),L=1/s,G=C*S*M,B=new Array(G);for(let I=0;I<G;I++)B[I]=[];for(const I of m){const P=de((t.posX[I]-_)*L|0,0,C-1),J=de((t.posY[I]-v)*L|0,0,S-1),Q=de((t.posZ[I]-u)*L|0,0,M-1);B[P+J*C+Q*C*S].push(I)}const Z=[],X=[],Y=(I,P,J,Q)=>{const $=1-Math.sqrt(J)*L*(1-f),K=(t.colR[I]+t.colR[P])*.5,it=(t.colG[I]+t.colG[P])*.5,nt=(t.colB[I]+t.colB[P])*.5,ft=d*$*Q;Z.push(t.posX[I],t.posY[I],t.posZ[I]),Z.push(t.posX[P],t.posY[P],t.posZ[P]),X.push(K,it,nt,ft),X.push(K,it,nt,ft)},j=(I,P,J)=>{const Q=[],vt=t.posX[I],Et=t.posY[I],$=t.posZ[I],K=de((vt-_)*L|0,0,C-1),it=de((Et-v)*L|0,0,S-1),nt=de(($-u)*L|0,0,M-1);for(let ft=-1;ft<=1;ft++){const gt=nt+ft;if(!(gt<0||gt>=M))for(let bt=-1;bt<=1;bt++){const D=it+bt;if(!(D<0||D>=S))for(let Dt=-1;Dt<=1;Dt++){const Ct=K+Dt;if(Ct<0||Ct>=C)continue;const Vt=B[Ct+D*C+gt*C*S];for(const mt of Vt){if(mt===I||mt<=I)continue;const Ot=t.posX[mt]-vt,It=t.posY[mt]-Et,Pt=t.posZ[mt]-$,Kt=Ot*Ot+It*It+Pt*Pt;Kt>J||Q.push({idx:mt,d2:Kt})}}}}return Q};switch(p){case 0:{for(const I of m){let P=j(I,!0,c);P.length>o&&(P.sort((J,Q)=>J.d2-Q.d2),P.length=o);for(const J of P)Y(I,J.idx,J.d2,1)}break}case 1:{for(const I of m){let P=j(I,!0,c);P.length>a&&(P.sort((J,Q)=>J.d2-Q.d2),P.length=a);for(const J of P)Y(I,J.idx,J.d2,1)}break}case 2:{for(const I of m){let P=j(I,!0,c);P.length>o&&(P.sort((J,Q)=>J.d2-Q.d2),P.length=o);for(const J of P){const Q=(Math.min(I,J.idx)>>>0)*4294967296+(Math.max(I,J.idx)>>>0);this.persistentLinks.set(Q,0)}}for(const[I,P]of this.persistentLinks){const J=Math.floor(I/4294967296),Q=I-J*4294967296,vt=J|0,Et=Q|0;if(vt<0||vt>=e||Et<0||Et>=e||!t.alive[vt]||!t.alive[Et]){this.persistentLinks.delete(I);continue}const $=P+1;if($>l){this.persistentLinks.delete(I);continue}this.persistentLinks.set(I,$);const K=t.posX[Et]-t.posX[vt],it=t.posY[Et]-t.posY[vt],nt=t.posZ[Et]-t.posZ[vt],ft=K*K+it*it+nt*nt,gt=1-$/l;Y(vt,Et,ft,gt)}break}case 3:{for(const I of m){const P=j(I,!0,c),J=[];for(const Q of P){const vt=t.posX[I],Et=t.posY[I],$=t.posZ[I],K=t.posX[Q.idx],it=t.posY[Q.idx],nt=t.posZ[Q.idx],ft=(vt+K)*.5,gt=(Et+it)*.5,bt=($+nt)*.5,D=Q.d2*.25;let Dt=!1;for(const Ct of P){if(Ct.idx===Q.idx)continue;const Vt=t.posX[Ct.idx]-ft,mt=t.posY[Ct.idx]-gt,Ot=t.posZ[Ct.idx]-bt;if(Vt*Vt+mt*mt+Ot*Ot<D){Dt=!0;break}}Dt||J.push(Q)}J.length>o&&(J.sort((Q,vt)=>Q.d2-vt.d2),J.length=o);for(const Q of J)Y(I,Q.idx,Q.d2,1)}break}}this.myceliumGeom.setAttribute("position",new Zt(new Float32Array(Z),3)),this.myceliumGeom.setAttribute("color",new Zt(new Float32Array(X),4)),this.myceliumMat.linewidth=n.myceliumLineWidth,this.myceliumLinkCount=Math.floor(Z.length/6)}}class Wp{ctx=null;node=null;ready=!1;audioEnergy=0;params={};async init(){if(this.ctx)return;this.ctx=new AudioContext({latencyHint:"interactive",sampleRate:44100});const t="./",e=(t.endsWith("/")?t:t+"/")+"synth-worklet.js";await this.ctx.audioWorklet.addModule(e),this.node=new AudioWorkletNode(this.ctx,"synth-processor",{numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[2]}),this.node.port.onmessage=n=>this._onMessage(n.data),this.node.connect(this.ctx.destination),this.ready=!0,Object.keys(this.params).length&&this.node.port.postMessage({type:"params",payload:this.params}),await this.loadDefaultSample()}get sampleRate(){return this.ctx?.sampleRate??44100}get audioEnergyMeasured(){return this.audioEnergy}get isReady(){return this.ready}_onMessage(t){t.type==="audioEnergy"&&(this.audioEnergy=t.value)}setParams(t){Object.assign(this.params,t),this.node&&this.node.port.postMessage({type:"params",payload:t})}setParam(t,e){this.params[t]=e,this.node&&this.node.port.postMessage({type:"params",payload:{[t]:e}})}setConductorValue(t){this.node?.port.postMessage({type:"conductorValue",value:t})}setTailInfluence(t){this.node?.port.postMessage({type:"tailInfluence",value:t})}setFieldAmpTotal(t){this.node?.port.postMessage({type:"fieldAmpTotal",value:t})}setClusterCount(t){this.node?.port.postMessage({type:"clusterCount",count:t})}setMyceliumLinks(t){this.node?.port.postMessage({type:"myceliumLinks",count:t})}updateClusters(t,e){this.node?.port.postMessage({type:"cluster",clusters:t,worldRadius:e})}triggerCollision(t){this.node?.port.postMessage({type:"trigger",kind:"collision",data:t})}reset(){this.node?.port.postMessage({type:"reset"})}setGranularSample(t,e="unknown"){if(!this.node)return;const n=new Float32Array(t);this.node.port.postMessage({type:"wavSource",samples:n,sampleRate:this.sampleRate,name:e},[n.buffer])}async loadWavFromFile(t){const e=await t.arrayBuffer();await this.decodeAndSend(e,t.name)}async loadDefaultSample(){try{const t="./",e=(t.endsWith("/")?t:t+"/")+"samples/Tremblay-CF-ChurchBells.wav",n=await fetch(e);if(!n.ok)throw new Error("sample not bundled");const s=await n.arrayBuffer();await this.decodeAndSend(s,"Tremblay-CF-ChurchBells.wav")}catch(t){console.warn("[audio] default sample not loaded, granular will be silent:",t)}}async decodeAndSend(t,e){if(!this.ctx)return;const n=await this.ctx.decodeAudioData(t.slice(0)),s=Math.min(n.length,Math.floor(30*n.sampleRate)),r=new Float32Array(s),o=n.numberOfChannels;for(let c=0;c<o;c++){const d=n.getChannelData(c);for(let f=0;f<s;f++)r[f]+=d[f]}for(let c=0;c<s;c++)r[c]/=o;let a;if(n.sampleRate!==this.ctx.sampleRate){const c=this.ctx.sampleRate/n.sampleRate,d=Math.floor(s*c);a=new Float32Array(d);for(let f=0;f<d;f++){const p=f/c,m=Math.floor(p),_=p-m;a[f]=m>=s-1?r[s-1]:r[m]*(1-_)+r[m+1]*_}}else a=r;let l=0;for(let c=0;c<a.length;c++){const d=Math.abs(a[c]);d>l&&(l=d)}if(l>.001){const c=.7/l;for(let d=0;d<a.length;d++)a[d]*=c}this.setGranularSample(a,e),console.log(`[audio] granular source ← ${e} (${a.length} samples)`)}}var ze=(i=>(i[i.FREE=0]="FREE",i[i.ASCENT=1]="ASCENT",i[i.DESCENT=2]="DESCENT",i[i.OSCILLATION=3]="OSCILLATION",i[i.ASCENT_OSC=4]="ASCENT_OSC",i[i.DESCENT_OSC=5]="DESCENT_OSC",i))(ze||{}),ke=(i=>(i[i.LINEAR=0]="LINEAR",i[i.EXPONENTIAL=1]="EXPONENTIAL",i[i.LOGARITHMIC=2]="LOGARITHMIC",i[i.SIGMOID=3]="SIGMOID",i))(ke||{});const Xp={mode:3,curveShape:2,phaseDuration:29.143,oscRate:.1448,oscDepth:.444,autoLoop:!0},Yp={mode:3,curveShape:3,phaseDuration:8,oscRate:.5,oscDepth:.25,autoLoop:!0},qp=.92;class al{p={...Xp};elapsed=0;value_=.5;phase_=0;oscAccumPhase=0;lastMode=-1;lastCurve=-1;bridgeOffset=0;history=new Array(240).fill(.5);historyIdx=0;applyCurve(t){switch(this.p.curveShape){case 0:return t;case 1:return t*t;case 2:return Math.sqrt(t);case 3:return rl(0,1,t)}return t}computeRawValue(){const t=this.p.mode|0,e=de(this.elapsed/Math.max(.001,this.p.phaseDuration),0,1);this.phase_=e;const n=this.applyCurve(e);let s=.5;switch(t){case 0:s=.5;break;case 1:s=n;break;case 2:s=1-n;break;case 3:s=.5+Math.sin(this.oscAccumPhase)*this.p.oscDepth;break;case 4:s=n+Math.sin(this.oscAccumPhase)*this.p.oscDepth;break;case 5:s=1-n+Math.sin(this.oscAccumPhase)*this.p.oscDepth;break}return de(s,0,1)}trigger(){this.elapsed=0,this.bridgeOffset=0,this.oscAccumPhase=0}softRestart(){this.elapsed=0}update(t){if(this.lastMode!==this.p.mode||this.lastCurve!==this.p.curveShape){if(this.lastMode>=0){const n=this.computeRawValue();this.bridgeOffset=this.value_-n}this.lastMode=this.p.mode,this.lastCurve=this.p.curveShape}this.elapsed+=t,this.p.autoLoop&&this.elapsed>=this.p.phaseDuration&&(this.elapsed=0),this.oscAccumPhase+=Ms*this.p.oscRate*t,this.oscAccumPhase>Ms*1e3&&(this.oscAccumPhase-=Ms*1e3);const e=this.computeRawValue();this.value_=de(e+this.bridgeOffset,0,1),this.bridgeOffset*=qp,this.history[this.historyIdx]=this.value_,this.historyIdx=(this.historyIdx+1)%this.history.length}value(){return this.value_}phaseProgress(){return this.phase_}getModeName(){return["FREE","ASCENT","DESCENT","OSCILLATION","ASCENT_OSC","DESCENT_OSC"][this.p.mode|0]||"?"}}const $p={enabled:!0,syncPeriod:16.572,syncDuration:3.4205,syncPower:.5,driftTolerance:.15,counterpointEnabled:!1,convergenceAmount:.77};class Kp{p={...$p};cadenceTimer=0;syncStrength_=0;audioNudge_=0;visualNudge_=0;HIST_SIZE=600;targetHist=new Array(this.HIST_SIZE).fill(.5);audioHist=new Array(this.HIST_SIZE).fill(0);visualHist=new Array(this.HIST_SIZE).fill(0);syncHist=new Array(this.HIST_SIZE).fill(0);histIdx=0;computePulse(t){const e=this.p.syncDuration,n=Math.max(.001,this.p.syncPeriod);let s=e/n*.4;s<.001&&(s=.001);const r=t-.5;return Math.exp(-(r*r)/(2*s*s))}triggerCadence(){this.cadenceTimer=this.p.syncPeriod*.5}update(t,e,n,s){if(this.targetHist[this.histIdx]=e,this.audioHist[this.histIdx]=n,this.visualHist[this.histIdx]=s,!this.p.enabled){this.syncStrength_=0,this.audioNudge_=0,this.visualNudge_=0,this.syncHist[this.histIdx]=0,this.histIdx=(this.histIdx+1)%this.HIST_SIZE;return}const r=Math.max(.001,this.p.syncPeriod);for(this.cadenceTimer+=t;this.cadenceTimer>=r;)this.cadenceTimer-=r;const o=this.cadenceTimer/r;this.syncStrength_=this.computePulse(o);let a=e-n,l=e-s;const c=this.p.driftTolerance;Math.abs(a)<c&&(a=0),Math.abs(l)<c&&(l=0);const d=this.syncStrength_*this.p.syncPower;this.audioNudge_=d*a,this.visualNudge_=d*l,this.syncHist[this.histIdx]=this.syncStrength_,this.histIdx=(this.histIdx+1)%this.HIST_SIZE}syncStrength(){return this.syncStrength_}audioCorrection(){return this.audioNudge_}visualCorrection(){return this.visualNudge_}convergenceForce(){return this.p.counterpointEnabled?this.syncStrength_*this.p.convergenceAmount:0}}const Li=[{name:"Figure 2 Arc (30s)",totalDuration:30,events:[{atSec:0,mode:ze.ASCENT,curve:ke.SIGMOID,phaseDuration:10},{atSec:10,mode:ze.ASCENT_OSC,curve:ke.LINEAR,phaseDuration:10,oscRate:1.5,oscDepth:.25},{atSec:20,mode:ze.DESCENT,curve:ke.EXPONENTIAL,phaseDuration:10}]},{name:"Storm Cycle (25s)",totalDuration:25,events:[{atSec:0,mode:ze.OSCILLATION,curve:ke.LINEAR,phaseDuration:5,oscRate:.5,oscDepth:.4},{atSec:8,mode:ze.ASCENT,curve:ke.EXPONENTIAL,phaseDuration:7},{atSec:15,mode:ze.DESCENT_OSC,curve:ke.SIGMOID,phaseDuration:10,oscRate:2,oscDepth:.3}]},{name:"Quiet Breath (45s)",totalDuration:45,events:[{atSec:0,mode:ze.OSCILLATION,curve:ke.LINEAR,phaseDuration:15,oscRate:.15,oscDepth:.15},{atSec:15,mode:ze.ASCENT,curve:ke.LOGARITHMIC,phaseDuration:15},{atSec:30,mode:ze.DESCENT,curve:ke.LOGARITHMIC,phaseDuration:15}]}];class Zp{playing=!1;elapsed_=0;scoreIdx=0;nextEvent=0;scores(){return Li}isPlaying(){return this.playing}elapsed(){return this.elapsed_}currentScoreName(){return this.playing?Li[this.scoreIdx].name:""}play(t,e){t<0||t>=Li.length||(this.scoreIdx=t,this.elapsed_=0,this.nextEvent=0,this.playing=!0,this._applyEvent(Li[t].events[0],e),e.trigger())}stop(){this.playing=!1}update(t,e){if(!this.playing)return;this.elapsed_+=t;const n=Li[this.scoreIdx];for(;this.nextEvent+1<n.events.length&&this.elapsed_>=n.events[this.nextEvent+1].atSec;)this.nextEvent++,this._applyEvent(n.events[this.nextEvent],e),e.softRestart();this.elapsed_>=n.totalDuration&&this.stop()}_applyEvent(t,e){e.p.mode=t.mode,e.p.curveShape=t.curve,e.p.phaseDuration=t.phaseDuration,t.oscRate!==void 0&&(e.p.oscRate=t.oscRate),t.oscDepth!==void 0&&(e.p.oscDepth=t.oscDepth)}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class Xe{constructor(t,e,n,s,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),Xe.nextNameID=Xe.nextNameID||0,this.$name.id=`lil-gui-name-${++Xe.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class jp extends Xe{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Dr(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Jp={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Dr,toHexString:Dr},Fi={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},Qp={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,t,e=1){const n=Fi.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return Fi.toHexString(s)}},tm={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=Fi.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return Fi.toHexString(s)}},em=[Jp,Fi,Qp,tm];function nm(i){return em.find(t=>t.match(i))}class im extends Xe{constructor(t,e,n,s){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=nm(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Dr(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class xr extends Xe{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class sm extends Xe{constructor(t,e,n,s,r,o){super(t,e,n,"number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let A=parseFloat(this.$input.value);isNaN(A)||(this._stepExplicit&&(A=this._snap(A)),this.setValue(this._clamp(A)))},n=A=>{const E=parseFloat(this.$input.value);isNaN(E)||(this._snapClampSetValue(E+A),this.$input.value=this.getValue())},s=A=>{A.key==="Enter"&&this.$input.blur(),A.code==="ArrowUp"&&(A.preventDefault(),n(this._step*this._arrowKeyMultiplier(A))),A.code==="ArrowDown"&&(A.preventDefault(),n(this._step*this._arrowKeyMultiplier(A)*-1))},r=A=>{this._inputFocused&&(A.preventDefault(),n(this._step*this._normalizeMouseWheel(A)))};let o=!1,a,l,c,d,f;const p=5,m=A=>{a=A.clientX,l=c=A.clientY,o=!0,d=this.getValue(),f=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",v)},_=A=>{if(o){const E=A.clientX-a,w=A.clientY-l;Math.abs(w)>p?(A.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(E)>p&&v()}if(!o){const E=A.clientY-c;f-=E*this._step*this._arrowKeyMultiplier(A),d+f>this._max?f=this._max-d:d+f<this._min&&(f=this._min-d),this._snapClampSetValue(d+f)}c=A.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",v)},u=()=>{this._inputFocused=!0},h=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",u),this.$input.addEventListener("blur",h)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(h,A,E,w,N)=>(h-A)/(E-A)*(N-w)+w,e=h=>{const A=this.$slider.getBoundingClientRect();let E=t(h,A.left,A.right,this._min,this._max);this._snapClampSetValue(E)},n=h=>{this._setDraggingStyle(!0),e(h.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=h=>{e(h.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=h=>{h.preventDefault(),this._setDraggingStyle(!0),e(h.touches[0].clientX),o=!1},d=h=>{h.touches.length>1||(this._hasScrollBar?(a=h.touches[0].clientX,l=h.touches[0].clientY,o=!0):c(h),window.addEventListener("touchmove",f,{passive:!1}),window.addEventListener("touchend",p))},f=h=>{if(o){const A=h.touches[0].clientX-a,E=h.touches[0].clientY-l;Math.abs(A)>Math.abs(E)?c(h):(window.removeEventListener("touchmove",f),window.removeEventListener("touchend",p))}else h.preventDefault(),e(h.touches[0].clientX)},p=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",f),window.removeEventListener("touchend",p)},m=this._callOnFinishChange.bind(this),_=400;let v;const u=h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const E=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+E),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(m,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",d,{passive:!1}),this.$slider.addEventListener("wheel",u,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class rm extends Xe{constructor(t,e,n,s){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class am extends Xe{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var om=`.lil-gui {
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
}`;function lm(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Eo=!1;class zr{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Eo&&a&&(lm(om),Eo=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(t,e,n,s,r){if(Object(n)===n)return new rm(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new sm(this,t,e,n,s,r);case"boolean":return new jp(this,t,e);case"string":return new am(this,t,e);case"function":return new xr(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new im(this,t,e,n)}addFolder(t){const e=new zr({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof xr||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof xr)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const cm=1,kr=`of-flock-3d-web:settings:v${cm}`;function hm(i){try{const t={...i,savedAt:Date.now()};return localStorage.setItem(kr,JSON.stringify(t)),!0}catch(t){return console.warn("[persistence] save failed:",t),!1}}function um(){try{const i=localStorage.getItem(kr);return i?JSON.parse(i):null}catch(i){return console.warn("[persistence] load failed:",i),null}}function dm(){try{localStorage.removeItem(kr)}catch{}}function Ii(i,t){if(t&&typeof t=="object")for(const e in t)e in i&&(i[e]=t[e]);return i}const fm={"penta min":0,"penta maj":1,major:2,"minor nat":3,dorian:4,mixolydian:5,phrygian:6,lydian:7,blues:8,hirajoshi:9,"whole tone":10,harmonic:11},Ao={FREE:0,ASCENT:1,DESCENT:2,OSCILLATION:3,ASCENT_OSC:4,DESCENT_OSC:5},bo={LINEAR:0,EXPONENTIAL:1,LOGARITHMIC:2,SIGMOID:3},pm={Distance:0,KNN:1,Lifetime:2,Gabriel:3};function mm(i){const{flock:t,synth:e,audioConductor:n,visualConductor:s,synchresis:r,scorePlayer:o}=i,a=new zr({title:"of-flock-3d (web)",width:320});a.close();const l=a.addFolder("System");l.add({reset:()=>{confirm("Reset all settings to defaults?")&&(dm(),location.reload())}},"reset").name("Reset all settings"),l.add({copyJson:async()=>{const P={flock:{...t.p},audioConductor:{...n.p},visualConductor:{...s.p},synchresis:{...r.p},synth:{...C}},J=JSON.stringify(P,null,2);try{await navigator.clipboard.writeText(J),alert("Settings JSON copied to clipboard ("+J.length+" chars). Paste to share.")}catch{console.log(`[settings export]
`+J),alert("Clipboard blocked — JSON dumped to console. Open DevTools to copy.")}}},"copyJson").name("Copy settings JSON");const c=a.addFolder("Morphology (Audio)");c.add(n.p,"mode",Ao).listen(),c.add(n.p,"curveShape",bo).name("curve").listen(),c.add(n.p,"phaseDuration",1,60).name("duration (s)").listen(),c.add(n.p,"oscRate",.05,4).name("osc rate (Hz)").listen(),c.add(n.p,"oscDepth",0,.5).listen(),c.add(n.p,"autoLoop");const d={value:0};c.add(d,"value",0,1).name("▸ live value").listen().disable(),c.__condReadout=d,c.add({trigger:()=>n.trigger()},"trigger").name("▶ trigger");const f=a.addFolder("Morphology (Visual)");f.add(s.p,"mode",Ao).listen(),f.add(s.p,"curveShape",bo).name("curve").listen(),f.add(s.p,"phaseDuration",1,60).name("duration (s)").listen(),f.add(s.p,"oscRate",.05,4).name("osc rate (Hz)").listen(),f.add(s.p,"oscDepth",0,.5).listen(),f.add(s.p,"autoLoop");const p=a.addFolder("Synchresis");p.add(r.p,"enabled"),p.add(r.p,"syncPeriod",3,120).name("period (s)"),p.add(r.p,"syncDuration",.5,30).name("pulse (s)"),p.add(r.p,"syncPower",0,1.5),p.add(r.p,"driftTolerance",0,.5).name("tolerance"),p.add(r.p,"counterpointEnabled").name("counterpoint"),p.add(r.p,"convergenceAmount",0,1).name("convergence"),p.add({trigger:()=>r.triggerCadence()},"trigger").name("Trigger cadence");const m=a.addFolder("Score"),_={name:"Figure 2 Arc (30s)",status:"idle"},v={};o.scores().forEach(P=>v[P.name]=P.name),m.add(_,"name",v).name("score"),m.add({play:()=>{const P=o.scores().findIndex(J=>J.name===_.name);P>=0&&o.play(P,n)}},"play").name("▶ Play Score"),m.add({stop:()=>o.stop()},"stop").name("■ Stop"),m.add(_,"status").name("status").listen().disable(),m.__scoreState=_;const u=a.addFolder("Flock");u.add(t.p,"particleCount",1e3,4e4,1e3).name("particles").onFinishChange(()=>t.resizeIfNeeded()),u.add(t.p,"worldRadius",50,600),u.add(t.p,"particleAlpha",.05,1),u.add(t.p,"hueBase",0,1),u.add(t.p,"hueRange",0,1);const h=a.addFolder("Force Fields");h.add(t.p,"noiseAmplitude",0,200).name("noise amp"),h.add(t.p,"noiseScale",1e-4,.05),h.add(t.p,"noiseSpeed",0,.5),h.add(t.p,"vortexAmp",0,200),h.add(t.p,"spiralAmp",0,200),h.add(t.p,"curlAmp",0,200),h.add(t.p,"attractorAmp",0,80),h.add(t.p,"repellerAmp",0,800);const A=a.addFolder("Boid / Merge");A.add(t.p,"flockSeparation",0,5),A.add(t.p,"flockCohesion",0,20),A.add(t.p,"flockCohesionSpeed",0,.5),A.add(t.p,"flockNeighborRadius",10,400),A.add(t.p,"mergeDistance",1,40),A.add(t.p,"flockSpawnRate",0,1e3),A.add(t.p,"flockMinAlive",0,1),A.add(t.p,"flockDamping",.5,1),A.add(t.p,"particleSizeMin",1,20),A.add(t.p,"particleSizeMax",2,60);const E=a.addFolder("Flash / Accent");E.add(t.p,"flashFrames",0,60,1),E.add(t.p,"flashIntensity",0,2),E.add(t.p,"accentChance",0,1),E.add(t.p,"accentSizeMul",1,5);const w=a.addFolder("Cluster Detection");w.add(t.p,"clusterGridRes",3,10,1),w.add(t.p,"clusterMinFlash",1,100,1);const N=a.addFolder("Trail");N.add(t.p,"tailLength",0,24,1),N.add(t.p,"tailAudioSensitivity",0,2),N.add(t.p,"tailAlpha",0,1);const T=a.addFolder("Material");T.add(t.p,"matBrightness",0,1),T.add(t.p,"matSpecular",0,1),T.add(t.p,"matAmbient",0,.5),T.add(t.p,"matGlow",0,1.5),u.add(t.p,"conductorAmount",0,1).name("conductor amount");const b=a.addFolder("Mycelium");b.add(t.p,"myceliumEnabled").name("enabled"),b.add(t.p,"myceliumLinkMode",pm).name("link mode"),b.add(t.p,"myceliumLinkDist",5,300).name("link dist"),b.add(t.p,"myceliumMaxLinks",1,16,1).name("max links"),b.add(t.p,"myceliumKnnK",1,16,1).name("KNN K"),b.add(t.p,"myceliumLifetime",5,600,1).name("lifetime"),b.add(t.p,"myceliumNodeStride",1,50,1).name("node stride"),b.add(t.p,"myceliumAlpha",0,1),b.add(t.p,"myceliumFadeNear",0,1).name("far fade"),b.add(t.p,"myceliumLineWidth",.5,4);const C={audioEnabled:!0,masterVol:.5,eventVol:.6,eventDecayMs:50,eventAttackMs:2,eventGainPerHit:.4937,minMassToFire:0,eventQuantize:!0,reverbAmt:.55,reverbSize:.85,reverbDamp:.5,reverbPreDelayMs:20,rootFreq:110,scaleType:0,droneGlideMs:600,audioEnergyGain:1.9424,fmRatio:2,fmIndex:3,fmIndexDecayMs:40,tailToIdxDecayDepth:.5,eventFoldAmount:0,clusterDroneVol:.5,clusterAttackMs:800,clusterReleaseMs:1500,clusterDetune:.008,clusterProximity:80,clusterCutoff:600,clusterResonance:.3,clusterDroneFold:0,windVol:.4,windCutoff:800,windResonance:.2,windAmpToCutoff:1,windLfoRate:.4,windLfoDepth:.4,granVol:1,grainSizeMs:55.82,grainBaseRate:128.978,granClusterInfluence:17.08,grainPitchOffset:10.56,grainPitchSpread:20.904,grainPanSpread:.686,grainAttackFrac:.02768,conductorAmount:1,clickEnabled:!0,clickVol:.147,clickBaseRate:8,clickDensityBoost:39.6,clickConductorAmount:1,clickLengthMs:5.814,clickFormantHz:9e3};i.savedSynthParams&&Ii(C,i.savedSynthParams);function S(){e.setParams(C)}S();const M=a.addFolder("Synth · Master");M.add(C,"audioEnabled").onChange(P=>e.setParam("audioEnabled",P)),M.add(C,"masterVol",0,1).onChange(P=>e.setParam("masterVol",P)),M.add(C,"rootFreq",55,440).name("rootFreq (Hz)").onChange(P=>e.setParam("rootFreq",P)),M.add(C,"scaleType",fm).name("scale").onChange(P=>e.setParam("scaleType",P)),M.add(C,"droneGlideMs",5,4e3).name("drone glide (ms)").onChange(P=>e.setParam("droneGlideMs",P));const L=a.addFolder("Synth · Event");L.add(C,"eventVol",0,1).onChange(P=>e.setParam("eventVol",P)),L.add(C,"eventDecayMs",5,500).name("decay (ms)").onChange(P=>e.setParam("eventDecayMs",P)),L.add(C,"eventAttackMs",.1,50).name("attack (ms)").onChange(P=>e.setParam("eventAttackMs",P)),L.add(C,"eventGainPerHit",.05,1.5).name("hit gain").onChange(P=>e.setParam("eventGainPerHit",P)),L.add(C,"minMassToFire",0,50).onChange(P=>e.setParam("minMassToFire",P)),L.add(C,"eventQuantize").onChange(P=>e.setParam("eventQuantize",P));const G=a.addFolder("Synth · FM");G.add(C,"fmRatio",.5,8).onChange(P=>e.setParam("fmRatio",P)),G.add(C,"fmIndex",0,12).onChange(P=>e.setParam("fmIndex",P)),G.add(C,"fmIndexDecayMs",1,500).name("FM idxDecay (ms)").onChange(P=>e.setParam("fmIndexDecayMs",P)),G.add(C,"tailToIdxDecayDepth",0,1).onChange(P=>e.setParam("tailToIdxDecayDepth",P)),G.add(C,"eventFoldAmount",0,1).name("event fold").onChange(P=>e.setParam("eventFoldAmount",P));const B=a.addFolder("Synth · Cluster Drone");B.add(C,"clusterDroneVol",0,1).name("vol").onChange(P=>e.setParam("clusterDroneVol",P)),B.add(C,"clusterAttackMs",50,4e3).name("attack (ms)").onChange(P=>e.setParam("clusterAttackMs",P)),B.add(C,"clusterReleaseMs",50,6e3).name("release (ms)").onChange(P=>e.setParam("clusterReleaseMs",P)),B.add(C,"clusterDetune",0,.03).onChange(P=>e.setParam("clusterDetune",P)),B.add(C,"clusterProximity",10,400).onChange(P=>e.setParam("clusterProximity",P)),B.add(C,"clusterCutoff",80,8e3).onChange(P=>e.setParam("clusterCutoff",P)),B.add(C,"clusterResonance",0,.95).onChange(P=>e.setParam("clusterResonance",P)),B.add(C,"clusterDroneFold",0,1).name("fold").onChange(P=>e.setParam("clusterDroneFold",P));const Z=a.addFolder("Synth · Wind");Z.add(C,"windVol",0,1).name("vol").onChange(P=>e.setParam("windVol",P)),Z.add(C,"windCutoff",100,8e3).name("cutoff (Hz)").onChange(P=>e.setParam("windCutoff",P)),Z.add(C,"windResonance",0,.9).onChange(P=>e.setParam("windResonance",P)),Z.add(C,"windAmpToCutoff",0,3).name("amp→cutoff").onChange(P=>e.setParam("windAmpToCutoff",P)),Z.add(C,"windLfoRate",.05,4).name("gust rate").onChange(P=>e.setParam("windLfoRate",P)),Z.add(C,"windLfoDepth",0,1).name("gust depth").onChange(P=>e.setParam("windLfoDepth",P));const X=a.addFolder("Synth · Granular");X.add(C,"granVol",0,1).name("vol").onChange(P=>e.setParam("granVol",P)),X.add(C,"grainSizeMs",10,300).name("size (ms)").onChange(P=>e.setParam("grainSizeMs",P)),X.add(C,"grainBaseRate",.5,200).name("base rate (Hz)").onChange(P=>e.setParam("grainBaseRate",P)),X.add(C,"granClusterInfluence",0,20).name("cluster infl.").onChange(P=>e.setParam("granClusterInfluence",P)),X.add(C,"grainPitchOffset",-24,24).name("pitch offset").onChange(P=>e.setParam("grainPitchOffset",P)),X.add(C,"grainPitchSpread",0,24).name("pitch spread").onChange(P=>e.setParam("grainPitchSpread",P)),X.add(C,"grainPanSpread",0,1).name("pan spread").onChange(P=>e.setParam("grainPanSpread",P)),X.add(C,"grainAttackFrac",.02,.5).name("attack frac").onChange(P=>e.setParam("grainAttackFrac",P));const Y=a.addFolder("Synth · Hall Reverb");Y.add(C,"reverbAmt",0,1).onChange(P=>e.setParam("reverbAmt",P)),Y.add(C,"reverbSize",0,.97).onChange(P=>e.setParam("reverbSize",P)),Y.add(C,"reverbDamp",0,.99).onChange(P=>e.setParam("reverbDamp",P)),Y.add(C,"reverbPreDelayMs",0,200).name("pre-delay (ms)").onChange(P=>e.setParam("reverbPreDelayMs",P));const j=a.addFolder("Synth · Click (Pulsar)");j.add(C,"clickEnabled").name("enabled").onChange(P=>e.setParam("clickEnabled",P)),j.add(C,"clickVol",0,3).name("vol").onChange(P=>e.setParam("clickVol",P)),j.add(C,"clickBaseRate",0,200).name("base rate (Hz)").onChange(P=>e.setParam("clickBaseRate",P)),j.add(C,"clickDensityBoost",0,400).name("density boost").onChange(P=>e.setParam("clickDensityBoost",P)),j.add(C,"clickConductorAmount",0,1).name("conductor").onChange(P=>e.setParam("clickConductorAmount",P)),j.add(C,"clickLengthMs",1,30).name("pulsaret (ms)").onChange(P=>e.setParam("clickLengthMs",P)),j.add(C,"clickFormantHz",200,9e3).name("formant (Hz)").onChange(P=>e.setParam("clickFormantHz",P));const I=a.addFolder("Synth · Aux");return I.add(C,"conductorAmount",0,1).name("conductor amount").onChange(P=>e.setParam("conductorAmount",P)),I.add(C,"audioEnergyGain",.1,5).name("audio energy gain").onChange(P=>e.setParam("audioEnergyGain",P)),{gui:a,synthParams:C}}const gm=document.getElementById("app"),_m=document.getElementById("hud"),Wn=new Lp({antialias:!0,powerPreference:"high-performance"});Wn.setPixelRatio(Math.min(window.devicePixelRatio,2));Wn.setSize(window.innerWidth,window.innerHeight);Wn.setClearColor(395276,1);gm.appendChild(Wn.domElement);const ol=new Dp,rn=new De(60,window.innerWidth/window.innerHeight,.1,1e4);rn.position.set(0,0,700);const Si=new Op(rn,Wn.domElement);Si.enableDamping=!0;Si.dampingFactor=.08;Si.rotateSpeed=.6;Si.autoRotate=!1;const oe=new Vp(ol,rn),Le=new Wp,Qe=new al,yi=new al;yi.p={...Yp};const tn=new Kp,Ui=new Zp,Fn=um();Fn&&(Ii(oe.p,Fn.flock),Ii(Qe.p,Fn.audioConductor),Ii(yi.p,Fn.visualConductor),Ii(tn.p,Fn.synchresis),oe.p.particleCount!==oe.pool.N&&oe.resizeIfNeeded(),console.log("[main] restored settings from",new Date(Fn.savedAt||0).toLocaleString()));let Ir=null,To=null;const ll=document.getElementById("audio-gate");async function vm(){await Le.init();const i=mm({flock:oe,synth:Le,audioConductor:Qe,visualConductor:yi,synchresis:tn,scorePlayer:Ui,savedSynthParams:Fn?.synth});Ir=i.gui,To=i.synthParams;const t=()=>{hm({flock:{...oe.p},audioConductor:{...Qe.p},visualConductor:{...yi.p},synchresis:{...tn.p},synth:{...To}})};window.setInterval(t,2e3),document.addEventListener("visibilitychange",()=>{document.hidden&&t()}),window.addEventListener("beforeunload",t),ll.classList.add("hidden")}ll.addEventListener("click",vm,{once:!0});window.addEventListener("dragover",i=>{i.preventDefault()});window.addEventListener("drop",async i=>{if(i.preventDefault(),!(!i.dataTransfer||!i.dataTransfer.files.length)){for(const t of Array.from(i.dataTransfer.files))if(/\.(wav|aif|aiff|flac|mp3)$/i.test(t.name)){try{await Le.loadWavFromFile(t)}catch(e){console.warn("drop load failed",e)}break}}});window.addEventListener("resize",()=>{const i=window.innerWidth,t=window.innerHeight;Wn.setSize(i,t),rn.aspect=i/t,rn.updateProjectionMatrix()});window.addEventListener("keydown",i=>{i.key===" "&&(oe.reset(),Le.reset()),i.key==="f"&&(document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen())});let Ur=performance.now(),Mr=0,Sr=0,wo=Ur;const Nr=2e3;let _s=Nr;const Co=30,xm=Co*Co,Mm=60,hi=[];function cl(i){let t=(i-Ur)/1e3;t>.1&&(t=.1),Ur=i,Ui.update(t,Qe),Qe.update(t),yi.update(t);const e=Qe.value(),n=tn.p.counterpointEnabled?yi.value():e,s=Le.audioEnergyMeasured;tn.update(t,e,s,.5);const o=tn.convergenceForce(),a=n+(e-n)*o,l=Math.max(0,Math.min(1,e+tn.audioCorrection())),c=Math.max(0,Math.min(1,a+tn.visualCorrection()));Le.setConductorValue(l),oe.setConductorValue(c),oe.update(t),oe.draw(),Le.setFieldAmpTotal(oe.getFieldAmpTotal()),Le.setTailInfluence(oe.getCurrentTailNormalized());const d=oe.getClusters(4),f=u=>isFinite(u)?u:0,p=d.map(u=>({x:f(u.centroid.x),y:f(u.centroid.y),z:f(u.centroid.z),mass:f(u.totalMass)})).filter(u=>u.mass>0);Le.updateClusters(p,oe.getWorldRadius()),Le.setClusterCount(d.length),Le.setMyceliumLinks(oe.getMyceliumLinkCount()),oe.setAudioInfluence(s),_s=Math.min(Nr,_s+Nr*t);const m=i;for(;hi.length>0&&m-hi[0].t>Mm;)hi.shift();const _=oe.getCollisionsThisFrame(),v=_.length>1?[..._].sort((u,h)=>h.newMass-u.newMass):_;for(const u of v){if(_s<1)break;let h=!1;const A=u.pos.x,E=u.pos.y,w=u.pos.z;for(let N=0;N<hi.length;N++){const T=hi[N],b=A-T.x,C=E-T.y,S=w-T.z;if(b*b+C*C+S*S<xm){h=!0;break}}h||(_s-=1,hi.push({x:A,y:E,z:w,t:m}),Le.triggerCollision({pos:{x:A,y:E,z:w},mass:u.newMass,brightness:(u.color.r+u.color.g+u.color.b)/3,isAccent:u.isAccent}))}if(oe.p.autoRotate){const u=rn.position,h=t*.3,A=Math.cos(h),E=Math.sin(h),w=u.x*A-u.z*E,N=u.x*E+u.z*A;rn.position.set(w,u.y,N),rn.lookAt(0,0,0),Si.update()}else Si.update();if(Wn.render(ol,rn),Ir)for(const u of Ir.folders){const h=u.__condReadout;h&&(h.value=Qe.value());const A=u.__scoreState;A&&(A.status=Ui.isPlaying()?`▶ ${Ui.currentScoreName()}  ${Ui.elapsed().toFixed(1)}s`:"idle")}if(Mr+=t,Sr++,i-wo>500){const u=Sr/Mr;_m.textContent=`fps ${u.toFixed(0)}   morph: ${Qe.getModeName()} ${Qe.value().toFixed(2)}   sync: ${tn.syncStrength().toFixed(2)}   clusters: ${d.length}   links: ${oe.getMyceliumLinkCount()}   ae: ${s.toFixed(2)}`,Mr=0,Sr=0,wo=i}requestAnimationFrame(cl)}requestAnimationFrame(cl);console.log("[main] of-flock-3d web port booted");
//# sourceMappingURL=index-BvmCS0WW.js.map
