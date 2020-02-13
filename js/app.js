document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

 //TITLE
 const titleInput = function() {
   const result = document.querySelector('#title-result');
   result.textContent = event.target.value
 }

 const textInput = document.querySelector('#title');
 textInput.addEventListener('title', titleInput);


 //AUTHOR
  const authorInput = function() {
    const result = document.querySelector('#input-result');
    authorInput.textContent = event.target.value
  }

  const result = document.querySelector('#author');
  result.addEventListener('input', authorInput);


 //CATEGORY
  const categorySelect = function() {
    const result = document.querySelector('#category-result');
    result.textContent = `This book is a: ${event.target.value}`
  }

  const category = document.querySelector('#category');
  category.addEventListener('category', categorySelect);


//SAVE BUTTON
const saveSelect = function(event) {
  event.preventDefault();

  const result = document.querySelector('#reading-list');
  result.textContent = `You added a ${event.target.category.value}
  called ${event.target.title.value} by ${event.target.author.value}.`
  form.reset();
}

const form = document.querySelector('#new-item-form');
form.addEventListener('submit', saveSelect);



// DELETE ALL BUTTON
const handleDeleteAllClick = function(){
    const readingList = document.querySelector('#reading-list');
    while (readingList.firstChild) readingList.removeChild(readingList.firstChild);
  }

const coolButton = document.createElement('button');
  document.querySelector('new-item-form');
  coolButton.textContent = "delete all!";
  coolButton.setAttribute('id', 'delete-all');
  const body = document.querySelector('body');
  body.appendChild(coolButton);
  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

})
