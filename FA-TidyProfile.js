// ==UserScript==
// @name         FurAffinity-TidyProfile
// @namespace    FurAffinity
// @version      1.0
// @description  No more long profiles
// @author       JaysonHusky
// @match        *://www.furaffinity.net/user/*
// @grant        none
// @require https://code.jquery.com/jquery-3.1.0.js
// ==/UserScript==

(function() {
    'use strict';
    var ProfileSize = 480; // (Defines max amount of profile that should be shown, the rest is still DOM loaded but hidden by overflow)
    if ($('.userpage-profile-info').height() > ProfileSize) { // Check for height
    $('.userpage-profile-info').css('height',''+ProfileSize+'px'); // Set new height
        $('.userpage-profile-info').css('overflow-y','auto'); // Allow overflow of remaining content
}
})();