async function loadStudents() {
    try {
        const response = await fetch("students.json");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const studentList = document.querySelector("#student-list");

        for (const member of data.wclass) {
            const student = member.student;

            const item = document.createElement("li");

            const id = document.createTextNode(
                `${student["@attributes"].id} `
            );

            const name = document.createElement("strong");
            name.textContent = student.name;

            const text = document.createTextNode(" has skills ");

            const skill = document.createElement("em");
            skill.textContent = student.skill;

            item.appendChild(id);
            item.appendChild(name);
            item.appendChild(text);
            item.appendChild(skill);

            studentList.appendChild(item);
        }

    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

loadStudents();