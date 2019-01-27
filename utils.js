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
    var temp = [];
    var index = inputArray.findIndex(x => x.id == id);

    temp = inputArray[index].people.filter(function(obj) {
      return obj.gender == gender;
    });

    return temp;
  }
};
