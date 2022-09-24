import fs from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import mdConverter from './markdownConverter';

class BlogsReader {
    constructor(blogsLocation) {
        this.blogsLocation = `${process.cwd()}/${blogsLocation}`;
        this.blogsList = fs.readdirSync(this.blogsLocation);
        this.blogs = this.blogsList.map((blogFile, _idx) => {
            const [slug, _extension] = blogFile.split('.');
            const blogSource = fs.readFileSync(`${this.blogsLocation}/${blogFile}`);
            const { content, data } = matter(blogSource);
            return {
                content: mdConverter(content),
                frontmatter: {
                    slug: slug,
                    excerpt: data.excerpt || "Excerpt not found",
                    title: data.title || "Title not found",
                    publishedAt: data.publishedAt || "PublishedAt not found",
                    readingTime: readingTime(blogSource).text,
                },
            }
        });
    }

    getBlogs() {
        var blogs = this.blogs.map((blog, _idx) => blog.frontmatter);
        blogs.sort((a, b) => {
            if ((a.publishedAt + a.slug) < (b.publishedAt + b.slug)) return 1;
            if ((a.publishedAt + a.slug) > (b.publishedAt + b.slug)) return -1;
            return 0;
        });
        return blogs;
    }

    getBlog(slug) {
        return this.blogs.find((blog) => blog.frontmatter.slug === slug);
    }
}

const blogsReader = new BlogsReader("blogs");
export default blogsReader;
