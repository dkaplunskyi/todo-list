import './style.css';

import  main  from './main';
import aside from './aside';
import footer from './footer';

const AppRunner = (() => {
  document.body.append(aside(), main(), footer());
})()

const mainSectionCleaner = () => {
  const main = document.querySelector('main');

  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
}

export { mainSectionCleaner };
