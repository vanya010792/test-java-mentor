import React from 'react'

const SelectItem = ({ name, id }) => {
    return(
        <option value={ id }>
            { name }
        </option>
    )
}

export default SelectItem