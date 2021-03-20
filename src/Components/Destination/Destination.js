import React from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, Input } from "@material-ui/core";
import { Input as AntdInput } from "antd";

import "./Destination.css";
import { Link, Route, Router, useHistory, useLocation } from "react-router-dom";
import Confirmation from "./Confirmation/Confirmation";

const Destination = () => {
  const { control, handleSubmit } = useForm();
  const historyOfDestination = useHistory();

  const onSubmit = data => {
    // alert(JSON.stringify(data));
    historyOfDestination.push("/Confirmation");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>From</label>
      <Controller
        as={AntdInput}
        name="from"
        control={control}
        defaultValue=""
      />
      <label>To</label>
      <Controller
        name="to"
        as={Select}
        options={[
          { value: "Mirpur-1", label: "Mirpur-1" },
          { value: "Dhanmondi", label: "Dhanmondi" },
          { value: "Niketon", label: "Niketon" },
          { value: "Badda", label: "Badda" },
          { value: "Gulshan", label: "Gulshan" }
        ]}
        control={control}
        defaultValue=""
      />


      <Controller
        name="Checkbox"
        control={control}
        render={props => (
          <Checkbox
            onChange={e => props.onChange(e.target.checked)}
            checked={props.value}
          />
        )}
      />

      <input type="submit" />

    </form>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Destination />
  </React.StrictMode>,
  rootElement
);


export default Destination;