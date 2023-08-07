import { useEffect, useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import axios from "axios"
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Result = ({ inputValue }) => {

    const [result, setResult] = useState("")
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true)
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
            setResult(res.data.result.full_short_link);
        }
        catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {

        if (inputValue.length) {
            fetchData();
        }
    }, [inputValue])

    if (loading) {
        return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ margin: 1 }}>
                    <Skeleton animation="wave" variant="rounded" width={200} height={40} />
                </Box>
                <Box sx={{ width: '100%' }}>
                    <Skeleton animation="wave" variant="circular" width={50} height={50} />
                </Box>
            </Box>

        )
    }

    const Alert = () => {

        toast.success('Copied', {
            position: "top-center",
            autoClose: 100,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "colored",
        });
    }

    return (
        <>
            <div className="result">

                <p>{result}</p>

                <CopyToClipboard text={result}>
                    <button className="copied" onClick={Alert}>Copy</button>
                </CopyToClipboard>
            </div>
            <ToastContainer />
        </>

    )
}

export default Result