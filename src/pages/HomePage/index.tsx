import { useCallback, useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import API_TODOS from "../../api/todos";
import { calculateAverageFunction, loadWASM } from "../../wasm/wasmLoader";

import styles from "./styles.module.css";

const HomePage = () => {
  const [wasmLoaded, setWasmLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [average, setAverage] = useState();

  const fetchTodos = useCallback(() => {
    API_TODOS.getTodos()
      .then((res) => {
        if (res) {
          setData(res.data);

          if (wasmLoaded) {
            const numbersArray = res.data.map((item: any) => item.userId);
            setAverage(calculateAverageFunction(numbersArray));
          }
        }
      })
      .catch((error) => console.log(error));
  }, [wasmLoaded]);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  useEffect(() => {
    loadWASM().then((result) => setWasmLoaded(result));
  }, []);

  const userStats = data.reduce((stats: any, item: any) => {
    const userId = item.userId;
    const completed = item.completed ? "completed" : "nonCompleted";

    if (!stats[userId]) {
      stats[userId] = { userId, completed: 0, nonCompleted: 0 };
    }

    stats[userId][completed] += 1;
    return stats;
  }, {});

  const userStatsArray = Object.values(userStats);

  return (
    <div className={styles.container}>
      <p>Average of User IDs: {average}</p>
      <BarChart width={600} height={400} data={userStatsArray}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="userId">
          <Label value="User ID" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="completed"
          stackId="tasks"
          fill="#82ca9d"
          name="Completed Tasks"
        />
        <Bar
          dataKey="nonCompleted"
          stackId="tasks"
          fill="#8884d8"
          name="Non-Completed Tasks"
        />
      </BarChart>
    </div>
  );
};

export default HomePage;
