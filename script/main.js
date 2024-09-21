const menuButton = document.getElementById("menu-button");
const navBarUl = document.querySelector("header nav ul ");
const header = document.querySelector("header");
const navBar = document.querySelector("nav");
const teamContainer = document.querySelector(".team-container");
let team = [
  {
    name: "Rakib",
    img: "../assets/profiles/Rakib_Square.png",
    designation:
      "Rakid är vår vassare node-utveclare och håller ständigt ett öga på nya tekniker.",
  },
  {
    name: "Alexandra",
    img: "../assets/profiles/Alexandra_Square.png",
    designation:
      "Alexandra håller reda på alla äverallt och ser till att det flyter.",
  },
  {
    name: "Lasse",
    img: "../assets/profiles/NoPerson_Square.png",
    designation: "Gör övriga saker... Mestadels...",
  },
  {
    name: "Sebastian",
    img: "../assets/profiles/Sebastian_Square.png",
    designation:
      "En av vår utbildare som har stor erfarenhet av ganska många saker.",
  },
];
// Add team members to the team container
team.forEach((member) => {
  teamContainer.innerHTML += `
    <div class="team-member">
      <img src="${member.img}" alt="${member.name}" />
      <h3>${member.name}</h3>
      <p>${member.designation}</p>
    </div>
  `;
});

//menu button click event
menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("open");
  navBarUl.style.display = "flex";
  navBarUl.style.flexDirection = "column";
  header.style.gap = "10rem";

  if (menuButton.classList.contains("open")) {
    // Change to "X" icon
    navBarUl.style.display = "block";
    menuButton.innerHTML = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-x"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    `;
  } else {
    // Change to hamburger icon
    header.style.gap = "12rem";

    navBarUl.style.display = "none";
    menuButton.innerHTML = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-align-justify"
      >
        <line x1="3" x2="21" y1="6" y2="6" />
        <line x1="3" x2="21" y1="12" y2="12" />
        <line x1="3" x2="21" y1="18" y2="18" />
      </svg>
    `;
  }
});
