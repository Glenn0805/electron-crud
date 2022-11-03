import { BiTimer } from 'react-icons/bi'
import { RiScreenshot2Line } from 'react-icons/ri'
import { FieldTimeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const menuLabelLink = (label, link) => {
    return (
        <span>
            {label}
            <Link to={link} />
        </span>
    )
}
const menu = [
    { key: 'time-tracker', label: menuLabelLink('Time Tracker', '/time-tracker'), icon: <BiTimer to={'/'} style={{ fontSize: '1.2rem' }} /> },
    { key: 'screen-shot', label: menuLabelLink('Screen Shot', '/screen-shot'), icon: <RiScreenshot2Line to={'/screenShot'} style={{ fontSize: '1.2rem' }} /> }
]

export default menu