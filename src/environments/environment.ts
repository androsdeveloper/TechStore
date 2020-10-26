// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_Api: 'http://platzi-store.herokuapp.com',
  url_products : 'products',
  firebaseConfig : {
    apiKey: 'AIzaSyCxYKW7Z5MFZ5sYYj00Qjd99c_UY0y-XHg',
    authDomain: 'platzi-store-dae78.firebaseapp.com',
    databaseURL: 'https://platzi-store-dae78.firebaseio.com',
    projectId: 'platzi-store-dae78',
    storageBucket: 'platzi-store-dae78.appspot.com',
    messagingSenderId: '131594235890',
    appId: '1:131594235890:web:04525cca99087f3cd4c56b'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
