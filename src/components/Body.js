import "./Body.css";
import ProfileCard from "./Card";
import { Tab, Table } from "react-bootstrap";
import StaticTable from "./staticTable";
import DynamicTable from "./DynamicTabel";
import { Frag } from "./Fragment";

const Body = () => {
  const registerUserData = [
    { firstName: "junaid", lastName: "khan", location: "mumbai", age: 26 },
    { firstName: "umed", lastName: "uddin", location: "mumbai", age: 28 },
    { firstName: "aamer", lastName: "khan", location: "chennai", age: 30 },
    {
      firstName: "khizer",
      lastName: "mohammad",
      location: "hyderabad",
      age: 35,
    },
    { firstName: "uzer", lastName: "uddin", location: "kolkata", age: 18 },
    { firstName: "hanzala", lastName: "shaikh", location: "pune", age: 25 },
    { firstName: "faheen", lastName: "khan", location: "chennai", age: 28 },
    {
      firstName: "khizer",
      lastName: "mohammad",
      location: "hyderabad",
      age: 35,
    },
    { firstName: "uzer", lastName: "uddin", location: "kolkata", age: 18 },
    { firstName: "hanzala", lastName: "shaikh", location: "pune", age: 25 },
    { firstName: "faheen", lastName: "khan", location: "chennai", age: 28 },
  ];

  const unRagisterUserData = [
    { firstName: "mohammad", lastName: "khan", location: "mumbai", age: 26 },
    { firstName: "uzer", lastName: "uddin", location: "mumbai", age: 28 },
    { firstName: "khizer", lastName: "khan", location: "chennai", age: 30 },
    {
      firstName: "khizer",
      lastName: "mohammad",
      location: "hyderabad",
      age: 35,
    },
    { firstName: "uzer", lastName: "uddin", location: "kolkata", age: 18 },
    { firstName: "hanzala", lastName: "shaikh", location: "pune", age: 25 },
    { firstName: "dawood", lastName: "khan", location: "chennai", age: 28 },
    {
      firstName: "khizer",
      lastName: "mohammad",
      location: "hyderabad",
      age: 35,
    },
    { firstName: "uzer", lastName: "uddin", location: "kolkata", age: 18 },
    { firstName: "hanzala", lastName: "shaikh", location: "pune", age: 25 },
    { firstName: "faheen", lastName: "khan", location: "chennai", age: 28 },
  ];

  return (
    <div >
      <div style={{ display: "flex" }}>
        <ProfileCard title="nike" des="this is nike shoes" />
        <ProfileCard des="this is puma shoes" />
        <ProfileCard title="adidas" />
      </div>

      <div style={{ margin: "80px" }}>
        <DynamicTable
          userData={registerUserData}
          heading="register user Data"
          color="blue"
        />
        <DynamicTable
          userData={unRagisterUserData}
          heading="unregister user Data"
          color="red"
        />
      </div>
      <div className="frag">
        <Frag />
      </div>
    </div>
  );
};

export default Body;
