var firstName="Rifat";
var lastName="Ishtiyak";

console.log(firstName+" "+lastName);

var student={
    name :"Rifat Ishtiyak",
    age: 20,
    section: 'A'
}

console.log(student.section + student.age);

var student2={
    boy:{
        name: "nameBoy1",
        section: "B"
    },
    girl:{
        name: "nameGirl1",
        section: "C"
    }
}

document.write(student2.boy.name);
document.write(student2.girl.name);

document.getElementById("heading").innerHTML="This is Heading";
