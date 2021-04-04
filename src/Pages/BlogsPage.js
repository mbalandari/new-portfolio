import React from 'react'
import allBlogs from '../Components/allBlogs'

const BlogsPage = () => {
    return (
        <div className="BlogsPage">
            {
                allBlogs.map((blog) => {
                    return (
                        <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <img src={blog.image} alt="pic" />
                                <a href={blog.link} className="blog-link">
                                    {blog.title}
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BlogsPage
