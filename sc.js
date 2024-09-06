// Add a new task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('taskList');

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Add buttons for completing and deleting tasks
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.onclick = function () {
            listItem.classList.toggle('completed');
        };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }
}
