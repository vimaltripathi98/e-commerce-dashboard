import { Line } from "@ant-design/plots";


const SalesChart = () => {
  const config = {
    data: [
      { date: "2024-02-01", sales: 1000 },
      { date: "2024-02-02", sales: 1500 },
      { date: "2024-02-03", sales: 1200 },
    ],
    xField: "date",
    yField: "sales",
    smooth: true,
    point: { size: 5, shape: "circle" },
    tooltip: { showMarkers: false },
  };

  return <Line {...config} />;
};

export default SalesChart;
