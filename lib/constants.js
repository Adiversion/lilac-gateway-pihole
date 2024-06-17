import dotenv from "dotenv";

dotenv.config();

export const API_TOKEN = process.env.CLOUDFLARE_API_KEY;

export const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;

export const ACCOUNT_EMAIL = process.env.CLOUDFLARE_ACCOUNT_EMAIL;

export const LIST_ITEM_LIMIT = isNaN(process.env.CLOUDFLARE_LIST_ITEM_LIMIT)
  ? 300000
  : parseInt(process.env.CLOUDFLARE_LIST_ITEM_LIMIT, 10);

export const LIST_ITEM_SIZE = 1000;

export const API_HOST = "https://api.cloudflare.com/client/v4";

export const DRY_RUN = !!parseInt(process.env.DRY_RUN, 10);

export const FAST_MODE = !!parseInt(process.env.FAST_MODE, 10);

export const PROCESSING_FILENAME = {
  ALLOWLIST: "allowlist.txt",
  BLOCKLIST: "blocklist.txt",
  OLD_ALLOWLIST: "whitelist.csv",
  OLD_BLOCKLIST: "input.csv",
};

export const LIST_TYPE = {
  ALLOWLIST: "allowlist",
  BLOCKLIST: "blocklist",
};

export const USER_DEFINED_ALLOWLIST_URLS = process.env.ALLOWLIST_URLS
  // .filter(x => x) removes empty items from the URL arrays
  ? process.env.ALLOWLIST_URLS.split("\n").filter(x => x)
  : undefined;

export const USER_DEFINED_BLOCKLIST_URLS = process.env.BLOCKLIST_URLS
  ? process.env.BLOCKLIST_URLS.split("\n").filter(x => x)
  : undefined;

export const RECOMMENDED_ALLOWLIST_URLS = [
  "https://raw.githubusercontent.com/nextdns/click-tracking-domains/main/domains",
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/banks.txt",
  "https://raw.githubusercontent.com/Dogino/Discord-Phishing-URLs/main/official-domains.txt",
  "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/whitelist-referral.txt",
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/mac.txt",
  "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/whitelist.txt",
];

export const RECOMMENDED_BLOCKLIST_URLS = [
 "https://ublockorigin.github.io/uAssetsCDN/filters/filters.min.txt",
 "https://cdn.jsdelivr.net/gh/uBlockOrigin/uAssetsCDN@main/filters/badware.min.txt",
 "https://ublockorigin.github.io/uAssetsCDN/filters/privacy.min.txt",
 "https://ublockorigin.github.io/uAssetsCDN/filters/quick-fixes.min.txt",
 "https://cdn.statically.io/gh/uBlockOrigin/uAssetsCDN/main/filters/unbreak.min.txt",
 "https://ublockorigin.pages.dev/thirdparties/easylist.txt",
 "https://filters.adtidy.org/extension/ublock/filters/2_without_easylist.txt",
 "https://filters.adtidy.org/extension/ublock/filters/11.txt",
 "https://ublockorigin.pages.dev/thirdparties/easyprivacy.txt",
 "https://filters.adtidy.org/extension/ublock/filters/3.txt",
 "https://filters.adtidy.org/extension/ublock/filters/17.txt",
 "https://malware-filter.gitlab.io/urlhaus-filter/urlhaus-filter-ag-online.txt",
 "https://malware-filter.gitlab.io/phishing-filter/phishing-filter.txt",
 "https://pgl.yoyo.org/adservers/serverlist.php?hostformat=hosts&showintro=1&mimetype=plaintext",
 "https://someonewhocares.org/hosts/hosts",
 "https://ublockorigin.github.io/uAssetsCDN/thirdparties/easylist-cookies.txt",
 "https://filters.adtidy.org/extension/ublock/filters/18.txt",
 "https://cdn.statically.io/gh/uBlockOrigin/uAssetsCDN/main/filters/annoyances-cookies.txt",
 "https://cdn.jsdelivr.net/gh/uBlockOrigin/uAssetsCDN@main/thirdparties/easylist-social.txt",
 "https://filters.adtidy.org/extension/ublock/filters/4.txt",
 "https://filters.adtidy.org/extension/ublock/filters/20.txt",
 "https://filters.adtidy.org/extension/ublock/filters/21.txt",
 "https://filters.adtidy.org/extension/ublock/filters/19.txt",
 "https://filters.adtidy.org/extension/ublock/filters/22.txt",
 "https://cdn.jsdelivr.net/gh/uBlockOrigin/uAssetsCDN@main/thirdparties/easylist-annoyances.txt",
 "https://raw.githubusercontent.com/yous/YousList/master/youslist.txt",
];
