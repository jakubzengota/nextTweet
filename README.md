# NextTweet

![NextTweet Logo](path-to-your-logo.png)

## Table of Contents
1. [Project Description](#project-description)
2. [Getting Started](#getting-started)
3. [Requirements](#requirements)
4. [Features](#features)
5. [Technologies](#technologies)
6. [Endpoints](#endpoints)
7. [Future Plans](#future-plans)
8. [Database Authentication](#database-authentication)
   
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
5. **Start the project:**
    ```bash
    npm run dev
    ```
This will launch the application on http://localhost:3000 or the next available port. Navigate to the URL in your browser to start using the application.


# Usage
Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.



**Key features of our application include:**

**Social Interactions:** Users can engage with the content and with each other through likes, follows, and retweets, enhancing the social experience.
**User-Friendly Interface:** We've designed a clean, intuitive interface that makes navigation and interaction seamless and straightforward for users of all tech levels.
**Continuous Improvement:** The project is built with scalability in mind, allowing for ongoing enhancements and the addition of new features based on user feedback and technological advancements.
By focusing on these aspects, we strive to create a dynamic and engaging environment that keeps users informed and connected, no matter where they are.

Built with (tutaj damy wszystkie języki library i frameworki ktore użyliśmy)

## Technologies

- **SASS (SCSS):**
  - We use SCSS for styling the project. SCSS allows nesting of classes within other classes, making the CSS more modular and easier to maintain.
  
- **Next.js:**
  - Next.js is a powerful React framework that supports server-side rendering and static site generation, enhancing the performance and SEO of the application.

- **Vercel:**
  - Vercel is used for hosting and as the database for our project. It offers seamless deployment and scalability, making it an excellent choice for modern web applications.



## Endpoints

Here are the available endpoints with detailed descriptions:

- `POST /api/login` - User login

![1](https://github.com/jakubzengota/nextTweet/assets/147444905/551f59e2-76f9-40d2-b66f-2257eff8f8da)
![2](https://github.com/jakubzengota/nextTweet/assets/147444905/89766320-683d-456a-97a1-0c043844d545)


- `POST /api/register` - Register a new user
- `GET /api/tweets` - Fetch all tweets
- `POST /api/tweets` - Add a new tweet


## Future Plans

The project is in active development. Here are some features we plan to implement:

- **Follow System:**
  - Users will be able to follow other users, creating a personalized feed of tweets from followed accounts.
  
- **Like System:**
  - Users will be able to like tweets, allowing them to engage with content they find interesting or valuable.

- **Improved Notification System:**
  - Enhancing user engagement through real-time notifications for likes, follows, and replies.

- **User Profiles:**
  - Providing detailed user profiles where users can view their tweets, followers, and following lists.


## Database Authentication

Database authentication details for Postgres are stored in the `.env` file. When setting up a new database on Vercel, you can use the `unitDB` file to create the necessary tables.

```javascript
const Pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

DATABASE: (tutaj screenshot z Vercela)

![image](https://github.com/jakubzengota/nextTweet/assets/147444905/13c3390d-7c69-43a6-a140-3dfb0c17fef8)


Thank you for your interest in NextTweet! We welcome collaboration and feedback to improve the project.








