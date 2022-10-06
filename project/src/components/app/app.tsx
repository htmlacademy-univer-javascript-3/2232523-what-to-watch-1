import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';

type WelcomeScreenProps = {
  name: string;
  genre: string;
  date: string;
}

function App({name, genre, date} : WelcomeScreenProps): JSX.Element {
  return (
    <WelcomeScreen name={name} genre={genre} date={date}/>
  );
}

export default App;
