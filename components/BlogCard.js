import Link from "next/link";

function BlogCard({ blog }) {
    return (
        <div className="card w-full shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{blog.title}</h2>
                <p>{blog.excerpt}</p>
                <div className="card-actions justify-end">
                    <Link href={`/posts/${blog.slug}`}><span className="btn btn-primary">Read it</span></Link>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
