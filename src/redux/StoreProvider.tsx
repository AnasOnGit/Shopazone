'use client';
import React, { ReactElement } from 'react'
import { store } from './store'
import { Provider } from 'react-redux'
interface Props {
    children: React.ReactNode;
}

function StoreProvider({ children }: Props): ReactElement {
    return <Provider store={store}>{children}</Provider>
}

export default StoreProvider





