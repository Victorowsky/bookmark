import "./App.scss";
import Contact from "./comp/Contact/Contact";
import Download from "./comp/DownloadExt/Download";
import Faq from "./comp/FAQ/Faq";
import Features from "./comp/Features/Features";
import Header from "./comp/Header/Header";
import Simple from "./comp/SimpleBookmark/Simple";

function App() {
	return (
		<>
		<div className="app">
			<Header />
			<Simple />
			<Features/>
			<Download/>
			<Faq/>
			<Contact/>
		</div>
		</>
	);
}

export default App;
