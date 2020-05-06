import React from 'react';

class BadgeForm extends React.Component {
  handleClick = (e) => {
    console.log('Button was clicked');
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form was submitted');
  //   console.log(this.state);
  // };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              name="firstName"
              type="text"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              name="lastName"
              type="text"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input onChange={this.props.onChange} className="form-control" name="email" type="email" value={this.props.formValues.email} />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              name="jobTitle"
              type="text"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              name="twitter"
              type="text"
              value={this.props.formValues.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>

          {this.props.error && <p className="text-danger">{this.props.error.message}</p>}
        </form>
      </div>
    );
  }
}

export default BadgeForm;