import {CardWrapper, Assesment, Bottom} from "./card.styles";
import { useDraggable } from "@dnd-kit/core";
import star from "../../assets/star.png";

const Card = ({candidate }) => {

    const { attributes, listeners, setNodeRef } = useDraggable({
    id: candidate.id,
    data: {
      candidate,
    },
    });

    return (
        <CardWrapper ref={setNodeRef} {...listeners} {...attributes}>
            <p> {candidate.name}</p>
            <div style={{display: "flex", gap: "5px"}}>
            <p style={{color: "gray"}}> Applied at </p> <p> {candidate.appliedDate}</p> </div>
            <hr/>
            <Bottom>
            <Assesment> <img src={star} alt="star" width={15}/> {candidate.score} Overall </Assesment>
            {candidate.referred && <p style={{color: 'blue'}}> Referred</p> }
            </Bottom>
        </CardWrapper>
    );
};
export default Card;