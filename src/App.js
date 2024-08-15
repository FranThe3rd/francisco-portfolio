import './App.css';
import { Envelope } from 'phosphor-react';
import myFace from './assets/sexyface.jpg'
import { useEffect } from 'react';
import project1 from './assets/project1.jpg'
import project2 from './assets/project2.gif'
import project3 from './assets/project3.png'
import project4 from './assets/project4.jpg'
import project5 from './assets/project5.gif'
import project6 from './assets/project6.jpg'
import project7 from './assets/project7.gif'
import project8 from './assets/project8.png'



import Lenis from 'lenis'





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

  useEffect(() => {
    const lenis = new Lenis()



    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })


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
            <a href='mailto:francisco.figueroa.dev@gmail.com'>
              <Envelope size={32} />
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
            <div className='blob hidden'></div>
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
            <h3 className='noSlideLeft2'>July 2024 – Present</h3>
          </div>
          <div className='experience-text noSlideRight'>
            <h3 className='hidden'>Software Engineer Fellow </h3>
            <p className='italicText'>Headstarter.co</p>
            <p className='hidden'>Going to develop 5 AI projects over a period of 7 weeks, demonstrating strong project management and technical skills in artificial intelligence.
              Collaborated with industry tech professionals on innovated tech professional on real-world problems
              Enhanced skills in software developement, project management, and team collaberation through intensive workshops and practical applications.</p>
          </div>
          <div className='date'>
            <h3 className='noSlideLeft2'>December 2023 – Present</h3>
          </div>
          <div className='experience-text noSlideRight'>
            <h3 className='hidden'>Web Developer</h3>
            <p className='italicText'>Freelance</p>
            <p className='hidden'>Developed a sophisticated photography portfolio website for professional photographers using React.js, ensuring a high-quality, responsive user experience.
              Collaborated with photographers to understand requirements and add features such as image galleries, and contact information and services.</p>
          </div>
          <div className='date'>
            <h3 className='noSlideLeft2'>July 2024</h3>
          </div>
          <div className='experience-text noSlideRight'>
            <h3 className='hidden'>Course</h3>
            <p className='italicText'>Spring Boot For Beginners</p>
            <p className='hidden'>
              Experienced in Spring Boot development with expertise in Spring Web MVC for building scalable web applications. Proficient in managing JSON data and database connectivity using Spring Data JPA, and skilled in designing and implementing CRUD APIs.</p>
          </div>

        </div>

      </div>
      <div className='projects'>
        <h1 className='hidden'>Projects</h1>
        <div className='project-grid'>

        <div className='project-image noSlideLeft2'>
            <img src={project8} alt='project' />
          </div>
          <div className='project-text noSlideRight'>
            <h2>UFC Insight</h2>
          <p>UFC Insight is a full-stack web application for searching and viewing detailed UFC fighter profiles. Users can easily find fighters by name and access comprehensive information including weight, height, stance, and date of birth. The app combines a responsive React frontend with a Spring Boot backend and PostgreSQL database for efficient data management.</p>
            <div className='project-tech'>
              <h4>ReactJS</h4>
              <h4>PostgreSQL</h4>
              <h4>SpringBoot</h4>
              <h4>NodeJS</h4>


            </div>
            <div className='project-live'>
              <a href='https://ufc-insight.vercel.app/' target='_blank'><h4>Live Demo</h4></a>
              <a href='https://github.com/FranThe3rd/UFC-Insight' target='_blank'><h4>Github</h4></a>
            </div>
          </div>


          <div className='project-image noSlideLeft2'>
            <img src={project4} alt='project' />
          </div>
          <div className='project-text noSlideRight'>
            <h2>ZephyrGPT</h2>
            <p>ZephyrGPT is supposed to be an advanced AI-powered chatbot. It uses the Gemini API (Google's LLM) for intelligent, personalized responses and the News API for real-time updates. Our platform ensures a secure, engaging conversation experience with a user-friendly interface. </p>
            <div className='project-tech'>
              <h4>ReactJS</h4>
              <h4>NodeJS</h4>
              <h4>JavaScript</h4>
              <h4>CSS</h4>
            </div>
            <div className='project-live'>
              <a href='https://zephyr-gpt.vercel.app/' target='_blank'><h4>Live Demo</h4></a>
              <a href='https://github.com/FranThe3rd/ZephyrGPT' target='_blank'><h4>Github</h4></a>
            </div>
          </div>

       
          <div className='project-image noSlideLeft2'>
            <img src={project6} alt='project' />
          </div>
          <div className='project-text noSlideRight'>
            <h2>Photographer Portfolio</h2>
            <p>This is a Photography Portfolio Website that showcases the artistic talents of Brandon, a passionate photographer studying media productions at Northampton Community College. The site features diverse galleries including urban street photography, architectural photography, portrait photography, and sunset photography.

            </p>
            <div className='project-tech'>
              <h4>ReactJS</h4>
              <h4>NodeJS</h4>
              <h4>JavaScript</h4>
              <h4>CSS</h4>
            </div>
            <div className='project-live'>
              <a href='https://brandon-guaman.vercel.app/#/' target='_blank'><h4>Live Demo</h4></a>
              <a href='https://brandon-guaman.vercel.app/#/' target='_blank'><h4>Github</h4></a>
            </div>
          </div>


          <div className='project-image noSlideLeft2'>
            <img src={project7} alt='project' />
          </div>
          <div className='project-text noSlideRight'>
            <h2>AI Customer Support</h2>
            <p>A Next.js landing page for an e-commerce platform featuring a Gemini API-powered support chatbot. This project demonstrates integration of AI-assisted customer support within a modern React-based web application.AI Customer Support. </p>
            <div className='project-tech'>
              <h4>Next.js</h4>
              <h4>ReactJS</h4>
              <h4>NodeJS</h4>
              <h4>JavaScript</h4>

            </div>
            <div className='project-live'>
              <a href='https://ai-customer-support-sable.vercel.app/' target='_blank'><h4>Live Demo</h4></a>
              <a href='https://github.com/FranThe3rd/AI-Customer-Support' target='_blank'><h4>Github</h4></a>
            </div>
          </div>



          <div className='project-image noSlideLeft2'>
            <img src={project1} alt='project' />
          </div>
          <div className='project-text noSlideRight'>
            <h2>Infinitron</h2>
            <p>Infinitron is a website for a computer store that specializes in custom-built gaming PCs. The website allows users to browse and configure their desired gaming PC based on their budget and performance requirements.</p>
            <div className='project-tech'>
              <h4>ReactJS</h4>
              <h4>JavaScript</h4>
              <h4>NodeJS</h4>
              <h4>CSS</h4>
            </div>
            <div className='project-live'>
              <a href='https://infinitron.netlify.app/' target='_blank'><h4>Live Demo</h4></a>
              <a href='https://github.com/FranThe3rd/Infinitron' target='_blank'><h4>Github</h4></a>
            </div>
          </div>

          <div className='project-image noSlideLeft2'>
            <img src={project3} alt='project' />
          </div>
          <div className='project-text noSlideRight'>
            <h2>Opulance</h2>
            <p>Opulance is a financial app that provides users with excellent financial services and tools to manage their investments, including cryptocurrencies and stocks. Does provide real time stock market data with Real-Time Finance Data API.</p>
            <div className='project-tech'>
            <h4>ReactJS</h4>
              <h4>JavaScript</h4>
              <h4>NodeJS</h4>
              <h4>CSS</h4>
            </div>
            <div className='project-live'>
              <a href='https://opulance.vercel.app/' target='_blank'><h4>Live Demo</h4></a>
              <a href='https://github.com/FranThe3rd/Opulance' target='_blank'><h4>Github</h4></a>
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
            <div className='project-live'>
              <a href='https://github.com/cs220s24/DevOps-Discord-Bot' target='_blank'><h4>Live Demo</h4></a>
              <a href='https://github.com/cs220s24/DevOps-Discord-Bot' target='_blank'><h4>Github</h4></a>
            </div>
          </div>

          <div className='project-image noSlideLeft2'>
            <img src={project5} alt='project' />
          </div>
          <div className='project-text noSlideRight'>
            <h2>Java Basketball Stats Tracker</h2>
            <p>A comprehensive Java-based application project that implements a user-friendly graphical interface to efficiently track, manage, and analyze player statistics for the Moravian Women's Basketball Team using MySQL.</p>
            <div className='project-tech'>
              <h4>Java</h4>
              <h4>JavaFX</h4>
              <h4>MySQL</h4>
              <h4>Netbeans</h4>
            </div>
            <div className='project-live'>
              <a href='https://github.com/Dbad0210/Software-Engineering-Project' target='_blank'><h4>Live Demo</h4></a>
              <a href='https://github.com/Dbad0210/Software-Engineering-Project' target='_blank'><h4>Github</h4></a>
            </div>
          </div>


        </div>
      </div>

    </div>
  );
}

export default App;
