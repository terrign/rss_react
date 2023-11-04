import React from 'react';

class ErrorThrower extends React.Component<unknown, { error: boolean }> {
  constructor(props = {}) {
    super(props);
    this.state = { error: false };
  }

  throwError = () => {
    throw new Error('Test error');
  };

  render() {
    return (
      <>
        <button type="button" onClick={() => this.setState({ error: true })}>
          Error
        </button>
        {this.state.error && this.throwError()}
      </>
    );
  }
}

export default ErrorThrower;
