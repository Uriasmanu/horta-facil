import { useState } from "react";


const useDragDrop = (onDrop) => {
    const [dragging, setDragging] = useState(false);

    const handleDragOver = (event) => {
        event.preventDefault();
        setDragging(true);
    }

    const handleDragLeave = () =>{
        setDragging(false);
    }

    const handleDrop = (event) =>{
        event.preventDefault();
        setDragging(false);

        const data = event.dataTransfer.getData('text/plain');
        onDrop(data);
    }

    return{
        dragging,
        handleDragOver,
        handleDragLeave,
        handleDrop
    }
}

export default useDragDrop;

