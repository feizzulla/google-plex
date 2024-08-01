import MainInput from "../../widgets/inputs/MainInput/MainInput";
export default function InputsGenerator({ labelText, infoText, ...props }) {
  return <MainInput labelText={labelText} infoText={infoText} {...props} />;
}
