import React from 'react';

export default function Content({ children }) {
  return (
    <div className="container-fluid py-4">
      {children}
    </div>
  );
}
