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
		children: <div>Add children here!</div>
	}

	constructor(props) {
		super(props)
		this.state = {
			show: true
		}
	}

	openCloseModal() {
		this.setState(prevState => (
			{ show: !prevState.show }))
	}
	closeModal() {
		this.setState({ show: false })
	}

	render() {
		return (
			<div>
				{this.state.show && <div className="modal">
					<div className="modal-head">
						<span>{this.props.title}</span>
						<button id='button' onClick={() => this.openCloseModal()}>x</button>
					</div>
					<div className="modal-body">
						{this.props.children}
					</div>
				</div>}
			</div>
		)
	}
}
