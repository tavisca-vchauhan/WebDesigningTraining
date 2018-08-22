RegExp.escape = function (s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};
function suggest() {
    var arr = ["Pallavi", "Ragul", "Raja", "Anushka", "Bhargavi", "Swinal", "Utkarsh", "Saurabh", "Vishwas", "Paarth", "Gurbaksh", "Ashwarya", "Swapnil", "Ayush", "Shreea", "Smriti", "Shrijeet", "Ankita", "Rajpreet", "Neha", "Nihit", "Mohit"];
    var count = 0;
    var input = document.getElementById('value');
    document.getElementById('list').innerHTML = "";
    var listItems = document.getElementById('list');
    var dropdown = document.getElementById('dropdown');
    dropdown.style.display = 'none';
    listItems = "";
    if (input.value) {
        count = 0;
        dropdown.style.display = 'block';
        listItems.size = 3;
        var showData = input.value;
        for (var i = 0; i < arr.length; i++) {
            var testableRegExp = new RegExp(RegExp.escape(showData), "i");
            if (arr[i].match(testableRegExp)) {
                addValue(arr[i]);
            }
        }
        if (count == 0) {
            addValue("No data found");
        }
    }
    function addValue(text) {
        count++;
        var node = document.getElementById('dropdown')
        if (count > 5) {
            node.style.overflow = "auto";
        }
        listItems = document.getElementById('list');
        var list = document.createElement("li");
        list.setAttribute("value", text);
        list.setAttribute("onclick", "setVal(this.innerHTML)");
        list.setAttribute("class", "list-items");
        list.innerHTML = text;
        listItems.appendChild(list);
    }
}
function setVal(x) {
    document.getElementById('value').value = x;
    document.getElementById('dropdown').style.display = 'none';
}
window.onload = function(){
    var divToHide = document.getElementById('dropdown');
    document.onclick = function(e){
      if(e.target.id !== 'dropdown'){
        //element clicked wasn't the div; hide the div
        divToHide.style.display = 'none';
      }
    };
  };