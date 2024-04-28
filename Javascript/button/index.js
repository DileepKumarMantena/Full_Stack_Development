document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
  
    button1.addEventListener('click', function() {
      document.body.style.backgroundColor = 'red';
    });
  
    button2.addEventListener('click', function() {
      document.body.style.backgroundColor = 'green';
    });
  
    button3.addEventListener('click', function() {
      document.body.style.backgroundColor = 'blue';
    });
  });
