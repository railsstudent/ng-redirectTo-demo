import{a as B}from"./chunk-XLBDTNEN.js";import{A as b,C as T,D as w,G as E,H as I,M,f as k,g as v,j as x,k as C,l as i,m as h,n as s,o as p,p as d,q as y,r as g,s as P,t as a,u as r,v as u,w as l,x as c,y as S,z as f}from"./chunk-ULE5WNY6.js";function F(e,n){if(e&1&&(a(0,"p"),c(1),r()),e&2){let t=l();i(),f("",t.name()," is not found.")}}function L(e,n){if(e&1&&(a(0,"div"),u(1,"img",2),r()),e&2){let t=l();i(),p("src",t.image,C)}}function j(e,n){if(e&1&&(a(0,"div")(1,"label",3)(2,"span"),c(3),T(4,"titlecase"),r(),a(5,"span",4),c(6),r()()()),e&2){let t=n.$implicit,o=l();i(),p("for",t),i(2),f("",w(4,4,t),": "),i(2),p("id",t),i(),S(o[t])}}function D(e,n){if(e&1&&(a(0,"div"),s(1,L,2,1,"div"),a(2,"div",1),g(3,j,7,6,"div",null,y),r()()),e&2){let t=n,o=l(2);i(),d(t!=null&&t.image?1:-1),i(2),P(o.keys)}}function O(e,n){if(e&1&&s(0,D,5,1,"div"),e&2){let t,o=l();d((t=o.pokemon())?0:-1,t)}}var G=(()=>{let n=class n{constructor(){this.name=x.required(),this.service=k(B),this.pokemon=h(null),this.keys=["id","name","weight","height"],E(o=>{let m=this.service.getPokemon(this.name()).subscribe(_=>this.pokemon.set(_));o(()=>m.unsubscribe())})}};n.\u0275fac=function(m){return new(m||n)},n.\u0275cmp=v({type:n,selectors:[["app-pokemon"]],inputs:{name:[1,"name"]},standalone:!0,features:[b],decls:6,vars:2,consts:[[3,"routerLink"],[1,"row"],["alt","Pokemon image","width","120","height","120",3,"src"],[3,"for"],[3,"id"]],template:function(m,_){m&1&&(s(0,F,2,1,"p")(1,O,1,1),u(2,"hr"),a(3,"div")(4,"a",0),c(5,"Back"),r()()),m&2&&(d(_.pokemon()==null?0:1),i(4),p("routerLink","/pokemon-list"))},dependencies:[M,I],styles:["div.row[_ngcontent-%COMP%]{display:flex;justify-content:space-between}hr[_ngcontent-%COMP%]{margin-bottom:1rem}"]});let e=n;return e})();export{G as default};
