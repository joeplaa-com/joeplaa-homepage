import React, { ReactElement } from 'react';
import { FaHashtag, FaServer } from 'react-icons/fa';
import { GrVirtualMachine, GrVirtualStorage } from 'react-icons/gr';
import { MdFolderShared, MdScreenShare, MdSearch } from 'react-icons/md';
import { SiAmazonaws, SiAndroid, SiBootstrap, SiCss3, SiDebian, SiDocker, SiDotNet, SiExpo, SiFacebook, SiGatsby, SiGhost, SiHtml5, SiIos, SiJavascript, SiLetsencrypt, SiLinux, SiMariadb, SiMarkdown, SiMicrosoft, SiMicrosoftsqlserver, SiMysql, SiNextDotJs, SiNginx, SiPhp, SiProxmox, SiRails, SiReact, SiRedis, SiRuby, SiSass, SiTypescript, SiUbuntu, SiWindows, SiWordpress } from 'react-icons/si';

export default function TagIcon(tag: string): ReactElement {
    switch (tag) {
        case 'Android': return <SiAndroid />;
        case 'ASP.NET': return <SiDotNet />;
        case 'AWS': return <SiAmazonaws />;
        case 'Bootstrap': return <SiBootstrap />;
        case 'CSS': return <SiCss3 />;
        case 'Debian': return <SiDebian />;
        case 'Docker': return <SiDocker />;
        case 'Expo': return <SiExpo />;
        case 'File sharing': return <MdFolderShared />;
        case 'Gatsby.js': return <SiGatsby />;
        case 'Ghost': return <SiGhost />;
        case 'Hypervisor': return <GrVirtualMachine />;
        case 'HTML': return <SiHtml5 />;
        case 'IIS': return <SiMicrosoft />;
        case 'iOS': return <SiIos />;
        case 'JavaScript': return <SiJavascript />;
        case 'Let\'s Encrypt': return <SiLetsencrypt />;
        case 'Linux': return <SiLinux />;
        case 'MariaDB': return <SiMariadb />;
        case 'Markdown': return <SiMarkdown />;
        case 'MDX': return <SiMarkdown />;
        case 'MySQL': return <SiMysql />;
        case 'Next.js': return <SiNextDotJs />;
        case 'Nginx': return <SiNginx />;
        case 'Open Graph': return <SiFacebook />;
        case 'PHP': return <SiPhp />;
        case 'Proxmox': return <SiProxmox />;
        case 'Rails': return <SiRails />;
        case 'React': return <SiReact />;
        case 'React-Native': return <SiReact />;
        case 'Redis': return <SiRedis />;
        case 'Ruby': return <SiRuby />;
        case 'SCSS': return <SiSass />;
        case 'Screen sharing': return <MdScreenShare />;
        case 'SEO': return <MdSearch />;
        case 'Server': return <FaServer />;
        case 'SQL server': return <SiMicrosoftsqlserver />;
        case 'SSL': return <SiLetsencrypt />;
        case 'Storage': return <GrVirtualStorage />;
        case 'TypeScript': return <SiTypescript />;
        case 'Ubuntu': return <SiUbuntu />;
        case 'VirtualBox': return <GrVirtualMachine />;
        case 'VM': return <GrVirtualMachine />;
        case 'Windows': return <SiWindows />;
        case 'WordPress': return <SiWordpress />;
        default: return <FaHashtag />;
    }
}
