//  /* eslint-disable @next/next/no-img-element */
// import PropTypes from 'prop-types';
// import Link from 'next/link';
// import { Col } from 'react-bootstrap';
// import Image from 'next/image';

// function ProjectFullwidthItem({ project }) {
//     const imagePath = `/images/projects/${project?.slug}/${project?.image}`;

//     return (
//         <Col lg={{ span: 4 }} md={{ span: 6 }}>
//              <div className="project-item">
//                      <Image src={imagePath} alt={project?.title} 
//                        height={501}
//                        width={366}
//                     />
//              </div>
//          </Col>
//     );
// }

// ProjectFullwidthItem.propTypes = {
//     project: PropTypes.instanceOf(Object).isRequired,
// };

// export default ProjectFullwidthItem;


/* eslint-disable @next/next/no-img-element */
// import PropTypes from 'prop-types';
// import Link from 'next/link';
// import { Col } from 'react-bootstrap';
// import Image from 'next/image';
// import { fullwidth } from './fullwidth-itemimage.js';
// function ProjectFullwidthItem({  }) {
//     // const imagePath = `/images/projects/${project?.slug}/${project?.image}`;

//     return (
//         <Col lg={{ span: 4 }} md={{ span: 6 }}>
//             <div className="project-item">
          
//             {fullwidth.map((src, index) => (
//                     <div key={index}>
//           <Image  src={src}    alt={`Image ${index}`}   
//                       height={501}
//                        width={366} />
//             </div>
//       ))}
//             </div>
//         </Col>
//     );
// }

// ProjectFullwidthItem.propTypes = {
//     project: PropTypes.instanceOf(Object).isRequired,
// };

// export default ProjectFullwidthItem;



import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import Image from 'next/image';
import fullwidth from './fullwidth-itemimage.js';

function ProjectFullwidthItem({ project }) {
    return (
        <Col>
            <div className="project-item" style={{marginTop:'20px', marginLeft:'200px', marginRight:'200px', marginBottom:'30px ' ,display:'flex' , justifyContent: 'center ' , alignItems:'center'}}>
                <div className="grid-container" style={{display:'grid' , gridTemplateColumns: 'repeat(3,1fr)' , gap:'20px'}}>
                    {fullwidth.map((src, index) => (
                        <div key={index} className="grid-item" style={
                            {display:'flex' , justifyContent: 'center ' , alignItems:'center'}
                        }>
                            <Image src={src} alt='roman' height={501} width={366} />
                        </div>
                    ))}
                </div>
            </div>
        </Col>
    );
}



export default ProjectFullwidthItem;




// pages/index.js

// import React from 'react';
// import fullwidth from './fullwidth-itemimage';
// import Image from 'next/image';
// import { Col } from 'react-bootstrap';
// const ProjectFullwidthItem = () => {
//   return (
//     <div>
//       <h1>Image Gallery</h1>
//       <Col lg={{ span: 4 }} md={{ span: 6 }}>
//             <div className="project-item">
//         {fullwidth.map((src, index) => (
//           <div key={index} >
//             <Image src={src} alt={`Image ${index + 1}`} width="200" height="200" />
//           </div>
//         ))}

//          </div>
//       </Col>
//     </div>
//   );
// };

// export default ProjectFullwidthItem;
