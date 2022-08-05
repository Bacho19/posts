import { FC } from "react";
import {
  ValidatorItemCircle,
  ValidatorItemText,
  ValidatorItemWrapper,
} from "./styled";

interface RegisterValidatorItemProps {
  isChecked: boolean;
}

const RegisterValidatorItem: FC<RegisterValidatorItemProps> = ({
  isChecked,
}) => {
  return (
    <ValidatorItemWrapper>
      <ValidatorItemCircle isChecked={isChecked} />
      <ValidatorItemText isChecked={isChecked}>
        Concalas at least one special character
      </ValidatorItemText>
    </ValidatorItemWrapper>
  );
};

export default RegisterValidatorItem;
