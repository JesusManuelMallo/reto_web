import React from "react";
import { useState, useEffect } from "react";

export default function PhoneDetailsPage(props) {
  const [phones, setPhones] = useState({
    id: "",
    imageFileName: "",
    name: "",
    manufacturer: "",
    description: "",
    processor: "",
    price: "",
  });

  console.log(phones);
  useEffect(() => {
    const foundPhone = props.phones.filter((phoneObject) => {
      return phoneObject.id === props.match.params.id;
    });

    if (foundPhone.length) setPhones(foundPhone[0]);
  }, [props.phones, props.match.params.id, props]);

  return (
    <>
      {phones && (
        <div>
          <img src={phones.imageFileName} alt={""} />

          <div>
            <h1>{phones.name}</h1>
            <h1>{phones.manufacturer}</h1>
            <h1>{phones.description}</h1>

            <h1>{phones.processor}</h1>

            <h3>{phones.price}</h3>
          </div>
        </div>
      )}
    </>
  );
}
