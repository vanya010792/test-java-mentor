import React, { PureComponent, Fragment } from 'react';
import './App.css';
import Select from './components/select/Select'
import { GetApi } from './api/Api'
import { Loader } from './components/loader/Loader'
import ResultList from './components/resultList/ResultList'

class App extends PureComponent {
    state = {
        selectValue: 'empty',
        contentData: null,
        isLoading: false
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if( this.state.selectValue !== 'empty' && prevState.selectValue !== this.state.selectValue ) {
            const GetData = await GetApi( this.state.selectValue )
            this.setState({
                contentData: GetData,
                isLoading: true
            })
        }
        return null
    }
    onClickBtn = value => {
        this.setState({
            selectValue: value,
            isLoading: false
        })
    }
    render() {
        return (
            <div className="App">
                <Select
                    onChangeSelect={ this.onChangeSelect }
                    onClickBtn={ this.onClickBtn }
                />
                {
                    this.state.selectValue !== 'empty' ?
                    <Fragment>
                        {
                            this.state.isLoading ?
                            <ResultList
                                contentData={ this.state.contentData }
                            /> :
                            <Loader/>
                        }
                    </Fragment> :
                    null
                }
            </div>
        )
    }
}

export default App;
