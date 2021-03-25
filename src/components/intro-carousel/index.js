import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import styled from 'styled-components';
/* images */
import ImageIntro01 from '../../assets/images/intro/img-test-1.jpg';
import ImageIntro02 from '../../assets/images/intro/img-test-2.jpg';
import ImageIntro03 from '../../assets/images/intro/img-test-3.jpg';


const items = [
   {
    src:(ImageIntro01),
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
   },
   {
    src:(ImageIntro02),
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
   },
   {
    src:(ImageIntro03),
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
   }
];

const IntroCarousel= () => (
  <SUncontrolledCarousel items={items} />
);

export default IntroCarousel;

const SUncontrolledCarousel = styled(UncontrolledCarousel)`
   padding:20px;
`

