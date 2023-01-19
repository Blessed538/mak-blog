import { Link } from "react-router-dom";
import useGetData, { ArticleProps } from "../hooks/useFetch";

const Articles = () => {
  const { data } = useGetData();
  return (
    <div className="articles-section">
      <div className="articles-container">
        <div className="articles-container-articles">
          <div className="articles-container-articles-article">
            {data.map((item, index: number) => {
              return (
                <Link
                  to={`${item.sys.id}`}
                  state={{
                    description: item.fields.description,
                    title: item.fields.title,
                    postImage: item.fields.postImage.fields.file.url,
                  }}
                >
                  <div
                    key={index}
                    className="articles-container-articles-article-single-post"
                  >
                    <div className="articles-container-articles-article-single-post-blog-image">
                      <img
                        src={item.fields.postImage.fields.file.url}
                        alt="Blog Image"
                      />
                    </div>
                    <a href="#">
                      <img
                        src={item.fields.profileImage.fields.file.url}
                        alt="Profile Image"
                        className="articles-container-articles-article-single-post-avatar"
                      />
                    </a>
                    <div className="blog-info">
                      <h4 className="">
                        <a href="#">
                          <b>{item.fields.title}</b>
                        </a>
                      </h4>
                      <h4 className="blog-info-title">
                        <a href="#">
                          <b>{item.fields.description.slice(0, 86)}</b>
                        </a>
                      </h4>
                      {/* <ul className="post-footer">
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
                </ul> */}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/* <a className="load-more-btn" href="#">
        <b>LOAD MORE</b>
      </a> */}
    </div>
  );
};

export default Articles;
