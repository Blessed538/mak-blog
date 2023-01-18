import imageBlog from "../images/keila.jpg";
import profileBlog from "../images/blog.jpg";
import { FaRegComments } from "react-icons/fa";
// import { FcLike } from "react-icons/md";
// FaRegComments

const Articles = () => {
  return (
    <div className="articles-section">
      <div className="articles-container">
        <div className="articles-container-articles">
          <div className="articles-container-articles-article">
            <div className="articles-container-articles-article-single-post">
              <div className="articles-container-articles-article-single-post-blog-image">
                <img src={imageBlog} alt="Blog Image" />
              </div>
              <a href="#">
                <img
                  src={profileBlog}
                  alt="Profile Image"
                  className="articles-container-articles-article-single-post-avatar"
                />
              </a>
              <div className="blog-info">
                <h4 className="blog-info-title">
                  <a href="#">
                    <b>
                      How Did Van Gogh's Turbulent Mind Depict One of the Most
                      Complex Concepts in Physics?
                    </b>
                  </a>
                </h4>
                <ul className="post-footer">
                  <li>
                    <a href="#">
                      <FaRegComments className="icons" />
                      57
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaRegComments className="icons" /> 6
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaRegComments className="icons" /> 138
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="articles-container-articles-article">
            <div className="articles-container-articles-article-single-post">
              <div className="articles-container-articles-article-single-post-blog-image">
                <img src={imageBlog} alt="Blog Image" />
              </div>
              <a href="#">
                <img
                  src={profileBlog}
                  alt="Profile Image"
                  className="articles-container-articles-article-single-post-avatar"
                />
              </a>
              <div className="blog-info">
                <h4 className="blog-info-title">
                  <a href="#">
                    <b>
                      How Did Van Gogh's Turbulent Mind Depict One of the Most
                      Complex Concepts in Physics?
                    </b>
                  </a>
                </h4>
                <ul className="post-footer">
                  <li>
                    <a href="#">
                      <i className="ion-heart"></i>57
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-chatbubble"></i>6
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-eye"></i>138
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="articles-container-articles-article">
            <div className="articles-container-articles-article-single-post">
              <div className="articles-container-articles-article-single-post-blog-image">
                <img src={imageBlog} alt="Blog Image" />
              </div>
              <a href="#">
                <img
                  src={profileBlog}
                  alt="Profile Image"
                  className="articles-container-articles-article-single-post-avatar"
                />
              </a>
              <div className="blog-info">
                <h4 className="blog-info-title">
                  <a href="#">
                    <b>
                      How Did Van Gogh's Turbulent Mind Depict One of the Most
                      Complex Concepts in Physics?
                    </b>
                  </a>
                </h4>
                <ul className="post-footer">
                  <li>
                    <a href="#">
                      <i className="ion-heart"></i>57
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-chatbubble"></i>6
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-eye"></i>138
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="load-more-btn" href="#">
        <b>LOAD MORE</b>
      </a>
    </div>
  );
};

export default Articles;
