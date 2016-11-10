// ==UserScript==
// @name         KissAnime in VLC
// @version      0.1
// @description  Open KissAnime direct link in VLC
// @author       asdaa
// @namespace    asdaa
// @license      WTFPl
// @updateURL    https://github.com/asdaa0/msgrelay/raw/gh-pages/KAVLC.user.js
// @include      *
// @run-at       document-start
// @grant        none
// ==/UserScript==

window.addEventListener ("DOMContentLoaded", function() {
    console.log ("In GM script, local global, after ready: ", unsafeWindow.link);
    if (unsafeWindow.link === undefined) {
        unsafeWindow.link = document.querySelector('.clsTempMSg').childNodes[2].childNodes[1];
        unsafeWindow.link.href = "vlcweb:///" + unsafeWindow.link.href;
    }
}, false);
