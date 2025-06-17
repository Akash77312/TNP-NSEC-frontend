import React, { useState } from "react";
import axios from "axios";

const PGraphForm = () => {
  const [formData, setFormData] = useState({
    year: "",
    postGraduate: "",
    underGraduate: "",
    total: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/v1/admin/graph", {
        ...formData,
        postGraduate: Number(formData.postGraduate),
        underGraduate: Number(formData.underGraduate),
        total: Number(formData.total)
      });
      alert("Data submitted successfully!");
      setFormData({ year: "", postGraduate: "", underGraduate: "", total: "" });
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Failed to submit data.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add Placement Data</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Year</label>
        <input type="text" name="year" value={formData.year} onChange={handleChange} required style={styles.input} />

        <label style={styles.label}>Post Graduate</label>
        <input type="number" name="postGraduate" value={formData.postGraduate} onChange={handleChange} required style={styles.input} />

        <label style={styles.label}>Under Graduate</label>
        <input type="number" name="underGraduate" value={formData.underGraduate} onChange={handleChange} required style={styles.input} />

        <label style={styles.label}>Total</label>
        <input type="number" name="total" value={formData.total} onChange={handleChange} required style={styles.input} />

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "Segoe UI, sans-serif"
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "1.8rem",
    color: "#007bff"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  label: {
    fontWeight: "500",
    marginBottom: "5px"
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem"
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "10px"
  }
};

export default PGraphForm;
