import React from 'react'
import './ContactForm.css'
import Spinner from '../Spinner/Spinner'
import { FormattedMessage } from 'react-intl';

const contactForm = (props) => {
    return (
        <form autoComplete="off" className="Contact-form" id="contactForm" onSubmit={props.onSubmitForm} >
            <div className="form-group slideUp">
                <input
                    id="Contact-name" name="name" type="name"
                    className={"form-control " + (props.validName ? 'FocusValid' : 'FocusNotValid')}
                    onChange={(e) => props.onChangeHandler('name', e.target.value)} />
                <label htmlFor="Contact-name">{props.labelName}</label>
                <span></span>
            </div>
            <div className="form-group slideDown">
                <input type="email" name="email"
                    className={"form-control " + (props.validEmail ? 'FocusValid' : 'FocusNotValid')}
                    id="ContactEmail" aria-describedby="emailHelp" onChange={(e) => props.onChangeHandler('email', e.target.value)} />
                <label htmlFor="ContactEmail">{props.labelEmail}</label>
                <span></span>
            </div>
            <div className="form-group textScaleIn">
                <textarea
                    className={"form-control " + (props.validMessage ? 'FocusValid' : 'FocusNotValid')}
                    name="message" id="ContactTxtArea" rows="1" onChange={(e) => props.onChangeHandler('message', e.target.value)} ></textarea>
                <label htmlFor="ContactTxtArea">{props.labelMessage}</label>
                <span id="messageSpan"></span>
            </div>
            <div className="slideUp">
                {props.loading
                    ? <Spinner color='#673ab7' />
                    : <button disabled={props.buttonDisabled ? 'disabled' : null} type="submit" className="btn-default"  >
                        <FormattedMessage id="contactForm.SendButton" defaultMessage="Send" />
                    </button>}
            </div>
        </form>
    )
}

export default contactForm