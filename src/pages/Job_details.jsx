import { useLoaderData, useParams } from "react-router-dom";

const Job_details = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    const { job_description, job_responsibility, educational_requirements, experiences, contact_information, salary, job_type, location, job_title } = job;
    return (
        <div className="px-2">
            <h1 className="text-center text-3xl">job details</h1>
            <div className="flex justify-center gap-2">
                <div className="w-3/4">
                    <p><span className="text-2xl ">Jobs Description:</span>{job_description}</p>
                    <p><span className="text-2xl">Jobs Responsibility:</span>{job_responsibility}</p>
                    <h1 className="text-2xl">Education Requirement:</h1>
                    <p>{educational_requirements}</p>
                    <h1 className="text-2xl">Experiences:</h1>
                    <p>{experiences}</p>
                </div>
                <div className="max-w-xs rounded-md shadow-md bg-purple-200 p-2 dark:text-gray-800">

                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h1>Jobs titles</h1>
                            <hr />
                            <h2 className="text-xl  tracking-wide">Salary: {salary}</h2>
                            <h2 className=" font-semibold tracking-wide">Job title: {job_title}</h2>
                            <h1>Contact Information</h1>
                            <hr />
                            <h1>Phone: {contact_information.phone}</h1>
                            <h1>Email: {contact_information.email}</h1>
                            <h1>Address: {contact_information.address}</h1>
                        </div>
                        <button type="button" className="flex btn btn-success items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job_details;