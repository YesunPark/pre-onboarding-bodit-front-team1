import styled from 'styled-components'
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';

const SensorListTable = ({ showedSensorList, setShowedSensorList }) => {

    const handleSortBat = (e) => { 
        let sortedList = [...showedSensorList];
        if ( e.target.id === 'up' ) {
            sortedList.sort(
                (a, b) => a.shadow.batLvl - b.shadow.batLvl
            );
        }
        else if (e.target.id === 'down') {
             sortedList.sort(
                (a, b) => b.shadow.batLvl - a.shadow.batLvl
            );
        }
        setShowedSensorList(sortedList);
    };

    const handleSortCardNo = (e) => {
        let sortedList = [...showedSensorList];
        if (e.target.id === 'up') {
            sortedList.sort(
                (a, b) => a.shadow.connCardNum - b.shadow.connCardNum
            );
        }
        else if (e.target.id === 'down') {
            sortedList.sort(
                (a, b) => b.shadow.connCardNum - a.shadow.connCardNum
            );
        }
        setShowedSensorList(sortedList);
    };

    const handleSortRawSent = (e) => {
        let sortedList = [...showedSensorList];
        if (e.target.id === 'up') {
            sortedList.sort(
                (a, b) => a.shadow.rawSentCnt - b.shadow.rawSentCnt
            );
        }
        else if (e.target.id === 'down') {
            sortedList.sort(
                (a, b) => b.shadow.rawSentCnt - a.shadow.rawSentCnt
            );
        }
        setShowedSensorList(sortedList);
    };

    const handleSortRemain = (e) => {
        let sortedList = [...showedSensorList];
        if (e.target.id === 'up') {
            sortedList.sort(
                (a, b) => a.shadow.remainData - b.shadow.remainData
            );
        }
        else if (e.target.id === 'down') {
            sortedList.sort(
                (a, b) => b.shadow.remainData - a.shadow.remainData
            );
        }
        setShowedSensorList(sortedList);
    };

    return (
        <SensorTable>
            <thead>
                <tr>
                    <th>Sensor ID </th>
                    <th className='sort-column'>Bat.(%) 
                        <div>
                            <MdOutlineKeyboardArrowUp id='up' onClick={handleSortBat} />
                            <MdOutlineKeyboardArrowDown id='down' onClick={handleSortBat} />
                        </div>
                        
                    </th>
                    <th>Connected at</th>
                    <th>Disconnected at</th>
                    <th className='sort-column'>Card No.
                        <div>
                            <MdOutlineKeyboardArrowUp id='up' onClick={handleSortCardNo} />
                            <MdOutlineKeyboardArrowDown id='down' onClick={handleSortCardNo} />
                        </div>
                    </th>
                    <th>Gateway</th>
                    <th className='sort-column'>Raw sent
                        <div>
                            <MdOutlineKeyboardArrowUp id='up' onClick={handleSortRawSent} />
                            <MdOutlineKeyboardArrowDown id='down' onClick={handleSortRawSent} />
                        </div>
                    </th>
                    <th>Remain</th>
                    <th>RSSI</th>
                    <th>F/W ver.</th>
                    <th>H/W ver.</th>
                </tr>
            </thead>
            <tbody>
                {showedSensorList.map((sensor, idx) => {
                    return (
                        <tr key={sensor.thingName}>
                            <td>{sensor.thingName}</td>
                            <td className={sensor.shadow.batLvl <= 20 ? 'low-battery' : ''}>
                                {sensor.shadow.batLvl}
                            </td>
                            <td>{sensor.shadow.connAt}</td>
                            <td>{sensor.shadow.disconnAt}</td>
                            <td>{sensor.shadow.connCardNum}</td>
                            <td>{sensor.shadow.connGW}</td>
                            <td>{sensor.shadow.rawSentCnt}</td>
                            <td>{sensor.shadow.remainData}</td>
                            <td>{sensor.shadow.rssi}</td>
                            <td>{sensor.shadow.fwVer}</td>
                            <td>{sensor.shadow.hwVer}</td>
                        </tr>
                    )
                })}
            </tbody>
        </SensorTable>
    )
}
const SensorTable = styled.table`
  margin: 30px auto;
  border: 1px solid #444;
  border-collapse: collapse;
    tr {
      cursor: pointer;
      &:hover {
        background-color: #ddd;
      }
      th, td {
        border: 1px solid #444;
        padding: 10px;
        font-size: 14px;
      }
      .sort-column {
        display: flex;
        border: none;
      }
        .low-battery {
            background-color: #ff000020;
            color: red;
            font-weight: 800;
        }
    }
  
`
export default SensorListTable;
