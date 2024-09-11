import plusImgSrc from './assets/images/plus.png';
import { dialog, taskForm } from "./projectCreator";

import { mainSectionCleaner } from './index';

export default function createFooter() {
  const footer = document.createElement('footer');

  const newProjectBtn = createBtn('Add project', plusImgSrc, 'new-project-btn');
  const newTaskBtn = createBtn('New Task', plusImgSrc, 'new-task-btn');


  newProjectBtn.addEventListener('click', () => {
    newTaskBtn.style.visibility = 'visible';

    mainSectionCleaner();

    const main = document.querySelector('main');
    main.append(dialog());
  })

  newTaskBtn.addEventListener('click', () => {
    const main = document.querySelector('main');
    console.log(main.children);
    main.append(taskForm());
  })

  footer.append(newProjectBtn, newTaskBtn);

  return footer;
}

function createBtn(name, btnImgSrc, className) {
  const btn = document.createElement('button');
  btn.textContent = name;

  btn.classList.add(className);

  const btnImg = document.createElement('img');
  btnImg.src = btnImgSrc;

  btn.prepend(btnImg);

  return btn;
}