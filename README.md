# NextTweet

![NextTweet Logo]("C:\Users\kryst\OneDrive\Desktop\nextTweet\nexttweet\src\assets\logo.png")

## Table of Contents
1. [Project Description](#project-description)
2. [Getting Started](#getting-started)
3. [Features](#features)
4. [Technologies](#technologies)
5. [View of our project](#view-of-our-project)
6. [Endpoints](#endpoints)
7. [Future Plans](#future-plans)
8. [Database env](#database-env)
   
About the Project
NextTweet is an early-stage clone of Twitter, built using Next.js and Vercel. The project is still under development, with additional features such as follows and likes planned for future releases.
This project aims to revolutionize the way users interact with and consume news and information from around the world. Our platform is designed to deliver a superior quality of service with significantly faster access to news and updates, similar to the functionalities previously seen on platforms like Twitter.


The project is hosted on GitHub Pages, leveraging the capabilities of a GitHub repository to share and showcase the project with a broader audience. By using GitHub Pages, we ensure that the NextTweet project is easily accessible, version-controlled, and publicly available for collaboration and feedback. This hosting solution not only provides a convenient platform for deployment but also integrates seamlessly with our development workflow, allowing us to continuously improve and update the project in a transparent and efficient manner.


Demo Link
This section will be updated with the link to the live demo.

# Getting started
To set up the project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-repo/NextTweet.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd NextTweet
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```
4. **Create a `.env` file:**
    - Copy the `.env.example` file to `.env` and fill in the necessary environment variables.
    - If you want to set up the database on Vercel, you can automatically create the tweets, users, and followings tables by running the initialization script: **node init-db.js**  
5. **Start the project:**
    ```bash
    npm run dev
    ```
This will launch the application on http://localhost:3000 or the next available port. Navigate to the URL in your browser to start using the application.



# Key features of our application include:

**Social Interactions:** Users can engage with the content and with each other through likes, follows, and retweets, enhancing the social experience.

**User-Friendly Interface:** We've designed a clean, intuitive interface that makes navigation and interaction seamless and straightforward for users of all tech levels.

**Continuous Improvement:** The project is built with scalability in mind, allowing for ongoing enhancements and the addition of new features based on user feedback and technological advancements.

By focusing on these aspects, we strive to create a dynamic and engaging environment that keeps users informed and connected, no matter where they are.


# Technologies

- **SASS (SCSS):**
  - We use SCSS for styling the project. SCSS allows nesting of classes within other classes, making the CSS more modular and easier to maintain.
  
- **Next.js:**
  - Next.js is a powerful React framework that supports server-side rendering and static site generation, enhancing the performance and SEO of the application.

- **Vercel:**
  - Vercel is used for hosting and as the database for our project. It offers seamless deployment and scalability, making it an excellent choice for modern web applications.

- **PostgreSQL:**
  - PostgreSQL is used as the relational database management system for our project. It provides robust data integrity, advanced features, and support for complex queries, making it 
    ideal for handling our application's data.



**Used libraries:**

- @fortawesome/free-brands-svg-icons
- @fortawesome/react-fontawesome
- @nextui-org
- @types/js-cookie
- @vercel/postgres
- bcrypt
- framer-motion
- js-cookie
- jsonwebtoken
- next-auth
- password-validator
- pg
- vercel



# View of our project
![1](https://github.com/jakubzengota/nextTweet/assets/147444905/7435d2c0-be23-40d5-ab4b-6609e304dcd6)
The image displays the homepage of a platform called "NextTweet". The background is a gradient of purple shades, and the artwork on the right side includes various icons and abstract shapes, symbolizing communication and connectivity. The top right corner has options to "Log In" and "Register."

![2](https://github.com/jakubzengota/nextTweet/assets/147444905/0790482e-3cbc-4eb4-a554-cefaead62f6f)
The image shows the login page of the "NextTweet" platform. It features a login form where users can enter their email or phone number and password to access their accounts.

![3](https://github.com/jakubzengota/nextTweet/assets/147444905/64717da2-373b-4d39-91a5-183485d0223d)
The image shows the registration page for the "NextTweet" platform. It features a registration form where users can enter their username, email, password, and confirm their password to create a new account. At the bottom of the form, there is a "Register" button, and a link for existing users to sign in if they already have an account.

![4](https://github.com/jakubzengota/nextTweet/assets/147444905/ae1bd180-e239-4251-bcec-fb2e1ab1fe39)
The user, EmilyJones, has a profile picture and a list of their recent tweets. Each tweet displays the content, date, time, and engagement metrics such as likes and comments. At the top of the page, there is a text box for composing new tweets and a "Post" button. The top right corner provides navigation options including "Dashboard", "Profile", and "Log Out". 

![5](https://github.com/jakubzengota/nextTweet/assets/147444905/643ee8ca-8f80-4b67-a45f-35a89b62d4bf)
The image shows view of the user profile page for "NextTweet". The profile of EmilyJones is displayed prominently, showing her profile picture, name, and location (San Francisco). Below her profile information, there are statistics for her latest tweets, trending tweets, and notifications. On the right side, there are sections showing the accounts EmilyJones is following and her followers, each with the follower’s profile picture and name.




# Endpoints

Here are the available endpoints with detailed descriptions:

- `POST /api/login` - User login

![1](https://github.com/jakubzengota/nextTweet/assets/147444905/551f59e2-76f9-40d2-b66f-2257eff8f8da)
![2](https://github.com/jakubzengota/nextTweet/assets/147444905/89766320-683d-456a-97a1-0c043844d545)
When logging in, a token is received for authentication and authorization purposes.
The entire authentication process uses JWT tokens. Logging out removes the token from the user, effectively ending the session.

- `POST /api/register` - Register a new user
  
![1](https://github.com/jakubzengota/nextTweet/assets/147444905/af591cd9-1536-433f-b7bb-885fad099f69)
![2](https://github.com/jakubzengota/nextTweet/assets/147444905/800e5e61-451b-4124-82b0-753e7e22646e)
The password must meet the specified requirements for complexity and security. Upon registration, the password is automatically hashed using the bcrypt library and stored in the database in its hashed form.

- `POST /api.tweet/addTweet` - Add tweet
![1](https://github.com/jakubzengota/nextTweet/assets/147444905/e9971ca3-4958-4db2-866b-56fb93e7c7a1)


- `GET /api.tweet/tweets` - get all tweets
![2](https://github.com/jakubzengota/nextTweet/assets/147444905/e12d69a2-ae28-4247-bcc5-35bbde70e2ca)


- `GET /api.Users/getUsers` - get all users
![3](https://github.com/jakubzengota/nextTweet/assets/147444905/d80a54ff-290d-479f-8611-6341380c2279)


# Future Plans

The project is in active development. Here are some features we plan to implement:

- **Follow System:**
  - Users will be able to follow other users, creating a personalized feed of tweets from followed accounts.
  
- **Like System:**
  - Users will be able to like tweets, allowing them to engage with content they find interesting or valuable.

- **Improved Notification System:**
  - Enhancing user engagement through real-time notifications for likes, follows, and replies.

- **User Profiles:**
  - Providing detailed user profiles where users can view their tweets, followers, and following lists.

- **Authentication via Google, Facebook, and GitHub:**
  - Users will be able to sign in using their Google, Facebook, or GitHub accounts for a seamless login experience.

- **Email Verification:**
  - Implementing email verification to ensure the validity and security of user accounts.

- **Email Change:**
  - Allowing users to update their email addresses to keep their account information current.

- **Password Reset:**
  - Providing a password reset feature to help users regain access to their accounts if they forget their passwords.
  - 
- **User Chat via WebSockets:**
  - Enabling real-time chat between users using WebSockets for instant communication.

# Database Authentication

Database authentication details for Postgres are stored in the `.env` file. When setting up a new database on Vercel, you can use the `unitDB` file to create the necessary tables.

'''javascript
const Pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

DATABASE: (tutaj screenshot z Vercela)

![image](https://github.com/jakubzengota/nextTweet/assets/147444905/13c3390d-7c69-43a6-a140-3dfb0c17fef8)

Who was responsible for what:


Thank you for your interest in NextTweet! We welcome collaboration and feedback to improve the project.








