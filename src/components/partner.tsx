import React from 'react'
import { Button } from 'react-bootstrap'

interface PartnerContentProps extends React.HTMLAttributes<HTMLElement> {
    title: string,
    list: Array<string>
    image?: string | null
}

export const PartnerContent = ({ title, list, image, onClick}: PartnerContentProps) => {
    const listItems = list.map((item,index) =>
        <li key={index}>{item}</li>
    )
    return (
        <div className="partner-content" style={ image != undefined ? { backgroundImage: `url(${image})` } : {} }>
            <h6 className="typo-display-sm-bold typo-primary-dark title">{title}</h6>
            <p className="typo-text-sm-semi-bold typo-gray-body paragraph">Fasilitas Yang Didapat:</p>
            <ul className="list-unstyled list-facility">{listItems}</ul>
            <Button onClick={onClick} variant="primary" size="sm">Ngobrol Yuk!</Button>
        </div>
    )
}