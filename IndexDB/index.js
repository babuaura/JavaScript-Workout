
let db;
const databaseName = "todolistDB";
const storeName = "todolistStore";

function openDatabase() {
  const dbrequest = indexedDB.open(databaseName, 2);
  dbrequest.onupgradeneeded = function (event) {
    db = event.target.result;

    const todoListStore = db.createObjectStore(storeName, {
      keyPath: "id",
      autoIncrement: true,
    });
  };
  dbrequest.onsuccess = function (event) {
    db = event.target.result;
    updateList();
  };
  dbrequest.onerror = function (event) {
    alert("Index DB Error");
  };
}

function addItem(todoItem) {
  const transaction = db.transaction([storeName], "readwrite");
  const store = transaction.objectStore(storeName);
  const request = store.add({ task: todoItem });
  request.onsuccess = function () {
    updateList();
  };
  request.onerror = function () {
    alert("Error");
  };
}

function deleteItem(id) {
  const transaction = db.transaction([storeName], "readwrite");
  const store = transaction.objectStore(storeName);
  const request = store.delete(id)
  request.onsuccess = function () {
    updateList();
  };
  request.onerror = function () {
    alert("Error");
  };
}

function updateList() {
  const transaction = db.transaction([storeName], "readonly");
  const store = transaction.objectStore(storeName);
  const request = store.getAll();
  request.onsuccess = function (event) {
    const todoItems = event.target.result;
    const todoList = document.getElementById("todo-list");
    todoList.innerText = "";

    todoItems.forEach((item) => {
      const li = document.createElement("li");
      li.innerText = item.task;
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.classList.add("delete-btn");
      deleteButton.onclick = () => deleteItem(item.id);
      li.appendChild(deleteButton);
      todoList.appendChild(li);
      const editButton = document.createElement("button");
      editButton.innerText = "Edit";
      editButton.classList.add("edit-btn");
      editButton.onclick = () => edit(item.id);
      li.appendChild(editButton);
      todoList.appendChild(li);
    });
  };
  request.onerror = function () {
    alert("Error");
  };
}

function edit(id) {
  const transaction = db.transaction([storeName], "readonly");
  const store = transaction.objectStore(storeName);
  const request = store.get(id);

  request.onsuccess = function (event) {
    const taskToEdit = event.target.result;

    // Prompt for editing.
    const newTask = prompt("Edit your task:", taskToEdit.task);

    if (newTask !== null && newTask.trim() !== "") {
      // Update the task in the database
      updateItem(id, newTask.trim());
    }
  };

  request.onerror = function () {
    alert("Error");
  };
}

function updateItem(id, updatedTask) {
  const transaction = db.transaction([storeName], "readwrite");
  const store = transaction.objectStore(storeName);
  const request = store.put({ id: id, task: updatedTask }); // Update the item with new task details

  request.onsuccess = function () {
    updateList(); // Refresh the list after update
  };

  request.onerror = function () {
    alert("Error");
  };
}

window.onload = openDatabase;

document.getElementById("add-btn").addEventListener("click", () => {
  const input = document.getElementById("todo-input");
  const todoItem = input.value.trim();
  if (todoItem) {
    addItem(todoItem);
    input.value = "";
  } else {
    alert("Enter a value");
  }
});
