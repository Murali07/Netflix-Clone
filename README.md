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
- [TODO](#todo)
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

![readme-login](https://github.com/Murali07/Netflix-Clone/assets/18513537/16404389-7ee8-493b-bba5-af772e55d49b)

1. Go to Sign In page.
   - From the Sign Up page, click 'Log In' button.  
2. Input the necessary fields and proceed.
   - You can sign in using email and password which is created in the above steps.

<br />   

**Searching for a Show**

![readme-header](https://github.com/Murali07/Netflix-Clone/assets/18513537/be68e059-e360-45b7-98a8-f3a49ae084a6)

![readme-movies](https://github.com/Murali07/Netflix-Clone/assets/18513537/8041dce5-f4d2-49e5-bcb5-519303214b13)

![readme-tvShows](https://github.com/Murali07/Netflix-Clone/assets/18513537/c5fadd1c-5e69-42f1-9a9e-064f97101875)

1. Once successful login you will be redirected to Netflix home page.
2. Click the appropriate tab for your search.
   - If searching for a movie, click 'Movies' tab in the header.
   - If searching for a series, click 'TV Shows' tab in the header.
3. Click the search icon on the header.
4. Input your search term and press enter.

<br />

**Adding Movie/TV to My List**

![readme-addtolist](https://github.com/Murali07/Netflix-Clone/assets/18513537/023874b7-4571-4c2b-b2e0-252b60679539)

![readme-myList](https://github.com/Murali07/Netflix-Clone/assets/18513537/f8b85777-6cbb-4a0f-a339-7293899d5786)

1. Mouse hover the movie/tv show then click 'Add to my list' icon to add it to your My List.
2. Click 'My List' tab in the header.
3. You can see your added lists in 'My List' page.

<br />

**Deleting My List**

![readme-deleteList](https://github.com/Murali07/Netflix-Clone/assets/18513537/7e030bba-68be-4e91-a2f3-bc7003fb4bf1)

1. Mouse hover the movie/tv show then click 'Remove From List' icon to remove it from your My List.
2. Remove cursor from the movie and you can see the movie has been deleted from My List.

<br />

**Play Movie**

![readme-watch](https://github.com/Murali07/Netflix-Clone/assets/18513537/850120ca-4220-419a-abe1-05653db7a9b1)

1. Click 'Play' button/icon.
2. You will be redirected to Watch Page and video will be playing.
3. Click on three dots, you can see options like Download, Playback Speed, and Picture in picture.
4. Click backarrow icon to go back.

<br />

**Select Movie/TV by genre**

![readme-genere](https://github.com/Murali07/Netflix-Clone/assets/18513537/23324912-c642-4eeb-b0c5-5cffee1ccdc0)

1. Click on the drop down button from Movie/TV page.
2. Select the genres from the options.
3. Movies/TV shows will be displayed as per the selected genre.


## 🚀 Deployment <a name = "deployment"></a>

- Deploy the front-end and back-end separately, either on platforms like [Vercel](https://vercel.com/)/[Netlify](https://www.netlify.com/) (front-end) and [Render](https://render.com/) (back-end) or any other hosting service you prefer.
- Ensure that the environment variables and sensitive data are handled securely during deployment.

## <img src="https://www.anythingit.net/wp-content/uploads/2020/04/todo.png" width="28" height="auto" /> TODO <a name = "todo"><a />

**1. Project Setup:**

- Set up the front-end using React and Redux Toolkit for state management.
- Create a backend using Node.js and Express to handle API requests.
- Set up a MongoDB database to store movie and user-related data.
- Implement Firebase authentication for user sign-up and login.
- Utilize Firebase Storage to store user details.

**2. Front-End:**

- Create different components for the homepage, movie/TV show details, user authentication, and user profile.
- Implement React Router to handle navigation between different pages.
- Use Redux Toolkit for state management to manage data fetched from the TMDB API and local storage (for trailers).- 
- Fetch movie and TV show data from the TMDB API to display on the homepage.
- Enable users to search for movies/TV shows using the TMDB API.
- Add buttons to add or remove movies/TV shows to/from "My List".

**3. Firebase Authentication:**

- Implement Firebase authentication using Firebase SDK in your React application.
- Set up sign-up and login pages for users to create accounts and log in.
- Store user authentication details in Firebase.

**4. Back-End:**

- Create API endpoints using Node.js and Express to handle CRUD operations for movies and TV shows.
- Set up routes for adding/deleting movies or TV shows to/from the user's list.
- Connect to the MongoDB database to perform CRUD operations for storing and retrieving movie data.

**5. Deployment:**

- Deploy the front-end and back-end separately, either on platforms like Vercel/Netlify (front-end) and Heroku (back-end) or any other hosting service you prefer.
- Ensure that the environment variables and sensitive data are handled securely during deployment.


## :handshake: Contact <a name = "contact"></a>

LinkedIn: https://www.linkedin.com/in/murali-selvaraj/

Project Link: https://github.com/Murali07/Netflix-Clone.git
