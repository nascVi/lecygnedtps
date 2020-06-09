import {createClient} from 'contentful'

export default createClient({
    space: process.env.REACT_APP_API_SPACE,
    accessToken: Process.env.REACT_APP_ACCESS_TOKEN
});
