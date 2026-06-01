import { portfolio } from "@/data/portfolio";
import AnimateIn from "./ui/AnimateIn";

const skills = [
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "CapCut",
  "AI Generate",
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          <AnimateIn direction="left">
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-2">About</p>
            <h2 className="text-4xl font-light text-neutral-900 mb-8">เกี่ยวกับเรา</h2>
            <p className="text-neutral-600 leading-relaxed mb-10 font-light text-lg">
              {portfolio.bio}
            </p>
            <a
              href={portfolio.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#06C755] text-white text-sm font-medium px-8 py-3.5 hover:bg-[#05b04c] transition-colors duration-300 rounded-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              แอดไลน์ติดต่องาน
            </a>
          </AnimateIn>

          <AnimateIn delay={150}>
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-6">Tools & Skills</p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <AnimateIn key={skill} delay={i * 60}>
                  <span className="inline-flex items-center gap-2 border border-neutral-200 bg-white text-neutral-700 text-sm px-5 py-2.5 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300 cursor-default">
                    {skill}
                  </span>
                </AnimateIn>
              ))}
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
