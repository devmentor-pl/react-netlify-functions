// ./functions/getPrivateRepos.js
import fetch from 'node-fetch';

const url = 'https://api.github.com/devmentor-pl/repos'

exports.handler = async () => {
    return {
        statusCode: 200,
        headers: {
          "Content-Type": "text/plain",
        },
        body: "Hello There!",
      }
    return await fetch(`${url}`, {
        headers: {
            Accept: 'application/vnd.github.v3+json',
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
        }
    })
    .then(resp => await resp.json())
    .then(data => {
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }
    })
    .catch(error => ({ statusCode: 422, body: String(error) }));;

};