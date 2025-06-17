import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../../config/config";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";

const BarChartGraph = ({ data }) => {
  const chartSetting = {
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-10px, 0)",
      },
    },
  };

  const valueFormatter = (value) => `${value}`;

  return (
    <BarChart
      height={500}
      dataset={data}
      xAxis={[{
        id: "barCategories",
        dataKey: "year",
        scaleType: "band",
        label: "Placement Years",
      }]}
      yAxis={[{ label: "Number Of Students Placed" }]}
      series={[
        { dataKey: "Post Graduate", label: "Post Graduate", valueFormatter },
        { dataKey: "Under Graduate", label: "Under Graduate", valueFormatter },
        { dataKey: "Total", label: "Total", valueFormatter },
      ]}
      grid={{ vertical: true }}
      {...chartSetting}
    />
  );
};

export default function PGraph() {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const fetchPlacementData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/admin/graph`);
        const formattedData = response.data.map(item => ({
          year: item.year,
          "Post Graduate": item.postGraduate,
          "Under Graduate": item.underGraduate,
          Total: item.total,
        }));
        setGraphData(formattedData);
      } catch (error) {
        console.error("Error fetching placement data:", error);
      }
    };

    fetchPlacementData();
  }, []);

  return (
    <Container style={{ textAlign: "center",width:"85%",margin:"auto"}} className="pl-graph" fluid>
      <div className="p-graph-container">
        {graphData.length > 0 ? (
          <BarChartGraph data={graphData} />
        ) : (
          <p>Loading graph data...</p>
        )}
      </div>
    </Container>
  );
}
