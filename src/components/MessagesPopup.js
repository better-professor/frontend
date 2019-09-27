import Popup from "reactjs-popup";
import React from "react";
import styled from "styled-components";

const StyledH4 = styled.h4`
  color: #00abff;
  font-size: 0.8em;
`;

const StyledH5 = styled.h5`
  color: darkblue;
  font-size: 0.8em;
`;

const MessagesModal = (props) => {

    return (<>
    <Popup
      trigger={<button className="send-msg-button"> View Sent Messages </button>}
      modal
      closeOnDocumentClick
    >
      <span><StyledH4>Sent Messages</StyledH4>
      {props.getMessage.map(message => {
                return (
                  <div>
                    <StyledH4>Message date:{message.date}</StyledH4>
                    <StyledH5>Sent Message:{message.message}</StyledH5>
                  </div>
                );
              })} </span>
    </Popup>
    </>

    )
}

export default MessagesModal;
  