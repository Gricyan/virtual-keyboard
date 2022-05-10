window.onload = function(){
  addTagtClickHangler();
};

let keyBtns = document.getElementsByTagName("button");

const addTagtClickHangler = () => {
for (let i = 0; i < keyBtns.length; i++) {
  keyBtns[i].addEventListener("click", () => {
   // console.log(event);

    document.querySelector(".textarea").innerHTML += keyBtns[i].innerHTML;
  });
}
};