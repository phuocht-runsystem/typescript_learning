const userName = 'Phuoc';
const greeeting = 'Hi, I am ' + userName + '.';
const greeeting_2 = `Hi, I am ${userName}.`;
console.log(greeeting);
console.log(greeeting_2);

type ReadPermissions = 'no-read' | 'read';
type WritePermissions = 'no-write' | 'write';
type FilePermissions =
  | 'no-read-write'
  | 'read-no-write'
  | 'no-read-no-write'
  | 'read-write';
type BestFilePermissions = `${ReadPermissions}-${WritePermissions}`;

type DataFile = {
  data: string;
  permissions: FilePermissions;
};
type DataFileEventsNames = `${keyof DataFile}Changed`; //type DataFileEventsNames = "dataChanged" | "permissionsChanged"
type DataFileEvents = {
  [Key in DataFileEventsNames]: () => void;
};
