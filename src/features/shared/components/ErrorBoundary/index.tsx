import React, { Component, ErrorInfo, ReactNode } from 'react'

import { FlexContainer } from '@/features/shared'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    // window.location.reload()
    console.error(error)
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <FlexContainer
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          style={{ paddingTop: '3rem' }}
        >
          <h1 style={{ color: 'white' }}> Ooops.. there was an error.</h1>
          <h2 style={{ color: 'white' }}>Please refresh the page.</h2>
        </FlexContainer>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
