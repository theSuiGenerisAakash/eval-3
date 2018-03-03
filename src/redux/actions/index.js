export const dispatchImportType = 'IMPORT';

export const dispatchImport = result => ({
  type: dispatchImportType,
  payload: result,
});
