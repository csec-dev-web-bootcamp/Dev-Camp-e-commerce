"use client";
import React, { useState } from "react";
import { Radio, Space, Table, Tag } from "antd";

const topOptions = [
  {
    label: "topLeft",
    value: "topLeft",
  },
  {
    label: "topCenter",
    value: "topCenter",
  },
  {
    label: "topRight",
    value: "topRight",
  },

  {
    label: "none",
    value: "none",
  },
];
const bottomOptions = [
  {
    label: "bottomLeft",
    value: "bottomLeft",
  },
  {
    label: "bottomCenter",
    value: "bottomCenter",
  },
  {
    label: "bottomRight",
    value: "bottomRight",
  },

  {
    label: "none",
    value: "none",
  },
];
const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "Name", // Updated to match data property name
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Date",
    dataIndex: "Date", // Updated to match data property name
    key: "date",
  },
  {
    title: "Total",
    dataIndex: "Total", // Updated to match data property name
    key: "total",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "Tags", // Updated to match data property name
    render: (tags) => (
      <span>
        {tags?.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "Processing") {
            // Added closing parenthesis here
            color = "volcano";
          } else if (tag === "completed") {
            color = "green";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>edit {record.name}</a>
        <a>delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    id: " #3210",
    Name: "John Brown", // Updated to match data property name
    Date: "May 23, 2021",
    Total: "$239,00",
    Tags: ["Processing", "pending"],
    Action: "delete , edit  ",
  },
  {
    key: "2",
    id: " #3211",
    Name: "Jim Green", // Updated to match data property name
    Date: "May 23, 2021",
    Total: "$239,00",
    Tags: ["shipped"],
    Action: "delete , edit  ",
  },
  {
    key: "3",
    id: " #3212",
    Name: "Joe Black", // Updated to match data property name
    Date: "May 23, 2021",
    Total: "$239,00",
    Tags: ["completed"],
    Action: "delete , edit  ",
  },
  {
    key: "4",
    id: " #3213",
    Name: "John Brown", // Updated to match data property name
    Date: "May 23, 2021",
    Total: "$239,00",
    Tags: ["Processing", "pending"],
    Action: "delete , edit  ",
  },
  {
    key: "5",
    id: " #3214",
    Name: "Jim Green", // Updated to match data property name
    Date: "May 23, 2021",
    Total: "$239,00",
    Tags: ["shipped"],
    Action: "delete , edit  ",
  },
];

const page = () => {
  const [top, setTop] = useState("topLeft");
  const [bottom, setBottom] = useState("bottomRight");
  return (
    <div className="mt-10 mx-5">
      <div>
        <Radio.Group
          style={{
            marginBottom: 10,
          }}
          options={topOptions}
          value={top}
          onChange={(e) => {
            setTop(e.target.value);
          }}
        />
      </div>
      <Radio.Group
        style={{
          marginBottom: 10,
        }}
        options={bottomOptions}
        value={bottom}
        onChange={(e) => {
          setBottom(e.target.value);
        }}
      />
      <Table
        columns={columns}
        pagination={{
          position: [top, bottom],
        }}
        dataSource={data}
      />
    </div>
  );
};
export default page;
