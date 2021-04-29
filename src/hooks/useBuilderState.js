import React, { useContext } from 'react';

import BuilderContext from '../contexts/builder-context';

export const useBuilderState = () => {
  return useContext(BuilderContext);
}

export default useBuilderState;
