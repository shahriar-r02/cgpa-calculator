function generateInputs() {
    const count = parseInt(document.getElementById("courseCount").value);
    const container = document.getElementById("courseInputs");
    container.innerHTML = "";

    for (let i = 1; i <= count; i++) {
        const row = document.createElement("div");
        row.className = "course-row";

        const course = document.createElement("input");
        course.type = "text";
        course.placeholder = `Course ${i}`;

        const credit = document.createElement("input");
        credit.type = "number";
        credit.placeholder = "Credit";

        const gpa = document.createElement("input");
        gpa.type = "number";
        gpa.placeholder = "GPA";

        row.appendChild(course);
        row.appendChild(credit);
        row.appendChild(gpa);
        container.appendChild(row);
    }
}

function calculateCGPA() {
    const prevCredits = parseFloat(document.getElementById("completedCredits").value);
    const prevCGPA = parseFloat(document.getElementById("previousCGPA").value);
    const inputs = document.querySelectorAll("#courseInputs .course-row");

    let newCredits = 0;
    let totalGradePoints = 0;

    inputs.forEach(row => {
        const credit = parseFloat(row.children[1].value);
        const gpa = parseFloat(row.children[2].value);

        if (!isNaN(credit) && !isNaN(gpa)) {
            newCredits += credit;
            totalGradePoints += credit * gpa;
        }
    });

    const updatedCGPA = ((prevCGPA * prevCredits) + totalGradePoints) / (prevCredits + newCredits);
    document.getElementById("result").innerText = isNaN(updatedCGPA)
        ? "Please fill in all fields correctly."
        : `Your updated CGPA is ${updatedCGPA.toFixed(2)}`;
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}
