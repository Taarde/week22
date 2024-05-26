function Card(props) {
	return (
		<div className="card">
			<h2 className="name">{props.name}</h2>
			<p className="universe">
				<span className="description">Вселенная:</span> {props.universe}
			</p>
			<p className="occupation">
				<span className="description">Род деятельности:</span>{" "}
				{props.occupation}
			</p>
			<p className="friends">
				<span className="description">Друзья:</span> {props.friends}
			</p>
			<img
				className="image"
				src={props.imgLink}
				alt={props.name}
			/>
		</div>
	);
}

export default Card;
