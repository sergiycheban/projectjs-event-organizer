// localStorage.setItem('inputArray', JSON.stringify(inputArray));
var retrievedObject = localStorage.getItem('inputArray');
inputArray =  JSON.parse(retrievedObject);

var i = 0;
var newLineStart = ""
var newLineEnd = ""

function generateList() {
  inputArray.map(function(obj) {
    var d1 = document.getElementById("list");

    var visibility = obj.isAdulthood ? "" : "is-hidden";

    d1.insertAdjacentHTML(
      "afterend",
      '<div class="card"> <a class="level-right" onClick="CRUD.deleteEvent( this.id )" id="' + 
        obj.id + 
        '"class="button is-danger is-outlined"> <span class="icon is-small"> <i class="fas fa-times"></i> </span> </a> <div class="card-content"> <div class="media"> <div class="media-content"> <p class="title is-4">' +
        obj.title +
        '</div> </div> <div class="content">' +
        obj.content +
        "<br /> <time>" +
        obj.dateTime +
        '</time> </div> </div> <div class="level-right ' +
        visibility +
        '"> <figure class="image is-24x24"> <img src="resources/18.png"> </div> </div>'
    );
  });
}

function generateListForUser(){
  inputArray.map(function(obj) {
    var d = document.getElementById("listForUser");

    var visibility = obj.isAdulthood ? "" : "is-hidden";

    d.insertAdjacentHTML(
      "afterend",' <div class="column is-4"> <div class="card"> <div class="card-image"> <figure class="image is-4by3"> <img src="https://source.unsplash.com/6Ticnhs1AG0" alt="Placeholder image" class="modal-button" data-target="modal-image2"></img> </figure> </div> <div class="card-content"> <div class="content"> <h4>'+
       obj.title + ": "+ obj.dateTime  +
       '</h4> <p>'+ 
        obj.content +
        '</p> <span class="button is-link modal-button" data-target="modal-image2">I WILL GO</span> </div> </div> </div> </div>');
  });

}
