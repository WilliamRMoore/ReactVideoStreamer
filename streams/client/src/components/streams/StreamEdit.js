import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    console.log(this.props);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")} // initialValues is a special redux Form paramater, it will place an initial value
          //that you specifiy into a feild with the name that you specify. E.G., if you haave a feild called title and you create an initialValue called
          //title, whatever you assign to that value will show up in the field. Redux Form is magic.
          //stream has a title and description feild in it's object, so those values get assigned to the initial values of those form feilds.
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //own props lets us access the props handed to the stream edit component
  return { stream: state.streams[ownProps.match.params.id] };
  //match is coming from an object handed to the streamEdit
  //component by the Route componenet In the App component.
  //this is how we do URL-Based selection.
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
