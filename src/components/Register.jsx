import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Register() {
  // Initialize form methods and state variables using react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  
  // State variable to manage form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Get the value of the 'password' field
  const password = watch("password");

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log(data); // Log form data to the console as mentioned in CA-5
    setIsSubmitted(true); // Set isSubmitted to true to show success message
    // Reset isSubmitted after 3 seconds and redirect to home page
    setTimeout(() => {
      setIsSubmitted(false);
      window.location.href = "./";
    }, 3000);
  };

  return (
    <div className="formContainer h-auto flex justify-center rounded-lg">
      <form className="overflow-y-scroll registerForm p-10 w-5/6 md:w-2/6 shadow-md m-4 bg-white" onSubmit={handleSubmit(onSubmit)}>
        {isSubmitted && (
          // Show success message if form is submitted successfully
          <div className="successMessage text-green-500">Registration successful.You will be automatically redirected in 3 seconds.</div>
        )}

        {/* First Name field */}
        <div className="mb-4">
          <input
            className="formField w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder="First Name"
            {...register("firstName", {
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
          />
          {errors.firstName && (
            <span className="errorMessage text-red-500">{errors.firstName.message}</span>
          )}
        </div>

        {/* Last Name field */}
        <div className="mb-4">
          <input
            className="formField w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder="Last Name"
            {...register("lastName", {
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
          />
          {errors.lastName && (
            <span className="errorMessage text-red-500">{errors.lastName.message}</span>
          )}
        </div>

        {/* Email field */}
        <div className="mb-4">
          <input
            className="formField w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Enter your email.",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format.",
              },
            })}
          />
          {errors.email && (
            <span className="errorMessage text-red-500">{errors.email.message}</span>
          )}
        </div>

        {/* Password field */}
        <div className="mb-4">
          <input
            className="formField w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="password"
            placeholder="Password"
            {...register("password", {
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
          />
          {errors.password && (
            <span className="errorMessage text-red-500">{errors.password.message}</span>
          )}
        </div>

        {/* Repeat Password field */}
        <div className="mb-4">
          <input
            className="formField w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="password"
            placeholder="Repeat Password"
            {...register("repeatPassword", {
              validate: (value) =>
                value === password || "The passwords do not match.",
            })}
          />
          {errors.repeatPassword && (
            <span className="errorMessage text-red-500">{errors.repeatPassword.message}</span>
          )}
        </div>

        {/* Accept Terms and Conditions checkbox */}
        <div className="mb-4">
          <input
            type="checkbox"
            id="tnc"
            {...register("acceptTerms", { required: true })}
          />
          <label htmlFor="tnc">I accept the <a href="https://github.com/HiAmanAgrawal/kalvium_Library_CA-5/blob/main/README.md"><u>terms and conditions.</u></a></label>
        </div>
        {errors.acceptTerms && (
          // Show error message if terms and conditions are not accepted
          <div className="errorContainer bg-red-100 text-red-500 px-4 py-2 rounded-md mt-4">
            Please accept the terms and conditions
          </div>
        )}

        {/* Submit button */}
        <div className="flex justify-center">
          <button className="formField bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
