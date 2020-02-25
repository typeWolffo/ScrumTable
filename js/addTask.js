let content = document.querySelector('textarea[name="task-content"]');
let addBtn = document.querySelector('.add-in-modal');
let test = 0;
let tasklist = [];

addBtn.addEventListener('click', function() {

    // let task_content = document.createElement('li');
    // task_content.setAttribute("class", "taskContent");
    // task_content.innerHTML = test;
    // document.querySelector('.newTask').appendChild(task_content);
    // console.log(test);

    tasklist.push(test);
    
    tasklist.forEach(function(item) {
        let li = document.createElement('li');
        let text = document.createTextNode(item);
        li.appendChild(text);
        document.querySelector('.newTask').appendChild(li);

    })

    console.log(tasklist);

    tasklist.shift();

})


content.addEventListener('change', function() {
    test = this.value + ' ';
})

