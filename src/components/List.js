import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const LI = styled.li`
&.on {
    color: tomato;
    text-decoration: line-through;
}
`

const List = ({ list, setList }) => {

    const onDelete = useCallback((id) => {
        const r = list.filter(it => it.id !== id);
        setList(r);
    }, [list])

    const onDone = useCallback((id) => {
        const r = list.map(it => (
            it.id === id ? it = { ...it, do: !it.do } : it
        ));
        setList(r);

    }, [list])
    return (
        <div>
            {
                list.map(it => {
                    return (
                        <LI key={it.id} className={it.do ? 'on' : ''}>
                            {it.content}
                            {it.age}
                            <button onClick={() => onDelete(it.id)}>remove</button>
                            <button onClick={() => onDone(it.id)}>done</button>
                        </LI>
                    )
                })
            }
            {
                console.log(list)
            }
        </div>
    )
}

export default List