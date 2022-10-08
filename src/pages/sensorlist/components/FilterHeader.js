import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SENSOR_LIST_DATA } from '../data/sensorListData';

const FilterHeader = ({ setShowedSensorList }) => {
	const [filterItems, setFilterItems] = useState({
		batLvl: '-',
		cardNum: '-',
	});
	const [filterBtnDisable, setFilterBtnDisable] = useState(true);

	useEffect(() => {
		filterItems.cardNum === '-' && filterItems.batLvl === '-'
			? setFilterBtnDisable(true)
			: setFilterBtnDisable(false);
	}, [filterItems]);

	const handleFilterBtn = () => {
		const { batLvl, cardNum } = filterItems;
		let result = SENSOR_LIST_DATA;
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

	const handleFilterItems = (e) => {
		const { id } = e.target;
		const { value } = e.target.options[e.target.selectedIndex];
		if (filterItems[id] !== value) {
			setFilterItems((prev) => ({
				...prev,
				[id]: value,
			}));
		}
	};

	return (
		<FilterHeaderContainer>
			<br />
			<br />
			<div className='filter-container'>
				<div>
					<span>batLvl</span>
					<select id='batLvl' onClick={handleFilterItems}>
						<option>-</option>
						<option>{`> 20`}</option>
						<option>{`<= 20`}</option>
					</select>
				</div>
			</div>
			<br />
			<br />
			<div>
				<span>cardNum</span>
				<select id='cardNum' onClick={handleFilterItems}>
					<option>-</option>
					<option>0</option>
					<option>1</option>
				</select>
			</div>
			<br />

			<button disabled={filterBtnDisable} onClick={handleFilterBtn}>
				적용
			</button>
			<br />
			<br />
			<button
				onClick={() => {
					window.location.replace('/');
				}}
			>
				초기화
			</button>
			<br />
			<br />
		</FilterHeaderContainer>
	);
};

const FilterHeaderContainer = styled.div``;

export default FilterHeader;
