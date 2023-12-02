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

export const EventList = () => (
  <List title="Wydarzenia">
    <SimpleList
      primaryText={(record) => record.titleTranslations.pl}
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
  return (
    <span>Wydarzenie {record ? `"${record.titleTranslations.pl}"` : ""}</span>
  );
};

export const EventShow = () => (
  <Show title={<EventTitle />}>
    <SimpleShowLayout>
      <TextField label="Nazwa PL" source="titleTranslations.pl" />
      <TextField label="Nazwa EN" source="titleTranslations.en" />
      <ReferenceField reference="locations" source="locationId" link="show" />
      <TextField label="Opis PL" source="descriptionTranslations.pl" />
      <TextField label="Opis EN" source="descriptionTranslations.en" />
      <DateField label="Data rozpoczęcia" source="startDate" showTime={true} />
      <DateField label="Data zakończenia" source="endDate" showTime={true} />
      <UrlField label="Adres strony" source="websiteUrl" />
      <ImageField label="Zdjęcie" source="imageUrl" />
    </SimpleShowLayout>
  </Show>
);

export const EventEdit = () => (
  <Edit title={<EventTitle />}>
    <EventForm />
  </Edit>
);

export const EventCreate = () => (
  <Create>
    <EventForm />
  </Create>
);

const EventForm = () => (
  <SimpleForm>
    <TextInput
      label="Nazwa PL"
      source="titleTranslations.pl"
      name="titleTranslations.pl"
      validate={required()}
    />
    <TextInput
      label="Nazwa EN"
      source="titleTranslations.en"
      name="titleTranslations.en"
      validate={required()}
    />
    <ReferenceInput source="locationId" reference="locations">
      <SelectInput label="Lokalizacja" validate={required()} />
    </ReferenceInput>
    <TextInput
      label="Opis PL"
      source="descriptionTranslations.pl"
      name="descriptionTranslations.pl"
      multiline
      validate={required()}
    />
    <TextInput
      label="Opis EN"
      source="descriptionTranslations.en"
      name="descriptionTranslations.en"
      multiline
      validate={required()}
    />
    <DateTimeInput
      label="Data rozpoczęcia"
      name="startDate"
      source="startDate"
      validate={required()}
    />
    <DateTimeInput
      label="Data zakończenia"
      name="endDate"
      source="endDate"
      validate={required()}
    />
    <TextInput label="Url strony" source="websiteUrl" name="websiteUrl" />
    <TextInput
      label="Url zdjęcia"
      source="imageUrl"
      name="imageUrl"
      validate={required()}
    />
  </SimpleForm>
);
