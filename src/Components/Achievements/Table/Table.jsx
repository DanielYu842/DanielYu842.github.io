import React from "react";
import { Table } from "antd";
import data from "./data";

const columns = [
  {
    title: (
      <>
        {["Award", "Name", "Score", "Description", "Year"].map((title) => (
          <div>{title}</div>
        ))}
      </>
    ),
    render: (record) => (
      <>
        {[
          { name: record.award, style: { fontWeight: "bold" } },
          { name: record.name, style: { fontWeight: "bold" } },
          { name: record.score, style: {} },
          { name: record.description, style: { color: "#515151" } },
          { name: record.year, style: { fontWeight: "bold" } },
        ].map((value) => (
          <div style={value.style}>{value.name}</div>
        ))}
      </>
    ),
    responsive: ["xs"],
  },
  {
    title: "Award",
    dataIndex: "award",
    key: "award",
    render: (text) => <div>{text}</div>,
    responsive: ["sm"],
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <div>{text}</div>,
    responsive: ["sm"],
  },
  {
    title: "Score",
    dataIndex: "score",
    key: "score",
    render: (text) => <div>{text}</div>,
    responsive: ["sm"],
  },
  {
    title: "Description",
    key: "description",
    dataIndex: "description",
    render: (text) => <div>{text}</div>,
    responsive: ["sm"],
  },
  {
    title: "Year",
    dataIndex: "year",
    key: "year",
    render: (text) => <div>{text}</div>,
    responsive: ["sm"],
  },
];

function TableComponent() {
  for (let i = 0; i < data.length; i += 1) {
    data[i].key = i;
    if (data[i].score == null || data[i].score === "") {
      data[i].score = "n/a";
    }
  }

  return <Table columns={columns} dataSource={data} className="achievements_section__table" />;
}

export default TableComponent;
