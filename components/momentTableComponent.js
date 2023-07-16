"use client";

import { useEffect, useRef } from "react";
import { BsArrowDownLeft, BsArrowDownRight } from "react-icons/bs";

const MomentTableComponent = ({ tableheaderFinal, femColData }) => {
  const tableRef = useRef(null);

  useEffect(() => {
    const table = tableRef.current;
    const container = table.parentNode;

    const handleScroll = () => {
      if (container.scrollLeft + container.clientWidth >= table.offsetWidth) {
        container.scrollLeft = 0;
      } else if (container.scrollLeft === 0) {
        container.scrollLeft = table.offsetWidth;
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const roundData = (number, decimalPlaces) => {
    const factorOfTen = Math.pow(10, decimalPlaces);
    return Math.round(number * factorOfTen) / factorOfTen;
  };
  return (
    <div className="flex flex-col justify-center mx-2  ">
      <div ref={tableRef} className="inline-block sticky top-0">
        <table className="justify-center min-w-full sticky top-0">
          <thead className="bg-white sticky top-0">
            <tr>
              {tableheaderFinal.map((ele, index) => (
                <th
                  key={index}
                  className="text-sm text-[#7D7D7D] font-semibold rounded px-1 py-1 border-2 border-gray-200 bg-cyan-100"
                >
                  <b>{ele}</b>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white">
            {femColData.map((ele, id) => (
              <>
                {ele.VARIABLE === "CARRY OVER" ? (
                  <tr
                    key={`A${id}`}
                    className={`${
                      id % 2 === 0 ? "bg-gray-100" : ""
                    } hover:bg-yellow-200`}
                  >
                    {tableheaderFinal.map((item, index) => {
                      const tableheaderFinalLengthLeft =
                        tableheaderFinal.length - 2;
                      const tableheaderFinalLengthRight =
                        tableheaderFinal.length - 1;
                      const isArrowLeft =
                        index > 2 &&
                        index % 2 !== 0 &&
                        index < tableheaderFinalLengthLeft;
                      const isArrowRight =
                        index > 2 &&
                        index % 2 === 0 &&
                        index < tableheaderFinalLengthRight;

                      const isArrow = isArrowLeft || isArrowRight;
                      // console.log("===>>> COM ", {
                      //   tableheaderFinalLengthLeft,
                      //   isArrowLeft,
                      //   tableheaderFinalLengthRight,
                      //   isArrowRight,
                      // });
                      return (
                        <>
                          <td
                            key={index}
                            className="text-sm uppercase text-[#2A2A2A] px-1 py-1 border-2 border-gray-200  hover:bg-orange-700"
                          >
                            <label className="flex items-center ">
                              {isArrow && (
                                <p className=" w-1/5 ">
                                  {isArrowRight && (
                                    <BsArrowDownRight className="h-auto  mr-0 " />
                                  )}
                                </p>
                              )}

                              <p
                                className={` flex items-center text-center flex-grow w-3/5 justify-center ${
                                  index < 2
                                    ? "text-[#2A2A2A] font-semibold  text-center"
                                    : ""
                                } `}
                              >
                                {index < 2
                                  ? ele[`${tableheaderFinal[index]}`]
                                  : roundData(
                                      ele[`${tableheaderFinal[index]}`],
                                      4
                                    ) ?? "N/A"}
                              </p>
                              {isArrow && (
                                <p className="  w-1/5 ">
                                  {isArrowLeft && (
                                    <BsArrowDownLeft className="h-auto  mr-0 font-bold bold" />
                                  )}
                                </p>
                              )}
                            </label>
                          </td>
                        </>
                      );
                    })}
                  </tr>
                ) : (
                  <tr
                    key={`A${id}`}
                    className={`${
                      id % 2 === 0 ? "bg-gray-100" : ""
                    } hover:bg-yellow-200`}
                  >
                    {tableheaderFinal.map((item, index) => {
                      return (
                        <>
                          <td
                            key={index}
                            className="text-sm uppercase text-[#2A2A2A] px-1 py-2 border-2 text-center border-gray-200  hover:bg-orange-700"
                          >
                            <label
                              className={`${
                                index < 2
                                  ? " text-[#2A2A2A] font-semibold text-center"
                                  : "" //bg-orange-100 rounded-2xl  border-2 border-red-200
                              } }`}
                            >
                              {index < 2
                                ? ele[`${tableheaderFinal[index]}`]
                                : roundData(
                                    ele[`${tableheaderFinal[index]}`],
                                    4
                                  ) ?? "N/A"}
                            </label>
                          </td>
                        </>
                      );
                    })}
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MomentTableComponent;
