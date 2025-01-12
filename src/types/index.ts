export interface Service {
  name: string;
  route: string;
  image: string;
}


export interface Service {
  name: string;
  route: string;
  image: string;
}

export interface CardStyles {
  backColor: string;
  textBackcolor: string;
  flashBackcolor: string;
}

export interface CardServicesProps {
  service: Service;
  currentStyle: CardStyles;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface AccordionItemProps {
  step: Step;
  isOpen: boolean;
  onClick: () => void;
}