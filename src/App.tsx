import {createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from 'react-router-dom';
import './App.css';
import Analytics from './components/analytics';
import Contacts from './components/contacts';
import Home from './components/home/Home';
import RootLayout from './components/home/RootLayout';
import Statistics from './components/statistics';
import ErrorPage from './components/ErrorPage';


// const token = '';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path={'statistics'} element={<Statistics/>}/>
            <Route path={'analytics'} element={<Analytics/>}/>
            <Route path={'contacts'} element={<Contacts/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Route>
    )
)


function App() {

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
