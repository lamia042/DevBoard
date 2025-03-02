const buttons = document.querySelectorAll(".completed-btn");
const taskHistory = document.getElementById("task-history");
const clearHistoryBtn = document.getElementById("clear-history");
taskHistory.innerHTML = "";
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        this.disabled = true;
        this.style.backgroundColor = "lightgray";

        let taskName = this.closest("div.max-w-xs").querySelector("h2").innerText;
        let count = parseInt(document.getElementById("task-number").innerText);

        let taskNumber = parseInt(document.getElementById("task-number").innerText || 0);
        let remainTask = taskNumber - 1;
        document.getElementById("task-number").innerText = remainTask;
        alert("Board updated successfully");

        if (count === 1) {
            alert("Congrats!!! You have completed all the current tasks");
        }

        const now = new Date();
        const time = now.toLocaleTimeString();                 

        let historyItem = document.createElement("p");
        historyItem.classList.add("bg-[#f3f6fd]", "text-gray-700", "p-2", "rounded-md", "mb-4");
        historyItem.innerHTML = `You have completed the task <b>${taskName}</b> at ${time}`;

        taskHistory.appendChild(historyItem); 

        let checkboxNumber = parseInt(document.getElementById("checkbox-number").innerText);
        document.getElementById("checkbox-number").innerText = checkboxNumber + 1;
    });
});

clearHistoryBtn.addEventListener("click", function(){
    taskHistory.innerHTML = ""; 
});
