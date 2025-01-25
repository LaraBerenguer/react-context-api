# React Context API (Star Wars wikia with API)

## 📄 Description

Welcome! This is a Star Wars Wikia built with React + Vite. The app includes state management using Context API, user authentication with Firebase and components made with Storybook. The page is based on the official Star Wars site. Hope you like it.

Check it live at: [https://starwars-bootcamp-5omdo.ondigitalocean.app/](https://starwars-bootcamp-5omdo.ondigitalocean.app/)

## 💻 Technologies Used

- React
- Vite
- Typescript
- Firebase
- Storybook 
- Tailwind CSS
- React Router
- Vitest

## 💡 Functionalities

- [x] Reusable components
- [x] Context API for state management
- [x] Pages
- [x] Client info form
- [x] Routes and pages
- [x] User authentication
- [ ] Unit testing

## 🔑 Setting up .env configuration

To run this project, you need to configure environment variables. Follow these steps:

1. Copy the `.env.example` file and rename it to `.env`:

```bash
cp .env.example .env
```

2. Open the .env file and replace your_api_key and others with your own API key from Firebase. You can create a free auth project here: [Firebase](https://firebase.google.com/)

```bash
VITE_API_KEY:your_api_key
VITE_AUTH_DOMAIN:your_auth_domain_key
...
```
3. After setting up the .env file, you’ll be ready to run the project.

## 📋 Requirements

- Node.js and npm installed on your system. You can download them from [nodejs.org](https://nodejs.org/).

## 🚀 Installation

**✔️ Step 1:** Clone the repository to your local machine (replace `your-username` with your GitHub username):

```bash
git clone https://github.com/your-username/react-context-api-example.git
cd react-context-api-example
```

**✔️ Step 2:** Install the required dependencies:

```bash
npm install
```

**✔️ Step 3:** Start the development server using Vite:

```bash
npm run dev
```
Once the server is running, you'll see a URL similar to:

```bash
 > Local: http://localhost:5173/
```

**✔️ Step 4:** Run storybook:

```bash
npm run storybook
```

**✔️ Step 5:** For storybook to run properly with TailwindCss, run this:

```bash
npm run watch:css
```

## ℹ️​ Optional step

If you use Windows, you can run this script to run the project:

```bash
npm run start:all
```
It will run vite, storybook and compilation scripts at the same time.

## 🤝 Contributions
If you want to contribute or report issues, feel free to create an issue or submit a pull request.
