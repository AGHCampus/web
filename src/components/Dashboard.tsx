import { Card, CardHeader } from "@mui/material";

const Dashboard = () => (
  <Card>
    <CardHeader title={`Witaj w panelu administracyjnym ${localStorage.getItem("username")}!`} />
  </Card>
);

export default Dashboard;
