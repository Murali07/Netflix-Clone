<div align="center">

  <img src="https://user-images.githubusercontent.com/99184393/211183762-03b6e9b4-9fcd-4874-a0e4-20cf00537c06.gif" alt="logo" width="400" height="auto" />

  <h1>Netflix Clone</h1>
  <br />

  <p>A Netflix clone built using React, Redux Toolkit, Nodejs, MongoDB. It fetches the data from TMDB (The Movie Database) API. It also displays the movie trailers which is fetched from local storage.</p>
  
  <h4>
    <a href="https://fascinating-marzipan-c9fd15.netlify.app/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/Murali07/Netflix-Clone#readme">Documentation</a>
  <span> · </span>
    <a href="https://github.com/Murali07/Netflix-Clone/issues">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/Murali07/Netflix-Clone/issues">Request Feature</a>
  </h4>  
  
  ![readme-header](https://github.com/Murali07/Netflix-Clone/assets/18513537/6fb4d6d2-cc54-478f-8716-edb7c91ee5d2)

</div>

## 📝 Table of Contents
- [About](#about)
- [Built Using](#built_using)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Deployment](#deployment) 
- [TODO](../TODO.md)
- [Contact](#contact)
  
## 🧐 About <a name = "about"></a>
A Netflix clone built using React, Redux Toolkit, Nodejs, Express, MongoDB. It fetches the data from TMDB (The Movie Database) API. It also displays the movie trailers which is fetched from local storage. I have implemented Firebase authentication for user sign-up and login and Firebase Storage to store user details. Also, I have implemented MongoDB CRUD operations. You can add the movies/TV Shows to my list and you can delete it from my list. 

## ⛏️ Built Using <a name = "built_using"></a>
- [React](https://reactjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [NodeJs](https://nodejs.org/en/)
- [Firebase](https://firebase.google.com)
- [The Movie Database (TMDB)](https://www.themoviedb.org)

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites
```
Create an account if you don't have on TMDB. Because I use its free API to consume movie/tv data.
```

```
And then follow the documentation to create API Key.
```

```
Finally, if you use v3 of TMDB API, create a file named .env, and then paste the API Key you just created.
```

Install latest version of npm

- npm
  ```
  npm install npm@latest -g
  ```

### :gear: Installation

1. Clone the project
   ```
   git clone https://github.com/Murali07/Netflix-Clone.git
   ```
2. Go to project directory and Install NPM packages
   ```
   npm install
   ```
3. Create .env file
   
4. Request an API key from TMDB and add it to your .env
   ```
   API_KEY=""

   TMDB_BASE_URL = "https://api.themoviedb.org/"
   ```
5. In a new directory, clone the backend and follow installation instructions on its README
   ```
   git clone https://github.com/Murali07/Netflix-Clone/tree/netflix-backend
   ```
6. You should now have the server running locally. Add the url to your .env
   ```
   SERVER_URL=http://localhost:5000
   ```
7. Start the application
   ```
   npm start
   ```

## 🎈 Usage <a name="usage"></a>

**Creating an Account**

![readme-signup](https://github.com/Murali07/Netflix-Clone/assets/18513537/69bb0ed4-ec63-48ad-8649-1a6ee9c3c523)

1. Go to Sign Up page.
   - From the signup page, enter your email and click 'Get Started' then enter the password.     
   - From Sign In page, click on the 'Sign In' button righ top corner (or) click the 'Sign up now' link below 'Log In' button. 
2. Input the necessary fields. 
   - You need to enter the correct email format. (ex: name@example.com)
   - Your password should be at least 6 characters length.
   - Your email and password will be stored in Firebase Storage.
3. You'll be redirected to the Netflix home page.

<br />

**Logging In**

![](./public/images/readme/Sign_In.png)

1. Go to Sign In page.
   - From the homepage, click 'Sign in' button.
   - From Sign Up page, click the 'Sign in now' link below 'Sign Up' button.
2. Input the necessary fields and proceed.
   - You can sign in using either email or phone number.

**Searching for a Show**

![](./public/images/readme/Search.png)

1. Log in and select a profile.
2. Click the appropriate tab for your search.
   - If searching for a movie, click 'Movies' tab in the header.
   - If searching for a series, click 'TV Shows' tab in the header.
3. Click the search icon on the header.
4. Input your search term and press enter.
5. To show all shows again, clear the search input and press enter.

**Adding User Profile**

![](./public/images/readme/Add_Profile.png)

1. Log in to your account.
2. Click 'Manage Profiles'.
3. Click 'Add Profile'.
   - You can only add up to 5 profiles for each account.
4. Click the pencil/edit icon and choose your preferred avatar.
5. Enter your preferred display name and click 'Save'.
   - You can't use avatars and names already used by other profiles in the same account.

**Editing User Profile**

![](./public/images/readme/Edit_Profile.png)

1. Log in to your account.
2. Click 'Manage Profiles'.
3. Click the profile you wish to edit.
4. Modify the profile as you see fit and click 'Save'.

**Deleting User Profile**

![](./public/images/readme/Delete_Profile.png)

1. Log in to your account.
2. Click 'Manage Profiles'.
3. Click the profile you wish to delete.
4. Click 'Delete Profile'.
5. Confirm deletion by clicking 'Yes'.

## 🚀 Deployment <a name = "deployment"></a>
Add additional notes about how to deploy this on a live system.

## :handshake: Contact <a name = "contact"></a>

LinkedIn: https://www.linkedin.com/in/murali-selvaraj/

Project Link: https://github.com/Murali07/Netflix-Clone.git
