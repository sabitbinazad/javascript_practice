const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = [];

// Add a new task to the list
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false }); // Ensure 'completed' is initialized
        taskInput.value = ""; // Clear the input field
        displayTasks(); // Update the task list
    }
}

// Display all tasks in the task list
function displayTasks() {
    taskList.innerHTML = ""; // Clear the task list before rendering
    tasks.forEach((task, index) => {
        // Create a list item for each task
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>
        `;
        // Add an event listener to toggle the task's completion status
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li); // Append the task to the list
    });
}

// Toggle the completion status of a task
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed; // Flip the 'completed' status
    displayTasks(); // Update the task list
}

// Clear all completed tasks from the list
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed); // Filter out completed tasks
    displayTasks(); // Update the task list
}

// Attach event listeners to buttons
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

// Initialize the task list
displayTasks();
