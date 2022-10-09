import { useState } from 'react';
import styled from 'styled-components';
import { SENSOR_LIST_DATA } from './data/sensorListData';
import FilterHeader from './components/FilterHeader';
import SensorListTable from './components/SensorListTable';

const SensorList = ({ url }) => {
	const firstSortedList = SENSOR_LIST_DATA.sort(
		(a, b) => a.thingName.slice(-6) - b.thingName.slice(-6)
	);
	const [showedSensorList, setShowedSensorList] = useState(firstSortedList);

	return (
		<SensorListContainer>
			<FilterHeader
				url={url}
				firstSortedList={firstSortedList}
				setShowedSensorList={setShowedSensorList}
			/>
			<div>배터리가 20%이하이면 붉게 표시됩니다.</div>
			<div className='table-container'>
				<SensorListTable
					showedSensorList={showedSensorList}
					setShowedSensorList={setShowedSensorList}
				/>
			</div>
		</SensorListContainer>
	);
};
const SensorListContainer = styled.div`
	max-width: 1061px;
	margin: auto;

	.table-container {
		width: inherit;
		overflow: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.table-container::-webkit-scrollbar {
		display: none;
	}
`;

export default SensorList;
