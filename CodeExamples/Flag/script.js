const flagContainer = document.getElementById('flagContainer');
const indianFlag = document.getElementById('indianFlag');

flagContainer.addEventListener('click', function() {
  console.log('FlagClicked')
  if (indianFlag.style.display === 'none') {
    indianFlag.style.display = 'block'; // Show the flag when clicked
  } else {
    indianFlag.style.display = 'none'; // Hide the flag when clicked again
  }
});
