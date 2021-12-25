function isEnter(event) {
   // Enable implicit input submission
   if (event.keyCode === 13) {
      document.querySelector(".add-btn").click();
   }
}

function newListElement() {
   let li = document.createElement("li");
   input_value = document.querySelector(".input").value;
   if (input_value === "") {
      alert("You must write something!");
      return -1;
   }

   li.innerText = input_value;  
   document.querySelector(".to-dos").appendChild(li);

   // Create the 'x' remove button
   x = document.createElement("span");
   x.innerText = "\u00D7";
   x.className = "remove";
   x.onclick = function () {
      let item = this.parentElement;
      item.style.display = "none";
   };
   li.appendChild(x);

   document.querySelector(".input").value = "";
}
