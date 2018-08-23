var index = -1;
RegExp.escape = function (s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};
function suggest() {

    var arr = ["Ankita", "Anushka","Ashwarya","Ayush","Bhargavi","Gurbaksh","Mohit","Neha","Nihit","Paarth","Pallavi", "Ragul","Rajpreet", "Raja","Saurabh","Shreea","Smriti", "Shrijeet","Swapnil","Swinal","Utkarsh","Vishwas"];
    var count = 0;
    var input = document.getElementById('value');
    document.getElementById('list').innerHTML = "";
    var listItems = document.getElementById('list');
    var dropdown = document.getElementById('dropdown');
    dropdown.style.display = 'none';
    listItems = "";
    if (input.value) {
        count = 0;
        dropdown.style.display ='block';
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
            node.style.overflow="auto";
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
document.getElementById("value").addEventListener("click",function () {
    var divToHide = document.getElementById('dropdown');
    document.onclick = function (e) {
        if (e.target.id !== 'dropdown' && e.target.id !== 'value') {
            divToHide.style.display = 'none';
        }
        else{
            suggest();
            index=-1;
        }
    }});
    document.getElementById("value").addEventListener("keyup",function (e) {
            if (e.which === 40 || e.which === 38 || e.which==13) {
                var ul = document.getElementById('list');
                var next = ul.getElementsByClassName('list-items');
                var len = next.length;;
                if (e.which === 40) {
                    index++;
                    if (next) {
                        if (next.length - index > 0) 
                        {
                            next = ul.getElementsByClassName('list-items')[index];
                            next.style.background = "#979797ab";
                        }
                        else 
                        {
                            next = ul.getElementsByClassName('list-items')[next.length-1];
                            next.style.background = "#979797ab";
                            index--;
                        }
                    } else {
                        next = ul.getElementsByClassName('list-items')[0];
                        next.style.background = "#979797ab";
                        index = 0;
                    }
                    if(index>4)
                    {
                         document.getElementById("dropdown").scrollBy(0,30);                        
                    }
                } else if (e.which === 38) {
                    index--;
                    if (next) {
                        if (index > -1) {
                            next = ul.getElementsByClassName('list-items')[index];
                            next.style.background = "#979797ab";
                        }
                        else {
                            next = ul.getElementsByClassName('list-items')[0];
                            next.style.background = "#979797ab";
                            index++;
                        }
                    } else {
                        next = ul.getElementsByClassName('list-items')[0];
                        next.style.background = "#979797ab";
                        index = 0;
                    }
                    if(index>0)
                    {
                         document.getElementById("dropdown").scrollBy(0,-30);                        
                    }
                }
                else if(e.which==13)
                {
                    setVal(next[index].innerHTML);
                }
            }
        });
function Delete() {
    document.getElementById('value').value = "";
}