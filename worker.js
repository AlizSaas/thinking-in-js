const worker = new Worker('worker.js');

const totalButton = document.getElementById('total');
const bgButton = document.getElementById('bg');

totalButton.addEventListener('click', () => {
    worker.postMessage('calculateTotal');
});

worker.onmessage = function(event) {
    console.log('Message received from worker:', event.data);
    alert('Total calculated in worker: ' + event.data);
}




bgButton.addEventListener('click', () => {
  if(document.body.style.backgroundColor === 'blue') {
    document.body.style.backgroundColor = 'yellow';
  } else {
    document.body.style.backgroundColor = 'blue';
  } 
});

