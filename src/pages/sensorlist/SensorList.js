
import {useState} from 'react';
import styled from 'styled-components'
import { SENSOR_LIST_DATA } from './data/sensorListData';
import SensorListTable from './components/SensorListTable';

const SensorList = () => {
  const firstSortedList = SENSOR_LIST_DATA.sort(
    (a, b) => a.thingName.slice(-6) - b.thingName.slice(-6)
  );
  const [showedSensorList, setShowedSensorList] = useState(firstSortedList);
  return (
    <SensorListContainer>
      <SensorListTable showedSensorList={showedSensorList} />
    </SensorListContainer>
  )
}

const SensorListContainer = styled.div``

export default SensorList;
