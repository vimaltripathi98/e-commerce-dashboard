import { Table, Button } from "antd";
import PropTypes from "prop-types";

const ProductTable = ({ products , editProduct }) => {
  const dataSource = products.map((product, index) => ({
    key: product.key || index,
    ...product,
  }));

  const columns = [
    { title: "Image", dataIndex: "image", key: "image" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "SKU", dataIndex: "sku", key: "sku" },
    { title: "Price ($)", dataIndex: "price", key: "price", sorter: (a, b) => (a.price || 0) - (b.price || 0) },
    { title: "Stock", dataIndex: "stock", key: "stock", sorter: (a, b) => (a.stock || 0) - (b.stock || 0) },
    { title: "Status", dataIndex: "status", key: "status", render: (status) => (status ? "Active" : "Inactive") },
    { 
      title: "Actions", 
      key: "actions", 
      render: (_, record) => <Button onClick={() => editProduct(record)}>Edit</Button> 
    },
  ];

  return <Table columns={columns} dataSource={dataSource} pagination={{ pageSize: 5 }} />;
};

ProductTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      sku: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      stock: PropTypes.number.isRequired,
      status: PropTypes.bool.isRequired,
    })
  ).isRequired,
  editProduct: PropTypes.func.isRequired,
};

export default ProductTable;
