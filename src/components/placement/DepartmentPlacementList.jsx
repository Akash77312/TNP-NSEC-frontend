import React, { useState } from "react";

export default function DepartmentPlacementList() {
  const staticDeptData = [
    {
      _id: "Y2024",
      departments: [
        {
          Department: "CSE",
          UndergradTotal: 100,
          UndergradPlaced: 90,
          PostgradTotal: 20,
          PostgradPlaced: 18,
        },
        {
          Department: "ECE",
          UndergradTotal: 80,
          UndergradPlaced: 70,
          PostgradTotal: 10,
          PostgradPlaced: 9,
        },
      ],
    },
    {
      _id: "Y2023",
      departments: [
        {
          Department: "CSE",
          UndergradTotal: 95,
          UndergradPlaced: 85,
          PostgradTotal: 25,
          PostgradPlaced: 20,
        },
        {
          Department: "ECE",
          UndergradTotal: 75,
          UndergradPlaced: 65,
          PostgradTotal: 15,
          PostgradPlaced: 12,
        },
      ],
    },
  ];

  const [openYear, setOpenYear] = useState(null);

  const toggleYear = (yearId) => {
    setOpenYear((prev) => (prev === yearId ? null : yearId));
  };

  return (
    <div
      style={{
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
        Department Wise Yearly Placement Record{" "}
        <span style={{ fontSize: "14px" }}>(Click to expand)</span>
      </h3>

      {staticDeptData.map((yearData) => {
        const label =
          "20" +
          yearData._id.substring(1, 3) +
          "-" +
          yearData._id.substring(3);
        const isOpen = openYear === yearData._id;

        return (
          <div
            key={yearData._id}
            style={{
              width: "90%",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => toggleYear(yearData._id)}
              style={{
                width: "100%",
                padding: "10px",
                fontWeight: "bold",
                backgroundColor: "#f0f0f0",
                border: "none",
                cursor: "pointer",
              }}
            >
              {label}
            </button>

            <div
              style={{
                maxHeight: isOpen ? "1000px" : "0px",
                overflow: "hidden",
                transition: "max-height 0.5s ease",
                padding: isOpen ? "10px" : "0px",
              }}
            >
              {isOpen &&
                yearData.departments.map((item, index) => (
                  <div key={index} style={{ marginBottom: "20px" }}>
                    <h4 style={{ marginBottom: "8px" }}>{item.Department}</h4>
                    <div>
                      <p style={{ marginBottom: "4px" }}>
                        Undergrad: {item.UndergradPlaced}/{item.UndergradTotal}
                      </p>
                      <div
                        style={{
                          background: "#ddd",
                          height: "10px",
                          borderRadius: "5px",
                        }}
                      >
                        <div
                          style={{
                            width: `${
                              (item.UndergradPlaced / item.UndergradTotal) * 100
                            }%`,
                            background: "#766fff",
                            height: "10px",
                            borderRadius: "5px",
                          }}
                        ></div>
                      </div>
                    </div>

                    <div style={{ marginTop: "10px" }}>
                      <p style={{ marginBottom: "4px" }}>
                        Postgrad: {item.PostgradPlaced}/{item.PostgradTotal}
                      </p>
                      <div
                        style={{
                          background: "#ddd",
                          height: "10px",
                          borderRadius: "5px",
                        }}
                      >
                        <div
                          style={{
                            width: `${
                              (item.PostgradPlaced / item.PostgradTotal) * 100
                            }%`,
                            background: "#a7e937",
                            height: "10px",
                            borderRadius: "5px",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
