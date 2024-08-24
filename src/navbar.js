import inboxImgSrc from '../images/inbox.png';
import todayImgSrc from '../images/star.png';
import upComingImgSrc from '../images/calendar.png';
import anyTimeImgSrc from '../images/repository.png';
import somedayImgSrc from '../images/box.png';
import logbookImgSrc from '../images/check.png';
import trashImgSrc from '../images/trash.png';

export default function createDefaultNavItems() {
  const navList = document.createElement('ul');

  // Create a img tag with src attribute
  const inboxImg = Object.assign(document.createElement('img'), {
    className: 'nav-img',
    src: inboxImgSrc
  });

  const todayImg = Object.assign(document.createElement('img'), {
    className: 'nav-img',
    src: todayImgSrc
  });

  const upComingImg = Object.assign(document.createElement('img'), {
    className: 'nav-img',
    src: upComingImgSrc
  });

  const anyTimeImg = Object.assign(document.createElement('img'), {
    className: 'nav-img',
    src: anyTimeImgSrc
  });

  const somedayImg = Object.assign(document.createElement('img'), {
    className: 'nav-img',
    src: somedayImgSrc
  });

  const logbookImg = Object.assign(document.createElement('img'), {
    className: 'nav-img',
    src: logbookImgSrc
  });

  const trashImg = Object.assign(document.createElement('img'), {
    className: 'nav-img',
    src: trashImgSrc
  });

  // Create navbar list item
  const inbox = Object.assign(document.createElement('li'), {
    textContent: 'Inbox'
  });

  const today = Object.assign(document.createElement('li'), {
    textContent: 'Today'
  });

  const upComing = Object.assign(document.createElement('li'), {
    textContent: 'Upcoming'
  });

  const anyTime = Object.assign(document.createElement('li'), {
    textContent: 'Anytime'
  });

  const someDay = Object.assign(document.createElement('li'), {
    textContent: 'Someday'
  });

  const logbook = Object.assign(document.createElement('li'), {
    textContent: 'Logbook'
  });

  const trash = Object.assign(document.createElement('li'), {
    textContent: 'Trash'
  });

  // Add img to a navbar item
  inbox.prepend(inboxImg);
  today.prepend(todayImg);
  upComing.prepend(upComingImg);
  anyTime.prepend(anyTimeImg);
  someDay.prepend(somedayImg);
  logbook.prepend(logbookImg);
  trash.prepend(trashImg);

  // Append all items to the navList
  navList.append(inbox, today, upComing, anyTime, someDay, logbook, trash);

  return navList;
}
