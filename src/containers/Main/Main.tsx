import { useEffect, useState } from "react";
import Header from "../../components/Header";
// import Greeting from "./greeting/Greeting";
// import Skills from "./skills/Skills";
// import StackProgress from "./skillProgress/skillProgress";
// import WorkExperience from "./workExperience/WorkExperience";
// import Projects from "./projects/Projects";
// import StartupProject from "./StartupProjects/StartupProject";
// import Achievement from "./achievement/Achievement";
// import Blogs from "./blogs/Blogs";
import Footer from "../../components/Footer";
// import Talks from "./talks/Talks";
// import Podcast from "./podcast/Podcast";
import Education from "../Education";
import ScrollToTopButton from "../TopButton";
// import Twitter from "./twitter-embed/twitter";
// import Profile from "./profile/Profile";
import { StyleProvider } from "../../contexts/StyleContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { splashScreen } from "../../portfolio";
import SplashScreen from "../SplashScreen/SplashScreen";
import styles from "./Main.module.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? styles.dark_mode : ''}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            {/* <Greeting />
            <Skills />
            <StackProgress />*/}
            <Education />
            {/*<WorkExperience />
            <Projects />
            <StartupProject />
            <Achievement />
            <Blogs /> */}
            {/* <Talks /> */}
            {/* <Twitter /> */}
            {/* <Podcast /> */}
            {/* <Profile /> */}
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
