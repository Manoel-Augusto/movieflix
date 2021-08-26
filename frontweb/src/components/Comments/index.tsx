import './styles.css';
import StarImg from '../../assets/images/star-icon.png';

type Props = {
  name: string;
  comments: string;
  
};

const Comments = ({ name, comments }: Props) => {
  return (
    <div className="container-comments">
      <div className="header">
        <img src={StarImg} alt="StarIcon" />
        <h1>{name}</h1>
      </div>
      <div className="container-text">
        <h2>{comments}</h2>
      </div>
    </div>
  );
};
export default Comments;
