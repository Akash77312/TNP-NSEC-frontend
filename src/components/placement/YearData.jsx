import React, { useState, useRef } from "react";

export default function YearData({ label, senddata }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentdiv = useRef();

  const staticData = [
    {
      Department: "CSE",
      UndergradTotal: 120,
      UndergradPlaced: 95,
      PostgradTotal: 40,
      PostgradPlaced: 35,
    },
    {
      Department: "ECE",
      UndergradTotal: 100,
      UndergradPlaced: 85,
      PostgradTotal: 30,
      PostgradPlaced: 25,
    },
  ];

  const dataToShow =
    isOpen && senddata && senddata.length > 0 ? senddata : isOpen ? staticData : [];

  return (
    <div
      style={{
        width: "90%",
        marginBottom: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "10px",
          fontWeight: "bold",
          backgroundColor: "#f0f0f0",
          border: "none",
          cursor: "pointer",
        }}
      >
        {label || "Placement Data by Department"}
      </button>

      <div
        ref={contentdiv}
        style={{
          maxHeight: isOpen ? "1000px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.5s ease",
          padding: isOpen ? "10px" : "0px",
        }}
      >
        {dataToShow.map((item, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h4 style={{ marginBottom: "8px" }}>{item.Department}</h4>
            <div>
              <p style={{ marginBottom: "4px" }}>
                Undergrad: {item.UndergradPlaced}/{item.UndergradTotal}
              </p>
              <div style={{ background: "#ddd", height: "10px", borderRadius: "5px" }}>
                <div
                  style={{
                    width: `${(item.UndergradPlaced / item.UndergradTotal) * 100}%`,
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
              <div style={{ background: "#ddd", height: "10px", borderRadius: "5px" }}>
                <div
                  style={{
                    width: `${(item.PostgradPlaced / item.PostgradTotal) * 100}%`,
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
}
