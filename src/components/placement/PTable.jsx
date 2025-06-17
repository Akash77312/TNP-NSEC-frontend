const PTable = () => {
  const yearTempData = [
    {
      Year: "2024",
      BTechOnRoll: 300,
      BTechPlaced: 270,
      TotalOffers: 320,
      AveragePackage: "6.2",
      PackageRange: "3-20",
    },
    {
      Year: "2023",
      BTechOnRoll: 310,
      BTechPlaced: 250,
      TotalOffers: 290,
      AveragePackage: "5.8",
      PackageRange: "3-18",
    },
    {
      Year: "2022",
      BTechOnRoll: 290,
      BTechPlaced: 240,
      TotalOffers: 275,
      AveragePackage: "5.3",
      PackageRange: "3-15",
    },
  ];

  return (
    <div className="p-table" style={{ margin: "40px auto", width: "90%" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        <caption style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "10px" }}>
          Year Wise Placement Record
        </caption>
        <thead style={{ backgroundColor: "#f0f0f0" }}>
          <tr>
            <th>Year</th>
            <th>BTech on roll</th>
            <th>BTech placed</th>
            <th>Total Offers</th>
            <th>Average Package (LPA)</th>
            <th>Package Range (LPA)</th>
          </tr>
        </thead>
        <tbody>
          {[...yearTempData].reverse().map((item) => (
            <tr key={item.Year}>
              <td>{item.Year}</td>
              <td>{item.BTechOnRoll}</td>
              <td>{item.BTechPlaced}</td>
              <td>{item.TotalOffers === 0 ? "--" : item.TotalOffers}</td>
              <td>{item.AveragePackage}</td>
              <td>{item.PackageRange}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PTable;
