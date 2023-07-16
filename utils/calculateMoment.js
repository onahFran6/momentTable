export const momemtDistributionMethod = (arrFem = [], arrDf = []) => {
  var finalData = [];
  finalData.push(arrFem);

  const recurringFemData = (arrFem, arrDf) => {
    //balancing fem
    var allFemDataArr = [];
    for (let i = 0; i < arrFem.length; i += 2) {
      let sumOfFem = -(arrFem[i] + arrFem[i + 1]);
      let leftValue = sumOfFem * arrDf[i];
      let rightValue = sumOfFem * arrDf[i + 1];
      allFemDataArr.push(leftValue, rightValue);
    }
    // console.log(`balancing `, {
    //   allFemDataArr: allFemDataArr,
    //   arrFem: arrFem,
    // });

    // console.log("balancing", allFemDataArr);

    finalData.push(allFemDataArr);

    //
    // crossover
    const allFemDataArrAfterDivision = allFemDataArr.map((data) => {
      return data / 2;
    });

    var allFemDataArrDivided = [];
    for (let i = 1; i < allFemDataArrAfterDivision.length - 1; i += 2) {
      let leftValue = allFemDataArrAfterDivision[i];
      let rightValue =
        allFemDataArrAfterDivision[i + 1 === undefined ? 0 : i + 1];
      allFemDataArrDivided.push(rightValue, leftValue);
    }

    allFemDataArrDivided.push(0);
    allFemDataArrDivided.unshift(0);

    finalData.push(allFemDataArrDivided);

    // console.log("carryOver", {
    //   over: allFemDataArrDivided,
    // });

    return allFemDataArrDivided;
  };

  const finalFemData = (arrFem, arrDf) => {
    //balancing fem
    var allFemDataArr = [];
    for (let i = 0; i < arrFem.length; i += 2) {
      let sumOfFem = -(arrFem[i] + arrFem[i + 1]);
      let leftValue = sumOfFem * arrDf[i];
      let rightValue = sumOfFem * arrDf[i + 1];
      allFemDataArr.push(leftValue, rightValue);
    }

    finalData.push(allFemDataArr);
    return allFemDataArr;
  };

  var result = recurringFemData(arrFem, arrDf);

  for (let i = 0; i < 30; i++) {
    let absDataArr = result.map((dat) => {
      return Math.abs(dat);
    });
    let maxValue = Math.max(...absDataArr);
    i === 39 && console.log("maxValue ", maxValue);

    if (maxValue > 0.002) {
      // console.log("go");
      result = recurringFemData(result, arrDf);
    }
  }

  const resultFinal = finalFemData(result, arrDf);

  //   console.log("final", finalData);

  const totalNumData = finalData[0].length;

  var sumFem = [];
  for (let index = 0; index < totalNumData; index++) {
    var sumIndividual = 0;
    for (let i = 0; i < finalData.length; i++) {
      sumIndividual += finalData[i][index];
    }

    sumFem.push(sumIndividual);
  }

  // console.log("finalSum", sumFem);

  return { finalData, sumFem };
};
