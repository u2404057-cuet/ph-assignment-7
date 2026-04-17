"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FriendsContext } from "@/context/FriendsProvider";
import { useContext } from "react";

const StatsPage = () => {
  const { timeline } = useContext(FriendsContext);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  if (!timeline.length) {
    return (
      <div className="flex items-center justify-center h-80 bg-base-300 mb-20 container mx-auto rounded-2xl">
        <p className="text-5xl font-bold">Stats are empty</p>
      </div>
    );
  }

  const chartData = Object.values(
    (timeline || []).reduce((acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = { name: item.type, value: 0 };
      }
      acc[item.type].value += 1;
      return acc;
    }, {})
  );

  return (
    <div className="container mx-auto space-y-4">
    <h1 className="font-bold text-5xl">Friendship Analytics</h1>
    <p className="">By Interaction Type</p>
    <div className="flex justify-center mb-20 p-4 bg-base-300 rounded-2xl">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={100}
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default StatsPage;
