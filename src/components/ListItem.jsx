import {SelectionOverlay} from "./SelectionOverlay.jsx";
import {useEstateContext} from "../contexts/EstateContext.jsx";

export const ListItem = ({estateData}) => {
    const {optionA, setOptionA, optionB, setOptionB, lastSetOption, updateLastSetOption} = useEstateContext()
    const handleClick = () => {
        if (estateData.id !== optionA.id && estateData.id !== optionB.id) {
            if (lastSetOption === 'A') {

                setOptionB(estateData)
            }
            if (lastSetOption === 'B') {
                setOptionA(estateData)
            }
            updateLastSetOption()
        }
    }

    return <div className={'list-item'} onClick={handleClick}>
        {
            optionA.id === estateData.id && <SelectionOverlay letter={'A'}/>
        }
        {
            optionB.id === estateData.id && <SelectionOverlay letter={'B'}/>
        }

        <img src={estateData.images[0]} alt="property-photo" className={'list-item__image'}/>

        <p className={'list-item__name'}>{estateData.name_extracted} {estateData.locality}</p>
    </div>
}