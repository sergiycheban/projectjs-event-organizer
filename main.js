var inputArray = [
  {
    title: "Plovdiv 2019",
    content:
      "След четири години подготовка, програмата на „Пловдив – Европейска столица на културата 2019“ е вече факт",
    dateTime: "21-10-2019",
    isAdulthood: false
  },
  {
    title: "Plovdiv 2020",
    content:
      "След четири години подготовка, програмата на „Пловдив – Европейска столица на културата 2019“ е вече факт",
    dateTime: "21-10-2019",
    isAdulthood: false
  },
  {
    title: "Plovdiv 2021",
    content:
      "След четири години подготовка, програмата на „Пловдив – Европейска столица на културата 2019“ е вече факт",
    dateTime: "21-10-2019",
    isAdulthood: false
  },
  {
    title: "Plovdiv 2025",
    content:
      "След четири години подготовка, програмата на „Пловдив – Европейска столица на културата 2019“ е вече факт",
    dateTime: "21-10-2019",
    isAdulthood: true
  },
  {
    title: "Plovdiv 2026",
    content:
      "След четири години подготовка, програмата на „Пловдив – Европейска столица на културата 2019“ е вече факт",
    dateTime: "21-10-2019",
    isAdulthood: false
  }
];

function generateList() {
  inputArray.map(function(obj) {
    var d1 = document.getElementById("myList1");

    var visibility = obj.isAdulthood ? "" : "is-hidden";

    d1.insertAdjacentHTML(
      "afterend",
      '<div class="card"> <div class="card-content"> <div class="media"> <div class="media-content"> <p class="title is-4">' +
        obj.title +
        '</div> </div> <div class="content">' +
        obj.content +
        "<br /> <time>" +
        obj.dateTime +
        '</time> </div> </div> <div class="level-right ' +
        visibility +
        '"> <figure class="image is-24x24"> <img src="resources/18.png"> </div> </div>  '
    );
  });
}

function newElement() {
  var d1 = document.getElementById("myList1");
  var inputValueTitle = document.getElementById("title").value;
  var inputValueContent = document.getElementById("content").value;
  var inputValueDate = document.getElementById("date").value;
  var inputValueCheckbox = document.getElementById("checkbox").checked;

  var visibility = inputValueCheckbox ? "" : "is-hidden";

  if (
    inputValueTitle === "" &&
    inputValueContent === "" &&
    inputValueTitle === ""
  ) {
    alert("You must write something!");
  } else {
    inputArray.push({
      title: inputValueTitle,
      content: inputValueContent,
      dateTime: inputValueDate
    });
    d1.insertAdjacentHTML(
      "afterend",
      '<div class="card"> <div class="card-content"> <div class="media"> <div class="media-content"> <p class="title is-4">' +
        inputValueTitle +
        '</figure> </div> </div> <div class="content">' +
        inputValueContent +
        "<br /> <time>" +
        inputValueDate +
        '</time> </div> </div> <div class="level-right ' +
        visibility +
        '"> <figure class="image is-24x24"> <img src="./resources/18.png"> </div> </div>  '
    );
  }
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  document.getElementById("date").value = "";
  document.getElementById("checkbox").checked = false;
}
