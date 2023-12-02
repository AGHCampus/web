import {
  Create, DateField,
  Edit,
  List,
  required,
  Show,
  SimpleForm,
  SimpleList,
  SimpleShowLayout,
  TextField,
  TextInput,
  useRecordContext
} from "react-admin";

export const InformationList = () => (
  <List title="Ogłoszenia">
    <SimpleList
      primaryText={(record) => record.titleTranslations.pl}
      linkType="show"
      tertiaryText={(record) =>
        `${new Date(record.timestamp).toLocaleDateString()}`
      }
    />
  </List>
);

const InformationTitle = () => {
  const record = useRecordContext();
  return (
    <span>Ogłoszenie {record ? `"${record.titleTranslations.pl}"` : ""}</span>
  );
};

export const InformationShow = () => (
  <Show title={<InformationTitle />}>
    <SimpleShowLayout>
      <TextField label="Tytuł PL" source="titleTranslations.pl" />
      <TextField label="Tytuł EN" source="titleTranslations.en" />
      <TextField label="Treść PL" source="contentTranslations.pl" />
      <TextField label="Treść EN" source="contentTranslations.en" />
      <DateField label="Data utworzenia" source="timestamp" showTime={true} />
    </SimpleShowLayout>
  </Show>
);

export const InformationEdit = () => (
  <Edit title={<InformationTitle />}>
    <SimpleForm>
      <TextInput
        label="Tytuł PL"
        name="titleTranslations.pl"
        source="titleTranslations.pl"
        multiline
        validate={required()}
      />
      <TextInput
        label="Tytuł EN"
        name="titleTranslations.en"
        source="titleTranslations.en"
        multiline
        validate={required()}
      />
      <TextInput
        label="Treść PL"
        name="contentTranslations.pl"
        source="contentTranslations.pl"
        multiline
        validate={required()}
      />
      <TextInput
        label="Treść EN"
        name="contentTranslations.en"
        source="contentTranslations.en"
        multiline
        validate={required()}
      />
    </SimpleForm>
  </Edit>
);

export const InformationCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput
        label="Tytuł PL"
        name="titleTranslations.pl"
        source="titleTranslations.pl"
        multiline
        validate={required()}
      />
      <TextInput
        label="Tytuł EN"
        name="titleTranslations.en"
        source="titleTranslations.en"
        multiline
        validate={required()}
      />
      <TextInput
        label="Treść PL"
        name="contentTranslations.pl"
        source="contentTranslations.pl"
        multiline
        validate={required()}
      />
      <TextInput
        label="Treść EN"
        name="contentTranslations.en"
        source="contentTranslations.en"
        multiline
        validate={required()}
      />
    </SimpleForm>
  </Create>
);
