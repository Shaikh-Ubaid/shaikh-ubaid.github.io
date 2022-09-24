import React from 'react';
import blogsReader from '../utils/blogsReader';

function index({ blogs }) {
    return (
        <div>This is main page of blog website</div>
    )
}

export const getStaticProps = async () => {
    return {
        props: {
            blogs: blogsReader.getBlogs(),
        },
    };
};
export default index;
