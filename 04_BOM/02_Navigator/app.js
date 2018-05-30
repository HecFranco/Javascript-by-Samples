/*
 * NAVIGATOR
 *
 * Contains information about the browser
 * This object contains the geolocation object
 * There are no defined standards about the information
 * which returns each browser.
 *
 * Inside the navigator object is the geolocation object
 * that allows geolocation.
 *
 */



//si el navegador es chrome escribe el mensaje
(function(){
  if(window.chrome !== undefined){
    alert("You are using Chrome")
  }
})();

// know the browser
/*
http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
*/

 (function(){
       if(window.chrome !== undefined){    
         alert("You are using Chrome")
       }else if (typeof InstallTrigger!==undefined){    
         alert("You are using Chrome")
       }
})();