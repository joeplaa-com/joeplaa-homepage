/* eslint-disable @typescript-eslint/explicit-function-return-type */
import redirect from './handler';

function callbackCreator(result) {
    return function callback(_, response) {
        try {
            expect(response).toMatchObject(result);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    };
}

// Matching redirect from '*.joeplaa.com' => 'blog.joeplaa.com'
const event1a = {
    Records: [
        {
            cf: {
                request: {
                    headers: {
                        host: {
                            value: 'blog.joeplaa.com'
                        }
                    },
                    uri: '/the-news'
                }
            }
        }
    ]
};
const result1a = {
    status: '301',
    statusDescription: 'Moved permanently',
    headers: {
        location: [{
            key: 'Location',
            value: 'https://blog.joeplaa.com/the-news'
        }],
        'cache-control': [{
            key: 'Cache-Control',
            value: 'max-age=86400'
        }]
    }
};
const event1b = {
    Records: [
        {
            cf: {
                request: {
                    headers: {
                        host: {
                            value: 'blog.joeplaa.com'
                        }
                    },
                    uri: '/the-news/'
                }
            }
        }
    ]
};
const result1b = {
    status: '301',
    statusDescription: 'Moved permanently',
    headers: {
        location: [{
            key: 'Location',
            value: 'https://blog.joeplaa.com/the-news/'
        }],
        'cache-control': [{
            key: 'Cache-Control',
            value: 'max-age=86400'
        }]
    }
};
test('matching redirect', () => {
    redirect.handler(event1a, null, callbackCreator(result1a));
    redirect.handler(event1b, null, callbackCreator(result1b));
});

// Non-matching redirect '*.joeplaa.com' => '*.joeplaa.com'
const event2a = {
    Records: [
        {
            cf: {
                request: {
                    headers: {
                        host: {
                            value: 'www.joeplaa.com'
                        }
                    },
                    uri: '/home'
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
    uri: '/home/index.html'
};
const event2b = {
    Records: [
        {
            cf: {
                request: {
                    headers: {
                        host: {
                            value: 'www.joeplaa.com'
                        }
                    },
                    uri: '/'
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
    uri: '/index.html'
};
test('non-matching redirect', () => {
    redirect.handler(event2a, null, callbackCreator(result2a));
    redirect.handler(event2b, null, callbackCreator(result2b));
});
