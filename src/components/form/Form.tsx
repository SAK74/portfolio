import { useForm as useFormspree, ValidationError } from "@formspree/react";
import { Box, Button, CircularProgress } from "@mui/material";
import { InputComponent } from "./InputComponent";
import { useForm, SubmitHandler } from "react-hook-form";

export type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const FormComponent = () => {
  const [formSpreeState, formspreeSubmit] =
    useFormspree<FormValues>("myyqjwpv");

  const {
    control,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const onValid: SubmitHandler<FormValues> = async (data) => {
    await formspreeSubmit(data);
    if (formSpreeState.succeeded) {
      reset();
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onValid)}
      noValidate
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <InputComponent name="name" control={control} />
      <InputComponent name="email" control={control} />
      <InputComponent name="subject" control={control} label="Subject" />
      <InputComponent name="message" minRows={3} multiline control={control} />
      <Box sx={{ color: "red" }}>
        <ValidationError
          errors={formSpreeState.errors}
          field="email"
          prefix="Email"
        />
        <ValidationError errors={formSpreeState.errors} />
      </Box>
      <Button
        type="submit"
        variant={isSubmitting ? "text" : "contained"}
        disabled={isSubmitting}
        sx={{ alignSelf: "self-end" }}
      >
        {isSubmitting ? <CircularProgress size={30} /> : "Send"}
      </Button>
    </Box>
  );
};
