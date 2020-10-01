import React from 'react'
import { FaHashtag } from 'react-icons/fa'
import { SiAmazonaws, SiAndroid, SiBootstrap, SiCss3, SiDotNet, SiExpo, SiHtml5, SiIos, SiJavascript, SiMariadb, SiMarkdown, SiNextDotJs, SiNginx, SiRails, SiReact, SiRedis, SiRuby, SiSass, SiUbuntu, SiWordpress } from 'react-icons/si'

export default function TagIcon(tag: string) {
    switch (tag) {
    case 'Android': return <SiAndroid />;
    case 'ASP.NET': return <SiDotNet />;
    case 'AWS': return <SiAmazonaws />;
    case 'Bootstrap': return <SiBootstrap />;
    case 'CSS': return <SiCss3 />;
    case 'Expo': return <SiExpo />;
    case 'HTML': return <SiHtml5 />;
    case 'iOS': return <SiIos />;
    case 'JavaScript': return <SiJavascript />;
    case 'MariaDB': return <SiMariadb />;
    case 'Markdown': return <SiMarkdown />;
    case 'Next.js': return <SiNextDotJs />;
    case 'Nginx': return <SiNginx />;
    case 'Rails': return <SiRails />;
    case 'React': return <SiReact />;
    case 'React-Native': return <SiReact />;
    case 'Redis': return <SiRedis />;
    case 'Ruby': return <SiRuby />;
    case 'SCSS': return <SiSass />;
    case 'Ubuntu': return <SiUbuntu />;
    case 'WordPress': return <SiWordpress />;
    default: return <FaHashtag />;
    }
}