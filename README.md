<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/TerroR75/jobbler">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Jobbler</h3>

  <p align="center">
    Personal job tracking manager
    <br />
    <a href="https://github.com/TerroR75/jobbler"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/TerroR75/jobbler">View Demo</a>
    ·
    <a href="https://github.com/TerroR75/jobbler/issues">Report Bug</a>
    ·
    <a href="https://github.com/TerroR75/jobbler/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

App is made especially for new developers (myself included) to help them track job applications. <br>
For backend side of the project check out this repo:
https://github.com/TerroR75/jobbler-backend

![image](https://user-images.githubusercontent.com/83674512/225723540-49f138be-c3dc-4545-bd73-d4fb98cb64d2.png)
![image](https://user-images.githubusercontent.com/83674512/225723671-b79851cc-9a35-40df-ac37-3e5b5f786e7d.png)
![image](https://user-images.githubusercontent.com/83674512/225723762-66525f6d-2b6b-4ed2-b31c-841c8c08f5c5.png)

<br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<!-- - [![Next][next.js]][next-url] -->

- [![React][react.js]][react-url]
- <img src='https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white'>
- <img src='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white'>
    <!-- - [![Vue][vue.js]][vue-url] -->
    <!-- - [![Angular][angular.io]][angular-url] -->
    <!-- - [![Svelte][svelte.dev]][svelte-url] -->
  <!-- - [![Laravel][laravel.com]][laravel-url] -->
  <!-- - [![Bootstrap][bootstrap.com]][bootstrap-url] -->
  <!-- - [![JQuery][jquery.com]][jquery-url] -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

If you would like to test this project in your local environment, please follow the steps below:

### Prerequisites

- Node Package Manager
  ```sh
  npm install npm@latest -g
  ```

### Installation

<!-- 1. Get a free API Key at [https://example.com](https://example.com) -->

1. Clone the repo
   ```sh
   git clone https://github.com/TerroR75/jobbler.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Launch the dev server
   ```sh
   npm run dev
   ```

Check out `package.json` for more scripts.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Tracking job applications, creating CV and keeping track of your learning resources.

<!-- _For more examples, please refer to the [Documentation](https://example.com)_ -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

It's just a general idea for now and it may change in the future.

- [x] Database - NodeJS + MySQL
  - [x] Authentication
  - [ ] Email confirmation system
  - [ ] CRUD for users
  - [ ] CRUD for applications
  - [x] Password encryption
  - [ ] Email encryption
- [ ] Free in app CV Creator
- [ ] Notifications
- [ ] Analytics
  - [ ] Graphs

See the [open issues](https://github.com/TerroR75/jobbler/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

### Full stack

1. Fork the Project and fork the [backend](https://github.com/TerroR75/jobbler-backend)
2. Configure `.env` file inside backend repo:

- APP_PORT=

- MYSQL_HOST='127.0.0.1'
- MYSQL_USER='root'
- MYSQL_PASSWORD=
- MYSQL_DATABASE='jobbler'

- JWT_SECRET=

3. Launch Apache and MySQL services through your MySQL control panel (e.g. XAMPP)
4. Create new MySQL database called "jobbler"
5. Use provided file `schema.sql` inside backend repo
6. Create your feature branch (`git branch BRANCH-NAME`)
7. Change to your new branch (`git checkout BRANCH-NAME`)
8. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
9. Push to the branch (`git push origin feature/AmazingFeature`)
10. Open a Pull Request

### Front only

1. Fork the project
2. To get access to the dashboard without database authorization follow these instructions:

- Go to `App.tsx` file and comment out line 73 and 75.
  <br>

Continue with steps 6-10 from Full stack

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

- Project's frontend: [https://github.com/TerroR75/jobbler](https://github.com/TerroR75/jobbler)
- Project's backend: [https://github.com/TerroR75/jobbler-backend](https://github.com/TerroR75/jobbler-backend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

<!-- - [MaterialUI](https://mui.com) -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/TerroR75/jobbler.svg?style=for-the-badge
[contributors-url]: https://github.com/TerroR75/jobbler/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/TerroR75/jobbler.svg?style=for-the-badge
[forks-url]: https://github.com/TerroR75/jobbler/network/members
[stars-shield]: https://img.shields.io/github/stars/TerroR75/jobbler.svg?style=for-the-badge
[stars-url]: https://github.com/TerroR75/jobbler/stargazers
[issues-shield]: https://img.shields.io/github/issues/TerroR75/jobbler.svg?style=for-the-badge
[issues-url]: https://github.com/TerroR75/jobbler/issues
[license-shield]: https://img.shields.io/github/license/TerroR75/jobbler.svg?style=for-the-badge
[license-url]: https://github.com/TerroR75/jobbler/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/kamil-sulimierski-5610531b5/
[product-screenshot]: images/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
