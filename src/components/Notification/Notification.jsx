import PropTypes from "prop-types";

export const Notification = ({ message }) => {
  return <h2>{message}</h2>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
