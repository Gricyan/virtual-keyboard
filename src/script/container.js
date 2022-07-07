import keys from "./keys.json";
import keysRu from "./keysRu.json";
import { Keyboard } from "./Keyboard.js";


// Init Keyboard

const keyboardContainer = document.querySelector(".keyboard__keys");
const keyboard = new Keyboard();    
keyboard.generateKeyboardRow(keys).forEach(row => keyboardContainer.append(row));


// Start handling

const textarea = document.querySelector(".textarea");
const keyBtns = document.querySelectorAll("input");
const LightMode = document.querySelector(".light-mode");

window.onload = function(){
  addBtnsClickHandler();  
  showLetters(localStorage.getItem("lang"), localStorage.getItem("caps"));
  textarea.focus();    
};


// Set default language to localStorage

let currentLang = "en";

if (localStorage.getItem("lang") == null) {  
  localStorage.setItem("lang", currentLang);  
} else if (localStorage.getItem("lang") == "ru") {
  currentLang = "ru";
}


// Create indicator for CapsLock indicator

const createCapsLockIndicator = () => {
  const capsLockIndicator = document.createElement("span");
  capsLockIndicator.classList.add("indicator");
  document.querySelector("[data-attr='CapsLock']").after(capsLockIndicator);
};
createCapsLockIndicator(); 


// Check CapsLock in localStorage

if (localStorage.getItem("caps") == null) {  
  localStorage.setItem("caps", "lowerCase"); 
  document.querySelector(".indicator").classList.remove("key-up"); 
} else if (localStorage.getItem("caps") == "upperCase") {
  document.querySelector(".indicator").classList.add("key-up");
}


// Show characters

const showLetters = (currentLang, whatCase) => {
  if (currentLang === "ru") {
    for (let i = 0, k = 0; i < keysRu.length; i++) { 
      for (let j = 0; j < keysRu[i].length; j++) {
        if (RegExp(/^\p{L}/,"u").test(keysRu[i][j].key) && (keysRu[i][j].key).length === 1 && whatCase === "upperCase") {
          keyBtns[k].value = (keysRu[i][j].key).toUpperCase();
        } else {
          keyBtns[k].value = (keysRu[i][j].key);
        }      
        k++;
      }
    }
  } else if (currentLang === "en") {
    for (let i = 0, k = 0; i < keys.length; i++) { 
      for (let j = 0; j < keys[i].length; j++) {
        if (RegExp(/^\p{L}/,"u").test(keys[i][j].key) && (keys[i][j].key).length === 1 && whatCase === "upperCase") {
          keyBtns[k].value = (keys[i][j].key).toUpperCase();
        } else {
          keyBtns[k].value = (keys[i][j].key);
        }      
        k++;
      }
    }
  }
};


// Auto set to CapsLock mode

const autoSetToCapsLock = (event) => {
  if (event.getModifierState("CapsLock") && !(document.querySelector(".indicator").classList.contains("key-up"))) {
    document.querySelector(".indicator").classList.add("key-up");
    localStorage.setItem("caps", "upperCase");
    showLetters(localStorage.getItem("lang"), localStorage.getItem("caps")); 
    
    document.querySelector(".caps-lock-info").classList.add("show");
    setTimeout(() => { 
      document.querySelector(".caps-lock-info").classList.remove("show");
    }, 7000);
  } 
};


// Click handling

const addBtnsClickHandler = () => {
for (let i = 0; i < keyBtns.length; i++) {
    keyBtns[i].addEventListener("click", () => {  
    textarea.focus();
    let cursorPosition = textarea.selectionStart;  

   let previousText; 
   let nextText; 
   let caret;  

    switch (keyBtns[i].dataset.attr) {
      case "Backspace":
        if (textarea.selectionStart !== 0) {
          if (textarea.selectionStart === textarea.selectionEnd) {
            textarea.value = textarea.value.slice(0, cursorPosition - 1) + textarea.value.slice(cursorPosition);
            textarea.selectionStart = cursorPosition - 1;
            textarea.selectionEnd = textarea.selectionStart;
          } else {
            textarea.value = textarea.value.slice(0, textarea.selectionStart) + textarea.value.slice(textarea.selectionEnd);
            textarea.selectionStart = cursorPosition;
            textarea.selectionEnd = textarea.selectionStart;
            cursorPosition += 1;
          }
        } else {
          textarea.value = textarea.value.slice(textarea.selectionEnd);
          textarea.selectionStart = 0;
          textarea.selectionEnd = textarea.selectionStart;
        }
        cursorPosition -= 1;
        break; 

      case "Tab":
        if (textarea.selectionStart === textarea.selectionEnd) {
          textarea.value = `${textarea.value.slice(0, cursorPosition)}    ${textarea.value.slice(cursorPosition)}`;
          textarea.selectionStart = cursorPosition + 4;
          textarea.selectionEnd = textarea.selectionStart;
        } else {
          textarea.value = `${textarea.value.slice(0, cursorPosition)}    ${textarea.value.slice(textarea.selectionEnd)}`;
          textarea.selectionStart = cursorPosition + 4;
          textarea.selectionEnd = textarea.selectionStart;
        }
        break;

      case "Delete":
        if (textarea.selectionStart === textarea.selectionEnd) {
          textarea.value = textarea.value.slice(0, cursorPosition) + textarea.value.slice(cursorPosition + 1);
          textarea.selectionStart = cursorPosition;
          textarea.selectionEnd = textarea.selectionStart;
        } else {
          textarea.value = textarea.value.slice(0, cursorPosition) + textarea.value.slice(textarea.selectionEnd);
          textarea.selectionStart = cursorPosition;
          textarea.selectionEnd = textarea.selectionStart;
        }
        break;

      case "CapsLock":       
        if (document.querySelector(".indicator").classList.contains("key-up")) {
          document.querySelector(".indicator").classList.remove("key-up");
          localStorage.setItem("caps", "lowerCase");
          showLetters(localStorage.getItem("lang"), localStorage.getItem("caps"));
        } else {
          document.querySelector(".indicator").classList.add("key-up");
          localStorage.setItem("caps", "upperCase");
          showLetters(localStorage.getItem("lang"), localStorage.getItem("caps"));        
        } 
      break;
      
      case "ControlLeft":  
      case "AltLeft": 
      case "AltRight": 
      case "ControlRight": 
        break;

      case "MetaLeft":
        alert(`You use ${navigator.platform} platform`); 
        break; 

      case "Enter":       
      if (textarea.selectionStart === textarea.selectionEnd) {
        textarea.value = `${textarea.value.slice(0, cursorPosition)}\n${textarea.value.slice(cursorPosition)}`;
        textarea.selectionStart = cursorPosition + 1;
        textarea.selectionEnd = textarea.selectionStart;
      } else {
        textarea.value = `${textarea.value.slice(0, cursorPosition)}\n${textarea.value.slice(textarea.selectionEnd)}`;
        textarea.selectionStart = cursorPosition + 1;
        textarea.selectionEnd = textarea.selectionStart;
      }
        break;

      case "ShiftLeft":
      case "ShiftRight":
        break;    

      case "Space":
        if (textarea.selectionStart === textarea.selectionEnd) {
          textarea.value = `${textarea.value.slice(0, cursorPosition)} ${textarea.value.slice(cursorPosition)}`;
          textarea.selectionStart = cursorPosition + 1;
          textarea.selectionEnd = textarea.selectionStart;
        } else {
          textarea.value = `${textarea.value.slice(0, cursorPosition)} ${textarea.value.slice(textarea.selectionEnd)}`;
          textarea.selectionStart = cursorPosition + 1;
          textarea.selectionEnd = textarea.selectionStart;
        }
        break;

      case "ArrowUp":        
        for (let i = textarea.selectionStart - 1; i > 0; i -= 1) {
          if (textarea.value[i] === "\n") {
            for (let j = i + 1; j < textarea.value.length; j += 1) {
              if (textarea.value[j] === "\n") {
                caret = j - i;
                break;
              } else {
                caret = textarea.value.length - i;
              }
            }
            previousText = textarea.value.slice(0, i).split("\n");
            previousText = previousText[previousText.length - 1].length;
            if (previousText < caret && textarea.selectionStart - previousText > i) {
              textarea.selectionStart -= textarea.selectionStart - i;
              textarea.selectionEnd = textarea.selectionStart;
            } else {
              textarea.selectionStart -= previousText + 1;
              textarea.selectionEnd = textarea.selectionStart;
            }
            break;
          }
        }
        break;
  
      case "ArrowLeft":        
        if (textarea.selectionStart !== 0) {
          textarea.selectionStart -= 1;
          textarea.selectionEnd = textarea.selectionStart;
        }
        break;
  
      case "ArrowRight":        
        textarea.selectionStart += 1; 
        break; 

      case "ArrowDown":        
        for (let i = textarea.selectionStart; i < textarea.value.length; i += 1) {
          if (textarea.value[i] === "\n") {
            for (let j = i - 1; j > 0; j -= 1) {
              if (textarea.value[j] === "\n") {
                caret = i - j;
                break;
              } else {
                caret = i + 1;
              }
            }
            nextText = textarea.value.slice(i + 1).replace(/[\n].*/g, "").length;
            if (nextText < caret && textarea.selectionStart + caret > i + nextText) {
              textarea.selectionStart += i - textarea.selectionStart + nextText + 1;
            } else {
              textarea.selectionStart += caret;
            }
            break;
          }
        }
        break;          

      default:
        if (textarea.selectionStart === textarea.selectionEnd) {
          if (document.querySelector(".indicator").classList.contains("key-up")) {
            textarea.value = textarea.value.slice(0, cursorPosition) + (keyBtns[i].value).toUpperCase() + textarea.value.slice(cursorPosition);
          } else {
            textarea.value = textarea.value.slice(0, cursorPosition) + (keyBtns[i].value) + textarea.value.slice(cursorPosition);
          }
          textarea.selectionStart = cursorPosition + 1;
          textarea.selectionEnd = textarea.selectionStart;
        } else {
          if (document.querySelector(".indicator").classList.contains("key-up")) {
            textarea.value = textarea.value.slice(0, textarea.selectionStart) + keyBtns[i].value.toUpperCase() + textarea.value.slice(textarea.selectionEnd);
          } else {
            textarea.value = textarea.value.slice(0, textarea.selectionStart) + keyBtns[i].value + textarea.value.slice(textarea.selectionEnd);
          }
          textarea.selectionStart = cursorPosition + 1;
          textarea.selectionEnd = textarea.selectionStart;
        }        
    }    
  });
  }
};


// Keydown handling

document.addEventListener("keydown", (event) => {
  textarea.focus();
  let cursorPosition = textarea.selectionStart;

  document.querySelector(`[data-attr="${event.code}"]`).classList.add("active");
  setTimeout(() => { 
    document.querySelector(`[data-attr="${event.code}"]`).classList.remove("active");
  }, 300); 

  switch (event.code) {
    case "Tab":
      if (textarea.selectionStart === textarea.selectionEnd) {
        textarea.value = `${textarea.value.slice(0, cursorPosition)}    ${textarea.value.slice(cursorPosition)}`;
        textarea.selectionStart = cursorPosition + 4;
        textarea.selectionEnd = textarea.selectionStart;
      } else {
        textarea.value = `${textarea.value.slice(0, cursorPosition)}    ${textarea.value.slice(textarea.selectionEnd)}`;
        textarea.selectionStart = cursorPosition + 4;
        textarea.selectionEnd = textarea.selectionStart;
      }
      event.preventDefault();
      break;

    case "Backspace":
    case "Enter":
    case "ShiftLeft":
    case "ShiftRight":
    case "AltRight":  
    case "ControlLeft":     
    case "ControlRight": 
    case "ArrowUp": 
    case "ArrowLeft":
    case "ArrowRight":
    case "ArrowDown":
    case "Delete":
      break;  

    case "CapsLock":


      if (document.querySelector(".indicator").classList.contains("key-up")) {
        document.querySelector(".indicator").classList.remove("key-up");
        localStorage.setItem("caps", "lowerCase");
        showLetters(localStorage.getItem("lang"), localStorage.getItem("caps"));
        
      } else {
        document.querySelector(".indicator").classList.add("key-up");
        localStorage.setItem("caps", "upperCase");
        showLetters(localStorage.getItem("lang"), localStorage.getItem("caps"));        
      } 
    break;  

    case "AltLeft": 
    event.preventDefault();
      break;

    default: 
    if (localStorage.getItem("lang", "en")) {     
      showLetters(localStorage.getItem("lang"), localStorage.getItem("caps"));  
    } else {
      showLetters(localStorage.getItem("lang"), localStorage.getItem("caps"));       
    }

    autoSetToCapsLock(event);    

    if (textarea.selectionStart === textarea.selectionEnd) {
      if (event.getModifierState("CapsLock")) {
        textarea.value = textarea.value.slice(0, cursorPosition) + document.querySelector(`[data-attr="${event.code}"]`).value + textarea.value.slice(cursorPosition);
      } else {
        textarea.value = textarea.value.slice(0, cursorPosition) + document.querySelector(`[data-attr="${event.code}"]`).value + textarea.value.slice(cursorPosition);
      }
      textarea.selectionStart = cursorPosition + 1;
      textarea.selectionEnd = textarea.selectionStart;
    }

    event.preventDefault();     
  }
});


// // Language switcher

document.onkeydown = (event) => {
  if (event.code == "ControlLeft") {
    document.onkeyup = (event) => {
      if (event.code == "AltLeft") { 
        if (localStorage.getItem("lang") == "en") {
          localStorage.removeItem("lang", "en");

          localStorage.setItem("lang", "ru"); 
          currentLang = "ru";
              
        } else if (localStorage.getItem("lang") == "ru") {
          localStorage.removeItem("lang", "ru");
          localStorage.setItem("lang", "en");
          currentLang = "en";
        }

        if (localStorage.getItem("caps") == "upperCase") {
          document.querySelector(".indicator").classList.add("key-up");
        }
        showLetters(localStorage.getItem("lang"), localStorage.getItem("caps"));
        event.preventDefault();
      }
    };
  }
};


// Light mode for keys

LightMode.addEventListener("click", () => {  
  for (let i = 0; i < keyBtns.length; i++) {
    keyBtns[i].classList.toggle("key-light");
  }
  textarea.selectionStart = textarea.selectionStart - 1;
  textarea.selectionEnd = textarea.selectionStart;
});