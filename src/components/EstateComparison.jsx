import {useEstateContext} from '../contexts/EstateContext.jsx';
import {ListItem} from './ListItem.jsx';
import {OptionsItem} from './OptionsItem.jsx';

export const EstateComparison = () => {
    const {estate, isLoaded} = useEstateContext()

    if (!isLoaded) {
        return <p>Loading...</p>
    }

    if (isLoaded && !estate) {
        return <p>No data available right now.</p>
    }

    return <div className={'page'}>
        <h1 className={'page-title'}>Estate Comparison</h1>
        <hr/>
        <div className={'list'}>
            {
                estate.map(estateItem =>
                    <ListItem key={estateItem.id} estateData={estateItem}/>)
            }
        </div>
        <div className={'options'}>
            <OptionsItem optionKey={'A'}/>
            <OptionsItem optionKey={'B'}/>
        </div>
    </div>
}