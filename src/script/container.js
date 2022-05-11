window.onload = function(){
  addBtnsClickHangler();
  createCapsLockIndicator(); 
};

let textarea = document.getElementById("textarea");
let keyBtns = document.querySelectorAll("input");


const createCapsLockIndicator = () => {
  const capsLockIndicator = document.createElement("span");
  capsLockIndicator.classList.add("indicator");
  document.querySelector("[data-attr='CapsLock']").after(capsLockIndicator);
};


const addBtnsClickHangler = () => {
for (let i = 0; i < keyBtns.length; i++) {
  keyBtns[i].addEventListener("click", () => {  
    textarea.focus();
    let cursorPosition = textarea.selectionStart;
   // console.log("keyBtns[i]: ", keyBtns[i].dataset.attr);
   // console.log("event: ", event);




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
        document.querySelector(".indicator").classList.toggle("key-up");
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
       // console.log("keyBtns[i]: ", keyBtns[i].dataset.attr);
        break;

      case "Space":
        textarea.value += " ";
        break;

      default:
        if (textarea.selectionStart === textarea.selectionEnd) {
          if (document.querySelector(".indicator").classList.contains("active")) {
            textarea.value = textarea.value.slice(0, cursorPosition) + (keyBtns[i].value).toUpperCase() + textarea.value.slice(cursorPosition);
          } else {
            textarea.value = textarea.value.slice(0, cursorPosition) + (keyBtns[i].value) + textarea.value.slice(cursorPosition);
          }
          textarea.selectionStart = cursorPosition + 1;
          textarea.selectionEnd = textarea.selectionStart;
        } else {
          if (document.querySelector(".indicator").classList.contains("active")) {
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


document.addEventListener("keydown", (event) => {
  textarea.focus();
  let cursorPosition = textarea.selectionStart;

  console.log(event.code);

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

    case "CapsLock":
      document.querySelector(".indicator").classList.toggle("key-up");
      break;  

    default:
      console.log(event.code);
  }
});