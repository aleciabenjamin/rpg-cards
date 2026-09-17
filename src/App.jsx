import "./App.css";

function calculatePower(level, hp) {
	return level * 10 + hp;
}

// 1. KORT-MALLEN (Komponenten)
function CharacterCard(props) {
	const hero = props.character;
	if (hero.hp <= 0) {
		return (
			<article className="card fallen">
				<h2>{hero.name}</h2>
				<p>FALLEN IN BATTLE</p>
			</article>
		);
	}
	let veteranText = "";
	if (hero.level >= 10) {
		veteranText = " ★ Veteran";
	}
	const power = calculatePower(hero.level, hero.hp);

	return (
		<article className="card">
			<h2>
				{hero.name}
				{veteranText}
			</h2>
			<p>Roll: {hero.role}</p>
			<p>HP: {hero.hp}</p>
			<p>Level: {hero.level}</p>
			<p>Power: {power}</p>
		</article>
	);
}

// 2. HUVUDSIDAN
export default function App() {
	const hero1 = {
		name: "Alecia",
		role: "Oracle",
		hp: 212,
		level: 17,
	};

	return (
		<main>
			<h1>RPG Guild Dashboard</h1>
			<CharacterCard character={hero1} />
		</main>
	);
}
