// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// GIF-LINKS from https://github.com/tholman/giflinks
var GifLinks=function(){"use strict";function n(n,e){for(var t in e)t in n||(n[t]=e[t]);return n}function e(n,e){for(var t in e)n.style[t]=e[t]}function t(n,e){if(n.length)for(var t=0;t<n.length;t++)e===!0?i(n[t]):o(n[t]);else e===!0?i(n):o(n)}function i(n){var e=n.getAttribute("data-src");if(e){var t=new Image;t.onload=function(){n.className+=" preloaded",o(n)},t.src=e}}function o(n){n.addEventListener("mouseover",function(){c(this)},!1),n.addEventListener("touchstart",function(){c(this)},!1),n.addEventListener("mouseout",function(){d()},!1),n.addEventListener("touchmove",function(n){n.preventDefault(),d()},!1),n.addEventListener("click",function(){d()},!1),n.addEventListener("dblclick",function(){d()},!1),a(n)}function a(n){n.className+=" giflink ready",n.className+=n.href?" has-link":" no-link"}function r(){var n={backgroundPosition:"50% 50%",backgroundSize:"cover",pointerEvents:"none",position:"fixed",zIndex:"999999",display:"none",height:"100%",width:"100%",margin:"0px",left:"0px",top:"0px"};l=document.createElement("div"),e(l,n),u.appendChild(l)}function c(n){var e=n.getAttribute("data-src");e?(l.style.backgroundImage="url("+e+")",l.style.display="block"):console.log("Sorry, an element doesn't have a data-src!")}function d(){l.style.display="none",l.style.backgroundImage=""}function s(n,e){u=document.body,r();var i=!1;e&&e.preload&&(i=!!e.preload),t(n,i)}var u,l;return n(s,{})}();