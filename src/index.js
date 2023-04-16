document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  //console.log(form);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    buildToDoList(e.target.querySelector("#new-task-description").value);
    form.reset();
  });

});

function buildToDoList(todo) {
  let liItem = document.createElement("li");
  let deleteButton = document.createElement("button");
  deleteButton.addEventListener("click", handleDelete);
  deleteButton.textContent = "X";
  liItem.textContent = `${todo}  `;
  liItem.appendChild(deleteButton);
  console.log(liItem);
  document.querySelector("#tasks").appendChild(liItem);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
