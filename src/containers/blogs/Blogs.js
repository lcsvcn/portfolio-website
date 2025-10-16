import "./Blog.css";
import { Fade } from "react-awesome-reveal";
import BlogCard from "../../components/blogCard/BlogCard";
import { blogSection } from "../../portfolio";

export default function Blogs() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p className="subTitle blog-subtitle">{blogSection.subtitle}</p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {blogSection.blogs.map((blog, index) => {
              return (
                <BlogCard
                  key={index}
                  blog={{
                    url: blog.url,
                    image: blog.image,
                    title: blog.title,
                    description: blog.description,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
