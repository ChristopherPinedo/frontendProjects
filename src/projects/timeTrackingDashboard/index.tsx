import data from './resources/data.json';
import imageJeremy from './resources/images/image-jeremy.png';
import iconExercise from './resources/images/icon-exercise.svg';
import iconPlay from './resources/images/icon-play.svg';
import iconSelfCare from './resources/images/icon-self-care.svg';
import iconSocial from './resources/images/icon-social.svg';
import iconStudy from './resources/images/icon-study.svg';
import iconWork from './resources/images/icon-work.svg';
import { useState, useEffect } from 'react';

function MainCard({ commonColors }) {
  return (
    <div className="flex- flex-col">
      <div
        className="flex flex-col gap-8 rounded-xl bg-slate-600 p-6"
        style={{ backgroundColor: commonColors.bgSecondary }}
      >
        <div className="size-16 rounded-full border-2 border-solid border-white">
          <img src={imageJeremy} alt="Jeremy Robson profile image" />
        </div>
        <div className="flex flex-col pb-8">
          <p className="text-xs font-light">Report for</p>
          <p className="text-3xl font-normal">Jeremy Robson</p>
        </div>
      </div>
      <div className="p-4">
        <ul className="flex cursor-pointer flex-col gap-2 text-xs font-light">
          <li>Daily</li>
          <li>Weekly</li>
          <li>Monthly</li>
        </ul>
      </div>
    </div>
  );
}

function ContentCard({ content, key, commonColors }) {
  return (
    <div key={key} className="relative max-w-48 rounded-xl bg-slate-500">
      <div className="h-48 rounded-xl" style={{ backgroundColor: content.extras.color }}>
        <img src={content.extras.icon} className=" absolute right-2 top-0 h-12 object-cover" />
      </div>
      <div
        className=" absolute bottom-0 left-0 right-0 flex flex-col gap-6 rounded-xl bg-slate-600 p-6"
        style={{ backgroundColor: commonColors.bgCardDark }}
      >
        <div className="flex justify-between">
          <p className="text-lg font-normal">{content.title} </p>
          <span>...</span>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[40px]/[1] font-normal">10hrs</p>
          <p className="text-xs font-light">Last Week - 12hrs</p>
        </div>
      </div>
    </div>
  );
}

function TimeTrackingDashboard() {
  const projectColors = {
    Blue: 'hsl(246, 80%, 60%)',
    SoftOrange: 'hsl(15, 100%, 70%)',
    SoftBlue: 'hsl(195, 74%, 62%)',
    LightRed: 'hsl(348, 100%, 68%)',
    LimeGreen: 'hsl(145, 58%, 55%)',
    Violet: 'hsl(264, 64%, 52%)',
    Yellow: 'hsl(43, 84%, 65%)',
    VeryDarkBlue: 'hsl(226, 43%, 10%)',
    DarkBlue: 'hsl(235, 46%, 20%)',
    DesaturatedBlue: 'hsl(235, 45%, 61%)',
    PaleBlue: 'hsl(236, 100%, 87%)',
  };
  const projectSectionExtras = {
    Work: {
      color: projectColors.SoftOrange,
      icon: iconWork,
    },
    Play: {
      color: projectColors.SoftBlue,
      icon: iconPlay,
    },
    Study: {
      color: projectColors.LightRed,
      icon: iconStudy,
    },
    Exercise: {
      color: projectColors.LimeGreen,
      icon: iconExercise,
    },
    Social: {
      color: projectColors.Violet,
      icon: iconSocial,
    },
    'Self Care': {
      color: projectColors.Yellow,
      icon: iconSelfCare,
    },
  };
  const projectCommonColors = {
    bgMain: projectColors.VeryDarkBlue,
    bgCardDark: projectColors.DarkBlue,
    bgCardLight: projectColors.DesaturatedBlue,
    bgSecondary: projectColors.Blue,
  };
  const [view, setView] = useState('Weekly');
  const [ProjectInfo, setProjectInfo] = useState([]);

  useEffect(() => {
    let updatedInfo = [];
    Object.keys(projectSectionExtras).map((sectionExtrasKey) => {
      const value = data.find((data) => data.title === sectionExtrasKey);
      if (value !== undefined) {
        value.extras = projectSectionExtras[sectionExtrasKey];
        updatedInfo.push(value);
      }
    });
    setProjectInfo(updatedInfo);
  }, []);

  // useEffect(() => {
  //   console.log(ProjectInfo);
  // }, [ProjectInfo]);

  return (
    <main
      className=" flex min-h-screen w-full items-center justify-center font-Rubik"
      style={{ backgroundColor: projectCommonColors.bgMain }}
    >
      <section className="grid gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="max-w-48 rounded-xl sm:row-span-2" style={{ backgroundColor: projectCommonColors.bgCardDark }}>
          <MainCard commonColors={projectCommonColors} />
        </div>
        {ProjectInfo.map((item, i) => (
          <ContentCard content={item} key={i} commonColors={projectCommonColors} />
        ))}
      </section>
    </main>
  );
}

export default TimeTrackingDashboard;
