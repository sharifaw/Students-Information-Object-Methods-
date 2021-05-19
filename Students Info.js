let info = "John,Dorian,HTML,CSS,JS,83,56,91,8595 Fairground St.,Dublin,GA,6052834#Perry,Cox,HTML,CSS,JS,81,54,94,,,,5717021#Bob,Kelso,HTML,CSS,JS,73,81,71,8533 Riverside Street,,OK,6925288#Chris,Turk,HTML,CSS,JS,95,69,67,,,,5557148#John,Becker,HTML,CSS,JS,84,92,70,6 Glenridge Drive,Avon,,6925288#Fraiser,Crane,HTML,CSS,JS,62,82,69,,,,#Niles,Crane,HTML,CSS,JS,95,71,81,923 Shore Court,Apple Valley,CA,#Roz,Doyle,HTML,CSS,JS,84,62,100,,,,#Harvey,Specter,HTML,CSS,JS,89,55,100,660 Linda St.,Howard Beach,NY,#Mike,Ross,HTML,CSS,JS,86,46,78,,,,";

// convert the students string info to an array
function splitInfo(string) {
    return string.split("#");
}

// split each student's info to a separate array
function secondSplit(array) {
    return array.map((index) => index.split(","));
}

// get Students Proccess Information
function getStudents(students) {
    students = splitInfo(students);
    students = secondSplit(students);

    let array = [];
    students.map(function sort(studentInfo) {
        let obj =
        {
            firstName: "",
            lastName: "",
            courses: [{ title: "", grade: "" }, { title: "", grade: "" }, { title: "", grade: "" }],
            address: { street: null, city: null, state: null },
            phone: ""
        };

        [obj.firstName, obj.lastName, obj.courses[0].title, obj.courses[1].title, obj.courses[2].title, obj.courses[0].grade, obj.courses[1].grade, obj.courses[2].grade] = studentInfo;
        [, , , , , , , , obj.address.street, obj.address.city, obj.address.state] = studentInfo;
        [, , , , , , , , , , , obj.phone] = studentInfo;

        obj = checkAddress(obj);
        obj = getStudentsAverage(obj);

        (obj.avg>=80) ?array.push(obj):false; 
    })
    return array;
}

function checkAddress(value) {
    if (value.address.street === "" && value.address.city === "" && value.address.state === "") {
        value.address = "N/A";
    }

    if (value.address.street === "") {
        value.address.street = "N/A";
    }

    if (value.address.city === "") {
        value.address.city = "N/A";
    }

    if (value.address.state === "") {
        value.address.state = "N/A";
    }

    return value;
}

function getStudentsAverage(value) {
    value.avg = (value.courses.reduce((count, sum) => ((count) + Number(sum.grade)), 0) / value.courses.length);
    
    return value;
}

console.log(getStudents(info));