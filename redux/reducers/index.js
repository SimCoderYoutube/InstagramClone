import { combineReducers } from 'redux'
import { user } from './user'
import { users } from './users'

const Reducers = combineReducers({
    userState: user,
    usersState: users
})

export default Reducers