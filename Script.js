var count=0;
function Numberr()
 {
    var number=document.getElementById("number").value;
    var re=/^[0-9]{7,11}$/;
    var node = document.getElementById('number-tooltip')
    if(!re.test(number))
    {      
        node.style.visibility = "visible"
        count++;
    }
    else
    {
        node.style.visibility = "hidden"
        
    }
}
 function FName()
 {
    var name=document.getElementById("first").value;
    var re=/^[A-Za-z]+$/;
    var node = document.getElementById('fname-tooltip') 
    if(!re.test(name))
    {
        node.style.visibility = "visible"
        count++;     
    }
    else
    {
        node.style.visibility = "hidden" 
    }
}
function LName()
 {
    var name=document.getElementById("last").value;
    var re=/^[A-Za-z]+$/;
    var node = document.getElementById('lname-tooltip')
    if(!re.test(name))
    {      
        node.style.visibility ="visible" 
        count++;
    }
    else
    {
        node.style.visibility = "hidden" 
    }
}
function city()
{
    var city=document.getElementById("select").value;
    var node = document.getElementById('select-tooltip')
    if(city.length==0)
    {
        node.style.visibility = "visible"
        count++;
        
    }
    else
    {
        node.style.visibility = "hidden"
    }
}
function Email()
 {
    var email=document.getElementById("mail").value;
    var re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var node = document.getElementById('mail-tooltip')
    if(!re.test(email))
    {      
        node.style.visibility = "visible"
        count++;
    }
    else
    {
        node.style.visibility = "hidden" 
    }
}
function gender()
 {
    var gender=document.getElementsByName("gender");
    var node = document.getElementById('gender-tooltip')
    if(gender[0].checked== false && gender[1].checked == false && gender[2].checked== false)
    {      
        node.style.visibility = "visible"
        count++;
    }
    else
    {
        node.style.visibility = "hidden" 
    }
}
function CheckAll()
{
    count=0;
    Numberr()
    FName()
    LName()
    Email()
    city()
    gender()
    if(count>0)
    return false;
    else
    return true;
    
   
}