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

export const OfferList = () => (
  <List title="Oferty">
    <SimpleList
      primaryText={(record) => record.description}
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

const OfferTitle = () => {
  const record = useRecordContext();
  return <span>Oferta {record ? `"${record.description}"` : ""}</span>;
};

export const OfferShow = () => (
  <Show title={<OfferTitle />}>
    <SimpleShowLayout>
      <TextField label="Opis" source="description" />
      <ReferenceField reference="locations" source="locationId" link="show" />
      <DateField label="Data rozpoczęcia" source="startDate" showTime={true} />
      <DateField label="Data zakończenia" source="endDate" showTime={true} />
      <UrlField label="Adres strony" source="websiteUrl" />
      <ImageField label="Zdjęcie" source="imageUrl" />
    </SimpleShowLayout>
  </Show>
);

export const OfferEdit = () => (
  <Edit title={<OfferTitle />}>
    <SimpleForm>
      <TextInput
        label="Opis"
        source="description"
        name="description"
        multiline
      />
      <ReferenceInput source="locationId" reference="locations">
        <SelectInput label="Lokalizacja" />
      </ReferenceInput>
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

export const OfferCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput
        label="Opis"
        source="description"
        name="description"
        multiline
      />
      <ReferenceInput source="locationId" reference="locations">
        <SelectInput label="Lokalizacja" />
      </ReferenceInput>
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
