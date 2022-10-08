import styled from 'styled-components'

const SensorListTable = ({ showedSensorList }) => {
    return (
        <SensorTable>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Sensor ID</th>
                    <th>Bat.(%)</th>
                    <th>Connected at</th>
                    <th>Disconnected at</th>
                    <th>Card No.</th>
                    <th>Gateway</th>
                    <th>Raw sent</th>
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
                            <td>{idx}</td>
                            <td>{sensor.thingName}</td>
                            <td>{sensor.shadow.batLvl}</td>
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
    }



`
export default SensorListTable;