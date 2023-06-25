import "./user.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const User = () => {
  return (
    <div>
      <p>Tommy</p>
      <p>
        <FontAwesomeIcon icon={faUser} />
      </p>
    </div>
  );
};

export default User;
