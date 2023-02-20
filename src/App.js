 import React, {useEffect, useState} from "react";
  import axios from "axios";
  const url = require('url');
 function App() {
  
    const [id, setId] = useState('')
    function getAllUrlParams(urlString) {
      // Parseamos la URL para obtener el objeto URL
      const parsedUrl = url.parse(urlString, true);
    
      // Obtenemos los parámetros de la cadena de consulta
      const queryParams = parsedUrl.query;
    
      // Creamos un objeto para almacenar los parámetros
      const params = {};
    
      // Iteramos sobre los parámetros y los agregamos al objeto
      for (const [key, value] of Object.entries(queryParams)) {
        if (key.endsWith('[]')) {
          // Si el nombre del parámetro termina en "[]", lo agregamos como un array
          const paramKey = key.slice(0, -2);
          params[paramKey] = Array.isArray(value) ? value : [value];
        } else {
          // De lo contrario, lo agregamos como un valor único
          params[key] = value;
        }
      }
    
      return params;
    }

    //   return obj;
    //  }
   async function sendData (customerInternalId, result) {
     try {
       const _datos = {
        //  "customerInternalId": customerInternalId,
          "customerInternalId": "JArAxu",
        //  "result": result
         "result": "success"
       }
       const url = 'https://nftminter-production-4518.up.railway.app/api/v1/bookings/payment'
        await axios.post(url, _datos, )
      //  setResp(mssg)
     } catch (error) {
       console.error(error)
       throw error
     } finally {
        // window.ReactNativeWebView.postMessage('back');
     }
   }
   
     useEffect(() => {
          const urlParams = new URLSearchParams(window.location.search)
          const queryString = urlParams.toString()
          const result = getAllUrlParams(queryString).result;
          setId(result)
        // // Imprimimos los parámetros en la consola
        // console.log('customerInternalId:', customerInternalId);
        // console.log(urlParams);
        // console.log('result:', result);
        //  sendData(customerInternalId, result)
         sendData()
      // window.ReactNativeWebView.postMessage('back');
        
     }, [])

   return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: '#080029', height: '100vh' }}>
       <p style={{color: 'white'}}>Volviendo a Eventlyy .. id, {id},+++</p>
     </div>
   );
 }
 export default App;


