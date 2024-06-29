// // //  /* eslint-disable @next/next/no-img-element */
// // // import PropTypes from 'prop-types';
// // // import Link from 'next/link';
// // // import { Col } from 'react-bootstrap';
// // // import Image from 'next/image';

// // // function ProjectFullwidthItem({ project }) {
// // //     const imagePath = `/images/projects/${project?.slug}/${project?.image}`;

// // //     return (
// // //         <Col lg={{ span: 4 }} md={{ span: 6 }}>
// // //              <div className="project-item">
// // //                      <Image src={imagePath} alt={project?.title} 
// // //                        height={501}
// // //                        width={366}
// // //                     />
// // //              </div>
// // //          </Col>
// // //     );
// // // }

// // // ProjectFullwidthItem.propTypes = {
// // //     project: PropTypes.instanceOf(Object).isRequired,
// // // };

// // // export default ProjectFullwidthItem;


// // /* eslint-disable @next/next/no-img-element */
// // // import PropTypes from 'prop-types';
// // // import Link from 'next/link';
// // // import { Col } from 'react-bootstrap';
// // // import Image from 'next/image';
// // // import { fullwidth } from './fullwidth-itemimage.js';
// // // function ProjectFullwidthItem({  }) {
// // //     // const imagePath = `/images/projects/${project?.slug}/${project?.image}`;

// // //     return (
// // //         <Col lg={{ span: 4 }} md={{ span: 6 }}>
// // //             <div className="project-item">
          
// // //             {fullwidth.map((src, index) => (
// // //                     <div key={index}>
// // //           <Image  src={src}    alt={`Image ${index}`}   
// // //                       height={501}
// // //                        width={366} />
// // //             </div>
// // //       ))}
// // //             </div>
// // //         </Col>
// // //     );
// // // }

// // // ProjectFullwidthItem.propTypes = {
// // //     project: PropTypes.instanceOf(Object).isRequired,
// // // };

// // // export default ProjectFullwidthItem;



// // import PropTypes from 'prop-types';
// // import { Col } from 'react-bootstrap';
// // import Image from 'next/image';
// // import fullwidth from './fullwidth-itemimage.js';

// // function ProjectFullwidthItem({ project }) {
// //     return (
// //         <Col>
// //             <div className="project-item" style={{marginTop:'20px', marginLeft:'200px', marginRight:'200px', marginBottom:'30px ' ,display:'flex' , justifyContent: 'center ' , alignItems:'center'}}>
// //                 <div className="grid-container" style={{display:'grid' , gridTemplateColumns: 'repeat(3,1fr)' , gap:'20px'}}>
// //                     {fullwidth.map((src, index) => (
// //                         <div key={index} className="grid-item" style={
// //                             {display:'flex' , justifyContent: 'center ' , alignItems:'center'}
// //                         }>
// //                             <Image src={src} alt='roman' height={501} width={366} />
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>
// //         </Col>
// //     );
// // }



// // export default ProjectFullwidthItem;



// import PropTypes from 'prop-types';
// import { Col, Container, Row } from 'react-bootstrap';
// import Image from 'next/image';
// import fullwidth from './fullwidth-itemimage.js';

// function ProjectFullwidthItem({ project }) {
//     return (
//         <Container>
//             <Row>
//                 <Col className="project-item my-3">
//                     <div className="grid-container d-flex justify-content-center align-items-center">
//                         <Row className="w-100">
//                             {fullwidth.map((src, index) => (
//                                 <Col key={index} xs={12} sm={6} md={4} className="grid-item mb-3 d-flex justify-content-center align-items-center">
//                                     <Image src={src} alt='roman' height={501} width={366} className="img-fluid" />
//                                 </Col>
//                             ))}
//                         </Row>
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// ProjectFullwidthItem.propTypes = {
//     project: PropTypes.object.isRequired,
// };

// export default ProjectFullwidthItem;


import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import fullwidth from './fullwidth-itemimage.js';

function ProjectFullwidthItem({ project }) {
    return (
        <Container>
            <Row>
                <Col className="project-item my-3">
                    <div className="grid-container d-flex justify-content-center align-items-center">
                        <Row className="w-100">
                            {fullwidth.map((src, index) => (
                                <Col key={index} xs={6} sm={6} md={4} className="grid-item mb-3 d-flex justify-content-center align-items-center">
                                    <Image src={src} alt='roman' height={501} width={366} className="img-fluid" priority/>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

ProjectFullwidthItem.propTypes = {
    project: PropTypes.object.isRequired,
};

export default ProjectFullwidthItem;
