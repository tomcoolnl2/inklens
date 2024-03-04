import './button.css';

/* eslint-disable-next-line */
export interface ButtonProps {
	children: React.ReactNode;
	onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<button className="button" onClick={onClick}>
			{children}
		</button>
	);
};
