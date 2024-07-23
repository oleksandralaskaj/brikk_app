import './App.scss'
import {EstateComparison} from './components/EstateComparison.jsx';
import {EstateContextProvider} from './contexts/EstateContext.jsx';

function App() {
    return <EstateContextProvider>
        <EstateComparison/>
    </EstateContextProvider>
}

export default App
