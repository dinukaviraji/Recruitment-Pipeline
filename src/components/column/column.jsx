import Card from "../card/card";
import { useDroppable } from "@dnd-kit/core";

const Column = ({ id, title, candidates }) => {
      const { setNodeRef } = useDroppable({ id });

        return (
            <div ref={setNodeRef} style={{ width: '300px', padding: '10px', border: '1px solid black' }}>
            <h2>{title}</h2>
            {candidates.map((candidate) => (
                <Card key={candidate.id} candidate={candidate} />
            ))}
            </div>
        );

};
export default Column;