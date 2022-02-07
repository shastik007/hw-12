import React from 'react';

export const Card = ({children , ...props}) => {
  return <div {...props}>{children}</div>;
};
