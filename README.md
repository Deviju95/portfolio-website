# Portfolio Website

This is my portfolio website. You can visit the website at [justin-jang.com](https://justin-jang.com).

## About the Project

- This website is created to promote my projects and a contact form to reach out to me.

### Built With

- React
- react-scroll
- react gh-pages
- formsubmit.com (third party for email control)

## Dev Purpose

### Load on browser

Run

```
npm run start
```

to start the development server.
Check localhost:3000 in your browser and see if the home page loads!

### Deploy through github

Run

```
npm run deploy
```

will run

`"predeploy":"npm run build && cp CNAME build/CNAME"`
and
`"deploy":"gh-pages -d build"`

to deploy react.js through gh-pages.

(Also added CNAME including my url in order to gh-pages to automatically include my custom url when I deploy.)

Happy hacking! 💃
