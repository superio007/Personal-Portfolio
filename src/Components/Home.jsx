import React from 'react'
import Navbar from './navBar'
import Footer from './Footer'
import HomeLogo from '../Media/home-main.svg'
import DashLogo from '../Media/avatar.svg'

function Home() {
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    
    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
    
        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
    
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
        var that = this;
        var delta = 200 - Math.random() * 100;
    
        if (this.isDeleting) { delta /= 2; }
    
        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }
    
        setTimeout(function() {
        that.tick();
        }, delta);
    };
    
    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
  return (
    <>
    <Navbar/>
    <section id="Home">
        {/* <hr /> */}
        <div id='Dash-1'>
        <div id='First'>
            <h1>Hi There👋</h1>
            <h1>I'M Kiran Dhoke</h1>
            <h1 id='change'>
                <a href="" className="typewrite" data-period="2000" data-type='[ "Technology Enthusiast", "Web Developer", "Java Developer", "Highly Motivated" ]'>
                <span class="wrap"></span>
                </a>
            </h1>
        </div>
        <div id='Second'>
            <img src={HomeLogo} alt="" />
        </div>
        </div>
        {/* <hr /> */}
        <div id="Dash-2">
            <div id="First">
                <h1>LET ME <span className='col'>INTRODUCE</span> MYSELF</h1>
                <p>I am fluent in Java And Sql</p>
                <p>I debug more than I code.</p>
                <p>My pronouns are <b>Jack of All Trades / Master of none</b> </p>
            </div>
            <div id="Second">
                <img src={DashLogo} alt="" />
            </div>
        </div>
        {/* <hr /> */}
        <div id="Dash-3">
            <div id='First'>
                <h1>FIND ME ON</h1>
                <p>Feel free to <span className='col'>connect</span> with me</p>
            </div>
            <div id='Second'>
                <a href='https://github.com/superio007' className='round'><i class="fa-brands fa-github fa-lg"></i></a>
                <a href='https://www.linkedin.com/in/kiran-dhoke/' className='round'><i class="fa-brands fa-linkedin-in fa-lg"></i></a>
                <a href='#' className='round'><i class="fa-brands fa-facebook-f fa-lg"></i></a>
            </div>
            <div id="Third">
                <a href="https://drive.google.com/file/d/1383gpu0PGF7uIPxSfDJW1Ag4VUanfECV/view" target="_blank" rel="noopener noreferrer">Downlad My Cv</a>
            </div>
        </div>
        {/* <hr /> */}
    </section>
    <Footer/>
    </>
  )
}

export default Home