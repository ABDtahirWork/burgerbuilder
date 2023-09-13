import React, { Component } from 'react'
import Auxilary from '../Auxilary'
import Modal from '../../components/UI/Modal/Modal'


const errorHandaler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props)

      this.state = {
        error: false,
      }

      this.closeErrorModal = this.closeErrorModal.bind(this)

      this.requestInterceptor = axios.interceptors.request.use((request) => {
        this.setState({ error: false })
        return request
      })

      this.responseInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: true })
          return Promise.reject(error)
        }
      )
    }

    closeErrorModal() {
      this.setState({ error: false })
    }

    componentWillUnmount() {
      // Eject the interceptors when the component unmounts
      axios.interceptors.request.eject(this.requestInterceptor)
      axios.interceptors.response.eject(this.responseInterceptor)
    }

    render() {
      return (
        <Auxilary>
          <Modal show={this.state.error} closeModal={this.closeErrorModal}>
            {this.state.error ? 'Axios Network Error!' : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxilary>
      )
    }
  }
}

export default errorHandaler
