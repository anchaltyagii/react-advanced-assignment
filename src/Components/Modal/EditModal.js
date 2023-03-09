import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import "./EditModal.css";

const EditModal = (props) => {
  const {
    isModalOpen,
    handleOk,
    handleCancel,
    candidateId,
    candidateEmail,
    candidateName,
    candidatePhone,
    candidateWebsite,
    handleEdit,
  } = props;

  const [candidateData, setCandidateData] = useState({
    id: candidateId,
    name: candidateName,
    email: candidateEmail,
    phone: candidatePhone,
    website: candidateWebsite,
  });

  console.log(
    candidateData.email,
    candidateData.name,
    candidateData.phone,
    candidateData.website
  );
  



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
                value={candidateData.name}
                onChange={(e) =>
                  setCandidateData({ ...candidateData, name: e.target.value })
                }
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
                value={candidateData.email}
                onChange={(e) =>
                  setCandidateData({ ...candidateData, email: e.target.value })
                }
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
                value={candidateData.phone}
                onChange={(e) =>
                  setCandidateData({ ...candidateData, phone: e.target.value })
                }
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
                value={candidateData.website}
                onChange={(e) =>
                  setCandidateData({
                    ...candidateData,
                    website: e.target.value,
                  })
                }
                className="form-control"
              />
            </div>
          </div>
        </div>
        <button onClick={() => handleEdit(candidateData)}>OK</button>
      </Modal>
    </>
  );
};

export default EditModal;
