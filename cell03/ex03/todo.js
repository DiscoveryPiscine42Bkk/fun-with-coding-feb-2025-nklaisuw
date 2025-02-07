document.addEventListener("DOMContentLoaded", function () {
    let ftList = document.getElementById("ft_list");
    let newTaskBtn = document.getElementById("newTask");

    function loadTasks() {
        let tasks = getCookie("todo_list");
        if (tasks) {
            let taskArray = JSON.parse(tasks);
            taskArray.forEach(task => addTask(task));
        }
    }

    function addTask(taskText) {
        let taskDiv = document.createElement("div");
        taskDiv.className = "todo";
        taskDiv.innerText = taskText;
        taskDiv.addEventListener("click", function () {
            if (confirm("Are you sure about removing this task?")) {
                taskDiv.remove();
                saveTasks();
            }
        });
        ftList.insertBefore(taskDiv, ftList.firstChild);
        saveTasks();
    }

    newTaskBtn.addEventListener("click", function () {
        let taskText = prompt("New task:");
        if (taskText) addTask(taskText);
    });

    function saveTasks() {
        let taskElements = document.querySelectorAll(".todo");
        let taskArray = [];
        taskElements.forEach(task => taskArray.push(task.innerText));
        setCookie("todo_list", JSON.stringify(taskArray), 7);
    }

    function setCookie(name, value, days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
    }

    function getCookie(name) {
        let decodedCookies = decodeURIComponent(document.cookie);
        let cookieArray = decodedCookies.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i].trim();
            if (cookie.indexOf(name + "=") === 0) {
                return cookie.substring(name.length + 1);
            }
        }
        return "";
    }

    loadTasks();
});