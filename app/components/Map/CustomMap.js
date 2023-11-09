"use client";

import { useState } from "react";
import MapCard from "./MapCard";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export default function CustomMap() {
  const position = { lat: 3.0670949998186248, lng: 101.60942551129597 };
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState({});

  const location = [
    {
      id: 1,
      name: 'UKM Specialist Centre Gamma Knife',
      address: "UKMSC GAMMA KNIFE Persekutuan Kuala Lumpur, Malaysia Clinical Block, UKM Medical Centre, Jalan Yaacob Latif, Bandar Tun Razak, 56000 Cheras, Wilayah Persekutuan Kuala Lumpur",
      number: '012-703 7855',
      loc: {
        lat: 3.0981247378158474,
        lng: 101.72605166767005
      },
      hours: '9am - 5pm',
      supply: [
        "Matenity Wear", "Prenatal Vitamins", "Baby Essentials", "Baby Care Products", "Contraceptives"
      ]
    },
    {
      id: 2,
      name: 'Asia Pacific University of Technology & Innovation (APU)',
      address: "Jalan Teknologi 5, Taman Teknologi Malaysia, 57000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
      number: '03-89961000',
      loc: {
        lat: 3.055673533849258, lng: 101.70053994274686
      },
      hours: '9am - 6pm',
      supply: [
        "Matenity Wear", "Prenatal Vitamins", "Baby Essentials", "Baby Care Products", "Contraceptives"
      ]
    },
    {
      id: 3,
      name: 'Pusat Hemodialisis Yayasan Al-Sultan Abdullah (YASA)',
      address: "No 06-G, Wisma Damai 12, Jalan 18/142, 56100 Kuala Lumpur, Federal Territory of Kuala Lumpur",
      number: '03-9107 4343',
      loc: {
        lat: 3.077369348985492, lng: 101.73685613961983
      },
      hours: '8am - 5pm',
      supply: [
        "Matenity Wear", "Prenatal Vitamins", "Baby Essentials", "Baby Care Products", "Contraceptives"
      ]
    },
    {
      id: 4,
      name: 'Hospital Canselor Tuanku Muhriz UKM',
      address: "Jalan Yaacob Latif Kuala lumpur, Bandar Tun Razak, 56000 Cheras, Wilayah Persekutuan Kuala Lumpur",
      number: '03-91455555',
      loc: {
        lat: 3.099856817844579, lng: 101.72547150289198
      },
      hours: '24 hours',
      supply: [
        "Matenity Wear", "Prenatal Vitamins", "Baby Essentials", "Baby Care Products", "Contraceptives"
      ]
    },
    {
      id: 5,
      name: 'Watsons Empire Subang (Pharmacy)',
      address: "Lot No.LG-36,LGF, Empire Subang, Jalan SS 16/1, Ss 16, 47500 Subang Jaya, Selangor",
      number: '03-56210148',
      loc: {
        lat: 3.0815494597219724, lng: 101.5842358736658
      },
      hours: '10 am - 10pm',
      supply: [
        "Matenity Wear", "Prenatal Vitamins", "Baby Essentials", "Baby Care Products", "Contraceptives"
      ]
    },
    {
      id: 6,
      name: 'Aeon Wellness AEON BiG Subang Jaya',
      address: "Jalan Kemajuan Subang, Ss 16, 47500 Subang Jaya, Selangor",
      number: 'NA',
      loc: {
        lat: 3.083019565701683, lng: 101.58809419881301
      },
      hours: '10 am - 10pm',
      supply: [
        "Matenity Wear", "Prenatal Vitamins", "Baby Essentials", "Baby Care Products", "Contraceptives"
      ]
    }, 
    {
      id: 7,
      name: 'CARiNG Pharmacy SS15, Subang Jaya',
      address: "C6, Jalan SS 15/4d, Ss 15, 47500 Subang Jaya, Selangor",
      number: '0356212928',
      loc: {
        lat: 3.0742643214084016, lng: 101.58762663980347
      },
      hours: '10 am - 10pm',
      supply: [
        "Matenity Wear", "Prenatal Vitamins", "Baby Essentials", "Baby Care Products", "Contraceptives"
      ]
    }, 
    {
      id: 8,
      name: 'Consult Pharmacy SS12',
      address: "No. 1, Jalan SS12/1B, Ss 12, 47500 Subang Jaya, Selangor",
      number: '0199221255',
      loc: {
        lat: 3.0742643214084016, lng: 101.58762663980347
      },
      hours: '9am - 9pm'
    }, 
    {
      id: 9,
      name: 'YOU PHARMACY SS14',
      address: "44, Jalan SS 14/2, Ss 14, 47500 Subang Jaya, Selangor",
      number: '0162518252',
      loc: {
        lat: 3.0731351519159795, lng: 101.59075698570169
      },
      hours: '8:30am - 9:30pm'
    }, 
    {
      id: 10,
      name: 'Health Lane Family Pharmacy SS14',
      address: "70, Jalan SS 14/2, Ss 14, 47500 Subang Jaya, Selangor",
      number: '0358888495',
      loc: {
        lat: 3.0732432705384403, lng: 101.58987282660954
      },
      hours: '8:30am - 9:30pm'
    }, 
    {
      id: 11,
      name: 'AA Pharmacy SS15 Subang',
      address: "B8, Jalan SS15/4D, Ss 15, 47500 Subang Jaya, Selangor",
      number: '0356127718',
      loc: {
        lat: 3.0740180648712943, lng: 101.58667905937013
      },
      hours: '8:30am - 9:30pm',
      supply: [
        "Matenity Wear", "Prenatal Vitamins", "Baby Essentials", "Baby Care Products", "Contraceptives"
      ]
    }, 
    {
      id: 12,
      name: 'Sunway Multicare Pharmacy SS19, Subang Jaya',
      address: "93, Jln SS19/6, Ss 19, 47500 Subang Jaya, Selangor",
      number: '0356115021',
      loc: {
        lat: 3.066055460348608, lng: 101.57696030298885
      },
      hours: '8:30am - 9:30pm',
      supply: [
        "Matenity Wear", "Prenatal Vitamins", "Baby Essentials", "Baby Care Products", "Contraceptives"
      ]
    }, 
    {
      id: 13,
      name: 'BIG Pharmacy Subang SS19',
      address: "67, Jln SS19/6, Ss 19, 47500 Subang Jaya, Selangor",
      number: '0122107350',
      loc: {
        lat: 3.0662593031322563, lng: 101.57772583411216
      },
      hours: '8:30am - 9:30pm',
      supply: [
        "Matenity Wear", "Prenatal Vitamins", "Baby Essentials", "Baby Care Products", "Contraceptives"
      ]
    }, 
    {
      id: 14,
      name: 'CARiNG Pharmacy Kelana Jaya, Petaling Jaya',
      address: "F-G-03A, Glomac Square, Jalan SS 6/5b, 47301 Petaling Jaya, Selangor",
      number: '0378055928',
      loc: {
        lat: 3.1053210569150393, lng: 101.60036695234935
      },
      hours: '8:30am - 9:30pm'
    }, 
    {
      id: 15,
      name: 'Sunway Medical Centre',
      address: "5, Jalan Lagoon Selatan, Bandar Sunway, 47500 Subang Jaya, Selangor",
      number: '0374919191',
      loc: {
        lat: 3.0670949998186248, lng: 101.60942551129597
      },
      hours: '8:30am - 9:30pm',
      supply: [
        "Matenity Wear", "Prenatal Vitamins", "Baby Essentials", "Baby Care Products", "Contraceptives"
      ]
    }, 

  ]

  const handleClick = (e) => {

    const lat = e.latLng.lat()
    const lng = e.latLng.lng()

    for ( const l of location){
      if (lat === l.loc.lat && lng === l.loc.lng){
        setSelection(l)
      }
    }
  }

  return (
    <>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <div style={{ height: "50vh", width: "100%" }}>
          <Map zoom={10} center={position}>
            {location.map((l) => (
              <Marker key={l.id} position={l.loc} onClick={(e) => handleClick(e)}></Marker>
            ))}
            {open && (
              <InfoWindow
                position={position}
                onCloseClick={() => setOpen(false)}
              >
                <p>Test</p>
              </InfoWindow>
            )}
          </Map>
        </div>

      </APIProvider>
      <MapCard 
        name={selection.name}
        address={selection.address}
        number={selection.number}
        hours={selection.hours}
        supply={selection.supply}
      />
    </>
  );
}
