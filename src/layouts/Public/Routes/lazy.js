import Loadable from 'react-loadable';

import Spinner from '../../../components/Spinner/Spinner';

export const Home = Loadable({
  loader: () => import('../../../pages/Public/Home/Home'),
  loading: Spinner
});

export const Collection = Loadable({
  loader: () => import('../../../pages/Public/Collection/Collection'),
  loading: Spinner
});

export const About = Loadable({
  loader: () => import('../../../pages/Public/About/About'),
  loading: Spinner
});

export const NotFound = Loadable({
  loader: () => import('../../../pages/Public/NotFound/NotFound'),
  loading: Spinner
});
