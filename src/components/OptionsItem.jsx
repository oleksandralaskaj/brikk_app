import {useEffect, useState} from "react";
import {useEstateContext} from "../contexts/EstateContext.jsx";

export const OptionsItem = ({option}) => {
    const [thisOptionData, setThisOptionData] = useState()
    const [altOptionData, setAltOptionData] = useState()
    const {optionA, optionB} = useEstateContext()

    useEffect(() => {
        if (option === 'A') {
            setThisOptionData(optionA)
            setAltOptionData(optionB)
        } else if (option === 'B') {
            setThisOptionData(optionB)
            setAltOptionData(optionA)
        } else {
            console.log('error during option data setting')
        }

    }, [optionA, optionB]);

    const determineClass = (propertyName) => {
        switch (propertyName) {
            case 'price' :
                return thisOptionData.prize_czk > altOptionData.prize_czk ? 'options-item__property--red' : 'options-item__property--green';
            case 'building_area' :
                return thisOptionData.land_area < altOptionData.land_area ? 'options-item__property--red' : 'options-item__property--green';
            case 'land_area' :
                return thisOptionData.land_area < altOptionData.land_area ? 'options-item__property--red' : 'options-item__property--green';
        }
    }

    const createOptionCard = () => {
        if (thisOptionData && altOptionData) {
            return <div className={'options-item'}>
                <img src={thisOptionData.images[0]} alt="property-photo"/>
                <h2 className={'options-item__title'}>{thisOptionData.name}</h2>
                <div className={`options-item__property ${determineClass('price')}`}>
                    <p className={'options-item__property-name'}>Price</p>
                    <p className={'options-item__property-value'}>{thisOptionData.prize_czk}</p>
                </div>
                <div className={`options-item__property ${determineClass('building_area')}`}>
                    <p className={'options-item__property-name'}>Building Area</p>
                    <p className={'options-item__property-value'}>{thisOptionData.building_area}</p>
                </div>
                <div className={`options-item__property ${determineClass('land_area')}`}>
                    <p className={'options-item__property-name'}>Land Area</p>
                    <p className={'options-item__property-value'}>{thisOptionData.land_area}</p>
                </div>
            </div>
        }
    }

    const [optionCard, setOptionCard] = useState(null)
    useEffect(() => {
        setOptionCard(createOptionCard())
    }, [thisOptionData, altOptionData])


    return <>{optionCard}</>
}