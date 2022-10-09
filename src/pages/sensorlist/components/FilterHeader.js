import { useEffect, useState } from 'react';
import styled from 'styled-components';

const FilterHeader = ({ firstSortedList, setShowedSensorList }) => {
	const [filters, setFilters] = useState({ batLvl: '-', cardNum: '-' });
	const [filterBtnDisable, setFilterBtnDisable] = useState(true);

	useEffect(() => {
		filters.cardNum === '-' && filters.batLvl === '-'
			? setFilterBtnDisable(true)
			: setFilterBtnDisable(false);
	}, [filters]);

	const handleFilterBtn = () => {
		const { batLvl, cardNum } = filters;
		let result = firstSortedList;
		switch (batLvl) {
			case '> 20':
				result = result.filter((sensor) =>
					cardNum === '-'
						? sensor.shadow.batLvl > 20
						: sensor.shadow.batLvl > 20 &&
						  sensor.shadow.connCardNum === Number(cardNum)
				);
				break;
			case '<= 20':
				result = result.filter((sensor) =>
					cardNum === '-'
						? sensor.shadow.batLvl <= 20
						: sensor.shadow.batLvl <= 20 &&
						  sensor.shadow.connCardNum === Number(cardNum)
				);
				break;
			case '-':
				result = result.filter(
					(sensor) => sensor.shadow.connCardNum === Number(cardNum)
				);
				break;
			default:
		}
		setShowedSensorList(result);
	};

	const handleFilters = (e) => {
		const { id } = e.target;
		const { value } = e.target.options[e.target.selectedIndex];
		if (filters[id] !== value) {
			setFilters((prev) => ({
				...prev,
				[id]: value,
			}));
		}
	};

	return (
		<FilterHeaderContainer>
			<span className='title'>Filter : </span>
			<div className='filter'>
				<span>batLvl</span>
				<select id='batLvl' onClick={handleFilters}>
					<option>-</option>
					<option>{`> 20`}</option>
					<option>{`<= 20`}</option>
				</select>
			</div>
			<div className='filter'>
				<span>cardNum</span>
				<select id='cardNum' onClick={handleFilters}>
					<option>-</option>
					<option>0</option>
					<option>1</option>
				</select>
			</div>
			<div className='button-container'>
				<button disabled={filterBtnDisable} onClick={handleFilterBtn}>
					적용
				</button>
				<button
					onClick={() => {
						window.location.replace('/');
					}}
				>
					초기화
				</button>
			</div>
		</FilterHeaderContainer>
	);
};

const FilterHeaderContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 30px;

	.title {
		margin-right: 10px;
		font-size: 17px;
		font-weight: 600;
		line-height: 28px;
	}

	.filter {
		margin-right: 10px;
		span {
			margin-right: 5px;
			line-height: 28px;
		}
		select {
			width: 70px;
			padding: 2px 3px;
			border: 1px solid black;
			font-size: 15px;
			&:focus {
				outline: none;
			}
		}
	}

	.button-container {
		button {
			height: 28px;
			margin-right: 10px;
			padding: 0px 10px;
			border: 1px solid black;
			font-size: 15px;
		}
	}
`;

export default FilterHeader;
