import Image from 'next/image';
import HalfBody from './halfbody.js'
import Link from 'next/link.js';

const PHeader = ({imgsrc , imgalt , number , title , service , client , background, result }) => {
  return (
    <div className="section-1">
      <div> 
        {/* Section Margin 68% */}
        <div>
          {/* Container for image and Title wrapper */}
          <Image src={imgsrc} alt={imgalt}>
          </Image>
            <a href={result} target='_blank'>View Live Website</a>

          <div>
            {/* Title wrapper */}
            <div>#{number}</div>
            <ul>
              <li>
                <div>{title}</div>
                <div>_</div>
              </li>
              <li>Service: {service}</li>
              <li>Client Name: {client}</li>
            </ul>
          </div>
        </div>
        <HalfBody
        title={"Background"}
        body={background}
        />
      </div>
    </div>
  );
};

export default PHeader;
