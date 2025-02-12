import { shooes, amazon, flipkart } from "../comman/constant/assets";
function Home() {
  return (
    <>
      <div className="container navbar">
        <div className=" mt-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className="heading1">YOUR FEET DESERVE THE BEST</h1>
              <p className="home-para mt-5 mb-4">
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
                OUR SHOES.
              </p>
              <img src={shooes} alt="shooes" className="img-fluid visible-xs" />
              <div>
                <p className="mt-4 mb-2">Also Available on</p>
                <div className="d-flex gap-3">
                  <img src={flipkart} alt="" />
                  <img src={amazon} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={shooes} alt="shooes" className="img-fluid hidden-xs" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
