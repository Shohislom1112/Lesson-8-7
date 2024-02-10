import { ClipLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '150px auto',
  borderColor: 'blue',
};

const Loader = () => {
  return (
    <ClipLoader
      color={'white'}
      loading={true}
      size={170}
      cssOverride={override}
    />
  );
};

export default Loader;
