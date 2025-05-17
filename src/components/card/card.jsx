import {CardWrapper} from "./card.styles";
import { useDraggable } from "@dnd-kit/core";

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
            <p> Applied at {candidate.appliedDate}</p>
            <p> {candidate.score} Overall </p>
            {candidate.referred && <p style={{color: 'blue'}}> Referred</p> }
        </CardWrapper>
    );
};
export default Card;