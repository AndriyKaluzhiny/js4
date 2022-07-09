let array = [-31, -223, 12, 22, 412, 2, 1, 0, 55, 67, 56, 123, 321, 65, 234, 765, 34, 48, 237];

console.log(array);


function customSort(a, b) {
    return a - b;
}


array.sort(customSort);

console.log(array);

array.sort(function (a, b) {
    return b - a;
});

console.log(array);

let filteredMoreThanZero = array.filter(function (num) {
    return num >= 0;
});

let filteredLessThanZero = array.filter(function (num1) {
    return num1 <= 0;
});


console.log(filteredLessThanZero);
console.log(filteredMoreThanZero);


function devider() {
    console.log("-----------------------------");
}

devider();

console.log("Max");

let arrayOfStudents = [];

let student1 = {
    yearOfStudying: 2,
    facultyName: "Faculty"
};

let student2 = {
    yearOfStudying: 3,
    facultyName: "Faculty"
};

let student3 = {
    yearOfStudying: 4,
    facultyName: "Faculty"
};

let student4 = {
    yearOfStudying: 2,
    facultyName: "Faculty"
};

let student5 = {
    yearOfStudying: 2,
    facultyName: "Faculty"
};

let student6 = {
    yearOfStudying: 2,
    facultyName: "Faculty"
};

let student7 = {
    yearOfStudying: 3,
    facultyName: "Faculty"
};

let student8 = {
    yearOfStudying: 1,
    facultyName: "Faculty"
};

let student9 = {
    yearOfStudying: 2,
    facultyName: "Faculty"
};

let student10 = {
    yearOfStudying: 3,
    facultyName: "Faculty"
};

arrayOfStudents.push(student1, student2, student3, student5, student6, student7, student8, student9, student10);
console.log(arrayOfStudents);

let facultyNameArray = arrayOfStudents.map(function (obj) {
    return obj.facultyName;
});


console.log(facultyNameArray);

let summary = arrayOfStudents.reduce(function(sum, obj) {
    return sum + obj.yearOfStudying;
}, 0);

console.log("Summary = "+ summary);
