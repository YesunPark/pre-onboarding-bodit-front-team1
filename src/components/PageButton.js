import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const PageButton = () => {
	const navigate = useNavigate();
	const params = useParams();

	console.log(params);

	return (
		<PageButtonContainer>
			<button
				className='page-button'
				onClick={() => {
					navigate('/dashboard');
				}}
			>{`=> 데이터 그래프 대시보드로 이동`}</button>
		</PageButtonContainer>
	);
};

const PageButtonContainer = styled.nav`
	max-width: 1061px;
	margin: auto;

	button {
		width: 133px;
		height: 50px;
		margin: 20px auto;
		border: 1px solid black;
		&:hover {
			cursor: pointer;
		}
	}
`;

export default PageButton;
