import React from 'react';

// Context has two things Providers & Consumers
// Provider provides the value to the component tree
// Consumer consume the value

const ValueContext = React.createContext(45);

export default ValueContext;