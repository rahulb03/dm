 /* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col } from 'react-bootstrap';
import Image from 'next/image';

function ProjectFullwidthItem({ project }) {
    
    const imagePath = `/images/projects/${project?.slug}/${project?.image}`;

    return (
        <Col lg={{ span: 4 }} md={{ span: 6 }}>
             <div className="project-item">
                     <Image src={imagePath} alt={project?.title} 
                       height={501}
                       width={366}
                    />
             </div>
         </Col>
    );
}

ProjectFullwidthItem.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectFullwidthItem;


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


// import PropTypes from 'prop-types';
// import { Col } from 'react-bootstrap';
// import Image from 'next/image';
// import fullwidth    from './fullwidth-itemimage.js';

// function ProjectFullwidthItem({ project }) {
//     return (
//         <Col lg={{ span: 4 }} md={{ span: 6 }}>
//             <div className="project-item">
//                 {fullwidth.map((src, index) => (
//                     <div key={index}>
//                         <Image src={src} alt={`Image ${index}`} height={501} width={366} />
//                     </div>
//                 ))}
//             </div>
//         </Col>
//     );
// }

// // ProjectFullwidthItem.propTypes = {
// //     project: PropTypes.instanceOf(Object).isRequired,
// // };

// export default ProjectFullwidthItem;
