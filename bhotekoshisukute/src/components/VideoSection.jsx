import React from 'react'
import videoSource from '../assets/rafting.mp4';

const VideoSection = () => {
  return (
    <section className="">
            <div className="flex justify-center">
                <div className="w-full overflow-hidden shadow-lg">
                    <video className="w-full h-auto" autoPlay muted loop playsInline controls>
                        {/* Use the imported variable as the src */}
                        <source src={videoSource} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
  )
}

export default VideoSection
