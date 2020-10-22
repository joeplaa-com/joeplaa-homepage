import redirect from './handler';

function callbackCreator(done, result) {
    return function callback(_, response) {
        try {
            expect(response).toMatchObject(result);
            done();
        } catch (error) {
            done(error);
        }
    };
}

// Matching redirect from '*.joeplaa.com' => 'blog.joeplaa.com'
const event1 = {
    "Records": [
        {
            cf: {
                request: {
                    headers: {
                        host: {
                            value: 'blog.joeplaa.com'
                        }
                    },
                    uri: "/the-news"
                }
            }
        }
    ]
};
const result1 = {
    status: '301',
    statusDescription: `Moved permanently`,
    headers: {
        "location": [{
            "key": "Location",
            "value": `https://blog.joeplaa.com/the-news/index.html`
        }],
        'cache-control': [{
            key: 'Cache-Control',
            value: "max-age=86.400"
        }],
        "access-control-allow-origin": [{
            "key": "Access-Control-Allow-Origin",
            "value": `https://*.joeplaa.com`
        }],
    }
}
test('matching redirect', (done) => {
    redirect.handler(event1, null, callbackCreator(done, result1));
});

// Non-matching redirect '*.joeplaa.com' => '*.joeplaa.com'
const event2a = {
    "Records": [
        {
            cf: {
                request: {
                    headers: {
                        host: {
                            value: 'www.joeplaa.com'
                        }
                    },
                    uri: "/home"
                }
            }
        }
    ]
};
const result2a = {
    headers: {
        host: {
            value: 'www.joeplaa.com'
        }
    },
    uri: "/home/index.html"
}
const event2b = {
    "Records": [
        {
            cf: {
                request: {
                    headers: {
                        host: {
                            value: 'www.joeplaa.com'
                        }
                    },
                    uri: "/"
                }
            }
        }
    ]
};
const result2b = {
    headers: {
        host: {
            value: 'www.joeplaa.com'
        }
    },
    uri: "/index.html"
}
test('non-matching redirect', (done) => {
    redirect.handler(event2a, null, callbackCreator(done, result2a));
    redirect.handler(event2b, null, callbackCreator(done, result2b));
});

