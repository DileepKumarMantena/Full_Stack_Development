document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const searchBar = document.getElementById('searchBar');

    addTaskBtn.addEventListener('click', () => {
        const taskTitle = prompt('Enter task title:');
        const taskDesc = prompt('Enter task description:');
        const taskPriority = prompt('Enter task priority (low, medium, high):').toLowerCase();
        if (taskTitle && taskDesc && ['low', 'medium', 'high'].includes(taskPriority)) {
            addTask(taskTitle, taskDesc, taskPriority);
        } else {
            alert('Invalid input. Please try again.');
        }
    });

    searchBar.addEventListener('input', (e) => {
        const searchValue = e.target.value.toLowerCase();
        const tasks = document.querySelectorAll('.task-item');
        tasks.forEach(task => {
            const title = task.querySelector('.task-title').innerText.toLowerCase();
            if (title.includes(searchValue)) {
                task.style.display = '';
            } else {
                task.style.display = 'none';
            }
        });
    });

    function addTask(title, desc, priority) {
        const taskItem = document.createElement('div');
        taskItem.className = `task-item ${priority}-priority`;

        const taskDetails = document.createElement('div');
        taskDetails.className = 'task-details';

        const taskTitle = document.createElement('div');
        taskTitle.className = 'task-title';
        taskTitle.innerText = title;

        const taskDesc = document.createElement('div');
        taskDesc.className = 'task-desc';
        taskDesc.innerText = desc;

        taskDetails.appendChild(taskTitle);
        taskDetails.appendChild(taskDesc);

        const taskActions = document.createElement('div');
        taskActions.className = 'task-actions';

        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn';
        completeBtn.innerText = 'Complete';
        completeBtn.addEventListener('click', () => {
            taskItem.style.backgroundColor = '#A9DFBF';
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskActions.appendChild(completeBtn);
        taskActions.appendChild(deleteBtn);

        taskItem.appendChild(taskDetails);
        taskItem.appendChild(taskActions);

        taskList.appendChild(taskItem);
    }
});
