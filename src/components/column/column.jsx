import Card from "../card/card";
import { useDroppable } from "@dnd-kit/core";
import { ColumnWrapper, Title } from "./column.styles";

const Column = ({ id, title, candidates }) => {
      const { setNodeRef } = useDroppable({ id });

        return (
            <ColumnWrapper ref={setNodeRef} >
            <Title title={title}> {title}</Title>
            {candidates.map((candidate) => (
                <Card key={candidate.id} candidate={candidate} />
            ))}
            </ColumnWrapper>
        );

};
export default Column;