const flagContainer = document.getElementById('flagContainer');
const flag = document.getElementById('flag');
const message = document.getElementById('message');

flagContainer.addEventListener('click', function() {
  if (flag.style.display !== 'none') {
    flag.style.display = 'none'; // Hide the flag
    message.style.display = 'block'; // Show the message
  } else {
    flag.style.display = 'block'; // Show the flag
    message.style.display = 'none'; // Hide the message
  }
});
