import newProjectBtnImgSrc from './assets/images/plus.png';
import layout from './layout';
import projectForm from './projectCreator';

export default function createFooterButtons() {
  const newProjectBtn = document.createElement('button');
  newProjectBtn.textContent = 'Add project';
  newProjectBtn.classList.add('new-project-btn');

  const newProjectBtnImg = document.createElement('img');
  newProjectBtnImg.src = newProjectBtnImgSrc;

  newProjectBtn.prepend(newProjectBtnImg);

  newProjectBtn.addEventListener('click', () => {
    
  });

  return newProjectBtn;
}