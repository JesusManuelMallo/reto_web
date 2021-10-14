import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import PhonesListPage from "./pages/PhoneDetailsPage";
import PhoneDetailsPage from "./pages/PhoneDetailsPage";
import phonesInfo from "./phones.json";
import React from "react";

export default function App() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    setPhones(phonesInfo);
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={PhoneDetailsPage} />
      <Route exact path="/telefonos" component={PhonesListPage} />
    </Switch>
  );
}
