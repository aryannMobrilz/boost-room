import type { AxiosError } from 'axios';

import { ERR_VALIDATION, ERR_INTEGRITY } from './constants';
//
// function mapBackendErrors(errorList: Record<string, any>) {
//   console.log('errorList', errorList);
//
//   const errorMap = {};
//   //
//   // errorList.forEach((item) => {
//   //   item.fields.forEach((subItem) => {
//   //     let key = subItem;
//   //     if (subItem.indexOf('working_hours') != -1) {
//   //       key = subItem.replace('working_hours', 'working_hours_transformed');
//   //       key = key.split('.');
//   //       key.pop();
//   //       key = key.join('.');
//   //     }
//   //     key = key.replace('.', '/properties/');
//   //     const fullKey = `#/properties/form/properties/${key}`;
//   //     if (!errorMap[fullKey]) errorMap[fullKey] = item.reason;
//   //   });
//   // });
//   return errorMap;
// }

export function parseErrors(errorResponse: AxiosError): string {
  const error = JSON.parse(JSON.stringify(errorResponse));

  if (error.code == ERR_VALIDATION) {
    // return mapBackendErrors(errorResponse.response?.data.errors);
  }

  if (error.code == ERR_INTEGRITY) {
    try {
      return error.data.message;
    } catch (e) {
      return 'Something unexpected happened, please check network log.';
    }
  }

  if (error.message) {
    return errorResponse.response?.data.message;
  }

  return 'Something unexpected happened, please check network log.';
}
