const prefersDarkMode = window.matchMedia('(prefers-color: dark)').matches;

const htmlElement = document.documentElement;
if (prefersDarkMode) {
  htmlElement.setAttribute('data-theme', 'dark');
} else {
  htmlElement.setAttribute('data-theme', 'light');
}