// ==UserScript==
// @name         Family Farm Gift Link Generator
// @namespace    http://tampermonkey.net/
// @version      3.5
// @description  Generate gift links for Family Farm game with URL shortening and scheduling
// @author       Dr. Ahmed Khaled
// @match        https://drahmedkhaled.neocities.org/AKhaledlinks.jpg
// @updateURL    https://raw.githubusercontent.com/AhmedKhaled2132003/gene/main/KHLD-generatorlinks.user.js
// @downloadURL  https://raw.githubusercontent.com/AhmedKhaled2132003/gene/main/KHLD-generatorlinks.user.js
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_notification
// @grant        GM_setClipboard
// @connect      tinyurl.com
// @connect      farm-us.centurygames.com
// @connect      github.com
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @resource     NOTIFICATION_SOUND https://files.catbox.moe/hb2et0.mp3
// ==/UserScript==
(async function () {
    'use strict';

    // رابط ملف التحكم عن بُعد
    const controlURL = 'https://raw.githubusercontent.com/AhmedKhaled2132003/mmmm/refs/heads/main/xxxx.json';

    try {
        // جلب إعدادات التحكم من ملف JSON
        const response = await fetch(controlURL);
        const controlData = await response.json();

        // تحقق إذا كان السكربت معطلاً
        if (!controlData.enabled) {
            alert(controlData.message || 'تم تعطيل السكربت من قبل المطور.');
            return; // إيقاف تنفيذ السكربت
        }
    } catch (error) {
        console.error('فشل في جلب إعدادات التحكم:', error);
    }
