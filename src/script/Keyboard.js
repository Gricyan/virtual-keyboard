import { Key } from "./Key.js";

export class Keyboard {
  constructor(keys) {
    this.keys = keys;
  }

  generateKeyboardRow(keys) {
    let keyboardRows = [];

    for (let i = 0; i < keys.length; i++) {
      const keyboardRow = document.createElement("div"); 
      keyboardRow.classList.add("keyboard__keys_row");
      
      keys[i].forEach(keyItem => {
         keyboardRow.append(new Key(keyItem).generateKey());          
      });

      keyboardRows.push(keyboardRow);
    }

    return keyboardRows;
  }
} 