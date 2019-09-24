import React, {useState} from "react";
import {NavLink} from "react-router-dom"

const StudentList = () => {

    const [studentsList, setStudentsList] = useState([]);
    // Get request(useEffect) needs to happen here, where we recieve student info
    // shape of Student: id, studentName, studentMajor, studentDeadlines
    // shape of Professor: userName, lastName

    return (<>
        <div>Hello Professor
             {/* {professor.lastName}  */}
             </div>
        {/* <ul>
            {studentsList.map((student) => {
                <NavLink to="/Student/:id">
                {student.studentName}
                </NavLink>
            })}
        </ul>

        <Student 
        student={student}
         /> */}
   </> )
}

export default StudentList;