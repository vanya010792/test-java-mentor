import React from 'react'
import './resultList.css'
import ResultItem from './resultItem/ResultItem'

const ResultList = ({ contentData }) => {
    return(
        <div className='result__list'>
            {
                contentData.map( (item, index) => {
                    const {
                        logo, name, year, projectsCount, docs
                    } = item
                    return(
                        <ResultItem
                            key={ index }
                            logo={ logo }
                            name={ name }
                            year={ year }
                            projectsCount={ projectsCount }
                            docs={ docs }
                        />
                    )
                })
            }
        </div>
    )
}

export default ResultList