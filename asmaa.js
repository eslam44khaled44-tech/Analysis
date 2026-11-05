// Student Management System

// 1. Student Class

class Student {

constructor(id, name, grades, attendance) {
    this.id = id;
    this.name = name;
    this.grades = grades;
    this.attendance = attendance;
}

// Calculate Average

calculateAverage() {
    const total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return total / this.grades.length;
}

// Calculate Grade

getGrade(average) {

    if (average >= 90) {
        return "A";
    }
    else if (average >= 80) {
        return "B";
    }
    else if (average >= 70) {
        return "C";
    }
    else if (average >= 60) {
        return "D";
    }
    else if (average >= 50) {
        return "E";
    }
    else {
        return "F";
    }

}

// Calculate Final Result

getResult(average) {

    if (average >= 50 && this.attendance >= 75) {
        return "Passed - ناجح";
    }
    else {
        return "Failed - راسب";
    }

}


}

// 2. Students Array

const studentsList = [];

// 3. Add Student Function

function addStudent() {

const idValue = document.getElementById("studentId").value;
const name = document.getElementById("studentName").value.trim();

const grade1Value = document.getElementById("grade1").value;
const grade2Value = document.getElementById("grade2").value;
const grade3Value = document.getElementById("grade3").value;
const attendanceValue = document.getElementById("attendance").value;

// Check Empty Fields

if (
    idValue === "" ||
    name === "" ||
    grade1Value === "" ||
    grade2Value === "" ||
    grade3Value === "" ||
    attendanceValue === ""
) {
    alert("Please fill in all fields!");
    return;
}

const id = Number(idValue);

const grades = [
    Number(grade1Value),
    Number(grade2Value),
    Number(grade3Value)
];

const attendance = Number(attendanceValue);

// Check Valid Numbers

if (
    !Number.isInteger(id) ||
    id <= 0 ||
    grades.some(grade => !Number.isFinite(grade) || grade < 0 || grade > 100) ||
    !Number.isFinite(attendance) ||
    attendance < 0 ||
    attendance > 100
) {
    alert("Please enter valid numbers between 0 and 100!");
    return;
}

// Check Duplicate ID

if (studentsList.some(student => student.id === id)) {
    alert("This Student ID already exists!");
    return;
}

// Create Student Object

const student = new Student(id, name, grades, attendance);

studentsList.push(student);

// Calculate Results

const total = grades.reduce((sum, grade) => sum + grade, 0);

const average = student.calculateAverage();

const grade = student.getGrade(average);

const result = student.getResult(average);

// Display Student Report

const resultsContainer = document.getElementById("resultsContainer");

const card = document.createElement("div");

card.className = "student-card";

const statusClass = result.startsWith("Passed") ? "passed" : "failed";

card.innerHTML = `
    <h3>Student Report</h3>

    <p><strong>Student ID:</strong> ${student.id}</p>

    <p><strong>Student Name:</strong> ${student.name}</p>

    <p><strong>Programming:</strong> ${student.grades[0]}</p>

    <p><strong>JavaScript:</strong> ${student.grades[1]}</p>

    <p><strong>HTML & CSS:</strong> ${student.grades[2]}</p>

    <p><strong>Attendance:</strong> ${student.attendance}%</p>

    <p><strong>Total Grades:</strong> ${total}</p>

    <p class="average">
        Average: ${average.toFixed(2)}
    </p>

    <p><strong>Grade:</strong> ${grade}</p>

    <div class="status ${statusClass}">
        Final Result: ${result}
    </div>
`;

resultsContainer.appendChild(card);

// Clear Inputs

document.getElementById("studentId").value = "";
document.getElementById("studentName").value = "";
document.getElementById("grade1").value = "";
document.getElementById("grade2").value = "";
document.getElementById("grade3").value = "";
document.getElementById("attendance").value = "";


}