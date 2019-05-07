(function() {
  const input = document.querySelector("#item");
  const form = document.querySelector("form");
  const btn = document.querySelector("button");
  const itemsWrapper = document.querySelector("ul");

  function completed() {
    if (this.style.textDecoration == "line-through") {
      this.style.textDecoration = "none";
    } else {
      this.style.textDecoration = "line-through";
    }
  }

  function removeItem() {
    itemsWrapper.removeChild(this.parentElement);
  }

  input.onmouseover = function(e) {
    input.focus();
    input.setAttribute("placeholder", "");
    input.className == "moveleft";
    console.log(input.className);
  };
  input.onmouseleave = function(e) {
    input.blur();
    input.setAttribute("placeholder", "enter a todo");
  };
  form.onsubmit = function(e) {
    e.preventDefault();

    console.log(input.value);
    if (!input.value) {
      return alert("enter a value amigoooo!!!");
    }
    const list = document.createElement("li");
    list.innerHTML = `${input.value} <span id="cancel">Done</span>`;
    console.log(list.children[0]);

    itemsWrapper.appendChild(list);

    list.onclick = completed;
    list.children[0].onclick = removeItem;

    //CLEAR INPUT
    input.value = "";
  };
})();
