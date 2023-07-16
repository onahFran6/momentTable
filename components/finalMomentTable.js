"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { momemtDistributionMethod } from "../utils/calculateMoment";

const FinalMomentTable = () => {
  const headList = ["YA", "AB", "BA", "BC", "CB", "CZ"];
  const { register, handleSubmit } = useForm();
  const [femColData, setFemColData] = useState([]);
  const [femSumData, setFemSumData] = useState([]);

  const contactForm = (ele) => {
    console.log("data Fem", {
      ele: ele,
    });
    const eleArr = Object.values(ele);
    const numDataArr = eleArr.map((dat) => {
      return Number(dat);
    });
    var first = [];
    var second = [];
    for (let index = 0; index < numDataArr.length; index++) {
      index < 6
        ? first.push(numDataArr[index])
        : second.push(numDataArr[index]);
    }
    // setDfValue(first);
    // setFemValue(second);

    calculateMoment(second, first);
    console.log("data DF", { first: first, second: second });
  };

  const calculateMoment = (femValue, dfValue) => {
    // console.log("data Fem", {
    //   femValue: femValue,
    //   dfValue: dfValue,
    // });
    const { finalData, sumFem } = momemtDistributionMethod(femValue, dfValue);
    // console.log("data Fem", {
    //   finalData: finalData,
    //   sumFem: sumFem,
    // });
    setFemColData(finalData);
    setFemSumData(sumFem);
  };

  return (
    <div className="App">
      {/* <div className="w-full  mt-8 mx-auto">
        <form onSubmit={handleSubmit((data) => contactForm(data))}>
          <div className="flex flex-row mx-1 mY-5">
            <div className="w-full px-1">
              <input
                id="p1"
                type="text"
                className="form-input w-full h-12 text-sm text-gray-800"
                placeholder="YA"
                required
                {...register(`2`, {
                  required: true,
                })}
              />
            </div>
            <div className="w-full pr-2">
              <input
                id="p2"
                type="text"
                className="form-input w-full h-12 text-sm text-gray-800"
                placeholder="AB"
                required
                {...register("first2", {
                  required: true,
                })}
              />
            </div>
            <div className="w-full px-1">
              <input
                id="p3"
                type="text"
                className="form-input w-full h-12 text-sm text-gray-800"
                placeholder="BA"
                required
                {...register("first3", {
                  required: true,
                })}
              />
            </div>
            <div className="w-full pr-2">
              <input
                id="p4"
                type="text"
                className="form-input w-full h-12 text-sm text-gray-800"
                placeholder="BC"
                required
                {...register("first4", {
                  required: true,
                })}
              />
            </div>
            <div className="w-full px-1">
              <input
                id="p5"
                type="text"
                className="form-input w-full h-12 text-sm text-gray-800"
                placeholder="CB"
                // required
                {...register("first5", {
                  // required: true,
                })}
              />
            </div>
            <div className="w-full pr-2">
              <input
                id="p6"
                type="text"
                className="form-input w-full h-12 text-sm text-gray-800"
                placeholder="CZ"
                // required
                {...register("first6", {
                  // required: true,
                })}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mt-6">
            <div className="w-full px-3">
              <p> Input the FEM below</p>
            </div>
          </div>
        </form>
        <form onSubmit={handleSubmit((data) => contactForm(data))}>
          <div className="flex flex-row mx-1 mY-5">
            <div className="w-full px-1">
              <input
                id="p1"
                type="text"
                className="form-input w-full h-12 text-sm text-gray-800"
                placeholder="YA"
                required
                {...register("first11", {
                  required: true,
                })}
              />
            </div>
            <div className="w-full pr-2">
              <input
                id="p2"
                type="text"
                className="form-input w-full h-12 text-sm text-gray-800"
                placeholder="AB"
                required
                {...register("first22", {
                  required: true,
                })}
              />
            </div>
            <div className="w-full px-1">
              <input
                id="p3"
                type="text"
                className="form-input w-full h-12 text-sm text-gray-800"
                placeholder="BA"
                required
                {...register("first33", {
                  required: true,
                })}
              />
            </div>
            <div className="w-full pr-2">
              <input
                id="p4"
                type="text"
                className="form-input w-full h-12 text-sm text-gray-800"
                placeholder="BC"
                required
                {...register("first44", {
                  required: true,
                })}
              />
            </div>
            <div className="w-full px-1">
              <input
                id="p5"
                type="text"
                className="form-input w-full h-12 text-sm text-gray-800"
                placeholder="CB"
                // required
                {...register("first55", {
                  // required: true,
                })}
              />
            </div>
            <div className="w-full pr-2">
              <input
                id="p6"
                type="text"
                className="form-input w-full h-12 text-sm text-gray-800"
                placeholder="CZ"
                // required
                {...register("first66", {
                  // required: true,
                })}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center py-5">
            <button className="btn text-white bg-[#12026d] hover:bg-green-700 ">
              Calculate Moment
            </button>
          </div>
        </form>
      </div> */}
      <div className="w-full table-auto">
        <h1>Final moment Data</h1>
      </div>
      <table className="w-full table-auto">
        <thead className="bg-white border-b-[6px]">
          <tr>
            {headList.map((ele, index) => (
              <td
                key={index}
                className="text-sm text-[#7D7D7D] font-semibold px-3 py-5 rounded-l-md"
              >
                {ele}
              </td>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white">
          <tr>
            {femSumData.map((ele, id) => (
              <td
                key={id}
                className="text-sm uppercase text-[#2A2A2A] px-3 py-4 border-2 border-gray-200"
              >
                {id && ele}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <table className="w-full table-auto">
        <thead className="bg-white border-b-[6px]">
          <tr>
            {headList.map((ele, index) => (
              <td
                key={index}
                className="text-sm text-[#7D7D7D] font-semibold px-3 py-5 rounded-l-md"
              >
                {ele}
              </td>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white">
          {femColData.map((ele, id) => (
            <tr key={id}>
              {headList.map((item, index) => (
                <td
                  key={index}
                  className="text-sm uppercase text-[#2A2A2A] px-3 py-4 border-2 border-gray-200"
                >
                  {femColData[id][`${index}`] ?? "N/A"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinalMomentTable;
