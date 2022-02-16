import './App.css';
import FormikContainer from './components/FormikContainer';
import LoginForm from './components/LoginForm';
import {Grid} from '@material-ui/core'
import './styles.css'
import RegistrationForm from './components/RegistrationForm';
// import YoutubeForm from './components/YoutubeForm';

function App() {
  return (
    <div className="App">
      {/* <OldYoutubeForm/> */}
      {/* <YoutubeForm/> */}
      <FormikContainer/>
      {/* <Grid container> */}
        {/* <Grid item sm={12} md={8} lg={6}> */}
            {/* <LoginForm/>    */}
        {/* </Grid> */}
        {/* <Grid item sm={12} md={8} lg={6}> */}
             {/* <RegistrationForm/>    */}
         {/* </Grid> */}
      {/* </Grid> */}
    </div>
  );
}

export default App;
