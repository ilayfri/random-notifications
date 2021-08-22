import "./Notitification.css";
import textCheck from "./TextValidation/TextValidation";
const Notitification = (props) => {
  return (
    <>
      <div className={"notification-div " + props.type}>
        <span>
          <span></span>
          <span>
            <span>
              <b>{props.type ? props.type : "General"}: </b>
            </span>
            <span>{props.message ? textCheck(props.message) : ""}</span>
          </span>
        </span>
        <span className="close-span" onClick={props.clickNotificationHandle}>&#10006;</span>
      </div>
    </>
  );
};

export default Notitification;
