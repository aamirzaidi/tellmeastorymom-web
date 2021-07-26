import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'

function ThemeCard(props) {
    return (
        <div>
            <image src = {propTypes.imageSrc} width="160px" hieght ="90"></image>
        </div>
    )
}

export default ThemeCard
