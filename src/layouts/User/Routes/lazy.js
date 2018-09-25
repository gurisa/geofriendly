import Loadable from 'react-loadable';

import Spinner from '../../../components/Spinner/Spinner';

export const Home = Loadable({
  loader: () => import('../../../pages/User/Home/Home'),
  loading: Spinner
});

export const Collection = Loadable({
  loader: () => import('../../../pages/User/Collection/Collection'),
  loading: Spinner
});

export const About = Loadable({
  loader: () => import('../../../pages/User/About/About'),
  loading: Spinner
});

export const NotFound = Loadable({
  loader: () => import('../../../pages/User/NotFound/NotFound'),
  loading: Spinner
});
