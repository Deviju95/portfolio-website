# Personal Portfolio Website

Visit website at [justin-jang.com](https://justin-jang.com).

## Available Scripts

This website is built using React.js. Concepts I used in this website:

### `styled-components`

Style the website from top to bottom, such as creating my own navbars and responsive elements.

### `react-scroll`

This allows me to create a single page scroll when a navbar menu is clicked.

### `react-router`

I used **HashRouter** instead of BrowserRouter as an alternative prevention of blank page when deployed through gh-pages.

Through the Switch, Route system, the page routes between "home" and "thankyou" page.

### `formsubmit.com`

I used a third party site to send me emails through form submission on the contact section.

### `react gh-pages deploy`

I added lines inside package.json —
"homepage" : "https://justin-jang.com",
and
"scripts": { "predeploy":"npm run build && cp CNAME build/CNAME", "deploy":"gh-pages -d build", }
to deploy react.js through gh-pages.

I also added CNAME including my url in order to gh-pages to automatically include my custom url when I **npm run deploy**.
