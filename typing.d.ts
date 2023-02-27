
export interface MenuItem  {
  label: string;
  url: string;
}
  
export interface HeroInfos  {
  icon: ReactElement,
  title: string, 
  description: string,
}


export interface OurVisionObj  {
  imgUrl: string,
  imgDescription: string, 
  cardTitle: string,
  cardDescription: string,
  cardIcon: ReactElement,
}

export interface MarketingSolutionsObj  {
  title: string,
  value: number,
}

export interface CaseObj  {
  caseImg: string,
  caseAlt: string,
  caseDescription: string,
}

export interface Percentage  {
  percentage: number,
}

export interface ButtonProps {
  btnName: string;
  btnStyle: string;
}

export interface TitleProps {
  title: string;
  titleStyle:string ;
}
  
  