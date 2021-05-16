import './App.css';
// import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from './components/Loader';

const theme = createMuiTheme({
	// palette: {
	//   primary: {
	//     main: '#8c9eff'
	//   },
	//   secondary: {
	//     main: '#ff6e40'
	//   }
	// }
})

const App = (props) => {
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		let isLoading = null;
		isLoading = setTimeout(() => setLoading(false), 2000);
		return () => clearInterval(isLoading);
	}, []);

	return (
		<MuiThemeProvider theme={theme}>
			<BrowserRouter>
				{
					isLoading ? <Loader /> : <SideBar />
				}
			</BrowserRouter>
		</MuiThemeProvider>
	);
}
export default App;