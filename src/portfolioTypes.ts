/* TypeScript Interfaces for Portfolio Configuration */

export interface IllustrationType {
    animated: boolean;
}

export interface GreetingType {
    username: string;
    title: string;
    subTitle: string;
    resumeLink: string;
    displayGreeting: boolean;
}

export interface SocialMediaLinksType {
    github?: string;
    linkedin?: string;
    gmail?: string;
    gitlab?: string;
    facebook?: string;
    medium?: string;
    stackoverflow?: string;
    instagram?: string;
    twitter?: string;
    kaggle?: string;
    display: boolean;
}

export interface SplashScreenType {
    enabled: boolean;
    animation: object;
    duration: number;
}

export interface SoftwareSkillType {
    skillName: string;
    fontAwesomeClassname: string;
}

export interface SkillsSectionType {
    title: string;
    subTitle: string;
    skills: string[];
    softwareSkills: SoftwareSkillType[];
    display: boolean;
}

export interface EducationCardType {
    schoolName: string;
    logo: string;
    subHeader: string;
    duration: string;
    desc: string;
    descBullets: string[];
}

export interface EducationInfoType {
    display: boolean;
    schools: EducationCardType[];
}

export interface TechStackExperienceType {
    Stack: string;
    progressPercentage: string;
}

export interface TechStackType {
    viewSkillBars: boolean;
    experience: TechStackExperienceType[];
    displayCodersrank: boolean;
}

export interface WorkExperienceType {
    role: string;
    company: string;
    companylogo: string;
    date: string;
    desc: string;
    descBullets: string[];
    backgroundColor?: string;
}

export interface WorkExperiencesType {
    display: boolean;
    experience: WorkExperienceType[];
}

export interface OpenSourceType {
    showGithubProfile: string;
    display: boolean;
}

export interface BigProjectType {
    image: string;
    projectName: string;
    projectDesc: string;
    footerLink: Array<{
        name: string;
        url: string;
    }>;
}

export interface BigProjectsType {
    title: string;
    subtitle: string;
    projects: BigProjectType[];
    display: boolean;
}

export interface AchievementCardType {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
    footerLink: Array<{
        name: string;
        url: string;
    }>;
}

export interface AchievementSectionType {
    title: string | React.ReactNode;
    subtitle: string;
    achievementsCards: AchievementCardType[];
    display: boolean;
}

export interface BlogType {
    url: string;
    title: string;
    description: string;
}

export interface BlogSectionType {
    title: string;
    subtitle: string;
    displayMediumBlogs: string;
    blogs: BlogType[];
    display: boolean;
}

export interface TalkType {
    title: string;
    subtitle: string;
    slides_url: string;
    event_url: string;
}

export interface TalkSectionType {
    title: string | React.ReactNode;
    subtitle: string | React.ReactNode;
    talks: TalkType[];
    display: boolean;
}

export interface PodcastSectionType {
    title: string | React.ReactNode;
    subtitle: string;
    podcast: string[];
    display: boolean;
}

export interface ResumeSectionType {
    title: string;
    subtitle: string;
    display: boolean;
}

export interface ContactInfoType {
    title: string | React.ReactNode;
    subtitle: string;
    number: string;
    email_address: string;
}

export interface TwitterDetailsType {
    userName: string;
    display: boolean;
}

export interface PortfolioConfigType {
    illustration: IllustrationType;
    greeting: GreetingType;
    socialMediaLinks: SocialMediaLinksType;
    splashScreen: SplashScreenType;
    skillsSection: SkillsSectionType;
    educationInfo: EducationInfoType;
    techStack: TechStackType;
    workExperiences: WorkExperiencesType;
    openSource: OpenSourceType;
    bigProjects: BigProjectsType;
    achievementSection: AchievementSectionType;
    blogSection: BlogSectionType;
    talkSection: TalkSectionType;
    podcastSection: PodcastSectionType;
    resumeSection: ResumeSectionType;
    contactInfo: ContactInfoType;
    twitterDetails: TwitterDetailsType;
    isHireable: boolean;
}
