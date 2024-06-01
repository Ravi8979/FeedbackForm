import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './FeedbackForm.css';

function FeedbackForm({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      country: '+91',
      hostService: [],
      beverageQuality: [],
      cleanliness: [],
      diningExperience: [],
      feedback: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      mobile: Yup.string()
        .matches(/^[0-9]+$/, 'Must be only digits')
        .min(10, 'Must be at least 10 digits')
        .max(15, 'Must be 15 digits or less')
        .required('Required'),
      feedback: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      onSubmit(values);
      console.log(values);
    },
  });

  return (
    <div className="maincontainer">
    <h1>Screen 1</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}

        <label htmlFor="country">Country</label>
        <select
          id="country"
          name="country"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.country}
        >
          <option value="+91">+91</option>
          <option value="+01">+01</option>
          <option value="+81">+81</option>
        </select>

        <label htmlFor="mobile">Mobile</label>
        <input
          id="mobile"
          name="mobile"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mobile}
        />
        {formik.touched.mobile && formik.errors.mobile && <div>{formik.errors.mobile}</div>}

        {/* Quality of Service */}
        <label>Please rate the Quality of the service you received from your host*</label>
        <div className="checkbox-container">
          {['Excellent', 'Good', 'Fair', 'Bad'].map((option, index) => (
            <label key={index} htmlFor={`hostService${index}`}>
              <input
                type="checkbox"
                id={`hostService${index}`}
                name="hostService"
                value={option}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.hostService.includes(option)}
              />
              {option}
            </label>
          ))}
        </div>

        {/* Quality of Beverage */}
        <label>Please rate the Quality of your Beverage.*</label>
        <div className="checkbox-container">
          {['Excellent', 'Good', 'Fair', 'Bad'].map((option, index) => (
            <label key={index} htmlFor={`beverageQuality${index}`}>
              <input
                type="checkbox"
                id={`beverageQuality${index}`}
                name="beverageQuality"
                value={option}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.beverageQuality.includes(option)}
              />
              {option}
            </label>
          ))}
        </div>

        {/* Cleanliness */}
        <label>Was our restaurant clean?*</label>
        <div className="checkbox-container">
          {['Excellent', 'Good', 'Fair', 'Bad'].map((option, index) => (
            <label key={index} htmlFor={`cleanliness${index}`}>
              <input
                type="checkbox"
                id={`cleanliness${index}`}
                name="cleanliness"
                value={option}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.cleanliness.includes(option)}
              />
              {option}
            </label>
          ))}
        </div>

        {/* Dining Experience */}
        <label>Please rate your Overall dining Experience.*</label>
        <div className="checkbox-container">
          {['Excellent', 'Good', 'Fair', 'Bad'].map((option, index) => (
            <label key={index} htmlFor={`diningExperience${index}`}>
              <input
                type="checkbox"
                id={`diningExperience${index}`}
                name="diningExperience"
                value={option}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.diningExperience.includes(option)}
              />
              {option}
            </label>
          ))}
        </div>

        <label htmlFor="feedback">Feedback</label>
        <textarea
          id="feedback"
          name="feedback"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.feedback}
        />
        {formik.touched.feedback && formik.errors.feedback && <div>{formik.errors.feedback}</div>}
        <br />
        <button style={{ background: 'green' }} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
