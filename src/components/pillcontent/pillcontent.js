import react from 'react';
import styled, { css } from 'styled-components';
import './pillcontent.scss';

function PillContent({ text, index }) {
  return (
    <PillDesc>
      <span>{text}</span>
    </PillDesc>
  );
}

export default PillContent;

const PillDesc = styled.div``;
