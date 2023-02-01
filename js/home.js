function handleAddTask() {
    const inputValue = document.getElementById('taskinput').value;
    console.log(new Task(inputValue));
    displayInfoText(`'${inputValue}' was added successfully`);
    document.getElementById('taskinput').value = '';
}
window.onload = () => {
    const addTaskButton = document.getElementById('addtaskbutton');
    addTaskButton.addEventListener('click', handleAddTask);
};

function Task(taskDesc) {
    this.taskDesc = taskDesc;
    this.createDate = Date.now();
    this.isCompleted = false;
}

function displayInfoText(message) {
    const infoText = document.getElementById('infotext');
    infoText.textContent = message;
    infoText.style.visibility = 'visible';
    setTimeout(() => {
        infoText.style.visibility = 'hidden';
    }, '1500');
}