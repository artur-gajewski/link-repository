import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import LinkDataService from "../service/LinkDataService";

class LinkComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      description: "",
      url: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line
    if (this.state.id == -1) {
      return;
    }

    LinkDataService.retrieveLink(this.state.id).then(response =>
      this.setState({
        description: response.data.description,
        url: response.data.url
      })
    );
  }

  validate(values) {
    let errors = {};

    if (!values.description) {
      errors.description = "Enter a Description";
    } else if (values.description.length < 5) {
      errors.description = "Enter atleast 5 Characters in Description";
    }

    if (!values.url) {
      errors.url = "Enter link URL";
    } else if (values.description.length < 5) {
      errors.description = "Enter atleast 5 Characters in URL";
    }

    return errors;
  }

  onSubmit(values) {
    let link = {
      id: this.state.id,
      description: values.description,
      url: values.url
    };

    if (this.state.id === -1) {
      LinkDataService.createLink(link).then(() =>
        this.props.history.push("/links")
      );
    } else {
      LinkDataService.updateLink(this.state.id, link).then(() =>
        this.props.history.push("/links")
      );
    }
  }

  render() {
    let { id, description, url } = this.state;

    return (
      <div>
        <h3>Link</h3>
        <div className="container">
          <Formik
            initialValues={{ id, description, url }}
            onSubmit={this.onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            validate={this.validate}
            enableReinitialize={true}
          >
            {props => (
              <Form>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="url"
                  component="div"
                  className="alert alert-warning"
                />
                <fieldset className="form-group">
                  <label>Id</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="id"
                    disabled
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="description"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>URL</label>
                  <Field className="form-control" type="text" name="url" />
                </fieldset>
                <button className="btn btn-success" type="submit">
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default LinkComponent;
