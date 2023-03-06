import { useCallback, useRef, useState } from "react";

const Write = ({ list, setList }) => {
    const num = useRef(1);
    const inputs = useRef([]);
    const [input, setInput] = useState({
        id: num.current,
        content: '',
        age: '',
        do: false
    });
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setInput({
            ...input,
            id: num.current,
            [name]: value,
            do: false
        });
        console.log(input)
    }, [input])

    const onClick = useCallback(() => {
        for (const itm of inputs.current) {
            if (itm.value.length < 1) {
                alert('더입력하셈...');
                itm.focus();
                return;
            }
        }
        setList([
            ...list,
            input
        ]);

        setInput({
            content: '',
            age: '',
            do: false
        });

        console.log(inputs.current)

        num.current = num.current + 1;
    }, [list, input])
    return (
        <>
            <input type="text"
                value={input.content}
                onChange={onChange}
                name='content'
                ref={el => inputs.current[0] = el}
            />
            <input type="text"
                value={input.age}
                onChange={onChange}
                name='age'
                ref={el => inputs.current[1] = el}
            />
            <button onClick={onClick}>Write</button>
        </>
    )
}

export default Write;