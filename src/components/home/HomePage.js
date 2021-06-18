import { React } from "react";
import { NavLink } from "react-router-dom";
function HomeCard(props) {
  return (
    <div className=" pb-3 mt-3 boarder-solid">
      <h2>{props.header}</h2>
      <br />
      <p className="responsive-text">{props.mainContent}</p>
      <NavLink
        to={{
          pathname: "/" + props.toPage,
        }}
      >
        <button type="button" class="btn btn-primary">
          Go to {props.toPage}
        </button>
      </NavLink>
    </div>
  );
}

const HomePage = () => {
  return (
    <body className="container mt-3 ">
      <center>
        <h1 className="mb-3">Welcome to Nick's React App</h1>
        <div className="mt-3 pb-3">
          <div className=" pb-3 mt-3 boarder-solid">
            <h2>Home</h2>
            <br />
            <p className="responsive-text">
              Your currently on the homepage. Below is a list of options for
              pages or intrests that might suit you.
            </p>
          </div>
          <HomeCard
            header="Intrested in learning more about me?"
            mainContent="By navigating to the About page, you will be introduced to my smiling face and intrests."
            toPage="about"
          />
          <HomeCard
            header="Trying to get ahold of me?"
            mainContent="The Contact page will have a form and some contact information for you to get in touch with me."
            toPage="contact"
          />
          <HomeCard
            header="Intrested in my past works?"
            mainContent="The Past Works page will have a few pictures and explanations of projects I have created."
            toPage="experience"
          />
        </div>
      </center>
    </body>
  );
};
export default HomePage;
