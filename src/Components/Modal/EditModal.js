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
    handleEdit,
  } = props;

  const [email, setEmail] = useState(candidateEmail);
  const [name, setName] = useState(candidateName);
  const [phone, setPhone] = useState(candidatePhone);
  const [website, setWebsite] = useState(candidateWebsite);
  console.log(email, name, phone, website);

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="body-wrapper">
          <div className="input-wrapper">
            <div className="input-label">
              <span style={{ color: "red" }}>*</span> Name :
            </div>
            <div style={{ width: "66%" }}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="input-wrapper">
            <div className="input-label">
              <span style={{ color: "red" }}>*</span> Email :
            </div>
            <div style={{ width: "66%" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="input-wrapper">
            <div className="input-label">
              <span style={{ color: "red" }}>*</span> Phone :
            </div>
            <div style={{ width: "66%" }}>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="input-wrapper">
            <div className="input-label">
              <span style={{ color: "red" }}>*</span> Website :
            </div>
            <div style={{ width: "66%" }}>
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
        </div>
        {/* <button onClick={() => handleEdit(name,email,phone,website)}>OK</button> */}
      </Modal>
    </>
  );
};

export default EditModal;
