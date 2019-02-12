import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as api from '../../api'
import * as session from '../../store/reducers/session'

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onFetchAdminStuff: () =>
        api.admin({
          success: res => console.log(res.value),
          failure: err => console.log(err),
        }),
      onUserLogin: payload =>
        api.login(
          {
            username: payload.username,
            password: payload.password,
          },
          {
            success: res => [session.save(res.value)],
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
