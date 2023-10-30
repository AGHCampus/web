import {
    Create,
    Datagrid,
    DateField,
    Edit,
    EditButton,
    List, RichTextField, Show,
    SimpleForm, SimpleShowLayout,
    TextField,
    TextInput,
    useRecordContext
} from "react-admin";

export const InformationList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="id"/>
            <TextField source="language"/>
            <TextField source="title"/>
            <TextField source="content"/>
            <DateField source="timestamp"/>
            <EditButton/>
        </Datagrid>
    </List>
)

const InformationTitle = () => {
    const record = useRecordContext()
    return <span>Information {record ? `"${record.title}"` : ''}</span>
}

export const InformationShow = () => (
    <Show title={<InformationTitle/>}>
        <SimpleShowLayout>
            <TextField source="id"/>
            <TextField source="language"/>
            <TextField source="title"/>
            <RichTextField source="content"/>
            <DateField source="timestamp"/>
        </SimpleShowLayout>
    </Show>
)

export const InformationEdit = () =>
    (
        <Edit title={<InformationTitle/>}>
            <SimpleForm>
                <TextInput name="title" source="title" multiline/>
                <TextInput name="content" source="content" multiline rows={5}/>
            </SimpleForm>
        </Edit>
    )

export const InformationCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput name="title" source="title" multiline/>
            <TextInput name="content" source="content" multiline rows={5}/>
        </SimpleForm>
    </Create>
)