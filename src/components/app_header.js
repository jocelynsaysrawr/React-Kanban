import React, { Component } from "react";
import { openModal, closeModal } from "../actions";
import { connect } from "react-redux";
import uuid from "uuid";

// const modalRoot = document.getElementById("modal-root");

// class MyPortal extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.el = document.createElement("div");
//   }

//   componentDidMount() {
//     modalRoot.appendChild(this.el);
//   }

//   componentWillUnmount() {
//     modalRoot.removeChild(this.el);
//   }

//   render() {
//     return ReactDOM.createPortal(this.props.children, this.el);
//   }
// }

class Modal extends Component {
  onClose() {
    if (this.props.item.onClose) {
      this.props.item.onClose();
      this.props.onClose(this.props.item);
    } else {
      this.props.onClose(this.props.item);
    }
  }

  onConfirm() {
    if (this.props.item.onConfirm) {
      this.props.item.onConfirm();
      this.props.onClose(this.props.item);
    }
  }

  render() {
    const {
      zIndex,
      item: { type, text }
    } = this.props;

    if (type === "confirmation") {
      return (
        <div className="modal-wrapper" style={{ zIndex: (zIndex + 1) * 10 }}>
          <div className="modal">
            <div className="text">{text}</div>
            <div className="buttons">
              <button className="modal-button" onClick={() => this.onConfirm()}>
                Confirm
              </button>
              <button className="modal-button" onClick={() => this.onClose()}>
                Close
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

class Modals extends Component {
  render() {
    const modals = this.props.modals.map((item, i) => (
      <Modal
        item={item}
        key={i}
        zIndex={i}
        onClose={item => this.props.closeModal(item)}
      />
    ));

    return <div className="modals">{modals}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state.modals);
  return {
    modals: state.modals.modals
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

const ModalContainer = connect(mapStateToProps, { closeModal })(Modals);

class AppHeader extends Component {
  render() {
    return (
      <div className="header">
        <header>
          <h1>Kanban</h1>
        </header>
        <div className="new-task">
          <a
            className="new-task-btn"
            onClick={() => {
              console.log(this.props);
              return this.props.dispatch(
                openModal({
                  id: uuid.v4(),
                  type: "confirmation",
                  text: "Add a new card!",
                  onClose: () => console.log("fire at closing event"),
                  onConfirm: () => console.log("fire at confirming event")
                })
              );
            }}
          >
            + task
          </a>
        </div>
        <ModalContainer />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(AppHeader);
