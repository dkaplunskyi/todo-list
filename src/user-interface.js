import navbar from './navbar';
import addProjectBtn from './footer';

export default function app() {
  const aside = document.createElement('aside');
  const main = document.createElement('main');
  const footer = document.createElement('footer');

  aside.append(navbar());

  footer.append(addProjectBtn());

  document.body.append(aside, main, footer);
}
