const courses = [
    { id: "WDD230", name: "Web Frontend Development", completed: true, credits: 3 },
    { id: "WDD231", name: "Web Frontend II", completed: false, credits: 3 },
    { id: "CSE121B", name: "JavaScript Language", completed: true, credits: 3 }
];

function displayCourses(courseList) {
    const courseContainer = document.getElementById("course-list");
    courseContainer.innerHTML = "";
    courseList.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.textContent = `${course.id}: ${course.name} (${course.credits} credits)`;
        courseDiv.style.background = course.completed ? "#a0ffa0" : "#ffaaaa";
        courseContainer.appendChild(courseDiv);
    });
    updateCredits(courseList);
}

function filterCourses(type) {
    if (type === "all") {
        displayCourses(courses);
    } else {
        const filtered = courses.filter(course => course.id.startsWith(type));
        displayCourses(filtered);
    }
}

function updateCredits(courseList) {
    const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);
    const creditDisplay = document.getElementById("credit-total");
    if (!creditDisplay) {
        const newCreditDisplay = document.createElement("p");
        newCreditDisplay.id = "credit-total";
        newCreditDisplay.textContent = `Total Credits: ${totalCredits}`;
        document.getElementById("course-list").appendChild(newCreditDisplay);
    } else {
        creditDisplay.textContent = `Total Credits: ${totalCredits}`;
    }
}

// Display all courses initially
displayCourses(courses);
