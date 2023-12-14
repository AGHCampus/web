import {
  ArrayField,
  BooleanField,
  Button,
  ChipField,
  Datagrid,
  List,
  SingleFieldList,
  TextField,
  useRecordContext,
} from "react-admin";
import {
  disableAccount,
  enableAccount,
  resetPassword,
} from "../data_provider/dataProvider";

const ChangeEnabledStatusButton = () => {
  const record = useRecordContext();
  if (record.enabled) {
    return (
      <Button label="Wyłącz konto" onClick={() => disableAccount(record.id)} />
    );
  } else {
    return (
      <Button
        label="Wyślij e-mail aktywacyjny"
        onClick={() => enableAccount(record.id)}
      />
    );
  }
};

const ResetPasswordButton = () => {
  const record = useRecordContext();
  return (
    <Button label="Zresetuj hasło" onClick={() => resetPassword(record.id)} />
  );
};

export const UserList = () => (
  <List title="Użytkownicy" pagination={false}>
    <Datagrid bulkActionButtons={false}>
      <TextField label="Adres e-mail" source="email" sortable={false} />
      <TextField label="Nazwa użytkownika" source="username" sortable={false} />
      <ArrayField label="Role" source="roles" sortable={false}>
        <SingleFieldList linkType={false}>
          <ChipField source="authority" />
        </SingleFieldList>
      </ArrayField>
      <BooleanField label="Konto aktywne" source="enabled" sortable={false} />
      <ChangeEnabledStatusButton />
      <ResetPasswordButton />
    </Datagrid>
  </List>
);
