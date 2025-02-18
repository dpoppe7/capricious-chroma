import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { 
      text: 'Home', 
      href: getPermalink('/') 
    },
    { 
      text: 'About', 
      href: getPermalink('/about') 
    },
    { 
      text: 'Contact', 
      href: getPermalink('/contact') 
    },
  ]
};