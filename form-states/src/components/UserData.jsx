import { useNavigate } from "react-router-dom";

const UserData = ({users}) => {
    const navigate = useNavigate();
    return(
        <div className="user-data">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>College-Name</th>
                        <th>View-More</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{users.name}</td>
                        <td>{users.age}</td>
                        <td>{users.email}</td>
                        <td>{users.password}</td>
                        <td>{users.college}</td>
                        <td><button onClick={() => navigate(`/users/${users.id}`)}>View More</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default UserData;