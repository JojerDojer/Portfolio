/*
============================================
; Title: templates.js
; Author: John Davidson
; Date: 07/2/2023
; Description: The header and footer templates for my Personal Portfolio.
============================================
*/

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <link rel="stylesheet" href="main.css">

      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,700;0,800;0,900;1,700&display=swap" rel="stylesheet">

      <title>Personal Portfolio</title>
    </head>
    <body>
      <nav class="nav-bar">
        <div>
          <ul class="nav-list">
            <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="projects.html" class="nav-link">Projects</a></li>
            <li class="nav-item"><a href="database-diagrams.html" class="nav-link">Database Diagrams</a></li>
            <li class="nav-item"><a href="devops-pres.html" class="nav-link">DevOps Presentations</a></li>
            <li class="nav-item"><a href="./images/resume.pdf" target="_blank" class="nav-link">Resume</a></li>
          </ul>
        </div>
      </nav>`;
  }
}

customElements.define('my-header', Header);


class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p>&copy; ${new Date().getFullYear()} | Site by John Davidson</p>
      </footer>
    </body>
    </html>`;
  }
}

customElements.define('my-footer', Footer);

// Created a separate header for the presentations html page.
class VideoHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <link rel="stylesheet" href="../main.css">

      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,700;0,800;0,900;1,700&display=swap" rel="stylesheet">

      <title>Personal Portfolio</title>
    </head>
    <body>
      <nav class="nav-bar">
        <div>
          <ul class="nav-list">
            <li class="nav-item"><a href="../index.html" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="../projects.html" class="nav-link">Projects</a></li>
            <li class="nav-item"><a href="../database-diagrams.html" class="nav-link">Database Diagrams</a></li>
            <li class="nav-item"><a href="../devops-pres.html" class="nav-link">DevOps Presentations</a></li>
            <li class="nav-item"><a href="../resume.html" class="nav-link">Resume</a></li>
          </ul>
        </div>
      </nav>`;
  }
}

customElements.define('video-header', VideoHeader);

