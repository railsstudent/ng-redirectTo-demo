import{A as a,E as s,J as l,K as c,L as d,N as f,O as u,g as r,t as n,u as i,v as p,x as m}from"./chunk-ULE5WNY6.js";var h=[{path:"pokemon-list",loadComponent:()=>import("./chunk-FGFWLIT7.js"),title:"Pokermon List"},{path:"pokemon-list/:name",loadComponent:()=>import("./chunk-GAJCL6BS.js"),title:"Pokermon"},{path:"pokermon-list",redirectTo:"pokemon-list"},{path:"pokermon-list/:name",redirectTo:({params:o})=>{let t=o?.name||"";return t?`/pokemon-list/${t}`:"pokemon-list"}},{path:"",pathMatch:"full",redirectTo:"pokemon-list"},{path:"**",redirectTo:"pokemon-list"}];var k={providers:[l(),f(h,u()),s()]};var C=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r({type:t,selectors:[["app-root"]],standalone:!0,features:[a],decls:3,vars:0,template:function(e,v){e&1&&(n(0,"h2"),m(1,"redirectTo Demo"),i(),p(2,"router-outlet"))},dependencies:[d],styles:["[_nghost-%COMP%]{display:block;padding:1rem}h2[_ngcontent-%COMP%]{margin-bottom:1rem}"]});let o=t;return o})();c(C,k).catch(o=>console.error(o));
