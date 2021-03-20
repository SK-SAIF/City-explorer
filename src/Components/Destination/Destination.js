import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, Input } from "@material-ui/core";
import { Input as AntdInput } from "antd";
import "./Destination.css";
import { useHistory } from "react-router-dom";

const Destination = () => {
  const { control, handleSubmit } = useForm();
  const historyOfDestination = useHistory();
  const onSubmit = data => {
    console.log(data);
    historyOfDestination.push("/Confirmation");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="destination">
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
        </div>
        <div className="map">
          <iframe width="700" height="800" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Dhaka+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'></a>
        </div>
      </form>
    </div>
  );
};
export default Destination;