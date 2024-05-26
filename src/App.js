import "./App.css";
import Card from "./components/card";

function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<Card
					name="Бетмен"
					universe="DC Comics"
					occupation="борец с преступностью, филантроп, миллиардер"
					friends="Робин, Бэтгерл"
					imgLink="https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg"
				/>
				<Card
					name="Супермен"
					universe="DC Comics"
					occupation="борец за справедливость, репортёр"
					friends="собака Крипто"
					imgLink="https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg"
				/>
				<Card
					name="Железный человек"
					universe="Marvel Comics"
					occupation="гений, миллиардер, плейбой, филантроп"
					friends="Мстители"
					imgLink="https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg"
				/>
			</div>
		</div>
	);
}

export default App;
