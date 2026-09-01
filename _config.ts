import lume from "lume/mod.ts";

const site = lume({
    prettyUrls: false,
});

site.add("/style.css");
export default site;
