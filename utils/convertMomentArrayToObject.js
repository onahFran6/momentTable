export const convertArrayToObject = ({
  momentResultArray,
  tableSupportHeader,
  arrDf,
  finalData,
}) => {
  const finalmomentResultArray = [];
  momentResultArray.unshift(arrDf);
  momentResultArray.push(finalData);

  for (let i = 0; i < momentResultArray.length; i++) {
    const obj = {
      SN: i + 1,
      VARIABLE: "", // Convert to letters A, B, C, ...
    };

    if (i % 2 === 0) {
      obj.VARIABLE = "BALANCING";
    }
    if (i % 2 !== 0) {
      obj.VARIABLE = "CARRY OVER";
    }
    if (i === 0) {
      obj.VARIABLE = "DF";
    }
    if (i === 1) {
      obj.VARIABLE = "FEM";
    }

    if (i === momentResultArray.length - 1) {
      obj.VARIABLE = "Total";
    }
    for (let j = 0; j < tableSupportHeader.length; j++) {
      obj[tableSupportHeader[j]] = momentResultArray[i][j];
    }

    finalmomentResultArray.push(obj);
  }

  return finalmomentResultArray;
};
