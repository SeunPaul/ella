import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import logo from "../../../assets/icons/logo.svg";
import FormInput from "../../../components/form/formInput/FormInput";
import FormButton from "../../../components/form/formButton/FormButton";

type PropType = {
  onLogin: SubmitHandler<FieldValues>;
  formLoading: boolean;
};

function PageLeft({ onLogin, formLoading }: PropType) {
  const { register, formState, handleSubmit } = useForm();

  return (
    <div className="onboarding-page-left">
      <div className="onboarding-left-section1">
        <img src={logo} alt="" />
        <h1>DigiHealth</h1>
      </div>
      <div className="onboarding-left-section2">
        <h1>Welcome Back</h1>
      </div>
      <div className="onboarding-left-section3">
        <p>Sign In to your account below</p>
        <form onSubmit={handleSubmit(onLogin)}>
          <FormInput
            color="blue"
            placeholder="Email address"
            type="email"
            register={register}
            name="email"
            formState={formState}
            rules={{
              required: "Enter a valid email format",
            }}
          />
          <FormInput
            color="blue"
            placeholder="Password"
            type="password"
            register={register}
            name="password"
            formState={formState}
            rules={{
              required: "Enter your password",
            }}
          />
          <FormButton label="Sign In" error={false} loading={formLoading} />
        </form>
      </div>
    </div>
  );
}

export default PageLeft;
