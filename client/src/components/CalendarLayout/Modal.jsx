import React from 'react';
import Modal from 'react-responsive-modal';
import Form from './ModalForm';
import './custom-animation.css';

export default class AppModal extends React.Component {
    render() {
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

                <Form />
            </Modal>

        );
    }
}