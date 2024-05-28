import './App.css';
import { DiscordLogo } from 'phosphor-react';
import myFace from './assets/sexyface.jpg'
import { useEffect } from 'react';
import project1 from './assets/project1.jpg'
import project2 from './assets/project2.gif'
import project3 from './assets/project3.png'




function App() {

  // Slide Elements
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slideLeft1');
        } else {
          entry.target.classList.remove('slideLeft1');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.noSlideLeft1');
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup function
    return () => {
      hiddenElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []); // Empty dependency array to run the effect only once after initial render

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slideLeft2');
        } else {
          entry.target.classList.remove('slideLeft2');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.noSlideLeft2');
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup function
    return () => {
      hiddenElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []); // Empty dependency array to run the effect only once after initial render

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slideLeft3');
        } else {
          entry.target.classList.remove('slideLeft3');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.noSlideLeft3');
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup function
    return () => {
      hiddenElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []); // Empty dependency array to run the effect only once after initial render


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slideRight');
        } else {
          entry.target.classList.remove('slideRight');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.noSlideRight');
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      hiddenElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slideRight');
        } else {
          entry.target.classList.remove('slideRight');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.noSlideRight');
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      hiddenElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      hiddenElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);




  const socialIcons = [
    {
      link: 'https://www.linkedin.com/in/francisco-figueroa-73a9941b6/',
      class: "devicon-linkedin-plain",
    },
    {
      link: 'https://github.com/FranThe3rd',
      class: "devicon-github-original",
    },
  ];

  const techIcons = [

    {
      name: 'HTML5',
      class: "devicon-html5-plain-wordmark colored",
    },

    {
      name: 'CSS3',
      class: "devicon-css3-plain-wordmark colored",
    },

    {
      name: 'JavaScript',
      class: "devicon-javascript-plain colored",
    },

    {
      name: 'React',
      class: "devicon-react-original colored",
    },
    {
      name: 'Node.js',
      class: "devicon-nodejs-plain-wordmark colored",
    },
    {
      name: 'Git',
      class: "devicon-git-plain-wordmark colored",
    },
    {
      name: 'MySQL',
      class: "devicon-mysql-plain-wordmark colored",
    },
    {
      name: 'Python',
      class: "devicon-python-plain-wordmark colored",
    },

  ]


  return (
    <div className="App">
      <div className='app-container'>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

        <div className='navbar'>
          <h1>F F</h1>
          <div className='icons'>
            {socialIcons.map((icon) => {
              return (
                <a href={icon.link} target='_blank'>
                  <i className={icon.class}></i>
                </a>);
            })}
            <a href='https://discord.gg/8j3yKU3Z' target='_blank'>
              <DiscordLogo size={32} />
            </a>
          </div>
        </div>

        <div className='app-hero-grid'>
          <div className='app-hero-text noSlideLeft1'>
            <h1 >Francisco Figueroa</h1>
            <h2  >Computer Science Student</h2>
            <p >Hello, I am computer science student at Moravian University. My primary expertise lies in developing websites using React. I'm actively seeking opportunities to apply my skills in real-world settings and land my first role at a tech internship since getting experience is my main priority. </p>
          </div>
          <div className='app-hero-image'>
            <img className='hidden' src={myFace} alt='sexy face' />
          </div>
        </div>
      </div>

      <div className='tech'>
        <h1 className='hidden'>Technologies</h1>
        <div className='tech-icons hidden'>
          {techIcons.map((icon) => {
            return (
              <div className='tech-icon floating'>
                <i className={icon.class}></i>
              </div>
            );
          })}

        </div>
      </div>
      <div className='experience'>
        <h1 className='hidden'>
          Experience
        </h1>
        <div className='experience-grid'>
          <div className='date'>
            <h3 className='hidden'>December 2023 – Present</h3>
          </div>
          <div className='experience-text'>
            <h3 className='hidden'>Web Developer</h3>
            <p className='hidden'>Developed an ecommerce photography portfolio website for professional photographer using React.js.
              Created components for home, shop, product details, cart, contact form, and about pages.
              Managed state with React Context API and ShopContextProvider component.
              Used React router for navigation between pages.</p>
          </div>
          <div className='date'>
            <h3 className='hidden'>February 2024</h3>
          </div>
          <div className='experience-text'>
            <h3 className='hidden'>Lab</h3>
            <p className='hidden'>Developed a data application leveraging Financial & Economic Essentials from Cybersyn, utilizing Snowflake Marketplace..
              Processed data with Snowpark, developed a simple ML model, and created a Python UDF in Snowflake.</p>
          </div>
          <div className='date'>
            <h3 className='hidden' id='timeDate'>December 2023</h3>
          </div>
          <div className='experience-text'>
            <h3 className='hidden'>HTML & CSS Full Course</h3>
            <p className='hidden'>Proficiency in HTML for structuring web content and CSS for styling and layout
              Building responsive web designs
              Understanding the fundamentals of web development</p>
          </div>
        </div>

      </div>
      <div className='projects'>
        <h1 className='hidden'>Projects</h1>
        <div className='project-grid'>
          <div className='project-image noSlideLeft2'>
            <img src={project1} alt='project' />
          </div>
          <div className='project-text noSlideRight'>
            <h2>Infinitron</h2>
            <p>Infinitron is a website for a computer store that specializes in custom-built gaming PCs. The website allows users to browse and configure their desired gaming PC based on their budget and performance requirements.</p>
              <div className='project-tech'>
                <h4>HTML</h4>
                <h4>CSS</h4>
                <h4>React</h4>
                <h4>JavaScript</h4>
            </div>
          </div>
          <div className='project-image noSlideLeft2'>
            <img src={project2} alt='project' />
          </div>
          <div className='project-text noSlideRight'>
            <h2>Blackjack Discord Bot</h2>
            <p>A Discord bot simulating blackjack using AWS and Docker. When prompted, it displays cards, allows hitting/standing, and plays the dealer's hand. Built with Python, it runs in Docker containers deployed on AWS EC2 instance.</p>
            <div className='project-tech'>
                <h4>Python</h4>
                <h4>Redis</h4>
                <h4>Docker</h4>
                <h4>AWS</h4>

            </div>
          </div>
          <div className='project-image noSlideLeft2'>
            <img src={project3} alt='project' />
          </div>
          <div className='project-text noSlideRight'>
            <h2>Opulance</h2>
            <p>Opulance is a financial app that provides users with excellent financial services and tools to manage their investments, including cryptocurrencies and stocks. Does provide real time stock market data with Real-Time Finance Data API.</p>
            <div className='project-tech'>
                <h4>HTML</h4>
                <h4>CSS</h4>
                <h4>React</h4>
                <h4>JavaScript</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
