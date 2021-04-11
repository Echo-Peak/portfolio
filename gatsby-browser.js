import React from "react";

import DataProvider from './src/contexts/contentful';

export const wrapRootElement = ({ element }) => {
  return (
    <DataProvider>
      {element}
    </DataProvider>
  )
}