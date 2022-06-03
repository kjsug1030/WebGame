import React from "react";
import styled from "styled-components";

const BoardCell = ({ cell }) => {
  return (
    <div className={`BoardCell ${cell.className}`}>
      <div className="Sparkle"></div>
    </div>
  );
};

export default BoardCell;

const Container = styled.div`
  width: auto;
  border-radius: 6px;
  position: relative;

  .tetrimino {
    border-top: 3px solid rgba(255, 255, 255, 0.1);
    border-left: 3px solid rgba(255, 255, 255, 0.1);
    border-top: 3px solid rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid rgba(0, 0, 0, 0.1);
  }

  .tetrimino .Sparkle {
    position: absolute;
    z-index: 10;
    width: 6px;
    height: 6px;
    left: -2px;
    top: -2px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 4px, 4px;
  }

  .tetrimino.ghost .Sparkle {
    opacity: 0;
  }

  .tetrimino__i {
    background-color: rgba(80, 227, 230, 1);
  }
  .tetrimino__j {
    background-color: rgba(36, 95, 223, 1);
  }
  .tetrimino__l {
    background-color: rgba(223, 173, 36, 1);
  }
  .tetrimino__o {
    background-color: rgba(223, 217, 36, 1);
  }
  .tetrimino__s {
    background-color: rgba(48, 211, 56, 1);
  }
  .tetrimino__t {
    background-color: rgba(132, 61, 198, 1);
  }
  .tetrimino__z {
    background-color: rgba(240, 80, 195, 1);
  }
`;
