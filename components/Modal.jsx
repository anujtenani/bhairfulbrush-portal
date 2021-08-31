import React from 'react';
import ReactStrapModal from 'reactstrap/lib/Modal';
import ModalBody from 'reactstrap/lib/ModalBody';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import ModalFooter from 'reactstrap/lib/ModalFooter';
import PropTypes from 'prop-types';
import {FormattedMessage} from "react-intl";
import Button from "./Button";

export default function Modal({confirmLoading, onOk, onCancel, onClose, okText, cancelText, title, visible, onSubmit, children, size, disabled}) {
    return (
        <ReactStrapModal isOpen={visible} toggle={onCancel || onClose} size={size}>
            {
                (title || onClose) &&
                <ModalHeader toggle={onCancel || onClose}>
                    {
                        typeof title === "string" ?
                            <FormattedMessage id={title} defaultMessage={title}/>
                            : title
                    }</ModalHeader>
            }
            <Form onSubmit={onSubmit}>
                <ModalBody>
                    {children}
                </ModalBody>
                {
                    (onCancel || onSubmit || onOk || onCancel) &&
                    <ModalFooter>
                        {
                            onCancel ?
                                <button type={"button"} className={"btn btn-outline mr-1"}
                                        onClick={onCancel}>{cancelText || "Cancel"}</button> :
                                null
                        }
                        {
                            (onSubmit || onOk || onCancel) ?
                                <Button className={"btn-primary btn"}
                                              loading={confirmLoading}
                                              type={"submit"} disabled={disabled}
                                              onClick={onSubmit || onOk || onCancel}>{okText || <FormattedMessage id={"OK"} />} </Button> : null
                        }
                    </ModalFooter>
                }
            </Form>
        </ReactStrapModal>
    );
}


function Form({onSubmit, children}) {
    return onSubmit ? <form onSubmit={onSubmit}>{children}</form> : children
}


Modal.propTypes = {
    title: PropTypes.string,
    visible: PropTypes.bool,
    onClose: PropTypes.func,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    confirmLoading: PropTypes.bool,
    onOk: PropTypes.func,
    okText: PropTypes.string,
    cancelText: PropTypes.string,
    size: PropTypes.oneOf(['lg', 'sm'])
}
