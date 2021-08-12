import React from 'react'
import Thumbnail from './Thumbnail'

const Results = ({results}) => {
    return (
        <div>
            {results?.map((result,index) =><Thumbnail key={index} result={result}/>)}
        </div>
    )
}

export default Results
