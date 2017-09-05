/**
 * Created by tonsu on 5/14/2017.
 */

const main = {
  color: {
    font: '#010101',
    darkerFont: '#000',
    lighterFont: '#666666',
    bg: '#FCFAF9',
    bgHighlight: '#F4F4F4',
    primary: '#00A854',
    secondary: '#FF00FF',
    border: '#AAA',
    danger: '#C1272D',
    error: '#f04134',
    success: '#00A854',
    processing: '#1792EA',
    warning: '#FFBF00',
    gray: '#F5F4F6',
  },
  width: '1200px',
  outerWidth: '1232px',
  mainPadding: '16px',
  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif",
  fontFamily2: "'Roboto Condensed', sans-serif",
  fontFamily3: "'Playfair Display', serif",
}

export default {
  button: {
    bg: 'transparent',
    height: '48px',
    fontColor: main.color.font,
    hover: {
      bg: main.color.primary,
      fontColor: '#fff',
    },
    border: `2px solid ${main.color.font}`
  },
  nav: {
    fontColor: main.color.font,
    activeColor: '#888',
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
  ...main
}