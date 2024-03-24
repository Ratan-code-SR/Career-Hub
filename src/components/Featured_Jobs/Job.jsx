import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Job = ({ job }) => {
    const {id, logo, remote_or_onsite, location, salary, job_type } = job;
    // console.log(id);
    return (
        <div className='border border-gray-400 p-10 rounded-lg bg-gray-300'>
            <img src={logo} alt="" />
            <h1>Technical Database Engineer</h1>
            <h3>Google LLC</h3>
            <div className='flex gap-5 my-2'>
                <p className='border border-blue-400 p-3 rounded-sm text-blue-500'>{remote_or_onsite}</p>
                <p className='border border-blue-400 p-3 rounded-sm text-blue-500'>{job_type}</p>
            </div>
            <div className='flex gap-4'>
                <p>{location}</p>
                <p>{salary}</p>
            </div>
            <Link to={`/job/${id}`}><button className='btn btn-success my-2 text-white'>View Details</button></Link>
        </div>
    );
};
Job.propTypes = {
    job: PropTypes.object.isRequired
};
export default Job;