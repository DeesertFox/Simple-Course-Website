import React, { Component, useState } from "react";
import { ToastContainer } from "../../../Assets/mdbreact/mdbreact";
import { Field } from "formik";

class EditprofileForm extends Component {
  render() {
    const {
      name,
      type,
      id,
      classnames,
      placeholder,
      label,
      value,
      onChange,
      required,
    } = this.props;
    return (
      <React.Fragment>
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text inputp">
          {label}
        </label>
        <Field
          name={name}
          type={type}
          id={id}
          className={this.props.classnames}
          placeholder={placeholder}
          required={required}
        />
        <div className="invalid-feedback">
          لطفا فیلد {placeholder} را پر کنید
        </div>
      </React.Fragment>
    );
  }
}

export default EditprofileForm;
