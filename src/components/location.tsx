import {
  ArrayInput,
  Create,
  Edit,
  FunctionField,
  ImageField,
  List,
  NumberInput,
  required,
  SelectInput,
  Show,
  SimpleForm,
  SimpleFormIterator,
  SimpleList,
  SimpleShowLayout,
  TextField,
  TextInput,
  UrlField,
  useRecordContext,
} from "react-admin";

const CATEGORIES: { [key: string]: string } = {
  club: "Klub",
  dormitory: "Akademik",
  restaurant: "Obiekt gastronomiczny",
  faculty: "Budynek uczelni",
};

const CATEGORIES_LIST = [
  { id: "club", name: "Klub" },
  { id: "dormitory", name: "Akademik" },
  { id: "restaurant", name: "Obiekt gastronomiczny" },
  { id: "faculty", name: "Budynek uczelni" },
];

export const LocationList = () => (
  <List title="Lokalizacje" pagination={false}>
    <SimpleList
      primaryText={(record) => record.nameTranslations.pl}
      secondaryText={(record) => CATEGORIES[record.category]}
      linkType="show"
    />
  </List>
);

const LocationTitle = () => {
  const record = useRecordContext();
  return (
    <span>Lokalizacja {record ? `"${record.nameTranslations.pl}"` : ""}</span>
  );
};

export const LocationShow = () => (
  <Show title={<LocationTitle />}>
    <SimpleShowLayout>
      <TextField label="Nazwa PL" source="nameTranslations.pl" />
      <TextField label="Nazwa EN" source="nameTranslations.en" />
      <FunctionField
        label="Kategoria"
        render={(record: { category: string }) =>
          `${CATEGORIES[record.category]}`
        }
      />
      <TextField label="Opis PL" source="descriptionTranslations.pl" />
      <TextField label="Opis EN" source="descriptionTranslations.en" />
      <TextField label="Adres" source="address" />
      <TextField label="Godziny otwarcia" source="openingHours" />
      <TextField label="Numer telefonu" source="phoneNumber" />
      <UrlField label="Adres strony" source="websiteUrl" />
      <TextField label="Szerokość geograficzna" source="coordinate.latitude" />
      <TextField label="Długość geograficzna" source="coordinate.longitude" />
      <ImageField label="Zdjęcia" source="photos" src="url" />
    </SimpleShowLayout>
  </Show>
);

export const LocationEdit = () => (
  <Edit title={<LocationTitle />}>
    <LocationForm />
  </Edit>
);

export const LocationCreate = () => (
  <Create>
    <LocationForm />
  </Create>
);

const LocationForm = () => (
  <SimpleForm>
    <TextInput
      label="Nazwa PL"
      source="nameTranslations.pl"
      name="nameTranslations.pl"
      validate={required()}
    />
    <TextInput
      label="Nazwa EN"
      source="nameTranslations.en"
      name="nameTranslations.en"
      validate={required()}
    />
    <SelectInput
      label="Kategoria"
      source="category"
      name="category"
      choices={CATEGORIES_LIST}
      validate={required()}
    />
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
    <TextInput
      label="Adres"
      source="address"
      name="address"
      multiline
      validate={required()}
    />
    <TextInput
      label="Godziny otwarcia"
      source="openingHours"
      name="openingHours"
      validate={required()}
    />
    <TextInput
      label="Numer telefonu"
      source="phoneNumber"
      name="phoneNumber"
      validate={required()}
    />
    <TextInput
      label="Adres strony"
      source="websiteUrl"
      name="websiteUrl"
      validate={required()}
    />
    <NumberInput
      label="Szerokość geograficzna"
      source="coordinate.latitude"
      name="latitude"
      validate={required()}
    />
    <NumberInput
      label="Długość geograficzna"
      source="coordinate.longitude"
      name="longitude"
      validate={required()}
    />
    <ArrayInput label="Zdjęcia" name="photos" source="photos">
      <SimpleFormIterator inline>
        <TextInput source="url" helperText={false} />
      </SimpleFormIterator>
    </ArrayInput>
  </SimpleForm>
);
