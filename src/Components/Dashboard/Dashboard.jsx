import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const marksArray = [
        {
            id:1,
            name:"Student 1",
            physics:75,
            chemistry:86,
            math:90
        },
        {
            id:2,
            name:"Student 2",
            physics:70,
            chemistry:26,
            math:80
        },
        {
            id:3,
            name:"Student 3",
            physics:45,
            chemistry:96,
            math:90
        },
        {
            id:4,
            name:"Student 4",
            physics:25,
            chemistry:56,
            math:67
        },
        {
            id:5,
            name:"Student 5",
            physics:85,
            chemistry:66,
            math:84
        },
        {
            id:6,
            name:"Student 6",
            physics:23,
            chemistry:67,
            math:99
        },
        {
            id:7,
            name:"Student 7",
            physics:77,
            chemistry:33,
            math:56
        },
        {
            id:8,
            name:"Student 8",
            physics:75,
            chemistry:56,
            math:66
        },
        {
            id:9,
            name:"Student 9",
            physics:33,
            chemistry:44,
            math:55
        },
        {
            id:10,
            name:"Student 10",
            physics:66,
            chemistry:77,
            math:88
        },
        {
            id:11,
            name:"Student 11",
            physics:99,
            chemistry:88,
            math:77
        },
        {
            id:12,
            name:"Student 12",
            physics:77,
            chemistry:66,
            math:55
        },
    ]
    return (
        <div>
          <LineChart
          width={1000}
          height={300}
          data={marksArray}
          >
          <Line dataKey="physics"></Line>
          <Line stroke='#8884d8' dataKey="math"></Line>
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </LineChart>  
        </div>
    );
};

export default Dashboard;