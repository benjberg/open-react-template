import React from "react";
import Plot from "react-plotly.js";

const BetStats = () => (
  <Plot
    data={[
      {
        x: [1, 2, 4, 6],
        y: [2, 6, 3, 4, 6, 5],
        type: "scatter",
        mode: "lines+markers",
        marker: { color: "purple" },
      },
    ]}
    layout={{
      autosize: false,
      height: 250,
      title: "History",
      plot_bgcolor: "transparent",
      paper_bgcolor: "transparent",
      margin: {
        l: 25,

        r: 0,

        b: 25,

        t: 40,

        pad: 5,
      },
      xaxis: {
        showgrid: false,
        color: "#00FF00",
      },
      yaxis: {
        showgrid: false,
        showline: true,
        color: "#00FF00",
      },
    }}
  />
);
export default BetStats;
