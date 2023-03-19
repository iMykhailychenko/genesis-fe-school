import{h as U,f as T,i as $,o as O,a as H,j as e,c as S,r as i,m as K,l as L,n as V,q as W,s as be,b as c,t as ye,G,v as q,w as Y,x as Ce,p as Q,u as ke,B as A,T as N,y as Ie,d as z,z as Pe,A as Se,C as j,S as B,I as we,e as Fe,F as J,V as Le,D as Re,E as Ne,P as _e,L as Te}from"./index-b0768b19.js";import{n as Be,l as He,H as b,P as De,b as Ee,o as Ve,c as ze,d as Oe,e as qe,f as Ae,h as je,I as Me,S as I,g as _,T as X,R as Z,r as ee,j as se,C as ne,F as oe,a as te,A as re,p as Ke,q as We,B as Ue,i as $e,m as Ge}from"./courses.hooks-a82adac4.js";import{H as le}from"./chunk-B2MGPQRJ-d7ab808d.js";var[Ye,Qe]=U({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[Je,ae]=U({strict:!1,name:"FormControlContext"});function Xe(s){const{id:t,isRequired:r,isInvalid:n,isDisabled:o,isReadOnly:l,...u}=s,a=i.useId(),d=t||`field-${a}`,m=`${d}-label`,h=`${d}-feedback`,f=`${d}-helptext`,[g,v]=i.useState(!1),[p,k]=i.useState(!1),[y,F]=i.useState(!1),D=i.useCallback((x={},C=null)=>({id:f,...x,ref:K(C,P=>{P&&k(!0)})}),[f]),E=i.useCallback((x={},C=null)=>{var P,M;return{...x,ref:C,"data-focus":L(y),"data-disabled":L(o),"data-invalid":L(n),"data-readonly":L(l),id:(P=x.id)!=null?P:m,htmlFor:(M=x.htmlFor)!=null?M:d}},[d,o,y,n,l,m]),ge=i.useCallback((x={},C=null)=>({id:h,...x,ref:K(C,P=>{P&&v(!0)}),"aria-live":"polite"}),[h]),ve=i.useCallback((x={},C=null)=>({...x,...u,ref:C,role:"group"}),[u]),xe=i.useCallback((x={},C=null)=>({...x,ref:C,role:"presentation","aria-hidden":!0,children:x.children||"*"}),[]);return{isRequired:!!r,isInvalid:!!n,isReadOnly:!!l,isDisabled:!!o,isFocused:!!y,onFocus:()=>F(!0),onBlur:()=>F(!1),hasFeedbackText:g,setHasFeedbackText:v,hasHelpText:p,setHasHelpText:k,id:d,labelId:m,feedbackId:h,helpTextId:f,htmlProps:u,getHelpTextProps:D,getErrorMessageProps:ge,getRootProps:ve,getLabelProps:E,getRequiredIndicatorProps:xe}}var Ze=T(function(t,r){const n=$("Form",t),o=O(t),{getRootProps:l,htmlProps:u,...a}=Xe(o),d=H("chakra-form-control",t.className);return e(Je,{value:a,children:e(Ye,{value:n,children:e(S.div,{...l({},r),className:d,__css:n.container})})})});Ze.displayName="FormControl";var es=T(function(t,r){const n=ae(),o=Qe(),l=H("chakra-form__helper-text",t.className);return e(S.div,{...n==null?void 0:n.getHelpTextProps(t,r),__css:o.helperText,className:l})});es.displayName="FormHelperText";function ss(s){const{isDisabled:t,isInvalid:r,isReadOnly:n,isRequired:o,...l}=ns(s);return{...l,disabled:t,readOnly:n,required:o,"aria-invalid":V(r),"aria-required":V(o),"aria-readonly":V(n)}}function ns(s){var t,r,n;const o=ae(),{id:l,disabled:u,readOnly:a,required:d,isRequired:m,isInvalid:h,isReadOnly:f,isDisabled:g,onFocus:v,onBlur:p,...k}=s,y=s["aria-describedby"]?[s["aria-describedby"]]:[];return o!=null&&o.hasFeedbackText&&(o!=null&&o.isInvalid)&&y.push(o.feedbackId),o!=null&&o.hasHelpText&&y.push(o.helpTextId),{...k,"aria-describedby":y.join(" ")||void 0,id:l??(o==null?void 0:o.id),isDisabled:(t=u??g)!=null?t:o==null?void 0:o.isDisabled,isReadOnly:(r=a??f)!=null?r:o==null?void 0:o.isReadOnly,isRequired:(n=d??m)!=null?n:o==null?void 0:o.isRequired,isInvalid:h??(o==null?void 0:o.isInvalid),onFocus:W(o==null?void 0:o.onFocus,v),onBlur:W(o==null?void 0:o.onBlur,p)}}var R=T(function(t,r){const n=be("Kbd",t),{className:o,...l}=O(t);return e(S.kbd,{ref:r,className:H("chakra-kbd",o),...l,__css:{fontFamily:"mono",...n}})});R.displayName="Kbd";var ie=T(function(t,r){const{children:n,placeholder:o,className:l,...u}=t;return c(S.select,{...u,ref:r,className:H("chakra-select",l),children:[o&&e("option",{value:"",children:o}),n]})});ie.displayName="SelectField";function os(s,t){const r={},n={};for(const[o,l]of Object.entries(s))t.includes(o)?r[o]=l:n[o]=l;return[r,n]}var ce=T((s,t)=>{var r;const n=$("Select",s),{rootProps:o,placeholder:l,icon:u,color:a,height:d,h:m,minH:h,minHeight:f,iconColor:g,iconSize:v,...p}=O(s),[k,y]=os(p,ye),F=ss(y),D={width:"100%",height:"fit-content",position:"relative",color:a},E={paddingEnd:"2rem",...n.field,_focus:{zIndex:"unset",...(r=n.field)==null?void 0:r._focus}};return c(S.div,{className:"chakra-select__wrapper",__css:D,...k,...o,children:[e(ie,{ref:t,height:m??d,minH:h??f,placeholder:l,...F,__css:E,children:s.children}),e(de,{"data-disabled":L(F.disabled),...(g||a)&&{color:g||a},__css:n.icon,...v&&{fontSize:v},children:u})]})});ce.displayName="Select";var ts=s=>e("svg",{viewBox:"0 0 24 24",...s,children:e("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}),rs=S("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),de=s=>{const{children:t=e(ts,{}),...r}=s,n=i.cloneElement(t,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return e(rs,{...r,className:"chakra-select__icon-wrapper",children:i.isValidElement(t)?n:null})};de.displayName="SelectIcon";function ls(s){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"}}]})(s)}function as(s){return G({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M4 11v8a1 1 0 0 0 1 1h8m-9 -14v-1a1 1 0 0 1 1 -1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1 -1 1h-1"}},{tag:"path",attr:{d:"M4 12h7a1 1 0 0 1 1 1v7"}}]})(s)}const ue=i.createContext({}),is=({children:s})=>{const{courseId:t}=q(),r=Y(),{data:n,isLoading:o,isError:l}=Be(t),[u,a]=i.useState(null),d=Ce(n,["lessons",u??0]),m=i.useCallback(()=>{n&&a(f=>{var p;const g=(f??1)+1;return((p=n.lessons[g])==null?void 0:p.status)==="unlocked"?g:0})},[n]),h=i.useCallback(f=>{var g;if(n){const p=((g=n.lessons[f])==null?void 0:g.status)==="unlocked"?f:0;a(p)}},[n]);return i.useEffect(()=>{l&&r("/")},[l]),i.useEffect(()=>{if(n&&t){const{order:f,lessons:g}=Q.getCourseProgress(t);if(!f.length){const p=n.lessons.findIndex(k=>k.status==="unlocked");a(p);return}const v=n.lessons.findIndex(p=>p.status==="unlocked"&&!g[p.id].isDone);a(v===-1?0:v)}},[n,t]),i.useEffect(()=>{d&&(n!=null&&n.id)&&He.setLesson({...d,courseId:n.id})},[d,n==null?void 0:n.id]),e(ue.Provider,{value:{selectedIndex:u,setNextVideoIndex:m,setVideoIndex:h,lesson:d,data:n,isLoading:o},children:s})},w=()=>i.useContext(ue),he=i.createContext({}),cs=({children:s})=>{const t=i.useRef(null);return e(he.Provider,{value:{videoRef:t},children:s})},me=()=>i.useContext(he),ds=[{value:.25,title:"0.25.x"},{value:.5,title:"0.5x"},{value:.75,title:"0.75x"},{value:1,title:"Normal"},{value:1.25,title:"1.25x"},{value:1.5,title:"1.5x"},{value:1.75,title:"1.75x"},{value:2,title:"2x"}],us=()=>{const{videoRef:s}=me(),{isOpen:t,onOpen:r,onClose:n}=ke(),[o,l]=i.useState(1),u=a=>{l(Number(a.target.value))};return i.useEffect(()=>{s.current&&(s.current.playbackRate=o)},[o]),i.useEffect(()=>{const a=d=>{d.shiftKey&&d.code==="Comma"&&l(m=>{const h=m-.25;return h>=.25?h:.25}),d.shiftKey&&d.code==="Period"&&l(m=>{const h=m+.25;return h<=2?h:2})};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[l]),c(b,{spacing:1,w:"100%",children:[e(ce,{value:o,onChange:u,w:"120px",children:ds.map(a=>e("option",{value:a.value,children:a.title},a.value))}),c(De,{isOpen:t,onClose:n,children:[e(Ee,{children:e(A,{as:"button",fontSize:"xl",p:1,px:2,onClick:r,onMouseEnter:r,onMouseLeave:n,children:e(Ve,{})})}),c(ze,{minW:"300px",children:[e(Oe,{fontSize:"sm",fontWeight:"semibold",children:"You can quickly change the video speed by using your keyboard"}),e(qe,{}),c(Ae,{children:[c(N,{my:3,children:[e(R,{children:"shift"})," + ",e(R,{mr:3,children:"<"})," To decrease speed"]}),c(N,{my:3,children:[e(R,{children:"shift"})," + ",e(R,{mr:3,children:">"})," To increase speed"]})]})]})]})]})},hs=()=>{const s=Y(),{togglePiP:t}=Ie(),{data:r,lesson:n,isLoading:o}=w();return e(je,{label:"Collapse video",children:e(Me,{"aria-label":"Collapse video",onClick:async()=>{n&&(r!=null&&r.id)&&(t(n,r.id),s("/"))},isLoading:o,children:e(as,{})})})},ms=()=>{const{isLoading:s,selectedIndex:t,setVideoIndex:r}=w(),n=t??0,o=()=>{r(n<=0?0:n-1)},l=()=>{r(n+1)},u=n<=0;return c(b,{spacing:6,flexDir:{base:"column",lg:"row"},children:[c(b,{spacing:2,mb:{base:5,lg:0},children:[e(z,{leftIcon:e(Pe,{}),opacity:u?.5:1,disabled:u,onClick:o,isLoading:s,children:"Prev video"}),e(z,{rightIcon:e(Se,{}),onClick:l,isLoading:s,children:"Next video"})]}),c(b,{spacing:6,children:[e(hs,{}),s?e(I,{h:10,w:"150px"}):e(us,{})]})]})},ps="/genesis-fe-school/assets/empty-c7791c29.png",fs=()=>e(j,{h:"100%",w:"100%",children:c(B,{children:[e(we,{src:ps,alt:"No video"}),e(N,{textAlign:"center",children:"Ooops! Video is not available"})]})}),pe=i.memo(s=>{const r=q().courseId,{videoRef:n}=me(),{isLoading:o,trigger:l}=Fe(),{setNextVideoIndex:u,lesson:a}=w();return i.useEffect(()=>{a&&l(n,a.link)},[a]),c(J,{children:[o?e(Le,{}):a&&e(Re,{videoRef:n,courseId:r,lessonId:a.id,duration:a.duration}),e("video",{autoPlay:!0,controls:!0,poster:Ne(a),onEnded:u,disablePictureInPicture:!0,ref:n,...s})]})});pe.displayName="CoursePlayer";const gs=()=>{var t;const{data:s}=w();return c(B,{spacing:5,children:[e(_,{alignItems:"center",flexWrap:"wrap",children:(t=s==null?void 0:s.meta)==null?void 0:t.skills.map(r=>e(X,{mr:1,mb:2,size:"lg",colorScheme:"red",children:r},r))}),c(_,{alignItems:"flex-start",justifyContent:"space-between",flexDir:{base:"column-reverse",md:"row"},children:[e(le,{mr:{base:0,md:8},mt:{base:4,md:0},children:s==null?void 0:s.title}),e(Z,{value:s==null?void 0:s.rating,mt:2})]}),e(N,{fontSize:"lg",children:s==null?void 0:s.description})]})},vs=ee(3),xs=()=>c(B,{spacing:5,children:[e(_,{alignItems:"center",flexWrap:"wrap",children:vs.map(s=>e(X,{mr:1,mb:2,size:"lg",colorScheme:"red",children:e(I,{h:3,w:"150px"})},s))}),c(_,{alignItems:"flex-start",justifyContent:"space-between",children:[e(I,{mr:8,h:5,w:"60%"}),e(Z,{value:5,mt:2})]}),e(I,{h:4,w:"80%"})]}),bs=()=>{const{isLoading:s,data:t,lesson:r}=w();return c(B,{flex:1,spacing:{base:4,md:10},children:[s?e(I,{minH:"500px",h:"calc(100vh - 350px)",borderRadius:"md"}):e(_e,{minH:"500px",h:"calc(100vh - 350px)",objectFit:"contain",children:r!=null&&r.link?e(pe,{}):e(fs,{})}),e(ms,{}),s&&e(xs,{}),t&&e(gs,{})]})},ys=()=>{const s=se();return e(ne,{border:"1px",textAlign:"left",bg:s?"gray.800":"white",borderColor:s?"gray.600":"gray.400",children:c(b,{children:[e(j,{m:2,h:20,w:20,fontSize:"lg",borderRadius:"md",color:"gray.500",bg:s?"gray.600":"gray.100",children:e(oe,{})}),c(te,{flex:1,pl:0,children:[e(I,{mb:2,h:5,w:"80%"}),c(b,{spacing:2,children:[e(re,{}),e(I,{h:4,w:10})]})]})]})})},Cs=({lessonId:s})=>{const{courseId:t}=q();return Q.getLessonProgress(t,s).isDone?e(A,{fontSize:"lg",children:e(Ke,{})}):e(J,{})},ks=()=>e(A,{borderRadius:"50%",animation:"pulse 2s infinite",sx:{"@keyframes pulse":{"0%":{transform:"scale(0.95)",boxShadow:"0 0 0 0 rgba(0, 0, 0, 0.7)"},"70%":{transform:"scale(1)",boxShadow:"0 0 0 10px rgba(0, 0, 0, 0)"},"100%":{transform:"scale(0.95)",boxShadow:"0 0 0 0 rgba(0, 0, 0, 0)"}}},children:e(We,{})}),fe=i.memo(({index:s,lesson:t,onSelect:r,isActive:n})=>{const o=se(),l=t.status!=="unlocked";return e(ne,{border:"1px",textAlign:"left",onClick:()=>{l||r(s)},as:l?"div":"button",bg:l?o?"gray.700":"gray.50":o?"gray.800":"white",borderColor:n?o?"white":"blue":o?"gray.600":"gray.400",_hover:{boxShadow:l?"none":"lg"},children:c(b,{children:[e(j,{m:2,h:20,w:20,fontSize:"lg",borderRadius:"md",bg:o?"gray.600":"gray.100",color:n?"blue.500":"gray.500",children:l?e(Ue,{}):n?e(ks,{}):e(oe,{})}),c(te,{flex:1,pl:0,opacity:l?.2:1,children:[c(b,{spacing:2,mb:2,children:[e(Cs,{lessonId:t.id}),e(le,{size:"sm",children:t.title})]}),c(b,{spacing:2,children:[e(re,{}),e(N,{children:$e(t.duration)})]})]})]})})});fe.displayName="LessonItem";const Is=ee(5),Ps=()=>{const{data:s,isLoading:t,selectedIndex:r,setVideoIndex:n}=w();return e(B,{as:"aside",spacing:2,pl:{base:0,xl:4},mt:{base:10,xl:0},w:{base:"100%",xl:"30%"},maxW:{base:"100%",xl:"600px"},minW:{base:"100%",xl:"400px"},children:t?Is.map(o=>e(ys,{},o)):s==null?void 0:s.lessons.map((o,l)=>e(fe,{index:l,lesson:o,onSelect:n,isActive:l===r},o.id))})},Ls=()=>c(cs,{children:[e(Ge,{children:e(b,{spacing:4,children:e(z,{as:Te,to:"/",leftIcon:e(ls,{}),children:"Go Back"})})}),e(is,{children:c(_,{flexDir:{base:"column",xl:"row"},mt:0,children:[e(bs,{}),e(Ps,{})]})})]});export{Ls as default};