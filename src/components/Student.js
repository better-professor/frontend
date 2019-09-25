import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const initialStudent = {
  student_id: 1,
  student_name: "James Jimmerson",
  major: "Geology",
  deadlines: { type: "Project", date: "24/09/2019" }
};

const postStudentProject = {
  user_id: "",
  student_name: " ",
  major: " ",
  deadlines: [{ type: " " }, { date: " " }]
};

const StyledDiv = styled.div`
  background-color: #00abff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 33.33vw;
`;

const StyledH2 = styled.h2`
  color: white;
  font-size: 1.3em;
  margin: 0;
`;
const StyledH3 = styled.h1`
  color: white;
  font-size: 1em;
`;

class Student extends React.Component {
  postStudentProject = {
    student_id: "",
    student_name: " ",
    major: " ",
    deadlines: { type: " ", date: " " }
  };

  addStudentProject = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(
        "https://better-professor-backend.herokuapp.com/users/students",
        this.postStudentProject
      )
      .then(res => {
        console.log("response from server", res);
        //localStorage.setItem('token', res.data.token);
        //this.props.history.push('/protected');
      })
      .catch(err => alert(err.message));
  };

  handleChange = e => {
    this.setState({
      postStudentProject: {
        ...this.postStudentProject,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <StyledDiv>
        <ul>
          <StyledH2>
            You are currently viewing records
            <br />
            for student id number:{initialStudent.student_id}
          </StyledH2>
          <StyledH3>Student Name: {initialStudent.student_name}</StyledH3>
          <StyledH3>Student Major: {initialStudent.major}</StyledH3>
          <StyledH3> Deadline Type: {initialStudent.deadlines.type}</StyledH3>
          <StyledH3> Student Deadline Date: {initialStudent.deadlines.date}</StyledH3>
        </ul>
        <NavLink
          to="/protected/Student/MessagingForm"
          className="send-msg-button"
        >
          Send a Message
        </NavLink>
        <NavLink
          to="/protected/Student/AddProject"
          className="send-msg-button"
        >
          Add a new Project
        </NavLink>
      </StyledDiv>
    );
  }
}

export default Student;

// const Student = props => {
//   const { student } = props;
//   console.log("props from students", student);
//   const [studentProjects, setStudentProjects] = useState([]);
//   // fetch our deadlines data from the server when the component mounts
//   // set that data to the deadlineList state property

//   // useEffect(() => {
//   //   getStudentProjects();
//   // }, [])

//   // const getStudentProjects = () => {
//   //   axiosWithAuth()
//   //     .get(`http://localhost:5000/api/colors/${student.user_id}`)
//   //     .then(res => {
//   //       console.log("get projects response", res);
//   //       setStudentProjects(res.data);
//   //     })
//   //     .catch(err => console.log(err.res));
//   // };

//   addStudentProject = e => {
//     e.preventDefault();
//     axiosWithAuth()
//       .post(
//         "https://better-professor-backend.herokuapp.com/projects",
//         this.postStudentProject
//       )
//       .then(res => {
//         setStudentProjects(res.data);
//         console.log(res.data);
//       })
//       .catch(error => {
//         alert(error.message);
//       });
//   };

//   handleChange = e => {
//     this.setState({
//       credentials: {
//         ...this.postStudentProject,
//         [e.target.name]: e.target.value
//       }
//     });
//   };

//   return (
//     <ul>
//       <h1>Hello from student</h1>
//       <h2>{initialStudent.student_name}</h2>
//       <h1>{initialStudent.major}</h1>
//       {initialStudent.Deadlines.map((deadline, index) => {
//         return (
//           <>
//             <h1>{deadline.type}</h1>
//             <h1>{deadline.date}</h1>
//           </>
//         );
//       })}
//       <form onSubmit={this.addStudentProject}>
//         <input
//           type="text"
//           name="project_name"
//           value={setStudentProjects.project_name}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="deadline"
//           value={postStudentProject.deadlines.type}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="deadline_type"
//           value={postStudentProject.deadlines.date}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="description"
//           value={setStudentProjects.description}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="student_id"
//           value={setStudentProjects.student_id}
//           onChange={this.handleChange}
//         />
//         <button>Add project</button>
//       </form>
//       <NavLink to="/protected/Student/MessagingForm" className="send-button">
//         Send Message
//       </NavLink>
//       {/* <MessagingForm studentName={student.name} /> */}
//     </ul>
//   );
// };
// // **EXAMPLE PROJECT**
// // project_name: 'Wild Goose Chase',
// // deadline: '12/12/2019',
// // deadline_type: 'Letter of reccomendation',
// // description: 'Futilely pursue something that will never be attainable',
// // student_id: 1
// export default Student;
