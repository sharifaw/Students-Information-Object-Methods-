// let info="John,Dorian,HTML,CSS,JS,83,56,91,8595 Fairground St.,Dublin,GA,6052834#Perry,Cox,HTML,CSS,JS,81,54,94,,,,5717021#Bob,Kelso,HTML,CSS,JS,73,81,71,8533 Riverside Street,,OK,6925288#Chris,Turk,HTML,CSS,JS,95,69,67,,,,5557148#John,Becker,HTML,CSS,JS,84,92,70,6 Glenridge Drive,Avon,,6925288#Fraiser,Crane,HTML,CSS,JS,62,82,69,,,,#Niles,Crane,HTML,CSS,JS,95,71,81,923 Shore Court,Apple Valley,CA,#Roz,Doyle,HTML,CSS,JS,84,62,100,,,,#Harvey,Specter,HTML,CSS,JS,89,55,100,660 Linda St.,Howard Beach,NY,#Mike,Ross,HTML,CSS,JS,86,46,78,,,,";
// function detalisStudent(strring){
//     let arrayinfo=strring.split("#");
//     function sortinfo(array){
//         let obj={};
//         let newArray=[];
//         array.map(function sam(item){
//             [obj.firstname,obj.lastname,obj.title,obj.title2,obj.title3,obj.grade1,obj.grade2,obj.grade3,obj.street,obj.city,obj.state,obj.phone]=item.split(",");
//             newArray.push(obj);
//             obj={};
//         });
//         return newArray;
//     }
//  console.log(sortinfo(arrayinfo));
// }
// console.log(detalisStudent(info));

// let info="John,Dorian,HTML,CSS,JS,83,56,91,8595 Fairground St.,Dublin,GA,6052834#Perry,Cox,HTML,CSS,JS,81,54,94,,,,5717021#Bob,Kelso,HTML,CSS,JS,73,81,71,8533 Riverside Street,,OK,6925288#Chris,Turk,HTML,CSS,JS,95,69,67,,,,5557148#John,Becker,HTML,CSS,JS,84,92,70,6 Glenridge Drive,Avon,,6925288#Fraiser,Crane,HTML,CSS,JS,62,82,69,,,,#Niles,Crane,HTML,CSS,JS,95,71,81,923 Shore Court,Apple Valley,CA,#Roz,Doyle,HTML,CSS,JS,84,62,100,,,,#Harvey,Specter,HTML,CSS,JS,89,55,100,660 Linda St.,Howard Beach,NY,#Mike,Ross,HTML,CSS,JS,86,46,78,,,,";
// function detalisStudent(strring){
//     let arrayinfo=strring.split("#");
//     function sortinfo(array){
//         let obj={firstName:"",
//         lastName:"",
//     courses:[{title:"",grade:""},{title:"",garde:""},{title:"",grade:""}],
//         address:{street:"",city:"",state:""},phone:""};
//         let newArray=[];
//         // let obj={firstName:""};
//         // array.map()
//         for(value in array){
//           [obj.firstName,obj.lastName,obj.courses[0]]=array[value].split(",");
//         //   let {firstname}=obj;
//             newArray.push(obj);
//             obj={};
//             //  newArray++;
//         }
//         return newArray;
//     }
//  console.log(sortinfo(arrayinfo));
// }
// console.log(detalisStudent(info));

let info = "John,Dorian,HTML,CSS,JS,83,56,91,8595 Fairground St.,Dublin,GA,6052834#Perry,Cox,HTML,CSS,JS,81,54,94,,,,5717021#Bob,Kelso,HTML,CSS,JS,73,81,71,8533 Riverside Street,,OK,6925288#Chris,Turk,HTML,CSS,JS,95,69,67,,,,5557148#John,Becker,HTML,CSS,JS,84,92,70,6 Glenridge Drive,Avon,,6925288#Fraiser,Crane,HTML,CSS,JS,62,82,69,,,,#Niles,Crane,HTML,CSS,JS,95,71,81,923 Shore Court,Apple Valley,CA,#Roz,Doyle,HTML,CSS,JS,84,62,100,,,,#Harvey,Specter,HTML,CSS,JS,89,55,100,660 Linda St.,Howard Beach,NY,#Mike,Ross,HTML,CSS,JS,86,46,78,,,,";

function splitInfo (value){
    return value.split("#");
}
//console.log(splitInfo(info));
// value.map (a => a.split(","));
function secondSplit (value){
    return value.map ((a) => a.split(","));
}

//console.log(secondSplit(splitInfo(info)));

function addInfo (obj){
    
    let array = [];
    obj.map(function sort(a){
        let obj1={
            firstName:"",
            lastName:"",
            courses:[{title:"",grade:""},{title:"",grade:""},{title:"",grade:""}],
            address:{street:null,city:null,state:null},
            phone:""};
        [obj1.firstName,obj1.lastName,obj1.courses[0].title,obj1.courses[1].title,obj1.courses[2].title,obj1.courses[0].grade,obj1.courses[1].grade,obj1.courses[2].grade]=a;
        [,,,,,,,,obj1.address.street,obj1.address.city,obj1.address.state]=a;
        [,,,,,,,,,,,obj1.phone]=a;
        
        array.push(obj1);
        
    })
    return array;
}



// console.log(addInfo(secondSplit(splitInfo(info))));

function checkAddress(value){
    value.map(a => {
        if(a.address.street==="" && a.address.city==="" && a.address.state==="")
    {
         a.address = "N/A";
    }
    if(a.address.street === "")
    {
        a.address.street = "N/A";
    }
    if(a.address.city === "")
    {
        a.address.city = "N/A";
    }
    if(a.address.state === "")
    {
         a.address.state = "N/A";
    }

});
return value
}

console.log(checkAddress(addInfo(secondSplit(splitInfo(info)))));

function getTopStudent (value)
{
    //console.log(value.courses);
    value.map((a)=>
    {
       a.avg= (a.courses.reduce((c,b)=>((c)+Number(b.grade)),0)/a.courses.length) 
    }
    )
    
    return value.filter((c)=>c.avg>=80);
    
}


 console.log(getTopStudent(checkAddress(addInfo(secondSplit(splitInfo(info))))));
