import React from 'react';
import Modal from 'react-responsive-modal';
import './custom-animation.css';

export default class AppModal extends React.Component {
    render() {
        return (
            <div className="example">
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
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                        hendrerit risus, sed porttitor quam.
          </p>
                </Modal>
            </div>
        );
    }
}