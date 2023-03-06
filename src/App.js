import { useState } from "react"
import List from "./components/List";
import Write from "./components/Write";

const App = () => {
    const [list, setList] = useState([]);
    return (
        <>
            <List list={list} setList={setList} />
            <Write list={list} setList={setList} />
        </>
    )
}

export default App