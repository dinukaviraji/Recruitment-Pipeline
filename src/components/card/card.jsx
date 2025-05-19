import {CardWrapper, Assesment, Bottom, ImageFrame, DefaultCircle} from "./card.styles";
import { useDraggable } from "@dnd-kit/core";
import star from "../../assets/star.png";
import { useMemo } from "react";


const Card = ({candidate }) => {

    const { attributes, listeners, setNodeRef } = useDraggable({
    id: candidate.id,
    data: {
      candidate,
    },
    });

    const randomColor = useMemo(() => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
      }, []);

    const initial = candidate.name.charAt(0).toUpperCase();

    return (
        <CardWrapper ref={setNodeRef} {...listeners} {...attributes}>
            <div style={{display: "flex", gap: '3px'}}>
                {candidate.imageUrl ? (<ImageFrame src={candidate.imageUrl}></ImageFrame>)
                : (<DefaultCircle style={{backgroundColor: randomColor}}> {initial}</DefaultCircle>)}
            
            <div>
            <h4 style={{margin:'5px'}}> {candidate.name}</h4>
            <div style={{display: "flex", gap: '5px'}}> <p style={{color: "gray", margin:'0'}}> Applied at </p> <p style={{margin:'0'}}> {candidate.appliedDate}</p> </div>
            </div>
            </div>
            <hr/>
            <Bottom>
            <Assesment> <img src={star} alt="star" width={15}/> {candidate.score} Overall </Assesment>
            {candidate.referred && <label style={{color: '#0096FF', fontSize:'13px', backgroundColor:'#F0FFFF', padding:'0 4px'}}> Referred</label> }
           
            </Bottom>
        </CardWrapper>
    );
};
export default Card;