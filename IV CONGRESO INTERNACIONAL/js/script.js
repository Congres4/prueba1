function iniciarMap(){
    var coord = {lat:9.49583 ,lng:-73.84917};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 50,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
