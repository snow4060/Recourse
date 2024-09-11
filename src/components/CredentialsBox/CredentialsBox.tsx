import { useEffect, useRef, useState } from "react";
import "./styles/CredentialsBox.css";
import useModal from "../Modal/hooks/useModal";
import { getLoginCredentials, setLoginCredentials } from "../../util/loginCredentials";

function CredentialsBox() {
  const { open } = useModal();
  const [savedCredentialsLoaded, setSavedCredentialsLoaded] = useState(false);

  const JSessionIDBoxRef = useRef<HTMLInputElement>(null);
  const AWSALBBoxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      const storedCredentials = getLoginCredentials();

      if(JSessionIDBoxRef.current && AWSALBBoxRef.current){
        JSessionIDBoxRef.current.value = storedCredentials.JSessionID;
        AWSALBBoxRef.current.value = storedCredentials.AWSALB;
      }
      setSavedCredentialsLoaded(true);
    }
    if(!open){
      setSavedCredentialsLoaded(false);
      if(JSessionIDBoxRef.current && AWSALBBoxRef.current){
        console.log("closing, saving values");
        setLoginCredentials(JSessionIDBoxRef.current.value, AWSALBBoxRef.current.value)
      }
    }
  }, [open]);

  return (
    <>
      <p className="whiteText credentialsBoxText">JSessionID</p>
      <input type="text" className="credentialsBoxInput" disabled={!savedCredentialsLoaded} ref={JSessionIDBoxRef} />
      <p className="whiteText credentialsBoxText">AWSALB</p>
      <input type="text" className="credentialsBoxInput" disabled={!savedCredentialsLoaded} ref={AWSALBBoxRef} />
    </>
  );
}

export default CredentialsBox;
