function webclient(){var U='',R=' top: -1000px;',pb='" for "gwt:onLoadErrorFn"',nb='" for "gwt:onPropertyErrorFn"',$='");',qb='#',Yb='.cache.js',sb='/',yb='//',Qb='1646959D3A0D98828FE45B2035717CF8',Rb='4FE444AAFEDF73225229C7B9EAC58036',Sb='6C9828B425885FDC3765AC801562D54B',Tb='8B319FF79D9A7FE13916682FE7B06C89',Ub='8FD88E32330A1D9E9132DC26C28414A4',Vb='952B5527582477EFE4BD4288A2E67090',Xb=':',Wb=':1',hb='::',T='<!doctype html>',V='<html><head><\/head><body><\/body><\/html>',kb='=',rb='?',mb='Bad handler "',S='CSS1Compat',Y='Chrome',X='DOMContentLoaded',M='DUMMY',xb='base',vb='baseUrl',H='begin',N='body',G='bootstrap',ub='clear.cache.gif',jb='content',$b='end',Z='eval("',Lb='gecko',Mb='gecko1_8',I='gwt.codesvr.webclient=',J='gwt.codesvr=',ob='gwt:onLoadErrorFn',lb='gwt:onPropertyErrorFn',ib='gwt:property',db='head',Kb='ie6',Jb='ie8',Ib='ie9',O='iframe',tb='img',ab='javascript',P='javascript:""',Zb='loadExternalRefs',eb='meta',Bb='mobile',zb='mobile.user.agent',Cb='mobilesafari',cb='moduleRequested',bb='moduleStartup',Hb='msie',fb='name',Db='none',Fb='opera',Q='position:absolute; width:0; height:0; border:none; left: -1000px;',Gb='safari',_='script',Ob='selectingPermutation',L='startup',W='undefined',Nb='unknown',Eb='user.agent',K='webclient',Pb='webclient.devmode.js',wb='webclient.nocache.js',gb='webclient::',Ab='webkit';var o=window;var p=document;r(G,H);function q(){var a=o.location.search;return a.indexOf(I)!=-1||a.indexOf(J)!=-1}
function r(a,b){if(o.__gwtStatsEvent){o.__gwtStatsEvent({moduleName:K,sessionId:o.__gwtStatsSessionId,subSystem:L,evtGroup:a,millis:(new Date).getTime(),type:b})}}
webclient.__sendStats=r;webclient.__moduleName=K;webclient.__errFn=null;webclient.__moduleBase=M;webclient.__softPermutationId=0;webclient.__computePropValue=null;webclient.__getPropMap=null;webclient.__gwtInstallCode=function(){};webclient.__gwtStartLoadingFragment=function(){return null};var s=function(){return false};var t=function(){return null};__propertyErrorFunction=null;var u=o.__gwt_activeModules=o.__gwt_activeModules||{};u[K]={moduleName:K};var v;function w(){y();return v}
function x(){y();return v.getElementsByTagName(N)[0]}
function y(){if(v){return}var a=p.createElement(O);a.src=P;a.id=K;a.style.cssText=Q+R;a.tabIndex=-1;p.body.appendChild(a);v=a.contentDocument;if(!v){v=a.contentWindow.document}v.open();var b=document.compatMode==S?T:U;v.write(b+V);v.close()}
function z(k){function l(a){function b(){if(typeof p.readyState==W){return typeof p.body!=W&&p.body!=null}return /loaded|complete/.test(p.readyState)}
var c=b();if(c){a();return}function d(){if(!c){c=true;a();if(p.removeEventListener){p.removeEventListener(X,d,false)}if(e){clearInterval(e)}}}
if(p.addEventListener){p.addEventListener(X,d,false)}var e=setInterval(function(){if(b()){d()}},50)}
function m(c){function d(a,b){a.removeChild(b)}
var e=x();var f=w();var g;if(navigator.userAgent.indexOf(Y)>-1&&window.JSON){var h=f.createDocumentFragment();h.appendChild(f.createTextNode(Z));for(var i=0;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(f.createTextNode(j.substring(1,j.length-1)))}h.appendChild(f.createTextNode($));g=f.createElement(_);g.language=ab;g.appendChild(h);e.appendChild(g);d(e,g)}else{for(var i=0;i<c.length;i++){g=f.createElement(_);g.language=ab;g.text=c[i];e.appendChild(g);d(e,g)}}}
webclient.onScriptDownloaded=function(a){l(function(){m(a)})};r(bb,cb);var n=p.createElement(_);n.src=k;p.getElementsByTagName(db)[0].appendChild(n)}
webclient.__startLoadingFragment=function(a){return C(a)};webclient.__installRunAsyncCode=function(a){var b=x();var c=w().createElement(_);c.language=ab;c.text=a;b.appendChild(c);b.removeChild(c)};function A(){var c={};var d;var e;var f=p.getElementsByTagName(eb);for(var g=0,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(fb),k;if(j){j=j.replace(gb,U);if(j.indexOf(hb)>=0){continue}if(j==ib){k=i.getAttribute(jb);if(k){var l,m=k.indexOf(kb);if(m>=0){j=k.substring(0,m);l=k.substring(m+1)}else{j=k;l=U}c[j]=l}}else if(j==lb){k=i.getAttribute(jb);if(k){try{d=eval(k)}catch(a){alert(mb+k+nb)}}}else if(j==ob){k=i.getAttribute(jb);if(k){try{e=eval(k)}catch(a){alert(mb+k+pb)}}}}}t=function(a){var b=c[a];return b==null?null:b};__propertyErrorFunction=d;webclient.__errFn=e}
function B(){function e(a){var b=a.lastIndexOf(qb);if(b==-1){b=a.length}var c=a.indexOf(rb);if(c==-1){c=a.length}var d=a.lastIndexOf(sb,Math.min(c,b));return d>=0?a.substring(0,d+1):U}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=p.createElement(tb);b.src=a+ub;a=e(b.src)}return a}
function g(){var a=t(vb);if(a!=null){return a}return U}
function h(){var a=p.getElementsByTagName(_);for(var b=0;b<a.length;++b){if(a[b].src.indexOf(wb)!=-1){return e(a[b].src)}}return U}
function i(){var a=p.getElementsByTagName(xb);if(a.length>0){return a[a.length-1].href}return U}
function j(){var a=p.location;return a.href==a.protocol+yb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==U){k=h()}if(k==U){k=i()}if(k==U&&j()){k=e(p.location.href)}k=f(k);return k}
function C(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return webclient.__moduleBase+a}
function D(){var f=[];var g;function h(a,b){var c=f;for(var d=0,e=a.length-1;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var i=[];var j=[];function k(a){var b=j[a](),c=i[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(__propertyErrorFunc){__propertyErrorFunc(a,d,b)}throw null}
j[zb]=function(){var a=navigator.userAgent.toLowerCase();if(a.indexOf(Ab)>=0&&a.indexOf(Bb)>=0){return Cb}return Db};i[zb]={mobilesafari:0,none:1};j[Eb]=function(){var b=navigator.userAgent.toLowerCase();var c=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(function(){return b.indexOf(Fb)!=-1}())return Fb;if(function(){return b.indexOf(Ab)!=-1}())return Gb;if(function(){return b.indexOf(Hb)!=-1&&p.documentMode>=9}())return Ib;if(function(){return b.indexOf(Hb)!=-1&&p.documentMode>=8}())return Jb;if(function(){var a=/msie ([0-9]+)\.([0-9]+)/.exec(b);if(a&&a.length==3)return c(a)>=6000}())return Kb;if(function(){return b.indexOf(Lb)!=-1}())return Mb;return Nb};i[Eb]={gecko1_8:0,ie6:1,ie8:2,ie9:3,opera:4,safari:5};s=function(a,b){return b in i[a]};webclient.__getPropMap=function(){var a={};for(var b in i){if(i.hasOwnProperty(b)){a[b]=k(b)}}return a};webclient.__computePropValue=k;o.__gwt_activeModules[K].bindings=webclient.__getPropMap;r(G,Ob);if(q()){return C(Pb)}var l;try{h([Db,Ib],Qb);h([Db,Fb],Rb);h([Db,Kb],Sb);h([Db,Jb],Tb);h([Db,Mb],Ub);h([Cb,Gb],Vb);h([Db,Gb],Vb);h([Cb,Gb],Vb+Wb);h([Db,Gb],Vb+Wb);l=f[k(zb)][k(Eb)];var m=l.indexOf(Xb);if(m!=-1){g=parseInt(l.substring(m+1),10);l=l.substring(0,m)}}catch(a){}webclient.__softPermutationId=g;return C(l+Yb)}
function E(){if(!o.__gwt_stylesLoaded){o.__gwt_stylesLoaded={}}r(Zb,H);r(Zb,$b)}
A();webclient.__moduleBase=B();u[K].moduleBase=webclient.__moduleBase;var F=D();E();r(G,$b);z(F);return true}
webclient.succeeded=webclient();