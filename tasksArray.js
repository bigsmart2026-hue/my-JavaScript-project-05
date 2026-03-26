function updateTasks() {
    let tasks = ["design", "code", "test", "deploy"];
    
    tasks.shift();
    tasks.pop();

    console.log(tasks);
}

updateTasks();