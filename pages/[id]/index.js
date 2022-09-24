import blogsReader from '../../utils/blogsReader';

const index = ({ blog }) => {
    return <div dangerouslySetInnerHTML={{ __html: blog.content }}></div >;
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
