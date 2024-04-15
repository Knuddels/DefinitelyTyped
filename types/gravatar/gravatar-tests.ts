import gravatar = require("gravatar");

gravatar.url("email@example.com");
gravatar.url("email@example.com", { s: "200", r: "pg", d: "404" });
gravatar.url("email@example.com", { size: "200", r: "pg", d: "404" });
gravatar.url("email@example.com", { s: "200" });
gravatar.url("email@example.com", { default: "404" });
gravatar.url("email@example.com", { s: "200", rating: "pg", d: "404" }, true);
gravatar.url("email@example.com", { s: "200", r: "pg", default: "404" }, false);
gravatar.url("email@example.com", { d: "404" }, false);
gravatar.url("email@example.com", { forcedefault: "y" }, false);
gravatar.url("email@example.com", { f: "y" });
gravatar.url("email@example.com", { protocol: "https" });
gravatar.url("email@example.com", { format: "xml" });
gravatar.profile_url("email@example.com");
gravatar.profile_url("email@example.com", {});
gravatar.profile_url("email@example.com", {}, true);
gravatar.profile_url("emerleite@gmail.com", { protocol: "http" });
gravatar.profile_url("emerleite@gmail.com", { protocol: "https" });
gravatar.profile_url("emerleite@gmail.com", { protocol: false });
gravatar.profile_url("emerleite@gmail.com", { protocol: true });
gravatar.profile_url("emerleite@gmail.com", { protocol: "http", format: "qr" });
gravatar.url("email@example.com", { cdn: "http://cdn-gravatar.wuweixing.com" });
gravatar.profile_url("email@example.com", { cdn: "http://cdn-gravatar.wuweixing.com" });
