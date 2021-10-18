# Portfolio Website

This is my portfolio website. You can visit the website at [justin-jang.com](https://justin-jang.com).

## About the Project

- This website is created to promote my projects and a contact form to reach out to me.

## Built With

### Tech Stack

- React

### Languages

- JavaScript

### Others

- styled-components
- react-scroll
- react-router
- react gh-pages
- formsubmit.com

## Getting Started

- Go to [justin-jang.com](https://justin-jang.com).
- Click project box to start the app.
- You can also click **Git** or **Server** inside the project card to see the codes.
- Drop me a message through the contact form!
- Checkout my github, instagram or resume at the footer.

### `Personal Note`

#### react deploy through github

I added lines inside package.json —
"homepage" : "https://justin-jang.com",
and
"scripts": { "predeploy":"npm run build && cp CNAME build/CNAME", "deploy":"gh-pages -d build", }
to deploy react.js through gh-pages.

I also added CNAME including my url in order to gh-pages to automatically include my custom url when I **npm run deploy**.

#### react-router

I used **HashRouter** instead of BrowserRouter as an alternative prevention of blank **route** page when deployed through gh-pages.

Through the Switch, Route system, the page routes between "home" and "thankyou" page.

#### formsubmit.com

I used a third party site to send me emails through form submission on the contact section.
