import { CarProps } from '@/types';
import React from 'react';

interface CarDetailprops {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = () => {
  return <div>CarDetails</div>;
};

export default CarDetails;
