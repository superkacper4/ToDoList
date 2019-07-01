const ul = document.querySelector("ul");
const lis = document.querySelectorAll("li");
const input = document.querySelector("input");
const button = document.querySelector(".add");
const form = document.querySelector("form");

const taskArray = [];

const addTask = e => {
  e.preventDefault();
  const inputValue = input.value;
  const task = document.createElement("li");
  ul.appendChild(task);
  task.innerHTML = inputValue + `<button class="delete">Delete</button>`;
  taskArray.push(task);
  refreshArray();
  input.value = "";
  task.querySelector("button").addEventListener("click", removeTask);
};

const removeTask = e => {
  const index = e.target.parentNode.dataset.key;
  taskArray.splice(index, 1);
  refreshArray();
};

const refreshArray = () => {
  ul.textContent = "";
  taskArray.forEach((element, key) => {
    element.dataset.key = key;
    ul.appendChild(element);
  });
};

form.addEventListener("submit", addTask);

// deleteButton.addEventListener("click", removeTask);
