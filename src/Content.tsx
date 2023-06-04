import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
  }

export const Content: React.FC<LayoutProps> = ({children}) =>
     <div className="content">{children}</div>