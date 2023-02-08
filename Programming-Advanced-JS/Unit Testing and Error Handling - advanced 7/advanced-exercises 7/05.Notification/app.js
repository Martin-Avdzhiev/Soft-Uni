function notify(message) {
  const notification = document.getElementById('notification');
  notification.innerText = message;
  notification.style.display = 'block';
  notification.addEventListener('click', function (){
    notification.style.display = 'none';
  })
}