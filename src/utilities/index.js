import { toast } from "react-toastify";

export const getJobs = () => {
    let jobs = [];
    const storeJobs = localStorage.getItem('job');
    if (!storeJobs) {
        jobs = JSON.parse(storeJobs)

    }
    return jobs;

}

export const saveJobs = (id) => {
    let jobs = getJobs();
    const isExist = jobs.find(job => job.id === id)

    if (isExist) {
       return toast.error("job applied successfully!")
    }
    jobs.push(id)
    localStorage.setItem('job', JSON.stringify(jobs))
    toast.success('Bookmarked successfully!')
}


