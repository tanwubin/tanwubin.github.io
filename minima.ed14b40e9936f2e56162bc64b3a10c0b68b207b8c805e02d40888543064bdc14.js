(()=>{var u={disqus:{shortname:"hugo-minima"},enable:!0,giscus:{category:"Announcements",categoryid:"DIC_kwDONvnTic4CmaIS",inputposition:"buttom",mapping:"pathname",metadata:!1,reactions:!0,repo:"tanwubin/tanwubin.github.io",repoid:"R_kgDONvnTiQ"},provider:"giscus",utterances:{issueterm:"pathname",label:"comment",repo:"tanwubin/tanwubin.github.io"}},l="light";var o=["\u{1F31A}","\u{1F31D}"];var y=u.provider,m=l,h=o[1],d=o[0],s=m==="system"?"light":m,v="dark",a,i,n;function p(e){a||(a=document.getElementById(e)),a.innerHTML=localStorage.theme===s?h:d,a.addEventListener("click",_)}function _(){let e=localStorage.getItem("theme"),t=e===s?v:s;switch(k(e,t),y){case"utterances":C(`github-${t}`);break;case"giscus":S(t);break;default:}}function k(e,t){let{classList:c}=document.documentElement,b=t===s?h:d;c.remove(e),c.add(t),localStorage.setItem("theme",t),a.innerHTML=b}function C(e){e!=="dark"&&(e="light"),i=i||document.querySelector("iframe.utterances-frame"),i&&i.contentWindow.postMessage({type:"set-theme",theme:e},"https://utteranc.es")}function S(e){e!=="dark"&&(e="light_protanopia"),n=n||document.querySelector("iframe.giscus-frame"),n&&n.contentWindow.postMessage({giscus:{setConfig:{theme:e}}},"https://giscus.app")}var g=!0;function f(){g||(document.documentElement.style="user-select:none")}p("theme-switch");f();})();
