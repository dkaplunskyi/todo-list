class Project {
  constructor(name, note) {
    this.name = name
    this.note = note
  }
}

const projects = [];

export default function createFormForNewProject() {
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
    const main = document.querySelector('main');

    while (main.hasChildNodes()) {
      main.removeChild(main.firstChild);
    }
  })

  submit.addEventListener('click', () => {
    projects.push(new Project(titleInput.value, notesInput.value));
    const aside = document.querySelector('aside');

    const div = document.createElement('div');
    div.textContent = titleInput.value;
    aside.appendChild(div);

  })

  btnWrapper.append(cancel, submit);
  wrapper.append(titleInput, notesInput, btnWrapper);

  return wrapper;
}