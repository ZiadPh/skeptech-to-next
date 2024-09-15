import Image from 'next/image'


const SkepTechTV = ({ videoTitle, thumbnailSrc, videoDescription, watchUrl }) => {
    return (
      <section className="skepTechTV">
            <p className="fullBody">
                Explore the intersection of design, technology, and creativity with SkepTech TV. Our YouTube channel brings you a front-row seat to the world of innovative web design, digital trends, and cutting-edge tech solutions.
            </p>
            <div className="TV-flex">           
                    <div className="whySkepTech">
                    <h3>Why SkepTech TV?</h3>
                    <ul>
                        <li><strong>Design Tutorials:</strong> Learn essential tips and tricks to elevate your design game.</li>
                        <li><strong>Software Reviews:</strong> In-depth analysis of the latest tools, software, and innovations.</li>
                        <li><strong>Behind-the-Scenes:</strong> A peek into our creative process at Your Studio Name.</li>
                    </ul>
                    <div className="subscribe">
                        <p>Don't miss out on fresh insights, tutorials, and creative discussions. Subscribe to SkepTech TV and get the latest content straight to your feed.</p>
                        <a href="https://youtube.com/@skeptech" target="_blank" rel="noopener noreferrer" className="subscribeButton">Subscribe on YouTube</a>
                    </div>
                </div>
                <div className="featuredVideo">
                    <h3>Latest Episode:</h3>
                    <div className="videoContainer">
                        <Image
                        src={thumbnailSrc}
                        alt={`Thumbnail of ${videoTitle}`}
                        />
                        <div className="videoDescription">
                        <h4>{videoTitle}</h4>
            
                        <a href={watchUrl} target="_blank" rel="noopener noreferrer" className="watchButton">Watch Now</a>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    );
  };
  export default SkepTechTV;
