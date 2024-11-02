class TodoList {
    constructor() {
        this.editingIndex = -1;
        this.addButton = document.getElementById('addButton');
        this.todoInput = document.getElementById('todoInput');
        this.dueDateInput = document.getElementById('dueDateInput');
        this.todoList = document.getElementById('todoList');

        this.addButton.addEventListener('click', () => this.addOrUpdateTask());
        this.todoList.addEventListener('click', (e) => this.handleListClick(e));
    }

    handleListClick(event) {
        const target = event.target;
        if (target.classList.contains('removeButton')) {
            this.removeTask(target);
        } else if (target.classList.contains('editButton')) {
            this.editTask(target);
        } else if (target.classList.contains('doneButton')) {
            this.doneTask(target);
        }
    }

    addOrUpdateTask() {
        const taskText = this.todoInput.value.trim();
        const dueDate = this.dueDateInput.value;
        if (taskText) {
            this.editingIndex === -1 ? this.addTask(taskText, dueDate) : this.updateTask(taskText, dueDate);
            this.todoInput.value = '';
            this.dueDateInput.value = '';  
        }
    }

    addTask(taskText, dueDate) {
        const listItem = this.createTaskElement(taskText, dueDate);
        this.todoList.appendChild(listItem);
    }
