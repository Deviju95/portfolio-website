export const projectData = [
  {
    id: 'foodies',
    title: 'Foodies',
    subtitle: '2022.02 - Personal Project',
    images: [
      '/images/foodies-2.JPG',
      '/images/foodies-3.JPG',
      '/images/foodies-4.JPG',
      '/images/foodies-5.JPG',
    ],
    description: (
      <p>
        <span>
          A web application to document and share your favorite local
          restaurants.
        </span>{' '}
        I got inspired from a conversation with my friend, where we were sharing
        hidden restaurants that were rather only known by local neighbors.
        <br></br>
        <br></br>
        Working from top to bottom full stack web application, I got to
        strengthen my understanding of whole web service{' '}
        <span>system design</span> of frontend to backend to database, resolving
        Cross-Origin Resource Sharing (CORS) concept and structuring data
        schemas in node.js in relation to MongoDB’s NoSQL database.
        <br></br>
        <br></br>I also got to take on the concept of <span>transaction</span>{' '}
        in data processing for user register features and upload place features,
        as well as the <span>Model View Controller (MVC)</span> structure for
        the backend.
        <br></br>
        <br></br>I used pure CSS with the{' '}
        <span>Block Element Modifier (BEM)</span> naming convention for this web
        application to get used to maintainability of web applications.
      </p>
    ),
    details: [
      {
        title: 'Function',
        content:
          'Create your account, Upload your restaurant with image and address, See other user posts',
      },
      {
        title: 'GitHub',
        content: (
          <a
            href={'https://github.com/deviju95/foodies'}
            target='_blank'
            rel='noreferrer'
          >
            https://github.com/deviju95/foodies
          </a>
        ),
      },
      {
        title: 'URL',
        content: (
          <a
            href={'https://foodies-7cc2c.web.app'}
            target='_blank'
            rel='noreferrer'
          >
            https://foodies-7cc2c.web.app
          </a>
        ),
      },
      { title: 'Frontend', content: 'React.js, Axios' },
      { title: 'Backend', content: 'Node.js, Express.js, JWT, multer' },
      { title: 'Database', content: 'MongoDB, Mongoose, AWS s3' },
      { title: 'Deployment', content: 'Firebase, Heroku' },
      { title: 'API', content: 'Google Map API' },
    ],
  },
  {
    id: 'libiam',
    title: 'LIBIAM',
    subtitle: '2022.04 - Team Project',
    images: [
      '/images/libiam-1.JPG',
      '/images/libiam-2.JPG',
      '/images/libiam-3.JPG',
    ],
    description: (
      <p>
        <span>
          A web service to provide an AI generated, customizable, personalized
          story book.
        </span>
        <br></br>
        <br></br>
        Being a frontend engineer among a group of designers, AI modelers, and
        developers, I got to learn a lot through massive communication in a
        professional setting.
        <br></br>
        <br></br>
        My main task was to set up and deliver multiple user keywords from
        frontend to backend. I was able to tighten my understanding of{' '}
        <span>React hooks and axios</span> on delivering multiple group words in
        JSON format.
        <br></br>
        <br></br>
        Creating a User Authorization feature allowed me to explore the
        createContext and Provider concept of React as well as password hashing
        and JSON Web Tokens (JWT) for a{' '}
        <span>secure user information transaction.</span>
        <br></br>
        <br></br>
        Being heavily involved from start to the end of the project, I got to
        dive deep in UI & UX components along with the designers in the team,
        where I worked with <span>Figma and TailwindCSS</span> to create user
        interactive animations and designs.
      </p>
    ),
    details: [
      {
        title: 'Function',
        content:
          'Group of keywords collected and send to AI endpoint, Create an AI generated personalized story book, Fetch AI data and display in book format, Create a secure account',
      },
      {
        title: 'GitHub',
        content: (
          <a
            href={'https://github.com/LIBIAM-Book/LIBIAM-App'}
            target='_blank'
            rel='noreferrer'
          >
            https://github.com/LIBIAM-Book/LIBIAM-App
          </a>
        ),
      },
      {
        title: 'URL',
        content: (
          <a
            href={'https://infallible-kare-33bc88.netlify.app/'}
            target='_blank'
            rel='noreferrer'
          >
            https://infallible-kare-33bc88.netlify.app/
          </a>
        ),
      },
      { title: 'Frontend', content: 'React.js, tailwindCSS' },
      { title: 'Backend', content: 'Node.js' },
      { title: 'Database', content: 'MySQL' },
      { title: 'Deployment', content: 'Netlify' },
    ],
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    subtitle: '2021.09 - Personal Project',
    images: [
      '/images/portfolio-1.JPG',
      '/images/portfolio-2.JPG',
      '/images/portfolio-3.JPG',
      '/images/portfolio-4.JPG',
    ],
    description: (
      <p>
        <span>
          A personal website to promote my projects and skills that I have
          worked on.
        </span>
        It is indeed the website you are looking at right now :)
        <br></br>
        <br></br>Working with React.js as the main frontend framework got me to
        firmly grasp the concept of <span>functional component</span> and single
        page website in React. Incorporating React’s newest features like{' '}
        <span>react-router-dom v6</span> and node packages such as react-scroll
        gave me confidence that I am able to build up-to-date and polished
        websites.
        <br></br>
        <br></br>I originally used styled-components as the main styling
        framework for this website, but I revisited the whole styling with{' '}
        <span>bootstrap</span> to explore the UI & UX details in more depth. As
        a result, I got to touch upon the theme file and my own css keyframes to
        create complex user interactive animations.
        <br></br>
        <br></br>I chose <span>GitHub Pages</span> for deployment, which I
        learned to be a simple yet powerful way to host a webpage directly from
        GitHub repository.
      </p>
    ),
    details: [
      {
        title: 'Function',
        content:
          'Introduce Personal Projects, Share Resume, Social Links, Message Box',
      },
      {
        title: 'GitHub',
        content: (
          <a
            href={'https://github.com/deviju95/portfolio-website'}
            target='_blank'
            rel='noreferrer'
          >
            https://github.com/deviju95/portfolio-website
          </a>
        ),
      },
      {
        title: 'URL',
        content: (
          <a href={'https://justin-jang.com'} target='_blank' rel='noreferrer'>
            https://justin-jang.com
          </a>
        ),
      },
      { title: 'Frontend', content: 'React.js, Bootstrap' },
      { title: 'Deployment', content: 'GitHub Pages' },
      { title: 'API', content: 'Emailjs' },
    ],
  },
  {
    id: 'album-search',
    title: 'Album Search',
    subtitle: '2022.04 - Personal Project',
    images: ['/images/album-1.JPG', '/images/album-2.JPG'],
    description: (
      <p>
        <span>
          A web application to search all published albums of your favorite
          artist.
        </span>
        <br></br>
        <br></br>
        The purpose of building this application was to strengthen my skills in
        using a <span>public API</span> for greater scale of project with proper
        usage of
        <span>HTML semantic tags</span>, maintainable CSS, and JavaScript
        document prototypes.
        <br></br>
        <br></br>I got to hone my skills in creating nodes from JSON data,
        adding a loading spinner feature while the user is fetching data, and
        also creating <span>pagination</span> based on the number of albums
        data.
        <br></br>
        <br></br>
        Working on CSS pseudo-class and CSS resets to manage coherent and
        maintainable box-sizing and root colors also strengthened my grasp on
        clean CSS coding.
      </p>
    ),
    details: [
      {
        title: 'Function',
        content:
          'Search artist name, Traverse through multiple album information',
      },
      {
        title: 'GitHub',
        content: (
          <a
            href={'https://github.com/deviju95/album-search-application'}
            target='_blank'
            rel='noreferrer'
          >
            https://github.com/LIBIAM-Book/LIBIAM-App
          </a>
        ),
      },
      { title: 'Frontend', content: 'HTML, CSS, JavaScript' },
      { title: 'API', content: 'Apple iTunes API' },
    ],
  },
  {
    id: 'my-dictionary',
    title: 'My Dictionary',
    subtitle: '2022.06 - Personal Project',
    images: ['/images/dict-1.JPG'],
    description: (
      <p>
        <span>
          A chrome extension web application to provide a pop-up tooltip
          dictionary across two different languages.
        </span>
        <br></br>
        <br></br>
        This project started as the original existing popup tooltip dictionary
        extension that I used to use was no longer in service.
        <br></br>
        <br></br>
        This application uses the newest chrome extension{' '}
        <span>manifest version 3</span>, with features of “options” for UI
        settings and “content-script” to handle the main popup tooltip function.
        <br></br>
        <br></br>
        This personal project is currently <span>in development</span>, which
        you can check the ongoing process from the github link below!
      </p>
    ),
    details: [
      {
        title: 'Function',
        content: 'Chrome Extension Development',
      },
      {
        title: 'GitHub',
        content: (
          <a
            href={'https://github.com/deviju95/my-dictionary'}
            target='_blank'
            rel='noreferrer'
          >
            https://github.com/deviju95/my-dictionary
          </a>
        ),
      },
      { title: 'Frontend', content: 'javascript, HTML, CSS' },
    ],
  },
];
