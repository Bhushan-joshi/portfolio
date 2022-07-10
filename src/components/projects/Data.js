import slack from "../../assets/slack_clone.png";
import spotify from '../../assets/Music_spotify.png'
import NF from '../../assets/notFound.png'
import FS from '../../assets/FS.png';
import Sh from '../../assets/sh.jpg'


const projectItems = [
  {
    id: "101",
    name: "Slack Clone",
    stack: ["Node.js", "React.js", "Firebase","Semantic UI","Slack"],
    img: slack,
    description:
      `The Simple Slack like progressive web app created using React and Firebase as a backend.
      `,
    link:'slackclone-dc1c7.web.app/',
    github:'https://github.com/Bhushan-joshi/Slack_Clone'
  },
  {
    id: "102",
    name: "Music app",
    stack: ["Node.js", "Express.js", "spotify-web-api", "React.js","bootstrap"],
    img: spotify,
    description:`The Simple web app which uses a spotify web api to play songs also find a lyrics from web.
    It uses a React as frontend and express.js as a backend`,
    github:'https://github.com/Bhushan-joshi/music'
  },
  {
    id: "103",
    name: "Authentication API",
    stack: ["Node.js", "Express.js", "Mongodb","REST API","JWT"],
    img: NF,
    description:
      `An Authentication API using JWT's that you can plug inside your current project or you can start with a new one. Email & Password (TOTP) is used for authentication.
      The API based on Node.js, Express, MongoDB , following the MVC pattern i.e. Model View Controller.
      `,
      github:'https://github.com/Bhushan-joshi/Authentication-API'
  },
  {
    id: "104",
    name: "File Share",
    stack: ["Node.js", "Express.js", "Mongodb","React","Firebase"],
    img: FS,
    description:
      `A simple file upload web app created using MERN stack.
      You can upload files and can acess them every where. just like a G-Drive.
      `,
      github:'https://github.com/Bhushan-joshi/File_Sharing'
  },{
    id: "105",
    name: "Agri Shop",
    stack: ["Node.js", "Express.js", "Mongodb","EJS"],
    img: Sh,
    description:
      `An E-commerce application for farmers to sell their products directly to customers.
      The App based on Node.js, Express, MongoDB , following the MVC pattern i.e. Model View Controller.
      `,
      github:'https://github.com/Bhushan-joshi/onlineShop'
  },
];

export default projectItems;
