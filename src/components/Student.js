import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { parse } from "url";

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
  /* height: 100vh; */
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

const StyledImg = styled.img`
  width: 50%;
`;
const StyledGoBack = styled.div`
  background-color: #00abff;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  /* height: 100vh; */
  width: 33.33vw;
`;

class Student extends React.Component {
  postStudentProject = {
    student_id: "",
    student_name: " ",
    major: " ",
    deadlines: { type: " ", date: " " }
  };

  state = {
    student: {}
  };

  componentDidMount() {
    this.findStudent();
    this.getProjects();
  }
  componentDidUpdate(prvProps) {
    if (
      prvProps.match.params.id != this.props.match.params.id ||
      prvProps.studentsList != this.props.studentsList
    )
      this.findStudent();
  }

  findStudent = () => {
    const student = this.props.studentsList.find(student => {
      return student.id === parseInt(this.props.match.params.id);
    });
    this.setState({ student });
  };

  getProjects = () => {
    axiosWithAuth()
        .get(
          `https://better-professor-backend.herokuapp.com/projects/students/${this.state.student.id}`
        )
        .then(res => {
          console.log("response from GET projects in Student.js", res);
          //there is no projectList state here. Do i create it here? or pull it from a state hook in App.js?
          this.setState(res.data)
        })
        .catch(error => {
          alert(error.message);
        });
  }

  addStudentProject = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(
        "https://better-professor-backend.herokuapp.com/users",
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
    console.log("props from student", this.props.studentsList);
    return (
      <StyledDiv>
        <StyledGoBack>
          <NavLink className="go-back" to="/protected">{`<`}</NavLink>
        </StyledGoBack>
        <ul>
          <StyledH2>
            You are currently viewing records
            <br />
            for student id number:{this.state.student && this.state.student.id}
          </StyledH2>
          <StyledImg src="https://img.pngio.com/registration-for-under-graduate-student-icon-png-free-student-icon-png-820_731.png"></StyledImg>
          <StyledH3>
            Student Name: {this.state.student && this.state.student.student}
          </StyledH3>
          <StyledH3>
            Student Major: {this.state.student && this.state.student.major}
          </StyledH3>
        </ul>
        <NavLink
          to="/protected/Student/MessagingForm"
          className="send-msg-button"
        >
          Send a Message
        </NavLink>
        <NavLink to="/protected/Student/AddProject" className="send-msg-button">
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
// // student_id: 1;
// export default Student;
