const contentTag = document.querySelector('.content')
const personalWebsite = document.getElementById("personalWebsite");
const githubProfileLink = document.getElementById("githubProfileLink");
const linkedinLink = document.getElementById("linkedinLink");

const githubLink = "https://github.com/akshayrathigithub";
const linkedinLinkUrl = "https://www.linkedin.com/in/akshay-rathi-sde/";
const portfolioLinkUrl = "https://akshayrathi.com/";

const projects = [{
  title: "NPM Package",
  year: "2023",
  description: "A simpler and smaller NPM package based on Regex patterns, which can be used to verify and format contact numbers for different countries.",
  tools: ['Typescript', 'Vite', 'Vitest'],
  githubLink: "https://github.com/akshayrathigithub/validate-contact-number",
  externalLink: "https://www.npmjs.com/package/validate-contact-number"
},{
  title: "Personal Website",
  year: "2021",
  description: "Personal website built using React and Typescript.",
  tools: ['React', 'Typescript'],
  externalLink: "https://akshayrathi.com/"
},{
  title: "Task Manager",
  year: "2020",
  description: "A Simple Web App which helps in organizing and prioritizing day today tasks.",
  tools: ['Angular', 'Typescript', 'Sass', 'MongoDb'],
  githubLink: "https://github.com/akshayrathigithub/Tasks-Manager",
  externalLink: "https://projects.akshayrathi.com/task-manager/"
},{
  title: "SocketIo App",
  year: "2020",
  description: "A Socket Io app, where a Teacher can create a password protected private server through which they can connect with their students to view their typing speed(WPM) in real time. ",
  tools: ['HTML', 'CSS', 'Javascript', 'SocketIO'],
  githubLink: "https://github.com/akshayrathigithub/BoilerPlateSocketIo",
  externalLink: "https://projects.akshayrathi.com/socket-io-app/"
},{
  title: "React Date Picker",
  year: "2020",
  description: "A Simple Date Picker based on React.",
  tools: ['React', 'CSS','Styled-Components'],
  githubLink: "https://github.com/akshayrathigithub/React-DatePicker",
},{
  title: "React Native Calculator",
  year: "2020",
  description: "A simple calculator app which can be used to perform basic arithmatic calculations.",
  tools: ['React', 'ReactNative', 'Expo'],
  githubLink: "https://github.com/akshayrathigithub/ReactNative_Calculator",
},{
  title: "Taxi Sharing Platform",
  year: "2019",
  description: "Common online platform for IITK community where students can find other student of similar travel destination. ",
  tools: ['React', 'Firebase', 'SocketIo', 'NodeMailer'],
  githubLink: "https://github.com/akshayrathigithub/Taxi-Sharing-Platform",
  externalLink: "https://projects.akshayrathi.com/taxi-sharing-platform/"
},{
  title: "CPI/SPI Calculator",
  year: "2018",
  description: "Simple and elegant CGPA Calculator made using JavaScript(ES6), that can be used to calculate CGPA quickly. ",
  tools: ['HTML5', 'Bootstrap', 'Javascript(ES6)'],
  githubLink: "https://github.com/akshayrathigithub/CPI-SPI-Calculator",
  externalLink: "https://projects.akshayrathi.com/cpi-spi-calculator/"
},]

function githubIcon(){
  return `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-github"
  >
    <path
      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
    ></path>
  </svg>`
}

function externalLinkIcon(){
  return `<div class="external-link icon">
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
    class="feather feather-external-link"
  >
    <path
      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    ></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
</div>`
}

function row(title, year, description, tools){
  const toolsUsed = tools.join(', ')
  return `<div class="year box"><p>${year}</p></div>
  <div class="title box"><p>${title}</p></div>
  <div class="description box">
    <p>${description}</p>
  </div>
  <div class="tech box">
    <p>${toolsUsed}</p>
  </div>`
}

function load(){
  fetchData();
  /* Add Event Listener */
  personalWebsite.addEventListener("click", () => {
    window.open(portfolioLinkUrl, "_blank");
  });

  githubProfileLink.addEventListener("click", () => {
    window.open(githubLink, "_blank");
  });

  linkedinLink.addEventListener("click", () => {
    window.open(linkedinLinkUrl, "_blank");
  });

  for (const project of projects){
    const {title, year, description, tools} = project
    const projectRow = document.createElement('div')
    projectRow.className = "row";
    projectRow.innerHTML = row(title, year, description, tools);

    const linkTag = document.createElement('div')
    linkTag.className = "link"

    if(Object.hasOwn(project, 'externalLink')){
      const externalLinkBtn = document.createElement('a')
      externalLinkBtn.className = "external-link icon"
      externalLinkBtn.target = '_blank'
      externalLinkBtn.href = project.externalLink
      externalLinkBtn.innerHTML = externalLinkIcon()
      linkTag.append(externalLinkBtn)
    }

    if(Object.hasOwn(project, 'githubLink')){
      const githubBtn = document.createElement('a')
      githubBtn.className = "github icon"
      githubBtn.target = '_blank'
      githubBtn.href = project.githubLink
      githubBtn.innerHTML = githubIcon()
      linkTag.append(githubBtn)
    }
    projectRow.append(linkTag)
    contentTag.append(projectRow)
  }

}

// api call
const fetchData = async () => {
  const BACKEND_API_URL = "https://backend.akshayrathi.com";
  const query = "/analytics?moduleName=PROJECTS_LIST";
  const url = BACKEND_API_URL + query;
  const response = await fetch(url);
  const data = await response.json();
};

load()