function addEducation() {
  const input = document.getElementById("edu-input");
  const value = input.value.trim();
  if (value) {
    const container = document.getElementById("education-list");
    const div = document.createElement("div");
    div.className = "edu-item";
    div.innerHTML = value;
    container.appendChild(div);
    input.value = "";
  }
}

function addSkill() {
  const input = document.getElementById("skill-input");
  const value = input.value.trim();
  if (value) {
    const ul = document.getElementById("skills-list");
    const li = document.createElement("li");
    li.textContent = value;
    ul.appendChild(li);
    input.value = "";
  }
}

function addExperience() {
  const roleInput = document.getElementById("exp-role");
  const detailsInput = document.getElementById("exp-details");
  const role = roleInput.value.trim();
  const details = detailsInput.value.trim();

  if (role && details) {
    const container = document.getElementById("experience-list");

    const div = document.createElement("div");
    div.className = "job";

    const h4 = document.createElement("h4");
    h4.innerHTML = `${role} <span>Yeni</span>`;
    
    const p = document.createElement("p");
    p.textContent = "Marketing Manager & Specialist";

    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.textContent = details;
    ul.appendChild(li);

    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(ul);
    container.appendChild(div);

    roleInput.value = "";
    detailsInput.value = "";
  }
}
