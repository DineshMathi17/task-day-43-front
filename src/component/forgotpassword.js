import React from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBInput
}
  from 'mdb-react-ui-kit';
import { useFormik } from "formik";
import { toast } from "react-toastify";

import * as yup from 'yup'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const userSchemaValidation = yup.object({
  email: yup.string().required("Please fill in your Email"),
})


export function Forgot() {
  const history = useHistory();
  const forgotdata = async ({ forgotmail }) => {
    try {
      const response = await fetch("http://localhost:7000/forgotpassword", {
        method: "POST",
        body: JSON.stringify(forgotmail),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json();
      console.log(data);
      history.push("/login")
      toast("link send to your gmail")

    } catch (error) {
      console.log(error)
      toast("error")
    }
  }
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: userSchemaValidation,
    onSubmit: (forgotmail) => {
      console.log(forgotmail)
      forgotdata({ forgotmail });
    }

  })
  return (
    <div className="bg-cl back">

      <h1>Forgotpassword</h1>

      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <form onSubmit={handleSubmit} className="text-areas">
          <MDBInput wrapperClass='mb-4'
            label='Email address'
            onBlur={handleBlur}
            value={values.email}
            onChange={handleChange}
            id='form1' type='email' name='email' />
          {touched.email && errors.email ? <p style={{ color: "crimson" }}>{errors.email}</p> : ""}


          <MDBBtn className="mb-4" type='submit'> Reset Password </MDBBtn>

        </form>

        <div className="text-center">
          <p className="mb-0">Don't have an account? <a href="/signup" class="text-white-50 fw-bold">Sign Up</a></p>

        </div>

      </MDBContainer>




    </div>
  );
}
