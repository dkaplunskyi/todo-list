import newProjectBtnImgSrc from '../images/plus.png';

export default function createFooterButtons() {
  const newProjectBtn = document.createElement('button');
  newProjectBtn.textContent = 'Add project';
  newProjectBtn.classList.add('new-project-btn');

  const newProjectBtnImg = document.createElement('img');
  newProjectBtnImg.src = newProjectBtnImgSrc;

  newProjectBtn.prepend(newProjectBtnImg);

  return newProjectBtn;
}