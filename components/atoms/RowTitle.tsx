import styled, { css } from "styled-components";
import moment from "moment-he";

const aMonthAgo = moment().subtract(1, "month");
const isNew = (date) => moment(date).isAfter(aMonthAgo);

interface Props {
  date?: string;
}

export default styled.h3<Props>`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  font-size: inherit;
  font-weight: 600;
  line-height: 1;
  margin: 0;

  ${(p) =>
    isNew(p.date) &&
    css`
      &::after {
        background: ${p.theme.colours.yellow};
        border-radius: 3px;
        color: white;
        content: "New";
        font-size: 0.8em;
        font-weight: bolder;
        letter-spacing: 0.5px;
        margin: 0 ${p.theme.spacing / 2}px;
        padding: 2px 5px;
      }
    `}

  &::before {
    content: attr(data-emoji);
    font-size: 1.2em;
    margin-right: 5px;
  }
`;
