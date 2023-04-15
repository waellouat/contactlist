import {configureStore} from '@reduxjs/toolkit'

import contactSlice from './ContactSlice'

export default configureStore ({
    reducer:{
        contact:contactSlice
    }
})