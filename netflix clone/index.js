 document.querySelector('.guru').addEventListener('click', function () {
  const paragraph = document.querySelector('.p');
  if (paragraph.style.display === 'none') {
    paragraph.style.display = 'block';
  } else {
    paragraph.style.display = 'none';
  }
});
