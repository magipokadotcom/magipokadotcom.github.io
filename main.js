(function(){var e,n,t;$(function(){return n()&&$('<div id="content-overlay"></div>').appendTo($("#content")),$("#parking_form").on("submit",function(){var n;return n=$("#tsearch"),e(n.val()),n.val(""),!1})}),t={},e=function(e){var n,o,i,r,a,l,c,d,s,u,v;if(!e)return!1;for(n=$("#content-overlay"),0===n.length&&(n=$("#content")),r=n.width(),i=$('<span class="marquee">'+e+"</span>").css("left",r).appendTo(n),a=i.width(),v=(new Date).valueOf(),d=4e3,l=0,u=v+r*d/(r+a),i.data("reachingTime",u),s=0;;){if(o=t[s],!o||o.position().left+o.width()<r&&o.data("reachingTime")<u){i.css("top",""+s+"em"),t[s]=i;break}s++}return c=setInterval(function(){return l=(new Date).valueOf()-v,d>l?i.css("left",-(r+a)/d*l+r):(clearInterval(c),i.remove(),t[s]===i?t[s]=null:void 0)},50)},n=function(){var e,n;return e=document.createElement("span"),"pointerEvents"in e.style?(e.style.display="none",e.style.pointerEvents="none",e.style.pointerEvents="x",document.documentElement.appendChild(e),n="none"===("function"==typeof window.getComputedStyle?window.getComputedStyle(e,"").pointerEvents:void 0),document.documentElement.removeChild(e),n):!1}}).call(this);