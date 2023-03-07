import PropTypes from 'prop-types';

import { BtnList, BtnItem, Buttons } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnList>
      {options.map(option => {
        return (
          <BtnItem key={option}>
            <Buttons type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </Buttons>
          </BtnItem>
        );
      })}
    </BtnList>
  );
};

FeedbackOptions.protoTypes = {
  options: PropTypes.arrayOf().isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
