import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    books: [],
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)
