import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
const modalRoot = document.getElementById('modal-root')

export function Modal(props) {
  return ReactDOM.createPortal(props.children, modalRoot)
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
}
