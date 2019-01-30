var Utils = {
  getUniqueId: function() {
    return "xxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  },
  createHtml: function(tag, className, id, text) {
    return (
      "<" +
      tag +
      "id='" +
      id +
      "class='" +
      className +
      ">" +
      text +
      "</" +
      tag +
      ">"
    );
  },
  setEmptyForm: function() {
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    document.getElementById("date").value = "";
    document.getElementById("checkbox").checked = false;
  },
  changeHTML: function(newURL) {
    location.replace(newURL);
  },
  sortByGender: function(id, gender) {
    var listSortByGender = [];
    var index = arrayOfEvents.findIndex(x => x.id == id);

    listSortByGender = arrayOfEvents[index].people.filter(function(obj) {
      return obj.gender == gender;
    });

    return listSortByGender;
  },
  openTab: function(evt, tabName) {
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
  },

  // Всички събития, които са платени трябва да визуализират заглавията си със знака $ пред
  // имената си. Безплатни събития трябва да визуализират имената си със знак “!”
  addSymbolPrice: function() {
    var arrayWithSymbolPrice = [];
    arrayOfEvents.map(function(obj) {
      if (obj.price != 0) {
        arrayWithSymbolPrice.push("$" + obj.title);
      } else {
        arrayWithSymbolPrice.push("!" + obj.title);
      }
      console.log(arrayWithSymbolPrice);
    });
  },

  // Изведете всички събития като ги групирате, събитията които са предназначени за
  // пълнолетни посетители трябва да имат звездичка пред името си “*” а тези подходящи за
  // непълнолетни диез “#”
  addSymbolAgeControl: function() {
    var arrayWithSymbolAgeControl = [];
    arrayOfEvents.map(function(obj) {
      if (obj.isAdulthood) {
        arrayWithSymbolAgeControl.push("*" + obj.title);
      } else {
        arrayWithSymbolAgeControl.push("#" + obj.title);
      }
      console.log(arrayWithSymbolAgeControl);
    });
  },

  getIndexByMaxValue: function(array) {
    return array.indexOf(Math.max(...array));
  }
};
