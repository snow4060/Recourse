export function getLoginCredentials() {
    try{
        const JSessionID = localStorage.getItem("JSessionID");
        const AWSALB = localStorage.getItem("AWSALB");
        if(JSessionID === null || AWSALB === null){
            throw new Error("Failed to get login credentials")
        }
        else {
          return {
            JSessionID, AWSALB
          }
        }
    } catch(error){
      console.error(error);
      return {
        "JSessionID": "",
        "AWSALB": ""
      }
    }
}

export function setLoginCredentials(JSessionID: string, AWSALB: string) {
  try {
    localStorage.setItem("JSessionID", JSessionID);
    localStorage.setItem("AWSALB", AWSALB);
  } catch (error) {
    console.error("Error saving login credentials", error);
  }
}
