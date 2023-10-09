var locations = [
  { place: "Tirupati", lat: 13.6288, lng: 79.4192 },

  {
    place: "Pune",

    lat: 18.5204,

    lng: 73.8567,
  },

  {
    place: "Rajasthan",

    lat: 27.0238,

    lng: 74.2179,
  },
];

const latValues = locations.map(item => item.lat)
const lanValues = locations.map(item => item.lan)

const [...val] = latValues
const [...val1] = lanValues

console.log(val);

// Marker1 = new mappls.Marker({

//     map: map,

//     positions: {

//       lat: val,

//       lng:val1 ,

//     },

//     fitbounds: true,



//     popupHtml: `<div>${location.place}</div>`,

//   });