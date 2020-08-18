import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "./DataTable";

export default function StudentList() {
  const [appState, setAppState] = useState({ loading: false, data: null });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = "http://localhost:8080/student";
    axios.get(apiUrl).then((resp) => {
      const data = resp.data;
      setAppState({ loading: false, data: data });
    });
  }, [setAppState]);

  const columns = [
    { id: "firstName", label: "First Name", minWidth: 100 },
    { id: "lastName", label: "First Name", minWidth: 100 },
    { id: "email", label: "Email", minWidth: 100 },
    { id: "age", label: "Age", minWidth: 100 },
  ];

  return <DataTable data={appState.data} columns={columns} />;
}
