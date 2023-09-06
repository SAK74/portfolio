import { styled, TextField, TextFieldProps } from "@mui/material";
import { UseControllerProps, useController } from "react-hook-form";
import { FormValues } from "./Form";

type CustomProps = Omit<TextFieldProps, "name"> &
  UseControllerProps<FormValues>;

export const InputComponent = styled((props: CustomProps) => {
  const { name, control, rules, ...otherProps } = props;
  const {
    fieldState: { invalid, error },
    field: { ref, ...otherFieldProps },
  } = useController({ name, control, rules: { required: true } });
  return (
    <TextField
      {...{ ...otherFieldProps, ...otherProps }}
      inputRef={ref}
      error={invalid}
      helperText={error && "This field is required!"}
      label={otherProps.label ?? "Your " + name}
      required
    />
  );
})(({ theme }) => ({}));
