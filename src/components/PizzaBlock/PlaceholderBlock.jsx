import React from 'react';
import ContentLoader from 'react-content-loader';

const PlaceholderBlock = () => {
    return (
        <ContentLoader
            className='pizza-block'
            speed={2}
            width={260}
            height={460}
            viewBox="0 0 260 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="128" cy="104" r="100" />
            <rect x="27" y="293" rx="0" ry="0" width="213" height="0" />
            <rect x="0" y="272" rx="0" ry="0" width="260" height="60" />
            <rect x="2" y="345" rx="0" ry="0" width="80" height="31" />
            <rect x="152" y="640" rx="0" ry="0" width="106" height="31" />
            <rect x="56" y="227" rx="0" ry="0" width="146" height="32" />
            <rect x="181" y="345" rx="0" ry="0" width="80" height="31" />
        </ContentLoader>
    );
};

export default PlaceholderBlock;