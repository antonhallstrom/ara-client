import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as api from '../../api'
import * as session from '../../store/reducers/session'

function mapDispatchToProps(dispatch, props) {
  return bindActionCreators(
    {
      onUserLogin: payload =>
        api.login(
          {
            username: payload.username,
            password: payload.password,
          },
          {
            success: res => [
              session.save(res.value),
              () => props.history.push('/editor'),
            ],
            failure: err => console.log(err),
          }
        ),
    },
    dispatch
  )
}

export const connector = connect(
  null,
  mapDispatchToProps
)
