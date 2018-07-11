import React from "react";
import Modal from "react-responsive-modal";
import Form from "./ModalForm";
import "./custom-animation.css";

export default class AppModal extends React.Component {
  formatterFunction = (date) => {
    return `${(date.getMonth() + 1)} / ${date.getDate()} / ${date.getFullYear()}`;
  }
  render() {
    const { date } = this.props;
    const { where } = this.props;
    const { doctor } = this.props;
    const { time } = this.props;
    const { copay } = this.props;
    const { comments } = this.props;
    const { appointment } = this.props;
    const dateOutput = this.formatterFunction(date)

    // const appointment = {
    //   id: 1,
    //   where: 'tucson',
    //   doctor: 'Obsessive Coder',
    //   time: '4:19',
    //   copay: '1',
    //   comments: 'no comments'
    // }

    return (
      <Modal
        open={this.props.open}
        onClose={this.props.onCloseModal}
        center
        classNames={{
          transitionEnter: "transition-enter",
          transitionEnterActive: "transition-enter-active",
          transitionExit: "transition-exit-active",
          transitionExitActive: "transition-exit-active"
        }}
        animationDuration={0}
      >
        <Form
          date={dateOutput}
          appointment={appointment}
          where={where}
          doctor={doctor}
          time={time}
          copay={copay}
          comments={comments}
          onSubmit={this.props.onCloseModal}
        />
      </Modal>
    );
  }
}
