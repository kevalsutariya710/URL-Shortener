import { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"


const Result = () => {

    const [Result, setResult] = useState("hello")

    return (
        <>

            <p>{Result}</p>
            <CopyToClipboard text={Result}>
                <button>Copy</button>
            </CopyToClipboard>
        </>


    )
}

export default Result