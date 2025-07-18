import { info } from '../data/Contact';

export default function Contact() {

    return (
        <main className="min-w-[300px] max-w-[700px] lg:w-[700px] h-full">
            <div className="flex flex-row gap-[50px] ">
                {/* Borde  */}
                <div className="w-[1px] min-w-[1px] max-w-[1px] bg-[#CCCCCC]" />

                {/* Contenido */}
                <div className="flex flex-col gap-[50px] w-full ">
                    <div className="flex gap-[50px] w-full  items-start">
                        <a href='https://www.linkedin.com/in/anthony-adasme-correa/' target="_blank" rel="noopener noreferrer"
                            className='link'>{info[1]}</a>
                        <a href='https://github.com/AnthonyBAC' target="_blank" rel="noopener noreferrer"
                            className='link'>{info[2]}</a>
                        <a href='../public/CV_INFORMATICA_ANTHONY-ADASME.pdf' download="CV_INFORMATICA_ANTHONY-ADASME.pdf" target="_blank" rel="noopener noreferrer"
                            className='link'>{info[3]}</a>
                    </div>
                </div>
            </div>
        </main>
    );
}
