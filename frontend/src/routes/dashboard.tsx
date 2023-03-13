import { useGetEmployeesQuery } from '../services/employees';

const Dashboard = () => {
  const { data } = useGetEmployeesQuery();
  console.log({ data });
  return <div>dashboard</div>;
};

export default Dashboard;
