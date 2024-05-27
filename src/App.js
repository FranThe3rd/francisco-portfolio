import './App.css';
import { DiscordLogo } from 'phosphor-react';
import myFace from './assets/sexyface.jpg'
import { useEffect } from 'react';




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
    {
      name: 'Java',
      class: "devicon-java-plain-wordmark colored",
    }
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
            <img className='noSlideRight' src={myFace} alt='sexy face' />
          </div>
        </div>
      </div>

      <div className='tech'>
        <h1 className='hidden'>Technologies</h1>
        <div  className='tech-icons hidden'>
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
        
      </div>
    </div>
  );
}

export default App;
