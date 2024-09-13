import Image from 'next/image';
import HalfBody from './halfbody.js'

const PHeader = ({imgsrc , imgalt , number , title , service , client , background }) => {
  return (
    <div className="section-1">
      <div> 
        {/* Section Margin 68% */}
        <div>
          {/* Container for image and Title wrapper */}
          <Image src={imgsrc} alt={imgalt} />

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
