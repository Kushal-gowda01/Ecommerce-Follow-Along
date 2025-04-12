import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css'; // ✅ Important: this must match the actual Tailwind CSS file

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
