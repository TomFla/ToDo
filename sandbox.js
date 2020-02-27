const addForm = document.querySelector(".addTodo");
const list = document.querySelector(".list");

// add Todo-----------------------------------------
const generateTeplate = todo => {
  const html = `<li>
    <span>${todo}</span>
    <p class="delete">X</p>
</li>`;

  list.innerHTML += html;
};

addForm.addEventListener("submit", e => {
  e.preventDefault();
  const todo = addForm.add.value;
  if (todo.length) {
    generateTeplate(todo);
    addForm.reset();
  }
});
// -------------------------------------------------

// deleting todo------------------------------------
list.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
// -------------------------------------------------
