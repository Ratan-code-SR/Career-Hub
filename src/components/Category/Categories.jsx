import { useEffect, useState } from "react";
import Category from "./Category";
const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-4xl font-bold my-3'>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-4 gap-3 mt-5">
                {categories.map(category => <Category key={category.id} category={category} />)}
            </div>
        </div>
    );
};

export default Categories;