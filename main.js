import './style.css';
import javascriptLogo from './javascript.svg';

let counter = 9;

const delay = (seconds=10) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
};

const interval = window.setInterval(() => {
  document.querySelector('#app').innerHTML = `
    <h1>${counter--}</h1>
    <h2>Loading...</h2>
    <h3>Hang Tight 😎</h3>
  `;
}, 1000);

await delay();

window.clearInterval(interval);

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <h2>The page loaded after 10 seconds</h2>
  </div>
`;
