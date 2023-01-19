import { useLocation } from "react-router-dom";

const Article = () => {
  const location = useLocation();
  const { description, title, postImage, profile } = location.state;
  console.log("destructure", postImage);
  return (
    <div className="article">
      <div className="article-container">
        <div>
          <img src={postImage} alt="article-placeholder-image" />
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Article;
