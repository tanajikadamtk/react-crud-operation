import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditStudentData = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    // Retrieve values from localStorage and set state
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Ensure that the ID exists before submitting the request
    if (!id || !name || !email) {
      console.error("Missing student data");
      return;
    }
    axios
      .put(`https://660e54346ddfa2943b3669dd.mockapi.io/student-data/${id}`, {
        name,
        email,
      })
      .then((response) => {
        console.log("Data submitted successfully:", response.data);
        navigate("/studentlist"); // Redirect after success
      })
      .catch((error) => {
        console.error("There was an error updating the student data:", error);
      });
  };

  return (
    <div className="container my-50">
      <h2 className="my-50">Edit Student Data</h2>
      <form onSubmit={handleUpdate}>
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
          Update
        </button>
      </form>
    </div>
  );
};

export default EditStudentData;
