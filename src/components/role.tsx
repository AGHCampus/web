import { List, SimpleList } from "react-admin";

export const RoleList = () => (
  <List title="Role" pagination={false}>
    <SimpleList primaryText={(record) => record.authority} />
  </List>
);
