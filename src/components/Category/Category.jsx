import { CiLight } from "react-icons/ci";
const Category = ({ category }) => {
    const {category_name, availability } = category;
    return (
        <div>
            <div className="border  border-red-500 p-5 rounded-xl bg-slate-500">
                <CiLight />
                <h1>{category_name}</h1> 
                 <p>{availability}</p> 
            </div>
        </div>
    );
};

export default Category;