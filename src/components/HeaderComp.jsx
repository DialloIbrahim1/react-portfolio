import React from "react";
import Avatar from "../assets/images/avatar2.jpg";
import { 
    FacebookOutlined, 
    GithubOutlined, 
    LinkedinOutlined, 
    MessageOutlined, 
    TwitterOutlined 
} from "@ant-design/icons";
import { Button, message } from "antd";

const HeaderComp = () => {
  return (
    <header>
        <div className='left'>
          <img src={Avatar} alt='user' />
          <div className="user-infos">
          <h1>Ibrahima Diallo</h1>
          <h3>Developpeur</h3>
          <div className="contacts">
            <div className="contact-item">
                <LinkedinOutlined/>
            </div>
            <div className="contact-item">
                <TwitterOutlined/>
            </div>
            <div className="contact-item">
                <GithubOutlined/>
            </div>
            <div className="contact-item">
                <FacebookOutlined/>
            </div>
          </div>

          </div>
        </div>
        <div className='right'>
        <button className="contact-btn" icon={<MessageOutlined/>}>
        Contactez-moi
        </button>
        </div>
    </header>
  );
};

export default HeaderComp;
