# My React App

This is a simple React application that demonstrates the use of React Hooks, React Custom Hooks, React Router, and Bootstrap for styling. The application includes three pages: a Home page, a Gallery page that fetches images from an API, and an About Me page. Additionally, the app features a dark theme toggle and a language switcher for English and Georgian.

## Features

- **Dark Theme Toggle:**
  - Toggle between light and dark themes using the button in the navbar.

- **Language Switcher:**
  - Switch between English and Georgian languages using the button in the navbar.

- **Gallery Page:**
  - Displays images fetched from the Nekos API.

- **Responsive Design:**
  - The application is responsive and works well on various devices.

## Project Structure

- `src/`
  - `components/`
    - `Navbar.js`
    - `Home.js`
    - `Gallery.js`
    - `About.js`
  - `context/`
    - `ThemeContext.js`
    - `LanguageContext.js`
  - `App.js`
  - `App.css`
  - `index.js`

## Tools Used

- React
- React Hooks
- React Router
- Axios
- Bootstrap
- NekosAPI

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```
2. Navigate to the project directory:
    ```bash
    cd your-repository
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
5. Open your browser and visit `http://localhost:3000` to see the app.

## Usage

- Use the navigation bar to switch between the Home, Gallery, and About pages.
- Click the "Toggle Theme" button to switch between light and dark themes.
- Click the "Toggle Language" button to switch the language between English and Georgian.
