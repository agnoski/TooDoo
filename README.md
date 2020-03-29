# TooDoo
A simply, shared, easy to use **TODO** list for teams...

## Config
Edit `src/js/config.js` with data from your Firebase account to make it works.

The following are required:
```javascript
var config = {
    apiKey: "yourApiKey",
    authDomain: "yourAuthDomain",
    databaseURL: "yourDatabaseURL",
    projectId: "yourProjectId",
    storageBucket: "yourStorageBucket",
    messagingSenderId: "yourMessagingSenderId"
  };
  ```