import { code as theme } from 'mdx-deck/themes'
var blue = '#00cdf1';
var black = '#003d48';
var link = '#0800e3';
var white = '#ffffff';

export default {
  ...theme,
  colors: {
    text: white,
    background: blue,
    link: link,
    pre: blue,
    preBackground: black
  }
}