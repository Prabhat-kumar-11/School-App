"use client";

import { useForm } from "react-hook-form";

const AddSchoolForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/school", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("School added successfully");
      } else {
        console.error("Failed to add school");
      }
    } catch (error) {
      console.error("Error adding school:", error);
    }
  };

  return (
    <div className="max-w-lg mt-8 mx-4 lg:mx-auto md:mx-auto">
      <div>
        <span className="text-2xl font-semibold">
          Enter your school details:
        </span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            id="name"
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address:
          </label>
          <input
            {...register("address", { required: "Address is required" })}
            type="text"
            id="address"
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
              errors.address ? "border-red-500" : ""
            }`}
          />
          {errors.address && (
            <p className="text-red-500 text-xs italic">
              {errors.address.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="city"
          >
            City:
          </label>
          <input
            {...register("city", { required: "City is required" })}
            type="text"
            id="city"
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
              errors.city ? "border-red-500" : ""
            }`}
          />
          {errors.city && (
            <p className="text-red-500 text-xs italic">{errors.city.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="state"
          >
            State:
          </label>
          <input
            {...register("state", { required: "State is required" })}
            type="text"
            id="state"
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
              errors.state ? "border-red-500" : ""
            }`}
          />
          {errors.state && (
            <p className="text-red-500 text-xs italic">
              {errors.state.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contact"
          >
            Contact:
          </label>
          <input
            {...register("contact", { required: "Contact is required" })}
            type="number"
            id="contact"
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
              errors.contact ? "border-red-500" : ""
            }`}
          />
          {errors.contact && (
            <p className="text-red-500 text-xs italic">
              {errors.contact.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image:
          </label>
          <input
            {...register("image", { required: "Image is required" })}
            type="file"
            id="image"
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
              errors.image ? "border-red-500" : ""
            }`}
          />
          {errors.image && (
            <p className="text-red-500 text-xs italic">
              {errors.image.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            id="email"
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddSchoolForm;
