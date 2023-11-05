import {
  Create,
  DateField,
  DateTimeInput,
  Edit,
  ImageField,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  Show,
  SimpleForm,
  SimpleList,
  SimpleShowLayout,
  TextField,
  TextInput,
  UrlField,
  useRecordContext,
} from "react-admin";

export const EventList = () => (
  <List title="Wydarzenia">
    <SimpleList
      primaryText={(record) => record.title}
      secondaryText={
        <ReferenceField reference="locations" source="locationId" link="show" />
      }
      tertiaryText={(record) =>
        `${new Date(record.startDate).toLocaleDateString()} - ${new Date(
          record.endDate,
        ).toLocaleDateString()}`
      }
      linkType="show"
    />
  </List>
);

const EventTitle = () => {
  const record = useRecordContext();
  return <span>Wydarzenie {record ? `"${record.title}"` : ""}</span>;
};

export const EventShow = () => (
  <Show title={<EventTitle />}>
    <SimpleShowLayout>
      <TextField label="Nazwa" source="title" />
      <ReferenceField reference="locations" source="locationId" link="show" />
      <TextField label="Opis" source="description" />
      <DateField label="Data rozpoczęcia" source="startDate" showTime={true} />
      <DateField label="Data zakończenia" source="endDate" showTime={true} />
      <UrlField label="Adres strony" source="websiteUrl" />
      <ImageField label="Zdjęcie" source="imageUrl" />
    </SimpleShowLayout>
  </Show>
);

export const EventEdit = () => (
  <Edit title={<EventTitle />}>
    <SimpleForm>
      <TextInput label="Nazwa" source="title" name="title" />
      <ReferenceInput source="locationId" reference="locations">
        <SelectInput label="Lokalizacja" />
      </ReferenceInput>
      <TextInput
        label="Opis"
        source="description"
        name="description"
        multiline
      />
      <DateTimeInput
        label="Data rozpoczęcia"
        name="startDate"
        source="startDate"
      />
      <DateTimeInput
        label="Data zakończenia"
        name="endDate"
        source="endDate"
      />
      <TextInput label="Url strony" source="websiteUrl" name="websiteUrl" />
      <TextInput label="Url zdjęcia" source="imageUrl" name="imageUrl" />
    </SimpleForm>
  </Edit>
);

export const EventCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput label="Nazwa" source="title" name="title" />
      <ReferenceInput source="locationId" reference="locations">
        <SelectInput label="Lokalizacja" />
      </ReferenceInput>
      <TextInput
        label="Opis"
        source="description"
        name="description"
        multiline
      />
      <DateTimeInput
        label="Data rozpoczęcia"
        name="startDate"
        source="startDate"
      />
      <DateTimeInput
        label="Data zakończenia"
        name="endDate"
        source="endDate"
      />
      <TextInput label="Url strony" source="websiteUrl" name="websiteUrl" />
      <TextInput label="Url zdjęcia" source="imageUrl" name="imageUrl" />
    </SimpleForm>
  </Create>
);
