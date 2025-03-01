const buttons = document.querySelectorAll(".completed-btn");

    buttons.forEach(function(button) {
        button.addEventListener("click", function () {
            this.disabled = true;
            this.style.backgroundColor = "lightskyblue";
            let count = parseInt(document.getElementById("task-number").innerText);
            if(count === 0){
                alert("Board updated successfully");
                alert("Congrates!!! You have completed all the current task");
            }
            else{
                let taskNumber = parseInt(document.getElementById("task-number").innerText || 0);
                let remainTask = taskNumber - 1;
                document.getElementById("task-number").innerText = remainTask;
                alert("Board updated successfully");
            }
            
            let checkboxNumber = parseInt(document.getElementById("checkbox-number").innerText);
            let updatedCheckboxNumber = checkboxNumber + 1;
            document.getElementById("checkbox-number").innerText = updatedCheckboxNumber;
        });
    });
