import React from 'react';

export const BrowserRouter = ({ children }) => <div>{children}</div>;
export const Route = ({ element }) => <>{element}</>; // Возвращаем переданный элемент
export const Routes = ({ children }) => <>{children}</>;
export const Link = ({ children }) => <a>{children}</a>;
