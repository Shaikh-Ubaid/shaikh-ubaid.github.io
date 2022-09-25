import BlogCard from "../components/BlogCard";
import blogsReader from '../utils/blogsReader';

function posts({ blogs }) {
    return (
        <>
            <div className="flex place-content-center">
                <div className="w-4/5 md:w-2/3">
                    {
                        blogs.map((blog, idx) => <BlogCard key={idx} blog={blog} />)
                    }
                </div>
            </div>
        </>
    );
}

export const getStaticProps = async () => {
    return {
        props: {
            blogs: blogsReader.getBlogs(),
        },
    };
};

export default posts;
