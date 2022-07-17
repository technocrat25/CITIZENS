import "../styles/successful.css";

const Successful = () => {
  return (
    <section id="main-content" className="page-region main-content full-width">
      <div className="account-table account-table-full final-flow-screen">
        <div className="account-table-content">
          <div className="account-content-container">
            <header className="darkgreen-top">
              <h1>Logged Out</h1>
            </header>
            <div className="account-table-body">
              <header className="account-section-title clearfix checkmark">
                <h1>You have been logged out of Citizens Online™.</h1>
              </header>
              <section className="account-section no-form">
                <form className="spacer" id="frmLogout">
                  <input
                    type="hidden"
                    name="CSRF_TOKEN"
                    defaultValue="YMBH-SSCA-CKZ5-FGOO-5THU-J7ZA-KNTF-EB2Y"
                  />
                  <input
                    type="hidden"
                    name="sessionid"
                    defaultValue="AA4U9DMWPieDlbFjFbNRrjT"
                  />
                  {/*Return to the login page with the right branding and query param*/}
                  <a
                    id="returntologin"
                    className="button arrow"
                    href="https://www3.citizensbankonline.com/"
                  >
                    Return to Login
                  </a>
                </form>
                <div
                  className="ad-container two-ad-row clearfix"
                  style={{ margin: "20px auto 10px" }}
                >
                  <table width="95%" style={{ padding: "auto .5%" }}>
                    <tbody>
                      <tr>
                        <td width="46.5%"></td>
                        <td width="46.5%"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Successful;
