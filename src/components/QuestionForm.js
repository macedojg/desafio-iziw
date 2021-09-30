import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useDispatch } from "react-redux";

class QuestionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answerI: "",
      answerII: "",
      loading: false,
    };

    this.handleAnswers = this.handleAnswers.bind(this);
    this.onChangeAnswerI = this.onChangeAnswerI.bind(this);
    this.onChangeAnswerII = this.onChangeAnswerII.bind(this);
  }

  onChangeAnswerI(e) {
    this.setState({
      answerI: e.target.value,
    });
  }

  onChangeAnswerII(e) {
    this.setState({
      answerII: e.target.value,
    });
  }

  handleAnswers(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    const { history } = this.props;
    const dispatch = useDispatch();

    if (this.checkBtn.context._errors.length === 0) {
      dispatch((this.state.answerI, this.state.answerII))
        .then(() => {
          history.push("/me");
          window.location.reload();
        })
        .catch(() => {
          this.setState({
            loading: false,
          });
        });
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <Form
            onSubmit={this.handleAnswers}
            ref={(c) => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="email">answerI</label>
              <Input
                type="text"
                className="form-control"
                name="answerI"
                value={this.state.answerI}
                onChange={this.onChangeAnswerI}
              />
            </div>

            <div className="form-group">
              <label htmlFor="answerII">answerII</label>
              <Input
                type="text"
                className="form-control"
                name="answerII"
                value={this.state.answerII}
                onChange={this.onChangeAnswerII}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Submit</span>
              </button>
            </div>
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   const { answers } = (state.answerI, state.answerII);
//   return {
//     answers,
//   };
// }

export default QuestionForm;
