import React, { useState } from "react";
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
import EditModal from "../Modal/EditModal";
import "./Card.css";
const { Meta } = Card;

const MyCard = (props) => {
  const { name, email, phone, website, username } = props;

  const [heartClicked, setHeartClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
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
                  style={{ color: "red", fontSize: "18px" }}
                />
              </button>
            ) : (
              <button onClick={() => setHeartClicked(!heartClicked)}>
                <HeartFilled
                  key="heart"
                  style={{ color: "red", fontSize: "18px" }}
                />
              </button>
            ),
            <button onClick={showModal}><EditOutlined key="edit" style={{ fontSize: "18px" }} /></button>,
            <DeleteFilled key="Delete" style={{ fontSize: "18px" }} />,
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
            <p>{website}</p>
          </div>
        </Card>
      </div>

      <EditModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        candidateName={name}
        candidateEmail={email}
        candidatePhone={phone}
        candidateWebsite={website}
      />
    </>
  );
};

export default MyCard;
