"use client";

import { useForm } from "react-hook-form";

const BeamDetailsForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("===> form data", { data }); // Do something with the form data
  };
  console.log("===> restart");

  const numberOfSupportsOptions = [3, 4, 5, 6, 7, 8, 9, 10];
  const supportTypeOptions = ["Pin", "Roller", "Fixed"];

  return (
    <>
      {" "}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        <div className="w-full mb-4">
          <label htmlFor="numberOfSupports" className="block mb-2 text-lg">
            Number of Supports
          </label>
          <select
            id="numberOfSupports"
            name="numberOfSupports"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("numberOfSupports")}
          >
            {numberOfSupportsOptions.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>
        <div className="flex mb-4">
          <select
            name="leftSupport"
            className="mr-2 p-2 border border-gray-300 rounded-md"
            {...register("leftSupport")}
          >
            <option value="pin">Pin</option>
            <option value="roller">Roller</option>
            <option value="fixed">Fixed</option>
          </select>

          <select
            name="rightSupport"
            className="ml-2 p-2 border border-gray-300 rounded-md"
            {...register("rightSupport")}
          >
            <option value="pin">Pin</option>
            <option value="roller">Roller</option>
            <option value="fixed">Fixed</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default BeamDetailsForm;
