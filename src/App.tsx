import { Profile } from './components/Profile';
import { HomeProfileLayout } from './Layouts/HomeProfileLayout';

const dataProfile = {
  name: 'Ederson Pravtz',
};

const App = () => {
  return (
    <HomeProfileLayout>
      <Profile name={dataProfile.name} />
    </HomeProfileLayout>
  );
};

export default App;
