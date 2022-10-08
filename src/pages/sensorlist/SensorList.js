import { useState } from 'react';
import styled from 'styled-components';
import { SENSOR_LIST_DATA } from './data/sensorListData';

const SensorList = () => {
	const [showedSensorList, setShowedSensorList] = useState(SENSOR_LIST_DATA);

	//cardNum === @ 인 것만 필터링 - 완료
	const handleFilterList = (cardNum) => {
		const filteredList = SENSOR_LIST_DATA.filter(
			(sensor) => sensor.shadow.connCardNum === cardNum
		);
		// .filter((sensor) => {
		// 	return sensor.thingName === 'FHL-100088';
		// });
		setShowedSensorList(filteredList);
	};

	return (
		<SensorListContainer>
			<div
				className='sensor-info'
				id='cardNum'
				onClick={(e) => {
					handleFilterList(0);
				}}
			>
				cardNum 0 인 것만 필터
			</div>
			<br />
			<br />
			{showedSensorList.map((sensor) => {
				return <div key={sensor.thingName}>{sensor.thingName}</div>;
			})}
			<br />
			<br />
			<div className='sensor-info' onClick={() => handleFilterList(1)}>
				cardNum 1인 것만 필터
			</div>
			<br />
			<div className='sensor-info' onClick={handleFilterList}>
				이름이 'FHL-100088'; 필터
			</div>
			<br />
			<div
				onClick={() => {
					setShowedSensorList(SENSOR_LIST_DATA);
				}}
			>
				초기화초기화초기화초기화
			</div>
		</SensorListContainer>
	);
};

const SensorListContainer = styled.div``;

export default SensorList;
