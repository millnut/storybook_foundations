import * as stylex from '@stylexjs/stylex';
import { globalTokens as $ } from '../../stylex/globalTokens.stylex';

export const styles = stylex.create({
  base: {
    padding: '1px 20px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 5,
    textDecoration: 'none'
  },
  link: {
    color: {
      default: $.primaryText,
      ':hover': 'white'
    },
    backgroundColor: {
      default: $.primaryBackground,
      ':hover': 'red'
    }
  },
  button: {
    color: {
      default: $.primaryText,
      ':hover': 'white'
    },
    backgroundColor: {
      default: $.primaryBackground,
      ':hover': 'red'
    }
  }
});
