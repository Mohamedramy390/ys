import p1_1 from './assets/id1-1.png'
import p1_2 from './assets/id1-2.png'
import p1_3 from './assets/id1-3.png'
import p1_4 from './assets/id1-4.png'

import p2 from './assets/id2.png'
import p3 from './assets/id3.png'
import p4 from './assets/id4.png'
import p5 from './assets/id5.png'


const projects = [
  {
    id: 1,
    title: "World Template",
    isRecent: true,
    description: "A modern, responsive, and content-focused HTML/CSS news portal or magazine website template. Designed for blogs, news agencies, or content creators, this layout features categorized sections, media-rich cards, and an engaging user interface.",
    thumbnail: p1_1,
    photos: [
      p1_1,
      p1_2,
      p1_3,
      p1_4,
    ],
    github_repo_link: "https://github.com/YasmineZein/World-Template",
    live_preview_link: "https://yasminezein.github.io/World-Template/"
  },
  {
    id: 2,
    title: "AXIT Template",
    isRecent: true,
    description: "A modern and visually appealing Axure-style landing page template built with HTML and CSS. This project mimics a product or SaaS promotion page, featuring a clear call-to-action, elegant typography, and responsive layout.",
    thumbnail: p2,
    photos: [
      p2
    ],
    github_repo_link: "https://github.com/YasmineZein/AXIT-Template",
    live_preview_link: "https://yasminezein.github.io/AXIT-Template/"
  },
  {
    id: 3,
    title: "CRUD Operation",
    isRecent: true,
    description: "A simple web-based User Management System built to demonstrate basic CRUD (Create, Read, Update, Delete) operations. This project allows users to add, update, view, and delete user records dynamically using a clean and responsive UI.",
    thumbnail: p3,
    photos: [
      p3
    ],
    github_repo_link: "https://github.com/YasmineZein/CRUD-Operation",
    live_preview_link: "https://yasminezein.github.io/CRUD-Operation/"
  },
  {
    id: 4,
    title: "Heart Trail Animation",
    isRecent: false,
    description: "An interactive heart trail animation using HTML, CSS, and JavaScript. This project creates a dynamic visual effect where heart shapes follow the cursor movement, providing an engaging user experience.",
    thumbnail: p4,
    photos: [
      p4
    ],
    github_repo_link: "https://github.com/YasmineZein/Heart-Trail-Animation",
    live_preview_link: "https://yasminezein.github.io/Heart-Trail-Animation/"
  },
  {
    id: 5,
    title: "Pricing Card Frontend",
    isRecent: false,
    description: "A frontend implementation of a pricing card component, showcasing a clean and responsive design suitable for displaying pricing plans or packages.",
    thumbnail: p5,
    photos: [
      p5
    ],
    github_repo_link: "https://github.com/YasmineZein/Pricing-card-Frontend",
    live_preview_link: "https://yasminezein.github.io/Pricing-card-Frontend/"
  }
];

export default projects;
