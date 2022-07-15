# This is My [Portfolio](https://www.bhushanjoshi.live/) website

This web app is created using [React](https://reactjs.org/), [Firebase](https://firebase.google.com/) and [Tailwindcss](https://tailwindcss.com/) 

---

## To start setting up the project

Step 1: Clone the repo:

```bash 
git clone https://github.com/Bhushan-joshi/portfolio
```

Step 2: cd into the cloned repo and run:

```bash
npm i
```
> **_NOTE:_**  If above command fails then use --force flag

Step 3: create src/.env.js file and  Put your firebase credentials in it:

```javascript
const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "PROJECT_ID.firebaseapp.com",
    databaseURL: "https://PROJECT_ID.firebaseio.com",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
    measurementId: "G-MEASUREMENT_ID",
};

export {firebaseConfig}
```

Step 4: spinup your server and hit [localhost](http://127.0.0.1:3000) by:
```bash
npm start
```
> Tech stack:
   * [React](https://reactjs.org/)
   * [Firebase](https://firebase.google.com/)
   * [React Router](https://reactrouter.com/)
   * [Tailwindcss](https://tailwindcss.com/)
   * [framer-motion](https://www.framer.com/motion/)
   * [react-icons](https://react-icons.github.io/react-icons/)
---

## Contribute

You can fork this repo and send me a PR.