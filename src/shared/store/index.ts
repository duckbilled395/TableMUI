import {Action, applyMiddleware, bindActionCreators, combineReducers, createStore} from 'redux'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import mainReducer from "./reducers/mainReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import * as MainActionCreators from './actions/mainActions'

const reducers = combineReducers({
    main: mainReducer
})

export type AppStateType = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    AppStateType,
    unknown,
    Action<string>>;
const store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store

const ActionCreators = {
    ...MainActionCreators
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector

// @ts-ignore
window.store = store