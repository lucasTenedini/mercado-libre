import React from 'react';

import { Helmet } from 'react-helmet';

interface Props {
    description: string;
}

const SeoMetaTags: React.FC<Props> = ({ description }) => {
    const title = "Mercado Libre app"

    return (
        <Helmet>
            <title>{title}</title>
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
};

export default SeoMetaTags;
