import { Table } from "react-bootstrap";
const DynamicTable = ({ userData, heading, color = "black" }) => {
  return (
    <div>
      <h1>{heading}</h1>
      <Table style={{ color: color }}>
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
          {userData.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.firstName}</td>
                <td>{value.lastName}</td>
                <td>{value.location}</td>
                <td>{value.age}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default DynamicTable;
