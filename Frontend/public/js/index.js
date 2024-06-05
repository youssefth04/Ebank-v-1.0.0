function updatePosition(test) {    
  console.log('function called');

  navigator.geolocation.getCurrentPosition((position) => {
    latToUpdate = position.coords.latitude;
    lngToUpdate = position.coords.longitude;
    console.log('lancer ws service update connected venue position');
    console.log(latToUpdate);
    console.log(lngToUpdate);
    console.log(feature.properties.name);


    try {

      const searchUrl = this.host+"/updateAddress/33.87761303617/-5.5607986450195/"+test;

      //REQUEST WITH XHR
      var xhr = new XMLHttpRequest();
      var response;
      xhr.open('GET', searchUrl, false);
      xhr.onload = function () {
          // Your request is completed
          if (xhr.readyState == 4 && xhr.status == 200) {
              // You're in a successfully condition
              console.log('success');
              response = xhr.responseText;
              console.log(JSON.parse(response));
          } else {
            console.log('falied');
          }
      };
      xhr.ontimeout = function (e) {
          // Your request timed out
          console.log('time out');
      };
      xhr.send(null);
      return response;
    } catch (err) {            
        console.log('Error getting documents', err)

    }
  });
  var dots = document.getElementById('dots');
  var moreText = document.getElementById("more");
  var btnUpdatePosition = document.getElementById("updatePosition");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnUpdatePosition.innerHTML = "Update position";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnUpdatePosition.innerHTML = "Update position";
    moreText.style.display = "inline";
  }
 }