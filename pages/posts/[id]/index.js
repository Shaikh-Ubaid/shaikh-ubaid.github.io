import Link from "next/link";

import Blog from '../../../components/Blog';
import blogsReader from '../../../utils/blogsReader';

const index = ({ blog }) => {
    return (
        <div className="flex place-content-center">
            <div className="w-2/3">
                <Link href="/posts">
                    <div className="inline-flex align-middle link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 15 15">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                        &nbsp;
                        Back to posts
                    </div>
                </Link>
                <br /><br />
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
