import{f as B,j as e,c as g,a as re,k as v,b as a,G as se,C as R,B as f,T as x,I,F as b,d as y,L as W,S as h,r as m,u as z,p as te,e as ae,V as oe,P as ne,g as ie}from"./index-8d5782f5.js";import{u as le,l as ce,C as D,a as T,S as u,H as L,F as $,P as de,b as ue,c as me,d as he,e as pe,f as ge,T as j,g as P,h as _,i as fe,A as ve,R as xe,B as be,j as ye,r as ke,k as we,m as Ce}from"./courses.hooks-7fe3e038.js";import{H as k}from"./chunk-B2MGPQRJ-9a12a12a.js";var M=B(function(s,t){const{className:o,justify:n,...c}=s,i=le();return e(g.div,{ref:t,className:re("chakra-card__footer",o),__css:{display:"flex",justifyContent:n,...i.footer},...c})}),H=g("div",{baseStyle:{fontSize:"0.24em",top:"50%",left:"50%",width:"100%",textAlign:"center",position:"absolute",transform:"translate(-50%, -50%)"}});H.displayName="CircularProgressLabel";var S=r=>e(g.circle,{cx:50,cy:50,r:42,fill:"transparent",...r});S.displayName="Circle";function Le(r,s,t){return(r-s)*100/(t-s)}var Pe=v({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}}),Se=v({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}});v({"0%":{left:"-40%"},"100%":{left:"100%"}});v({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function Ie(r){const{value:s=0,min:t,max:o,valueText:n,getValueText:c,isIndeterminate:i,role:l="progressbar"}=r,d=Le(s,t,o);return{bind:{"data-indeterminate":i?"":void 0,"aria-valuemax":o,"aria-valuemin":t,"aria-valuenow":i?void 0:s,"aria-valuetext":(()=>{if(s!=null)return typeof c=="function"?c(s,d):n})(),role:l},percent:d,value:s}}var A=r=>{const{size:s,isIndeterminate:t,...o}=r;return e(g.svg,{viewBox:"0 0 100 100",__css:{width:s,height:s,animation:t?`${Se} 2s linear infinite`:void 0},...o})};A.displayName="Shape";var O=B((r,s)=>{var t;const{size:o="48px",max:n=100,min:c=0,valueText:i,getValueText:l,value:d,capIsRound:N,children:q,thickness:F="10px",color:J="#0078d4",trackColor:K="#edebe9",isIndeterminate:p,...U}=r,w=Ie({min:c,max:n,value:d,valueText:i,getValueText:l,isIndeterminate:p}),C=p?void 0:((t=w.percent)!=null?t:0)*2.64,X=C==null?void 0:`${C} ${264-C}`,Z=p?{css:{animation:`${Pe} 1.5s linear infinite`}}:{strokeDashoffset:66,strokeDasharray:X,transitionProperty:"stroke-dasharray, stroke",transitionDuration:"0.6s",transitionTimingFunction:"ease"},ee={display:"inline-block",position:"relative",verticalAlign:"middle",fontSize:o};return a(g.div,{ref:s,className:"chakra-progress",...w.bind,...U,__css:ee,children:[a(A,{size:o,isIndeterminate:p,children:[e(S,{stroke:K,strokeWidth:F,className:"chakra-progress__track"}),e(S,{stroke:J,strokeWidth:F,className:"chakra-progress__indicator",strokeLinecap:N?"round":void 0,opacity:w.value===0&&!p?0:void 0,...Z})]}),q]})});O.displayName="CircularProgress";function De(r){return se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"}}]})(r)}const Te="/genesis-fe-school/assets/banner-2b367f25.jpeg",je=()=>e(R,{children:a(f,{maxW:"1200px",w:"100%",position:"relative",children:[a(f,{bg:"white",color:"black",p:6,borderRadius:"lg",position:"absolute",left:5,top:5,w:"88%",maxW:"400px",children:[e(k,{mb:3,fontSize:"xx-large",children:"Learning that gets you"}),e(x,{fontSize:"md",children:"Skills for your present (and your future). Get started with us."})]}),e(I,{src:Te,w:"100%",h:"400px",alt:"Hero",borderRadius:"lg",objectFit:"cover"})]})}),Ne=()=>{const r=ce.getLesson();return e(b,{children:r&&a(D,{maxW:"1200px",mx:"auto",mt:10,variant:"outline",direction:{base:"column",md:"row"},children:[e(I,{objectFit:"cover",borderRadius:"md",alt:r.title,w:{base:"100%",md:"50%"},h:{base:"200px",md:"400px"},src:`${r.previewImageLink}/lesson-${r.order}.webp`}),a(T,{display:"flex",flexDir:"column",alignItems:"flex-start",justifyContent:"center",children:[e(x,{children:"Your last lesson"}),e(k,{mt:3,mb:10,children:r.title}),e(y,{as:W,to:`/${r.courseId}`,children:"Continue watching"})]})]})})},Fe=()=>a(D,{direction:{base:"column",md:"row"},overflow:"hidden",variant:"outline",children:[e(u,{w:"100%",maxW:{base:"100%",md:"300px"},h:"230px"}),a(h,{w:"100%",children:[e(T,{children:a(h,{flex:1,spacing:5,children:[e(u,{h:5,w:"70%"}),e(u,{h:3,w:"90%"}),a(L,{children:[e(u,{h:4,w:20}),e(u,{h:4,w:20}),e(u,{h:4,w:20})]})]})}),a(M,{alignItems:"center",justifyContent:"space-between",children:[e(y,{as:"div",variant:"solid",colorScheme:"blue",leftIcon:e($,{}),opacity:.5,children:"Start Now"}),a(L,{children:[e(u,{h:8,w:"50px"}),e(u,{h:8,w:"100px"}),e(u,{h:8,w:"40px"})]})]})]})]}),V=m.memo(({skills:r})=>{const{isOpen:s,onClose:t,onOpen:o}=z();return a(de,{isOpen:s,onClose:t,children:[e(ue,{children:e(f,{as:"button",mb:2,p:1,px:2,onClick:o,onMouseEnter:o,onMouseLeave:t,children:e(De,{})})}),a(me,{minW:"350px",children:[e(he,{fontWeight:"semibold",children:"Skills"}),e(pe,{}),e(ge,{children:e(h,{py:2,spacing:2,alignItems:"flex-start",children:r.map(n=>e(j,{size:"lg",children:n},n))})})]})]})});V.displayName="SkillsInfo";const E=m.memo(({title:r,description:s,tags:t,skills:o,lessonsCount:n,courseId:c})=>{const i=m.useMemo(()=>Object.values(te.getCourseProgress(c).lessons).filter(l=>l.isDone).length,[]);return e(T,{children:a(P,{alignItems:"self-start",justifyContent:"space-between",children:[a(h,{flex:1,children:[e(k,{size:"md",children:r}),e(x,{py:"2",children:s}),a(P,{alignItems:"center",children:[t.map(l=>e(j,{colorScheme:"red",mr:2,mb:2,children:l},l)),e(V,{skills:o})]})]}),i?e(O,{value:i*100/n,color:"green.400",children:a(H,{children:[i,"/",n]})}):null]})})});E.displayName="CardBody";const G=m.memo(({id:r,rating:s,duration:t,containsLockedLessons:o})=>a(M,{pt:0,flexDir:{base:"column-reverse",md:"row"},justifyContent:{base:"flex-start",md:"space-between"},children:[e(y,{as:W,to:`/${r}`,variant:"solid",colorScheme:"blue",leftIcon:e($,{}),children:"Start Now"}),a(P,{mb:{base:5,md:0},flexWrap:"wrap",children:[e(_,{label:"Duration","aria-label":"Duration",children:a(L,{spacing:2,w:{base:"100%",sm:"auto"},mr:4,children:[e(x,{children:fe(t)}),e(ve,{})]})}),e(xe,{value:s,mr:4}),o&&e(_,{label:"Contains Locked Lessons","aria-label":"Contains Locked Lessons",children:e(j,{size:{base:"md",md:"lg"},children:e(be,{})})})]})]}));G.displayName="CardFooter";const Q=m.memo(({src:r,...s})=>{const t=m.useRef(null),{isLoading:o,trigger:n}=ae();return m.useEffect(()=>{n(t,r)},[n,r]),a(b,{children:[o&&e(oe,{}),e("video",{muted:!0,autoPlay:!0,ref:t,...s})]})});Q.displayName="PreviewPlayer";const Y=m.memo(({title:r,imageLink:s,videoLink:t})=>{const o=ye(),{isOpen:n,onOpen:c,onClose:i}=z(),l=`${s}/cover.webp`;return a(f,{w:"100%",overflow:"hidden",borderRight:"1px",borderRadius:"md",position:"relative",maxW:{base:"100%",lg:"300px"},bg:o?"gray.700":"gray.200",borderColor:o?"gray.700":"gray.200",onMouseEnter:c,onMouseLeave:i,children:[n&&t&&e(ne,{position:"absolute",borderRadius:"none",w:"100%",h:"100%",top:0,left:0,children:e(Q,{src:t,poster:l})}),e(I,{w:"100%",h:"100%",alt:r,objectFit:"cover",src:l})]})});Y.displayName="CardMedia";const _e=({course:r})=>{var s,t,o;return a(D,{direction:{base:"column",lg:"row"},variant:"outline",children:[e(Y,{title:r.title,imageLink:r.previewImageLink,videoLink:(t=(s=r.meta)==null?void 0:s.courseVideoPreview)==null?void 0:t.link}),a(h,{w:"100%",children:[e(E,{courseId:r.id,tags:r.tags,title:r.title,description:r.description,lessonsCount:r.lessonsCount,skills:((o=r.meta)==null?void 0:o.skills)??[]}),e(G,{id:r.id,rating:r.rating,duration:r.duration,containsLockedLessons:r.containsLockedLessons})]})]})},Be=ke(5),Re=()=>{var l;const{data:r,isLoading:s}=we(),[t,o]=m.useState(1),n=()=>o(d=>d+1),c=r?(l=r.courses)==null?void 0:l.slice(0,10*t):[],i=c.length<((r==null?void 0:r.courses.length)??0);return a(b,{children:[a(h,{w:"100%",maxW:"1000px",mx:"auto",mt:10,children:[a(k,{mb:5,size:"sm",children:["Total courses: ",s?e(ie,{size:"sm",ml:2}):(r==null?void 0:r.courses.length)??0]}),e(h,{spacing:6,mx:"auto",children:s?Be.map(d=>e(Fe,{},d)):c.map(d=>e(_e,{course:d},d.id))})]}),e(R,{mt:10,mb:20,children:i&&e(y,{variant:"outline",onClick:n,children:"Load More"})})]})},Me=()=>a(b,{children:[e(Ce,{}),e(je,{}),e(Ne,{}),e(Re,{})]});export{Me as default};
