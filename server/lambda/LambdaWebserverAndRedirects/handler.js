/* Public domain project by Cloud Under (https://cloudunder.io).
 * Repository: https://github.com/CloudUnder/lambda-edge-nice-urls
 */

/* For event object example: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html
 * Or see the copy below
 */

const config = {
    appendToDirs: 'index.html',
    removeTrailingSlash: false
};

const regexSuffixless = /\/[^/.]+$/; // e.g. "/some/page" but not "/", "/some/" or "/some.jpg"
const regexTrailingSlash = /.+\/$/; // e.g. "/some/" or "/some/page/" but not root "/"

const redirects = [
    '/the-news',
    '/our-emotional-seesaw',
    '/whiteness-defined',
    '/low-salt-intake-is-bad',
    '/newspeak',
    '/rule-2-treat-yourself-like-someone-you-are-responsible-for-helping',
    '/not-a-political-journey-too',
    '/living-under-autism',
    '/im-on-edge',
    '/document',
    '/what-i-learned-from-migrating-our-websites',
    '/tearing-down-the-house',
    '/lessons-from-my-running-failure',
    '/learning-to-code',
    '/do-i-have-a-sugar-intolerance',
    '/customer-service',
    '/keep-asking-why-a-letter-to-my-niece-and-nephew',
    '/intermittent-fasting',
    '/my-priorities',
    '/my-favorite-quotes',
    '/whats-the-right-diet-for-me',
    '/the-struggle-for-perfection',
    '/the-ultimate-why-improve-things',
    '/what-i-learned-this-year',
    '/my-goals-a-little-more-context-part-2',
    '/my-goals-a-little-more-context-part-1',
    '/joeps-goals',
    '/running-for-me',
    '/why-do-most-parties-start-around-midnight',
    '/please-teach-me',
    '/i-love-the-beach'
]

exports.handler = function handler (event, context, callback) {
    const { request } = event.Records[0].cf;
    const { uri } = request;
    const { appendToDirs, removeTrailingSlash } = config;

    // Check for blog redirects first
    if (redirects.includes(request.headers.host[0].value)) {
        const response = {
            status: '301',
            statusDescription: `Redirecting to blog domain`,
            headers: {
                location: [{
                    key: 'Location',
                    value: `https://blog.joeplaa.com${request.uri}`
                }]
            }
        };
        callback(null, response);
        return;
    }

    // Append "index.html" to origin request
    if (appendToDirs && uri.match(regexTrailingSlash)) {
        request.uri = uri + appendToDirs;
        callback(null, request);
        return;
    }

    // Append "/index.html" to origin request
    if (appendToDirs && uri.match(regexSuffixless)) {
        request.uri = uri + '/' + appendToDirs;
        callback(null, request);
        return;
    }

    // Redirect (301) non-root requests ending in "/" to URI without trailing slash
    if (removeTrailingSlash && uri.match(regexTrailingSlash)) {
        const response = {
            // body: '',
            // bodyEncoding: 'text',
            headers: {
                location: [{
                    key: 'Location',
                    value: uri.slice(0, -1)
                }]
            },
            status: '301',
            statusDescription: 'Moved Permanently'
        };
        callback(null, response);
        return;
    }

    // If nothing matches, return request unchanged
    callback(null, request);
};
