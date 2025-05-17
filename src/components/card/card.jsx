import Card from "./card.styles";

const Card = ({candidate }) => {
    return (
        <Card>
            <p> {candidate.name}</p>
            <p> Applied at {candidate.appliedDate}</p>
            <p> {candidate.score} Overall </p>
            {candidate.referred && <p style={{color: 'blue'}}> Referred</p> }
        </Card>
    );
};
export default Card;