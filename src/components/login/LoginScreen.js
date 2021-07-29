import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import ErrorMsg from "../errors/ErrorMsg";
import styles from "./LoginScreen.module.css";
import axios from "axios";

export const LoginScreen = ({ history }) => {
  const [errorMsg, setErrorMsg] = useState("");

  const handleToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/home");
    }
  };

  useEffect(() => {
    handleToken();
  });

  return (
    <div id={styles.container} className="container mt-3">
      <h1>Login</h1>
      <div className={styles.container}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = <ErrorMsg text="Email is required" />;
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = <ErrorMsg text="Invalid email adress" />;
            }

            if (!values.password) {
              errors.password = <ErrorMsg text="Password is required" />;
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            var data = JSON.stringify({
              email: values.email,
              password: values.password,
            });

            var config = {
              method: "post",
              url: "http://challenge-react.alkemy.org/",
              headers: {
                "Content-Type": "application/json",
              },
              data: data,
            };

            axios(config)
              .then(function (response) {
                localStorage.setItem("token", response.data.token);
                history.push("/home");
              })
              .catch(function (error) {
                setErrorMsg(error.response.data.error);
                setTimeout(() => {
                  setErrorMsg("");
                  setSubmitting(false);
                }, 5000);
              });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <div className={styles.cardLogin}>
              <form onSubmit={handleSubmit}>
                <div className={styles.cardInfo}>
                  <div>
                    <label>Email</label>
                  </div>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="challenge@alkemy.org"
                  />
                </div>
                {errors.email && touched.email && errors.email}
                <div className={styles.cardInfo}>
                  <div>
                    <label>Password</label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="react"
                  />
                </div>
                <div className={styles.errors}>
                  {errors.password && touched.password && errors.password}
                </div>
                <div className={styles.btnSubmit}>
                  <button
                    id={styles.btnSubmit}
                    className="btn btn-primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </div>

                <div className="errorContainer">
                  {errorMsg && <ErrorMsg text={errorMsg} />}
                </div>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};
