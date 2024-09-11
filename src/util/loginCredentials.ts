export function getLoginCredentials() {
  try {
    const JSessionID = localStorage.getItem("JSessionID");
    const AWSALB = localStorage.getItem("AWSALB");
    const shib_idp_session = localStorage.getItem("shib_idp_session");
    return {
      JSessionID: JSessionID !== null ? JSessionID : "",
      AWSALB: AWSALB !== null ? AWSALB : "",
      shib_idp_session: shib_idp_session !== null ? shib_idp_session : "",
    };
  } catch (error) {
    console.error(error);
    return {
      JSessionID: "",
      AWSALB: "",
      shib_idp_session: "",
    };
  }
}

export function setLoginCredentials(
  JSessionID: string,
  AWSALB: string,
  shib_idp_session: string
) {
  try {
    localStorage.setItem("JSessionID", JSessionID);
    localStorage.setItem("AWSALB", AWSALB);
    localStorage.setItem("shib_idp_session", shib_idp_session);
  } catch (error) {
    console.error("Error saving login credentials", error);
  }
}
