import Link from "next/link";

import Blog from '../../../components/Blog';
import blogsReader from '../../../utils/blogsReader';

const index = ({ blog }) => {
    return (
        <div className="flex place-content-center">
            <div className="w-4/5">
                <br />
                <Link href="/posts">
                    <div className="link">
                        <i className="ri-arrow-left-line" /> Back to posts
                    </div>
                </Link>
                <br />
                <Blog blog={blog} />
            </div>
        </div>
    );
};

export const getStaticProps = async (context) => {
    const blog = blogsReader.getBlog(context.params.id);
    return {
        props: {
            blog: blog
        },
    };
};

export const getStaticPaths = async () => {
    const blogs = blogsReader.getBlogs();
    const paths = blogs.map((blog) => ({ params: { id: blog.slug.toString() } }));
    return {
        paths: paths,
        fallback: false,
    };
};

export default index;
