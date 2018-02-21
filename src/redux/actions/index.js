export const dispatchImportType = 'IMPORT';
export const dispatchReadType = 'READ';

export const dispatchImport = result => ({
  type: dispatchImportType,
  payload: result,
});

export const dispatchRead = () => ({
  type: dispatchReadType,
});
