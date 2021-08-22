const Messages = (props) => {
  return (
    <>
      {/* finish */}
      {props.markedAll && <>No new notifications left on the DB.</>}

      {/* period time */}
      {props.durationTimeOut && props.currNotification != null && (
        <>Waiting Period time.. </>
      )}

      {/* creatin user + initialize */}
      {props.currNotification == null &&
        !props.markedNotification &&
        !props.markedAll && <>Initializing .. </>}

      {/* after click */}
      {props.currNotification == null &&
        props.markedNotification &&
        !props.markedAll && <>This notification will no longer be shown ..</>}
    </>
  );
};

export default Messages;