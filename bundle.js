(()=>{var e={606:()=>{window.onload=function(){o(),s()};var e=document.getElementById("textarea"),t=document.querySelectorAll("input"),a=document.querySelector(".light-mode"),s=function(){var e=document.createElement("span");e.classList.add("indicator"),document.querySelector("[data-attr='CapsLock']").after(e)},o=function(){for(var a=function(a){t[a].addEventListener("click",(function(){e.focus();var s,o,c,l=e.selectionStart;switch(t[a].dataset.attr){case"Backspace":0!==e.selectionStart?e.selectionStart===e.selectionEnd?(e.value=e.value.slice(0,l-1)+e.value.slice(l),e.selectionStart=l-1,e.selectionEnd=e.selectionStart):(e.value=e.value.slice(0,e.selectionStart)+e.value.slice(e.selectionEnd),e.selectionStart=l,e.selectionEnd=e.selectionStart,l+=1):(e.value=e.value.slice(e.selectionEnd),e.selectionStart=0,e.selectionEnd=e.selectionStart),l-=1;break;case"Tab":e.selectionStart===e.selectionEnd?(e.value="".concat(e.value.slice(0,l),"    ").concat(e.value.slice(l)),e.selectionStart=l+4,e.selectionEnd=e.selectionStart):(e.value="".concat(e.value.slice(0,l),"    ").concat(e.value.slice(e.selectionEnd)),e.selectionStart=l+4,e.selectionEnd=e.selectionStart);break;case"Delete":e.selectionStart===e.selectionEnd?(e.value=e.value.slice(0,l)+e.value.slice(l+1),e.selectionStart=l,e.selectionEnd=e.selectionStart):(e.value=e.value.slice(0,l)+e.value.slice(e.selectionEnd),e.selectionStart=l,e.selectionEnd=e.selectionStart);break;case"CapsLock":document.querySelector(".indicator").classList.toggle("key-up");break;case"ControlLeft":case"AltLeft":case"AltRight":case"ControlRight":case"ShiftLeft":case"ShiftRight":break;case"MetaLeft":alert("The browser has limited access outside of itself for security reasons!");break;case"Enter":e.selectionStart===e.selectionEnd?(e.value="".concat(e.value.slice(0,l),"\n").concat(e.value.slice(l)),e.selectionStart=l+1,e.selectionEnd=e.selectionStart):(e.value="".concat(e.value.slice(0,l),"\n").concat(e.value.slice(e.selectionEnd)),e.selectionStart=l+1,e.selectionEnd=e.selectionStart);break;case"Space":e.value+=" ";break;case"ArrowUp":for(var y=e.selectionStart-1;y>0;y-=1)if("\n"===e.value[y]){for(var r=y+1;r<e.value.length;r+=1){if("\n"===e.value[r]){c=r-y;break}c=e.value.length-y}(s=(s=e.value.slice(0,y).split("\n"))[s.length-1].length)<c&&e.selectionStart-s>y?(e.selectionStart-=e.selectionStart-y,e.selectionEnd=e.selectionStart):(e.selectionStart-=s+1,e.selectionEnd=e.selectionStart);break}break;case"ArrowLeft":0!==e.selectionStart&&(e.selectionStart-=1,e.selectionEnd=e.selectionStart);break;case"ArrowRight":e.selectionStart+=1;break;case"ArrowDown":for(var k=e.selectionStart;k<e.value.length;k+=1)if("\n"===e.value[k]){for(var n=k-1;n>0;n-=1){if("\n"===e.value[n]){c=k-n;break}c=k+1}(o=e.value.slice(k+1).replace(/[\n].*/g,"").length)<c&&e.selectionStart+c>k+o?e.selectionStart+=k-e.selectionStart+o+1:e.selectionStart+=c;break}break;default:e.selectionStart===e.selectionEnd?(document.querySelector(".indicator").classList.contains("active")?e.value=e.value.slice(0,l)+t[a].value.toUpperCase()+e.value.slice(l):e.value=e.value.slice(0,l)+t[a].value+e.value.slice(l),e.selectionStart=l+1,e.selectionEnd=e.selectionStart):(document.querySelector(".indicator").classList.contains("active")?e.value=e.value.slice(0,e.selectionStart)+t[a].value.toUpperCase()+e.value.slice(e.selectionEnd):e.value=e.value.slice(0,e.selectionStart)+t[a].value+e.value.slice(e.selectionEnd),e.selectionStart=l+1,e.selectionEnd=e.selectionStart)}}))},s=0;s<t.length;s++)a(s)};document.addEventListener("keydown",(function(t){e.focus();var a=e.selectionStart;switch(console.log(t.code),document.querySelector('[data-attr="'.concat(t.code,'"]')).classList.add("active"),setTimeout((function(){document.querySelector('[data-attr="'.concat(t.code,'"]')).classList.remove("active")}),300),t.code){case"Tab":e.selectionStart===e.selectionEnd?(e.value="".concat(e.value.slice(0,a),"    ").concat(e.value.slice(a)),e.selectionStart=a+4,e.selectionEnd=e.selectionStart):(e.value="".concat(e.value.slice(0,a),"    ").concat(e.value.slice(e.selectionEnd)),e.selectionStart=a+4,e.selectionEnd=e.selectionStart),t.preventDefault();break;case"CapsLock":case"AltLeft":document.querySelector(".indicator").classList.toggle("key-up");break;default:console.log(t.code)}})),document.onkeydown=function(e){"ControlLeft"==e.code&&(document.onkeyup=function(e){"AltLeft"==e.code&&(console.log("lang swith"),e.preventDefault())})},a.addEventListener("click",(function(){for(var e=0;e<t.length;e++)t[e].classList.toggle("key-light")}))}},t={};function a(s){var o=t[s];if(void 0!==o)return o.exports;var c=t[s]={exports:{}};return e[s](c,c.exports,a),c.exports}(()=>{"use strict";const e=JSON.parse('[[{"key":"`","keyCode":192,"code":"Backquote","classes":"keyboard__key"},{"key":"1","keyCode":49,"code":"Digit1","classes":"keyboard__key"},{"key":"2","keyCode":50,"code":"Digit2","classes":"keyboard__key"},{"key":"3","keyCode":51,"code":"Digit3","classes":"keyboard__key"},{"key":"4","keyCode":52,"code":"Digit4","classes":"keyboard__key"},{"key":"5","keyCode":53,"code":"Digit5","classes":"keyboard__key"},{"key":"6","keyCode":54,"code":"Digit6","classes":"keyboard__key"},{"key":"7","keyCode":55,"code":"Digit7","classes":"keyboard__key"},{"key":"8","keyCode":56,"code":"Digit8","classes":"keyboard__key"},{"key":"9","keyCode":57,"code":"Digit9","classes":"keyboard__key"},{"key":"0","keyCode":48,"code":"Digit0","classes":"keyboard__key"},{"key":"-","keyCode":109,"code":"Minus","classes":"keyboard__key"},{"key":"=","keyCode":61,"code":"Equal","classes":"keyboard__key"},{"key":"Backspace","keyCode":8,"code":"Backspace","classes":["keyboard__key","backspace","option-key","icon-before"]}],[{"key":"Tab","keyCode":9,"code":"Tab","classes":["keyboard__key","tab","option-key","icon-before"]},{"key":"q","keyCode":81,"code":"KeyQ","classes":"keyboard__key"},{"key":"w","keyCode":87,"code":"KeyW","classes":"keyboard__key"},{"key":"e","keyCode":69,"code":"KeyE","classes":"keyboard__key"},{"key":"r","keyCode":82,"code":"KeyR","classes":"keyboard__key"},{"key":"t","keyCode":84,"code":"KeyT","classes":"keyboard__key"},{"key":"y","keyCode":89,"code":"KeyY","classes":"keyboard__key"},{"key":"u","keyCode":85,"code":"KeyU","classes":"keyboard__key"},{"key":"i","keyCode":73,"code":"KeyI","classes":"keyboard__key"},{"key":"o","keyCode":79,"code":"KeyO","classes":"keyboard__key"},{"key":"p","keyCode":80,"code":"KeyP","classes":"keyboard__key"},{"key":"[","keyCode":160,"code":"BracketLeft","location":0,"altKey":false,"ctrlKey":false,"metaKey":false,"shiftKey":false,"description":"^","classes":"keyboard__key"},{"key":"]","keyCode":221,"code":"BracketRight","classes":"keyboard__key"},{"key":"\\\\","keyCode":220,"code":"Backslash","classes":"keyboard__key"},{"key":"Delete","keyCode":46,"code":"Delete","altKey":false,"ctrlKey":false,"metaKey":false,"shiftKey":false,"classes":["keyboard__key","delete","option-key"]}],[{"key":"CapsLock","keyCode":20,"code":"CapsLock","classes":["keyboard__key","capslock","option-key"]},{"key":"a","keyCode":65,"code":"KeyA","classes":"keyboard__key"},{"key":"s","keyCode":83,"code":"KeyS","classes":"keyboard__key"},{"key":"d","keyCode":68,"code":"KeyD","classes":"keyboard__key"},{"key":"f","keyCode":70,"code":"KeyF","classes":"keyboard__key"},{"key":"g","keyCode":71,"code":"KeyG","classes":"keyboard__key"},{"key":"h","keyCode":72,"code":"KeyH","classes":"keyboard__key"},{"key":"j","keyCode":74,"code":"KeyJ","classes":"keyboard__key"},{"key":"k","keyCode":75,"code":"KeyK","altKey":true,"ctrlKey":false,"metaKey":true,"shiftKey":false,"classes":"keyboard__key"},{"key":"l","keyCode":76,"code":"KeyL","altKey":true,"ctrlKey":false,"metaKey":true,"shiftKey":false,"classes":"keyboard__key"},{"key":";","keyCode":59,"code":"Semicolon","classes":"keyboard__key"},{"key":"\'","keyCode":222,"code":"Quote","classes":"keyboard__key"},{"key":"Enter","keyCode":13,"code":"Enter","classes":["keyboard__key","enter","option-key","icon-before"]}],[{"key":"Shift","keyCode":16,"code":"ShiftLeft","classes":["keyboard__key","shift-left","option-key","icon-before"]},{"key":"z","keyCode":90,"code":"KeyZ","classes":"keyboard__key"},{"key":"x","keyCode":88,"code":"KeyX","classes":"keyboard__key"},{"key":"c","keyCode":67,"code":"KeyC","classes":"keyboard__key"},{"key":"v","keyCode":86,"code":"KeyV","classes":"keyboard__key"},{"key":"b","keyCode":66,"code":"KeyB","classes":"keyboard__key"},{"key":"n","keyCode":78,"code":"KeyN","classes":"keyboard__key"},{"key":"m","keyCode":77,"code":"KeyM","classes":"keyboard__key"},{"key":",","keyCode":108,"code":"Comma","location":3,"altKey":false,"ctrlKey":false,"metaKey":false,"shiftKey":false,"classes":"keyboard__key"},{"key":".","keyCode":190,"code":"Period","classes":"keyboard__key"},{"key":"/","keyCode":191,"code":"Slash","classes":"keyboard__key"},{"key":"","keyCode":38,"code":"ArrowUp","altKey":false,"ctrlKey":false,"metaKey":false,"shiftKey":false,"repeat":false,"classes":["keyboard__key","arrow-up","option-key","icon-bg"]},{"key":"Shift","keyCode":16,"code":"ShiftRight","classes":["keyboard__key","shift-right","option-key","icon-before"]}],[{"key":"Ctrl","keyCode":17,"code":"ControlLeft","altKey":true,"ctrlKey":false,"metaKey":true,"shiftKey":true,"classes":["keyboard__key","ctrl-left","option-key"]},{"key":"","keyCode":21,"code":"LightMode","classes":["keyboard__key","light-mode","option-key"]},{"key":"Alt","keyCode":18,"code":"AltLeft","altKey":true,"ctrlKey":false,"metaKey":true,"shiftKey":false,"classes":["keyboard__key","alt-left","option-key"]},{"key":" ","keyCode":32,"which":32,"code":"Space","location":0,"altKey":false,"ctrlKey":false,"metaKey":false,"shiftKey":false,"repeat":false,"classes":["keyboard__key","space","option-key","icon-bg"]},{"key":"\\\\","keyCode":220,"code":"IntlBackslash","classes":["keyboard__key","backslash","option-key"]},{"key":"","keyCode":91,"code":"MetaLeft","altKey":false,"ctrlKey":false,"metaKey":false,"shiftKey":false,"repeat":false,"classes":["keyboard__key","windows","option-key"]},{"key":"","keyCode":37,"code":"ArrowLeft","altKey":false,"ctrlKey":false,"metaKey":false,"shiftKey":false,"repeat":false,"classes":["keyboard__key","arrow-left","option-key","icon-bg"]},{"key":"","keyCode":40,"code":"ArrowDown","altKey":false,"ctrlKey":false,"metaKey":false,"shiftKey":false,"repeat":false,"classes":["keyboard__key","arrow-down","option-key","icon-bg"]},{"key":"","keyCode":39,"code":"ArrowRight","altKey":false,"ctrlKey":false,"metaKey":false,"shiftKey":false,"repeat":false,"classes":["keyboard__key","arrow-right","option-key","icon-bg"]},{"key":"AltGr","keyCode":18,"code":"AltRight","altKey":false,"ctrlKey":false,"metaKey":false,"shiftKey":false,"repeat":false,"classes":["keyboard__key","alt-right","option-key"]},{"key":"Ctrl","which":17,"code":"ControlRight","altKey":true,"ctrlKey":false,"metaKey":true,"shiftKey":true,"classes":["keyboard__key","ctrl-right","option-key"]}]]');function t(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var s=function(){function e(t){var a=t.key,s=t.keyCode,o=t.code,c=t.classes;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.key=a,this.keyCode=s,this.code=o,this.classes=c}var a,s,o;return a=e,(s=[{key:"generateKey",value:function(){var e=document.createElement("input");return Array.isArray(this.classes)?this.classes.forEach((function(t){e.classList.add(t)})):e.classList.add(this.classes),e.setAttribute("type","button"),e.setAttribute("value",this.key),e.dataset.attr=this.code,e}}])&&t(a.prototype,s),o&&t(a,o),Object.defineProperty(a,"prototype",{writable:!1}),e}();!function(){for(var t=function(t){var a=document.createElement("div");a.classList.add("keyboard__keys_row"),e[t].forEach((function(e){a.append(new s(e).generateKey())})),document.querySelector(".keyboard__keys").append(a)},a=0;a<e.length;a++)t(a)}();a(606)})()})();