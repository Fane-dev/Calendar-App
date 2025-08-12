# 📅 Calendar App with Firebase Login

A calendar application built with **Angular** that allows users to manage personal events, with authentication handled by **Firebase**. Each user's data is stored separately using **LocalStorage**.

---

## 🔐 Key Features

- 🔑 User login with email and password via Firebase Authentication  
- 📅 Dynamic monthly calendar view  
- 🎨 Colored events with custom time slots  
- 💾 Events stored in LocalStorage, separated per user  
- ✍️ Create, edit, and delete single or multiple events  
- ⬅️➡️ Navigate between months  

---

## 🚀 How to Get Started  

### 1. Clone the repository  

git clone https://github.com/Fane-dev/Calendar-App  
cd calendar-app  

# 2. Install dependencies
npm install  
npm install firebase @angular/fire  

# 3. Configure Firebase
Go to Firebase Console and create a new project  

Navigate to Authentication > Sign-in method and enable Email/Password  

Go to Project settings > Your apps, click on </> Web, name your app and register it  

Copy the Firebase credentials and paste them into your src/environments/environment.ts file:  

<pre><code>ts export const environment = { 
  firebase: { 
    apiKey: 'YOUR_API_KEY', 
    authDomain: 'YOUR_DOMAIN.firebaseapp.com', 
    projectId: 'YOUR_PROJECT_ID', storageBucket: 'YOUR_BUCKET', 
    messagingSenderId: 'YOUR_SENDER_ID', 
    appId: 'YOUR_APP_ID'
    } 
  }; </code></pre>

# 4. Run the development server
ng serve  

Then open your browser and navigate to localhost

# 💡 Tech Stack
-Angular  

-Firebase (Authentication)  

-LocalStorage (per-user data)  

-TypeScript / HTML / CSS  
