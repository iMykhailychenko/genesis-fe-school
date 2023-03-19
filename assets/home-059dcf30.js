import{f as B,j as e,c as g,a as se,k as v,b as t,G as ae,C as R,B as f,T as x,I,F as b,d as y,L as W,S as h,r as u,u as z,p as te,e as oe,V as ne,P as ie,g as le}from"./index-8fe02112.js";import{u as ce,l as de,a as $,C as D,b as T,S as m,H as L,F as H,P as me,c as ue,d as he,e as pe,f as ge,g as fe,T as j,h as P,i as _,j as ve,A as xe,R as be,B as ye,r as ke,k as we,m as Ce}from"./courses.hooks-298dc36c.js";import{H as k}from"./chunk-B2MGPQRJ-a4e51db4.js";var M=B(function(s,a){const{className:o,justify:n,...c}=s,i=ce();return e(g.div,{ref:a,className:se("chakra-card__footer",o),__css:{display:"flex",justifyContent:n,...i.footer},...c})}),A=g("div",{baseStyle:{fontSize:"0.24em",top:"50%",left:"50%",width:"100%",textAlign:"center",position:"absolute",transform:"translate(-50%, -50%)"}});A.displayName="CircularProgressLabel";var S=r=>e(g.circle,{cx:50,cy:50,r:42,fill:"transparent",...r});S.displayName="Circle";function Le(r,s,a){return(r-s)*100/(a-s)}var Pe=v({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}}),Se=v({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}});v({"0%":{left:"-40%"},"100%":{left:"100%"}});v({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function Ie(r){const{value:s=0,min:a,max:o,valueText:n,getValueText:c,isIndeterminate:i,role:l="progressbar"}=r,d=Le(s,a,o);return{bind:{"data-indeterminate":i?"":void 0,"aria-valuemax":o,"aria-valuemin":a,"aria-valuenow":i?void 0:s,"aria-valuetext":(()=>{if(s!=null)return typeof c=="function"?c(s,d):n})(),role:l},percent:d,value:s}}var O=r=>{const{size:s,isIndeterminate:a,...o}=r;return e(g.svg,{viewBox:"0 0 100 100",__css:{width:s,height:s,animation:a?`${Se} 2s linear infinite`:void 0},...o})};O.displayName="Shape";var V=B((r,s)=>{var a;const{size:o="48px",max:n=100,min:c=0,valueText:i,getValueText:l,value:d,capIsRound:N,children:J,thickness:F="10px",color:K="#0078d4",trackColor:U="#edebe9",isIndeterminate:p,...X}=r,w=Ie({min:c,max:n,value:d,valueText:i,getValueText:l,isIndeterminate:p}),C=p?void 0:((a=w.percent)!=null?a:0)*2.64,Z=C==null?void 0:`${C} ${264-C}`,ee=p?{css:{animation:`${Pe} 1.5s linear infinite`}}:{strokeDashoffset:66,strokeDasharray:Z,transitionProperty:"stroke-dasharray, stroke",transitionDuration:"0.6s",transitionTimingFunction:"ease"},re={display:"inline-block",position:"relative",verticalAlign:"middle",fontSize:o};return t(g.div,{ref:s,className:"chakra-progress",...w.bind,...X,__css:re,children:[t(O,{size:o,isIndeterminate:p,children:[e(S,{stroke:U,strokeWidth:F,className:"chakra-progress__track"}),e(S,{stroke:K,strokeWidth:F,className:"chakra-progress__indicator",strokeLinecap:N?"round":void 0,opacity:w.value===0&&!p?0:void 0,...ee})]}),J]})});V.displayName="CircularProgress";function De(r){return ae({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"}}]})(r)}const Te="/genesis-fe-school/assets/banner-2b367f25.jpeg",je=()=>e(R,{children:t(f,{maxW:"1200px",w:"100%",position:"relative",children:[t(f,{p:6,top:5,w:"88%",left:5,bg:"white",maxW:"400px",color:"black",boxShadow:"md",borderRadius:"lg",position:"absolute",children:[e(k,{mb:3,fontSize:"xx-large",children:"Learning that gets you"}),e(x,{fontSize:"md",children:"Skills for your present (and your future). Get started with us."})]}),e(I,{src:Te,w:"100%",h:"400px",alt:"Hero",borderRadius:"lg",objectFit:"cover"})]})}),Ne=()=>{const r=de.getLesson(),s=$();return e(b,{children:r&&t(D,{maxW:"1200px",mx:"auto",mt:10,variant:"outline",direction:{base:"column",md:"row"},overflow:"hidden",children:[e(I,{objectFit:"cover",borderRadius:"md",alt:r.title,w:{base:"100%",md:"50%"},h:{base:"200px",md:"400px"},src:`${r.previewImageLink}/lesson-${r.order}.webp`}),t(T,{px:{base:5,md:"50px"},display:"flex",flexDir:"column",alignItems:"flex-start",justifyContent:"center",bg:s?"gray.900":"gray.100",children:[e(x,{children:"Your last lesson"}),e(k,{mt:3,mb:{base:5,md:10},children:r.title}),e(y,{as:W,to:`/${r.courseId}`,colorScheme:"blue",children:"Continue watching"})]})]})})},Fe=()=>t(D,{direction:{base:"column",md:"row"},overflow:"hidden",variant:"outline",children:[e(m,{w:"100%",maxW:{base:"100%",md:"300px"},h:"230px"}),t(h,{w:"100%",children:[e(T,{children:t(h,{flex:1,spacing:5,children:[e(m,{h:5,w:"70%"}),e(m,{h:3,w:"90%"}),t(L,{children:[e(m,{h:4,w:20}),e(m,{h:4,w:20}),e(m,{h:4,w:20})]})]})}),t(M,{alignItems:"center",justifyContent:"space-between",children:[e(y,{as:"div",variant:"solid",colorScheme:"blue",leftIcon:e(H,{}),opacity:.5,children:"Start Now"}),t(L,{children:[e(m,{h:8,w:"50px"}),e(m,{h:8,w:"100px"}),e(m,{h:8,w:"40px"})]})]})]})]}),E=u.memo(({skills:r})=>{const{isOpen:s,onClose:a,onOpen:o}=z();return t(me,{isOpen:s,onClose:a,children:[e(ue,{children:e(f,{as:"button",mb:2,p:1,px:2,onClick:o,onMouseEnter:o,onMouseLeave:a,children:e(De,{})})}),t(he,{minW:"350px",children:[e(pe,{fontWeight:"semibold",children:"Skills"}),e(ge,{}),e(fe,{children:e(h,{py:2,spacing:2,alignItems:"flex-start",children:r.map(n=>e(j,{size:"lg",children:n},n))})})]})]})});E.displayName="SkillsInfo";const G=u.memo(({title:r,description:s,tags:a,skills:o,lessonsCount:n,courseId:c})=>{const i=u.useMemo(()=>Object.values(te.getCourseProgress(c).lessons).filter(l=>l.isDone).length,[]);return e(T,{children:t(P,{alignItems:"self-start",justifyContent:"space-between",children:[t(h,{flex:1,children:[e(k,{size:"md",children:r}),e(x,{py:"2",children:s}),t(P,{alignItems:"center",children:[a.map(l=>e(j,{colorScheme:"red",mr:2,mb:2,children:l},l)),e(E,{skills:o})]})]}),i?e(V,{value:i*100/n,color:"green.400",children:t(A,{children:[i,"/",n]})}):null]})})});G.displayName="CardBody";const Q=u.memo(({id:r,rating:s,duration:a,containsLockedLessons:o})=>t(M,{pt:0,flexDir:{base:"column-reverse",md:"row"},justifyContent:{base:"flex-start",md:"space-between"},children:[e(y,{as:W,to:`/${r}`,variant:"solid",colorScheme:"blue",leftIcon:e(H,{}),children:"Start Now"}),t(P,{mb:{base:5,md:0},flexWrap:"wrap",children:[e(_,{label:"Duration","aria-label":"Duration",children:t(L,{spacing:2,w:{base:"100%",sm:"auto"},mr:4,children:[e(x,{children:ve(a)}),e(xe,{})]})}),e(be,{value:s,mr:4}),o&&e(_,{label:"Contains Locked Lessons","aria-label":"Contains Locked Lessons",children:e(j,{size:{base:"md",md:"lg"},children:e(ye,{})})})]})]}));Q.displayName="CardFooter";const Y=u.memo(({src:r,...s})=>{const a=u.useRef(null),{isLoading:o,trigger:n}=oe();return u.useEffect(()=>{n(a,r)},[n,r]),t(b,{children:[o&&e(ne,{}),e("video",{muted:!0,autoPlay:!0,ref:a,...s})]})});Y.displayName="PreviewPlayer";const q=u.memo(({title:r,imageLink:s,videoLink:a})=>{const o=$(),{isOpen:n,onOpen:c,onClose:i}=z(),l=`${s}/cover.webp`;return t(f,{w:"100%",overflow:"hidden",borderRight:"1px",borderRadius:"md",position:"relative",maxW:{base:"100%",lg:"300px"},bg:o?"gray.700":"gray.200",borderColor:o?"gray.700":"gray.200",onMouseEnter:c,onMouseLeave:i,children:[n&&a&&e(ie,{position:"absolute",borderRadius:"none",w:"100%",h:"100%",top:0,left:0,children:e(Y,{src:a,poster:l})}),e(I,{w:"100%",h:"100%",alt:r,objectFit:"cover",src:l})]})});q.displayName="CardMedia";const _e=({course:r})=>{var s,a,o;return t(D,{direction:{base:"column",lg:"row"},variant:"outline",children:[e(q,{title:r.title,imageLink:r.previewImageLink,videoLink:(a=(s=r.meta)==null?void 0:s.courseVideoPreview)==null?void 0:a.link}),t(h,{w:"100%",children:[e(G,{courseId:r.id,tags:r.tags,title:r.title,description:r.description,lessonsCount:r.lessonsCount,skills:((o=r.meta)==null?void 0:o.skills)??[]}),e(Q,{id:r.id,rating:r.rating,duration:r.duration,containsLockedLessons:r.containsLockedLessons})]})]})},Be=ke(5),Re=()=>{var l;const{data:r,isLoading:s}=we(),[a,o]=u.useState(1),n=()=>o(d=>d+1),c=r?(l=r.courses)==null?void 0:l.slice(0,10*a):[],i=c.length<((r==null?void 0:r.courses.length)??0);return t(b,{children:[t(h,{w:"100%",maxW:"1000px",mx:"auto",mt:10,children:[t(k,{mb:5,size:"sm",children:["Total courses: ",s?e(le,{size:"sm",ml:2}):(r==null?void 0:r.courses.length)??0]}),e(h,{spacing:10,mx:"auto",children:s?Be.map(d=>e(Fe,{},d)):c.map(d=>e(_e,{course:d},d.id))})]}),e(R,{mt:10,mb:20,children:i&&e(y,{variant:"outline",onClick:n,children:"Load More"})})]})},He=()=>t(b,{children:[e(Ce,{}),e(je,{}),e(Ne,{}),e(Re,{})]});export{He as default};
