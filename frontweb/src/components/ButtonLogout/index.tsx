import './styles.css';

type Props = {
  text: string;
};

const ButtonLogout = ({ text }: Props) => {
  return (
    <div>
      <div className="btn-container-logout">
        <button className=" btn-logout bg-primary">
          <h6>{text}</h6>
        </button>
      </div>
    </div>
  );
};
export default ButtonLogout;
