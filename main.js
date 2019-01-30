//When deleting all events, everything is restored to the default value,
//this can be avoided by commenting out this {if} )
if (localStorage.getItem("arrayOfEvents").length == 2)
  localStorage.setItem("arrayOfEvents", JSON.stringify(arrayOfEvents));

// Съхранява в колекция списък с всички събития, които са организирани.
var retrievedObject = localStorage.getItem("arrayOfEvents");
arrayOfEvents = JSON.parse(retrievedObject);

var listNumberOfVisitors = [];
var idNow;

// Визуализирайте списък с всички клиенти които присъстват на определено събитие.
// Предоставете възможност да бъдат филтрирани по пол, тоест да се визуализират само
// мъжете или само жените.
function showVisitors(id, gender) {
  var modalVisitor = document.getElementById("modalVisitor");
  modalVisitor.className += " is-active";
  var index = arrayOfEvents.findIndex(x => x.id == id);

  if (gender == "Male") {
    generateListVisitor(Utils.sortByGender(id, "Male"), index);
  } else if (gender == "Female") {
    generateListVisitor(Utils.sortByGender(id, "Female"), index);
  } else {
    generateListVisitor(arrayOfEvents[index].people, index);
  }
}

function addClass(isActive, id) {
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

// Добавете клиент към вече създадено събитие. Ако възрастта на клиента не му позволява
// да присъства на събитието, известете с помощта на необходимото съобщение.
function visitTheEvent() {
  var modal = document.getElementById("modal");

  var FNameLName = document.getElementById("FNameLNaeme").value;
  var maleRadio = document.getElementById("maleRadio").checked;
  var age = document.getElementById("age").value;

  var gender = maleRadio ? "Male" : "Female";

  var index = arrayOfEvents.findIndex(x => x.id == idNow);
  if (arrayOfEvents[index].isAdulthood) {
    if (age >= 18) {
      arrayOfEvents[index].people.push({
        name: FNameLName,
        age: age,
        gender: gender,
        money: 1000
      });
      localStorage.setItem("arrayOfEvents", JSON.stringify(arrayOfEvents));
    } else {
      alert("YOU DONT HAVE 18 YERS");
    }
  } else {
    arrayOfEvents[index].people.push({
      name: FNameLName,
      age: age,
      gender: gender,
      money: 1000
    });
    localStorage.setItem("arrayOfEvents", JSON.stringify(arrayOfEvents));
  }
  modal.className = "modal";
}

// Създайте функционалност за извеждане на събитието с най-много добавени клиенти. Ако
// такова не съществува (всички са с равен брой) или не съществуват събития изведете
// необходимите съобщения, по ваш избор.
function bestFit() {
  var arrayOfLength = [];
  if ((arrayOfEvents = [])) {
    alert("Dont have avents");
    return;
  }
  arrayOfEvents.map(function(obj) {
    arrayOfLength.push(obj.people.length);
  });

  var i = Utils.getIndexByMaxValue(arrayOfLength);
  console.log(arrayOfEvents[i]);
}

// Създайте механизъм за филтриране на събития по определен критерии. Функцията трябва
// да има възможност да получава име / или флаг за достъп и да визуализира само тези
// събития които отговарят на критериите.
function sortByCriterion(word) {
  var arrayOfFindEvent = [];
  arrayOfEvents.map(function(obj) {
    var isFind = obj.title.search(word);
    if (isFind != -1) arrayOfFindEvent.push(obj);
  });
  console.log(arrayOfFindEvent);
}

// Изведете всички събития които са подходящи за малолетни посетители
function onlyYoung() {
  var onlyYoungList = [];
  arrayOfEvents.map(function(obj) {
    if (!obj.isAdulthood) onlyYoungList.push(obj);
  });
  console.log(onlyYoungList);
}
