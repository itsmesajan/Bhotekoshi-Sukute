import React from 'react'
import useFetchApi from '../hooks/useFetchApi';

const VideoSection = () => {
    const {data: about, loading, error} = useFetchApi("https://www.bhotekoshibeachresort.com/api/api_homepageArticle.php", "aboutSection");

    if (loading) return <></>;
    if (error) return <div>{error}</div>;
    if (!about) return <></>;

  return (
    <section className="">
            <div className="flex justify-center">
                <div className="w-full overflow-hidden shadow-lg">
                    <video className="w-full h-auto" autoPlay muted loop playsInline controls>
                        {/* Use the imported variable as the src */}
                        <source src={about.video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
  )
}

export default VideoSection
