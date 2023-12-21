let excellentCount = 0;
let goodCount = 0;
let failCount = 0;
let failStudentsList = [];

function processStudent() {
    const surname = document.getElementById("surname").value;
    if (!surname) {
        alert("Введіть прізвище студента.");
        return;
    }

    const grade1 = parseInt(document.getElementById("grade1").value);
    const grade2 = parseInt(document.getElementById("grade2").value);
    const grade3 = parseInt(document.getElementById("grade3").value);
    const grade4 = parseInt(document.getElementById("grade4").value);
    const grade5 = parseInt(document.getElementById("grade5").value);

    if (
        isNaN(grade1) ||
        isNaN(grade2) ||
        isNaN(grade3) ||
        isNaN(grade4) ||
        isNaN(grade5)
    ) {
        alert("Будь ласка, введіть всі оцінки.");
        return;
    }

    const grades = [grade1, grade2, grade3, grade4, grade5];

    const sum = grades.reduce((acc, grade) => acc + grade, 0);

    if (grades.every(grade => grade === 5)) {
        excellentCount++;
    } else if (grades.includes(2)) {
        failCount++;
        failStudentsList.push(surname);
    } else if (grades.includes(4) && grades.includes(5)) {
        goodCount++;
    }

    updateSummary();
    resetForm();
}

function updateSummary() {
    document.getElementById("excellentCount").innerText = excellentCount;
    document.getElementById("goodCount").innerText = goodCount;
    document.getElementById("failCount").innerText = failCount;

    const failStudentsListElement = document.getElementById("failStudentsList");
    failStudentsListElement.innerHTML = "";
    failStudentsList.forEach(surname => {
        const li = document.createElement("li");
        li.innerText = surname;
        failStudentsListElement.appendChild(li);
    });
}

function resetForm() {
    document.getElementById("studentForm").reset();
}

function generateRandomGrade(inputId) {
    const inputElement = document.getElementById(inputId);
    const randomGrade = Math.floor(Math.random() * 4) + 2;
    inputElement.value = randomGrade;
}

function generateAllGrades() {
    generateRandomGrade("grade1");
    generateRandomGrade("grade2");
    generateRandomGrade("grade3");
    generateRandomGrade("grade4");
    generateRandomGrade("grade5");
}

function resetAll() {
    excellentCount = 0;
    goodCount = 0;
    failCount = 0;
    failStudentsList = [];
    updateSummary();
    document.getElementById("failStudentsList").innerHTML = "";
}
