import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PageButton = () => {
	const navigate = useNavigate();
	const buttonData = [
		{ id: 1, navigate: '/', text: '센서리스트' },
		{ id: 2, navigate: '/dashboard', text: '데이터 그래프 대시보드' },
	];

	return (
		<PageButtonContainer>
			{buttonData.map((button) => {
				return (
					<button
						key={button.id}
						onClick={() => {
							navigate(button.navigate);
						}}
					>
						{button.text}
					</button>
				);
			})}
		</PageButtonContainer>
	);
};

const PageButtonContainer = styled.nav`
	max-width: 1061px;
	margin: auto;

	button {
		width: 155px;
		height: 40px;
		margin: 20px 5px 20px auto;
		border: 1px solid black;
		&:hover {
			cursor: pointer;
		}
	}
`;

export default PageButton;
