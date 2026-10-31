(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();const Oo="187",Kh=0,Al=1,Zh=2,Is=1,Jh=2,Rs=3,pn=0,ii=1,ft=2,Cn=0,Ns=1,zt=2,Rl=3,Cl=4,Qh=5,Qn=100,jh=101,ed=102,td=103,id=104,nd=200,sd=201,ad=202,rd=203,Xc=204,qc=205,od=206,ld=207,cd=208,hd=209,dd=210,ud=211,fd=212,pd=213,md=214,Wr=0,Xr=1,qr=2,Hs=3,Yr=4,$r=5,Kr=6,Zr=7,Yc=0,gd=1,xd=2,Ji=0,Bo=1,zo=2,ko=3,Zs=4,Go=5,Ho=6,Vo=7,$c=300,ss=301,Vs=302,dr=303,ur=304,as=1e3,Zi=1001,Jr=1002,Vt=1003,_d=1004,ta=1005,ri=1006,fr=1007,un=1008,_i=1009,Kc=1010,Zc=1011,Ws=1012,Wo=1013,Vi=1014,Ui=1015,oi=1016,Xo=1017,qo=1018,rs=1020,Jc=35902,Qc=35899,jc=1021,eh=1022,Hi=1023,mn=1026,fn=1027,Yo=1028,$o=1029,Pn=1030,Ko=1031,Zo=1033,Fa=33776,Oa=33777,Ba=33778,za=33779,Qr=35840,jr=35841,eo=35842,to=35843,io=36196,no=37492,so=37496,ao=37488,ro=37489,qa=37490,oo=37491,lo=37808,co=37809,ho=37810,uo=37811,fo=37812,po=37813,mo=37814,go=37815,xo=37816,_o=37817,vo=37818,Mo=37819,yo=37820,So=37821,bo=36492,wo=36494,Eo=36495,To=36283,Ao=36284,Ya=36285,Ro=36286,vd=3200,Co=0,Md=1,hn="",wt="srgb",$a="srgb-linear",Ka="linear",ht="srgb",pr=7680,yd=519,Sd=512,bd=513,wd=514,th=515,Ed=516,Td=517,ih=518,nh=519,sh=35044,Pl="300 es",Fi=2e3,Xs=2001;function Ad(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Za(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rd(){const s=Za("canvas");return s.style.display="block",s}const Ll={};function Ja(...s){const e="THREE."+s.shift();console.log(e,...s)}function ah(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ke(...s){s=ah(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function at(...s){s=ah(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ka(...s){const e=s.join(" ");e in Ll||(Ll[e]=!0,ke(...s))}function Cd(s,e,t){return new Promise(function(i,n){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const Pd={[Wr]:Wr,[qr]:Kr,[Yr]:Yr,[Hs]:$r,[Xr]:Xr,[Kr]:qr,[Zr]:Zr,[$r]:Hs};class Ln{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const a=n.indexOf(t);a!==-1&&n.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let a=0,r=n.length;a<r;a++)n[a].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dl=1234567;const Us=Math.PI/180,qs=180/Math.PI;function gn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[s&255]+Yt[s>>8&255]+Yt[s>>16&255]+Yt[s>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function qe(s,e,t){return Math.max(e,Math.min(t,s))}function Jo(s,e){return(s%e+e)%e}function Ld(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function Dd(s,e,t){return s!==e?(t-s)/(e-s):0}function Fs(s,e,t){return(1-t)*s+t*e}function Id(s,e,t,i){return Fs(s,e,1-Math.exp(-t*i))}function Nd(s,e=1){return e-Math.abs(Jo(s,e*2)-e)}function Ud(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Fd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Od(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Bd(s,e){return s+Math.random()*(e-s)}function zd(s){return s*(.5-Math.random())}function kd(s){s!==void 0&&(Dl=s);let e=Dl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gd(s){return s*Us}function Hd(s){return s*qs}function Vd(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Wd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function rh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xd(s,e,t,i,n){const a=Math.cos,r=Math.sin,o=a(t/2),l=r(t/2),c=a((e+i)/2),h=r((e+i)/2),d=a((e-i)/2),u=r((e-i)/2),f=a((i-e)/2),p=r((i-e)/2);switch(n){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*h,o*c);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function sr(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Qo(s,e){if(e.constructor===Float32Array)return s;const t=sr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function jo(s,e){if(e.constructor===Float32Array)return s;const t=sr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const qd={DEG2RAD:Us,RAD2DEG:qs,generateUUID:gn,clamp:qe,euclideanModulo:Jo,mapLinear:Ld,inverseLerp:Dd,lerp:Fs,damp:Id,pingpong:Nd,smoothstep:Ud,smootherstep:Fd,randInt:Od,randFloat:Bd,randFloatSpread:zd,seededRandom:kd,degToRad:Gd,radToDeg:Hd,isPowerOfTwo:Vd,ceilPowerOfTwo:Wd,floorPowerOfTwo:rh,setQuaternionFromProperEuler:Xd,normalize:jo,denormalize:Qo},ul=class ul{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*i-r*n+e.x,this.y=a*n+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ul.prototype.isVector2=!0;let Ce=ul;class gi{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,a,r,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=a[r+0],f=a[r+1],p=a[r+2],x=a[r+3];if(d!==x||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){const v=Math.acos(g),w=Math.sin(v);m=Math.sin(m*v)/w,o=Math.sin(o*v)/w,l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+x*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+x*o;const v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,a,r){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=a[r],u=a[r+1],f=a[r+2],p=a[r+3];return e[t]=o*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-o*f,e[t+2]=c*p+h*f+o*u-l*d,e[t+3]=h*p-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(a/2),u=l(i/2),f=l(n/2),p=l(a/2);switch(r){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(a-c)*f,this._z=(r-n)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+r)/f,this._z=(a+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(a-c)/f,this._x=(n+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(r-n)/f,this._x=(a+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+r*o+n*c-a*l,this._y=n*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-n*o,this._w=r*h-i*o-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,a=-a,r=-r,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const fl=class fl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Il.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Il.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*n,this.y=a[1]*t+a[4]*i+a[7]*n,this.z=a[2]*t+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=e.elements,r=1/(a[3]*t+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*n+a[12])*r,this.y=(a[1]*t+a[5]*i+a[9]*n+a[13])*r,this.z=(a[2]*t+a[6]*i+a[10]*n+a[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*n-o*i),h=2*(o*t-a*n),d=2*(a*i-r*t);return this.x=t+l*c+r*d-o*h,this.y=i+l*h+o*c-a*d,this.z=n+l*d+a*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n,this.y=a[1]*t+a[5]*i+a[9]*n,this.z=a[2]*t+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=n*l-a*o,this.y=a*r-i*l,this.z=i*o-n*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mr.copy(this).projectOnVector(e),this.sub(mr)}reflect(e){return this.sub(mr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fl.prototype.isVector3=!0;let R=fl;const mr=new R,Il=new gi,pl=class pl{constructor(e,t,i,n,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,r,o,l,c)}set(e,t,i,n,a,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],x=n[0],g=n[3],m=n[6],v=n[1],w=n[4],b=n[7],A=n[2],E=n[5],_=n[8];return a[0]=r*x+o*v+l*A,a[3]=r*g+o*w+l*E,a[6]=r*m+o*b+l*_,a[1]=c*x+h*v+d*A,a[4]=c*g+h*w+d*E,a[7]=c*m+h*b+d*_,a[2]=u*x+f*v+p*A,a[5]=u*g+f*w+p*E,a[8]=u*m+f*b+p*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-i*a*h+i*o*l+n*a*c-n*r*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*r-o*c,u=o*l-h*a,f=c*a-r*l,p=t*d+i*u+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=d*x,e[1]=(n*c-h*i)*x,e[2]=(o*i-n*r)*x,e[3]=u*x,e[4]=(h*t-n*l)*x,e[5]=(n*a-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(r*t-i*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-n*c,n*l,-n*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return ka("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gr.makeScale(e,t)),this}rotate(e){return ka("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gr.makeRotation(-e)),this}translate(e,t){return ka("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};pl.prototype.isMatrix3=!0;let He=pl;const gr=new He,Nl=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ul=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yd(){const s={enabled:!0,workingColorSpace:$a,spaces:{},convert:function(n,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ht&&(n.r=Qi(n.r),n.g=Qi(n.g),n.b=Qi(n.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(n.applyMatrix3(this.spaces[a].toXYZ),n.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ht&&(n.r=ns(n.r),n.g=ns(n.g),n.b=ns(n.b))),n},workingToColorSpace:function(n,a){return this.convert(n,this.workingColorSpace,a)},colorSpaceToWorking:function(n,a){return this.convert(n,a,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===hn?Ka:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,a=this.workingColorSpace){return n.fromArray(this.spaces[a].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,a,r){return n.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[$a]:{primaries:e,whitePoint:i,transfer:Ka,toXYZ:Nl,fromXYZ:Ul,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:Nl,fromXYZ:Ul,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),s}const et=Yd();function Qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Dn;class $d{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Dn===void 0&&(Dn=Za("canvas")),Dn.width=e.width,Dn.height=e.height;const n=Dn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Dn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Za("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let r=0;r<a.length;r++)a[r]=Qi(a[r]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qi(t[i]/255)*255):t[i]=Qi(t[i]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kd=0;class el{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?a.push(xr(n[r].image)):a.push(xr(n[r]))}else a=xr(n);i.url=a}return t||(e.images[this.uuid]=i),i}}function xr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$d.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let Zd=0;const _r=new R;class Jt extends Ln{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,i=Zi,n=Zi,a=ri,r=un,o=Hi,l=_i,c=Jt.DEFAULT_ANISOTROPY,h=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=gn(),this.name="",this.source=new el(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(_r).x}get height(){return this.source.getSize(_r).y}get depth(){return this.source.getSize(_r).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$c)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case as:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case Jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case as:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case Jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=$c;Jt.DEFAULT_ANISOTROPY=1;const ml=class ml{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n+r[12]*a,this.y=r[1]*t+r[5]*i+r[9]*n+r[13]*a,this.z=r[2]*t+r[6]*i+r[10]*n+r[14]*a,this.w=r[3]*t+r[7]*i+r[11]*n+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,a;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,b=(f+1)/2,A=(m+1)/2,E=(h+u)/4,_=(d+x)/4,S=(p+g)/4;return w>b&&w>A?w<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(w),n=E/i,a=_/i):b>A?b<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(b),i=E/n,a=S/n):A<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(A),i=_/a,n=S/a),this.set(i,n,a,t),this}let v=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ml.prototype.isVector4=!0;let bt=ml;class Jd extends Ln{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];const n=i.count;for(let a=0;a<n;a++)this.textures[a]=new Jt({width:e,height:t,depth:i.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new el(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends Jd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class oh extends Jt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qd extends Jt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const nr=class nr{constructor(e,t,i,n,a,r,o,l,c,h,d,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,r,o,l,c,h,d,u,f,p,x,g)}set(e,t,i,n,a,r,o,l,c,h,d,u,f,p,x,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=n,m[1]=a,m[5]=r,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nr().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,n=1/In.setFromMatrixColumn(e,0).length(),a=1/In.setFromMatrixColumn(e,1).length(),r=1/In.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,a=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const u=r*h,f=r*d,p=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=p+f*c,t[10]=r*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u+x*o,t[4]=p*o-f,t[8]=r*c,t[1]=r*d,t[5]=r*h,t[9]=-o,t[2]=f*o-p,t[6]=x+u*o,t[10]=r*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u-x*o,t[4]=-r*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=r*h,t[9]=x-u*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const u=r*h,f=r*d,p=o*h,x=o*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const u=r*l,f=r*c,p=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=p*d+f,t[1]=d,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-x*d}else if(e.order==="XZY"){const u=r*l,f=r*c,p=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=r*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jd,e,eu)}lookAt(e,t,i){const n=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),nn.crossVectors(i,ci),nn.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),nn.crossVectors(i,ci)),nn.normalize(),ia.crossVectors(ci,nn),n[0]=nn.x,n[4]=ia.x,n[8]=ci.x,n[1]=nn.y,n[5]=ia.y,n[9]=ci.y,n[2]=nn.z,n[6]=ia.z,n[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],v=i[3],w=i[7],b=i[11],A=i[15],E=n[0],_=n[4],S=n[8],L=n[12],C=n[1],N=n[5],F=n[9],G=n[13],I=n[2],z=n[6],$=n[10],P=n[14],X=n[3],V=n[7],q=n[11],K=n[15];return a[0]=r*E+o*C+l*I+c*X,a[4]=r*_+o*N+l*z+c*V,a[8]=r*S+o*F+l*$+c*q,a[12]=r*L+o*G+l*P+c*K,a[1]=h*E+d*C+u*I+f*X,a[5]=h*_+d*N+u*z+f*V,a[9]=h*S+d*F+u*$+f*q,a[13]=h*L+d*G+u*P+f*K,a[2]=p*E+x*C+g*I+m*X,a[6]=p*_+x*N+g*z+m*V,a[10]=p*S+x*F+g*$+m*q,a[14]=p*L+x*G+g*P+m*K,a[3]=v*E+w*C+b*I+A*X,a[7]=v*_+w*N+b*z+A*V,a[11]=v*S+w*F+b*$+A*q,a[15]=v*L+w*G+b*P+A*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15],v=l*f-c*u,w=o*f-c*d,b=o*u-l*d,A=r*f-c*h,E=r*u-l*h,_=r*d-o*h;return t*(x*v-g*w+m*b)-i*(p*v-g*A+m*E)+n*(p*w-x*A+m*_)-a*(p*b-x*E+g*_)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],n=e[8],a=e[1],r=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(r*h-o*c)-i*(a*h-o*l)+n*(a*c-r*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],v=t*o-i*r,w=t*l-n*r,b=t*c-a*r,A=i*l-n*o,E=i*c-a*o,_=n*c-a*l,S=h*x-d*p,L=h*g-u*p,C=h*m-f*p,N=d*g-u*x,F=d*m-f*x,G=u*m-f*g,I=v*G-w*F+b*N+A*C-E*L+_*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return e[0]=(o*G-l*F+c*N)*z,e[1]=(n*F-i*G-a*N)*z,e[2]=(x*_-g*E+m*A)*z,e[3]=(u*E-d*_-f*A)*z,e[4]=(l*C-r*G-c*L)*z,e[5]=(t*G-n*C+a*L)*z,e[6]=(g*b-p*_-m*w)*z,e[7]=(h*_-u*b+f*w)*z,e[8]=(r*F-o*C+c*S)*z,e[9]=(i*C-t*F-a*S)*z,e[10]=(p*E-x*b+m*v)*z,e[11]=(d*b-h*E-f*v)*z,e[12]=(o*L-r*N-l*S)*z,e[13]=(t*N-i*L+n*S)*z,e[14]=(x*w-p*A-g*v)*z,e[15]=(h*A-d*w+u*v)*z,this}scale(e){const t=this.elements,i=e.x,n=e.y,a=e.z;return t[0]*=i,t[4]*=n,t[8]*=a,t[1]*=i,t[5]*=n,t[9]*=a,t[2]*=i,t[6]*=n,t[10]*=a,t[3]*=i,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),a=1-i,r=e.x,o=e.y,l=e.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*r,0,c*l-n*o,h*l+n*r,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,a,r){return this.set(1,i,a,0,e,1,r,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,h=r+r,d=o+o,u=a*c,f=a*h,p=a*d,x=r*h,g=r*d,m=o*d,v=l*c,w=l*h,b=l*d,A=i.x,E=i.y,_=i.z;return n[0]=(1-(x+m))*A,n[1]=(f+b)*A,n[2]=(p-w)*A,n[3]=0,n[4]=(f-b)*E,n[5]=(1-(u+m))*E,n[6]=(g+v)*E,n[7]=0,n[8]=(p+w)*_,n[9]=(g-v)*_,n[10]=(1-(u+x))*_,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];const a=this.determinantAffine();if(a===0)return i.set(1,1,1),t.identity(),this;let r=In.set(n[0],n[1],n[2]).length();const o=In.set(n[4],n[5],n[6]).length(),l=In.set(n[8],n[9],n[10]).length();a<0&&(r=-r),Ri.copy(this);const c=1/r,h=1/o,d=1/l;return Ri.elements[0]*=c,Ri.elements[1]*=c,Ri.elements[2]*=c,Ri.elements[4]*=h,Ri.elements[5]*=h,Ri.elements[6]*=h,Ri.elements[8]*=d,Ri.elements[9]*=d,Ri.elements[10]*=d,t.setFromRotationMatrix(Ri),i.x=r,i.y=o,i.z=l,this}makePerspective(e,t,i,n,a,r,o=Fi,l=!1){const c=this.elements,h=2*a/(t-e),d=2*a/(i-n),u=(t+e)/(t-e),f=(i+n)/(i-n);let p,x;if(l)p=a/(r-a),x=r*a/(r-a);else if(o===Fi)p=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===Xs)p=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,a,r,o=Fi,l=!1){const c=this.elements,h=2/(t-e),d=2/(i-n),u=-(t+e)/(t-e),f=-(i+n)/(i-n);let p,x;if(l)p=1/(r-a),x=r/(r-a);else if(o===Fi)p=-2/(r-a),x=-(r+a)/(r-a);else if(o===Xs)p=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};nr.prototype.isMatrix4=!0;let rt=nr;const In=new R,Ri=new rt,jd=new R(0,0,0),eu=new R(1,1,1),nn=new R,ia=new R,ci=new R,Fl=new rt,Ol=new gi;class ai{constructor(e=0,t=0,i=0,n=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,a=n[0],r=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ol.setFromEuler(this),this.setFromQuaternion(Ol,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class tl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tu=0;const Bl=new R,Nn=new gi,Xi=new rt,na=new R,fs=new R,iu=new R,nu=new gi,zl=new R(1,0,0),kl=new R(0,1,0),Gl=new R(0,0,1),Hl={type:"added"},su={type:"removed"},Un={type:"childadded",child:null},vr={type:"childremoved",child:null};class Et extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new R,t=new ai,i=new gi,n=new R(1,1,1);function a(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new rt},normalMatrix:{value:new He}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.multiply(Nn),this}rotateOnWorldAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.premultiply(Nn),this}rotateX(e){return this.rotateOnAxis(zl,e)}rotateY(e){return this.rotateOnAxis(kl,e)}rotateZ(e){return this.rotateOnAxis(Gl,e)}translateOnAxis(e,t){return Bl.copy(e).applyQuaternion(this.quaternion),this.position.add(Bl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zl,e)}translateY(e){return this.translateOnAxis(kl,e)}translateZ(e){return this.translateOnAxis(Gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?na.copy(e):na.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(fs,na,this.up):Xi.lookAt(na,fs,this.up),this.quaternion.setFromRotationMatrix(Xi),n&&(Xi.extractRotation(n.matrixWorld),Nn.setFromRotationMatrix(Xi),this.quaternion.premultiply(Nn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hl),Un.child=e,this.dispatchEvent(Un),Un.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(su),vr.child=e,this.dispatchEvent(vr),vr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hl),Un.child=e,this.dispatchEvent(Un),Un.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,iu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,nu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,n=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*n,a[13]+=i-a[1]*t-a[5]*i-a[9]*n,a[14]+=n-a[2]*t-a[6]*i-a[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),d=r(e.shapes),u=r(e.skeletons),f=r(e.animations),p=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Et.DEFAULT_UP=new R(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Be extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const au={type:"move"};class Mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(au)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Be;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sn={h:0,s:0,l:0},sa={h:0,s:0,l:0};function yr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Se{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=et.workingColorSpace){if(e=Jo(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,r=2*i-a;this.r=yr(r,a,e+1/3),this.g=yr(r,a,e),this.b=yr(r,a,e-1/3)}return et.colorSpaceToWorking(this,n),this}setStyle(e,t=wt){function i(a){a!==void 0&&parseFloat(a)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,t);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){const i=lh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return et.workingToColorSpace($t.copy(this),e),Math.round(qe($t.r*255,0,255))*65536+Math.round(qe($t.g*255,0,255))*256+Math.round(qe($t.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace($t.copy(this),t);const i=$t.r,n=$t.g,a=$t.b,r=Math.max(i,n,a),o=Math.min(i,n,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(n-a)/d+(n<a?6:0);break;case n:l=(a-i)/d+2;break;case a:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=wt){et.workingToColorSpace($t.copy(this),e);const t=$t.r,i=$t.g,n=$t.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(sn),this.setHSL(sn.h+e,sn.s+t,sn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(sn),e.getHSL(sa);const i=Fs(sn.h,sa.h,t),n=Fs(sn.s,sa.s,t),a=Fs(sn.l,sa.l,t);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*n,this.g=a[1]*t+a[4]*i+a[7]*n,this.b=a[2]*t+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Se;Se.NAMES=lh;class il{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Se(e),this.density=t}clone(){return new il(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ch extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ci=new R,qi=new R,Sr=new R,Yi=new R,Fn=new R,On=new R,Vl=new R,br=new R,wr=new R,Er=new R,Tr=new bt,Ar=new bt,Rr=new bt;class Ei{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ci.subVectors(e,t),n.cross(Ci);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,i,n,a){Ci.subVectors(n,t),qi.subVectors(i,t),Sr.subVectors(e,t);const r=Ci.dot(Ci),o=Ci.dot(qi),l=Ci.dot(Sr),c=qi.dot(qi),h=qi.dot(Sr),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,p=(r*h-o*l)*u;return a.set(1-f-p,p,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,i,n,a,r,o,l){return this.getBarycoord(e,t,i,n,Yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Yi.x),l.addScaledVector(r,Yi.y),l.addScaledVector(o,Yi.z),l)}static getInterpolatedAttribute(e,t,i,n,a,r){return Tr.setScalar(0),Ar.setScalar(0),Rr.setScalar(0),Tr.fromBufferAttribute(e,t),Ar.fromBufferAttribute(e,i),Rr.fromBufferAttribute(e,n),r.setScalar(0),r.addScaledVector(Tr,a.x),r.addScaledVector(Ar,a.y),r.addScaledVector(Rr,a.z),r}static isFrontFacing(e,t,i,n){return Ci.subVectors(i,t),qi.subVectors(e,t),Ci.cross(qi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),Ci.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,a){return Ei.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,a=this.c;let r,o;Fn.subVectors(n,i),On.subVectors(a,i),br.subVectors(e,i);const l=Fn.dot(br),c=On.dot(br);if(l<=0&&c<=0)return t.copy(i);wr.subVectors(e,n);const h=Fn.dot(wr),d=On.dot(wr);if(h>=0&&d<=h)return t.copy(n);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return r=l/(l-h),t.copy(i).addScaledVector(Fn,r);Er.subVectors(e,a);const f=Fn.dot(Er),p=On.dot(Er);if(p>=0&&f<=p)return t.copy(a);const x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(On,o);const g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return Vl.subVectors(a,n),o=(d-h)/(d-h+(f-p)),t.copy(n).addScaledVector(Vl,o);const m=1/(g+x+u);return r=x*m,o=u*m,t.copy(i).addScaledVector(Fn,r).addScaledVector(On,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xn{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Pi):Pi.fromBufferAttribute(a,r),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),aa.copy(i.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}const n=e.children;for(let a=0,r=n.length;a<r;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),ra.subVectors(this.max,ps),Bn.subVectors(e.a,ps),zn.subVectors(e.b,ps),kn.subVectors(e.c,ps),an.subVectors(zn,Bn),rn.subVectors(kn,zn),wn.subVectors(Bn,kn);let t=[0,-an.z,an.y,0,-rn.z,rn.y,0,-wn.z,wn.y,an.z,0,-an.x,rn.z,0,-rn.x,wn.z,0,-wn.x,-an.y,an.x,0,-rn.y,rn.x,0,-wn.y,wn.x,0];return!Cr(t,Bn,zn,kn,ra)||(t=[1,0,0,0,1,0,0,0,1],!Cr(t,Bn,zn,kn,ra))?!1:(oa.crossVectors(an,rn),t=[oa.x,oa.y,oa.z],Cr(t,Bn,zn,kn,ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $i=[new R,new R,new R,new R,new R,new R,new R,new R],Pi=new R,aa=new xn,Bn=new R,zn=new R,kn=new R,an=new R,rn=new R,wn=new R,ps=new R,ra=new R,oa=new R,En=new R;function Cr(s,e,t,i,n){for(let a=0,r=s.length-3;a<=r;a+=3){En.fromArray(s,a);const o=n.x*Math.abs(En.x)+n.y*Math.abs(En.y)+n.z*Math.abs(En.z),l=e.dot(En),c=t.dot(En),h=i.dot(En);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Rt=new R,la=new Ce;let ru=0;class kt extends Ln{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ru++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sh,this.updateRanges=[],this.gpuType=Ui,this.version=0,this._normalizationScale=e!==void 0?sr(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)la.fromBufferAttribute(this,t),la.applyMatrix3(e),this.setXY(t,la.x,la.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Qo(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):jo(e,this.array)}}class hh extends kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class dh extends kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tt extends kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const ou=new xn,ms=new R,Pr=new R;class _n{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ou.setFromPoints(e).getCenter(i);let n=0;for(let a=0,r=e.length;a<r;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const t=ms.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ms,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(Pr)),this.expandByPoint(ms.copy(e.center).sub(Pr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lu=0;const wi=new rt,Lr=new Et,Gn=new R,hi=new xn,gs=new xn,Ot=new R;class xt extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ad(e)?dh:hh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new He().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,t,i){return wi.makeTranslation(e,t,i),this.applyMatrix4(wi),this}scale(e,t,i){return wi.makeScale(e,t,i),this.applyMatrix4(wi),this}lookAt(e){return Lr.lookAt(e),Lr.updateMatrix(),this.applyMatrix4(Lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gn).negate(),this.translate(Gn.x,Gn.y,Gn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,a=e.length;n<a;n++){const r=e[n];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new tt(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const a=t[i];hi.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(hi.min,gs.min),hi.expandByPoint(Ot),Ot.addVectors(hi.max,gs.max),hi.expandByPoint(Ot)):(hi.expandByPoint(gs.min),hi.expandByPoint(gs.max))}hi.getCenter(i);let n=0;for(let a=0,r=e.count;a<r;a++)Ot.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(Ot));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ot.fromBufferAttribute(o,c),l&&(Gn.fromBufferAttribute(e,c),Ot.add(Gn)),n=Math.max(n,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,a=t.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new kt(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const o=[],l=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)o[L]=new R,l[L]=new R;const h=new R,d=new R,u=new R,f=new Ce,p=new Ce,x=new Ce,g=new R,m=new R;function v(L,C,N){c[L]=c[C]=c[N]=1,h.fromBufferAttribute(i,L),d.fromBufferAttribute(i,C),u.fromBufferAttribute(i,N),f.fromBufferAttribute(a,L),p.fromBufferAttribute(a,C),x.fromBufferAttribute(a,N),d.sub(h),u.sub(h),p.sub(f),x.sub(f);const F=1/(p.x*x.y-x.x*p.y);isFinite(F)&&(g.copy(d).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(F),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(F),o[L].add(g),o[C].add(g),o[N].add(g),l[L].add(m),l[C].add(m),l[N].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,C=w.length;L<C;++L){const N=w[L],F=N.start,G=N.count;for(let I=F,z=F+G;I<z;I+=3)v(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const b=new R,A=new R,E=new R,_=new R;function S(L){E.fromBufferAttribute(n,L),_.copy(E);const C=o[L];b.copy(C),b.sub(E.multiplyScalar(E.dot(C))).normalize(),A.crossVectors(_,C);const F=A.dot(l[L])<0?-1:1;r.setXYZW(L,b.x,b.y,b.z,F)}for(let L=0,C=i.count;L<C;++L)c[L]&&S(L);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const n=new R,a=new R,r=new R,o=new R,l=new R,c=new R,h=new R,d=new R;if(e)for(let u=0,f=e.count;u<f;u+=3){const p=e.getX(u+0),x=e.getX(u+1),g=e.getX(u+2);n.fromBufferAttribute(t,p),a.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),h.subVectors(r,a),d.subVectors(n,a),h.cross(d),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,a),d.subVectors(n,a),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new kt(u,h,d)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xt,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],d=a[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sh,this.updateRanges=[],this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,a=this.stride;n<a;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Wl(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[t]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Wl(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function Wl(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=gn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const jt=new R;class Qa{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n,this._normalizationScale=e!==void 0?sr(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),a=this._normalize(a)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=a,this}clone(e){if(e===void 0){Ja("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[n+a])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ja("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[n+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Qo(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):jo(e,this.data.array)}}const Dr=new R,hu=new R,du=new He;class cn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Dr.subVectors(i,t).cross(hu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const n=e.delta(Dr),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||du.getNormalMatrix(e),n=this.coplanarPoint(Dr).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let uu=0;class vn extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=gn(),this.name="",this.type="Material",this.blending=Ns,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=qc,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=n(e.textures),r=n(e.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Se().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new cn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ce().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ce().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class nl extends vn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Hn;const xs=new R,Vn=new R,Wn=new R,Xn=new Ce,_s=new Ce,uh=new rt,ca=new R,vs=new R,ha=new R,Xl=new Ce,Ir=new Ce,ql=new Ce;class fh extends Et{constructor(e=new nl){if(super(),this.isSprite=!0,this.type="Sprite",Hn===void 0){Hn=new xt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new cu(t,5);Hn.setIndex([0,1,2,0,2,3]),Hn.setAttribute("position",new Qa(i,3,0,!1)),Hn.setAttribute("uv",new Qa(i,2,3,!1))}this.geometry=Hn,this.material=e,this.center=new Ce(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&at('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vn.setFromMatrixScale(this.matrixWorld),uh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Wn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vn.multiplyScalar(-Wn.z);const i=this.material.rotation;let n,a;i!==0&&(a=Math.cos(i),n=Math.sin(i));const r=this.center;da(ca.set(-.5,-.5,0),Wn,r,Vn,n,a),da(vs.set(.5,-.5,0),Wn,r,Vn,n,a),da(ha.set(.5,.5,0),Wn,r,Vn,n,a),Xl.set(0,0),Ir.set(1,0),ql.set(1,1);let o=e.ray.intersectTriangle(ca,vs,ha,!1,xs);if(o===null&&(da(vs.set(-.5,.5,0),Wn,r,Vn,n,a),Ir.set(0,1),o=e.ray.intersectTriangle(ca,ha,vs,!1,xs),o===null))return;const l=e.ray.origin.distanceTo(xs);l<e.near||l>e.far||t.push({distance:l,point:xs.clone(),uv:Ei.getInterpolation(xs,ca,vs,ha,Xl,Ir,ql,new Ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function da(s,e,t,i,n,a){Xn.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(_s.x=a*Xn.x-n*Xn.y,_s.y=n*Xn.x+a*Xn.y):_s.copy(Xn),s.copy(e),s.x+=_s.x,s.y+=_s.y,s.applyMatrix4(uh)}const Ki=new R,Nr=new R,ua=new R,fa=new R;class ar{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Nr.copy(e).add(t).multiplyScalar(.5),ua.copy(t).sub(e).normalize(),fa.copy(this.origin).sub(Nr);const a=e.distanceTo(t)*.5,r=-this.direction.dot(ua),o=fa.dot(this.direction),l=-fa.dot(ua),c=fa.lengthSq(),h=Math.abs(1-r*r);let d,u,f,p;if(h>0)if(d=r*l-o,u=r*o-l,p=a*h,d>=0)if(u>=-p)if(u<=p){const x=1/h;d*=x,u*=x,f=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=a,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;else u=-a,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-r*a+o)),u=d>0?-a:Math.min(Math.max(-a,-l),a),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-a,-l),a),f=u*(u+2*l)+c):(d=Math.max(0,-(r*a+o)),u=d>0?a:Math.min(Math.max(-a,-l),a),f=-d*d+u*(u+2*l)+c);else u=r>0?-a:a,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Nr).addScaledVector(ua,u),f}intersectSphere(e,t){if(e.radius<0)return null;Ki.subVectors(e.center,this.origin);const i=Ki.dot(this.direction),n=Ki.dot(Ki)-i*i,a=e.radius*e.radius;if(n>a)return null;const r=Math.sqrt(a-n),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(a=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),i>r||a>n||((a>i||isNaN(i))&&(i=a),(r<n||isNaN(n))&&(n=r),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,i,n,a){const r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-r.x,u=e.y-r.y,f=e.z-r.z,p=t.x-r.x,x=t.y-r.y,g=t.z-r.z,m=i.x-r.x,v=i.y-r.y,w=i.z-r.z,b=Math.abs(l),A=Math.abs(c),E=Math.abs(h);let _,S,L,C,N,F,G,I,z,$,P,X;if(b>=A&&b>=E?(L=l,F=d,z=p,X=m,l>=0?(_=c,S=h,C=u,N=f,G=x,I=g,$=v,P=w):(_=h,S=c,C=f,N=u,G=g,I=x,$=w,P=v)):A>=E?(L=c,F=u,z=x,X=v,c>=0?(_=h,S=l,C=f,N=d,G=g,I=p,$=w,P=m):(_=l,S=h,C=d,N=f,G=p,I=g,$=m,P=w)):(L=h,F=f,z=g,X=w,h>=0?(_=l,S=c,C=d,N=u,G=p,I=x,$=m,P=v):(_=c,S=l,C=u,N=d,G=x,I=p,$=v,P=m)),L===0)return null;const V=_/L,q=S/L,K=1/L,me=C-V*F,Ve=N-q*F,Q=G-V*z,ve=I-q*z,Ee=$-V*X,Fe=P-q*X,Me=Ee*ve-Fe*Q,Xe=me*Fe-Ve*Ee,Tt=Q*Ve-ve*me;if(n){if(Me<0||Xe<0||Tt<0)return null}else if((Me<0||Xe<0||Tt<0)&&(Me>0||Xe>0||Tt>0))return null;const ze=Me+Xe+Tt;if(ze===0)return null;const dt=K*(Me*F+Xe*z+Tt*X);return(ze>0?dt<0:dt>0)?null:this.at(dt/ze,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yl=new rt,Tn=new ar,pa=new _n,$l=new R,ma=new R,ga=new R,xa=new R,Ur=new R,_a=new R,Kl=new R,va=new R;class ce extends Et{constructor(e=new xt,t=new pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(a&&o){_a.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],d=a[l];h!==0&&(Ur.fromBufferAttribute(d,e),r?_a.addScaledVector(Ur,h):_a.addScaledVector(Ur.sub(t),h))}t.add(_a)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(a),Tn.copy(e.ray).recast(e.near),!(pa.containsPoint(Tn.origin)===!1&&(Tn.intersectSphere(pa,$l)===null||Tn.origin.distanceToSquared($l)>(e.far-e.near)**2))&&(Yl.copy(a).invert(),Tn.copy(e.ray).applyMatrix4(Yl),!(i.boundingBox!==null&&Tn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Tn)))}_computeIntersections(e,t,i){let n;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,x=u.length;p<x;p++){const g=u[p],m=r[g.materialIndex],v=Math.max(g.start,f.start),w=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let b=v,A=w;b<A;b+=3){const E=o.getX(b),_=o.getX(b+1),S=o.getX(b+2);n=Ma(this,m,e,i,c,h,d,E,_,S),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const v=o.getX(g),w=o.getX(g+1),b=o.getX(g+2);n=Ma(this,r,e,i,c,h,d,v,w,b),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,x=u.length;p<x;p++){const g=u[p],m=r[g.materialIndex],v=Math.max(g.start,f.start),w=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=v,A=w;b<A;b+=3){const E=b,_=b+1,S=b+2;n=Ma(this,m,e,i,c,h,d,E,_,S),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const v=g,w=g+1,b=g+2;n=Ma(this,r,e,i,c,h,d,v,w,b),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}}}function fu(s,e,t,i,n,a,r,o){let l;if(e.side===ii?l=i.intersectTriangle(r,a,n,!0,o):l=i.intersectTriangle(n,a,r,e.side===pn,o),l===null)return null;va.copy(o),va.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(va);return c<t.near||c>t.far?null:{distance:c,point:va.clone(),object:s}}function Ma(s,e,t,i,n,a,r,o,l,c){s.getVertexPosition(o,ma),s.getVertexPosition(l,ga),s.getVertexPosition(c,xa);const h=fu(s,e,t,i,ma,ga,xa,Kl);if(h){const d=new R;Ei.getBarycoord(Kl,ma,ga,xa,d),n&&(h.uv=Ei.getInterpolatedAttribute(n,o,l,c,d,new Ce)),a&&(h.uv1=Ei.getInterpolatedAttribute(a,o,l,c,d,new Ce)),r&&(h.normal=Ei.getInterpolatedAttribute(r,o,l,c,d,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new R,materialIndex:0};Ei.getNormal(ma,ga,xa,u.normal),h.face=u,h.barycoord=d}return h}class ph extends Jt{constructor(e=null,t=1,i=1,n,a,r,o,l,c=Vt,h=Vt,d,u){super(null,r,o,l,c,h,n,a,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zl extends kt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qn=new rt,Jl=new rt,ya=[],Ql=new xn,pu=new rt,Ms=new ce,ys=new _n;class on extends ce{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,pu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qn),Ql.copy(e.boundingBox).applyMatrix4(qn),this.boundingBox.union(Ql)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qn),ys.copy(e.boundingSphere).applyMatrix4(qn),this.boundingSphere.union(ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,a=i.length+1,r=e*a+1;for(let o=0;o<i.length;o++)i[o]=n[r+o]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(Ms.geometry=this.geometry,Ms.material=this.material,Ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ys.copy(this.boundingSphere),ys.applyMatrix4(i),e.ray.intersectsSphere(ys)!==!1))for(let a=0;a<n;a++){this.getMatrixAt(a,qn),Jl.multiplyMatrices(i,qn),Ms.matrixWorld=Jl,Ms.raycast(e,ya);for(let r=0,o=ya.length;r<o;r++){const l=ya[r];l.instanceId=a,l.object=this,t.push(l)}ya.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Zl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new ph(new Float32Array(n*this.count),n,this.count,Yo,Ui));const a=this.morphTexture.source.data.data;let r=0;for(let c=0;c<i.length;c++)r+=i[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=n*e;return a[l]=o,a.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const An=new _n,mu=new Ce(.5,.5),Sa=new R;class Ys{constructor(e=new cn,t=new cn,i=new cn,n=new cn,a=new cn,r=new cn){this.planes=[e,t,i,n,a,r]}set(e,t,i,n,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fi,i=!1){const n=this.planes,a=e.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],d=a[5],u=a[6],f=a[7],p=a[8],x=a[9],g=a[10],m=a[11],v=a[12],w=a[13],b=a[14],A=a[15];if(n[0].setComponents(c-r,f-h,m-p,A-v).normalize(),n[1].setComponents(c+r,f+h,m+p,A+v).normalize(),n[2].setComponents(c+o,f+d,m+x,A+w).normalize(),n[3].setComponents(c-o,f-d,m-x,A-w).normalize(),i)n[4].setComponents(l,u,g,b).normalize(),n[5].setComponents(c-l,f-u,m-g,A-b).normalize();else if(n[4].setComponents(c-l,f-u,m-g,A-b).normalize(),t===Fi)n[5].setComponents(c+l,f+u,m+g,A+b).normalize();else if(t===Xs)n[5].setComponents(l,u,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),An.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),An.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(An)}intersectsSprite(e){An.center.set(0,0,0);const t=mu.distanceTo(e.center);return An.radius=.7071067811865476+t,An.applyMatrix4(e.matrixWorld),this.intersectsSphere(An)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Sa.x=n.normal.x>0?e.max.x:e.min.x,Sa.y=n.normal.y>0?e.max.y:e.min.y,Sa.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const jl=new rt;class sl{constructor(){this.coordinateSystem=Fi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){const a=t[n];jl.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),i[n]===void 0&&(i[n]=new Ys),i[n].setFromProjectionMatrix(jl,a.coordinateSystem,a.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++)t[n]===void 0&&(t[n]=new Ys),t[n].copy(i[n]);return this._count=e._count,this}clone(){return new sl().copy(this)}}class mh extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ja=new R,er=new R,ec=new rt,Ss=new ar,ba=new _n,Fr=new R,tc=new R;class gu extends Et{constructor(e=new xt,t=new mh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,a=t.count;n<a;n++)ja.fromBufferAttribute(t,n-1),er.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=ja.distanceTo(er);e.setAttribute("lineDistance",new tt(i,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,n=this.matrixWorld,a=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(n),ba.radius+=a,e.ray.intersectsSphere(ba)===!1)return;ec.copy(n).invert(),Ss.copy(e.ray).applyMatrix4(ec);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let x=f,g=p-1;x<g;x+=c){const m=h.getX(x),v=h.getX(x+1),w=wa(this,e,Ss,l,m,v,x);w&&t.push(w)}if(this.isLineLoop){const x=h.getX(p-1),g=h.getX(f),m=wa(this,e,Ss,l,x,g,p-1);m&&t.push(m)}}else{const f=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let x=f,g=p-1;x<g;x+=c){const m=wa(this,e,Ss,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){const x=wa(this,e,Ss,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function wa(s,e,t,i,n,a,r){const o=s.geometry.attributes.position;if(ja.fromBufferAttribute(o,n),er.fromBufferAttribute(o,a),t.distanceSqToSegment(ja,er,Fr,tc)>i)return;Fr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Fr);if(!(c<e.near||c>e.far))return{distance:c,point:tc.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}class jn extends vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ic=new rt,Po=new ar,Ea=new _n,Ta=new R;class Cs extends Et{constructor(e=new xt,t=new jn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,n=this.matrixWorld,a=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(n),Ea.radius+=a,e.ray.intersectsSphere(Ea)===!1)return;ic.copy(n).invert(),Po.copy(e.ray).applyMatrix4(ic);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let p=u,x=f;p<x;p++){const g=c.getX(p);Ta.fromBufferAttribute(d,g),nc(Ta,g,l,n,e,t,this)}}else{const u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let p=u,x=f;p<x;p++)Ta.fromBufferAttribute(d,p),nc(Ta,p,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function nc(s,e,t,i,n,a,r){const o=Po.distanceSqToPoint(s);if(o<t){const l=new R;Po.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class gh extends Jt{constructor(e=[],t=ss,i,n,a,r,o,l,c,h){super(e,t,i,n,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mn extends Jt{constructor(e,t,i,n,a,r,o,l,c){super(e,t,i,n,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class os extends Jt{constructor(e,t,i=Vi,n,a,r,o=Vt,l=Vt,c,h=mn,d=1){if(h!==mn&&h!==fn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,n,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new el(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class xh extends os{constructor(e,t=Vi,i=ss,n,a,r=Vt,o=Vt,l,c=mn){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,n,a,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _h extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ze extends xt{constructor(e=1,t=1,i=1,n=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:a,depthSegments:r};const o=this;n=Math.floor(n),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,f=0;p("z","y","x",-1,-1,i,t,e,r,a,0),p("z","y","x",1,-1,i,t,-e,r,a,1),p("x","z","y",1,1,e,i,t,n,r,2),p("x","z","y",1,-1,e,i,-t,n,r,3),p("x","y","z",1,-1,e,t,i,n,a,4),p("x","y","z",-1,-1,e,t,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(d,2));function p(x,g,m,v,w,b,A,E,_,S,L){const C=b/_,N=A/S,F=b/2,G=A/2,I=E/2,z=_+1,$=S+1;let P=0,X=0;const V=new R;for(let q=0;q<$;q++){const K=q*N-G;for(let me=0;me<z;me++){const Ve=me*C-F;V[x]=Ve*v,V[g]=K*w,V[m]=I,c.push(V.x,V.y,V.z),V[x]=0,V[g]=0,V[m]=E>0?1:-1,h.push(V.x,V.y,V.z),d.push(me/_),d.push(1-q/S),P+=1}}for(let q=0;q<S;q++)for(let K=0;K<_;K++){const me=u+K+z*q,Ve=u+K+z*(q+1),Q=u+(K+1)+z*(q+1),ve=u+(K+1)+z*q;l.push(me,Ve,ve),l.push(Ve,Q,ve),X+=6}o.addGroup(f,X,L),f+=X,u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ze(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class al extends xt{constructor(e=1,t=1,i=4,n=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:a},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),a=Math.max(1,Math.floor(a));const r=[],o=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,p=i*2+a,x=n+1,g=new R,m=new R;for(let v=0;v<=p;v++){let w=0,b=0,A=0,E=0;if(v<=i){const L=v/i,C=L*Math.PI/2;b=-h-e*Math.cos(C),A=e*Math.sin(C),E=-e*Math.cos(C),w=L*d}else if(v<=i+a){const L=(v-i)/a;b=-h+L*t,A=e,E=0,w=d+L*u}else{const L=(v-i-a)/i,C=L*Math.PI/2;b=h+e*Math.sin(C),A=e*Math.cos(C),E=e*Math.sin(C),w=d+u+L*d}const _=Math.max(0,Math.min(1,w/f));let S=0;v===0?S=.5/n:v===p&&(S=-.5/n);for(let L=0;L<=n;L++){const C=L/n,N=C*Math.PI*2,F=Math.sin(N),G=Math.cos(N);m.x=-A*G,m.y=b,m.z=A*F,o.push(m.x,m.y,m.z),g.set(-A*G,E,A*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(C+S,_)}if(v>0){const L=(v-1)*x;for(let C=0;C<n;C++){const N=L+C,F=L+C+1,G=v*x+C,I=v*x+C+1;r.push(N,F,G),r.push(F,I,G)}}}this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Os extends xt{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const a=[],r=[],o=[],l=[],c=new R,h=new Ce;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=i+d/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[u]/e+1)/2,h.y=(r[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(o,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class it extends xt{constructor(e=1,t=1,i=1,n=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),a=Math.floor(a);const h=[],d=[],u=[],f=[];let p=0;const x=[],g=i/2;let m=0;v(),r===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new tt(d,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(f,2));function v(){const b=new R,A=new R;let E=0;const _=(t-e)/i;for(let S=0;S<=a;S++){const L=[],C=S/a,N=C*(t-e)+e;for(let F=0;F<=n;F++){const G=F/n,I=G*l+o,z=Math.sin(I),$=Math.cos(I);A.x=N*z,A.y=-C*i+g,A.z=N*$,d.push(A.x,A.y,A.z),b.set(z,_,$).normalize(),u.push(b.x,b.y,b.z),f.push(G,1-C),L.push(p++)}x.push(L)}for(let S=0;S<n;S++)for(let L=0;L<a;L++){const C=x[L][S],N=x[L+1][S],F=x[L+1][S+1],G=x[L][S+1];(e>0||L!==0)&&(h.push(C,N,G),E+=3),(t>0||L!==a-1)&&(h.push(N,F,G),E+=3)}c.addGroup(m,E,0),m+=E}function w(b){const A=p,E=new Ce,_=new R;let S=0;const L=b===!0?e:t,C=b===!0?1:-1;for(let F=1;F<=n;F++)d.push(0,g*C,0),u.push(0,C,0),f.push(.5,.5),p++;const N=p;for(let F=0;F<=n;F++){const I=F/n*l+o,z=Math.cos(I),$=Math.sin(I);_.x=L*$,_.y=g*C,_.z=L*z,d.push(_.x,_.y,_.z),u.push(0,C,0),E.x=z*.5+.5,E.y=$*.5*C+.5,f.push(E.x,E.y),p++}for(let F=0;F<n;F++){const G=A+F,I=N+F;b===!0?h.push(I,I+1,G):h.push(I+1,I,G),S+=3}c.addGroup(m,S,b===!0?1:2),m+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new it(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ki extends it{constructor(e=1,t=1,i=32,n=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,i,n,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new ki(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Js extends xt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const a=[],r=[];o(n),c(i),h(),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(a.slice(),3)),this.setAttribute("uv",new tt(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const w=new R,b=new R,A=new R;for(let E=0;E<t.length;E+=3)f(t[E+0],w),f(t[E+1],b),f(t[E+2],A),l(w,b,A,v)}function l(v,w,b,A){const E=A+1,_=[];for(let S=0;S<=E;S++){_[S]=[];const L=v.clone().lerp(b,S/E),C=w.clone().lerp(b,S/E),N=E-S;for(let F=0;F<=N;F++)F===0&&S===E?_[S][F]=L:_[S][F]=L.clone().lerp(C,F/N)}for(let S=0;S<E;S++)for(let L=0;L<2*(E-S)-1;L++){const C=Math.floor(L/2);L%2===0?(u(_[S][C+1]),u(_[S+1][C]),u(_[S][C])):(u(_[S][C+1]),u(_[S+1][C+1]),u(_[S+1][C]))}}function c(v){const w=new R;for(let b=0;b<a.length;b+=3)w.x=a[b+0],w.y=a[b+1],w.z=a[b+2],w.normalize().multiplyScalar(v),a[b+0]=w.x,a[b+1]=w.y,a[b+2]=w.z}function h(){const v=new R;for(let w=0;w<a.length;w+=3){v.x=a[w+0],v.y=a[w+1],v.z=a[w+2];const b=g(v)/2/Math.PI+.5,A=m(v)/Math.PI+.5;r.push(b,1-A)}p(),d()}function d(){for(let v=0;v<r.length;v+=6){const w=r[v+0],b=r[v+2],A=r[v+4],E=Math.max(w,b,A),_=Math.min(w,b,A);E>.9&&_<.1&&(w<.2&&(r[v+0]+=1),b<.2&&(r[v+2]+=1),A<.2&&(r[v+4]+=1))}}function u(v){a.push(v.x,v.y,v.z)}function f(v,w){const b=v*3;w.x=e[b+0],w.y=e[b+1],w.z=e[b+2]}function p(){const v=new R,w=new R,b=new R,A=new R,E=new Ce,_=new Ce,S=new Ce;for(let L=0,C=0;L<a.length;L+=9,C+=6){v.set(a[L+0],a[L+1],a[L+2]),w.set(a[L+3],a[L+4],a[L+5]),b.set(a[L+6],a[L+7],a[L+8]),E.set(r[C+0],r[C+1]),_.set(r[C+2],r[C+3]),S.set(r[C+4],r[C+5]),A.copy(v).add(w).add(b).divideScalar(3);const N=g(A);x(E,C+0,v,N),x(_,C+2,w,N),x(S,C+4,b,N)}}function x(v,w,b,A){A<0&&v.x===1&&(r[w]=v.x-1),b.x===0&&b.z===0&&(r[w]=A/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.vertices,e.indices,e.radius,e.detail)}}class es extends Js{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=1/i,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new es(e.radius,e.detail)}}class fi extends Js{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fi(e.radius,e.detail)}}class dn extends Js{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new dn(e.radius,e.detail)}}class ti extends xt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const a=e/2,r=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=e/o,u=t/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){const v=m*u-r;for(let w=0;w<c;w++){const b=w*d-a;p.push(b,-v,0),x.push(0,0,1),g.push(w/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const w=v+c*m,b=v+c*(m+1),A=v+1+c*(m+1),E=v+1+c*m;f.push(w,b,E),f.push(b,A,E)}this.setIndex(f),this.setAttribute("position",new tt(p,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.width,e.height,e.widthSegments,e.heightSegments)}}class ji extends xt{constructor(e=.5,t=1,i=32,n=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:a,thetaLength:r},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/n,f=new R,p=new Ce;for(let x=0;x<=n;x++){for(let g=0;g<=i;g++){const m=a+g/i*r;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}d+=u}for(let x=0;x<n;x++){const g=x*(i+1);for(let m=0;m<i;m++){const v=m+g,w=v,b=v+i+1,A=v+i+2,E=v+1;o.push(w,b,E),o.push(b,A,E)}}this.setIndex(o),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Lt extends xt{constructor(e=1,t=32,i=16,n=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const h=[],d=new R,u=new R,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){const v=[],w=m/i,b=r+w*o,A=e*Math.cos(b),E=Math.sqrt(e*e-A*A);let _=0;m===0&&r===0?_=.5/t:m===i&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){const L=S/t,C=n+L*a;d.x=-E*Math.cos(C),d.y=A,d.z=E*Math.sin(C),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(L+_,1-w),v.push(c++)}h.push(v)}for(let m=0;m<i;m++)for(let v=0;v<t;v++){const w=h[m][v+1],b=h[m][v],A=h[m+1][v],E=h[m+1][v+1];(m!==0||r>0)&&f.push(w,b,E),(m!==i-1||l<Math.PI)&&f.push(b,A,E)}this.setIndex(f),this.setAttribute("position",new tt(p,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pi extends xt{constructor(e=1,t=.4,i=12,n=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:a,thetaStart:r,thetaLength:o},i=Math.floor(i),n=Math.floor(n);const l=[],c=[],h=[],d=[],u=new R,f=new R,p=new R;for(let x=0;x<=i;x++){const g=r+x/i*o;for(let m=0;m<=n;m++){const v=m/n*a;f.x=(e+t*Math.cos(g))*Math.cos(v),f.y=(e+t*Math.cos(g))*Math.sin(v),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/n),d.push(x/i)}}for(let x=1;x<=i;x++)for(let g=1;g<=n;g++){const m=(n+1)*x+g-1,v=(n+1)*(x-1)+g-1,w=(n+1)*(x-1)+g,b=(n+1)*x+g;l.push(m,v,b),l.push(v,w,b)}this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ls(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];if(sc(n))n.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(sc(n[0])){const a=[];for(let r=0,o=n.length;r<o;r++)a[r]=n[r].clone();e[t][i]=a}else e[t][i]=n.slice();else e[t][i]=n}}return e}function ei(s){const e={};for(let t=0;t<s.length;t++){const i=ls(s[t]);for(const n in i)e[n]=i[n]}return e}function sc(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function xu(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function vh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const $s={clone:ls,merge:ei};var _u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zt extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=xu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new Se().setHex(n.value);break;case"v2":this.uniforms[i].value=new Ce().fromArray(n.value);break;case"v3":this.uniforms[i].value=new R().fromArray(n.value);break;case"v4":this.uniforms[i].value=new bt().fromArray(n.value);break;case"m3":this.uniforms[i].value=new He().fromArray(n.value);break;case"m4":this.uniforms[i].value=new rt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Mh extends Zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ue extends vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mu extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yu extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class rr extends Et{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class yh extends rr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Or=new rt,ac=new R,rc=new R;class Sh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;ac.setFromMatrixPosition(e.matrixWorld),t.position.copy(ac),rc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){Or.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Or,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,r=n?n.z/a.x:1,o=n?n.w/a.y:1,l=n?n.x/a.x:0,c=n?n.y/a.y:0;e.coordinateSystem===Xs||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Or)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Aa=new R,Ra=new gi,Bi=new R;class bh extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Aa,Ra,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Aa,Ra,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Aa,Ra,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Aa,Ra,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ln=new R,oc=new Ce,lc=new Ce;class xi extends bh{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ln.x,ln.y).multiplyScalar(-e/ln.z),ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ln.x,ln.y).multiplyScalar(-e/ln.z)}getViewSize(e,t){return this.getViewBounds(e,oc,lc),t.subVectors(lc,oc)}setViewOffset(e,t,i,n,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Us*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,a=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*n/l,t-=r.offsetY*i/c,n*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Su extends Sh{constructor(){super(new xi(90,1,.5,500)),this.isPointLightShadow=!0}}class wh extends rr{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Su}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class rl extends bh{constructor(e=-1,t=1,i=1,n=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-e,r=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class bu extends Sh{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lo extends rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new bu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class wu extends rr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Yn=-90,$n=1;class Do extends Et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new xi(Yn,$n,e,t);n.layers=this.layers,this.add(n);const a=new xi(Yn,$n,e,t);a.layers=this.layers,this.add(a);const r=new xi(Yn,$n,e,t);r.layers=this.layers,this.add(r);const o=new xi(Yn,$n,e,t);o.layers=this.layers,this.add(o);const l=new xi(Yn,$n,e,t);l.layers=this.layers,this.add(l);const c=new xi(Yn,$n,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,2,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Eu extends xi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class Eh{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Tu.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Tu(){this._document.hidden===!1&&this.reset()}const cc=new rt;class Au{constructor(e,t,i=0,n=1/0){this.ray=new ar(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new tl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):at("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cc),this}intersectObject(e,t=!0,i=[]){return Io(e,this,i,t),i.sort(hc),i}intersectObjects(e,t=!0,i=[]){for(let n=0,a=e.length;n<a;n++)Io(e[n],this,i,t);return i.sort(hc),i}}function hc(s,e){return s.distance-e.distance}function Io(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const a=s.children;for(let r=0,o=a.length;r<o;r++)Io(a[r],e,t,!0)}}const dc=new R,Ca=new R,Kn=new R,Zn=new R,Br=new R,Ru=new R,Cu=new R;class Pu{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){dc.subVectors(e,this.start),Ca.subVectors(this.end,this.start);const i=Ca.dot(Ca);if(i===0)return 0;let a=Ca.dot(dc)/i;return t&&(a=qe(a,0,1)),a}closestPointToPoint(e,t,i){const n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}distanceSqToLine3(e,t=Ru,i=Cu){const n=10000000000000001e-32;let a,r;const o=this.start,l=e.start,c=this.end,h=e.end;Kn.subVectors(c,o),Zn.subVectors(h,l),Br.subVectors(o,l);const d=Kn.dot(Kn),u=Zn.dot(Zn),f=Zn.dot(Br);if(d<=n&&u<=n)return t.copy(o),i.copy(l),t.distanceToSquared(i);if(d<=n)a=0,r=f/u,r=qe(r,0,1);else{const p=Kn.dot(Br);if(u<=n)r=0,a=qe(-p/d,0,1);else{const x=Kn.dot(Zn),g=d*u-x*x;g!==0?a=qe((x*f-p*u)/g,0,1):a=0,r=(x*a+f)/u,r<0?(r=0,a=qe(-p/d,0,1)):r>1&&(r=1,a=qe((x-p)/d,0,1))}}return t.copy(o).addScaledVector(Kn,a),i.copy(l).addScaledVector(Zn,r),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function uc(s,e,t,i){const n=Lu(i);switch(t){case jc:return s*e;case Yo:return s*e/n.components*n.byteLength;case $o:return s*e/n.components*n.byteLength;case Pn:return s*e*2/n.components*n.byteLength;case Ko:return s*e*2/n.components*n.byteLength;case eh:return s*e*3/n.components*n.byteLength;case Hi:return s*e*4/n.components*n.byteLength;case Zo:return s*e*4/n.components*n.byteLength;case Fa:case Oa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ba:case za:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jr:case to:return Math.max(s,16)*Math.max(e,8)/4;case Qr:case eo:return Math.max(s,8)*Math.max(e,8)/2;case io:case no:case ao:case ro:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case so:case qa:case oo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case co:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ho:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case uo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case fo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case po:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case mo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case go:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case xo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case _o:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case vo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Mo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case yo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case So:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case bo:case wo:case Eo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case To:case Ao:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ya:case Ro:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lu(s){switch(s){case _i:case Kc:return{byteLength:1,components:1};case Ws:case Zc:case oi:return{byteLength:2,components:1};case Xo:case qo:return{byteLength:2,components:4};case Vi:case Wo:case Ui:return{byteLength:4,components:1};case Jc:case Qc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oo}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oo);function Th(){let s=null,e=!1,t=null,i=null;function n(a,r){i=s.requestAnimationFrame(n),t(a,r)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function Du(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){const p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){const x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:a,update:r}}var Iu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nu=`#ifdef USE_ALPHAHASH
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
#endif`,Uu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ou=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zu=`#ifdef USE_AOMAP
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
#endif`,ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qu=`#ifdef USE_IRIDESCENCE
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
#endif`,Yu=`#ifdef USE_BUMPMAP
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
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ef=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,nf=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,sf=`vec3 transformedNormal = objectNormal;
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
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
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
#endif`,pf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mf=`#ifdef USE_GRADIENTMAP
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
}`,yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wf=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Ef=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Lf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Df=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,If=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uf=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ff=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Of=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vf=`#if defined( USE_POINTS_UV )
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
#endif`,Wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`#ifdef USE_MORPHTARGETS
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
#endif`,Zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ip=`#ifdef USE_NORMALMAP
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
#endif`,np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,_p=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mp=`#ifdef USE_SKINNING
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
#endif`,yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sp=`#ifdef USE_SKINNING
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
#endif`,bp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ep=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tp=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ap=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rp=`#ifdef USE_TRANSMISSION
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,Dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Np=`uniform sampler2D t2D;
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
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`#include <common>
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
}`,kp=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Gp=`#define DISTANCE
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
}`,Hp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`uniform float scale;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Yp=`#include <common>
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
}`,$p=`uniform vec3 diffuse;
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
}`,Kp=`#define LAMBERT
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
}`,Zp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Jp=`#define MATCAP
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
}`,Qp=`#define MATCAP
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
}`,jp=`#define NORMAL
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
}`,em=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tm=`#define PHONG
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
}`,im=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,nm=`#define STANDARD
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
}`,sm=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,am=`#define TOON
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
}`,rm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,om=`uniform float size;
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#include <common>
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
}`,hm=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,dm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,um=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Iu,alphahash_pars_fragment:Nu,alphamap_fragment:Uu,alphamap_pars_fragment:Fu,alphatest_fragment:Ou,alphatest_pars_fragment:Bu,aomap_fragment:zu,aomap_pars_fragment:ku,batching_pars_vertex:Gu,batching_vertex:Hu,begin_vertex:Vu,beginnormal_vertex:Wu,bsdfs:Xu,iridescence_fragment:qu,bumpmap_pars_fragment:Yu,clipping_planes_fragment:$u,clipping_planes_pars_fragment:Ku,clipping_planes_pars_vertex:Zu,clipping_planes_vertex:Ju,color_fragment:Qu,color_pars_fragment:ju,color_pars_vertex:ef,color_vertex:tf,common:nf,defaultnormal_vertex:sf,displacementmap_pars_vertex:af,displacementmap_vertex:rf,emissivemap_fragment:of,emissivemap_pars_fragment:lf,colorspace_fragment:cf,colorspace_pars_fragment:hf,envmap_fragment:df,envmap_common_pars_fragment:uf,envmap_pars_fragment:ff,envmap_pars_vertex:pf,envmap_physical_pars_fragment:Ef,envmap_vertex:mf,fog_vertex:gf,fog_pars_vertex:xf,fog_fragment:_f,fog_pars_fragment:vf,gradientmap_pars_fragment:Mf,lightmap_pars_fragment:yf,lights_lambert_fragment:Sf,lights_lambert_pars_fragment:bf,lights_pars_begin:wf,lights_toon_fragment:Tf,lights_toon_pars_fragment:Af,lights_phong_fragment:Rf,lights_phong_pars_fragment:Cf,lights_physical_fragment:Pf,lights_physical_pars_fragment:Lf,lights_fragment_begin:Df,lights_fragment_maps:If,lights_fragment_end:Nf,lightprobes_pars_fragment:Uf,logdepthbuf_fragment:Ff,logdepthbuf_pars_fragment:Of,logdepthbuf_pars_vertex:Bf,logdepthbuf_vertex:zf,map_fragment:kf,map_pars_fragment:Gf,map_particle_fragment:Hf,map_particle_pars_fragment:Vf,metalnessmap_fragment:Wf,metalnessmap_pars_fragment:Xf,morphinstance_vertex:qf,morphcolor_vertex:Yf,morphnormal_vertex:$f,morphtarget_pars_vertex:Kf,morphtarget_vertex:Zf,normal_fragment_begin:Jf,normal_fragment_maps:Qf,normal_pars_fragment:jf,normal_pars_vertex:ep,normal_vertex:tp,normalmap_pars_fragment:ip,clearcoat_normal_fragment_begin:np,clearcoat_normal_fragment_maps:sp,clearcoat_pars_fragment:ap,iridescence_pars_fragment:rp,opaque_fragment:op,packing:lp,premultiplied_alpha_fragment:cp,project_vertex:hp,dithering_fragment:dp,dithering_pars_fragment:up,roughnessmap_fragment:fp,roughnessmap_pars_fragment:pp,shadowmap_pars_fragment:mp,shadowmap_pars_vertex:gp,shadowmap_vertex:xp,shadowmask_pars_fragment:_p,skinbase_vertex:vp,skinning_pars_vertex:Mp,skinning_vertex:yp,skinnormal_vertex:Sp,specularmap_fragment:bp,specularmap_pars_fragment:wp,tonemapping_fragment:Ep,tonemapping_pars_fragment:Tp,transmission_fragment:Ap,transmission_pars_fragment:Rp,uv_pars_fragment:Cp,uv_pars_vertex:Pp,uv_vertex:Lp,worldpos_vertex:Dp,background_vert:Ip,background_frag:Np,backgroundCube_vert:Up,backgroundCube_frag:Fp,cube_vert:Op,cube_frag:Bp,depth_vert:zp,depth_frag:kp,distance_vert:Gp,distance_frag:Hp,equirect_vert:Vp,equirect_frag:Wp,linedashed_vert:Xp,linedashed_frag:qp,meshbasic_vert:Yp,meshbasic_frag:$p,meshlambert_vert:Kp,meshlambert_frag:Zp,meshmatcap_vert:Jp,meshmatcap_frag:Qp,meshnormal_vert:jp,meshnormal_frag:em,meshphong_vert:tm,meshphong_frag:im,meshphysical_vert:nm,meshphysical_frag:sm,meshtoon_vert:am,meshtoon_frag:rm,points_vert:om,points_frag:lm,shadow_vert:cm,shadow_frag:hm,sprite_vert:dm,sprite_frag:um},_e={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Gi={basic:{uniforms:ei([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:ei([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Se(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:ei([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:ei([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:ei([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:ei([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:ei([_e.points,_e.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:ei([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:ei([_e.common,_e.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:ei([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:ei([_e.sprite,_e.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:ei([_e.common,_e.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:ei([_e.lights,_e.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Gi.physical={uniforms:ei([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Pa={r:0,b:0,g:0},fm=new rt,Ah=new He;Ah.set(-1,0,0,0,1,0,0,0,1);function pm(s,e,t,i,n,a){const r=new Se(0);let o=n===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){const b=v.backgroundBlurriness>0;w=e.get(w,b)}return w}function p(v){let w=!1;const b=f(v);b===null?g(r,o):b&&b.isColor&&(g(b,1),w=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(s.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,w){const b=f(w);b&&b.isCubeTexture?(c===void 0&&(c=new ce(new Ze(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:ls(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(fm.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ah),c.material.toneMapped=et.getTransfer(b.colorSpace)!==ht,(h!==b||d!==b.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ce(new ti(2,2),new Zt({name:"BackgroundMaterial",uniforms:ls(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=et.getTransfer(b.colorSpace)!==ht,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,w){v.getRGB(Pa,vh(s)),t.buffers.color.setClear(Pa.r,Pa.g,Pa.b,w,a)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,w=1){r.set(v),o=w,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(r,o)},render:p,addToRenderList:x,dispose:m}}function mm(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null);let a=n,r=!1;function o(N,F,G,I,z){let $=!1;const P=d(N,I,G,F);a!==P&&(a=P,c(a.object)),$=f(N,I,G,z),$&&p(N,I,G,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),($||r)&&(r=!1,b(N,F,G,I),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return s.createVertexArray()}function c(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function d(N,F,G,I){const z=I.wireframe===!0;let $=i[F.id];$===void 0&&($={},i[F.id]=$);const P=N.isInstancedMesh===!0?N.id:0;let X=$[P];X===void 0&&(X={},$[P]=X);let V=X[G.id];V===void 0&&(V={},X[G.id]=V);let q=V[z];return q===void 0&&(q=u(l()),V[z]=q),q}function u(N){const F=[],G=[],I=[];for(let z=0;z<t;z++)F[z]=0,G[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:I,object:N,attributes:{},index:null}}function f(N,F,G,I){const z=a.attributes,$=F.attributes;let P=0;const X=G.getAttributes();for(const V in X)if(X[V].location>=0){const K=z[V];let me=$[V];if(me===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(me=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(me=N.instanceColor)),K===void 0||K.attribute!==me||me&&K.data!==me.data)return!0;P++}return a.attributesNum!==P||a.index!==I}function p(N,F,G,I){const z={},$=F.attributes;let P=0;const X=G.getAttributes();for(const V in X)if(X[V].location>=0){let K=$[V];K===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(K=N.instanceColor));const me={};me.attribute=K,K&&K.data&&(me.data=K.data),z[V]=me,P++}a.attributes=z,a.attributesNum=P,a.index=I}function x(){const N=a.newAttributes;for(let F=0,G=N.length;F<G;F++)N[F]=0}function g(N){m(N,0)}function m(N,F){const G=a.newAttributes,I=a.enabledAttributes,z=a.attributeDivisors;G[N]=1,I[N]===0&&(s.enableVertexAttribArray(N),I[N]=1),z[N]!==F&&(s.vertexAttribDivisor(N,F),z[N]=F)}function v(){const N=a.newAttributes,F=a.enabledAttributes;for(let G=0,I=F.length;G<I;G++)F[G]!==N[G]&&(s.disableVertexAttribArray(G),F[G]=0)}function w(N,F,G,I,z,$,P){P===!0?s.vertexAttribIPointer(N,F,G,z,$):s.vertexAttribPointer(N,F,G,I,z,$)}function b(N,F,G,I){x();const z=I.attributes,$=G.getAttributes(),P=F.defaultAttributeValues;for(const X in $){const V=$[X];if(V.location>=0){let q=z[X];if(q===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(q=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(q=N.instanceColor)),q!==void 0){const K=q.normalized,me=q.itemSize,Ve=e.get(q);if(Ve===void 0)continue;const Q=Ve.buffer,ve=Ve.type,Ee=Ve.bytesPerElement,Fe=ve===s.INT||ve===s.UNSIGNED_INT||q.gpuType===Wo;if(q.isInterleavedBufferAttribute){const Me=q.data,Xe=Me.isInterleavedBuffer===!0?Me.stride:Me.itemSize,Tt=q.offset;if(Me.isInstancedInterleavedBuffer||Me.isInstancedBufferAttribute){for(let ze=0;ze<V.locationSize;ze++)m(V.location+ze,Me.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ze=0;ze<V.locationSize;ze++)g(V.location+ze);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let ze=0;ze<V.locationSize;ze++)w(V.location+ze,me/V.locationSize,ve,K,Xe*Ee,(Tt+me/V.locationSize*ze)*Ee,Fe)}else{if(q.isInstancedBufferAttribute){for(let Me=0;Me<V.locationSize;Me++)m(V.location+Me,q.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Me=0;Me<V.locationSize;Me++)g(V.location+Me);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let Me=0;Me<V.locationSize;Me++)w(V.location+Me,me/V.locationSize,ve,K,me*Ee,me/V.locationSize*Me*Ee,Fe)}}else if(P!==void 0){const K=P[X];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(V.location,K);break;case 3:s.vertexAttrib3fv(V.location,K);break;case 4:s.vertexAttrib4fv(V.location,K);break;default:s.vertexAttrib1fv(V.location,K)}}}}v()}function A(){L();for(const N in i){const F=i[N];for(const G in F){const I=F[G];for(const z in I){const $=I[z];for(const P in $)h($[P].object),delete $[P];delete I[z]}}delete i[N]}}function E(N){if(i[N.id]===void 0)return;const F=i[N.id];for(const G in F){const I=F[G];for(const z in I){const $=I[z];for(const P in $)h($[P].object),delete $[P];delete I[z]}}delete i[N.id]}function _(N){for(const F in i){const G=i[F];for(const I in G){const z=G[I];if(z[N.id]===void 0)continue;const $=z[N.id];for(const P in $)h($[P].object),delete $[P];delete z[N.id]}}}function S(N){for(const F in i){const G=i[F],I=N.isInstancedMesh===!0?N.id:0,z=G[I];if(z!==void 0){for(const $ in z){const P=z[$];for(const X in P)h(P[X].object),delete P[X];delete z[$]}delete G[I],Object.keys(G).length===0&&delete i[F]}}}function L(){C(),r=!0,a!==n&&(a=n,c(a.object))}function C(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:L,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function gm(s,e,t){let i;function n(l){i=l}function a(l,c){s.drawArrays(i,l,c),t.update(c,i,1)}function r(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=n,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function xm(s,e,t,i){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(_){return!(_!==Hi&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const S=_===oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==_i&&_!==Ui&&!S&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&ke("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:b,maxSamples:A,samples:E}}function _m(s){const e=this;let t=null,i=0,n=!1,a=!1;const r=new cn,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!n||p===null||p.length===0||a&&!g)a?h(null):c();else{const v=a?0:i,w=v*4;let b=m.clippingState||null;l.value=b,b=h(p,u,w,f);for(let A=0;A!==w;++A)b[A]=t[A];m.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,p){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,p!==!0||g===null){const m=f+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,b=f;w!==x;++w,b+=4)r.copy(d[w]).applyMatrix4(v,o),r.normal.toArray(g,b),g[b+3]=r.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}class ol extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new gh(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ze(5,5,5),a=new Zt({name:"CubemapFromEquirect",uniforms:ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ii,blending:Cn});a.uniforms.tEquirect.value=t;const r=new ce(n,a),o=t.minFilter;return t.minFilter===un&&(t.minFilter=ri),new Do(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,n);e.setRenderTarget(a)}}const fc=256,vm=3,Mm=20,Rh=256,Ch=16,ym=3,Sm=new R,bm=new Se;class tr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Do(1,10,null),this._boxMesh=new ce(new Ze(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,n=100,a={}){const{size:r=256,position:o=Sm}=a,l=this._renderer;this._setSize(r);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(bm));const g=new Do(i,n,h);return g.position.copy(o),g.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(fc,rh(e))}_fromTexture(e,t){e.mapping===ss||e.mapping===Vs?this._setSize(e.image.length===0?fc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=pc(e,!1,!1),i=Math.log2(e)-vm;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=pc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const n=this._boxMesh,a=this._cubeCamera;n.material=i,a.renderTarget=e,a.activeMipmapLevel=t;const r=e.width>>t;e.viewport.set(0,0,r,r),a.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ss||e.mapping===Vs?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=mc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=wm(),this._integrationMaterial=Em());const t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;const a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(t/Ch);for(let r=0;r<=i;r++){const o=tr.lodToRoughness(r,i);if(r>i-ym)a.roughness.value=o,this._renderCube(e,r,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(Rh*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Tm());const i=this._blurMaterial,n=i.uniforms,a=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=a.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(a,0,i)}}function pc(s,e,t){return new ol(s,{minFilter:un,generateMipmaps:e,type:oi,colorSpace:$a,depthBuffer:t})}function Qs(s,e,t){return new Zt({name:s,uniforms:e,vertexShader:Ke.cube_vert,fragmentShader:t,side:ii,blending:Cn,depthTest:!1,depthWrite:!1})}function wm(){return Qs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Rh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Em(){return Qs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ch}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Tm(){return Qs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Mm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function mc(){return Qs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function gc(){return Qs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Am(s){let e=new WeakMap,t=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?r(u):a(u)}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===dr||f===ur)if(e.has(u)){const p=e.get(u).texture;return o(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const x=new ol(p.height);return x.fromEquirectangularTexture(s,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const f=u.mapping,p=f===dr||f===ur,x=f===ss||f===Vs;if(p||x){let g=t.get(u);const m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new tr(s)),g=p?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{const v=u.image;return p&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new tr(s)),g=p?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===dr?u.mapping=ss:f===ur&&(u.mapping=Vs),u}function l(u){let f=0;const p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){const f=u.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function Rm(s){const e={};function t(i){if(e[i]!==void 0)return e[i];const n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&ka("WebGLRenderer: "+i+" extension not supported."),n}}}function Cm(s,e,t,i){const n={},a=new WeakMap,r=new FinalizationRegistry(p=>delete n[p]);function o(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete n[p.id],r.unregister(p);const x=a.get(p);x&&(e.remove(x),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return n[x.id]!==void 0||(x.addEventListener("dispose",o),n[x.id]=new WeakRef(x),r.register(x,x.id,x),t.memory.geometries++),x}function h(p){const x=p.attributes;for(const g in x)e.update(x[g],s.ARRAY_BUFFER)}function d(p){const x=p.index,g=p.attributes.position;let m=0;if(g===void 0)return;const v=x!==null?x.array.length:g.array.length/3-1,w=g.count>=65535?dh:hh,b=new w(Math.ceil(v/3)*6,1),A=b.array;if(x!==null){const _=x.array;m=x.version;for(let S=0,L=0;S<v;S+=3){const C=_[S+0],N=_[S+1],F=_[S+2];A[L++]=C,A[L++]=N,A[L++]=N,A[L++]=F,A[L++]=F,A[L++]=C}}else{m=g.version;for(let _=0,S=0;_<v;_+=3){const L=_+0,C=_+1,N=_+2;A[S++]=L,A[S++]=C,A[S++]=C,A[S++]=N,A[S++]=N,A[S++]=L}}b.version=m;const E=a.get(p);E&&e.remove(E),a.set(p,b)}function u(p){const x=a.get(p);if(x){const g=p.index;g!==null&&x.version<g.version&&d(p)}else d(p);return a.get(p)}function f(){for(const p in n){const x=n[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Pm(s,e,t){let i;function n(d){i=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,u){s.drawElements(i,u,a,d*r),t.update(u,i,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(i,u,a,d*r,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];t.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Lm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(t.calls++,r){case s.TRIANGLES:t.triangles+=o*(a/3);break;case s.LINES:t.lines+=o*(a/2);break;case s.LINE_STRIP:t.lines+=o*(a-1);break;case s.LINE_LOOP:t.lines+=o*a;break;case s.POINTS:t.points+=o*a;break;default:at("WebGLInfo: Unknown draw mode:",r);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Dm(s,e,t){const i=new WeakMap,n=new bt;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let C=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var f=C;u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),x===!0&&(b=2),g===!0&&(b=3);let A=o.attributes.position.count*b,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const _=new Float32Array(A*E*4*d),S=new oh(_,A,E,d);S.type=Ui,S.needsUpdate=!0;const L=b*4;for(let N=0;N<d;N++){const F=m[N],G=v[N],I=w[N],z=A*E*4*N;for(let $=0;$<F.count;$++){const P=$*L;p===!0&&(n.fromBufferAttribute(F,$),_[z+P+0]=n.x,_[z+P+1]=n.y,_[z+P+2]=n.z,_[z+P+3]=0),x===!0&&(n.fromBufferAttribute(G,$),_[z+P+4]=n.x,_[z+P+5]=n.y,_[z+P+6]=n.z,_[z+P+7]=0),g===!0&&(n.fromBufferAttribute(I,$),_[z+P+8]=n.x,_[z+P+9]=n.y,_[z+P+10]=n.z,_[z+P+11]=I.itemSize===4?n.w:1)}}u={count:d,texture:S,size:new Ce(A,E)},i.set(o,u),o.addEventListener("dispose",C)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:a}}function Im(s,e,t,i,n){let a=new WeakMap;function r(c){const h=n.render.frame,d=c.geometry,u=e.get(c,d);if(a.get(u)!==h&&(e.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;a.get(f)!==h&&(f.update(),a.set(f,h))}return u}function o(){a=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}const Nm={[Bo]:"LINEAR_TONE_MAPPING",[zo]:"REINHARD_TONE_MAPPING",[ko]:"CINEON_TONE_MAPPING",[Zs]:"ACES_FILMIC_TONE_MAPPING",[Ho]:"AGX_TONE_MAPPING",[Vo]:"NEUTRAL_TONE_MAPPING",[Go]:"CUSTOM_TONE_MAPPING"};function Um(s,e,t,i,n,a){const r=new li(e,t,{type:s,depthBuffer:n,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new xt;h.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new tt([0,2,0,0,2,0],2));const d=new Mh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ce(h,d),f=new rl(-1,1,1,-1,0,1);let p=null,x=null,g=!1,m,v=null,w=[],b=!1;this.setSize=function(A,E){r.setSize(A,E),o!==null&&o.setSize(A,E),l!==null&&l.setSize(A,E);for(let _=0;_<w.length;_++){const S=w[_];S.setSize&&S.setSize(A,E)}},this.setEffects=function(A){w=A,b=w.length>0&&w[0].isRenderPass===!0;const E=r.width,_=r.height;w.length>0&&o===null&&(o=new li(E,_,{type:oi,depthBuffer:!1,stencilBuffer:!1}),l=new li(E,_,{type:oi,depthBuffer:!1,stencilBuffer:!1}));const S=n===!0&&w.some(L=>L.needsDepthTexture===!0);S!==(r.depthTexture!==null)&&(S===!0&&c===null&&(c=new os(E,_),a===!0&&(c.format=fn,c.type=rs)),r.dispose(),r.depthTexture=S?c:null,r.resolveDepthBuffer=S,r.storeMultisampledDepthBuffer=S);for(let L=0;L<w.length;L++){const C=w[L];C.setSize&&C.setSize(E,_),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,E){if(g||A.toneMapping===Ji&&w.length===0)return!1;if(v=E,E!==null){const _=E.width,S=E.height;(r.width!==_||r.height!==S)&&this.setSize(_,S)}return b===!1&&A.setRenderTarget(r),m=A.toneMapping,A.toneMapping=Ji,!0},this.hasRenderPass=function(){return b},this.end=function(A,E){A.toneMapping=m,g=!0;let _=r,S=o;for(let L=0;L<w.length;L++){const C=w[L];C.enabled!==!1&&(C.render(A,S,_,E),C.needsSwap!==!1&&(_=S,S=S===o?l:o))}if(p!==A.outputColorSpace||x!==A.toneMapping){p=A.outputColorSpace,x=A.toneMapping,d.defines={},et.getTransfer(p)===ht&&(d.defines.SRGB_TRANSFER="");const L=Nm[x];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(v),A.render(u,f),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const Ph=new Jt,Lh=new os(1,1),Dh=new xh(1),Ih=new oh,Nh=new Qd,Uh=new gh,xc=[],_c=[],vc=new Float32Array(16),Mc=new Float32Array(9),yc=new Float32Array(4);function hs(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let a=xc[n];if(a===void 0&&(a=new Float32Array(n),xc[n]=a),e!==0){i.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,s[r].toArray(a,o)}return a}function Dt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function It(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function or(s,e){let t=_c[e];t===void 0&&(t=new Int32Array(e),_c[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Fm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Om(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2fv(this.addr,e),It(t,e)}}function Bm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;s.uniform3fv(this.addr,e),It(t,e)}}function zm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4fv(this.addr,e),It(t,e)}}function km(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;yc.set(i),s.uniformMatrix2fv(this.addr,!1,yc),It(t,i)}}function Gm(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Mc.set(i),s.uniformMatrix3fv(this.addr,!1,Mc),It(t,i)}}function Hm(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;vc.set(i),s.uniformMatrix4fv(this.addr,!1,vc),It(t,i)}}function Vm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Wm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2iv(this.addr,e),It(t,e)}}function Xm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3iv(this.addr,e),It(t,e)}}function qm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4iv(this.addr,e),It(t,e)}}function Ym(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function $m(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2uiv(this.addr,e),It(t,e)}}function Km(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3uiv(this.addr,e),It(t,e)}}function Zm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4uiv(this.addr,e),It(t,e)}}function lr(s){return s.version===0&&(s.compareFunction=nh,s.needsUpdate=!0),s}function Jm(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let a;this.type===s.SAMPLER_2D_SHADOW?a=lr(Lh):a=Ph,t.setTexture2D(e||a,n)}function Qm(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Nh,n)}function jm(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let a;this.type===s.SAMPLER_CUBE_SHADOW?a=lr(Dh):a=Uh,t.setTextureCube(e||a,n)}function e0(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Ih,n)}function t0(s){switch(s){case 5126:return Fm;case 35664:return Om;case 35665:return Bm;case 35666:return zm;case 35674:return km;case 35675:return Gm;case 35676:return Hm;case 5124:case 35670:return Vm;case 35667:case 35671:return Wm;case 35668:case 35672:return Xm;case 35669:case 35673:return qm;case 5125:return Ym;case 36294:return $m;case 36295:return Km;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return jm;case 36289:case 36303:case 36311:case 36292:return e0}}function i0(s,e){s.uniform1fv(this.addr,e)}function n0(s,e){const t=hs(e,this.size,2);s.uniform2fv(this.addr,t)}function s0(s,e){const t=hs(e,this.size,3);s.uniform3fv(this.addr,t)}function a0(s,e){const t=hs(e,this.size,4);s.uniform4fv(this.addr,t)}function r0(s,e){const t=hs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function o0(s,e){const t=hs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function l0(s,e){const t=hs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function c0(s,e){s.uniform1iv(this.addr,e)}function h0(s,e){s.uniform2iv(this.addr,e)}function d0(s,e){s.uniform3iv(this.addr,e)}function u0(s,e){s.uniform4iv(this.addr,e)}function f0(s,e){s.uniform1uiv(this.addr,e)}function p0(s,e){s.uniform2uiv(this.addr,e)}function m0(s,e){s.uniform3uiv(this.addr,e)}function g0(s,e){s.uniform4uiv(this.addr,e)}function x0(s,e,t){const i=this.cache,n=e.length,a=or(t,n);Dt(i,a)||(s.uniform1iv(this.addr,a),It(i,a));let r;this.type===s.SAMPLER_2D_SHADOW?r=lr(Lh):r=Ph;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||r,a[o])}function _0(s,e,t){const i=this.cache,n=e.length,a=or(t,n);Dt(i,a)||(s.uniform1iv(this.addr,a),It(i,a));for(let r=0;r!==n;++r)t.setTexture3D(e[r]||Nh,a[r])}function v0(s,e,t){const i=this.cache,n=e.length,a=or(t,n);Dt(i,a)||(s.uniform1iv(this.addr,a),It(i,a));let r;this.type===s.SAMPLER_CUBE_SHADOW?r=lr(Dh):r=Uh;for(let o=0;o!==n;++o)t.setTextureCube(e[o]||r,a[o])}function M0(s,e,t){const i=this.cache,n=e.length,a=or(t,n);Dt(i,a)||(s.uniform1iv(this.addr,a),It(i,a));for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Ih,a[r])}function y0(s){switch(s){case 5126:return i0;case 35664:return n0;case 35665:return s0;case 35666:return a0;case 35674:return r0;case 35675:return o0;case 35676:return l0;case 5124:case 35670:return c0;case 35667:case 35671:return h0;case 35668:case 35672:return d0;case 35669:case 35673:return u0;case 5125:return f0;case 36294:return p0;case 36295:return m0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return _0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return M0}}class S0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=t0(t.type)}}class b0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=y0(t.type)}}class w0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let a=0,r=n.length;a!==r;++a){const o=n[a];o.setValue(e,t[o.id],i)}}}const zr=/(\w+)(\])?(\[|\.)?/g;function Sc(s,e){s.seq.push(e),s.map[e.id]=e}function E0(s,e,t){const i=s.name,n=i.length;for(zr.lastIndex=0;;){const a=zr.exec(i),r=zr.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===n){Sc(t,c===void 0?new S0(o,s,e):new b0(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new w0(o),Sc(t,d)),t=d}}}class Ga{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);E0(o,l,this)}const n=[],a=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(r):a.push(r);n.length>0&&(this.seq=n.concat(a))}setValue(e,t,i,n){const a=this.map[t];a!==void 0&&a.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,a=e.length;n!==a;++n){const r=e[n];r.id in t&&i.push(r)}return i}}function bc(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const T0=37297;let A0=0;function R0(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=n;r<a;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}const wc=new He;function C0(s){et._getMatrix(wc,et.workingColorSpace,s);const e=`mat3( ${wc.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(s)){case Ka:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ec(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),a=(s.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+R0(s.getShaderSource(e),o)}else return a}function P0(s,e){const t=C0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const L0={[Bo]:"Linear",[zo]:"Reinhard",[ko]:"Cineon",[Zs]:"ACESFilmic",[Ho]:"AgX",[Vo]:"Neutral",[Go]:"Custom"};function D0(s,e){const t=L0[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const La=new R;function I0(){et.getLuminanceCoefficients(La);const s=La.x.toFixed(4),e=La.y.toFixed(4),t=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function U0(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function F0(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=s.getActiveAttrib(e,n),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:s.getAttribLocation(e,r),locationSize:o}}return t}function Ps(s){return s!==""}function Tc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ac(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const O0=/^[ \t]*#include +<([\w\d./]+)>/gm;function No(s){return s.replace(O0,B0)}function B0(s,e){const t=Ke[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return No(t)}const z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(s){return s.replace(z0,k0)}function k0(s,e,t,i){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Cc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const G0={[Is]:"SHADOWMAP_TYPE_PCF",[Rs]:"SHADOWMAP_TYPE_VSM"};function H0(s){return G0[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const V0={[Vs]:"ENVMAP_MODE_REFRACTION"};function W0(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":V0[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const X0={[Yc]:"ENVMAP_BLENDING_MULTIPLY",[gd]:"ENVMAP_BLENDING_MIX",[xd]:"ENVMAP_BLENDING_ADD"};function q0(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":X0[s.combine]||"ENVMAP_BLENDING_NONE"}function Y0(s,e,t,i){const n=s.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=H0(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=W0(t),d=q0(t),u=N0(t),f=U0(a),p=n.createProgram();let x,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ps).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ps).join(`
`),g.length>0&&(g+=`
`)):(x=[Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),g=[Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Ji?D0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,P0("linearToOutputTexel",t.outputColorSpace),I0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ps).join(`
`)),r=No(r),r=Tc(r,t),r=Ac(r,t),o=No(o),o=Tc(o,t),o=Ac(o,t),r=Rc(r),o=Rc(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=m+x+r,w=m+g+o,b=bc(n,n.VERTEX_SHADER,v),A=bc(n,n.FRAGMENT_SHADER,w);n.attachShader(p,b),n.attachShader(p,A),t.index0AttributeName!==void 0?n.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function E(C){if(s.debug.checkShaderErrors){const N=n.getProgramInfoLog(p)||"",F=n.getShaderInfoLog(b)||"",G=n.getShaderInfoLog(A)||"",I=N.trim(),z=F.trim(),$=G.trim();let P=!0,X=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(P=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,p,b,A);else{const V=Ec(n,b,"vertex"),q=Ec(n,A,"fragment");at("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+V+`
`+q)}else I!==""?ke("WebGLProgram: Program Info Log:",I):(z===""||$==="")&&(X=!1);X&&(C.diagnostics={runnable:P,programLog:I,vertexShader:{log:z,prefix:x},fragmentShader:{log:$,prefix:g}})}n.deleteShader(b),n.deleteShader(A),_=new Ga(n,p),S=F0(n,p)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=n.getProgramParameter(p,T0)),L},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=A0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=A,this}let $0=0;class K0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Z0(e),t.set(e,i)),i}}class Z0{constructor(e){this.id=$0++,this.code=e,this.usedTimes=0}}function J0(s){return s===Pn||s===qa||s===Ya}function Q0(s,e,t,i,n,a){const r=new tl,o=new K0,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,S,L,C,N,F){const G=C.fog,I=N.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,P=e.get(_.envMap||z,$),X=u[_.type];let V=i.precision;_.precision!==null&&(V=i.getMaxPrecision(_.precision),V!==_.precision&&ke("WebGLProgram.getParameters:",_.precision,"not supported, using",V,"instead."));const q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,K=q!==void 0?q.length:0;let me=0;I.morphAttributes.position!==void 0&&(me=1),I.morphAttributes.normal!==void 0&&(me=2),I.morphAttributes.color!==void 0&&(me=3);let Ve,Q,ve,Ee;if(X){const xe=Gi[X];Ve=xe.vertexShader,Q=xe.fragmentShader}else{Ve=_.vertexShader,Q=_.fragmentShader;const xe=o.getVertexShaderStage(_),ut=o.getFragmentShaderStage(_);o.update(_,xe,ut),ve=xe.id,Ee=ut.id}const Fe=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),Xe=N.isInstancedMesh===!0,Tt=N.isBatchedMesh===!0,ze=!!_.map,dt=!!_.matcap,mt=!!P,Je=mt&&P.isPMREMTexture===!0,Gt=!!_.aoMap,Ct=!!_.lightMap,ni=!!_.bumpMap&&_.wireframe===!1,yt=!!_.normalMap,Oi=!!_.displacementMap,Nt=!!_.emissiveMap,Mi=!!_.metalnessMap,yi=!!_.roughnessMap,Si=_.anisotropy>0,O=_.clearcoat>0,bi=_.diffuseRoughness>0,vt=_.dispersion>0,Mt=_.retroreflectivity>0,ge=_.iridescence>0,Pt=_.sheen>0,Oe=_.transmission>0,Ge=Si&&!!_.anisotropyMap,T=O&&!!_.clearcoatMap,M=O&&!!_.clearcoatNormalMap,k=O&&!!_.clearcoatRoughnessMap,ne=bi&&!!_.diffuseRoughnessMap,ee=ge&&!!_.iridescenceMap,oe=ge&&!!_.iridescenceThicknessMap,fe=Pt&&!!_.sheenColorMap,Z=Pt&&!!_.sheenRoughnessMap,J=!!_.specularMap,he=!!_.specularColorMap,D=!!_.specularIntensityMap,j=Oe&&!!_.transmissionMap,Y=Oe&&!!_.thicknessMap,de=!!_.gradientMap,ae=!!_.alphaMap,le=_.alphaTest>0,Pe=!!_.alphaHash,$e=!!_.extensions;let se=Ji;_.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(se=s.toneMapping);const Ie=Je?P.isCompressedCubeTexture?P.image[0].mipmaps:P.mipmaps:null,Ye={shaderID:X,shaderType:_.type,shaderName:_.name,vertexShader:Ve,fragmentShader:Q,defines:_.defines,customVertexShaderID:ve,customFragmentShaderID:Ee,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:V,batching:Tt,batchingColor:Tt&&N._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&N.instanceColor!==null,instancingMorph:Xe&&N.morphTexture!==null,outputColorSpace:Fe===null?s.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ze,matcap:dt,envMap:mt,envMapMode:mt&&P.mapping,envMapPMREM:Je,envMapMaxLod:Je?Ie.length-1:null,envMapSize:Je?Ie[0].width:null,aoMap:Gt,lightMap:Ct,bumpMap:ni,normalMap:yt,displacementMap:Oi,emissiveMap:Nt,normalMapObjectSpace:yt&&_.normalMapType===Md,normalMapTangentSpace:yt&&_.normalMapType===Co,packedNormalMap:yt&&_.normalMapType===Co&&J0(_.normalMap.format),metalnessMap:Mi,roughnessMap:yi,anisotropy:Si,anisotropyMap:Ge,clearcoat:O,clearcoatMap:T,clearcoatNormalMap:M,clearcoatRoughnessMap:k,diffuseRoughness:bi,diffuseRoughnessMap:ne,dispersion:vt,retroreflection:Mt,iridescence:ge,iridescenceMap:ee,iridescenceThicknessMap:oe,sheen:Pt,sheenColorMap:fe,sheenRoughnessMap:Z,specularMap:J,specularColorMap:he,specularIntensityMap:D,transmission:Oe,transmissionMap:j,thicknessMap:Y,gradientMap:de,opaque:_.transparent===!1&&_.blending===Ns&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:le,alphaHash:Pe,combine:_.combine,mapUv:ze&&f(_.map.channel),aoMapUv:Gt&&f(_.aoMap.channel),lightMapUv:Ct&&f(_.lightMap.channel),bumpMapUv:ni&&f(_.bumpMap.channel),normalMapUv:yt&&f(_.normalMap.channel),displacementMapUv:Oi&&f(_.displacementMap.channel),emissiveMapUv:Nt&&f(_.emissiveMap.channel),metalnessMapUv:Mi&&f(_.metalnessMap.channel),roughnessMapUv:yi&&f(_.roughnessMap.channel),anisotropyMapUv:Ge&&f(_.anisotropyMap.channel),clearcoatMapUv:T&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(_.sheenRoughnessMap.channel),specularMapUv:J&&f(_.specularMap.channel),specularColorMapUv:he&&f(_.specularColorMap.channel),specularIntensityMapUv:D&&f(_.specularIntensityMap.channel),transmissionMapUv:j&&f(_.transmissionMap.channel),thicknessMapUv:Y&&f(_.thicknessMap.channel),alphaMapUv:ae&&f(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(yt||Si),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(ze||ae),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&yt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:me,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.filter(xe=>xe.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:se,decodeVideoTexture:ze&&_.map.isVideoTexture===!0&&et.getTransfer(_.map.colorSpace)===ht,decodeVideoTextureEmissive:Nt&&_.emissiveMap.isVideoTexture===!0&&et.getTransfer(_.emissiveMap.colorSpace)===ht,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ft,flipSided:_.side===ii,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:$e&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&_.extensions.multiDraw===!0||Tt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ye.vertexUv1s=l.has(1),Ye.vertexUv2s=l.has(2),Ye.vertexUv3s=l.has(3),l.clear(),Ye}function x(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)S.push(L),S.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(g(S,_),m(S,_),S.push(s.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function g(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function m(_,S){r.disableAll(),S.instancing&&r.enable(0),S.instancingColor&&r.enable(1),S.instancingMorph&&r.enable(2),S.matcap&&r.enable(3),S.envMap&&r.enable(4),S.normalMapObjectSpace&&r.enable(5),S.normalMapTangentSpace&&r.enable(6),S.clearcoat&&r.enable(7),S.iridescence&&r.enable(8),S.alphaTest&&r.enable(9),S.vertexColors&&r.enable(10),S.vertexAlphas&&r.enable(11),S.vertexUv1s&&r.enable(12),S.vertexUv2s&&r.enable(13),S.vertexUv3s&&r.enable(14),S.vertexTangents&&r.enable(15),S.anisotropy&&r.enable(16),S.alphaHash&&r.enable(17),S.batching&&r.enable(18),S.dispersion&&r.enable(19),S.retroreflection&&r.enable(24),S.diffuseRoughness&&r.enable(25),S.batchingColor&&r.enable(20),S.gradientMap&&r.enable(21),S.packedNormalMap&&r.enable(22),S.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),S.fog&&r.enable(0),S.useFog&&r.enable(1),S.flatShading&&r.enable(2),S.logarithmicDepthBuffer&&r.enable(3),S.reversedDepthBuffer&&r.enable(4),S.skinning&&r.enable(5),S.morphTargets&&r.enable(6),S.morphNormals&&r.enable(7),S.morphColors&&r.enable(8),S.premultipliedAlpha&&r.enable(9),S.shadowMapEnabled&&r.enable(10),S.doubleSided&&r.enable(11),S.flipSided&&r.enable(12),S.useDepthPacking&&r.enable(13),S.dithering&&r.enable(14),S.transmission&&r.enable(15),S.sheen&&r.enable(16),S.opaque&&r.enable(17),S.pointsUvs&&r.enable(18),S.decodeVideoTexture&&r.enable(19),S.decodeVideoTextureEmissive&&r.enable(20),S.alphaToCoverage&&r.enable(21),S.numLightProbeGrids>0&&r.enable(22),S.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function v(_){const S=u[_.type];let L;if(S){const C=Gi[S];L=$s.clone(C.uniforms)}else L=_.uniforms;return L}function w(_,S){let L=h.get(S);return L!==void 0?++L.usedTimes:(L=new Y0(s,S,_,n),c.push(L),h.set(S,L)),L}function b(_){if(--_.usedTimes===0){const S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function E(){o.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:v,acquireProgram:w,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:E}}function j0(){let s=new WeakMap;function e(r){return s.has(r)}function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function i(r){s.delete(r)}function n(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:a}}function eg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Pc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Lc(){const s=[];let e=0;const t=[],i=[],n=[];function a(){e=0,t.length=0,i.length=0,n.length=0}function r(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,x,g,m){let v=s[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,materialVariant:r(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},s[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.materialVariant=r(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=g,v.group=m),e++,v}function l(u,f,p,x,g,m,v){v.reversedDepth===!0&&(g=-g);const w=o(u,f,p,x,g,m);p.transmission>0?i.push(w):p.transparent===!0?n.push(w):t.push(w)}function c(u,f,p,x,g,m){const v=o(u,f,p,x,g,m);p.transmission>0?i.unshift(v):p.transparent===!0?n.unshift(v):t.unshift(v)}function h(u,f){t.length>1&&t.sort(u||eg),i.length>1&&i.sort(f||Pc),n.length>1&&n.sort(f||Pc)}function d(){for(let u=e,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:a,push:l,unshift:c,finish:d,sort:h}}function tg(){let s=new WeakMap;function e(i,n){const a=s.get(i);let r;return a===void 0?(r=new Lc,s.set(i,[r])):n>=a.length?(r=new Lc,a.push(r)):r=a[n],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function ig(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new Se};break;case"SpotLight":t={position:new R,direction:new R,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function ng(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let sg=0;function ag(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function rg(s){const e=new ig,t=ng(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);const n=new R,a=new rt,r=new rt;function o(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,v=0,w=0,b=0,A=0,E=0,_=0,S=0,L=0,C=0;c.sort(ag);for(let F=0,G=c.length;F<G;F++){const I=c[F],z=I.color,$=I.intensity,P=I.distance;let X=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Pn?X=I.shadow.map.texture:X=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=z.r*$,d+=z.g*$,u+=z.b*$;else if(I.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],$);C++}else if(I.isSunLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const q=I.shadow,K=t.get(I);K.shadowIntensity=q.intensity,K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),i.sunShadow[p]=K,i.sunShadowMap[p]=X;const me=q.getViewportCount();for(let Ve=0;Ve<me;Ve++)i.sunShadowMatrix[x+Ve]=q.getMatrix(Ve),i.sunShadowCascade[x+Ve]=q._cascadeData[Ve];x+=me,p++}i.sun[f]=V,f++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const q=I.shadow,K=t.get(I);K.shadowIntensity=q.intensity,K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,i.directionalShadow[g]=K,i.directionalShadowMap[g]=X,i.directionalShadowMatrix[g]=I.shadow.matrix,A++}i.directional[g]=V,g++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(z).multiplyScalar($),V.distance=P,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[v]=V;const q=I.shadow;if(I.map&&(i.spotLightMap[S]=I.map,S++,q.updateMatrices(I),I.castShadow&&L++),i.spotLightMatrix[v]=q.matrix,I.castShadow){const K=t.get(I);K.shadowIntensity=q.intensity,K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,i.spotShadow[v]=K,i.spotShadowMap[v]=X,_++}v++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(z).multiplyScalar($),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[w]=V,w++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const q=I.shadow,K=t.get(I);K.shadowIntensity=q.intensity,K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,K.shadowCameraNear=q.camera.near,K.shadowCameraFar=q.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=I.shadow.matrix,E++}i.point[m]=V,m++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar($),V.groundColor.copy(I.groundColor).multiplyScalar($),i.hemi[b]=V,b++}}w>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const N=i.hash;(N.sunLength!==f||N.directionalLength!==g||N.pointLength!==m||N.spotLength!==v||N.rectAreaLength!==w||N.hemiLength!==b||N.numSunShadows!==p||N.numDirectionalShadows!==A||N.numPointShadows!==E||N.numSpotShadows!==_||N.numSpotMaps!==S||N.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=g,i.spot.length=v,i.rectArea.length=w,i.point.length=m,i.hemi.length=b,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+S-L,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=C,N.sunLength=f,N.directionalLength=g,N.pointLength=m,N.spotLength=v,N.rectAreaLength=w,N.hemiLength=b,N.numSunShadows=p,N.numDirectionalShadows=A,N.numPointShadows=E,N.numSpotShadows=_,N.numSpotMaps=S,N.numLightProbes=C,i.version=sg++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,g=0;const m=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){const b=c[v];if(b.isSunLight){const A=i.sun[d];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(m),d++}else if(b.isDirectionalLight){const A=i.directional[u];A.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(m),u++}else if(b.isSpotLight){const A=i.spot[p];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const A=i.rectArea[x];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),r.identity(),a.copy(b.matrixWorld),a.premultiply(m),r.extractRotation(a),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(r),A.halfHeight.applyMatrix4(r),x++}else if(b.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const A=i.hemi[g];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Dc(s){const e=new rg(s),t=[],i=[],n=[];function a(d){h.camera=d,t.length=0,i.length=0,n.length=0}function r(d){d.isLightProbeGrid?n.push(d):t.push(d)}function o(d){i.push(d)}function l(){e.setup(t),n.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:h,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function og(s){let e=new WeakMap;function t(n,a=0){const r=e.get(n);let o;return r===void 0?(o=new Dc(s),e.set(n,[o])):a>=r.length?(o=new Dc(s),r.push(o)):o=r[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,hg=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],dg=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Ic=new rt,bs=new R,kr=new R;function ug(s,e,t){let i=new Ys;const n=new Ce,a=new Ce,r=new bt,o=new Mu,l=new yu,c={},h=t.maxTextureSize,d={[pn]:ii,[ii]:pn,[ft]:ft},u=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:lg,fragmentShader:cg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const p=new xt;p.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ce(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Is;let m=this.type;this.render=function(E,_,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Jh&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Is);const L=s.getRenderTarget(),C=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Cn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const G=m!==this.type;G&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=E.length;I<z;I++){const $=E[I],P=$.shadow;if(P===void 0){ke("WebGLShadowMap:",$,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;n.copy(P.mapSize);const X=P.getFrameExtents();n.multiply(X),a.copy(P.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/X.x),n.x=a.x*X.x,P.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/X.y),n.y=a.y*X.y,P.mapSize.y=a.y));const V=s.state.buffers.depth.getReversed();if(P.camera._reversedDepth=V,P.map===null||G===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===Rs){if($.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new li(n.x,n.y,{format:Pn,type:oi,minFilter:ri,magFilter:ri,generateMipmaps:!1}),P.map.texture.name=$.name+".shadowMap",P.map.depthTexture=new os(n.x,n.y,Ui),P.map.depthTexture.name=$.name+".shadowMapDepth",P.map.depthTexture.format=mn,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Vt,P.map.depthTexture.magFilter=Vt}else $.isPointLight?(P.map=new ol(n.x),P.map.depthTexture=new xh(n.x,Vi)):(P.map=new li(n.x,n.y),P.map.depthTexture=new os(n.x,n.y,Vi)),P.map.depthTexture.name=$.name+".shadowMap",P.map.depthTexture.format=mn,this.type===Is?(P.map.depthTexture.compareFunction=V?ih:th,P.map.depthTexture.minFilter=ri,P.map.depthTexture.magFilter=ri):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Vt,P.map.depthTexture.magFilter=Vt);P.camera.updateProjectionMatrix()}P.map.isWebGLCubeRenderTarget!==!0&&(P.map.width!==n.x||P.map.height!==n.y)&&P.map.setSize(n.x,n.y);const q=P.map.isWebGLCubeRenderTarget?6:P.getViewportCount();$.isPointLight!==!0&&P.updateMatrices($,S);const K=(P.camera.layers.mask&4294967294)!==0?P.camera.layers:S.layers;for(let me=0;me<q;me++){const Ve=P.getCamera(me);if($.isPointLight){const Q=P.camera,ve=P.matrix,Ee=$.distance||Q.far;Ee!==Q.far&&(Q.far=Ee,Q.updateProjectionMatrix()),bs.setFromMatrixPosition($.matrixWorld),Q.position.copy(bs),kr.copy(Q.position),kr.add(hg[me]),Q.up.copy(dg[me]),Q.lookAt(kr),Q.updateMatrixWorld(),ve.makeTranslation(-bs.x,-bs.y,-bs.z),Ic.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),P._frustum.setFromProjectionMatrix(Ic,Q.coordinateSystem,Q.reversedDepth)}if(P.map.isWebGLCubeRenderTarget)s.setRenderTarget(P.map,me),s.clear();else{me===0&&(s.setRenderTarget(P.map),s.clear());const Q=P.getViewport(me);r.set(a.x*Q.x,a.y*Q.y,a.x*Q.z,a.y*Q.w),F.viewport(r)}i=P.getFrustum(me),b(_,S,Ve,$,K,this.type)}P.isPointLightShadow!==!0&&this.type===Rs&&v(P,S),P.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(L,C,N)};function v(E,_){const S=e.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new li(n.x,n.y,{format:Pn,type:oi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(_,null,S,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(_,null,S,f,x,null)}function w(E,_,S,L){let C=null;const N=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)C=N;else if(C=S.isPointLight===!0?l:o,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const F=C.uuid,G=_.uuid;let I=c[F];I===void 0&&(I={},c[F]=I);let z=I[G];z===void 0&&(z=C.clone(),I[G]=z,_.addEventListener("dispose",A)),C=z}if(C.visible=_.visible,C.wireframe=_.wireframe,L===Rs?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:d[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=s.properties.get(C);F.light=S}return C}function b(E,_,S,L,C,N){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Rs)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);const I=e.update(E),z=E.material;if(Array.isArray(z)){const $=I.groups;for(let P=0,X=$.length;P<X;P++){const V=$[P],q=z[V.materialIndex];if(q&&q.visible){const K=w(E,q,L,N);E.onBeforeShadow(s,E,_,S,I,K,V),s.renderBufferDirect(S,null,I,K,E,V),E.onAfterShadow(s,E,_,S,I,K,V)}}}else if(z.visible){const $=w(E,z,L,N);E.onBeforeShadow(s,E,_,S,I,$,null),s.renderBufferDirect(S,null,I,$,E,null),E.onAfterShadow(s,E,_,S,I,$,null)}}const G=E.children;for(let I=0,z=G.length;I<z;I++)b(G[I],_,S,L,C,N)}function A(E){E.target.removeEventListener("dispose",A);for(const S in c){const L=c[S],C=E.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}function fg(s,e){function t(){let D=!1;const j=new bt;let Y=null;const de=new bt(0,0,0,0);return{setMask:function(ae){Y!==ae&&!D&&(s.colorMask(ae,ae,ae,ae),Y=ae)},setLocked:function(ae){D=ae},setClear:function(ae,le,Pe,$e,se){se===!0&&(ae*=$e,le*=$e,Pe*=$e),j.set(ae,le,Pe,$e),de.equals(j)===!1&&(s.clearColor(ae,le,Pe,$e),de.copy(j))},reset:function(){D=!1,Y=null,de.set(-1,0,0,0)}}}function i(){let D=!1,j=!1,Y=null,de=null,ae=null;return{setReversed:function(le){if(j!==le){const Pe=e.get("EXT_clip_control");le?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),j=le;const $e=ae;ae=null,this.setClear($e)}},getReversed:function(){return j},setTest:function(le){le?Me(s.DEPTH_TEST):Xe(s.DEPTH_TEST)},setMask:function(le){Y!==le&&!D&&(s.depthMask(le),Y=le)},setFunc:function(le){if(j&&(le=Pd[le]),de!==le){switch(le){case Wr:s.depthFunc(s.NEVER);break;case Xr:s.depthFunc(s.ALWAYS);break;case qr:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case Yr:s.depthFunc(s.EQUAL);break;case $r:s.depthFunc(s.GEQUAL);break;case Kr:s.depthFunc(s.GREATER);break;case Zr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=le}},setLocked:function(le){D=le},setClear:function(le){ae!==le&&(ae=le,j&&(le=1-le),s.clearDepth(le))},reset:function(){D=!1,Y=null,de=null,ae=null,j=!1}}}function n(){let D=!1,j=null,Y=null,de=null,ae=null,le=null,Pe=null,$e=null,se=null;return{setTest:function(Ie){D||(Ie?Me(s.STENCIL_TEST):Xe(s.STENCIL_TEST))},setMask:function(Ie){j!==Ie&&!D&&(s.stencilMask(Ie),j=Ie)},setFunc:function(Ie,Ye,xe){(Y!==Ie||de!==Ye||ae!==xe)&&(s.stencilFunc(Ie,Ye,xe),Y=Ie,de=Ye,ae=xe)},setOp:function(Ie,Ye,xe){(le!==Ie||Pe!==Ye||$e!==xe)&&(s.stencilOp(Ie,Ye,xe),le=Ie,Pe=Ye,$e=xe)},setLocked:function(Ie){D=Ie},setClear:function(Ie){se!==Ie&&(s.clearStencil(Ie),se=Ie)},reset:function(){D=!1,j=null,Y=null,de=null,ae=null,le=null,Pe=null,$e=null,se=null}}}const a=new t,r=new i,o=new n;let l={};const c=new WeakMap;let h={},d={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,v=null,w=null,b=null,A=null,E=null,_=null,S=new Se(0,0,0),L=0,C=!1,N=null,F=null,G=null,I=null,z=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,X=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),P=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),P=X>=2);let q=null,K={};const me=s.getParameter(s.SCISSOR_BOX),Ve=s.getParameter(s.VIEWPORT),Q=new bt().fromArray(me),ve=new bt().fromArray(Ve);function Ee(D,j,Y,de){const ae=new Uint8Array(4),le=s.createTexture();s.bindTexture(D,le),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pe=0;Pe<Y;Pe++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,ae):s.texImage2D(j+Pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ae);return le}const Fe={};Fe[s.TEXTURE_2D]=Ee(s.TEXTURE_2D,s.TEXTURE_2D,1),Fe[s.TEXTURE_CUBE_MAP]=Ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[s.TEXTURE_2D_ARRAY]=Ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Fe[s.TEXTURE_3D]=Ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Me(s.DEPTH_TEST),r.setFunc(Hs),ni(!1),yt(Al),Me(s.CULL_FACE),Gt(Cn);function Me(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Xe(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Tt(D,j){return u[D]!==j?(s.bindFramebuffer(D,j),u[D]=j,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=j),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=j),!0):!1}function ze(D,j){let Y=p,de=!1;if(D){Y=f.get(j),Y===void 0&&(Y=[],f.set(j,Y));const ae=D.textures;if(Y.length!==ae.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let le=0,Pe=ae.length;le<Pe;le++)Y[le]=s.COLOR_ATTACHMENT0+le;Y.length=ae.length,de=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,de=!0);de&&s.drawBuffers(Y)}function dt(D){return x!==D?(s.useProgram(D),x=D,!0):!1}const mt={[Qn]:s.FUNC_ADD,[jh]:s.FUNC_SUBTRACT,[ed]:s.FUNC_REVERSE_SUBTRACT};mt[td]=s.MIN,mt[id]=s.MAX;const Je={[nd]:s.ZERO,[sd]:s.ONE,[ad]:s.SRC_COLOR,[Xc]:s.SRC_ALPHA,[dd]:s.SRC_ALPHA_SATURATE,[cd]:s.DST_COLOR,[od]:s.DST_ALPHA,[rd]:s.ONE_MINUS_SRC_COLOR,[qc]:s.ONE_MINUS_SRC_ALPHA,[hd]:s.ONE_MINUS_DST_COLOR,[ld]:s.ONE_MINUS_DST_ALPHA,[ud]:s.CONSTANT_COLOR,[fd]:s.ONE_MINUS_CONSTANT_COLOR,[pd]:s.CONSTANT_ALPHA,[md]:s.ONE_MINUS_CONSTANT_ALPHA};function Gt(D,j,Y,de,ae,le,Pe,$e,se,Ie){if(D===Cn){g===!0&&(Xe(s.BLEND),g=!1);return}if(g===!1&&(Me(s.BLEND),g=!0),D!==Qh){if(D!==m||Ie!==C){if((v!==Qn||A!==Qn)&&(s.blendEquation(s.FUNC_ADD),v=Qn,A=Qn),Ie)switch(D){case Ns:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zt:s.blendFunc(s.ONE,s.ONE);break;case Rl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:at("WebGLState: Invalid blending: ",D);break}else switch(D){case Ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zt:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Rl:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cl:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",D);break}w=null,b=null,E=null,_=null,S.set(0,0,0),L=0,m=D,C=Ie}return}ae=ae||j,le=le||Y,Pe=Pe||de,(j!==v||ae!==A)&&(s.blendEquationSeparate(mt[j],mt[ae]),v=j,A=ae),(Y!==w||de!==b||le!==E||Pe!==_)&&(s.blendFuncSeparate(Je[Y],Je[de],Je[le],Je[Pe]),w=Y,b=de,E=le,_=Pe),($e.equals(S)===!1||se!==L)&&(s.blendColor($e.r,$e.g,$e.b,se),S.copy($e),L=se),m=D,C=!1}function Ct(D,j){D.side===ft?Xe(s.CULL_FACE):Me(s.CULL_FACE);let Y=D.side===ii;j&&(Y=!Y),ni(Y),D.blending===Ns&&D.transparent===!1?Gt(Cn):Gt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),a.setMask(D.colorWrite);const de=D.stencilWrite;o.setTest(de),de&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Nt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Me(s.SAMPLE_ALPHA_TO_COVERAGE):Xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function ni(D){N!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),N=D)}function yt(D){D!==Kh?(Me(s.CULL_FACE),D!==F&&(D===Al?s.cullFace(s.BACK):D===Zh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Xe(s.CULL_FACE),F=D}function Oi(D){D!==G&&(P&&s.lineWidth(D),G=D)}function Nt(D,j,Y){D?(Me(s.POLYGON_OFFSET_FILL),(I!==j||z!==Y)&&(I=j,z=Y,r.getReversed()&&(j=-j,Y=-Y),s.polygonOffset(j,Y))):Xe(s.POLYGON_OFFSET_FILL)}function Mi(D){D?Me(s.SCISSOR_TEST):Xe(s.SCISSOR_TEST)}function yi(D){D===void 0&&(D=s.TEXTURE0+$-1),q!==D&&(s.activeTexture(D),q=D)}function Si(D,j,Y){Y===void 0&&(q===null?Y=s.TEXTURE0+$-1:Y=q);let de=K[Y];de===void 0&&(de={type:void 0,texture:void 0},K[Y]=de),(de.type!==D||de.texture!==j)&&(q!==Y&&(s.activeTexture(Y),q=Y),s.bindTexture(D,j||Fe[D]),de.type=D,de.texture=j)}function O(){const D=K[q];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function bi(){try{s.compressedTexImage2D(...arguments)}catch(D){at("WebGLState:",D)}}function vt(){try{s.compressedTexImage3D(...arguments)}catch(D){at("WebGLState:",D)}}function Mt(){try{s.texSubImage2D(...arguments)}catch(D){at("WebGLState:",D)}}function ge(){try{s.texSubImage3D(...arguments)}catch(D){at("WebGLState:",D)}}function Pt(){try{s.compressedTexSubImage2D(...arguments)}catch(D){at("WebGLState:",D)}}function Oe(){try{s.compressedTexSubImage3D(...arguments)}catch(D){at("WebGLState:",D)}}function Ge(){try{s.texStorage2D(...arguments)}catch(D){at("WebGLState:",D)}}function T(){try{s.texStorage3D(...arguments)}catch(D){at("WebGLState:",D)}}function M(){try{s.texImage2D(...arguments)}catch(D){at("WebGLState:",D)}}function k(){try{s.texImage3D(...arguments)}catch(D){at("WebGLState:",D)}}function ne(D){return d[D]!==void 0?d[D]:s.getParameter(D)}function ee(D,j){d[D]!==j&&(s.pixelStorei(D,j),d[D]=j)}function oe(D){Q.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Q.copy(D))}function fe(D){ve.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),ve.copy(D))}function Z(D,j){let Y=c.get(j);Y===void 0&&(Y=new WeakMap,c.set(j,Y));let de=Y.get(D);de===void 0&&(de=s.getUniformBlockIndex(j,D.name),s.uniformBlockBinding(j,de,de),Y.set(D,de))}function J(D,j,Y){const ae=c.get(j).get(D);l[ae]!==Y&&(s.bindBufferBase(s.UNIFORM_BUFFER,ae,Y),l[ae]=Y)}function he(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},q=null,K={},u={},l={},f=new WeakMap,p=[],x=null,g=!1,m=null,v=null,w=null,b=null,A=null,E=null,_=null,S=new Se(0,0,0),L=0,C=!1,N=null,F=null,G=null,I=null,z=null,Q.set(0,0,s.canvas.width,s.canvas.height),ve.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:Me,disable:Xe,bindFramebuffer:Tt,drawBuffers:ze,useProgram:dt,setBlending:Gt,setMaterial:Ct,setFlipSided:ni,setCullFace:yt,setLineWidth:Oi,setPolygonOffset:Nt,setScissorTest:Mi,activeTexture:yi,bindTexture:Si,unbindTexture:O,compressedTexImage2D:bi,compressedTexImage3D:vt,texImage2D:M,texImage3D:k,pixelStorei:ee,getParameter:ne,updateUBOMapping:Z,uniformBlockBinding:J,texStorage2D:Ge,texStorage3D:T,texSubImage2D:Mt,texSubImage3D:ge,compressedTexSubImage2D:Pt,compressedTexSubImage3D:Oe,scissor:oe,viewport:fe,reset:he}}function pg(s,e,t,i,n,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,h=new WeakMap,d=new Set;let u;const f=new WeakMap,p=new Set,x=new FinalizationRegistry(T=>p.delete(T));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,M){return g?new OffscreenCanvas(T,M):Za("canvas")}function v(T,M,k){let ne=1;const ee=Ge(T);if((ee.width>k||ee.height>k)&&(ne=k/Math.max(ee.width,ee.height)),ne<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const oe=Math.floor(ne*ee.width),fe=Math.floor(ne*ee.height);u===void 0&&(u=m(oe,fe));const Z=M?m(oe,fe):u;return Z.width=oe,Z.height=fe,Z.getContext("2d").drawImage(T,0,0,oe,fe),ke("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+oe+"x"+fe+")."),Z}else return"data"in T&&ke("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),T;return T}function w(T){return T.generateMipmaps}function b(T){s.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(T,M,k,ne,ee,oe=!1){if(T!==null){if(s[T]!==void 0)return s[T];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let fe;ne&&(fe=e.get("EXT_texture_norm16"),fe||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=M;if(M===s.RED&&(k===s.FLOAT&&(Z=s.R32F),k===s.HALF_FLOAT&&(Z=s.R16F),k===s.UNSIGNED_BYTE&&(Z=s.R8),k===s.UNSIGNED_SHORT&&fe&&(Z=fe.R16_EXT),k===s.SHORT&&fe&&(Z=fe.R16_SNORM_EXT)),M===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.R8UI),k===s.UNSIGNED_SHORT&&(Z=s.R16UI),k===s.UNSIGNED_INT&&(Z=s.R32UI),k===s.BYTE&&(Z=s.R8I),k===s.SHORT&&(Z=s.R16I),k===s.INT&&(Z=s.R32I)),M===s.RG&&(k===s.FLOAT&&(Z=s.RG32F),k===s.HALF_FLOAT&&(Z=s.RG16F),k===s.UNSIGNED_BYTE&&(Z=s.RG8),k===s.UNSIGNED_SHORT&&fe&&(Z=fe.RG16_EXT),k===s.SHORT&&fe&&(Z=fe.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RG8UI),k===s.UNSIGNED_SHORT&&(Z=s.RG16UI),k===s.UNSIGNED_INT&&(Z=s.RG32UI),k===s.BYTE&&(Z=s.RG8I),k===s.SHORT&&(Z=s.RG16I),k===s.INT&&(Z=s.RG32I)),M===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),k===s.UNSIGNED_INT&&(Z=s.RGB32UI),k===s.BYTE&&(Z=s.RGB8I),k===s.SHORT&&(Z=s.RGB16I),k===s.INT&&(Z=s.RGB32I)),M===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),k===s.UNSIGNED_INT&&(Z=s.RGBA32UI),k===s.BYTE&&(Z=s.RGBA8I),k===s.SHORT&&(Z=s.RGBA16I),k===s.INT&&(Z=s.RGBA32I)),M===s.RGB&&(k===s.UNSIGNED_SHORT&&fe&&(Z=fe.RGB16_EXT),k===s.SHORT&&fe&&(Z=fe.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),M===s.RGBA){const J=oe?Ka:et.getTransfer(ee);k===s.FLOAT&&(Z=s.RGBA32F),k===s.HALF_FLOAT&&(Z=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Z=J===ht?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&fe&&(Z=fe.RGBA16_EXT),k===s.SHORT&&fe&&(Z=fe.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(T,M){let k;return T?M===null||M===Vi||M===rs?k=s.DEPTH24_STENCIL8:M===Ui?k=s.DEPTH32F_STENCIL8:M===Ws&&(k=s.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Vi||M===rs?k=s.DEPTH_COMPONENT24:M===Ui?k=s.DEPTH_COMPONENT32F:M===Ws&&(k=s.DEPTH_COMPONENT16),k}function S(T,M){return w(T)===!0||T.isFramebufferTexture&&T.minFilter!==Vt&&T.minFilter!==ri?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function L(T){const M=new WeakRef(T);i.get(T).__ref=M,p.add(M),x.register(T,M,M)}function C(T){const M=i.get(T).__ref;M!==void 0&&(p.delete(M),x.unregister(M))}function N(T){G(T.target)}function F(T){I(T.target)}function G(T){T.removeEventListener("dispose",N),C(T),$(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&d.delete(T)}function I(T){T.removeEventListener("dispose",F),C(T),X(T)}function z(){for(const T of p){const M=T.deref();M!==void 0&&(M.isRenderTarget===!0?I(M):G(M))}p.clear(),d.clear()}function $(T){const M=i.get(T);if(M.__webglInit===void 0)return;const k=T.source,ne=f.get(k);if(ne){const ee=ne[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&P(T),Object.keys(ne).length===0&&f.delete(k)}i.remove(T)}function P(T){const M=i.get(T);s.deleteTexture(M.__webglTexture);const k=T.source,ne=f.get(k);delete ne[M.__cacheKey],r.memory.textures--}function X(T){const M=i.get(T);M.__depthDisposeCallback&&M.__depthDisposeCallback();const k=T.depthTexture;if(k&&k.renderTarget===T&&G(k),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let oe=0;oe<M.__webglFramebuffer[ee].length;oe++)s.deleteFramebuffer(M.__webglFramebuffer[ee][oe]);else s.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)s.deleteFramebuffer(M.__webglFramebuffer[ee]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const ne=T.textures;for(let ee=0,oe=ne.length;ee<oe;ee++){const fe=i.get(ne[ee]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),r.memory.textures--),i.remove(ne[ee])}i.remove(T)}let V=0;function q(){V=0}function K(){return V}function me(T){V=T}function Ve(){const T=V;return T>=n.maxTextures&&ke("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+n.maxTextures),V+=1,T}function Q(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.mipmapsAutoUpdate),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function ve(T,M){const k=i.get(T);if(T.isVideoTexture&&Pt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&k.__version!==T.version){const ne=T.image;if(ne===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(k,T,M);return}}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+M)}function Ee(T,M){const k=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){Ct(k,T,M);return}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+M)}function Fe(T,M){const k=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){Ct(k,T,M);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+M)}function Me(T,M){const k=i.get(T);if(T.version>0&&k.__version!==T.version){ni(k,T,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+M)}const Xe={[as]:s.REPEAT,[Zi]:s.CLAMP_TO_EDGE,[Jr]:s.MIRRORED_REPEAT},Tt={[Vt]:s.NEAREST,[_d]:s.NEAREST_MIPMAP_NEAREST,[ta]:s.NEAREST_MIPMAP_LINEAR,[ri]:s.LINEAR,[fr]:s.LINEAR_MIPMAP_NEAREST,[un]:s.LINEAR_MIPMAP_LINEAR},ze={[Sd]:s.NEVER,[nh]:s.ALWAYS,[bd]:s.LESS,[th]:s.LEQUAL,[wd]:s.EQUAL,[ih]:s.GEQUAL,[Ed]:s.GREATER,[Td]:s.NOTEQUAL};function dt(T,M){if(M.type===Ui&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ri||M.magFilter===fr||M.magFilter===ta||M.magFilter===un||M.minFilter===ri||M.minFilter===fr||M.minFilter===ta||M.minFilter===un)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,Xe[M.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,Xe[M.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,Xe[M.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,Tt[M.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,Tt[M.minFilter]),M.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,ze[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Vt||M.minFilter!==ta&&M.minFilter!==un||M.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function mt(T,M){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",N),L(M));const ne=M.source;let ee=f.get(ne);ee===void 0&&(ee={},f.set(ne,ee));const oe=Q(M);if(oe!==T.__cacheKey){ee[oe]===void 0&&(ee[oe]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,k=!0),ee[oe].usedTimes++;const fe=ee[T.__cacheKey];fe!==void 0&&(ee[T.__cacheKey].usedTimes--,fe.usedTimes===0&&P(M)),T.__cacheKey=oe,T.__webglTexture=ee[oe].texture}return k}function Je(T,M,k){return Math.floor(Math.floor(T/k)/M)}function Gt(T,M,k,ne){const oe=T.updateRanges;if(oe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,k,ne,M.data);else{oe.sort((D,j)=>D.start-j.start);let fe=0;for(let D=1;D<oe.length;D++){const j=oe[fe],Y=oe[D],de=j.start+j.count,ae=Je(Y.start,M.width,4),le=Je(j.start,M.width,4);Y.start<=de+1&&ae===le&&Je(Y.start+Y.count-1,M.width,4)===ae?j.count=Math.max(j.count,Y.start+Y.count-j.start):(++fe,oe[fe]=Y)}oe.length=fe+1;const Z=t.getParameter(s.UNPACK_ROW_LENGTH),J=t.getParameter(s.UNPACK_SKIP_PIXELS),he=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let D=0,j=oe.length;D<j;D++){const Y=oe[D],de=Math.floor(Y.start/4),ae=Math.ceil(Y.count/4),le=de%M.width,Pe=Math.floor(de/M.width),$e=ae,se=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,le),t.pixelStorei(s.UNPACK_SKIP_ROWS,Pe),t.texSubImage2D(s.TEXTURE_2D,0,le,Pe,$e,se,k,ne,M.data)}T.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Z),t.pixelStorei(s.UNPACK_SKIP_PIXELS,J),t.pixelStorei(s.UNPACK_SKIP_ROWS,he)}}function Ct(T,M,k){let ne=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ne=s.TEXTURE_3D);const ee=mt(T,M),oe=M.source;t.bindTexture(ne,T.__webglTexture,s.TEXTURE0+k);const fe=i.get(oe);if(oe.version!==fe.__version||ee===!0){if(t.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const se=et.getPrimaries(et.workingColorSpace),Ie=M.colorSpace===hn?null:et.getPrimaries(M.colorSpace),Ye=M.colorSpace===hn||se===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye)}t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let J=v(M.image,!1,n.maxTextureSize);J=Oe(M,J);const he=a.convert(M.format,M.colorSpace),D=a.convert(M.type);let j=E(M.internalFormat,he,D,M.normalized,M.colorSpace,M.isVideoTexture);dt(ne,M);let Y;const de=M.mipmaps,ae=M.isVideoTexture!==!0,le=fe.__version===void 0||ee===!0,Pe=oe.dataReady,$e=S(M,J);if(M.isDepthTexture)j=_(M.format===fn,M.type),le&&(ae?t.texStorage2D(s.TEXTURE_2D,1,j,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,j,J.width,J.height,0,he,D,null));else if(M.isDataTexture)if(de.length>0){ae&&le&&t.texStorage2D(s.TEXTURE_2D,$e,j,de[0].width,de[0].height);for(let se=0,Ie=de.length;se<Ie;se++)Y=de[se],ae?Pe&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,Y.width,Y.height,he,D,Y.data):t.texImage2D(s.TEXTURE_2D,se,j,Y.width,Y.height,0,he,D,Y.data);M.generateMipmaps=!1}else ae?(le&&t.texStorage2D(s.TEXTURE_2D,$e,j,J.width,J.height),Pe&&Gt(M,J,he,D)):t.texImage2D(s.TEXTURE_2D,0,j,J.width,J.height,0,he,D,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ae&&le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,$e,j,de[0].width,de[0].height,J.depth);for(let se=0,Ie=de.length;se<Ie;se++)if(Y=de[se],M.format!==Hi)if(he!==null)if(ae){if(Pe)if(M.layerUpdates.size>0){const Ye=uc(Y.width,Y.height,M.format,M.type);for(const xe of M.layerUpdates){const ut=Y.data.subarray(xe*Ye/Y.data.BYTES_PER_ELEMENT,(xe+1)*Ye/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,xe,Y.width,Y.height,1,he,ut)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Y.width,Y.height,J.depth,he,Y.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,j,Y.width,Y.height,J.depth,0,Y.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?Pe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Y.width,Y.height,J.depth,he,D,Y.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,j,Y.width,Y.height,J.depth,0,he,D,Y.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ae&&le&&t.texStorage2D(s.TEXTURE_2D,$e,j,de[0].width,de[0].height);for(let se=0,Ie=de.length;se<Ie;se++)Y=de[se],M.format!==Hi?he!==null?ae?Pe&&t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,Y.width,Y.height,he,Y.data):t.compressedTexImage2D(s.TEXTURE_2D,se,j,Y.width,Y.height,0,Y.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?Pe&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,Y.width,Y.height,he,D,Y.data):t.texImage2D(s.TEXTURE_2D,se,j,Y.width,Y.height,0,he,D,Y.data)}else if(M.isDataArrayTexture)if(ae){if(le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,$e,j,J.width,J.height,J.depth),Pe)if(M.layerUpdates.size>0){const se=uc(J.width,J.height,M.format,M.type);for(const Ie of M.layerUpdates){const Ye=J.data.subarray(Ie*se/J.data.BYTES_PER_ELEMENT,(Ie+1)*se/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ie,J.width,J.height,1,he,D,Ye)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,he,D,J.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,j,J.width,J.height,J.depth,0,he,D,J.data);else if(M.isData3DTexture)ae?(le&&t.texStorage3D(s.TEXTURE_3D,$e,j,J.width,J.height,J.depth),Pe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,he,D,J.data)):t.texImage3D(s.TEXTURE_3D,0,j,J.width,J.height,J.depth,0,he,D,J.data);else if(M.isFramebufferTexture){if(le)if(ae)t.texStorage2D(s.TEXTURE_2D,$e,j,J.width,J.height);else{let se=J.width,Ie=J.height;for(let Ye=0;Ye<$e;Ye++)t.texImage2D(s.TEXTURE_2D,Ye,j,se,Ie,0,he,D,null),se>>=1,Ie>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const se=s.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),J.parentNode!==se){se.appendChild(J),d.add(M),se.onpaint=Ie=>{const Ye=Ie.changedElements;for(const xe of d)Ye.includes(xe.image)&&(xe.needsUpdate=!0)},se.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,J);else{const Ye=s.RGBA,xe=s.RGBA,ut=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ye,xe,ut,J)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(de.length>0){if(ae&&le){const se=Ge(de[0]);t.texStorage2D(s.TEXTURE_2D,$e,j,se.width,se.height)}for(let se=0,Ie=de.length;se<Ie;se++)Y=de[se],ae?Pe&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,he,D,Y):t.texImage2D(s.TEXTURE_2D,se,j,he,D,Y);M.generateMipmaps=!1}else if(ae){if(le){const se=Ge(J);t.texStorage2D(s.TEXTURE_2D,$e,j,se.width,se.height)}Pe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he,D,J)}else t.texImage2D(s.TEXTURE_2D,0,j,he,D,J);w(M)&&M.mipmapsAutoUpdate===!0&&b(ne),fe.__version=oe.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ni(T,M,k){if(M.image.length!==6)return;const ne=mt(T,M),ee=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+k);const oe=i.get(ee);if(ee.version!==oe.__version||ne===!0){t.activeTexture(s.TEXTURE0+k);const fe=et.getPrimaries(et.workingColorSpace),Z=M.colorSpace===hn?null:et.getPrimaries(M.colorSpace),J=M.colorSpace===hn||fe===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const he=M.isCompressedTexture||M.image[0].isCompressedTexture,D=M.image[0]&&M.image[0].isDataTexture,j=[];for(let xe=0;xe<6;xe++)!he&&!D?j[xe]=v(M.image[xe],!0,n.maxCubemapSize):j[xe]=D?M.image[xe].image:M.image[xe],j[xe]=Oe(M,j[xe]);const Y=j[0],de=a.convert(M.format,M.colorSpace),ae=a.convert(M.type);let le=E(M.internalFormat,de,ae,M.normalized,M.colorSpace);const Pe=M.isVideoTexture!==!0,$e=oe.__version===void 0||ne===!0,se=ee.dataReady;let Ie=S(M,Y);dt(s.TEXTURE_CUBE_MAP,M);let Ye;if(M.isDepthTexture){if(le=_(M.format===fn,M.type),$e)if(Pe)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,le,Y.width,Y.height);else for(let xe=0;xe<6;xe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,le,Y.width,Y.height,0,de,ae,null)}else if(he){Pe&&$e&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,le,Y.width,Y.height);for(let xe=0;xe<6;xe++){Ye=j[xe].mipmaps;for(let ut=0;ut<Ye.length;ut++){const Ut=Ye[ut];M.format!==Hi?de!==null?Pe?se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut,0,0,Ut.width,Ut.height,de,Ut.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut,le,Ut.width,Ut.height,0,Ut.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut,0,0,Ut.width,Ut.height,de,ae,Ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut,le,Ut.width,Ut.height,0,de,ae,Ut.data)}}}else{if(Ye=M.mipmaps,Pe&&$e){Ye.length>0&&Ie++;const xe=Ge(j[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,le,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(D){Pe?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,j[xe].width,j[xe].height,de,ae,j[xe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,le,j[xe].width,j[xe].height,0,de,ae,j[xe].data);for(let ut=0;ut<Ye.length;ut++){const en=Ye[ut].image[xe].image;Pe?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut+1,0,0,en.width,en.height,de,ae,en.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut+1,le,en.width,en.height,0,de,ae,en.data)}}else{Pe?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,de,ae,j[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,le,de,ae,j[xe]);for(let ut=0;ut<Ye.length;ut++){const Ut=Ye[ut];Pe?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut+1,0,0,de,ae,Ut.image[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut+1,le,de,ae,Ut.image[xe])}}}w(M)&&M.mipmapsAutoUpdate===!0&&b(s.TEXTURE_CUBE_MAP),oe.__version=ee.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function yt(T,M,k,ne,ee,oe){const fe=a.convert(k.format,k.colorSpace),Z=a.convert(k.type),J=E(k.internalFormat,fe,Z,k.normalized,k.colorSpace),he=i.get(M),D=i.get(k);if(D.__renderTarget=M,!he.__hasExternalTextures){const j=Math.max(1,M.width>>oe),Y=Math.max(1,M.height>>oe);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,oe,J,j,Y,M.depth,0,fe,Z,null):t.texImage2D(ee,oe,J,j,Y,0,fe,Z,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),ge(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,ee,D.__webglTexture,0,Mt(M)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,ee,D.__webglTexture,oe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oi(T,M,k){if(s.bindRenderbuffer(s.RENDERBUFFER,T),M.depthBuffer){const ne=M.depthTexture,ee=ne&&ne.isDepthTexture?ne.type:null,oe=_(M.stencilBuffer,ee),fe=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ge(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Mt(M),oe,M.width,M.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt(M),oe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,oe,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,T)}else{const ne=M.textures;for(let ee=0;ee<ne.length;ee++){const oe=ne[ee],fe=a.convert(oe.format,oe.colorSpace),Z=a.convert(oe.type),J=E(oe.internalFormat,fe,Z,oe.normalized,oe.colorSpace);ge(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Mt(M),J,M.width,M.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt(M),J,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,J,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Nt(T,M,k){const ne=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=i.get(M.depthTexture);ee.__renderTarget=M;const oe=ne?M.depthTexture.image[0]:M.depthTexture.image;(!ee.__webglTexture||oe.width!==M.width||oe.height!==M.height)&&(oe.width=M.width,oe.height=M.height,M.depthTexture.needsUpdate=!0),ne?Me(M.depthTexture,0):ve(M.depthTexture,0);const fe=ee.__webglTexture,Z=Mt(M),J=ne?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,he=M.depthTexture.format===fn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===mn)ge(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,J,fe,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,he,J,fe,0);else if(M.depthTexture.format===fn)ge(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,J,fe,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,he,J,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Mi(T){const M=i.get(T),k=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const ne=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ne){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ne.removeEventListener("dispose",ee)};ne.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=ne}if(T.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let ne=0;ne<6;ne++)Nt(M.__webglFramebuffer[ne],T,ne);else T.texture.mipmaps.length>0?Nt(M.__webglFramebuffer[0],T,0):Nt(M.__webglFramebuffer,T,0);else if(k){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]===void 0)M.__webglDepthbuffer[ne]=s.createRenderbuffer(),Oi(M.__webglDepthbuffer[ne],T,!1);else{const ee=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer[ne];s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,oe)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Oi(M.__webglDepthbuffer,T,!1);else{const ee=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,oe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function yi(T,M,k){const ne=i.get(T);M!==void 0&&yt(ne.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Mi(T)}function Si(T){const M=T.texture,k=i.get(T),ne=i.get(M);T.addEventListener("dispose",F),L(T);const ee=T.textures,oe=T.isWebGLCubeRenderTarget===!0,fe=ee.length>1;if(fe||(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=M.version,r.memory.textures++),oe){k.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(M.mipmaps.length>0){k.__webglFramebuffer[Z]=[];for(let J=0;J<M.mipmaps.length;J++)k.__webglFramebuffer[Z][J]=s.createFramebuffer()}else k.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(M.mipmaps.length>0){k.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)k.__webglFramebuffer[Z]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(fe)for(let Z=0,J=ee.length;Z<J;Z++){const he=i.get(ee[Z]);he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture(),r.memory.textures++)}if(T.samples>0&&ge(T)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Z=0;Z<ee.length;Z++){const J=ee[Z];k.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[Z]);const he=a.convert(J.format,J.colorSpace),D=a.convert(J.type),j=E(J.internalFormat,he,D,J.normalized,J.colorSpace,T.isXRRenderTarget===!0),Y=Mt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Y,j,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,k.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Oi(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),dt(s.TEXTURE_CUBE_MAP,M);for(let Z=0;Z<6;Z++)if(M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)yt(k.__webglFramebuffer[Z][J],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else yt(k.__webglFramebuffer[Z],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);w(M)?b(s.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(fe){for(let Z=0,J=ee.length;Z<J;Z++){const he=ee[Z],D=i.get(he);let j=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(j=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(j,D.__webglTexture),dt(j,he),yt(k.__webglFramebuffer,T,he,s.COLOR_ATTACHMENT0+Z,j,0),w(he)&&b(j)}t.unbindTexture()}else{let Z=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Z=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Z,ne.__webglTexture),dt(Z,M),M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)yt(k.__webglFramebuffer[J],T,M,s.COLOR_ATTACHMENT0,Z,J);else yt(k.__webglFramebuffer,T,M,s.COLOR_ATTACHMENT0,Z,0);w(M)?b(Z):M.mipmaps.length>0&&s.texParameteri(Z,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&Mi(T)}function O(T){const M=T.textures;for(let k=0,ne=M.length;k<ne;k++){const ee=M[k];if(w(ee)&&ee.mipmapsAutoUpdate===!0){const oe=A(T),fe=i.get(ee).__webglTexture;t.bindTexture(oe,fe),b(oe),t.unbindTexture()}}}const bi=[];function vt(T){if(T.samples>0){if(ge(T)===!1){const M=T.textures,k=T.width,ne=T.height;let ee=s.COLOR_BUFFER_BIT;const oe=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=i.get(T),Z=M.length>1;if(Z)for(let he=0;he<M.length;he++)t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let he=0;he<M.length;he++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);const D=i.get(M[he]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,D,0)}s.blitFramebuffer(0,0,k,ne,0,0,k,ne,ee,s.NEAREST),l===!0&&(bi.length=0,bi.push(s.COLOR_ATTACHMENT0+he),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&bi.push(oe),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,bi))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let he=0;he<M.length;he++){t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);const D=i.get(M[he]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,D,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){const M=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Mt(T){return Math.min(n.maxSamples,T.samples)}function ge(T){const M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Pt(T){const M=r.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function Oe(T,M){const k=T.colorSpace,ne=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==$a&&k!==hn&&(et.getTransfer(k)===ht?(ne!==Hi||ee!==_i)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",k)),M}function Ge(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Ve,this.resetTextureUnits=q,this.getTextureUnits=K,this.setTextureUnits=me,this.setTexture2D=ve,this.setTexture2DArray=Ee,this.setTexture3D=Fe,this.setTextureCube=Me,this.rebindTextures=yi,this.setupRenderTarget=Si,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Mi,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=ge,this.dispose=z}function mg(s,e){function t(i,n=hn){let a;const r=et.getTransfer(n);if(i===_i)return s.UNSIGNED_BYTE;if(i===Xo)return s.UNSIGNED_SHORT_4_4_4_4;if(i===qo)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Jc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Qc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Kc)return s.BYTE;if(i===Zc)return s.SHORT;if(i===Ws)return s.UNSIGNED_SHORT;if(i===Wo)return s.INT;if(i===Vi)return s.UNSIGNED_INT;if(i===Ui)return s.FLOAT;if(i===oi)return s.HALF_FLOAT;if(i===jc)return s.ALPHA;if(i===eh)return s.RGB;if(i===Hi)return s.RGBA;if(i===mn)return s.DEPTH_COMPONENT;if(i===fn)return s.DEPTH_STENCIL;if(i===Yo)return s.RED;if(i===$o)return s.RED_INTEGER;if(i===Pn)return s.RG;if(i===Ko)return s.RG_INTEGER;if(i===Zo)return s.RGBA_INTEGER;if(i===Fa||i===Oa||i===Ba||i===za)if(r===ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Fa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Fa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Oa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ba)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===za)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qr||i===jr||i===eo||i===to)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Qr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===eo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===to)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===io||i===no||i===so||i===ao||i===ro||i===qa||i===oo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===io||i===no)return r===ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===so)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===ao)return a.COMPRESSED_R11_EAC;if(i===ro)return a.COMPRESSED_SIGNED_R11_EAC;if(i===qa)return a.COMPRESSED_RG11_EAC;if(i===oo)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===lo||i===co||i===ho||i===uo||i===fo||i===po||i===mo||i===go||i===xo||i===_o||i===vo||i===Mo||i===yo||i===So)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===lo)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===co)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ho)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===uo)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fo)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===po)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mo)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===go)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xo)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_o)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vo)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mo)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yo)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===So)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bo||i===wo||i===Eo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===bo)return r===ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Eo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===To||i===Ao||i===Ya||i===Ro)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===To)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Ao)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ya)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ro)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const gg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xg=`
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

}`;class _g{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new _h(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Zt({vertexShader:gg,fragmentShader:xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ce(new ti(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vg extends Ln{constructor(e,t){super();const i=this;let n=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null;const x=typeof XRWebGLBinding<"u",g=new _g,m={},v=t.getContextAttributes();let w=null,b=null;const A=[],E=[],_=new Ce;let S=null,L=null;const C=new xi;C.viewport=new bt;const N=new xi;N.viewport=new bt;const F=[C,N],G=new Eu;let I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ve=A[Q];return ve===void 0&&(ve=new Mr,A[Q]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(Q){let ve=A[Q];return ve===void 0&&(ve=new Mr,A[Q]=ve),ve.getGripSpace()},this.getHand=function(Q){let ve=A[Q];return ve===void 0&&(ve=new Mr,A[Q]=ve),ve.getHandSpace()};function $(Q){const ve=E.indexOf(Q.inputSource);if(ve===-1)return;const Ee=A[ve];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,c||r),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function P(){n.removeEventListener("select",$),n.removeEventListener("selectstart",$),n.removeEventListener("selectend",$),n.removeEventListener("squeeze",$),n.removeEventListener("squeezestart",$),n.removeEventListener("squeezeend",$),n.removeEventListener("end",P),n.removeEventListener("inputsourceschange",X);for(let Q=0;Q<A.length;Q++){const ve=E[Q];ve!==null&&(E[Q]=null,A[Q].disconnect(ve))}I=null,z=null,g.reset();for(const Q in m)delete m[Q];if(e.setRenderTarget(w),f=null,u=null,d=null,n=null,b=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),L!==null){const Q=L.camera;Q.fov=L.fov,Q.zoom=L.zoom,Q.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(n,t)),d},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(Q){if(n=Q,n!==null){if(w=e.getRenderTarget(),n.addEventListener("select",$),n.addEventListener("selectstart",$),n.addEventListener("selectend",$),n.addEventListener("squeeze",$),n.addEventListener("squeezestart",$),n.addEventListener("squeezeend",$),n.addEventListener("end",P),n.addEventListener("inputsourceschange",X),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Fe=null,Me=null;v.depth&&(Me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=v.stencil?fn:mn,Fe=v.stencil?rs:Vi);const Xe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:a};d=this.getBinding(),u=d.createProjectionLayer(Xe),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new li(u.textureWidth,u.textureHeight,{format:Hi,type:_i,depthTexture:new os(u.textureWidth,u.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Ee={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(n,t,Ee),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new li(f.framebufferWidth,f.framebufferHeight,{format:Hi,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await n.requestReferenceSpace(o),Ve.setContext(n),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(Q){for(let ve=0;ve<Q.removed.length;ve++){const Ee=Q.removed[ve],Fe=E.indexOf(Ee);Fe>=0&&(E[Fe]=null,A[Fe].disconnect(Ee))}for(let ve=0;ve<Q.added.length;ve++){const Ee=Q.added[ve];let Fe=E.indexOf(Ee);if(Fe===-1){for(let Xe=0;Xe<A.length;Xe++)if(Xe>=E.length){E.push(Ee),Fe=Xe;break}else if(E[Xe]===null){E[Xe]=Ee,Fe=Xe;break}if(Fe===-1)break}const Me=A[Fe];Me&&Me.connect(Ee)}}function V(Q,ve){ve===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ve.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(n===null)return;let ve=Q.near,Ee=Q.far;g.texture!==null&&(g.depthNear>0&&(ve=g.depthNear),g.depthFar>0&&(Ee=g.depthFar)),G.near=N.near=C.near=ve,G.far=N.far=C.far=Ee,(I!==G.near||z!==G.far)&&(n.updateRenderState({depthNear:G.near,depthFar:G.far}),I=G.near,z=G.far),G.layers.mask=Q.layers.mask|6,C.layers.mask=G.layers.mask&-5,N.layers.mask=G.layers.mask&-3;const Fe=Q.parent,Me=G.cameras;V(G,Fe);for(let Xe=0;Xe<Me.length;Xe++)V(Me[Xe],Fe);G.projectionMatrix.copy(C.projectionMatrix),G.projectionMatrixInverse.copy(C.projectionMatrixInverse),L===null&&Q.isPerspectiveCamera&&(L={camera:Q,fov:Q.fov,zoom:Q.zoom}),q(Q,G,Fe)};function q(Q,ve,Ee){Ee===null?Q.matrix.copy(ve.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ve.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ve.projectionMatrix),Q.projectionMatrixInverse.copy(ve.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=qs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)},this.getCameraTexture=function(Q){return m[Q]};let K=null;function me(Q,ve){if(h=ve.getViewerPose(c||r),p=ve,h!==null){const Ee=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Fe=!1;Ee.length!==G.cameras.length&&(G.cameras.length=0,Fe=!0);for(let ze=0;ze<Ee.length;ze++){const dt=Ee[ze];let mt=null;if(f!==null)mt=f.getViewport(dt);else{const Gt=d.getViewSubImage(u,dt);mt=Gt.viewport,ze===0&&(e.setRenderTargetTextures(b,Gt.colorTexture,Gt.depthStencilTexture),e.setRenderTarget(b))}let Je=F[ze];Je===void 0&&(Je=new xi,Je.layers.enable(ze),Je.viewport=new bt,F[ze]=Je),Je.matrix.fromArray(dt.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(dt.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(mt.x,mt.y,mt.width,mt.height),ze===0&&(G.matrix.copy(Je.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Fe===!0&&G.cameras.push(Je)}const Me=n.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){d=i.getBinding();const ze=d.getDepthInformation(Ee[0]);ze&&ze.isValid&&ze.texture&&g.init(ze,n.renderState)}if(Me&&Me.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let ze=0;ze<Ee.length;ze++){const dt=Ee[ze].camera;if(dt){let mt=m[dt];mt||(mt=new _h,m[dt]=mt);const Je=d.getCameraImage(dt);mt.sourceTexture=Je}}}}for(let Ee=0;Ee<A.length;Ee++){const Fe=E[Ee],Me=A[Ee];Fe!==null&&Me!==void 0&&Me.update(Fe,ve,c||r)}K&&K(Q,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),p=null}const Ve=new Th;Ve.setAnimationLoop(me),this.setAnimationLoop=function(Q){K=Q},this.dispose=function(){}}}const Mg=new rt,Fh=new He;Fh.set(-1,0,0,0,1,0,0,0,1);function yg(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,vh(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,v,w,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?a(g,m):m.isMeshLambertMaterial?(a(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(a(g,m),d(g,m)):m.isMeshPhongMaterial?(a(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(a(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,b)):m.isMeshMatcapMaterial?(a(g,m),p(g,m)):m.isMeshDepthMaterial?a(g,m):m.isMeshDistanceMaterial?(a(g,m),x(g,m)):m.isMeshNormalMaterial?a(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,v,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ii&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ii&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=e.get(m),w=v.envMap,b=v.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Fh),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=w*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ii&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Sg(s,e,t,i){let n={},a={};function r(v,w){const b=w.program;i.uniformBlockBinding(v,b,n[v.id])}function o(v,w){let b=n[v.id];b===void 0&&(p(v),b=l(v),n[v.id]=b,v.addEventListener("dispose",g));const A=w.program;i.updateUBOMapping(v,A);const E=e.render.frame;a[v.id]!==E&&(c(v),a[v.id]=E)}function l(v){const w=s.createBuffer(),b=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,b,A),s.bindBuffer(s.UNIFORM_BUFFER,null),w}function c(v){const w=n[v.id],b=v.uniforms,A=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let E=0,_=b.length;E<_;E++){const S=b[E];if(Array.isArray(S))for(let L=0,C=S.length;L<C;L++)h(S[L],E,L,A);else h(S,E,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,w,b,A){if(u(v,w,b,A)===!0){const E=v.__offset,_=v.value;if(Array.isArray(_)){let S=0;for(let L=0;L<_.length;L++){const C=_[L],N=x(C,!0);d(C,v.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,v.__data)}}function d(v,w,b){typeof v=="number"||typeof v=="boolean"?w[b]=v:v.isMatrix3?(w[b]=v.elements[0],w[b+1]=v.elements[1],w[b+2]=v.elements[2],w[b+3]=0,w[b+4]=v.elements[3],w[b+5]=v.elements[4],w[b+6]=v.elements[5],w[b+7]=0,w[b+8]=v.elements[6],w[b+9]=v.elements[7],w[b+10]=v.elements[8],w[b+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-b),b):v.toArray(w,b)}function u(v,w,b,A){const E=v.value,_=w+"_"+b;if(Array.isArray(E)){A[_]===void 0&&(A[_]=[]);const S=A[_];let L=!1;for(let C=0;C<E.length;C++)f(E[C],S,C)===!0&&(L=!0);return L}return f(E,A,_)}function f(v,w,b){if(w[b]===void 0)return typeof v=="number"||typeof v=="boolean"?w[b]=v:ArrayBuffer.isView(v)?w[b]=v.slice():w[b]=v.clone(),!0;{const A=w[b];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return w[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function p(v){const w=v.uniforms;let b=0;const A=16;for(let _=0,S=w.length;_<S;_++){const L=Array.isArray(w[_])?w[_]:[w[_]];for(let C=0,N=L.length;C<N;C++){const F=L[C],G=Array.isArray(F.value)?F.value:[F.value],I=Array.isArray(w[_])||Array.isArray(F.value);let z=b;for(let P=0,X=G.length;P<X;P++){const V=G[P],q=x(V,I),K=b%A,me=K%q.boundary,Ve=K+me;b+=me,Ve!==0&&A-Ve<q.storage&&(b+=A-Ve),P===0&&(z=b),b+=q.storage}const $=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new $((b-z)/Float32Array.BYTES_PER_ELEMENT),F.__offset=z}}const E=b%A;return E>0&&(b+=A-E),v.__size=b,v.__cache={},this}function x(v,w){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=16,b.storage=48):v.isMatrix4?(b.boundary=16,b.storage=64):v.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function g(v){const w=v.target;w.removeEventListener("dispose",g),s.deleteBuffer(n[w.id]),delete n[w.id],delete a[w.id]}function m(){for(const v in n)s.deleteBuffer(n[v]);n={},a={}}return{bind:r,update:o,dispose:m}}const bg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function wg(){return zi===null&&(zi=new ph(bg,16,16,Pn,oi),zi.name="DFG_LUT",zi.minFilter=ri,zi.magFilter=ri,zi.wrapS=Zi,zi.wrapT=Zi,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class Oh{constructor(e={}){const{canvas:t=Rd(),context:i=null,depth:n=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=_i}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;const x=f,g=new Set([Zo,Ko,$o]),m=new Set([_i,Vi,Ws,rs,Xo,qo]),v=new Uint32Array(4),w=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let A=null,E=null;const _=[],S=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let N=!1,F=null,G=null,I=null,z=null;this._outputColorSpace=wt;let $=0,P=0,X=null,V=-1,q=null;const K=new bt,me=new bt;let Ve=null;const Q=new Se(0);let ve=0,Ee=t.width,Fe=t.height,Me=1,Xe=null,Tt=null;const ze=new bt(0,0,Ee,Fe),dt=new bt(0,0,Ee,Fe);let mt=!1;const Je=new Ys,Gt=new sl;let Ct=!1,ni=!1;const yt=new rt,Oi=new R,Nt=new bt,Mi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yi=!1;function Si(){return X===null?Me:1}let O=i;function bi(y,U){return t.getContext(y,U)}let vt,Mt,ge,Pt,Oe,Ge,T,M,k,ne,ee,oe,fe,Z,J,he,D,j,Y,de,ae,le,Pe;try{const y={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oo}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",xe,!1),O===null){const U="webgl2";if(O=bi(U,y),O===null)throw bi(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(y){throw t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),at("WebGLRenderer: "+y.message),y}function $e(){vt=new Rm(O),vt.init(),ae=new mg(O,vt),Mt=new xm(O,vt,e,ae),ge=new fg(O,vt),Mt.reversedDepthBuffer&&u&&ge.buffers.depth.setReversed(!0),G=O.createFramebuffer(),I=O.createFramebuffer(),z=O.createFramebuffer(),Pt=new Lm(O),Oe=new j0,Ge=new pg(O,vt,ge,Oe,Mt,ae,Pt),T=new Am(C),M=new Du(O),le=new mm(O,M),k=new Cm(O,M,Pt,le),ne=new Im(O,k,M,le,Pt),j=new Dm(O,Mt,Ge),J=new _m(Oe),ee=new Q0(C,T,vt,Mt,le,J),oe=new yg(C,Oe),fe=new tg,Z=new og(vt),D=new pm(C,T,ge,ne,p,l),he=new ug(C,ne,Mt),Pe=new Sg(O,Pt,Mt,ge),Y=new gm(O,vt,Pt),de=new Pm(O,vt,Pt),Pt.programs=ee.programs,C.capabilities=Mt,C.extensions=vt,C.properties=Oe,C.renderLists=fe,C.shadowMap=he,C.state=ge,C.info=Pt}x!==_i&&(L=new Um(x,t.width,t.height,o,n,a));const se=new vg(C,O);this.xr=se,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const y=vt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=vt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(y){y!==void 0&&(Me=y,this.setSize(Ee,Fe,!1))},this.getSize=function(y){return y.set(Ee,Fe)},this.setSize=function(y,U,W=!0){if(se.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=y,Fe=U,t.width=Math.floor(y*Me),t.height=Math.floor(U*Me),W===!0&&(t.style.width=y+"px",t.style.height=U+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(Ee*Me,Fe*Me).floor()},this.setDrawingBufferSize=function(y,U,W){Ee=y,Fe=U,Me=W,t.width=Math.floor(y*W),t.height=Math.floor(U*W),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(x===_i){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(K)},this.getViewport=function(y){return y.copy(ze)},this.setViewport=function(y,U,W,B){y.isVector4?ze.set(y.x,y.y,y.z,y.w):ze.set(y,U,W,B),ge.viewport(K.copy(ze).multiplyScalar(Si()).round())},this.getScissor=function(y){return y.copy(dt)},this.setScissor=function(y,U,W,B){y.isVector4?dt.set(y.x,y.y,y.z,y.w):dt.set(y,U,W,B),ge.scissor(me.copy(dt).multiplyScalar(Si()).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(y){ge.setScissorTest(mt=y)},this.setOpaqueSort=function(y){Xe=y},this.setTransparentSort=function(y){Tt=y},this.getClearColor=function(y){return y.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,W=!0){let B=0;if(y){let H=!1;if(X!==null){const pe=X.texture.format;H=g.has(pe)}if(H){const pe=X.texture.type,be=m.has(pe),ue=D.getClearColor(),ye=D.getClearAlpha(),Re=ue.r,We=ue.g,Qe=ue.b;be?(v[0]=Re,v[1]=We,v[2]=Qe,v[3]=ye,O.clearBufferuiv(O.COLOR,0,v)):(w[0]=Re,w[1]=We,w[2]=Qe,w[3]=ye,O.clearBufferiv(O.COLOR,0,w))}else B|=O.COLOR_BUFFER_BIT}U&&(B|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(B|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&O.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),D.dispose(),fe.dispose(),Z.dispose(),Ge.dispose(),Oe.dispose(),T.dispose(),ne.dispose(),k.dispose(),le.dispose(),Pe.dispose(),ee.dispose(),se.dispose(),se.removeEventListener("sessionstart",xl),se.removeEventListener("sessionend",_l),yn.stop()};function Ie(y){y.preventDefault(),Ja("WebGLRenderer: Context Lost."),N=!0}function Ye(){Ja("WebGLRenderer: Context Restored."),N=!1;const y=Pt.autoReset,U=he.enabled,W=he.autoUpdate,B=he.needsUpdate,H=he.type;$e(),Pt.autoReset=y,he.enabled=U,he.autoUpdate=W,he.needsUpdate=B,he.type=H}function xe(y){at("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ut(y){const U=y.target;U.removeEventListener("dispose",ut),Ut(U)}function Ut(y){en(y),Oe.remove(y)}function en(y){const U=Oe.get(y).programs;U!==void 0&&(U.forEach(function(W){ee.releaseProgram(W)}),y.isShaderMaterial&&ee.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,W,B,H,pe){U===null&&(U=Mi);const be=H.isMesh&&H.matrixWorld.determinantAffine()<0,ue=qh(y,U,W,B,H);ge.setMaterial(B,be);let ye=W.index,Re=1;if(B.wireframe===!0){if(ye=k.getWireframeAttribute(W),ye===void 0)return;Re=2}const We=W.drawRange,Qe=W.attributes.position;let Te=We.start*Re,je=(We.start+We.count)*Re;pe!==null&&(Te=Math.max(Te,pe.start*Re),je=Math.min(je,(pe.start+pe.count)*Re)),ye!==null?(Te=Math.max(Te,0),je=Math.min(je,ye.count)):Qe!=null&&(Te=Math.max(Te,0),je=Math.min(je,Qe.count));const At=je-Te;if(At<0||At===1/0)return;le.setup(H,B,ue,W,ye);let _t,gt=Y;if(ye!==null&&(_t=M.get(ye),gt=de,gt.setIndex(_t)),H.isMesh)B.wireframe===!0?(ge.setLineWidth(B.wireframeLinewidth*Si()),gt.setMode(O.LINES)):gt.setMode(O.TRIANGLES);else if(H.isLine){let Xt=B.linewidth;Xt===void 0&&(Xt=1),ge.setLineWidth(Xt*Si()),H.isLineSegments?gt.setMode(O.LINES):H.isLineLoop?gt.setMode(O.LINE_LOOP):gt.setMode(O.LINE_STRIP)}else H.isPoints?gt.setMode(O.POINTS):H.isSprite&&gt.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))gt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Xt=H._multiDrawStarts,Ae=H._multiDrawCounts,Qt=H._multiDrawCount,ot=ye?M.get(ye).bytesPerElement:1,Sn=Oe.get(B).currentProgram.getUniforms();for(let qt=0;qt<Qt;qt++)Sn.setValue(O,"_gl_DrawID",qt),gt.render(Xt[qt]/ot,Ae[qt])}else if(H.isInstancedMesh)gt.renderInstances(Te,At,H.count);else if(W.isInstancedBufferGeometry){const Xt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ae=Math.min(W.instanceCount,Xt);gt.renderInstances(Te,At,Ae)}else gt.render(Te,At)};function gl(y,U,W,B){F!==null&&y.isNodeMaterial&&F.setObject(B,y),Ct===!0&&J.setState(y,W,!1),y.transparent===!0&&y.side===ft&&y.forceSinglePass===!1?(y.side=ii,y.needsUpdate=!0,us(y,U,B),y.side=pn,y.needsUpdate=!0,us(y,U,B),y.side=ft):us(y,U,B)}this.compile=function(y,U,W=null){W===null&&(W=y),F!==null&&F.renderStart(y,U,W),E=Z.get(W),E.init(U),S.push(E),W.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),y!==W&&y.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),ni=this.localClippingEnabled,Ct=J.init(this.clippingPlanes,ni),Ct===!0&&J.setGlobalState(this.clippingPlanes,U),F!==null&&he.render(E.state.shadowsArray,W,U);const B=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const pe=H.material;if(pe)if(Array.isArray(pe))for(let be=0;be<pe.length;be++){const ue=pe[be];gl(ue,W,U,H),B.add(ue)}else gl(pe,W,U,H),B.add(pe)}),E=S.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(y,U,W=null){const B=this.compile(y,U,W);return new Promise(H=>{function pe(){if(B.forEach(function(be){const ye=Oe.get(be).currentProgram;(ye===void 0||ye.isReady())&&B.delete(be)}),B.size===0){H(y);return}setTimeout(pe,10)}vt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let cr=null;function Wh(y){cr&&cr(y)}function xl(){yn.stop()}function _l(){yn.start()}const yn=new Th;yn.setAnimationLoop(Wh),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(y){cr=y,se.setAnimationLoop(y),y===null?yn.stop():yn.start()},se.addEventListener("sessionstart",xl),se.addEventListener("sessionend",_l),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(y,U);const W=se.enabled===!0&&se.isPresenting===!0,B=L!==null&&(X===null||W)&&L.begin(C,X);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(U),U=se.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,U,X),E=Z.get(y,S.length),E.init(U),E.state.textureUnits=Ge.getTextureUnits(),S.push(E),yt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Gt.setFromArrayCamera(U):Je.setFromProjectionMatrix(yt,Fi,U.reversedDepth),ni=this.localClippingEnabled,Ct=J.init(this.clippingPlanes,ni),A=fe.get(y,_.length),A.init(),_.push(A),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){const be=C.xr.getDepthSensingMesh();be!==null&&hr(be,U,-1/0,C.sortObjects)}hr(y,U,0,C.sortObjects),A.finish(),F!==null&&F.updateLights(E.state.lightsArray),C.sortObjects===!0&&A.sort(Xe,Tt),yi=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,yi&&D.addToRenderList(A,y),this.info.autoReset===!0&&this.info.reset(),Ct===!0&&J.beginShadows();const H=E.state.shadowsArray;if(he.render(H,y,U),Ct===!0&&J.endShadows(),(B&&L.hasRenderPass())===!1){const be=A.opaque,ue=A.transmissive;if(E.setupLights(),U.isArrayCamera){const ye=U.cameras;if(ue.length>0)for(let Re=0,We=ye.length;Re<We;Re++){const Qe=ye[Re];Ml(be,ue,y,Qe)}yi&&D.render(y);for(let Re=0,We=ye.length;Re<We;Re++){const Qe=ye[Re];vl(A,y,Qe,Qe.viewport)}}else ue.length>0&&Ml(be,ue,y,U),yi&&D.render(y),vl(A,y,U)}X!==null&&P===0&&(Ge.updateMultisampleRenderTarget(X),Ge.updateRenderTargetMipmap(X)),B&&L.end(C),y.isScene===!0&&y.onAfterRender(C,y,U),le.resetDefaultState(),V=-1,q=null,S.pop(),S.length>0?(E=S[S.length-1],Ge.setTextureUnits(E.state.textureUnits),Ct===!0&&J.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,F!==null&&F.renderEnd()};function hr(y,U,W,B){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){const be=U.isArrayCamera?Gt:Je;if(!y.frustumCulled||y.intersectsFrustum(be)){B&&Nt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(yt);const ue=ne.update(y),ye=y.material;ye.visible&&A.push(y,ue,ye,W,Nt.z,null,U)}}else if(y.isMesh||y.isLine||y.isPoints){const be=U.isArrayCamera?Gt:Je;if(!y.frustumCulled||y.intersectsFrustum(be)){const ue=ne.update(y),ye=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Nt.copy(y.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Nt.copy(ue.boundingSphere.center)),Nt.applyMatrix4(y.matrixWorld).applyMatrix4(yt)),Array.isArray(ye)){const Re=ue.groups;for(let We=0,Qe=Re.length;We<Qe;We++){const Te=Re[We],je=ye[Te.materialIndex];je&&je.visible&&A.push(y,ue,je,W,Nt.z,Te,U)}}else ye.visible&&A.push(y,ue,ye,W,Nt.z,null,U)}}}const pe=y.children;for(let be=0,ue=pe.length;be<ue;be++)hr(pe[be],U,W,B)}function vl(y,U,W,B){const{opaque:H,transmissive:pe,transparent:be}=y;E.setupLightsView(W),Ct===!0&&J.setGlobalState(C.clippingPlanes,W),B&&ge.viewport(K.copy(B)),H.length>0&&js(H,U,W),pe.length>0&&js(pe,U,W),be.length>0&&js(be,U,W),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ml(y,U,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){const Te=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new li(1,1,{generateMipmaps:!0,type:Te?oi:_i,minFilter:un,samples:Math.max(4,Mt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}const pe=E.state.transmissionRenderTarget[B.id],be=B.viewport||K;pe.setSize(be.z*C.transmissionResolutionScale,be.w*C.transmissionResolutionScale);const ue=C.getRenderTarget(),ye=C.getActiveCubeFace(),Re=C.getActiveMipmapLevel();C.setRenderTarget(pe),C.getClearColor(Q),ve=C.getClearAlpha(),ve<1&&C.setClearColor(16777215,.5),C.clear(),yi&&D.render(W);const We=C.toneMapping;C.toneMapping=Ji;const Qe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),Ct===!0&&J.setGlobalState(C.clippingPlanes,B),js(y,W,B),Ge.updateMultisampleRenderTarget(pe),Ge.updateRenderTargetMipmap(pe),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let je=0,At=U.length;je<At;je++){const _t=U[je],{object:gt,geometry:Xt,material:Ae,group:Qt}=_t;if(Ae.side===ft&&gt.layers.test(B.layers)){const ot=Ae.side;Ae.side=ii,Ae.needsUpdate=!0,yl(gt,W,B,Xt,Ae,Qt),Ae.side=ot,Ae.needsUpdate=!0,Te=!0}}Te===!0&&(Ge.updateMultisampleRenderTarget(pe),Ge.updateRenderTargetMipmap(pe))}C.setRenderTarget(ue,ye,Re),C.setClearColor(Q,ve),Qe!==void 0&&(B.viewport=Qe),C.toneMapping=We}function js(y,U,W){const B=U.isScene===!0?U.overrideMaterial:null;for(let H=0,pe=y.length;H<pe;H++){const be=y[H],{object:ue,geometry:ye,group:Re}=be;let We=be.material;We.allowOverride===!0&&B!==null&&(We=B),ue.layers.test(W.layers)&&yl(ue,U,W,ye,We,Re)}}function yl(y,U,W,B,H,pe){F!==null&&H.isNodeMaterial&&F.setObject(y,H),y.onBeforeRender(C,U,W,B,H,pe),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(C,U,W,B,y,pe),H.transparent===!0&&H.side===ft&&H.forceSinglePass===!1?(H.side=ii,H.needsUpdate=!0,C.renderBufferDirect(W,U,B,H,y,pe),H.side=pn,H.needsUpdate=!0,C.renderBufferDirect(W,U,B,H,y,pe),H.side=ft):C.renderBufferDirect(W,U,B,H,y,pe),y.onAfterRender(C,U,W,B,H,pe)}function Sl(y){let U=0;for(const W of y)W.texture!==null&&U++;return U}function us(y,U,W){U.isScene!==!0&&(U=Mi);const B=Oe.get(y),H=E.state.lights,pe=E.state.shadowsArray,be=H.state.version,ue=ee.getParameters(y,H.state,pe,U,W,E.state.lightProbeGridArray),ye=ee.getProgramCacheKey(ue);let Re=B.programs;B.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;const We=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;B.envMap=T.get(y.envMap||B.environment,We),B.envMapRotation=B.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Re===void 0&&(y.addEventListener("dispose",ut),Re=new Map,B.programs=Re,B.programVariants=new Map);let Qe=Re.get(ye);if(Qe!==void 0){if(B.currentProgram===Qe&&B.lightsStateVersion===be)return wl(y,ue),Qe}else ue.uniforms=ee.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,W,ue),y.onBeforeCompile(ue,C),Qe=ee.acquireProgram(ue,ye),Re.set(ye,Qe),B.uniforms=ue.uniforms;const Te=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Te.clippingPlanes=J.uniform),wl(y,ue),B.needsLights=$h(y),B.lightsStateVersion=be,B.needsLights&&(Te.ambientLightColor.value=H.state.ambient,Te.lightProbe.value=H.state.probe,Te.sunLights.value=H.state.sun,Te.sunLightShadows.value=H.state.sunShadow,Te.directionalLights.value=H.state.directional,Te.directionalLightShadows.value=H.state.directionalShadow,Te.spotLights.value=H.state.spot,Te.spotLightShadows.value=H.state.spotShadow,Te.rectAreaLights.value=H.state.rectArea,Te.ltc_1.value=H.state.rectAreaLTC1,Te.ltc_2.value=H.state.rectAreaLTC2,Te.pointLights.value=H.state.point,Te.pointLightShadows.value=H.state.pointShadow,Te.hemisphereLights.value=H.state.hemi,Te.sunShadowMatrix.value=H.state.sunShadowMatrix,Te.sunShadowCascade.value=H.state.sunShadowCascade,Te.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Te.spotLightMatrix.value=H.state.spotLightMatrix,Te.spotLightMap.value=H.state.spotLightMap,Te.pointShadowMatrix.value=H.state.pointShadowMatrix),B.numLightProbeGrids=Sl(E.state.lightProbeGridArray),B.currentProgram=Qe,B.uniformsList=null,Qe}function Xh(y,U,W,B,H){const pe=Oe.get(y),be=pe.currentProgram.id+","+B+","+H;let ue=pe.programVariants.get(be);return ue===void 0?(ue=us(y,U,W),pe.programVariants.set(be,ue)):(pe.currentProgram=ue,pe.uniformsList=null,pe.outputColorSpace=B,pe.toneMapping=H),ue}function bl(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=Ga.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function wl(y,U){const W=Oe.get(y);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function qh(y,U,W,B,H){U.isScene!==!0&&(U=Mi),Ge.resetTextureUnits();const pe=U.fog,be=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,ue=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:et.workingColorSpace,ye=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Re=T.get(B.envMap||be,ye),We=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Qe=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Te=!!W.morphAttributes.position,je=!!W.morphAttributes.normal,At=!!W.morphAttributes.color;let _t=Ji;B.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(_t=C.toneMapping);const gt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Xt=gt!==void 0?gt.length:0,Ae=Oe.get(B),Qt=E.state.lights;if(Ct===!0&&(ni===!0||y!==q)){const St=y===q&&B.id===V;J.setState(B,y,St)}let ot=!1,Sn=!1;B.version===Ae.__version?Ae.needsLights&&Ae.lightsStateVersion!==Qt.state.version||H.isBatchedMesh&&Ae.batching===!1||!H.isBatchedMesh&&Ae.batching===!0||H.isBatchedMesh&&Ae.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Ae.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Ae.instancing===!1||!H.isInstancedMesh&&Ae.instancing===!0||H.isSkinnedMesh&&Ae.skinning===!1||!H.isSkinnedMesh&&Ae.skinning===!0||H.isInstancedMesh&&Ae.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ae.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ae.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ae.instancingMorph===!1&&H.morphTexture!==null||Ae.envMap!==Re||B.fog===!0&&Ae.fog!==pe||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==J.numPlanes||Ae.numIntersection!==J.numIntersection)||Ae.vertexAlphas!==We||Ae.vertexTangents!==Qe||Ae.morphTargets!==Te||Ae.morphNormals!==je||Ae.morphColors!==At||Ae.morphTargetsCount!==Xt||Ae.numLightProbeGrids!==Sl(E.state.lightProbeGridArray)?ot=!0:(Ae.outputColorSpace!==ue||Ae.toneMapping!==_t)&&(Sn=!0):(ot=!0,Ae.__version=B.version);let qt=Ae.currentProgram;(ot===!0||Sn===!0)&&(qt=Sn===!0?Xh(B,U,H,ue,_t):us(B,U,H),F&&B.isNodeMaterial&&F.onUpdateProgram(B,qt,Ae));let ea=!1,tn=!1,bn=!1;const st=qt.getUniforms(),Ht=Ae.uniforms;if(ge.useProgram(qt.program)&&(ea=!0,tn=!0,bn=!0),B.id!==V&&(V=B.id,tn=!0),ea||q!==y){ge.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),st.setValue(O,"projectionMatrix",y.projectionMatrix),st.setValue(O,"viewMatrix",y.matrixWorldInverse);const Ft=st.map.cameraPosition;Ft!==void 0&&Ft.setValue(O,Oi.setFromMatrixPosition(y.matrixWorld)),Mt.logarithmicDepthBuffer&&st.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&st.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),q!==y&&(q=y,tn=!0,bn=!0)}if(Ae.needsLights&&(Qt.state.sunShadowMap.length>0&&st.setValue(O,"sunShadowMap",Qt.state.sunShadowMap,Ge),Qt.state.directionalShadowMap.length>0&&st.setValue(O,"directionalShadowMap",Qt.state.directionalShadowMap,Ge),Qt.state.spotShadowMap.length>0&&st.setValue(O,"spotShadowMap",Qt.state.spotShadowMap,Ge),Qt.state.pointShadowMap.length>0&&st.setValue(O,"pointShadowMap",Qt.state.pointShadowMap,Ge)),H.isSkinnedMesh){st.setOptional(O,H,"bindMatrix"),st.setOptional(O,H,"bindMatrixInverse");const St=H.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),st.setValue(O,"boneTexture",St.boneTexture,Ge))}H.isBatchedMesh&&(st.setOptional(O,H,"batchingTexture"),st.setValue(O,"batchingTexture",H._matricesTexture,Ge),st.setOptional(O,H,"batchingIdTexture"),st.setValue(O,"batchingIdTexture",H._indirectTexture,Ge),st.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&st.setValue(O,"batchingColorTexture",H._colorsTexture,Ge));const Ai=W.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&j.update(H,W,qt),(tn||Ae.receiveShadow!==H.receiveShadow)&&(Ae.receiveShadow=H.receiveShadow,st.setValue(O,"receiveShadow",H.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(Ht.envMapIntensity.value=U.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=wg()),tn){if(st.setValue(O,"toneMappingExposure",C.toneMappingExposure),Ae.needsLights&&Yh(Ht,bn),pe&&B.fog===!0&&oe.refreshFogUniforms(Ht,pe),oe.refreshMaterialUniforms(Ht,B,Me,Fe,E.state.transmissionRenderTarget[y.id]),Ae.needsLights&&Ae.numLightProbeGrids>0){const St=b;let Ft=0;for(const Wi of E.state.lightProbeGridArray)Wi.texture!==null&&(St.textures[Ft]=Wi.texture,St.min[Ft]=Wi.boundingBox.min,St.max[Ft]=Wi.boundingBox.max,St.resolution[Ft]=Wi.resolution,Ft++);for(const Wi in St)St[Wi].length=Ft;Ht.probesSH.value=St.textures,Ht.probesMin.value=St.min,Ht.probesMax.value=St.max,Ht.probesResolution.value=St.resolution}Ga.upload(O,bl(Ae),Ht,Ge)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ga.upload(O,bl(Ae),Ht,Ge),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&st.setValue(O,"center",H.center),st.setValue(O,"modelViewMatrix",H.modelViewMatrix),st.setValue(O,"normalMatrix",H.normalMatrix),st.setValue(O,"modelMatrix",H.matrixWorld),B.uniformsGroups!==void 0){const St=B.uniformsGroups;for(let Ft=0,Wi=St.length;Ft<Wi;Ft++){const Tl=St[Ft];Pe.update(Tl,qt),Pe.bind(Tl,qt)}}return qt}function Yh(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.sunLights.needsUpdate=U,y.sunLightShadows.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function $h(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(y,U,W){const B=Oe.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Oe.get(y.texture).__webglTexture=U,Oe.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const W=Oe.get(y);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,W=0){X=y,$=U,P=W;let B=null,H=!1,pe=!1;if(y){const ue=Oe.get(y);if(ue.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(O.FRAMEBUFFER,ue.__webglFramebuffer),K.copy(y.viewport),me.copy(y.scissor),Ve=y.scissorTest,ge.viewport(K),ge.scissor(me),ge.setScissorTest(Ve),V=-1;return}else if(ue.__webglFramebuffer===void 0)Ge.setupRenderTarget(y);else if(ue.__hasExternalTextures)Ge.rebindTextures(y,Oe.get(y.texture).__webglTexture,Oe.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const We=y.depthTexture;if(ue.__boundDepthTexture!==We){if(We!==null&&Oe.has(We)&&(y.width!==We.image.width||y.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(y)}}const ye=y.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(pe=!0);const Re=Oe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?B=Re[U][W]:B=Re[U],H=!0):y.samples>0&&Ge.useMultisampledRTT(y)===!1?B=Oe.get(y).__webglMultisampledFramebuffer:Array.isArray(Re)?B=Re[W]:B=Re,K.copy(y.viewport),me.copy(y.scissor),Ve=y.scissorTest}else K.copy(ze).multiplyScalar(Me).floor(),me.copy(dt).multiplyScalar(Me).floor(),Ve=mt;if(W!==0&&(B=G),ge.bindFramebuffer(O.FRAMEBUFFER,B)&&ge.drawBuffers(y,B),ge.viewport(K),ge.scissor(me),ge.setScissorTest(Ve),H){const ue=Oe.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,ue.__webglTexture,W)}else if(pe){const ue=U;for(let ye=0;ye<y.textures.length;ye++){const Re=Oe.get(y.textures[ye]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+ye,Re.__webglTexture,W,ue)}}else if(y!==null&&W!==0){const ue=Oe.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ue.__webglTexture,W)}V=-1};function El(y){const U=Oe.get(y);return(U.__readFormat!==y.format||U.__readType!==y.type)&&(U.__readFormat=y.format,U.__readType=y.type,U.__formatReadable=Mt.textureFormatReadable(y.format),U.__typeReadable=Mt.textureTypeReadable(y.type)),U}this.readRenderTargetPixels=function(y,U,W,B,H,pe,be,ue=0){if(!(y&&y.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Oe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&be!==void 0&&(ye=ye[be],Array.isArray(ye)&&(ye=ye[0])),ye){ge.bindFramebuffer(O.FRAMEBUFFER,ye);try{const Re=y.textures[ue],We=Re.format,Qe=Re.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ue);const Te=El(Re);if(Te.__formatReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-B&&W>=0&&W<=y.height-H&&O.readPixels(U,W,B,H,ae.convert(We),ae.convert(Qe),pe)}finally{const Re=X!==null?Oe.get(X).__webglFramebuffer:null;ge.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(y,U,W,B,H,pe,be,ue=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Oe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&be!==void 0&&(ye=ye[be],Array.isArray(ye)&&(ye=ye[0])),ye)if(U>=0&&U<=y.width-B&&W>=0&&W<=y.height-H){ge.bindFramebuffer(O.FRAMEBUFFER,ye);const Re=y.textures[ue],We=Re.format,Qe=Re.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ue);const Te=El(Re);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,je),O.bufferData(O.PIXEL_PACK_BUFFER,pe.byteLength,O.STREAM_READ),O.readPixels(U,W,B,H,ae.convert(We),ae.convert(Qe),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const At=X!==null?Oe.get(X).__webglFramebuffer:null;ge.bindFramebuffer(O.FRAMEBUFFER,At);const _t=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Cd(O,_t,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,je),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,pe),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(je),O.deleteSync(_t),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,W=0){const B=Math.pow(2,-W),H=Math.floor(y.image.width*B),pe=Math.floor(y.image.height*B),be=U!==null?U.x:0,ue=U!==null?U.y:0;Ge.setTexture2D(y,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,be,ue,H,pe),ge.unbindTexture()},this.copyTextureToTexture=function(y,U,W=null,B=null,H=0,pe=0){let be,ue,ye,Re,We,Qe,Te,je,At;const _t=y.isCompressedTexture?y.mipmaps[pe]:y.image;if(W!==null)be=W.max.x-W.min.x,ue=W.max.y-W.min.y,ye=W.isBox3?W.max.z-W.min.z:1,Re=W.min.x,We=W.min.y,Qe=W.isBox3?W.min.z:0;else{const st=Math.pow(2,-H);be=Math.floor(_t.width*st),ue=Math.floor(_t.height*st),y.isDataArrayTexture?ye=_t.depth:y.isData3DTexture?ye=Math.floor(_t.depth*st):ye=1,Re=0,We=0,Qe=0}B!==null?(Te=B.x,je=B.y,At=B.z):(Te=0,je=0,At=0);const gt=ae.convert(U.format),Xt=ae.convert(U.type);let Ae;U.isData3DTexture?(Ge.setTexture3D(U,0),Ae=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ge.setTexture2DArray(U,0),Ae=O.TEXTURE_2D_ARRAY):(Ge.setTexture2D(U,0),Ae=O.TEXTURE_2D),ge.activeTexture(O.TEXTURE0),ge.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),ge.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ge.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);const Qt=ge.getParameter(O.UNPACK_ROW_LENGTH),ot=ge.getParameter(O.UNPACK_IMAGE_HEIGHT),Sn=ge.getParameter(O.UNPACK_SKIP_PIXELS),qt=ge.getParameter(O.UNPACK_SKIP_ROWS),ea=ge.getParameter(O.UNPACK_SKIP_IMAGES);ge.pixelStorei(O.UNPACK_ROW_LENGTH,_t.width),ge.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_t.height),ge.pixelStorei(O.UNPACK_SKIP_PIXELS,Re),ge.pixelStorei(O.UNPACK_SKIP_ROWS,We),ge.pixelStorei(O.UNPACK_SKIP_IMAGES,Qe);const tn=y.isDataArrayTexture||y.isData3DTexture,bn=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const st=Oe.get(y),Ht=Oe.get(U),Ai=Oe.get(st.__renderTarget),St=Oe.get(Ht.__renderTarget);ge.bindFramebuffer(O.READ_FRAMEBUFFER,Ai.__webglFramebuffer),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Ft=0;Ft<ye;Ft++)tn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.get(y).__webglTexture,H,Qe+Ft),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.get(U).__webglTexture,pe,At+Ft)),O.blitFramebuffer(Re,We,Re+be,We+ue,Te,je,Te+be,je+ue,O.DEPTH_BUFFER_BIT,O.NEAREST);ge.bindFramebuffer(O.READ_FRAMEBUFFER,null),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||Oe.has(y)){const st=Oe.get(y),Ht=Oe.get(U);ge.bindFramebuffer(O.READ_FRAMEBUFFER,I),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,z);for(let Ai=0;Ai<ye;Ai++)tn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,st.__webglTexture,H,Qe+Ai):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,st.__webglTexture,H),bn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ht.__webglTexture,pe,At+Ai):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ht.__webglTexture,pe),H!==0?O.blitFramebuffer(Re,We,Re+be,We+ue,Te,je,Te+be,je+ue,O.COLOR_BUFFER_BIT,O.NEAREST):bn?O.copyTexSubImage3D(Ae,pe,Te,je,At+Ai,Re,We,be,ue):O.copyTexSubImage2D(Ae,pe,Te,je,Re,We,be,ue);ge.bindFramebuffer(O.READ_FRAMEBUFFER,null),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else bn?y.isDataTexture||y.isData3DTexture?O.texSubImage3D(Ae,pe,Te,je,At,be,ue,ye,gt,Xt,_t.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Ae,pe,Te,je,At,be,ue,ye,gt,_t.data):O.texSubImage3D(Ae,pe,Te,je,At,be,ue,ye,gt,Xt,_t):y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,pe,Te,je,be,ue,gt,Xt,_t.data):y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,pe,Te,je,_t.width,_t.height,gt,_t.data):O.texSubImage2D(O.TEXTURE_2D,pe,Te,je,be,ue,gt,Xt,_t);ge.pixelStorei(O.UNPACK_ROW_LENGTH,Qt),ge.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ot),ge.pixelStorei(O.UNPACK_SKIP_PIXELS,Sn),ge.pixelStorei(O.UNPACK_SKIP_ROWS,qt),ge.pixelStorei(O.UNPACK_SKIP_IMAGES,ea),pe===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(Ae),ge.unbindTexture()},this.initRenderTarget=function(y){Oe.get(y).__webglFramebuffer===void 0&&Ge.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ge.setTextureCube(y,0):y.isData3DTexture?Ge.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ge.setTexture2DArray(y,0):Ge.setTexture2D(y,0),ge.unbindTexture()},this.resetState=function(){$=0,P=0,X=null,ge.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const Ha={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ds{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Eg=new rl(-1,1,1,-1,0,1);class Tg extends xt{constructor(){super(),this.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new tt([0,2,0,0,2,0],2))}}const Ag=new Tg;class ll{constructor(e){this._mesh=new ce(Ag,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Eg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Rg extends ds{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=$s.clone(e.uniforms),this.material=new Zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ll(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Nc extends ds{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),a.buffers.stencil.setFunc(n.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(n.EQUAL,1,4294967295),a.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),a.buffers.stencil.setLocked(!0)}}class Cg extends ds{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Pg{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ce);this._width=i.width,this._height=i.height,t=new li(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:oi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rg(Ha),this.copyPass.material.blending=Cn,this.timer=new Eh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,a=this.passes.length;n<a;n++){const r=this.passes[n];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Nc!==void 0&&(r instanceof Nc?i=!0:r instanceof Cg&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Lg extends ds{constructor(e,t,i=null,n=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Se}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=n}}const Dg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Se(0)},defaultOpacity:{value:0}},vertexShader:`

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

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class cs extends ds{constructor(e,t=1,i,n){super(),this.strength=t,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new Ce(e.x,e.y):new Ce(256,256),this.clearColor=new Se(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new li(a,r,{type:oi,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new li(a,r,{type:oi,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new li(a,r,{type:oi,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),a=Math.round(a/2),r=Math.round(r/2)}const o=Dg;this.highPassUniforms=$s.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Zt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ce(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=$s.clone(Ha.uniforms),this.blendMaterial=new Zt({uniforms:this.copyUniforms,vertexShader:Ha.vertexShader,fragmentShader:Ha.fragmentShader,premultipliedAlpha:!0,blending:zt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Se,this._oldClearAlpha=1,this._basic=new pt,this._fsQuad=new ll(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,n),this.renderTargetsVertical[a].setSize(i,n),this.separableBlurMaterials[a].uniforms.invSize.value=new Ce(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=cs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=cs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(i*i))/i);const n=[],a=[];for(let r=1;r<e;r+=2){const o=t[r],l=r+1<e?t[r+1]:0,c=o+l;n.push((r*o+(r+1)*l)/c),a.push(c)}return new Zt({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ce(.5,.5)},direction:{value:new Ce(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:n},gaussianWeights:{value:a}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Zt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}cs.BlurDirectionX=new Ce(1,0);cs.BlurDirectionY=new Ce(0,1);const Da={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Ig extends ds{constructor(){super(),this.isOutputPass=!0,this.uniforms=$s.clone(Da.uniforms),this.material=new Mh({name:Da.name,uniforms:this.uniforms,vertexShader:Da.vertexShader,fragmentShader:Da.fragmentShader}),this._fsQuad=new ll(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},et.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Bo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===zo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ko?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Zs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ho?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Vo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Go&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Li=s=>440*Math.pow(2,(s-69)/12);class Ng{constructor(){this.ctx=null,this.master=null,this.musicGain=null,this.sfxGain=null,this.ambientGain=null,this.enabled=localStorage.getItem("soulyard-muted")!=="1",this.started=!1,this.nextStep=0,this.step=0,this.bpm=84,this.musicTimer=null,this.birdTimer=null,this.ambienceStarted=!1,this._lastShot=0}ensure(){if(this.ctx)return this.ctx.state==="suspended"&&this.ctx.resume(),!0;const e=window.AudioContext||window.webkitAudioContext;if(!e)return!1;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.enabled?.85:0;const t=this.ctx.createDynamicsCompressor();return t.threshold.value=-18,t.knee.value=18,t.ratio.value=3,t.attack.value=.003,t.release.value=.25,this.master.connect(t).connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.21,this.musicGain.connect(this.master),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.6,this.sfxGain.connect(this.master),this.ambientGain=this.ctx.createGain(),this.ambientGain.gain.value=.3,this.ambientGain.connect(this.master),this.noiseBuffer=this.makeNoise(2),!0}makeNoise(e){const t=Math.floor(this.ctx.sampleRate*e),i=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=i.getChannelData(0);let a=0;for(let r=0;r<t;r++){const o=Math.random()*2-1;a=(a+.02*o)/1.02,n[r]=a*3.5}return i}start(){!this.ensure()||this.started||(this.started=!0,this.startAmbience(),this.startMusic(),this.scheduleBirds())}setEnabled(e){if(this.enabled=e,localStorage.setItem("soulyard-muted",e?"0":"1"),this.ensure()){const t=this.ctx.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.setTargetAtTime(e?.85:0,t,.08)}e&&this.start()}toggle(){return this.setEnabled(!this.enabled),this.enabled}startAmbience(){if(this.ambienceStarted)return;this.ambienceStarted=!0;const e=this.ctx,t=e.createBufferSource();t.buffer=this.noiseBuffer,t.loop=!0;const i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=620,i.Q.value=.4;const n=e.createGain();n.gain.value=.22;const a=e.createOscillator();a.frequency.value=.09;const r=e.createGain();r.gain.value=.12,a.connect(r).connect(n.gain),t.connect(i).connect(n).connect(this.ambientGain),t.start(),a.start();const o=e.createBufferSource();o.buffer=this.noiseBuffer,o.loop=!0;const l=e.createBiquadFilter();l.type="highpass",l.frequency.value=1800;const c=e.createGain();c.gain.value=.035;const h=e.createOscillator();h.frequency.value=.05;const d=e.createGain();d.gain.value=.025,h.connect(d).connect(c.gain),o.connect(l).connect(c).connect(this.ambientGain),o.start(),h.start()}scheduleBirds(){if(this.birdTimer)return;const e=()=>{this.enabled&&this.ctx?.state==="running"&&Math.random()<.75&&this.bird(),this.birdTimer=setTimeout(e,2600+Math.random()*6500)};this.birdTimer=setTimeout(e,2200)}bird(){const e=this.ctx,t=e.currentTime,i=e.createStereoPanner?e.createStereoPanner():null;i&&(i.pan.value=Math.random()*1.6-.8,i.connect(this.ambientGain));const n=2+Math.floor(Math.random()*3);for(let a=0;a<n;a++){const r=e.createOscillator();r.type="sine";const o=e.createGain(),l=t+a*.09+Math.random()*.03,c=1700+Math.random()*1400;r.frequency.setValueAtTime(c,l),r.frequency.exponentialRampToValueAtTime(c*(1.2+Math.random()*.5),l+.07),r.frequency.exponentialRampToValueAtTime(c*.8,l+.12),o.gain.setValueAtTime(0,l),o.gain.linearRampToValueAtTime(.055,l+.012),o.gain.exponentialRampToValueAtTime(1e-4,l+.16),r.connect(o),i?o.connect(i):o.connect(this.ambientGain),r.start(l),r.stop(l+.2)}}startMusic(){this.musicTimer||(this.nextStep=this.ctx.currentTime+.2,this.step=0,this.musicTimer=setInterval(()=>this.scheduleMusic(),90))}scheduleMusic(){if(!this.ctx||this.ctx.state!=="running")return;const e=60/this.bpm/2;for(;this.nextStep<this.ctx.currentTime+.28;)this.playStep(this.step,this.nextStep),this.nextStep+=e,this.step=(this.step+1)%64}playStep(e,t){const i=Math.floor(e/8),n=e%8,r=[[57,60,64,67],[53,57,60,64],[48,55,60,64],[55,59,62,65],[57,60,64,67],[50,53,57,60],[53,57,60,64],[55,59,62,64]][i];if(n===0||n===5){const c=r[0]-12;this.tone(Li(c),t,.5,"sine",.2,280),this.tone(Li(c),t,.4,"triangle",.055,500)}n===3&&this.tone(Li(r[0]-5),t,.24,"sine",.08,320),(n===2||n===6)&&r.slice(1).forEach((c,h)=>this.tone(Li(c+12),t+h*.004,.1,"triangle",.025,1800));const l=[[76,null,79,null,81,null,79,null],[72,null,76,77,null,76,null,72],[79,null,81,null,84,81,79,null],[74,76,null,79,null,76,74,null],[76,79,null,81,null,null,79,76],[69,null,72,null,74,76,null,null],[72,null,74,76,null,79,null,81],[79,null,77,null,74,null,72,null]][i][n];l&&this.steelDrum(Li(l),t,.32+n%2*.1),(n%2===1||n===4)&&this.shaker(t,n===4?.05:.028),(n===0||n===4)&&this.kick(t,n===0?.18:.1),e%16===14&&this.tone(Li(r[2]+12),t+.15,.5,"sine",.03,2600)}tone(e,t,i,n="sine",a=.1,r=2e3){const o=this.ctx,l=o.createOscillator();l.type=n,l.frequency.value=e;const c=o.createBiquadFilter();c.type="lowpass",c.frequency.value=r;const h=o.createGain();h.gain.setValueAtTime(1e-4,t),h.gain.exponentialRampToValueAtTime(Math.max(2e-4,a),t+.012),h.gain.exponentialRampToValueAtTime(1e-4,t+i),l.connect(c).connect(h).connect(this.musicGain),l.start(t),l.stop(t+i+.05)}steelDrum(e,t,i){const n=this.ctx,a=n.createOscillator();a.type="sine",a.frequency.value=e;const r=n.createOscillator();r.type="sine",r.frequency.value=e*2.01;const o=n.createGain();o.gain.setValueAtTime(e*1.8,t),o.gain.exponentialRampToValueAtTime(e*.2,t+.18),r.connect(o).connect(a.frequency);const l=n.createGain();l.gain.setValueAtTime(1e-4,t),l.gain.exponentialRampToValueAtTime(.12,t+.008),l.gain.exponentialRampToValueAtTime(1e-4,t+i);const c=n.createStereoPanner?n.createStereoPanner():null;c?(c.pan.value=Math.sin(t*.4)*.3,a.connect(l).connect(c).connect(this.musicGain)):a.connect(l).connect(this.musicGain),a.start(t),r.start(t),a.stop(t+i+.1),r.stop(t+i+.1)}shaker(e,t){const i=this.ctx,n=i.createBufferSource();n.buffer=this.noiseBuffer;const a=i.createBiquadFilter();a.type="highpass",a.frequency.value=4800;const r=i.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(t,e+.005),r.gain.exponentialRampToValueAtTime(1e-4,e+.09),n.connect(a).connect(r).connect(this.musicGain),n.start(e,Math.random()),n.stop(e+.1)}kick(e,t){const i=this.ctx,n=i.createOscillator();n.type="sine",n.frequency.setValueAtTime(120,e),n.frequency.exponentialRampToValueAtTime(44,e+.13);const a=i.createGain();a.gain.setValueAtTime(t,e),a.gain.exponentialRampToValueAtTime(1e-4,e+.16),n.connect(a).connect(this.musicGain),n.start(e),n.stop(e+.18)}now(){return this.ctx?.currentTime??0}sfx(e){if(!this.enabled||!this.ensure())return;const t=this.ctx.currentTime,i=this.ctx;switch(e){case"shoot":{if(t-this._lastShot<.03)return;this._lastShot=t;const n=i.createOscillator();n.type="square",n.frequency.setValueAtTime(680+Math.random()*120,t),n.frequency.exponentialRampToValueAtTime(190,t+.075);const a=i.createGain();a.gain.setValueAtTime(.11,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.09);const r=i.createBiquadFilter();r.type="bandpass",r.frequency.value=900,r.Q.value=1.4,n.connect(r).connect(a).connect(this.sfxGain),n.start(t),n.stop(t+.1);break}case"hit":{const n=i.createOscillator();n.type="triangle",n.frequency.setValueAtTime(210,t),n.frequency.exponentialRampToValueAtTime(70,t+.1);const a=i.createGain();a.gain.setValueAtTime(.18,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.12),n.connect(a).connect(this.sfxGain),n.start(t),n.stop(t+.14);break}case"crit":{const n=i.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(520,t),n.frequency.exponentialRampToValueAtTime(140,t+.13);const a=i.createGain();a.gain.setValueAtTime(.12,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.15),n.connect(a).connect(this.sfxGain),n.start(t),n.stop(t+.17);break}case"hurt":{const n=i.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(120,t),n.frequency.exponentialRampToValueAtTime(55,t+.22);const a=i.createGain();a.gain.setValueAtTime(.16,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.24),n.connect(a).connect(this.sfxGain),n.start(t),n.stop(t+.26);break}case"dash":{const n=i.createBufferSource();n.buffer=this.noiseBuffer;const a=i.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(300,t),a.frequency.exponentialRampToValueAtTime(1800,t+.22),a.Q.value=.9;const r=i.createGain();r.gain.setValueAtTime(.1,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.25),n.connect(a).connect(r).connect(this.sfxGain),n.start(t),n.stop(t+.3);break}case"jump":{const n=i.createOscillator();n.type="sine",n.frequency.setValueAtTime(220,t),n.frequency.exponentialRampToValueAtTime(480,t+.12);const a=i.createGain();a.gain.setValueAtTime(.06,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.14),n.connect(a).connect(this.sfxGain),n.start(t),n.stop(t+.16);break}case"orb":{const n=i.createBufferSource();n.buffer=this.noiseBuffer;const a=i.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(500,t),a.frequency.exponentialRampToValueAtTime(2400,t+.3),a.Q.value=1.2;const r=i.createGain();r.gain.setValueAtTime(.09,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.32),n.connect(a).connect(r).connect(this.sfxGain),n.start(t),n.stop(t+.35);const o=i.createOscillator();o.type="sine",o.frequency.setValueAtTime(600,t),o.frequency.exponentialRampToValueAtTime(900,t+.25);const l=i.createGain();l.gain.setValueAtTime(.04,t),l.gain.exponentialRampToValueAtTime(1e-4,t+.3),o.connect(l).connect(this.sfxGain),o.start(t),o.stop(t+.32);break}case"capture":{[64,69,72,76,81].forEach((a,r)=>{const o=i.createOscillator();o.type=r%2?"sine":"triangle",o.frequency.value=Li(a);const l=i.createGain(),c=t+r*.085;l.gain.setValueAtTime(1e-4,c),l.gain.exponentialRampToValueAtTime(.1,c+.015),l.gain.exponentialRampToValueAtTime(1e-4,c+.7),o.connect(l).connect(this.sfxGain),o.start(c),o.stop(c+.75)});break}case"levelup":{[57,60,64,69,72,76].forEach((n,a)=>{const r=i.createOscillator();r.type="sine",r.frequency.value=Li(n);const o=i.createGain(),l=t+a*.07;o.gain.setValueAtTime(1e-4,l),o.gain.exponentialRampToValueAtTime(.08,l+.02),o.gain.exponentialRampToValueAtTime(1e-4,l+.55),r.connect(o).connect(this.sfxGain),r.start(l),r.stop(l+.6)});break}case"quest":{[69,72,76,81].forEach((n,a)=>{const r=i.createOscillator();r.type="triangle",r.frequency.value=Li(n);const o=i.createGain(),l=t+a*.11;o.gain.setValueAtTime(1e-4,l),o.gain.exponentialRampToValueAtTime(.06,l+.02),o.gain.exponentialRampToValueAtTime(1e-4,l+.9),r.connect(o).connect(this.sfxGain),r.start(l),r.stop(l+.95)});break}case"ui":{const n=i.createOscillator();n.type="sine",n.frequency.value=660;const a=i.createGain();a.gain.setValueAtTime(.04,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.07),n.connect(a).connect(this.sfxGain),n.start(t),n.stop(t+.08);break}case"boss":{const n=i.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(68,t),n.frequency.exponentialRampToValueAtTime(38,t+1.1);const a=i.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(320,t),a.frequency.exponentialRampToValueAtTime(90,t+1.2);const r=i.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.18,t+.08),r.gain.exponentialRampToValueAtTime(1e-4,t+1.4),n.connect(a).connect(r).connect(this.sfxGain),n.start(t),n.stop(t+1.5);break}case"death":{[57,55,52,48].forEach((n,a)=>{const r=i.createOscillator();r.type="sine",r.frequency.value=Li(n);const o=i.createGain(),l=t+a*.18;o.gain.setValueAtTime(1e-4,l),o.gain.exponentialRampToValueAtTime(.08,l+.03),o.gain.exponentialRampToValueAtTime(1e-4,l+1.2),r.connect(o).connect(this.sfxGain),r.start(l),r.stop(l+1.3)});break}case"heal":{[72,76,79].forEach((n,a)=>{const r=i.createOscillator();r.type="sine",r.frequency.value=Li(n);const o=i.createGain(),l=t+a*.06;o.gain.setValueAtTime(1e-4,l),o.gain.exponentialRampToValueAtTime(.05,l+.02),o.gain.exponentialRampToValueAtTime(1e-4,l+.45),r.connect(o).connect(this.sfxGain),r.start(l),r.stop(l+.5)});break}}}}const Rn={fire:{name:"Fire",glyph:"△",color:"#ff6b4a",glow:"#ffb36b"},water:{name:"Water",glyph:"≋",color:"#79dcff",glow:"#bdf2ff"},earth:{name:"Earth",glyph:"⬢",color:"#e3b94f",glow:"#ffe7a1"},air:{name:"Air",glyph:"⌁",color:"#8ff0ce",glow:"#d3fff1"},spirit:{name:"Spirit",glyph:"✦",color:"#c7a4ff",glow:"#eadcff"},shadow:{name:"Shadow",glyph:"☾",color:"#9f7bff",glow:"#cdb8ff"}},Uc={fire:"air",air:"earth",earth:"water",water:"fire"};function Bh(s,e){return!s||s==="aether"?1:s==="spirit"&&e==="shadow"||s==="shadow"&&e==="spirit"||Uc[s]===e?1.35:Uc[e]===s?.76:s===e?.9:1}const Ks=[{id:"anansi",no:1,name:"ANANSI",epithet:"The Silver Weaver",type:"spirit",origin:"AKAN · JAMAICAN FOLKLORE",zone:"Silk Cotton Grove",lore:"The spider who spun stories out of nothing and sold them to the sky. He still keeps every promise — especially the crooked ones.",passive:{name:"Weaver's Luck",desc:"+25% capture chance"},ability:{name:"WEB SNARE",desc:"Tethers nearby spirits and slows them",radius:14,damage:12,cooldown:11},stats:{hp:46,speed:3.15,damage:7,scale:1.05,build:"spider",behavior:"ranged",fly:!1},colors:{primary:1381653,secondary:2776396,accent:16042333,glow:8257490,eye:10354527},spawn:{x:2,z:-47,radius:18,count:3,levels:[5,8]}},{id:"calf",no:2,name:"ROLLING CALF",epithet:"Ember Hoof",type:"fire",origin:"JAMAICAN FOLKLORE",zone:"Blue Mountain Rise",lore:"A calf of living flame that patrols the mountain roads after dark. Its hoofbeats sound like distant thunder, and its eyes burn like coals.",passive:{name:"Kindled Shots",desc:"Shots set spirits burning"},ability:{name:"EMBER CHARGE",desc:"Blazing charge that scatters foes",radius:10,damage:26,cooldown:10},stats:{hp:66,speed:3.65,damage:10,scale:1.12,build:"calf",behavior:"melee",fly:!1},colors:{primary:2823954,secondary:8203287,accent:16739125,glow:16753994,eye:16765286},spawn:{x:-27,z:-5,radius:20,count:3,levels:[4,7]}},{id:"mami",no:3,name:"MAMI WATA",epithet:"Tide Mother",type:"water",origin:"WEST AFRICAN · CARIBBEAN",zone:"Waterfall Pools",lore:"A water spirit of sweet rivers and deep memory. Sailors leave her bright cloth and honey; she leaves them the tide.",passive:{name:"Tidal Mend",desc:"Slowly restores your health"},ability:{name:"HEALING SPRING",desc:"A restorative ring of water",radius:11,damage:0,heal:34,cooldown:14},stats:{hp:60,speed:2.85,damage:7,scale:1.18,build:"serpent",behavior:"ranged",fly:!0},colors:{primary:748919,secondary:3328449,accent:12448511,glow:6482431,eye:16777215},spawn:{x:-31,z:-9,radius:17,count:3,levels:[4,7]}},{id:"quetzal",no:4,name:"QUETZALCOATL",epithet:"Feather Wind",type:"air",origin:"AZTEC MYTHOLOGY",zone:"Silk Cotton Canopy",lore:"The plumed serpent who taught the sky to sing and the wind to carry seeds. Every emerald feather is a sentence in a forgotten language.",passive:{name:"Featherstep",desc:"+12% movement speed"},ability:{name:"GALE BURST",desc:"A spiral gust that knocks spirits back",radius:13,damage:20,cooldown:11},stats:{hp:55,speed:3.55,damage:8,scale:1.36,build:"feathered",behavior:"ranged",fly:!0},colors:{primary:1010507,secondary:2213517,accent:16765286,glow:9433294,eye:16774084},spawn:{x:11,z:-33,radius:17,count:3,levels:[5,8]}},{id:"nian",no:5,name:"NIAN",epithet:"Mountain Maw",type:"earth",origin:"CHINESE MYTHOLOGY",zone:"Blue Mountain Rise",lore:"A lion-beast that sleeps beneath the hills and wakes when the old year ends. The mountain trembles when it turns over in its sleep.",passive:{name:"Stone Hide",desc:"+25 starting shield"},ability:{name:"QUAKE",desc:"Splits the ground in a wide ring",radius:15,damage:30,cooldown:13},stats:{hp:86,speed:2.95,damage:12,scale:1.3,build:"lion",behavior:"melee",fly:!1},colors:{primary:9380893,secondary:14262823,accent:16769178,glow:16757575,eye:16773560},spawn:{x:-44,z:-19,radius:16,count:2,levels:[6,9]}},{id:"bakunawa",no:6,name:"BAKUNAWA",epithet:"Moon Eater",type:"shadow",origin:"FILIPINO MYTHOLOGY",zone:"Luminous Reef",lore:"A sea serpent who swallows moons and hungers still. The drums of the reef are played to make her spit the light back out.",passive:{name:"Eclipse Eye",desc:"+20% critical damage"},ability:{name:"MOONBEAM",desc:"A piercing lance of borrowed moonlight",radius:9,damage:34,cooldown:12},stats:{hp:62,speed:3.15,damage:10,scale:1.44,build:"moon",behavior:"ranged",fly:!0},colors:{primary:2366030,secondary:5979814,accent:12448511,glow:10451967,eye:16773560},spawn:{x:62,z:18,radius:18,count:3,levels:[6,9]}},{id:"kitsune",no:7,name:"KITSUNE",epithet:"The Nine Lanterns",type:"spirit",origin:"JAPANESE MYTHOLOGY",zone:"Silk Cotton Grove",lore:"A fox whose tails carry the souls of old lanterns. Each flame remembers a traveler who never came home.",passive:{name:"Lantern Soul",desc:"+35% aether regeneration"},ability:{name:"FOXFIRE",desc:"A fan of seeking spirit flames",radius:12,damage:22,cooldown:9},stats:{hp:52,speed:3.85,damage:8,scale:1.02,build:"fox",behavior:"ranged",fly:!1},colors:{primary:15985110,secondary:14262823,accent:16773560,glow:16762967,eye:16757575},spawn:{x:6,z:-44,radius:15,count:2,levels:[5,8]}},{id:"raven",no:8,name:"RAVEN",epithet:"Masked Trickster",type:"shadow",origin:"PACIFIC NORTHWEST",zone:"Pimento Beach",lore:"The raven who stole the sun and left us starlight. He wears a white mask so the dark will not recognize him.",passive:{name:"Starlight Thief",desc:"+30% soul orb drops"},ability:{name:"NIGHT DIVE",desc:"A diving strike from the dark",radius:10,damage:25,cooldown:10},stats:{hp:46,speed:4.35,damage:7,scale:.95,build:"raven",behavior:"ranged",fly:!0},colors:{primary:789779,secondary:2501180,accent:15262420,glow:10451967,eye:13482239},spawn:{x:14,z:61,radius:18,count:2,levels:[2,5]}}],ws=Object.fromEntries(Ks.map(s=>[s.id,s])),Bs=[{id:"nian-prime",species:"nian",name:"NIAN PRIME",warden:"WARDEN OF THE MOUNTAIN",shrine:"mountain",level:12,hp:430,scale:2.55,color:"#f4c95d",final:!1,intro:"The hill itself has learned to hunger.",lore:"Stone hides a hunger older than the parish. Break it before the mountain breaks the village."},{id:"bakunawa-prime",species:"bakunawa",name:"BAKUNAWA PRIME",warden:"WARDEN OF THE REEF",shrine:"reef",level:13,hp:390,scale:2.5,color:"#9f7bff",final:!1,intro:"The moon is missing a bite, and the tide is rising.",lore:"She has eaten every moon in the reef song. Give her back the light."},{id:"quetzal-prime",species:"quetzal",name:"QUETZAL PRIME",warden:"WARDEN OF THE CANOPY",shrine:"canopy",level:14,hp:410,scale:2.6,color:"#8ff0ce",final:!1,intro:"The canopy is screaming in a language of feathers.",lore:"The wind has forgotten how to carry seeds. Remind it."},{id:"anansi-unbound",species:"anansi",name:"ANANSI UNBOUND",warden:"THE UNBOUND TRICKSTER",shrine:"tree",level:18,hp:760,scale:3.1,color:"#c7a4ff",final:!0,intro:"Every story he ever told has come home to roost.",lore:"The weaver has tangled every ward into one. Cut the story loose."}];Object.fromEntries(Bs.filter(s=>!s.final).map(s=>[s.shrine,s]));Bs.find(s=>s.final);const Kt={mountain:{id:"mountain",name:"MOUNTAIN SHRINE",short:"Mountain",x:-47,z:-25,y:17.2,color:"#f4c95d",zone:"Blue Mountain Rise"},reef:{id:"reef",name:"MOON REEF SHRINE",short:"Reef",x:66,z:10,y:4.2,color:"#9f7bff",zone:"Luminous Reef"},canopy:{id:"canopy",name:"CANOPY SHRINE",short:"Canopy",x:6,z:-36,y:7.4,color:"#8ff0ce",zone:"Silk Cotton Grove"},tree:{id:"tree",name:"GREAT SILK COTTON",short:"Silk Cotton",x:-2,z:-64,y:6.8,color:"#f4c95d",zone:"Silk Cotton Grove"}},Ni=[{id:"nya",name:"ELDER NYA",role:"VILLAGE ELDER",glyph:"✺",x:24.5,z:40.5,lines:["You feel it too, don't you? The island is holding its breath.","Three Wardens keep Pimento Isle in balance — one in the mountain, one in the reef, one in the canopy. Something has tangled them all.","Take this little one. A kitsune, born under a lantern moon. She will lend you her fire, and her nose for mischief.","Shoot a spirit until its soul shows, then throw a soul orb. We do not kill what we can bond. Now go — the Great Silk Cotton is already dropping leaves in the dry season."],after:"The Wardens are restless. Follow the path, child. And come back to me when your soul is tired — I will mend what I can."},{id:"fitz",name:"FITZ",role:"BOATMAN OF PIMENTO BEACH",glyph:"⚓",x:13,z:76,lines:["Easy with that aether, Warden. The reef spirits get jumpy when the tide turns.","Air beats earth, earth beats water, water beats fire, fire beats air. Spirit and shadow? They just plain hate each other.","Throw a soul orb with your off hand. A weakened spirit goes in peaceful — a strong one just laughs at you.","Me? I stay with the boat. Somebody has to keep the rum warm."],after:"Tide's still wrong. If you see a moon with a bite out of it, run."}],Ug=4,Fg=.35,di={hp:100,aether:100,speed:6.4,jump:8.2,damage:11,fireRate:6.2,aetherCost:4.2,aetherRegen:22,dashSpeed:15,dashCooldown:1.5},ct=(s,e,t)=>Math.max(e,Math.min(t,s)),Wt=(s,e,t)=>s+(e-s)*t,zs=(s,e,t,i)=>Wt(s,e,1-Math.exp(-t*i)),Uo=(s,e)=>(s%e+e)%e,Le=Math.PI*2;function si(s,e,t){const i=ct((t-s)/(e-s),0,1);return i*i*(3-2*i)}function ks(s,e,t){let i=Uo(e-s+Math.PI,Le)-Math.PI;return s+i*t}function Ls(s,e){let t=s*374761393+e*668265263;return t=(t^t>>13)*1274126177,t=t^t>>16,(t>>>0)/4294967295}function zh(s,e){const t=Math.floor(s),i=Math.floor(e),n=s-t,a=e-i,r=n*n*(3-2*n),o=a*a*(3-2*a),l=Ls(t,i),c=Ls(t+1,i),h=Ls(t,i+1),d=Ls(t+1,i+1);return Wt(Wt(l,c,r),Wt(h,d,r),o)}function Gs(s,e){let t=0,i=.5,n=1;for(let a=0;a<4;a++)t+=zh(s*n,e*n)*i,i*=.5,n*=2.02;return t}function kh(s,e,t=4){let i=0,n=.5,a=1,r=0;for(let o=0;o<t;o++)i+=zh(s*a,e*a)*n,r+=n,n*=.5,a*=2.03;return i/r}function Gr(s){let e=s>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Og(s,e,t){return e+(t-e)*s()}function Hr(s,e,t,i){return Math.hypot(s-t,e-i)}function ts(s="rgba(255,255,255,1)",e="rgba(255,255,255,0)",t=128,i=null){const n=document.createElement("canvas");n.width=n.height=t;const a=n.getContext("2d"),r=a.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);i?i.forEach(([l,c])=>r.addColorStop(l,c)):(r.addColorStop(0,s),r.addColorStop(.45,s),r.addColorStop(1,e)),a.fillStyle=r,a.fillRect(0,0,t,t);const o=new Mn(n);return o.colorSpace=wt,o}function Bg(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.clearRect(0,0,256,256);for(let n=0;n<26;n++){const a=128+(Math.random()-.5)*256*.72,r=256*.55+(Math.random()-.5)*256*.3,o=256*(.08+Math.random()*.18),l=t.createRadialGradient(a,r,0,a,r,o);l.addColorStop(0,"rgba(255,244,224,0.42)"),l.addColorStop(.6,"rgba(255,238,214,0.18)"),l.addColorStop(1,"rgba(255,238,214,0)"),t.fillStyle=l,t.beginPath(),t.arc(a,r,o,0,Le),t.fill()}const i=new Mn(e);return i.colorSpace=wt,i}function zg(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d");t.clearRect(0,0,128,128),t.fillStyle="#fff";for(let n=0;n<12;n++){const a=24+Math.random()*80,r=10+Math.random()*34;t.save(),t.translate(a,r),t.rotate((Math.random()-.5)*.9),t.beginPath(),t.ellipse(0,0,3.5,17+Math.random()*10,0,0,Le),t.fill(),t.restore()}const i=new Mn(e);return i.colorSpace=wt,i}function kg(s,e=1,t=1){const i=ts("rgba(255,255,255,1)","rgba(255,255,255,0)",128,[[0,"rgba(255,255,255,1)"],[.25,"rgba(255,255,255,.9)"],[.55,"rgba(255,255,255,.25)"],[1,"rgba(255,255,255,0)"]]),n=new nl({map:i,color:s,blending:zt,transparent:!0,opacity:t,depthWrite:!1}),a=new fh(n);return a.scale.setScalar(e),a}function mi(s,e=2,t=.8){return kg(s,e,t)}function Gg(s){const e=Math.floor(s/60),t=Math.floor(s%60);return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}`}function Hg(s,e,t=192){const i=new Oh({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});i.setSize(t,t),i.setPixelRatio(1),i.outputColorSpace=wt,i.toneMapping=Zs,i.toneMappingExposure=1.15,i.setClearColor(0,0);const n=new ch,a=new xi(30,1,.1,100);n.add(new yh(13625855,2112044,2.2));const r=new Lo(16768168,3.2);r.position.set(3,5,4),n.add(r);const o=new Lo(6291408,2);o.position.set(-4,2,-4),n.add(o);const l=e();n.add(l);const c=new xn;l.updateWorldMatrix(!0,!0),l.traverse(g=>{!g.isMesh||g.isSprite||!g.geometry||(g.geometry.boundingBox||g.geometry.computeBoundingBox(),g.geometry.boundingBox&&c.union(g.geometry.boundingBox.clone().applyMatrix4(g.matrixWorld)))}),c.isEmpty()&&c.setFromObject(l);const h=c.getCenter(new R),d=c.getBoundingSphere(new _n),u=Math.max(.4,d.radius);a.position.set(h.x+u*1.55,h.y+u*.7,h.z+u*2.3),a.lookAt(h),a.position.multiplyScalar(1);const f=u/Math.sin(qd.degToRad(15))*.86,p=new R(.42,.28,1).normalize();a.position.copy(h).addScaledVector(p,f),a.lookAt(h),i.render(n,a);const x=i.domElement.toDataURL("image/png");return i.dispose(),x}const Fc=[[8,92],[12,78],[18,62],[25,48],[28,36],[21,24],[8,14],[-8,6],[-22,-2],[-31,-9],[-40,-17],[-47,-25]],Oc=[[28,36],[24,22],[20,8],[14,-8],[9,-24],[5,-38],[1,-52],[-1,-61]],Bc=[[25,48],[38,45],[50,40],[58,31],[64,20],[66,10]],Ds={x:28,z:36,r:25,y:5.2},ui={x:-31,z:-9,y:10.2},Va={x:-47,z:-25,r:13,y:17.2},Wa={x:66,z:10,r:12,y:4.2},Xa={x:6,z:-36,r:12,y:7.4},Bt={x:-2,z:-64,r:18,y:6.8};function Ia(s,e,t,i,n){const a=(s-t)**2+(e-i)**2;return Math.exp(-a/(2*n*n))}function Jn(s,e,t,i){const n=Math.hypot(e-i.x,t-i.z),a=1-si(i.r*.35,i.r,n);return Wt(s,i.y,a*.94)}function we(s,e){const t=Math.hypot(s*.97,e*1.03);let i;t<78?i=6.2:t<98?i=Wt(6.2,2.8,si(78,98,t)):t<116?i=Wt(2.8,.35,si(98,116,t)):i=Wt(.35,-8,si(116,138,t));const n=1-si(74,114,t),a=(kh(s*.021+13.1,e*.021-8.7,4)-.48)*6.4,r=(Gs(s*.075-4,e*.075+2)-.5)*1.1,o=Ia(s,e,-46,-24,27)*19+Ia(s,e,-25,-9,12)*5.5,l=Ia(s,e,17,-55,24)*6.5+Ia(s,e,55,38,15)*2.4;let c=i+(a+r+o+l)*n;const h=si(91,108,t)*(1-si(112,126,t));return c=Wt(c,1.15,h*.32),c=Jn(c,s,e,Ds),c=Jn(c,s,e,{...ui,r:9}),c=Jn(c,s,e,Va),c=Jn(c,s,e,Wa),c=Jn(c,s,e,Xa),c=Jn(c,s,e,Bt),c}function Vg(s,e){const i=we(s-.8,e),n=we(s+.8,e),a=we(s,e-.8),r=we(s,e+.8),o=i-n,l=a-r,c=2*.8,h=Math.hypot(o,c,l)||1;return[o/h,c/h,l/h]}function is(s,e){return we(s,e)<.42}function Na(s,e=180){const t=[],i=n=>s[ct(n,0,s.length-1)];for(let n=0;n<e;n++){const a=n/(e-1)*(s.length-1),r=Math.floor(a),o=a-r,l=i(r-1),c=i(r),h=i(r+1),d=i(r+2),u=o*o,f=u*o,p=(m,v,w,b)=>.5*(2*v+(-m+w)*o+(2*m-5*v+4*w-b)*u+(-m+3*v-3*w+b)*f),x=p(l[0],c[0],h[0],d[0]),g=p(l[1],c[1],h[1],d[1]);t.push([x,we(x,g)+.06,g])}return t}const zc=[{id:"beach",name:"PIMENTO BEACH",x:8,z:86,r:30,color:"#e8c98f"},{id:"village",name:"NINE MILE VILLAGE",x:28,z:36,r:27,color:"#f2a65a"},{id:"mountain",name:"BLUE MOUNTAIN RISE",x:-35,z:-12,r:40,color:"#6a9a4f"},{id:"grove",name:"SILK COTTON GROVE",x:2,z:-46,r:32,color:"#2f6e50"},{id:"reef",name:"LUMINOUS REEF",x:62,z:20,r:30,color:"#79dcff"}];function Wg(s,e){let t=zc[0],i=1/0;for(const n of zc){const a=Math.hypot(s-n.x,e-n.z);a<n.r&&a<i&&(i=a,t=n)}return t}const re=s=>document.querySelector(s),Es=s=>[...document.querySelectorAll(s)];class Xg{constructor(e){this.game=e,this.camera=e.camera,this.world=e.world,this.bonded=new Set,this.portraits={},this.objectives=[],this.questTarget=null,this.zone="PIMENTO BEACH",this.target=null,this.dialogueOpen=!1,this.dialogue=null,this.captureTimer=null,this.fpsFrames=0,this.fpsTime=0,this.fps=60,this.codexBuilt=!1,this.lastDamageNodes=[],this.el={hud:re("#hud"),title:re("#title-screen"),loading:re("#loading"),loadFill:re("#load-fill"),loadStatus:re("#load-status"),level:re("#player-level"),hpFill:re("#hp-fill"),hpGhost:re("#hp-ghost"),hpText:re("#hp-text"),shieldRow:re("#shield-row"),shieldFill:re("#shield-fill"),shieldText:re("#shield-text"),aetherFill:re("#aether-fill"),aetherText:re("#aether-text"),xpFill:re("#xp-fill"),xpText:re("#xp-text"),compass:re("#compass"),compassTicks:re("#compass-strip"),compassMarkers:re("#compass-markers"),questTitle:re("#quest-title"),questDesc:re("#quest-desc"),questFill:re("#quest-progress-fill"),questProgress:re("#quest-progress-text"),questDistance:re("#quest-distance"),minimap:re("#minimap"),crosshair:re("#crosshair"),hitmarker:re("#hitmarker"),targetTag:re("#target-tag"),targetName:re("#target-name"),targetHp:re("#target-hp"),captureTag:re("#capture-tag"),damageLayer:re("#damage-layer"),toasts:re("#toasts"),party:re("#party"),compCard:re("#companion-card"),compImg:re("#comp-img"),compName:re("#comp-name"),compType:re("#comp-type"),compCd:re("#comp-cd-fill"),compAbility:re("#comp-ability"),orbCount:re("#orb-count"),orbRecharge:re("#orb-recharge").querySelector("i"),prompt:re("#prompt"),promptText:re("#prompt-text"),promptKey:re("#prompt kbd"),bossBar:re("#boss-bar"),bossName:re("#boss-name"),bossTitle:re("#boss-title"),bossHpFill:re("#boss-hp-fill"),bossHpText:re("#boss-hp-text"),bossHint:re("#boss-hint"),zone:re("#zone-name"),fps:re("#fps"),codex:re("#codex"),codexGrid:re("#codex-grid"),codexCount:re("#codex-count"),howto:re("#howto"),pause:re("#pause"),death:re("#death"),victory:re("#victory"),capture:re("#capture-overlay"),captureName:re("#capture-name"),captureEpithet:re("#capture-epithet"),captureOrigin:re("#capture-origin"),bossIntro:re("#boss-intro"),bossIntroName:re("#boss-intro-name"),bossIntroTitle:re("#boss-intro-eyebrow"),bossIntroLore:re("#boss-intro-lore"),bossIntroEyebrow:re("#boss-intro-eyebrow"),dialogue:re("#dialogue"),npcName:re("#npc-name"),npcRole:re("#npc-role"),npcGlyph:re("#npc-glyph"),dialogueText:re("#dialogue-text"),dialogueNext:re("#dialogue-next"),touch:re("#touch-ui"),talkBtn:re("#btn-talk"),soundBtns:Es("#sound-toggle, #pause-sound"),hurtFlash:re("#hurt-flash"),zoneBanner:re("#zone-banner"),pauseBonded:re("#pause-bonded"),pauseWardens:re("#pause-wardens"),pauseLevel:re("#pause-level"),victoryBonded:re("#victory-bonded"),victoryLevel:re("#victory-level"),victoryTime:re("#victory-time")},this.buildMinimapBase(),this.buildCompass(),this.bindUI(),this.syncSoundButton()}bindUI(){Es("[data-close]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.close;this.closeOverlay(t),this.game.onOverlayClose?.(t),this.game.audio.sfx("ui")})}),this.el.party?.querySelectorAll(".party-slot").forEach((e,t)=>{e.addEventListener("click",()=>{this.game.onSelectBond?.(t)})}),this.el.dialogueNext.addEventListener("click",()=>this.advanceDialogue()),this.el.codexGrid.addEventListener("click",e=>{const t=e.target.closest(".codex-entry");t?.classList.contains("bonded")&&this.game.onSelectBondById?.(t.dataset.id)}),this.el.soundBtns.forEach(e=>e.addEventListener("click",()=>{this.game.audio.toggle(),this.syncSoundButton(),this.game.audio.sfx("ui")}))}syncSoundButton(){const e=this.game.audio.enabled;this.el.soundBtns.forEach(i=>{i.textContent=e?"SOUND ON":"SOUND OFF"});const t=re("#pause-sound");t&&(t.textContent=e?"SOUND ON":"SOUND OFF")}setPortraits(e){this.portraits=e,Es("#title-cards .spirit-card").forEach(t=>{const i=t.dataset.creature,n=t.querySelector("img");n&&e[i]&&(n.src=e[i])}),this.syncParty(),this.syncCodex()}setLoading(e,t){this.el.loadFill.style.width=`${Math.round(e*100)}%`,t&&(this.el.loadStatus.textContent=t)}hideLoading(){this.el.loading.classList.add("fade"),setTimeout(()=>this.el.loading.classList.add("hidden"),750)}hideTitle(){this.el.title.classList.add("hide"),setTimeout(()=>this.el.title.classList.add("hidden"),850)}showHud(){this.el.hud.classList.remove("hidden")}showTouch(e){this.el.touch.classList.toggle("hidden",!e)}syncVitals(){this.game.player?.updateHud(this.game)}updateVitals(e){const t=ct(e.hp/e.maxHp,0,1);this.el.hpFill.style.width=`${t*100}%`,this.el.hpGhost.style.width=`${t*100}%`,this.el.hpText.textContent=`${Math.ceil(e.hp)}`,this.el.level.textContent=e.level,this.el.aetherFill.style.width=`${ct(e.aether/e.maxAether,0,1)*100}%`,this.el.aetherText.textContent=`${Math.round(e.aether)}`,this.el.xpFill.style.width=`${ct(e.xp/e.xpNext,0,1)*100}%`,this.el.xpText.textContent=`${e.xp} / ${e.xpNext}`,e.shieldMax>0?(this.el.shieldRow.classList.remove("hidden"),this.el.shieldFill.style.width=`${ct(e.shield/e.shieldMax,0,1)*100}%`,this.el.shieldText.textContent=`${Math.ceil(e.shield)}`):this.el.shieldRow.classList.add("hidden")}updateOrbRecharge(e){this.el.orbRecharge.style.width=`${ct(e,0,1)*100}%`}syncOrbs(){this.el.orbCount.textContent=this.game.player?.orbs??0,this.el.orbRecharge.style.width="0%"}updateBloom(e,t,i){this.el.crosshair.style.setProperty("--spread",`${9+e*13+t*4+(i?4:0)}px`)}setCrosshairDanger(e){this.el.crosshair.classList.toggle("danger",e)}playerHit(){this.el.hurtFlash.classList.remove("hit"),this.el.hurtFlash.offsetWidth,this.el.hurtFlash.classList.add("hit")}hitmark(e,t){const i=this.el.hitmarker;i.classList.remove("show","kill"),i.offsetWidth,i.classList.add("show"),t&&i.classList.add("kill")}setTarget(e,t){if(this.target=e,!e){this.el.targetTag.classList.remove("show"),this.el.captureTag.classList.remove("show");return}this.el.targetTag.classList.add("show"),this.el.targetName.textContent=`${e.name} · LV ${e.level}`,this.el.targetHp.style.setProperty("--hp",`${ct(e.hp/e.maxHp,0,1)*100}%`),this.el.captureTag.classList.toggle("show",e.captureReady)}syncParty(){const e=this.game.player;if(!e)return;Es(".party-slot").forEach((i,n)=>{const a=e.party[n];i.classList.toggle("empty",!a),i.classList.toggle("active",n===e.activeIndex);const r=i.querySelector(".slot-art"),o=i.querySelector(".slot-meta b"),l=i.querySelector(".slot-meta small");let c=i.querySelector(".slot-type");if(a){const h=this.portraits[a.def.id];r.style.backgroundImage=h?`url(${h})`:"none",o.textContent=a.name,l.textContent=Rn[a.def.type].name.toUpperCase(),c||(c=document.createElement("span"),c.className="slot-type",i.appendChild(c)),c.style.background=Rn[a.def.type].color,c.style.boxShadow=`0 0 6px ${Rn[a.def.type].color}`}else r.style.backgroundImage="none",o.textContent="—",l.textContent="EMPTY",c?.remove()}),this.syncCompanion()}syncCompanion(){const t=this.game.player?.activeBond;if(!t){this.el.compCard.classList.add("hidden");return}this.el.compCard.classList.remove("hidden");const i=this.portraits[t.def.id];i&&(this.el.compImg.src=i),this.el.compName.textContent=t.name,this.el.compType.textContent=Rn[t.def.type].name.toUpperCase(),this.el.compType.className=`comp-type ${t.def.type}`,this.el.compAbility.textContent=`Q · ${t.def.ability.name}`}updateCompanion(e,t){const i=t>0?1-e/t:1;this.el.compCd.style.transform=`scaleX(${ct(i,0,1)})`}setBonded(e){this.bonded=new Set(e),this.syncCodex()}markBonded(e){this.bonded.add(e),this.syncCodex()}syncCodex(){this.el.codexGrid&&(this.codexBuilt||this.buildCodex(),Es(".codex-entry").forEach(e=>{const t=e.dataset.id,i=this.bonded.has(t);e.classList.toggle("bonded",i),e.classList.toggle("unknown",!i);const n=e.querySelector(".bonded-tag");n&&(n.style.display=i?"block":"none")}),this.el.codexCount.textContent=`${this.bonded.size} / ${Ks.length} BONDED`)}buildCodex(){this.codexBuilt=!0,this.el.codexGrid.innerHTML=Ks.map(e=>`
      <article class="codex-entry unknown" data-id="${e.id}">
        <div class="codex-art"><img src="${this.portraits[e.id]||""}" alt="${e.name}" loading="lazy" /></div>
        <div class="codex-num">NO. ${String(e.no).padStart(3,"0")}</div>
        <span class="bonded-tag" style="display:none">BONDED</span>
        <h3>${e.name}</h3>
        <span class="origin">${e.origin}</span>
        <span class="type-pill ${e.type}">${Rn[e.type].name.toUpperCase()}</span>
        <p>${e.lore}</p>
        <div class="passive"><b>${e.passive.name}</b> — ${e.passive.desc}</div>
      </article>
    `).join("")}setQuest(e){this.el.questTitle.textContent=e.title,this.el.questDesc.textContent=e.desc,this.el.questFill.style.width=`${ct(e.progress??0,0,1)*100}%`,this.el.questProgress.textContent=e.progressText??"",this.questTarget=e.target??null}setObjectives(e){this.objectives=e,this.el.compassMarkers.innerHTML="";for(const t of e){const i=document.createElement("div");i.className=`compass-marker ${t.kind||""}`,i.innerHTML="<span></span>",i.title=t.label||"",this.el.compassMarkers.appendChild(i),t.el=i}}setZone(e){e!==this.zone&&(this.zone=e,this.el.zone.textContent=e,this.el.zoneBanner.querySelector("b").textContent=e,this.el.zoneBanner.classList.remove("show"),this.el.zoneBanner.offsetWidth,this.el.zoneBanner.classList.add("show"))}buildCompass(){const e=[["N",0],["NE",45],["E",90],["SE",135],["S",180],["SW",225],["W",270],["NW",315]],t=[];for(let i=0;i<360;i+=15){const n=e.find(r=>r[1]===i)?.[0],a=document.createElement("div");a.className=`compass-tick ${n?"major":""}`,a.textContent=n||"·",a.dataset.angle=i,this.el.compassTicks.appendChild(a),t.push(a)}this.compassTicks=t}updateExploration(e,t,i,n=1/60){if(this.updateCompass(e,i),this.updateMinimap(e,t),this.questTarget){const r=Math.hypot(e.position.x-this.questTarget.x,e.position.z-this.questTarget.z);this.el.questDistance.textContent=r>200?"— m":`${Math.round(r)} m`}else this.el.questDistance.textContent="— m";const a=Wg(e.position.x,e.position.z);this.setZone(a.name),this.fpsFrames++,this.fpsTime+=n,this.fpsTime>.7&&(this.fps=Math.round(this.fpsFrames/this.fpsTime),this.el.fps.textContent=`${this.fps} FPS`,this.fpsFrames=0,this.fpsTime=0)}updateCompass(e,t){const i=this.el.compass.clientWidth||430,n=i/2,a=i/2,r=Math.PI*.62;for(const o of this.compassTicks){const l=Number(o.dataset.angle)/180*Math.PI;let c=Uo(l-t+Math.PI,Math.PI*2)-Math.PI;if(Math.abs(c)>r){o.style.display="none";continue}o.style.display="block",o.style.left=`${n+c/r*a}px`,o.style.opacity=String(1-Math.abs(c)/r*.7)}for(const o of this.objectives){if(!o.el)continue;const l=o.x-e.position.x,c=o.z-e.position.z,h=Math.atan2(l,-c);let d=Uo(h-t+Math.PI,Math.PI*2)-Math.PI;if(Math.abs(d)>r*1.02){o.el.style.display="none";continue}o.el.style.display="block",o.el.style.left=`${n+d/r*a}px`}}buildMinimapBase(){const t=document.createElement("canvas");t.width=220,t.height=220;const i=t.getContext("2d"),n=i.createImageData(220,220),a=new Se,r=150;for(let o=0;o<220;o++)for(let l=0;l<220;l++){const c=l/220*r*2-r,h=o/220*r*2-r,d=we(c,h);d<-.2?a.setHex(671058).lerp(new Se(1206646),ct((d+8)/8,0,1)):d<1.4?a.setHex(14269826):d<2.6?a.setHex(12560747).lerp(new Se(6130762),(d-1.4)/1.2):d<15?a.setHex(4618820).lerp(new Se(3038265),(d-2.6)/12):a.setHex(7039576).lerp(new Se(9079159),ct((d-15)/12,0,1));const u=.92+Math.random()*.16,f=(o*220+l)*4;n.data[f]=ct(a.r*255*u,0,255),n.data[f+1]=ct(a.g*255*u,0,255),n.data[f+2]=ct(a.b*255*u,0,255),n.data[f+3]=255}i.putImageData(n,0,0),i.strokeStyle="rgba(225,193,139,.55)",i.lineWidth=2.2,i.lineCap="round";for(const o of[Vr("main"),Vr("grove"),Vr("reef")])i.beginPath(),o.forEach((l,c)=>{const h=(l[0]+r)/(r*2)*220,d=(l[2]+r)/(r*2)*220;c===0?i.moveTo(h,d):i.lineTo(h,d)}),i.stroke();this.minimapBase=t,this.minimapCtx=this.el.minimap.getContext("2d")}updateMinimap(e,t){const i=this.minimapCtx,n=220,a=150;i.clearRect(0,0,n,n),i.save(),i.beginPath(),i.arc(n/2,n/2,n/2-1,0,Math.PI*2),i.clip();const r=1.55;i.translate(n/2,n/2),i.scale(r,r),i.translate(-(e.position.x+a)/(a*2)*n,-(e.position.z+a)/(a*2)*n),i.drawImage(this.minimapBase,0,0);const o=(c,h)=>[(c+a)/(a*2)*n,(h+a)/(a*2)*n];for(const c of["mountain","reef","canopy","tree"]){const h=Kt[c],[d,u]=o(h.x,h.z);i.fillStyle=c==="tree"?"rgba(244,201,93,.8)":"rgba(143,240,206,.65)",i.beginPath(),i.moveTo(d,u-4),i.lineTo(d+3,u),i.lineTo(d,u+4),i.lineTo(d-3,u),i.closePath(),i.fill()}for(const c of this.game.creatures){if(!c.alive||c.dormant)continue;const h=Math.hypot(c.model.position.x-e.position.x,c.model.position.z-e.position.z);if(h>80)continue;const[d,u]=o(c.model.position.x,c.model.position.z);i.globalAlpha=ct(1-h/90,.15,.9),i.fillStyle=c.captureReady?"#f4c95d":c.boss?"#ff5d54":"#ff8c69",i.beginPath(),i.arc(d,u,c.boss?3.5:2,0,Math.PI*2),i.fill(),c.boss&&(i.strokeStyle="rgba(255,93,84,.5)",i.lineWidth=1,i.beginPath(),i.arc(d,u,5.5+Math.sin(this.game.time*3)*1.5,0,Math.PI*2),i.stroke()),i.globalAlpha=1}for(const c of t.pickups){if(!c.active)continue;const[h,d]=o(c.x,c.z);i.fillStyle="rgba(255,211,112,.5)",i.fillRect(h-1,d-1,2,2)}for(const c of t.npcModels){const[h,d]=o(c.x,c.z);i.fillStyle="#37d6a5",i.beginPath(),i.arc(h,d,2.4,0,Math.PI*2),i.fill()}if(this.questTarget){const[c,h]=o(this.questTarget.x,this.questTarget.z);i.strokeStyle="rgba(244,201,93,.9)",i.lineWidth=1.6;const d=4+Math.sin(this.game.time*2.6)*2;i.beginPath(),i.arc(c,h,d,0,Math.PI*2),i.stroke()}i.restore(),i.save(),i.translate(n/2,n/2),i.rotate(-e.yaw),i.fillStyle="#f4c95d",i.strokeStyle="rgba(0,0,0,.55)",i.lineWidth=1,i.beginPath(),i.moveTo(0,-7),i.lineTo(5,6),i.lineTo(0,3),i.lineTo(-5,6),i.closePath(),i.fill(),i.stroke(),i.restore(),i.save(),i.translate(n/2,n/2),i.rotate(-e.yaw);const l=i.createLinearGradient(0,0,0,-34);l.addColorStop(0,"rgba(244,201,93,.12)"),l.addColorStop(1,"rgba(244,201,93,0)"),i.fillStyle=l,i.beginPath(),i.moveTo(0,0),i.lineTo(-18,-34),i.lineTo(18,-34),i.closePath(),i.fill(),i.restore()}damageNumber(e,t,i="damage",n={}){if(!e)return;const a=e.clone().project(this.camera);if(a.z>1||a.z<-1)return;const r=(a.x*.5+.5)*window.innerWidth,o=(-a.y*.5+.5)*window.innerHeight;if(r<-80||r>window.innerWidth+80||o<-80||o>window.innerHeight+80)return;const l=document.createElement("div");l.className=`dmg ${n.crit?"crit":""} ${n.super?"super":""} ${n.resist?"resist":""} ${n.heal?"heal":""} ${n.absorb?"resist":""}`,l.textContent=n.absorb?`+${t} ◈`:n.heal?`+${t}`:`${t}${n.crit?"!":""}`,l.style.left=`${r}px`,l.style.top=`${o}px`,i==="fire"?l.style.color="#ffb36b":i==="water"?l.style.color="#9fe9ff":i==="earth"?l.style.color="#ffe7a1":i==="air"?l.style.color="#b8ffe5":i==="spirit"?l.style.color="#e3d0ff":i==="shadow"?l.style.color="#c7a4ff":n.player&&(l.style.color="#ff8a84"),this.el.damageLayer.appendChild(l),this.lastDamageNodes.push(l),this.lastDamageNodes.length>30&&this.lastDamageNodes.shift()?.remove(),setTimeout(()=>l.remove(),900)}toast(e,t,i=""){const n=document.createElement("div");for(n.className=`toast ${i}`,n.innerHTML=`<b>${e}</b>${t?` — ${t}`:""}`,this.el.toasts.appendChild(n);this.el.toasts.children.length>3;)this.el.toasts.firstChild.remove();setTimeout(()=>n.remove(),3400)}showPrompt(e,t="F"){this.el.prompt.classList.remove("hidden"),this.el.promptText.textContent=e,this.el.promptKey.textContent=t,this.el.talkBtn.classList.remove("hidden")}hidePrompt(){this.el.prompt.classList.add("hidden"),this.el.talkBtn.classList.add("hidden")}showBoss(e){this.el.bossBar.classList.remove("hidden"),this.el.bossName.textContent=e.name,this.el.bossTitle.textContent=e.bossDef.warden,this.el.bossHint.textContent=`${Rn[e.type].name.toUpperCase()} WARDEN · ${e.weakened?"WEAKENED":"SHRINE GUARDIAN"}`,this.updateBoss(e)}updateBoss(e){if(!e)return;const t=ct(e.hp/e.maxHp,0,1);this.el.bossHpFill.style.width=`${t*100}%`,this.el.bossHpText.textContent=e.weakened?"WEAKENED":`${Math.ceil(e.hp)} / ${e.maxHp}`,this.el.bossHint.textContent=e.weakened?"THROW A SOUL ORB TO BIND THE WARDEN":`${Rn[e.type].name.toUpperCase()} WARDEN · ${e.bossDef.shrine.toUpperCase()} SHRINE`}hideBoss(){this.el.bossBar.classList.add("hidden")}showBossIntro(e){this.el.bossIntroTitle.textContent=e.bossDef.warden,this.el.bossIntroName.textContent=e.name,this.el.bossIntroLore.textContent=e.bossDef.intro,this.el.bossIntro.classList.remove("hidden"),this.el.bossIntro.style.animation="none",this.el.bossIntro.offsetWidth,this.el.bossIntro.style.animation="",clearTimeout(this.bossIntroTimer),this.bossIntroTimer=setTimeout(()=>this.el.bossIntro.classList.add("hidden"),4100)}showCapture(e){clearTimeout(this.captureTimer),this.el.captureName.textContent=e.name,this.el.captureEpithet.textContent=e.epithet,this.el.captureOrigin.textContent=e.origin,this.el.capture.classList.remove("hidden"),this.el.capture.style.display="flex";const t=this.el.capture.querySelector(".capture-flash"),i=this.el.capture.querySelector(".capture-orb"),n=this.el.capture.querySelector(".capture-copy");for(const a of[t,i,n])a.style.animation="none",a.offsetWidth,a.style.animation="";this.captureTimer=setTimeout(()=>{this.el.capture.classList.add("hidden"),this.el.capture.style.display=""},1900)}openDialogue(e,t,i){this.dialogueOpen=!0,this.dialogue={npc:e,lines:t,index:0,onEnd:i,typing:!1,timer:null},this.el.npcName.textContent=e.name,this.el.npcRole.textContent=e.role,this.el.npcGlyph.textContent=e.glyph,this.el.dialogue.classList.remove("hidden"),this.typeLine()}typeLine(){const e=this.dialogue;if(!e)return;clearInterval(e.timer),e.typing=!0;const t=e.lines[e.index];let i=0;this.el.dialogueText.textContent="",e.timer=setInterval(()=>{i+=2,this.el.dialogueText.textContent=t.slice(0,i),i>=t.length&&(clearInterval(e.timer),e.typing=!1,this.el.dialogueText.textContent=t)},13)}advanceDialogue(){const e=this.dialogue;if(e){if(e.typing){clearInterval(e.timer),e.typing=!1,this.el.dialogueText.textContent=e.lines[e.index];return}e.index<e.lines.length-1?(e.index++,this.typeLine(),this.game.audio.sfx("ui")):(this.closeDialogue(),e.onEnd?.())}}closeDialogue(){const e=this.dialogue;e&&clearInterval(e.timer),this.dialogue=null,this.dialogueOpen=!1,this.el.dialogue.classList.add("hidden")}openOverlay(e){this.closeOverlay(e,!0),{codex:this.el.codex,howto:this.el.howto,pause:this.el.pause,death:this.el.death,victory:this.el.victory}[e]?.classList.remove("hidden")}closeOverlay(e,t){({codex:this.el.codex,howto:this.el.howto,pause:this.el.pause,death:this.el.death,victory:this.el.victory})[e]?.classList.add("hidden"),t||this.game.audio.sfx("ui")}openCodex(){this.syncCodex(),this.openOverlay("codex")}openHowTo(){this.openOverlay("howto")}openPause(e,t){this.el.pauseBonded.textContent=this.bonded.size,this.el.pauseWardens.textContent=`${t}/3`,this.el.pauseLevel.textContent=e.level,this.syncSoundButton(),this.openOverlay("pause")}showDeath(){this.openOverlay("death")}hideDeath(){this.closeOverlay("death",!0)}showVictory(e){this.el.victoryBonded.textContent=e.bonded,this.el.victoryLevel.textContent=e.level,this.el.victoryTime.textContent=Gg(e.time),this.openOverlay("victory")}hideVictory(){this.closeOverlay("victory",!0)}}function Vr(s){return{main:[[8,92],[12,78],[18,62],[25,48],[28,36],[21,24],[8,14],[-8,6],[-22,-2],[-31,-9],[-40,-17],[-47,-25]],grove:[[28,36],[24,22],[20,8],[14,-8],[9,-24],[5,-38],[1,-52],[-1,-61]],reef:[[25,48],[38,45],[50,40],[58,31],[64,20],[66,10]]}[s].map(([t,i])=>[t,we(t,i),i])}class qg{constructor(e){this.game=e,this.keys=new Set,this.fireHeld=!1,this.firePressed=!1,this.orbPressed=!1,this.jumpPressed=!1,this.dashPressed=!1,this.pulsePressed=!1,this.interactPressed=!1,this.codexPressed=!1,this.pausePressed=!1,this.mutePressed=!1,this.slotPressed=-1,this.lookDX=0,this.lookDY=0,this.pointerLocked=!1,this.enabled=!1,this.isTouch=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,this.joy={active:!1,pointerId:null,x:0,y:0},this.touchLook={active:!1,id:null,x:0,y:0},this.touchFire=!1,this._bound=[],this.bindKeyboard(),this.bindMouse(),this.bindTouch()}bindKeyboard(){const e=i=>{if((i.code==="Tab"||i.code==="Space")&&i.preventDefault(),!i.repeat){if(this.keys.add(i.code),i.code==="KeyE"&&(this.orbPressed=!0),i.code==="KeyF"&&(this.interactPressed=!0),i.code==="Space"&&(this.jumpPressed=!0),(i.code==="ShiftLeft"||i.code==="ShiftRight")&&(this.dashPressed=!0),i.code==="KeyQ"&&(this.pulsePressed=!0),i.code==="Tab"&&(this.codexPressed=!0),i.code==="Escape"&&(this.pausePressed=!0),i.code==="KeyM"&&(this.mutePressed=!0),i.code==="KeyH"&&(this.pausePressed=!0),i.code.startsWith("Digit")){const n=Number(i.code.slice(5));n>=1&&n<=4&&(this.slotPressed=n-1)}i.code==="KeyP"&&(this.pausePressed=!0)}},t=i=>{this.keys.delete(i.code)};window.addEventListener("keydown",e),window.addEventListener("keyup",t),this._bound.push(()=>window.removeEventListener("keydown",e),()=>window.removeEventListener("keyup",t))}bindMouse(){const e=this.game.canvas,t=o=>{this.enabled&&(o.button===0&&(this.fireHeld=!0,this.firePressed=!0),o.button===2&&(this.orbPressed=!0),!this.isTouch&&!this.pointerLocked&&document.pointerLockElement!==e&&this.requestLock())},i=o=>{o.button===0&&(this.fireHeld=!1)},n=o=>{!this.enabled||this.isTouch||this.pointerLocked&&(this.lookDX+=o.movementX||0,this.lookDY+=o.movementY||0)},a=o=>o.preventDefault();e.addEventListener("pointerdown",t),window.addEventListener("pointerup",i),document.addEventListener("mousemove",n),e.addEventListener("contextmenu",a);const r=()=>{this.pointerLocked=document.pointerLockElement===e,this.pointerLocked||(this.fireHeld=!1),this.game.onPointerLock?.(this.pointerLocked)};document.addEventListener("pointerlockchange",r),this._bound.push(()=>e.removeEventListener("pointerdown",t),()=>window.removeEventListener("pointerup",i),()=>document.removeEventListener("mousemove",n),()=>e.removeEventListener("contextmenu",a),()=>document.removeEventListener("pointerlockchange",r))}bindTouch(){const e=this.game.canvas,t=document.getElementById("joystick"),i=t?.querySelector(".stick-knob");if(t){const c=()=>{const p=t.getBoundingClientRect();return{x:p.left+p.width/2,y:p.top+p.height/2}},h=p=>{const x=c();let g=p.clientX-x.x,m=p.clientY-x.y;const v=Math.hypot(g,m);v>46&&(g=g/v*46,m=m/v*46),this.joy.x=g/46,this.joy.y=m/46,i.style.transform=`translate(${g}px, ${m}px)`},d=p=>{p.preventDefault(),this.joy.active=!0,this.joy.pointerId=p.pointerId,t.setPointerCapture?.(p.pointerId),h(p)},u=p=>{this.joy.active&&p.pointerId===this.joy.pointerId&&h(p)},f=p=>{p.pointerId===this.joy.pointerId&&(this.joy.active=!1,this.joy.pointerId=null,this.joy.x=0,this.joy.y=0,i.style.transform="")};t.addEventListener("pointerdown",d),t.addEventListener("pointermove",u),t.addEventListener("pointerup",f),t.addEventListener("pointercancel",f)}const n=l=>{!this.enabled||!this.isTouch||l.pointerType!=="mouse"&&(this.touchLook.active||(this.touchLook.active=!0,this.touchLook.id=l.pointerId,this.touchLook.x=l.clientX,this.touchLook.y=l.clientY,e.setPointerCapture?.(l.pointerId)))},a=l=>{if(!this.touchLook.active||l.pointerId!==this.touchLook.id)return;const c=l.clientX-this.touchLook.x,h=l.clientY-this.touchLook.y;this.lookDX+=c*1.8,this.lookDY+=h*1.8,this.touchLook.x=l.clientX,this.touchLook.y=l.clientY},r=l=>{l.pointerId===this.touchLook.id&&(this.touchLook.active=!1,this.touchLook.id=null)};e.addEventListener("pointerdown",n),e.addEventListener("pointermove",a),window.addEventListener("pointerup",r),window.addEventListener("pointercancel",r),this._bound.push(()=>e.removeEventListener("pointerdown",n),()=>e.removeEventListener("pointermove",a),()=>window.removeEventListener("pointerup",r),()=>window.removeEventListener("pointercancel",r));const o=(l,c,h)=>{const d=document.getElementById(l);if(!d)return;const u=p=>{p.preventDefault(),p.stopPropagation(),c?.()},f=p=>{p.preventDefault(),p.stopPropagation(),h?.()};d.addEventListener("pointerdown",u),d.addEventListener("pointerup",f),d.addEventListener("pointercancel",f),d.addEventListener("pointerleave",f),this._bound.push(()=>{d.removeEventListener("pointerdown",u),d.removeEventListener("pointerup",f),d.removeEventListener("pointercancel",f),d.removeEventListener("pointerleave",f)})};o("btn-fire",()=>{this.fireHeld=!0,this.firePressed=!0},()=>{this.fireHeld=!1}),o("btn-orb",()=>{this.orbPressed=!0}),o("btn-jump",()=>{this.jumpPressed=!0}),o("btn-dash",()=>{this.dashPressed=!0}),o("btn-pulse",()=>{this.pulsePressed=!0}),o("btn-bonds",()=>{this.codexPressed=!0}),o("btn-talk",()=>{this.interactPressed=!0})}requestLock(){const e=this.game.canvas;if(!this.isTouch)try{e.requestPointerLock?.()}catch{}}exitLock(){document.pointerLockElement&&document.exitPointerLock?.()}setEnabled(e){this.enabled=e,e||(this.fireHeld=!1,this.keys.clear(),this.joy.x=0,this.joy.y=0,this.lookDX=0,this.lookDY=0)}consumeLook(){const e=this.lookDX,t=this.lookDY;return this.lookDX=0,this.lookDY=0,[e,t]}consume(e){return this[e]?(this[e]=!1,!0):!1}consumeSlot(){const e=this.slotPressed;return this.slotPressed=-1,e}get moveX(){let e=0;return(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(e+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(e-=1),e+=this.joy.x,ct(e,-1,1)}get moveY(){let e=0;return(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(e+=1),(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(e-=1),e+=this.joy.y,ct(e,-1,1)}get fire(){return this.fireHeld||this.touchFire}endFrame(){this.firePressed=!1,this.orbPressed=!1,this.jumpPressed=!1,this.dashPressed=!1,this.pulsePressed=!1,this.interactPressed=!1,this.codexPressed=!1,this.pausePressed=!1,this.mutePressed=!1,this.slotPressed=-1}dispose(){this._bound.forEach(e=>e())}}function Gh(s,e=!1){const t=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),a={},r={},o=s[0].morphTargetsRelative,l=new xt;l.morphTargetsRelative=o;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let u=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.morphAttributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0;const d=[];for(let u=0;u<s.length;++u){const f=s[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(const h in a){const d=kc(a[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in r){const d=r[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let x=0;x<r[h].length;++x)f.push(r[h][x][u]);const p=kc(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function kc(s){let e,t,i,n=-1,a=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=h.count*t}const r=new e(a),o=new kt(r,t,i);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/t;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<t;p++){const x=h.getComponent(u,p);o.setComponent(u+d,p,x)}}else r.set(h.array,l);l+=h.count*t}return n!==void 0&&(o.gpuType=n),o}const ie={sphere:new Lt(1,12,9),sphereHi:new Lt(1,16,12),ico:new fi(1,0),ico1:new fi(1,1),cone:new ki(1,1,6),cylinder:new it(1,1,1,7),box:new Ze(1,1,1),torus:new pi(1,.16,5,16),ring:new ji(.9,1,24)};function De(s,e={}){return new Ue({color:s,roughness:.78,metalness:.04,flatShading:!0,emissive:e.emissive??0,emissiveIntensity:e.emissiveIntensity??0,transparent:e.transparent??!1,opacity:e.opacity??1,side:e.side??pn,depthWrite:e.depthWrite??!0})}function cl(s){return new pt({color:s,toneMapped:!1})}function te(s,e,t,i=[0,0,0],n=[0,0,0],a=[1,1,1]){const r=new ce(e,t);return r.position.set(...i),r.rotation.set(...n),r.scale.set(...a),r.castShadow=!0,r.receiveShadow=!0,s.add(r),r}function vi(s,e,t,i,n,a=.055){const r=te(s,ie.sphere,cl(n),[e,t,i],[0,0,0],[a,a*1.15,a]);return r.castShadow=!1,r}function Ti(s,e,t,i=.85,n=[0,0,0]){const a=mi(e,t,i);return a.position.set(...n),a.userData.baseScale=t,s.add(a),a}function Fo(s,e,t,i,n,a,r,o=.08,l=0){const c=new Be;c.position.set(e,t,i),s.add(c);const h=te(c,ie.cylinder,a,[0,-n*.33,0],[0,0,0],[o,n*.52,o]),d=new Be;return d.position.set(0,-n*.55,0),c.add(d),te(d,ie.cylinder,a,[0,-n*.25,0],[0,0,0],[o*.8,n*.45,o*.8]),te(d,ie.box,De(r,{emissive:r,emissiveIntensity:.5}),[0,-n*.48,-.02],[0,0,0],[o*1.5,.07,o*2.1]),{pivot:c,knee:d,phase:l,upper:h}}function Hh(s,e,t,i,n,a=1){const r=new Be;r.position.set(...n),r.scale.x=e,s.add(r);const o=new xt,l=a,c=new Float32Array([0,0,0,l*.55,.06,-.3,l*1.05,-.08,.12,0,0,0,l*1.05,-.08,.12,l*.6,-.1,.7,0,0,0,l*.6,-.1,.7,l*.12,-.04,.55]);o.setAttribute("position",new kt(c,3)),o.computeVertexNormals();const h=new ce(o,t);h.castShadow=!0,r.add(h);const d=te(r,ie.cone,i,[l*.8,0,.22],[0,0,-Math.PI/2],[.06,l*.5,.06]);return{pivot:r,tip:d,side:e,phase:e>0?0:Math.PI}}function Vh(s,e,t,i=[0,0,0],n=1,a=.5){const r=new Be;r.position.set(...i),s.add(r);const o=[];let l=r;for(let h=0;h<4;h++){const d=new Be;d.position.z=h===0?0:n*.26,d.rotation.x=-.12,l.add(d);const u=.11*(1-h*.16);te(d,ie.sphere,De(e),[0,a*.02*h,n*.13],[0,0,0],[u,u,n*.17]),o.push(d),l=d}const c=Ti(l,t,.55,.7,[0,0,n*.25]);return{pivot:r,segments:o,tipGlow:c}}function Yg(){const s=new Be,e=new ce(new ti(1,.055),new pt({color:0,transparent:!0,opacity:.55,depthTest:!1}));e.renderOrder=20;const t=new ce(new ti(1,.04),new pt({color:16739146,toneMapped:!1,depthTest:!1}));return t.position.z=.001,t.renderOrder=21,s.add(e,t),s.visible=!1,s.userData.fill=t,s}function $g(){const s=new Be;s.name="warden-kai";const e=new Be;s.add(e);const t=De(9067068),i=De(1473127),n=De(2204036),a=De(2505785),r=De(15326658),o=De(4861987),l=De(16042333,{emissive:7031309,emissiveIntensity:.25}),c=De(2945728,{emissive:2945728,emissiveIntensity:2.4}),h=new Be;h.position.y=.94,e.add(h),te(h,ie.sphere,a,[0,0,0],[0,0,0],[.27,.2,.19]);const d=Fo(h,-.14,-.02,0,.92,a,2760729,.095,0),u=Fo(h,.14,-.02,0,.92,a,2760729,.095,Math.PI),f=new Be;f.position.y=.2,h.add(f),te(f,ie.sphere,i,[0,.28,0],[0,0,0],[.31,.38,.21]),te(f,ie.sphere,r,[0,.3,-.12],[0,0,0],[.16,.27,.11]),te(f,ie.box,o,[0,.08,.02],[0,0,0],[.48,.09,.32]),te(f,ie.box,l,[0,.1,.02],[0,0,0],[.5,.025,.33]),te(f,ie.sphere,n,[-.26,.34,-.02],[0,0,0],[.1,.2,.16]),te(f,ie.sphere,n,[.26,.34,-.02],[0,0,0],[.1,.2,.16]),te(f,ie.box,o,[-.32,.05,.15],[0,.2,0],[.16,.2,.11]),te(f,ie.sphere,l,[.3,.08,.14],[0,0,0],[.055,.075,.055]);const p=new Be;p.position.y=.66,f.add(p),te(p,ie.cylinder,t,[0,.05,0],[0,0,0],[.08,.13,.08]);const x=new Be;x.position.y=.19,p.add(x),te(x,ie.sphere,t,[0,.08,0],[0,0,0],[.16,.19,.17]),te(x,ie.sphere,De(1709842),[0,.16,.035],[0,0,0],[.17,.13,.17]);for(let F=0;F<8;F++){const G=F/8*Le;te(x,ie.ico,De(2103827),[Math.cos(G)*.12,.19+F%3*.035,Math.sin(G)*.11+.02],[0,0,0],[.055,.06,.05])}vi(x,-.06,.08,-.155,723721,.024),vi(x,.06,.08,-.155,723721,.024),te(x,ie.sphere,De(5517854),[0,.03,-.16],[0,0,0],[.045,.05,.04]),te(x,ie.box,r,[0,.04,-.185],[0,0,0],[.11,.026,.012]),te(x,ie.torus,l,[.14,.05,-.02],[0,0,Math.PI/2],[.035,.035,.035]);const g=new Be;g.position.set(0,.55,.08),f.add(g),te(g,ie.torus,De(14243903),[0,0,0],[Math.PI/2,0,0],[.14,.14,.08]);const m=te(g,ie.box,De(14243903),[.1,-.03,.18],[.18,.2,.1],[.1,.03,.42]),v=te(g,ie.box,De(12075311),[-.08,-.06,.15],[-.12,-.1,-.18],[.08,.025,.34]);function w(F){const G=new Be;G.position.set(.3*F,.48,0),f.add(G),te(G,ie.sphere,n,[0,0,0],[0,0,0],[.12,.13,.12]),te(G,ie.cylinder,i,[0,-.19,0],[0,0,0],[.075,.34,.075]);const I=new Be;I.position.y=-.35,G.add(I),te(I,ie.cylinder,t,[0,-.13,0],[0,0,0],[.06,.24,.06]);const z=new Be;return z.position.y=-.28,I.add(z),te(z,ie.sphere,t,[0,0,0],[0,0,0],[.075,.085,.06]),{shoulder:G,elbow:I,hand:z}}const b=w(-1),A=w(1),E=new Be;E.position.set(0,-.015,-.02),A.hand.add(E),te(E,ie.torus,l,[0,0,0],[Math.PI/2,0,0],[.09,.09,.05]),te(E,ie.cylinder,o,[0,-.03,0],[0,0,0],[.085,.12,.085]);const _=te(E,ie.sphere,c,[0,0,-.09],[0,0,0],[.065,.065,.05]);_.castShadow=!1;const S=Ti(E,6488024,.5,.9,[0,0,-.14]),L=new Et;L.position.set(0,0,-.24),E.add(L);const C=new wh(7339993,.85,4.5,2);C.position.copy(L.position),E.add(C),te(f,ie.box,o,[0,.26,.24],[.05,0,0],[.26,.3,.13]),te(f,ie.cylinder,r,[-.18,.52,.24],[0,0,.3],[.04,.4,.04]);const N=te(f,ie.sphere,De(16765286,{emissive:16754483,emissiveIntensity:1.6}),[.19,.5,.24],[0,0,0],[.06,.08,.06]);return N.castShadow=!1,s.userData.animate=(F,G={})=>{G.moving;const I=G.speed??0,z=G.airborne??!1,$=F*(6+I*1.3),P=z?.28:ct(I/6.4,0,1)*.75;d.pivot.rotation.x=Math.sin($)*P,u.pivot.rotation.x=Math.sin($+Math.PI)*P,d.knee.rotation.x=Math.max(0,-Math.sin($))*P*.7,u.knee.rotation.x=Math.max(0,-Math.sin($+Math.PI))*P*.7,h.position.y=.94+(z?.02:Math.abs(Math.sin($*2))*.025*P),f.rotation.x=z?-.08:.02+Math.sin(F*2.1)*.012,x.rotation.x=-.03+Math.sin(F*1.7)*.03,x.rotation.y=Math.sin(F*.52)*.08;const X=G.aiming?1:0;A.shoulder.rotation.x=Wt(Math.sin($+Math.PI)*P*.8,-.86,X),A.shoulder.rotation.z=Wt(.08,-.22,X),A.elbow.rotation.x=Wt(.12,.12,X),b.shoulder.rotation.x=Math.sin($)*P*.7,b.shoulder.rotation.z=-.08,m.rotation.x=.12+Math.sin(F*2.4)*.08+I*.02,m.rotation.y=Math.sin(F*1.8)*.09,v.rotation.x=-.16+Math.sin(F*2.1+1)*.09,S.material.opacity=.7+Math.sin(F*9)*.12,C.intensity=.7+Math.sin(F*9)*.15,z&&(d.knee.rotation.x=.5,u.knee.rotation.x=.45)},s.userData.muzzle=L,s.userData.eyeLight=C,s}function Kg(s,e){const t=new Be,i=new Be;t.add(i);const n=s.colors,a=De(n.primary,{}),r=De(n.secondary,{}),o=De(n.accent,{emissive:n.accent,emissiveIntensity:.3});te(i,ie.sphere,r,[0,.66,-.42],[0,0,0],[.55,.4,.62]),te(i,ie.sphere,a,[0,.7,.52],[0,0,0],[.72,.55,.8]),te(i,ie.sphere,o,[0,.72,.7],[.3,.4,0],[.25,.2,.35]),te(i,ie.sphere,o,[0,.96,.46],[0,0,0],[.2,.06,.12]),te(i,ie.ico,a,[0,.58,-1.06],[0,0,0],[.36,.31,.4]),te(i,ie.sphere,r,[0,.44,-1.22],[0,0,0],[.2,.14,.18]);for(let h=0;h<3;h++)vi(i,-.14-h*.055,.68+h*.035,-1.3,n.eye,.048-h*.006),vi(i,.14+h*.055,.68+h*.035,-1.3,n.eye,.048-h*.006);vi(i,0,.76,-1.33,n.eye,.06),te(i,ie.cone,De(n.accent),[0,.79,-1.26],[.5,0,0],[.025,.15,.025]);const l=[];for(let h=-1;h<=1;h+=2)for(let d=0;d<4;d++){const u=new Be;u.position.set(.38*h,.62,-.62+d*.38),i.add(u);const f=(.66+(d===1||d===2?.12:0))*h;te(u,ie.cylinder,a,[f*.5,.17,0],[0,0,h*(1.05+d*.04)],[.055,.78,.055]);const p=new Be;p.position.set(f,.22,0),u.add(p),te(p,ie.cylinder,r,[f*.3,-.26,0],[0,0,-h*.55],[.045,.7,.045]),te(p,ie.cone,o,[f*.48,-.53,0],[0,0,-h*.55],[.04,.16,.04]),l.push({pivot:u,phase:d/3*Math.PI+(h>0?Math.PI:0),side:h,base:u.rotation.z})}const c=Ti(i,n.glow,2.5,.2,[0,.7,.2]);return Ti(i,n.glow,.9,.35,[0,1.05,.35]),t.userData.animate=(h,d={})=>{const u=d.speed??0,f=.13+u*.03;for(const p of l)p.pivot.rotation.y=Math.sin(h*(7+u)+p.phase)*f;i.position.y=Math.sin(h*2.2)*.035,i.rotation.x=Math.sin(h*1.5)*.015,c.material.opacity=.16+Math.sin(h*2.5)*.05,d.attacking&&(i.position.z=Math.sin(h*28)*.04)},t.userData.height=1.7,t.userData.radius=1,t}function hl(s,e,t){const i=new Be,n=new Be;i.add(n);const a=s.colors,r=De(a.primary,{}),o=De(a.secondary,{}),l=De(a.accent,{emissive:a.accent,emissiveIntensity:.45}),c=De(a.glow,{emissive:a.glow,emissiveIntensity:2.2}),h=t.length??1.35,d=t.hipY??1.02;te(n,ie.sphere,r,[0,d,.15],[0,0,0],[.43,.42,h*.62]),te(n,ie.sphere,r,[0,d+.16,-h*.45],[0,0,0],[.36,.35,.45]),te(n,ie.sphere,o,[0,d-.02,.52],[0,0,0],[.38,.34,.38]);const u=new Be;u.position.set(0,d+.42,-h*.92),n.add(u),te(u,ie.sphere,r,[0,0,0],[0,0,0],[.32,.31,.36]),te(u,ie.sphere,o,[0,-.06,-.29],[0,0,0],[.2,.16,.24]),vi(u,-.14,.08,-.3,a.eye,.055),vi(u,.14,.08,-.3,a.eye,.055),te(u,ie.sphere,cl(657414),[0,-.06,-.53],[0,0,0],[.09,.055,.05]),te(u,ie.cone,l,[0,-.03,-.52],[-Math.PI/2,0,0],[.035,.18,.035]);const f=[];for(const x of[-1,1])for(const g of[-1,1]){const m=Fo(n,.28*x,d-.25,g*h*.42,d+.02,r,a.glow,t.legThick??.09,g>0?Math.PI:0);f.push(m)}const p=t.tail?Vh(n,r,a.glow,[0,d+.18,h*.62],t.tailLen??1.15,.6):null;return{g:i,body:n,head:u,primary:r,secondary:o,accent:l,glowMat:c,legs:f,tail:p}}function Zg(s){const e=hl(s,{},{length:1.5,hipY:1,tail:!0,tailLen:1.2}),{g:t,body:i,head:n,glowMat:a}=e,r=s.colors,o=De(r.glow,{emissive:r.glow,emissiveIntensity:3.4,transparent:!0,opacity:.85}),l=[];for(let h=0;h<13;h++){const d=h/13*Le,u=te(n,ie.cone,o,[Math.cos(d)*.33,.16+Math.sin(d)*.1,.05+Math.sin(d)*.18],[.2*Math.cos(d),0,-.35*Math.cos(d)],[.07,.24+h%3*.09,.07]);l.push(u)}for(let h=0;h<7;h++){const d=te(i,ie.cone,o,[(h%2?-1:1)*.12,1.15+h%3*.06,-.6+h*.22],[0,0,h%2?-.18:.18],[.07,.28+h%2*.12,.07]);l.push(d)}te(n,ie.cone,De(4861730),[-.2,.27,-.1],[0,0,.65],[.06,.35,.06]),te(n,ie.cone,De(4861730),[.2,.27,-.1],[0,0,-.65],[.06,.35,.06]),te(n,ie.cone,De(r.secondary),[-.32,.14,.02],[0,0,.9],[.07,.24,.07]),te(n,ie.cone,De(r.secondary),[.32,.14,.02],[0,0,-.9],[.07,.24,.07]);for(let h=0;h<5;h++)te(i,ie.box,a,[0,.86+h*.07,-.5+h*.3],[0,.3*h,0],[.02,.3,.02]);const c=Ti(i,r.glow,2.6,.22,[0,.75,0]);return t.userData.animate=(h,d={})=>{const u=d.speed??0,f=h*(6.5+u);e.legs.forEach((p,x)=>{p.pivot.rotation.x=Math.sin(f+(x%2?Math.PI:0))*(.22+u*.03)}),i.position.y=Math.abs(Math.sin(f))*.035,i.rotation.z=Math.sin(f*.5)*.02,l.forEach((p,x)=>{const g=.72+Math.sin(h*11+x*1.7)*.28;p.scale.y=(.24+x%3*.09)*g,p.material.opacity=.72+Math.sin(h*9+x)*.12}),c.material.opacity=.16+Math.sin(h*4)*.04,d.attacking&&(n.rotation.x=-.4,i.position.z=Math.sin(h*24)*.03)},t.userData.height=2,t.userData.radius=1,t}function Jg(s){const e=hl(s,{},{length:1.55,hipY:1.15,tail:!0,tailLen:1.05,legThick:.11}),{g:t,body:i,head:n,accent:a}=e,r=s.colors,o=De(r.secondary,{});for(let h=0;h<14;h++){const d=h/14*Le,u=.26+h%3*.05;te(n,ie.cone,o,[Math.cos(d)*.38,Math.sin(d)*.28,.12+Math.cos(d*2)*.03],[0,0,-d+Math.PI/2],[.11,u,.09])}te(n,ie.torus,De(r.accent,{emissive:r.accent,emissiveIntensity:.25}),[0,0,-.08],[0,0,0],[.35,.35,.2]);const l=De(4008731);te(n,ie.cone,l,[-.24,.31,-.04],[0,0,.55],[.065,.45,.065]),te(n,ie.cone,l,[.24,.31,-.04],[0,0,-.55],[.065,.45,.065]),te(n,ie.cone,a,[-.14,-.17,-.4],[-.4,0,.1],[.04,.2,.04]),te(n,ie.cone,a,[.14,-.17,-.4],[-.4,0,-.1],[.04,.2,.04]);for(let h=0;h<3;h++)te(i,ie.ico,De(r.accent,{emissive:r.accent,emissiveIntensity:.18}),[-.36+h*.36,1.28,-.2],[0,0,0],[.15,.07,.2]);const c=Ti(i,r.glow,2.7,.2,[0,.9,0]);return t.userData.animate=(h,d={})=>{const u=d.speed??0,f=h*(5.6+u);e.legs.forEach((p,x)=>{p.pivot.rotation.x=Math.sin(f+(x%2?Math.PI:0))*.25}),i.position.y=Math.abs(Math.sin(f))*.03,n.rotation.z=Math.sin(h*1.2)*.04,n.rotation.y=Math.sin(h*.8)*.06,d.attacking&&(n.rotation.x=-.35,i.rotation.x=-.08),c.material.opacity=.14+Math.sin(h*3)*.04},t.userData.height=2.1,t.userData.radius=1.05,t}function Qg(s){const e=hl(s,{},{length:1.05,hipY:.78,tail:!1,legThick:.065}),{g:t,body:i,head:n,accent:a}=e,r=s.colors;te(n,ie.cone,e.primary,[-.2,.24,.02],[0,0,.16],[.1,.32,.08]),te(n,ie.cone,e.primary,[.2,.24,.02],[0,0,-.16],[.1,.32,.08]),te(n,ie.cone,a,[-.2,.22,-.01],[0,0,.16],[.055,.22,.045]),te(n,ie.cone,a,[.2,.22,-.01],[0,0,-.16],[.055,.22,.045]),te(n,ie.cone,e.primary,[-.27,-.01,-.12],[0,0,1.1],[.06,.22,.05]),te(n,ie.cone,e.primary,[.27,-.01,-.12],[0,0,-1.1],[.06,.22,.05]);const o=[];for(let d=0;d<6;d++){const u=(d-2.5)/2.5,f=Vh(e.body,d%2?e.primary:De(r.accent,{}),r.glow,[u*.24,.9,.72],1.1+d%3*.12,.5);f.pivot.rotation.y=u*.42,f.pivot.rotation.x=-.18-d%2*.1,o.push(f)}const l=[],c=De(r.glow,{emissive:r.glow,emissiveIntensity:3.5,transparent:!0,opacity:.9});for(let d=0;d<3;d++){const u=new ce(new Lt(.075,8,6),c);u.castShadow=!1,t.add(u),l.push({mesh:u,a:d/3*Le})}const h=Ti(t,r.glow,2.1,.16,[0,.9,0]);return t.userData.animate=(d,u={})=>{const f=u.speed??0,p=d*(7.3+f);e.legs.forEach((x,g)=>{x.pivot.rotation.x=Math.sin(p+(g%2?Math.PI:0))*(.3+f*.03)}),i.position.y=Math.abs(Math.sin(p))*.03,o.forEach((x,g)=>{x.pivot.rotation.z=Math.sin(d*1.8+g*.9)*.13+(g-2.5)*.035,x.segments.forEach((m,v)=>{m.rotation.x=-.12+Math.sin(d*2.1+g*.8+v*.4)*.08})}),l.forEach((x,g)=>{const m=d*1.1+x.a;x.mesh.position.set(Math.cos(m)*.75,1+Math.sin(d*2.4+g)*.18,-.1+Math.sin(m)*.75)}),h.material.opacity=.13+Math.sin(d*3.1)*.03,n.rotation.y=Math.sin(d*1.4)*.08,u.attacking&&(n.rotation.x=-.3)},t.userData.height=1.55,t.userData.radius=.85,t}function dl(s,e,t){const i=new Be,n=new Be;i.add(n);const a=s.colors,r=De(a.primary,{}),o=De(a.secondary,{}),l=De(a.accent,{emissive:a.accent,emissiveIntensity:.65}),c=De(a.glow,{emissive:a.glow,emissiveIntensity:2.6}),h=[],d=t.segments??9;for(let p=d-1;p>=0;p--){const x=p/(d-1),g=Wt(.23,.58,Math.sin(x*Math.PI)*.9+.1),m=.4+x*(t.length??2.8),v=te(n,ie.sphere,p%3===0?o:r,[0,.75+Math.sin(x*2)*.05,m],[0,0,0],[g,g*.88,g*1.12]);h.push({mesh:v,base:v.position.clone(),phase:x*4.2,k:x})}const u=new Be;u.position.set(0,.82,-.45),n.add(u),te(u,ie.sphere,r,[0,0,0],[0,0,0],[.46,.38,.55]),te(u,ie.sphere,o,[0,-.05,-.38],[0,0,0],[.28,.23,.38]),te(u,ie.sphere,cl(1052180),[0,-.05,-.66],[0,0,0],[.11,.07,.06]),vi(u,-.2,.12,-.34,a.eye,.06),vi(u,.2,.12,-.34,a.eye,.06);for(let p=0;p<5;p++){const x=(p/4-.5)*2.4;te(u,ie.cone,l,[Math.sin(x)*.4,.24,.18+Math.cos(x)*.08],[0,0,-x*.5],[.06,.28+Math.cos(x)*.1,.05])}for(let p=1;p<d-1;p++){const x=p/(d-1),g=Wt(.23,.58,Math.sin(x*Math.PI)*.9+.1);te(n,ie.cone,l,[0,.82+g*.65,.4+x*(t.length??2.8)],[0,0,p%2?.2:-.2],[.055,.22+g*.25,.05])}const f=Ti(n,a.glow,3.1,.18,[0,.9,1.2]);return{g:i,body:n,head:u,primary:r,secondary:o,accent:l,glowMat:c,segments:h,aura:f,headBase:u.position.clone()}}function jg(s){const e=dl(s,{},{length:2.5,segments:9}),{g:t,head:i,aura:n}=e,a=s.colors;for(let l=0;l<3;l++)te(i,ie.torus,De(16248536,{emissive:12448511,emissiveIntensity:.3}),[0,-.2-l*.07,-.28],[.2,0,0],[.32-l*.04,.32-l*.04,.25]);te(i,ie.cone,De(a.accent,{emissive:a.accent,emissiveIntensity:.4}),[-.5,.18,-.02],[0,0,1],[.12,.44,.05]),te(i,ie.cone,De(a.accent,{emissive:a.accent,emissiveIntensity:.4}),[.5,.18,-.02],[0,0,-1],[.12,.44,.05]);const r=[],o=De(a.glow,{emissive:a.glow,emissiveIntensity:2.2,transparent:!0,opacity:.8});for(let l=0;l<6;l++){const c=te(t,ie.sphere,o,[0,1.2,1],[0,0,0],[.05,.08,.05]);r.push({mesh:c,a:l/6*Le,r:.8+l%2*.3})}return t.userData.animate=(l,c={})=>{const h=c.speed??0;e.segments.forEach((d,u)=>{d.mesh.position.x=Math.sin(l*1.6+d.phase)*(.09+h*.012),d.mesh.position.y=d.base.y+Math.sin(l*1.3+d.phase)*.06}),i.position.y=e.headBase.y+Math.sin(l*1.6)*.08,i.rotation.z=Math.sin(l*1.1)*.06,i.rotation.y=Math.sin(l*.8)*.08,r.forEach((d,u)=>{const f=l*.9+d.a;d.mesh.position.set(Math.cos(f)*d.r,.9+Math.sin(l*2+u)*.35,1.2+Math.sin(f)*d.r)}),n.material.opacity=.14+Math.sin(l*2.2)*.04,c.attacking&&(i.rotation.x=-.25)},t.userData.height=2,t.userData.radius=1.05,t}function ex(s){const e=dl(s,{},{length:3,segments:11}),{g:t,body:i,head:n,aura:a}=e,r=s.colors,o=De(12448511,{emissive:7986431,emissiveIntensity:.6}),l=new pi(.28,.055,5,12,Math.PI*1.05);te(n,l,o,[-.25,.34,.02],[.2,0,.5],[1,1,1]),te(n,l,o,[.25,.34,.02],[.2,0,-.5],[1,1,1]);for(let h=0;h<18;h++){const d=h/18*Le,u=.15+h%5*.12;te(i,ie.sphere,De(r.glow,{emissive:r.glow,emissiveIntensity:3,transparent:!0,opacity:.9}),[Math.cos(d)*.4,.9+Math.sin(d)*.3,.6+u*2.4],[0,0,0],[.025,.025,.025])}te(n,ie.cone,De(r.secondary,{emissive:5979814,emissiveIntensity:.25}),[-.5,.1,.1],[0,0,1.2],[.15,.55,.06]),te(n,ie.cone,De(r.secondary,{emissive:5979814,emissiveIntensity:.25}),[.5,.1,.1],[0,0,-1.2],[.15,.55,.06]);const c=Ti(t,12448511,1.5,.7,[0,2.3,.9]);return t.userData.animate=(h,d={})=>{const u=d.speed??0;e.segments.forEach((f,p)=>{f.mesh.position.x=Math.sin(h*1.25+f.phase)*(.12+u*.015),f.mesh.position.y=f.base.y+Math.sin(h*1.05+f.phase)*.09}),n.position.y=e.headBase.y+Math.sin(h*1.3)*.1,n.rotation.y=Math.sin(h*.7)*.1,c.position.set(Math.sin(h*.6)*.7,2.35+Math.sin(h*1.4)*.12,.5),c.material.opacity=.45+Math.sin(h*1.6)*.18,a.material.opacity=.13+Math.sin(h*2)*.05,d.attacking&&(n.rotation.x=-.3)},t.userData.height=2.4,t.userData.radius=1.15,t}function tx(s){const e=dl(s,{},{length:2.6,segments:10}),{g:t,body:i,head:n,aura:a}=e,r=s.colors,o=De(r.secondary,{side:ft}),l=De(r.accent,{side:ft,emissive:r.accent,emissiveIntensity:.15});for(let h=0;h<5;h++){const d=(h-2)*.28;te(n,ie.cone,h%2?l:o,[Math.sin(d)*.18,.3,.12+Math.cos(d)*.12],[.5,0,-d],[.08,.55-Math.abs(d)*.2,.03])}const c=[];for(const h of[-1,1]){const d=Hh(i,h,o,l,[.35*h,1.06,.55],2.2);c.push(d);for(let u=0;u<4;u++)te(d.pivot,ie.cone,l,[1.2+u*.22,-.02-u*.05,.2+u*.12],[0,0,-Math.PI/2+.15],[.05,.55-u*.07,.03])}for(let h=0;h<4;h++)te(i,ie.cone,l,[(h-1.5)*.15,.9,3.15],[1.1+(h-1.5)*.1,(h-1.5)*.16,0],[.09,1,.035]);return t.userData.animate=(h,d={})=>{const u=d.speed??0;e.segments.forEach((p,x)=>{p.mesh.position.x=Math.sin(h*1.8+p.phase)*(.1+u*.012),p.mesh.position.y=p.base.y+Math.sin(h*1.4+p.phase)*.05}),n.position.y=e.headBase.y+Math.sin(h*1.8)*.07,n.rotation.y=Math.sin(h*.9)*.1;const f=Math.sin(h*4.2+.4)*.35;c.forEach((p,x)=>{p.pivot.rotation.z=f*(x?-1:1),p.pivot.rotation.y=Math.sin(h*4.2)*.1}),a.material.opacity=.14+Math.sin(h*2.8)*.04,d.attacking&&(n.rotation.x=-.2)},t.userData.height=2.2,t.userData.radius=1.15,t}function ix(s){const e=new Be,t=new Be;e.add(t);const i=s.colors,n=De(i.primary,{}),a=De(i.secondary,{}),r=De(i.accent,{});De(i.glow,{emissive:i.glow,emissiveIntensity:2.4}),te(t,ie.sphere,n,[0,1.2,0],[0,0,0],[.32,.36,.48]),te(t,ie.sphere,a,[0,1.18,.25],[0,0,0],[.24,.25,.3]);const o=new Be;o.position.set(0,1.52,-.2),t.add(o),te(o,ie.sphere,n,[0,0,0],[0,0,0],[.23,.23,.25]),te(o,ie.sphere,r,[0,.01,-.13],[0,0,0],[.18,.17,.13]),te(o,ie.cone,De(2829107),[0,-.02,-.34],[-Math.PI/2,0,0],[.075,.3,.075]),vi(o,-.1,.04,-.23,16777215,.034),vi(o,.1,.04,-.23,16777215,.034),vi(o,-.1,.04,-.245,i.eye,.018),vi(o,.1,.04,-.245,i.eye,.018),te(o,ie.box,r,[0,.15,-.12],[.3,0,0],[.09,.03,.08]);const l=[];for(const d of[-1,1]){const u=Hh(t,d,n,a,[.28*d,1.3,0],1.6);l.push(u);for(let f=0;f<3;f++)te(u.pivot,ie.cone,a,[.85+f*.18,-.04,.15+f*.13],[0,0,-Math.PI/2],[.05,.55-f*.1,.03])}for(let d=0;d<3;d++)te(t,ie.cone,n,[(d-1)*.1,1.03,.52],[1.25,(d-1)*.18,0],[.08,.65,.03]);for(const d of[-1,1])te(t,ie.cylinder,a,[d*.1,.95,-.02],[0,0,0],[.03,.2,.03]);const c=Ti(e,i.glow,1.8,.15,[0,1.2,0]),h=Ti(o,i.glow,.55,.5,[0,.28,0]);return e.userData.animate=(d,u={})=>{t.position.y=1.1+Math.sin(d*2.4)*.08;const f=Math.sin(d*9+.3)*.55;l.forEach((p,x)=>{p.pivot.rotation.z=f*(x?-1:1),p.pivot.rotation.x=Math.sin(d*4.5)*.08}),o.rotation.y=Math.sin(d*1.7)*.15,o.rotation.z=Math.sin(d*1.2)*.06,h.material.opacity=.3+Math.sin(d*5)*.15,c.material.opacity=.12+Math.sin(d*3)*.03,u.attacking&&(t.rotation.x=-.25,o.rotation.x=.2)},e.userData.height=2.1,e.userData.radius=.9,e}const nx={spider:Kg,calf:Zg,lion:Jg,fox:Qg,serpent:jg,moon:ex,feathered:tx,raven:ix};function ir(s,e={}){const t=nx[s.stats.build],i=t(s,e);i.name=s.id;const n=(e.scale??s.stats.scale??1)*(e.boss,1);i.scale.setScalar(n),i.userData.scale=n;const a=Yg();if(a.position.y=(i.userData.height??2)+.5,a.scale.set(1.3,1.3,1),i.add(a),i.userData.bar=a,e.boss){const r=Ti(i,s.colors.glow,5.5,.16,[0,1.4,.4]);i.userData.bossAura=r;const o=new wh(s.colors.glow,2.2,14,2);o.position.y=1.5,i.add(o),i.userData.bossLight=o}return i}function Gc(s=.35){const e=new Be,t=new ce(new Lt(s,16,12),new Ue({color:9433294,emissive:3659429,emissiveIntensity:2.6,roughness:.2,metalness:.3}));e.add(t);const i=new ce(new pi(s*1.15,s*.08,6,20),new pt({color:14548981,toneMapped:!1}));i.rotation.x=Math.PI/2,e.add(i);const n=i.clone();n.rotation.set(.5,.5,0),e.add(n);const a=mi(6488024,s*5,.55);return e.add(a),e.userData.spin=r=>{i.rotation.z=r*3,n.rotation.y=r*2.2,n.rotation.z=r*1.7},e}function sx(s=16042333){const e=new Be,t=new pt({color:s,transparent:!0,opacity:.18,blending:zt,depthWrite:!1,side:ft}),i=new ce(new it(.55,.95,20,12,1,!0),t);i.position.y=10,e.add(i);const n=new ce(new dn(.42,0),new pt({color:s,transparent:!0,opacity:.95,toneMapped:!1}));n.position.y=3.4,e.add(n);const a=mi(s,3,.5);a.position.y=3.4,e.add(a);const r=new ce(new ji(1.2,1.45,32),new pt({color:s,transparent:!0,opacity:.45,side:ft,depthWrite:!1}));return r.rotation.x=-Math.PI/2,r.position.y=.06,e.add(r),e.userData.animate=o=>{n.rotation.y=o*1.2,n.position.y=3.4+Math.sin(o*1.5)*.18,a.position.y=n.position.y,a.material.opacity=.35+Math.sin(o*2)*.1,r.scale.setScalar(1+Math.sin(o*1.6)*.06)},e}const ax=2916254,rx=16763278,Hc=10471859,Ts=new R(-.55,.52,.42).normalize();function lt(s,e={}){return new Ue({color:s,roughness:.88,metalness:.02,...e})}function Ne(s,e,t,i=[0,0,0],n=[0,0,0],a=[1,1,1]){const r=new ce(e,t);return r.position.set(...i),r.rotation.set(...n),r.scale.set(...a),r.castShadow=!0,r.receiveShadow=!0,s.add(r),r}function As(s){const e=[];for(const i of s){const n=i.geo.clone();i.matrix&&n.applyMatrix4(i.matrix),n.attributes.uv||n.setAttribute("uv",new kt(new Float32Array(n.attributes.position.count*2),2));const a=new Float32Array(n.attributes.position.count*3),r=new Se(i.color??16777215);for(let o=0;o<n.attributes.position.count;o++)a[o*3]=r.r,a[o*3+1]=r.g,a[o*3+2]=r.b;n.setAttribute("color",new kt(a,3)),e.push(n)}const t=Gh(e,!1);return e.forEach(i=>i.dispose()),t}function Di(s=[0,0,0],e=[0,0,0],t=[1,1,1]){return new rt().compose(new R(...s),new gi().setFromEuler(new ai(...e)),new R(...t))}function ox(){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d"),i=t.createImageData(256,256);for(let a=0;a<256;a++)for(let r=0;r<256;r++){const o=210+(Gs(r*.14,a*.14)-.5)*54+(Math.random()-.5)*16,l=(a*256+r)*4;i.data[l]=o,i.data[l+1]=o*.99,i.data[l+2]=o*.93,i.data[l+3]=255}t.putImageData(i,0,0);const n=new Mn(e);return n.wrapS=n.wrapT=as,n.repeat.set(110,110),n.colorSpace=wt,n.anisotropy=4,n}function lx(s,e=""){const t=document.createElement("canvas");t.width=512,t.height=192;const i=t.getContext("2d");i.fillStyle="#c99c5b",i.fillRect(0,0,512,192),i.strokeStyle="#6d4a27",i.lineWidth=12,i.strokeRect(6,6,500,180),i.strokeStyle="rgba(90,60,30,.35)",i.lineWidth=3;for(let a=0;a<7;a++)i.beginPath(),i.moveTo(0,30+a*22),i.bezierCurveTo(160,24+a*22,320,38+a*22,512,28+a*22),i.stroke();i.fillStyle="#3c2a16",i.textAlign="center",i.textBaseline="middle",i.font="700 62px Georgia, serif",i.fillText(s,256,e?78:98),e&&(i.font="600 22px Trebuchet MS, sans-serif",i.fillStyle="rgba(60,42,22,.72)",i.fillText(e,256,142));const n=new Mn(t);return n.colorSpace=wt,n.anisotropy=4,n}function cx(s=["#f5e6c8","#d95f4f"]){const e=document.createElement("canvas");e.width=256,e.height=64;const t=e.getContext("2d"),i=32;for(let a=0;a<8;a++)t.fillStyle=s[a%s.length],t.fillRect(a*i,0,i,64);const n=new Mn(e);return n.wrapS=n.wrapT=as,n.repeat.set(1,1),n.colorSpace=wt,n}function hx(){const s=document.createElement("canvas");s.width=128,s.height=128;const e=s.getContext("2d");e.fillStyle="#9ba4a8",e.fillRect(0,0,128,128);for(let i=0;i<128;i+=12){const n=e.createLinearGradient(i,0,i+12,0);n.addColorStop(0,"rgba(255,255,255,.18)"),n.addColorStop(.5,"rgba(0,0,0,.12)"),n.addColorStop(1,"rgba(255,255,255,.1)"),e.fillStyle=n,e.fillRect(i,0,12,128)}e.fillStyle="rgba(90,50,30,.12)";for(let i=0;i<14;i++)e.fillRect(Math.random()*128,Math.random()*128,2+Math.random()*12,1+Math.random()*2);const t=new Mn(s);return t.wrapS=t.wrapT=as,t.repeat.set(3,1),t.colorSpace=wt,t}function Vc(s){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");t.fillStyle=s,t.fillRect(0,0,64,64),t.fillStyle="rgba(255,255,255,.16)";for(let n=0;n<30;n++)t.fillRect(Math.random()*64,Math.random()*64,2,2);t.strokeStyle="rgba(0,0,0,.12)";for(let n=0;n<6;n++)t.beginPath(),t.moveTo(0,n*12),t.lineTo(64,n*12+3),t.stroke();const i=new Mn(e);return i.colorSpace=wt,i}class dx{constructor(e,t,i={}){this.scene=e,this.renderer=t,this.root=new Be,e.add(this.root),this.time=0,this.quality=i.quality??"high",this.rng=Gr(20641),this.animated=[],this.colliders=[],this.shrines={},this.waypoints={},this.pickups=[],this.npcModels=[],this.waterfalls=[],this.staticPaths=[...Na(Fc,170),...Na(Oc,150),...Na(Bc,140)],this.pathSample=this.staticPaths.filter((n,a)=>a%5===0),e.fog=new il(Hc,.0031),this.buildSky(),this.buildLights(),this.buildTerrain(),this.buildPaths(),this.buildOcean(),this.buildClouds(),this.buildDistantLand(),this.buildVegetation(),this.buildRocks(),this.buildVillage(),this.buildBeachProps(),this.buildWaterfall(),this.buildShrines(),this.buildSilkTree(),this.buildNPCs(),this.buildPickups(),this.buildParticles(),this.buildWaypoints()}buildSky(){const e=new Lt(480,32,20),t=new Zt({side:ii,depthWrite:!1,fog:!1,uniforms:{topColor:{value:new Se(ax)},horizonColor:{value:new Se(rx)},sunColor:{value:new Se(16773833)},sunDir:{value:Ts.clone()},time:{value:0}},vertexShader:`
        varying vec3 vWorld;
        void main() {
          vWorld = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 topColor; uniform vec3 horizonColor; uniform vec3 sunColor; uniform vec3 sunDir; uniform float time;
        varying vec3 vWorld;
        void main() {
          float h = clamp(vWorld.y, -0.1, 1.0);
          float t = pow(max(h, 0.0), 0.48);
          vec3 col = mix(horizonColor, topColor, smoothstep(0.0, 0.8, t));
          vec3 dir = normalize(vWorld);
          float sun = pow(max(dot(dir, sunDir), 0.0), 220.0);
          float glow = pow(max(dot(dir, sunDir), 0.0), 7.0);
          col += sunColor * sun * 2.6;
          col += vec3(1.0, 0.63, 0.34) * glow * 0.28;
          float band = sin(dir.y * 22.0 + time * 0.02) * 0.5 + 0.5;
          col += vec3(1.0, 0.68, 0.45) * band * 0.018 * smoothstep(0.1, 0.6, dir.y);
          gl_FragColor = vec4(col, 1.0);
        }
      `});this.sky=new ce(e,t),this.sky.frustumCulled=!1,this.scene.add(this.sky),this.sun=mi(16773304,55,.95),this.sun.position.copy(Ts).multiplyScalar(360),this.sun.material.depthWrite=!1,this.scene.add(this.sun),this.sunGlow=mi(16757611,190,.32),this.sunGlow.position.copy(Ts).multiplyScalar(350),this.scene.add(this.sunGlow)}buildLights(){const e=new yh(11065826,3101240,1.25);this.scene.add(e);const t=new Lo(16767398,2.8);t.position.copy(Ts).multiplyScalar(90),t.castShadow=!0;const i=this.quality==="low"?1024:2048;t.shadow.mapSize.set(i,i),t.shadow.camera.left=-70,t.shadow.camera.right=70,t.shadow.camera.top=70,t.shadow.camera.bottom=-70,t.shadow.camera.near=10,t.shadow.camera.far=220,t.shadow.bias=-5e-4,t.shadow.normalBias=.035,this.scene.add(t),this.scene.add(t.target),this.sunLight=t;const n=new wu(3233095,.55);this.scene.add(n)}buildTerrain(){const t=this.quality==="low"?96:150,i=new ti(300,300,t,t);i.rotateX(-Math.PI/2);const n=i.attributes.position,a=new Float32Array(n.count*3),r=new Se,o=new Se(10783580),l=new Se(15191443),c=new Se(15850667),h=new Se(6000455),d=new Se(3631933),u=new Se(8171095),f=new Se(10249538),p=new Se(8222308),x=new Se(5921358),g=new Se(3106115),m=new Se(5206868);for(let E=0;E<n.count;E++){const _=n.getX(E),S=n.getZ(E),L=we(_,S);n.setY(E,L);const C=Math.hypot(_,S),N=kh(_*.045+9,S*.045-5,3),F=Gs(_*.095-3,S*.095+8),[G,I]=Vg(_,S),z=1-I;L<.1?r.copy(o).lerp(l,si(-2,.1,L)):L<1.55?r.copy(l).lerp(c,F*.45):L<2.65?r.copy(l).lerp(h,si(1.55,2.65,L)*(.55+N*.35)):(r.copy(h).lerp(u,F*.55),r.lerp(d,si(.45,.75,N)*.55),C>82&&r.lerp(g,.25),L>15&&r.lerp(g,si(15,24,L)*.3),L>23&&r.lerp(m,si(23,29,L)*.5),F>.66&&L<14&&C<95&&r.lerp(f,(F-.66)*.85),z>.25&&r.lerp(p,si(.25,.58,z)*.9),z>.55&&r.lerp(x,si(.55,.86,z)*.7)),a[E*3]=r.r,a[E*3+1]=r.g,a[E*3+2]=r.b}i.setAttribute("color",new kt(a,3)),i.computeVertexNormals();const v=new Ue({vertexColors:!0,roughness:1,metalness:0,map:ox()}),w=new ce(i,v);w.receiveShadow=!0,w.castShadow=!1,this.root.add(w),this.terrain=w;const b=new ji(102,160,80,1);b.rotateX(-Math.PI/2);const A=new ce(b,new pt({color:2792342,transparent:!0,opacity:.24,depthWrite:!1}));A.position.y=-.55,this.root.add(A)}buildPaths(){const e=(n,a,r,o)=>{const l=[],c=[],h=[],d=new Se(r);for(let f=0;f<n.length;f++){const p=n[f],x=n[Math.max(0,f-1)],g=n[Math.min(n.length-1,f+1)];let m=g[0]-x[0],v=g[2]-x[2];const w=Math.hypot(m,v)||1;m/=w,v/=w;const b=-v,A=m,E=a*(.82+Math.sin(f*.27)*.09+Gs(f*.2,0)*.12),_=p[0]+b*E,S=p[2]+A*E,L=p[0]-b*E,C=p[2]-A*E;l.push(_,we(_,S)+o,S,L,we(L,C)+o,C);const N=.88+Gs(f*.4,4)*.2;if(c.push(d.r*N,d.g*N,d.b*N,d.r*N,d.g*N,d.b*N),f>0){const F=(f-1)*2;h.push(F,F+1,F+2,F+1,F+3,F+2)}}const u=new xt;return u.setAttribute("position",new tt(l,3)),u.setAttribute("color",new tt(c,3)),u.setIndex(h),u.computeVertexNormals(),u},t=new Ue({vertexColors:!0,roughness:1,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),i=new Ue({color:10779471,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});for(const[n,a]of[[Fc,2.15],[Oc,1.75],[Bc,1.8]]){const r=Na(n,190),o=new ce(e(r,a+.55,10122312,.04),i);o.receiveShadow=!0,this.root.add(o);const l=new ce(e(r,a,14202238,.07),t);l.receiveShadow=!0,this.root.add(l)}}buildOcean(){const e=new ti(700,700,150,150);e.rotateX(-Math.PI/2);const t=new Zt({uniforms:{time:{value:0},deep:{value:new Se(481906)},shallow:{value:new Se(3129520)},crest:{value:new Se(12779504)},sunDir:{value:Ts.clone()},fogColor:{value:new Se(Hc)},fogDensity:{value:.0031}},vertexShader:`
        uniform float time;
        varying vec3 vWorld; varying float vWave;
        void main(){
          vec3 p = position;
          float d = length(p.xz);
          float w1 = sin(p.x * 0.19 + time * 0.9) * 0.16;
          float w2 = sin(p.z * 0.23 - time * 1.1 + p.x * 0.07) * 0.12;
          float w3 = sin((p.x + p.z) * 0.09 + time * 0.6) * 0.18;
          p.y += (w1 + w2 + w3) * smoothstep(120.0, 260.0, d) * 0.5 + (w1 + w2) * 0.35;
          vWave = w1 + w2 + w3;
          vec4 wp = modelMatrix * vec4(p, 1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        uniform float time; uniform vec3 deep; uniform vec3 shallow; uniform vec3 crest; uniform vec3 sunDir;
        uniform vec3 fogColor; uniform float fogDensity;
        varying vec3 vWorld; varying float vWave;
        void main(){
          float d = length(vWorld.xz);
          vec3 viewDir = normalize(cameraPosition - vWorld);
          float fres = pow(1.0 - max(dot(viewDir, vec3(0.,1.,0.)), 0.0), 2.2);
          float bands = sin(vWorld.x * 0.32 + time * 0.8 + sin(vWorld.z * 0.12) * 2.0) * 0.5 + 0.5;
          float bands2 = sin(vWorld.z * 0.5 - time * 1.2) * 0.5 + 0.5;
          vec3 col = mix(deep, shallow, smoothstep(30.0, 130.0, d) * 0.7 + 0.18);
          col += crest * smoothstep(0.72, 1.0, bands * bands2) * 0.22;
          col = mix(col, vec3(0.07, 0.42, 0.48), fres * 0.55);
          float spec = pow(max(dot(normalize(sunDir + viewDir), vec3(0.,1.,0.)), 0.0), 90.0);
          col += vec3(1.0, 0.86, 0.58) * spec * 0.7;
          col += crest * smoothstep(0.55, 0.9, vWave) * 0.06;
          float fog = 1.0 - exp(-fogDensity * fogDensity * distance(cameraPosition, vWorld) * distance(cameraPosition, vWorld));
          col = mix(col, fogColor, clamp(fog * 1.5, 0.0, 0.82));
          gl_FragColor = vec4(col, 1.0);
        }
      `}),i=new ce(e,t);i.position.y=.03,i.receiveShadow=!1,i.frustumCulled=!1,this.root.add(i),this.ocean=i,this.animated.push((l,c)=>{t.uniforms.time.value=c});const n=[],a=Gr(123);for(let l=0;l<420;l++){const c=a()*Le;let h=0;for(let d=86;d<132;d+=.55){const u=Math.cos(c)*d,f=Math.sin(c)*d;if(we(u,f)<.5&&we(u+Math.cos(c)*1.8,f+Math.sin(c)*1.8)>.42){h=d;break}}if(h){const d=Math.cos(c)*(h+1.6+a()*2.2),u=Math.sin(c)*(h+1.6+a()*2.2);n.push(d,.14+a()*.05,u)}}const r=new xt;r.setAttribute("position",new tt(n,3));const o=new jn({color:15400952,size:2.8,map:ts("rgba(255,255,255,1)","rgba(255,255,255,0)",64),transparent:!0,opacity:.32,depthWrite:!1,blending:zt,sizeAttenuation:!0});this.foam=new Cs(r,o),this.root.add(this.foam),this.animated.push((l,c)=>{o.opacity=.24+Math.sin(c*.9)*.08})}buildClouds(){const e=Bg(),t=Gr(82);for(let i=0;i<22;i++){const n=new nl({map:e,color:new Se(i%4?16771279:16765090),transparent:!0,opacity:.28+t()*.2,depthWrite:!1,fog:!1}),a=new fh(n),r=t()*Le,o=190+t()*180;a.position.set(Math.cos(r)*o,48+t()*70,Math.sin(r)*o);const l=70+t()*110;a.scale.set(l,l*.42,1),a.userData.drift=.4+t()*.6,this.root.add(a),this.animated.push((c,h)=>{a.position.x+=c*a.userData.drift,a.position.x>400&&(a.position.x=-400)})}}buildDistantLand(){const e=new Ue({color:2841418,roughness:1,flatShading:!0}),t=[[-230,-170,60,26],[210,90,70,20],[40,-260,80,30],[-280,140,55,18]];for(const[i,n,a,r]of t){const o=new Be;for(let l=0;l<5;l++){const c=new ce(new fi(1,0),e);c.position.set((l-2)*a*.25,-2,l%2*8),c.scale.set(a*.35,r*(.6+l%3*.16),a*.3),o.add(c)}o.position.set(i,0,n),o.traverse(l=>{l.isMesh&&l.material&&(l.material.fog=!0)}),this.root.add(o)}}makePalmAssets(){const e=[];let i=0,n=0,a=0;const r=6;for(let c=0;c<r;c++){n+=.09*(c/r),a+=.03;const d=new it(.16-c*.011,.23-c*.012,1.2,6),u=Di([n*c,i+1.2/2,a*c],[0,0,-.1*(c/r)],[1,1,1]);e.push({geo:d,matrix:u,color:c%2?9071173:9925451}),i+=1.2*.94}const o=As(e),l=[];for(let c=0;c<8;c++){const h=c/8*Le+.2,d=.3+c%3*.16,u=new ki(.72,3.2,4,1,!0),f=Di([Math.cos(h)*1.3,i+.1-d*.7,Math.sin(h)*1.3],[Math.PI/2,0,h+Math.PI/2],[1,1,.16]);l.push({geo:u,matrix:f,color:c%2?3042107:4162120});const p=new ki(.34,1.7,3,1,!0),x=Di([Math.cos(h)*2.1,i+.05-d,Math.sin(h)*2.1],[Math.PI/2,0,h+Math.PI/2],[1,1,.13]);l.push({geo:p,matrix:x,color:4423491})}for(let c=0;c<5;c++){const h=c/5*Le,d=new Lt(.17,6,5);l.push({geo:d,matrix:Di([Math.cos(h)*.3,i-.35,Math.sin(h)*.3]),color:5913887})}return{trunkGeo:o,crownGeo:As(l),height:i}}buildVegetation(){const e=this.rng,t=this.makePalmAssets(),i=new Ue({vertexColors:!0,roughness:.95,flatShading:!0}),n=new Ue({vertexColors:!0,roughness:.86,side:ft,flatShading:!0}),a=[];for(let P=0;P<60;P++){const X=e()*Le,V=58+e()*57,q=Math.cos(X)*V,K=Math.sin(X)*V,me=we(q,K);me<1.4||me>9||this.nearStructure(q,K,8)||e()<.3&&Math.hypot(q-20,K-50)>18||a.push({x:q,z:K,h:me,s:.75+e()*.7,rot:e()*Le})}a.push({x:17,z:62,h:we(17,62),s:1.1,rot:.5}),a.push({x:-2,z:73,h:we(-2,73),s:.9,rot:2.1}),a.push({x:39,z:51,h:we(39,51),s:.95,rot:4.2});const r=new on(t.trunkGeo,i,a.length),o=new on(t.crownGeo,n,a.length);r.castShadow=o.castShadow=!0,r.receiveShadow=o.receiveShadow=!1;const l=new rt;a.forEach((P,X)=>{l.compose(new R(P.x,P.h,P.z),new gi().setFromEuler(new ai(0,P.rot,0)),new R(P.s,P.s,P.s)),r.setMatrixAt(X,l),o.setMatrixAt(X,l),X%3===0&&this.colliders.push({x:P.x,z:P.z,r:.55*P.s})}),this.root.add(r,o);const c=[{geo:new it(.22,.4,3.4,6),matrix:Di([0,1.7,0]),color:7228976}];for(let P=0;P<3;P++){const X=P/3*Le;c.push({geo:new it(.08,.18,2.1,5),matrix:Di([Math.cos(X)*.35,3.2,Math.sin(X)*.35],[Math.cos(X)*.6,0,Math.sin(X)*-.6]),color:6637355})}const h=As(c),d=[];for(let P=0;P<7;P++){const X=P/7*Le,V=P===0?0:1.55,q=new fi(1,0);d.push({geo:q,matrix:Di([Math.cos(X)*V,4.2+P%3*.5,Math.sin(X)*V],[0,X,0],[1.55,1,1.4]),color:P%3===0?2845756:P%3===1?3899720:2187323})}const u=As(d),f=[];for(let P=0;P<95;P++){const X=e()*Le,V=12+e()*96,q=Math.cos(X)*V,K=Math.sin(X)*V,me=we(q,K);me<2.4||me>25||this.nearStructure(q,K,7)||this.nearPath(q,K,3.5)||e()<.4||f.push({x:q,z:K,h:me,s:.7+e()*.85,rot:e()*Le})}const p=new on(h,i,f.length),x=new on(u,new Ue({vertexColors:!0,roughness:.9,flatShading:!0}),f.length);p.castShadow=x.castShadow=!0,f.forEach((P,X)=>{l.compose(new R(P.x,P.h,P.z),new gi().setFromEuler(new ai(0,P.rot,0)),new R(P.s,P.s,P.s)),p.setMatrixAt(X,l),x.setMatrixAt(X,l),P.s>1.1&&this.colliders.push({x:P.x,z:P.z,r:.5})}),this.root.add(p,x);const g=As([{geo:new fi(1,0),matrix:Di([0,.55,0],[0,0,0],[1,.75,1]),color:4028996},{geo:new fi(.8,0),matrix:Di([.7,.4,.2],[0,.6,0],[1,.7,1]),color:3107645},{geo:new fi(.7,0),matrix:Di([-.6,.35,-.25],[0,-.4,0],[1,.8,1]),color:4950603}]),m=new Ue({vertexColors:!0,roughness:.95,flatShading:!0}),v=[];for(let P=0;P<260;P++){const X=e()*Le,V=10+e()*105,q=Math.cos(X)*V,K=Math.sin(X)*V,me=we(q,K);me<2.1||me>26||this.nearStructure(q,K,3.2)||this.nearPath(q,K,1.8)||v.push({x:q,z:K,h:me,s:.55+e()*.95,rot:e()*Le})}const w=new on(g,m,v.length);w.castShadow=!0,w.receiveShadow=!0,v.forEach((P,X)=>{l.compose(new R(P.x,P.h,P.z),new gi().setFromEuler(new ai(0,P.rot,0)),new R(P.s,P.s,P.s)),w.setMatrixAt(X,l)}),this.root.add(w);const b=zg(),A=[];for(let P=0;P<3;P++){const X=new ti(.7,.9);X.applyMatrix4(Di([0,.42,0],[0,P/3*Math.PI,0])),A.push(X)}const E=Gh(A,!1),_=new Ue({color:7316814,map:b,alphaTest:.4,side:ft,roughness:1,transparent:!1}),S=[];for(let P=0;P<3600;P++){const X=e()*Le,V=8+e()*108,q=Math.cos(X)*V,K=Math.sin(X)*V,me=we(q,K);me<2.2||me>27||this.nearStructure(q,K,2.4)||this.nearPath(q,K,1.2)||S.push({x:q,z:K,h:me,s:.6+e()*1,rot:e()*Le})}const L=new on(E,_,S.length);L.receiveShadow=!0;const C=new Se;S.forEach((P,X)=>{l.compose(new R(P.x,P.h,P.z),new gi().setFromEuler(new ai(0,P.rot,0)),new R(P.s,P.s,P.s)),L.setMatrixAt(X,l),C.setHSL(.24+e()*.06,.35+e()*.25,.32+e()*.16),L.setColorAt(X,C)}),this.root.add(L);const N=new fi(.11,0),F=new Ue({color:16777215,roughness:.7,emissive:4465152,emissiveIntensity:.1}),G=[],I=[16739210,16757575,16042333,14703261,16747625,13083903];for(let P=0;P<420;P++){const X=e()*Le,V=12+e()*102,q=Math.cos(X)*V,K=Math.sin(X)*V,me=we(q,K);me<2.6||me>16||this.nearStructure(q,K,3)||this.nearPath(q,K,1.5)||e()<.5||G.push({x:q,z:K,h:me,s:.7+e()*1.4,color:I[Math.floor(e()*I.length)]})}const z=new on(N,F,G.length),$=new Se;G.forEach((P,X)=>{l.compose(new R(P.x,P.h+.55,P.z),new gi,new R(P.s,P.s,P.s)),z.setMatrixAt(X,l),$.setHex(P.color),z.setColorAt(X,$)}),this.root.add(z);for(let P=0;P<9;P++){const X=e()*Le,V=8+e()*13,q=Ds.x+Math.cos(X)*V,K=Ds.z+Math.sin(X)*V;this.nearStructure(q,K,3)||this.nearPath(q,K,1.5)||this.root.add(this.makeBananaPlant(q,we(q,K),K,e()*Le))}}makeBananaPlant(e,t,i,n){const a=new Be;a.position.set(e,t,i),a.rotation.y=n;const r=new ce(new it(.08,.14,2.2,5),lt(6064702));r.position.y=1.1,r.castShadow=!0,a.add(r);for(let o=0;o<7;o++){const l=o/7*Le,c=new ce(new ki(.42,2.2,4,1,!0),new Ue({color:o%2?4886339:5940302,roughness:.8,side:ft,flatShading:!0}));c.position.set(Math.cos(l)*.9,2.1+o%2*.2,Math.sin(l)*.9),c.rotation.set(Math.PI/2-.35,0,l+Math.PI/2),c.scale.set(1,1,.15),c.castShadow=!0,a.add(c)}return a}buildRocks(){const e=new es(1,0),t=new Ue({color:8025192,roughness:.98,flatShading:!0}),i=[],n=this.rng;for(let o=0;o<90;o++){const l=n()*Le,c=8+n()*112,h=Math.cos(l)*c,d=Math.sin(l)*c,u=we(h,d);u<1.2||u>28||this.nearStructure(h,d,3)||this.nearPath(h,d,1.5)||i.push({x:h,z:d,h:u,s:.35+n()*1.4,rot:n()*Le})}const a=new on(e,t,i.length);a.castShadow=!0,a.receiveShadow=!0;const r=new rt;i.forEach((o,l)=>{r.compose(new R(o.x,o.h+o.s*.25,o.z),new gi().setFromEuler(new ai(o.rot*.2,o.rot,o.rot*.12)),new R(o.s,o.s*.75,o.s*1.1)),a.setMatrixAt(l,r),o.s>1.1&&this.colliders.push({x:o.x,z:o.z,r:o.s*.6})}),this.root.add(a);for(let o=0;o<18;o++){const l=n()*Le,c=100+n()*18,h=Math.cos(l)*c,d=Math.sin(l)*c,u=we(h,d);if(u<-.5)continue;const f=new ce(e,t);f.position.set(h,u+.2,d),f.scale.set(.5+n()*1.1,.4+n()*.7,.5+n()*.8),f.rotation.set(n(),n()*Le,n()),f.castShadow=!0,this.root.add(f)}}buildVillage(){const e=[{x:17,z:31,rot:.5,wall:15770460,roof:10200232,trim:3107676},{x:40,z:30,rot:-.6,wall:8378564,roof:9410972,trim:12997439},{x:46,z:43,rot:1.9,wall:16765286,roof:11055284,trim:3107676},{x:16,z:46,rot:-1.7,wall:14245711,roof:9082007,trim:16042333},{x:34,z:50,rot:2.9,wall:10408096,roof:10200232,trim:8012328},{x:22,z:22,rot:.85,wall:15320736,roof:9082007,trim:3107676}];for(const a of e){const r=this.makeHouse(a);this.root.add(r),this.colliders.push({x:a.x,z:a.z,r:3.6})}const t=[{x:31,z:34,rot:-.35,a:"#f5e6c8",b:"#d95f4f",fruit:16754219},{x:35,z:39,rot:.25,a:"#f5e6c8",b:"#2f9e79",fruit:14703261},{x:27,z:39,rot:.9,a:"#f4c95d",b:"#2f6b5c",fruit:16765286}];for(const a of t)this.root.add(this.makeStall(a)),this.colliders.push({x:a.x,z:a.z,r:2.3});for(let a=0;a<14;a++){const r=a<7?-.2:2.4,o=29+Math.cos(r)*27+a%7*1.6,l=39+Math.sin(r)*27,c=we(o,l);if(c<2)continue;const h=new ce(new Ze(1.5,1.7,.06),lt([3120761,16042333,14245711,4891591][a%4],{roughness:.8,metalness:.2}));h.position.set(o,c+.85,l),h.rotation.y=r,h.castShadow=!0,this.root.add(h)}const i=["#f5e6c8","#d95f4f","#4aa3c7","#f4c95d","#2f9e79"];for(let a=0;a<4;a++){const r=12+a*4,o=39+a%2*.8,l=we(r,o),c=new Be,h=new xt().setFromPoints([new R(0,0,0),new R(5,0,0)]),d=new gu(h,new mh({color:7035458}));c.add(d);for(let u=0;u<4;u++){const f=new ce(new ti(.8,.65),new Ue({map:Vc(i[(a+u)%i.length]),side:ft,roughness:1}));f.position.set(.8+u*1.05,-.36,0),f.castShadow=!0,c.add(f);const p=f.rotation.x;this.animated.push((x,g)=>{f.rotation.x=p+Math.sin(g*1.7+u+a)*.16})}c.position.set(r,l+2.7,o),this.root.add(c)}const n=[[30,45,"drum"],[33,46,"drum"],[29,44.5,"crate"],[43,37,"crate"],[20,37,"crate"],[12,45,"planter"],[44,38,"planter"]];for(const[a,r,o]of n){const l=we(a,r);if(o==="drum"){const c=new Be;c.position.set(a,l,r);const h=new ce(new it(.32,.4,.85,10),lt(8012328));h.position.y=.43,h.castShadow=!0,c.add(h);const d=new ce(new Os(.31,10),lt(15326658));d.rotation.x=-Math.PI/2,d.position.y=.861,c.add(d);for(let u=0;u<3;u++){const f=new ce(new pi(.34,.02,4,12),lt(16042333));f.rotation.x=Math.PI/2,f.position.y=.2+u*.25,c.add(f)}this.root.add(c)}else if(o==="crate"){const c=new ce(new Ze(.8,.6,.8),lt(10119996));c.position.set(a,l+.3,r),c.rotation.y=Ls(a,r)*3,c.castShadow=!0,this.root.add(c)}else{const c=new ce(new it(.35,.25,.5,8),lt(11887935));c.position.set(a,l+.25,r),c.castShadow=!0,this.root.add(c);const h=new ce(new fi(.42,0),lt(4886339));h.position.set(a,l+.7,r),h.castShadow=!0,this.root.add(h)}}this.root.add(this.makeSign(25.5,46.5,.4,["NINE MILE","MARKET ↑"])),this.root.add(this.makeSign(44.5,41,-.8,["LUMINOUS REEF","↗ 25 MIN"])),this.root.add(this.makeSign(12,22,1.9,["SILK COTTON","GROVE ↖"])),this.root.add(this.makeSign(-19,-1,2.3,["BLUE MOUNTAIN","SHRINE ↖"]))}makeHouse({x:e,z:t,rot:i=0,wall:n=15770460,roof:a=10200232,trim:r=3107676}){const o=new Be,l=we(e,t);o.position.set(e,l,t),o.rotation.y=i;const c=lt(n,{roughness:.92}),h=lt(r,{roughness:.7,metalness:.15}),d=new Ue({map:hx(),color:a,roughness:.52,metalness:.42,side:ft}),u=lt(7228204);Ne(o,new Ze(5.2,.35,4.4),lt(9142385),[0,.17,0]),Ne(o,new Ze(4.7,2.75,3.9),c,[0,1.72,0]),Ne(o,new Ze(4.85,.12,4.05),h,[0,3.06,0]),Ne(o,new Ze(5.7,.12,2.55),d,[-1.03,3.75,0],[0,0,-.5]),Ne(o,new Ze(5.7,.12,2.55),d,[1.03,3.75,0],[0,0,.5]),Ne(o,new Ze(5.75,.18,.22),h,[0,4.3,0]),Ne(o,new Ze(5.1,.16,1.5),u,[0,.42,2.55]);for(const f of[-2.35,2.35])Ne(o,new it(.08,.1,2.5,6),u,[f,1.65,3.15]);Ne(o,new Ze(5.1,.08,.08),u,[0,2.18,3.16]),Ne(o,new Ze(4.6,.08,.08),u,[0,.92,3.17]),Ne(o,new Ze(.92,1.75,.09),lt(4927261),[0,1.45,1.99]),Ne(o,new Lt(.05,6,5),h,[.32,1.4,2.06]);for(const f of[-1.55,1.55]){const p=new pt({color:16762219,toneMapped:!1});Ne(o,new Ze(.82,.72,.06),p,[f,1.85,1.985]),Ne(o,new Ze(.96,.86,.04),h,[f,1.85,1.955]),Ne(o,new Ze(.82,.08,.08),lt(4927261),[f,1.85,2]),Ne(o,new Ze(.08,.72,.08),lt(4927261),[f,1.85,2]),Ne(o,new Ze(.36,.8,.06),h,[f-.62,1.85,2],[0,.2,0]),Ne(o,new Ze(.36,.8,.06),h,[f+.62,1.85,2],[0,-.2,0])}for(let f=0;f<2;f++)Ne(o,new Ze(1.8,.18,.5),lt(9142385),[0,.09+f*.16,3+(1-f)*.3]);return Ne(o,new it(.22,.17,.38,7),lt(11887935),[2,.6,2.85]),Ne(o,new fi(.3,0),lt(4886339),[2,.9,2.85]),o}makeStall({x:e,z:t,rot:i,a:n,b:a,fruit:r}){const o=new Be,l=we(e,t);o.position.set(e,l,t),o.rotation.y=i;const c=lt(8015403);for(const f of[-1.8,1.8])for(const p of[-1.1,1.1])Ne(o,new it(.06,.08,2.8,6),c,[f,1.4,p]);Ne(o,new Ze(4,.13,2.5),lt(9067056),[0,1,0]),Ne(o,new Ze(3.8,.7,.16),lt(10119996),[0,.6,-1.15]);const h=cx([n,a]),d=new ce(new ti(4.4,3,1,1),new Ue({map:h,side:ft,roughness:.95}));d.rotation.x=-Math.PI/2,d.rotation.z=.06,d.position.y=2.75,d.castShadow=!0,o.add(d);const u=new ce(new ti(4.4,.4),new Ue({map:h,side:ft,roughness:.95}));u.position.set(0,2.56,1.5),o.add(u);for(let f=0;f<3;f++)for(let p=0;p<4-f;p++){const x=new ce(new Lt(.16,8,6),new Ue({color:r,roughness:.55,metalness:.05}));x.position.set(-2.4+f*.35+p*.28,1.2+f*.22,.15+p%2*.2),x.castShadow=!0,o.add(x)}Ne(o,new Ze(.7,.5,.7),lt(10119996),[1.1,.7,.2]),Ne(o,new Ze(.5,.35,.5),lt(9067056),[1.1,1.12,.2]);for(let f=0;f<3;f++){const p=new ce(new Lt(.07,7,5),new pt({color:16766074,toneMapped:!1}));p.position.set(-1.4+f*1.4,2.45,1.35),o.add(p)}return o}makeSign(e,t,i,n){const a=new Be,r=we(e,t);a.position.set(e,r,t),a.rotation.y=i,Ne(a,new it(.07,.1,2.5,6),lt(7228204),[0,1.25,0]);const o=lx(n[0],n[1]),l=new ce(new Ze(1.8,.7,.08),new Ue({map:o,roughness:.9}));l.position.set(0,2.15,.08),l.castShadow=!0,a.add(l);const c=new ce(new Ze(1.92,.82,.04),lt(5978912));return c.position.set(0,2.15,.02),a.add(c),a}buildBeachProps(){this.root.add(this.makeBoat(4,83,1.1)),this.root.add(this.makeBoat(-15,96,2.3,.78));const e=we(13,76),t=new ce(new it(.07,.1,3.4,6),lt(7228204));t.position.set(13,e+1.7,76),t.castShadow=!0,this.root.add(t);const i=Vc("#2f9e79"),n=new ce(new ti(1.3,.8),new Ue({map:i,side:ft,roughness:1}));n.position.set(13.7,e+3,76),this.root.add(n),this.animated.push((a,r)=>{n.rotation.y=Math.sin(r*2.2)*.2});for(let a=0;a<14;a++){const r=this.rng()*Le,o=100+this.rng()*12,l=Math.cos(r)*o,c=Math.sin(r)*o,h=we(l,c);if(h<.4||h>1.4)continue;const d=new ce(new Os(.18,5),lt(16747625));d.rotation.x=-Math.PI/2,d.position.set(l,h+.03,c),this.root.add(d)}}makeBoat(e,t,i,n=1){const a=new Be,r=we(e,t);a.position.set(e,r+.2,t),a.rotation.y=i,a.scale.setScalar(n);const o=new ce(new al(.75,3,4,10),new Ue({color:9067056,roughness:.8,flatShading:!0}));o.rotation.x=Math.PI/2,o.rotation.z=Math.PI/2,o.scale.y=.55,o.position.y=.4,o.castShadow=!0,a.add(o);const l=new ce(new Ze(1,.45,3.2),lt(3877403));l.position.y=.5,a.add(l);const c=new ce(new it(.05,.07,3.4,5),lt(7228204));c.position.set(0,2.1,-.2),c.castShadow=!0,a.add(c);const h=new ce(new ti(2,2.4,3,3),new Ue({color:15918793,side:ft,roughness:.9}));h.position.set(0,2.4,.75),h.rotation.y=Math.PI/2,h.rotation.z=.1,h.castShadow=!0,a.add(h);for(const u of[-1,1]){const f=new ce(new it(.03,.04,2.2,5),lt(10119996));f.position.set(u*.9,.8,.8),f.rotation.z=u*.5,a.add(f)}const d=r+.2;return this.animated.push((u,f)=>{a.position.y=d+Math.sin(f*1.1+e)*.08,a.rotation.z=Math.sin(f*.9+t)*.02}),a}buildWaterfall(){const e=new Be;e.position.set(ui.x,0,ui.z);const t=new Ue({color:6053712,roughness:.98,flatShading:!0});for(let d=0;d<12;d++){const u=d/12*Le,f=7+d%3*1.2,p=new ce(new es(1,0),t);p.position.set(Math.cos(u)*f,we(ui.x+Math.cos(u)*f,ui.z+Math.sin(u)*f)+.3,Math.sin(u)*f),p.scale.set(1.4+d%3*.6,1.6+d%4*.7,1.2+d%2*.5),p.rotation.set(d,d*2,d*1.3),p.castShadow=!0,p.receiveShadow=!0,e.add(p),this.colliders.push({x:ui.x+Math.cos(u)*f,z:ui.z+Math.sin(u)*f,r:1.6})}for(let d=0;d<5;d++){const u=new ce(new es(1,0),t);u.position.set(-4+d*2,14.4+d%2*.7,-3.2),u.scale.set(1.8,1.2,2),u.castShadow=!0,e.add(u)}const i=new Zt({transparent:!0,side:ft,depthWrite:!1,uniforms:{time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        uniform float time; varying vec2 vUv;
        void main(){
          float stripes = sin(vUv.x * 46.0 + sin(vUv.y * 12.0 + time * 3.0) * 2.0) * 0.5 + 0.5;
          float streaks = sin(vUv.y * 30.0 - time * 7.0 + vUv.x * 8.0) * 0.5 + 0.5;
          float a = (0.34 + stripes * 0.24 + streaks * 0.12) * smoothstep(0.0, 0.12, vUv.y) * smoothstep(1.0, 0.92, vUv.y);
          vec3 col = mix(vec3(0.55, 0.86, 0.9), vec3(1.0), stripes * 0.7);
          gl_FragColor = vec4(col, a);
        }
      `}),n=new ce(new ti(3.3,8.2,1,1),i);n.position.set(2.1,10.6,-3.1),n.rotation.x=.04,e.add(n),this.waterfalls.push(i);const a=new ce(new Os(6.5,32),new Ue({color:4114880,roughness:.1,metalness:.2,transparent:!0,opacity:.72,emissive:879474,emissiveIntensity:.4}));a.rotation.x=-Math.PI/2,a.position.y=we(ui.x,ui.z)+.1,e.add(a);const r=new ce(new ji(6.2,6.6,32),new pt({color:10485745,transparent:!0,opacity:.32,side:ft,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.y=a.position.y+.02,e.add(r),this.animated.push((d,u)=>{i.uniforms.time.value=u,r.scale.setScalar(1+Math.sin(u*1.4)*.02)});const o=70,l=new Float32Array(o*3);for(let d=0;d<o;d++)l[d*3]=2+(Math.random()-.5)*5,l[d*3+1]=6.7+Math.random()*4,l[d*3+2]=-3+(Math.random()-.5)*4;const c=new xt;c.setAttribute("position",new kt(l,3));const h=new Cs(c,new jn({color:14286841,size:1.5,map:ts("rgba(255,255,255,1)","rgba(255,255,255,0)",64),transparent:!0,opacity:.32,depthWrite:!1,blending:zt}));e.add(h),this.animated.push((d,u)=>{h.rotation.y=u*.06}),this.root.add(e),this.colliders.push({x:ui.x+2,z:ui.z-2,r:4.5})}buildShrines(){this.shrines.mountain=this.makeShrine("mountain",Va,"#f4c95d"),this.shrines.reef=this.makeShrine("reef",Wa,"#9f7bff"),this.shrines.canopy=this.makeShrine("canopy",Xa,"#8ff0ce")}makeShrine(e,t,i){const n=new Be;n.position.set(t.x,t.y,t.z);const a=new Ue({color:e==="reef"?7040872:7828070,roughness:.95,flatShading:!0}),r=new Ue({color:4868931,roughness:.98,flatShading:!0}),o=new Se(i),l=new pt({color:o,toneMapped:!1}),c=new Ue({color:o,emissive:i,emissiveIntensity:2.2,roughness:.2});Ne(n,new it(4.2,4.8,.42,12),a,[0,.2,0]),Ne(n,new it(3.35,3.5,.16,12),r,[0,.48,0]);const h=new ce(new pi(3.55,.045,4,64),l);h.rotation.x=-Math.PI/2,h.position.y=.5,n.add(h);const d=new ce(new pi(2.1,.03,4,48),new pt({color:o,toneMapped:!1,transparent:!0,opacity:.5}));d.rotation.x=-Math.PI/2,d.position.y=.51,n.add(d);for(let g=0;g<8;g++){const m=g/8*Le+.2,v=7.2,w=2.1+g%3*.7;Ne(n,new es(1,0),g%2?a:r,[Math.cos(m)*v,w*.58,Math.sin(m)*v],[0,-m,0],[.55,w*.75,.5]),Ne(n,new Ze(.12,.4,.03),l,[Math.cos(m)*(v-.4),w*.7,Math.sin(m)*(v-.4)],[0,-m,0])}const u=[];if(e==="mountain"){for(let m=0;m<7;m++){const v=-.8+m*.27;Ne(n,new Ze(.7,1.4,.6),m%2?a:r,[Math.cos(v)*4.4,2.2+Math.sin(v)*.6,Math.sin(v)*4.4],[0,-v,.2])}const g=Ne(n,new dn(.7,0),c,[0,2.2,0]);u.push(g)}else if(e==="reef"){for(const m of[-1,1]){const v=new ce(new pi(3,.18,5,12,Math.PI),new Ue({color:5982778,roughness:.95}));v.position.set(0,1.2,0),v.rotation.z=m>0?0:Math.PI,v.rotation.y=Math.PI/2,n.add(v)}for(let m=0;m<7;m++)Ne(n,new ki(.18,.9+m%4*.35,5),new Ue({color:m%2?16739210:13083903,roughness:.7,emissive:m%2?6954546:3088222,emissiveIntensity:.3}),[Math.cos(m)*2.2,.8,Math.sin(m)*2.2],[.2,m,.2]);const g=Ne(n,new dn(.65,0),c,[0,2.1,0]);u.push(g)}else{for(let g=0;g<4;g++){const m=g/4*Le;Ne(n,new it(.18,.35,4.2,6),new Ue({color:4863268,roughness:1}),[Math.cos(m)*2.8,2.2,Math.sin(m)*2.8],[Math.sin(m)*.4,0,-Math.cos(m)*.4])}for(let g=0;g<5;g++){const m=g/5*Le,v=Ne(n,new Lt(.18,8,6),c,[Math.cos(m)*3.1,3+g%2*.5,Math.sin(m)*3.1]);u.push(v)}}for(let g=0;g<4;g++){const m=g/4*Le,v=Ne(n,new dn(.16,0),c,[Math.cos(m)*3.9,1.2,Math.sin(m)*3.9]);u.push(v)}const f=mi(i,14,.16);f.position.y=1.6,n.add(f);const p=new ce(new it(.18,.45,60,8,1,!0),new pt({color:o,transparent:!0,opacity:.08,blending:zt,depthWrite:!1,side:ft}));p.position.y=30,n.add(p);const x=[];for(let g=0;g<2;g++){const m=g*Math.PI+.4,v=new ce(new it(.32,.24,.55,7),r);v.position.set(Math.cos(m)*5.2,.7,Math.sin(m)*5.2),n.add(v);const w=mi(16753479,1.4,.8);w.position.set(v.position.x,1.3,v.position.z),n.add(w),x.push(w)}return this.colliders.push({x:t.x,z:t.z,r:3}),this.animated.push((g,m)=>{u.forEach((v,w)=>{v.rotation.y=m*(.5+w*.1),v.position.y+=Math.sin(m*1.2+w)*.002}),f.material.opacity=.12+Math.sin(m*2)*.04,p.material.opacity=.055+Math.sin(m*1.4)*.02,x.forEach((v,w)=>{v.scale.setScalar(1.15+Math.sin(m*9+w)*.2)}),h.material.opacity=1}),this.root.add(n),{group:n,crystals:u,beam:p,color:i,colorObj:o,aura:f,runeRing:h}}buildSilkTree(){const e=new Be;e.position.set(Bt.x,Bt.y,Bt.z);const t=new Ue({color:6244915,roughness:1,flatShading:!0}),i=new Ue({color:4535589,roughness:1,flatShading:!0}),n=new Ue({color:2912325,roughness:.92,flatShading:!0}),a=new Ue({color:1857591,roughness:.92,flatShading:!0}),r=new Ue({color:4164176,roughness:.92,flatShading:!0});for(let d=0;d<9;d++){const u=d/9*Le,f=new ce(new it(.5,1.4,9,6),d%2?t:i);f.position.set(Math.cos(u)*4.8,2.6,Math.sin(u)*4.8),f.rotation.set(Math.sin(u)*.65,0,-Math.cos(u)*.65),f.castShadow=!0,f.receiveShadow=!0,e.add(f)}Ne(e,new it(3.4,5.3,22,12),t,[0,11,0]),Ne(e,new it(2.1,3.5,8,10),i,[0,25,0]);const o=[];for(let d=0;d<15;d++){const u=d/15*Le,f=d===0?0:7+d%4*2.4,p=29+d%5*1.8+(d===0?2:0),x=new ce(new fi(1,1),d%3===0?a:d%3===1?n:r);x.position.set(Math.cos(u)*f,p,Math.sin(u)*f),x.scale.set(5.4+d%3*1.1,2.7+d%2*.8,5+d%4*1),x.castShadow=!0,e.add(x),o.push(x)}const l=[];for(let d=0;d<11;d++){const u=d/11*Le,f=5.5+d%4*2.2,p=27-d%3*2,x=4+d%5*1.8,g=new ce(new it(.045,.06,x,4),new Ue({color:3955766,roughness:1}));g.position.set(Math.cos(u)*f,p-x/2,Math.sin(u)*f),e.add(g);const m=new ce(new Lt(.25,8,6),new Ue({color:16765286,emissive:16754483,emissiveIntensity:2.4,roughness:.2}));m.position.set(Math.cos(u)*f,p-x,Math.sin(u)*f),e.add(m),l.push(m)}const c=new pt({color:16042333,toneMapped:!1});for(let d=0;d<3;d++){const u=new ce(new pi(8-d*1.4,.04,4,64),new pt({color:d===1?9433294:16042333,transparent:!0,opacity:.55-d*.1,toneMapped:!1}));u.rotation.x=-Math.PI/2,u.position.y=.12+d*.01,e.add(u)}for(let d=0;d<16;d++){const u=d/16*Le,f=new ce(new Ze(.5,.04,.14),c);f.position.set(Math.cos(u)*7.6,.14,Math.sin(u)*7.6),f.rotation.y=-u,e.add(f)}const h=mi(16042333,30,.17);h.position.y=4,e.add(h),this.colliders.push({x:Bt.x,z:Bt.z,r:6.4}),this.animated.push((d,u)=>{o.forEach((f,p)=>{f.position.y+=Math.sin(u*.45+p)*.0015}),l.forEach((f,p)=>{f.scale.setScalar(1+Math.sin(u*2.5+p)*.08)}),h.material.opacity=.13+Math.sin(u*1.1)*.04}),this.root.add(e),this.silkTree=e}buildNPCs(){for(const e of Ni){const t=new Be,i=we(e.x,e.z);t.position.set(e.x,i,e.z),t.rotation.y=e.id==="nya"?2.7:-.5;const n=new Ue({color:e.id==="nya"?7226155:5912356,roughness:.8,flatShading:!0}),a=new Ue({color:e.id==="nya"?3107676:4885160,roughness:.85,flatShading:!0}),r=e.id==="nya"?16042333:14245711;if(Ne(t,new it(.42,.65,1.5,7),a,[0,1,0]),Ne(t,new Lt(.28,10,8),a,[0,1.8,0],[0,0,0],[1.1,1.2,.9]),Ne(t,new it(.13,.15,.22,7),n,[0,2.03,0]),Ne(t,new Lt(.23,10,8),n,[0,2.22,0]),Ne(t,new Lt(.23,8,6),new Ue({color:e.id==="nya"?2759442:1512208,roughness:1}),[0,2.32,.03],[0,0,0],[1.05,.7,1.05]),e.id==="nya"){Ne(t,new pi(.25,.09,5,14),new Ue({color:14245711,roughness:.85}),[0,2.38,0],[Math.PI/2,0,0]),Ne(t,new ki(.2,.45,6),new Ue({color:14245711,roughness:.85}),[.2,2.45,.02],[0,0,-.5]);for(let h=0;h<3;h++)Ne(t,new pi(.32+h*.03,.025,4,12),new Ue({color:r,metalness:.4,roughness:.4}),[0,1.85-h*.12,0],[Math.PI/2,0,0])}else Ne(t,new it(.24,.26,.12,8),new Ue({color:3099486,roughness:.9}),[0,2.42,0]),Ne(t,new Ze(.55,.55,.12),new Ue({color:15326658,roughness:.9}),[0,1.9,-.28]),Ne(t,new Ze(.6,.4,.4),new Ue({color:4885160,roughness:.9}),[0,1.1,.05]);for(const h of[-1,1])Ne(t,new it(.07,.06,.75,5),n,[h*.43,1.4,0],[0,0,h*.14]);const o=new ce(new dn(.18,0),new pt({color:16042333,toneMapped:!1}));o.position.y=3.05,t.add(o);const l=mi(16042333,1.1,.45);l.position.y=3.05,t.add(l),this.animated.push((h,d)=>{o.rotation.y=d*1.6,o.position.y=3.05+Math.sin(d*1.6)*.12,l.position.y=o.position.y}),this.root.add(t);const c={...e,group:t,marker:o,halo:l};this.npcModels.push(c),this.colliders.push({x:e.x,z:e.z,r:.9})}}buildPickups(){const e=[{type:"mango",x:20,z:52},{type:"mango",x:-18,z:4},{type:"mango",x:54,z:33},{type:"mango",x:3,z:-30},{type:"mango",x:-38,z:-4},{type:"mango",x:36,z:21},{type:"bloom",x:7,z:68},{type:"bloom",x:-24,z:-13},{type:"bloom",x:58,z:17},{type:"bloom",x:12,z:-44},{type:"orbs",x:30,z:42},{type:"orbs",x:-40,z:-22},{type:"orbs",x:62,z:12}];for(const t of e){const i=we(t.x,t.z),n=new Be;n.position.set(t.x,i,t.z);const a=t.type==="mango"?new Ue({color:16747578,emissive:7154181,emissiveIntensity:.45,roughness:.55}):t.type==="bloom"?new Ue({color:7986431,emissive:2002870,emissiveIntensity:1.4,roughness:.2}):new Ue({color:3659429,emissive:2002800,emissiveIntensity:1.4,roughness:.2});let r;if(t.type==="mango"){r=new ce(new Lt(.24,10,8),a),r.scale.set(.85,1.15,.85),r.position.y=.55;const l=new ce(new ki(.14,.32,4),lt(4886339));l.position.set(.12,.78,0),l.rotation.z=-.6,n.add(l)}else if(t.type==="bloom"){r=new ce(new dn(.25,0),a),r.position.y=.6;for(let l=0;l<5;l++){const c=l/5*Le,h=new ce(new ki(.1,.4,4),new Ue({color:13083903,emissive:4860815,emissiveIntensity:.5,roughness:.5}));h.position.set(Math.cos(c)*.22,.6,Math.sin(c)*.22),h.rotation.set(Math.PI/2,0,c),n.add(h)}}else{r=new ce(new Lt(.22,12,9),a),r.position.y=.5;const l=new ce(new pi(.34,.03,4,16),new pt({color:9433294,toneMapped:!1}));l.rotation.x=Math.PI/2,l.position.y=.5,n.add(l)}r.castShadow=!0,n.add(r);const o=mi(t.type==="mango"?16753479:t.type==="bloom"?7986431:3659429,1.7,.4);o.position.y=.6,n.add(o),n.userData.baseY=i,this.animated.push((l,c)=>{r.rotation.y=c*1.2,r.position.y=.55+Math.sin(c*2+t.x)*.1,o.position.y=r.position.y}),this.root.add(n),this.pickups.push({...t,group:n,active:!0,y:i})}}buildParticles(){const e=this.quality==="low"?220:520,t=new Float32Array(e*3),i=new Float32Array(e),n=this.rng;for(let p=0;p<e;p++){const x=n()*Le,g=10+n()*110,m=Math.cos(x)*g,v=Math.sin(x)*g;t[p*3]=m,t[p*3+1]=we(m,v)+.8+n()*8,t[p*3+2]=v,i[p]=n()*Le}const a=new xt;a.setAttribute("position",new kt(t,3));const r=new jn({color:16773311,size:.13,map:ts("rgba(255,255,255,1)","rgba(255,255,255,0)",32),transparent:!0,opacity:.55,depthWrite:!1,blending:zt,sizeAttenuation:!0}),o=new Cs(a,r);this.root.add(o),this.animated.push((p,x)=>{const g=a.attributes.position.array;for(let m=0;m<e;m++)g[m*3+1]+=Math.sin(x*.7+i[m])*p*.18,g[m*3]+=Math.cos(x*.4+i[m])*p*.09;a.attributes.position.needsUpdate=!0});const l=this.quality==="low"?60:150,c=new Float32Array(l*3),h=new Float32Array(l);for(let p=0;p<l;p++){const x=n()*Le,g=n()*33,m=2+Math.cos(x)*g,v=-46+Math.sin(x)*g;c[p*3]=m,c[p*3+1]=we(m,v)+.8+n()*4.5,c[p*3+2]=v,h[p]=n()*Le}const d=new xt;d.setAttribute("position",new kt(c,3));const u=new jn({color:12582817,size:.28,map:ts("rgba(255,255,255,1)","rgba(255,255,255,0)",32),transparent:!0,opacity:.85,depthWrite:!1,blending:zt}),f=new Cs(d,u);this.root.add(f),this.animated.push((p,x)=>{const g=d.attributes.position.array;for(let m=0;m<l;m++)g[m*3+1]+=Math.sin(x*1.6+h[m])*p*.28,g[m*3]+=Math.cos(x*1.1+h[m])*p*.12;d.attributes.position.needsUpdate=!0,u.opacity=.6+Math.sin(x*2.2)*.18})}buildWaypoints(){const e=[["nya",Ni[0].x,Ni[0].z,16042333],["mountain",Kt.mountain.x,Kt.mountain.z,16042333],["reef",Kt.reef.x,Kt.reef.z,13083903],["canopy",Kt.canopy.x,Kt.canopy.z,9433294],["tree",Kt.tree.x,Kt.tree.z,16042333],["fitz",Ni[1].x,Ni[1].z,3659429]];for(const[t,i,n,a]of e){const r=we(i,n),o=sx(a);o.position.set(i,r,n),o.visible=!1,this.root.add(o),this.waypoints[t]=o}}showWaypoint(e,t=!0){for(const i in this.waypoints)this.waypoints[i].visible=!1;e&&this.waypoints[e]&&(this.waypoints[e].visible=t)}nearPath(e,t,i=0){for(const n of this.pathSample)if(Math.abs(n[0]-e)<8+i&&Math.abs(n[2]-t)<8+i&&Math.hypot(n[0]-e,n[2]-t)<2.2+i)return!0;return!1}nearStructure(e,t,i=0){const n=[[Ds.x,Ds.z,14],[ui.x,ui.z,7],[Bt.x,Bt.z,9],[Va.x,Va.z,10],[Wa.x,Wa.z,9],[Xa.x,Xa.z,9]];for(const[a,r,o]of n)if(Math.hypot(e-a,t-r)<o+i)return!0;return!1}isBlocked(e,t,i=.4){for(const n of this.colliders)if(Math.hypot(e-n.x,t-n.z)<n.r+i)return!0;return!1}update(e,t){this.time=t,this.sky&&(this.sky.material.uniforms.time.value=t);for(const i of this.animated)i(e,t);if(this.sunLight){const i=new R(0,0,0);this.sunLight.target.position.copy(i)}}}class ux{constructor(e){this.game=e,this.scene=e.scene,this.camera=e.camera,this.root=$g(),this.scene.add(this.root),this.position=this.root.position,this.position.set(9,0,84),this.position.y=we(9,84),this.velocityY=0,this.grounded=!0,this.yaw=.2,this.pitch=-.05,this.bodyYaw=.2,this.aiming=!1,this.fireCooldown=0,this.fireBloom=0,this.aether=di.aether,this.maxAether=di.aether,this.level=1,this.xp=0,this.xpNext=100,this.maxHp=di.hp,this.hp=di.hp,this.shield=0,this.shieldMax=0,this.baseSpeed=di.speed,this.damage=di.damage,this.critChance=.09,this.orbs=4,this.maxOrbs=6,this.orbRecharge=0,this.orbsUsed=0,this.dashCooldown=0,this.dashTime=0,this.invuln=0,this.lastDamage=-99,this.lastFire=-99,this.moving=0,this.speedNow=0,this.dead=!1,this.deathTime=0,this.party=[],this.activeIndex=-1,this.companion=null,this.companionCooldown=0,this.companionCooldownMax=10,this.companionAttack=0,this.captureBonus=0,this.passives={},this.cameraShake=0,this.cameraDistance=5.1,this.recoil=0,this.lastStep=0,this.respawnPoint=new R(26,0,40),this.respawnPoint.y=we(26,40),this.trailTimer=0,this.lastOrbWarning=-10,this._tmp=new R,this._ray=new Au,this._screenCenter=new Ce(0,0),this.loadoutDirty=!0}get activeBond(){return this.party[this.activeIndex]??null}get shotType(){return this.activeBond?.def.type??"aether"}get shotColor(){return this.activeBond?.def.colors.glow??6488024}setStart(e,t,i=.2){this.position.set(e,we(e,t),t),this.yaw=i,this.bodyYaw=i,this.pitch=-.08,this.updateCamera(0,!0)}addBond(e){this.party.length>=Ug?this.game.hud.toast("party full","Your bonds are full. Visit the codex to study the new spirit.","coral"):(this.party.push(e),this.activeIndex<0&&this.selectBond(this.party.length-1)),this.loadoutDirty=!0,this.game.hud.syncParty(),this.game.hud.syncCodex()}selectBond(e){return e<0||e>=this.party.length?!1:(e===this.activeIndex||(this.activeIndex=e,this.applyBond(),this.game.hud.syncParty(),this.game.hud.syncCompanion(),this.game.audio.sfx("ui")),!0)}cycleBond(e=1){if(!this.party.length)return;const t=(this.activeIndex+e+this.party.length)%this.party.length;this.selectBond(t),this.game.hud.toast("bond changed",`${this.party[t].name} answers your call.`,"jade")}applyBond(){const e=this.activeBond,t=this.shieldMax;if(this.passives={},this.shieldMax=0,this.captureBonus=0,this.fireBonus=0,this.critChance=.09,this.baseSpeed=di.speed,!e){this.shield=0,this.companionCooldownMax=10,this.spawnCompanion();return}const i=e.def;({anansi:()=>{this.captureBonus=.1},calf:()=>{this.fireBonus=.08},mami:()=>{this.passives.regen=1.2},quetzal:()=>{this.baseSpeed*=1.12},nian:()=>{this.shieldMax=25},bakunawa:()=>{this.critChance+=.08},kitsune:()=>{this.passives.aetherRegen=1.35},raven:()=>{this.passives.orbDrop=1.3}})[i.id]?.(),this.shieldMax>0?this.shield=Math.max(this.shield,this.shieldMax):t>0&&(this.shield=Math.min(this.shield,0)),this.companionCooldownMax=i.ability.cooldown,this.companionCooldown=Math.min(this.companionCooldown,this.companionCooldownMax),this.spawnCompanion(),this.loadoutDirty=!0}spawnCompanion(){this.companion&&(this.scene.remove(this.companion.model),this.companion.model.traverse(n=>{n.isMesh&&n.material?.dispose?.(),n.isSprite&&n.material?.dispose?.()}),this.companion=null);const e=this.activeBond;if(!e)return;const t=ir(e.def,{scale:(e.def.stats.scale??1)*.72});t.traverse(n=>{n.isMesh&&(n.castShadow=!0)}),t.userData.bar&&t.remove(t.userData.bar),this.scene.add(t);const i=this.position.clone().add(new R(-1.8,.8,1.8));t.position.copy(i),this.companion={model:t,def:e.def,bond:e,follow:i.clone(),attackTimer:.8+Math.random(),bob:Math.random()*Le,facing:0}}update(e,t,i,n){if(this.dead){this.deathTime+=e,this.root.visible=this.deathTime<1,this.updateCamera(e);return}const[a,r]=i.consumeLook();this.yaw-=a*.0022,this.pitch-=r*.0019,this.pitch=ct(this.pitch,-.52,.62),this.yaw=((this.yaw+Math.PI)%Le+Le)%Le-Math.PI;const o=i.consumeSlot();o>=0&&this.selectBond(o);const l=-Math.sin(this.yaw),c=-Math.cos(this.yaw),h=Math.cos(this.yaw),d=-Math.sin(this.yaw),u=i.moveX,f=i.moveY;let p=l*-f+h*u,x=c*-f+d*u;const g=Math.hypot(p,x);g>1&&(p/=g,x/=g);const m=Math.min(1,Math.hypot(p,x));if(this.moving=zs(this.moving,m,12,e),this.speedNow=m*this.baseSpeed,this.dashCooldown>0&&(this.dashCooldown-=e),this.invuln>0&&(this.invuln-=e),this.dashTime>0){this.dashTime-=e;const S=di.dashSpeed;this.tryMove(p*S*e,x*S*e),this.trailTimer-=e,this.trailTimer<=0&&(this.trailTimer=.045,n.spawnDashTrail(this.position.clone().add(new R(0,.9,0)),this.shotColor))}else{const S=this.baseSpeed*(this.passives.regen,1);if(m>.02){const L=1/(3.8+this.speedNow*.3);this.lastStep+=e,this.lastStep>L&&(this.lastStep=0,n.audio.sfx("step")),this.tryMove(p*S*e,x*S*e),this.bodyYaw=ks(this.bodyYaw,Math.atan2(-p,-x),1-Math.exp(-12*e))}}i.consume("jumpPressed")&&this.grounded&&(this.velocityY=di.jump,this.grounded=!1,n.audio.sfx("jump"),n.burst(this.position.clone().setY(this.position.y+.1),13625540,8,2.4)),i.consume("dashPressed")&&this.dashCooldown<=0&&m>.05&&(this.dashTime=.18,this.dashCooldown=di.dashCooldown,this.invuln=.32,n.audio.sfx("dash"),n.cameraKick(.02)),this.velocityY-=24*e,this.position.y+=this.velocityY*e;const v=we(this.position.x,this.position.z);this.position.y<=v?(!this.grounded&&this.velocityY<-5&&n.burst(this.position.clone(),13625540,7,2),this.position.y=v,this.velocityY=0,this.grounded=!0):this.grounded=!1;const w=i.consume("firePressed"),b=i.fire||w||t-this.lastFire<.9;this.aiming=b,this.aiming&&(this.bodyYaw=ks(this.bodyYaw,this.yaw,1-Math.exp(-18*e))),(i.fire||w)&&this.tryShoot(e,t,n),this.fireCooldown>0&&(this.fireCooldown-=e),this.fireBloom>0&&(this.fireBloom=Math.max(0,this.fireBloom-e*2.2)),i.consume("orbPressed")&&this.throwOrb(n);const A=di.aetherRegen*(this.passives.aetherRegen??1);this.aether=Math.min(this.maxAether,this.aether+A*e),this.orbs<3?(this.orbRecharge+=e,this.orbRecharge>12&&(this.orbRecharge=0,this.orbs++,n.hud.toast("soul orb recovered","The island provides.","jade"),n.audio.sfx("ui"))):this.orbRecharge=0,t-this.lastDamage>6&&this.hp<this.maxHp&&(this.hp=Math.min(this.maxHp,this.hp+2.2*e)),this.passives.regen&&(this.hp=Math.min(this.maxHp,this.hp+this.passives.regen*e)),this.shieldMax>0&&this.shield<this.shieldMax&&(this.shield=Math.min(this.shieldMax,this.shield+2.5*e)),this.updateCompanion(e,t,n),i.consume("pulsePressed")&&this.spiritPulse(n);const _=!this.grounded&&this.velocityY>.5;this.root.position.copy(this.position),this.root.rotation.y=this.bodyYaw,this.root.userData.animate?.(t,{moving:this.moving,speed:this.speedNow,airborne:_,aiming:this.aiming}),this.root.visible=this.invuln>0?Math.floor(t*30)%2===0:!0,this.updateCamera(e),this.updateAimUI(n,t),this.checkPickups(n),this.updateHud(n),this.shake=Math.max(0,this.cameraShake-e*2.8),this.cameraShake=this.shake,this.recoil=zs(this.recoil,0,10,e)}tryMove(e,t){let i=this.position.x+e,n=this.position.z+t;const a=this.game.world;is(i,this.position.z)&&(i=this.position.x),is(this.position.x,n)&&(n=this.position.z),a.isBlocked(i,this.position.z,.38)&&(i=this.position.x),a.isBlocked(this.position.x,n,.38)&&(n=this.position.z);const r=Math.hypot(i,n);r>122&&(i=i/r*122*.98,n=n/r*122*.98),this.position.x=i,this.position.z=n}cameraBasis(){const e=Math.cos(this.pitch),t=new R(-Math.sin(this.yaw)*e,Math.sin(this.pitch),-Math.cos(this.yaw)*e),i=new R(Math.cos(this.yaw),0,-Math.sin(this.yaw));return{forward:t,right:i}}updateCamera(e,t=!1){const{forward:i,right:n}=this.cameraBasis(),a=this._tmp.copy(this.position).add(new R(0,1.55,0));let r=this.cameraDistance;const o=this.game?.activeBoss;if(o&&!o.weakened&&o.model.visible){const p=Math.hypot(this.position.x-o.model.position.x,this.position.z-o.model.position.z);r+=ct((22-p)*.18,0,2.8)}const l=new R().copy(a).addScaledVector(i,-r).addScaledVector(n,.72).add(new R(0,.35,0)),c=10;let h=l;for(let p=3;p<=c;p++){const x=new R().lerpVectors(a,l,p/c);if(x.y<we(x.x,x.z)+.55){h=new R().lerpVectors(a,l,Math.max(.16,(p-1)/c));break}}this.camera.position.lerp(h,t?1:1-Math.exp(-11*e)),t&&this.camera.position.copy(h);const d=this.cameraShake;d>.001&&(this.camera.position.x+=(Math.random()-.5)*d,this.camera.position.y+=(Math.random()-.5)*d,this.camera.position.z+=(Math.random()-.5)*d);const u=a.clone().addScaledVector(i,26);u.y+=this.recoil*3.4,this.camera.lookAt(u);const f=62+(this.dashTime>0?6:0)+this.moving*2;this.camera.fov=zs(this.camera.fov,f,6,e),this.camera.updateProjectionMatrix()}aimPoint(e=60){const{forward:t}=this.cameraBasis(),i=this.camera.position.clone(),n=t.clone();let a=e;const r=1;for(let o=2;o<e;o+=r){const l=i.clone().addScaledVector(n,o);if(l.y<we(l.x,l.z)){a=o;break}}return i.addScaledVector(n,Math.min(a,e))}raycastAim(e,t=0){const{forward:i}=this.cameraBasis(),n=this.camera.position.clone(),a=i.clone();t&&(a.x+=(Math.random()-.5)*t,a.y+=(Math.random()-.5)*t,a.z+=(Math.random()-.5)*t,a.normalize());let r=90;for(let h=1.5;h<90;h+=.8){const d=n.clone().addScaledVector(a,h);if(d.y<we(d.x,d.z)){r=h;break}}let o=null,l=r;for(const h of e.creatures){if(!h.alive||h.dormant)continue;const u=h.model.position.clone().add(new R(0,h.height*.55,0)).clone().sub(n),f=u.dot(a);if(f<0||f>r)continue;const p=u.lengthSq()-f*f,x=h.hitRadius*1.05;if(p<=x*x){const g=Math.sqrt(Math.max(0,x*x-p)),m=f-g;m<l&&m>.5&&(l=m,o=h)}}const c=n.clone().addScaledVector(a,l);return{creature:o,point:c,dist:l,origin:n,dir:a}}tryShoot(e,t,i){if(this.fireCooldown>0)return;const n=di.aetherCost;if(this.aether<n){t-this.lastFire>.6&&i.hud.toast("aether spent","Release the trigger. The gauntlet recharges.","coral");return}this.fireCooldown=1/di.fireRate,this.aether-=n,this.lastFire=t,this.fireBloom=Math.min(1.5,this.fireBloom+.18);const a=.012+this.fireBloom*.017+this.moving*.012+(this.grounded?0:.02),r=this.raycastAim(i,a),o=new R;if(this.root.userData.muzzle.getWorldPosition(o),i.spawnTracer(o,r.point,this.shotColor,this.shotType),i.burst(r.point,this.shotColor,5,3.2,.25),i.audio.sfx("shoot"),this.cameraKick(.012+Math.random()*.006),this.recoil+=.55,i.hud.bloom(this.fireBloom),r.creature){const l=this.damage+(this.activeBond?.level??0)*.7,c=r.creature.takeDamage(l,this.shotType,{critChance:this.critChance});c.crit&&(this.recoil+=.35),i.hud.hitmark(c.crit,c.mult>1.2)}}throwOrb(e){if(this.orbs<=0){const o=e.time;o-this.lastOrbWarning>3&&(this.lastOrbWarning=o,e.hud.toast("no soul orbs","Find a cache, bond a spirit, or wait for a recharge.","coral"),e.audio.sfx("ui"));return}this.orbs--,this.orbRecharge=0,e.hud.syncOrbs();const{forward:t}=this.cameraBasis(),i=new R;this.root.userData.muzzle.getWorldPosition(i);const a=this.aimPoint(45).clone().sub(i).normalize(),r=a.clone().multiplyScalar(27).add(new R(0,2.6,0));e.spawnSoulOrb(i.clone().addScaledVector(a,.7),r),e.audio.sfx("orb"),this.recoil+=.2}spiritPulse(e){const t=this.activeBond;if(!t){e.hud.toast("no bonded spirit","Weaken a wild spirit and throw a soul orb to bond it.","coral");return}if(this.companionCooldown>0){e.hud.toast("spirit recovering",`${t.name} needs ${Math.ceil(this.companionCooldown)}s.`,"coral");return}const i=t.def;this.companionCooldown=this.companionCooldownMax;const n=this.aimPoint(30),a=this.position.clone().add(new R(0,1.2,0));if(i.ability.heal){this.heal(i.ability.heal),e.ring(a.clone().setY(this.position.y+.2),i.colors.glow,1,10,.8),e.audio.sfx("heal"),e.hud.toast("healing spring",`${i.name} mends your spirit.`,"jade");return}const r=this.companion?this.companion.model.position.clone().add(new R(0,1,0)):a;e.spawnCompanionBeam(r,n,i.colors.glow,i.type),e.ring(n.clone().setY(we(n.x,n.z)+.15),i.colors.glow,1,i.ability.radius,.75);let o=0;for(const l of e.creatures){if(!l.alive||l.dormant)continue;if(l.model.position.distanceTo(n)<=i.ability.radius+l.hitRadius){const h=(i.ability.damage+t.level*1.5)*Bh(i.type,l.type);l.takeDamage(h,i.type,{critChance:this.critChance}),i.type==="air"&&(l.stun=Math.max(l.stun,.9)),i.type==="earth"&&(l.slow=Math.max(l.slow,1.5)),i.type==="water"&&(l.slow=Math.max(l.slow,2)),o++}}e.cameraKick(.06),e.audio.sfx("levelup"),e.hud.toast(`${i.ability.name.toLowerCase()} released`,o?`${o} spirits caught in the pulse.`:"The energy dissipates.","jade")}updateCompanion(e,t,i){this.companionCooldown>0&&(this.companionCooldown=Math.max(0,this.companionCooldown-e));const n=this.companion;if(!n)return;const a=n.model,r=new R(this.position.x-Math.cos(this.bodyYaw)*1.7+Math.sin(this.bodyYaw)*.9,0,this.position.z+Math.sin(this.bodyYaw)*1.7+Math.cos(this.bodyYaw)*.9),o=we(r.x,r.z);r.y=o+.35+Math.sin(t*1.8+n.bob)*.14,a.position.distanceTo(r)>26?(a.position.copy(r),i.burst(r,n.def.colors.glow,12,4)):a.position.lerp(r,1-Math.exp(-3.8*e));const c=new R().subVectors(r,a.position);n.speed=c.length()/Math.max(e,.001);let h=null,d=24;for(const f of i.creatures){if(!f.alive||f.dormant)continue;const p=f.model.position.distanceTo(a.position);p<d&&(d=p,h=f)}let u=this.bodyYaw+Math.PI;if(h&&(u=Math.atan2(-(h.model.position.x-a.position.x),-(h.model.position.z-a.position.z))),a.rotation.y=ks(a.rotation.y,u,1-Math.exp(-6*e)),n.attackTimer-=e,h&&n.attackTimer<=0){n.attackTimer=1.75+Math.random()*.7;const f=a.position.clone().add(new R(0,.9,0)),p=7+n.bond.level*1.4;i.spawnAllyBolt(f,h,p,n.def.type,n.def.colors.glow)}a.userData.animate?.(t,{speed:Math.min(6,n.speed),attacking:n.attackTimer>1.2})}takeDamage(e,t){if(this.dead||this.invuln>0)return;let i=Math.max(1,Math.round(e));if(this.shield>0){const n=Math.min(this.shield,i);this.shield-=n,i-=n,this.game.hud.damageNumber(this.position.clone().add(new R(0,1.7,0)),n,"earth",{absorb:!0})}i>0&&(this.hp=Math.max(0,this.hp-i),this.game.hud.playerHit(i),this.game.hud.damageNumber(this.position.clone().add(new R(0,1.9,0)),i,"damage",{player:!0})),this.lastDamage=this.game.time,this.cameraShake=Math.min(.32,this.cameraShake+.12),this.game.audio.sfx("hurt"),this.hp<=0&&this.die()}heal(e,t=!1){if(this.dead)return;const i=this.hp;this.hp=Math.min(this.maxHp,this.hp+e),!t&&this.hp>i&&(this.game.hud.damageNumber(this.position.clone().add(new R(0,1.8,0)),Math.round(this.hp-i),"heal",{heal:!0}),this.game.audio.sfx("heal"))}die(){this.dead||(this.dead=!0,this.deathTime=0,this.aiming=!1,this.game.audio.sfx("death"),this.game.onPlayerDeath?.(this))}respawn(){this.dead=!1,this.deathTime=0,this.hp=this.maxHp,this.aether=this.maxAether,this.shield=this.shieldMax,this.orbs=Math.max(this.orbs,3),this.position.copy(this.respawnPoint),this.position.y=we(this.position.x,this.position.z),this.velocityY=0,this.root.visible=!0,this.yaw=0,this.invuln=2,this.updateCamera(0,!0),this.spawnCompanion(),this.game.hud.syncOrbs(),this.game.hud.syncVitals()}addXP(e){for(this.xp+=e;this.xp>=this.xpNext;)this.xp-=this.xpNext,this.level++,this.xpNext=Math.round(this.xpNext*1.32+28),this.maxHp+=12,this.hp=this.maxHp,this.maxAether+=6,this.damage+=.9,this.game.hud.toast("warden level up",`Level ${this.level} · health and aether restored.`,"jade"),this.game.audio.sfx("levelup"),this.game.ring(this.position.clone(),16042333,.8,9,.9),this.game.burst(this.position.clone().add(new R(0,1,0)),16042333,24,6);this.game.hud.syncVitals()}addOrbs(e=1){this.orbs=Math.min(this.maxOrbs,this.orbs+e),this.game.hud.syncOrbs()}checkPickups(e){for(const t of e.world.pickups)t.active&&this.position.distanceTo(new R(t.x,t.y,t.z))<1.7&&(t.active=!1,t.group.visible=!1,t.type==="mango"?(this.heal(28),e.hud.toast("mango found","+28 health. Sweet like September.","jade")):t.type==="bloom"?(this.aether=this.maxAether,this.game.audio.sfx("heal"),e.hud.toast("aether bloom","Gauntlet fully charged.","jade")):(this.addOrbs(2),e.hud.toast("soul cache","+2 soul orbs.","jade")))}updateAimUI(e,t){const i=this.raycastAim(e,0);i.creature?(e.hud.setTarget(i.creature,i.dist),e.hud.setCrosshairDanger(i.creature.state==="aggro")):(e.hud.setTarget(null),e.hud.setCrosshairDanger(!1))}updateHud(e){e.hud.updateVitals({hp:this.hp,maxHp:this.maxHp,aether:this.aether,maxAether:this.maxAether,shield:this.shield,shieldMax:this.shieldMax,xp:this.xp,xpNext:this.xpNext,level:this.level}),e.hud.updateOrbRecharge(this.orbs<3?this.orbRecharge/12:1),e.hud.updateBloom(this.fireBloom,this.moving,!this.grounded),e.hud.updateCompanion(this.companionCooldown,this.companionCooldownMax)}cameraKick(e){this.cameraShake=Math.min(.4,this.cameraShake+e)}getBondSummary(){return this.party.map((e,t)=>({...e,active:t===this.activeIndex}))}}let fx=1;class Ua{constructor(e,t={}){this.id=fx++,this.def=e,this.game=t.game,this.scene=t.scene,this.level=t.level??3,this.boss=!!t.boss,this.bossDef=t.bossDef??null,this.final=!!t.final,this.friendly=!!t.friendly,this.minion=!!t.minion,this.home=new R(t.x??0,0,t.z??0),this.home.y=we(this.home.x,this.home.z),this.baseY=this.home.y,this.fly=!!e.stats.fly,this.moveSpeed=e.stats.speed*(1+this.level*.012),this.aggressive=!t.passive;const i=t.scale??(this.boss?this.bossDef?.scale??2.4:e.stats.scale);this.model=ir(e,{boss:this.boss,scale:i}),this.model.position.copy(this.home),this.scene.add(this.model),this.scale=i,this.hitRadius=(this.model.userData.radius??1)*i*.82,this.height=(this.model.userData.height??2)*i,this.baseScale=i;const n=1+(this.level-1)*.11;this.maxHp=this.boss?this.bossDef.hp:Math.round(e.stats.hp*n),this.hp=this.maxHp,this.damage=(this.boss?14:e.stats.damage)*(1+this.level*.035),this.state=this.boss?"dormant":"idle",this.dormant=this.boss,this.stateTime=0,this.attackCooldown=.8+Math.random()*1.6,this.attackWindup=0,this.captureReady=!1,this.captureThreshold=Fg+(t.captureBonus??0),this.dead=!1,this.captured=!1,this.weakened=!1,this.hitFlash=0,this.burn=0,this.burnTick=0,this.slow=0,this.mark=0,this.stun=0,this.wander={x:this.home.x,z:this.home.z,timer:0},this.facing=Math.random()*Le,this.velocity=new R,this.speedNow=0,this.attackAnim=0,this.bossPhase=1,this.patternTimer=2.5,this.chargeTimer=0,this.leash=this.boss?30:24,this.flashMats=[],this.originalEmissive=new Map,this.model.traverse(a=>{a.isMesh&&a.material&&a.material.emissive&&(a.material=a.material.clone(),this.flashMats.push(a.material),this.originalEmissive.set(a.material,{color:a.material.emissive.clone(),intensity:a.material.emissiveIntensity}))}),this.bar=this.model.userData.bar,this.bar&&(this.model.remove(this.bar),this.scene.add(this.bar),this.bar.position.copy(this.model.position).setY(this.model.position.y+this.height+.55)),this.captureRing=new ce(new ji(this.hitRadius*1.1,this.hitRadius*1.24,32),new pt({color:16042333,transparent:!0,opacity:0,side:ft,depthWrite:!1,blending:zt})),this.captureRing.rotation.x=-Math.PI/2,this.scene.add(this.captureRing),this.aggroRange=this.boss?26:15,this.shadow=null,this.updateBar()}get alive(){return!this.dead&&!this.captured&&!this.weakened}get hpRatio(){return this.hp/this.maxHp}get type(){return this.def.type}get name(){return this.boss?this.bossDef.name:this.def.name}get levelLabel(){return`LV ${this.level}`}updateBar(){if(!this.bar)return;const e=this.bar.userData.fill;if(!e)return;const t=ct(this.hp/this.maxHp,0,1);e.scale.x=Math.max(.001,t),e.position.x=-(1-t)/2;const i=e.material;this.captureReady?i.color.setHex(16042333):this.boss?i.color.setHex(16735572):i.color.setHex(16739146),this.bar.visible=!this.dead&&!this.captured&&(this.boss||this.hp<this.maxHp||this.state==="aggro"||this.captureReady)}setDormant(e){this.dormant=e,this.state=e?"dormant":"idle"}awaken(){this.dormant=!1,this.state="aggro",this.attackCooldown=1.2,this.patternTimer=2.4,this.game.audio.sfx("boss"),this.game.hud.toast("warden awakened","The shrine stone cracks.","coral")}takeDamage(e,t="aether",i={}){if(!this.alive||this.dormant)return{damage:0,crit:!1,mult:1};const n=Bh(t,this.type);let a=e*n;this.mark>0&&(a*=1.15),this.def.stats.build==="lion"&&(a*=.9);const r=Math.random()<(i.critChance??.09);return r&&(a*=1.65),a=Math.max(1,Math.round(a)),this.captureReady?this.hp=Math.max(1,this.hp-a*.1):this.hp=Math.max(0,this.hp-a),this.hitFlash=.13,this.flash(),this.stateTime=0,(this.state==="idle"||this.state==="dormant")&&(this.state="aggro"),this.game.hud.damageNumber(this.worldPos(0,this.height*.7),a,t,{crit:r,mult:n}),this.game.audio.sfx(r?"crit":"hit"),t==="fire"&&!this.captureReady&&(this.burn=Math.max(this.burn,3.5)),t==="shadow"&&this.game.player.heal(Math.round(a*.12),!0),t==="spirit"&&(this.mark=Math.max(this.mark,5)),this.updateBar(),this.checkThreshold(),this.hp<=0&&!this.captureReady&&(this.boss?this.onBossDown():this.die()),{damage:a,crit:r,mult:n}}checkThreshold(){this.boss||this.captureReady||this.hpRatio<=this.captureThreshold&&(this.captureReady=!0,this.hp=Math.max(1,this.hp),this.state="stagger",this.attackWindup=0,this.velocity.set(0,0,0),this.stun=.9,this.game.hud.toast("soul exposed",`${this.def.name} can be bonded with a soul orb.`,"jade"),this.game.audio.sfx("quest"),this.updateBar())}onBossDown(){this.hp=0,this.weakened=!0,this.state="weakened",this.velocity.set(0,0,0),this.captureReady=!0,this.game.audio.sfx("boss"),this.game.onBossWeakened?.(this),this.bar.visible=!0,this.updateBar()}flash(){for(const e of this.flashMats)this.originalEmissive.get(e)&&(e.emissive.setHex(16735572),e.emissiveIntensity=1.6)}restoreFlash(){for(const e of this.flashMats){const t=this.originalEmissive.get(e);t&&(e.emissive.copy(t.color),e.emissiveIntensity=t.intensity)}}worldPos(e=0,t=0,i=0){return new R(this.model.position.x+e,this.model.position.y+t,this.model.position.z+i)}die(){this.dead||(this.dead=!0,this.state="dead",this.hp=0,this.bar&&(this.bar.visible=!1),this.game.burst(this.worldPos(0,this.height*.5),this.def.colors.glow,26,7),this.game.ring(this.worldPos(0,.2),this.def.colors.glow,2.2,10,.55),this.game.audio.sfx("hit"),this.deathTime=0,this.game.onCreatureDefeated?.(this))}capture(){this.captured||(this.captured=!0,this.state="captured",this.bar&&(this.bar.visible=!1),this.captureRing.material.opacity=0,this.captureTime=0,this.game.audio.sfx("capture"),this.game.burst(this.worldPos(0,this.height*.55),9433294,36,8),this.game.ring(this.worldPos(0,.3),9433294,1,7,.7))}remove(){this.scene.remove(this.model),this.bar&&this.scene.remove(this.bar),this.scene.remove(this.captureRing),this.model.traverse(e=>{e.isMesh&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose?.()):e.material?.dispose?.()),e.isSprite&&e.material?.dispose?.()}),this.captureRing.geometry.dispose(),this.captureRing.material.dispose(),this.shadow&&(this.scene.remove(this.shadow),this.shadow.geometry.dispose(),this.shadow.material.dispose())}damagePlayer(e){this.game.player.takeDamage(e,this)}update(e,t,i){if(this.captured){this.captureTime+=e;const o=ct(this.captureTime/.65,0,1);this.model.scale.setScalar(this.baseScale*(1-o)*(1+Math.sin(o*Math.PI)*.25)),this.model.rotation.y+=e*14,this.model.position.y+=e*2.4,o>=1&&(this.model.visible=!1,this.removeAfter=!0);return}if(this.dead){this.deathTime+=e;const o=ct(this.deathTime/1.1,0,1);this.model.scale.setScalar(this.baseScale*(1-o)),this.model.rotation.y+=e*3,this.model.position.y+=e*.5,o>=1&&(this.removeAfter=!0);return}if(this.hitFlash>0&&(this.hitFlash-=e,this.hitFlash<=0&&this.restoreFlash()),this.burn>0&&(this.burn-=e,this.burnTick-=e,this.burnTick<=0&&(this.burnTick=.65,this.alive&&!this.dormant))){const o=Math.round(this.maxHp*.012+2);this.hp=Math.max(this.captureReady?1:0,this.hp-o),this.game.hud.damageNumber(this.worldPos(0,this.height*.6),o,"fire",{dot:!0}),this.updateBar(),this.hp<=0&&!this.captureReady&&(this.boss?this.onBossDown():this.die()),this.checkThreshold()}if(this.slow>0&&(this.slow-=e),this.mark>0&&(this.mark-=e),this.stun>0&&(this.stun-=e),this.attackAnim>0&&(this.attackAnim-=e),this.captureReady?(this.captureRing.material.opacity=.45+Math.sin(t*3.4)*.18,this.captureRing.position.copy(this.model.position).setY(we(this.model.position.x,this.model.position.z)+.1),this.captureRing.scale.setScalar(1+Math.sin(t*2.2)*.05)):this.captureRing.material.opacity=0,this.dormant){this.animate(e,t,0,!1),this.updateBarTransform(i.camera);return}if(this.state==="stagger"||this.weakened){this.animate(e,t,0,!1),this.model.position.y=zs(this.model.position.y,this.baseY+(this.weakened?.2:0),4,e),this.updateBarTransform(i.camera);return}this.state==="idle"?this.updateIdle(e,t,i):this.state==="aggro"&&this.updateCombat(e,t,i);const n=we(this.model.position.x,this.model.position.z),a=this.fly?(this.boss?2:1.15)*this.scale:0,r=n+a+(this.fly?Math.sin(t*2.1+this.id)*.12:0);if(this.model.position.y=zs(this.model.position.y,r,this.fly?3:10,e),this.fly||(this.model.position.y=r),is(this.model.position.x,this.model.position.z)&&!this.fly){const o=new R(this.home.x-this.model.position.x,0,this.home.z-this.model.position.z);o.lengthSq()>.01&&this.model.position.addScaledVector(o.normalize(),e*2)}this.animate(e,t,this.speedNow,this.attackAnim>0),this.updateBarTransform(i.camera)}updateIdle(e,t,i){this.speedNow=0;const n=i.player.position,a=Hr(this.model.position.x,this.model.position.z,n.x,n.z);if(this.aggressive&&a<this.aggroRange&&Math.abs(n.y-this.model.position.y)<12){this.state="aggro",this.attackCooldown=.4+Math.random()*.8;return}if(this.wander.timer-=e,this.wander.timer<=0){this.wander.timer=2+Math.random()*4;const c=Math.random()*Le,h=Math.random()*(this.boss?4:7);this.wander.x=this.home.x+Math.cos(c)*h,this.wander.z=this.home.z+Math.sin(c)*h}const r=this.wander.x-this.model.position.x,o=this.wander.z-this.model.position.z,l=Math.hypot(r,o);if(l>.4){const c=this.moveSpeed*.22;this.move(r/l,o/l,c,e),this.speedNow=c}this.model.rotation.y=ks(this.model.rotation.y,this.facing,1-Math.exp(-5*e))}updateCombat(e,t,i){const n=i.player.position,a=n.x-this.model.position.x,r=n.z-this.model.position.z,o=Math.hypot(a,r);if(o>this.leash*1.7){this.state="idle",this.home.x=this.model.position.x,this.home.z=this.model.position.z,this.boss&&this.game.onBossLeash?.(this);return}this.attackCooldown-=e,this.speedNow=0;const l=this.def.stats.behavior==="ranged",c=l?this.boss?10:7.5:2.2+this.scale;let h=0;if(this.boss?this.updateBoss(e,t,i,o,a,r):o>c?h=1:o<c*.65&&(h=-.7),h!==0&&this.stun<=0){const u=this.moveSpeed*(this.slow>0?.55:1)*(h>0?1:.65);this.move(a/(o||1),r/(o||1),u*h,e),this.speedNow=Math.abs(u*h)}else this.velocity.multiplyScalar(1-Math.min(1,e*7));const d=Math.atan2(-a,-r);this.model.rotation.y=ks(this.model.rotation.y,d,1-Math.exp(-7*e)),!this.boss&&this.attackCooldown<=0&&o<(l?17:c+2.2)&&this.stun<=0&&(this.attackCooldown=l?2.1+Math.random()*1.2:1.5+Math.random()*.7,this.performAttack(i,o,a,r,t))}move(e,t,i,n){const a=this.model.position.x+e*i*n,r=this.model.position.z+t*i*n;!is(a,r)||this.fly?(this.model.position.x=a,this.model.position.z=r):is(a,this.model.position.z)?is(this.model.position.x,r)||(this.model.position.z=r):this.model.position.x=a,this.facing=Math.atan2(-e,-t)}performAttack(e,t,i,n,a){if(this.def.stats.behavior==="ranged"){this.attackAnim=.4;const o=this.worldPos(0,this.height*.55),l=e.player.aimPoint(),c=this.def.colors.glow,h=this.level>5?2:1;for(let d=0;d<h;d++){const u=l.clone().sub(o).normalize();h>1&&u.applyAxisAngle(new R(0,1,0),(d-.5)*.18),e.spawnEnemyOrb(o,u,{damage:this.damage*.7,speed:13,color:c,radius:.3*this.scale,homing:this.type==="shadow"?.4:0})}e.audio.sfx("orb")}else this.attackAnim=.55,this.attackWindup=.35,setTimeout(()=>{if(!this.alive||this.dormant)return;const o=e.player.position;Hr(this.model.position.x,this.model.position.z,o.x,o.z)<3.1*this.scale&&this.damagePlayer(this.damage),e.burst(this.worldPos(0,this.height*.4),this.def.colors.glow,10,4)},320)}updateBoss(e,t,i,n,a,r){this.patternTimer-=e;const l=this.hpRatio<.45?2:1;if(l!==this.bossPhase&&(this.bossPhase=l,this.game.hud.toast("warden enraged",`${this.bossDef.name} draws deeper on the island.`,"coral"),this.game.audio.sfx("boss")),this.patternTimer>0)return;const c=this.bossDef.id;this.patternTimer=(l===2?2.1:3.2)+Math.random()*1.1;const h=this.worldPos(0,this.height*.55),d=i.player.aimPoint();if(c==="nian-prime"){const u=Math.random();if(u<.42)this.game.hud.toast("the mountain moves","Get clear of the stone circle.","coral"),this.game.addShockwave(this.model.position.x,this.model.position.z,{maxRadius:13,speed:10,damage:this.damage*1.1,color:16042333,delay:.55}),l===2&&this.game.addShockwave(this.model.position.x,this.model.position.z,{maxRadius:18,speed:8,damage:this.damage*.9,color:16765286,delay:1.35}),this.attackAnim=1;else if(u<.75){for(let f=0;f<3;f++){const p=d.clone().sub(h).normalize();p.applyAxisAngle(new R(0,1,0),(f-1)*.2),i.spawnEnemyOrb(h,p,{damage:this.damage*.8,speed:11,color:16042333,radius:.5,gravity:2,homing:0})}i.audio.sfx("orb")}else{const f=new R(a,0,r).normalize();this.game.dashBoss(this,f,18,.45),setTimeout(()=>{if(this.alive){const p=i.player.position;Hr(this.model.position.x,this.model.position.z,p.x,p.z)<4.5*this.scale&&this.damagePlayer(this.damage*1.4)}},430)}}else if(c==="bakunawa-prime"){const u=Math.random();if(u<.45){const f=l===2?5:3;for(let p=0;p<f;p++){const x=d.clone().sub(h).normalize();x.applyAxisAngle(new R(0,1,0),(p-(f-1)/2)*.18),i.spawnEnemyOrb(h,x,{damage:this.damage*.7,speed:9.5,color:10451967,radius:.42,homing:1.6})}i.audio.sfx("orb")}else u<.78?(this.game.addBeamTelegraph(this.model.position.clone().setY(this.model.position.y+this.height*.35),d.clone(),{damage:this.damage*1.6,color:12448511,width:1.2,delay:1.1,duration:.5}),i.audio.sfx("boss")):this.game.addShockwave(this.model.position.x,this.model.position.z,{maxRadius:16,speed:9,damage:this.damage,color:7986431,delay:.3})}else if(c==="quetzal-prime"){const u=Math.random();if(u<.4){const f=l===2?9:6;for(let p=0;p<f;p++){const x=d.clone().sub(h).normalize();x.applyAxisAngle(new R(0,1,0),(p-(f-1)/2)*.13),i.spawnEnemyOrb(h,x,{damage:this.damage*.65,speed:16,color:9433294,radius:.28})}i.audio.sfx("orb")}else if(u<.72){const f=new R(a,0,r).normalize();this.game.dashBoss(this,f,26,.38,4.5),this.patternTimer=2.4}else for(let f=0;f<3;f++)this.game.addShockwave(this.model.position.x,this.model.position.z,{maxRadius:8+f*5,speed:12,damage:this.damage*.75,color:9433294,delay:f*.24+.2})}else if(c==="anansi-unbound"){const u=Math.random();if(u<.34){const f=l===2?7:4;for(let p=0;p<f;p++){const x=d.clone().sub(h).normalize();x.applyAxisAngle(new R(0,1,0),(p-(f-1)/2)*.2),i.spawnEnemyOrb(h,x,{damage:this.damage*.7,speed:12,color:8257490,radius:.46,slow:1.2})}i.audio.sfx("orb")}else if(u<.6)this.game.summonMinions(this,3),i.audio.sfx("boss");else if(u<.82)this.game.addShockwave(this.model.position.x,this.model.position.z,{maxRadius:22,speed:11,damage:this.damage*1.2,color:13083903,delay:.6,slow:1.5}),l===2&&this.game.addShockwave(this.model.position.x,this.model.position.z,{maxRadius:26,speed:8,damage:this.damage,color:16042333,delay:1.2});else{const f=Math.random()*Le,p=11;this.model.position.set(i.player.position.x+Math.cos(f)*p,this.model.position.y,i.player.position.z+Math.sin(f)*p),this.game.burst(this.worldPos(0,this.height*.5),8257490,20,6),this.game.addBeamTelegraph(this.model.position.clone().setY(this.model.position.y+this.height*.4),d.clone(),{damage:this.damage*1.2,color:8257490,width:.8,delay:.8,duration:.35})}}}animate(e,t,i,n){this.model.userData.animate?.(t,{speed:i/this.scale,attacking:n,moving:i}),this.model.userData.bossAura&&(this.model.userData.bossAura.material.opacity=.12+Math.sin(t*2.4)*.05),this.model.userData.bossLight&&(this.model.userData.bossLight.intensity=1.7+Math.sin(t*3.2)*.6)}updateBarTransform(e){if(!this.bar||this.weakened||this.dead||this.captured)return;const t=this.model.position;this.bar.position.set(t.x,t.y+this.height+.45,t.z),this.bar.quaternion.copy(e.quaternion),this.bar.scale.setScalar(ct(1.15*this.scale,1,2.6))}getScreenTarget(){return{name:this.name,hp:ct(this.hp/this.maxHp,0,1),captureReady:this.captureReady,boss:this.boss}}}const Wc=new URLSearchParams(location.search),Ii=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;class px{constructor(){this.canvas=document.getElementById("game-canvas"),this.scene=new ch,this.camera=new xi(62,window.innerWidth/window.innerHeight,.1,900),this.clock=new Eh,this.clock.connect(document),this.time=0,this.elapsed=0,this.mode="loading",this.creatures=[],this.playerOrbs=[],this.enemyOrbs=[],this.allyBolts=[],this.bursts=[],this.rings=[],this.tracers=[],this.dashTrails=[],this.shockwaves=[],this.beams=[],this.bossDashes=[],this.droppedOrbs=[],this.bosses=[],this.activeBoss=null,this.purified=new Set,this.questStage=0,this.talked=new Set,this.respawnQueue=[],this.titleCreatures=[],this.slowmo=0,this.timeScale=1,this.introTimer=null,this.started=!1,this.nearNpc=null,this.lastPrompt="",this.overlayStack=[],this.overlayReturn=null,this.fps=60,this.fpsAccum=0,this.fpsFrames=0,this.particleTex=ts("rgba(255,255,255,1)","rgba(255,255,255,0)",64),this._v=new R,this._v2=new R,this._lineDist=new Pu,this.setupRenderer(),this.audio=new Ng,this.input=new qg(this),this.hud=new Xg(this),this.onResize=()=>this.resize(),window.addEventListener("resize",this.onResize),document.addEventListener("visibilitychange",()=>{document.hidden&&this.mode==="playing"&&this.pauseGame()}),this.bindButtons(),this.init()}setupRenderer(){const e=this.canvas.getContext("webgl2",{antialias:!0,alpha:!1,powerPreference:"high-performance"}),t=e?.getExtension("WEBGL_debug_renderer_info"),i=t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):"",n=/swiftshader|llvmpipe|software/i.test(i),a=Wc.get("quality");if(this.quality=a==="low"||Ii||n?"low":"high",this.softwareRenderer=n,this.renderer=new Oh({canvas:this.canvas,antialias:!Ii,powerPreference:"high-performance",alpha:!1,stencil:!1,preserveDrawingBuffer:!1}),this.renderer.setPixelRatio(this.quality==="low"?Math.min(window.devicePixelRatio,1.35):Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=wt,this.renderer.toneMapping=Zs,this.renderer.toneMappingExposure=1.08,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Is,this.renderer.info.autoReset=!0,this.composer=null,this.quality==="high"){this.composer=new Pg(this.renderer),this.composer.addPass(new Lg(this.scene,this.camera));const r=new cs(new Ce(window.innerWidth,window.innerHeight),.38,.55,.86);this.composer.addPass(r),this.composer.addPass(new Ig),this.bloomPass=r}}resize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer?.setSize(e,t),this.hud&&(this.hud.el.minimap.style.width="100%")}async init(){const e=()=>new Promise(t=>requestAnimationFrame(()=>t()));this.hud.setLoading(.08,"Charting the island…"),await e(),this.world=new dx(this.scene,this.renderer,{quality:this.quality}),this.hud.world=this.world,this.hud.setLoading(.38,"Raising the Blue Mountains…"),await e(),this.player=new ux(this),this.hud.player=this.player,this.hud.setLoading(.58,"Weaving the old stories…"),await e(),this.spawnWorld(),this.hud.setLoading(.74,"Painting the spirits…"),await e(),this.buildPortraits(),this.hud.setLoading(.9,"Tuning the steel drums…"),await e(),this.setupTitleScene(),this.hud.setLoading(1,"The island is listening."),await e(),this.hud.hideLoading(),this.player.root.visible=!1,this.mode="title",this.input.setEnabled(!1),console.info(`[SOUL YARD] ${gx(this.renderer)} · quality=${this.quality}`),Wc.get("play")==="1"?this.startGame(!0):this.hud.toast("welcome to pimento isle","Enter the island when you are ready.","jade"),this.loop()}buildPortraits(){const e={};for(const t of Ks)try{const i=Hg(this.renderer,()=>{const n=ir(t,{scale:1});return n.userData.bar&&n.remove(n.userData.bar),n},192);e[t.id]=i}catch(i){console.warn("portrait failed",t.id,i)}this.portraits=e,this.hud.setPortraits(e)}spawnWorld(){for(const e of Ks){const t=e.spawn;for(let i=0;i<t.count;i++){let n,a,r=0;do{const c=Math.random()*Le,h=Math.sqrt(Math.random())*t.radius;n=t.x+Math.cos(c)*h,a=t.z+Math.sin(c)*h,r++}while(r<30&&(we(n,a)<1.4||this.world.isBlocked(n,a,1.4)||Math.hypot(n-9,a-84)<8));if(we(n,a)<1.2)continue;const o=Math.floor(Og(Math.random,t.levels[0],t.levels[1]+1)),l=new Ua(e,{game:this,scene:this.scene,x:n,z:a,level:o});this.creatures.push(l)}}for(const e of Bs){const t=ws[e.species],i=e.final?{x:-2,z:-53}:Kt[e.shrine],n=new Ua(t,{game:this,scene:this.scene,x:i.x,z:i.z,level:e.level,boss:!0,bossDef:e,final:e.final});n.model.visible=!e.final,this.bosses.push(n),this.creatures.push(n)}}setupTitleScene(){this.camera.position.set(23,13,106),this.camera.lookAt(2,9,62),this.camera.fov=55,this.camera.updateProjectionMatrix();const e=[{id:"kitsune",x:2,z:72,scale:1.25,rot:.4},{id:"anansi",x:-7,z:66,scale:1.55,rot:-.4},{id:"bakunawa",x:-15,z:73,scale:1.5,rot:.2}];for(const t of e){const i=ir(ws[t.id],{scale:t.scale});i.userData.bar&&i.remove(i.userData.bar),i.position.set(t.x,we(t.x,t.z)+(t.id==="bakunawa"?2:0),t.z),i.rotation.y=t.rot,this.scene.add(i),this.titleCreatures.push({model:i,def:ws[t.id],phase:Math.random()*Le})}this.hud.setPortraits(this.portraits||{})}bindButtons(){document.getElementById("enter-btn").addEventListener("click",()=>this.startGame()),document.getElementById("intro-help").addEventListener("click",()=>this.openHelpFromTitle()),document.getElementById("title-help").addEventListener("click",()=>this.openHelpFromTitle()),document.getElementById("resume-btn").addEventListener("click",()=>this.resumeGame()),document.getElementById("pause-codex").addEventListener("click",()=>this.openCodex()),document.getElementById("pause-help").addEventListener("click",()=>this.openHelp()),document.getElementById("respawn-btn").addEventListener("click",()=>this.respawn()),document.getElementById("victory-btn").addEventListener("click",()=>this.continueAfterVictory()),document.getElementById("btn-bonds").addEventListener("pointerdown",e=>e.stopPropagation()),document.getElementById("btn-pause-touch").addEventListener("click",()=>this.pauseGame())}startGame(e=!1){if(this.mode!=="playing"){this.mode="playing",this.started=!0,this.hud.hideTitle(),this.hud.showHud(),this.hud.showTouch(Ii),this.hud.hideLoading(),this.player.setStart(9,84,.16),this.player.root.visible=!0,this.player.respawnPoint.set(26,we(26,40),40),this.input.setEnabled(!0),e||(this.audio.start(),this.input.requestLock()),this.hud.el.zone.textContent="PIMENTO BEACH",this.hud.setZone("PIMENTO BEACH"),this.hud.setQuest({title:"A Call Across the Water",desc:"Find Elder Nya at the market in Nine Mile Village.",progress:0,progressText:"0 / 3 wardens",target:{x:Ni[0].x,z:Ni[0].z}}),this.hud.setObjectives([{x:Ni[0].x,z:Ni[0].z,kind:"npc",label:"Elder Nya"},{x:Ni[1].x,z:Ni[1].z,kind:"npc",label:"Fitz"}]),this.world.showWaypoint("nya"),this.hud.syncParty(),this.hud.syncVitals(),this.hud.syncOrbs(),e||(setTimeout(()=>this.hud.toast("the yard is awake","Follow the gold beacon to Nine Mile Village.","jade"),900),setTimeout(()=>this.hud.toast("combat basics","LMB fires · RMB or E throws a soul orb · Shift dashes.",""),3600));for(const t of this.titleCreatures)this.scene.remove(t.model),t.model.traverse(i=>{i.isMesh&&i.material?.dispose?.()});this.titleCreatures=[],this.titleTime=0}}loop(){requestAnimationFrame(()=>this.loop()),this.clock.update();const e=Math.min(.05,this.clock.getDelta());this.time+=e,this.fpsFrames++,this.fpsAccum+=e,this.fpsAccum>.75&&(this.fps=Math.round(this.fpsFrames/this.fpsAccum),this.fpsFrames=0,this.fpsAccum=0),this.slowmo>0?(this.slowmo-=e,this.timeScale=Wt(this.timeScale,.28,.25)):this.timeScale=Wt(this.timeScale,1,.12);const t=e*(this.mode==="playing"?this.timeScale:1);this.world?.update(e,this.time),this.mode==="title"?this.updateTitle(e):this.mode==="playing"?this.updatePlaying(t,e):this.mode==="dialogue"?this.updateDialogueInput():(this.mode==="paused"||this.mode==="title-help")&&this.updatePausedInput(),this.input.endFrame(),this.updateEffects(e),this.renderFrame(e)}updateTitle(e){this.titleTime=(this.titleTime||0)+e;const t=this.titleTime;this.camera.position.set(23+Math.sin(t*.09)*7,13+Math.sin(t*.13)*.8,106-Math.cos(t*.07)*4),this.camera.lookAt(2+Math.sin(t*.08)*2,9,62);for(const i of this.titleCreatures)i.model.userData.animate?.(this.time,{speed:.4,attacking:!1}),i.model.rotation.y+=Math.sin(t*.3+i.phase)*5e-4}updatePlaying(e,t){if(this.elapsed+=e,this.input.consume("mutePressed")){const i=this.audio.toggle();this.hud.syncSoundButton(),this.hud.toast(i?"sound on":"sound muted","","jade")}if(this.input.consume("pausePressed")){this.pauseGame();return}if(this.input.consume("codexPressed")){this.openCodex();return}this.input.consume("interactPressed")&&(this.interact()||this.player.spiritPulse(this)),this.player.update(e,this.time,this.input,this),this.updateCreatures(e,t),this.updateProjectiles(e),this.updateBossDashes(e),this.updateNPCs(),this.updateQuest(),this.updateBossTriggers(),this.activeBoss&&(this.hud.updateBoss(this.activeBoss),this.activeBoss.weakened&&this.hud.showBoss(this.activeBoss)),this.hud.updateExploration(this.player,this.world,this.player.yaw,t),this.processRespawns(),this.player.dead&&this.mode==="playing"&&this.playerDie()}updateDialogueInput(){this.input.consume("interactPressed")&&this.hud.advanceDialogue(),this.input.consume("pausePressed")&&(this.hud.closeDialogue(),this.resumeGame())}updateCreatures(e,t){for(let i=this.creatures.length-1;i>=0;i--){const n=this.creatures[i];n.update(e,this.time,this),n.removeAfter&&(n.remove(),this.creatures.splice(i,1))}this.activeBoss&&this.activeBoss.weakened&&(this.activeBoss.patternTimer=99)}updateBossTriggers(){if(!(this.activeBoss||this.mode!=="playing")){if(this.questStage>=1)for(const e of this.bosses){if(e.final||this.purified.has(e.bossDef.shrine)||!e.dormant)continue;if(Math.hypot(this.player.position.x-e.model.position.x,this.player.position.z-e.model.position.z)<13.5){this.engageBoss(e);break}}if(this.questStage>=3){const e=this.bosses.find(t=>t.final);e&&e.dormant&&e.model.visible&&Math.hypot(this.player.position.x-e.model.position.x,this.player.position.z-e.model.position.z)<16&&this.engageBoss(e)}}}engageBoss(e){!e||!e.dormant||(this.activeBoss=e,e.model.visible=!0,e.awaken(),this.hud.showBoss(e),this.hud.showBossIntro(e),this.mode="bossintro",this.input.setEnabled(!1),this.input.exitLock(),this.audio.sfx("boss"),clearTimeout(this.introTimer),this.introTimer=setTimeout(()=>{this.mode==="bossintro"&&(this.mode="playing",this.input.setEnabled(!0),Ii||this.input.requestLock())},4200))}onBossLeash(e){e===this.activeBoss&&(e.hp=e.maxHp,e.weakened=!1,e.captureReady=!1,e.dormant=!0,e.state="dormant",e.model.visible=!e.final,e.updateBar(),e.bar&&(e.bar.visible=!1),this.bossDashes=this.bossDashes.filter(t=>t.boss!==e),this.activeBoss=null,this.hud.hideBoss(),this.hud.toast("the warden withdraws","You left the shrine. Its power returns.","coral"))}onBossWeakened(e){this.slowmo=.6,this.hud.showBoss(e),this.hud.toast("warden weakened","Throw a soul orb to bind it.","coral"),this.audio.sfx("quest"),this.burst(e.worldPos(0,e.height*.5),e.def.colors.glow,40,8),this.ring(e.worldPos(0,.3),e.def.colors.glow,1,16,.8)}onFinalBossDefeated(e){this.onBossWeakened(e)}updateNPCs(){if(this.hud.dialogueOpen)return;let e=null,t=3.4;for(const i of this.world.npcModels){const n=Math.hypot(this.player.position.x-i.x,this.player.position.z-i.z);n<t&&(t=n,e=i)}if(this.nearNpc=e,e){const i=`TALK TO ${e.name}`;this.lastPrompt!==i&&(this.hud.showPrompt(i),this.lastPrompt=i)}else this.lastPrompt&&(this.lastPrompt="",this.hud.hidePrompt())}interact(){if(this.hud.dialogueOpen)return this.hud.advanceDialogue(),!0;const e=this.nearNpc;return e?(this.openDialogue(e),!0):!1}openDialogue(e){this.mode="dialogue",this.input.setEnabled(!1),this.input.exitLock(),this.hud.hidePrompt(),this.hud.openDialogue(e,e.lines,()=>this.finishDialogue(e))}finishDialogue(e){if(this.mode="playing",this.input.setEnabled(!0),Ii||this.input.requestLock(),e.id==="nya")if(this.talked.has("nya"))this.player.heal(this.player.maxHp),this.player.aether=this.player.maxAether,this.player.orbs=Math.max(this.player.orbs,3),this.hud.syncOrbs(),this.hud.syncVitals(),this.hud.toast("elder nya mends you","Health, aether and orbs restored.","jade"),this.audio.sfx("heal");else{this.talked.add("nya");const t=ws.kitsune,i=this.makeBond(t,4,"LANTERN");this.player.addBond(i),this.hud.markBonded(t.id),this.player.heal(this.player.maxHp),this.player.orbs=Math.max(this.player.orbs,6),this.hud.syncOrbs(),this.player.aether=this.player.maxAether,this.hud.syncVitals(),this.questStage=1,this.setWardenQuest(),this.audio.sfx("levelup"),this.burst(this.player.position.clone().add(new R(0,1.2,0)),13083903,26,5),this.hud.toast("bond forged","LANTERN the kitsune joins you. Press 1 to call on her.","jade")}else e.id==="fitz"&&(this.player.orbs=Math.min(this.player.maxOrbs,this.player.orbs+1),this.hud.syncOrbs(),this.hud.toast("fitz shares an orb","The reef is east. Mind the tide.","jade"))}setWardenQuest(){const e=Bs.filter(a=>!a.final&&!this.purified.has(a.shrine)),t=this.purified.size;if(e.length===0){this.questStage=3,this.hud.setQuest({title:"The Unbound Trickster",desc:"The Great Silk Cotton is open. Face Anansi beneath its branches.",progress:1,progressText:"3 / 3 wardens",target:{x:Bt.x,z:Bt.z}}),this.hud.setObjectives([{x:Bt.x,z:Bt.z,kind:"boss",label:"Anansi Unbound"}]),this.world.showWaypoint("tree"),this.unlockFinal();return}let i=e[0],n=1/0;for(const a of e){const r=Kt[a.shrine],o=Math.hypot(this.player.position.x-r.x,this.player.position.z-r.z);o<n&&(n=o,i=a)}this.questStage=t>0?2:1,this.hud.setQuest({title:"The Three Wardens",desc:"Purify the mountain, reef and canopy shrines.",progress:t/3,progressText:`${t} / 3 wardens`,target:{x:Kt[i.shrine].x,z:Kt[i.shrine].z}}),this.hud.setObjectives(e.map(a=>({x:Kt[a.shrine].x,z:Kt[a.shrine].z,kind:"boss",label:a.name}))),this.world.showWaypoint(i.shrine)}updateQuest(){this.questStage>=1&&this.questStage<=2&&Bs.filter(t=>!t.final&&!this.purified.has(t.shrine)).length===0&&this.setWardenQuest()}unlockFinal(){const e=this.bosses.find(t=>t.final);e&&(e.model.visible=!0,e.dormant=!0,e.state="dormant",e.hp=e.maxHp,e.weakened=!1,e.captureReady=!1,e.updateBar(),e.setDormant(!0),this.burst(new R(Bt.x,Bt.y+2,Bt.z),16042333,60,12),this.ring(new R(Bt.x,Bt.y+.2,Bt.z),16042333,2,24,1.4),this.hud.toast("the great tree opens","Anansi Unbound waits beneath the silk cotton.","coral"),this.audio.sfx("quest"))}captureCreature(e){if(!e||!e.captureReady)return;const t=e.boss,i=t?e.bossDef.shrine:null;e.capture(),this.slowmo=.8;const n=e.def;this.hud.showCapture({...n,name:e.boss?e.bossDef.name:n.name}),this.hud.markBonded(n.id);const a=this.makeBond(n,e.level,e.boss?e.bossDef.name:n.name);e.boss?(this.player.addXP(90),this.player.maxOrbs=Math.min(9,this.player.maxOrbs+1),this.player.addOrbs(2),this.player.heal(40)):(this.player.addXP(32+e.level*5),Math.random()<.55*(this.player.passives.orbDrop??1)&&this.player.addOrbs(1),this.player.addBond(a)),t?(this.purified.add(i),this.purifyShrine(i),this.activeBoss=null,this.hud.hideBoss(),this.hud.toast("warden purified",`${e.bossDef.name} has returned to the old story.`,"jade"),this.audio.sfx("quest"),mx(e)?this.finishVictory(e):(e.bossDef.final&&this.finishVictory(e),this.setWardenQuest()),setTimeout(()=>{e.final||(e.model.visible=!1,e.bar&&(e.bar.visible=!1))},900)):this.hud.toast("bond forged",`${n.name} joins your field journal.`,"jade")}finishVictory(e){this.mode="victory",this.input.setEnabled(!1),this.input.exitLock(),this.hud.hideBoss(),this.audio.sfx("levelup"),this.burst(e.worldPos(0,e.height*.5),16042333,70,12),this.ring(e.worldPos(0,.2),16042333,1,30,1.6),this.hud.showVictory({bonded:this.hud.bonded.size,level:this.player.level,time:this.elapsed}),this.hud.setQuest({title:"The Island Breathes",desc:"Anansi is unbound. Pimento Isle sings again.",progress:1,progressText:"3 / 3 wardens",target:null}),this.hud.setObjectives([]),this.world.showWaypoint(null)}purifyShrine(e){const t=this.world.shrines[e];if(!t)return;t.beam.material.color.setHex(16042333),t.beam.material.opacity=.2,t.aura.material.color.setHex(16042333);for(const n of t.crystals)n.material&&n.material.emissive?(n.material.emissive.setHex(16042333),n.material.color.setHex(16770977)):n.material&&n.material.color.setHex(16042333);const i=Kt[e];this.burst(new R(i.x,i.y+2,i.z),16042333,60,10),this.ring(new R(i.x,i.y+.2,i.z),16042333,1,24,1.2),this.audio.sfx("quest")}makeBond(e,t,i){return{uid:`${e.id}-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,def:e,level:t,name:i||e.name}}disposeObject(e){e&&e.traverse(t=>{t.isMesh?(t.geometry?.dispose?.(),Array.isArray(t.material)?t.material.forEach(i=>i?.dispose?.()):t.material?.dispose?.()):t.isSprite&&t.material?.dispose?.()})}spawnSoulOrb(e,t){const i=Gc(.33);i.position.copy(e),this.scene.add(i),this.playerOrbs.push({model:i,velocity:t.clone(),life:3.2,trail:0})}spawnEnemyOrb(e,t,i={}){const n=i.radius??.32,a=i.color??16739146,r=new Be,o=new ce(new Lt(n,10,8),new pt({color:a,toneMapped:!1}));r.add(o);const l=mi(a,n*6,.65);r.add(l),r.position.copy(e),this.scene.add(r),this.enemyOrbs.push({model:r,velocity:t.clone().multiplyScalar(i.speed??12),damage:i.damage??8,life:i.life??6,homing:i.homing??0,gravity:i.gravity??0,radius:n,slow:i.slow??0,color:a})}spawnAllyBolt(e,t,i,n,a){const r=mi(a,1.1,.9);r.position.copy(e),this.scene.add(r),this.allyBolts.push({model:r,target:t,damage:i,type:n,color:a,life:3,speed:28})}spawnCompanionBeam(e,t,i,n){this.beamCylinder(e,t,i,.12,.35)}spawnTracer(e,t,i,n){const a=new R().subVectors(t,e),r=a.length();if(r<.1)return;const o=new it(.022,.04,r,5,1,!0),l=new pt({color:i,transparent:!0,opacity:.95,blending:zt,depthWrite:!1,toneMapped:!1}),c=new ce(o,l);c.position.copy(e).addScaledVector(a,.5),c.quaternion.setFromUnitVectors(new R(0,1,0),a.clone().normalize()),this.scene.add(c);const h=new ce(new it(.07,.1,r,5,1,!0),new pt({color:i,transparent:!0,opacity:.22,blending:zt,depthWrite:!1,toneMapped:!1}));h.position.copy(c.position),h.quaternion.copy(c.quaternion),this.scene.add(h),this.tracers.push({mesh:c,outer:h,life:.1})}beamCylinder(e,t,i,n,a){const r=new R().subVectors(t,e),o=r.length();if(o<.1)return;const l=new it(n,n*1.4,o,8,1,!0),c=new pt({color:i,transparent:!0,opacity:.8,blending:zt,depthWrite:!1,toneMapped:!1,side:ft}),h=new ce(l,c);h.position.copy(e).addScaledVector(r,.5),h.quaternion.setFromUnitVectors(new R(0,1,0),r.clone().normalize()),this.scene.add(h),this.beams.push({mesh:h,life:a,max:a,decorative:!0})}spawnDashTrail(e,t){const i=mi(t,1.5,.55);i.position.copy(e),this.scene.add(i),this.dashTrails.push({mesh:i,life:.4,max:.4})}spawnDroppedOrb(e,t=1){const i=Gc(.26);i.position.copy(e).setY(e.y+1),this.scene.add(i),this.droppedOrbs.push({model:i,value:t,life:22,phase:Math.random()*Le,vy:2.4,landed:!1})}burst(e,t,i=16,n=6,a=.7){const r=new Float32Array(i*3),o=[];for(let d=0;d<i;d++){const u=new R(Math.random()-.5,Math.random()-.35,Math.random()-.5).normalize();o.push(u.multiplyScalar(n*(.35+Math.random()*.85)))}const l=new xt;l.setAttribute("position",new kt(r,3));const c=new jn({color:t,size:.22,map:this.particleTex,transparent:!0,opacity:.95,depthWrite:!1,blending:zt,sizeAttenuation:!0}),h=new Cs(l,c);h.position.copy(e),this.scene.add(h),this.bursts.push({points:h,geo:l,mat:c,velocities:o,life:a,max:a,gravity:6})}ring(e,t,i=1,n=8,a=.7){const r=new ji(.88,1,48),o=new pt({color:t,transparent:!0,opacity:.8,side:ft,blending:zt,depthWrite:!1,toneMapped:!1}),l=new ce(r,o);l.rotation.x=-Math.PI/2,l.position.copy(e),l.scale.setScalar(i),this.scene.add(l),this.rings.push({mesh:l,geo:r,mat:o,start:i,end:n,life:a,max:a})}addShockwave(e,t,i={}){const n=i.color??16739146,a=new ji(.92,1,64),r=new pt({color:n,transparent:!0,opacity:0,side:ft,blending:zt,depthWrite:!1,toneMapped:!1}),o=new ce(a,r);o.rotation.x=-Math.PI/2,o.position.set(e,we(e,t)+.18,t),o.scale.setScalar(.5),this.scene.add(o),this.shockwaves.push({mesh:o,geo:a,mat:r,x:e,z:t,radius:.6,maxRadius:i.maxRadius??12,speed:i.speed??9,damage:i.damage??10,delay:i.delay??.3,hit:!1,slow:i.slow??0,life:0,color:n})}addBeamTelegraph(e,t,i={}){const n=i.color??7986431,a=new it(.035,.035,1,5,1,!0),r=new pt({color:n,transparent:!0,opacity:.6,blending:zt,depthWrite:!1,toneMapped:!1}),o=new ce(a,r),l=new R().subVectors(t,e),c=l.length();o.position.copy(e).addScaledVector(l,.5),o.quaternion.setFromUnitVectors(new R(0,1,0),l.clone().normalize()),o.scale.y=c,this.scene.add(o),this.beams.push({warn:o,warnMat:r,warnGeo:a,origin:e.clone(),target:t.clone(),color:n,delay:i.delay??1.1,duration:i.duration??.5,damage:i.damage??20,width:i.width??1,phase:"warn",life:(i.delay??1.1)+(i.duration??.5)+.2,fired:!1})}dashBoss(e,t,i,n,a=6){this.bossDashes.push({boss:e,dir:t.clone(),speed:i,time:n,duration:n,hit:!1,reach:a})}summonMinions(e,t){const i=ws.anansi,n=this.creatures.filter(r=>r.minion&&r.alive).length,a=Math.min(t,3-n);for(let r=0;r<a;r++){const o=Math.random()*Le,l=e.model.position.x+Math.cos(o)*4,c=e.model.position.z+Math.sin(o)*4;if(we(l,c)<1)continue;const h=new Ua(i,{game:this,scene:this.scene,x:l,z:c,level:this.player.level+1,minion:!0,scale:.68});h.state="aggro",h.home.copy(h.model.position),this.creatures.push(h),this.burst(h.model.position.clone().add(new R(0,1,0)),8257490,16,6)}this.hud.toast("web spawn","Anansi calls his children.","coral")}updateProjectiles(e){const t=this.player;for(let i=this.playerOrbs.length-1;i>=0;i--){const n=this.playerOrbs[i];n.life-=e,n.velocity.y-=15*e,n.model.position.addScaledVector(n.velocity,e),n.model.userData.spin?.(this.time),n.model.rotation.x+=e*4,n.trail-=e,n.trail<=0&&(n.trail=.05,this.spawnDashTrail(n.model.position.clone(),9433294));let a=!1,r=!1;for(const o of this.creatures){if(!o.alive&&!o.weakened)continue;const l=o.model.position.clone().add(new R(0,o.height*.45,0));if(n.model.position.distanceTo(l)<o.hitRadius+.55){o.captureReady?(this.captureCreature(o),r=!0):(this.burst(n.model.position.clone(),9433294,12,4),this.hud.toast("soul shielded","Weaken the spirit until its soul is exposed.","coral"),this.audio.sfx("hit")),a=!0;break}}!r&&n.model.position.y<we(n.model.position.x,n.model.position.z)+.2&&(this.burst(n.model.position.clone(),3659429,10,4),a=!0),n.life<=0&&(this.burst(n.model.position.clone(),3659429,8,3),a=!0),a&&(this.scene.remove(n.model),n.model.traverse(o=>{o.isMesh&&(o.geometry?.dispose?.(),o.material?.dispose?.()),o.isSprite&&o.material?.dispose?.()}),this.playerOrbs.splice(i,1))}for(let i=this.enemyOrbs.length-1;i>=0;i--){const n=this.enemyOrbs[i];if(n.life-=e,n.homing>0){const o=t.position.clone().add(new R(0,1,0)).sub(n.model.position).normalize().multiplyScalar(n.homing*e*12);n.velocity.add(o)}n.gravity&&(n.velocity.y-=n.gravity*e),n.model.position.addScaledVector(n.velocity,e);const a=t.position.clone().add(new R(0,1,0));if(n.model.position.distanceTo(a)<.85+n.radius){t.takeDamage(n.damage,null),this.burst(n.model.position.clone(),n.color,14,4),this.scene.remove(n.model),this.disposeObject(n.model),this.enemyOrbs.splice(i,1);continue}(n.model.position.y<we(n.model.position.x,n.model.position.z)+.15||n.life<=0)&&(this.burst(n.model.position.clone(),n.color,8,3),this.scene.remove(n.model),this.disposeObject(n.model),this.enemyOrbs.splice(i,1))}for(let i=this.allyBolts.length-1;i>=0;i--){const n=this.allyBolts[i];n.life-=e;const a=n.target;if(!a||!a.alive){this.dashTrails.push({mesh:n.model,life:.25,max:.25}),this.allyBolts.splice(i,1);continue}const r=a.model.position.clone().add(new R(0,a.height*.5,0)),o=r.clone().sub(n.model.position);if(o.length()<1.2){a.takeDamage(n.damage,n.type,{critChance:this.player.critChance}),this.burst(r,n.color,10,4),this.scene.remove(n.model),this.allyBolts.splice(i,1);continue}n.model.position.addScaledVector(o.normalize(),n.speed*e),n.life<=0&&(this.scene.remove(n.model),this.allyBolts.splice(i,1))}}updateBossDashes(e){for(let t=this.bossDashes.length-1;t>=0;t--){const i=this.bossDashes[t];i.time-=e;const n=i.boss;if(!n||!n.alive){this.bossDashes.splice(t,1);continue}const a=n.model.position.x+i.dir.x*i.speed*e,r=n.model.position.z+i.dir.z*i.speed*e;this.world.isBlocked(a,r,n.hitRadius*.4)||(n.model.position.x=a,n.model.position.z=r),n.model.position.y=we(n.model.position.x,n.model.position.z)+(n.fly?n.scale*2:0),i.hit||Math.hypot(n.model.position.x-this.player.position.x,n.model.position.z-this.player.position.z)<n.hitRadius+1.1&&(i.hit=!0,this.player.takeDamage(n.damage*1.2,n),this.cameraKick(.15)),Math.random()<.5&&this.spawnDashTrail(n.model.position.clone().add(new R(0,.6,0)),n.def.colors.glow),i.time<=0&&this.bossDashes.splice(t,1)}}updateEffects(e){for(let t=this.bursts.length-1;t>=0;t--){const i=this.bursts[t];i.life-=e;const n=i.geo.attributes.position.array;for(let a=0;a<i.velocities.length;a++){const r=i.velocities[a];n[a*3]+=r.x*e,n[a*3+1]+=r.y*e,n[a*3+2]+=r.z*e,r.y-=i.gravity*e}i.geo.attributes.position.needsUpdate=!0,i.mat.opacity=ct(i.life/i.max,0,1),i.life<=0&&(this.scene.remove(i.points),i.geo.dispose(),i.mat.dispose(),this.bursts.splice(t,1))}for(let t=this.rings.length-1;t>=0;t--){const i=this.rings[t];i.life-=e;const n=1-ct(i.life/i.max,0,1);i.mesh.scale.setScalar(Wt(i.start,i.end,n)),i.mat.opacity=(1-n)*.8,i.life<=0&&(this.scene.remove(i.mesh),i.geo.dispose(),i.mat.dispose(),this.rings.splice(t,1))}for(let t=this.tracers.length-1;t>=0;t--){const i=this.tracers[t];i.life-=e,i.mesh.material.opacity=Math.max(0,i.life/.1)*.95,i.outer.material.opacity=Math.max(0,i.life/.1)*.22,i.life<=0&&(this.scene.remove(i.mesh,i.outer),i.mesh.geometry.dispose(),i.mesh.material.dispose(),i.outer.geometry.dispose(),i.outer.material.dispose(),this.tracers.splice(t,1))}for(let t=this.dashTrails.length-1;t>=0;t--){const i=this.dashTrails[t];i.life-=e,i.mesh.scale?.setScalar(1.5*(1+(1-i.life/i.max)*1.2)),i.mesh.material&&(i.mesh.material.opacity=Math.max(0,i.life/i.max)*.55),i.life<=0&&(i.mesh.parent&&this.scene.remove(i.mesh),i.mesh.material?.dispose?.(),this.dashTrails.splice(t,1))}for(let t=this.shockwaves.length-1;t>=0;t--){const i=this.shockwaves[t];if(i.delay>0){i.delay-=e,i.mat.opacity=.22+Math.sin(this.time*20)*.1,i.mesh.scale.setScalar(i.maxRadius*.7);continue}if(i.radius+=i.speed*e,i.mesh.scale.setScalar(i.radius),i.mat.opacity=ct(1-i.radius/i.maxRadius,0,1)*.7,!i.hit){const n=Math.hypot(this.player.position.x-i.x,this.player.position.z-i.z);Math.abs(n-i.radius)<1.2&&(i.hit=!0,this.player.takeDamage(i.damage,null),this.cameraKick(.12))}i.radius>=i.maxRadius&&(this.scene.remove(i.mesh),i.geo.dispose(),i.mat.dispose(),this.shockwaves.splice(t,1))}for(let t=this.beams.length-1;t>=0;t--){const i=this.beams[t];if(i.decorative){i.life-=e,i.mesh?.material&&(i.mesh.material.opacity=ct(i.life/i.max,0,1)*.8),i.life<=0&&(i.mesh&&(this.scene.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material.dispose()),this.beams.splice(t,1));continue}if(!i.warn){this.beams.splice(t,1);continue}if(i.phase==="warn"){if(i.warnMat.opacity=.35+Math.sin(this.time*22)*.2,i.delay-=e,i.delay<=0){i.phase="fire",i.warnFade=.14,this.beamCylinder(i.origin,i.target,i.color,.28*i.width,i.duration);const n=this.player.position.clone().add(new R(0,1,0));this._lineDist.set(i.origin,i.target),this._lineDist.closestPointToPoint(n,!0,new R).distanceTo(n)<1.4+i.width&&(this.player.takeDamage(i.damage,null),this.cameraKick(.2)),this.burst(i.target.clone(),i.color,16,5)}}else i.warnFade-=e,i.warnFade<=0&&(this.scene.remove(i.warn),i.warnGeo.dispose(),i.warnMat.dispose(),this.beams.splice(t,1))}for(let t=this.droppedOrbs.length-1;t>=0;t--){const i=this.droppedOrbs[t];if(i.life-=e,i.landed)i.model.position.y+=Math.sin(this.time*2.1+i.phase)*e*.2,i.model.rotation.y+=e*1.4;else{i.vy-=16*e,i.model.position.y+=i.vy*e;const a=we(i.model.position.x,i.model.position.z)+.55;i.model.position.y<=a&&(i.model.position.y=a,i.landed=!0)}const n=i.model.position.distanceTo(this.player.position.clone().add(new R(0,1,0)));if(n<7){const a=this.player.position.clone().add(new R(0,1,0)).sub(i.model.position);i.model.position.addScaledVector(a.normalize(),e*(9-n*.6))}if(n<1.2){this.player.addOrbs(i.value),this.audio.sfx("capture"),this.hud.toast("soul orb recovered","","jade"),this.scene.remove(i.model),i.model.traverse(a=>{a.isMesh&&(a.geometry?.dispose?.(),a.material?.dispose?.()),a.isSprite&&a.material?.dispose?.()}),this.droppedOrbs.splice(t,1);continue}i.life<=0&&(this.scene.remove(i.model),i.model.traverse(a=>{a.isMesh&&(a.geometry?.dispose?.(),a.material?.dispose?.()),a.isSprite&&a.material?.dispose?.()}),this.droppedOrbs.splice(t,1))}}onCreatureDefeated(e){e.boss||(this.player.addXP(e.minion?8:16+e.level*4),!e.minion&&Math.random()<.35*(this.player.passives.orbDrop??1)&&this.spawnDroppedOrb(e.model.position.clone(),1),e.minion||(this.hud.toast("spirit scattered",`${e.def.name} returned to the island.`,""),this.respawnQueue.push({def:e.def,level:e.level,x:e.home.x,z:e.home.z,at:this.time+24+Math.random()*10})))}processRespawns(){for(let e=this.respawnQueue.length-1;e>=0;e--){const t=this.respawnQueue[e];if(this.time<t.at)continue;if(this.creatures.filter(n=>n.def.id===t.def.id&&!n.dead&&!n.captured).length<3){const n=new Ua(t.def,{game:this,scene:this.scene,x:t.x+(Math.random()-.5)*6,z:t.z+(Math.random()-.5)*6,level:t.level});this.creatures.push(n)}this.respawnQueue.splice(e,1)}}playerDie(){this.mode="dead",this.input.setEnabled(!1),this.input.exitLock(),this.hud.showDeath(),this.resetBosses()}resetBosses(){for(const e of this.bosses)this.purified.has(e.bossDef.shrine)||(e.hp=e.maxHp,e.weakened=!1,e.captureReady=!1,e.dormant=!0,e.state="dormant",e.model.visible=!e.final||this.questStage>=3,e.final&&this.questStage<3&&(e.model.visible=!1),e.updateBar(),e.bar&&(e.bar.visible=!1));this.activeBoss=null,this.hud.hideBoss()}respawn(){this.player.respawn(),this.hud.hideDeath(),this.mode="playing",this.input.setEnabled(!0),Ii||this.input.requestLock()}onPlayerDeath(){}onPointerLock(e){!e&&this.mode==="playing"&&!Ii&&this.hadLock&&this.pauseGame(),e&&(this.hadLock=!0)}pauseGame(){this.mode==="playing"&&(this.mode="paused",this.input.setEnabled(!1),this.input.exitLock(),this.overlayStack=[],this.overlayStack.push("pause"),this.hud.openPause(this.player,this.purified.size))}resumeGame(){const e=this.overlayStack[this.overlayStack.length-1];e&&this.hud.closeOverlay(e,!0),this.overlayStack=[],this.mode="playing",this.input.setEnabled(!0),this.hud.hidePrompt(),this.lastPrompt="",Ii||this.input.requestLock()}openOverlayStack(e){const t=this.overlayStack[this.overlayStack.length-1];t&&this.hud.closeOverlay(t,!0),this.overlayStack.push(e),this.mode="paused",this.input.setEnabled(!1),this.input.exitLock(),e==="codex"?this.hud.openCodex():e==="howto"?this.hud.openHowTo():e==="pause"&&this.hud.openPause(this.player,this.purified.size)}closeOverlayStack(e){const t=this.overlayStack.lastIndexOf(e);t>=0&&this.overlayStack.splice(t,1),this.hud.closeOverlay(e,!0);const i=this.overlayStack[this.overlayStack.length-1];i?(this.hud.openOverlay(i),i==="pause"&&this.hud.openPause(this.player,this.purified.size)):(this.mode="playing",this.input.setEnabled(!0),Ii||this.input.requestLock())}openCodex(){this.mode==="title"||this.mode==="victory"||this.mode==="dead"||this.overlayStack.includes("codex")||this.openOverlayStack("codex")}openHelp(){this.overlayStack.includes("howto")||this.openOverlayStack("howto")}openHelpFromTitle(){this.overlayReturn="title",this.hud.openHowTo(),this.mode="title-help",this.input.setEnabled(!1)}onOverlayClose(e){if(this.mode==="title-help"){this.mode="title";return}this.mode==="paused"&&this.closeOverlayStack(e)}onSelectBond(e){(this.mode==="playing"||this.mode==="paused")&&this.player.selectBond(e)}onSelectBondById(e){const t=this.player.party.findIndex(i=>i.def.id===e);if(!(t<0)&&(this.player.selectBond(t),this.mode==="paused")){const i=this.overlayStack[this.overlayStack.length-1];i&&this.closeOverlayStack(i)}}updatePausedInput(){if(!this.input.consume("pausePressed")&&!this.input.consume("codexPressed"))return;if(this.mode==="title-help"){this.hud.closeOverlay("howto",!0),this.mode="title";return}const e=this.overlayStack[this.overlayStack.length-1];e?this.closeOverlayStack(e):this.resumeGame()}continueAfterVictory(){this.hud.hideVictory(),this.mode="playing",this.input.setEnabled(!0),Ii||this.input.requestLock()}renderFrame(e){this.composer?this.composer.render():this.renderer.render(this.scene,this.camera)}}function mx(s){return s.boss&&s.bossDef.final}function gx(s){const e=s.getContext(),t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):"WebGL renderer"}const nt=new px;window.__soulYard={game:nt,start:()=>nt.startGame(!0),teleport:(s,e)=>{nt.player.position.set(s,we(s,e),e),nt.player.updateCamera(0,!0)},look:(s,e=0)=>{nt.player.yaw=s,nt.player.pitch=e,nt.player.updateCamera(0,!0)},boss:s=>{const e=nt.bosses.find(t=>t.bossDef.shrine===s);e&&(nt.questStage=3,e.dormant=!1,e.model.visible=!0,nt.engageBoss(e))},purify:(s=3)=>{const e=nt.bosses.filter(t=>!t.final).slice(0,s);for(const t of e)t.hp=0,t.weakened=!0,t.captureReady=!0,t.state="weakened",nt.captureCreature(t)},captureNearest:()=>{let s=null,e=1/0;for(const t of nt.creatures){if(!t.alive)continue;const i=t.model.position.distanceTo(nt.player.position);i<e&&(e=i,s=t)}s&&(s.captureReady=!0,nt.captureCreature(s))},attackNearest:(s=200)=>{let e=null,t=1/0;for(const i of nt.creatures){if(!i.alive)continue;const n=i.model.position.distanceTo(nt.player.position);n<t&&(t=n,e=i)}e&&e.takeDamage(s,nt.player.shotType,{critChance:1})},setMode:s=>{nt.mode=s,nt.input.setEnabled(s==="playing")},hideTitle:()=>{nt.hud.hideTitle(),nt.hud.showHud(),nt.hud.showTouch(Ii)},state:()=>({mode:nt.mode,time:nt.time,fps:nt.fps,position:nt.player?.position.toArray(),party:nt.player?.party.map(s=>s.def.id),creatures:nt.creatures.length,quest:nt.questStage,purified:[...nt.purified]}),hud:nt.hud,player:nt.player,world:nt.world};
