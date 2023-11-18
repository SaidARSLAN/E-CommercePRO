import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from './context/MainContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider>
    <App />
    </Provider>
)
