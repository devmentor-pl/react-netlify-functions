// ./functions/getPrivateRepos.js
import fetch from 'node-fetch';

const url = 'https://api.github.com/user/repos'

exports.handler = async () => {
    const data = await fetch(`${url}/?visibility=private&type=owner`, {
        headers: {
            Accept: 'application/vnd.github.v3+json',
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
        }
    }).then(resp => {
        if(resp.ok) {
            return resp.json();
        }

        return Promise.reject(resp);
    }).catch(err => console.error(err));

    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
};