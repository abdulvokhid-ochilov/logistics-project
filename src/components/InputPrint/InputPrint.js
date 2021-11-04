import { useParams } from "react-router-dom";

const InputPrint = (props) => {
  const { id } = useParams();
  return <>{id}</>;
};

export default InputPrint;
