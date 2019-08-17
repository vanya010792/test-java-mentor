import React, { PureComponent } from 'react'
import './select.css'
import { SelectData } from '../../static/SelectData'
import SelectItem from './selectItem/SelectItem'

class Select extends PureComponent{
    state = {
        selectValue: 'empty'
    }
    onChangeSelect = item => {
        this.setState({
            selectValue: item.target.value
        })
    }
    render() {
        const { onClickBtn } = this.props
        return (
            <div className='select__wrap'>
                <select className="select__list" onChange={item => this.onChangeSelect(item)}>
                    {
                        SelectData.map(item => {
                            return (
                                <SelectItem
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                />
                            )
                        })
                    }
                </select>
                <div
                    onClick={ e => onClickBtn( this.state.selectValue ) }
                    className="select__btn"
                >
                    Загрузить
                </div>
            </div>
        )
    }
}

export default Select