import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./components/MainLayout";
import BlogComponent from "./components/BlogComponent";
import Resume from "./assets/resume.pdf";
import SingleProjectComponent from "./components/SingleProjectComponent";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainLayout />} />
					<Route path="/projects/:id" element={<SingleProjectComponent />} />
					<Route path="/blog" element={<BlogComponent />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
