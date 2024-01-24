import React from 'react';
import classNames from 'classnames';

// class Button extends React.Component {
//   componentDidMount() {
//     console.log('button is render');
//   }
//   componentDidUpdate() {

//   }
//   render() {
//     return <button className={this.props.outline ? 'button button--outline' : 'button'}>{this.props.text}</button>;
//   }
// }

// export default Button;

export default function Button({ onClick, className, outline, children }) {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
}
