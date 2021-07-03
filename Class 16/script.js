
function sum(num1, num2, num3){
    sum=num1+num2+num3;
    return "Sum is : "+sum;
}

document.getElementById("sum").innerHTML=sum(10,20,30);


function count(){
    var countNo=document.getElementById("countNo").textContent;
    var countInt=parseInt(countNo);
    document.getElementById("countNo").innerHTML=countInt + 1;
}

function change(){
    document.getElementById("name").innerHTML="Name : Rifat Ishtiyak";
}

document.getElementById("name").addEventListener('click', change);