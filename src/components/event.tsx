import {
    Create,
    DateField, DateTimeInput, Edit,
    ImageField,
    List,
    ReferenceField, ReferenceInput, SelectInput,
    Show, SimpleForm,
    SimpleList,
    SimpleShowLayout,
    TextField, TextInput, UrlField,
    useRecordContext
} from "react-admin";

export const EventList = () => (
    <List title="Wydarzenia">
        <SimpleList
            primaryText={<TextField source="title"/>}
            secondaryText={
                <ReferenceField reference="location" source="location_id" link="show"/>
            }
            tertiaryText={record =>
                `${new Date(record.start_date).toLocaleDateString()} - ${new Date(record.end_date).toLocaleDateString()}`
            }
            linkType="show"
        />
    </List>
)

const EventTitle = () => {
    const record = useRecordContext()
    return <span>Wydarzenie {record ? `"${record.title}"` : ''}</span>
}

export const EventShow = () => (
    <Show title={<EventTitle/>}>
        <SimpleShowLayout>
            <TextField label="Nazwa" source="title"/>
            <ReferenceField reference="location" source="location_id" link="show"/>
            <TextField label="Opis" source="description"/>
            <DateField label="Data rozpoczęcia" source="start_date" showTime={true}/>
            <DateField label="Data zakończenia" source="end_date" showTime={true}/>
            <UrlField label="Adres strony" source="website_url"/>
            <ImageField label="Zdjęcie" source="image_url"/>
        </SimpleShowLayout>
    </Show>
)

export const EventEdit = () => (
    <Edit title={<EventTitle/>}>
        <SimpleForm>
            <TextInput label="Nazwa" source="title" name="title"/>
            <ReferenceInput source="location_id" reference="location">
                <SelectInput label="Lokalizacja"/>
            </ReferenceInput>
            <TextInput label="Opis" source="description" name="description" multiline/>
            <DateTimeInput label="Data rozpoczęcia" name="start_date" source="start_date"/>
            <DateTimeInput label="Data zakończenia" name="end_date" source="end_date"/>
            <TextInput label="Url strony" source="website_url" name="website_url"/>
            <TextInput label="Url zdjęcia" source="image_url" name="image_url"/>
        </SimpleForm>
    </Edit>
)

export const EventCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput label="Nazwa" source="title" name="title"/>
            <ReferenceInput source="location_id" reference="location">
                <SelectInput label="Lokalizacja"/>
            </ReferenceInput>
            <TextInput label="Opis" source="description" name="description" multiline/>
            <DateTimeInput label="Data rozpoczęcia" name="start_date" source="start_date"/>
            <DateTimeInput label="Data zakończenia" name="end_date" source="end_date"/>
            <TextInput label="Url strony" source="website_url" name="website_url"/>
            <TextInput label="Url zdjęcia" source="image_url" name="image_url"/>
        </SimpleForm>
    </Create>
)