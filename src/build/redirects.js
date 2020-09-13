/* eslint-disable no-undef */
module.exports = [
    {
        source: '/instagram',
        destination: '/landing',
        permanent: true,
    },
    // migrated blogposts from WordPress
    {
        source: '/the-news',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/the-news',
        permanent: true,
    },
    {
        source: '/our-emotional-seesaw',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/our-emotional-seesaw',
        permanent: true,
    },
    {
        source: '/whiteness-defined',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/whiteness-defined',
        permanent: true,
    },
    {
        source: '/low-salt-intake-is-bad',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/low-salt-intake-is-bad',
        permanent: true,
    },
    {
        source: '/newspeak',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/newspeak',
        permanent: true,
    },
    {
        source: '/rule-2-treat-yourself-like-someone-you-are-responsible-for-helping',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/rule-2-treat-yourself-like-someone-you-are-responsible-for-helping',
        permanent: true,
    },
    {
        source: '/not-a-political-journey-too',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/not-a-political-journey-too',
        permanent: true,
    },
    {
        source: '/living-under-autism',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/living-under-autism',
        permanent: true,
    },
    {
        source: '/im-on-edge',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/im-on-edge',
        permanent: true,
    },
    {
        source: '/document',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/document',
        permanent: true,
    },
    {
        source: '/what-i-learned-from-migrating-our-websites',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/what-i-learned-from-migrating-our-websites',
        permanent: true,
    },
    {
        source: '/tearing-down-the-house',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/tearing-down-the-house',
        permanent: true,
    },
    {
        source: '/lessons-from-my-running-failure',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/lessons-from-my-running-failure',
        permanent: true,
    },
    {
        source: '/learning-to-code',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/learning-to-code',
        permanent: true,
    },
    {
        source: '/do-i-have-a-sugar-intolerance',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/do-i-have-a-sugar-intolerance',
        permanent: true,
    },
    {
        source: '/customer-service',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/customer-service',
        permanent: true,
    },
    {
        source: '/keep-asking-why-a-letter-to-my-niece-and-nephew',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/keep-asking-why-a-letter-to-my-niece-and-nephew',
        permanent: true,
    },
    {
        source: '/intermittent-fasting',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/intermittent-fasting',
        permanent: true,
    },
    {
        source: '/my-priorities',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/my-priorities',
        permanent: true,
    },
    {
        source: '/my-favorite-quotes',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/my-favorite-quotes',
        permanent: true,
    },
    {
        source: '/whats-the-right-diet-for-me',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/whats-the-right-diet-for-me',
        permanent: true,
    },
    {
        source: '/the-struggle-for-perfection',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/the-struggle-for-perfection',
        permanent: true,
    },
    {
        source: '/the-ultimate-why-improve-things',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/the-ultimate-why-improve-things',
        permanent: true,
    },
    {
        source: '/what-i-learned-this-year',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/what-i-learned-this-year',
        permanent: true,
    },
    {
        source: '/my-goals-a-little-more-context-part-2',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/my-goals-a-little-more-context-part-2',
        permanent: true,
    },
    {
        source: '/my-goals-a-little-more-context-part-1',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/my-goals-a-little-more-context-part-1',
        permanent: true,
    },
    {
        source: '/joeps-goals',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/joeps-goals',
        permanent: true,
    },
    {
        source: '/running-for-me',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/running-for-me',
        permanent: true,
    },
    {
        source: '/why-do-most-parties-start-around-midnight',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/why-do-most-parties-start-around-midnight',
        permanent: true,
    },
    {
        source: '/please-teach-me',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/please-teach-me',
        permanent: true,
    },
    {
        source: '/i-love-the-beach',
        destination: process.env.NEXT_PUBLIC_BLOG_URL + '/posts/i-love-the-beach',
        permanent: true,
    },
    // migrated how-to's from WordPress
    {
        source: '/how-to-enable-samba-sharing-in-ubuntu',
        destination: '/howto/enable-samba-sharing-in-ubuntu',
        permanent: true,
    },
    {
        source: '/how-to-install-docker-on-ubuntu-18-04',
        destination: '/howto/install-docker-on-ubuntu-18-04',
        permanent: true,
    },
    {
        source: '/install-ubuntu-18-04-lts-server-in-virtualbox',
        destination: '/howto/install-ubuntu-18-04-lts-server-in-virtualbox',
        permanent: true,
    },
    {
        source: '/how-to-enable-screen-sharing-between-ubuntu-and-realvn',
        destination: '/howto/enable-screen-sharing-between-ubuntu-and-realvn',
        permanent: true,
    },
    {
        source: '/how-to-host-asp-net-websites-on-aws',
        destination: '/howto/host-asp-net-websites-on-aws',
        permanent: true,
    },
    {
        source: '/how-to-host-wordpress-in-aws-lightsail',
        destination: '/howto/host-wordpress-in-aws-lightsail',
        permanent: true,
    },
]