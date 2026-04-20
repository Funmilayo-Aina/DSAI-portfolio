// ======================= script.js =======================
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

async function loadGitHub() {
  const repos = [
    "Mini-E-Learning-Platform",
    "Natural-Language-Processing",
    "DEEP-LEARNING-PROJECTS",
    "NUPATBACKEND-WebAPI",
    "AI-for-Sustainable-Development",
    "Databricks_Medallion",
    "Smart-Farm-Sensor-EDA",
    "AI_Detective_Blog",
    "NUPAT_Projects",
  ];

  let container = document.getElementById("github-projects");

  repos.forEach((repo) => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${repo}</h3><a href="https://github.com/Funmilayo-Aina/${repo}" target="_blank">View Project</a>`;
    container.appendChild(div);
  });
  
}
fetch("https://porfolio-lf41.onrender.com")
  .then((response) => response.json())
  .then((data) => {
    let container = document.getElementById("github-projects");
    data.forEach((repo) => {
      let div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<h3>${repo.name}</h3><a href="${repo.html_url}" target="_blank">View Project</a>`;
      container.appendChild(div);
    });
  });

loadGitHub();
