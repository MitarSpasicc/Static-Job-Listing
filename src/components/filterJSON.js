import dataJson from "./data.json";

const filteredData = dataJson.map((data) => {
  const features = [
    data.role,
    ...(data.languages || []),
    ...(data.tools || []),
  ];

  data.features = features;

  return data;
});

export default filteredData;
