import {
  ArrayInput,
  Create,
  DateField,
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
  <List title="Lokalizacje">
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
      <TextField label="Godziny otwarcia" source="opening_hours" />
      <TextField label="Numer telefonu" source="phone_number" />
      <UrlField label="Adres strony" source="website_url" />
      <TextField label="Szerokość geograficzna" source="coordinate.latitude" />
      <TextField label="Długość geograficzna" source="coordinate.longitude" />
      <ImageField label="Zdjęcia" source="photos" src="url" />
      <DateField
        label="Data ostatniej modyfikacji"
        source="last_modified_date"
        showTime={true}
      />
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
        source="opening_hours"
        name="opening_hours"
      />
      <TextInput
        label="Numer telefonu"
        source="phone_number"
        name="phone_number"
      />
      <TextInput label="Adres strony" source="website_url" name="website_url" />
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
        source="opening_hours"
        name="opening_hours"
      />
      <TextInput
        label="Numer telefonu"
        source="phone_number"
        name="phone_number"
      />
      <TextInput label="Adres strony" source="website_url" name="website_url" />
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
