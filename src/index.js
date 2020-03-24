import currentHash from './utils/currentHash';
import {
  Header, Home, Menu, Contact,
} from './components/Header';
import { MainContent, PageContent } from './components/Content';
import { appendContent, innerContent } from './utils/injectContent';
import HomePage from './pages/home.html';
import MenuPage from './pages/menu.html';
import ContactPage from './pages/contact.html';
import './styles/main.scss'


window.addEventListener('load', e => {
  appendContent(MainContent, Header);
  appendContent(MainContent, PageContent);

  switch (currentHash()) {
    case '#home':
      innerContent(PageContent, HomePage);
      break;
    case '#menu':
      innerContent(PageContent, MenuPage);
      break;
    case '#contact':
      innerContent(PageContent, ContactPage);
      break;
    default:
      innerContent(PageContent, HomePage);
  }
});

Home.addEventListener('click', () => { innerContent(PageContent, HomePage); });
Menu.addEventListener('click', () => { innerContent(PageContent, MenuPage); });
Contact.addEventListener('click', () => { innerContent(PageContent, ContactPage); });
