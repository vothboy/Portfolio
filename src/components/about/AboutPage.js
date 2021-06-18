import React from "react";

const AboutPage = () => {
  return (
    <main className="container mt-4 mb-5">
      <center>
        <h1>Nickolus Aaron Voth</h1>
        <div className="row align-items-center mt-3 boarder-solid">
          <div className="col-md-5 col-sm-12 col-xs-12 ">
            <img
              src="img/me.jpg"
              alt="Nickolus Aaron Voth"
              width="310px"
              className="aboutProfilePic img-boarder-solid"
            ></img>
          </div>

          <p>
            Hello, my coding journey began in high-school. I had a photography
            class and would study code in my free time there to create an
            alternative format to the final which would be a portfolio for my
            pictures
          </p>
          <p>
            I showed my teacher and he loved it. That moment sparked a pride I
            soon become addicted to. After that, I decided to learn more about
            javascript as my first starter language at khan academy. I learned
            how to do some cool animations before deciding to go to college for
            an additional professional education.
          </p>
          <p>
            Since then, I have completed my Associate in Applied Science -
            Software Development with 5 out of 6 quarters being awarded with
            honer roll. Now I am looking for an oppertunity to get real
            experience learning new tech stacks and implementing new
            methodologies I havent learned yet.
          </p>
        </div>{" "}
        <div className="boarder-solid row">
          <div className="col-12 ">
            <img
              src="img/samarai.jpg"
              alt="Flashy samarai"
              width="350px"
              className="mb-3 img-boarder-solid"
            ></img>
            <p>
              Some hobbies I enjoy include playing video games, crypto mining,
              and learning new code.
            </p>
            <p>
              My favorite game to play is Apex Legends currently. Other games I
              enjoy share similarities with Overwatch, League of Legends, or
              virtually any zombie game. Oh also Clash of Clans.
            </p>
            <p>
              I like to think I am pretty good at it but between you and me, my
              friends carry me all the time.
            </p>
          </div>
        </div>
        <div className="boarder-solid row">
          <div className="col-12">
            <p>
              <img
                src="img/tech.jpg"
                alt="Binary numbers"
                width="350px"
                className="img-boarder-solid"
              ></img>
            </p>
          </div>
          <div className="col-12">
            <p>
              As you well know by now, I am a software developer that
              specializes with the web. I am proficient with a number of tech
              stacks and methodologies but crave experience that college doesnt
              provide.
            </p>

            <p>
              I have a blog where I make it easy to see what I am up to at my
              other website by clicking right{" "}
              <a
                href="https://www.nickolusvoth.com"
                target="_blank"
                rel="noreferrer"
              >
                <strong>here</strong>
              </a>
              .
            </p>

            <p>
              I am trying to make a living from coding and have dedicated years
              of my life to the craft. When you hire me, you hire my passion, my
              work ethic, and my unyielding focus to assist and lead development
              for a wide array of applicable areas.
            </p>
          </div>
        </div>
        <div className="boarder-solid row">
          <div className="col-12">
            <p>
              <img
                src="img/mining-ethereum.jpg"
                alt="Mining ethereum button"
                width="350px"
                className="img-boarder-solid"
              ></img>
            </p>
          </div>
          <div className="col-12">
            <p>
              My favorit crypto currencies are listed from importance to least
              importance.
            </p>
            <ol
              style={{
                width: "30%",
                textAlign: "center",
              }}
            >
              <li>Ethereum</li>
              <li>Dodge</li>
              <li>Raven</li>
            </ol>

            <p>
              Its super fun to mine becasue its passive income and its almost
              like a digital way of watching grass grow.
            </p>
          </div>
        </div>{" "}
      </center>
    </main>
  );
};
export default AboutPage;
