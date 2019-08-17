import React from 'react'
import './resultItem.css'

const ResultItem = ({ logo, name, year, projectsCount, docs }) => {
    return(
        <div className='result__item'>
            <div className="img">
                <img src={ logo } alt={ name }/>
            </div>
            <div className="description">
                <h2 className="description__name">{ name }</h2>
                <p className="description__text">Основан в { year }</p>
                <p className="description__text">{ projectsCount } проектов на GitHub</p>
                <a
                    href={ docs }
                    className="description__link"
                    target='_blank'
                    rel="noopener noreferrer"
                >Документация</a>
            </div>
        </div>
    )
}

export default ResultItem