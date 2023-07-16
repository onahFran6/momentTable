"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { momemtDistributionMethod } from "../../utils/calculateMoment";
import { convertArrayToObject } from "../../utils/convertMomentArrayToObject";
import MomentTableComponent from "@components/momentTableComponent";
import { useRouter, useSearchParams } from "next/navigation";
import { FiDownload } from "react-icons/fi";
import { CSVLink } from "react-csv";

const BeamMomentTable = () => {
  const { register, handleSubmit } = useForm();
  const [femColData, setFemColData] = useState([]);
  const [femSumData, setFemSumData] = useState([]);
  const [tableheaderFinal, setTableHeaderFinal] = useState([]);
  const [isShowtable, setIsShowtable] = useState(false);
  const [csvHeader, setCsvHeader] = useState([]);

  const searchParams = useSearchParams();
  const router = useRouter();

  const numOfSupport = Number(searchParams.get("numberOfSupports"));

  console.log("===>>> state", { router, numOfSupport });

  if (numOfSupport === undefined || numOfSupport === null) {
    router.push("/");
  }

  const [tableHeaderValue, setTableHeaderValue] = useState([]);
  const tableHeaderListTwoSupport = ["YA", "AB", "BA", "BZ"];
  const tableHeaderListThreeSupport = ["YA", "AB", "BA", "BC", "CB", "CZ"];
  const tableHeaderListFourSupport = [
    "YA",
    "AB",
    "BA",
    "BC",
    "CB",
    "CD",
    "DC",
    "DZ",
  ];
  const tableHeaderListFiveSupport = [
    "YA",
    "AB",
    "BA",
    "BC",
    "CB",
    "CD",
    "DC",
    "DE",
    "ED",
    "EZ",
  ];

  useEffect(() => {
    numOfSupport === 2
      ? setTableHeaderValue(tableHeaderListTwoSupport)
      : numOfSupport === 3
      ? setTableHeaderValue(tableHeaderListThreeSupport)
      : numOfSupport === 4
      ? setTableHeaderValue(tableHeaderListFourSupport)
      : numOfSupport === 5
      ? setTableHeaderValue(tableHeaderListFiveSupport)
      : setTableHeaderValue(tableHeaderListTwoSupport);
  }, [numOfSupport]);

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
      index < numDataArr.length / 2
        ? first.push(numDataArr[index])
        : second.push(numDataArr[index]);
    }

    calculateMoment(first, second, tableHeaderValue);
    setIsShowtable(true);
    // console.log("data DF", { first: first, second: second });
  };

  const calculateMoment = (femValue, dfValue, tableSupportHeader) => {
    // console.log("data Fem", {
    //   femValue: femValue,
    //   dfValue: dfValue,
    // });
    const { finalData, sumFem } = momemtDistributionMethod(femValue, dfValue);

    const momentResultArray = convertArrayToObject({
      momentResultArray: finalData,
      tableSupportHeader,
      arrDf: dfValue,
      finalData: sumFem,
    });

    const tableFinal = ["SN", "VARIABLE", ...tableSupportHeader];
    const totalMoment = [momentResultArray[momentResultArray.length - 1]];

    const csvHeaderArray = tableFinal.map((ele) => {
      const newHeader = {
        label: ele,
        key: ele,
      };
      return newHeader;
    });

    setCsvHeader(csvHeaderArray);
    setTableHeaderFinal(tableFinal);
    setFemColData(momentResultArray);
    setFemSumData(totalMoment);
  };

  const roundData = (number, decimalPlaces) => {
    const factorOfTen = Math.pow(10, decimalPlaces);
    return Math.round(number * factorOfTen) / factorOfTen;
  };

  return (
    <div className="flex-center flex-col flex h-screen  py-2">
      <section className="flex-center flex-col ">
        {/* form component */}
        <div className=" flex flex-wrap   justify-center mx-auto ">
          <form
            onSubmit={handleSubmit((data) => contactForm(data))}
            className="flex-center flex-col"
          >
            <div className="flex flex-col mt-2">
              <div className="flex justify-center ">
                <p className=" text-gray-800 ">
                  {" "}
                  <b> Input The Distribution Factor(DF) Below </b>{" "}
                </p>
              </div>

              <div className="grid grid-cols-4 justify-between sm:grid sm:grid-cols-4 md:grid md:grid-cols-6 lg:flex lg:flex-row lg:flex-wrap ">
                {tableHeaderValue.map((data, i) => (
                  <div className="   w-28  m-1  justify-center">
                    {" "}
                    <label className=" w-16 text-gray-700 font-bold text-sm text-center justify-center">
                      {`${data} :`}
                    </label>
                    <input
                      key={i}
                      id={`${data}`}
                      type="number"
                      step="any"
                      className=" w-16 sm:w-20 text-center text-sm text-gray-800 bg-[#edf0f7]  font-semibold  border-2 border-[#dbf7db] rounded-2xl  hover:bg-orange-700 "
                      placeholder={`${data}`}
                      required
                      {...register(`${data}`, {
                        required: true,
                      })}
                    />{" "}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col mt-2">
              <div className="flex justify-center ">
                <p className=" text-gray-800 ">
                  {" "}
                  <b> Input The Fixed End Moment(FEM) Below</b>
                </p>
              </div>

              <div className="grid grid-cols-4 justify-between sm:grid sm:grid-cols-4 md:grid md:grid-cols-6 lg:flex lg:flex-row lg:flex-wrap ">
                {tableHeaderValue.map((data, i) => (
                  <div className="  w-28  m-1  justify-center">
                    {" "}
                    <label className=" w-16 text-gray-700 font-bold text-sm text-center justify-center">
                      {`${data} :`}
                    </label>
                    <input
                      key={i}
                      id={`${data}`}
                      type="number"
                      step="any"
                      className=" w-16 sm:w-20 text-center text-sm text-gray-800 bg-[#edf0f7]  font-semibold  border-2 border-[#dbf7db] rounded-2xl  hover:bg-orange-700 "
                      placeholder={`${data}`}
                      required
                      {...register(`${i}`, {
                        required: true,
                      })}
                    />{" "}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex  justify-center mt-2">
              <button className=" px-2 m-1 text-center text-white bg-[#e9ae3a] hover:bg-green-700  rounded-2xl">
                Generate Moment Distributon Table
              </button>
            </div>
          </form>
        </div>
        {/*  */}

        {isShowtable && (
          <div className=" flex flex-col justify-between  my-4 ">
            <div className=" flex flex-row justify-between h-16 ">
              <div className=" justify-center  ml-4 ">
                <h1 className="p-4  font-bold rounded px-1 text-indigo-800 ">
                  Moment Distribution Table
                </h1>
              </div>
              <div className=" justify-center mr-4  ">
                <h1 className="p-4  flex flex-row font-bold rounded px-1 text-indigo-800 ">
                  <CSVLink data={femColData} headers={csvHeader}>
                    <FiDownload />
                  </CSVLink>{" "}
                </h1>
              </div>
            </div>

            <div className=" flex flex-col justify-between h-64">
              <main className="overflow-auto ">
                <MomentTableComponent
                  tableheaderFinal={tableheaderFinal}
                  femColData={femColData}
                />
              </main>
            </div>
          </div>
        )}

        {isShowtable && (
          <div className="flex flex-col  mx-3 h-24 md:h-20 overflow-x-auto">
            <div className="justify-center  mt-1">
              <h1 className="font-bold rounded text-center ">
                Final Support Moment
              </h1>{" "}
            </div>
            <table className=" justify-center ">
              <thead className="bg-white border-b-[2px] ">
                <tr>
                  {tableheaderFinal.map((ele, index) => (
                    <td
                      key={index}
                      className="text-sm text-center text-[#7D7D7D] font-bold rounded  bg-cyan-100 "
                    >
                      {ele}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white">
                {femSumData.map((ele, id) => (
                  <tr
                    key={`B${id}`}
                    className={`${
                      id % 2 === 0 ? "bg-gray-100" : ""
                    } hover:bg-yellow-200 justify-center`}
                  >
                    {tableheaderFinal.map((item, index) => (
                      <td
                        key={index}
                        className={
                          "text-sm uppercase text-[#2A2A2A]   justify-center text-center  hover:bg-orange-700"
                        }
                      >
                        <label
                          className={`${
                            index < 2
                              ? " text-[#2A2A2A] font-semibold text-center"
                              : " text-center"
                          } } `}
                        >
                          {index < 2
                            ? femSumData[id][`${tableheaderFinal[index]}`]
                            : roundData(
                                femSumData[id][`${tableheaderFinal[index]}`],
                                4
                              ) ?? "N/A"}
                        </label>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
};

export default BeamMomentTable;
