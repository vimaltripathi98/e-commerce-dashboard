import { Form, Modal, Input, InputNumber, Switch } from "antd";
import PropTypes from "prop-types";


const InventoryForm = ({ visible, onClose, onSubmit, form }) => {
  return (
    <Modal 
      title="Edit Product" 
      open={visible} 
      onCancel={onClose} 
      onOk={() => form.submit()}
    >
      <Form form={form} onFinish={onSubmit} layout="vertical">
        <Form.Item name="name" label="Product Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="sku" label="SKU" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="price" label="Price" rules={[{ required: true }]}>
          <InputNumber min={1} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name="stock" label="Stock Quantity" rules={[{ required: true }]}>
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name="status" label="Status" valuePropName="checked">
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  );
};

InventoryForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
};

export default InventoryForm;
