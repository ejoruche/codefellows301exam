window.onload = () => {
    function Task(taskDesc) {
        this.taskDesc = taskDesc;
        this.createDate = Date.now();
        this.isCompleted = false;
    }

    function handleAddTask() {
        const inputValue = document.getElementById('taskinput').value;
        localStorage.setItem(new Task(inputValue));

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

    const addTaskButton = document.getElementById('addtaskbutton');
    addTaskButton.addEventListener('click', handleAddTask);
};