import { compose } from 'redux'
import withLayout from './withLayout'
import withStyle from './withStyle'

export const pageWithoutLayout = compose(
  withStyle,
);

export default compose(
  pageWithoutLayout,
  withLayout,
);
