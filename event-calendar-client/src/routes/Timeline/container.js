import { connect } from "react-redux";
import { fetchEvents, deleteEvent } from "../../redux/actions";

const mapStateToProps = state => ({
  events: state.events
});

const mapDispatchToProps = {
  fetchEvents,
  deleteEvent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
