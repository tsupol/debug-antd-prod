/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */

if (process.env.BROWSER) {
  throw new Error('Do not import `config.js` from inside the client-side code.')
}

const dev = process.env.NODE_ENV ? process.env.NODE_ENV.trim() !== 'production' : false
const isServer = process.env.SERVER == true
const env = process.envClient || process.env

const local = {
  apiServer: 'http://localhost',
  port: 4000,
}

const remote = {
  apiServer: 'https://somewhere.com',
  port: 4000,
}

module.exports = {
  api: {
    clientUrl: env.API_CLIENT_URL || '',
    serverUrl: isServer ? remote.apiServer : local.apiServer,
    port: isServer ? remote.port : local.port,
  }
}
