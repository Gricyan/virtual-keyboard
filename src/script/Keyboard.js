import keys from "./keys.json";


// //export 
class Key {
  constructor({ key, keyCode, code, classes}) {
      this.key = key;
      this.keyCode = keyCode;
      this.code = code;
      this.classes = classes;      
    }

    generateKey() {      
      let keyboardKey = document.createElement("input"); 

      if (Array.isArray(this.classes)) {
        this.classes.forEach(item => {          
          keyboardKey.classList.add(item);
        });     
      } else {
        keyboardKey.classList.add(this.classes);
      } 

      keyboardKey.setAttribute("type", "button");
      keyboardKey.setAttribute("value", this.key);
      // keyboardKey.innerHTML = this.key;
      keyboardKey.dataset.attr = this.code;
      return keyboardKey; 
    } 
}

// Create keyboard rows

for (let i = 0; i < keys.length; i++) {
  const keyboardRow = document.createElement("div"); 
  keyboardRow.classList.add("keyboard__keys_row");
  
  keys[i].forEach(keyItem => {
     keyboardRow.append(new Key(keyItem).generateKey()); 
    // console.log(keyItem.code);
  });
  
  const keyboardContainer = document.querySelector(".keyboard__keys");
  keyboardContainer.append(keyboardRow); 
}

const capsLockIndicator = document.createElement("span");
capsLockIndicator.classList.add("indicator");
document.querySelector("[data-attr='CapsLock']").after(capsLockIndicator);