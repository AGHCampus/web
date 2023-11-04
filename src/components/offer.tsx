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
        <ReferenceField reference="location" source="location_id" link="show" />
      }
      tertiaryText={(record) =>
        `${new Date(record.start_date).toLocaleDateString()} - ${new Date(
          record.end_date,
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
      <ReferenceField reference="location" source="location_id" link="show" />
      <DateField label="Data rozpoczęcia" source="start_date" showTime={true} />
      <DateField label="Data zakończenia" source="end_date" showTime={true} />
      <UrlField label="Adres strony" source="website_url" />
      <ImageField label="Zdjęcie" source="image_url" />
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
      <ReferenceInput source="location_id" reference="location">
        <SelectInput label="Lokalizacja" />
      </ReferenceInput>
      <DateTimeInput
        label="Data rozpoczęcia"
        name="start_date"
        source="start_date"
      />
      <DateTimeInput
        label="Data zakończenia"
        name="end_date"
        source="end_date"
      />
      <TextInput label="Url strony" source="website_url" name="website_url" />
      <TextInput label="Url zdjęcia" source="image_url" name="image_url" />
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
      <ReferenceInput source="location_id" reference="location">
        <SelectInput label="Lokalizacja" />
      </ReferenceInput>
      <DateTimeInput
        label="Data rozpoczęcia"
        name="start_date"
        source="start_date"
      />
      <DateTimeInput
        label="Data zakończenia"
        name="end_date"
        source="end_date"
      />
      <TextInput label="Url strony" source="website_url" name="website_url" />
      <TextInput label="Url zdjęcia" source="image_url" name="image_url" />
    </SimpleForm>
  </Create>
);
