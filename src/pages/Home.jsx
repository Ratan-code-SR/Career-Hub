import Categories from "../components/Category/Categories";
// import Category from "../components/Category/Category";
import Featured_Jobs from "../components/Featured_Jobs/Featured_Jobs";
import Hero from "../components/Hero/Hero";


const Home = () => {
    return (
        <div>
            <Hero />
            <Categories />
            <Featured_Jobs />
        </div>
    );
};

export default Home;