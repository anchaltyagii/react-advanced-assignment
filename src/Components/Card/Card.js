import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  HeartOutlined,
  MailOutlined,
  DeleteFilled,
  PhoneOutlined,
  GlobalOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Card } from "antd";
import "./Card.css";
import { Modal } from "antd";

const MyCard = (props) => {
  const {
    name,
    email,
    phone,
    website,
    username,
    id,
    handleDelete,
    handleEdit,
  } = props;

  const [heartClicked, setHeartClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [candidateData, setCandidateData] = useState({
    id: id,
    name: name,
    email: email,
    phone: phone,
    website: website,
  });

  useEffect(() => {
    setCandidateData({
      id: id,
      name: name,
      email: email,
      phone: phone,
      website: website,
    });
  }, [id, name, email, phone, website]);

  // Handle show modal
  const showModal = () => {
    setIsModalOpen(true);
  };

  // validating email
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  // handling submit ok btn
  const handleOk = () => {
    if (validateEmail(candidateData.email)) {
      if (
        candidateData.name &&
        candidateData.email &&
        candidateData.phone &&
        candidateData.website
      ) {
        handleEdit(id, candidateData);
        setIsModalOpen(false);
      }
    }
  };

  // handle cancel modal
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="col-md-4 col-xs-12 col-lg-3 col-sm-12">
        <Card
          style={{
            margin: "15px",
          }}
          cover={
            <div className="img-wrapper">
              <img
                alt="avatar-display"
                src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
                height="200px"
                width="200px"
              />
            </div>
          }
          actions={[
            !heartClicked ? (
              <button onClick={() => setHeartClicked(!heartClicked)}>
                <HeartOutlined
                  key="heart"
                  style={{ color: "red", fontSize: "20px" }}
                />
              </button>
            ) : (
              <button onClick={() => setHeartClicked(!heartClicked)}>
                <HeartFilled
                  key="heart"
                  style={{ color: "red", fontSize: "20px" }}
                />
              </button>
            ),
            <button onClick={() => showModal()}>
              <EditOutlined key="edit" style={{ fontSize: "20px" }} />
            </button>,
            <button onClick={() => handleDelete(candidateData.id)}>
              <DeleteFilled key="Delete" style={{ fontSize: "20px" }} />
            </button>,
          ]}
        >
          <h3>{name}</h3>
          <div className="email-info">
            <MailOutlined style={{ fontSize: "18px" }} />
            <p>{email}</p>
          </div>
          <div className="email-info">
            <PhoneOutlined style={{ fontSize: "18px" }} />
            <p>{phone}</p>
          </div>
          <div className="email-info">
            <GlobalOutlined style={{ fontSize: "18px" }} />
            <p>http://{website}</p>
          </div>
        </Card>
      </div>

      {/* Edit Modal */}
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
                className={
                  !candidateData.name
                    ? "form-control border-red"
                    : "form-control"
                }
              />
              {!candidateData.name ? (
                <div className="error-msg">This field is required</div>
              ) : null}
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
                className={
                  !candidateData.email || !validateEmail(candidateData.email)
                    ? "form-control border-red"
                    : "form-control"
                }
              />
              {!candidateData.email ? (
                <div className="error-msg">This field is required</div>
              ) : !validateEmail(candidateData.email) ? (
                <div className="error-msg">Invalid email</div>
              ) : null}
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
                className={
                  !candidateData.phone
                    ? "form-control border-red"
                    : "form-control"
                }
              />
              {!candidateData.phone ? (
                <div className="error-msg">This field is required</div>
              ) : null}
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
                className={
                  !candidateData.website
                    ? "form-control border-red"
                    : "form-control"
                }
              />
              {!candidateData.website ? (
                <div className="error-msg">This field is required</div>
              ) : null}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MyCard;
