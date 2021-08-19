// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  KIE_SERVER_URL: "http://localhost:9080",
  KIE_SERVER_USERID: "kieserver",
  KIE_SERVER_PASSWORD: "kieserver",
  DM_CONTAINER_ALIAS: "",
  PAM_CONTAINER_ALIAS: "sepsisdetection-kjar-1.0.0",
  PROCESS_ID: "highmediummitigation",
  FHIR_SERVER_URL: "http://localhost:8080",
  PATIENT_VIEWER_URL: "",
  IS_OPENSHIFT: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.