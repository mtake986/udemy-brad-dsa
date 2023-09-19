function analyzeCarMileage(cars) {
  const analysis = {};
  cars.map((car) => {
    analysis["totalMileage"] = analysis["totalMileage"]
      ? analysis["totalMileage"] + car.mileage
      : car.mileage;
    analysis["highestMileageCar"] = analysis["highestMileageCar"]
      ? analysis["highestMileageCar"].mileage < car.mileage
        ? car
        : analysis["highestMileageCar"]
      : car;
    analysis["lowestMileageCar"] = analysis["lowestMileageCar"]
      ? analysis["lowestMileageCar"].mileage > car.mileage
        ? car
        : analysis["lowestMileageCar"]
      : car;
  });

  analysis["averageMileage"] = Number(
    (analysis["totalMileage"] / cars.length).toFixed(2)
  );

  return analysis;
}

module.exports = analyzeCarMileage;
