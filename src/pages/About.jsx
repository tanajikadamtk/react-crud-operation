import { laptop } from "../comman/constant/assets";
function About() {
  return (
    <div className="container">
      <div className="my-50">
        <h1 className="page-heading">About</h1>
      </div>
      <div className="row mb-50">
        <div className="col-md-6">
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae laborum excepturi maiores praesentium, ab natus eligendi
            delectus iste unde nihil dolore corrupti ipsam assumenda aspernatur
            blanditiis nostrum aliquid itaque amet soluta odio iusto! Blanditiis
            obcaecati maiores delectus magnam dicta at odit, ullam pariatur,
            corrupti officia qui incidunt temporibus, asperiores suscipit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae laborum excepturi maiores praesentium, ab natus eligendi
            delectus iste unde nihil dolore corrupti ipsam assumenda aspernatur
            blanditiis nostrum aliquid itaque amet soluta odio iusto! Blanditiis
            obcaecati maiores delectus magnam dicta at odit, ullam pariatur,
            corrupti officia qui incidunt temporibus, asperiores suscipit.
          </p>
        </div>
        <div className="col-md-6">
          <img src={laptop} alt="laptop" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
}

export default About;
