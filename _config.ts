import lume from "lume/mod.ts";

const site = lume({
    prettyUrls: false,
});

site.add("/styles.css");
export default site;
