import './button.css';

/* eslint-disable-next-line */
export interface ButtonProps {
	text: string;
	onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
	return (
		<button className="button" onClick={onClick}>
			{text}
		</button>
	);
};
