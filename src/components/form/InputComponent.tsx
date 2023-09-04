import { styled, TextField, TextFieldProps } from "@mui/material";
import { UseControllerProps, useController } from "react-hook-form";
import { FormValues } from "./Form";

type CustomProps = Omit<TextFieldProps, "name"> &
  UseControllerProps<FormValues>;

export const InputComponent = styled((props: CustomProps) => {
  const { name, control, rules, ...otherProps } = props;
  const {
    fieldState: { invalid, error },
    field,
  } = useController({ name, control, rules });
  return (
    <TextField
      {...{ ...field, ...otherProps }}
      error={invalid}
      helperText={error?.message}
      label={otherProps.label ?? name}
    />
  );
})(({ theme }) => ({}));
