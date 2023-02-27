import { Routes, Route } from 'react-router-dom'
import { Step1 } from '../pages/Step1'
import { Step2 } from '../pages/Step2'
import { Step3 } from '../pages/Step3'
export const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/'  element={<Step1 />}></Route>
            <Route path='/step2' element={<Step2 />}></Route>
            <Route path='/step3' element={<Step3 />}></Route>
        </Routes>
    )
}