import React from "react";
const ExperiencePage = () => {
  return (
    <main className="container mt-4 mb-5">
      <center>
        <h1>My Experience</h1>
        <div className="row align-items-center mt-3 boarder-solid">
          <div className="col-md-5 col-sm-12 col-xs-12 ">
            <a href="img/plankcooking.png">
              <img
                src="img/plankcooking.png"
                alt="home screen on plancooking.com"
                width="400px"
                className="mb-3 img-boarder-solid"
              ></img>
            </a>
          </div>
          <p>
            Hello, for this page I will be showing and explaining key concepts I
            have mastery and understanding of. This wont be a full resume run
            down but a taster for the backbone of my understandings and time at
            Spokane Community College.
          </p>
          <p>
            In the picture above, you will see a home screen for{" "}
            <a
              href="https://www.plankcooking.com"
              target="_blank"
              rel="noreferrer"
            >
              <strong>plankcooking</strong>
            </a>
            . I was tasked with creating this website with responsive design in
            my first few quarters. Thus my understanding of working on a mobile
            design as a best practice was cemented.
          </p>
        </div>{" "}
        <div className="boarder-solid row">
          <div className="col-12">
            <a href="img/shop.png">
              <img
                src="img/shop.png"
                alt="Plankcooking shop"
                width="400px"
                className="img-boarder-solid"
              ></img>
            </a>
          </div>
          <div className="col-12">
            <p>
              This website could be considered an e-commerce website. It had a
              shop, billing information, and payment processing (which is the
              only thing for this website we didnt learn).
            </p>
          </div>
        </div>
        <div className="boarder-solid row">
          <div className="col-12">
            <p>
              <a href="img/mapping_database_items.png">
                <img
                  src="img/mapping_database_items.png"
                  alt="Mining ethereum button"
                  width="400px"
                  className="img-boarder-solid"
                ></img>
              </a>
            </p>
          </div>
          <div className="col-12">
            <p>
              After the first couple quarters we shifted our attention to
              backend where I personally find the most joy. This image shows us
              mapping items from a data base instead of statically asking for
              each image and description as well as item id wich ties into the
              ability to add an item to the cart.
            </p>
            <p>
              To do this I joined the table holding the item information to the
              cart associated with the session id. On button click, it would
              take the value entered in the quantity box and add the item to the
              cart associated with the session id currently being utilized by
              the user to differentiate between other users also creating a
              cart. This results in a totally unique cart for every customer. No
              sign up or sign in necessary.
            </p>
            <a href="img/shopping_cart.png">
              <img
                src="img/shopping_cart.png"
                alt="Plankcooking shop"
                width="400px"
                className="mb-3 img-boarder-solid"
              ></img>
            </a>
            <p>
              The above is what a shopping cart looks like. Dont worry, its
              mobile all the way down to 320px width.
            </p>
          </div>
        </div>{" "}
        <div className="boarder-solid row">
          <div className="col-12">
            {" "}
            <p>
              The following pictures are just the proccess of checking out your
              cart full of items.
            </p>
            <a href="img/billing_page.png">
              <img
                src="img/billing_page.png"
                alt="billing page"
                width="400px"
                className="mb-3 img-boarder-solid"
              ></img>
            </a>
          </div>
          <div className="col-12">
            <a href="img/last_checkout_page.png">
              <img
                src="img/last_checkout_page.png"
                alt="Plankcooking shop"
                width="400px"
                className="mb-3 img-boarder-solid"
              ></img>
            </a>
            <p>
              I was tasked with creating the same functinality (CRUD) in both
              laravel and React/Node.js. I love both but I find I work faster
              with laravel. I am more intrested in react and node though.
            </p>
          </div>
        </div>{" "}
      </center>
    </main>
  );
};
export default ExperiencePage;
