import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const About = () => {
    const codeString = `class Emilio Imam {
  constructor() {
    this.name = 'Emilio Imam'
    this.dayOfBirthTimestamp = 970270200 // September 29, 2000
    this.email = 'emilio.imam09@gmail.com'
  }
  workExperience() {
    return [
      { '2025-2025' : 'Frontend Development Intern - iTransition (Remote)' }
    ]
  }
  education() {
    return [
      { '2022-2025': 'Seneca Polytechnic - Toronto, Canada - Diploma, Computer Programming (IT)' }
    ]
  }
  skills() {
    return [ 'HTML/CSS/JS', 'Node.js', 'Bootstrap/Tailwind', 'npm/yarn/pnpm', 'Docker', 'Web-extensions', 'PHP', 'MySQL/MongoDB', 'Wordpress',
    'Photoshop', 'Illustrator', 'After Effects', 'Premiere', 'Motion design', 'UX/UI', 'C++', 'Unity', 'Git/GitHub', 'React' ] ]
  }
}`;
    return (
        <div className='codeblock'>
            <SyntaxHighlighter language="javascript" style={atelierDuneDark} showLineNumbers={true}>
            {codeString}
            </SyntaxHighlighter>
        </div>
    );
}

