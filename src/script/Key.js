export class Key {
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
      keyboardKey.dataset.attr = this.code;
      return keyboardKey; 
    } 
}