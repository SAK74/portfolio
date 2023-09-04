import { useForm as useFormspree, ValidationError } from "@formspree/react";
import { TextField, Box, Button } from "@mui/material";
import { FormEventHandler } from "react";
import { InputComponent } from "./InputComponent";
import { useForm, SubmitHandler } from "react-hook-form";

export type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const FormComponent = () => {
  const [formSpreeState, formspreeSubmit, formReset] =
    useFormspree<FormValues>("myyqjwpv");
  const customSubmit: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    console.log(
      (ev.currentTarget.elements.namedItem("message") as HTMLInputElement).value
    );
    console.log("state: ", formSpreeState);
  };

  const { control, reset, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: "",
    },
  });
  const onValid: SubmitHandler<FormValues> = async (data) => {
    console.log("data: ", data);
    await formspreeSubmit(data);
    reset();
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onValid)}
      noValidate
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <InputComponent
        name="name"
        control={control}
        rules={{ required: "is required" }}
      />
      <InputComponent name="email" control={control} label="E-mail" />
      <InputComponent name="subject" control={control} />
      <InputComponent name="message" minRows={3} multiline control={control} />
      <ValidationError errors={formSpreeState.errors} />
      <Button type="submit">Send</Button>
      {/* {JSON.stringify(formState)} */}
    </Box>
  );
};
