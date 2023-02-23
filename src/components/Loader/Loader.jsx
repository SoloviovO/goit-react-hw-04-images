import { FidgetSpinner } from 'react-loader-spinner';

export const Loader = () => (
  <FidgetSpinner
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
    wrapperClass=""
    ballColors={['#3282b8', '#e238d6', '#96409c']}
    backgroundColor="#2e35f4"
  />
);
