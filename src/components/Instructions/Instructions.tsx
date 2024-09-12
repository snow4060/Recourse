import { ReactNode } from "react";
import useModal from "../Modal/hooks/useModal";
import "./styles/Instructions.css";

function Instructions() {
  const { setOpen, setModalContent } = useModal();
  const handleClick = (image: ReactNode) => {
    setModalContent(image);
    setOpen(true);
  };

  return (
    <div className="whiteText instructions">
      <h1>Instructions</h1>
      This tool is a wrapper of the Registration Tool found in MyPortal, so this
      means that you will need to "login" in order to use it. As far as I know,
      there is no other way to fetch up-to-date class registration information
      other than through Elucian.
      <br />
      <h3>DISCLAIMER: </h3> All of the login credentials provided will be stored
      in your browser's local storage ONLY and not sent to any external servers
      besides Elucian for the necessary requests. The only requests that will be
      made are ones requested by the user in order to retrieve class information
      or update class registration. This app will NOT retrieve or modify
      registration information on its own nor send user/registration information
      to any external servers. To delete your login credentials (which are
      created as session cookies by the Registration Tool and automatically
      expires after a period of inactivity), clear the local storage on this
      site.
      <br />
      <br />
      <hr className="whiteText" />
      <br />
      Open MyPortal and then launch the Registration Tools app. Do not search for
      anything or interact with the Registration Tool because the server might
      cache the requests made in that session which will override the requests
      made through this app. If you have already done so, it is advised to log
      out and start a new session.
      <br />
      Inside the Registration Tool, open inspect tool, and click on the
      "Storage" tab (Firefox) or "Application" tab (Chrome/Opera). Then, click
      open the dropdown for cookies and click on the registration tool's link.
      <br />
      Then, just copy over the values for{" "}
      <div className="highlight">"JSESSIONID"</div>,{" "}
      <div className="highlight">"AWSALB"</div>, and{" "}
      <div className="highlight">"shib_idp_session"</div> to this tool using the
      personal info box found in the top right corner.
      <br />
      <div className="buttonsContainer">
        <button onClick={() => handleClick(<img src="../../../src/assets/firefox_example.png" className="instructionExamplePicture"/>)} >Firefox Example</button>
        <button onClick={() => handleClick(<img src="../../../src/assets/chrome_example.png" className="instructionExamplePicture"/>)}>Chrome Example</button>
      </div>
    </div>
  );
}

export default Instructions;
