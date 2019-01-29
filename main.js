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
        " </footer></div>"
    );
  });
}

function showVisitors(id, gender) {
  var modalVisitor = document.getElementById("modalVisitor");
  modalVisitor.className += " is-active";
  var index = inputArray.findIndex(x => x.id == id);

  if (gender == "Male") {
    generateListVisitor(Utils.sortByGender(id, "Male"), index);
  } else if (gender == "Female") {
    generateListVisitor(Utils.sortByGender(id, "Female"), index);
  } else {
    generateListVisitor(inputArray[index].people, index);
  }
}

function addClass(isActive, id) {
  console.log(inputArray);
  var modal = document.getElementById("modal");
  if (isActive) {
    modal.className += " is-active";
  } else {
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

function visitTheEvent() {
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

function openTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("content-tab");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" is-active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " is-active";
}


function generateListForUser() {
  inputArray.map(function(obj) {
    var d = document.getElementById("listForUser");

    var visibility = obj.isAdulthood ? "" : "is-hidden";

    d.insertAdjacentHTML(
      "afterend",
      ' <div class="column is-4"> <div id="'+ obj.id+'Div" class="card"> <div class="card-image">' +
        '<figure class="image is-4by3"> <img src="resources/photo-1520011597487-ebdd1ea20ab0.jpg" alt="Placeholder image" class="modal-button" data-target="modal-image2">' +
        '</img> </figure> </div> <div class="card-content"> <div class="content"> <h4>' +
        obj.title +
        ": " +
        obj.dateTime +
        "</h4> <p>" +
        obj.content +
        '</p>     <div class="columns"> <div class="column">  <button class="button is-light" id="' +
        obj.id +
        '"  onClick="addClass(true , this.id)">I WILL GO</button> </div><div class="column"> </div> <div class="level-right ' +
        visibility +
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
