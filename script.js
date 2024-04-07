const button = document.querySelector('.button');
  const bookCover = document.querySelector('.book-cover');
  const page = document.querySelector('.page');

  button.addEventListener('click', function() {
    bookCover.style.transform = 'rotateY(-180deg)';
    page.style.display = "block";
  });
