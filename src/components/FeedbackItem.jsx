import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackItem({ item, handleDelete }) {
  // holding rating and text in STATE HOOKS
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState("This is an example of a feedback item.");

  // using setRating function
  // const handleClick = () => {
  //   setRating((prev) => {
  //     console.log(prev);
  //     return prev + 1;
  //   });
  // };

  // const handleClick = (id) => {
  //   console.log(id);
  // }

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() =>handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
