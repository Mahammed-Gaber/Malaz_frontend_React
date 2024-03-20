
// import React, { useState, useEffect } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// function Map() {
//   return function (, Contacts = () => {
//       const [mapApiLoaded, setMapApiLoaded] = useState(false);
//       const [mapInstance, setMapInstance] = useState(null);

//       useEffect(() => {
//           // Load the Google Maps API if not already loaded
//           if (!window.google) {
//               const script = document.createElement('script');
//               script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDOsqh9vRS-ozf5ZWAsaqAJUu3rhqZymhI`;
//               script.async = true;
//               script.defer = true;
//               script.onload = () => {
//                   setMapApiLoaded(true);
//               };
//               document.body.appendChild(script);
//           } else {
//               setMapApiLoaded(true);
//           }
//       }, []);

//       useEffect(() => {
//           // Initialize the map once Map API is loaded and the container is available
//           if (mapApiLoaded && document.getElementById('mapBox')) {
//               const mapContainer = document.getElementById('mapBox');
//               const center = new window.google.maps.LatLng(40.701083, -74.1522848);
//               const mapOptions = {
//                   zoom: 13,
//                   center,
//               };
//               const map = new window.google.maps.Map(mapContainer, mapOptions);
//               setMapInstance(map);

//               // Add a marker (optional)
//               const marker = new window.google.maps.Marker({
//                   position: center,
//                   map,
//                   title: 'PO Box CT16122 Collins Street West, Victoria 8007, Australia.',
//               });
//           }
//       }, [mapApiLoaded]);

//       return (
//           <>
//               {/* ... (contact information and breadcrumb sections) ... */}

//               <section className="contact_area section_gap">
//                   <div className="container">
//                       <div id="mapBox" className="mapBox"></div>
//                       {/* ... (other contact information) ... */}
//                   </div>
//               </section>

//               {/* ... (rest of the component) ... */}
//           </>
//       );
//   }) {
//       return;
//   }
// }

// export default Map