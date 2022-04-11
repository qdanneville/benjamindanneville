import { createClient } from "contentful";
import { config } from "../config";

var client = createClient({
    space: config.CONTENTFUL_SPACE_ID,
    accessToken: config.CONTENTFUL_ACCESS_TOKEN,
});

export default client