function handleAddTask() {
    const inputValue = document.getElementById('taskinput').value;
    console.log(new Task(inputValue));
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