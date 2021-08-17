// pkgs:
import type { NextPage } from 'next';

// comps:
import InitialComp from '../components/initial/initial.comp';

// component::
const Home: NextPage = () => {
  return (
    <div className="container">
      <InitialComp />
    </div>
  );
};

export default Home;
