import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const password = watch("password");

  const onSubmit = (data) => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      window.location.href = "./";
    }, 3000);
  };

  return (
    <div className="formContainer h-auto flex justify-center rounded-lg   ">
      <form className="overflow-y-scroll registerForm p-10 w-2/6 shadow-md m-4 bg-white" onSubmit={handleSubmit(onSubmit)}>
        {isSubmitted && (
          <div className="successMessage text-green-500">Registration successful</div>
        )}

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

        <div className="mb-4">
          <input
            type="checkbox"
            id="tnc"
            {...register("acceptTerms", { required: true })}
          />
          <label for="tnc">I accept the <a href="https://github.com/HiAmanAgrawal/kalvium_Library_CA-5/blob/main/README.md"><u>terms and conditions.</u></a></label>
        </div>
            {console.log(errors)}
        {errors.acceptTerms && (
          <div className="errorContainer bg-red-100 text-red-500 px-4 py-2 rounded-md mt-4">
            Please accept the terms and conditions
          </div>
        )}

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
