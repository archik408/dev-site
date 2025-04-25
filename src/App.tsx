import React, { useState } from 'react';
import { Github, Linkedin, NotebookText, Mail, Code2, Boxes, Trophy, BookOpen, Globe2, Palette, Users, Award } from 'lucide-react';
import avatarUrl from './avatar.jpeg';
import bgUrl from './background.avif';
import scratchUrl from './scratch.jpg';
import book1Url from './book1.jpg';
import book2Url from './book2.jpg';
import illustration1Url from './artur-basak-vaukalak.jpg';
import illustration2Url from './artur-basak-rusalim.jpg';
import {translations} from "./translations.ts";

const genBgPlaceholer = (hash: string) => ({
  backgroundImage: `url(data:image/jpeg;base64,${hash})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
})

function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Globe2 className="w-4 h-4" />
          {lang === 'en' ? 'RU' : 'EN'}
        </button>
      </div>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            style={genBgPlaceholer('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')}
            src={`./${bgUrl}`}
            role="presentation"
            aria-hidden="true"
            alt="Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="mb-8 flex justify-center">
            <img
              src={`./${avatarUrl}`}
              alt="Artur Basak"
              style={genBgPlaceholer('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')}
              className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Artur Basak</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">{t.role}</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/archik408" target="_blank" className="text-gray-300 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/arturbasak" target="_blank" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.smashingmagazine.com/author/artur-basak" target="_blank" className="text-gray-300 hover:text-white transition-colors">
              <NotebookText className="w-6 h-6" />
            </a>
            <a href="mailto:artur.basak.devingrodno@gmail.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">{t.about}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{__html: t.aboutText}} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <Code2 className="w-8 h-8 mb-2 text-blue-400" />
                <h3 className="font-semibold mb-1">{t.cleanCode}</h3>
                <p className="text-sm text-gray-400">{t.cleanCodeDesc}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <Boxes className="w-8 h-8 mb-2 text-green-400" />
                <h3 className="font-semibold mb-1">{t.components}</h3>
                <p className="text-sm text-gray-400">{t.componentsDesc}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <Trophy className="w-8 h-8 mb-2 text-yellow-400" />
                <h3 className="font-semibold mb-1">{t.bestPractices}</h3>
                <p className="text-sm text-gray-400">{t.bestPracticesDesc}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <BookOpen className="w-8 h-8 mb-2 text-purple-400" />
                <h3 className="font-semibold mb-1">{t.learning}</h3>
                <p className="text-sm text-gray-400">{t.learningDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">{t.skills}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'HTML',
              'CSS',
              'JavaScript',
              'React',
              'TypeScript',
              'Next.js',
              'Node.js',
              'SQL',
              'NoSQL',
              'Accessibility (WCAG)',
              'QA/Testing',
              'UI/UX',
              'Web Components',
              'PWA',
            ].map((skill) => (
              <div key={skill} className="bg-blue-800 p-4 rounded-lg">
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">{t.experience}</h2>
          <div className="space-y-8">
            {t.experiences.map((experience) => (
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{experience.role}</h3>
                      <p className="text-blue-400">{experience.company}</p>
                    </div>
                    <span className="text-gray-400">{experience.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {experience.listDescription.map((description) => (
                        <li>{description}</li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">{t.certificates}</h2>
          <div className="grid gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center gap-4">
                <Award className="w-8 h-8 text-yellow-400" />
                <div>
                  <h3 className="text-xl font-semibold">{t.diploma}</h3>
                  <p className="text-gray-400">{t.college}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center gap-4">
                <Award className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold">Professional Front-End Web Developer</h3>
                  <p className="text-gray-400">W3Cx • 2019</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center gap-4">
                <Award className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="text-xl font-semibold">Foundation of UX Design</h3>
                  <p className="text-gray-400">Google • 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Activities Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">{t.funActivities}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <a href="https://arturbasak.artstation.com" target="_blank" className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <Palette className="w-8 h-8 text-pink-400"/>
                <h3 className="text-xl font-semibold">{t.artTitle}</h3>
              </div>
              <p className="text-gray-300">{t.artDesc}</p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <img
                    src={`./${book1Url}`}
                    alt="Cover of book with author illustrations"
                    className="rounded-lg"
                />
                <img
                    src={`./${book2Url}`}
                    alt="Cover of book with author illustrations"
                    className="rounded-lg"
                />
                <img
                    src={`./${illustration1Url}`}
                    alt="Author illustration example"
                    className="rounded-lg"
                />
                <img
                    src={`./${illustration2Url}`}
                    alt="Author illustration example"
                    className="rounded-lg"
                />
              </div>
            </a>
            <a href="https://www.instagram.com/grodno.scratch" target="_blank" className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-8 h-8 text-orange-400" />
                <h3 className="text-xl font-semibold">{t.kidsTitle}</h3>
              </div>
              <p className="text-gray-300">{t.kidsDesc}</p>
              <img
                  src={`./${scratchUrl}`}
                  alt="Kids Programming"
                  className="mt-4 rounded-lg w-full"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-800/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">{t.contact}</h2>
          <p className="text-gray-300 mb-8">{t.contactText}</p>
          <a
            href="mailto:artur.basak.devingrodno@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors"
          >
            {t.contactButton} <Mail className="w-4 h-4 ml-2" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400">
        <p>{t.copyright}</p>
      </footer>
    </div>
  );
}

export default App;
