import {useEstateContext} from '../contexts/EstateContext.jsx';

export const OptionsItem = ({optionKey}) => {
    const {optionA, optionB} = useEstateContext()

    const currentOption = optionKey === 'A' ? optionA : optionB
    const alternativeOption = optionKey === 'A' ? optionB : optionA

    const determineClass = (propertyName) => {
        switch (propertyName) {
            case 'prize_czk' :
                return currentOption.prize_czk > alternativeOption.prize_czk ? 'options-item__property--red' : 'options-item__property--green';
            case 'building_area' :
                return Number(currentOption.building_area) < Number(alternativeOption.building_area) ? 'options-item__property--red' : 'options-item__property--green';
            case 'land_area' :
                return Number(currentOption.land_area) < Number(alternativeOption.land_area) ? 'options-item__property--red' : 'options-item__property--green';
        }
    }

    const priceFormatter = (price) => {
        return price.toLocaleString('cs-CZ', {
            style: 'currency',
            currency: 'CZK',
            maximumFractionDigits: 0
        });
    }

    return (
        <div className={'options-item'}>
            <img src={currentOption.images[0]} alt='property-photo' className={'options-item__image'}/>
            <h2 className={'options-item__title'}>{currentOption.name}</h2>
            <div className={`options-item__property ${determineClass('prize_czk')}`}>
                <p className={'options-item__property-name'}>Price</p>
                <p className={'options-item__property-value'}>{priceFormatter(currentOption.prize_czk)}</p>
            </div>
            <div className={'options-item__property'}>
                <p className={'options-item__property-name'}>Locality</p>
                <p className={'options-item__property-value'}>{currentOption.locality}</p>
            </div>
            <div className={`options-item__property ${determineClass('building_area')}`}>
                <p className={'options-item__property-name'}>Floor area</p>
                <p className={'options-item__property-value'}>{currentOption.building_area} m<sup>2</sup></p>
            </div>
            <div className={`options-item__property ${determineClass('land_area')}`}>
                <p className={'options-item__property-name'}>Land area</p>
                <p className={'options-item__property-value'}>{currentOption.land_area} m<sup>2</sup></p>
            </div>
            {currentOption.company_logo && <div className={'options-item__agency'}>
                <img src={currentOption.company_logo} alt='agency-logo' className={'options-item__agency-image'}/>
                <p className={'options-item__agency-name'}>{currentOption.company_name}</p>
            </div>}
        </div>)
}
