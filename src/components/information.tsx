import {
    Create,
    DateField,
    Edit,
    List, Show,
    SimpleForm, SimpleList, SimpleShowLayout,
    TextField,
    TextInput,
    useRecordContext
} from "react-admin";

export const InformationList = () => (
    <List title="Ogłoszenia">
        <SimpleList
            primaryText={(record) => record.title}
            linkType="show"
        />
    </List>
)

const InformationTitle = () => {
    const record = useRecordContext()
    return <span>Ogłoszenie {record ? `"${record.title}"` : ''}</span>
}

export const InformationShow = () => (
    <Show title={<InformationTitle/>}>
        <SimpleShowLayout>
            <TextField label="Tytuł" source="title"/>
            <TextField label="Treść" source="content"/>
            <DateField label="Data utworzenia" source="timestamp" showTime={true}/>
        </SimpleShowLayout>
    </Show>
)

export const InformationEdit = () =>
    (
        <Edit title={<InformationTitle/>}>
            <SimpleForm>
                <TextInput label="Tytuł" name="title" source="title" multiline/>
                <TextInput label="Treść" name="content" source="content" multiline/>
            </SimpleForm>
        </Edit>
    )

export const InformationCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput label="Tytuł" name="title" source="title" multiline/>
            <TextInput label="Treść" name="content" source="content" multiline/>
        </SimpleForm>
    </Create>
)