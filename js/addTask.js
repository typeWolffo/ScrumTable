let content = document.querySelector('textarea[name="task-content"]');
let addBtn = document.querySelector('.add-in-modal');
let test = 0;

addBtn.addEventListener('click', function() {


    let task = document.createElement('div');
    task.setAttribute("class", "newTask");
    // task.innerHTML = test;
    document.querySelector('.todo').appendChild(task);

    let task_content = document.createElement('p');
    task_content.setAttribute("class", "taskContent");
    task_content.innerHTML = test;
    document.querySelector('.newTask').appendChild(task_content);
    console.log(test);
})


content.addEventListener('change', function() {
    test = this.value;
})