
$(document).ready(function() {
  createNewCard();
});

var cardId = 0;


function readEventListener(btnClass) {
  $("." + btnClass).click(function(){
    $("." + btnClass).toggleClass('read');
    $("." + btnClass).parent().toggleClass('read');
  })
}


function createNewCard() {
  $('.create-bkm').click(function(e){
    cardId = cardId + 1
    e.preventDefault();

    //when 'enter' is clicked
    // grab value of the title box and call it title
    var title = $('.bkm-title').val()
    var url = $('.bkm-url').val()
    var btnClass = `read-btn-${cardId}`
    //same for ur
    $('.column2').append(`<article><h2 class="Title">${title}</h2><hr><a href="${url}">${url}</a><hr><button class="read-btn ${btnClass}">Read</button><button class="delete">Delete</button></article>`)
    readEventListener(btnClass);
  });
}



