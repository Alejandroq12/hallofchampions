<a name="readme-top">Hall Of Champions</a>


<div align="center">
  <img src="./assets/logo/logo.png" alt="logo" width="600"  height="auto" />
  <br/>

  <h3><b>Hall Of Champions</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 Hall Of Champions ](#-hall-of-champions-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Make sure to have the file called package.json](#make-sure-to-have-the-file-called-packagejson)
    - [Usage](#usage)
    - [Run tests](#run-tests)
      - [Review the output of each linter and fix any issues reported.](#review-the-output-of-each-linter-and-fix-any-issues-reported)
    - [Deployment](#deployment)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [❓ FAQ (OPTIONAL) ](#-faq-optional-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 Hall Of Champions <a name="about-project"></a>

🚀 The Hall Of Champions website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://developer.mozilla.org/es/docs/Learn/HTML">HTML</a></li>
    <li><a href="https://developer.mozilla.org/es/docs/Web/CSS">CSS</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a></li>
    <li><a href="https://webpack.js.org/">Webpack</a></li>
  </ul>
</details>


<!-- Features -->

### Key Features <a name="key-features"></a>

- **Use of ES6 syntax**
- **Modular JavaScript: The application is built using JavaScript modules, resulting in a well-organized, maintainable, and scalable codebase.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link](https://alejandroq12.github.io/hallofchampions/dist/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps:

### Prerequisites

To work with this project, you need:

1. A modern web browser to view the website (e.g., Google Chrome, Firefox, Safari, or Microsoft Edge).

2. A code editor for editing the code, such as Visual Studio Code, Atom, or Sublime Text.

3. Node.js installed on your machine. You can download the latest version [here](https://nodejs.org/en/download/).

4. npm (Node Package Manager) installed, which comes bundled with Node.js.

5. After cloning the project, make sure to run npm install to install all the necessary dependencies, including Luxon and linters, specified in the package.json file.

### Setup

Clone this repository to your desired folder:

1. Clone it using your terminal:
```
git clone https://github.com/Alejandroq12/hallofchampions.git
```

2. If the previous method does not work you may also download the repo as a .zip file and once you decompress the .zip file you are ready to use it.

Important: do not forget to clone the repo in the correct folder, probably you will use the following commands to achieve that in your terminal:

1. To navigate a certain folder:

```
cd <folder name>
```
2. To navigate to the previous folder: 

```
cd ..
```

### Install

Install dependencies with:

1. To use this project you have to install some dependencies and linters. To achieve it just run:


```
npm init -y
npm install

```
### Make sure to have the file called package.json

2. If you run npm install, remember to create a .gitignore file to prevent the node_modules folder from being uploaded to GitHub:

```
.gitignore
node_modules/
```

### Usage

To use this project locally on your computer, follow these steps:

1. Run the following command:

   ```
   npm start

   ```

The website should now be displayed in your browser, and you can interact with the application as intended.

### Run tests

1. Make sure all the linters and their configurations are installed and set up correctly in your project. If you haven't installed them yet, run `npm install` in your project directory to install the packages listed in your `package.json` file.

2. Run each linter with the following commands:

- For ESLint:
```
npx eslint .

```
- For Stylelint:
```
npx stylelint "**/*.css"

```
- For hint:
```
npx hint .

```

#### Review the output of each linter and fix any issues reported.

### Deployment

You can deploy this project using GitHub pages:

1. Log in to your GitHub account and navigate to the repository that contains your website files.
2. Make sure that your website files are located in the main branch and in the root directory of the repository.
3. If your website is not already live, make sure that the index.html file is the main page of your website.
4. Click on the "Settings" tab in your repository.
5. Scroll down to the "GitHub Pages" section.
6. In the "Source" dropdown menu, select the branch where your website files are located. For a simple website with only HTML and CSS, this is typically the main branch.
7. In the "Path" field, make sure that the root directory is specified (i.e., "/").
8. Click "Save" to generate your website.
9. Wait a few minutes for GitHub to build and deploy your website.
10. Once the website is deployed, visit the GitHub Pages URL to view your site.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Julio Quezada**

- GitHub: [Alejandroq12](https://github.com/Alejandroq12)
- Twitter: [@JulioAle54](https://twitter.com/JulioAle54)
- LinkedIn: [Julio Quezada](https://www.linkedin.com/in/quezadajulio/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **I will add media queries for larger screens**
- [ ] **I will use JavaScript to add more interactivity**
- [ ] **Mark tasks as completed**
- [ ] **Automatically reorder tasks based on priority**
- [ ] **Fully responsive design for mobile and desktop devices**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project please give a star.
Thanks in advance.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank Wes Bos because I learned how to implement flexbox with his free tutorial:
- Wes Bos: [Wes Bos](https://flexbox.io/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

## ❓ FAQ (OPTIONAL) <a name="faq"></a>

- **Are you going to use React in the future?**

  - Yes! I will transform this website into a React App.

- **Did you create this website from scratch?**

  - Yes! From zero, and I will improve it a lot.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
