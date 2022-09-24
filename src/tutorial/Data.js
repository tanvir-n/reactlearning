import { memo } from "react";

const DatabaseValue = ({data, addData}) => {
    return (
        <>
            <h2>Database Values</h2>
            {data.map((d, index) => { return <p key={index}>{d}</p> })}
            <button
                onClick={addData}
            >Add Data</button>
        </>
    )
}

export default memo(DatabaseValue);