# Portfolio Website

You can visit the website at [justin-jang.com](https://justin-jang.com).

## About the Project

### Built With

- react.js
- react-router-dom v6
- emailjs
- react gh-pages
- react-scroll
- bootstrap

## Dev Purpose

```
npm install
```

For first time opening project file.

### Set environment variables

Go to root folder and create

```
.env

REACT_APP_SERVICE_ID=
REACT_APP_TEMPLATE_ID=
REACT_APP_USER_ID=
```

To operate emailjs properly.

**Important! react app requires to use `REACT_APP_` for .env variables**
**Important! stop server and re-run whenever you change .env variables**

### Load on browser

Run

```
npm run start
```

to load react app on browser, localhost:3000.

### Deploy through github

Run

```
npm run deploy
```

will do the following:
`"predeploy":"npm run build && cp CNAME build/CNAME"`
and
`"deploy":"gh-pages -d build"`
and will deploy react app through gh-pages.

**Important! added CNAME including my url in order to gh-pages to automatically include my custom url when I deploy.**

---

Happy hacking! 💃
