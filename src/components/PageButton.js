import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PageButton = ({ url }) => {
	const navigate = useNavigate();
	const buttonData = [
		{
			id: 1,
			navigate: url,
			text: '센서리스트',
		},
		{
			id: 2,
			navigate: `${url}/dashboard`,
			text: '데이터 그래프 대시보드',
		},
	];

	return (
		<PageButtonContainer>
			<div>
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
			</div>
		</PageButtonContainer>
	);
};

const PageButtonContainer = styled.nav`
	display: flex;
	max-width: 1061px;
	margin: auto;

	div {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin: auto;

		button {
			width: 155px;
			height: 40px;
			margin: 20px 5px;
			border: 1px solid black;
			&:hover {
				cursor: pointer;
			}
		}
	}
`;

export default PageButton;
