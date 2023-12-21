import {
  Admin,
  radiantDarkTheme,
  radiantLightTheme,
  Resource,
} from "react-admin";
import dataProvider from "./data_provider/dataProvider";
import InfoIcon from "@mui/icons-material/Info";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import EventIcon from "@mui/icons-material/Event";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import {
  InformationCreate,
  InformationEdit,
  InformationList,
  InformationShow,
} from "./components/information";
import {
  LocationCreate,
  LocationEdit,
  LocationList,
  LocationShow,
} from "./components/location";
import { i18nProvider } from "./i18nProvider";
import { authProvider } from "./authProvider";
import Dashboard from "./components/Dashboard";
import {
  EventCreate,
  EventEdit,
  EventList,
  EventShow,
} from "./components/event";
import {
  OfferCreate,
  OfferEdit,
  OfferList,
  OfferShow,
} from "./components/offer";
import { UserList } from "./components/user";
import { RoleList } from "./components/role";

export const App = () => (
  <div className="App">
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      dashboard={Dashboard}
      theme={radiantLightTheme}
      darkTheme={radiantDarkTheme}
    >
      {(permissions) => (
        <>
          <Resource
            name="information"
            list={InformationList}
            edit={InformationEdit}
            show={InformationShow}
            create={InformationCreate}
            icon={InfoIcon}
            options={{ label: "Ogłoszenia" }}
          />
          <Resource
            name="locations"
            list={LocationList}
            show={LocationShow}
            edit={LocationEdit}
            create={LocationCreate}
            icon={CorporateFareIcon}
            options={{ label: "Obiekty" }}
            recordRepresentation={(record) =>
              record.nameTranslations.pl || "AGH"
            }
          />
          <Resource
            name="events"
            list={EventList}
            show={EventShow}
            edit={EventEdit}
            create={EventCreate}
            icon={EventIcon}
            options={{ label: "Wydarzenia" }}
          />
          <Resource
            name="offers"
            list={OfferList}
            show={OfferShow}
            edit={OfferEdit}
            create={OfferCreate}
            icon={LocalOfferIcon}
            options={{ label: "Oferty" }}
          />
          {permissions.roles.includes("ADMIN") ? (
            <>
              <Resource
                name="users"
                list={UserList}
                icon={PersonIcon}
                options={{ label: "Użytkownicy" }}
              />
              <Resource
                name="roles"
                list={RoleList}
                icon={GroupsIcon}
                options={{ label: "Role" }}
              />
            </>
          ) : null}
        </>
      )}
    </Admin>
  </div>
);

export default App;
