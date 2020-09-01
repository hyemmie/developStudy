import React from 'react';
import './Palette.css';

const Color = ({ color, select, onClick }) => {
  return (
    <div className={`color ${select && 'active'}`} style={{ background: color}} onClick={onClick}>
    
    </div>
  )
}

const Palette = ({colors, selected, onSelect}) => {
  const colorList = colors.map(
    (color) => (<Color color={color} select={selected===color} onClick={() => onSelect(color)} key={color}/>)
  );
  return (
    <div className="palette">
      {colorList}
    </div>
  );
};

export default Palette;