import {
  Create,
  DateField,
  DateTimeInput,
  Edit,
  ImageField,
  List,
  ReferenceField,
  ReferenceInput,
  required,
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
  <List title="Oferty" pagination={false}>
    <SimpleList
      primaryText={(record) => record.descriptionTranslations.pl}
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
  return (
    <span>Oferta {record ? `"${record.descriptionTranslations.pl}"` : ""}</span>
  );
};

export const OfferShow = () => (
  <Show title={<OfferTitle />}>
    <SimpleShowLayout>
      <TextField label="Opis PL" source="descriptionTranslations.pl" />
      <TextField label="Opis EN" source="descriptionTranslations.en" />
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
    <OfferForm />
  </Edit>
);

export const OfferCreate = () => (
  <Create>
    <OfferForm />
  </Create>
);

const OfferForm = () => (
  <SimpleForm>
    <TextInput
      label="Opis PL"
      source="descriptionTranslations.pl"
      name="descriptionTranslations.pl"
      multiline
      validate={required()}
      fullWidth
    />
    <TextInput
      label="Opis EN"
      source="descriptionTranslations.en"
      name="descriptionTranslations.en"
      multiline
      validate={required()}
      fullWidth
    />
    <ReferenceInput source="locationId" reference="locations" fullWidth>
      <SelectInput label="Obiekt" validate={required()} />
    </ReferenceInput>
    <DateTimeInput
      label="Data rozpoczęcia"
      name="startDate"
      source="startDate"
      validate={required()}
      fullWidth
    />
    <DateTimeInput
      label="Data zakończenia"
      name="endDate"
      source="endDate"
      validate={required()}
      fullWidth
    />
    <TextInput
      label="Url strony"
      source="websiteUrl"
      name="websiteUrl"
      fullWidth
    />
    <TextInput
      label="Url zdjęcia"
      source="imageUrl"
      name="imageUrl"
      validate={required()}
    />
  </SimpleForm>
);
