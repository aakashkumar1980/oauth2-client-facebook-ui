const axios = require('axios');
const propertiesReader = require('properties-reader');

async function loadConfigFromCloud() {
  try {
    const url = 'https://raw.githubusercontent.com/aakashkumar1980/apps-configs/main/SERVER-PORTS.json';
    const response = await axios.get(url);
    return (response.data)[0];
  } catch (error) {
    throw new Error(`Error fetching config from GitHub: ${error.message}`);
  }
}

async function updateEnvWithConfig(config) {
  const properties = propertiesReader('.env', { writer: { saveSections: true } });
  properties.set("PORT", config.OAUTH2_APPLICATION.UI_APP_PORT);
  properties.set("REACT_APP_BACKEND_SERVER_PORT", config.OAUTH2_APPLICATION.BACKEND_SERVER_PORT);
  console.log("PORT: ", properties.get("PORT"));
  console.log("PORT (Backend Server): ", properties.get("REACT_APP_BACKEND_SERVER_PORT"));

  return new Promise((resolve, reject) => {
    properties.save('.env', function (err, data) {
      if (err) {
        reject(new Error("Error saving to .env file"));
      } else {
        console.log("Saved data to .env file");
        resolve();
      }
    });
  });
}

async function main() {
  try {
    const config = await loadConfigFromCloud();
    await updateEnvWithConfig(config);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

main();
