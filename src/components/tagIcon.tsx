import React from 'react'
import { FaHashtag } from 'react-icons/fa'
import { SiAmazonaws, SiAndroid, SiBootstrap, SiCss3, SiDotNet, SiExpo, SiGatsby, SiGhost, SiHtml5, SiIos, SiJavascript, SiMariadb, SiMarkdown, SiMysql, SiNextDotJs, SiNginx, SiRails, SiReact, SiRedis, SiRuby, SiSass, SiTypescript, SiUbuntu, SiWordpress } from 'react-icons/si'

export default function TagIcon(tag: string) {
    switch (tag) {
    case 'Android': return <SiAndroid />;
    case 'ASP.NET': return <SiDotNet />;
    case 'AWS': return <SiAmazonaws />;
    case 'Bootstrap': return <SiBootstrap />;
    case 'CSS': return <SiCss3 />;
    case 'Expo': return <SiExpo />;
    case 'Gatsby.js': return <SiGatsby />;
    case 'Ghost': return <SiGhost />;
    case 'HTML': return <SiHtml5 />;
    case 'iOS': return <SiIos />;
    case 'JavaScript': return <SiJavascript />;
    case 'MariaDB': return <SiMariadb />;
    case 'Markdown': return <SiMarkdown />;
    case 'MDX': return <SiMarkdown />;
    case 'MySQL': return <SiMysql />;
    case 'Next.js': return <SiNextDotJs />;
    case 'Nginx': return <SiNginx />;
    case 'Rails': return <SiRails />;
    case 'React': return <SiReact />;
    case 'React-Native': return <SiReact />;
    case 'Redis': return <SiRedis />;
    case 'Ruby': return <SiRuby />;
    case 'SCSS': return <SiSass />;
    case 'TypeScript': return <SiTypescript />;
    case 'Ubuntu': return <SiUbuntu />;
    case 'WordPress': return <SiWordpress />;
    default: return <FaHashtag />;
    }
}