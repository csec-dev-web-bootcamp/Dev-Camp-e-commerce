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
    title: "Image",
    dataIndex: "image",
    key: "image",
  },
  {
    title: "ProductName",
    dataIndex: "ProductName", // Updated to match data property ProductName
    key: "productName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Date",
    dataIndex: "Date", // Updated to match data property ProductName
    key: "date",
  },
  {
    title: "Total",
    dataIndex: "Total", // Updated to match data property ProductName
    key: "total",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "Tags", // Updated to match data property ProductName
    render: (tags) => (
      <span>
        {tags?.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "outOfStock") {
            // Added closing parenthesis here
            color = "volcano";
          } else if (tag === "inStock") {
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
        <a>edit {record.productName}</a>
        <a>delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    id: " #3210",
    Image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    ProductName: "Jacket", // Updated to match data property ProductName
    Date: "May 23, 2021",
    Total: "$239,00",
    Tags: ["outOfStock"],
    Action: "delete , edit  ",
  },
  {
    key: "2",
    id: " #3211",
    Image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    ProductName: "Jacket", // Updated to match data property ProductName
    Date: "May 23, 2021",
    Total: "$239,00",
    Tags: ["inStock"],
    Action: "delete , edit  ",
  },
  {
    key: "3",
    id: " #3212",
    Image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    ProductName: "Ring", // Updated to match data property ProductName
    Date: "May 23, 2021",
    Total: "$239,00",
    Tags: ["outOfStock"],
    Action: "delete , edit  ",
  },
  {
    key: "4",
    id: " #3213",
    Image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    ProductName: "Skirt", // Updated to match data property ProductName
    Date: "May 23, 2021",
    Total: "$239,00",
    Tags: ["inStock"],
    Action: "delete , edit  ",
  },
  {
    key: "5",
    id: " #3214",
    Image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    ProductName: "Tie", // Updated to match data property ProductName
    Date: "May 23, 2021",
    Total: "$239,00",
    Tags: ["inStock"],
    Action: "delete , edit  ",
  },
];

const page = () => {
  const [top, setTop] = useState("topLeft");
  const [bottom, setBottom] = useState("bottomRight");
  return (
    <div classProductName="mt-10 mx-5">
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
