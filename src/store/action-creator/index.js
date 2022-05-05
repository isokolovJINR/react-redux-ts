import * as UserActionCreators from '../../store/action-creator/user'
import * as TotoActionCreators from '../../store/action-creator/todo'

export default {
    ...TotoActionCreators,
    ...UserActionCreators
}