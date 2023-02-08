import {Table} from "react-bootstrap"

const StaticTable = ({userData}) => {
  return (
    <div>
      <h1>static table</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>location</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{userData[0].firstName}</td>
            <td>{userData[0].lastName}</td>
            <td>{userData[0].location}</td>
            <td>{userData[0].age}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{userData[1].firstName}</td>
            <td>{userData[1].lastName}</td>
            <td>{userData[1].location}</td>
            <td>{userData[1].age}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{userData[2].firstName}</td>
            <td>{userData[2].lastName}</td>
            <td>{userData[2].location}</td>
            <td>{userData[2].age}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{userData[3].firstName}</td>
            <td>{userData[3].lastName}</td>
            <td>{userData[3].location}</td>
            <td>{userData[3].age}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default StaticTable
