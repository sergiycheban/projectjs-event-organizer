var CRUD = {
  // Изтрива събитие по уникален идентификатор, и извежда съобщение за успешно
  // извършена операция
  deleteEvent: function(id) {
    var index = arrayOfEvents.findIndex(x => x.id == id);
    arrayOfEvents.splice(index, 1);
    localStorage.setItem("arrayOfEvents", JSON.stringify(arrayOfEvents));
    document.location.reload(true);
  },

  // Премахнете присъстващ потребител от събитието.
  deleteVisitor: function(index, name) {
    var i = arrayOfEvents[index].people.findIndex(x => x.name == name);
    arrayOfEvents[index].people.splice(i, 1);
    localStorage.setItem("arrayOfEvents", JSON.stringify(arrayOfEvents));
    document.location.reload(true);
  },

  // Създава ново събитие. Задължителни атрибути на събитието са неговото име. Ако
  // потребителя не подаде флаг, указващ дали събитието е подходящо за непълнолетни то по
  // подразбиране е.
  // Актуализира събитие по уникален идентификатор и изведете съобщение за правилно
  // извършена операция.
  newElement: function() {
    var d1 = document.getElementById("listAdmin");
    var inputValueTitle = document.getElementById("title").value;
    var inputValueContent = document.getElementById("content").value;
    var inputValueDate = document.getElementById("date").value;
    var inputValueCheckbox = document.getElementById("checkbox").checked;
    var inputPrice = document.getElementById("price").value;

    var visibility = inputValueCheckbox ? "" : "is-hidden";
    var visibilityPrice = inputPrice != 0 ? "" : "is-hidden";
    var id = Utils.getUniqueId();
    console.log(inputValueTitle);

    if (inputValueTitle === "" || inputValueContent === "") {
      alert("You must write something!");
    } else {
      arrayOfEvents.push({
        id: id,
        title: inputValueTitle,
        content: inputValueContent,
        // Добавете възможност за запазване на текуща дата на събитието.
        dateTime: inputValueDate,
        isAdulthood: inputValueCheckbox,
        // Добавете, свойство цена към всяко събитие което организирате.
        price: inputPrice,
        isArchive: false,
        people: []
      });

      alert("Event added");

      d1.insertAdjacentHTML(
        "afterend",
        '<div class="card"> <a class="level-right" onClick="CRUD.deleteEvent(this.id)" id="' +
          id +
          '"class="button is-danger is-outlined"><span class="icon is-small"> <i class="fas fa-times"></i> </span> </a> <div class="card-content"> <div class="media"> <div class="media-content"> <p class="title is-4">' +
          inputValueTitle +
          '</figure> </div> </div> <div class="content">' +
          inputValueContent +
          "<br /> <time>" +
          inputValueDate +
          '</time> </div> </div><div class="level-right ' +
          visibilityPrice +
          '"> <figure class="image is-24x24"> <img src="resources/price-icon-22.png"> </div> <div class="level-right ' +
          visibility +
          '"> <figure class="image is-24x24"> <img src="./resources/18.png"> </div><footer class="card-footer"><p class="card-footer-item">' +
          "New event</p></footer> </div>  "
      );
    }
    Utils.setEmptyForm();

    localStorage.setItem("arrayOfEvents", JSON.stringify(arrayOfEvents));
    console.log(arrayOfEvents);
  }
};
