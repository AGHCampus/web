import React from 'react';
import {Admin, Resource} from "react-admin";
import {dataProvider} from "./dataProvider";
import InfoIcon from '@mui/icons-material/Info';
import {InformationCreate, InformationEdit, InformationList, InformationShow} from "./components/information";

function App() {
    return (
        <div className="App">
            <Admin dataProvider={dataProvider}>
                <Resource name='information' list={InformationList} edit={InformationEdit} show={InformationShow}
                          create={InformationCreate} icon={InfoIcon}/>
            </Admin>
        </div>
    );
}

export default App;
