import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";

const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  fruit: Yup.object().shape({
    label: Yup.string().required(),
    value: Yup.string().required(),
  }),
});

const options = [
  { value: "", label: "" },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const TutFormik = () => {
  const [errorFirstName, setErrorFirstName] = useState("");

  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          fruit: { value: "", label: "" },
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ formik, touched, errors, values, setFieldValue }) => (
          <Form>
            <label htmlFor="fullname">FullName</label>
            <Field name="fullname" />
            <Select
              options={options}
              value={values.fruit}
              onChange={(fruit) => setFieldValue("fruit", fruit)}
            />
            {errors.fruit && touched.fruit && <p>{errors.fruit.label}</p>}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TutFormik;
