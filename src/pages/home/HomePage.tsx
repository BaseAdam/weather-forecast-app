import React from 'react';

export function HomePage(): JSX.Element {
  return (
    <div>
      <h2
        style={{
          display: 'flex',
          justifyContent: 'center',
          color: '#252525',
          fontWeight: '350',
          fontFamily: 'Noto Sans',
          fontSize: '20px',
          marginLeft: '15px',
        }}
      >
        Please enter city name and click search.
      </h2>
    </div>
  );
}
