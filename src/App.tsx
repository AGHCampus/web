import React from 'react';
import {Admin, Resource} from "react-admin";
import {dataProvider} from "./dataProvider";
import InfoIcon from '@mui/icons-material/Info';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import {InformationCreate, InformationEdit, InformationList, InformationShow} from "./components/information";
import {LocationCreate, LocationEdit, LocationList, LocationShow} from "./components/location";

function App() {
    return (
        <div className="App">
            <Admin dataProvider={dataProvider}>
                <Resource name='information' list={InformationList} edit={InformationEdit} show={InformationShow}
                          create={InformationCreate} icon={InfoIcon}/>
                <Resource name='location' list={LocationList} show={LocationShow} edit={LocationEdit}
                          create={LocationCreate} icon={CorporateFareIcon}/>
            </Admin>
        </div>
    );
}

export default App;
