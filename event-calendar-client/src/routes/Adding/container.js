import { connect } from "react-redux";

import { addEvent } from "../../redux/actions.js";

const mapDispatchToProps = {
  addEvent
};

export default connect(
  null,
  mapDispatchToProps
);
