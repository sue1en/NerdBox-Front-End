import React, { useCallback, useEffect } from 'react';
import { getServiceAllBoxes } from '../services/boxes.service';

const Boxes = () => {

    const [boxes, setBoxes] = React.useState([]);

    const getBoxes = useCallback(
        async () => {
            const res = await getServiceAllBoxes();
            setBoxes(res.data);
        }
    );

    useEffect(()=>{
        setBoxes();
    },[]
    );

    return(
        <div>
            <h1>Boxes</h1>
            <ul>
                {boxes.map(item =>(
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Boxes;