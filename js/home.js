function Task(taskDesc) {
    this.id = localStorage.length + 1;
    this.taskDesc = taskDesc;
    this.createDate = Date.now();
    this.isCompleted = false;
}

function handleAddTask() {
    const inputValue = document.getElementById('taskinput').value;
    let createdTask = new Task(inputValue)
    localStorage.setItem(createdTask.id, createdTask);

    displayInfoText(`'${inputValue}' was added successfully`);
    document.getElementById('taskinput').value = '';
}

function displayInfoText(message) {
    const infoText = document.getElementById('infotext');
    infoText.textContent = message;
    infoText.style.visibility = 'visible';
    setTimeout(() => {
        infoText.style.visibility = 'hidden';
    }, '1500');
}

window.onload = () => {
    const addTaskButton = document.getElementById('addtaskbutton');
    const addTaskInput = document.getElementById('taskinput')

    addTaskInput.addEventListener("input", (event) => {
        if (!event.target.value) {
            addTaskButton.disabled = true;
        } else addTaskButton.disabled = false;
    })
    addTaskButton.addEventListener('click', handleAddTask);
};