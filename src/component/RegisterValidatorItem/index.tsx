import { FC } from "react";
import {
  ValidatorItemCircle,
  ValidatorItemText,
  ValidatorItemWrapper,
} from "./styled";

interface RegisterValidatorItemProps {
  isChecked: boolean;
  text: string;
}

const RegisterValidatorItem: FC<RegisterValidatorItemProps> = ({
  isChecked,
  text,
}) => {
  return (
    <ValidatorItemWrapper>
      <ValidatorItemCircle isChecked={isChecked} />
      <ValidatorItemText isChecked={isChecked}>{text}</ValidatorItemText>
    </ValidatorItemWrapper>
  );
};

export default RegisterValidatorItem;
