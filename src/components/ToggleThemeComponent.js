import React from 'react'
import { Switch } from 'antd';
import { MdDarkMode, MdLightMode } from 'react-icons/md'
const ToggleThemeComponent = () => {
    const onChange = async (checked) => {
        if (checked) {
            return await window.darkMode.toggle()
        }

        return await window.darkMode.system()
    };
    return (
        <div style={{ padding: "5px", display: 'flex', justifyContent: 'flex-end' }}>
            <Switch style={{ background: "#7fd3e3" }} checkedChildren={<MdDarkMode />}
                unCheckedChildren={<MdLightMode />} onChange={onChange} />
        </div>
    )
}

export default ToggleThemeComponent