const landsCondition = (lands) => {
    let fertile = 0;
    for (let i = 0; i < lands.length; i++) {
      let rowFertile = 0;
      for (let j = 0; j < lands[i].length; j++) {
        if (lands[i][j] === "fertile") {
          rowFertile++;
        }
      }
      if (rowFertile > 1) {
        fertile += rowFertile;
      }
    }
    return fertile;
  };
  
  module.exports = { landsCondition };