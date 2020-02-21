const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const searchBar = document.querySelector(".form-control");

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
list.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// searching todo list
const filterToDos = term => {
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter(todo => todo.textContent.includes(term))
    .forEach(todo => todo.classList.remove("filtered"));
};

searchBar.addEventListener("keyup", () => {
  const term = searchBar.value.trim().toLowerCase();
  filterToDos(term);
});
