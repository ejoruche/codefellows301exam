window.onload = () => {
  const table = document.getElementById("tasks");
  const taskListHeader = document.getElementById("tasklistheader");

  const tasks = getAllStorageItems();

  // hide table if no tasks
  if (tasks.length === 0) {
    taskListHeader.textContent = "You have no tasks";
    table.style.visibility = "hidden";
  } else if (tasks.length === 1) {
    taskListHeader.textContent = `You have ${tasks.length} task`;
    table.style.visibility = "visible";
  } else {
    taskListHeader.textContent = `You have ${tasks.length} tasks`;
    table.style.visibility = "visible";
  }

  // load table with data
  if (tasks.length > 0) {
    tasks.forEach((task, index) => addTableRow(task, index));
  }

  table.addEventListener("click", (e) => {
    // handle delete
    if (e.target.id.includes("delete-index")) {
      tasks.find((element, index, array) => {
        if (index == e.target.parentElement.parentElement.rowIndex - 1) {
          localStorage.removeItem(array[index].id);
          tasks.splice(index, 1);
        }
      });

      table.deleteRow(e.target.parentElement.parentElement.rowIndex);

      if (tasks.length === 0) {
        taskListHeader.textContent = "You have no tasks";
        table.style.visibility = "hidden";
      } else if (tasks.length === 1) {
        taskListHeader.textContent = `You have ${tasks.length} task`;
        table.style.visibility = "visible";
      } else {
        taskListHeader.textContent = `You have ${tasks.length} tasks`;
        table.style.visibility = "visible";
      }
    } else if (e.target.id.includes("check-index")) {
      // handle checked vs not checked
      const task = tasks.find((element, index, array) => {
        if (index == e.target.parentElement.parentElement.rowIndex - 1) {
          array[index].isCompleted = !array[index].isCompleted;
          localStorage.setItem(array[index].id, JSON.stringify(array[index]));
        }
      });
    }
  });
};

function getAllStorageItems() {
  const items = [];

  Object.keys(localStorage).filter((key) => {
    if (key.includes("task")) {
      // removing any random items that aren't tasks
      items.push(JSON.parse(localStorage.getItem(key)));
    }
  });
  return items;
}

function addTableRow(item, index) {
  const table = document.getElementById("tasks");
  const row = table.insertRow(index + 1);

  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);

  if (!item.isCompleted) {
    cell1.innerHTML = `<input id=check-index-${index} type="checkbox">`;
  } else {
    cell1.innerHTML = `<input id=check-index-${index} type="checkbox" checked>`;
  }

  cell2.innerHTML = `${item.taskDesc}`;
  cell3.innerHTML = `${new Date(item.dateCreated).toDateString()}`;
  cell4.innerHTML = `<div id=delete-index-${index} class="tablelink">Delete</div>`;
}
