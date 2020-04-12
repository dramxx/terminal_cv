export const availableCommands = {
  help: '--h',
  list: 'ls',
  quit: '--q',
  catAbout: 'cat+1_about.txt',
  catHistory: 'cat+2_work_history.txt',
  catSkills: 'cat+3_skills.txt',
  catRecentProjects: 'cat+4_recent_projects.txt',
  download: '--d+drahosMadar_cv.pdf',
};

export const directoryList = [
  '1_about.txt',
  '2_work_history.txt',
  '3_skills.txt',
  '4_recent_projects.txt',
  'drahosMadar_cv.pdf',
];

export const helpText = [
    'ls Lists content of directory',
    'cat Takes .txt document as parameter and prints its content on a screen, eg: cat 1_about.txt',
    '--d Takes .pdf document as parameter and downloads it on users hdd, eg: --d drahosMadar_cv.pdf',
    '--q Exit terminal',
];

export const catTexts = {
  about: 'About placeholder.',
  history: 'Work history placeholder.',
  skills: 'Skills placeholder.',
  projects: 'Recent projects placeholder.'
}
