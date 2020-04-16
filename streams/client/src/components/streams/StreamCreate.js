import React from "react";
import { Field, reduxForm } from "redux-form"; //Field  is a supplied component from redux-form, used for any input on a form.
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    //formProps is handed to this function by redux form when called using the Field component.
    return (
      // <input
      //   onChange={formProps.input.onChange} //formProps has these functions.
      //   value={formProps.input.value}
      // />
      //<input {...formProps.input} /> //shortened syntax
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    //no longer called with event object, instead reduxForm prevents default automatically and hands us the form values.
    this.props.createStream(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)} //handled submit is given to props by reduxForm
        className="ui form error" //sematic  ui hides errors by default, make sure you put the error class name on form to show them.
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  //create key value pairs for each input name, validate will be called on submit,
  // and the error results will be handed to renderInput through the meta object.
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
