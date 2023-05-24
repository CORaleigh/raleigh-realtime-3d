"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7277],{7277:(e,t,s)=>{s.r(t),s.d(t,{toBinaryGLTF:()=>Z});var i,n=s(17452),_=s(95330),r=s(94139);!function(e){e[e.JSON=1313821514]="JSON",e[e.BIN=5130562]="BIN"}(i||(i={}));class E{constructor(e,t){if(!e)throw new Error("GLB requires a JSON gltf chunk");this._length=E.HEADER_SIZE,this._length+=E.CHUNK_HEADER_SIZE;const s=this._textToArrayBuffer(e);if(this._length+=this._alignTo(s.byteLength,4),t&&(this._length+=E.CHUNK_HEADER_SIZE,this._length+=t.byteLength,t.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const n=this._writeChunk(s,12,i.JSON,32);t&&this._writeChunk(t,n,i.BIN)}_writeHeader(){this._outView.setUint32(0,E.MAGIC,!0),this._outView.setUint32(4,E.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(e,t,s,i=0){const n=this._alignTo(e.byteLength,4);for(this._outView.setUint32(t,n,!0),this._outView.setUint32(t+=4,s,!0),this._writeArrayBuffer(this._outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)i&&this._outView.setUint8(t,i),t++;return t}_writeArrayBuffer(e,t,s,i,n){new Uint8Array(e,s,n).set(new Uint8Array(t,i,n),0)}_textToArrayBuffer(e){return(new TextEncoder).encode(e).buffer}_alignTo(e,t){return t*Math.ceil(e/t)}}E.HEADER_SIZE=12,E.CHUNK_HEADER_SIZE=8,E.MAGIC=1179937895,E.VERSION=2;var a,o,T,R,A,c,N,h,f=s(92604),u=s(30175),O=s(70586),C=s(51305),S=s(94961),l=s(17896),I=s(65617),d=s(60746),L=s(2674),M=s(66459);(h=a||(a={}))[h.External=0]="External",h[h.DataURI=1]="DataURI",h[h.GLB=2]="GLB",function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(o||(o={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(T||(T={})),function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(R||(R={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(A||(A={})),function(e){e.OPAQUE="OPAQUE",e.MASK="MASK",e.BLEND="BLEND"}(c||(c={})),function(e){e[e.NoColor=0]="NoColor",e[e.FaceColor=1]="FaceColor",e[e.VertexColor=2]="VertexColor"}(N||(N={}));var D=s(35371);class B{constructor(e,t,s,i,n){this._buffer=e,this._componentType=s,this._dataType=i,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,t.bufferViews||(t.bufferViews=[]),this.index=t.bufferViews.length,this._bufferView={buffer:e.index,byteLength:-1,target:n};const _=this._getElementSize();_>=4&&n!==T.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=_),t.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(e){const t=this._data.length;if(this._data.push(e),this._accessorIndex>=0){const s=t%this._numComponentsForDataType,i=this._accessorMin[s];this._accessorMin[s]="number"!=typeof i?e:Math.min(i,e);const n=this._accessorMax[s];this._accessorMax[s]="number"!=typeof n?e:Math.max(n,e)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){return e=this.dataSize,4*Math.ceil(e/4);var e}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(e,t){switch(this._componentType){case D.g.BYTE:return new Int8Array(e,t);case D.g.FLOAT:return new Float32Array(e,t);case D.g.SHORT:return new Int16Array(e,t);case D.g.UNSIGNED_BYTE:return new Uint8Array(e,t);case D.g.UNSIGNED_INT:return new Uint32Array(e,t);case D.g.UNSIGNED_SHORT:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this._createTypedArray(e,t).set(this._data)}writeAsync(e){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=e.then((e=>{const t=new Uint8Array(e);for(let e=0;e<t.length;++e)this._data.push(t[e]);delete this._asyncWritePromise})),this._asyncWritePromise}startAccessor(e){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=e;const t=this._numComponentsForDataType;this._accessorMin=new Array(t),this._accessorMax=new Array(t)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this._getElementSize(),t=this._numComponentsForDataType,s=(this._data.length-this._accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let e=0;e<this._accessorMin.length;++e)"number"!=typeof this._accessorMin[e]&&(this._accessorMin[e]=0),"number"!=typeof this._accessorMax[e]&&(this._accessorMax[e]=0);const i={byteOffset:e*(this._accessorIndex/t),componentType:this._componentType,count:s,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case D.g.UNSIGNED_BYTE:case D.g.UNSIGNED_SHORT:i.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,i}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise((e=>this._finalizedPromiseResolve=e))}finalize(){const e=this._bufferView;return new Promise((e=>{const t=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&t.push(this._asyncWritePromise),e((0,_.as)(t))})).then((()=>{this._isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()}))}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case D.g.BYTE:case D.g.UNSIGNED_BYTE:return 1;case D.g.SHORT:case D.g.UNSIGNED_SHORT:return 2;case D.g.UNSIGNED_INT:case D.g.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case R.SCALAR:return 1;case R.VEC2:return 2;case R.VEC3:return 3;case R.VEC4:case R.MAT2:return 4;case R.MAT3:return 9;case R.MAT4:return 16}}}class U{constructor(e){this._gltf=e,this._bufferViews=[],this._isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const t={byteLength:-1};e.buffers.push(t),this._buffer=t}addBufferView(e,t,s){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const i=new B(this,this._gltf,e,t,s);return this._bufferViews.push(i),i}getByteOffset(e){let t=0;for(const s of this._bufferViews){if(s===e)return t;t+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const t=[];for(const s of this._bufferViews){if(e&&s===e)return t;t.push(s.finalized)}return t}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this._getTotalSize(),t=new ArrayBuffer(e);let s=0;for(const e of this._bufferViews)e.writeOutToBuffer(t,s),s+=e.byteSize;return t}finalize(){if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=new Promise((e=>{e((0,_.as)(this.getViewFinalizePromises()))})).then((()=>{this._isFinalized=!0;const e=this.getArrayBuffer();this._buffer.byteLength=e.byteLength,this._buffer.uri=e})),this._gltf.extras?.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let e=0;for(const t of this._bufferViews)e+=t.byteSize;return e}}function g(e,t){if(e.components)for(const s of e.components)s.faces&&"smooth"===s.shading&&p(s,t)}function p(e,t){(0,O.Wi)(t.normal)&&(t.normal=new Float32Array(t.position.length));const s=e.faces,{position:i,normal:n}=t,_=s.length/3;for(let e=0;e<_;++e){const t=3*s[3*e+0],_=3*s[3*e+1],r=3*s[3*e+2],E=(0,l.s)(P,i[t+0],i[t+1],i[t+2]),a=(0,l.s)(G,i[_+0],i[_+1],i[_+2]),o=(0,l.s)(m,i[r+0],i[r+1],i[r+2]),T=(0,l.b)(a,a,E),R=(0,l.b)(o,o,E),A=(0,l.f)(T,T,R);n[t+0]+=A[0],n[t+1]+=A[1],n[t+2]+=A[2],n[_+0]+=A[0],n[_+1]+=A[1],n[_+2]+=A[2],n[r+0]+=A[0],n[r+1]+=A[1],n[r+2]+=A[2]}for(let e=0;e<n.length;e+=3)(0,l.s)(F,n[e],n[e+1],n[e+2]),(0,l.n)(F,F),n[e+0]=F[0],n[e+1]=F[1],n[e+2]=F[2]}const P=(0,I.c)(),G=(0,I.c)(),m=(0,I.c)(),F=(0,I.c)();s(80442);var w=s(20102);async function b(e){const t=y(e);if((0,O.Wi)(t))throw new w.Z("imageToArrayBuffer","Unsupported image type");const s=await async function(e){if(!(e instanceof HTMLImageElement))return"image/png";const t=e.src;if((0,n.HK)(t)){const e=(0,n.sJ)(t);return"image/jpeg"===e?.mediaType?e.mediaType:"image/png"}return/\.png$/i.test(t)?"image/png":/\.(jpg|jpeg)$/i.test(t)?"image/jpeg":"image/png"}(e),i=await new Promise((e=>t.toBlob(e,s)));if(!i)throw new w.Z("imageToArrayBuffer","Failed to encode image");return{data:await i.arrayBuffer(),type:s}}function y(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");return e instanceof HTMLImageElement?s.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&s.putImageData(e,0,0),t}var H=s(15317);const x=f.Z.getLogger("gltf");class V{constructor(e,t,s){this.params={},this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:t,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this._addScenes(e)}_addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras,s=t.options.bufferOutputType===a.GLB||t.options.imageOutputType===o.GLB;s&&(t.binChunkBuffer=new U(this.gltf)),e.forEachScene((e=>{this._addScene(e)})),s&&t.binChunkBuffer.finalize()}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode((e=>{t.nodes||(t.nodes=[]);const s=this._addNode(e);t.nodes.push(s)})),this.gltf.scenes.push(t)}_addNode(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;(0,l.k)(s,I.Z)||(t.translation=(0,I.a)(s));const i=e.rotation;(0,C.j)(i,S.I)||(t.rotation=(0,S.b)(i));const n=e.scale;(0,l.k)(n,I.O)||(t.scale=(0,I.a)(n)),e.mesh&&e.mesh.vertexAttributes.position?t.mesh=this._addMesh(e.mesh):e.forEachNode((e=>{t.children||(t.children=[]);const s=this._addNode(e);t.children.push(s)}));const _=this.gltf.nodes.length;return this.gltf.nodes.push(t),_}_addMesh(e){this.gltf.meshes||(this.gltf.meshes=[]);const t={primitives:[]},s=this.gltf.extras,i=s.options.bufferOutputType===a.GLB;let n;n=i?s.binChunkBuffer:new U(this.gltf),this.params.origin||(this.params.origin=function(e){if((0,O.pC)(e.transform))return e.transform.getOriginPoint(e.spatialReference);const t=e.extent.xmax-e.extent.width/2,s=e.extent.ymax-e.extent.height/2,i=e.extent.zmin;return new r.Z({x:t,y:s,z:i,spatialReference:e.extent.spatialReference})}(e));const _=this.params.ignoreLocalTransform?(0,O.yw)(e.transform,(e=>new L.Z({origin:[e.origin[0],e.origin[1],e.origin[2]],geographic:!1}))):e.transform,E=(0,M.Yq)(e.vertexAttributes,_,this.params.origin,{geographic:this.params.geographic,unit:"meters"});g(e,E),this._flipYZAxis(E);const o=n.addBufferView(D.g.FLOAT,R.VEC3,T.ARRAY_BUFFER);let A,c,N,h;E.normal&&(A=n.addBufferView(D.g.FLOAT,R.VEC3,T.ARRAY_BUFFER)),e.vertexAttributes.uv&&(c=n.addBufferView(D.g.FLOAT,R.VEC2,T.ARRAY_BUFFER)),E.tangent&&(N=n.addBufferView(D.g.FLOAT,R.VEC4,T.ARRAY_BUFFER)),e.vertexAttributes.color&&(h=n.addBufferView(D.g.UNSIGNED_BYTE,R.VEC4,T.ARRAY_BUFFER)),o.startAccessor("POSITION"),A&&A.startAccessor("NORMAL"),c&&c.startAccessor("TEXCOORD_0"),N&&N.startAccessor("TANGENT"),h&&h.startAccessor("COLOR_0");const f=E.position.length/3,{position:u,normal:C,tangent:S}=E,{color:l,uv:I}=e.vertexAttributes;for(let e=0;e<f;++e)o.push(u[3*e+0]),o.push(u[3*e+1]),o.push(u[3*e+2]),A&&(0,O.pC)(C)&&(A.push(C[3*e+0]),A.push(C[3*e+1]),A.push(C[3*e+2])),c&&(0,O.pC)(I)&&(c.push(I[2*e+0]),c.push(I[2*e+1])),N&&(0,O.pC)(S)&&(N.push(S[4*e+0]),N.push(S[4*e+1]),N.push(S[4*e+2]),N.push(S[4*e+3])),h&&(0,O.pC)(l)&&(h.push(l[4*e+0]),h.push(l[4*e+1]),h.push(l[4*e+2]),h.push(l[4*e+3]));const d=o.endAccessor(),B=this._addAccessor(o.index,d);let p,P,G,m,F;if(A){const e=A.endAccessor();p=this._addAccessor(A.index,e)}if(c){const e=c.endAccessor();P=this._addAccessor(c.index,e)}if(N){const e=N.endAccessor();G=this._addAccessor(N.index,e)}if(h){const e=h.endAccessor();m=this._addAccessor(h.index,e)}e.components&&e.components.length>0&&e.components[0].faces?(F=n.addBufferView(D.g.UNSIGNED_INT,R.SCALAR,T.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(F,e.components,t,B,p,P,G,m)):this._addMeshVertexNonIndexed(e.components,t,B,p,P,G,m),o.finalize(),A&&A.finalize(),c&&c.finalize(),N&&N.finalize(),F&&F.finalize(),h&&h.finalize(),i||n.finalize();const w=this.gltf.meshes.length;return this.gltf.meshes.push(t),w}_flipYZAxis({position:e,normal:t,tangent:s}){this._flipYZBuffer(e,3),this._flipYZBuffer(t,3),this._flipYZBuffer(s,4)}_flipYZBuffer(e,t){if(!(0,O.Wi)(e))for(let s=1,i=2;s<e.length;s+=t,i+=t){const t=e[s],n=e[i];e[s]=n,e[i]=-t}}_addMaterial(e){if(null===e)return;const t=this._materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(e.alphaMode){case"mask":s.alphaMode=c.MASK;break;case"auto":case"blend":s.alphaMode=c.BLEND}.5!==e.alphaCutoff&&(s.alphaCutoff=e.alphaCutoff),e.doubleSided&&(s.doubleSided=e.doubleSided),s.pbrMetallicRoughness={};const i=e=>e**2.1,n=e=>{const t=e.toRgba();return t[0]=i(t[0]/255),t[1]=i(t[1]/255),t[2]=i(t[2]/255),t};if((0,O.pC)(e.color)&&(s.pbrMetallicRoughness.baseColorFactor=n(e.color)),(0,O.pC)(e.colorTexture)&&(s.pbrMetallicRoughness.baseColorTexture={index:this._addTexture(e.colorTexture)}),(0,O.pC)(e.normalTexture)&&(s.normalTexture={index:this._addTexture(e.normalTexture)}),e instanceof d.Z){if((0,O.pC)(e.emissiveTexture)&&(s.emissiveTexture={index:this._addTexture(e.emissiveTexture)}),(0,O.pC)(e.emissiveColor)){const t=n(e.emissiveColor);s.emissiveFactor=[t[0],t[1],t[2]]}(0,O.pC)(e.occlusionTexture)&&(s.occlusionTexture={index:this._addTexture(e.occlusionTexture)}),(0,O.pC)(e.metallicRoughnessTexture)&&(s.pbrMetallicRoughness.metallicRoughnessTexture={index:this._addTexture(e.metallicRoughnessTexture)}),s.pbrMetallicRoughness.metallicFactor=e.metallic,s.pbrMetallicRoughness.roughnessFactor=e.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1,x.warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const _=this.gltf.materials.length;return this.gltf.materials.push(s),this._materialMap.push(e),_}_addTexture(e){const t=this.gltf.textures??[];return this.gltf.textures=t,(0,u.s1)(this._textureMap,e,(()=>{const s={sampler:this._addSampler(e),source:this._addImage(e)},i=t.length;return t.push(s),i}))}_addImage(e){const t=this._imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else{const t=e.data;s.extras=t;for(let e=0;e<this.gltf.images.length;++e)if(t===this.gltf.images[e].extras)return e;const i=this.gltf.extras;switch(i.options.imageOutputType){case o.GLB:{const e=i.binChunkBuffer.addBufferView(D.g.UNSIGNED_BYTE,R.SCALAR);if((0,H.$A)(t))(0,O.pC)(t.data)&&e.writeOutToBuffer(t.data,0);else{const i=b(t).then((({data:e,type:t})=>(s.mimeType=t,e)));e.writeAsync(i).then((()=>{e.finalize()}))}s.bufferView=e.index;break}case o.DataURI:if((0,H.$A)(t)){x.warnOnce("Image export for basis compressed textures not available.");break}s.uri=function(e){const t=y(e);return(0,O.pC)(t)?t.toDataURL():""}(t);break;default:if((0,H.$A)(t)){x.warnOnce("Image export for basis compressed textures not available.");break}i.promises.push(b(t).then((({data:e,type:t})=>{s.uri=e,s.mimeType=t})))}}const i=this.gltf.images.length;return this.gltf.images.push(s),this._imageMap.set(e,i),i}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=D.e8.REPEAT,s=D.e8.REPEAT;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=D.e8.CLAMP_TO_EDGE,s=D.e8.CLAMP_TO_EDGE;break;case"mirror":t=D.e8.MIRRORED_REPEAT,s=D.e8.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":s=D.e8.CLAMP_TO_EDGE;break;case"mirror":s=D.e8.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":t=D.e8.CLAMP_TO_EDGE;break;case"mirror":t=D.e8.MIRRORED_REPEAT}}const i={wrapS:t,wrapT:s};for(let e=0;e<this.gltf.samplers.length;++e)if(JSON.stringify(i)===JSON.stringify(this.gltf.samplers[e]))return e;const n=this.gltf.samplers.length;return this.gltf.samplers.push(i),n}_addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const i=this.gltf.accessors.length;return this.gltf.accessors.push(s),i}_addMeshVertexIndexed(e,t,s,i,n,_,r,E){for(const a of t){e.startAccessor("INDICES");for(let t=0;t<a.faces.length;++t)e.push(a.faces[t]);const t=e.endAccessor(),o={attributes:{POSITION:i},indices:this._addAccessor(e.index,t),material:this._addMaterial(a.material)};n&&"flat"!==a.shading&&(o.attributes.NORMAL=n),_&&(o.attributes.TEXCOORD_0=_),r&&"flat"!==a.shading&&(o.attributes.TANGENT=r),E&&(o.attributes.COLOR_0=E),s.primitives.push(o)}}_addMeshVertexNonIndexed(e,t,s,i,n,_,r){const E={attributes:{POSITION:s}};i&&(E.attributes.NORMAL=i),n&&(E.attributes.TEXCOORD_0=n),_&&(E.attributes.TANGENT=_),r&&(E.attributes.COLOR_0=r),e&&(E.material=this._addMaterial(e[0].material)),t.primitives.push(E)}}var Y=s(67676);class z{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){(0,Y.Od)(this._scenes,e)}forEachScene(e){this._scenes.forEach(e)}}class X{constructor(e){this.mesh=e,this.name="",this.translation=(0,I.c)(),this.rotation=(0,S.a)(),this.scale=(0,I.a)(I.O),this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}set rotationAngles(e){(0,C.k)(this.rotation,e[0],e[1],e[2])}}const v="model.glb";class k{constructor(){this.name="",this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}}class W{constructor(e,t){this._file={type:"model/gltf-binary",data:e},this.origin=t}buffer(){return Promise.resolve(this._file)}download(e){(0,n.io)(new Blob([this._file.data],{type:this._file.type}),e)}}function Z(e,t){const s=new z,i=new k;return s.addScene(i),i.addNode(new X(e)),function(e,t){return function(e,t,s){const i=new V(e,t=t||{},s);let n=i.params;n?n.origin||(n.origin=new r.Z({x:-1,y:-1,z:-1})):n={origin:new r.Z({x:-1,y:-1,z:-1})};const T=n.origin,R=i.gltf,A=R.extras?.promises??[];let c=1,N=1,h=null;return(0,_.as)(A).then((()=>{const e={origin:T};delete R.extras;const s="number"==typeof t.jsonSpacing?t.jsonSpacing:4,i=JSON.stringify(R,((s,i)=>{if("extras"!==s){if(i instanceof ArrayBuffer){if(function(e){if(e.byteLength<8)return!1;const t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}(i))switch(t.imageOutputType){case o.DataURI:case o.GLB:break;case o.External:default:{const t=`img${N}.png`;return N++,e[t]=i,t}}switch(t.bufferOutputType){case a.DataURI:return function(e){const t=[],s=new Uint8Array(e);for(let e=0;e<s.length;e++)t.push(String.fromCharCode(s[e]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}(i);case a.GLB:if(h)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(h=i);case a.External:default:{const t=`data${c}.bin`;return c++,e[t]=i,t}}}return i}}),s);return t.bufferOutputType===a.GLB||t.imageOutputType===o.GLB?e[v]=new E(i,h).buffer:e["model.gltf"]=i,e}))}(e,{bufferOutputType:a.GLB,imageOutputType:o.GLB,jsonSpacing:0},t)}(s,t).then((e=>new W(e[v],e.origin)))}},15317:(e,t,s)=>{s.d(t,{$A:()=>_,Ml:()=>E,NM:()=>n,i$:()=>r});var i=s(47026);class n{constructor(e){this.data=e,this.type="encoded-mesh-texture",this.encoding=i.Ti.KTX2_ENCODING}}function _(e){return"encoded-mesh-texture"===e?.type}async function r(e){return new Promise(((t,s)=>{const i=new Blob([e]),n=new FileReader;n.onload=()=>{const e=n.result;t(JSON.parse(e))},n.onerror=e=>{s(e)},n.readAsText(i)}))}async function E(e,t){return t===i.Ti.KTX2_ENCODING?new n(e):new Promise(((s,i)=>{const n=new Blob([e],{type:t}),_=URL.createObjectURL(n),r=new Image,E=()=>{URL.revokeObjectURL(_),"decode"in r?r.decode().then((()=>s(r)),(()=>s(r))).then(o):(s(r),o())},a=e=>{URL.revokeObjectURL(_),i(e),o()},o=()=>{r.removeEventListener("load",E),r.removeEventListener("error",a)};r.addEventListener("load",E),r.addEventListener("error",a),r.src=_}))}},47026:(e,t,s)=>{var i,n,_,r,E,a,o,T,R,A,c;s.d(t,{CE:()=>o,Gv:()=>n,JJ:()=>R,Rw:()=>r,Ti:()=>c,V_:()=>a,Vr:()=>i,hU:()=>E}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(i||(i={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(n||(n={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(_||(_={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(r||(r={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(E||(E={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(a||(a={})),function(e){e[e.STRETCH=1]="STRETCH",e[e.PAD=2]="PAD"}(o||(o={})),function(e){e[e.CHANGED=0]="CHANGED",e[e.UNCHANGED=1]="UNCHANGED"}(T||(T={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(R||(R={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(A||(A={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(c||(c={}))},35371:(e,t,s)=>{var i,n,_,r,E,a,o,T,R,A,c,N,h,f,u,O,C,S,l,I,d,L,M,D;s.d(t,{Br:()=>O,LR:()=>a,Lm:()=>d,Lu:()=>B,MX:()=>n,No:()=>h,OU:()=>L,Tg:()=>C,VI:()=>f,VY:()=>D,Wf:()=>o,_g:()=>M,cw:()=>c,db:()=>r,e8:()=>N,g:()=>T,l1:()=>S,lP:()=>u,q_:()=>U,qi:()=>I,w0:()=>E,wb:()=>R,xS:()=>A,zi:()=>_}),function(e){e[e.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",e[e.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",e[e.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(i||(i={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(n||(n={})),function(e){e[e.ZERO=0]="ZERO",e[e.ONE=1]="ONE",e[e.SRC_COLOR=768]="SRC_COLOR",e[e.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.DST_ALPHA=772]="DST_ALPHA",e[e.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",e[e.DST_COLOR=774]="DST_COLOR",e[e.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",e[e.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",e[e.CONSTANT_COLOR=32769]="CONSTANT_COLOR",e[e.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",e[e.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",e[e.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(_||(_={})),function(e){e[e.ADD=32774]="ADD",e[e.SUBTRACT=32778]="SUBTRACT",e[e.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(r||(r={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",e[e.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",e[e.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",e[e.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",e[e.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(E||(E={})),function(e){e[e.FRONT=1028]="FRONT",e[e.BACK=1029]="BACK",e[e.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(a||(a={})),function(e){e[e.CW=2304]="CW",e[e.CCW=2305]="CCW"}(o||(o={})),function(e){e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.INT=5124]="INT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.FLOAT=5126]="FLOAT"}(T||(T={})),function(e){e[e.NEVER=512]="NEVER",e[e.LESS=513]="LESS",e[e.EQUAL=514]="EQUAL",e[e.LEQUAL=515]="LEQUAL",e[e.GREATER=516]="GREATER",e[e.NOTEQUAL=517]="NOTEQUAL",e[e.GEQUAL=518]="GEQUAL",e[e.ALWAYS=519]="ALWAYS"}(R||(R={})),function(e){e[e.ZERO=0]="ZERO",e[e.KEEP=7680]="KEEP",e[e.REPLACE=7681]="REPLACE",e[e.INCR=7682]="INCR",e[e.DECR=7683]="DECR",e[e.INVERT=5386]="INVERT",e[e.INCR_WRAP=34055]="INCR_WRAP",e[e.DECR_WRAP=34056]="DECR_WRAP"}(A||(A={})),function(e){e[e.NEAREST=9728]="NEAREST",e[e.LINEAR=9729]="LINEAR",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(c||(c={})),function(e){e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.REPEAT=10497]="REPEAT",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(N||(N={})),function(e){e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_3D=32879]="TEXTURE_3D",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(h||(h={})),function(e){e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.ALPHA=6406]="ALPHA",e[e.RGB=6407]="RGB",e[e.RGBA=6408]="RGBA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.RED=6403]="RED",e[e.RG=33319]="RG",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER"}(f||(f={})),function(e){e[e.RGBA4=32854]="RGBA4",e[e.R16F=33325]="R16F",e[e.RG16F=33327]="RG16F",e[e.RGB32F=34837]="RGB32F",e[e.RGBA16F=34842]="RGBA16F",e[e.R32F=33326]="R32F",e[e.RG32F=33328]="RG32F",e[e.RGBA32F=34836]="RGBA32F",e[e.R11F_G11F_B10F=35898]="R11F_G11F_B10F",e[e.RGB8=32849]="RGB8",e[e.RGBA8=32856]="RGBA8",e[e.RGB5_A1=32855]="RGB5_A1",e[e.R8=33321]="R8",e[e.RG8=33323]="RG8",e[e.R8I=33329]="R8I",e[e.R8UI=33330]="R8UI",e[e.R16I=33331]="R16I",e[e.R16UI=33332]="R16UI",e[e.R32I=33333]="R32I",e[e.R32UI=33334]="R32UI",e[e.RG8I=33335]="RG8I",e[e.RG8UI=33336]="RG8UI",e[e.RG16I=33337]="RG16I",e[e.RG16UI=33338]="RG16UI",e[e.RG32I=33339]="RG32I",e[e.RG32UI=33340]="RG32UI",e[e.RGB16F=34843]="RGB16F",e[e.RGB9_E5=35901]="RGB9_E5",e[e.SRGB8=35905]="SRGB8",e[e.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",e[e.RGB565=36194]="RGB565",e[e.RGBA32UI=36208]="RGBA32UI",e[e.RGB32UI=36209]="RGB32UI",e[e.RGBA16UI=36214]="RGBA16UI",e[e.RGB16UI=36215]="RGB16UI",e[e.RGBA8UI=36220]="RGBA8UI",e[e.RGB8UI=36221]="RGB8UI",e[e.RGBA32I=36226]="RGBA32I",e[e.RGB32I=36227]="RGB32I",e[e.RGBA16I=36232]="RGBA16I",e[e.RGB16I=36233]="RGB16I",e[e.RGBA8I=36238]="RGBA8I",e[e.RGB8I=36239]="RGB8I",e[e.R8_SNORM=36756]="R8_SNORM",e[e.RG8_SNORM=36757]="RG8_SNORM",e[e.RGB8_SNORM=36758]="RGB8_SNORM",e[e.RGBA8_SNORM=36759]="RGBA8_SNORM",e[e.RGB10_A2=32857]="RGB10_A2",e[e.RGB10_A2UI=36975]="RGB10_A2UI"}(u||(u={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.INT=5124]="INT",e[e.HALF_FLOAT=5131]="HALF_FLOAT",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(O||(O={})),function(e){e[e.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",e[e.STENCIL_INDEX8=36168]="STENCIL_INDEX8",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",e[e.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",e[e.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",e[e.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(C||(C={})),function(e){e[e.STATIC_DRAW=35044]="STATIC_DRAW",e[e.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",e[e.STREAM_DRAW=35040]="STREAM_DRAW",e[e.STATIC_READ=35045]="STATIC_READ",e[e.DYNAMIC_READ=35049]="DYNAMIC_READ",e[e.STREAM_READ=35041]="STREAM_READ",e[e.STATIC_COPY=35046]="STATIC_COPY",e[e.DYNAMIC_COPY=35050]="DYNAMIC_COPY",e[e.STREAM_COPY=35042]="STREAM_COPY"}(S||(S={})),function(e){e[e.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",e[e.VERTEX_SHADER=35633]="VERTEX_SHADER"}(l||(l={})),function(e){e[e.FRAMEBUFFER=36160]="FRAMEBUFFER",e[e.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",e[e.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(I||(I={})),function(e){e[e.TEXTURE=0]="TEXTURE",e[e.RENDER_BUFFER=1]="RENDER_BUFFER",e[e.CUBEMAP=2]="CUBEMAP"}(d||(d={})),function(e){e[e.NONE=0]="NONE",e[e.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",e[e.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",e[e.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",e[e.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(L||(L={})),function(e){e[e.Texture=0]="Texture",e[e.BufferObject=1]="BufferObject",e[e.VertexArrayObject=2]="VertexArrayObject",e[e.Shader=3]="Shader",e[e.Program=4]="Program",e[e.FramebufferObject=5]="FramebufferObject",e[e.Renderbuffer=6]="Renderbuffer",e[e.Sync=7]="Sync",e[e.COUNT=8]="COUNT"}(M||(M={})),function(e){e[e.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",e[e.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",e[e.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",e[e.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",e[e.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",e[e.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",e[e.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",e[e.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",e[e.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",e[e.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",e[e.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",e[e.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",e[e.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",e[e.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",e[e.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",e[e.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(D||(D={}));const B=33306;var U,g,p,P,G,m,F;!function(e){e[e.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",e[e.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",e[e.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",e[e.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",e[e.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",e[e.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",e[e.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(U||(U={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_VEC2=35664]="FLOAT_VEC2",e[e.FLOAT_VEC3=35665]="FLOAT_VEC3",e[e.FLOAT_VEC4=35666]="FLOAT_VEC4",e[e.INT=5124]="INT",e[e.INT_VEC2=35667]="INT_VEC2",e[e.INT_VEC3=35668]="INT_VEC3",e[e.INT_VEC4=35669]="INT_VEC4",e[e.BOOL=35670]="BOOL",e[e.BOOL_VEC2=35671]="BOOL_VEC2",e[e.BOOL_VEC3=35672]="BOOL_VEC3",e[e.BOOL_VEC4=35673]="BOOL_VEC4",e[e.FLOAT_MAT2=35674]="FLOAT_MAT2",e[e.FLOAT_MAT3=35675]="FLOAT_MAT3",e[e.FLOAT_MAT4=35676]="FLOAT_MAT4",e[e.SAMPLER_2D=35678]="SAMPLER_2D",e[e.SAMPLER_CUBE=35680]="SAMPLER_CUBE",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",e[e.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",e[e.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",e[e.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",e[e.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",e[e.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",e[e.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",e[e.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",e[e.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",e[e.SAMPLER_3D=35679]="SAMPLER_3D",e[e.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",e[e.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",e[e.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",e[e.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",e[e.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",e[e.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",e[e.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",e[e.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",e[e.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",e[e.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",e[e.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",e[e.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(g||(g={})),function(e){e[e.OBJECT_TYPE=37138]="OBJECT_TYPE",e[e.SYNC_CONDITION=37139]="SYNC_CONDITION",e[e.SYNC_STATUS=37140]="SYNC_STATUS",e[e.SYNC_FLAGS=37141]="SYNC_FLAGS"}(p||(p={})),function(e){e[e.UNSIGNALED=37144]="UNSIGNALED",e[e.SIGNALED=37145]="SIGNALED"}(P||(P={})),function(e){e[e.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",e[e.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",e[e.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",e[e.WAIT_FAILED=37149]="WAIT_FAILED"}(G||(G={})),function(e){e[e.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(m||(m={})),function(e){e[e.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(F||(F={}))}}]);