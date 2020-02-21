const addForm = document.querySelector(".add");
const list = document.querySelector(".list-group");
const delToDo = document.querySelectorAll(".delete");

const generateTemplate = todo => {
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${todo}</span>
                    <i class="far fa-trash-alt delete"></i>
                </li>`;
  list.innerHTML += html;
};
// adding new ToDos
addForm.addEventListener("submit", e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});
// end of adding new Todos

// Delete ToDos
delToDo.addEventListener("click", e => {
  console.log(e.target.value);
});
