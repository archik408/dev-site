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
              'Testing',
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
