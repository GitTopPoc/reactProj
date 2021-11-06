import React from "react";
import {useForm} from "react-hook-form";


const Settings = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => alert(JSON.stringify(data));

    return (
      <>
          <form onSubmit={handleSubmit(onSubmit)}>
              <input defaultValue={props.state.settings.name} {...register("example")} />
              <input {...register("exampleRequired", { required: true })} />
              {errors.exampleRequired && <span>This field is required</span>}
              <input type="submit" />
          </form>
      </>
    );
}

export default Settings;