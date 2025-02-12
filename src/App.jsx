import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

// Page Components
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Blog from "./pages/Blog";
import Student from "./pages/Student";
import StudentForm from "./pages/StudentForm";
import StudentList from "./pages/StudentList";
import EditStudentData from "./pages/EditStudentData";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/student" element={<Student />} />
          {/* <Route path="/student" element={<Student />}>
            <Route path="/studentform" element={<StudentForm />} />
            <Route path="/studentlist" element={<StudentList />} />
          </Route> */}
          <Route path="/studentform" element={<StudentForm />} />
          <Route path="/studentlist" element={<StudentList />} />
          <Route path="/editstudentdata" element={<EditStudentData />} />
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
