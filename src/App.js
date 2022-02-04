import React from 'react';
import './App.css';

import live from "./img/live.svg"

function App () {
  return (
    <div className='component'>
      <div className="hero">
        <header>
          <nav>
            <div className="logo"><img alt="" src={require("./img/tynker-logo.png")} /></div>
            <div className="main-nav">
              <div>PLAY</div>
              <div>PARENTS</div>
              <div>EDUCATORS</div>
              <div>WHY CODE?</div>
            </div>
            <div className="ctas">
              <div className="join">JOIN FOR FREE</div>
              <div className="logIn">LOG IN</div>
            </div>
          </nav>
        </header>

        <div className="heroContent">
          <div className="heroText">
            <h1>Coding Made Easy</h1>
            <span>The fun way to learn programming and develop problem-solving &amp; critical thinking skills! Ages 5-18</span> <br/>
            <div className="orangeBtn" >GET STARTED FOR FREE</div> <br/>
            <span>At-home plans from <u>$9 per month</u> </span>
          </div>
          <div className="snowImage">
            <img alt="banner" src={require("./img/hero.png")} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="sideText">
          <h2>The #1 Coding Platform for Kids</h2>
          <p>Tynker powers the creativity of over <span className="blackText">60 million kids</span> and serves thousands of schools and educators worldwide.</p>
          <p>Our interactive story-based learning allows kids to learn the basics with easy block-based coding challenges before seamlessly transitioning to real-world <span className="blueText"> text-based languages</span> like <span className="blackText">JavaScript </span> and <sapn className="blackText">Python</sapn> .</p>
          <p>With 65+ award-winning courses, there’s a learning path for every kid, no matter their age or level. We have over 5,000 learning modules, backed by hundreds of built-in tutorials and hands-on projects.</p>
          <div className="orangeBtn" >GET STARTED FOR FREE</div> 
        </div>

        <div className="sideImage">
          <img alt="human face" src={require("./img/learning-path.png")} />
        </div>
      </div>

      <div className="column">
        <h2>Tynker has been busy. Good Busy. Check out what’s NEW!</h2>
        <div className="newFeature">

          <div className="feature">
            <div className="newLogo"><img alt="apcsa logo" src={require("./img/apcsa.png")}/></div>
            <div className="newFeatureText">
              <h3>AP Computer Science</h3>
              <span>2 New AP® CS courses endorsed by the College Board.</span>
              <p className="blueText">Learn More</p>
            </div>
          </div>
      
          <div className="feature">
            <div className="newLogo"><img alt="live class" src={live}/></div>
            <div className="newFeatureText">
              <h3>Live Classes</h3>
              <span>Live coding classes with a private teacher</span>
              <p className="blueText">Learn More</p>
            </div> 
          </div>

          <div className="feature">
            <div className="newLogo"><img alt="Byjus logo" src={require("./img/byjus.jpeg")}/></div>
            <div className="newFeatureText">
              <h3>Tynker + BYJU’S</h3>
              <span>Tynker has joined the BYJU’S family of brands.</span>
              <p className="blueText">Learn More</p>
            </div> 
          </div>

          

       
        </div>
      </div>

      <div className="wave">

        <div className="row">
          <div className="sideImage roundImage">
            <img alt="human face" src={require("./img/for-parents.png")} />
          </div>
          
          <div className="sideText">
            <h2>Parents</h2>
            <p>Coding is quickly becoming an essential skill, one that will prepare your kids to succeed in an increasingly digital world.</p>
            <p>Tynker offers a range of options to learn coding: Your children can learn to code with our self-paced, <span className="blueText">immersive game-like courses</span> , and then advance to learning real-world Python and JavaScript.</p>
            <p>Select the option that’s best for your child!</p>
            <div className="orangeBtn" >LEARN MORE</div> 
          </div>  
        </div>

        <div className="row">
          
          <div className="sideText">
            <h2>Educators</h2>
            <p>Join over 100,000 schools that use Tynker to engage students with coding and connect with other educators who love to code!</p>
            <p>Teaching coding with Tynker is as easy as 1-2-3. In just minutes, you can <span className="blueText">create a free account</span>, set up your virtual classroom, and assign ready-made lesson plans!</p>
            <p>Tynker empowers K-12 educators with free PD, standards-aligned curricula, cross-curricular STEM coding, AP Computer Science courses, and many great coding resources.</p>
            <div className="orangeBtn" >LEARN MORE</div> 
          </div>  

          <div className="sideImage roundImage">
            <img alt="human face" src={require("./img/for-teachers.png")} />
          </div>
        </div>
      </div>

      <div className="newApps">
        <div className="appHeader">
          <h2>3 Highly-Rated Mobile Apps for Learning Code</h2>
          <p>Download Tynker apps and learn to code on the go.</p>
          <div className="orangeBtn" >LEARN MORE</div> 
        </div>

        <div className="row">
          <div className="sideImage sideImageApps">
            <img alt="packages" src={require("./img/graphic-mobile.png")} />
          </div>
          
          <div className="appList">
            <div className="app">
              <div className="appLogo"><img alt="dummy image" src={require("./img/icon-junior.png")}/></div>
              <div className="appDetails">
                <h3>Tynker Junior</h3>
                <p>Tap-Tap picture coding with voice-overs. Pre-readers solve story-based puzzles and build their first programs in coding sandboxes. Ages 5-7</p>
                <div className="reviews">
                  <span>4.5</span>
                  <span>2,200+ reviews</span>
                </div>
              </div>
            </div>

            <div className="app">
              <div className="appLogo"><img alt="dummy image" src={require("./img/icon-app.png")}/></div>
              <div className="appDetails">
                <h3>Tynker</h3>
                <p>Drag-and-drop block coding with a full-featured workshop. Build games and apps, compose music and art, control smart devices, and much, much more. Ages 6-11</p>
                <div className="reviews">
                  <span>4.7</span>
                  <span>10,400+ reviews</span>
                </div>
              </div>
            </div>

            <div className="app">
              <div className="appLogo"><img alt="dummy image" src={require("./img/icon-mod.png")}/></div>
              <div className="appDetails">
                <h3>Mod Creator</h3>
                <p>Drag-and-drop Minecraft modding. Design skins, blocks and items. Modify mob behaviors. Create mods and add ons. Explore worlds! Ages 6-11</p> 
                <div className="reviews">
                  <span>4.0</span>
                  <span>3,300+ reviews</span>
                </div>
              </div>
            </div>

          </div> 
        </div>

    



      </div>

      <div className="column mini">
        <h2>A Mini-Computer for the Internet of Things!</h2>
        <div className="row">
          <div className="sideText">
            <p>The BBC Doctor Who HiFive Inventor is a visually stunning IoT-enabled hand-shaped mini-computer designed to teach kids how to control robots or interface with IoT systems to investigate the world around them.</p> 
            <p>Younger students will begin their learning journey with visual block coding and advanced students with Micropython.</p>
            <p>The HiFive Inventor was developed by Tynker in collaboration with BBC Learning and SiFive, a fabless RISC-V semiconductor company.</p>
            <p>Learn More:</p>
            <span className="blueText">www.HiFiveInventor.com</span>
          </div>
          <div className="sideImage"><img alt='mini computer' src={require("./img/graphic-bbc.png")}/></div>
        </div>
      </div>

      <div className="column story">
        <div className="storyText">
          <h2>Why Should Kids Learn to Code with Tynker?</h2>
          <p>Because <span className="blackText">technology is so integrated</span>  into virtually every aspect of our lives, learning about it is <span className="blackText">more important than ever</span> . For kids, our coding platform makes it convenient and fun to gain knowledge that will serve them well throughout their lives. You can count on our<span className="blackText"> trusted methods</span> to help them develop and grow their capabilities with computers.</p>
          <p>Tynker isn’t just for schools and coding camps, though. Parents who value <span className="blackText">STEM education</span>  and want their children to know how to learn to code should know that our kids programming platform can be used at home, too. There are individual and family home plans, and our online coding classes for kids are a great way for them to gain the supplemental STEM skills needed for the world of the future.</p>
        </div>

        <div className="storyCards">
          <div className="storyCard">
            <h3 className="blueText">CODING BENEFITS</h3>
            <span>&gt; Top 10 Reasons to Code</span>
            <span>&gt; Kids Coding Basics</span>
            <span>&gt; Develop 21st Century Skills</span>
            <span>&gt; Download eBooks on Coding</span>
          </div>

          <div className="storyCard">
            <h3 className="blueText">CODING GUIDES</h3>
            <span>&gt; What is Coding for Kids</span>
            <span>&gt; Coding with Minecraft</span>
            <span>&gt; Coding with Electronic Kits</span>
            <span>&gt; Coding with Connected Toys</span>
            <span>&gt; More Coding Resources</span>
          </div>

          <div className="storyCard">
            <h3 className="blueText">TYNKER HIGHLIGHTS</h3>
            <span>&gt; What’s New in Tynker?</span>
            <span>&gt; COVID-19 Impact report</span>
            <span>&gt; Meet our Featured Makers</span>
            <span>&gt; Seasonal Coding Projects</span>
            <span>&gt; Celebrating Women in STEM</span>
          </div>

          <div className="storyCard">
            <h3 className="blueText">CODING IN SCHOOLS</h3>
            <span>&gt;  K-12 School Plans</span>
            <span>&gt; AP Computer Science Principles</span>
            <span>&gt; AP Computer Science A</span>
            <span>&gt; Remote Learning</span>
            <span>&gt; K-12 Success Stories</span>
          </div>
        </div>

        <div className="storyText">
          <h2 className="blackText">Trusted by Leading Brands</h2>
          <p>Our methods for learning to code all are provided within a safe, moderated community that is built around encouraging students to gain confidence in their abilities and do so without fear of failure.</p>
        </div>

        <div className="brands"> 
          <div><img alt="brand logo" src={require("./img/apple.png")} /></div>
          <div><img alt="brand logo" src={require("./img/google.png")} /></div>
          <div><img alt="brand logo" src={require("./img/microsoft.png")} /></div>
          <div><img alt="brand logo" src={require("./img/pbs.png")} /></div>
          <div><img alt="brand logo" src={require("./img/bbc.png")} /></div>
          <div><img alt="brand logo" src={require("./img/facebook.png")} /></div>
          <div><img alt="brand logo" src={require("./img/lego.png")} /></div>
          <div><img alt="brand logo" src={require("./img/minecraft.png")} /></div>
          <div><img alt="brand logo" src={require("./img/mattel.png")} /></div>
          <div><img alt="brand logo" src={require("./img/hotwheels.png")} /></div>
          <div><img alt="brand logo" src={require("./img/barbie.png")} /></div>
        </div>
      </div>

      {/* <div className=" column world">
        <h2>Join Tynker's Global Community</h2>
        <div className="orangeBtn">SIGN UP FREE</div>

        <div className="circle">
          <h2 className="goldText">60 Million</h2>
          <sapn>students</sapn>
        </div>

      </div> */}

      <div className="cards">
        <div className="card">
          <p>I thought a game was going to be extremely hard to make, but Tynker made it really easy.</p>
          <div className="bio">
            <div className="bioText">
              <h4>Tynker Featured Maker</h4>
            </div>
            <div className="headshot"><img alt='profile pic' src={require('./img/student.png')} /></div>
          </div>
        </div>

        <div className="card">
          <p>There's so much opportunity once they understand how coding works. It's amazing to see them create incredible things themselves.</p>
          <div className="bio">
            <div className="bioText">
              <h4>Charlotte R.</h4>
              <span>Parent | Melbourne, Australia</span>
            </div>
            <div className="headshot"><img alt='profile pic' src={require('./img/teacher.png')} /></div>
          </div>
        </div>

        <div className="card">
          <p>Tynker has made programming fun, exciting, and simple and will help lead kids into their future.</p>
          <div className="bio">
            <div className="bioText">
              <h4>Valerie S.</h4>
              <span>5th Grade Teacher | California, US</span>
            </div>
            <div className="headshot"><img alt='profile pic' src={require('./img/parent.png')} /></div>
          </div>
        </div>

      </div>

      <div className="awards"> 
        <div><img alt="award" src={require("./img/common-sense.png")} /></div>
        <div><img alt="award" src={require("./img/aasl.png")} /></div>
        <div><img alt="award" src={require("./img/award-smart-media.png")} /></div>
        <div><img alt="award" src={require("./img/award-parents-choice.png")} /></div>
        <div><img alt="award" src={require("./img/award-twillywig.png")} /></div>
        <div><img alt="award" src={require("./img/award-national-parenting.png")} /></div>
        <div><img alt="award" src={require("./img/award-moms-choice.png")} /></div>
        <div><img alt="award" src={require("./img/digital-education.png")} /></div>
        <div><img alt="award" src={require("./img/award-parents-picks.png")} /></div>
      </div>

      <footer>
        <div className="links">
          <p><h3>ABOUT</h3></p>
          <p className="aboutText">Tynker is the world’s leading K-12 creative coding platform, enabling students of all ages to learn to code at home, school, and on the go. Tynker’s highly successful coding curriculum has been used by one in three U.S. K-8 schools, 100,000 schools globally, and over 60 million kids across 150 countries.</p>
        </div>

        <div className='links'>
          <p><h3> RESOURCES</h3></p>
          <p>Blog</p>
          <p>About Us</p>
          <p>Press</p>
          <p>Jobs</p>
          <p>Mobile Apps</p>
          <p>Coding eBooks</p>
          <p>Scholarship</p>
          <p>Forum</p>
          <p>Store</p>
          <p>CS Authors</p>
        </div>

        <div className='links'>
          <p><h3> PARENTS</h3></p>
          <p>Overview</p>
          <p>Live Coding Classes</p>
          <p>Give a Gift</p>
          <p>Redeem</p>
          <p>Why Coding</p>
          <p>Featured Makers</p>
        </div>

        <div className='links'>
          <p><h3> EDUCATORS</h3></p>
          <p>Overview</p>
          <p>Elementary</p>
          <p>Middle School</p>
          <p>High School</p>
          <p>AP CS Courses</p>
          <p>PD</p>
          <p>Hour of Code</p>
          <p>STEM Projects</p>
          <p>Request a Quote</p>
        </div>

        <div className='links'>
          <p><h3> PARENT NEWSLETTER</h3></p>
  
        </div>







      </footer>

      {/* <div classNames="sticky">
        <div className="tutor"><img alt="nvbf" src={require("./img/tutor.png")}/></div>
        <h3>Live coding classes with a private teacher</h3>
        <button>SCHEDULE A FREE CLASS</button>
      </div> */}
      


 
    </div>
  );
};

export default App;
