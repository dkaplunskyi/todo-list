import navbar from './navbar';

export default function aside() {
    const aside = document.createElement('aside');
    aside.append(navbar());

    return aside;
}