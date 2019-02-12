import { Login as Component } from './login'
import { connector } from './connector'

export const Login = connector(Component)
