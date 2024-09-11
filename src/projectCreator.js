import { mainSectionCleaner } from "./index";

class Project {
  constructor(name, note) {
    this.name = name
    this.note = note
  }

  index = null

  tasks = [];
}

class Task {
  constructor(todo, note) {
    this.todo = todo
    this.note = note
  }
}

const projects = [];

projects.push(new Project('Default Project', 'Empty notes'), new Project('My Project', 'My notes'))

function dialog(title = '', notes = '') {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const titleInput = Object.assign(document.createElement('input'), {
    name: 'project-title',
    id: 'project-title',
    placeholder: 'Title:',
    value: title
  });

  const notesInput = Object.assign(document.createElement('input'), {
    name: 'project-notes',
    id: 'project-notes',
    placeholder: 'Notes:',
    value: notes
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

    clearProjects();
    printProjects(projects);

  })

  btnWrapper.append(cancel, submit);
  wrapper.append(titleInput, notesInput, btnWrapper);

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
    placeholder: 'New To-Do'
  });

  const notesInput = Object.assign(document.createElement('input'), {
    className: 'notes-input',
    placeholder: 'Notes'
  });

  tasksWrapper.append(checkBox, taskInput, notesInput);

  return tasksWrapper;
}

function printProjects(projects) {
  const aside = document.querySelector('aside');
  const main = document.querySelector('main');

  projects.forEach((project, index) => {
    project.index = index;
    const div = document.createElement('div');
    div.textContent = project.name;
    div.classList.add('project-listItem');
    div.setAttribute('data-index', index);
    aside.appendChild(div);

    div.addEventListener('click', function () {
      mainSectionCleaner();
      main.append(dialog(project.name, project.note))
    })
  });
}

function clearProjects() {
  const elements = document.querySelectorAll('.project-listItem');

  elements.forEach(element => {
    element.parentNode.removeChild(element);
  })
}

export { dialog, taskForm, printProjects, projects }