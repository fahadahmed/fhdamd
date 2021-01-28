import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';

type Props = {
  value: string,
  handleToggle: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const ToggleSwitch:FunctionComponent<Props> = ({value, handleToggle}) => {
  const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 30px;
    height: 18px;
    bottom: 2px;
    margin-bottom: 0;
    margin-left: 5px;
    margin-top: 2px;
   

    input {
      display: none;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border: 2px solid ${value === 'light' ? "#000" : "#EC7D8A"};
      border-radius: 34px;

      &::before {
        position: absolute;
        content: "";
        height: 12px;
        width: 12px;
        left: 1px;
        top: 1px;
        bottom: 1.4px;
        background-color: ${value === 'light' ? "#000" : "#EC7D8A"};
        -webkit-transition: 0.4s;
        transition: 0.4s;

        
      }
    }
    .round:before {
      border-radius: 50%;
    }

    input:checked {
      -webkit-transform: translateX(12px);
      -ms-transform: translateX(12px);
      transform: translateX(12px);
      background-color: #007dba;
    }
  `;
  return(
    <div>
      <div>
        <Switch>
          <input type="checkbox" onChange={handleToggle} checked={value === 'light' ? false : true} />
          <span className="slider round"></span>
        </Switch>
      </div>
    </div>
  );
}

export default ToggleSwitch;