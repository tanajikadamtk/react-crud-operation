import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StudentList = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://660e54346ddfa2943b3669dd.mockapi.io/student-data")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }
  const setToLocalStorage = (id,name,email)=>{
    localStorage.setItem("id",id)
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
  }

  useEffect(() => {
    getData();
  }, []); // Empty dependency array to only call once on component mount

  const handleDelete = (id) => {
    axios
      .delete(`https://660e54346ddfa2943b3669dd.mockapi.io/student-data/${id}`)
      .then(() => {
        // Optimistically update the data without refetching
        setData((prevData) => prevData.filter((student) => student.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting student", error);
      });
  };

  return (
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, email }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td className="d-flex gap-3">
                <Link to={`/editstudentdata`} onClick={()=> setToLocalStorage(id,name,email)}>Edit</Link>
                <button
                  onClick={(e) => {
                    e.preventDefault(); // Prevent the link from navigating
                    handleDelete(id);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
