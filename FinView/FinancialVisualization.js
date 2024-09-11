import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const FinancialVisualization = ({ data }) => (
    <PieChart width={400} height={400}>
        <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx={200}
            cy={200}
            outerRadius={120}
            fill="#8884d8"
            label
        >
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        <Tooltip />
        <Legend />
    </PieChart>
);

export default FinancialVisualization;
