import { useEffect, useState } from "react";
import Job from "./Job";

const Featured_Jobs = () => {
    const [jobs, setJobs] = useState([])
    const [dataLength,setDataLength] = useState(4) 

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
  
            })
    }, [])

    return (
        <>
            <div className="text-center mt-10">
                <h1 className="text-4xl font-bold">Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future </p>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-5">
                {
                    jobs.slice(0, dataLength).map((job) => <Job key={job.id} job={job} />)
                }
            </div>

            <button onClick={() => setDataLength(jobs.length)} className={`btn btn-success text-white flex mx-auto my-3  ${dataLength >= 6 ? 'hidden': ''}`}>See All Jobs</button>
        </>
    );
};

export default Featured_Jobs;