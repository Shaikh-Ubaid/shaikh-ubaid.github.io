import Link from "next/link";

function BlogCard({ blog }) {
    return (
        <div className="card w-full shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{blog.title}</h2>
                <p>{blog.excerpt}</p>

                <div className="card-actions justify-between">
                    <div><i className="ri-calendar-2-line" /> {blog.day}</div>
                    <div><i className="ri-time-line" /> {blog.readingTime}</div>
                    <Link href={`/posts/${blog.slug}`}>
                        <span className="link">Read it <i className="ri-arrow-right-line"></i></span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
