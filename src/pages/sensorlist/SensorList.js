import { useState } from 'react';
import styled from 'styled-components';
import { SENSOR_LIST_DATA } from './data/sensorListData';
import FilterHeader from './components/FilterHeader';
import SensorListTable from './components/SensorListTable';

const SensorList = () => {
	const firstSortedList = SENSOR_LIST_DATA.sort(
		(a, b) => a.thingName.slice(-6) - b.thingName.slice(-6)
	);
	const [showedSensorList, setShowedSensorList] = useState(firstSortedList);

	return (
		<SensorListContainer>
			<FilterHeader
				firstSortedList={firstSortedList}
				setShowedSensorList={setShowedSensorList}
			/>
			<div>배터리가 20%이하이면 붉게 표시됩니다.</div>
			<SensorListTable
				showedSensorList={showedSensorList}
				setShowedSensorList={setShowedSensorList}
			/>
		</SensorListContainer>
	);
};
const SensorListContainer = styled.div`
	max-width: 1061px;
	margin: auto;
`;

export default SensorList;
