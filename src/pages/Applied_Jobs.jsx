import { useEffect, useState } from "react";
import { getJobs } from "../utilities";


const Applied_Jobs = () => {
    const [job, setJobs] = useState([])
    useEffect(() => {
        const localSave = getJobs()
        setJobs(localSave)
    }, [])
    return (
        <div>

        </div>
    );
};

export default Applied_Jobs;