import {
  ArrayInput,
  Create,
  Edit,
  FunctionField,
  ImageField,
  List,
  NumberInput,
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
      primaryText={(record) => record.name}
      secondaryText={(record) => CATEGORIES[record.category]}
      linkType="show"
    />
  </List>
);

const LocationTitle = () => {
  const record = useRecordContext();
  return <span>Lokalizacja {record ? `"${record.name}"` : ""}</span>;
};

export const LocationShow = () => (
  <Show title={<LocationTitle />}>
    <SimpleShowLayout>
      <TextField label="Nazwa" source="name" />
      <FunctionField
        label="Kategoria"
        render={(record: { category: string }) =>
          `${CATEGORIES[record.category]}`
        }
      />
      <TextField label="Opis" source="description" />
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
    <SimpleForm>
      <TextInput label="Nazwa" source="name" name="name" />
      <SelectInput
        label="Kategoria"
        source="category"
        name="category"
        choices={CATEGORIES_LIST}
      />
      <TextInput
        label="Opis"
        source="description"
        name="description"
        multiline
      />
      <TextInput label="Adres" source="address" name="address" multiline />
      <TextInput
        label="Godziny otwarcia"
        source="openingHours"
        name="openingHours"
      />
      <TextInput
        label="Numer telefonu"
        source="phoneNumber"
        name="phoneNumber"
      />
      <TextInput label="Adres strony" source="websiteUrl" name="websiteUrl" />
      <NumberInput
        label="Szerokość geograficzna"
        source="coordinate.latitude"
        name="latitude"
      />
      <NumberInput
        label="Długość geograficzna"
        source="coordinate.longitude"
        name="longitude"
      />
      <ArrayInput label="Zdjęcia" name="photos" source="photos">
        <SimpleFormIterator inline>
          <TextInput source="url" helperText={false} />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

export const LocationCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput label="Nazwa" source="name" name="name" />
      <SelectInput
        label="Kategoria"
        source="category"
        name="category"
        choices={CATEGORIES_LIST}
      />
      <TextInput
        label="Opis"
        source="description"
        name="description"
        multiline
      />
      <TextInput label="Adres" source="address" name="address" multiline />
      <TextInput
        label="Godziny otwarcia"
        source="openingHours"
        name="openingHours"
      />
      <TextInput
        label="Numer telefonu"
        source="phoneNumber"
        name="phoneNumber"
      />
      <TextInput label="Adres strony" source="websiteUrl" name="websiteUrl" />
      <NumberInput
        label="Szerokość geograficzna"
        source="coordinate.latitude"
        name="latitude"
      />
      <NumberInput
        label="Długość geograficzna"
        source="coordinate.longitude"
        name="longitude"
      />
      <ArrayInput label="Zdjęcia" name="photos" source="photos">
        <SimpleFormIterator inline>
          <TextInput source="url" helperText={false} />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);
