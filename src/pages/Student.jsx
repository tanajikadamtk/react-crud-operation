import { Link } from "react-router-dom";
import { collegeStudent } from "../comman/constant/assets";

const Student = () => {
  return (
    <>
    <div className="container my-50">
      <div className="student">
        <h1 className="mb-5">Student Information</h1>
        <div className="row">
          <div className="col-md-6">
            <h3>Student Strength</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus voluptatibus modi dolor fuga rerum, quam omnis id
              quo veritatis ipsam labore aut consectetur repellat maiores est
              obcaecati voluptatem ducimus velit.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus voluptatibus modi dolor fuga rerum, quam omnis id
              quo veritatis ipsam labore aut consectetur repellat maiores est
              obcaecati voluptatem ducimus velit.
            </p>
            {/* Use Link to navigate to /student/create */}
            <Link to="/studentform" className="btn btn-primary">
              Enroll Now
            </Link>

          </div>
          <div className="col-md-6">
            <img src={collegeStudent} alt="College Student" />
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Student;
