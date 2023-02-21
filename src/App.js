 import React, {useEffect} from "react";
  import axios from "axios";
 function App() {
   async function sendData (customerInternalId, result) {
     try {
       const _datos = {
          "customerInternalId": customerInternalId,
          "result": result
       }
       const url = 'https://nftminter-production-4518.up.railway.app/api/v1/bookings/payment'
        await axios.post(url, _datos, )
      //  setResp(mssg)
     } catch (error) {
       console.error(error)
       window.ReactNativeWebView.postMessage('error');
       throw error
     } finally {
       window.ReactNativeWebView.postMessage('back');
     }
   }
   
     useEffect(() => {
          const urlParams = new URLSearchParams(window.location.search)
          const customerInternalId = urlParams.get('customerInternalId');
          const result = urlParams.get('result');
          sendData(customerInternalId, result)        
     }, [])

   return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: '#080029', height: '100vh' }}>
       <p style={{color: 'white'}}>Volviendo a Evently... </p>
     </div>
   );
 }
 export default App;


