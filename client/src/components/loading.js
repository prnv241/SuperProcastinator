import React from 'react';

export const Loading = () => {
  return (
    <div className="col-12" id="divElement">
      <span className="fa fa-spinner fa-pulse fa-fw fa-3x text-dark"></span>
      <p>Loading...</p>
    </div>
  );
}