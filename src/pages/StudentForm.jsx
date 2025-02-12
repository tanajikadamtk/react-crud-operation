import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        "https://660e54346ddfa2943b3669dd.mockapi.io/student-data",
        { name, email },
        {
          headers: {
            "Access-Control-Allow-Origin": "*", // Add header here
          },
        }
      )
      .then((response) => {
        console.log("Data submitted successfully:", response.data);
        alert("Data submitted successfully!");
        navigate("/studentlist"); // Redirect after success
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
        alert("Error submitting data. Please try again.");
      });
  };

  return (
    <>
      <div className="container my-50">
        <h2 className="my-50">Create a New Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="studentName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="studentName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="studentEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="studentEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default StudentForm;
