export const dispatchImportType = 'IMPORT';

const dispatchImport = result => ({
  type: dispatchImportType,
  payload: result,
});

export default dispatchImport;
