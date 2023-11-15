import React from 'react'
import Navbar from './navBar'
import Footer from './Footer'
import Self from '../Media/Self.jpg'
import Bootstrap from '../Media/Bootstrap.png'
import Java from '../Media/Java.png'
import Sql from '../Media/Oracle_SQL.png'
import Html from '../Media/HTML5.png'
import Css from '../Media/css.png'
import REACT from '../Media/React.png'
import JS from '../Media/javascript.png'
import Visual from '../Media/visual.png'
import Idea from '../Media/idea.png'
import SQLSERVER from '../Media/sql-server.png'

function About() {
  return (
    <>
    <Navbar/>
    <section id="About">
      <div id="Dash-1">
      <div id="First">
        <h1>Know Who <span className="col">I'M</span></h1>
        <p>Hi, I'm a recent graduate and I'm exploring the <br />exciting world of technology to learn new <br /> things every day. I'm eager to identify the <br />technologies that I should adapt to improve myself<br /> and contribute to its development.
        </p>
        <h2>My <span className="col">Hobbies</span> :</h2>
        <p className='p'><span className='col'><i class="fa-regular fa-hand-point-right fa-lg"></i></span>Watching Anime</p>
        <p className='p'><span className='col'><i class="fa-regular fa-hand-point-right fa-lg"></i></span>Playing Games</p>
        <p className='p'><span className='col'><i class="fa-regular fa-hand-point-right fa-lg"></i></span>Reading Manga</p>
      </div>
      <div className="wrapper">
  <div className="card">
    <div className="img-box">
      <img
        src={Self}
        alt="image url"
      />
    </div>
    <div className="content">
      <h2 className="card-one">Kiran Dhoke</h2>
      <p>
        Bsc.CS || Java Developer|| Web Developer
      </p>
    </div>
  </div>
</div>
      </div>
      <div id="Dash-2">
        <h1>Professional <span className='col'>Skills</span></h1>
        </div>
        <section id='Skill-card'>
              <div className='Card'>
                    <img id='java' src={Java} alt="" />
              </div>
              <div className='Card'>
                    <img id='sql' src={Sql} alt="" />
              </div>
              <div className='Card'>
                    <img id='html' src={Html} alt="" />
              </div>
              <div className='Card'>
                    <img id='css' src={Css} alt="" />
              </div>
              <div className='Card'>
                    <img id='js' src={JS} alt="" />
              </div>
              <div className='Card'>
                    <img id='boot' src={Bootstrap} alt="" />
              </div>
              <div className='Card'>
                    <img id='reac' src={REACT} alt="" />
              </div>
        </section>
        <section id="skill">
        <div className='Card'>
                    <img id='visual' src={Visual} alt="" />
              </div>
              <div className='Card'>
                    <img id='idea' src={Idea} alt="" />
              </div>
              <div className='Card'>
                    <img id='sql-serv' src={SQLSERVER} alt="" />
              </div>
        </section>
    </section>
    <Footer/>
    </>
  )
}

export default About