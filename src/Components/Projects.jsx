import React, { useEffect, useRef } from 'react';
import Navbar from './navBar';
import Footer from './Footer';
import Insurance from '../Media/Screenshot (12).png';
import Dashboard from '../Media/Screenshot (13).png';
import Royal from '../Media/Screenshot (16).png';
import Netflix from '../Media/Screenshot (15).png';
import Alpha from '../Media/Screenshot (14).png';
import Lanscaper from '../Media/Screenshot (17).png'
import dotNkey from '../Media/Screenshot (18).png'
import Ecomm from '../Media/Screenshot (19).png'
function Projects() {
  const imgRefs = [useRef(), useRef(), useRef()];
  const linkRefs = [useRef(), useRef(), useRef()];

  const imageStorage = [Lanscaper, dotNkey,Ecomm, Royal, Alpha, Netflix];
  const linkStorage = [
    'https://superio007.github.io/WebTech/Projects/Day14/Landscraper/Land.html',
    'https://superio007.github.io/WebTech/Projects/Day14/DotNKey/DotNKey.html',
    'https://superio007.github.io/WebTech/Projects/Day14/Ecommerce%20Website/ecommerce.html',
    'https://superio007.github.io/WebTech/Projects/Day14/RoyalEnfield/index.html',
    'https://superio007.github.io/WebTech/Projects/Day14/Alpha/Alpha.html',
    'https://superio007.github.io/WebTech/Projects/Day14/Netflix/Netflix.html',
  ];

  let index = 0;

  function change() {
    imgRefs.forEach((imgRef, i) => (imgRef.current.src = imageStorage[index + i]));
    linkRefs.forEach((linkRef, i) => (linkRef.current.href = linkStorage[index + i]));
  }

  function nxt() {
    index = (index + 1) % imageStorage.length;
    change();
  }

  useEffect(() => {
    const rotateInterval = setInterval(nxt, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(rotateInterval);
  }, []);

  return (
    <>
      <Navbar />
      <section id="projects">
        <h1>
          React <span className="col"> JS</span> Projects
        </h1>
        <div id="Dash-1">
          <div className="Card">
            <a href="https://insurance-website-ic0cqas3w-superio007s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src={Insurance} alt="" />
            </a>
          </div>
          <div className="Card">
            <a href="https://fitpeo-ui-task-rnemxwqgb-superio007s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src={Dashboard} alt="" />
            </a>
          </div>
        </div>
        <h1>
          Html 5 <span className="col">Css</span> Javascript <span className="col">Projects</span>
        </h1>
        <div id="Dash-2">
          <div className="Card">
            <a ref={linkRefs[0]} target="_blank" rel="noopener noreferrer">
              <img ref={imgRefs[0]} src={Alpha} alt="" />
            </a>
          </div>
          <div className="Card">
            <a ref={linkRefs[1]} target="_blank" rel="noopener noreferrer">
              <img ref={imgRefs[1]} src={Netflix} alt="" />
            </a>
          </div>
          <div className="Card">
            <a ref={linkRefs[2]} target="_blank" rel="noopener noreferrer">
              <img ref={imgRefs[2]} src={Royal} alt="" />
            </a>
          </div>
        </div>
        <h1>
          Others <span className="col">Projects</span>
        </h1>
        <div id="Dash-3">
            <table>
              <tr>
                <th>Id</th>
                <th className='col'>Name</th>
              </tr>
              <tr>
                <td>1</td>
                <td><a href="https://github.com/superio007/qr-code-attendence-system" target="_blank" rel="noopener noreferrer">Qr Code Attendence Management</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td><a href="https://github.com/superio007/library-attendence" target="_blank" rel="noopener noreferrer">Libray Management System</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td><a href="https://github.com/superio007/audio-to-text-converter-" target="_blank" rel="noopener noreferrer">Audio Text Converter</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td><a href="https://github.com/superio007/basic-banking-system" target="_blank" rel="noopener noreferrer">Bank Management System</a></td>
              </tr>
              <tr>
                <td>5</td>
                <td><a href="https://github.com/superio007/Hospital" target="_blank" rel="noopener noreferrer">Hospital Management System</a></td>
              </tr>
            </table>
            <table>
              <tr>
                <th>Id</th>
                <th className='col'>Name</th>
              </tr>
              <tr>
                <td>1</td>
                <td><a href="https://github.com/superio007/.netWebApi" target="_blank" rel="noopener noreferrer">.Net Web Api</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td><a href="https://github.com/superio007/.NetWebForms" target="_blank" rel="noopener noreferrer">.Net Web Forms</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td><a href="https://github.com/superio007/WebTech/tree/main/Projects/Day14/Calculator" target="_blank" rel="noopener noreferrer">Calculator</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td><a href="https://github.com/superio007/OIBSIP/tree/main/NumberGuessingGame" target="_blank" rel="noopener noreferrer">Number Guessing Game</a></td>
              </tr>
              <tr>
                <td>5</td>
                <td><a href="https://github.com/superio007/OIBSIP/tree/main/AtmMachineProject" target="_blank" rel="noopener noreferrer">Atm Machince Console App</a></td>
              </tr>
            </table>
            <table>
              <tr>
                <th>Id</th>
                <th className='col'>Name</th>
              </tr>
              <tr>
                <td>1</td>
                <td><a href="http://" target="_blank" rel="noopener noreferrer">DashBoard Ui </a></td>
              </tr>
              <tr>
                <td>2</td>
                <td><a href="http://" target="_blank" rel="noopener noreferrer">Survey Form</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td><a href="http://" target="_blank" rel="noopener noreferrer">Basket Ball Game</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td><a href="http://" target="_blank" rel="noopener noreferrer">Table 21</a></td>
              </tr>
              <tr>
                <td>5</td>
                <td><a href="https://github.com/superio007/WebTech/tree/main/Projects/Day14/Extension" target="_blank" rel="noopener noreferrer">Extension</a></td>
              </tr>
            </table>
        </div>
      </section>

      <Footer/>
    </>
  );
}

export default Projects;
