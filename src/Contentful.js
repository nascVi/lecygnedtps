import {createClient} from 'contentful'

export default createClient({
    space: ProcessingInstruction.env.REACT_APP_API_SPACE,
    accessToken: ProcessingInstruction.env.REACT_APP_ACCESS_TOKEN
});
