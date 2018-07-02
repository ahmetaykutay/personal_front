import React, { Component } from 'react'
import { checkValidity, updateObject } from '../../utility'
import './Contact.css'
import ContactForm from '../../components/ContactForm/ContactForm'
import { FormattedMessage, injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { showMessage } from '../../store/actions/index'

class Contact extends Component {
  state = {
    formIsValid: false,
    loading: false,
    contactForm: {
      name: {
        placeholder: 'Name',
        value: '',
        validation: {
          required: true
        },
        valid: null,
        touched: false,
        type: 'input',
      },
      email: {
        placeholder: 'Email',
        value: '',
        validation: {
          required: true,
          email: true,
        },
        valid: null,
        touched: false,
        type: 'input'
      },
      message: {
        placeholder: 'Your Message',
        value: '',
        validation: {
          required: true
        },
        valid: null,
        touched: false,
        type: 'textarea'
      }
    }
  }

  // handle form change
  inputChangeHandler = (name, newValue) => {
    const isValid = checkValidity(newValue, this.state.contactForm[name].validation)
    const newForm = updateObject(this.state.contactForm, {
      [name]: {
        ...this.state.contactForm[name],
        value: newValue,
        touched: true,
        valid: isValid
      }
    })
    this.setState({ contactForm: newForm, formIsValid: this.isFormValid(newForm), })
  }

  // check if form is valid
  isFormValid = (newForm) => {
    let formIsValid = true
    for (let key in newForm) {
      formIsValid = newForm[key].valid && formIsValid
    }
    return formIsValid
  }

  // checks if given input in contactForm is valid
  checkValidInput = (el) => {
    if (this.state.contactForm[el].value === '') return true
    return (
      this.state.contactForm[el].valid
      && this.state.contactForm[el].touched
    )
  }

  clearForm = () => {
    const newForm = this.state.contactForm
    for (let key in newForm) {
      newForm[key].value = ''
      newForm[key].touched = false
    }

    this.setState({ contactForm: newForm })
  }

  submitContactForm = (e) => {
    e.preventDefault()
    // temp try formspree
    // let fd = new FormData()
    // fd.append('email', this.state.contactForm.email.value)
    // fd.append('name', this.state.contactForm.name.value)
    // fd.append('message', this.state.contactForm.message.value)
    // fetch('https://formspree.io/the-rixi@windowslive.com', {
    //   body: fd,
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   method: "post",
    // }).then(res => console.log(res))
    //   .then(data => {
    //     const successM = this.props.intl.formatMessage({
    //       id: 'contactPage.success_message',
    //       defaultMessage: 'Your message has been sent'
    //     })
    //     this.props.showMessage('success', successM)
    //     this.clearForm()
    //     this.setState({ loading: false })
    //   })
    //   .catch(err => {
    //     const failedM = this.props.intl.formatMessage({
    //       id: 'contactPage.failed_message',
    //       defaultMessage: 'Sending message failed'
    //     })
    //     this.props.showMessage('failed', failedM)
    //     console.log(err)
    //     this.clearForm()
    //     this.setState({ loading: false })
    //   })

    //
    const messageData = {
      name: this.state.contactForm.name.value,
      email: this.state.contactForm.email.value,
      message: this.state.contactForm.message.value
    }

    this.setState({ loading: true })

    fetch('/api/contact', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(messageData)
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          const failedM = this.props.intl.formatMessage({
            id: 'contactPage.failed_message',
            defaultMessage: 'Sending message failed'
          })
          this.props.showMessage('failed', failedM)
        } else {
          const successM = this.props.intl.formatMessage({
            id: 'contactPage.success_message',
            defaultMessage: 'Your message has been sent'
          })
          this.clearForm()
          this.props.showMessage('success', successM)
        }
        this.setState({ loading: false })
      })
      .catch(err => {
        const failedM = this.props.intl.formatMessage({
          id: 'contactPage.failed_message',
          defaultMessage: 'Sending message failed'
        })
        this.props.showMessage('failed', failedM)
        this.setState({ loading: false })
      })
  }

  render() {
    const label_name = this.state.contactForm.name.value === ''
      ? this.props.intl.formatMessage({ id: 'contactPage.label_name', defaultMessage: 'Name' })
      : this.state.contactForm.name.value
    const label_email = this.state.contactForm.email.value === ''
      ? this.props.intl.formatMessage({ id: 'contactPage.label_email', defaultMessage: 'Email' })
      : this.state.contactForm.email.value
    const label_message = this.state.contactForm.message.value === ''
      ? this.props.intl.formatMessage({ id: 'contactPage.label_message', defaultMessage: 'Your Message' })
      : this.state.contactForm.message.value

    return (
      <div className="fadeIn Page">
        <h1 className="textScaleIn"><FormattedMessage id="contactPage.title" defaultMessage="Contact Me" /></h1>
        <div className="contact-form-container">
          <ContactForm
            labelEmail={label_email}
            labelMessage={label_message}
            labelName={label_name}
            onChangeHandler={this.inputChangeHandler}
            onSubmitForm={this.submitContactForm}
            buttonDisabled={!this.state.formIsValid}
            loading={this.state.loading}
            validName={this.checkValidInput('name')}
            validEmail={this.checkValidInput('email')}
            validMessage={this.checkValidInput('message')}
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  showMessage: (messageType, messageText) => dispatch(showMessage(messageType, messageText))
})

export default connect(null, mapDispatchToProps)(injectIntl(Contact))