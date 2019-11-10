import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Formik} from "formik";
import AuthService from "../../../services/auth/AuthService";
import {connect} from "react-redux";
import {push} from "react-router-redux";
import {ROUTES} from "../../../constants/routes";
import {setTitle} from "../../../redux/actions/main";

class LoginController extends Component {

    componentDidMount() {
        this.props.dispatch(setTitle("Log in"))
    }

    onSubmit(values, {setSubmitting}) {
        AuthService.login(values)
            .then(r => this.props.dispatch(push(ROUTES.H)))
            .catch(() => alert("Error"))
            .finally(() => setSubmitting(false))
    }

    render() {
        return (
            <div className="container">
                <div className="gap_100"/>
                <div className="row">
                    <div className="column col-lg-4 col-sm-11 offset-1">
                        <h6> Welcome back </h6>
                        <h5>We are glad to see you here!</h5>
                    </div>
                    <div className="column col-lg-6 col-sm-11 offset-1">
                        <Formik
                            initialValues={{email: 'a@a.com', password: 'password'}}
                            validate={values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                }
                                return errors;
                            }}
                            onSubmit={this.onSubmit.bind(this)}
                        >
                            {({
                                  values,
                                  errors,
                                  touched,
                                  handleChange,
                                  handleBlur,
                                  handleSubmit,
                                  isSubmitting,
                                  /* and other goodies */
                              }) => (
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    {errors.email && touched.email && errors.email}
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    {errors.password && touched.password && errors.password}
                                    <button type="submit" disabled={isSubmitting}>
                                        Submit
                                    </button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>

            </div>
        );
    }
}

LoginController.propTypes = {};

export default connect()(LoginController);
