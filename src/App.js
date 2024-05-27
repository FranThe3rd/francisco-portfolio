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
        <div className='app-hero-text noSlideLeft2'>
        <h1 >Francisco Figueroa</h1>
        <h2  >Computer Science Student</h2>
        <p >Hello, I am computer science student at Moravian University. My primary expertise lies in developing websites using React. I'm actively seeking opportunities to apply my skills in real-world settings and land my first role at a tech internship since getting experience is my main priority. </p>
        </div>
        <div className='app-hero-image'>
          <img className='noSlideRight' src={myFace} alt='sexy face' />
        </div>
      </div>
      </div>

      <div className='about'>
        <h1>About Me</h1>
      </div>


    </div>
  );
}

export default App;
