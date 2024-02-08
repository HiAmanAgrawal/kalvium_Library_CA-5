import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormField = ({ id, type, placeholder, register, errorMessage }) => {
  return (
    <div>
      <input
        id={id}
        className="formField"
        type={type}
        placeholder={placeholder}
        {...register}
      />
      {errorMessage && <span className="errorMessage">{errorMessage}</span>}
    </div>
  );
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const password = watch("password");

  const onSubmit = (data) => {
    if (!data.acceptTerms) {
      setShowErrorModal(true);
      setTimeout(() => setShowErrorModal(false), 3000);
      return;
    }
    console.log(data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      // Redirect logic here (e.g., history.push('/bookstore'))
    }, 3000);
  };

  return (
    <div className="formContainer">
      <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
        {isSubmitted && (
          <div className="successMessage">Registration successful</div>
        )}

        <FormField
          id="firstName"
          type="text"
          placeholder="First Name"
          register={register("firstName", {
            required: "Enter your first name.",
            minLength: {
              value: 3,
              message: "First name must be at least 3 characters.",
            },
            maxLength: {
              value: 30,
              message: "First name cannot exceed 30 characters.",
            },
          })}
          errorMessage={errors.firstName?.message}
        />

        <FormField
          id="lastName"
          type="text"
          placeholder="Last Name"
          register={register("lastName", {
            required: "Enter your last name.",
            minLength: {
              value: 3,
              message: "Last name must be at least 3 characters.",
            },
            maxLength: {
              value: 30,
              message: "Last name cannot exceed 30 characters.",
            },
          })}
          errorMessage={errors.lastName?.message}
        />

        <FormField
          id="email"
          type="email"
          placeholder="Email"
          register={register("email", {
            required: "Enter your email.",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format.",
            },
          })}
          errorMessage={errors.email?.message}
        />

        <FormField
          id="password"
          type="password"
          placeholder="Password"
          register={register("password", {
            required: "Enter your password.",
            minLength: {
              value: 10,
              message: "Password must be at least 10 characters.",
            },
            pattern: {
              value: /^(?=.*[!@#$%^&*])/,
              message: "Password must contain at least one special character.",
            },
          })}
          errorMessage={errors.password?.message}
        />

        <FormField
          id="repeatPassword"
          type="password"
          placeholder="Repeat Password"
          register={register("repeatPassword", {
            validate: (value) =>
              value === password || "The passwords do not match.",
          })}
          errorMessage={errors.repeatPassword?.message}
        />

        <div>
          <input
            type="checkbox"
            id="acceptTerms"
            {...register("acceptTerms", { required: true })}
          />
          <label htmlFor="acceptTerms">
            I accept the terms and conditions.
          </label>
        </div>

        <button className="formField" type="submit">
          Register
        </button>
      </form>

      {showErrorModal && (
        <div className="errorModal">Please accept the terms and conditions</div>
      )}
    </div>
  );
}
