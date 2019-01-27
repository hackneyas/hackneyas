function initialize() {
  if (GBrowserIsCompatible()) {
    var map = new GMap2(document.getElementById("map_canvas"));
    map.setCenter(new GLatLng(51.5590, -0.0696), 13);
    var point = new GLatLng(51.5569, -0.0892);
    map.addOverlay(new GMarker(point, {title:"Aden Terrace"}));
    var point = new GLatLng(51.5541, -0.0839);
    map.addOverlay(new GMarker(point, {title:"Church Walk"}));
    var point = new GLatLng(51.5668, -0.0846);
    map.addOverlay(new GMarker(point, {title:"St Kilda's"}));
    var point = new GLatLng(51.5555, -0.0871);
    map.addOverlay(new GMarker(point, {title:"Springdale Road"}));
    var point = new GLatLng(51.5664, -0.0524);
    map.addOverlay(new GMarker(point, {title:"Leaside"}));
    var point = new GLatLng(51.5554, -0.0411);
    map.addOverlay(new GMarker(point, {title:"Overbury Street"}));
    var point = new GLatLng(51.5741, -0.0625);
    map.addOverlay(new GMarker(point, {title:"Spring Hill"}));
    var point = new GLatLng(51.5703, -0.0558);
    map.addOverlay(new GMarker(point, {title:"Spring Lane"}));
    var point = new GLatLng(51.5446, -0.0690);
    map.addOverlay(new GMarker(point, {title:"Queensbridge Road"}));
    map.setUIToDefault();
  }
}
