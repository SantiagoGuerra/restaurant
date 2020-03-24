import headerTemplate from '../templates/header.html';

const Header = document.createRange().createContextualFragment(headerTemplate);

const Home = Header.querySelector('.home-link');
const Menu = Header.querySelector('.menu-link');
const Contact = Header.querySelector('.contact-link');

export {
  Header, Home, Menu, Contact,
};