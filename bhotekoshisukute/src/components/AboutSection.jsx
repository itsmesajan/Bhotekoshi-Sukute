import React from 'react'
import useFetchApi from '../hooks/useFetchApi';

const AboutSection = () => {

    const {data: about, loading, error} = useFetchApi("https://www.bhotekoshibeachresort.com/api/api_homepageArticle.php", "aboutSection");

    if (loading) return <></>;
    if (error) return <div>{error}</div>;
    if (!about) return <></>;

    const { description } = about;
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100">
            <main dangerouslySetInnerHTML={{ __html: description }} />
        </section>
  )
}

export default AboutSection
