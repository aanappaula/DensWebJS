document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".content");
    
    function addContent(form, input, list) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); 
            const contentText = input.value;

            const newContent = document.createElement("li");
            newContent.textContent = contentText;

            list.appendChild(newContent);

            input.value = '';
        });
    }

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetTab = button.getAttribute("data-tab");

            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => {
                content.classList.remove("active");
            });


            button.classList.add("active");
            document.getElementById(targetTab).classList.add("active");
        });
    });

    addContent(document.getElementById("contentForm1"), document.getElementById("contentInput1"), document.getElementById("contentList1"));
    addContent(document.getElementById("contentForm2"), document.getElementById("contentInput2"), document.getElementById("contentList2"));


    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    taskForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const taskText = taskInput.value;

        const newTask = document.createElement("li");
        newTask.textContent = taskText;


        taskList.appendChild(newTask);

  
        taskInput.value = '';
    });
});
