import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

function App() {
  const data = {
    labels: ["Jan", "Feb", "Mar"],
    datasets: [
      {
        label: "Sales",
        data: [10, 20, 30],
        backgroundColor: ["blue", "green", "orange"]
      },
    ],
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>📊 My Dashboard</h1>

      <div style={{ display: "flex", justifyContent: "space-around", margin: "20px" }}>
        <div style={{ background: "#f2f2f2", padding: "15px", borderRadius: "10px" }}>
          <h3>Total Sales</h3>
          <p>₹60</p>
        </div>

        <div style={{ background: "#f2f2f2", padding: "15px", borderRadius: "10px" }}>
          <h3>Users</h3>
          <p>120</p>
        </div>

        <div style={{ background: "#f2f2f2", padding: "15px", borderRadius: "10px" }}>
          <h3>Orders</h3>
          <p>45</p>
        </div>
      </div>

      <div style={{ width: "400px", margin: "auto" }}>
        <Bar data={data} />
      </div>
    </div>
  );
}
return (
  <div style={{ width: '700px', margin: 'auto' }}>
    <h2>Monthly Sales Report</h2>
    <Bar data={data} />
  </div>
);
export default App;