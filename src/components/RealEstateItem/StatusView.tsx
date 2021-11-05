import React from 'react';

const statusStyle = {
  width: 100,
  height: 40,
  borderWidth: 2,
  borderStyle: 'solid',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
  color: 'white',
};

const StatusView: React.FC<{ isExpried: boolean }> = ({ isExpried }) => (
  <div
    style={{
      ...statusStyle,
      backgroundColor: !isExpried ? '#2ecc71' : '#e74c3c',
    }}
  >
    {isExpried ? 'Expired' : 'Active'}
  </div>
);

export default StatusView;
