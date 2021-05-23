let Input = (props) => {
	return (
		<div className="text-input">
			<span className="icon-input">{props.label}</span>
			<input type={props.type} />
		</div>
	);
}

Input.defaultProps = {
	label: "Label",
	type: "Text"
}

let ListItem = (props) => {
	return (
		<div className="list-item">
			<h2>{props.title}</h2>
			<div>
				{props.description}
				{props.children}
			</div>
		</div>
	);
}

ListItem.defaultProps = {
	title: "Add a title",
	description: "Add description here",
	children: <div></div>
}

class Modal extends React.Component {

	static defaultProps = {
		title: "Modal Title",
		icon: "fas fa-atom",
		children: <div>Add children here!</div>
	}

	constructor(props) {
		super(props)
		this.state = {
			show: false
		}
	}

	openModal() {
		this.setState(
			{ show: true }
		)
	}

	closeModal() {
		this.setState(
			{ show: false }
		);
	}

	render() {
		return (
			<div>
				<button className={"modal-button" + " " + this.props.icon} onClick={() => this.openModal()}> </button>
				{this.state.show && <div className="modal fade-in">
					<div className="modal-head">
						<span>{this.props.title}</span>
						<button className="fas fa-times" id='button' onClick={() => this.closeModal()}></button>
					</div>
					<div className="modal-body">
						{this.props.children}
					</div>
				</div>}
			</div>
		)
	}
}
