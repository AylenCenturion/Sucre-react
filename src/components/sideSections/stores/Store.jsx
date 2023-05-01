import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faHouseChimney,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  StoreContainer,
  StoreDescription,
  StoreImgContainer,
  StoreInfoContainer,
  StoresMap,
} from "../../../pages/stores/StoreStyles";
import { SectionTitle } from "../../UI/Titles";

export default function Store(props) {
  return (
    <>
      <StoreContainer>
        <SectionTitle>{props.name}</SectionTitle>
        <StoreDescription>
          <StoreImgContainer img={props.img} />
          <StoreInfoContainer>
            <FontAwesomeIcon icon={faHouseChimney} />
            <p>{props.adress}</p>
            <FontAwesomeIcon icon={faClock} />
            <div>
              <p>Monday to friday</p>
              <p>{props.weekHours}</p>
              <p>Weekends and Holidays</p>
              <p>{props.weekendHours}</p>
            </div>
            <FontAwesomeIcon icon={faPhone} />
            <p>{props.phone}</p>
          </StoreInfoContainer>
          <StoresMap>
            <iframe
              src={props.iframe}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </StoresMap>
        </StoreDescription>
      </StoreContainer>
    </>
  );
}
