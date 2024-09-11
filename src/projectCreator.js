import { mainSectionCleaner } from "./index";

class Project {
  constructor(name, note) {
    this.name = name
    this.note = note
  }

  index = null

  tesks = [];
}

const projects = [];

function dialog() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const titleInput = Object.assign(document.createElement('input'), {
    name: 'project-title',
    id: 'project-title',
    placeholder: 'Title:'
  });

  const notesInput = Object.assign(document.createElement('input'), {
    name: 'project-notes',
    id: 'project-notes',
    placeholder: 'Notes:'
  });

  const btnWrapper = Object.assign(document.createElement('div'), {
    className: 'btn-wrapper'
  });

  const submit = Object.assign(document.createElement('button'), {
    className: 'submit',
    textContent: 'Save'
  });

  const cancel = Object.assign(document.createElement('button'), {
    className: 'cancel',
    textContent: 'cancel'
  });

  cancel.addEventListener('click', () => {
    mainSectionCleaner()
  })

  submit.addEventListener('click', (e) => {
    e.preventDefault();
    projects.push(new Project(titleInput.value, notesInput.value));
    const aside = document.querySelector('aside');

    const div = document.createElement('div');
    div.textContent = titleInput.value;

    aside.appendChild(div);

  })

  btnWrapper.append(cancel, submit);
  wrapper.append(titleInput, notesInput);

  return wrapper;
}

function taskForm() {
  const tasksWrapper = Object.assign(document.createElement('div'), {
    className: 'tasks-wrapper'
  });

  const checkBox = Object.assign(document.createElement('input'), {
    type: 'checkbox',
    id: 'task-checker',
    value: false
  });

  const taskInput = Object.assign(document.createElement('input'), {
    className: 'tasks-input',
    placeholder: 'Task'
  });

  tasksWrapper.append(checkBox, taskInput);

  return tasksWrapper;
}

export { dialog, taskForm }