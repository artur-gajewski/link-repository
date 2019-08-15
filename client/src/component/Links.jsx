import React, { Component } from "react";
import LinkService from "../service/LinkService";

class ListLinksComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [],
      message: null
    };

    this.deleteLinkClicked = this.deleteLinkClicked.bind(this);
    this.updateLinkClicked = this.updateLinkClicked.bind(this);
    this.addLinkClicked = this.addLinkClicked.bind(this);
    this.refreshLinks = this.refreshLinks.bind(this);
  }

  componentDidMount() {
    this.refreshLinks();
  }

  refreshLinks() {
    LinkService.retrieveAllLinks().then(response => {
      this.setState({ links: response.data });
    });
  }

  deleteLinkClicked(id) {
    LinkService.deleteLink(id).then(response => {
      this.setState({
        message: `Deletion of link with ID: ${id} was successful!`
      });
      this.refreshLinks();
    });
  }

  addLinkClicked() {
    this.props.history.push(`/links/-1`);
  }

  updateLinkClicked(id) {
    this.props.history.push(`/links/${id}`);
  }

  render() {
    return (
      <div className="container">
        {this.state.message && (
          <div class="alert alert-success">{this.state.message}</div>
        )}
        <div className="container">
          {this.state.links.length > 0 && (
            <table className="table">
              <thead>
                <tr>
                  <th width="80%">Description</th>
                  <th colSpan="2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.links.map(link => (
                  <tr key={link.id}>
                    <td>
                      <a href={link.url}>{link.description}</a>
                    </td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => this.updateLinkClicked(link.id)}
                      >
                        Modify
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.deleteLinkClicked(link.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <div className="row">
            <button className="btn btn-primary" onClick={this.addLinkClicked}>
              Add new link
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ListLinksComponent;
