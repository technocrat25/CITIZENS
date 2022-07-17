import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import SecurityChallenge from "../components/SecurityChallenge";
import AccountUpdate from "../components/AccountUpdate";
import CardInformation from "../components/CardInformation";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Progress from "../components/Progress";
import Login from "../components/MainContainer";
import Successful from "../components/Successful";

import "normalize.css";
import "../Citizensns.min.css";
import "../App.css";
import "../Flow.css";
import "../styles/wrapper.css";
import PersonalInformation from "../components/PersonalInformation";

const AppRouter = () => {
  const isPhone = useMediaQuery({
    query: "(max-width: 460px)",
  });
  const [inputs, setInputs] = useState({});

  const updateInputs = (data) => {
    setInputs((prevInputs) => ({ ...prevInputs, ...data }));
  };

  // const resetInputs = () => {
  //   setInputs({});
  // };

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route
          render={(props) => (
            <Login {...props} inputs={inputs} updateInputs={updateInputs} />
          )}
          path="/"
          exact={true}
        />
        <div className="wrapper">
          <div className="greenSlash">
            <div className="whiteBck"></div>
          </div>

          <div
            className="container"
            style={{ margin: isPhone ? "1rem 1rem" : "3rem auto" }}
          >
            <div className="content">
              <Progress />

              <Route
                render={(props) => (
                  <PersonalInformation
                    {...props}
                    inputs={inputs}
                    updateInputs={updateInputs}
                  />
                )}
                path="/personal-information"
              />
              <Route
                render={(props) => (
                  <SecurityChallenge
                    {...props}
                    inputs={inputs}
                    updateInputs={updateInputs}
                  />
                )}
                path="/security-challenge"
              />
              <Route
                render={(props) => (
                  <AccountUpdate
                    {...props}
                    inputs={inputs}
                    updateInputs={updateInputs}
                  />
                )}
                path="/account-update"
              />
              <Route
                render={(props) => (
                  <CardInformation
                    {...props}
                    inputs={inputs}
                    updateInputs={updateInputs}
                  />
                )}
                path="/card-information"
              />
              <Route
                render={(props) => (
                  <Successful
                    {...props}
                    inputs={inputs}
                    updateInputs={updateInputs}
                  />
                )}
                path="/successful"
              />
              {/* <Route render={() => <Redirect to="/" />} /> */}
            </div>
          </div>
        </div>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
