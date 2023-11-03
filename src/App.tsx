import React from 'react';
import {Admin, Resource, radiantLightTheme, radiantDarkTheme} from "react-admin";
import {dataProvider} from "./dataProvider";
import InfoIcon from '@mui/icons-material/Info';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import {InformationCreate, InformationEdit, InformationList, InformationShow} from "./components/information";
import {LocationCreate, LocationEdit, LocationList, LocationShow} from "./components/location";
import {i18nProvider} from "./i18nProvider";
import {authProvider} from "./authProvider";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <div className="App">
            <Admin dataProvider={dataProvider} authProvider={authProvider} i18nProvider={i18nProvider}
                   dashboard={Dashboard} theme={radiantLightTheme} darkTheme={radiantDarkTheme}>
                <Resource name='information' list={InformationList} edit={InformationEdit} show={InformationShow}
                          create={InformationCreate} icon={InfoIcon} options={{label: 'Ogłoszenia'}}/>
                <Resource name='location' list={LocationList} show={LocationShow} edit={LocationEdit}
                          create={LocationCreate} icon={CorporateFareIcon} options={{label: 'Lokalizacje'}}/>
            </Admin>
        </div>
    );
}

export default App;
