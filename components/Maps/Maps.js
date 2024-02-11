import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Map() {
  
  const mapRef = useRef<HTMLDivElement>(null);
  const geocoder = useMemo(() => new google.maps.Geocoder(), []);
  useEffect(() => {

    const initMap = async () => {
      
        const loader = new Loader({
          apiKey: process.env.local.NEXT_PUBLIC_MAPS_API_KEY,
          version: "weekly",
    });

    const {Map} = loader.importLibrary('maps');

    // init Marker 
    const { Marker} = await loader.importLibrary('maeker')  (google.maps.importLibrary);

    const position ={
      lat: -23.486352682976413,
      lng:  -46.494832740810196
    }

    // map options
    const mapsOptions = google.maps.mapsOptions = {
        center: position,
        zoom: 17,
        mapId: 'MY_NEXTJS_MAPID'

    }

    // setup the maps
    const map = new Map( mapRef.current(HTMLDivElement),mapsOptions);

    // put up marker
     const marker = new Marker({
        map: map,
        posistion: position
     });
  }

  initMap();

// loader.load().then(() => {
//       geocoder.geocode({ address: address }, (results, status) => {
//         if (status === "OK") {
//           const map = new google.maps.Map(mapRef.current, {
//             center: results[0].geometry.location,
//             zoom: 8,
//           });
// const marker = new google.maps.Marker({
//             map: map,
//             position: results[0].geometry.location,
//           });
//         } else {
//           console.error(`Geocode was not successful for the following reason: ${status}`);
//         }
//       });
//     });
   }, [] );
  return( <div style={{ height: "600px" }} ref={mapRef} />
  );
}
// export default Map;