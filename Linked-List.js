//Global variables
var titleInput = $('.bkm-title');
var urlInput = $('.bkm-url');


//When Enter button clicked, does several things
//Prevents the default button behavior
//If an input is missing, show error message
//Creates a new article with the information from the input boxes

$('.create-bkm').on('click', function (e) {
  e.preventDefault();
  inputMissing();
});

//If a title or url input is missing, show error, otherwise create the bookmark
function inputMissing() { 
  var errorDisplay = $('.errorDisplay');
  if (titleInput.val().length === 0 && urlInput.val().length === 0) {
    errorDisplay.text('Missing Website Title and URL');
    return;
  }
  else if (titleInput.val().length === 0) {
    errorDisplay.text('Missing Website Title');
    return;
  }
  else if (urlInput.val().length === 0) {
    errorDisplay.text('Missing Website URL');
    return;
  }
  else {
    errorDisplay.text('');
    create();
  }
};

var i = 0;

function create() {
  i++;
  $('.column2').append(`<article class='bookmark' id="art${i}">
  <h2>${titleInput.val()}</h2>
  <hr>
  <a href="${urlInput.val()}">${urlInput.val()}</a>
  <hr>
  <button class="read-btn">Read</button>
  <button class="delete id="delBtn${i}"">Delete</button>
  </article>`)
  $(`.delete`).on('click', deleteCard);
  
    // $(`#art${i}`).remove();
  }

function deleteCard() {
  $(this).parent().remove();
};

// '<article id=\"' + 'art' + i + '\">' +
//     '<h2>' + titleInput.val() + '</h2><hr><a href=' + '\"' + urlInput.val() + '\"' + '>' + urlInput.val() + '</a>' + 
//     '<hr><button class="read-btn">Read</button><button class="delete" id="delBtn' + i + '\">Delete</button></article>'


 


// function Bookmark(name, url) {
//   this.name = titleInput.value;
//   this.url = urlInput.value;
// }

//The box is going to be the second column
//We are going to create bookmark objects to go into the second column
//Each of those will have a specific count number
//Will create HTML so that bookmark pops up on the left part of the page
//When read is selected, go to that specific object and trigger add/subtract of .read class
//When delete is selected, remove that object.

// I DON'T THINK I NEED THESE var h2 = $('h2'); // document.querySelector('h2');
// var a = $('a'); // document.querySelector('a');
//  // document.querySelector('.errorDisplay');


// createBtn.addEventListener('click', function(e){
//   e.preventDefault();
//   inputMissing();
//   Bookmark(titleInput, urlInput);
// });
  // $('.create-bkm').click(function() {
  //   Bookmark();
  // });
