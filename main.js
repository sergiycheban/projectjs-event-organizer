//localStorage.setItem("arrayOfEvents", JSON.stringify(arrayOfEvents));

// Съхранява в колекция списък с всички събития, които са организирани.
var retrievedObject = localStorage.getItem("arrayOfEvents");
arrayOfEvents = JSON.parse(retrievedObject);

var listNumberOfVisitors = [];
var idNow;

var isLock = false;

// Визуализирайте списък с всички клиенти които присъстват на определено събитие.
// Предоставете възможност да бъдат филтрирани по пол, тоест да се визуализират само
// мъжете или само жените.
function showVisitors(id, gender) {
  if (isLock) {
    alert("System lock");
    return;
  }
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

function showModalVisitorReg(isActive, id) {
  if (isLock) {
    alert("System lock");
    return;
  }
  var modal = document.getElementById("modal");
  if (isActive) {
    modal.className += " is-active";
  } else {
    modal.className = "modal";
  }

  idNow = id;
}

// Създайте функционалност който да спира добавянето на събития или добавянето на
// клиенти на централно ниво. Когато бъде активирана при опит да се добави събитие или
// клиент потребителя получава съобщение че операцията не може да бъде извършена,
// защото системата е затворена.
function lock(isLockUnlock) {
  isLock = isLockUnlock;
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

// Създайте функционалност за архивиране на събития. Архивираните събития не могат да
// приемат гости. Архивираните събития, могат да бъдат само и единствено преглеждани
// като такива.
// Названието на всяко архивирано събитие трябва да започва със символа ~
function archivedEvent(id) {
  arrayOfEvents.map(function(obj) {
    if (obj.id == id) {
      if (obj.isArchive == true) {
        obj.isArchive = false;
        localStorage.setItem("arrayOfEvents", JSON.stringify(arrayOfEvents));
        document.location.reload(true);
      } else {
        obj.title = "~ " + obj.title;
        obj.isArchive = true;
        localStorage.setItem("arrayOfEvents", JSON.stringify(arrayOfEvents));
        document.location.reload(true);
      }
    }
  });
}

// Създайте функционалност за листинг на архивирани събития. Разширете
// функционалността на листинга така че да могат да се листват
// o Всички събития
// o Само тези събития които предстоят да се посещават от клиенти
// o Само архивираните събития
function listingEvents() {
  var allEvents = [];
  var onlyVisitedEvents = [];
  var onlyArcheveEvents = [];
  arrayOfEvents.map(function(obj) {
    allEvents.push(obj);

    if (obj.people.length > 0) onlyVisitedEvents.push(obj);

    if (obj.isArchive === true) onlyArcheveEvents.push(obj);
  });
  console.log(allEvents);
  console.log(onlyVisitedEvents);
  console.log(onlyArcheveEvents);
}

// Създайте механизъм за филтриране на събития по определен критерии. Функцията трябва
// да има възможност да получава име / или флаг за достъп и да визуализира само тези
// събития които отговарят на критериите.
function sortByCriterion(parameter) {
  var arrayOfFindEvent = [];
  arrayOfEvents.map(function(obj) {
    if (typeof parameter === "boolean") {
      if (obj.isAdulthood) {
        arrayOfFindEvent.push(obj);
      }
    }
    var isFind = obj.title.search(parameter);
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
