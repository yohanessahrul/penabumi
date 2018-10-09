import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducers } from 'redux-form'

import contactForm from '../reducers/contactForm'
import individualForm from '../reducers/individualForm'
import foundationForm from '../reducers/institutionForm'


const rootReducers = combineReducers({
    contactForm,
    individualForm,
    foundationForm,
    form:formReducers
})

export default createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)