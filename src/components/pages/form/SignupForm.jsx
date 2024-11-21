import React from "react";
import { useFormik } from "formik";
import styles from "./SignupForm.module.scss";
import axios from "axios";
import Header from "../../Header/Header";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      contactName: {
        firstName: "",
        lastName: "",
      },
      companyBackground: "",
      brandPersonality: "",
      designPreferences: "",
      colorPalette: "",
    },
    onSubmit: (values) => {
      axios.post("http://localhost:5000/signup",values)
      .then(res=>{
        formik.resetForm();
        alert(`Formunuz Qeydiyyata Alindi.BY${values.contactName.firstName}`)
      })
      
    },
  });
  return (
    <div className={styles.container}>
      
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.containerForName}>
          <label>Contact Name</label>
          <div className={styles.containerForInput}>
            <input
              id="contactName.firstName"
              name="contactName.firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.contactName.firstName}
              placeholder="First"
            />
            <input
              id="contactName.lastName"
              name="contactName.lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.contactName.lastName}
              placeholder="Last"
            />
          </div>
        </div>
        <label htmlFor="companyBackground">Company Background</label>
        <input
          id="companyBackground"
          name="companyBackground"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.companyBackground}
        />
        <label htmlFor="brandPersonality">Brand Personality and values</label>
        <input
          id="brandPersonality"
          name="brandPersonality"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.brandPersonality}
        />
        <label htmlFor="designPreferences">Design Preferences</label>
        <input
          id=" designPreferences"
          name="designPreferences"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.designPreferences}
        />
        <label htmlFor="colorPalette">Color Palette</label>
        <input
          id="colorPalette"
          name="colorPalette"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.colorPalette}
        />
        <button type="submit">FORMU BITIR</button>
      </form>
    </div>
  );
};

export default SignupForm;
