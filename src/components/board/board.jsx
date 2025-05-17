import {useState} from 'react';
import {DndContext, useSensor, useSensors, PointerSensor} from '@dnd-kit/core';
import {candidates} from '../../data/candidates';
import Column from '../column/column';
import {BoardWrapper} from './board.styles';

const Board = () => {
    const [columns, setColumns] = useState(candidates);

    const sensors = useSensors(useSensor(PointerSensor));

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        const activeId = active.id;
        const sourceColumnId = Object.keys(columns).find((colId) =>
        columns[colId].some((c) => c.id === activeId)
        );
        const destinationColumnId = over.id;

        if (sourceColumnId && destinationColumnId && sourceColumnId !== destinationColumnId) {
        const draggedCard = columns[sourceColumnId].find((c) => c.id === activeId);

        setColumns((prev) => {
            const newCols = { ...prev };
            newCols[sourceColumnId] = newCols[sourceColumnId].filter((c) => c.id !== activeId);
            newCols[destinationColumnId] = [...newCols[destinationColumnId], draggedCard];
            return newCols;
        });
        }
        console.log(columns)
    };

    return (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
            <BoardWrapper>
                {Object.entries(columns).map(([stage, candidates]) => (
                <Column 
                key={stage} 
                id={stage} 
                title={stage} 
                candidates={candidates} />
                ))}
                
            </BoardWrapper>
        
        </DndContext>
    );
};

export default Board;