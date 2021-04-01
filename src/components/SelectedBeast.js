import React from 'react'
import { Modal, Button } from 'react-bootstrap'

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.hide} onHide={this.props.flipAbeast} >
        <Modal.Header closeButton>
          <Modal.Title>{
            this.props.singleBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={this.props.singleBeast.image_url} alt='horns' /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.flipAbeast}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default SelectedBeast;
