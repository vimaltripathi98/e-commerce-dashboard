import { useState } from "react";
import { Form } from "antd";
import UserProfile from "../components/UserProfile";
import ProductTable from "../components/ProductTable";
import InventoryForm from "../components/InventoryForm";
import OrderSummary from "../components/OrderSummary";
import SalesChart from "../components/SalesChart";

const Dashboard = () => {
  const [products,setProducts] = useState([
    { key: 1, image: "📦", name: "Product A", sku: "SKU001", price: 100, stock: 50, status: true },
    { key: 2, image: "📦", name: "Product B", sku: "SKU002", price: 200, stock: 30, status: false },
  ]);


  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();


  const editProduct = (record) => {
    form.setFieldsValue({ ...record, key: record.key }); 
    setModalVisible(true);
  };
  

  const handleFormSubmit = (values) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.key == values.key ? { ...product, ...values } : product
      )
    );
    setModalVisible(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <UserProfile />

      <ProductTable products={products} editProduct={editProduct} />
      <InventoryForm  
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleFormSubmit}
        form={form}
      />
      <OrderSummary />
      <SalesChart />
    </div>
  );
};

export default Dashboard;







