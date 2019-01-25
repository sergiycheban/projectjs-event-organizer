var CRUD = {
    deleteEvent :function(id){ 
    console.log( " ckajc'sianclasjca " )
    index = inputArray.findIndex(x => x.id==id);
    inputArray.splice(index, 1);
    localStorage.setItem('inputArray', JSON.stringify(inputArray));
    document.location.reload(true);
},
newElement: function () {
    var d1 = document.getElementById("list");
    var inputValueTitle = document.getElementById("title").value;
    var inputValueContent = document.getElementById("content").value;
    var inputValueDate = document.getElementById("date").value;
    var inputValueCheckbox = document.getElementById("checkbox").checked;
  
    var visibility = inputValueCheckbox ? "" : "is-hidden";
    var id = Utils.getUniqueId();
    console.log(inputValueTitle)
  
    if (
      inputValueTitle === "" ||
      inputValueContent === "" ||
      inputValueTitle === ""
    ) {
      alert("You must write something!");
    } else {
      inputArray.push({
        id: id,
        title: inputValueTitle,
        content: inputValueContent,
        dateTime: inputValueDate,
        isAdulthood: inputValueCheckbox
      });
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
          '</time> </div> </div> <div class="level-right ' +
          visibility +
          '"> <figure class="image is-24x24"> <img src="./resources/18.png"> </div> </div>  '
      );
     }
    Utils.setEmptyForm();
  
    localStorage.setItem('inputArray', JSON.stringify(inputArray));
  }
}