var retrievedObject = localStorage.getItem("inputArray");
inputArray = JSON.parse(retrievedObject);

var idNow;

function generateList() {
  inputArray.map(function(obj) {
    var list = document.getElementById("listAdmin");

    var visibility = obj.isAdulthood ? "" : "is-hidden";

    list.insertAdjacentHTML(
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
        '"> <figure class="image is-24x24"> <img src="resources/18.png"> </div> <footer class="card-footer">' +
        '<p class="card-footer-item">' +
        obj.people.length +
        " people will go to this event</p>" +
        '<a id="' +
        obj.id +
        '" onClick="showUser(this.id)" class="card-footer-item">Details</a>' +
        " </footer></div>"
    );
  });
}

function showUser(id) {
  var modalVisitor = document.getElementById("modalVisitor");
  modalVisitor.className += " is-active";
  var index = inputArray.findIndex(x => x.id == id);

  generateListVisitor(index);
}

function addClass(isActive, id) {
  console.log(inputArray);
  if (isActive) {
    var modal = document.getElementById("modal");
    modal.className += " is-active";
  } else {
    var modal = document.getElementById("modal");
    modal.className = "modal";
  }

  idNow = id;
}

function addClassForModalVisitor(isActive) {
  var modalVisitor = document.getElementById("modalVisitor");
  if (isActive) {
    modalVisitor.className += " is-active";
  } else {
    modalVisitor.className = "modal";
  }
  document.location.reload(true);
}

function UserGo() {
  var modal = document.getElementById("modal");

  var FNameLName = document.getElementById("FNameLNaeme").value;
  var maleRadio = document.getElementById("maleRadio").checked;
  var age = document.getElementById("age").value;

  var gender = maleRadio ? "Male" : "Female";

  var index = inputArray.findIndex(x => x.id == idNow);
  if (inputArray[index].isAdulthood) {
    if (age >= 18) {
      inputArray[index].people.push({
        name: FNameLName,
        age: age,
        gender: gender
      });
      localStorage.setItem("inputArray", JSON.stringify(inputArray));
    } else {
      alert("YOU DONT HAVE 18 YERS");
    }
  } else {
    inputArray[index].people.push({
      name: FNameLName,
      age: age,
      gender: gender
    });
    localStorage.setItem("inputArray", JSON.stringify(inputArray));
  }
  modal.className = "modal";
}

function generateListForUser() {
  inputArray.map(function(obj) {
    var d = document.getElementById("listForUser");

    var visibility = obj.isAdulthood ? "" : "is-hidden";

    d.insertAdjacentHTML(
      "afterend",
      ' <div class="column is-4"> <div class="card"> <div class="card-image">' +
        '<figure class="image is-4by3"> <img src="resources/event.jpg" alt="Placeholder image" class="modal-button" data-target="modal-image2">' +
        '</img> </figure> </div> <div class="card-content"> <div class="content"> <h4>' +
        obj.title +
        ": " +
        obj.dateTime +
        "</h4> <p>" +
        obj.content +
        '</p> <button class="button is-link" id="' +
        obj.id +
        '"  onClick="addClass(true , this.id)">I WILL GO</button> </div> <div class="level-right ' +
        visibility +
        '"><p class="has-text-danger"> 18+ </p> </div>  </div>  </div> </div>'
    );
  });
}

function generateListVisitor(index) {
  inputArray[index].people.map(function(obj) {
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
