import React from "react";

const Userslist = ({ users,selectUsers }) => {
  return (
    <ul className="container--users">
      
      { users.map(user => (
        <li className="container--date" key={user.id}>
<div className="users">
          <h3> &nbsp; {user.first_name}</h3>
          <div>
            <b>last_name:</b> &nbsp; {user.last_name}
          </div>
          <div>
            <b>Email:</b> {user.email}
          </div>
          <div>
            <b>Birthday:</b> {user.birthday}
          </div>
</div>
          <div className="icon--container">
            {" "}
            <i  className="bx bx-trash bx-sm"  ></i> <i onClick={ () => selectUsers(user)} className="bx bx-edit-alt bx-sm"></i>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Userslist;
