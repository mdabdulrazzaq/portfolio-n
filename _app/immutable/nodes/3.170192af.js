import{s as Ae,f as D,g as k,h as V,d as _,j as $,i as B,a as b,e as Ce,c as C,I as Le,K as u,n as Ye,l as U,m as x,T as De,p as R,M as je}from"../chunks/scheduler.7a274a43.js";import{S as ze,i as Pe,b as L,d as Y,m as j,a as E,t as I,e as z,g as ve,c as we}from"../chunks/index.28409b7f.js";import{A as ke,e as se,u as Te,U as ie,b as Ue,g as Ee}from"../chunks/UIcon.5af4ec78.js";import{C as xe}from"../chunks/Card.55795b2d.js";import{C as Be}from"../chunks/Chip.2121a9fa.js";import{S as Fe}from"../chunks/SearchPage.a444b659.js";import{g as ae}from"../chunks/app.49854a0e.js";import{C as _e}from"../chunks/CardDivider.09b854d8.js";const Ie=[{degree:"Master of Science in Computer Science",description:"Currently pursuing Master’s degree in Computer Science at NYU Tandon School of Engineering, focusing on AI, ML, and web development.",location:"New York, NY, USA",logo:ke.NYU,name:"MSc in Computer Science",organization:"New York University, Tandon School of Engineering",period:{from:new Date(2024,9,1)},shortDescription:"Currently enrolled",color:"#6B1E8C",slug:"ms-computer-science",subjects:["Artificial Intelligence","Machine Learning","Data Structures","Algorithms","Cloud Computing","Web Development","Software Engineering"]},{degree:"Bachelor of Technology in Computer Science Engineering",description:"",location:"Amaravathi, India",logo:ke.VIT,name:"BTech in Computer Science Engineering",organization:"Vellore Institute of Technology",period:{from:new Date(2018,8,1),to:new Date(2022,4,31)},shortDescription:"GPA: 8.83 / 10.00",color:"blue",slug:"btech-computer-science",subjects:["Data Structures","Neural Networks","Database Management Systems","Computer Networks","Operating Systems","Discrete Mathematics","Java","Python","Software Engineering"]}],qe="Education";function Se(c,t,r){const e=c.slice();return e[0]=t[r],e[4]=r,e}function Ve(c,t,r){const e=c.slice();return e[5]=t[r],e}function Ge(c){let t,r,e=[],a=new Map,d,i,f=se(c[1]);const l=n=>n[0].slug;for(let n=0;n<f.length;n+=1){let s=Se(c,f,n),v=l(s);a.set(v,e[n]=ye(v,s))}return{c(){t=D("div"),r=b();for(let n=0;n<e.length;n+=1)e[n].c();d=Ce(),this.h()},l(n){t=k(n,"DIV",{class:!0}),V(t).forEach(_),r=C(n);for(let s=0;s<e.length;s+=1)e[s].l(n);d=Ce(),this.h()},h(){$(t,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded")},m(n,s){B(n,t,s),B(n,r,s);for(let v=0;v<e.length;v+=1)e[v]&&e[v].m(n,s);B(n,d,s),i=!0},p(n,s){s&2&&(f=se(n[1]),ve(),e=Te(e,s,l,1,n,f,a,d.parentNode,Ue,ye,d,Se),we())},i(n){if(!i){for(let s=0;s<f.length;s+=1)E(e[s]);i=!0}},o(n){for(let s=0;s<e.length;s+=1)I(e[s]);i=!1},d(n){n&&(_(t),_(r),_(d));for(let s=0;s<e.length;s+=1)e[s].d(n)}}}function Je(c){let t,r,e,a,d="Could not find anything...",i;return r=new ie({props:{icon:"i-carbon-development",classes:"text-3.5em"}}),{c(){t=D("div"),L(r.$$.fragment),e=b(),a=D("p"),a.textContent=d,this.h()},l(f){t=k(f,"DIV",{class:!0});var l=V(t);Y(r.$$.fragment,l),e=C(l),a=k(l,"P",{class:!0,["data-svelte-h"]:!0}),Le(a)!=="svelte-1jyyf6v"&&(a.textContent=d),l.forEach(_),this.h()},h(){$(a,"class","font-300"),$(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(f,l){B(f,t,l),j(r,t,null),u(t,e),u(t,a),i=!0},p:Ye,i(f){i||(E(r.$$.fragment,f),i=!0)},o(f){I(r.$$.fragment,f),i=!1},d(f){f&&_(t),z(r)}}}function Ke(c){let t=c[5]+"",r;return{c(){r=U(t)},l(e){r=x(e,t)},m(e,a){B(e,r,a)},p(e,a){a&2&&t!==(t=e[5]+"")&&R(r,t)},d(e){e&&_(r)}}}function Me(c){let t,r;return t=new Be({props:{$$slots:{default:[Ke]},$$scope:{ctx:c}}}),{c(){L(t.$$.fragment)},l(e){Y(t.$$.fragment,e)},m(e,a){j(t,e,a),r=!0},p(e,a){const d={};a&258&&(d.$$scope={dirty:a,ctx:e}),t.$set(d)},i(e){r||(E(t.$$.fragment,e),r=!0)},o(e){I(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}function Oe(c){let t,r,e,a,d,i,f=c[0].degree+"",l,n,s,v=c[0].organization+"",N,w,g,S,W,P,F,ce,H=c[0].location+"",te,fe,q,ue,M,G,de,Q=ae(c[0].period.from.getMonth())+"",re,me,X=c[0].period.from.getFullYear()+"",ne,ge,Z=c[0].period.to?`${ae(c[0].period.to.getMonth())} ${c[0].period.to.getFullYear()}`:"Present",le,he,J,pe,K,y;S=new _e({}),F=new ie({props:{icon:"i-carbon-location"}}),q=new _e({}),G=new ie({props:{icon:"i-carbon-time"}}),J=new _e({});let O=se(c[0].subjects),h=[];for(let o=0;o<O.length;o+=1)h[o]=Me(Ve(c,O,o));const Ne=o=>I(h[o],1,1,()=>{h[o]=null});return{c(){t=D("div"),r=D("img"),d=b(),i=D("div"),l=U(f),n=b(),s=D("div"),N=U(v),w=b(),g=D("div"),L(S.$$.fragment),W=b(),P=D("div"),L(F.$$.fragment),ce=b(),te=U(H),fe=b(),L(q.$$.fragment),ue=b(),M=D("div"),L(G.$$.fragment),de=b(),re=U(Q),me=b(),ne=U(X),ge=U(` - 
									`),le=U(Z),he=b(),L(J.$$.fragment),pe=b(),K=D("div");for(let o=0;o<h.length;o+=1)h[o].c();this.h()},l(o){t=k(o,"DIV",{class:!0});var m=V(t);r=k(m,"IMG",{src:!0,alt:!0,height:!0,width:!0,class:!0}),d=C(m),i=k(m,"DIV",{class:!0});var p=V(i);l=x(p,f),p.forEach(_),n=C(m),s=k(m,"DIV",{});var ee=V(s);N=x(ee,v),ee.forEach(_),w=C(m),g=k(m,"DIV",{class:!0});var A=V(g);Y(S.$$.fragment,A),W=C(A),P=k(A,"DIV",{class:!0});var oe=V(P);Y(F.$$.fragment,oe),ce=C(oe),te=x(oe,H),oe.forEach(_),fe=C(A),Y(q.$$.fragment,A),ue=C(A),M=k(A,"DIV",{class:!0});var T=V(M);Y(G.$$.fragment,T),de=C(T),re=x(T,Q),me=C(T),ne=x(T,X),ge=x(T,` - 
									`),le=x(T,Z),T.forEach(_),he=C(A),Y(J.$$.fragment,A),A.forEach(_),pe=C(m),K=k(m,"DIV",{class:!0});var be=V(K);for(let $e=0;$e<h.length;$e+=1)h[$e].l(be);be.forEach(_),m.forEach(_),this.h()},h(){De(r.src,e=Ee(c[0].logo))||$(r,"src",e),$(r,"alt",a=c[0].organization),$(r,"height","50"),$(r,"width","50"),$(r,"class","mb-5"),$(i,"class","text-[1.3em]"),$(P,"class","row items-center gap-2"),$(M,"class","row items-center gap-2"),$(g,"class","col text-[0.9em]"),$(K,"class","row flex-wrap gap-1"),$(t,"class","flex-1 col gap-2 items-stretch")},m(o,m){B(o,t,m),u(t,r),u(t,d),u(t,i),u(i,l),u(t,n),u(t,s),u(s,N),u(t,w),u(t,g),j(S,g,null),u(g,W),u(g,P),j(F,P,null),u(P,ce),u(P,te),u(g,fe),j(q,g,null),u(g,ue),u(g,M),j(G,M,null),u(M,de),u(M,re),u(M,me),u(M,ne),u(M,ge),u(M,le),u(g,he),j(J,g,null),u(t,pe),u(t,K);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(K,null);y=!0},p(o,m){if((!y||m&2&&!De(r.src,e=Ee(o[0].logo)))&&$(r,"src",e),(!y||m&2&&a!==(a=o[0].organization))&&$(r,"alt",a),(!y||m&2)&&f!==(f=o[0].degree+"")&&R(l,f),(!y||m&2)&&v!==(v=o[0].organization+"")&&R(N,v),(!y||m&2)&&H!==(H=o[0].location+"")&&R(te,H),(!y||m&2)&&Q!==(Q=ae(o[0].period.from.getMonth())+"")&&R(re,Q),(!y||m&2)&&X!==(X=o[0].period.from.getFullYear()+"")&&R(ne,X),(!y||m&2)&&Z!==(Z=o[0].period.to?`${ae(o[0].period.to.getMonth())} ${o[0].period.to.getFullYear()}`:"Present")&&R(le,Z),m&2){O=se(o[0].subjects);let p;for(p=0;p<O.length;p+=1){const ee=Ve(o,O,p);h[p]?(h[p].p(ee,m),E(h[p],1)):(h[p]=Me(ee),h[p].c(),E(h[p],1),h[p].m(K,null))}for(ve(),p=O.length;p<h.length;p+=1)Ne(p);we()}},i(o){if(!y){E(S.$$.fragment,o),E(F.$$.fragment,o),E(q.$$.fragment,o),E(G.$$.fragment,o),E(J.$$.fragment,o);for(let m=0;m<O.length;m+=1)E(h[m]);y=!0}},o(o){I(S.$$.fragment,o),I(F.$$.fragment,o),I(q.$$.fragment,o),I(G.$$.fragment,o),I(J.$$.fragment,o),h=h.filter(Boolean);for(let m=0;m<h.length;m+=1)I(h[m]);y=!1},d(o){o&&_(t),z(S),z(F),z(q),z(G),z(J),je(h,o)}}}function ye(c,t){let r,e,a,d,i,f,l,n,s,v,N;return i=new ie({props:{icon:"i-carbon-condition-point"}}),n=new xe({props:{color:t[0].color,$$slots:{default:[Oe]},$$scope:{ctx:t}}}),{key:c,first:null,c(){r=D("div"),e=D("div"),a=b(),d=D("div"),L(i.$$.fragment),f=b(),l=D("div"),L(n.$$.fragment),s=b(),this.h()},l(w){r=k(w,"DIV",{class:!0});var g=V(r);e=k(g,"DIV",{class:!0}),V(e).forEach(_),a=C(g),d=k(g,"DIV",{class:!0});var S=V(d);Y(i.$$.fragment,S),S.forEach(_),f=C(g),l=k(g,"DIV",{class:!0});var W=V(l);Y(n.$$.fragment,W),W.forEach(_),s=C(g),g.forEach(_),this.h()},h(){$(e,"class","flex-1 hidden lg:flex"),$(d,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),$(l,"class","col flex-1 items-stretch"),$(r,"class",v=`flex ${t[4]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=r},m(w,g){B(w,r,g),u(r,e),u(r,a),u(r,d),j(i,d,null),u(r,f),u(r,l),j(n,l,null),u(r,s),N=!0},p(w,g){t=w;const S={};g&2&&(S.color=t[0].color),g&258&&(S.$$scope={dirty:g,ctx:t}),n.$set(S),(!N||g&2&&v!==(v=`flex ${t[4]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`))&&$(r,"class",v)},i(w){N||(E(i.$$.fragment,w),E(n.$$.fragment,w),N=!0)},o(w){I(i.$$.fragment,w),I(n.$$.fragment,w),N=!1},d(w){w&&_(r),z(i),z(n)}}}function Re(c){let t,r,e,a;const d=[Je,Ge],i=[];function f(l,n){return l[1].length===0?0:1}return r=f(c),e=i[r]=d[r](c),{c(){t=D("div"),e.c(),this.h()},l(l){t=k(l,"DIV",{class:!0});var n=V(t);e.l(n),n.forEach(_),this.h()},h(){$(t,"class","col items-center relative mt-10 flex-1")},m(l,n){B(l,t,n),i[r].m(t,null),a=!0},p(l,n){let s=r;r=f(l),r===s?i[r].p(l,n):(ve(),I(i[s],1,1,()=>{i[s]=null}),we(),e=i[r],e?e.p(l,n):(e=i[r]=d[r](l),e.c()),E(e,1),e.m(t,null))},i(l){a||(E(e),a=!0)},o(l){I(e),a=!1},d(l){l&&_(t),i[r].d()}}}function We(c){let t,r;return t=new Fe({props:{title:qe,search:He,$$slots:{default:[Re]},$$scope:{ctx:c}}}),t.$on("search",c[2]),{c(){L(t.$$.fragment)},l(e){Y(t.$$.fragment,e)},m(e,a){j(t,e,a),r=!0},p(e,[a]){const d={};a&258&&(d.$$scope={dirty:a,ctx:e}),t.$set(d)},i(e){r||(E(t.$$.fragment,e),r=!0)},o(e){I(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}let He="";function Qe(c,t,r){let{education:e}=t,a=Ie;const d=i=>{const f=i.detail.search;r(1,a=Ie.filter(l=>l.degree.toLowerCase().includes(f)||l.description.toLowerCase().includes(f)||l.location.toLowerCase().includes(f)||l.name.toLowerCase().includes(f)||l.organization.toLowerCase().includes(f)||l.subjects.some(n=>n.toLowerCase().includes(f))))};return c.$$set=i=>{"education"in i&&r(0,e=i.education)},[e,a,d]}class at extends ze{constructor(t){super(),Pe(this,t,Qe,We,Ae,{education:0})}}export{at as component};
