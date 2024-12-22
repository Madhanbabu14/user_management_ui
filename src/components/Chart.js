import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
    { day: "Monday", users: 40 },
    { day: "Tuesday", users: 30 },
    { day: "Wednesday", users: 20 },
    { day: "Thursday", users: 27 },
    { day: "Friday", users: 18 },
];

const Chart = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
            <LineChart
                width={600}
                height={300}
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
        </div>
    );
};

export default Chart;
