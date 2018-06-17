import React, { Component } from "react";
import { connect } from "react-redux";
import { closeModal } from "../actions";

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
  return {
    modals: state.modals
  };
};

export default connect(mapStateToProps, { closeModal })(Modals);
