import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross } from "@fortawesome/free-solid-svg-icons";
import {
  faCheckCircle,
  faCircleXmark,
  faEye,
} from "@fortawesome/free-regular-svg-icons";
const Action = ({ item, handleEdit, handleDelete, handleDetails }) => {
  return (
    <div className="text-center space-x-3.5">
      {handleEdit && (
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold px-2 rounded"
          onClick={() => handleEdit(item)}
        >
          <FontAwesomeIcon icon={faCheckCircle} />
        </button>
      )}
      {handleDelete && (
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold px-2 rounded"
          onClick={() => handleDelete(item)}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      )}
      {handleDetails && (
        <button
          className="hover:text-primary"
          onClick={() => handleDetails(item)}
        >
          <FontAwesomeIcon className="text-green" icon={faEye} />
        </button>
      )}
    </div>
  );
};

export default Action;
