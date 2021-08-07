import './styles.css';
import StarImg from '../../assets/images/star-icon.png';
const Comments = () => {
  return (
    <div className="container-comments">
      <div className="header">
        <img src={StarImg} alt="StarIcon" />
        <h1>Maria Silva</h1>
      </div>
      <div className="container-text">
        <h2>
          Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
        </h2>
      </div>
    </div>
  );
};
export default Comments;
