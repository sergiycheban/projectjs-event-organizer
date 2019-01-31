// Извежда всички вече съхранени събития, като визуализира цялата необходима
// информация за тях.
function generateList(events) {
  events.map(function(obj) {
    listNumberOfVisitors.push(obj.people.length);
    var list = document.getElementById("listAdmin");

    var visibility18 = obj.isAdulthood ? "" : "is-hidden";
    var visibilityPrice = obj.price != 0 ? "" : "is-hidden";
    var archive = !obj.isArchive ? "is-primary" : "is-warning";

    list.insertAdjacentHTML(
      "afterend",
      '<div class="card has-background-light"> <a class="level-right" onClick="CRUD.deleteEvent( this.id )" id="' +
        obj.id +
        '"class="button is-danger is-outlined"> <span class="icon is-small"> <i class="fas fa-times"></i> </span> </a> <div class="card-content"> <div class="media"> <div class="media-content"> <p class="title is-4">' +
        obj.title +
        '</div> </div> <div class="content">' +
        obj.content +
        "<br /> <time>" +
        obj.dateTime +
        '</time> </div> </div><div class="level-right ' +
        visibilityPrice +
        '"> <figure class="image is-24x24"> <img src="resources/price-icon-22.png"> </div> <div class="level-right ' +
        visibility18 +
        '"> <figure class="image is-24x24"> <img src="resources/18.png"> </div> <footer class="card-footer">' +
        '<p class="card-footer-item">' +
        obj.people.length +
        " people will go to this event</p>" +
        '<a id="' +
        obj.id +
        '" onClick="showVisitors(this.id,\'' +
        "Female" +
        '\')" class="card-footer-item">Women visitors</a>' +
        '<a id="' +
        obj.id +
        '" onClick="showVisitors(this.id,\'' +
        "Male" +
        '\')" class="card-footer-item">Man visitors</a>' +
        '<a id="' +
        obj.id +
        '" onClick="showVisitors(this.id)" class="card-footer-item">All visitors</a>' +
        '<a class="button ' +
        archive +
        '" id="' +
        obj.id +
        '" onClick="archivedEvent(this.id)" class="card-footer-item">Archive</a>' +
        " </footer></div>"
    );
  });
}

function generateListForUser(idList = "listForUser") {
  arrayOfEvents.map(function(obj) {
    var d = document.getElementById(idList);

    var visibility18 = obj.isAdulthood ? "" : "is-hidden";
    var visibilityPrice = obj.price != 0 ? "" : "is-hidden";
    var isArchive = !obj.isArchive ? "" : "is-hidden";

    d.insertAdjacentHTML(
      "afterend",
      ' <div class="column is-4"> <div class="card"> <div class="card-image">' +
        '<figure class="image is-4by3"> <img src="resources/photo-1520011597487-ebdd1ea20ab0.jpg" alt="Placeholder image" class="modal-button" data-target="modal-image2">' +
        '</img> </figure> </div> <div class="card-content"> <div class="content"> <h4>' +
        obj.title +
        ": " +
        obj.dateTime +
        "</h4> <p>" +
        obj.content +
        '</p>     <div class="columns"> <div class="column">  <button class="button is-warning  ' +
        isArchive +
        '" id="' +
        obj.id +
        '"  onClick="showModalVisitorReg(true , this.id)">I WILL GO</button> </div><div class="column"> </div> <div class="level-right ' +
        visibilityPrice +
        '"><p class="has-text-danger"> ' +
        obj.price +
        '$ </p></div><div class="column"> </div> <div class="level-right ' +
        visibility18 +
        '"><p class="has-text-danger"> 18+ </p></div> </div> </div>  </div>  </div> </div>'
    );
  });
}

function generateListVisitor(event, index) {
  event.map(function(obj) {
    var listUser = document.getElementById("listUser");
    listUser.insertAdjacentHTML(
      "afterend",
      '<div class="card"> <a class="level-right" onClick="CRUD.deleteVisitor( ' +
        index +
        " ) " +
        '"button is-danger is-outlined"> <span class="icon is-small"> <i class="fas fa-times"></i> </span> </a> <div class="card-content"> <div class="media"> <div class="media-content"> <p class="title is-4">' +
        obj.name +
        '</div> </div> <div class="content">' +
        obj.gender +
        "<br /> <time>" +
        obj.age +
        " yers" +
        "</time> </div> </div></div>"
    );
  });
}
