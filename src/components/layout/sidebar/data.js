import { faFile, faList, faPeopleRoof, faUser } from '@fortawesome/free-solid-svg-icons';

const links = [
  { id: 1, title: 'Профиль', path: '/', icon: faUser },
  { id: 2, title: 'Учет семей', path: 'family', icon: faPeopleRoof },
  { id: 3, title: 'Услуги', path: 'services', icon: faList },
  { id: 4, title: 'Отчеты', path: 'reports', icon: faFile }
];

export { links };
