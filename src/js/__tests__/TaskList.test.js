import TaskList from '../TaskList';

beforeEach(() => {
  document.body.innerHTML = `
    <div class="container">
      <h1 class="title">TOP Tasks</h1>
      <input type="text" class="task-input">
      <div class="pinned-tasks">
        <h2 class="pinned-tasks__title">Pinned Tasks</h2>
        <p class="no-pinned">No pinned tasks</p>
      </div>
      <div class="all-tasks">
        <h2 class="all-tasks__title">All Tasks</h2>
        <p class="no-active">No tasks found</p>
      </div>
    </div>
  `;
});

test('TaskList', () => {
  expect(new TaskList()).toBeInstanceOf(TaskList);
});
