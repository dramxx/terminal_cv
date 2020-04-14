export const systemPrefix = 'user@terminal: ';

export const availableCommands = {
  help: '--h',
  list: 'ls',
  quit: '--q',
  catAbout: 'cat+1_about.txt',
  catHistory: 'cat+2_work_history.txt',
  catSkills: 'cat+3_skills.txt',
  catRecentProjects: 'cat+4_recent_projects.txt',
  download: '--d+drahosMadar_cv.md',
};

export const directoryList = [
  '1_about.txt',
  '2_work_history.txt',
  '3_skills.txt',
  '4_recent_projects.txt',
  'drahosMadar_cv.md',
];

export const systemMessages = {
  boot: 'Booting system up',
  launch: 'Launching terminal v1.0',
  welcome: 'Welcome. Please, type --h to list available commands',
  shutdown: 'Shutting down',
};

export const helpText = [
  'ls Lists content of directory',
  'cat Takes .txt document as parameter and prints its content on a screen, eg: cat 1_about.txt',
  '--d Takes .pdf document as parameter and downloads it on users hdd, eg: --d drahosMadar_cv.pdf',
  '--q Exit terminal',
];

export const catTexts = {
  about:
      'A front-end developer with 4+ years commercial experience in delivering client facing projects.\n' +
      'Passionate about using modern technology and very keen to improve on existing skills and to learn new ones.\n' +
      '8+ years previous experience on various Project Management and BPM roles within IBM.',
  history: 'Work history placeholder.',
  skills: 'Skills placeholder.',
  projects: 'Recent projects placeholder.',
};
