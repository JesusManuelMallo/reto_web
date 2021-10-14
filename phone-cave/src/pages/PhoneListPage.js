import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PhoneList(props) {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    setPhones(props.phones);
  }, [props.phones]);

  return (
    <div>
      {phones.map((phone) => {
        console.log(phone);
        return (
          <div key={phone.id} className="">
            <Link to={`/telefonos/${phone.id}`} className="">
              <img src={phone.imageFileName} alt={phone.name} />
              <p className="manufacturer">{phone.manufacturer}</p>
              <p>{phone.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
