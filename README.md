# SoloSphere

# 📖 Purpose

A platform where anyone can post jobs, and anyone can apply for a job.

## 🌐 Live Site URL

Visit the live site: [https://assignment-11-d815b.web.app/](https://assignment-11-d815b.web.app/)

# 🚀 Feature

1. Anyone can post a job.
2. Anyone can apply this job who posted.
3. Same user can't apply on his/her post.
4. any one can find job his/her categories.

# Challenges Faced

During this project, I faced several challenges, such as implementing JWT tokens and performing CRUD operations. When I first started implementing tokens, I got confused with the GET and POST methods. After exploring the documentation, I managed to fix the issue. However, after deploying the project, I realized that although the token was added after logging in, it wasn't removed after logging out. After much troubleshooting, I found that the issue was caused by the token being stored server-side with the POST method and client-side with the GET method. Once I fixed this, everything worked perfectly. I also faced some difficulties while working with CRUD operations, especially with changing the status. I had to figure out how to change the status when clicked, but after some effort, I was able to successfully implement it. In the end, I managed to resolve all the issues and complete the project successfully.

# 📦 npm packages use

1. react hot toast
2. react-icons
3. recharts
4. sweetalert2
5. swiper

# Tech Stack

1. React
2. Tailwind CSS
3. Node.js,
4. MongoDB
5. Express

# dependencies

1. "@tanstack/react-query": "^5.62.8", 2. "axios": "^1.7.9",
2. "date-fns": "^4.1.0",
3. "firebase": "^11.1.0",
4. "react": "^18.2.0",
5. "react-datepicker": "^6.9.0",
6. "react-dom": "^18.2.0",
7. "react-hot-toast": "^2.4.1",
8. "react-router-dom": "^6.23.0",
9. "react-tabs": "^6.0.2",
10. "swiper": "^11.1.1"

# install in local machine

1. npm install
2. add environment variable (.env.local)
3. npm run dev
