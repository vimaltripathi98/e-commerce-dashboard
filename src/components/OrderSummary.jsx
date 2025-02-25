import { Card, Statistic } from "antd";

const OrderSummary = () => {
  return(
    <Card>
    <Statistic title="Total Orders" value={150} />
    <Statistic title="Pending Orders" value={30} valueStyle={{ color: "orange" }} />
    <Statistic title="Completed Orders" value={120} valueStyle={{ color: "green" }} />
    <Statistic title="Revenue ($)" value={5000} precision={2} />
  </Card>
  )

}

export default OrderSummary;

