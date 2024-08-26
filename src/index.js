import './style.css';
import layout from './layout.js';
import newProjectForm from './projectCreator.js';

layout();

const main = document.querySelector('main');
const newProjectBtn = document.querySelector('.new-project-btn');

newProjectBtn.addEventListener('click', () => {
  if (!main.hasChildNodes()) {
    main.append(newProjectForm());
  }
})
