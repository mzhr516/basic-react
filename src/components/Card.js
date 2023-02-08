import { Card, Button } from "react-bootstrap";

function ProfileCard({ title="shoes", des="this is high quality shoes" }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{des}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;


// ProfileCard.defaultProps={
//   title:"",
//   des:""
// }

