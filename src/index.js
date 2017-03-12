// import sum from './sum';
// import './image_viewer';  // this file doesn't export anything, we just place it on the page
//
// const total = sum(10, 5);
// console.log(total);

const button = document.createElement('button');
button.innerText = 'Click me';

button.onclick = () => {
  System.import('./image_viewer').then(module => {
    module.default();
  });
}

document.body.appendChild(button);
