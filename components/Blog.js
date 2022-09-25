import dayjs from "dayjs";

function Blog({ blog }) {
    const { frontmatter, content } = blog;
    return (
        <>
            <article className="prose prose-lg md:prose-xl">
                <h1>{frontmatter.title}</h1>
                <h3>{frontmatter.excerpt}</h3>
                <div className="flex justify-between">
                    <div><i className="ri-calendar-2-line" /> {frontmatter.day}</div>
                    <div><i className="ri-time-line" /> {frontmatter.readingTime}</div>
                </div>
            </article>
            <hr className="mt-5 mb-8" />
            <div className="w-3/4 w-full m-auto">
                <article className="prose prose-base">
                    <div className="blog-content md:text-lg" dangerouslySetInnerHTML={{ __html: content }}></div>
                </article>
            </div>
        </>
    );
}

export default Blog;
