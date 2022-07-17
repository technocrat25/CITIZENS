import logo from "../assets/images/CTZ_Green-01.png";

export const Header = () => {
  return (
    <div className="citizens-header">
      {/* overlay to hide elements until CSS is loaded */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .citizens-header-footer-overlay{ opacity:1; background-color:#fff; position:fixed; width:100%; height:100%; top:0px; left:0px; z-index:1000; }\n        .citizens-header-footer-overlay .centered-content { width: 100%; max-width: 1060px; padding: 0 20px; margin: 0 auto; font-family: arial, helvetica, san-serif; font-size: 14px;}\n        .citizens-header-footer-overlay .responsive-enabled .centered-content { width: auto; max-width: 1060px; }\n        .citizens-header-footer-overlay .page-logo { float: none; }\n        .citizens-header-footer-overlay .page-logo img{ margin: 10px; float: none;}\n        .citizens-header-footer-overlay .topshadow {\n            position: absolute; width: 100%; top: 100px; z-index: 5; height: 8px; \n            background: -webkit-radial-gradient(50% 100%, farthest-side, rgba(0, 0, 0, 0.1), transparent 100%); background: radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0) 100%); background-repeat: no-repeat; background-size: cover;\n        }\n    ",
        }}
      />
      {/* end overlay */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .account-section-title.checkmark h1 { padding: 0px 0px 5px 28px !important; }\n        .mobile-alert-dot {min-width: 22px; min-height: 22px; width: auto; height: auto; max-width: 50px; max-height: 50px; padding: 5px; }\n    ",
        }}
      />
      {/* htmlContainer PREFIX */}
      <div className="citizens-header-footer">
        <div id="page-header" className="page-header">
          {/* inc-header.html START */}
          <div className="topshadow" />
          <div className="centered-content clearfix">
            <a href="/" className="page-logo" tabIndex={1}>
              {/* Display the brand logo for either citizens one or citizen bank customers */}
              <img
                border={0}
                alt="Citizens Bank"
                width={203}
                height={25}
                src={logo}
              />
            </a>
            <div id="header-navigation-container" />
          </div>
          {/* inc-header.html END */}
        </div>
      </div>
      {/* htmlContainer SUFFIX */}
    </div>
  );
};
