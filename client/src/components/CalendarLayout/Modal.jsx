import React from 'react';
import Modal from 'react-responsive-modal';
import Form from './ModalForm';
import './custom-animation.css';

export default class AppModal extends React.Component {
    render() {
        const { date } = this.props
        const { where } = this.props
        const { doctor } = this.props
        const { time } = this.props
        const { copay } = this.props
        const { comments } = this.props

        return (
            <Modal
                open={this.props.open}
                onClose={this.props.onCloseModal}
                center
                classNames={{
                    transitionEnter: 'transition-enter',
                    transitionEnterActive: 'transition-enter-active',
                    transitionExit: 'transition-exit-active',
                    transitionExitActive: 'transition-exit-active',
                }}

                animationDuration={1000}

            >

                <Form
                    date={date}
                    where={where}
                    doctor={doctor}
                    time={time}
                    copay={copay}
                    comments={comments}
                />
            </Modal>

        );
    }
}