(()=>{var m={disqus:{shortname:"hugo-minima"},enable:!0,giscus:{category:"Announcements",categoryid:"DIC_kwDONvnTic4CmaIS",inputposition:"buttom",mapping:"pathname",metadata:!1,reactions:!0,repo:"tanwubin/tanwubin.github.io",repoid:"R_kgDONvnTiQ"},provider:"giscus",utterances:{issueterm:"pathname",label:"comment",repo:"tanwubin/tanwubin.github.io"}},u="system";var o=["\u{1F31A}","\u{1F31D}"];var _=m.provider,l=u,h=o[1],d=o[0],n=l==="system"?"light":l,v="dark",a,s,i;function p(e){a||(a=document.getElementById(e)),a.innerHTML=localStorage.theme===n?h:d,a.addEventListener("click",y)}function y(){let e=localStorage.getItem("theme"),t=e===n?v:n;switch(k(e,t),_){case"utterances":E(`github-${t}`);break;case"giscus":S(t);break;default:}}function k(e,t){let{classList:c}=document.documentElement,f=t===n?h:d;c.remove(e),c.add(t),localStorage.setItem("theme",t),a.innerHTML=f}function E(e){e!=="dark"&&(e="light"),s=s||document.querySelector("iframe.utterances-frame"),s&&s.contentWindow.postMessage({type:"set-theme",theme:e},"https://utteranc.es")}function S(e){e!=="dark"&&(e="light_protanopia"),i=i||document.querySelector("iframe.giscus-frame"),i&&i.contentWindow.postMessage({giscus:{setConfig:{theme:e}}},"https://giscus.app")}var g=!0;function b(){g||(document.documentElement.style="user-select:none")}p("theme-switch");b();})();
