import React, { useState } from "react";
import { Modal } from "antd";
import "./EditModal.css";

const EditModal = (props) => {
  const {
    isModalOpen,
    handleOk,
    handleCancel,
    candidateEmail,
    candidateName,
    candidatePhone,
    candidateWebsite,
  } = props;

  const [email, setEmail] = useState(candidateEmail);
  const [name, setName] = useState(candidateName);
  const [phone, setPhone] = useState(candidatePhone);
  const [website, setWebsite] = useState(candidateWebsite);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <hr />
        <div className="body-wrapper">
          <div className="input-wrapper">
            <div style={{ width: "30%" }}>
              <span style={{ color: "red" }}>*</span> Name:
            </div>
            <div style={{ width: "70%" }}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="input-wrapper">
            <div style={{ width: "30%" }}>
              <span style={{ color: "red" }}>*</span>
              Email:
            </div>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="input-wrapper">
            <div style={{ width: "30%" }}>
              <span style={{ color: "red" }}>*</span>
              Phone:
            </div>
            <div>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="input-wrapper">
            <div style={{ width: "30%" }}>
              <span style={{ color: "red" }}>*</span>
              website:
            </div>
            <div>
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
          </div>
        </div>
        <hr />
      </Modal>
    </>
  );
};

export default EditModal;
