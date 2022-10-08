import { useState } from 'react';
import styled from 'styled-components';
import { SENSOR_LIST_DATA } from './data/sensorListData';
import FilterHeader from './components/FilterHeader';

const SensorList = () => {
	const firstSortedList = SENSOR_LIST_DATA.sort(
		(a, b) => a.thingName.slice(-6) - b.thingName.slice(-6)
	);
	const [showedSensorList, setShowedSensorList] = useState(firstSortedList);

	return (
		<SensorListContainer>
			<FilterHeader setShowedSensorList={setShowedSensorList} />
			{showedSensorList.map((sensor) => {
				return (
					<div key={sensor.thingName}>
						{sensor.shadow.connCardNum}, {sensor.shadow.batLvl}
					</div>
				);
			})}
		</SensorListContainer>
	);
};

const SensorListContainer = styled.div``;

export default SensorList;
