
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


export interface ChildrenComp {
  children: React.ReactNode;
}
    
export interface CaseCardType{
  title: string, 
  description: string
  img: string,
  alt: string,
}

export interface infoContact{
  icon: ReactElement,
  title: string, 
  description: string,
}

export interface SliderItems{
  slider_image: string, 
  slider_alt: string,
  category: string, 
  title: string, 
  date: string, 
  posted_by: string, 
  comment : string, 
  description: string, 
}

export interface CardBlogData{
  card_image: string, 
  card_alt: string,
  category: string, 
  title: string, 
  date: string, 
  posted_by: string, 
  comment : string, 
}

export interface BlogPostData{
  post_image: string, 
  post_alt: string,
  category: string, 
  title: string, 
  date: string, 
  posted_by: string, 
  comment : string, 
  description: string, 
}

