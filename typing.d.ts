
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
export interface LatesNewsObj {
  postImage: string,
  postAlt: string,
  postTitle: string,
  postDate: ReactElement,
}
export interface OurTeamObj{
  imgUrl: string
  imgDescription: string
  cardTitle: string
  cardDescription:  string
  cardIcon: [
     {
        facebook: ReactElement,
        twitter: ReactElement,
        linkedIn: ReactElement,
     },
  ],
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
  
  
export interface WorkingProcess{
  icon: ReactElement;
  title: string;
  description: string;
  color: string,
  position: string,
}

    
