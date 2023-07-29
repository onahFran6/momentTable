"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const BeamDetailsForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = (data) => {
    console.log("===> form data", { data }); // Do something with the form data
    const numberOfSupports = data.numberOfSupports;
    router.push(`/table?numberOfSupports=${numberOfSupports}`);
  };

  console.log("===> restart");

  const numberOfSupportsOptions = [3, 4, 5];
  const supportTypeOptions = ["Pin", "Roller", "Fixed"];

  return (
    <>
      {" "}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center  "
      >
        <div className="grid grid-cols-1 items-center mb-4">
          <div className="grid grid-cols-2 items-center ">
            <label htmlFor="numberOfSupports" className="block  text-lg ">
              Total Number of Support of beam :
            </label>

            <select
              id="numberOfSupports"
              name="numberOfSupports"
              className="border border-gray-300 rounded-md w-1/2 "
              {...register("numberOfSupports", { required: true })}
            >
              <option value="" disabled hidden>
                Choose
              </option>
              {numberOfSupportsOptions.map((data, index) => (
                <option key={index} value={data}>
                  {data}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* <div className=" grid grid-cols-2 gap-2">
          <div className="grid grid-cols-2 gap-4">
            <label htmlFor="numberOfSupports" className="block mb-2 text-lg ">
              left Support :
            </label>
            <select
              name="leftSupport"
              className="mr-2 p-2 border border-gray-300 rounded-md"
              {...register("leftSupport")}
            >
              <option value="pin">Pin</option>
              <option value="roller">Roller</option>
              <option value="fixed">Fixed</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label htmlFor="numberOfSupports" className="block mb-2 text-lg ">
              Number of Supports :
            </label>
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
        </div> */}

        <div className="grid grid-cols-1 gap-4 items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-xl hover:bg-yellow-200"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default BeamDetailsForm;
