import './styles.css';
type Props = {
  text: string;
};

const ButtonSave = ({ text }: Props) => {
  return (
    <button className="btn btn-primary">
      <h6>{text}</h6>
    </button>
  );
};
export default ButtonSave;
