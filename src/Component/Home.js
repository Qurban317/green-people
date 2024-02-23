import { DataTableContect } from "./Datatables"
import { Header } from "./Header/Header"
import { DatatableFilter } from './DatatableFilters'


export const Home = () =>{
    return(
        <div>
            <Header />
            <DatatableFilter/>
            <DataTableContect/>
        </div>
    )
}