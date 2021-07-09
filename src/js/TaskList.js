/* eslint-disable no-unused-expressions */
export default class TaskList {
  constructor() {
    this.input = document.querySelector('.task-input');
    this.pinnedTasksContainer = document.querySelector('.pinned-tasks');
    this.allTasksContainer = document.querySelector('.all-tasks');
    this.pinnedTasks = this.pinnedTasksContainer.getElementsByClassName('task');
    this.allTasks = this.allTasksContainer.getElementsByClassName('task');
    this.noPinned = document.querySelector('.no-pinned');
    this.noActive = document.querySelector('.no-active');
  }

  init() {
    this.input.addEventListener('keyup', this.inputEvents.bind(this));
    document.addEventListener('click', this.pinTask.bind(this));
  }

  inputEvents(event) {
    this.input.style = '';
    if (event.key === 'Enter' && this.input.value.length === 0) {
      this.input.style.borderColor = 'red';
      this.input.blur();
    } else if (event.key === 'Enter') {
      this.addTask(this.input.value);
      this.input.value = '';
      this.noActive.classList.toggle('hidden');
    }

    this.filterTasks();
  }

  filterTasks() {
    this.allTasks.forEach((task) => {
      task.innerText.includes(this.input.value)
        ? task.classList.remove('hidden')
        : task.classList.add('hidden');
    });

    Array.from(this.allTasks).every((task) => task.classList.contains('hidden'))
      ? this.noActive.classList.remove('hidden')
      : this.noActive.classList.add('hidden');
  }

  addTask(task) {
    this.allTasksContainer.insertAdjacentHTML(
      'beforeend',
      `
      <div class="task">
        <p class="task-title">${task}</p>
        <div class="task-pin"></div>
      </div>
    `,
    );
  }

  pinTask(event) {
    if (!event.target.classList.contains('task-pin')) {
      return;
    }
    const pin = event.target;
    const task = pin.closest('.task');
    task.remove();
    if (pin.classList.contains('pinned')) {
      this.allTasksContainer.appendChild(task);
      pin.classList.remove('pinned');
    } else {
      this.pinnedTasksContainer.appendChild(task);
      pin.classList.add('pinned');
    }

    this.allTasks.length === 0
      ? this.noActive.classList.remove('hidden')
      : this.noActive.classList.add('hidden');
    this.pinnedTasks.length === 0
      ? this.noPinned.classList.remove('hidden')
      : this.noPinned.classList.add('hidden');
  }
}
